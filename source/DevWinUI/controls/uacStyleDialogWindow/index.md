---
title: UacStyleDialogWindow
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
|Severity|
|ExtendedHeader|
|ExtendedHeaderTemplate|
|ExtendedHeaderBackground|

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
UacStyleDialogWindow dialog = new()
{
    Header = "YourTitle",
    ExtendedHeader = "ExtendedHeader",
    Content = "YourContent",
    PrimaryButtonContent = "YourPrimaryButtonText",
    SecondaryButtonContent = "YourSecondaryButtonText",
    CloseButtonContent = "YourCloseButtonText",
    DefaultButton = ContentDialogButton.Primary,
    Owner = App.Current.MainWindow
};
dialog.ShowDialog();
```

{% note info %}
you need to use `ExtendedHeader` when you are using `Severity` 
{% endnote %}


{% note info %}
If you want to prevent dialog from closing after buttons clicked, please handle click event and set e.Cancel = true where e is ContentDialogWindowButtonClickEventArgs.

`dialog.PrimaryButtonClick += (o, e) => e.Cancel = true;`
{% endnote %}

![UacStyleDialogWindow](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/UacStyleDialogWindow.png)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
