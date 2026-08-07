---
title: DepthLayerView
---

# DepthLayerView
## Property

|Name|
|-|
|Stretch|
|Items|
|SelectedIndex|

# DepthLayerViewItem
## Property
|Name|
|-|
|ImageUri|

# Example

```cs
public partial class DepthLayerSampleData : DepthLayerViewItem
{
    public int Year { get; set; }
    public string YearLabel => Year.ToString();

    public DepthLayerSampleData(int year, string imageUri)
    {
        this.Year = year;
        this.ImageUri = new Uri(imageUri);
    }
}

public partial ObservableCollection<DepthLayerSampleData> DepthLayerSampleItems { get; set; } = new ObservableCollection<DepthLayerSampleData>()
{
    new DepthLayerSampleData(2021,"ms-appx:///Assets/Landscapes/Landscape-1.jpg"),
    new DepthLayerSampleData(2022,"ms-appx:///Assets/Landscapes/Landscape-2.jpg"),
    new DepthLayerSampleData(2023,"ms-appx:///Assets/Landscapes/Landscape-3.jpg"),
    new DepthLayerSampleData(2024,"ms-appx:///Assets/Landscapes/Landscape-4.jpg"),
    new DepthLayerSampleData(2025,"ms-appx:///Assets/Landscapes/Landscape-5.jpg"),
};
```

```xml
<dev:DepthLayerView Height="400"
                    HorizontalAlignment="Stretch"
                    VerticalAlignment="Stretch"
                    Items="{x:Bind DepthLayerSampleItems, Mode=OneWay}"
                    SelectedIndex="{x:Bind ListViewSample.SelectedIndex, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged}">
    <ListView x:Name="ListViewSample"
                Grid.Row="0"
                Margin="0,10"
                HorizontalAlignment="Center"
                ItemsSource="{x:Bind DepthLayerSampleItems, Mode=OneWay}"
                SelectedIndex="2"
                SelectionMode="Single">
        <ListView.ItemTemplate>
            <DataTemplate x:DataType="models:DepthLayerSampleData">
                <Grid>
                    <TextBlock Margin="20,0"
                                FontSize="24"
                                Text="{x:Bind YearLabel}" />
                </Grid>
            </DataTemplate>
        </ListView.ItemTemplate>
        <ListView.ItemsPanel>
            <ItemsPanelTemplate>
                <StackPanel Orientation="Horizontal" />
            </ItemsPanelTemplate>
        </ListView.ItemsPanel>
    </ListView>
</dev:DepthLayerView>
```

![DepthLayerView](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/DepthLayerView.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
