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

# LightenColor
Tints the color by the given percent.

```cs
Color ColorHelper.LightenColor(color, percent);
```

# DarkenColor
Tints the color by the given percent.

```cs
Color ColorHelper.DarkenColor(color, percent);
```

# GetColorFromHsl
Converts the HSL values to a Color.

```cs
Color ColorHelper.GetColorFromHsl(alpha, hue, saturation, lighting);
```

# GetBrightnessFromColor
Gets the brightness of the color.

```cs
float ColorHelper.GetBrightnessFromColor(color);
```

# GetHueFromColor
Gets the hue of the color.

```cs
float ColorHelper.GetHueFromColor(color);
```

# GetSaturationFromColor
Gets the saturation of the color.

```cs
float ColorHelper.GetSaturationFromColor(color);
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
