---
title: OrbitCardStack
---

# Property

|Name|
|-|
|Items|
|Layout|
|Size|
|Spread|
|Lift|
|Value|
|DefaultValue|
|Open|
|DefaultOpen|
|IsAnimationEnabled|
|Labels|
|ImageFactory|

# Events

|Name|
|-|
|ValueChanged|
|OpenChanged|
|ItemInvoked|

# Enums

|OrbitCardLayout|
|-|
|Arc|
|Row|
|Grid|

|OrbitCardSize|
|-|
|Small|
|Medium|
|Large|

# Helper Types

|Name|Description|
|-|-|
|OrbitCardItem|Record with `Name`, `Role`, `Description`, `Image`, `Initials`, `Stat` and `Href`.|
|OrbitCardLabels|Record with `Group` (default "Cards") and `Link` (default "Open") used for accessibility names.|
|OrbitCardInvokedEventArgs|Event args with `Item` and `Index`.|

# Example

```xml
<dev:OrbitCardStack
    Items="{x:Bind Items}"
    Layout="Arc"
    Size="Medium"
    ItemInvoked="OrbitCardStack_ItemInvoked" />
```

```csharp
Items = new List<OrbitCardItem>
{
    new("Ada Lovelace", "Mathematician", "Wrote the first published algorithm."),
    new("Alan Turing", "Computer scientist", "Formalized computation."),
    new("Grace Hopper", "Rear admiral", "Pioneered compilers.")
};
```

> [!NOTE]
> The stack is collapsed by default and opens when a card is hovered or focused. Use the arrow keys, Home and End to move between cards, Enter or Space to invoke a card and Escape to close.

> [!NOTE]
> `Value` and `Open` are nullable. When `null`, the control manages the active card and open state itself (starting from `DefaultValue` and `DefaultOpen`). When set, the control follows your values and only raises `ValueChanged` and `OpenChanged`.

> [!NOTE]
> `ImageFactory` is a plain property (not a dependency property). Set it before `Items` to supply custom card content.

> [!WARNING]
> Spread and Lift are doubles in device independent pixels. `Spread` is the maximum horizontal distance between cards in the `Row` and `Arc` layouts and is reduced automatically when space is limited.

![OrbitCardStack](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/OrbitCardStack.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
