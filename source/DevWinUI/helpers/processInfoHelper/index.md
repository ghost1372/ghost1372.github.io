---
title: ProcessInfoHelper
---

# Property

|Name|
|-|
|Version|
|VersionWithPrefix|
|ProductName|
|ProductNameAndVersion|
|GetVersion|
|GetFileVersionInfo|
|GetProcess|

```cs
var stringVersion = ProcessInfoHelper.Version; // 1.0.0
var stringVersionWithPrefix = ProcessInfoHelper.VersionWithPrefix; // v1.0.0
var productName = ProcessInfoHelper.ProductName; // MyAppName
var productNameAndVersion = ProcessInfoHelper.ProductNameAndVersion; // MyAppName v1.0.0
var version = ProcessInfoHelper.GetVersion(); // 1.0.0.0
var fileVersionInfo = ProcessInfoHelper.GetFileVersionInfo();
var process = ProcessInfoHelper.GetProcess();
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
