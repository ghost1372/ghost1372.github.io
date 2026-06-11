---
title: CoverFlow 
---

A CoverFlow control is a 3D-style carousel that highlights a centered item while showing neighboring items angled.

# Property

|Name|
|-|
|EasingFunction|
|ManipulationThreshold|
|PageDuration|
|RotationAngle|
|Scale|
|SingleItemDuration|
|SpaceBetweenItems|
|SpaceBetweenSelectedItemAndItems|
|ZDistance|
|SelectedIndex|
|SelectedItem|

# Methods

|Name|
|-|
|NextItem|
|PreviousItem|
|NextPage|
|PreviousPage|
|First|
|Last|
|UpdatePositions|

# Example

```xml
<dev:CoverFlow x:Name="CoverFlowSample"
                Width="500"
                Height="500"
                ItemsSource="{x:Bind CoverItems, Mode=OneWay}">
    <dev:CoverFlow.ItemTemplate>
        <DataTemplate x:DataType="views:CoverFlowItemSample">
            <StackPanel Spacing="5">
                <Image Height="150"
                        Source="{x:Bind Image}" />
                <TextBlock Style="{ThemeResource BaseTextBlockStyle}"
                            Text="{x:Bind Name}"
                            TextTrimming="CharacterEllipsis" />
            </StackPanel>
        </DataTemplate>
    </dev:CoverFlow.ItemTemplate>
</dev:CoverFlow>
```

```cs
public List<CoverFlowItemSample> CoverItems = new List<CoverFlowItemSample>()
{
    new CoverFlowItemSample() {Name="Item 1", Image = "ms-appx:///Assets/BannerView/1.jpeg"},
    new CoverFlowItemSample() {Name="Item 2", Image = "ms-appx:///Assets/BannerView/2.png"},
    new CoverFlowItemSample() {Name="Item 3", Image = "ms-appx:///Assets/BannerView/3.jpeg"},
    new CoverFlowItemSample() {Name="Item 4", Image = "ms-appx:///Assets/BannerView/4.jpeg"},
    new CoverFlowItemSample() {Name="Item 5", Image = "ms-appx:///Assets/BannerView/5.jpeg"},
    new CoverFlowItemSample() {Name="Item 6", Image = "ms-appx:///Assets/BannerView/6.png"},
    new CoverFlowItemSample() {Name="Item 7", Image = "ms-appx:///Assets/BannerView/7.jpeg"},
    new CoverFlowItemSample() {Name="Item 8", Image = "ms-appx:///Assets/BannerView/8.jpeg"},
    new CoverFlowItemSample() {Name="Item 9", Image = "ms-appx:///Assets/BannerView/9.jpeg"},
};
public partial class CoverFlowItemSample
{
    public string Name { get; set; }
    public string Image { get; set; }

    public override string ToString()
    {
        return Name;
    }
}
```

![CoverFlow](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/CoverFlow.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
