---
title: Converter
---

# Boolean2BooleanReConverter

This converter is used to invert Boolean types

# Boolean2StrConverter

The converter needs to provide a string as a parameter. The general form of the string is: `[string0];[string1]`, when the value obtained by the converter is `true`, it will return `[character String 0]`, otherwise return `[string 1]`.

# Boolean2VisibilityConverter

The converter will convert `true` to `Visible`, which will convert `false` to `Collapse`.

# Boolean2VisibilityReConverter

The converter case is the opposite of `Boolean2VisibilityConverter`.

# BooleanArr2VisibilityConverter

The converter will convert the Boolean array to `Visibility`, returning `Visible` when all the arrays are `true`, otherwise return `Collapse`.

# BorderCircularClipConverter

The converter is exclusive to the Border and accepts an array of objects of length 3, corresponding to the length, width and fillet radius of the Border, which returns a circular geometry as a Clip to trim the Border.

# BorderCircularConverter

The converter is exclusive to Border and accepts an array of objects of length 3, corresponding to the length, width and fillet radius of the Border. It returns a rounded rectangle as a Clip to trim the Border.

# BorderClipConverter

The converter is exclusive to the Border and accepts an array of objects of length 3, corresponding to the length, width and fillet radius of the Border, which returns a circular geometry as a Clip to trim the Border.

# ColLayoutConverter

When the converter is used in xaml design, the main function is to convert the string to a valid `ColLayout` value.

# Color2ChannelAConverter (internal use)

The converter will extract the value of the transparent channel (A) of `SolidColorBrush.Color`.

# CornerRadiusSplitConverter

The converter needs to provide a string as a parameter. The general form of the string is: `[0/1], [0/1], [0/1], [0/1]`, 4 separated by commas The values correspond to `Left`, `Top`, `Right`, `Bottom` attributes of `CornerRadius`, and the value of 1 returns the value of the corresponding attribute, otherwise it returns 0.

# Color2HexStrConverter

The converter will convert `SolidColorBrush` to a hexadecimal string (with "#").

# Double2GridLengthConverter

This converter will convert `double` values to `GridLength`.

# DoubleMinConverter (internal use)

The converter can be provided with a string as the minimum value (if not provided, the minimum value defaults to 0). When the value passed in is less than the minimum value, the minimum value is returned, otherwise the value returned is returned.

# Int2StrConverter

The converter needs to provide a string as a parameter, the general form of the string is: `[string 0]; [string 1];...[string n]`, the converter will be an integer The value is used as an index to get the string at the specified location and return.

# Long2FileSizeConverter

The converter converts long integers to a file-sized string.

# Number2PercentageConverter

The converter accepts a numeric array of length 2 and returns a percentage of the two numbers.

# Object2BooleanConverter

Returns `false` if the converter gets a value of `null`, otherwise returns `true`.

# Object2VisibilityConverter

Returns `Collapsed` if the value obtained by the converter is `null`, otherwise returns `Visible`.

# Object2VisibilityReConverter 
Returns `Visible` if the value obtained by the converter is `null`, otherwise returns `Collapsed`.

# Object2StringConverter

Returns `String`

# RectangleCircularConverter

The converter is Rectangle-specific and accepts an integer array of the length and width of the `Rectangle`, returning half of their minimum as the radius of the circular Rectangle.

# String2VisibilityConverter

The converter accepts a string and returns `Collapse` if the string is empty or null, otherwise returns `Visible`.

# String2VisibilityReConverter

The converter case is the opposite of `String2VisibilityConverter`.

# ThicknessSplitConverter

The converter needs to provide a string as a parameter. The general form of the string is: `[0/1], [0/1], [0/1], [0/1]`, 4 separated by commas The values correspond to the `Left`, `Top`, `Right`, `Bottom` attributes of `Thickness`, and the value of 1 returns the value of the corresponding attribute, otherwise it returns 0.

# TreeViewItemMarginConverter (internal use)

This converter is used to provide the appropriate left margin for the TreeViewItem.

# Color2HexStringConverter

# Boolean2StringConverter

# Int2StringConverter

# SpeedConverter `Only Custom Version` (Internal use)

# Positive2Nagative `Only Custom Version` (Internal use)

Convert positive value to negative

# ValueToBrushConverter `Only Custom Version` (Internal use)

Convert Value to Brush 

{% note info no-icon %}
Example:

{% code %}
Visibility="{Binding ShowButton,Converter={StaticResource Boolean2VisibilityConverter}}"
{% endcode %}

{% endnote %}

# StringRepeatConverter `Only Custom Version`
repeat text

{% code %}
<hc:OutlineText Text="{Binding Text, Converter={StaticResource StringRepeatConverter}, ConverterParameter=2}"/>
{% endcode %}

# ConverterBindableBinding `Only Custom Version`
if you need to use binding in Converter Parameter you can use this converter type
``` xml
<Setter Property="Foreground">
    <Setter.Value>
        <hc:ConverterBindableBinding Binding="{Binding ElementName=arc, Path=Tag}"
                                    Converter="{StaticResource ValueToBrushConverter}" ConverterParameterBinding="{Binding ElementName=arc, Path=EndAngle}"/>
    </Setter.Value>
</Setter>
```

# DataGridSelectAllButtonVisibilityConverter

# BooleanArr2BooleanConverter

# Object2BooleanReConverter