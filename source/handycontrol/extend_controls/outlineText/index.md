---
title: OutlineText
---

`OutlineText` can make the text highlighted.

```cs
public class OutlineText: FrameworkElement
```

# Attributes
|Property|Description|Default Value|Remarks|
|-|-|-|-|
|StrokePosition|Outline Position|StrokePosition.Center||
|Text|Text|||
|TextAlignment|Text Alignment|TextAlignment.Left||
|TextTrimming|Text truncation method|TextTrimming.None||
|TextWrapping|Text Wrapping|TextWrapping.NoWrap||
|Fill|Text color|||
|Stroke|Outline Color|||
|StrokeThickness|Outline thickness|0||
|FontFamily|Font|||
|FontSize|Font Size|||
|FontStretch|Font deformation method|||
|FontStyle|Font Style|||
|FontWeight|Font Weight||||

# Case

```xml
<StackPanel Margin="32" Width="400">
    <hc:OutlineText TextWrapping="Wrap" Fill="{DynamicResource PrimaryTextBrush}" Text="{Binding Source='Text', Converter={StaticResource StringRepeatConverter}, ConverterParameter=20}"/>
    <hc:OutlineText Margin="0,10,0,0" FontSize="30" Fill="{DynamicResource SuccessBrush}" Text="{Binding Source='Text', Converter={StaticResource StringRepeatConverter}, ConverterParameter=8}"/>
    <hc:OutlineText Margin="0,10,0,0" Fill="{DynamicResource PrimaryTextBrush}" FontSize="30" FontStyle="Italic" Text="{Binding Source='Text', Converter={StaticResource StringRepeatConverter}, ConverterParameter=8}"/>
    <hc:OutlineText Margin="0,10,0,0" TextWrapping="Wrap" TextTrimming="CharacterEllipsis" FontSize="50" StrokeThickness="2" Fill="{DynamicResource DangerBrush}" Stroke="{DynamicResource PrimaryBrush}" Text="{Binding Source='Text', Converter={StaticResource StringRepeatConverter}, ConverterParameter=5}"/>
    <hc:OutlineText Margin="0,10,0,0" FontSize="80" FontWeight="Bold" StrokeThickness="4" Fill="{DynamicResource PrimaryBrush}" Stroke="{DynamicResource DangerBrush}" Text="{Binding Source='Text', Converter={StaticResource StringRepeatConverter}, ConverterParameter=2}"/>
    <hc:OutlineText Margin="0,10,0,0" StrokePosition="Outside" FontSize="80" FontWeight="Bold" StrokeThickness="4" Fill="{DynamicResource PrimaryBrush}" Stroke="{DynamicResource DangerBrush}" Text="{Binding Source='Text', Converter={StaticResource StringRepeatConverter}, ConverterParameter=2}"/>
    <hc:OutlineText Margin="0,10,0,0" StrokePosition="InSide" FontSize="80" FontWeight="Bold" StrokeThickness="4" Fill="{DynamicResource PrimaryBrush}" Stroke="{DynamicResource DangerBrush}" Text="{Binding Source='Text', Converter={StaticResource StringRepeatConverter}, ConverterParameter=2}"/>
</StackPanel>
```
![OutlineText](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Resources/OutlineText.png)