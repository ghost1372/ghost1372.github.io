---
title: Radar
---

# Property

|Name|
|-|
|Mode|
|Speed|
|Trail|
|RadarScale|
|RingCount|
|SpokeCount|
|Ticks|
|Targets|
|TargetVisibility|
|BlipVisibility|
|ScanFade|
|TargetBrush|
|Blips|
|Clutter|
|Glow|
|Brightness|
|GridOpacity|
|LineWidth|
|Tilt|
|CenterX|
|CenterY|
|MouseInteraction|
|Intro|
|Grain|
|Fade|
|LightMode|
|Paused|
|MaxDevicePixelRatio|
|ItemsSource|
|ItemMapper|
|Zones|
|Jams|
|ShowRangeLabels|
|ShowCompass|
|ShowReadout|
|MaxRange|
|RangeUnit|
|Phosphor|

# RadarBlip

## Property

|Name|
|-|
|Angle|
|Distance|
|Motion|
|EndAngle|
|EndDistance|
|Duration|
|Repeat|
|Heading|
|Visibility|
|Label|
|State|
|TrailLength|
|Marker|
|Size|
|Foreground|

## Methods

|Name|
|-|
|Restart|

# RadarZone

## Property

|Name|
|-|
|Shape|
|Angle|
|Distance|
|Radius|
|Points|
|Foreground|
|FillOpacity|
|Dashed|
|Visibility|
|Label|

# RadarJam

## Property

|Name|
|-|
|StartAngle|
|EndAngle|
|Intensity|
|Foreground|

# IRadarBlipMapper

## Methods

|Name|
|-|
|Map|

# Enums

|Name|Values|
|-|-|
|RadarMode|Sweep, Pulse|
|RadarVisibility|Always, ScanOnly, Inherit|
|RadarMotion|None, Linear|
|RadarRepeat|Once, Loop, PingPong|
|RadarMarker|Dot, Diamond, Square, Triangle, Plane|
|RadarBlipState|Normal, Selected, Alert|
|RadarZoneShape|Circle, Polygon|

# Example

```xml
<dev:Radar Width="400"
           Height="400"
           Foreground="LimeGreen"
           Mode="Sweep"
           ShowCompass="True"
           ShowRangeLabels="True"
           MaxRange="100"
           RangeUnit="km">
    <dev:RadarBlip Angle="45"
                   Distance="0.6"
                   Label="Alpha" />
    <dev:RadarBlip Angle="200"
                   Distance="0.8"
                   EndAngle="260"
                   EndDistance="0.4"
                   Motion="Linear"
                   Repeat="PingPong"
                   Duration="12"
                   Marker="Plane"
                   Size="4"
                   TrailLength="20"
                   State="Alert" />

    <dev:Radar.Zones>
        <dev:RadarZone Angle="120"
                       Distance="0.5"
                       Radius="0.2"
                       Label="Zone A" />
    </dev:Radar.Zones>

    <dev:Radar.Jams>
        <dev:RadarJam StartAngle="300"
                      EndAngle="340"
                      Intensity="0.7" />
    </dev:Radar.Jams>
</dev:Radar>
```

# Data Binding

Bind any collection to `ItemsSource` and provide an `IRadarBlipMapper` to convert each item into a `RadarBlip`. Items implementing `INotifyPropertyChanged` are re-mapped automatically when they change.

```csharp
public class AircraftMapper : IRadarBlipMapper
{
    public void Map(object item, RadarBlip blip)
    {
        var aircraft = (Aircraft)item;
        blip.Angle = aircraft.Bearing;
        blip.Distance = aircraft.Range / 100;
        blip.Label = aircraft.Callsign;
        blip.Marker = RadarMarker.Plane;
    }
}
```

```xml
<dev:Radar ItemsSource="{x:Bind ViewModel.Aircraft}">
    <dev:Radar.ItemMapper>
        <local:AircraftMapper />
    </dev:Radar.ItemMapper>
</dev:Radar>
```

> [!WARNING]
> `Angle`, `StartAngle` and `EndAngle` are in degrees, measured clockwise from the top. `Distance` is relative to the radar radius, where 1 is the outer ring.

![Radar](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/Radar1.gif)

![Radar](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/Radar2.gif)

![Radar](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/Radar3.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
