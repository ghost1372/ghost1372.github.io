---
title: CoverFlow
---

This control displays the cover in 3D and can be used to enhance the interface effect.

```cs
[TemplatePart(Name = ElementViewport3D, Type = typeof(Viewport3D))]
[TemplatePart(Name = ElementCamera, Type = typeof(ProjectionCamera))]
[TemplatePart(Name = ElementVisualParent, Type = typeof(ModelVisual3D))]
public class CoverFlow : Control
```
# Attributes
|Property|Description|Default Value|Remarks|
|-|-|-|-|
|PageIndex|Page Number|||
|Loop|Whether to loop display||||

# Method
|Method|Description|
|-|-|
|Add(string)|Add a resource|
|Add(Uri)|Add a resource|
|AddRange(IEnumerable<object>)|Add resources in batches|
|Next||
|Prev||

# Case

```cs
CoverFlowMain.AddRange(new []
{
    new Uri(@"pack://application:,,,/Resources/Img/Album/1.jpg"),
    new Uri(@"pack://application:,,,/Resources/Img/Album/2.jpg"),
    new Uri(@"pack://application:,,,/Resources/Img/Album/3.jpg"),
    new Uri(@"pack://application:,,,/Resources/Img/Album/4.jpg"),
    new Uri(@"pack://application:,,,/Resources/Img/Album/5.jpg"),
    new Uri(@"pack://application:,,,/Resources/Img/Album/6.jpg"),
    new Uri(@"pack://application:,,,/Resources/Img/Album/7.jpg"),
    new Uri(@"pack://application:,,,/Resources/Img/Album/8.jpg"),
    new Uri(@"pack://application:,,,/Resources/Img/Album/9.jpg"),
    new Uri(@"pack://application:,,,/Resources/Img/Album/10.jpg")
});
CoverFlowMain.JumpTo(2);
```

```xml
<hc:CoverFlow x:Name="CoverFlowMain" Margin="32" Width="500" Height="300"/>
```

![CoverFlow](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Resources/CoverFlow.gif)