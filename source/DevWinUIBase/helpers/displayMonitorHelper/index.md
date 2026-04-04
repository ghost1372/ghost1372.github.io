---
title: DisplayMonitorHelper
---

A utility class that provides methods to retrieve information about display monitors in a multi-monitor setup. This includes details such as monitor name, resolution, work area, and whether a monitor is the primary display.

# GetMonitorInfo
Retrieves a list of all available monitors and their details.

```cs
List<DisplayMonitorDetails> monitors = DisplayMonitorHelper.GetMonitorInfo();

```
# GetMonitorInfo(IntPtr hwnd) / GetMonitorInfo(Window? window)
Retrieves information about the monitor closest to the specified window or window handle (hwnd).

```cs
var monitors = DisplayMonitorHelper.GetMonitorInfo(hwnd);
// OR
var monitors = DisplayMonitorHelper.GetMonitorInfo(window);
```

# GetPrimaryMonitorInfo
Retrieves information about the primary monitor (the main display)
```cs
var primaryMonitor = DisplayMonitorHelper.GetPrimaryMonitorInfo();
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
