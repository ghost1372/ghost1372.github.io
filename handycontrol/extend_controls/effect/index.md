---
title: Effect
---
All effects are inherited from the EffectBase class The following property is available in all effects

# Attributes
| Property |
|-|
| Input |

# GrayScaleEffect

## Attributes
| Property |
|-|
| Scale |

```xml
 <Image Width="120" Height="120" Source="/HandyControlDemo;component/Resources/Img/Album/10.jpg">
    <Image.Effect>
   <hc:GrayScaleEffect/>
 </Image.Effect>
    </Image>
```

# ColorComplementEffect

```xml
<Image Width="120" Height="120" Source="/HandyControlDemo;component/Resources/Img/Album/10.jpg">
     <Image.Effect>
   <hc:ColorComplementEffect/>
     </Image.Effect>
 </Image>
```

# ColorMatrixEffect

## Attributes
| Property | Property |
|-|-|
| M11 | M12 |
| M21 | M22 |
| M31 | M32 |
| M41 | M42 |
| M51 | M52 |
| M13 | M14 |
| M23 | M24 |
| M33 | M34 |
| M43 | M44 |
| M53 | M54 |

```xml
<Image Width="120" Height="120" Source="/HandyControlDemo;component/Resources/Img/Album/10.jpg">
    <Image.Effect>
  <hc:ColorMatrixEffect M11="-1" M22="-1" M33="-1" M41="1" M42="1" M43="1" M44="1" M51="1"/>
    </Image.Effect>
</Image>
```
or

```xml
<Image Width="120" Height="120" Source="/HandyControlDemo;component/Resources/Img/Album/10.jpg">
    <Image.Effect>
  <hc:ColorMatrixEffect M11="1.5" M21="1.5" M31="1.5" M12="1.5" M22="1.5" M32="1.5" M13="1.5" M23="1.5" M33="1.5" M51="-1" M52="-1" M53="-1"/>
    </Image.Effect>
</Image>
```

# ContrastEffect

## Attributes
| Property |
|-|
| Contrast  |

```xml
<Border>
    <Border.Effect>
  <hc:ContrastEffect Contrast="20"/>
    </Border.Effect>
</Border>
```

# BrightnessEffect

## Attributes
| Property |
|-|
| Brightness |

```xml
<Border>
    <Border.Effect>
  <hc:BrightnessEffect Brightness="1"/>
    </Border.Effect>
</Border>
```

# GooeyEffect

add this to resources
```xml
 <UserControl.Resources>
    <Storyboard x:Key="StoryboardLoaded" RepeatBehavior="Forever">
  <DoubleAnimationUsingKeyFrames Storyboard.TargetProperty="(RotateTransform.Angle)" Storyboard.TargetName="TransformRotate1">
<EasingDoubleKeyFrame KeyTime="0:0:3" Value="90">
</EasingDoubleKeyFrame>
  </DoubleAnimationUsingKeyFrames>
  <DoubleAnimationUsingKeyFrames Storyboard.TargetProperty="(RotateTransform.Angle)" Storyboard.TargetName="TransformRotate2">
<EasingDoubleKeyFrame KeyTime="0:0:3" Value="90">
</EasingDoubleKeyFrame>
  </DoubleAnimationUsingKeyFrames>
  <DoubleAnimationUsingKeyFrames Storyboard.TargetProperty="(RotateTransform.Angle)" Storyboard.TargetName="TransformRotate3">
<EasingDoubleKeyFrame KeyTime="0:0:3" Value="-90">
</EasingDoubleKeyFrame>
  </DoubleAnimationUsingKeyFrames>
    </Storyboard>
</UserControl.Resources>
<UserControl.Triggers>
    <EventTrigger RoutedEvent="FrameworkElement.Loaded">
  <BeginStoryboard Storyboard="{StaticResource StoryboardLoaded}"/>
    </EventTrigger>
</UserControl.Triggers>
```
then

```xml
 <Border>
    <Border.Effect>
  <hc:ContrastEffect Contrast="20"/>
    </Border.Effect>
    <Border>
  <Border.Effect>
<hc:BrightnessEffect Brightness="1"/>
  </Border.Effect>
  <Border>
<Border.Effect>
    <BlurEffect Radius="30"/>
</Border.Effect>
<StackPanel>
    <StackPanel Orientation="Horizontal" HorizontalAlignment="Center">
  <Border Width="100" Height="100" Background="Red" RenderTransformOrigin="0.5,0.5">
<Border.RenderTransform>
    <TransformGroup>
  <RotateTransform Angle="0" x:Name="TransformRotate1"/>
    </TransformGroup>
</Border.RenderTransform>
  </Border>
  <Border Margin="30,0,0,0" Width="100" Height="100" Background="Red" RenderTransformOrigin="0.5,0.5">
<Border.RenderTransform>
    <TransformGroup>
  <RotateTransform Angle="0" x:Name="TransformRotate2"/>
    </TransformGroup>
</Border.RenderTransform>
  </Border>
    </StackPanel>
    <Border Width="100" Height="100" Background="Red" HorizontalAlignment="Center" RenderTransformOrigin="0.5,0.5">
  <Border.RenderTransform>
<TransformGroup>
    <RotateTransform Angle="0" x:Name="TransformRotate3"/>
</TransformGroup>
  </Border.RenderTransform>
    </Border>
</StackPanel>
  </Border>
    </Border>
</Border>
```

# BlendEffectBox

## Attributes
| Property |
|-|
| Content |

```xml
 <hc:BlendEffectBox>
    <hc:BlendEffectBox.Effects>
  <BlurEffect Radius="30"/>
  <hc:BrightnessEffect Brightness="1"/>
  <hc:ContrastEffect Contrast="20"/>
    </hc:BlendEffectBox.Effects>
    <StackPanel>
  <StackPanel Orientation="Horizontal" HorizontalAlignment="Center">
<Border Width="100" Height="100" Background="Red" RenderTransformOrigin="0.5,0.5">
    <Border.RenderTransform>
  <TransformGroup>
<RotateTransform Angle="0" x:Name="TransformRotate1"/>
  </TransformGroup>
    </Border.RenderTransform>
</Border>
<Border Margin="30,0,0,0" Width="100" Height="100" Background="Red" RenderTransformOrigin="0.5,0.5">
    <Border.RenderTransform>
  <TransformGroup>
<RotateTransform Angle="0" x:Name="TransformRotate2"/>
  </TransformGroup>
    </Border.RenderTransform>
</Border>
  </StackPanel>
  <Border Width="100" Height="100" Background="Red" HorizontalAlignment="Center" RenderTransformOrigin="0.5,0.5">
<Border.RenderTransform>
    <TransformGroup>
  <RotateTransform Angle="0" x:Name="TransformRotate3"/>
    </TransformGroup>
</Border.RenderTransform>
  </Border>
    </StackPanel>
</hc:BlendEffectBox>
```

![GooeyEffect](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Resources/GooeyEffect.gif)

![Effects](https://github.com/HandyOrg/HandyOrgResource/raw/master/HandyControl/Resources/Effects.png)

