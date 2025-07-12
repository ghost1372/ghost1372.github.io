---
title: BlurEffectControl
---

# Property
|Name|
|-|
|IsBlurEnabled|
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
|GetBlurEffectManager|
|GetBrush|
|GetCompositor|

# BlurSourceType

## Backdrop
Any control that is composited above other content and you want to blur the background behind the control.

## Surface
`CompositionImage` or any control that renders a `Win2D` surface or LoadedImageSurface, often for blurring images or canvas-rendered content.

## Visual
Any control or content hosted via Visual, especially when you want to blur a specific part of UI or visual tree

## Custom
Fully customized scenarios where the user provides their own CompositionBrush

# Example

```xml
<StackPanel Spacing="10">
    <ToggleSwitch x:Name="TGIsBlurEnabled"
                  Header="IsBlurEnabled"
                  IsOn="True" />
    <Slider x:Name="TGSlider"
            Header="Blur Amount"
            Maximum="100"
            Minimum="0"
            Value="2" />
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
                  IsOn="False" />
    <TextBox x:Name="TxtNoiseUri"
             Header="Noise Uri"
             IsReadOnly="True"
             Text="ms-appx:///Assets/Noise/Noise.jpg" />
    <ColorPicker x:Name="CpTintColor"
                 IsAlphaSliderVisible="False"
                 IsAlphaTextInputVisible="False"
                 IsColorChannelTextInputVisible="False"
                 IsColorPreviewVisible="False"
                 IsColorSliderVisible="False"
                 IsHexInputVisible="False"
                 IsMoreButtonVisible="False"
                 Color="Transparent" />
</StackPanel>
<Grid VerticalAlignment="Top">
    <dev:CompositionImage x:Name="BackdropImage" Source="ms-appx:///Assets/Landscapes/Landscape-9.jpg" />
    <TextBlock HorizontalAlignment="Center"
               VerticalAlignment="Center"
               FontSize="72"
               Foreground="Black"
               Text="DevWinUI"
               TextWrapping="Wrap" />
    <dev:BlurEffectControl x:Name="BlurEffectControlSample"
                           BlurAmount="{x:Bind TGSlider.Value, Mode=OneWay}"
                           IsBlurEnabled="{x:Bind TGIsBlurEnabled.IsOn, Mode=OneWay}"
                           IsTintEnabled="True"
                           NoiseUri="{x:Bind TxtNoiseUri.Text, Mode=OneWay}"
                           TintColor="{x:Bind CpTintColor.Color, Mode=OneWay}"
                           UseNoise="{x:Bind TGUseNoise.IsOn, Mode=OneWay}" />
</Grid>
```

```cs
private void CmbBlurSourceType_SelectionChanged(object sender, SelectionChangedEventArgs e)
{
    if (CmbBlurSourceType != null && TGIsBlurEnabled.IsOn)
    {
        switch ((BlurSourceType)CmbBlurSourceType.SelectedIndex)
        {
            case BlurSourceType.Backdrop:
                break;
            case BlurSourceType.Surface:
                BlurEffectControlSample.SurfaceBrushSource = BackdropImage.SurfaceBrush;
                //var surface = LoadedImageSurface.StartLoadFromUri(new Uri(BackdropImage.Source.AbsoluteUri));
                //BlurEffectControlSample.SurfaceSource = surface;
                break;
            case BlurSourceType.Visual:
                Visual visual = ElementCompositionPreview.GetElementVisual(BackdropImage);
                BlurEffectControlSample.VisualSource = visual;
                break;
            case BlurSourceType.Custom:
                BlurEffectControlSample.CustomSourceBrush = BlurEffectControlSample.GetCompositor().CreateColorBrush(Colors.Green);
                break;
        }
        BlurEffectControlSample.SourceType = (BlurSourceType)CmbBlurSourceType.SelectedIndex;
    }
}

private void CmbEffectBorderMode_SelectionChanged(object sender, SelectionChangedEventArgs e)
{
    if (CmbEffectBorderMode != null && TGIsBlurEnabled.IsOn)
    {
        BlurEffectControlSample.BorderMode = (EffectBorderMode)CmbEffectBorderMode.SelectedIndex;
    }
}

private void CmbEffectOptimization_SelectionChanged(object sender, SelectionChangedEventArgs e)
{
    if (CmbEffectOptimization != null && TGIsBlurEnabled.IsOn)
    {
        BlurEffectControlSample.Optimization = (EffectOptimization)CmbEffectOptimization.SelectedIndex;
    }
}

private void CmbBlendEffectMode_SelectionChanged(object sender, SelectionChangedEventArgs e)
{
    if (CmbBlendEffectMode != null && TGIsBlurEnabled.IsOn)
    {
        BlurEffectControlSample.BlendMode = (BlendEffectMode)CmbBlendEffectMode.SelectedIndex;
    }
}
private void CmbNoiseBlendMode_SelectionChanged(object sender, SelectionChangedEventArgs e)
{
    if (CmbNoiseBlendMode != null && TGIsBlurEnabled.IsOn)
    {
        BlurEffectControlSample.NoiseBlendMode = (BlendEffectMode)CmbNoiseBlendMode.SelectedIndex;
    }
}
```


{% note warning %}
When `BlurSourceType` is set to `Surface`, you need to provide either `SurfaceSource` (of type `ICompositionSurface`) or `SurfaceBrushSource` (of type `CompositionSurfaceBrush`). These two properties have been added for convenience.

If you're using a standard `<Image/>` control, you'll need to manually extract a compatible `SurfaceSource` from the image. However, if you're using the `<CompositionImage/>` control, you can directly obtain the `SurfaceBrushSource` via `img.SurfaceBrush`.

{% endnote %}

{% note warning %}
When `BlurSourceType` is set to `Visual`, you must provide a `VisualSource` of type `Visual`.

{% endnote %}

{% note warning %}
When `BlurSourceType` is set to `Custom`, you must provide a `CustomSourceBrush` of type `CompositionBrush`.
{% endnote %}

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/BlurEffectControl.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.