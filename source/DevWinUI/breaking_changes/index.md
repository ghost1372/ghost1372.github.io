---
title: Breaking Changes
---

A breaking change is a change that may require you to make changes to your application in order to avoid disruption to your integration.

# Version 9.0.0
- WASDK Updated to `v1.8.0`
- `ThemeService` refactored.
- Change `PathHelper.GetKnownFolderPath` to Use `Microsoft.Windows.Storage.Pickers.PickerLocationId` instead of `Windows.Storage.Pickers.PickerLocationId`
- Rename `MessageBoxImage` to `MessageBoxIcon`
- Remove `SettingsNavigationAttach`
- Remove `FileAndFolderPickerHelper`
- Remove `NavigationHelperEx`
- Remove Experimental `ModernWindow`
- Remove Pickers (`FilePicker`, `FolderPicker`, `SavePicker`)

# Version 8.9.1
- `DesktopAcrylic` and `AcrylicBase` have been removed from `BackdropType`

# Version 8.7.0
- `MessageBox` renamed to `LegacyMessageBox`

# Version 8.5.0
- `BlurAnimationHelper` Removed. you can use `BlurEffectManager`.

# Version 8.4.0

- `Microsoft.Windows.SDK.BuildTools` Updated from `10.0.26100.1742` to `10.0.26100.4188`
- Rename `GeneralHelper.GetGeometry` to `GeneralHelper.GetGeometryFromAppResources`
- Remove NavigationViewItemStyle
