---
title: SpectrumAnalyzer
---

Displays audio level and frequency data.

# Property

|Name|
|-|
|MaximumFrequency|
|MinimumFrequency|
|BarCount|
|BarSpacing|
|PeakFallDelay|
|IsFrequencyScaleLinear|
|BarHeightScaling|
|AveragePeaks|
|BarStyle|
|PeakStyle|
|ActualBarWidth|
|RefreshInterval|
|FFTComplexity|

# Methods

|Name|
|-|
|RegisterSoundPlayer|

# Virtual Methods (override)

|Name|
|-|
|OnMaximumFrequencyChanged|
|OnMinimumFrequencyChanged|
|OnBarCountChanged|
|OnBarSpacingChanged|
|OnPeakFallDelayChanged|
|OnIsFrequencyScaleLinearChanged|
|OnBarHeightScalingChanged|
|OnAveragePeaksChanged|
|OnBarStyleChanged|
|OnPeakStyleChanged|
|OnActualBarWidthChanged|
|OnRefreshIntervalChanged|
|OnFFTComplexityChanged|

# Example

```xml
<dev:SpectrumAnalyzer x:Name="SpectrumAnalyzerSample" />
```

{% note warning %}
it is best to use `NAudio` library to generate data, however NAudio does not support AOT.
{% endnote %}

## AudioGraphEngine

```cs
soundEngine = new AudioGraphEngine();
WaveformTimelineSample.RegisterSoundPlayer(soundEngine);
await soundEngine.OpenFileAsync(@"C:\myAudio.mp3");
soundEngine.Play();
```

{% note warning %}
`GenerateWaveformAsync` only support simple `Wav` format.
{% endnote %}

