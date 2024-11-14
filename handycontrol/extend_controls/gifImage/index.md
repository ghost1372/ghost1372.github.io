---
title: GifImage
---

Wpf implementation of Gif.

```cs
public class GifImage : Image, IDisposable
```

# Attributes
|Property|Description|Default Value|Remarks|
|-|-|-|-|
|Uri|Picture Uri||||

# Case

```xml
<hc:GifImage x:Name="GifImageMain" Stretch="None" Margin="32" Uri="/HandyControlDemo;component/Resources/Img/car_chase.gif"/>
```
or

```xml
 <hc:GifImage  Width="400" Height="300">
               <hc:GifImage.Source>
                <BitmapImage UriSource="/HandyControlDemo;component/Resources/Img/car_chase.gif"/>
               </hc:GifImage.Source>
           </hc:GifImage>
```

![GifImage](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Resources/GifImage.gif)

{% note warning %}
When you no longer use `GifImage`, remember to call the `Dispose` method to clean up resources.
{% endnote %}