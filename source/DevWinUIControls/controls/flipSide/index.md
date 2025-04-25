---
title: FlipSide
---

# Attributes
|Property|
|-|
|Side1|
|Side2|
|IsFlipped|
|Axis|
|FlipOrientation|
|AnimationDuration|
|AnimationDampingRatio|

# Example

```xml
<dev:FlipSide>
    <dev:FlipSide.Side1>
        <Grid Background="Red">
            <TextBlock HorizontalAlignment="Center"
                       VerticalAlignment="Center"
                       Text="Side 1" />
        </Grid>
    </dev:FlipSide.Side1>
    <dev:FlipSide.Side2>
        <Grid Background="Blue">
            <TextBlock HorizontalAlignment="Center"
                       VerticalAlignment="Center"
                       Text="Side 2" />
        </Grid>
    </dev:FlipSide.Side2>
</dev:FlipSide>
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/FlipSide.gif)
