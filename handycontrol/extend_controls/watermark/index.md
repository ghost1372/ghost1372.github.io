---
title: Watermark
---

You can create a tiled background with the specified content.

```cs
[TemplatePart(Name = ElementRoot, Type = typeof(Border))]
[ContentProperty(nameof(Content))]
public class Watermark : Control
```

# Attributes
|Property|Description|Default Value|Remarks|
|-|-|-|-|
|Angle|Watermark rotation angle|20|provided by default style|
|Content|Content that needs to use watermark|||
|Mark|Watermark|||
|MarkWidth|Watermark width|0||
|MarkHeight|Watermark height|0||
|MarkBrush|Watermark color|||
|AutoSizeEnabled|Whether the watermark is automatically adapted to the size|true||
|MarkMargin|Watermark Margin||||

# Case

```xml
 <hc:UniformSpacingPanel VerticalAlignment="Center" Margin="32" ChildWrapping="Wrap" Spacing="16" ItemWidth="256" ItemHeight="128">
<hc:Watermark Mark="HandyControl">
    <Border BorderThickness="1" CornerRadius="4" BorderBrush="{DynamicResource BorderBrush}" />
</hc:Watermark>
<hc:Watermark Mark="HandyControl" FontSize="30">
    <Border BorderThickness="1" CornerRadius="4" BorderBrush="{DynamicResource BorderBrush}" />
</hc:Watermark>
<hc:Watermark Mark="HandyControl" FontSize="30" Angle="45">
    <Border BorderThickness="1" CornerRadius="4" BorderBrush="{DynamicResource BorderBrush}" />
</hc:Watermark>
<hc:Watermark Mark="HandyControl" FontSize="30" Angle="45" MarkBrush="{DynamicResource DangerBrush}">
    <Border BorderThickness="1" CornerRadius="4" BorderBrush="{DynamicResource BorderBrush}" />
</hc:Watermark>
<hc:Watermark Mark="HandyControl" FontSize="30" Angle="45" MarkBrush="{DynamicResource DangerBrush}" MarkMargin="10">
    <Border BorderThickness="1" CornerRadius="4" BorderBrush="{DynamicResource BorderBrush}" />
</hc:Watermark>
</hc:UniformSpacingPanel>
```

```xml
<hc:Watermark Mark="Project" FontSize="80" FontWeight="Bold" MarkMargin="30,0"/>
```
![Watermark](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/extend_controls/Watermark_1.png)

```xml
<hc:Watermark Mark="{StaticResource GitHubStrGeometry}" MarkMargin="30,0" MarkWidth="200" MarkHeight="100"/>
```

![Watermark](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/extend_controls/Watermark_2.png)