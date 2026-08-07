---
title: PreviewSlider
---

You can use the preview slider to feedback the status information at different locations to the user.

```cs
[TemplatePart(Name = TrackKey, Type = typeof(Track))]
[TemplatePart(Name = ThumbKey, Type = typeof(FrameworkElement))]
public class PreviewSlider : Slider
```

# Attributes
|Property|Description|Default Value|Remarks|
|-|-|-|-|
|PreviewContent|Preview Content|||
|PreviewContentOffset|Preview ContentOffset|9|||

# Additional attributes
|Property|Description|Default Value|Remarks|
|-|-|-|-|
|PreviewPosition|Preview position|0|||

# Events
|Name|Description|
|-|-|
| PreviewPositionChanged | Triggered when the preview position changes |

# Case

```xml
<hc:PreviewSlider Name="PreviewSliderHorizontal" Width="300" Value="500" Maximum="1000">
    <hc:PreviewSlider.PreviewContent>
        <Label Style="{StaticResource LabelPrimary}" Content="{Binding Path=(hc:PreviewSlider.PreviewPosition),RelativeSource={RelativeSource Self}}" ContentStringFormat="#0.00"/>
    </hc:PreviewSlider.PreviewContent>
</hc:PreviewSlider>
```
![PreviewSlider](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Resources/PreviewSlider.gif)