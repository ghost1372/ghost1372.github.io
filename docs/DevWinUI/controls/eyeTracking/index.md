---
title: EyeTracking
---

# Property

|Name|
|-|
|EyeSize|
|Gap|
|EyeCount|
|Kind|
|ScleraBrush|
|CyberScleraBrush|
|IrisBrush|
|IrisAccentBrush|
|PupilBrush|
|OutlineBrush|
|RimBrush|
|VeinBrush|
|HighlightBrush|
|ShadeBrush|
|UpperEyelidShadeBrush|
|LowerEyelidShadeBrush|
|PupilRange|
|ShowReflection|
|ShowIrisDetail|
|ShowEyelids|
|ReactivePupil|
|IdleAnimation|
|BlinkInterval|
|GlobalMouseTracking|

# Enums

|EyeKind|
|-|
|Realistic|
|Cartoon|
|Minimal|
|Cyber|

# Example

```xml
<dev:EyeTracking Kind="Cartoon" EyeCount="2" />
```

> [!WARNING]
> PupilRange is a double and should be from 0 to 1. BlinkInterval is in milliseconds.

> [!NOTE]
> When `GlobalMouseTracking` is `true`, the eyes follow the pointer anywhere in the window; otherwise only while the pointer is over the control.

![EyeTracking](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/EyeTracking.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
