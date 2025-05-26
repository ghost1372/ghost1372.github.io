---
title: LayeredFontIcons
---

Combine Multiple Icons

# Attributes
|Property|
|-|
|FontIcons|

```xml
<dev:LayeredFontIcons>
    <dev:LayeredFontIcons.FontIcons>
        <FontIcon Margin="0,0,15,0"
                  Glyph="&#xE973;"
                  RenderTransformOrigin="0.5,0.5">
            <FontIcon.RenderTransform>
                <ScaleTransform ScaleX="0.7" ScaleY="0.7" />
            </FontIcon.RenderTransform>
        </FontIcon>
        <FontIcon Margin="15,0,0,0"
                  Glyph="&#xE974;"
                  RenderTransformOrigin="0.5,0.5">
            <FontIcon.RenderTransform>
                <ScaleTransform ScaleX="0.7" ScaleY="0.7" />
            </FontIcon.RenderTransform>
        </FontIcon>
        <FontIcon Glyph="&#xE949;"
                  RenderTransformOrigin="0.5,0.5">
            <FontIcon.RenderTransform>
                <RotateTransform Angle="-70" />
            </FontIcon.RenderTransform>
        </FontIcon>
    </dev:LayeredFontIcons.FontIcons>
</dev:LayeredFontIcons>
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/LayeredFontIcons.png)
