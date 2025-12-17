---
title: ContentDialogWindowedExtensions
---

# Methods

|Name|
|-|
|ShowAsWindowAsync|

# Example

```cs
ContentDialog dialog = new()
{
    Title = "Title",
    Content = "Content",
    PrimaryButtonText = "Primary",
    SecondaryButtonText = "Secondary",
    CloseButtonText = "Close"
};

await dialog.ShowAsWindowAsync();
```

![WindowedContentDialog](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/WindowedContentDialog.png)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
