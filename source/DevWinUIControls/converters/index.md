---
title: Converters
---

# NumberToPercentageConverter

```cs
// Value: 25.0
```

```xml
<TextBlock Text="{x:Bind Value, Converter={StaticResource NumberToPercentageConverter}, ConverterParameter=WithPercentageSymbol}" />
```

```cs
// Output: 25 %
```


# BoolToVisibilityConverter
```xml
<TextBlock Visibility="{x:Bind boolValue, Converter={StaticResource BoolToVisibilityConverter}}" />
```


you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
