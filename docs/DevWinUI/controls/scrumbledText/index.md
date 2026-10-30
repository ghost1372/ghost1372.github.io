---
title: ScrambledText
---

# Property

|Name|
|-|
|Text|
|Effect|
|Radius|
|Strength|
|Trail|
|Duration|
|Speed|
|ClickBurst|
|ScrambleChars|
|ScrambleColor|
|Intro|

# Enums

|ScrambledTextEffect|
|-|
|Scramble|
|Lift|
|Blur|
|Magnify|

# Related Types

|Name|Description|
|-|-|
|ScrambledTextAutomationPeer|Automation peer. It reports the control as text and uses `Text` as the name when none is set.|
|[WordWrapPanel](../WordWrapPanel)|The panel that wraps the letters word by word.|

# Example

```xml
<dev:ScrambledText Text="Hover over me" Effect="Scramble" Radius="120" />
```

> [!NOTE]
> Letters near the pointer are affected within `Radius`. With the `Scramble` effect, letters briefly turn into random characters from `ScrambleChars` (default ".:") for `Duration` seconds. The `Lift`, `Blur` and `Magnify` effects use `Strength` and `Trail` instead. `Speed` controls how fast scrambled characters change.

> [!NOTE]
> When `Intro` is `true`, the text scrambles into place the first time it becomes visible. When `ClickBurst` is `true`, a click sends a wave through the text. Use `\n` in `Text` for line breaks.

> [!WARNING]
> Duration and Trail are in seconds (defaults 1.2 and 0.6). Radius is in device independent pixels (default 100).

![ScrambledText](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/ScrambledText.gif)


# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
