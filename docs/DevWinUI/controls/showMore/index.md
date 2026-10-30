---
title: ShowMore
---

# Property

|Name|
|-|
|Lines|
|MaxExpandedHeight|
|IsExpanded|
|MoreLabel|
|LessLabel|
|Label|
|VeilBrush|

# Events

|Name|
|-|
|ExpandedChanged|

# Example

```xml
<dev:ShowMore Lines="3">
    <TextBlock TextWrapping="Wrap"
               Text="Long content goes here..." />
</dev:ShowMore>
```

```xml
<dev:ShowMore Lines="2"
              MaxExpandedHeight="200"
              MoreLabel="Read more"
              LessLabel="Read less"
              Label="Release notes">
    <TextBlock TextWrapping="Wrap"
               Text="Long content goes here..." />
</dev:ShowMore>
```

> [!NOTE]
> The expander is shown only when the content overflows the number of lines specified by `Lines`.

> [!NOTE]
> When the expanded content is taller than `MaxExpandedHeight`, it becomes scrollable.

> [!WARNING]
> `Lines` is an int and is clamped to a minimum of 1. Line height is measured from the first `TextBlock` found in the content, so use `TextBlock` with `TextWrapping="Wrap"` for accurate results.

![ShowMore](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/ShowMore.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
