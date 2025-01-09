---
title: LayoutTransformer
---

Represents a control that applies a layout transformation to its Content.

# Attributes
|Property|
|-|
|RenderTransform|
|Content|

# Example

```xml
<dev:LayoutTransformer RenderTransformOrigin="0.5,0.5">
    <Rectangle Width="200" Height="100" Fill="{ThemeResource SystemFillColorCriticalBrush}" />
    <dev:LayoutTransformer.RenderTransform>
        <CompositeTransform Rotation="90" />
    </dev:LayoutTransformer.RenderTransform>
</dev:LayoutTransformer>
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/LayoutTransformer.gif)