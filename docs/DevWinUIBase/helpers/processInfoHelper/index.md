---
title: ProcessInfoHelper
---

# Property

|Name|
|-|
|Version|
|VersionDev|
|VersionWithPrefix|
|VersionWithPrefixDev|
|ProductName|
|ProductNameDisplay|
|ProductNameDev|
|ProductNameDisplayDev|
|ProductNameAndVersion|
|ProductNameAndVersionDisplay|
|ProductNameAndVersionDev|
|ProductNameAndVersionDisplayDev|
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

# Display Variant
Properties with `Display` in their name return a more readable product name where dots (.) are replaced with spaces.
If the product name is not available, "Unknown Product" is returned.

```cs
// Raw product name
Console.WriteLine(ProductName);             // Output: "MyApp.Product"

// Display-friendly version
Console.WriteLine(ProductNameDisplay);      // Output: "MyApp Product"

// Combined with version
Console.WriteLine(ProductNameAndVersionDisplay); // Output: "MyApp Product v1.2.3"
```

# Dev
Properties with `Dev` in their name indicate a `development` build.

In `Debug` mode, the property appends `Dev` to indicate it is a development build.

In Release mode, they behave like the normal property.

You need to set IsDebug to True/False

```cs
#if Debug
ProcessInfoHelper.IsDebug = true;
#else
ProcessInfoHelper.IsDebug = false;
#endif

// Product name in Debug mode
Console.WriteLine(ProductNameDev);                 // Output: "MyApp.Product Dev"
Console.WriteLine(ProductNameDisplayDev);          // Output: "MyApp Product Dev"

// Product + version in Debug mode
Console.WriteLine(ProductNameAndVersionDev);       // Output: "MyApp.Product Dev v1.2.3"
Console.WriteLine(ProductNameAndVersionDisplayDev);// Output: "MyApp Product Dev v1.2.3"

// Version property
Console.WriteLine(VersionDev);                    // Output: "Dev" in Debug, "1.2.3" in Release
Console.WriteLine(VersionWithPrefixDev);         // Output: "Dev" in Debug, "v1.2.3" in Release
```


# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
