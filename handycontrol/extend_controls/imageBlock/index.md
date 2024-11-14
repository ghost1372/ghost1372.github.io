---
title: ImageBlock
---

The picture block can be used to divide a large picture into small pictures with the same width and height, and play them in order to form an effect similar to gif pictures.

```cs
public class ImageBlock : FrameworkElement
```

# Attributes
|Property|Description|Default Value|Remarks|
|-|-|-|-|
|StartColumn|Play start column|0||
|StartRow|Play start row|0||
|EndColumn|Play end column|0||
|EndRow|Play end row|0||
|IsPlaying|Is it playing|false||
|Columns|The number of columns that need to be divided|1||
|Rows|The number of rows to be divided|1||
|Interval|Play interval of small pictures|1s||
|Source|Large image resources||||

# Case

```xml
<UniformGrid Rows="3" Columns="4" Margin="32">
    <hc:ImageBlock Source="/HandyControlDemo;component/Resources/Img/Dance.png" Interval="0:0:0.125" Columns="8" Rows="10" StartColumn="0" StartRow="0" EndColumn="7" EndRow="0" Width="110" Height="128" IsPlaying="True"/>
    <hc:ImageBlock Source="/HandyControlDemo;component/Resources/Img/Dance.png" Interval="0:0:0.125" Columns="8" Rows="10" StartColumn="0" StartRow="1" EndColumn="7" EndRow="1" Width="110" Height="128" IsPlaying="True"/>
    <hc:ImageBlock Source="/HandyControlDemo;component/Resources/Img/Dance.png" Interval="0:0:0.125" Columns="8" Rows="10" StartColumn="0" StartRow="2" EndColumn="7" EndRow="2" Width="110" Height="128" IsPlaying="{Binding IsMouseOver,RelativeSource={RelativeSource Self}}"/>
    <hc:ImageBlock Source="/HandyControlDemo;component/Resources/Img/Dance.png" Interval="0:0:0.125" Columns="8" Rows="10" StartColumn="0" StartRow="3" EndColumn="7" EndRow="3" Width="110" Height="128" IsPlaying="{Binding IsMouseOver,RelativeSource={RelativeSource Self}}"/>
    <hc:ImageBlock Source="/HandyControlDemo;component/Resources/Img/Dance.png" Interval="0:0:0.1" Columns="8" Rows="10" StartColumn="0" StartRow="4" EndColumn="7" EndRow="4" Width="110" Height="128" IsPlaying="True"/>
    <hc:ImageBlock Source="/HandyControlDemo;component/Resources/Img/Dance.png" Interval="0:0:0.125" Columns="8" Rows="10" StartColumn="0" StartRow="5" EndColumn="7" EndRow="5" Width="110" Height="128" IsPlaying="True"/>
    <hc:ImageBlock Source="/HandyControlDemo;component/Resources/Img/Dance.png" Interval="0:0:0.125" Columns="8" Rows="10" StartColumn="0" StartRow="6" EndColumn="7" EndRow="6" Width="110" Height="128" IsPlaying="{Binding IsMouseOver,RelativeSource={RelativeSource Self}}"/>
    <hc:ImageBlock Source="/HandyControlDemo;component/Resources/Img/Dance.png" Interval="0:0:0.1" Columns="8" Rows="10" StartColumn="0" StartRow="7" EndColumn="7" EndRow="7" Width="110" Height="128" IsPlaying="True"/>
    <hc:ImageBlock Source="/HandyControlDemo;component/Resources/Img/Dance.png" Interval="0:0:0.125" Columns="8" Rows="10" StartColumn="0" StartRow="8" EndColumn="7" EndRow="8" Width="110" Height="128" IsPlaying="{Binding IsMouseOver,RelativeSource={RelativeSource Self}}"/>
    <hc:ImageBlock Source="/HandyControlDemo;component/Resources/Img/Dance.png" Interval="0:0:0.125" Columns="8" Rows="10" StartColumn="0" StartRow="9" EndColumn="7" EndRow="9" Width="110" Height="128" IsPlaying="{Binding IsMouseOver,RelativeSource={RelativeSource Self}}"/>
</UniformGrid>
```

![ImageBlock](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Resources/ImageBlock.gif)

{% note warning %}
Remember to call the `Dispose` method to clean up resources when you no longer use `ImageBlock`.
{% endnote %}