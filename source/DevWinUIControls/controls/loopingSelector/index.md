---
title: LoopingSelector
---

Ported from WinUI LoopingSelector.

# Property

|Name|
|-|
|ShouldLoop|
|SelectedItem|
|SelectedIndex|
|Items|
|ItemWidth|
|ItemHeight|
|ItemTemplate|

# Method

|Name|
|-|
|SelectNextItem|
|SelectPreviousItem|

# Example

```xml
<dev:LoopingSelector x:Name="LoopingSelectorSample" ItemHeight="40" Height="270" Padding="0,3,0,6" HorizontalContentAlignment="Center" />
```

```cs
LoopingSelectorSample.Items = Enumerable.Range(0, 12).Select(x => new DevWinUI.LoopingSelectorItem { PrimaryText = x.ToString() } as object).ToList();
```

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/LoopingSelector.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
