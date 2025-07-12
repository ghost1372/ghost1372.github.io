---
title: BlurEffectManager
---

# Property
|Name|
|-|
|IsTintEnabled|
|TintTargetMode|
|TintColor|
|SurfaceSource|
|SurfaceBrushSource|
|VisualSource|
|CustomSourceBrush|
|NoiseUri|
|SourceType|
|BlurAmount|
|UseNoise|
|BorderMode|
|Optimization|
|BlendMode|
|NoiseBlendMode|
|NoiseStretch|

# Method
|Name|
|-|
|EnableBlur|
|DisableBlur|
|Refresh|
|GetBrush|
|GetCompositor|
|StartBlurAnimation|
|StartBlurReverseAnimation|
|StopBlurAnimation|
|Dispose|

# Example

```xml
<StackPanel Spacing="10">
    <ToggleSwitch x:Name="TGIsBlurEnabled"
                  Header="IsBlurEnabled"
                  IsOn="True"
                  Toggled="TGIsBlurEnabled_Toggled" />
    <Slider x:Name="TGSlider"
            Header="Blur Amount"
            Maximum="100"
            Minimum="0"
            ValueChanged="TGSlider_ValueChanged"
            Value="10" />
    <ComboBox x:Name="CmbBlurSourceType"
              Header="Blur Source Type"
              ItemsSource="{x:Bind ViewModel.BlurSourceTypeItems, Mode=OneWay}"
              SelectedIndex="0"
              SelectionChanged="CmbBlurSourceType_SelectionChanged" />
    <ComboBox x:Name="CmbEffectBorderMode"
              Header="Effect Border Mode"
              ItemsSource="{x:Bind ViewModel.EffectBorderModeItems, Mode=OneWay}"
              SelectedIndex="1"
              SelectionChanged="CmbEffectBorderMode_SelectionChanged" />
    <ComboBox x:Name="CmbEffectOptimization"
              Header="Effect Optimization"
              ItemsSource="{x:Bind ViewModel.EffectOptimizationItems, Mode=OneWay}"
              SelectedIndex="1"
              SelectionChanged="CmbEffectOptimization_SelectionChanged" />
    <ComboBox x:Name="CmbBlendEffectMode"
              Header="Blend Effect Mode"
              ItemsSource="{x:Bind ViewModel.BlendEffectModeItems, Mode=OneWay}"
              SelectedIndex="0"
              SelectionChanged="CmbBlendEffectMode_SelectionChanged" />
    <ComboBox x:Name="CmbNoiseBlendMode"
              Header="Noise Blend Effect Mode"
              ItemsSource="{x:Bind ViewModel.BlendEffectModeItems, Mode=OneWay}"
              SelectedIndex="1"
              SelectionChanged="CmbNoiseBlendMode_SelectionChanged" />
    <ToggleSwitch x:Name="TGUseNoise"
                  Header="Use Noise"
                  IsOn="False"
                  Toggled="TGUseNoise_Toggled" />
    <TextBox x:Name="TxtNoiseUri"
             Header="Noise Uri"
             IsReadOnly="True"
             Text="ms-appx:///Assets/Noise/Noise.jpg" />
    <ColorPicker x:Name="CpTintColor"
                 ColorChanged="CpTintColor_ColorChanged"
                 IsAlphaSliderVisible="False"
                 IsAlphaTextInputVisible="False"
                 IsColorChannelTextInputVisible="False"
                 IsColorPreviewVisible="False"
                 IsColorSliderVisible="False"
                 IsHexInputVisible="False"
                 IsMoreButtonVisible="False"
                 Color="Transparent" />
</StackPanel>
<Image x:Name="BackdropImage"
                      MaxHeight="500"
                      VerticalAlignment="Top"
                      Source="ms-appx:///Assets/Others/Girl.jpg"
                      Stretch="Uniform" />
```

