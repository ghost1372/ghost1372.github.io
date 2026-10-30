---
title: ColorArchiveScroll
---

# Property

|Name|
|-|
|Projects|
|ShowPreview|
|PreviewSize|
|EnableSound|
|TickSource|
|InfiniteScroll|
|ScrollThreshold|
|ShowRuler|
|ActiveAnchor|
|RowLeading|
|ActiveIndex|
|DefaultActiveIndex|
|ReduceMotion|
|Label|

# Methods

|Name|
|-|
|Refresh|

# Events

|Name|
|-|
|ActiveChanged|

# Example

```xml
<dev:ColorArchiveScroll x:Name="Archive" Projects="{x:Bind Projects}" />
```

```csharp
Projects = new List<ColorArchiveProject>
{
    ColorArchiveProject.Make("1", "Aurora", "Branding", "2024", "#FF6B6B"),
    ColorArchiveProject.Make("2", "Nimbus", "Web", "2025", "#4ECDC4"),
    ColorArchiveProject.Make("3", "Solstice", "Motion", "2025", "#FFD93D")
};
```

> [!NOTE]
> `ColorArchiveProject.BgColor` is parsed from a 6-digit hex string (with or without `#`) by `ColorArchiveProject.Make`. Invalid values fall back to white.

> [!WARNING]
> `ActiveAnchor` is a double and should be from 0 to 1.

![ColorArchiveScroll](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/ColorArchive.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
