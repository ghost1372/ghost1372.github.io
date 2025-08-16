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

# NullToObjectConverter
```xml
<dev:NullToObjectConverter x:Key="NullToXConverter"
                             NotNullValue="Visible"
                             NullValue="Collapsed" />
```

## NullToVisibilityConverter
```xml
<TextBlock Visibility="{x:Bind nullValue, Converter={StaticResource NullToVisibilityConverter}}" />
```

## NullToVisibilityReConverter
```xml
<TextBlock Visibility="{x:Bind nullValue, Converter={StaticResource NullToVisibilityReConverter}}" />
```

# BoolToObjectConverter
```xml
<dev:BoolToObjectConverter x:Key="BoolToXConverter"
                             FalseValue="Collapsed"
                             TrueValue="Visible" />
```

## BoolToVisibilityConverter
```xml
<TextBlock Visibility="{x:Bind boolValue, Converter={StaticResource BoolToVisibilityConverter}}" />
```

## BoolToVisibilityReConverter
```xml
<TextBlock Visibility="{x:Bind boolValue, Converter={StaticResource BoolToVisibilityReConverter}}" />
```

# DoubleToObjectConverter
```xml
<dev:DoubleToVisibilityConverter x:Name="DoubleToXConverter"
                                       FalseValue="Collapsed"
                                       GreaterThan="0"
                                       TrueValue="Visible" />
```

## DoubleToVisibilityConverter
```xml
<TextBlock Visibility="{x:Bind doubleValue, Converter={StaticResource DoubleToVisibilityConverter}}" />
```

you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
