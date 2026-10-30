---
title: PlayStationParticles
---

A decorative field of drifting, twinkling particles rendered with Win2D.

# Property

|Name|
|-|
|ParticleBrush|
|Speed|

# Example

```xml
<Grid>
    <dev:PlayStationParticles ParticleBrush="#FF4F8CFF"
                              Speed="1" />
    <TextBlock Text="Content on top" />
</Grid>
```

> [!WARNING]
> Only `SolidColorBrush` is supported for `ParticleBrush`, any other brush falls back to white. `Speed` is a double clamped from 0 to 4.

![PlayStationParticles](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/PlayStationParticles.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
