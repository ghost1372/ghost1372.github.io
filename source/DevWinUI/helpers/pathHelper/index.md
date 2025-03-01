---
title: PathHelper
---

# GetFullPathToExe

```cs
var pathToExe = PathHelper.GetFullPathToExe();
//return: C:\\Users\\mahdi\\source\\repos\\App7\\App7\\bin\\x86\\Debug\\net6.0-windows10.0.19041.0\\win10-x86\\AppX"
```

# GetFullPathToAsset

```cs
var pathToAsset = PathHelper.GetFullPathToAsset("logo.png");
//return: "C:\\Users\\mahdi\\source\\repos\\App7\\App7\\bin\\x86\\Debug\\net6.0-windows10.0.19041.0\\win10-x86\\AppX\\Assets\\logo.png"
```

# GetFilePath
```cs
var path = await PathHelper.GetFilePath(filePath);
```

# GetAppDataFolderPath
```cs
var appDataPath = await PathHelper.GetAppDataFolderPath();
```

# GetExecutablePathNative
```cs
var exePath = await PathHelper.GetExecutablePathNative();
```

# GetKnownFolderPath
```cs
var path = PathHelper.GetKnownFolderPath(KnownFolderOption.Downloads);

```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
