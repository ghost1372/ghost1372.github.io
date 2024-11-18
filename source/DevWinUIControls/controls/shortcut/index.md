---
title: Shortcut
---

```cs
public sealed partial class SettingsPageControl : UserControl
```

# ShortcutWithTextLabelControl
## Attributes

| Name | Class|
|-|-|
|Text|ShortcutWithTextLabelControl|
|Keys|ShortcutWithTextLabelControl|

# Example

```xml
<StackPanel>
    <dev:ShortcutWithTextLabelControl x:Name="HotkeyMicVidControl" Text="to toggle both your microphone and video" />
    <dev:ShortcutWithTextLabelControl x:Name="HotkeyMicControl" Text="to toggle your microphone" />
    <dev:ShortcutWithTextLabelControl x:Name="HotkeyVidControl" Text="to toggle your microphone" />

    <Button Content="Open Shortcut Dialog" Click="Button_Click"/>
</StackPanel>
```

```cs
HotkeyMicVidControl.Keys = new List<object> { "Ctrl", "Alt", "F5" };
HotkeyMicControl.Keys = new List<object> { "Ctrl", "Alt", "F5" };
HotkeyVidControl.Keys = new List<object> { "Ctrl", "Alt", "F5" };
```

![DevWinUI](https://raw.githubusercontent.com/ghost1372/Resources/main/SettingsUI/Samples/Shortcut.png)

# ShortcutDialogContentControl
## Attributes

| Name | Class|
|-|-|
|Keys|ShortcutDialogContentControl|
|IsError|ShortcutDialogContentControl|
|IsWarningAltGr|ShortcutDialogContentControl|

```cs
private ShortcutDialogContentControl c = new ShortcutDialogContentControl();
private ContentDialog shortcutDialog;
bool canClose = false;

public void OpenDialog()
{
    c.Keys = new List<object> { "Ctrl", "Alt", "F5" };
    shortcutDialog = new ContentDialog
    {
        XamlRoot = Content.XamlRoot,
        Title = "Activation shortcut",
        Content = c,
        PrimaryButtonText = "Save",
        SecondaryButtonText = "Confirm",
        CloseButtonText = "Cancel",
        DefaultButton = ContentDialogButton.Primary,
    };

    shortcutDialog.Closing += ShortcutDialog_Closing;
    shortcutDialog.PrimaryButtonClick += ShortcutDialog_PrimaryButtonClick;
    shortcutDialog.SecondaryButtonClick += ShortcutDialog_SecondaryButtonClick;
    shortcutDialog.CloseButtonClick += ShortcutDialog_CloseButtonClick;
    await shortcutDialog.ShowAsyncQueue();
}
private void ShortcutDialog_CloseButtonClick(ContentDialog sender, ContentDialogButtonClickEventArgs args)
{
    canClose = true;
}

private void ShortcutDialog_Closing(ContentDialog sender, ContentDialogClosingEventArgs args)
{
    args.Cancel = !canClose;
}
private void ShortcutDialog_PrimaryButtonClick(ContentDialog sender, ContentDialogButtonClickEventArgs args)
{
    DisableKeys();
}
private void ShortcutDialog_SecondaryButtonClick(ContentDialog sender, ContentDialogButtonClickEventArgs args)
{
    EnableKeys();
}
private void EnableKeys()
{
    shortcutDialog.IsPrimaryButtonEnabled = true;
    c.IsError = false;
}
private void DisableKeys()
{
    shortcutDialog.IsPrimaryButtonEnabled = false;
    c.IsError = true;
}
```

![DevWinUI](https://raw.githubusercontent.com/ghost1372/Resources/main/SettingsUI/Samples/Shortcut_Dialog.png)

![DevWinUI](https://raw.githubusercontent.com/ghost1372/Resources/main/SettingsUI/Samples/Shortcut_Dialog_Error.png)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.

