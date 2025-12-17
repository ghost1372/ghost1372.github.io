---
title: WaveformTimeline
---

Displays a stereo waveform and allows a user to change playback position.

# Property

|Name|
|-|
|LeftLevelBrush|
|RightLevelBrush|
|ProgressBarBrush|
|ProgressBarThickness|
|CenterLineBrush|
|CenterLineThickness|
|RepeatRegionBrush|
|AllowRepeatRegions|
|TimelineTickBrush|

# Methods

|Name|
|-|
|RegisterSoundPlayer|

# Virtual Methods (override)

|Name|
|-|
|OnLeftLevelBrushChanged|
|OnRightLevelBrushChanged|
|OnProgressBarBrushChanged|
|OnProgressBarThicknessChanged|
|OnCenterLineBrushChanged|
|OnCenterLineThicknessChanged|
|OnRepeatRegionBrushChanged|
|OnAllowRepeatRegionsChanged|
|OnTimelineTickBrushChanged|


# Example

```xml
<dev:WaveformTimeline x:Name="WaveformTimelineSample" />
```

```cs
soundEngine = NAudioEngine.Instance;
WaveformTimelineSample.RegisterSoundPlayer(soundEngine);
soundEngine.OpenFile(@"C:\myAudio.mp3");
soundEngine.Play();
```

{% note warning %}
You can find `NAudioEngine` class [here](https://github.com/ghost1372/DevWinUI/blob/main/dev/DevWinUI.Gallery/Common/NAudioEngine.cs).
{% endnote %}

![WaveformTimeline](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/WaveformTimeline.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
