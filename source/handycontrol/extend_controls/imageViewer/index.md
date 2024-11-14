---
title: ImageViewer
---

`ImageViewer` is the core component of `ImageBrowser`, it can be used as an independent control without pop-up windows.

```cs
[TemplatePart(Name = ElementPanelMain, Type = typeof(Panel))]
[TemplatePart(Name = ElementCanvasSmallImg, Type = typeof(Canvas))]
[TemplatePart(Name = ElementBorderMove, Type = typeof(Border))]
[TemplatePart(Name = ElementBorderBottom, Type = typeof(Border))]
[TemplatePart(Name = ElementImageMain, Type = typeof(Image))]
public class ImageViewer : Control
```

# Attributes
|Property|Description|Default Value|Remarks|
|-|-|-|-|
|ShowImgMap|Whether to display the small map|false||
|ImageSource|Image Resources|||
|ShowToolBar||||
|MoveGesture||||
|Uri||||
|IsFullScreen|Is it in full screen display|false|||

# Case

```xml
<hc:ImageViewer Background="{DynamicResource SecondaryRegionBrush}" Width="600" Height="330" ImageSource="/HandyControlDemo;component/Resources/Img/1.jpg"/>
```

![ImageViewer](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/extend_controls/ImageViewer_1.png)