---
title: BlurWindow
---

The background blur window can be used to enhance the UI effect, but it will sacrifice some performance.

```cs
public class BlurWindow : Window
```

{% note info %}
All `hc:Window` properties can be used. Click <ins>**[here](https://ghost1372.github.io/handycontrol/extend_controls/window/#Attributes)**</ins> to view
{% endnote %}

{% note warning %}
Operating system support : windows 10
{% endnote %}
{% note warning %}
Rewrite the resource `BlurGradientValue` to customize the blur color
{% endnote %}

# Case

```xml
<system:UInt32 x:Key="BlurGradientValue">0x99FFFFFF</system:UInt32>
```

```xml
<hc:BlurWindow x:Class="HandyControlDemo.Window.BlurWindow"
               xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
               xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
               xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
               xmlns:hc="https://handyorg.github.io/handycontrol"
               Title="Title"
               Height="450" 
               Width="800" >
</hc:BlurWindow>
```

![BlurWindow](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Resources/BlurWindow.gif)