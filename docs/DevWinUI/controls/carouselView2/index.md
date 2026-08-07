---
title: CarouselView2 
---

A professional carousel control with animations powered by composition API.

# Property

|Name|
|-|
|UseGestures|
|ItemsSource|
|ItemTemplate|
|ItemContentStyle|
|SelectedIndex|
|SelectedItemForegroundBrush|
|TriggerSelectionAnimation|
|NavigationSpeed|
|ZIndexUpdateWaitsForAnimation|
|SelectedItemScale|
|AdditionalItemsToScale|
|AdditionalItemsToWarp|
|CarouselType|
|WheelAlignment|
|Density|
|FliptychDegrees|
|WarpIntensity|
|WarpCurve|
|ItemGap|
|SelectNextTrigger|
|SelectPreviousTrigger|
|ManipulationStartedTrigger|
|ManipulationCompletedTrigger|
|CarouselRotationAngle|
|CarouselPositionY|
|CarouselPositionX|
|IsPointerWheelEnabled|
|IsKeyboardNavigationEnabled|

# Methods

|Name|
|-|
|StartManipulationMode|
|StopManipulationMode|
|ChangeSelection|
|AnimateToSelectedIndex|
|AnimateSelection|

# Example

```xml
<dev:CarouselView2 Height="100" ItemsSource="{x:Bind Items, Mode=OneWay}">
    <dev:CarouselView2.ItemTemplate>
        <DataTemplate x:DataType="views:CarouselView2Item">
            <UserControl>
                <UserControl.Transform3D>
                    <PerspectiveTransform3D Depth="1000" />
                </UserControl.Transform3D>
                <Grid Width="120" Height="120" Padding="8">
                    <Image Source="{x:Bind ImageSource}" />
                </Grid>
            </UserControl>
        </DataTemplate>
    </dev:CarouselView2.ItemTemplate>
</dev:CarouselView2>
```

```cs
public List<CarouselView2Item> Items = new List<CarouselView2Item>()
{
    new CarouselView2Item() {Title="Item 1", ImageSource = "ms-appx:///Assets/Carousel/1.jpg"},
    new CarouselView2Item() {Title="Item 2", ImageSource = "ms-appx:///Assets/Carousel/2.jpg"},
    new CarouselView2Item() {Title="Item 3", ImageSource = "ms-appx:///Assets/Carousel/3.jpg"},
    new CarouselView2Item() {Title="Item 4", ImageSource = "ms-appx:///Assets/Carousel/4.jpg"},
    new CarouselView2Item() {Title="Item 5", ImageSource = "ms-appx:///Assets/Carousel/5.jpg"},
    new CarouselView2Item() {Title="Item 6", ImageSource = "ms-appx:///Assets/Carousel/6.jpg"},
    new CarouselView2Item() {Title="Item 7", ImageSource = "ms-appx:///Assets/Carousel/7.jpg"},
    new CarouselView2Item() {Title="Item 8", ImageSource = "ms-appx:///Assets/Carousel/8.jpg"},
    new CarouselView2Item() {Title="Item 9", ImageSource = "ms-appx:///Assets/Carousel/9.jpg"},
    new CarouselView2Item() {Title="Item 9", ImageSource = "ms-appx:///Assets/Carousel/10.jpg"},
};
public partial class CarouselView2Item
{
    public string ImageSource { get; set; }

    public Brush BackgroundColor { get; set; }

    public string Title { get; set; }
}
```

![CarouselView2](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/CarouselView2.gif)
![CarouselView2](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/CarouselView22.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
