---
title: FlightStatusCard
---

# Property

|Name|
|-|
|DepartureCode|
|ArrivalCode|
|DepartureCity|
|ArrivalCity|
|DepartureTime|
|ArrivalTime|
|Eta|
|Timezone|
|NextEvent|
|NextEventTime|
|RemainingTime|
|Progress|
|ProgressBrush|
|GlowBrush|
|BadgeBrush|
|BadgeGlyphBrush|
|ResizeMode|

# Enums

## FlightStatusCardResizeMode

|Name|
|-|
|Scale|
|Adaptive|

# Example

```xml
<dev:FlightStatusCard DepartureCode="IKA"
                      ArrivalCode="BER"
                      DepartureCity="Tehran"
                      ArrivalCity="Berlin"
                      DepartureTime="08:15"
                      ArrivalTime="11:40"
                      Eta="11:40"
                      Timezone="CET"
                      NextEvent="Landing"
                      NextEventTime="11:25"
                      RemainingTime="1h 20m"
                      Progress="65" />
```

> [!NOTE]
> `Scale` scales the whole card to fit the available size. `Adaptive` switches between wide, medium and narrow layouts, and hides the info section when the height is too small.

> [!WARNING]
> `Progress` is a double and should be from 0 to 100. `ProgressBrush` supports `SolidColorBrush` and `LinearGradientBrush`. The other brushes support `SolidColorBrush` only.

![FlightStatusCard](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/FlightStatusCard.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
