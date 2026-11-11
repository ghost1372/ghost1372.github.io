---
title: ParticleGlobe
---

It renders an animated globe with Win2D and supports country interaction, custom map inputs, markers/arcs, value and flow layers, events, day/night, flat-map morphing, and tours.

## Add the control

```xml
<Page
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:dev="using:DevWinUI">
    <controls:dev x:Name="Globe" MinWidth="320" MinHeight="320" />
</Page>
```

## Data inputs

The globe uses the shared `WorldMapData` loader. When `WorldMapDataPath` is `null` (the default), it loads the embedded `Assets/WorldMap/WorldMap.bin`. Set a custom URI/path to use another compatible world-map dataset. This dataset supplies country IDs, borders, and country locations.

`LandMaskSource` is separate from the country dataset. It optionally supplies an equirectangular image mask for land-particle placement; with no image, the control uses its procedural mask. `LandThreshold` controls the brightness threshold.

```csharp
Globe.WorldMapDataPath = new Uri("ms-appx:///Assets/WorldMap/WorldMap.bin");
Globe.LandMaskSource = new Uri("ms-appx:///Assets/earth_mask.png");
```

## Property reference

The defaults below are the dependency-property defaults unless otherwise noted. Settings are synchronized to the rendering state; ranges noted in the usage column are clamped by the control.

### Rendering and data

| Property | Default | Usage |
|---|---:|---|
| `ParticleCount` | `26000` | Approximate surface-particle count; clamped to `0..150000`. Changing it rebuilds particles. |
| `ParticleSize` | `1.0` | On-screen particle size multiplier; minimum effective value is `0.1`. |
| `GlobeScale` | `0.74` | Globe size in the view; clamped to `0.2..1.2`. |
| `TiltAngle` | `18` degrees | Axial tilt. |
| `LandThreshold` | `0.52` | Land-mask/procedural threshold; changing it rebuilds particles. |
| `LandMaskSource` | `null` | Optional equirectangular image URI; `null` uses procedural land. |
| `WorldMapDataPath` | `null` | Optional compatible `.bin` dataset URI/path; `null` uses the embedded map. |
| `RotationSpeed` | `0.12` | Automatic rotation speed; negative values reverse direction. |
| `IsAutoRotateEnabled` | `true` | Enables automatic rotation. |
| `IsInteractive` | `true` | Enables pointer rotation and wheel zoom. |
| `ArcFrequency` | `1.6` | Random data arcs per second; clamped to `0..20`. |
| `OrbitRingCount` | `3` | Number of orbit rings; clamped to `0..8`. |
| `UseParallelParticles` | `false` | Enables parallel particle processing. |

### Visibility, palette, and theme

| Property | Default | Usage |
|---|---:|---|
| `ShowStars` | `true` | Show the starfield. |
| `ShowGrid` | `true` | Show latitude/longitude grid. |
| `ShowArcs` | `true` | Show automatically generated arcs. |
| `ShowCities` | `true` | Show markers as city points. |
| `ShowOrbits` | `true` | Show orbital rings. |
| `ShowHud` | `true` | Show the HUD overlay. |
| `LandBrush` | `null` | Land color brush; `null` uses the active theme palette. |
| `OceanBrush` | `null` | Ocean color brush; `null` uses the active theme palette. |
| `AtmosphereBrush` | `null` | Atmosphere brush; `null` uses the active theme palette. |
| `GridBrush` | `null` | Grid brush; `null` uses the active theme palette. |
| `ArcBrush` | `null` | Arc brush; `null` uses the active theme palette. |
| `AccentBrush` | `null` | Accent brush; `null` uses the active theme palette. |
| `StarBrush` | `null` | Star brush; `null` uses the active theme palette. |
| `Theme` | `Default` | Palette: `Default`, `Cyan`, `Amber`, `Matrix`, or `Hologram`. In `Default`, the brush properties are used with palette fallbacks; a non-default preset takes precedence over explicit brushes. |

