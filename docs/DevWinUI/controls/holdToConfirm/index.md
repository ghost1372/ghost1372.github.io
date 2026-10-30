---
title: HoldToConfirm
---

# Property

|Name|
|-|
|Label|
|ConfirmedLabel|
|Kind|
|Size|
|Duration|
|Confirmed|
|IconGlyph|
|IsAnimationEnabled|

# Methods

|Name|
|-|
|Reset|

# Events

|Name|
|-|
|Confirm|

# Enums

|HoldToConfirmKind|
|-|
|Default|
|Destructive|
|Secondary|

|HoldToConfirmSize|
|-|
|Small|
|Default|
|Large|

# Example

```xml
<dev:HoldToConfirm
    Label="Hold to delete"
    ConfirmedLabel="Deleted"
    Kind="Destructive"
    Duration="1500"
    Confirm="HoldToConfirm_Confirm" />
```

```csharp
private void HoldToConfirm_Confirm(HoldToConfirm sender, object? args)
{
    // confirmed
}
```

> [!WARNING]
> Duration is a double in milliseconds (default 1200). Values below 50 are treated as 50.

> [!NOTE]
> The control is activated by pressing and holding with the pointer, or by holding Space, Enter or Gamepad A. Releasing early rewinds the fill.

> [!NOTE]
> `Confirmed` is `null` by default and the control manages its own state. Set it to `true` or `false` to control the confirmed state from code. Call `Reset` to return the control to its initial state.

![HoldToConfirm](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/HoldToConfirm.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
