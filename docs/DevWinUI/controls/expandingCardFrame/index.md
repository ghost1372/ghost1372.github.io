---
title: ExpandingCardFrame
---

# Property

|Name|
|-|
|Title|
|ImageSource|
|Progress|
|TitleOpacity|
|ShowFocusRing|
|ScrimBrush|
|FocusBrush|

# Example

```xml
<dev:ExpandingCardFrame Title="Mountains" ImageSource="ms-appx:///Assets/mountains.jpg" Progress="1" />
```

> [!NOTE]
> `Progress` is a double from 0 (collapsed) to 1 (expanded). `TitleOpacity` is read-only and follows `Progress` squared, so the title fades in as the card expands.

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
