---
title: AutoScrollView
---

# Attributes
|Property|
|-|
|Spacing|
|IsPlaying|
|ScrollingPixelsPreSecond|


# Example With TextBlock

```xml
<dev:AutoScrollView IsPlaying="True">
    <TextBlock Text="Long Text"
               TextTrimming="None" />
</dev:AutoScrollView>
```

# Example With Button Content

```xml
<ToggleButton MaxWidth="150"
              Margin="0,20"
              Padding="0,5,0,6"
              IsChecked="True">
    <dev:AutoScrollView Padding="11,0"
                        IsPlaying="True">
        <TextBlock Text="Long Text"
                   TextTrimming="CharacterEllipsis" />
    </dev:AutoScrollView>
</ToggleButton>
```

# Example / Run Fast

```xml
<dev:AutoScrollView Margin="0,20"
                    IsPlaying="True"
                    ScrollingPixelsPreSecond="200">
    <TextBlock Text="Long Text"
               TextTrimming="None" />
</dev:AutoScrollView>
```

![AutoScrollView](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/AutoScrollView.gif)


# Example with OpacityMaskView

```xml
<dev:OpacityMaskView>
    <dev:OpacityMaskView.OpacityMask>
        <LinearGradientBrush StartPoint="0,0" EndPoint="1,0">
            <GradientStop Offset="0" Color="Transparent" />
            <GradientStop Offset="0.02" Color="#FFFFFFFF" />
            <GradientStop Offset="0.98" Color="#FFFFFFFF" />
            <GradientStop Offset="1" Color="Transparent" />
        </LinearGradientBrush>
    </dev:OpacityMaskView.OpacityMask>
    <dev:AutoScrollView Margin="0,20"
                        Padding="10,0"
                        IsPlaying="True">
        <TextBlock Text="Long Text"
                   TextTrimming="None" />
    </dev:AutoScrollView>
</dev:OpacityMaskView>
```

# Example With Mouse Hover

```xml
<dev:AutoScrollView x:Name="AutoScrollHoverEffectView"
                    Margin="0,20"
                    PointerCanceled="AutoScrollHoverEffectView_PointerCanceled"
                    PointerEntered="AutoScrollHoverEffectView_PointerEntered"
                    PointerExited="AutoScrollHoverEffectView_PointerExited"
                    IsPlaying="False">
    <TextBlock Text="Long Text"
               TextTrimming="CharacterEllipsis" />
</dev:AutoScrollView>
```

```cs
private void AutoScrollHoverEffectView_PointerCanceled(object sender, Microsoft.UI.Xaml.Input.PointerRoutedEventArgs e)
{
    AutoScrollHoverEffectView.IsPlaying = false;
}

private void AutoScrollHoverEffectView_PointerEntered(object sender, Microsoft.UI.Xaml.Input.PointerRoutedEventArgs e)
{
    AutoScrollHoverEffectView.IsPlaying = true;
}

private void AutoScrollHoverEffectView_PointerExited(object sender, Microsoft.UI.Xaml.Input.PointerRoutedEventArgs e)
{
    AutoScrollHoverEffectView.IsPlaying = false;
}
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.

![AutoScrollView2](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/AutoScrollView2.gif)
