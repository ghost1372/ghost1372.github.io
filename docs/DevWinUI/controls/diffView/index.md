---
title: DiffView
---

# Property

|Name|
|-|
|Filename|
|OldText|
|NewText|
|MaxEditDistance|
|ShowHeader|
|ShowLineNumbers|
|CollapseUnchanged|
|ContextLines|
|WrapLines|
|MaxBodyHeight|
|ViewMode|
|UnifiedMode|
|AvailableUnifiedModes|
|ShowModeSwitcher|
|IsAnimated|
|AddedBackground|
|RemovedBackground|
|AddedAccent|
|RemovedAccent|
|HighlightChanges|
|AddedHighlight|
|RemovedHighlight|
|HighlightForeground|
|SelectionBackground|
|SelectionForeground|
|SelectionBase|
|PlaceholderBackground|
|UseSingleLineSelection|
|UnifiedRowTemplate|
|SplitRowTemplate|
|ApproximateText|
|InlineText|
|BeforeText|
|AfterText|
|CopyText|
|SelectAllText|
|ExpanderFormat|
|ExpandAutomationFormat|
|AddedLineFormat|
|RemovedLineFormat|
|FileAutomationFormat|
|SummaryAutomationFormat|

# Read-only Property

|Name|
|-|
|AddedCount|
|RemovedCount|
|IsApproximate|
|HasSelection|
|SelectedText|

# Methods

|Name|
|-|
|Replay|
|SelectAll|
|ClearSelection|
|CopySelection|

# Events

|Name|
|-|
|DiffCompleted|

# Enums

|DiffViewMode|
|-|
|Unified|
|Split|

|DiffUnifiedMode|
|-|
|Inline|
|Before|
|After|

|DiffUnifiedModes (Flags)|
|-|
|None|
|Inline|
|Before|
|After|
|All|

|DiffKind|
|-|
|Context|
|Add|
|Remove|

# Helper Types

|Name|Description|
|-|-|
|DiffEngine|Static Myers line diff. `Compute` returns a `DiffResult`, `SplitLines` splits text on `\n`, `\r\n` or `\r`.|
|DiffResult|Holds `Lines` (a list of `DiffLine`) and `Approximate`.|
|DiffLine|Record struct with `Kind`, `Text`, `OldNumber`, `NewNumber` and `Pair`.|
|DiffRow|Row model used by the unified row template.|
|SplitRow|Row model used by the split row template (`Left`, `Right`, `Expander`).|
|DiffHighlight|Attached property helper that applies change and selection highlights to a `TextBlock`.|

# Example

```xml
<dev:DiffView
    Filename="Program.cs"
    OldText="{x:Bind OldCode}"
    NewText="{x:Bind NewCode}"
    ViewMode="Split" />
```

```csharp
var result = DiffEngine.Compute(
    DiffEngine.SplitLines(oldText),
    DiffEngine.SplitLines(newText));
```

> [!NOTE]
> The diff runs in the background and `DiffCompleted` is raised when the result is ready. `AddedCount`, `RemovedCount` and `IsApproximate` are valid after that.

> [!WARNING]
> `MaxEditDistance` caps the diff cost (default 4000, up to about 64 MB of memory). When the files differ more than this, the differing section is shown as one removed block followed by one added block and `IsApproximate` is `true`.

> [!NOTE]
> `UnifiedMode` and `AvailableUnifiedModes` only apply when `ViewMode` is `Unified`.

![DiffView](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/DiffView.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
