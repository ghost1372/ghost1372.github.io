---
title: Toolbar
---

# Toolbar 
## Property

|Name|
|-|
|ToolbarSize|
|Items|
|ItemTemplate|

# ToolbarItem
## Property

|Name|
|-|
|ItemType|
|OverflowBehavior|
|Label|
|SubItems|
|Content|
|ThemedIcon|
|IconSize|
|IsChecked|
|KeyboardAcceleratorTextOverride|
|GroupName|
|Command|
|CommandParameter|

# Example

```xml
 <dev:Toolbar x:Name="ToolbarSample" Items="{x:Bind Items, Mode=OneWay}" />
```

```cs
public ObservableCollection<ToolbarItem> Items { get; set; } = new ObservableCollection<ToolbarItem>()
{
    new ToolbarItem()
    {
        Label = "Cut",
        ItemType = ToolbarItemTypes.Button,
        ThemedIcon = Application.Current.Resources["App.ThemedIcons.Cut"] as Style
    },
    new ToolbarItem()
    {
        Label = "Copy",
        ItemType = ToolbarItemTypes.Button,
        ThemedIcon = Application.Current.Resources["App.ThemedIcons.Copy"] as Style
    },
    new ToolbarItem()
    {
        Label = "Paste",
        ItemType = ToolbarItemTypes.Button,
        ThemedIcon = Application.Current.Resources["App.ThemedIcons.Paste"] as Style
    },        
        new ToolbarItem()
    {
        ItemType = ToolbarItemTypes.Separator,
    },
        new ToolbarItem()
    {
        Label = "Rename",
        ItemType = ToolbarItemTypes.Button,
        ThemedIcon = Application.Current.Resources["App.ThemedIcons.Rename"] as Style
    },
        new ToolbarItem()
    {
        Label = "Refresh",
        ItemType = ToolbarItemTypes.Button,
        ThemedIcon = Application.Current.Resources["App.ThemedIcons.Refresh"] as Style
    },
        new ToolbarItem()
    {
        ItemType = ToolbarItemTypes.Separator,
    },
    new ToolbarItem()
    {
        Label = "Cut",
        ItemType = ToolbarItemTypes.ToggleButton,
        ThemedIcon = Application.Current.Resources["App.ThemedIcons.Cut"] as Style
    },
    new ToolbarItem()
    {
        Label = "Copy",
        ItemType = ToolbarItemTypes.ToggleButton,
        ThemedIcon = Application.Current.Resources["App.ThemedIcons.Copy"] as Style
    },
    new ToolbarItem()
    {
        Label = "Paste",
        ItemType = ToolbarItemTypes.ToggleButton,
        ThemedIcon = Application.Current.Resources["App.ThemedIcons.Paste"] as Style
    },
};
```

![Toolbar](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/Toolbar.png)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
