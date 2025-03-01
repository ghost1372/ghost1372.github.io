---
title: Pickers
---

SavePicker, FilePicker and FolderPicker which support AOT, Packaged/UnPackaged and Elevated Apps.

{% note info %}
you can use simple methods which return a `string` or `List<string>` or you can use `Async` methods which return a `StorageFile` or `StorageFolder`
{% endnote %}

{% note info %}
If you want to set `DefaultFileType`, you need to set your FileTypeChoices item `Key`. for example: `picker.DefaultFileType = "Images";`
{% endnote %}


# FilePicker

## Property
|Name|
|-|
|Options|
|OkButtonLabel|
|DefaultFileName|
|DefaultFileType|
|InitialDirectory|
|InitialKnownFolder|
|Title|
|FileTypeChoices|
|ShowAllFilesFileType|

## PickSingleFile/PickSingleFileAsync

``` CS
var picker = new FilePicker();
picker.Title = "Custom Title";
picker.DefaultFileName = "Default FileName";
picker.DefaultFileType = "*.*";
picker.ShowAllFilesFileType = true;
picker.OkButtonLabel = "Custom Confirm";
picker.FileTypeChoices = new Dictionary<string, List<string>>
{
{ "Images", new List<string> { "*.png", "*.jpg", "*.jpeg", "*.bmp", "*.gif" } },
{ "Text Files", new List<string> { "*.txt", "*.md", "*.log" } }
};

picker.InitialDirectory = @"C:\";

// Or use 
// picker.InitialKnownFolder = KnownFolderOption.Downloads;

var file = await picker.PickSingleFileAsync(Hwnd);
if (file != null)
{
    Txt.Text = file.Path;
}
```

## PickMultipleFiles/PickMultipleFilesAsync

```cs
var picker = new FilePicker();
picker.Title = "Custom Title";
picker.DefaultFileName = "Default FileName";
picker.DefaultFileType = "*.*";
picker.ShowAllFilesFileType = true;
picker.OkButtonLabel = "Custom Confirm";
picker.FileTypeChoices = new Dictionary<string, List<string>>
{
{ "Images", new List<string> { "*.png", "*.jpg", "*.jpeg", "*.bmp", "*.gif" } },
{ "Text Files", new List<string> { "*.txt", "*.md", "*.log" } }
};

picker.InitialDirectory = @"C:\";

// Or use 
// picker.InitialKnownFolder = KnownFolderOption.Downloads;

var files = await picker.PickMultipleFilesAsync(Hwnd);
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
|OkButtonLabel|
|DefaultFileName|
|DefaultFileType|
|InitialDirectory|
|InitialKnownFolder|
|Title|
|FileTypeChoices|
|ShowAllFilesFileType|

## PickSaveFile/PickSaveFileAsync

```cs
var picker = new SavePicker();
picker.Title = "Custom Title";
picker.DefaultFileName = "Default FileName";
picker.DefaultFileType = "*.*";
picker.ShowAllFilesFileType = true;
picker.OkButtonLabel = "Custom Confirm";
picker.FileTypeChoices = new Dictionary<string, List<string>>
{
{ "Images", new List<string> { "*.png", "*.jpg", "*.jpeg", "*.bmp", "*.gif" } },
{ "Text Files", new List<string> { "*.txt", "*.md", "*.log" } }
};

picker.InitialDirectory = @"C:\";

// Or use 
// picker.InitialKnownFolder = KnownFolderOption.Downloads;

var file = await picker.PickSaveFileAsync(Hwnd);
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
|OkButtonLabel|
|DefaultFileName|
|InitialDirectory|
|InitialKnownFolder|
|Title|

## PickSingleFolder/PickSingleFolderAsync
```cs
var picker = new FolderPicker();
picker.Title = "Custom Title";
picker.OkButtonLabel = "Custom Confirm";
picker.InitialDirectory = @"C:\";

// Or use 
// picker.InitialKnownFolder = KnownFolderOption.Downloads;

var file = await picker.PickSingleFolderAsync(Hwnd);
if (file != null)
{
    Txt.Text = file.Path;
}
```

## PickMultipleFolders/PickMultipleFoldersAsync

```cs
var picker = new FolderPicker();
picker.Title = "Custom Title";
picker.OkButtonLabel = "Custom Confirm";
picker.InitialDirectory = @"C:\";

// Or use 
// picker.InitialKnownFolder = KnownFolderOption.Downloads;

var files = await picker.PickMultipleFoldersAsync(Hwnd);
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
