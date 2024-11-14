---
title: RunningBlock
---

The RunningBlock can be used to rotate continuous content.

```cs
[TemplatePart(Name = ElementContent, Type = typeof(FrameworkElement))]
[TemplatePart(Name = ElementPanel, Type = typeof(Panel))]
public class RunningBlock : ContentControl
```

# Attributes
|Property|Description|Default Value|Remarks|
|-|-|-|-|
|Runaway|Can scroll content out of view|true||
|AutoRun|Whether to automatically trigger scrolling|false|Scrolling is triggered when the display area is not enough|
|Orientation|Scrolling Direction|Orientation.Horizontal||
|Duration|The time required to roll a cycle|5s||
|Speed|Scrolling speed|NaN|If a value is set, it will override the value of Duration|
|IsRunning|Is it rolling|true||
|RunningDirection||||
|AutoReverse|Whether to reverse the scrolling|false|||

# Case

```xml
<StackPanel Margin="32" VerticalAlignment="Center">
    <hc:RunningBlock Content="Text"/>
    <hc:RunningBlock Content="Text" FontSize="20" FontWeight="Bold" Foreground="OrangeRed" Duration="0:0:10" Margin="0,16,0,0"/>
    <hc:RunningBlock Margin="0,16,0,0" Duration="0:0:20" IsRunning="{Binding IsMouseOver,RelativeSource={RelativeSource Self},Converter={StaticResource Boolean2BooleanReConverter}}">
        <StackPanel Orientation="Horizontal">
            <hc:GifImage Uri="/HandyControlDemo;component/Resources/Img/QQ/1.gif" Margin="10,0" Width="30" Height="30"/>
            <hc:GifImage Uri="/HandyControlDemo;component/Resources/Img/QQ/2.gif" Margin="10,0" Width="30" Height="30"/>
            <hc:GifImage Uri="/HandyControlDemo;component/Resources/Img/QQ/3.gif" Margin="10,0" Width="30" Height="30"/>
            <hc:GifImage Uri="/HandyControlDemo;component/Resources/Img/QQ/4.gif" Margin="10,0" Width="30" Height="30"/>
            <hc:GifImage Uri="/HandyControlDemo;component/Resources/Img/QQ/5.gif" Margin="10,0" Width="30" Height="30"/>
            <hc:GifImage Uri="/HandyControlDemo;component/Resources/Img/QQ/6.gif" Margin="10,0" Width="30" Height="30"/>
            <hc:GifImage Uri="/HandyControlDemo;component/Resources/Img/QQ/7.gif" Margin="10,0" Width="30" Height="30"/>
            <hc:GifImage Uri="/HandyControlDemo;component/Resources/Img/QQ/8.gif" Margin="10,0" Width="30" Height="30"/>
            <hc:GifImage Uri="/HandyControlDemo;component/Resources/Img/QQ/9.gif" Margin="10,0" Width="30" Height="30"/>
            <hc:GifImage Uri="/HandyControlDemo;component/Resources/Img/QQ/10.gif" Margin="10,0" Width="30" Height="30"/>
        </StackPanel>
    </hc:RunningBlock>
</StackPanel>
```

![RunningBlock](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Resources/RunningBlock.gif)