---
title: ProfileControl
---

ProfileControl allows you to display an image (normally a user profile image) in an intuitive way. This control is mainly implemented using Composition Visuals and animations which provide a rich user experience. Depending on the width and height of the ProfileControl, its shape can be either circular or elliptical. There are two main components within the ProfileControl

Background Visual - The outermost circular or elliptical area. This area is filled with the CompositionBackdropBrush which blends the control with whatever is rendered beneath the control.
Image Visual - The innermost circular or elliptical area. This area renders the image provided.

# Property

|Name|
|-|
|BlurRadius|
|BorderGap|
|FluidReveal|
|RevealDuration|
|Source|
|Stretch|
|Tint|

# Example

```xml
<dev:ProfileControl x:Name="profile"
                    Width="320"
                    Source="ms-appx:///Assets/Profile.png"
                    Height="320"
                    HorizontalAlignment="Center"
                    VerticalAlignment="Center"
                    BorderGap="25"
                    Stretch="Uniform"
                    Tint="#efefef" />
```

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/ProfileControl.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
