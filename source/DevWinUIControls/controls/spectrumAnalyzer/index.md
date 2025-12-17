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

```cs
soundEngine = NAudioEngine.Instance;
SpectrumAnalyzerSample.RegisterSoundPlayer(soundEngine);
soundEngine.OpenFile(@"C:\myAudio.mp3");
soundEngine.Play();
```

{% note warning %}
You can find `NAudioEngine` class [here](https://github.com/ghost1372/DevWinUI/blob/main/dev/DevWinUI.Gallery/Common/NAudioEngine.cs).
{% endnote %}

![SpectrumAnalyzer](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/SpectrumAnalyzer.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
