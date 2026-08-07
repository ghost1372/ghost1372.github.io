---
title: GoToTop
---

# Attributes
|Property|
|-|
|Target|
|Animated|
|HidingHeight|
|AutoHiding|

# Example

```xml
<ScrollViewer Name="ScrollViewerSample">
    <Border Height="2000" Margin="8,0">
        <Border.Background>
            <LinearGradientBrush EndPoint="0.5,1" StartPoint="0.5,0">
                <GradientStop Color="White" Offset="0"/>
                <GradientStop Color="Black" Offset="1"/>
            </LinearGradientBrush>
        </Border.Background>
    </Border>
</ScrollViewer>
<dev:GotoTop Animated="True" AutoHiding="True" Target="{Binding ElementName=ScrollViewerSample}" HorizontalAlignment="Right" VerticalAlignment="Bottom" Margin="0,0,20,20"/>
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.

![GoToTop](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/GoToTop.gif)