```cs
[GeneratedComInterface]
[Guid("5B0D3235-4DBA-4D44-865E-8F1D0E4FD04D")]
public unsafe partial interface IMemoryBufferByteAccess
{
    void GetBuffer(out byte* buffer, out uint capacity);
}

public sealed partial class AudioGraphEngine : ISpectrumPlayer, IWaveformPlayer, INotifyPropertyChanged, IDisposable
{
    private readonly DispatcherQueue dispatcherQueue = DispatcherQueue.GetForCurrentThread();

    private AudioGraph graph;
    private AudioFileInputNode fileNode;
    private AudioDeviceOutputNode deviceNode;
    private AudioFrameOutputNode frameNode;

    private readonly int fftDataSize = 2048;
    private readonly SampleAggregator sampleAggregator;

    private bool isPlaying;
    private double channelLength;
    private double channelPosition;

    public event PropertyChangedEventHandler PropertyChanged;
    private AudioSampleRingBuffer sampleBuffer;
    private CancellationTokenSource processingCts;

    private TimeSpan playbackStartTime;
    public TimeSpan SelectionBegin { get; set; }
    public TimeSpan SelectionEnd { get; set; }
    public AudioGraphEngine()
    {
        sampleAggregator = new SampleAggregator(fftDataSize);

        sampleBuffer = new AudioSampleRingBuffer(fftDataSize * 8);
        processingCts = new CancellationTokenSource();
        StartProcessingLoop();
    }
    private void StartProcessingLoop()
    {
        Task.Run(async () =>
        {
            float left, right;

            while (!processingCts.IsCancellationRequested)
            {
                if (sampleBuffer.TryRead(out left) &&
                    sampleBuffer.TryRead(out right))
                {
                    sampleAggregator.Add(left, right);
                }
                else
                {
                    await Task.Delay(1);
                }
            }
        }, processingCts.Token);
    }

    public bool GetFFTData(float[] fftDataBuffer)
    {
        sampleAggregator.GetFFTResults(fftDataBuffer);
        return IsPlaying;
    }

    public int GetFFTFrequencyIndex(int frequency)
    {
        double maxFrequency = graph != null
            ? graph.EncodingProperties.SampleRate / 2.0
            : 22050;

        return (int)((frequency / maxFrequency) * (fftDataSize / 2));
    }

    public double ChannelPosition
    {
        get => channelPosition;
        set
        {
            if (fileNode == null)
                return;

            value = Math.Max(0, Math.Min(value, ChannelLength));
            fileNode.Seek(TimeSpan.FromSeconds(value));
            channelPosition = value;
            NotifyPropertyChanged(nameof(ChannelPosition));
        }
    }

    public double ChannelLength
    {
        get => channelLength;
        private set
        {
            channelLength = value;
            NotifyPropertyChanged(nameof(ChannelLength));
        }
    }

    private float[] waveformData;

    public float[] WaveformData
    {
        get => waveformData;
        private set
        {
            waveformData = value;
            NotifyPropertyChanged(nameof(WaveformData));
        }
    }
    private async Task GenerateWaveformAsync(string wavPath)
    {
        await Task.Run(() =>
        {
            byte[] data = File.ReadAllBytes(wavPath);

            if (data.Length < 44)
                throw new InvalidOperationException("Invalid WAV file");

            int channels = BitConverter.ToInt16(data, 22);
            int bitsPerSample = BitConverter.ToInt16(data, 34);

            int dataChunkOffset = -1;
            int dataChunkSize = 0;

            for (int i = 12; i < data.Length - 8;)
            {
                string chunkId = Encoding.ASCII.GetString(data, i, 4);
                int chunkSize = BitConverter.ToInt32(data, i + 4);

                if (chunkId == "data")
                {
                    dataChunkOffset = i + 8;
                    dataChunkSize = chunkSize;
                    break;
                }

                i += 8 + chunkSize;
            }

            if (dataChunkOffset < 0)
                throw new InvalidOperationException("WAV data chunk not found");

            const int samplesPerBucket = 1024;

            List<float> waveform = new();

            float leftSumSq = 0, rightSumSq = 0;
            float leftPeak = 0, rightPeak = 0;
            int sampleCounter = 0;

            int bytesPerSample = bitsPerSample / 8;
            int frameSize = bytesPerSample * channels;

            for (int i = dataChunkOffset; i + frameSize <= dataChunkOffset + dataChunkSize; i += frameSize)
            {
                float l, r;

                if (bitsPerSample == 16)
                {
                    l = BitConverter.ToInt16(data, i) / 32768f;
                    r = channels == 2 ? BitConverter.ToInt16(data, i + 2) / 32768f : l;
                }
                else if (bitsPerSample == 24)
                {
                    int left = (data[i + 2] << 24) | (data[i + 1] << 16) | (data[i] << 8);
                    left >>= 8;
                    l = left / 8388608f;

                    if (channels == 2)
                    {
                        int right = (data[i + 5] << 24) | (data[i + 4] << 16) | (data[i + 3] << 8);
                        right >>= 8;
                        r = right / 8388608f;
                    }
                    else
                        r = l;
                }
                else if (bitsPerSample == 32)
                {
                    l = BitConverter.ToSingle(data, i);
                    r = channels == 2 ? BitConverter.ToSingle(data, i + 4) : l;
                }
                else
                {
                    throw new NotSupportedException($"Unsupported WAV bit depth: {bitsPerSample}");
                }

                leftPeak = Math.Max(leftPeak, Math.Abs(l));
                rightPeak = Math.Max(rightPeak, Math.Abs(r));

                leftSumSq += l * l;
                rightSumSq += r * r;
                sampleCounter++;

                if (sampleCounter >= samplesPerBucket)
                {
                    float leftRms = MathF.Sqrt(leftSumSq / sampleCounter);
                    float rightRms = MathF.Sqrt(rightSumSq / sampleCounter);

                    waveform.Add((leftRms + leftPeak) * 0.5f);
                    waveform.Add((rightRms + rightPeak) * 0.5f);

                    leftSumSq = rightSumSq = 0;
                    leftPeak = rightPeak = 0;
                    sampleCounter = 0;
                }
            }

            float max = 0f;
            for (int i = 0; i < waveform.Count; i++)
            {
                float v = Math.Abs(waveform[i]);
                if (v > max)
                    max = v;
            }

            if (max > 0)
            {
                float gain = 1f / max;
                for (int i = 0; i < waveform.Count; i++)
                    waveform[i] *= gain;
            }

            dispatcherQueue.TryEnqueue(() =>
            {
                WaveformData = waveform.ToArray();
            });
        });
    }

    public bool IsPlaying
    {
        get => isPlaying;
        private set
        {
            isPlaying = value;
            NotifyPropertyChanged(nameof(IsPlaying));
        }
    }

    public async Task OpenFile(string path)
    {
        DisposeGraph();

        var file = await StorageFile.GetFileFromPathAsync(path);

        await GenerateWaveformAsync(path);

        var settings = new AudioGraphSettings(AudioRenderCategory.Media)
        {
            QuantumSizeSelectionMode = QuantumSizeSelectionMode.ClosestToDesired,
            DesiredSamplesPerQuantum = fftDataSize
        };

        var graphResult = await AudioGraph.CreateAsync(settings);
        if (graphResult.Status != AudioGraphCreationStatus.Success)
            throw new InvalidOperationException("AudioGraph creation failed");

        graph = graphResult.Graph;

        var deviceResult = await graph.CreateDeviceOutputNodeAsync();
        deviceNode = deviceResult.DeviceOutputNode;

        var fileResult = await graph.CreateFileInputNodeAsync(file);
        fileNode = fileResult.FileInputNode;

        frameNode = graph.CreateFrameOutputNode();

        fileNode.AddOutgoingConnection(deviceNode);
        fileNode.AddOutgoingConnection(frameNode);

        ChannelLength = fileNode.Duration.TotalSeconds;

        graph.QuantumStarted += OnQuantumStarted;
    }

    public void Play()
    {
        if (graph == null)
            return;

        playbackStartTime = fileNode.Position;
        graph.Start();
        IsPlaying = true;
    }


    public void Pause()
    {
        if (graph == null)
            return;

        graph.Stop();
        IsPlaying = false;
    }

    public void Stop()
    {
        if (graph == null)
            return;

        graph.Stop();
        fileNode.Seek(TimeSpan.Zero);
        ChannelPosition = 0;
        IsPlaying = false;
    }

    private unsafe void OnQuantumStarted(AudioGraph sender, object args)
    {
        var frame = frameNode.GetFrame();
        using var buffer = frame.LockBuffer(AudioBufferAccessMode.Read);
        using var reference = buffer.CreateReference();

        ((IMemoryBufferByteAccess)reference)
            .GetBuffer(out byte* data, out uint capacity);

        float* samples = (float*)data;
        int count = (int)(capacity / sizeof(float));

        for (int i = 0; i < count; i++)
            sampleBuffer.Write(samples[i]);

        double positionSeconds = 0;
        if (fileNode != null && IsPlaying)
            positionSeconds = fileNode.Position.TotalSeconds;

        dispatcherQueue.TryEnqueue(() =>
        {
            channelPosition = positionSeconds;
            NotifyPropertyChanged(nameof(ChannelPosition));
        });
    }

    public void Dispose()
    {
        DisposeGraph();
        GC.SuppressFinalize(this);
    }

    private void DisposeGraph()
    {
        if (graph != null)
        {
            graph.QuantumStarted -= OnQuantumStarted;
            graph.Stop();
            graph.Dispose();
            graph = null;
        }

        fileNode = null;
        deviceNode = null;
        frameNode = null;
    }
    private void NotifyPropertyChanged(string name)
        => PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(name));
}

public sealed partial class AudioSampleRingBuffer
{
    private readonly float[] buffer;
    private int writeIndex;
    private int readIndex;

    public AudioSampleRingBuffer(int capacity)
    {
        buffer = new float[capacity];
    }

    public void Write(float value)
    {
        buffer[writeIndex] = value;
        writeIndex = (writeIndex + 1) % buffer.Length;
    }

    public bool TryRead(out float value)
    {
        if (readIndex == writeIndex)
        {
            value = 0;
            return false;
        }

        value = buffer[readIndex];
        readIndex = (readIndex + 1) % buffer.Length;
        return true;
    }
}

public static partial class FastFourierTransform
{
    /// <summary>
    /// In-place radix-2 FFT (forward).
    /// </summary>
    public static void FFT(Complex[] data, int exponent)
    {
        int n = 1 << exponent;

        // Bit-reversal
        int j = 0;
        for (int i = 0; i < n; i++)
        {
            if (i < j)
            {
                var temp = data[i];
                data[i] = data[j];
                data[j] = temp;
            }

            int m = n >> 1;
            while (j >= m && m >= 2)
            {
                j -= m;
                m >>= 1;
            }
            j += m;
        }

        // FFT stages
        for (int stage = 1; stage <= exponent; stage++)
        {
            int step = 1 << stage;
            int halfStep = step >> 1;

            double angleStep = -2.0 * Math.PI / step;
            Complex phaseStep = new Complex(
                Math.Cos(angleStep),
                Math.Sin(angleStep));

            for (int k = 0; k < n; k += step)
            {
                Complex phase = Complex.One;

                for (int i = 0; i < halfStep; i++)
                {
                    int evenIndex = k + i;
                    int oddIndex = evenIndex + halfStep;

                    Complex even = data[evenIndex];
                    Complex odd = phase * data[oddIndex];

                    data[evenIndex] = even + odd;
                    data[oddIndex] = even - odd;

                    phase *= phaseStep;
                }
            }
        }
    }
}

public sealed partial class SampleAggregator
{
    private readonly int bufferSize;
    private readonly int fftExponent;

    private readonly Complex[] channelData;
    private int channelDataPosition;

    private float volumeLeftMaxValue;
    private float volumeLeftMinValue;
    private float volumeRightMaxValue;
    private float volumeRightMinValue;

    public SampleAggregator(int bufferSize)
    {
        if ((bufferSize & (bufferSize - 1)) != 0)
            throw new ArgumentException("FFT buffer size must be a power of two");

        this.bufferSize = bufferSize;
        fftExponent = (int)Math.Log(bufferSize, 2);
        channelData = new Complex[bufferSize];

        Clear();
    }

    public void Clear()
    {
        volumeLeftMaxValue = float.MinValue;
        volumeRightMaxValue = float.MinValue;
        volumeLeftMinValue = float.MaxValue;
        volumeRightMinValue = float.MaxValue;
        channelDataPosition = 0;
    }

    /// <summary>
    /// Adds a stereo sample.
    /// </summary>
    public void Add(float leftValue, float rightValue)
    {
        if (channelDataPosition == 0)
        {
            volumeLeftMaxValue = float.MinValue;
            volumeRightMaxValue = float.MinValue;
            volumeLeftMinValue = float.MaxValue;
            volumeRightMinValue = float.MaxValue;
        }

        // Convert stereo → mono (average)
        float mono = (leftValue + rightValue) * 0.5f;

        channelData[channelDataPosition] = new Complex(mono, 0);
        channelDataPosition++;

        volumeLeftMaxValue = Math.Max(volumeLeftMaxValue, leftValue);
        volumeLeftMinValue = Math.Min(volumeLeftMinValue, leftValue);
        volumeRightMaxValue = Math.Max(volumeRightMaxValue, rightValue);
        volumeRightMinValue = Math.Min(volumeRightMinValue, rightValue);

        if (channelDataPosition >= bufferSize)
            channelDataPosition = 0;
    }

    /// <summary>
    /// Copies FFT magnitude data into the provided buffer.
    /// Buffer length must be >= bufferSize / 2.
    /// </summary>
    public void GetFFTResults(float[] fftBuffer)
    {
        if (fftBuffer == null)
            throw new ArgumentNullException(nameof(fftBuffer));

        if (fftBuffer.Length < bufferSize / 2)
            throw new ArgumentException("FFT buffer is too small");

        // Clone so capture thread is not disturbed
        var fftData = new Complex[bufferSize];
        Array.Copy(channelData, fftData, bufferSize);

        FastFourierTransform.FFT(fftData, fftExponent);

        for (int i = 0; i < bufferSize / 2; i++)
        {
            double real = fftData[i].Real;
            double imag = fftData[i].Imaginary;

            fftBuffer[i] = (float)Math.Sqrt(real * real + imag * imag);
        }
    }

    public float LeftMaxVolume => volumeLeftMaxValue;
    public float LeftMinVolume => volumeLeftMinValue;
    public float RightMaxVolume => volumeRightMaxValue;
    public float RightMinVolume => volumeRightMinValue;
}

```

