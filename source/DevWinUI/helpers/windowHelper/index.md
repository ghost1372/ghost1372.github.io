---
title: WindowHelper
---

{% note info %}
Most methods accept both `window` and `hwnd`
{% endnote %}

# TrackWindow
you can track/Save all your windows in a dictionary which can be used in ThemeService, or other stuff.

```cs
WindowHelper.TrackWindow(window);
```

# RemoveWindowFromTrack
remove window from TrackWindow list.
```cs
WindowHelper.RemoveWindowFromTrack(window);
```

# GetWindowForElement

return window from a UIElement:

```cs
Window window = WindowHelper.GetWindowForElement(element);
```

# SwitchToThisWindow

```cs
WindowHelper.SwitchToThisWindow(window);

or

WindowHelper.SwitchToThisWindow(hwnd);

```

# ReActivateWindow
```cs
WindowHelper.ReActivateWindow(window);

or

WindowHelper.ReActivateWindow(hwnd);

```

# CreateWindowWithFrame

```cs
var windowWithFrame = WindowHelper.CreateWindowWithFrame();

//windowWithFrame.rootFrame
//windowWithFrame.window
```

# SetWindowCornerRadius

```cs
WindowHelper.SetWindowCornerRadius(window, NativeValues.DWM_WINDOW_CORNER_PREFERENCE.DWMWCP_ROUND);

or

WindowHelper.SetWindowCornerRadius(hwnd, NativeValues.DWM_WINDOW_CORNER_PREFERENCE.DWMWCP_ROUND);

```

# GetWindowCornerRadius

```cs
NativeValues.DWM_WINDOW_CORNER_PREFERENCE corner = WindowHelper.GetWindowCornerRadius(window);

```

# GetTopLevelWindows

```cs
var topWindows = WindowHelper.GetTopLevelWindows();
```

# GetProcessWindowList

```cs
var processWindowList = WindowHelper.GetProcessWindowList();
```

# GetWindowText

```cs
var windowText = WindowHelper.GetWindowText(hwnd);
```

# GetClassName

```cs
var windowClassName = WindowHelper.GetClassName(hwnd);
```

# GetCurrentAppWindow

```cs
var appWindow = WindowHelper.GetCurrentAppWindow();
```

# GetAppWindow / GetAppWindow2

```cs

// Use XamlRoot
var appWindow = WindowHelper.GetAppWindow(element);

or

// Use CompositionTarget and ContentIsland
var appWindow = WindowHelper.GetAppWindow2(element);

```

# GetWindowHandle / GetWindowHandle2

```cs

// Use XamlRoot
var hwnd = WindowHelper.GetWindowHandle(element);

// or

// Use CompositionTarget and ContentIsland
var hwnd = WindowHelper.GetWindowHandle2(element);

```

# GetAllWindowHandles

```cs
// Use CompositionTarget and ContentIsland
var hwnds = WindowHelper.GetAllWindowHandles();
```

# GetAllWindowIds

```cs
// Use CompositionTarget and ContentIsland
var ids = WindowHelper.GetAllWindowIds();
```

# GetAllAppWindows

```cs
// Use CompositionTarget and ContentIsland
var windowIds = WindowHelper.GetAllAppWindows();
```

# RemoveWindowBorderAndTitleBar

```cs
WindowHelper.RemoveWindowBorderAndTitleBar(window);

// or

WindowHelper.RemoveWindowBorderAndTitleBar(hwnd);

```

# MakeTransparentWindowClickThrough

```cs
WindowHelper.MakeTransparentWindowClickThrough(window);

// or

WindowHelper.MakeTransparentWindowClickThrough(hwnd);

```

# ResizeAndCenterWindowToPercentageOfWorkArea

# GetScreenSize

# SetWindowOwner

```cs
WindowHelper.SetWindowOwner(parentHwnd, childHwnd);
```

# FindWindow
```cs
var hwnd = WindowHelper.FindWindow(hwnd, "InputNonClientPointerSource");
```

# SetForegroundWindow
```cs
WindowHelper.SetForegroundWindow(hwnd);
```

# CenterOnScreen
```cs
var IsCentered = WindowHelper.CenterOnScreen(hwnd);
```

# TryGetAllWindowIds
```cs
var windowIds = WindowHelper.TryGetAllWindowIds();
```
# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
