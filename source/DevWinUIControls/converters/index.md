---
title: Converters
---

# EmptyStringToVisibilityConverter

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

# NullToVisibilityConverter

# BoolToVisibilityConverter
```xml
<TextBlock Visibility="{x:Bind boolValue, Converter={StaticResource BoolToVisibilityConverter}}" />
```

# BoolToVisibilityReConverter
```xml
<TextBlock Visibility="{x:Bind boolValue, Converter={StaticResource BoolToVisibilityReConverter}}" />
```

# BoolToObjectConverter
```xml
<dev:BoolToObjectConverter x:Key="BoolToXConverter"
                             FalseValue="Collapsed"
                             TrueValue="Visible" />
```

# DoubleToVisibilityConverter
```xml
<TextBlock Visibility="{x:Bind doubleValue, Converter={StaticResource DoubleToVisibilityConverter}}" />
```

# DoubleToObjectConverter
```xml
<dev:DoubleToVisibilityConverter x:Name="DoubleToXConverter"
                                       FalseValue="Collapsed"
                                       GreaterThan="0"
                                       TrueValue="Visible" />
```

you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
