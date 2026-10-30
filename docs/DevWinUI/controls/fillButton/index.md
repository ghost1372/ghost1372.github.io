---
title: FillButton
---

`FillButton` inherits from `Button`.

# Property

|Name|
|-|
|Tone|
|Size|
|Icon|
|NavigateUri|

# Enums

## FillButtonTone

|Name|
|-|
|Soft|
|Outline|

## FillButtonSize

|Name|
|-|
|Small|
|Default|
|Large|

# Example

```xml
<dev:FillButton Content="Get started" />
```

```xml
<dev:FillButton Content="Documentation"
                Tone="Outline"
                Size="Large"
                NavigateUri="https://github.com/Ghost1372/DevWinUI">
    <dev:FillButton.Icon>
        <FontIcon Glyph="&#xE774;" />
    </dev:FillButton.Icon>
</dev:FillButton>
```

> [!WARNING]
> Content should be text, because it is presented twice: as the label and as its decorative copy on the fill.

![FillButton](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/FillButton.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
