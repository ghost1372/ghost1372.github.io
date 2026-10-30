---
title: UnderlineAnimation
---

# Property

|Name|
|-|
|Text|
|UnderlineText|
|Kind|
|NavigateUri|
|LineBrush|
|GradientBrush|
|LineThickness|
|LineOffset|
|Duration|
|Rest|
|Active|
|TextWrapping|

# Events

|Name|
|-|
|Click|

# Enums

## UnderlineKind

|Name|
|-|
|Slide|
|Center|
|Fill|
|Wavy|
|Gradient|

# Example

```xml
<dev:UnderlineAnimation Text="Hover over this link"
                        Kind="Slide" />
```

```xml
<dev:UnderlineAnimation Text="Read the documentation for more details."
                        UnderlineText="documentation"
                        Kind="Wavy"
                        NavigateUri="https://github.com/Ghost1372/DevWinUI"
                        Rest="True" />
```

> [!WARNING]
> `Duration` is a double in milliseconds.

![UnderlineAnimation](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/UnderlineAnimation.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
