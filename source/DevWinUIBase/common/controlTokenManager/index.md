---
title: ControlTokenManager 
---

# Methods
|Name|
|-|
|OnTokenChanged|
|TryGetControl|
|Unregister|
|Register|

# Example

```cs
 private static readonly ControlTokenManager<FrameworkElement> TokenManager =
        new(registerCallback: OnTokenRegistered);

private static void OnTokenRegistered(string token, FrameworkElement element)
{

}

TokenManager.TryGetControl(token, out FrameworkElement element);
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.