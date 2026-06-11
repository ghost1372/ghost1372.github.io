---
title: ImageLoader
---

The ImageLoader system is a WinUI/Win2D-based image and content rendering engine built on top of the Windows.UI.Composition and Microsoft.Graphics.Canvas APIs. It provides an abstraction to asynchronously or synchronously load and draw image, text, or shape content into Composition surfaces, using a unified and extensible drawing model (IContentDrawer).

This design handles device loss gracefully, supports custom image post-processing through LoadTimeEffectHandler, and allows content (e.g., images, shapes, or text) to be reused or redrawn if the composition device is replaced.

# Sample
Initialize the Loader
```cs
ImageLoader.Initialize(Window.Current.Compositor);

```
## Load Image from URI
```cs
var surface = ImageLoader.Instance.LoadFromUri(new Uri("ms-appx:///Assets/image.png"));
myVisual.Brush = surface.Brush;
```

## Load Image with Size and Custom Effect 

```cs
Size desiredSize = new Size(100, 100);
var surface = ImageLoader.Instance.LoadFromUri(
    new Uri("ms-appx:///Assets/image.png"),
    desiredSize,
    (surface, bitmap, device) =>
    {
        // Custom draw logic or filters
        using (var ds = CanvasComposition.CreateDrawingSession(surface))
        {
            ds.DrawImage(bitmap);
        }
    });

myVisual.Brush = surface.Brush;

```

## Load Circle
```cs
var surface = ImageLoader.Instance.LoadCircle(50, Colors.Red);
myVisual.Brush = surface.Brush;
```

## Load Text as Visual

```cs
CanvasTextFormat format = new CanvasTextFormat
{
    FontSize = 24,
    HorizontalAlignment = CanvasHorizontalAlignment.Center,
    VerticalAlignment = CanvasVerticalAlignment.Center
};

var surface = ImageLoader.Instance.LoadText("Hello", new Size(200, 50), format, Colors.White, Colors.Black);
myVisual.Brush = surface.Brush;

```

## ManagedSurface

```cs
ManagedSurface _noiseSurface;
_noiseSurface?.Brush?.Dispose();
_noiseSurface = ImageLoader.Instance.LoadFromUri(new Uri(NoiseUri));
myVisual.Brush = _noiseSurface.Brush;
```
# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.