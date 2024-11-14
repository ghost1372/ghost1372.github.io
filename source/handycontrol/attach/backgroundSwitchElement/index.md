---
title: BackgroundSwitchElement
---

# Attributes

| Name | Use |
|-|-|
| MouseHoverBackground | Set mouse hover background color |
| MouseDownBackground | Set mouse down background color |

# Use Cases

## MouseHoverBackground Set Mouse hover background color

In the style or template we add the following trigger code:

```xml
<Trigger Property="IsMouseOver" Value="True">
    <Setter Property="Background" TargetName="Chrome" Value="{Binding Path=(hc:BackgroundSwitchElement.MouseHoverBackground),RelativeSource={RelativeSource TemplatedParent}}"/>
</Trigger>
```

Then we can use this property:

```xml
<Target control  hc:BackgroundSwitchElement.MouseHoverBackground ="Blue"/>
```


## MouseDownBackground  Set Mouse down background color

In the style or template we add the following trigger code:

```xml
<Trigger Property="IsPressed" Value="True">
    <Setter Property="Background" TargetName="Chrome" Value="{Binding Path=(hc:BackgroundSwitchElement.MouseDownBackground),RelativeSource={RelativeSource TemplatedParent}}"/>
</Trigger>
```

Then we can use this property:

```xml
<Target control hc:BackgroundSwitchElement.MouseDownBackground ="Yellow"/>
```