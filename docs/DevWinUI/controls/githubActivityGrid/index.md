---
title: GitHubActivityGrid
---

# Property

|Name|
|-|
|Days|
|MaxCount|
|CellSize|
|CellGap|
|UnitSingular|
|UnitPlural|
|LessText|
|MoreText|
|Level0Brush|
|Level1Brush|
|Level2Brush|
|Level3Brush|
|Level4Brush|
|TipBackground|
|TipForeground|
|TipSecondaryForeground|
|ReduceMotion|

# Example

```xml
<dev:GitHubActivityGrid Days="{x:Bind Days}" />
```

```csharp
Days = Enumerable.Range(0, 365)
    .Select(i => new ActivityDay(DateTime.Today.AddDays(-i), Random.Shared.Next(0, 12)))
    .ToList();
```

> [!NOTE]
> Leave `MaxCount` as `null` to scale the intensity levels from the highest count in `Days`.

![GitHubActivityGrid](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/GithubActivityGrid.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
