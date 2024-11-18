---
title: Extensions
---

# ContentDialogExtension

By default, only 1 ContentDialog can be opened, with the help of this extension you can open multiple ContentDialogs.

```cs
ContentDialog dialog = new ContentDialog()
{
    Title = "Title",
    Content = "Content",
    PrimaryButtonText = "OK",
    CloseButtonText = "Cancel",
    DefaultButton = ContentDialogButton.Primary,
    XamlRoot = xamlRoot
};
var result = await dialog.ShowAsyncQueue();
```

# ShowAsyncDraggable
# ShowAsyncQueueDraggable

# DependencyObjectExtensions

# FrameworkElementExtensions

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.