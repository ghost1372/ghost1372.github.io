---
title: SunTimesHelper
---

A helper class for calculating sunrise and sunset

```cs
var sunTimes = SunTimesHelper.CalculateSunriseSunset(Latitude, Longitude, DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day);
TxtSunRise.Text = $"Sunrise: {sunTimes.SunriseHour}:{sunTimes.SunriseMinute}";
TxtSunSet.Text = $"Sunset: {sunTimes.SunsetHour}:{sunTimes.SunsetMinute}";
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
