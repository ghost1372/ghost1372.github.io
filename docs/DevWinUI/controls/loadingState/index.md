---
title: LoadingState
---

# Property

|Name|
|-|
|Label|
|Mode|
|ShowElapsed|
|Elapsed|

# Methods

|Name|
|-|
|Restart|

# Example

```xml
<dev:LoadingState Label="Working" Mode="Drive" ShowElapsed="True" />
```

```xml
<dev:LoadingState Label="Syncing" Mode="Orbit" ShowElapsed="False" />
```

> [!NOTE]
> `Elapsed` is read-only. The timer starts when the control is loaded, and you can reset it at any time by calling `Restart()`.

![LoadingState](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/LoadingState.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
