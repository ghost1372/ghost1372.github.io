---
title: OOBEPageControl
---

```cs
public sealed partial class OOBEPageControl : UserControl
```

# Attributes

| Name |
|-|
|Title|
|Description|
|HeroImage|
|PageContent|
|HeroImageHeight|

# Example

```xml
<dev:OOBEPageControl Title="FileExplorer Preview"
    HeroImage="ms-appx:///Assets/Modules/OOBE/FileExplorer.png"
    Description="These settings allow you to manage your Windows File Explorer custom preview handlers.">
    <dev:OOBEPageControl.PageContent>
        <StackPanel Orientation="Vertical" ChildrenTransitions="{StaticResource SettingsCardsAnimations}">
            <TextBlock Text="How to enable"
                        Style="{ThemeResource OobeSubtitleStyle}" />
            <StackPanel Orientation="Horizontal" Spacing="12" Margin="0,24,0,0">
                <Button Content="Open Settings"/>
                <HyperlinkButton Style="{StaticResource TextButtonStyle}">
                    <TextBlock Text="Learn more about File Explorer add-ons" TextWrapping="Wrap" />
                </HyperlinkButton>
            </StackPanel>
        </StackPanel>
    </wuc:OOBEPageControl.PageContent>
</wuc:OOBEPageControl>
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.

![DevWinUI](https://raw.githubusercontent.com/ghost1372/Resources/main/SettingsUI/Samples/OOBEPageControl.png)
