---
title: TextHighlight
---

# Property

|Name|
|-|
|Text|
|HighlightText|
|HighlightBrush|
|BandOpacity|
|BandPadding|
|BandCornerRadius|
|Duration|
|Delay|
|Trigger|
|Drawn|
|TextWrapping|

# Enums

## TextHighlightTrigger

|Name|
|-|
|View|
|Hover|
|Mount|

# Example

```xml
<dev:TextHighlight Text="Highlight the important part of this sentence."
                   HighlightText="important part" />
```

```xml
<dev:TextHighlight Text="Highlight the important part of this sentence."
                   HighlightText="important part"
                   HighlightBrush="{ThemeResource AccentFillColorDefaultBrush}"
                   BandOpacity="0.4"
                   Trigger="Hover"
                   Duration="0.9" />
```

> [!NOTE]
> `Duration` and `Delay` are in seconds.

> [!NOTE]
> If `HighlightText` is empty, the whole text is highlighted. If it is not found in `Text`, nothing is drawn. Only the first match is highlighted.

> [!NOTE]
> Set `Drawn` to `true` or `false` to control the highlight manually. When `Drawn` is `null`, `Trigger` decides when the highlight is drawn.

> [!WARNING]
> `BandOpacity` is a double and should be from 0 to 1.

![TextHighlight](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/TextHighlight.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
