---
title: AnimationPath
---


`AnimationPath` Set the data for the geometry of the `Geometry` that derived as `PathGeometry`, `LineGeometry` to achieve a fixed path animation effect

```cs
public class AnimationPath : Shape
```

# Attributes

## Data

Geometry data to be displayed for the animation path

```xml
<Geometry x:Key="GithubGeometry">M512 0C229.12 0 0 229.12 0 512c0 226.56 146.56 417.92 350.08 485.76 25.6 4.48 35.2-10.88 35.2-24.32 0-12.16-0.64-52.48-0.64-95.36-128.64 23.68-161.92-31.36-172.16-60.16-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-0.64-33.92 40.32-0.64 69.12 37.12 78.72 52.48 46.08 77.44 119.68 55.68 149.12 42.24 4.48-33.28 17.92-55.68 32.64-68.48-113.92-12.8-232.96-56.96-232.96-252.8 0-55.68 19.84-101.76 52.48-137.6-5.12-12.8-23.04-65.28 5.12-135.68 0 0 42.88-13.44 140.8 52.48 40.96-11.52 84.48-17.28 128-17.28 43.52 0 87.04 5.76 128 17.28 97.92-66.56 140.8-52.48 140.8-52.48 28.16 70.4 10.24 122.88 5.12 135.68 32.64 35.84 52.48 81.28 52.48 137.6 0 196.48-119.68 240-233.6 252.8 18.56 16 34.56 46.72 34.56 94.72 0 68.48-0.64 123.52-0.64 140.8 0 13.44 9.6 29.44 35.2 24.32A512.832 512.832 0 0 0 1024 512c0-282.88-229.12-512-512-512z</Geometry>
```
Case:
```xml
<Grid Width="100" Height="100">
    <hc:AnimationPath Data="{DynamicResource GithubGeometry}" 
                          Duration="00:00:05" 
                          Stretch="Uniform" StrokeThickness="1"
                          Stroke="Black"></hc:AnimationPath>
</Grid>
```

effect:

![Animation-Default](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/extend_controls/AnimationPath-Default.gif)

## PathLength

The default is 0 and the property is set to 50. The effect is as follows:

![AnimationPath-PathLength](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/extend_controls/AnimationPath-PathLength.gif)

## Duration

Path animation execution interval. This property must be set, otherwise the animation path effect will not be displayed.

## IsPlaying 

Determines the current animation playback status, which is often used as the control behavior identification flag of the control. This property can be used to pause the path animation.

## RepeatBehavior

Set the animation repeat behavior, the default is `Forever`, you can set the repeat behavior as needed.

## FillBehavior

```cs
FillBehavior="HoldEnd"
```

## Inherited from the common properties of Shape

| Property Name | Purpose |
| --------------- | -------- |
| Stretch         | Stretch properties |
| StrokeThickness | Edge width |

# Related events

## Completed

This event is fired when the animation is complete.