## NAudioEngine

```cs
soundEngine = NAudioEngine.Instance;
SpectrumAnalyzerSample.RegisterSoundPlayer(soundEngine);
soundEngine.OpenFile(@"C:\myAudio.mp3");
soundEngine.Play();
```

```cs
public partial class NAudioEngine : INotifyPropertyChanged, ISpectrumPlayer, IWaveformPlayer, IDisposable
{
    private readonly DispatcherQueue dispatcherQueue = DispatcherQueue.GetForCurrentThread();
    private static NAudioEngine instance;
    private readonly DispatcherTimer positionTimer = new DispatcherTimer();
    private CancellationTokenSource waveformCts;
    private Task waveformTask;
    private readonly int fftDataSize = (int)FFTDataSize.FFT2048;
    private bool disposed;
    private bool canPlay;
    private bool canPause;
    private bool canStop;
    private bool isPlaying;
    private bool inChannelTimerUpdate;
    private double channelLength;
    private double channelPosition;
    private bool inChannelSet;
    private WaveOut waveOutDevice;
    private WaveStream activeStream;
    private WaveChannel32 inputStream;
    private SampleAggregator sampleAggregator;
    private SampleAggregator waveformAggregator;
    private string pendingWaveformPath;
    private float[] fullLevelData;
    private float[] waveformData;
    private TimeSpan repeatStart;
    private TimeSpan repeatStop;
    private bool inRepeatSet;

    private const int waveformCompressedPointCount = 2000;
    private const int repeatThreshold = 200;

    public static NAudioEngine Instance
    {
        get
        {
            if (instance == null)
                instance = new NAudioEngine();
            return instance;
        }
    }
    private NAudioEngine()
    {
        positionTimer.Interval = TimeSpan.FromMilliseconds(50);
        positionTimer.Tick += positionTimer_Tick;
    }
    public void Dispose()
    {
        Dispose(true);
        GC.SuppressFinalize(this);
    }

    protected virtual void Dispose(bool disposing)
    {
        if (!disposed)
        {
            if (disposing)
            {
                StopAndCloseStream();
            }

            disposed = true;
        }
    }
    public bool GetFFTData(float[] fftDataBuffer)
    {
        sampleAggregator.GetFFTResults(fftDataBuffer);
        return isPlaying;
    }

    public int GetFFTFrequencyIndex(int frequency)
    {
        double maxFrequency;
        if (ActiveStream != null)
            maxFrequency = ActiveStream.WaveFormat.SampleRate / 2.0d;
        else
            maxFrequency = 22050; // Assume a default 44.1 kHz sample rate.
        return (int)((frequency / maxFrequency) * (fftDataSize / 2));
    }
    public TimeSpan SelectionBegin
    {
        get { return repeatStart; }
        set
        {
            if (!inRepeatSet)
            {
                inRepeatSet = true;
                TimeSpan oldValue = repeatStart;
                repeatStart = value;
                if (oldValue != repeatStart)
                    NotifyPropertyChanged("SelectionBegin");
                inRepeatSet = false;
            }
        }
    }

    public TimeSpan SelectionEnd
    {
        get { return repeatStop; }
        set
        {
            if (!inChannelSet)
            {
                inRepeatSet = true;
                TimeSpan oldValue = repeatStop;
                repeatStop = value;
                if (oldValue != repeatStop)
                    NotifyPropertyChanged("SelectionEnd");
                inRepeatSet = false;
            }
        }
    }

    public float[] WaveformData
    {
        get { return waveformData; }
        protected set
        {
            float[] oldValue = waveformData;
            waveformData = value;
            if (oldValue != waveformData)
                NotifyPropertyChanged("WaveformData");
        }
    }

    public double ChannelLength
    {
        get { return channelLength; }
        protected set
        {
            double oldValue = channelLength;
            channelLength = value;
            if (oldValue != channelLength)
                NotifyPropertyChanged("ChannelLength");
        }
    }

    public double ChannelPosition
    {
        get { return channelPosition; }
        set
        {
            if (!inChannelSet)
            {
                inChannelSet = true; // Avoid recursion
                double oldValue = channelPosition;
                double position = Math.Max(0, Math.Min(value, ChannelLength));
                if (!inChannelTimerUpdate && ActiveStream != null)
                    ActiveStream.Position = (long)((position / ActiveStream.TotalTime.TotalSeconds) * ActiveStream.Length);
                channelPosition = position;
                if (oldValue != channelPosition)
                    NotifyPropertyChanged("ChannelPosition");
                inChannelSet = false;
            }
        }
    }

    public event PropertyChangedEventHandler PropertyChanged;

    private void NotifyPropertyChanged(String info)
    {
        if (PropertyChanged != null)
        {
            PropertyChanged(this, new PropertyChangedEventArgs(info));
        }
    }
    private partial class WaveformGenerationParams
    {
        public WaveformGenerationParams(int points, string path)
        {
            Points = points;
            Path = path;
        }

        public int Points { get; protected set; }
        public string Path { get; protected set; }
    }

    private void GenerateWaveformData(string path)
    {
        // If a task is running, cancel it and queue the new request
        if (waveformTask != null && !waveformTask.IsCompleted)
        {
            pendingWaveformPath = path;
            waveformCts.Cancel();
            return;
        }

        if (waveformCompressedPointCount != 0)
        {
            waveformCts = new CancellationTokenSource();
            waveformTask = GenerateWaveformDataAsync(
                new WaveformGenerationParams(waveformCompressedPointCount, path),
                waveformCts.Token);
        }
    }

    private async Task GenerateWaveformDataAsync(
        WaveformGenerationParams waveformParams,
        CancellationToken token)
    {
        try
        {
            await Task.Run(() =>
            {
                using var waveformMp3Stream = new Mp3FileReader(waveformParams.Path);
                using var waveformInputStream = new WaveChannel32(waveformMp3Stream);

                waveformInputStream.Sample += waveStream_Sample;

                int frameLength = fftDataSize;
                int frameCount = (int)((double)waveformInputStream.Length / frameLength);
                int waveformLength = frameCount * 2;

                byte[] readBuffer = new byte[frameLength];
                waveformAggregator = new SampleAggregator(frameLength);

                float maxLeftPointLevel = float.MinValue;
                float maxRightPointLevel = float.MinValue;

                int currentPointIndex = 0;
                int readCount = 0;

                float[] waveformCompressedPoints = new float[waveformParams.Points];
                List<float> waveformData = new();
                List<int> waveMaxPointIndexes = new();

                for (int i = 1; i <= waveformParams.Points; i++)
                {
                    waveMaxPointIndexes.Add(
                        (int)Math.Round(
                            waveformLength * ((double)i / waveformParams.Points), 0));
                }

                while (currentPointIndex * 2 < waveformParams.Points)
                {
                    token.ThrowIfCancellationRequested();

                    waveformInputStream.ReadExactly(readBuffer);

                    waveformData.Add(waveformAggregator.LeftMaxVolume);
                    waveformData.Add(waveformAggregator.RightMaxVolume);

                    maxLeftPointLevel = Math.Max(maxLeftPointLevel, waveformAggregator.LeftMaxVolume);
                    maxRightPointLevel = Math.Max(maxRightPointLevel, waveformAggregator.RightMaxVolume);

                    if (readCount > waveMaxPointIndexes[currentPointIndex])
                    {
                        waveformCompressedPoints[currentPointIndex * 2] = maxLeftPointLevel;
                        waveformCompressedPoints[currentPointIndex * 2 + 1] = maxRightPointLevel;

                        maxLeftPointLevel = float.MinValue;
                        maxRightPointLevel = float.MinValue;
                        currentPointIndex++;
                    }

                    if (readCount % 3000 == 0)
                    {
                        var cloned = (float[])waveformCompressedPoints.Clone();
                        dispatcherQueue.TryEnqueue(() =>
                        {
                            WaveformData = cloned;
                        });
                    }

                    readCount++;
                }

                var finalClone = (float[])waveformCompressedPoints.Clone();
                dispatcherQueue.TryEnqueue(() =>
                {
                    fullLevelData = waveformData.ToArray();
                    WaveformData = finalClone;
                });
            }, token);
        }
        catch (OperationCanceledException)
        {
            // Expected on cancellation
        }
        finally
        {
            // If cancellation occurred and a new path is pending, restart
            if (!string.IsNullOrEmpty(pendingWaveformPath) &&
                waveformCompressedPointCount != 0)
            {
                string nextPath = pendingWaveformPath;
                pendingWaveformPath = null;

                waveformCts = new CancellationTokenSource();
                waveformTask = GenerateWaveformDataAsync(
                    new WaveformGenerationParams(waveformCompressedPointCount, nextPath),
                    waveformCts.Token);
            }
        }
    }
    private void StopAndCloseStream()
    {
        if (waveOutDevice != null)
        {
            waveOutDevice.Stop();
        }
        if (activeStream != null)
        {
            inputStream.Close();
            inputStream = null;
            ActiveStream.Close();
            ActiveStream = null;
        }
        if (waveOutDevice != null)
        {
            waveOutDevice.Dispose();
            waveOutDevice = null;
        }
    }
    public void Stop()
    {
        if (waveOutDevice != null)
        {
            waveOutDevice.Stop();
        }
        IsPlaying = false;
        CanStop = false;
        CanPlay = true;
        CanPause = false;
    }

    public void Pause()
    {
        if (IsPlaying && CanPause)
        {
            waveOutDevice.Pause();
            IsPlaying = false;
            CanPlay = true;
            CanPause = false;
        }
    }

    public void Play()
    {
        if (CanPlay)
        {
            waveOutDevice.Play();
            IsPlaying = true;
            CanPause = true;
            CanPlay = false;
            CanStop = true;
        }
    }

    public void OpenFile(string path)
    {
        Stop();

        if (ActiveStream != null)
        {
            SelectionBegin = TimeSpan.Zero;
            SelectionEnd = TimeSpan.Zero;
            ChannelPosition = 0;
        }

        StopAndCloseStream();

        if (System.IO.File.Exists(path))
        {
            try
            {
                waveOutDevice = new WaveOut()
                {
                    DesiredLatency = 100
                };
                ActiveStream = new Mp3FileReader(path);
                inputStream = new WaveChannel32(ActiveStream);
                sampleAggregator = new SampleAggregator(fftDataSize);
                inputStream.Sample += inputStream_Sample;
                waveOutDevice.Init(inputStream);
                ChannelLength = inputStream.TotalTime.TotalSeconds;
                GenerateWaveformData(path);
                CanPlay = true;
            }
            catch
            {
                ActiveStream = null;
                CanPlay = false;
            }
        }
    }
    public WaveStream ActiveStream
    {
        get { return activeStream; }
        protected set
        {
            WaveStream oldValue = activeStream;
            activeStream = value;
            if (oldValue != activeStream)
                NotifyPropertyChanged("ActiveStream");
        }
    }

    public bool CanPlay
    {
        get { return canPlay; }
        protected set
        {
            bool oldValue = canPlay;
            canPlay = value;
            if (oldValue != canPlay)
                NotifyPropertyChanged("CanPlay");
        }
    }

    public bool CanPause
    {
        get { return canPause; }
        protected set
        {
            bool oldValue = canPause;
            canPause = value;
            if (oldValue != canPause)
                NotifyPropertyChanged("CanPause");
        }
    }

    public bool CanStop
    {
        get { return canStop; }
        protected set
        {
            bool oldValue = canStop;
            canStop = value;
            if (oldValue != canStop)
                NotifyPropertyChanged("CanStop");
        }
    }


    public bool IsPlaying
    {
        get { return isPlaying; }
        protected set
        {
            bool oldValue = isPlaying;
            isPlaying = value;
            if (oldValue != isPlaying)
                NotifyPropertyChanged("IsPlaying");

            if (isPlaying)
                positionTimer.Start();
            else
                positionTimer.Stop();
        }
    }
    private void inputStream_Sample(object sender, SampleEventArgs e)
    {
        sampleAggregator.Add(e.Left, e.Right);
        long repeatStartPosition = (long)((SelectionBegin.TotalSeconds / ActiveStream.TotalTime.TotalSeconds) * ActiveStream.Length);
        long repeatStopPosition = (long)((SelectionEnd.TotalSeconds / ActiveStream.TotalTime.TotalSeconds) * ActiveStream.Length);
        if (((SelectionEnd - SelectionBegin) >= TimeSpan.FromMilliseconds(repeatThreshold)) && ActiveStream.Position >= repeatStopPosition)
        {
            sampleAggregator.Clear();
            ActiveStream.Position = repeatStartPosition;
        }
    }

    void waveStream_Sample(object sender, SampleEventArgs e)
    {
        waveformAggregator.Add(e.Left, e.Right);
    }

    void positionTimer_Tick(object sender, object e)
    {
        inChannelTimerUpdate = true;
        ChannelPosition = ((double)ActiveStream.Position / (double)ActiveStream.Length) * ActiveStream.TotalTime.TotalSeconds;
        inChannelTimerUpdate = false;
    }
}

public partial class SampleAggregator
{
    private float volumeLeftMaxValue;
    private float volumeLeftMinValue;
    private float volumeRightMaxValue;
    private float volumeRightMinValue;
    private Complex[] channelData;
    private int bufferSize;
    private int binaryExponentitation;
    private int channelDataPosition;

    public SampleAggregator(int bufferSize)
    {
        this.bufferSize = bufferSize;
        binaryExponentitation = (int)Math.Log(bufferSize, 2);
        channelData = new Complex[bufferSize];
    }

    public void Clear()
    {
        volumeLeftMaxValue = float.MinValue;
        volumeRightMaxValue = float.MinValue;
        volumeLeftMinValue = float.MaxValue;
        volumeRightMinValue = float.MaxValue;
        channelDataPosition = 0;
    }

    /// <summary>
    /// Add a sample value to the aggregator.
    /// </summary>
    /// <param name="value">The value of the sample.</param>
    public void Add(float leftValue, float rightValue)
    {
        if (channelDataPosition == 0)
        {
            volumeLeftMaxValue = float.MinValue;
            volumeRightMaxValue = float.MinValue;
            volumeLeftMinValue = float.MaxValue;
            volumeRightMinValue = float.MaxValue;
        }

        // Make stored channel data stereo by averaging left and right values.
        channelData[channelDataPosition].X = (leftValue + rightValue) / 2.0f;
        channelData[channelDataPosition].Y = 0;
        channelDataPosition++;

        volumeLeftMaxValue = Math.Max(volumeLeftMaxValue, leftValue);
        volumeLeftMinValue = Math.Min(volumeLeftMinValue, leftValue);
        volumeRightMaxValue = Math.Max(volumeRightMaxValue, rightValue);
        volumeRightMinValue = Math.Min(volumeRightMinValue, rightValue);

        if (channelDataPosition >= channelData.Length)
        {
            channelDataPosition = 0;
        }
    }

    /// <summary>
    /// Performs an FFT calculation on the channel data upon request.
    /// </summary>
    /// <param name="fftBuffer">A buffer where the FFT data will be stored.</param>
    public void GetFFTResults(float[] fftBuffer)
    {
        Complex[] channelDataClone = new Complex[bufferSize];
        channelData.CopyTo(channelDataClone, 0);
        FastFourierTransform.FFT(true, binaryExponentitation, channelDataClone);
        for (int i = 0; i < channelDataClone.Length / 2; i++)
        {
            // Calculate actual intensities for the FFT results.
            fftBuffer[i] = (float)Math.Sqrt(channelDataClone[i].X * channelDataClone[i].X + channelDataClone[i].Y * channelDataClone[i].Y);
        }
    }

    public float LeftMaxVolume
    {
        get { return volumeLeftMaxValue; }
    }

    public float LeftMinVolume
    {
        get { return volumeLeftMinValue; }
    }

    public float RightMaxVolume
    {
        get { return volumeRightMaxValue; }
    }

    public float RightMinVolume
    {
        get { return volumeRightMinValue; }
    }
}

```

![SpectrumAnalyzer](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/SpectrumAnalyzer.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
