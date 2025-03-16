---
title: Pickers
---

{% note danger %}
This API will be removed in `WASDK v1.8` or any future version that introduces the Picker API.
{% endnote %}

SavePicker, FilePicker and FolderPicker which support AOT, Packaged/UnPackaged and Elevated Apps.

{% note info %}
you can use simple methods which return a `string` or `List<string>` or you can use `Async` methods which return a `StorageFile` or `StorageFolder`
{% endnote %}

{% note info %}
If you want to set `DefaultFileExtension`, you need to set your FileTypeChoices item `Key`. for example: `picker.DefaultFileExtension = "Images";`
{% endnote %}

# FilePicker

## Property
|Name|
|-|
|Options|
|ShowDetailedExtension|
|CommitButtonText|
|SuggestedFileName|
|DefaultFileExtension|
|InitialDirectory|
|SuggestedStartLocation|
|Title|
|FileTypeChoices|
|ShowAllFilesOption|

## PickSingleFile/PickSingleFileAsync

``` CS
var picker = new FilePicker(Hwnd);
picker.Title = "Custom Title";
picker.SuggestedFileName = "Default FileName";
picker.DefaultFileExtension = "*.*";
picker.ShowAllFilesOption = true;
picker.CommitButtonText = "Custom Confirm";
picker.FileTypeChoices = new Dictionary<string, IList<string>>
{
{ "Images", new List<string> { "*.png", "*.jpg", "*.jpeg", "*.bmp", "*.gif" } },
{ "Text Files", new List<string> { "*.txt", "*.md", "*.log" } }
};

// OR
// picker.FileTypeChoices.Add("Images", new List<string> { "*.png", "*.jpg", "*.jpeg", "*.bmp", "*.gif" });
// picker.FileTypeChoices.Add("Text Files", new List<string> { "*.txt", "*.md", "*.log" });

picker.InitialDirectory = @"C:\";

// Or use 
// picker.SuggestedStartLocation = PickerLocationId.Downloads;

var file = await picker.PickSingleFileAsync();
if (file != null)
{
    Txt.Text = file.Path;
}
```

## PickMultipleFiles/PickMultipleFilesAsync

```cs
var picker = new FilePicker(Hwnd);
picker.Title = "Custom Title";
picker.SuggestedFileName = "Default FileName";
picker.DefaultFileExtension = "*.*";
picker.ShowAllFilesOption = true;
picker.CommitButtonText = "Custom Confirm";
picker.FileTypeChoices = new Dictionary<string, IList<string>>
{
{ "Images", new IList<string> { "*.png", "*.jpg", "*.jpeg", "*.bmp", "*.gif" } },
{ "Text Files", new IList<string> { "*.txt", "*.md", "*.log" } }
};

// OR
// picker.FileTypeChoices.Add("Images", new List<string> { "*.png", "*.jpg", "*.jpeg", "*.bmp", "*.gif" });
// picker.FileTypeChoices.Add("Text Files", new List<string> { "*.txt", "*.md", "*.log" });

picker.InitialDirectory = @"C:\";

// Or use 
// picker.SuggestedStartLocation = PickerLocationId.Downloads;

var files = await picker.PickMultipleFilesAsync();
StringBuilder stringBuilder = new StringBuilder();
foreach (var item in files)
{
    stringBuilder.AppendLine(item.Path);
}
Txt.Text = stringBuilder.ToString();
```

# SavePicker

## Property
|Name|
|-|
|Options|
|ShowDetailedExtension|
|CommitButtonText|
|SuggestedFileName|
|DefaultFileExtension|
|InitialDirectory|
|SuggestedStartLocation|
|Title|
|FileTypeChoices|
|ShowAllFilesOption|

## PickSaveFile/PickSaveFileAsync

```cs
var picker = new SavePicker(Hwnd);
picker.Title = "Custom Title";
picker.SuggestedFileName = "Default FileName";
picker.DefaultFileExtension = "*.*";
picker.ShowAllFilesOption = true;
picker.CommitButtonText = "Custom Confirm";
picker.FileTypeChoices = new Dictionary<string, IList<string>>
{
{ "Images", new IList<string> { "*.png", "*.jpg", "*.jpeg", "*.bmp", "*.gif" } },
{ "Text Files", new IList<string> { "*.txt", "*.md", "*.log" } }
};

// OR
// picker.FileTypeChoices.Add("Images", new List<string> { "*.png", "*.jpg", "*.jpeg", "*.bmp", "*.gif" });
// picker.FileTypeChoices.Add("Text Files", new List<string> { "*.txt", "*.md", "*.log" });

picker.InitialDirectory = @"C:\";

// Or use 
// picker.SuggestedStartLocation = PickerLocationId.Downloads;

var file = await picker.PickSaveFileAsync();
if (file != null)
{
    Txt.Text = file.Path;
}
```

# FolderPicker

## Property
|Name|
|-|
|Options|
|CommitButtonText|
|SuggestedFileName|
|InitialDirectory|
|SuggestedStartLocation|
|Title|

## PickSingleFolder/PickSingleFolderAsync
```cs
var picker = new FolderPicker(Hwnd);
picker.Title = "Custom Title";
picker.CommitButtonText = "Custom Confirm";
picker.InitialDirectory = @"C:\";

// Or use 
// picker.SuggestedStartLocation = PickerLocationId.Downloads;

var file = await picker.PickSingleFolderAsync();
if (file != null)
{
    Txt.Text = file.Path;
}
```

## PickMultipleFolders/PickMultipleFoldersAsync

```cs
var picker = new FolderPicker(Hwnd);
picker.Title = "Custom Title";
picker.CommitButtonText = "Custom Confirm";
picker.InitialDirectory = @"C:\";

// Or use 
// picker.SuggestedStartLocation = PickerLocationId.Downloads;

var files = await picker.PickMultipleFoldersAsync();
StringBuilder stringBuilder = new StringBuilder();
foreach (var item in files)
{
    stringBuilder.AppendLine(item.Path);
}
Txt.Text = stringBuilder.ToString();
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.

![DevWinUI](https://raw.githubusercontent.com/Ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/Picker.png)
