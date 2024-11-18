---
title: OpacityMaskView
---

# Attributes
|Property|
|-|
|OpacityMask|

# Example / OpacityMaskView

```xml
<dev:OpacityMaskView HorizontalAlignment="Left" 
                         VerticalAlignment="Center" 
                         Margin="0,20"
                         Padding="0"
                         MaxHeight="500">
    <dev:OpacityMaskView.OpacityMask>
        <LinearGradientBrush StartPoint="0,0" EndPoint="0,1" MappingMode="RelativeToBoundingBox">
            <GradientStop Offset="0" Color="#00FFFFFF" />
            <GradientStop Offset="0.05" Color="#00FFFFFF" />
            <GradientStop Offset="0.25" Color="#FFFFFFFF" />
            <GradientStop Offset="0.55" Color="#FFFFFFFF" />
            <GradientStop Offset="0.95" Color="#00FFFFFF" />
            <GradientStop Offset="1" Color="#00FFFFFF" />
        </LinearGradientBrush>
    </wuc:OpacityMaskView.OpacityMask>
    <Image Source="http://e0.ifengimg.com/03/2019/0116/4520E55BB546CF6D7F295FB28A2A205B598BD5EC_size554_w1228_h1842.jpeg" Stretch="Uniform"/>
</wuc:OpacityMaskView>
```

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/OpacityMaskView.png)

# Example / EffectButton

