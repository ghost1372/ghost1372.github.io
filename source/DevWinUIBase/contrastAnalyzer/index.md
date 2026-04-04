---
title: ContrastAnalyzer
---

The `ContrastAnalyzer` can be applied to a TextBlock or Control to apply updates on its Foreground property.

When checking the original contrast ratio, the ContrastAnalyzer will attempt to grab the Foreground as a SolidColorBrush. If the original Foreground is not a SolidColorBrush it will default to Colors.Transparent, and always apply a raised contrast color.

If you are not using a TextBlock or Control, you can directly apply the ContrastAnalyzer to a SolidColorBrush.

# Properties
|Name|
|-|
|Opponent|
|MinRatio|
|ContrastRatio|
|OriginalColor|
|OriginalContrastRatio|

# Example
```xml
<TextBlock dev:ContrastAnalyzer.Opponent="Green" Text="Primary" />
```

![ContrastAnalyzer](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/ContrastAnalyzer.png)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.