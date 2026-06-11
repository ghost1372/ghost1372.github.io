---
title: AudioWave 
---

Audio visualizer

# Property

|Name|
|-|
|Duration|
|BarWidth|
|BarSpacing|
|BarBackgroundGradientStops|
|BarBackground|
|BarForegroundGradientStops|
|BarForeground|
|BarRadiusX|
|BarRadiusY|
|Progress|
|CanSelectedByMouse|

# Methods

|Name|
|-|
|Start|
|Pause|
|Stop|
|GenerateSampleWaveData|
|GenerateSampleWaveData2|
|UpdateWaveData|

# Example

```xml
<dev:AudioWave x:Name="AudioWaveSample" Height="100" CanSelectedByMouse="True" />
```
you can generate your data by analyzing audio files, or you can use our fake data.

```cs
AudioWaveSample.WaveDataProvider = OnFakeWaveData;
AudioWaveSample.UpdateWaveData();

private float[] OnFakeWaveData()
{
    return AudioWaveSample.GenerateSampleWaveData(200);
}
```

![AudioWave](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/AudioWave.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
