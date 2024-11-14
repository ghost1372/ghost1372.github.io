---
title: IconElement
---

# Attributes

| Name | Use |
|-|-|
| Geometry | Geometry |
| Width | Icon Width |
| Height | Icon Height |

# Use Cases

## Geometry Geometric shape

```xml
<StackPanel Width="200" VerticalAlignment="Center">
    <Button Content="Button" HorizontalAlignment="Stretch"/>
    <Button Content="Button" hc:IconElement.Geometry="{StaticResource CalendarGeometry}" HorizontalAlignment="Stretch" Margin="0,10,0,0"/>
</StackPanel>
```

![IconElement.Geometry](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/attach/IconElement.Geometry.png)