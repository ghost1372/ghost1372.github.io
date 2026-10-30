---
title: OrbitCard
---

# Property

|Name|
|-|
|Item|
|PaletteIndex|
|LinkLabel|
|ShowDescription|
|NameFontSize|
|BodyFontSize|
|InitialsFontSize|

# Helper Types

|Name|Description|
|-|-|
|OrbitCardItem|Record with `Name`, `Role`, `Description`, `Image`, `Initials`, `Stat` and `Href`.|

# Example

```xml
<dev:OrbitCard Width="148" Height="196" Item="{x:Bind Person}" />
```

```csharp
Person = new OrbitCardItem(
    "Ada Lovelace",
    Role: "Mathematician",
    Description: "Wrote the first published algorithm.",
    Href: new Uri("https://example.com"));
```

> [!NOTE]
> `OrbitCard` is a `ContentControl`. When `Content` is set it replaces the image and initials area. When there is no image, the initials are shown (taken from `Initials`, or from the first and last word of `Name`).

> [!NOTE]
> `PaletteIndex` selects one of six palettes and wraps around. The link button is shown only when `Item.Href` is set.

> [!NOTE]
> `OrbitCard` is usually created by [OrbitCardStack](../OrbitCardStack).

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
