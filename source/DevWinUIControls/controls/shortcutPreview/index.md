---
title: ShortcutPreview
---

# Attributes

|Name|
|-|
|Keys|
|IsInfo|
|IsError|
|IsWarning|
|InfoTitle|
|InfoToolTip|
|WarningTitle|
|WarningToolTip|
|ErrorTitle|
|ErrorToolTip|
|Title|

# Example

```xml
<dev:ShortcutPreview x:Name="MainShortcutPreview" />
```

```cs
MainShortcutPreview.Keys = new List<object>() { "Win", "Alt", "F1" };
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/ShortcutPreview.png)