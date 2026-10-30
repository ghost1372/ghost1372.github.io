---
title: FlexRowPanel
---

# Property

|Name|
|-|
|Gap|

# Attached Property

|Name|
|-|
|Flex|

# Example

```xml
<dev:FlexRowPanel Gap="8">
    <Border dev:FlexRowPanel.Flex="1" Background="Gray" />
    <Border dev:FlexRowPanel.Flex="3" Background="DimGray" />
</dev:FlexRowPanel>
```

> [!NOTE]
> Children are arranged in a single row and share the available width in proportion to their `Flex` value (default 1), like CSS `flex-grow`. Each child fills the full height.

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
