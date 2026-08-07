---
title: RangeSlider
---

Support to select a range of values.

```cs
public class TwoWayRangeBase : Control
```

```cs
[DefaultEvent("ValueChanged"), DefaultProperty("Value")]
[TemplatePart(Name = ElementTrack, Type = typeof(Track))]
public class RangeSlider : TwoWayRangeBase
```

# Attributes
|Property|Description|Default Value|Remarks|
|-|-|-|-|
|Minimum|Minimum value|0||
|Maximum|Maximum|0||
|ValueStart|Start of the selected range|0||
|ValueEnd|The end of the selected range|0||
|LargeChange|Single maximum change value|1||
|SmallChange|Single minimum change value|0.1||
|Orientation|Orientation|Orientation.Horizontal||
|IsDirectionReversed|Is it reversed|false||
|Delay|Waiting time before repeated clicks|||
|Interval|Repeated click trigger time interval|||
|AutoToolTipPlacement|Auto ToolTipPlacement|AutoToolTipPlacement.None||
|AutoToolTipPrecision|Automatic tool tip decimal places|0||
|IsSnapToTickEnabled|Whether to automatically move the Thumb to the nearest tick mark|false||
|TickPlacement|The position of the tick mark|TickPlacement.None||
|TickFrequency|The interval between tick marks|1||
|Ticks|Tick Line Drawing Collection|||
|IsMoveToPointEnabled|Whether the Thumb can be moved to the position clicked by the mouse immediately|false|||

# Events
|Name|Description|
|-|-|
| ValueChanged | Triggered when the selected range changes |

# Case

```xml
<StackPanel Margin="32" Orientation="Horizontal">
    <StackPanel>
        <hc:RangeSlider Width="400" IsSnapToTickEnabled="True" ValueStart="2" ValueEnd="8"/>
        <hc:RangeSlider Width="400" IsSnapToTickEnabled="True" ValueEnd="3" Margin="0,32,0,0" IsEnabled="False"/>
        <hc:RangeSlider Width="400" hc:TipElement.Visibility="Visible" hc:TipElement.Placement="Top" IsSnapToTickEnabled="True" Maximum="100" ValueEnd="60" TickFrequency="10" TickPlacement="BottomRight" Margin="0,32,0,0"/>
        <hc:RangeSlider Width="400" hc:TipElement.Visibility="Visible" hc:TipElement.Placement="Bottom" hc:TipElement.StringFormat="#0.00" ValueEnd="5" TickPlacement="Both" Margin="0,32,0,0"/>
    </StackPanel>
    <StackPanel Margin="32,0,0,0" Orientation="Horizontal">
        <hc:RangeSlider Height="400" IsSnapToTickEnabled="True" ValueEnd="8" Orientation="Vertical"/>
        <hc:RangeSlider Height="400" IsSnapToTickEnabled="True" ValueEnd="3" Margin="32,0,0,0" IsEnabled="False" Orientation="Vertical"/>
        <hc:RangeSlider Height="400" hc:TipElement.Visibility="Visible" hc:TipElement.Placement="Left" IsSnapToTickEnabled="True" Maximum="100" ValueEnd="60" TickFrequency="10" TickPlacement="BottomRight" Margin="32,0,0,0" Orientation="Vertical"/>
        <hc:RangeSlider Height="400" hc:TipElement.Visibility="Visible" hc:TipElement.Placement="Right" hc:TipElement.StringFormat="#0.00" ValueEnd="5" TickPlacement="Both" Margin="32,0" Orientation="Vertical"/>
    </StackPanel>
</StackPanel>
```
![RangeSlider](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Resources/RangeSlider.png)