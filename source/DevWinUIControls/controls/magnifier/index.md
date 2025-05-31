---
title: Magnifier
---

# Attributes
|Property|
|-|
|SourceSize|
|Position|
|HorizontalOffset|
|VerticalOffset|

# Example

```xml
<Grid>
    <Image dev:Magnifier.Instance="{x:Bind MyMagnifier, Mode=OneWay}"
           Source="ms-appx:///Assets/Others/Girl.jpg" />
    <dev:Magnifier x:Name="MyMagnifier" />
</Grid>
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/Magnifier.gif)