---
title: LocationHelper
---

# GetGeoLocationAsync

```cs
var pos = await LocationHelper.GetGeoLocationAsync();
if (pos == null)
    return;

var latitude = pos.Coordinate.Point.Position.Latitude;
var longitude = pos.Coordinate.Point.Position.Longitude;
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
