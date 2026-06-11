---
title: Breaking Changes
---

A breaking change is a change that may require you to make changes to your application in order to avoid disruption to your integration.

# Version 10.0.0
- DevWinUI now requires `Microsoft.WindowsAppSDK.WinUI` `v1.8.260204000` (Microsoft.WindowsAppSDK v2.2.0)
- WindowedContentDialog rewritten
- DragMoveHelper rewritten
- Updated Icons
- MessageBox rewritten
- SpeedGraph rewritten
- Package Renamed from `DevWinUI.Controls` To `DevWinUI`
You will need to update all references in your code from `DevWinUI.Controls` to `DevWinUI`.

Rename
`<ResourceDictionary Source="ms-appx:///DevWinUI.Controls/Themes/Generic.xaml" />`
To
`<ResourceDictionary Source="ms-appx:///DevWinUI/Themes/Generic.xaml" />`

## ⚠️ Important: Package Renaming (v10.0.0+)

This version introduces **breaking changes** related to package renaming to support meta packages.

### Package Changes

| Version | Core Library | Controls Library |
|---------|--------------|------------------|
| **v9.9.4 and below** | `DevWinUI` | `DevWinUI.Controls` |
| **v10.0.0+** | `DevWinUI.Base` | `DevWinUI` |

### ResourceDictionary Path Changes

| Version | ResourceDictionary Path |
|---------|------------------------|
| **v9.9.4 and below** | `ms-appx:///DevWinUI.Controls/Themes/Generic.xaml` |
| **v10.0.0+** | `ms-appx:///DevWinUI/Themes/Generic.xaml` |

### Migration Guide

**If you are using v9.9.4 or below:**
- Install `DevWinUI` for core utilities (services, helpers, extensions, managers)
- Install `DevWinUI.Controls` for custom controls, styles, and XAML resources (includes DevWinUI core)

**If you are using v10.0.0 or above:**
- Install `DevWinUI.Base` for core utilities only
- Install `DevWinUI` for the full package (controls + core) — recommended for most users

### Note for Upgrading from v9.9.4 → v10.0.0+

Simply replace `DevWinUI.Controls` with `DevWinUI` in your project references and update the ResourceDictionary path as shown above. The `DevWinUI` package now includes everything from the old `DevWinUI.Controls` plus the core library.

# Version 9.1.0
- TileGallery Removed and replaced with new `HorizontalScrollContainer`
- `HomePageHeaderImage` removed and replaced with new `HomePageHeader`
- Following proeprties removed from `MainLandingPage` and `AllLandingPage` (HeaderOverlayImage, HeaderVerticalAlignment, HeaderCornerRadius, HeaderContentMargin, UseFullScreenHeaderImage, HeaderMargin)

# Version 8.9.2
- `OOBEPageControl` Removed (Use `OutOfBoxPage`)
- `SettingsPageControl` Removed (Use `OutOfBoxPage`)

{% note info %}
See [here](https://github.com/Ghost1372/DevWinUI/releases) for full changes
{% endnote %}
