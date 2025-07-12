---
title: ColorSlideControl
---

# Method

|Name|
|-|
|StartTransition|
|ApplyClipping|

# Example

```xml
<ColorPicker x:Name="ColorPickerSample"
                    IsAlphaSliderVisible="False"
                    IsAlphaTextInputVisible="False"
                    IsColorChannelTextInputVisible="False"
                    IsColorPreviewVisible="False"
                    IsColorSliderVisible="False"
                    IsHexInputVisible="False"
                    IsMoreButtonVisible="False"
                    Color="Red" />
<Grid Height="200"
        SizeChanged="OnSizeChanged">
    <Button x:Name="BtnStart"
                    Click="OnClick"
                    Content="Start" />
    <dev:ColorSlideControl x:Name="ColorSlideSample"
                            Color="{x:Bind ColorPickerSample.Color, Mode=OneWay}" />
</Grid>

```

```cs
private void OnClick(object sender, RoutedEventArgs e)
{
    var button = (Button)sender;
    ColorSlideSample.StartTransition(button, this.RenderSize);
}

private void OnSizeChanged(object sender, SizeChangedEventArgs e)
{
    ColorSlideSample.ApplyClipping(e.NewSize);
}
```

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/ColorSlideControl.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
