---
title: CompositionHelper
---

# MakeLongShadow

```xml
<Grid Background="DarkRed">
    <Rectangle x:Name="ShadowElement" />
    <TextBlock x:Name="TextBlockElement"
               FontSize="148"
               FontWeight="Bold"
               Foreground="Orange"
               Text="00:10:15" />
</Grid>
```

```cs
CompositionHelper.MakeLongShadow(188, 0.3f, TextBlockElement, ShadowElement, Color.FromArgb(255, 250, 110, 93));
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.

![LongShadowTextBlock](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/LongShadowTextBlock.png)
