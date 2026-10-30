---
title: MeterLegendPanel
---

`MeterLegendPanel` inherits from `Panel`. It is the legend panel used by [SegmentedMeter](../SegmentedMeter/index.md), and it can be used on its own.

# Property

|Name|
|-|
|Orientation|
|HorizontalSpacing|
|VerticalSpacing|

# Example

```xml
<dev:MeterLegendPanel Orientation="Horizontal"
                      HorizontalSpacing="16"
                      VerticalSpacing="6">
    <TextBlock Text="Documents" />
    <TextBlock Text="Photos" />
    <TextBlock Text="Apps" />
</dev:MeterLegendPanel>
```

> [!NOTE]
> `Horizontal` wraps items onto new rows when they do not fit. `Vertical` stacks items in a single column.

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