### Country interaction and navigation

| Property | Default | Usage |
|---|---:|---|
| `IsCountryHoverEnabled` | `true` | Enables country hover highlighting. |
| `IsCountrySelectionEnabled` | `true` | Enables country selection. |
| `ShowCountryTooltip` | `true` | Shows the hovered-country tooltip. |
| `SelectedCountryCode` | `null` | Gets/sets the selected country code. |
| `HoveredCountryCode` | `null` | Read-only publicly; current hovered country code. |
| `IsFlyToOnSelectEnabled` | `true` | Fly to a country when it is selected. |
| `FlyToDuration` | `1.4` seconds | Duration of a fly-to transition. |
| `FlyToZoom` | `0` | Fixed fly-to zoom; `0` chooses zoom from the country size. |
| `ShowCountryOutline` | `true` | Draw the selected-country particle outline. |

### Selection effects and borders

| Property | Default | Usage |
|---|---:|---|
| `SelectionEffects` | `Highlight \| Pulse \| Outline` | Combine `Highlight`, `Pulse`, `Outline`, and `DimOthers`; `None` disables them and `All` combines them. |
| `SelectionDimAmount` | `0.7` | Strength of dimming for non-selected particles; clamped to `0..1`. |
| `ShowCountryBorders` | `false` | Enables country border particles. |
| `BorderParticleCount` | `12000` | Target border-particle count. |
| `BorderLineBrush` | `null` | Optional border-line color override; `null` uses the theme accent. |
| `BorderIntensity` | `1.5` | Border brightness multiplier. |
| `BorderScanOnly` | `false` | Restricts border display to the scanning effect. |
| `BorderFadeSeconds` | `1.5` | Border appearance/fade duration. |

### Cursor and click effects

| Property | Default | Usage |
|---|---:|---|
| `IsClickRippleEnabled` | `true` | Creates a surface ripple after a click. |
| `ShowCursorReticle` | `true` | Shows cursor coordinates and reticle. |
| `IsCursorForceFieldEnabled` | `true` | Enables the particle force-field response near the cursor. |
| `IsClickToConnectEnabled` | `true` | Allows clicking two countries to create a connection arc. |

### Day/night and clock

| Property | Default | Usage |
|---|---:|---|
| `ShowDayNight` | `false` | Enables the day/night lighting layer. |
| `IsRealTimeEnabled` | `true` | Uses current real time when the layer is enabled. |
| `CustomTime` | Current UTC time at registration | Time used when real-time mode is disabled. |
| `TimeSpeed` | `0` hours/second | Simulation-time speed. |
| `CurrentSunTime` | Read-only | Current UTC sun time used by the renderer. |

### Flow layer

| Property | Default | Usage |
|---|---:|---|
| `ShowFlow` | `false` | Shows the flow particles. With no custom field, the built-in wind field is used. |
| `FlowParticleCount` | `2500` | Requested flow-particle count; clamped to `100..20000`. |
| `FlowSpeed` | `1.0` | Flow animation multiplier; clamped to `0..20`. |
| `FlowTrailLength` | `10` | Trail samples; clamped to `3..16`. |

### Events, markers, and arcs

| Property | Default | Usage |
|---|---:|---|
| `ShowEvents` | `true` | Shows event spikes and rings. |
| `IsEventRippleEnabled` | `true` | Adds a land-particle ripple for each event. |
| `ShowEventLabels` | `true` | Shows event labels. |
| `EventDuration` | `4.5` seconds | Event lifetime; internally clamped to `0.5..30` seconds. |
| `Markers` | Built-in city markers | Enumerable of `ParticleGlobeMarker`; assign a collection to replace/update markers. |
| `ShowMarkerLabels` | `true` | Shows labels beside markers. |
| `ShowCountryBars` | `false` | Shows value bars for countries with loaded values. |
| `BarMaxHeight` | `0.3` globe radii | Maximum value-bar height. |

### Compare mode and timeline

