---
title: HomePageHeader
---

# Property

|Name|
|-|
|HeaderImageHeight|
|HeaderContent|
|HeaderSubtitleFontSize|
|HeaderSubtitleText|
|HeaderFontSize|
|HeaderText|
|HeaderImage|
|Stretch|
|IsTileImage|

# Example

```xml
<dev:HomePageHeader HeaderImage="{ThemeResource HeaderCover}"
                    HeaderSubtitleText="HeaderSubtitleText"
                    HeaderText="HeaderText">
    <dev:HomePageHeader.HeaderContent>
        <StackPanel Orientation="Horizontal"
                    Spacing="12">
            <dev:HeaderTile Title="Title"
                            Description="Description">
                <dev:HeaderTile.Source>
                    <Image Source="ms-appx:///Assets/Fluent/Clock.png" />
                </dev:HeaderTile.Source>
            </dev:HeaderTile>
            <dev:HeaderTile Title="Title"
                            Description="Description">
                <dev:HeaderTile.Source>
                    <Image Source="ms-appx:///Assets/Fluent/InfoBadge.png" />
                </dev:HeaderTile.Source>
            </dev:HeaderTile>
            <dev:HeaderTile Title="Title"
                            Description="Description">
                <dev:HeaderTile.Source>
                    <Image Source="ms-appx:///Assets/Fluent/RatingControl.png" />
                </dev:HeaderTile.Source>
            </dev:HeaderTile>
            <dev:HeaderTile Title="Title"
                            Description="Description">
                <dev:HeaderTile.Source>
                    <Image Source="ms-appx:///Assets/Fluent/update.png" />
                </dev:HeaderTile.Source>
            </dev:HeaderTile>
        </StackPanel>
    </dev:HomePageHeader.HeaderContent>
</dev:HomePageHeader>
```

You can change Header and HeaderSubtitle foreground by LightWeight Styling, keys are:

```xml
HomePageHeaderForeground
HomePageHeaderSubtitleForeground
```

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/HomePageHeader.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
