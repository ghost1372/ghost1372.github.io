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
|KeyNameProvider|
|UseAutoValidation|
|KeysMargin|

# Events

|Name|
|-|
|CloseButtonClick|
|PrimaryButtonClick|
|SecondaryButtonClick|
|ValidateShortcut|

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
    var keys = MainShortcut.Keys.Cast<KeyVisualInfo>().ToList();
    foreach (var item in sss)
    {
        var virtKey = item.Key;
        var keyName = item.KeyName;
    }
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

{% note info %}
`Keys` type is `List<object>`, after selecting keys, you can cast it to `KeyVisualInfo` and you can access Key Name and Virtual Key.
{% endnote %}


# Customize Keys
you can customize keys string by providing a `KeyNameProvider`:

```cs
shortcut.KeyNameProvider = key =>
{
    return key switch
    {
        VirtualKey.LeftControl => "Left Ctrl",
        VirtualKey.RightControl => "Right Ctrl",
        VirtualKey.LeftShift => "Left Shift",
        VirtualKey.RightShift => "Right Shift",
        // Other Keys...
        _ => key.ToString()
    };
};
```

# Custom Keys Validation
When `UseAutoValidation` enabled, it automatically handles key combinations and shows warnings or errors based on the keys pressed. (For example, pressing the Windows key alone will trigger an error message. You can customize the error message using ErrorTitle.)

If you want to handle validation yourself, simply `disable` `UseAutoValidation` and subscribe to the `ValidateShortcut` event.

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/Shortcut.gif)