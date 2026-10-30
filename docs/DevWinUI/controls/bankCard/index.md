---
title: BankCard
---

`BankCard` inherits from [Hover3DCard](../Hover3DCard/index.md), so `MaxTilt`, `HoverScale`, `Perspective` and `SmoothingMs` are also available.

# Property

|Name|
|-|
|BankName|
|CardNumber|
|CardHolder|
|Expiration|
|Cvv2|
|MaskNumber|
|ShowCvv|
|ShowChip|
|CardLogo|
|BackgroundImage|
|ChipBackground|
|LabelForeground|
|GlareBrush|

# Example

```xml
<dev:BankCard BankName="DevWinUI Bank"
              CardNumber="4111111111111111"
              CardHolder="John Doe"
              Expiration="12/30"
              Cvv2="123" />
```

```xml
<dev:BankCard BankName="DevWinUI Bank"
              CardNumber="4111111111111111"
              CardHolder="John Doe"
              Expiration="12/30"
              Cvv2="123"
              MaskNumber="True"
              ShowChip="True"
              CardLogo="ms-appx:///Assets/Logo.png"
              BackgroundImage="ms-appx:///Assets/CardBackground.png" />
```

> [!NOTE]
> The number is grouped automatically (4-6-5 for 15-digit American Express numbers, groups of 4 otherwise). `MaskNumber` hides every digit except the last four, and `Cvv2` is hidden unless `ShowCvv` is `true`.

![BankCard](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/BankCard.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
