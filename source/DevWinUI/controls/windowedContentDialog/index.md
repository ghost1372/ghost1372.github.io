---
title: WindowedContentDialog
---

# Property

|Name|
|-|
|Header|
|HeaderTemplate|
|Content|
|ContentTemplate|
|PrimaryButtonContent|
|PrimaryButtonTemplate|
|SecondaryButtonContent|
|SecondaryButtonTemplate|
|CloseButtonContent|
|CloseButtonTemplate|
|PrimaryButtonCommand|
|SecondaryButtonCommand|
|CloseButtonCommand|
|DefaultButton|
|IsPrimaryButtonEnabled|
|IsSecondaryButtonEnabled|
|ButtonOrientation|
|PrimaryButtonStyle|
|SecondaryButtonStyle|
|CloseButtonStyle|
|SystemBackdrop|
|PrimaryButtonAccessKey|
|SecondaryButtonAccessKey|
|CloseButtonAccessKey|
|CanResize|
|HasTitleBar|
|Owner|
|FlowDirection|
|MinHeight|
|MinWidth|
|CanDragMoveWindow|

# Events

|Name|
|-|
|PrimaryButtonClick|
|SecondaryButtonClick|
|CloseButtonClick|

# Methods

|Name|
|-|
|ShowAsync|

# Example

```cs
WindowedContentDialog dialog = new()
{
    Header = "YourTitle",
    Content = "YourContent",
    PrimaryButtonContent = "YourPrimaryButtonText",
    SecondaryButtonContent = "YourSecondaryButtonText",
    CloseButtonContent = "YourCloseButtonText",
    DefaultButton = ContentDialogButton.Primary,
    Owner = App.Current.MainWindow
};
ContentDialogResult result = await dialog.ShowAsync();
var result = result.ToString();
```

![WindowedContentDialog](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/WindowedContentDialog.png)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
