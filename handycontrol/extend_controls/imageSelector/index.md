---
title: ImageSelector 
---

This control encapsulates a complete set of logic for image selection, display, and deletion.

```cs
public class ImageSelector : Control
```

# Attributes
|Property|Description|Default Value|Remarks|
|-|-|-|-|
|Stretch|Picture stretch mode|Stretch.None||
|Uri|Picture Resources|||
|PreviewBrush|Preview drawing brush|||
|StrokeThickness|Border thickness|||
|StrokeDashArray|Border dashed array|||
|DefaultExt|Default picture suffix name|.jpg||
|Filter|Picture filter string|(.jpg)&#124;*.jpg&#124;(.png)&#124;*.png||
|HasValue|Is there a value|false|||

# Style
|Style|Description|
|-|-|
|ImageSelectorBaseStyle|Default Style|

# Event
|name|
|-|
|ImageSelected|
|ImageUnSelected|


# Case
```xml
<UniformGrid Columns="3" Margin="16">
    <hc:ImageSelector Width="100" Height="100" Margin="16"/>
    <hc:ImageSelector Width="100" Height="100" Margin="16" hc:BorderElement.CornerRadius="50"/>
    <hc:ImageSelector Width="100" Height="100" Margin="16" hc:BorderElement.CornerRadius="50" StrokeDashArray="10,5"/>
    <hc:ImageSelector Width="100" Height="100" Margin="16" hc:BorderElement.CornerRadius="50" BorderBrush="{DynamicResource SuccessBrush}"/>
    <hc:ImageSelector Width="100" Height="100" Margin="16" hc:BorderElement.CornerRadius="50" StrokeDashArray="10,5,10" BorderBrush="{DynamicResource DangerBrush}"/>
    <hc:ImageSelector Width="100" Height="100" Margin="16" hc:BorderElement.CornerRadius="10" StrokeThickness="2" BorderThickness="2" BorderBrush="{DynamicResource PrimaryBrush}"/>
</UniformGrid>
```

![ImageSelector](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Resources/ImageSelector.png)