| Property | Default | Usage |
|---|---:|---|
| `IsCompareModeEnabled` | `false` | Enables click-two-countries comparison. |
| `CompareFlightSpeedKmh` | `850` km/h | Flight-time estimate speed; clamped to `50..100000`. |
| `TimelineFrameCount` | `0` | Read-only number of loaded timeline frames. |
| `IsTimelinePlaying` | `false` | Starts/stops interpolation playback; playback requires at least two frames. |
| `TimelineLoop` | `true` | Loops playback at the end. |
| `TimelineSpeed` | `1` frame/second | Playback speed; clamped to `0.05..30`. |
| `TimelinePosition` | `0` | Fractional frame index; setting it scrubs and interpolates. |
| `TimelineLabel` | Empty | Read-only label for the nearest frame. |

### Tour and intro

| Property | Default | Usage |
|---|---:|---|
| `IsIntroEnabled` | `true` | Enables the initial particle-assembly animation. |
| `IntroDuration` | `3` seconds | Intro animation duration. |
| `TourDwellSeconds` | `3` seconds | Dwell at each marker; internally clamped to `0.5..60`. |
| `TourZoom` | `1.8` | Zoom used at tour stops. |
| `IsTourOrbitEnabled` | `true` | Adds orbit motion while touring. |
| `IsTourDepthOfFieldEnabled` | `true` | Enables tour depth-of-field/dimming. |
| `TourDimAmount` | `0.65` | Tour dim strength; clamped to `0..1`. |
| `IsTourLooping` | `true` | Restarts at the first marker after the last. |
| `IsTourActive` | Read-only | Indicates whether a tour is running. |

### HUD and rendering quality

| Property | Default | Usage |
|---|---:|---|
| `ShowSatellites` | `true` | Shows satellite objects and trails. |
| `SatelliteCount` | `6` | Satellite count; clamped to `0..24`. |
| `ShowCoordinateTicker` | `true` | Shows the coordinate ticker. |
| `ShowScanlines` | `true` | Shows CRT scanlines. |
| `ShowGlitch` | `true` | Enables occasional glitch effects. |
| `Quality` | `Auto` | `Auto`, `High`, `Medium`, or `Low` rendering quality. |
| `QualityTargetFps` | `55` FPS | Target for automatic quality; clamped to `30..144`. |
| `EffectiveQuality` | Read-only, starts at `1.0` | Current retained-particle fraction. |
| `MeasuredFps` | Read-only, starts at `0` | Smoothed measured frame rate. |
| `ShowProfiler` | `false` | Shows the profiler overlay. |
| `IsFlatMapEnabled` | `false` | Morphs the globe into a flat map. |
| `FlatMapMode` | `Scroll` | Flat-map behavior: `Scroll`, `Fixed`, or `FixedZoom`. |
| `MorphDuration` | `2.2` seconds | Full morph transition duration. |

## Methods

