---
title: ImageEffectBrush 
---

```cs
public partial class ImageEffectBrush : XamlCompositionBrushBase
```

# Property
|Name|
|-|
|ImageUri|

# Example

```xml
 <Grid>
     <Grid.Background>
         <LinearGradientBrush>
             <GradientStopCollection>
                 <GradientStop Offset="0.2" Color="#485563" />
                 <GradientStop Offset="0.8" Color="#29323C" />
             </GradientStopCollection>
         </LinearGradientBrush>
     </Grid.Background>
     <Grid.ColumnDefinitions>
         <ColumnDefinition />
         <ColumnDefinition />
     </Grid.ColumnDefinitions>
     <Grid Grid.Column="0"
           Margin="20,20,10,10"
           Background="Black">
         <Grid Padding="10">
             <Path HorizontalAlignment="Center"
                   VerticalAlignment="Center"
                   Data="M200 20 a200 200 0 1 0 1 0m-1 100a100 100 0 1 1 -1 0"
                   Stretch="Uniform">
                 <Path.Fill>
                     <dev:ImageEffectBrush ImageUri="ms-appx:///Assets/Landscapes/Landscape-12.jpg" />
                 </Path.Fill>
             </Path>
         </Grid>
     </Grid>
     <Grid Grid.Column="1"
           Margin="20,10,10,20">
         <Grid.Background>
             <dev:ImageEffectBrush ImageUri="ms-appx:///Assets/Landscapes/Landscape-12.jpg" />
         </Grid.Background>
     </Grid>
 </Grid>
```

![ImageEffectBrush](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/ImageEffectBrush.gif)