---
title: PanelAttach
---

# ChildrenTransitions

Animation when a panel is loading

# Available Transitions

|Name|
|-|
|None|
|Default|
|AddDeleteThemeTransition|
|ContentThemeTransition|
|EdgeUIThemeTransition|
|EntranceThemeTransition|
|NavigationThemeTransition|
|PaneThemeTransition|
|PopupThemeTransition|
|ReorderThemeTransition|
|RepositionThemeTransition|
|SettingsCardTransition|

# Example

```xml
<StackPanel wuc:PanelAttach.ChildrenTransitions="EntranceThemeTransition">
```

```cs
PanelAttach.SetChildrenTransitions(control, PanelTransitionCollection.NavigationThemeTransition);
```