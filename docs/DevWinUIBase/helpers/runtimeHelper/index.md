---
title: RuntimeHelper
---

# IsPackaged
Checks if the application is running as a packaged (MSIX) or UnPackaged app.

```cs
bool result =  RuntimeHelper.IsPackaged();
```

# IsCurrentProcessRunningAsAdmin
Similar to IsAppRunningAsAdmin(), but uses a different method to check if the process is running with elevated privileges.
```cs
bool result =  RuntimeHelper.IsCurrentProcessRunningAsAdmin();
```

# IsCurrentProcessRunningElevated
Determine whether the current process is running elevated in a split token session
will not return true if UAC is disabled and the user is running as administrator by default
```cs
bool result =  RuntimeHelper.IsCurrentProcessRunningElevated();
```

# VerifyCurrentProcessRunningAsAdmin
Ensures that the current process is running with administrative privileges. If not, it throws an exception.
```cs
RuntimeHelper.VerifyCurrentProcessRunningAsAdmin();
```

# IsAppRunningAsAdmin
Determines if the current application is running with administrative privileges.

```cs
bool result =  RuntimeHelper.IsAppRunningAsAdmin();
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
