---
title: AnimationExtensions
---

# Methods

|Name|
|-|
|AnimateX|
|AnimateXAsync|
|AnimateY|
|AnimateYAsync|
|AnimateScaleX|
|AnimateScaleXAsync|
|AnimateScaleY|
|AnimateScaleYAsync|
|AnimateWidth|
|AnimateWidthAsync|
|AnimateHeight|
|AnimateHeightAsync|
|FadeIn|
|FadeInAsync|
|FadeOut|
|FadeOutAsync|
|AnimateDoubleProperty|
|AnimateDoublePropertyAsync|

# Example

```xml
<StackPanel Spacing="10">
    <Button MinWidth="200"
            Click="OnFadeIn"
            Content="Fade In" />
    <Button MinWidth="200"
            Click="OnAnimateWidth"
            Content="Animate Width" />
    <Button MinWidth="200"
            Click="OnAnimateHeight"
            Content="Animate Height" />
    <Button MinWidth="200"
            Click="OnGrow"
            Content="Grow" />
    <Button MinWidth="200"
            Click="OnRotate"
            Content="Rotate" />
    <Button MinWidth="200"
            Click="OnTranslate"
            Content="Translate" />
    <Button MinWidth="200"
            Click="OnSkew"
            Content="Skew" />
</StackPanel>
<Grid Name="SampleGrid"
            Width="200"
            Height="200"
            Margin="50,50,0,0"
            HorizontalAlignment="Left"
            VerticalAlignment="Top"
            Background="Red">
```

```cs
private bool _isBusy = false;

private async void OnFadeIn(object sender, RoutedEventArgs e)
{
    _isBusy = true;
    await SampleGrid.AnimateDoublePropertyAsync("Opacity", 1.0, 0.0, 500);
    await SampleGrid.AnimateDoublePropertyAsync("Opacity", 0.0, 1.0, 500);
    _isBusy = false;
}

private async void OnAnimateWidth(object sender, RoutedEventArgs e)
{
    _isBusy = true;
    await SampleGrid.AnimateDoublePropertyAsync("Width", 200.0, 400.0, 500);
    await SampleGrid.AnimateDoublePropertyAsync("Width", 400.0, 200.0, 500);
    _isBusy = false;
}

private async void OnAnimateHeight(object sender, RoutedEventArgs e)
{
    _isBusy = true;
    await SampleGrid.AnimateDoublePropertyAsync("Height", 200.0, 400.0, 500);
    await SampleGrid.AnimateDoublePropertyAsync("Height", 400.0, 200.0, 500);
    _isBusy = false;
}

private async void OnGrow(object sender, RoutedEventArgs e)
{
    _isBusy = true;
    SampleGrid.AnimateDoubleProperty("Width", 200.0, 250.0, 300);
    SampleGrid.AnimateDoubleProperty("Height", 200.0, 250.0, 300);
    await Task.Delay(300);
    SampleGrid.AnimateDoubleProperty("Width", 250.0, 150.0, 300);
    SampleGrid.AnimateDoubleProperty("Height", 250.0, 150.0, 300);
    await Task.Delay(300);
    SampleGrid.AnimateDoubleProperty("Width", 150.0, 200.0, 300);
    SampleGrid.AnimateDoubleProperty("Height", 150.0, 200.0, 300);
    _isBusy = false;
}

private async void OnRotate(object sender, RoutedEventArgs e)
{
    _isBusy = true;
    RotateTransform rotateTransform = new RotateTransform() { CenterX = 100, CenterY = 100 };
    SampleGrid.RenderTransform = rotateTransform;
    await rotateTransform.AnimateDoublePropertyAsync("Angle", 0.0, -360.0, 1000);
    _isBusy = false;
}

private async void OnTranslate(object sender, RoutedEventArgs e)
{
    _isBusy = true;
    TranslateTransform translateTransform = new TranslateTransform();
    SampleGrid.RenderTransform = translateTransform;
    translateTransform.AnimateDoubleProperty("X", 0.0, 100.0, 300);
    translateTransform.AnimateDoubleProperty("Y", 0.0, 100.0, 300);
    await Task.Delay(500);
    translateTransform.AnimateDoubleProperty("X", 100.0, 0.0, 300);
    translateTransform.AnimateDoubleProperty("Y", 100.0, 0.0, 300);
    _isBusy = false;
}

private async void OnSkew(object sender, RoutedEventArgs e)
{
    _isBusy = true;
    SkewTransform skewTransform = new SkewTransform() { CenterX = 100, CenterY = 100 };
    SampleGrid.RenderTransform = skewTransform;
    await skewTransform.AnimateDoublePropertyAsync("AngleX", 0.0, 20.0, 300);
    await skewTransform.AnimateDoublePropertyAsync("AngleX", 20.0, -20.0, 600);
    await skewTransform.AnimateDoublePropertyAsync("AngleX", -20.0, 0.0, 300);
    await skewTransform.AnimateDoublePropertyAsync("AngleY", 0.0, 20.0, 300);
    await skewTransform.AnimateDoublePropertyAsync("AngleY", 20.0, -20.0, 600);
    await skewTransform.AnimateDoublePropertyAsync("AngleY", -20.0, 0.0, 300);
    _isBusy = false;
}
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/AnimationExtensions.gif)