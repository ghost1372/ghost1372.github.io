---
title: SpectrumVisualizer 
---

Lightweight real-time audio visualizer capturing system or mic input, displaying dynamic waveforms and spectrum effects.

# Property

|Name|
|-|
|TitleFontWeight|
|TitleHorizontalAlignment|
|TitleWordWrapping|
|TitleTrimmingSign|
|TitleTrimmingGranularity|
|ArtistFontWeight|
|ArtistHorizontalAlignment|
|ArtistWordWrapping|
|ArtistTrimmingSign|
|ArtistTrimmingGranularity|
|ShowAlbumArt|
|ShowTitle|
|ShowArtist|
|SpectrumType|
|RotationSpeed|
|CoverOpacity|
|SpectrumOpacity|
|FontOpacity|
|SmoothingFactor|
|Sensitivity|
|ColorType|
|Analyzer|

# Methods

|Name|
|-|
|InitializeSMTCAsync|
|GetCurrentMediaInfo|
|Dispose|

# Example

First you need to implement `ISpectrumAnalyzer` and define your analyzer, you can use `NAudio` library which does not support AOT or `AudioGraph` which does support AOT to analyze audio files.

## AudioGraphSpectrumAnalyzer
```cs
public sealed partial class AudioGraphSpectrumAnalyzer : ISpectrumAnalyzer
{
    public event Action<float[]> SpectrumDataUpdated;

    private AudioGraph _graph;
    private AudioDeviceInputNode _input;
    private AudioFrameOutputNode _output;

    private const int FftLength = 2048;

    private readonly float[] _left = new float[FftLength];
    private readonly float[] _right = new float[FftLength];
    private readonly Complex[] _fftL = new Complex[FftLength];
    private readonly Complex[] _fftR = new Complex[FftLength];

    private float[] _spectrum;
    private double[] _window;

    private int _sampleRate;
    private bool _running;

    public void Start()
    {
        _ = StartInternalAsync();
    }

    public void Stop()
    {
        _running = false;
        _graph?.Stop();
    }

    public void Dispose()
    {
        Stop();
        _graph?.Dispose();
    }

    [GeneratedComInterface]
    [Guid("5B0D3235-4DBA-4D44-865E-8F1D0E4FD04D")]
    public unsafe partial interface IMemoryBufferByteAccess
    {
        void GetBuffer(out byte* buffer, out uint capacity);
    }


    private async Task StartInternalAsync()
    {
        if (_running)
            return;

        _window = new double[FftLength];
        for (int i = 0; i < FftLength; i++)
            _window[i] = 0.54 - 0.46 * Math.Cos(2 * Math.PI * i / (FftLength - 1));

        var settings = new AudioGraphSettings(AudioRenderCategory.Media)
        {
            QuantumSizeSelectionMode = QuantumSizeSelectionMode.ClosestToDesired,
            DesiredSamplesPerQuantum = 1024
        };

        var graphResult = await AudioGraph.CreateAsync(settings);
        if (graphResult.Status != AudioGraphCreationStatus.Success)
            return;

        _graph = graphResult.Graph;
        _sampleRate = (int)_graph.EncodingProperties.SampleRate;

        var inputResult = await _graph.CreateDeviceInputNodeAsync(
            MediaCategory.Other,
            _graph.EncodingProperties);

        if (inputResult.Status != AudioDeviceNodeCreationStatus.Success)
            return;

        _input = inputResult.DeviceInputNode;

        _output = _graph.CreateFrameOutputNode();
        _input.AddOutgoingConnection(_output);

        _graph.QuantumProcessed += OnQuantumProcessed;
        _running = true;
        _graph.Start();
    }

    private unsafe void OnQuantumProcessed(AudioGraph sender, object args)
    {
        if (!_running)
            return;

        using var frame = _output.GetFrame();
        using var buffer = frame.LockBuffer(AudioBufferAccessMode.Read);
        using var reference = buffer.CreateReference();

        ((IMemoryBufferByteAccess)reference).GetBuffer(out byte* data, out uint capacity);

        int floatCount = (int)(capacity / sizeof(float));
        if (floatCount < FftLength * 2)
            return;

        float* samples = (float*)data;

        for (int i = 0; i < FftLength; i++)
        {
            _left[i] = samples[i * 2];
            _right[i] = samples[i * 2 + 1];
        }

        for (int i = 0; i < FftLength; i++)
        {
            float w = (float)_window[i];
            _fftL[i] = new Complex(_left[i] * w, 0);
            _fftR[i] = new Complex(_right[i] * w, 0);
        }

        FFT(_fftL);
        FFT(_fftR);

        int bins = FftLength / 2;
        _spectrum ??= new float[bins * 2];

        for (int i = 0; i < bins; i++)
        {
            float freq = i * _sampleRate / (float)FftLength;
            float gain = Compensation(freq);

            _spectrum[i] = (float)_fftL[i].Magnitude * gain;
            _spectrum[i + bins] = (float)_fftR[i].Magnitude * gain;
        }

        SpectrumDataUpdated?.Invoke(_spectrum);
    }

    private static void FFT(Complex[] buffer)
    {
        int n = buffer.Length;
        int bits = (int)Math.Log2(n);

        for (int j = 1, i = 0; j < n; j++)
        {
            int bit = n >> 1;
            for (; (i & bit) != 0; bit >>= 1)
                i &= ~bit;
            i |= bit;

            if (j < i)
                (buffer[j], buffer[i]) = (buffer[i], buffer[j]);
        }

        for (int len = 2; len <= n; len <<= 1)
        {
            double ang = -2 * Math.PI / len;
            Complex wlen = new(Math.Cos(ang), Math.Sin(ang));

            for (int i = 0; i < n; i += len)
            {
                Complex w = Complex.One;
                for (int j = 0; j < len / 2; j++)
                {
                    var u = buffer[i + j];
                    var v = buffer[i + j + len / 2] * w;
                    buffer[i + j] = u + v;
                    buffer[i + j + len / 2] = u - v;
                    w *= wlen;
                }
            }
        }
    }

    private static float Compensation(float freq)
    {
        float[] f = { 20, 50, 100, 200, 500, 1000, 2000, 4000, 8000, 16000, 20000 };
        float[] g = { 0.5f, 0.3f, 0.4f, 0.6f, 0.8f, 1.0f, 1.2f, 1.3f, 1.1f, 0.9f, 0.8f };

        if (freq <= f[0]) return g[0];
        if (freq >= f[^1]) return g[^1];

        int i = 0;
        while (freq > f[i + 1]) i++;

        float t = (freq - f[i]) / (f[i + 1] - f[i]);
        return g[i] + t * (g[i + 1] - g[i]);
    }
}

```

