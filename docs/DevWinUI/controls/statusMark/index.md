---
title: StatusMark
---

# Property

|Name|
|-|
|Status|
|Progress|
|Maximum|
|Label|
|DoneColor|
|ErrorColor|
|GlyphSize|
|StrokeWidth|
|Dashes|
|SpinDuration|
|ArcLength|
|DrawDuration|
|FillOpacity|
|Strike|
|StrikeDelay|
|ReduceMotion|

# Example

```xml
<dev:StatusMark Status="Running" Label="Uploading" />
```

```xml
<dev:StatusMark Status="Running" Progress="45" Maximum="100" Label="Uploading" />
```

```xml
<dev:StatusMark Status="Done" Label="Completed" Strike="True" />
```

> [!NOTE]
> While `Status` is `Running`, leaving `Progress` as `NaN` (the default) shows an indeterminate spinning arc. Set `Progress` to show a determinate arc.

> [!NOTE]
> If `Content` is set, it is shown next to the glyph instead of `Label`.

> [!WARNING]
> `Progress` is a double and is divided by `Maximum` (default 100), then clamped between 0 and 1.

> [!WARNING]
> `ArcLength` is the share of the ring covered by the spinning arc, from 0 to 1. `SpinDuration` and `DrawDuration` are in milliseconds.

![StatusMark](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/StatusMark.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
