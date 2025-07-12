---
title: CompositionShadow
---

Demonstrates how to apply drop shadows to Xaml elements

# Property

|Name|
|-|
|BlurRadius|
|Color|
|OffsetX|
|OffsetY|
|OffsetZ|
|ShadowOpacity|
|Content|
|Mask|

# Example

```xml
 <dev:CompositionShadow BlurRadius="10" ShadowOpacity="0.7" Color="Yellow">
    <TextBlock FontSize="30"
                FontWeight="SemiBold"
                TextWrapping="Wrap">
        Here’s a custom control that allows you to apply DropShadows through Markup on XAML Text, Images, or Shapes
    </TextBlock>
</dev:CompositionShadow>
```

# Using Mask

```xml
<ToggleSwitch x:Name="TGMask" Header="Toggle Mask" Toggled="TGMask_Toggled" />

 <dev:CompositionShadow x:Name="RenderShadow" Width="200" Height="300" BlurRadius="10" ShadowOpacity="0.7" Color="Green">
    <dev:CompositionImage x:Name="ComImage" Source="ms-appx:///Assets/Others/Girl.jpg" />
</dev:CompositionShadow>
```

```cs
private Compositor _compositor;
private ManagedSurface _imageMaskSurface;
private CompositionMaskBrush _maskBrush;
public CompositionShadowPage()
{
    InitializeComponent();
    Loaded += CompositionShadowPage_Loaded;
    Unloaded += CompositionShadowPage_Unloaded;
}

private void CompositionShadowPage_Unloaded(object sender, RoutedEventArgs e)
{
    if (_imageMaskSurface != null)
    {
        _imageMaskSurface.Dispose();
    }
}

private void CompositionShadowPage_Loaded(object sender, RoutedEventArgs e)
{
    _compositor = ElementCompositionPreview.GetElementVisual(this).Compositor;

    _imageMaskSurface = ImageLoader.Instance.LoadCircle(200, Colors.White);

    CompositionSurfaceBrush source = ComImage.SurfaceBrush as CompositionSurfaceBrush;

    _maskBrush = _compositor.CreateMaskBrush();
    _maskBrush.Mask = _imageMaskSurface.Brush;
    _maskBrush.Source = source;
}

private void TGMask_Toggled(object sender, RoutedEventArgs e)
{
    if (TGMask.IsOn)
    {
        ComImage.Brush = _maskBrush;
        RenderShadow.Mask = _maskBrush.Mask;
    }
    else
    {
        ComImage.Brush = _maskBrush.Source;
        RenderShadow.Mask = null;
    }
}
```

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/CompositionShadow.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
