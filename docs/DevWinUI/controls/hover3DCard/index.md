---
title: Hover3DCard
---

# Property

|Name|
|-|
|MaxTilt|
|HoverScale|
|Perspective|
|SmoothingMs|

# Example

```xml
<dev:Hover3DCard Width="320" Height="200">
    <TextBlock Text="Hover me"
               HorizontalAlignment="Center"
               VerticalAlignment="Center" />
</dev:Hover3DCard>
```

```xml
<dev:Hover3DCard MaxTilt="12"
                 HoverScale="1.08"
                 Perspective="1000"
                 SmoothingMs="80">
    <Image Source="ms-appx:///Assets/Cover.png" />
</dev:Hover3DCard>
```

> [!NOTE]
> `MaxTilt` is in degrees and `SmoothingMs` is in milliseconds.

![Hover3DCard](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/Hover3DCard.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
