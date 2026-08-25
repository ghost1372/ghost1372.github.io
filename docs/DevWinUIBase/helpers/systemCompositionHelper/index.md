---
title: SystemCompositionHelper
---

# Methods

|Name|
|-|
|TryUnlockLAFAndSetSystemEngine|
|TryBypassLAFAndSetSystemEngine|

> [!TIP]
> `TryUnlockLAFAndSetSystemEngine` is intended for packaged applications. It attempts to internally unlock the SystemEngine LAF without requesting information from Microsoft.
>`TryBypassLAFAndSetSystemEngine` attempts to bypass the LAF security mechanism and should also work with unpackaged applications.

> [!CAUTION]
> Both methods are unstable and may not work depending on the Windows version.

```cs
var result = SystemCompositionHelper.TryUnlockLAFAndSetSystemEngine();
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
