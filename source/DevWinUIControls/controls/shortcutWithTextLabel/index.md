---
title: ShortcutWithTextLabel
---

# Attributes

|Name|
|-|
|Text|
|Keys|

# Example

```xml
<dev:ShortcutWithTextLabel x:Name="MainShortcutWithTextLabel" Text="Press a combination of keys to change this shortcut" />
```

```cs
MainShortcutWithTextLabel.Keys = new List<object>() { "Win", "Alt", "F1" };
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/ShortcutWithTextLabel.png)