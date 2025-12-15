---
title: CarouselView 
---

A simple carousel control with animations powered by composition API.

# Property

|Name|
|-|
|SelectedIndex|
|ItemImageSource|
|IsAutoSwitchEnabled|
|ItemWidth|
|AutoSwitchInterval|


# Methods

|Name|
|-|
|GotoNext|
|GotoPrevious|

# Example

```xml
<dev:CarouselView x:Name="CarouselSample" MaxHeight="300" VerticalAlignment="Center" ItemImageSource="{x:Bind Items, Mode=OneWay}" ItemWidth="500" />
```

```cs
public List<ICarouselViewItemSource> Items = new List<ICarouselViewItemSource>()
{
    new CarouselItemSource() {Title="Item 1", ImageSource = "ms-appx:///Assets/BannerView/1.jpeg"},
    new CarouselItemSource() {Title="Item 2", ImageSource = "ms-appx:///Assets/BannerView/2.png"},
    new CarouselItemSource() {Title="Item 3", ImageSource = "ms-appx:///Assets/BannerView/3.jpeg"},
    new CarouselItemSource() {Title="Item 4", ImageSource = "ms-appx:///Assets/BannerView/4.jpeg"},
    new CarouselItemSource() {Title="Item 5", ImageSource = "ms-appx:///Assets/BannerView/5.jpeg"},
    new CarouselItemSource() {Title="Item 6", ImageSource = "ms-appx:///Assets/BannerView/6.png"},
    new CarouselItemSource() {Title="Item 7", ImageSource = "ms-appx:///Assets/BannerView/7.jpeg"},
    new CarouselItemSource() {Title="Item 8", ImageSource = "ms-appx:///Assets/BannerView/8.jpeg"},
    new CarouselItemSource() {Title="Item 9", ImageSource = "ms-appx:///Assets/BannerView/9.jpeg"},
};
public class CarouselItemSource : ICarouselViewItemSource
{
    public string ImageSource { get; set; }
    public string Title { get; set; }
}
```

![CarouselView](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/CarouselView.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
