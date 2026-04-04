---
title: BannerView 
---

An enhanced FlipView with smooth composition animations, optional scaling and perspective effects, and seamless infinite cycling of items with automatic shuffle support

# Property

|Name|
|-|
|IsPerspectiveEnable|
|IsScaleEnable|
|ItemsSpacing|
|AutoShuffle|
|Interval|
|ShiftingDirection|

# Methods

|Name|
|-|
|StopShuffle|
|PlayShuffleForward|
|PlayShuffleBackward|

# Example

```xml
<dev:BannerView x:Name="BannerViewSample"
                MinWidth="400"
                MinHeight="150"
                MaxWidth="600"
                MaxHeight="300"
                VerticalContentAlignment="Center"
                ItemsSource="{x:Bind CycleList, Mode=OneWay}">
    <dev:BannerView.ItemTemplate>
        <DataTemplate x:DataType="x:String">
            <Image HorizontalAlignment="Center"
                    VerticalAlignment="Center"
                    Source="{x:Bind}"
                    Stretch="UniformToFill" />
        </DataTemplate>
    </dev:BannerView.ItemTemplate>
</dev:BannerView>
```

```cs
public CycleCollection<Uri> CycleList { get; set; }
private ObservableCollection<Uri> list = new ObservableCollection<Uri>();

list.Add(new Uri("ms-appx:///Assets/BannerView/1.jpeg"));
list.Add(new Uri("ms-appx:///Assets/BannerView/2.png"));
list.Add(new Uri("ms-appx:///Assets/BannerView/3.jpeg"));
list.Add(new Uri("ms-appx:///Assets/BannerView/4.jpeg"));
list.Add(new Uri("ms-appx:///Assets/BannerView/5.jpeg"));
list.Add(new Uri("ms-appx:///Assets/BannerView/6.png"));
list.Add(new Uri("ms-appx:///Assets/BannerView/7.jpeg"));
list.Add(new Uri("ms-appx:///Assets/BannerView/8.jpeg"));
list.Add(new Uri("ms-appx:///Assets/BannerView/9.jpeg"));

CycleList = new CycleCollection<Uri>(list);
```

![BannerView](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/BannerView.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
