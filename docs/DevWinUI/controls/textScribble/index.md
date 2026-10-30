---
title: TextScribble
---

# Property

|Name|
|-|
|Text|
|MarkText|
|Type|
|MarkBrush|
|StrokeWidth|
|MarkPadding|
|Iterations|
|Duration|
|Delay|
|Trigger|
|Drawn|
|TextWrapping|

# Enums

## TextScribbleType

|Name|
|-|
|Scribble|
|Underline|
|StrikeThrough|
|Circle|
|Box|

## TextScribbleTrigger

|Name|
|-|
|View|
|Hover|
|Mount|

# Example

```xml
<dev:TextScribble Text="Hand-drawn marks on your text."
                  MarkText="Hand-drawn"
                  Type="Circle" />
```

```xml
<dev:TextScribble Text="Hand-drawn marks on your text."
                  MarkText="marks"
                  Type="Scribble"
                  MarkBrush="{ThemeResource AccentFillColorDefaultBrush}"
                  StrokeWidth="2"
                  Iterations="2"
                  Trigger="Hover" />
```

> [!NOTE]
> `Duration` and `Delay` are in seconds.

> [!NOTE]
> If `MarkText` is empty, the whole text is marked. If it is not found in `Text`, nothing is drawn. Only the first match is marked.

> [!NOTE]
> Set `Drawn` to `true` or `false` to control the mark manually. When `Drawn` is `null`, `Trigger` decides when the mark is drawn.

> [!WARNING]
> `Iterations` is a nullable int and is clamped from 1 to 4. When it is `null`, `Scribble` uses 2 passes and every other type uses 1 pass.

![TextScribble](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/TextScribble.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
