---
title: BorderElement
---

# Attributes

| Name | Use |
|-|-|
| CornerRadius | Set border fillet values |
| Circular | Whether it is rendered as a circle True is Yes, False is No |

# Use Cases

## CornerRadius Set the border fillet value

```xml
<StackPanel Width="200" VerticalAlignment="Center">
    <Button Content="Button" hc:BorderElement.CornerRadius="15" HorizontalAlignment="Stretch"/>
    <TextBox Text="TextBox" hc:BorderElement.CornerRadius="15" Margin="0,10,0,0"/>
</StackPanel>
```

![BorderElement.CornerRadius](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/attach/BorderElement.CornerRadius.png)

## Circular

Implement a circular border with the attached property of `BorderElement.Circular`

```xml
<Border Style="{StaticResource BorderCircular}" Background="OrangeRed" Width="100" Height="100"/>
```

![BorderElement.Circular](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/attach/BorderElement.Circular.png)


