---
title: StarBorder
---

# Property

|Name|
|-|
|StarColor|
|TrailColor|
|Duration|
|Direction|
|Stars|
|TrailLength|
|LineThickness|
|Radius|
|Glow|
|Sparkle|
|HoverMode|
|ClickPulse|
|Theme|
|BackgroundColor|
|TextColor|
|BorderColor|

# Example

```xml
<dev:StarBorder Width="240" Height="64">
    <TextBlock Text="Hello" HorizontalAlignment="Center" VerticalAlignment="Center" />
</dev:StarBorder>
```

```xml
<dev:StarBorder Stars="3"
                Duration="6"
                Sparkle="True"
                HoverMode="Brighten"
                Theme="Light" />
```

> [!NOTE]
> `Direction` accepts `Clockwise` or `CounterClockwise`.

> [!NOTE]
> `HoverMode` accepts `Lap`, `Brighten`, `Reveal` or `None`.

> [!NOTE]
> `Theme` accepts `Dark` or `Light`. Any color property that is left transparent (the default) falls back to the selected theme.

> [!WARNING]
> `Duration` is in seconds (minimum 0.2), `TrailLength` and `Glow` should be from 0 to 1, and `Stars` is limited to 1 to 6.

> [!WARNING]
> This control requires the `Microsoft.Graphics.Win2D` package.

![StarBorder](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/StarBorder.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
