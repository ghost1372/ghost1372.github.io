---
title: SegmentedSlider
---

# Attributes

|Name|
|-|
|TitleHorizontalAlignment|
|Spacing|
|SelectedTime|
|Value|
|Maximum|
|SegmentCount|
|SegmentTitles|
|TotalTime|
|TimeSegments|

# Events

|Name|
|-|
|ValueChanged|
|SelectedTimeChanged|
|DragStarted|
|DragCompleted|

# Methods

|Name|
|-|
|GetItemsRepeater|
|GetSegments|

# Simple Example

```xml
<dev:SegmentedSlider x:Name="SegmentedSliderSample" SegmentCount="5" Spacing="5"/>
```

```cs
SegmentedSliderSample.SegmentTitles = new List<string>
{
    "Very Low",
    "Low",
    "Medium",
    "High",
    "Very High",
};
```

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/SegmentedSlider.gif)

# Time Based Example

```xml
<dev:SegmentedSlider x:Name="SegmentedSliderSample" TotalTime="01:20:00" Spacing="5"/>
```

```cs
SegmentedSliderTimeSample.TimeSegments = new List<SegmentedSliderTimeInfo>
{
    new SegmentedSliderTimeInfo
    {
        StartTime = TimeSpan.Zero,
        EndTime = new TimeSpan(0, 30, 0), // first 30 minutes
        Title = "Intro"
    },
    new SegmentedSliderTimeInfo
    {
        StartTime = new TimeSpan(0, 20, 0),
        EndTime = new TimeSpan(1, 0, 0), // 30-60 minutes
        Title = "Main Part"
    },
    new SegmentedSliderTimeInfo
    {
        StartTime = new TimeSpan(1, 0, 0),
        EndTime = new TimeSpan(1, 20, 0), // 60-80 minutes
        Title = "Ending"
    }
};
```
![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/SegmentedSlider2.gif)

{% note warning %}
If you want to use Time Based Segments, dont set SegmentCount, and if you want to use Simple Mode, dont set TotalTime.
{% endnote %}


# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
