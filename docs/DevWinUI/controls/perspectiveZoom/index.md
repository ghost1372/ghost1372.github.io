---
title: PerspectiveZoom
---

# Property

|Name|
|-|
|ZoomOutRotationDuration|
|ZoomOutOffsetDuration|
|ZoomInRotationDuration|
|ZoomInOffsetDuration|
|ZoomFactor|
|RotationAngle|

# Method

|Name|
|-|
|ToggleZoom|
|ZoomOut|
|ZoomIn|

# Example

```xml
<dev:PerspectiveZoom x:Name="PerspectiveSample"
                        RotationAngle="{x:Bind AngleSlider.Value, Mode=OneWay}"
                        ZoomFactor="{x:Bind ZoomFactorSlider.Value, Mode=OneWay}">

    <ListView IsItemClickEnabled="True"
                ItemClick="OnItemClick"
                ItemsSource="{x:Bind ViewModel.SamplePerspectiveData, Mode=OneWay}">
        <ListView.ItemsPanel>
            <ItemsPanelTemplate>
                <ItemsWrapGrid Orientation="Horizontal" />
            </ItemsPanelTemplate>
        </ListView.ItemsPanel>

        <ListView.ItemTemplate>
            <DataTemplate x:DataType="model:SampleData">
                <Grid>
                    <Image Width="200"
                            Height="120"
                            Source="{x:Bind ImageUrl}"
                            Stretch="UniformToFill" />
                </Grid>
            </DataTemplate>
        </ListView.ItemTemplate>

    </ListView>
</dev:PerspectiveZoom>
```

```cs
private void OnItemClick(object sender, ItemClickEventArgs e)
{
    ListView listView = (ListView)sender;
    ListViewItem listItem = (ListViewItem)listView.ContainerFromItem(e.ClickedItem);

    PerspectiveSample.ToggleZoom(listItem);
}
```

![PerspectiveZoom](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/PerspectiveZoom.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
