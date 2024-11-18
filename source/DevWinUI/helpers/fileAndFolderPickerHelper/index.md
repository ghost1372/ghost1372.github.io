---
title: FileAndFolderPickerHelper
---

# PickSaveFileAsync
```cs
var ext = new Dictionary<string, IList<string>>();
ext.Add("Plain Text", new List<string>() { ".txt" });

var picker = await FileAndFolderPickerHelper.PickSaveFileAsync(App.currentWindow, ext);
// or 
// var picker = await FileAndFolderPickerHelper.PickSaveFileAsync(hwnd, ext);
if (picker != null)
{
    txtRes.Text = picker.Path;
}
```

# PickMultipleFilesAsync
```cs
var fileTypeFilter = new List<string> { ".txt", ".rtf" };
var picker = await FileAndFolderPickerHelper.PickMultipleFilesAsync(App.currentWindow, fileTypeFilter);

// or 
// var picker = await FileAndFolderPickerHelper.PickMultipleFilesAsync(hwnd, fileTypeFilter);


if (picker != null)
{
    foreach (var item in picker)
    {
        txtRes.Text = item.Path;
    }
}
```

# PickSingleFileAsync
```cs
 var fileTypeFilter = new List<string> { ".txt", ".rtf" };
 var picker = await FileAndFolderPickerHelper.PickSingleFileAsync(App.currentWindow, fileTypeFilter);

 // or 
// var picker = await FileAndFolderPickerHelper.PickSingleFileAsync(hwnd, fileTypeFilter);

 if (picker != null)
 {
     txtRes.Text = picker.Path;
 }
```

# PickSingleFolderAsync
```cs
var picker = await FileAndFolderPickerHelper.PickSingleFolderAsync(App.currentWindow);

 // or 
// var picker = await FileAndFolderPickerHelper.PickSingleFolderAsync(hwnd);

if (picker != null)
{
    txtRes.Text = picker.Path;
}
```

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/Picker.png)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
