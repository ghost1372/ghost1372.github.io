---
title: DropdownColorPicker
---

# Attributes
|Property|
|-|
|FlyoutPlacement|
|FlyoutShowMode|
|FlyoutShouldConstrainToRootBounds|
|FlyoutLightDismissOverlayMode|
|ColorPalette|
|IsColorCodeVisible|
|Color|
|IsMoreButtonVisible|
|IsColorSliderVisible|
|IsColorChannelTextInputVisible|
|IsHexInputVisible|
|IsAlphaEnabled|
|IsAlphaSliderVisible|
|IsAlphaTextInputVisible|
|IsColorPreviewVisible|
|IsColorSpectrumVisible|
|ColorSpectrumShape|
|IsCopyColorCodeOnSelectEnabled|
|TintBoxMargin|
|TintBoxCornerRadius|
|TintBoxWidth|
|TintBoxHeight|

# Events
|Name|
|-|
|ColorChanged|

# Example

```xml
<dev:DropdownColorPicker />
```

# ColorPalette
`DropdownColorPicker` uses a `ColorPicker` inside a Flyout by `default`.
If you'd like to replace it with a `ColorPalette`, you can do so like this:

```xml
<dev:DropdownColorPicker>
    <dev:DropdownColorPicker.ColorPalette>
        <dev:ColorPalette />
    </dev:DropdownColorPicker.ColorPalette>
</dev:DropdownColorPicker>
```

{% note warning %}
There are several properties available for controlling both the `ColorPicker` and the `Flyout`.
However, avoid modifying `Flyout`-related properties at `runtime`, as certain limitations in WinUI could cause crashes.
Instead, configure these properties during app startup and dont change them later.
{% endnote %}

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.

![DropdownColorPicker](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/DropdownColorPicker.gif)