## NAudioSpectrumAnalyzer
```cs
public partial class NaudioSpectrumAnalyzer : ISpectrumAnalyzer
{
    private WasapiLoopbackCapture _capture;
    public event Action<float[]> SpectrumDataUpdated;
    private int _sampleRate = 48000;
    private readonly int _fftLength = 2048;
    private readonly float[] _fftLeftBuffer;
    private readonly float[] _fftRightBuffer;
    private readonly NAudio.Dsp.Complex[] _fftLeftData;
    private readonly NAudio.Dsp.Complex[] _fftRightData;
    private float[] _spectrumLeftData;
    private float[] _spectrumRightData;
    private float[] _spectrumData;
    private bool _disposed = false;
    private double[] _hammingWindow;

    public NaudioSpectrumAnalyzer()
    {
        _fftLeftBuffer = new float[_fftLength];
        _fftLeftData = new NAudio.Dsp.Complex[_fftLength];
        _fftRightBuffer = new float[_fftLength];
        _fftRightData = new NAudio.Dsp.Complex[_fftLength];
        _hammingWindow = new double[_fftLength];

        for (int i = 0; i < _fftLength; i++)
        {
            _hammingWindow[i] = 0.54 - 0.46 * Math.Cos((2 * Math.PI * i) / (_fftLength - 1));
        }
    }
    public void Start()
    {
        try
        {
            _capture = new WasapiLoopbackCapture();
            _sampleRate = _capture.WaveFormat.SampleRate;
            _spectrumLeftData = new float[(int)(24000.0f / _sampleRate * _fftLength) / 2];
            _spectrumRightData = new float[(int)(24000.0f / _sampleRate * _fftLength) / 2];
            _spectrumData = new float[(int)(24000.0f / _sampleRate * _fftLength)];
            _capture.DataAvailable -= OnDataAvailable;
            _capture.DataAvailable += OnDataAvailable;
            _capture.RecordingStopped -= OnRecordingStopped;
            _capture.RecordingStopped += OnRecordingStopped;
            _capture.StartRecording();
        }
        catch (Exception)
        {
        }
    }
    private void OnRecordingStopped(object sender, StoppedEventArgs e)
    {

    }
    public void Stop()
    {
        _capture?.StopRecording();
    }

    public void Dispose()
    {
        if (!_disposed)
        {
            _capture?.Dispose();
            _disposed = true;
        }
    }

    private void OnDataAvailable(object sender, WaveInEventArgs e)
    {
        if (_disposed || e.BytesRecorded == 0) return;

        int samples = e.BytesRecorded / 8;
        if (samples < _fftLength) return;
        for (int i = 0; i < _fftLength; i++)
        {
            _fftLeftBuffer[i] = BitConverter.ToSingle(e.Buffer, i * 8);
            _fftRightBuffer[i] = BitConverter.ToSingle(e.Buffer, i * 8 + 4);
        }
        for (int i = 0; i < _fftLength; i++)
        {
            _fftLeftData[i].X = _fftLeftBuffer[i] * (float)_hammingWindow[i]; // Real part
            _fftLeftData[i].Y = 0;             // Imaginary part
            _fftRightData[i].X = _fftRightBuffer[i] * (float)_hammingWindow[i];
            _fftRightData[i].Y = 0;
        }

        // FFT
        FastFourierTransform.FFT(true, (int)Math.Log(_fftLength, 2), _fftLeftData);
        FastFourierTransform.FFT(true, (int)Math.Log(_fftLength, 2), _fftRightData);
        for (int i = 0; i < _spectrumLeftData.Length; i++)
        {
            float real = (float)_fftLeftData[i].X;
            float imaginary = (float)_fftLeftData[i].Y;
            float magnitude = (float)Math.Sqrt(real * real + imaginary * imaginary);
            float frequency = i * _sampleRate / _fftLength;
            float compensationFactor = GetCompensationFactor(frequency);
            _spectrumLeftData[i] = magnitude * compensationFactor;
            _spectrumRightData[i] = (float)Math.Sqrt((float)_fftRightData[i].X * (float)_fftRightData[i].X + (float)_fftRightData[i].Y * (float)_fftRightData[i].Y) * compensationFactor;
            for (int j = 0; j < _spectrumLeftData.Length; j++)
            {
                _spectrumData[j] = _spectrumLeftData[_spectrumLeftData.Length - 1 - j];
            }
            Array.Copy(_spectrumRightData, 0, _spectrumData, _spectrumLeftData.Length, _spectrumRightData.Length);
        }
        SpectrumDataUpdated?.Invoke(_spectrumData);
    }

    private float GetCompensationFactor(float freq)
    {
        float[] frequencies = { 20, 50, 100, 200, 500, 1000, 2000, 4000, 8000, 16000, 20000 };
        float[] gains = { 0.5f, 0.3f, 0.4f, 0.6f, 0.8f, 1.0f, 1.2f, 1.3f, 1.1f, 0.9f, 0.8f };
        if (freq <= frequencies[0])
        {
            return gains[0];
        }
        if (freq >= frequencies[frequencies.Length - 1])
        {
            return gains[gains.Length - 1];
        }
        int i = 0;
        while (freq > frequencies[i + 1])
        {
            i++;
        }
        float x1 = frequencies[i];
        float y1 = gains[i];
        float x2 = frequencies[i + 1];
        float y2 = gains[i + 1];
        return y1 + (freq - x1) * ((y2 - y1) / (x2 - x1));
    }
}
```
now:

```xml
<dev:SpectrumVisualizer x:Name="SpectrumVisualizerSample" />
```

```cs
SpectrumVisualizerSample.Analyzer = new NaudioSpectrumAnalyzer();
```

## Custom color
you can use custom defined color if you want, first set a `ColorType` property to `Custom`, then you can define your colors like this:

```cs
SpectrumVisualizerSample.CustomColorProvider = (intensity, i) =>
{
    return i % 2 == 0 ? Colors.HotPink : Colors.Cyan;
};
```


![SpectrumVisualizer](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/SpectrumVisualizer.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
