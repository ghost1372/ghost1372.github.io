---
title: BorderBeam
---

# Property

|Name|
|-|
|Size|
|Duration|
|Delay|
|BorderWidth|
|ColorFrom|
|ColorTo|

# Example

```xml
<Grid Width="320" Height="160">
    <dev:BorderBeam CornerRadius="16" />
    <TextBlock Text="Hello" HorizontalAlignment="Center" VerticalAlignment="Center" />
</Grid>
```

```xml
<dev:BorderBeam Width="320"
                Height="160"
                CornerRadius="16"
                Size="150"
                Duration="8"
                BorderWidth="2"
                ColorFrom="#FF40AAFF"
                ColorTo="#FFFF40A0" />
```

> [!NOTE]
> The beam follows the standard `CornerRadius` property of the control.

> [!WARNING]
> `Size` is the length of the beam in pixels, `Duration` and `Delay` are in seconds.

> [!WARNING]
> Changing `Duration` or `Delay` restarts the animation.

> [!WARNING]
> This control requires the `Microsoft.Graphics.Win2D` package.

![BorderBeam](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/BorderBeam.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
