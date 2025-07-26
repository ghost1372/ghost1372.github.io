---
title: FlipToReveal
---

# Property

|Name|
|-|
|PrimaryContent|
|SecondaryContent|
|RotationDuration|

# Example

```xml
<dev:FlipToReveal Margin="0,150,0,0">
    <dev:FlipToReveal.PrimaryContent>
        <Image Width="350"
                Height="192"
                HorizontalAlignment="Center"
                VerticalAlignment="Center"
                Source="ms-appx:///Assets/Landscapes/Landscape-1.jpg" />
    </dev:FlipToReveal.PrimaryContent>
    <dev:FlipToReveal.SecondaryContent>
        <Border Width="350"
                Height="192"
                HorizontalAlignment="Center"
                VerticalAlignment="Center"
                Background="#250E35"
                BorderBrush="#B91C8D"
                BorderThickness="2"
                Opacity="0.8">
            <StackPanel Padding="10"
                        VerticalAlignment="Bottom"
                        Background="#250E35"
                        Opacity="1">
                <TextBlock Foreground="#FDDA01"
                            Text="Lorem ipsum"
                            Typography.Capitals="AllSmallCaps" />
                <TextBlock Foreground="#F0EFF0"
                            MaxLines="3"
                            Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            TextTrimming="WordEllipsis"
                            TextWrapping="WrapWholeWords" />
            </StackPanel>
        </Border>
    </dev:FlipToReveal.SecondaryContent>
</dev:FlipToReveal>
```

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/FlipToReveal.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
