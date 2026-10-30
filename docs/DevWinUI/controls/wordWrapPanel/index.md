---
title: WordWrapPanel
---

# Attached Property

|Name|
|-|
|Word|
|Kind|

# Enums

|ScrumbledTextLetterKind|
|-|
|Normal|
|Space|
|Break|

# Example

```csharp
WordWrapPanel.SetWord(cell, 0);
WordWrapPanel.SetKind(cell, ScrumbledTextLetterKind.Normal);
```

> [!NOTE]
> Children with the same `Word` value are kept together on one line. Trailing `Space` children are ignored when deciding whether a word fits, and a `Break` child forces a new line. This panel is used by ScrambledText.

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
