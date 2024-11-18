---
title: ColorHelper
---

# GetColorFromHex

```cs
var color = Application.Current.Resources["SystemAccentColor"];
var accent = ColorHelper.GetColorFromHex(color.ToString());
```

# ColorToUInt

```cs
var colorInt = ColorHelper.ColorToUInt(Colors.Red);

```

# GetHexFromColor

```cs
var hex = ColorHelper.GetHexFromColor(Colors.Red);

```

# GetSolidColorBrush

```cs
var solidBrush = ColorHelper.GetSolidColorBrush(hex);

```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
