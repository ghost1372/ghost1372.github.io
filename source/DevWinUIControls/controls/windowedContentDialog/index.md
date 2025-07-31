---
title: WindowedContentDialog
---

# Property

|Name|
|-|
|Title|
|Content|
|RequestedTheme|
|SystemBackdrop|
|Foreground|
|Background|
|BorderBrush|
|BorderThickness|
|CornerRadius|
|FlowDirection|
|TitleTemplate|
|ContentTemplate|
|PrimaryButtonText|
|SecondaryButtonText|
|CloseButtonText|
|IsPrimaryButtonEnabled|
|IsSecondaryButtonEnabled|
|DefaultButton|
|PrimaryButtonStyle|
|SecondaryButtonStyle|
|CloseButtonStyle|

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
    Title = "Title",
    Content = "Content",
    PrimaryButtonText = "Primary",
    SecondaryButtonText = "Secondary",
    CloseButtonText = "Close",
    OwnerWindow = myWindow,
    HasTitleBar = true
};

ContentDialogResult result = await dialog.ShowAsync(true);
var result = result.ToString();
```

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/WindowedContentDialog.png)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
