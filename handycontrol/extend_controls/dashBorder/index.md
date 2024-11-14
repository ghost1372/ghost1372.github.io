---
title: DashBorder 
---

A decorative element that can provide a dotted border to achieve some special effects.

```cs
public class DashedBorder : Decorator
```

# Attributes
|roperty|Description|Default Value|Remarks|
|-|-|-|-|
|BorderThickness|Border Thickness|||
|BorderDashThickness|Border DashThickness|0||
|Padding|Padding|||
|CornerRadius|Round Corner|||
|BorderBrush|Border color|||
|Background|Background color|||
|BorderDashArray|Border DashArray|||
|BorderDashCap|Border dashed line cap style|PenLineCap.Flat||
|BorderDashOffset|Border dash offset|0|||

# Case

```xml
<hc:DashedBorder Width="100" Height="100" BorderDashThickness="2" BorderBrush="Black" BorderDashArray="3, 1" CornerRadius="0,50,0,0"/>
```

![DashedBorder](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/extend_controls/DashedBorder.png)

{% note warning %}
Pay attention when you need to set the border thickness. If the four rounded corners have the same value, please use `BorderThickness`, otherwise please use `BorderDashThickness`
{% endnote %}