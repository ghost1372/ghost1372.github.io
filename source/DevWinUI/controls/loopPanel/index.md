---
title: LoopPanel 
---

An infinitely scrolling panel.

# Property

|Name|
|-|
|Spacing|
|MouseWheelScrollFactor|
|DragScrollFactor|
|IsInertiaEnabled|
|BringChildrenIntoView|
|Offset|
|Orientation|
|RelativeOffset|

# Methods

|Name|
|-|
|Scroll|

# Example

```xml
<ItemsControl x:Name="loopingList"
                Height="200"
                ItemsSource="{x:Bind Items, Mode=OneWay}">
    <ItemsControl.ItemsPanel>
        <ItemsPanelTemplate>
            <dev:LoopPanel x:Name="LoopPanelSample"/>
        </ItemsPanelTemplate>
    </ItemsControl.ItemsPanel>

    <ItemsControl.ItemTemplate>
        <DataTemplate x:DataType="views:LoopPanelItem">
            <Border Margin="10,10,0,0"
                    Padding="5"
                    Background="Purple"
                    BorderBrush="{ThemeResource CardStrokeColorDefaultBrush}"
                    BorderThickness="1">
                <Image Source="{x:Bind ImageSource}"
                        Stretch="Uniform">

                </Image>
            </Border>
        </DataTemplate>
    </ItemsControl.ItemTemplate>
</ItemsControl>
```

```cs
public ObservableCollection<LoopPanelItem> Items = new ObservableCollection<LoopPanelItem>()
{
    new LoopPanelItem() {Title="Item 1", ImageSource = "ms-appx:///Assets/BannerView/1.jpeg"},
    new LoopPanelItem() {Title="Item 2", ImageSource = "ms-appx:///Assets/BannerView/2.png"},
    new LoopPanelItem() {Title="Item 3", ImageSource = "ms-appx:///Assets/BannerView/3.jpeg"},
    new LoopPanelItem() {Title="Item 4", ImageSource = "ms-appx:///Assets/BannerView/4.jpeg"},
    new LoopPanelItem() {Title="Item 5", ImageSource = "ms-appx:///Assets/BannerView/5.jpeg"},
    new LoopPanelItem() {Title="Item 6", ImageSource = "ms-appx:///Assets/BannerView/6.png"},
    new LoopPanelItem() {Title="Item 7", ImageSource = "ms-appx:///Assets/BannerView/7.jpeg"},
    new LoopPanelItem() {Title="Item 8", ImageSource = "ms-appx:///Assets/BannerView/8.jpeg"},
    new LoopPanelItem() {Title="Item 9", ImageSource = "ms-appx:///Assets/BannerView/9.jpeg"},
};
public partial class LoopPanelItem
{
    public string ImageSource { get; set; }
    public string Title { get; set; }
}
```

![LoopPanel](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/LoopPanel.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
