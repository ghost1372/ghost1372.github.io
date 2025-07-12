---
title: BlurEffectBrush
---

```cs
public partial class BlurEffectBrush  : XamlCompositionBrushBase
```

# Property
|Name|
|-|
|ImageUri|

# Example

```xml
 <Grid Width="350"
      HorizontalAlignment="Left">
    <Grid.Background>
        <LinearGradientBrush>
            <GradientStopCollection>
                <GradientStop Offset="0.2" Color="#485563" />
                <GradientStop Offset="0.8" Color="#29323C" />
            </GradientStopCollection>
        </LinearGradientBrush>
    </Grid.Background>
    <Grid Margin="10,10,20,20">
        <Grid.Background>
            <ImageBrush ImageSource="ms-appx:///Assets/Landscapes/Landscape-12.jpg"
                        Stretch="UniformToFill" />
        </Grid.Background>
        <Grid Padding="10">
            <Path HorizontalAlignment="Center"
                  VerticalAlignment="Center"
                  Data="M200 20 a200 200 0 1 0 1 0m-1 100a100 100 0 1 1 -1 0"
                  Stretch="Uniform">
                <Path.Fill>
                    <dev:BlurEffectBrush FallbackColor="#80C0C0C0" />
                </Path.Fill>
            </Path>
        </Grid>
    </Grid>
</Grid>
```

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/BlurEffectBrush.png)