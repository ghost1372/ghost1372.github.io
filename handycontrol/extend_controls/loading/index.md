---
title: Loading
---

Display dynamic effects during time-consuming operation. Currently, it contains circular and linear loading bars. Related blog post: ["WPF control library-imitating the progress bar of Windows 10"](https://www.cnblogs.com/nabian/p/9288576.html)

```cs
public abstract class LoadingBase : ContentControl
```
```cs
public class LoadingLine : LoadingBase
```
```cs
public class LoadingCircle : LoadingBase
```

# LoadingBase attribute
|Property|Description|Default Value|Remarks|
|-|-|-|-|
|IsRunning|Is it currently loading|true||
|DotCount|Number of Dots|5||
|DotInterval|Dot Interval|10||
|DotBorderBrush|Dot border color|||
|DotBorderThickness|Dot border thickness|0||
|DotDiameter|Dot radius|6||
|DotSpeed|The time taken for one cycle|4s||
|DotDelayTime|Animation delay of each point|80ms|||

# LoadingCircle property
|Property|Description|Default Value|Remarks|
|-|-|-|-|
|DotOffSet|Dot Offset|20||
|NeedHidden|Does the dot need to be hidden in the middle of the movement|true|||

# Styles
| Style for LoadingLine | Style for LoadingCircle |
| - | - |
| LoadingLineLarge|LoadingCircleLarge|
| LoadingLineLargeLight|LoadingCircleLargeLight|
| LoadingLineLight|LoadingCircleLight|

# Case

```xml
<StackPanel Width="600" Margin="32" VerticalAlignment="Center">
    <hc:LoadingLine/>
    <hc:LoadingLine Margin="0,30" Foreground="BlueViolet" Style="{StaticResource LoadingLineLarge}"/>
    <StackPanel Orientation="Horizontal" HorizontalAlignment="Center">
        <hc:LoadingCircle/>
        <Border VerticalAlignment="Center" Margin="32,0,0,0" Background="{DynamicResource PrimaryBrush}" CornerRadius="10">
            <hc:LoadingCircle Style="{StaticResource LoadingCircleLight}" Margin="10"/>
        </Border>
    </StackPanel>
</StackPanel>
```

![Loading](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Resources/Loading.gif)