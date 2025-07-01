---
title: Shortcut
---

# Attributes

|Name|
|-|
|Keys|
|IsInfo|
|IsError|
|IsWarning|
|InfoTitle|
|InfoToolTip|
|WarningTitle|
|WarningToolTip|
|ErrorTitle|
|ErrorToolTip|
|Title|
|CloseButtonText|
|PrimaryButtonText|
|SecondaryButtonText|
|ContentDialogTitle|

# Events

|Name|
|-|
|CloseButtonClick|
|PrimaryButtonClick|
|SecondaryButtonClick|

# Methods

|Name|
|-|
|UpdatePreviewKeys|
|CloseContentDialog|

# Example

```xml
<dev:Shortcut x:Name="MainShortcut" PrimaryButtonClick="OnMainShortcutPrimaryButtonClick" SecondaryButtonClick="OnMainShortcutSecondaryButtonClick" CloseButtonClick="OnMainShortcutCloseButtonClick"/>
```

```cs
MainShortcut.Keys = new List<object>() { "Win", "Alt", "F1" };

private void OnMainShortcutPrimaryButtonClick(object sender, ContentDialogButtonClickEventArgs e)
{
    MainShortcut.UpdatePreviewKeys();
    MainShortcut.CloseContentDialog();
    // "Primary button clicked!" + Environment.NewLine + string.Join(" + ", MainShortcut.Keys);
}

private void OnMainShortcutSecondaryButtonClick(object sender, ContentDialogButtonClickEventArgs e)
{
    // "Secondary button clicked!";
}

private void OnMainShortcutCloseButtonClick(object sender, ContentDialogButtonClickEventArgs e)
{
    // "Close button clicked!";
}
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/Shortcut.gif)