---
title: ContentSlider 
---

A simple content slider with animation.

# Property

|Name|
|-|
|Duration|
|ViewportWidth|
|SelectedItem|
|ItemsSource|

# Methods

|Name|
|-|
|SlideTo|

# Example

```xml
<dev:ContentSlider ItemsSource="{x:Bind ContentItems, Mode=OneWay}" ViewportWidth="500">
    <dev:ContentSlider.ItemTemplate>
        <DataTemplate x:DataType="views:ContentSliderItem">
            <Grid>
                <TextBlock HorizontalAlignment="Center"
                            VerticalAlignment="Center"
                            Style="{ThemeResource TitleTextBlockStyle}"
                            Text="{x:Bind Name}" />
            </Grid>
        </DataTemplate>
    </dev:ContentSlider.ItemTemplate>
</dev:ContentSlider>
```

```cs
public List<ContentSliderItem> ContentItems = new List<ContentSliderItem>()
{
    new ContentSliderItem() {Name="Item 1", Image = "ms-appx:///Assets/BannerView/1.jpeg"},
    new ContentSliderItem() {Name="Item 2", Image = "ms-appx:///Assets/BannerView/2.png"},
    new ContentSliderItem() {Name="Item 3", Image = "ms-appx:///Assets/BannerView/3.jpeg"},
    new ContentSliderItem() {Name="Item 4", Image = "ms-appx:///Assets/BannerView/4.jpeg"},
    new ContentSliderItem() {Name="Item 5", Image = "ms-appx:///Assets/BannerView/5.jpeg"},
    new ContentSliderItem() {Name="Item 6", Image = "ms-appx:///Assets/BannerView/6.png"},
    new ContentSliderItem() {Name="Item 7", Image = "ms-appx:///Assets/BannerView/7.jpeg"},
    new ContentSliderItem() {Name="Item 8", Image = "ms-appx:///Assets/BannerView/8.jpeg"},
    new ContentSliderItem() {Name="Item 9", Image = "ms-appx:///Assets/BannerView/9.jpeg"},
};
public partial class ContentSliderItem
{
    public string Name { get; set; }
    public string Image { get; set; }

    public override string ToString()
    {
        return Name;
    }
}
```

![ContentSlider](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/ContentSlider.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
