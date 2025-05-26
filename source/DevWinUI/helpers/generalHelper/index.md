---
title: GeneralHelper
---
# GetApplicationData
Get Microsoft.Windows.Storage.ApplicationData for both Packaged and UnPackaged
```cs
var applicationData = GeneralHelper.GetApplicationData();
```

# IsFirstRun
Determines whether the application is running for the first time.

```cs
bool isFirstRun =  GeneralHelper.IsFirstRun();
```

# ChangeCursor
you can change any UIElement mouse Cursor with `ChangeCursor` (reflection) method
```cs
GeneralHelper.ChangeCursor(element, InputSystemCursor.Create(InputSystemCursorShape.Hand));
```

# EnableSound
enable sound for controls

```cs
GeneralHelper.EnableSound();
```

# GetEnum
get enum from string

```cs
var myenum = GeneralHelper.GetEnum<ElementTheme>("Dark");
```

# GetGeometryFromAppResources

```xml
<x:String x:Key="FavoriteGeometry">M16.4996 5.2021C16.4996 2.76017 15.3595 1.00342 13.4932 1.00342C12.467 1.00342 12.1149 1.60478 11.747 3.00299C11.6719 3.29184 11.635 3.43248 11.596 3.57109C11.495 3.92982 11.3192 4.54058 11.069 5.4021C11.0623 5.42518 11.0524 5.44692 11.0396 5.467L8.17281 9.95266C7.49476 11.0136 6.49429 11.8291 5.31841 12.2793L4.84513 12.4605C3.5984 12.9379 2.87457 14.2416 3.1287 15.5522L3.53319 17.6383C3.77462 18.8834 4.71828 19.8743 5.9501 20.1762L13.5778 22.0457C16.109 22.6661 18.6674 21.1312 19.3113 18.6059L20.7262 13.0567C21.1697 11.3174 20.1192 9.54796 18.3799 9.10449C18.1175 9.03758 17.8478 9.00373 17.5769 9.00373H15.7536C16.2497 7.37084 16.4996 6.11106 16.4996 5.2021ZM4.60127 15.2667C4.48576 14.671 4.81477 14.0783 5.38147 13.8614L5.85475 13.6802C7.33036 13.1152 8.58585 12.0918 9.43674 10.7604L12.3035 6.27477C12.3935 6.13388 12.4629 5.98082 12.5095 5.82026C12.7608 4.95525 12.9375 4.34126 13.0399 3.97737C13.083 3.82412 13.1239 3.66867 13.1976 3.3847C13.3875 2.663 13.4809 2.50342 13.4932 2.50342C14.3609 2.50342 14.9996 3.48749 14.9996 5.2021C14.9996 6.08659 14.6738 7.53754 14.0158 9.51717C13.8544 10.0027 14.2158 10.5037 14.7275 10.5037H17.5769C17.7228 10.5037 17.868 10.522 18.0093 10.558C18.9459 10.7968 19.5115 11.7496 19.2727 12.6861L17.8578 18.2353C17.4172 19.9631 15.6668 21.0133 13.9349 20.5889L6.30718 18.7193C5.64389 18.5568 5.13577 18.0232 5.00577 17.3528L4.60127 15.2667Z</x:String>

var myGeometry = GeneralHelper.GetGeometryFromAppResources("FavoriteGeometry");

Icon = new PathIcon { Data = myGeometry },
```

# GetGeometryFromString
var myGeometry = GeneralHelper.GetGeometryFromString("M6.707,42.707l-1.414-1.414c-0.391-0.391-0.391-1.024,0-1.414L39.879,5.293 c0.391-0.391,1.024-0.391,1.414,0l1.414,1.414c0.391,0.391,0.391,1.024,0,1.414L8.121,42.707 C7.73,43.098,7.097,43.098,6.707,42.707z");

# SetPreferredAppMode

```cs
GeneralHelper.SetPreferredAppMode(ElementTheme.Dark);
```

# GetElementRasterizationScale
```cs
var scale = GeneralHelper.GetElementRasterizationScale(myButton);
```

# GetGlyphCharacter

# GetGlyph

```cs
var glyph = GeneralHelper.GetGlyph("EA6A");

```

# SetApplicationLayoutRTL and SetApplicationLayoutLTR
```cs
GeneralHelper.SetApplicationLayoutRTL(window);

// or

GeneralHelper.SetApplicationLayoutRTL(hwnd);
```

# GetDecodedStringFromHtml

```cs
var cleanText = GeneralHelper.GetDecodedStringFromHtml(html);

```

# GetThemeIndex
# GetElementThemeEnum

# IsPrivacySensitiveRegion
```cs
private static readonly string[] PrivacySensitiveRegions =
[
    "CHN",
    "USA",
    "IRN"
];
var result = GeneralHelper.IsPrivacySensitiveRegion(PrivacySensitiveRegions);
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
