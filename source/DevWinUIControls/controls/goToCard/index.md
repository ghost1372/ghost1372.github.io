---
title: GoToCard
---

# Attributes

| Name |
|-|
|Icon|
|ShowIcon|
|Title|
|ActionTitle|
|ActionIcon|
|ShowActionIcon|
|ShowActionButton|
|LaunchUri|

# Events

| Name |
|-|
|ActionClick|

# Example

```xml
<dev:GoToCard Title="Syncfusion Collaborates with Microsoft to Advance .NET MAUI"
              ActionTitle="Read more"
              Icon="{dev:BitmapIconSource Source=ms-appx:///Assets/Fluent/Microsoft.png}">
    <dev:GoToCard.Icon>
        <BitmapIconSource Source="ms-appx:///Assets/Fluent/Microsoft.png">
    </dev:GoToCard.Icon>
</dev:GoToCard>              
```

if you provide LaunchUri and then click on ActionButton, LaunchUri will be used and no need to subscribe to ActionClick event.

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/GoToCard.png)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