| Method | Behavior |
|---|---|
| `FlyTo(double latitude, double longitude, double zoom = 0)` | Animates to coordinates. `zoom = 0` selects the configured/default fly-to zoom. |
| `FlyToCountry(string code)` | Flies to a loaded country; returns `false` if the code is unknown. |
| `ResetView()` | Releases the current fly-to/zoom and returns to the default view. |
| `CompareCountries(string codeA, string codeB)` | Compares two loaded countries; returns `false` for unknown or identical countries. Raises `CompareChanged` on success. |
| `ClearCompare()` | Clears the active comparison. |
| `AddArc(ParticleGlobeMarker from, ParticleGlobeMarker to, Color? color = null)` | Adds a persistent user arc between marker coordinates; returns its handle or `null` if the path is degenerate. |
| `AddArc(double fromLatitude, double fromLongitude, double toLatitude, double toLongitude, Color? color = null)` | Coordinate overload of `AddArc`. |
| `RemoveArc(ParticleGlobeArc arc)` / `ClearArcs()` | Removes one user arc or all user arcs. |
| `SetCountryValues(IReadOnlyDictionary<string, double> values, Color low, Color high)` | Colors country particles by values keyed by country code. |
| `GetCountryCodes()` / `ClearCountryValues()` | Gets loaded country codes or clears current value data. |
| `SetCountryValueTimeline(IReadOnlyList<(string Label, IReadOnlyDictionary<string, double> Values)> frames, Color low, Color high)` | Loads per-frame country values, normalized across frames and interpolated during playback/scrubbing. |
| `ClearCountryValueTimeline()` | Clears timeline and country-value data. |
| `SetFlowField(Func<double, double, (double U, double V)> sampler, int columns = 180, int rows = 90)` | Samples a callback on a grid; latitude/longitude are degrees and U/V are east/north metres per second. |
| `SetFlowGrid(int columns, int rows, float[] u, float[] v)` | Sets a raw grid. Arrays must contain at least `columns * rows` values; row 0 is north, last row south, longitude columns wrap. |
| `ClearFlowField()` | Restores the built-in wind field. |
| `AddEvent(double latitude, double longitude, double magnitude = 5, Color? color = null, string label = null)` / `ClearEvents()` | Adds an event (magnitude is clamped to `0..10`) or clears active events. `AddEvent` is safe to call from any thread. |
| `StartTour()` / `StopTour()` | Starts visiting markers in collection order or stops the tour. |
| `ReplayIntro()` | Scatters particles and replays the intro animation. |

## Events

| Event | Event data | Purpose |
|---|---|---|
| `CountryClicked` | `ParticleGlobeCountryEventArgs` (`Code`, `Name`) | A country was clicked. |
| `SelectionChanged` | `ParticleGlobeSelectionChangedEventArgs` (`OldCode`, `OldName`, `NewCode`, `NewName`) | The selected country changed. |
| `MarkerClicked` | `ParticleGlobeMarkerEventArgs` (`Marker`) | A marker was clicked. |
| `CompareChanged` | `ParticleGlobeCompareEventArgs` (`CodeA`, `NameA`, `CodeB`, `NameB`, `DistanceKm`, `FlightTime`) | A comparison was completed. |
| `TimelineChanged` | `string` label | Timeline playback or scrubbing changed the nearest frame. |
| `TourMarkerReached` | `ParticleGlobeMarkerEventArgs` (`Marker`) | The tour arrived at a marker. |
| `TourEnded` | `EventArgs` | A non-looping tour completed or no markers remain. |

## Examples

### Country selection, navigation, and values

```csharp
using System.Collections.Generic;
using Windows.UI;

Globe.CountryClicked += (_, e) =>
    System.Diagnostics.Debug.WriteLine($"{e.Name} ({e.Code})");

Globe.FlyToCountry("DE");
Globe.SetCountryValues(new Dictionary<string, double>
{
    ["DE"] = 83,
    ["IR"] = 88,
    ["US"] = 331,
}, Color.FromArgb(255, 220, 235, 255), Color.FromArgb(255, 0, 70, 160));
Globe.ShowCountryBars = true;
```

### Custom flow field

```csharp
Globe.SetFlowField((latitude, longitude) =>
{
    double eastward = 8.0 * Math.Cos(latitude * Math.PI / 180.0);
    double northward = 0.0;
    return (eastward, northward);
});
Globe.ShowFlow = true;
```

### Markers, arcs, and tours

```csharp
var markers = new List<ParticleGlobeMarker>
{
    new(35.7, 139.7, "Tokyo"),
    new(51.5, -0.1, "London"),
};
Globe.Markers = markers;
Globe.AddArc(markers[0], markers[1]);
Globe.StartTour();
```

`ParticleGlobeMarker.CreateDefaults()` returns the built-in city marker collection. Assign an `ObservableCollection<ParticleGlobeMarker>` to `Markers` when collection changes should update the display automatically.

Each marker has latitude, longitude, label, optional color, and a `Tag` property for arbitrary application data.

![ParticleGlobe](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/ParticleGlobe.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