```cs
private BlurEffectManager _blurEffectManager;
_blurEffectManager = new BlurEffectManager(BackdropImage) { IsTintEnabled = true };

private void TGIsBlurEnabled_Toggled(object sender, RoutedEventArgs e)
{
    if (_blurEffectManager == null)
    {
        return;
    }

    if (TGIsBlurEnabled.IsOn)
    {
        _blurEffectManager.EnableBlur();
    }
    else
    {
        _blurEffectManager.DisableBlur();
    }
}

private void TGSlider_ValueChanged(object sender, Microsoft.UI.Xaml.Controls.Primitives.RangeBaseValueChangedEventArgs e)
{
    if (_blurEffectManager != null && TGIsBlurEnabled.IsOn)
    {
        _blurEffectManager.BlurAmount = e.NewValue;
    }
}

private void CpTintColor_ColorChanged(ColorPicker sender, ColorChangedEventArgs args)
{
    if (_blurEffectManager != null && TGIsBlurEnabled.IsOn)
    {
        _blurEffectManager.TintColor = args.NewColor;
    }
}

private void TGUseNoise_Toggled(object sender, RoutedEventArgs e)
{
    if (_blurEffectManager != null && TGIsBlurEnabled.IsOn)
    {
        _blurEffectManager.UseNoise = TGUseNoise.IsOn;
        if (TGUseNoise.IsOn)
        {
            _blurEffectManager.NoiseUri = TxtNoiseUri.Text;
        }
    }
}

private void CmbBlurSourceType_SelectionChanged(object sender, SelectionChangedEventArgs e)
{
    if (_blurEffectManager != null && CmbBlurSourceType != null && TGIsBlurEnabled.IsOn)
    {
        switch ((BlurSourceType)CmbBlurSourceType.SelectedIndex)
        {
            case BlurSourceType.Backdrop:
                break;
            case BlurSourceType.Surface:
                //_blurEffectManager.SurfaceBrushSource = BackdropImage.SurfaceBrush;
                var surface = LoadedImageSurface.StartLoadFromUri(BackdropImage.BaseUri);
                _blurEffectManager.SurfaceSource = surface;
                break;
            case BlurSourceType.Visual:
                Visual visual = ElementCompositionPreview.GetElementVisual(BackdropImage);
                _blurEffectManager.VisualSource = visual;
                break;
            case BlurSourceType.Custom:
                _blurEffectManager.CustomSourceBrush = _blurEffectManager.GetCompositor().CreateColorBrush(Colors.Green);
                break;
        }
        _blurEffectManager.SourceType = (BlurSourceType)CmbBlurSourceType.SelectedIndex;
    }
}

private void CmbEffectBorderMode_SelectionChanged(object sender, SelectionChangedEventArgs e)
{
    if (_blurEffectManager != null && CmbEffectBorderMode != null && TGIsBlurEnabled.IsOn)
    {
        _blurEffectManager.BorderMode = (EffectBorderMode)CmbEffectBorderMode.SelectedIndex;
    }
}

private void CmbEffectOptimization_SelectionChanged(object sender, SelectionChangedEventArgs e)
{
    if (_blurEffectManager != null && CmbEffectOptimization != null && TGIsBlurEnabled.IsOn)
    {
        _blurEffectManager.Optimization = (EffectOptimization)CmbEffectOptimization.SelectedIndex;
    }
}

private void CmbBlendEffectMode_SelectionChanged(object sender, SelectionChangedEventArgs e)
{
    if (_blurEffectManager != null && CmbBlendEffectMode != null && TGIsBlurEnabled.IsOn)
    {
        _blurEffectManager.BlendMode = (BlendEffectMode)CmbBlendEffectMode.SelectedIndex;
    }
}
private void CmbNoiseBlendMode_SelectionChanged(object sender, SelectionChangedEventArgs e)
{
    if (_blurEffectManager != null && CmbNoiseBlendMode != null && TGIsBlurEnabled.IsOn)
    {
        _blurEffectManager.NoiseBlendMode = (BlendEffectMode)CmbNoiseBlendMode.SelectedIndex;
    }
}
```

{% warning info %}
When `BlurSourceType` is set to `Surface`, you need to provide either `SurfaceSource` (of type `ICompositionSurface`) or `SurfaceBrushSource` (of type `CompositionSurfaceBrush`). These two properties have been added for convenience.

If you're using a standard `<Image/>` control, you'll need to manually extract a compatible `SurfaceSource` from the image. However, if you're using the `<CompositionImage/>` control, you can directly obtain the `SurfaceBrushSource` via `img.SurfaceBrush`.

{% endnote %}

{% warning info %}
When `BlurSourceType` is set to `Visual`, you must provide a `VisualSource` of type `Visual`.

{% endnote %}

{% warning info %}
When `BlurSourceType` is set to `Custom`, you must provide a `CustomSourceBrush` of type `CompositionBrush`.
{% endnote %}


# Example 2

```xml
<Image x:Name="BackdropImage2"
            MaxHeight="500"
            VerticalAlignment="Top"
            PointerEntered="BackdropImage_PointerEntered"
            PointerExited="BackdropImage_PointerExited"
            Source="ms-appx:///Assets/Others/Girl.jpg"
            Stretch="Uniform" />
```

```cs
private BlurEffectManager _blurEffectManager;
_blurEffectManager = new BlurEffectManager(BackdropImage) { IsTintEnabled = true };

private void BackdropImage_PointerEntered(object sender, Microsoft.UI.Xaml.Input.PointerRoutedEventArgs e)
{
    if (_blurEffectManager != null)
    {
        _blurEffectManager.StartBlurAnimation(10.0, TimeSpan.FromMilliseconds(3000));
    }
}

private void BackdropImage_PointerExited(object sender, Microsoft.UI.Xaml.Input.PointerRoutedEventArgs e)
{
    if (_blurEffectManager != null)
    {
        _blurEffectManager.StartBlurReverseAnimation(10.0, TimeSpan.FromMilliseconds(3000));
    }
}
```

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/BlurEffectManager.gif)

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/BlurEffectManager2.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.