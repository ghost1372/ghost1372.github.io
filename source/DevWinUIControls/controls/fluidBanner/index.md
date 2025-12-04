---
title: FluidBanner
---

FluidBanner control is banner control created using Windows Composition. It allows for displaying multiple images in a unique interactive format. It internally uses ImageSurface to host the images.

# Property

|Name|
|-|
|AlignX|
|AlignY|
|ItemBackground|
|ItemGap|
|ItemsSource|
|Padding|
|Stretch|

# Example

```xml
<dev:FluidBanner x:Name="Banner"
                Width="500"
                Height="400"
                Margin="50"
                Padding="20"
                HorizontalAlignment="Center"
                VerticalAlignment="Center"
                Background="Transparent"
                Stretch="Fill" />
```

```cs
var itemCount = 10;
var items = new List<Uri>();
for (var i = 0; i < itemCount; i++)
{
    items.Add(new Uri($"ms-appx:///Assets/Landscapes/Landscape-{i + 1}.jpg"));
}

Banner.ItemsSource = items;
```


![FluidBanner](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/FluidBanner.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
