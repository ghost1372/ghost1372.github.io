---
title: Carousel
---

Carousel control allows you to display the Data in a proper way and navigate between them.

```cs
public class Carousel : SimpleItemsControl, IDisposable
```

# Attributes
| Property | Description |
| - | - |
| AutoRun                  | Whether to rotate automatically |
| IsCenter                 | Whether the carousel item is displayed in the center |
| PageButtonStyle | Page button style |
| Interval | Carousel interval time |
| ExtendWidth | Item content expansion width |

# Case

## Show filled carousel items

```xml
<hc:Carousel Margin="32" IsCenter="True" AutoRun="True" Width="600" Height="330" VerticalAlignment="Center">
    <Image Width="600" Stretch="UniformToFill" Source="/HandyControlDemo;component/Resources/Img/1.jpg"/>
    <Image Width="300" Stretch="UniformToFill" Source="/HandyControlDemo;component/Resources/Img/2.jpg"/>
    <hc:SimplePanel Width="600">
        <Image Stretch="UniformToFill" Source="/HandyControlDemo;component/Resources/Img/3.jpg"/>
        <TextBlock Text="Demo Text" Style="{StaticResource TextBlockDefault}" FontSize="100" FontWeight="Bold" Foreground="White"/>
    </hc:SimplePanel>
    <Image Width="600" Stretch="UniformToFill" Source="/HandyControlDemo;component/Resources/Img/4.jpg"/>
    <Image Width="600" Stretch="UniformToFill" Source="/HandyControlDemo;component/Resources/Img/5.jpg"/>
</hc:Carousel>
```

![Carousel](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Resources/Carousel.gif)

## Use bindings to generate carousel items

```xml
<hc:Carousel AutoRun="True" ItemsSource="{Binding Images}" Width="300" Height="200">
    <hc:Carousel.ItemTemplate>
        <DataTemplate>
            <Image Source="{Binding}" Width="300"/>
        </DataTemplate>
    </hc:Carousel.ItemTemplate>
</hc:Carousel>
```

{% note info %}
`ExtendWidth` It will extend a certain distance after the last carousel item. Please note that this is not the concept of offset, but the concept of extension.
{% endnote %}