```xml
<dev:OpacityMaskView Margin="0,20"
                     HorizontalAlignment="Left"
                     VerticalAlignment="Center">
    <dev:OpacityMaskView.Resources>
        <Storyboard x:Name="EffectButtonAnimation"
                    Duration="0:0:1.5">
            <ColorAnimationUsingKeyFrames EnableDependentAnimation="True"
                                          Storyboard.TargetName="Stop1"
                                          Storyboard.TargetProperty="Color"
                                          Duration="0:0:1.5">
                <LinearColorKeyFrame KeyTime="0"
                                     Value="#FFFFFFFF" />
                <LinearColorKeyFrame KeyTime="0:0:0.25"
                                     Value="#0FFFFFFF" />
                <LinearColorKeyFrame KeyTime="0:0:1.25"
                                     Value="#0FFFFFFF" />
                <LinearColorKeyFrame KeyTime="0:0:1.5"
                                     Value="#FFFFFFFF" />
            </ColorAnimationUsingKeyFrames>
            <ColorAnimationUsingKeyFrames EnableDependentAnimation="True"
                                          Storyboard.TargetName="Stop2"
                                          Storyboard.TargetProperty="Color"
                                          Duration="0:0:1.5">
                <LinearColorKeyFrame KeyTime="0"
                                     Value="#FFFFFFFF" />
                <LinearColorKeyFrame KeyTime="0:0:0.25"
                                     Value="#0FFFFFFF" />
                <LinearColorKeyFrame KeyTime="0:0:1.25"
                                     Value="#0FFFFFFF" />
                <LinearColorKeyFrame KeyTime="0:0:1.5"
                                     Value="#FFFFFFFF" />
            </ColorAnimationUsingKeyFrames>
            <ColorAnimationUsingKeyFrames EnableDependentAnimation="True"
                                          Storyboard.TargetName="Stop5"
                                          Storyboard.TargetProperty="Color"
                                          Duration="0:0:1.5">
                <LinearColorKeyFrame KeyTime="0"
                                     Value="#FFFFFFFF" />
                <LinearColorKeyFrame KeyTime="0:0:0.25"
                                     Value="#0FFFFFFF" />
                <LinearColorKeyFrame KeyTime="0:0:1.25"
                                     Value="#0FFFFFFF" />
                <LinearColorKeyFrame KeyTime="0:0:1.5"
                                     Value="#FFFFFFFF" />
            </ColorAnimationUsingKeyFrames>
            <ColorAnimationUsingKeyFrames EnableDependentAnimation="True"
                                          Storyboard.TargetName="Stop6"
                                          Storyboard.TargetProperty="Color"
                                          Duration="0:0:1.5">
                <LinearColorKeyFrame KeyTime="0"
                                     Value="#FFFFFFFF" />
                <LinearColorKeyFrame KeyTime="0:0:0.25"
                                     Value="#0FFFFFFF" />
                <LinearColorKeyFrame KeyTime="0:0:1.25"
                                     Value="#0FFFFFFF" />
                <LinearColorKeyFrame KeyTime="0:0:1.5"
                                     Value="#FFFFFFFF" />
            </ColorAnimationUsingKeyFrames>

            <DoubleAnimationUsingKeyFrames EnableDependentAnimation="True"
                                           Storyboard.TargetName="Stop2"
                                           Storyboard.TargetProperty="Offset"
                                           Duration="0:0:1.25">
                <DiscreteDoubleKeyFrame KeyTime="0"
                                        Value="-0.4" />
                <LinearDoubleKeyFrame KeyTime="0:0:0.25"
                                      Value="-0.4" />
                <LinearDoubleKeyFrame KeyTime="0:0:1.25"
                                      Value="1" />
            </DoubleAnimationUsingKeyFrames>
            <DoubleAnimationUsingKeyFrames EnableDependentAnimation="True"
                                           Storyboard.TargetName="Stop3"
                                           Storyboard.TargetProperty="Offset"
                                           Duration="0:0:1.25">
                <DiscreteDoubleKeyFrame KeyTime="0"
                                        Value="-0.3" />
                <LinearDoubleKeyFrame KeyTime="0:0:0.25"
                                      Value="-0.3" />
                <LinearDoubleKeyFrame KeyTime="0:0:1.25"
                                      Value="1.1" />
            </DoubleAnimationUsingKeyFrames>
            <DoubleAnimationUsingKeyFrames EnableDependentAnimation="True"
                                           Storyboard.TargetName="Stop4"
                                           Storyboard.TargetProperty="Offset"
                                           Duration="0:0:1.25">
                <DiscreteDoubleKeyFrame KeyTime="0"
                                        Value="-0.25" />
                <LinearDoubleKeyFrame KeyTime="0:0:0.25"
                                      Value="-0.25" />
                <LinearDoubleKeyFrame KeyTime="0:0:1.25"
                                      Value="1.15" />
            </DoubleAnimationUsingKeyFrames>
            <DoubleAnimationUsingKeyFrames EnableDependentAnimation="True"
                                           Storyboard.TargetName="Stop5"
                                           Storyboard.TargetProperty="Offset"
                                           Duration="0:0:1.25">
                <DiscreteDoubleKeyFrame KeyTime="0"
                                        Value="-0.15" />
                <LinearDoubleKeyFrame KeyTime="0:0:0.25"
                                      Value="-0.15" />
                <LinearDoubleKeyFrame KeyTime="0:0:1.25"
                                      Value="1.25" />
            </DoubleAnimationUsingKeyFrames>
        </Storyboard>
    </wuc:OpacityMaskView.Resources>
    <dev:OpacityMaskView.OpacityMask>
        <LinearGradientBrush MappingMode="RelativeToBoundingBox" StartPoint="0,0.2" EndPoint="1,0.8">
            <GradientStop x:Name="Stop1" Offset="-1" Color="#FFFFFFFF" />
            <GradientStop x:Name="Stop2" Offset="-0.4" Color="#FFFFFFFF" />
            <GradientStop x:Name="Stop3" Offset="-0.3" Color="#FFFFFFFF" />
            <GradientStop x:Name="Stop4" Offset="-0.25" Color="#FFFFFFFF" />
            <GradientStop x:Name="Stop5" Offset="-0.15" Color="#FFFFFFFF" />
            <GradientStop x:Name="Stop6" Offset="2" Color="#FFFFFFFF" />
        </LinearGradientBrush>
    </wuc:OpacityMaskView.OpacityMask>
    <Button Height="36"
            Click="Button_Click"
            Content="This is a Button" />
</wuc:OpacityMaskView>
```

```cs
private void Button_Click(object sender, RoutedEventArgs e)
{
    if (EffectButtonAnimation.GetCurrentState() != Microsoft.UI.Xaml.Media.Animation.ClockState.Active)
    {
        EffectButtonAnimation.Begin();
    }
}
```


# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/OpacityMaskView2.gif)
