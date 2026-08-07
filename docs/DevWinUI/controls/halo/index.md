---
title: Halo
---

The Halo is a set of interconnected UI components for circular or arc-based interfaces.

# HaloPanel : Panel

## Attached Properties

|Name|
|-|
|Thickness|
|Band|

## Example

```xml
<dev:HaloPanel>
    
</dev:HaloPanel>
```

# HaloArc : Path

## Property

|Name|
|-|
|Angle|
|Spread|
|Offset|
|Tension|

## Example

```xml
<dev:HaloPanel Height="150" Margin="5">
    <dev:HaloArc Spread="180"
                    Stroke="{ThemeResource SystemFillColorSuccessBrush}"
                    StrokeThickness="30"
                    Tension="0.5" />
    <dev:HaloArc Angle="180"
                    Spread="180"
                    Stroke="{ThemeResource SystemFillColorCriticalBrush}"
                    StrokeThickness="30"
                    Tension="0.5" />
</dev:HaloPanel>
```

# HaloChain : HaloRingPanel

## Property

|Name|
|-|
|Angle|
|Spacing|
|Offset|
|Tension|

## Example

```xml
<dev:HaloPanel Height="150"
            Margin="5">
    <dev:HaloChain Spacing="10"
                    Tension="0.5">
        <TextBlock FontSize="30"
                    Text="D" />
        <TextBlock FontSize="30"
                    Text="E" />
        <TextBlock FontSize="30"
                    Text="V" />
        <TextBlock FontSize="30"
                    Text="W" />
        <TextBlock FontSize="30"
                    Text="I" />
        <TextBlock FontSize="30"
                    Text="N" />
        <TextBlock FontSize="30"
                    Text="U" />
        <TextBlock FontSize="30"
                    Text="I" />
    </dev:HaloChain>
</dev:HaloPanel>
```

# HaloDisc : Path

## Example

```xml
<dev:HaloPanel Height="150"
            Margin="5">
    <dev:HaloDisc dev:Halo.Band="2"
                    dev:Halo.Thickness="10"
                    Fill="{ThemeResource SystemAccentColor}" />
    <dev:HaloDisc dev:Halo.Band="1"
                    dev:Halo.Thickness="20"
                    Fill="{ThemeResource SystemAccentColorDark3}" />
    <dev:HaloDisc dev:Halo.Thickness="10"
                    Fill="{ThemeResource CardStrokeColorDefaultSolidBrush}" />
</dev:HaloPanel>
```

# HaloRingPanel : Panel

## Attached Properties

|Name|
|-|
|Angle|
|Offset|

## Example

```xml
<dev:HaloPanel Height="150"
            Margin="5">
    <dev:HaloRingPanel>
        <Ellipse Width="30"
                    Height="30"
                    Fill="{ThemeResource SystemAccentColor}" />
        <Ellipse Width="30"
                    Height="30"
                    dev:HaloRingPanel.Angle="90"
                    Fill="{ThemeResource SystemAccentColor}" />
        <Ellipse Width="30"
                    Height="30"
                    dev:HaloRingPanel.Angle="180"
                    Fill="{ThemeResource SystemAccentColor}" />
        <Ellipse Width="30"
                    Height="30"
                    dev:HaloRingPanel.Angle="270"
                    Fill="{ThemeResource SystemAccentColor}" />
    </dev:HaloRingPanel>
</dev:HaloPanel>
```

# HaloRingLabel : HaloChain

## Property

|Name|
|-|
|Text|
|Flip|
|FontSize|

## Example

```xml
<dev:HaloPanel Height="150"
            Margin="5">
    <dev:HaloRingLabel dev:Halo.Band="1"
                        FontSize="30"
                        Text="DevWinUI" />
    <dev:HaloRingLabel dev:Halo.Band="1"
                        Flip="True"
                        FontSize="25"
                        Text="DevWinUI" />
</dev:HaloPanel>
```

# HaloSlice : Path

## Property

|Name|
|-|
|Angle|
|Spread|
|Offset|

## Example

```xml
<dev:HaloPanel Margin="5">
    <dev:HaloSlice Fill="White"
                    Spread="180"
                    Offset="90" />
    <dev:HaloSlice Angle="180"
                    Fill="Black"
                    Spread="180"
                    Offset="90" />
</dev:HaloPanel>
```

# HaloSlider : Control

## Property

|Name|
|-|
|Angle|
|Thumb|
|Offset|

## Example

```xml
<dev:HaloPanel Margin="5">
    <dev:HaloSlider Angle="10">
        <dev:HaloSlider.Thumb>
            <ControlTemplate>
                <Rectangle Width="30"
                            Height="30"
                            Fill="{ThemeResource SystemAccentColor}"
                            RadiusX="4"
                            RadiusY="4" />
            </ControlTemplate>
        </dev:HaloSlider.Thumb>
    </dev:HaloSlider>
</dev:HaloPanel>
```

# HaloArcSlider : HaloSlider

## Example

```xml
<dev:HaloPanel Margin="5">
    <dev:HaloArcSlider/>
</dev:HaloPanel>
```

# HaloTimePicker : Control

## Property

|Name|
|-|
|MinutesArcBrush|
|HoursArcBrush|
|MinutesBand|
|HoursBand|
|MinutesBrush|
|HoursBrush|
|Time|

## Events

|Name|
|-|
|TimeChanged|

## Example

```xml
<dev:HaloPanel Height="250" Width="150"
            Margin="5">
    <dev:HaloTimePicker />
</dev:HaloPanel>
```

![Halo](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/Halo.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
