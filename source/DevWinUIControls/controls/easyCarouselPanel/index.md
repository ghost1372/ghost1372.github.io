---
title: EasyCarouselPanel 
---

A simple carousel control with animations powered by composition API.

# Property

|Name|
|-|
|SelectedIndex|
|SelectedItem|
|Duration|
|ItemWidth|
|ItemHeight|
|ItemsSource|
|ItemSpacing|
|ItemTemplate|
|DetectPointerWheelChange|
|AutoShift|
|Interval|
|ShiftingDirection|

# Methods

|Name|
|-|
|MoveForward|
|MoveBackward|

# Example

```xml
<dev:EasyCarouselPanel x:Name="EasyCarouselPanelSample"
                        Height="150"
                        Margin="10"
                        VerticalAlignment="Top"
                        ItemWidth="300"
                        ItemsSource="{x:Bind CarouselItems, Mode=OneWay}"
                        SelectedIndex="0">
    <dev:EasyCarouselPanel.ItemTemplate>
        <DataTemplate x:DataType="views:EasyCarouselPanelItem">
            <Grid>
                <Image HorizontalAlignment="Stretch"
                        VerticalAlignment="Stretch"
                        Source="{x:Bind Image}"
                        Stretch="UniformToFill" />
                <Grid HorizontalAlignment="Stretch" VerticalAlignment="Bottom" Background="#88000000">
                    <TextBlock Margin="6"
                                Foreground="White"
                                Text="{x:Bind Name}" />
                </Grid>
            </Grid>
        </DataTemplate>
    </dev:EasyCarouselPanel.ItemTemplate>
</dev:EasyCarouselPanel>
```

```cs
public List<EasyCarouselPanelItem> CarouselItems = new List<EasyCarouselPanelItem>()
{
    new EasyCarouselPanelItem() {Name="Item 1", Image = "ms-appx:///Assets/BannerView/1.jpeg"},
    new EasyCarouselPanelItem() {Name="Item 2", Image = "ms-appx:///Assets/BannerView/2.png"},
    new EasyCarouselPanelItem() {Name="Item 3", Image = "ms-appx:///Assets/BannerView/3.jpeg"},
    new EasyCarouselPanelItem() {Name="Item 4", Image = "ms-appx:///Assets/BannerView/4.jpeg"},
    new EasyCarouselPanelItem() {Name="Item 5", Image = "ms-appx:///Assets/BannerView/5.jpeg"},
    new EasyCarouselPanelItem() {Name="Item 6", Image = "ms-appx:///Assets/BannerView/6.png"},
    new EasyCarouselPanelItem() {Name="Item 7", Image = "ms-appx:///Assets/BannerView/7.jpeg"},
    new EasyCarouselPanelItem() {Name="Item 8", Image = "ms-appx:///Assets/BannerView/8.jpeg"},
    new EasyCarouselPanelItem() {Name="Item 9", Image = "ms-appx:///Assets/BannerView/9.jpeg"},
};
public partial class EasyCarouselPanelItem
{
    public string Name { get; set; }
    public string Image { get; set; }

    public override string ToString()
    {
        return Name;
    }
}
```

![EasyCarouselPanel](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/EasyCarouselPanel.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
