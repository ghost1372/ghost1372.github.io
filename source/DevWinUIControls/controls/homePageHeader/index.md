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
                            Description="Description" />
            <dev:HeaderTile Title="Title"
                            Description="Description" />
            <dev:HeaderTile Title="Title"
                            Description="Description" />
            <dev:HeaderTile Title="Title"
                            Description="Description" />
        </StackPanel>
    </dev:HomePageHeader.HeaderContent>
</dev:HomePageHeader>
```

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/HomePageHeader.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
