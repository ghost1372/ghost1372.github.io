---
title: FileHelper
---

# GetValidFileName

```cs
var validName = FileHelper.GetValidFileName(invalidFileName);
```

# GetFileSize
```cs
var size = FileHelper.GetFileSize(3216546);
// Gb, MB, Kb...
```

# GetStorageFile
```cs
var file = FileHelper.GetStorageFile(filePath);
```

# GetFileFromEmbededResources

```cs
// Resource Should be marked as EmbededResource
var uri = new Uri("ms-appx:///Assets/Mask/ForegroundFocusMask.png");
Stream? stream = FileHelper.GetFileFromEmbededResources(assembly, uri);
```

# GetFileFromUri

```cs
// Resource Should be marked as Content and CopyToOutput enabled. (File exist in output directory)
// uri can be ms-appx or filePath
var uri = new Uri("ms-appx:///Assets/Mask/ForegroundFocusMask.png");
Stream? stream = FileHelper.GetFileFromUri(uri);
```

# GetFileFromEmbededResourcesOrUri
internally call `GetFileFromEmbededResources` and `GetFileFromUri`.

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
