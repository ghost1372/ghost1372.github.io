---
title: ColorShadow
---

ColorShadow control provides a shadow to an image. This shadow is derived from the colors of the image around its borders. ColorShadow control internally has two visual layers - the top layer is used to display the original image while the bottom layer is used to display the shadow generated from the image. It is also possible to provide a drop shadow to the the top layer.

# Property

|Name|
|-|
|ColorShadowBlurRadius|
|ColorShadowOpacity|
|ColorShadowPadding|
|ImageUri|
|IsShadowEnabled|
|ColorMaskBlurRadius|
|ColorMaskPadding|
|ShadowBlurRadius|
|ShadowColor|
|ShadowOffsetX|
|ShadowOffsetY|
|ShadowOffsetZ|
|ShadowOpacity|
|Stretch|
|IsRounded|
|Mask|

# Example

```xml
<dev:ColorShadow ColorMaskBlurRadius="11"
                ColorMaskPadding="25"
                ColorShadowBlurRadius="12"
                ColorShadowOpacity="0.7"
                ColorShadowPadding="35"
                ImageUri="ms-appx:///Assets/Others/RainbowRose.png"
                ShadowBlurRadius="12"
                ShadowOffsetX="4"
                ShadowOffsetY="4"
                ShadowOpacity="0.5" />
```

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/ColorShadow.png)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
