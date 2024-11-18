---
title: PackageHelper
---

# GetCurrentPackageName

```cs
var packageName = PackageHelper.GetCurrentPackageName();

//return: 6bf3ff99-cad2-4593-95c3-a2b41f92b4f3_1.0.0.0_x86__d945pcw0g0yx4
```

{% note warning %}
`GetCurrentPackageName` Works only in `Packaged` mode, in UnPackaged mode this will Returns the null value.
{% endnote %}


# IsPackaged

```cs
var isPackagedMode = PackageHelper.IsPackaged;

//return: true/false 
```
# GetPackageDetails

```cs
var packageDetails = PackageHelper.GetPackageDetails();
```

# GetPackageVersion

```cs
var packageVersion = PackageHelper.GetPackageVersion();
packageVersion.Major.ToString();
packageVersion.Minor.ToString();
packageVersion.Build.ToString();
packageVersion.Revision.ToString();
//return: 1.0.0.0
```
