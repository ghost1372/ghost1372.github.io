---
title: MorphingAnimation
---

With MorphingAnimation You can change a geometry with animation to a different geometry

{% note info no-icon %}
Geometries must have the same number of points!
{% endnote %}

in your xaml add resources and storyboard

```xml
 <UserControl.Resources>
        <Storyboard x:Key="StoryboardOnLoaded" RepeatBehavior="Forever" AutoReverse="True">
            <hc:GeometryAnimationUsingKeyFrames Storyboard.TargetProperty="Data" Storyboard.TargetName="PathDemo">
                <hc:DiscreteGeometryKeyFrame KeyTime="0:0:0.7" Value="{StaticResource FaceBookGeometry}"/>
                <hc:EasingGeometryKeyFrame KeyTime="0:0:1.2" Value="{StaticResource TwitterGeometry}">
                    <hc:EasingGeometryKeyFrame.EasingFunction>
                        <QuarticEase EasingMode="EaseInOut"/>
                    </hc:EasingGeometryKeyFrame.EasingFunction>
                </hc:EasingGeometryKeyFrame>
            </hc:GeometryAnimationUsingKeyFrames>
            <ColorAnimationUsingKeyFrames Storyboard.TargetProperty="Fill.(SolidColorBrush.Color)" Storyboard.TargetName="PathDemo">
                <DiscreteColorKeyFrame KeyTime="0:0:0.7" Value="#3b5998"/>
                <EasingColorKeyFrame KeyTime="0:0:1.2" Value="#4099ff">
                    <EasingColorKeyFrame.EasingFunction>
                        <QuarticEase EasingMode="EaseInOut"/>
                    </EasingColorKeyFrame.EasingFunction>
                </EasingColorKeyFrame>
                <EasingColorKeyFrame KeyTime="0:0:1.9" Value="#4099ff"/>
            </ColorAnimationUsingKeyFrames>
        </Storyboard>
    </UserControl.Resources>
    <UserControl.Triggers>
        <EventTrigger RoutedEvent="FrameworkElement.Loaded">
            <BeginStoryboard Storyboard="{StaticResource StoryboardOnLoaded}"/>
        </EventTrigger>
    </UserControl.Triggers>
```

now we need a path to display geometry

```xml
<Path Name="PathDemo" Width="100" Height="100" Data="{StaticResource FaceBookGeometry}" Fill="#3b5998"/>
```

![MorphingAnimation](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Resources/GeometryAnimation.gif)