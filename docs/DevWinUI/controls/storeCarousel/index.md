---
title: StoreCarousel
---

A modern, Store-style carousel layout inspired by the Microsoft Store, designed to showcase large hero images with titles, descriptions, and action buttons.

# Property

|Name|
|-|
|ShuffleDuration|
|AutoShuffle|
|PipsPagerVisibility|
|PrimaryImageSource|
|SecondaryImageSource|
|TertiaryImageSource|
|ItemsSource|
|UseImageEdgeOverContentColor|

# Methods

|Name|
|-|
|GoToIndex|
|GoToNext|
|GoToPrevious|

# Events

|Name|
|-|
|SelectedIndexChanged|
|ItemClick|


## StoreCarouselItem
### Property

|Name|
|-|
|ActionButtonClick|
|ImageSource|
|Title|
|Description|
|Parameter|
|ActionButtonText|
|ShowActionButton|


# Example

```xml
  <dev:StoreCarousel AutoShuffle="true"
                    ItemClick="StoreCarouselSample_ItemClick"
                    ItemsSource="{x:Bind images, Mode=OneWay}"
                    PrimaryImageSource="ms-appx:///Assets/Carousel/8.jpg"
                    SecondaryImageSource="ms-appx:///Assets/Carousel/9.jpg"
                    TertiaryImageSource="ms-appx:///Assets/Carousel/10.jpg" />
```

```cs
public IList<StoreCarouselItem> images = new List<StoreCarouselItem>()
{
    new StoreCarouselItem
    {
        Title ="Wolverine & Deadpool",
        Description ="Action-packed mutant duo",
        ImageSource="ms-appx:///Assets/Carousel/1.jpg",
    },
    new StoreCarouselItem
    {
        Title ="Alien",
        Description ="Survival horror in space",
        ImageSource="ms-appx:///Assets/Carousel/2.jpg",
    },
    new StoreCarouselItem
    {
        Title ="Walking Dead: Dead City",
        Description ="Zombies overrun New York",
        ImageSource="ms-appx:///Assets/Carousel/3.jpg",
    },
    new StoreCarouselItem
    {
        Title ="Inferno",
        Description ="Thrilling race against time",
        ImageSource="ms-appx:///Assets/Carousel/4.jpg",
    },
    new StoreCarouselItem
    {
        Title ="The Forest Song",
        Description ="Magical tale of nature and love",
        ImageSource="ms-appx:///Assets/Carousel/5.jpg",
    },
    new StoreCarouselItem
    {
        Title ="Moana",
        Description ="Epic ocean adventure",
        ImageSource="ms-appx:///Assets/Carousel/6.jpg",
    },
    new StoreCarouselItem
    {
        Title ="Avatar",
        Description ="Journey to Pandora",
        ImageSource="ms-appx:///Assets/Carousel/7.jpg",
    },
};
public StoreCarouselPage()
{
    InitializeComponent();

    images[0].ActionButtonClick += OnActionButtonClick;
    images[1].ActionButtonClick += OnActionButtonClick;
    images[2].ActionButtonClick += OnActionButtonClick;
    images[3].ActionButtonClick += OnActionButtonClick;
    images[4].ActionButtonClick += OnActionButtonClick;
    images[5].ActionButtonClick += OnActionButtonClick;
    images[6].ActionButtonClick += OnActionButtonClick;
}

private async void OnActionButtonClick(object sender, StoreCarouselEventArgs e)
{
    await MessageBox.ShowInfoAsync("Action Button Clicked!");
}

private async void StoreCarouselSample_ItemClick(object sender, StoreCarouselEventArgs e)
{
    await MessageBox.ShowInfoAsync("Item Clicked!");
}
```

![StoreCarousel](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/StoreCarousel.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
