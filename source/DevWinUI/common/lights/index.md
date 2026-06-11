---
title: Lights
---

A set of interactive lighting effects that enhance UI feedback: Ambient adds a constant soft glow, Hover highlights elements when the pointer moves over them, and Ripple creates a brief expanding light when the user clicks or taps.

Can be used individually or in combination.

# Available Lights
|Name|
|-|
|RippleLight|
|HoverLight|
|AmbLight|

# Sample

```cs
AllGrid.Lights.Add(new AmbLight());
AllGrid.Lights.Add(new RippleLight());
AllGrid.Lights.Add(new HoverLight());

```

![Lights](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/XamlLights.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.