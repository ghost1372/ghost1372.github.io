---
title: BreadcrumbBar
---

# BreadcrumbBarItem 
## Property

|Name|
|-|
|RootItem|
|ItemsSource|
|ItemTemplate|
|EllipsisButtonToolTip|
|RootItemToolTip|
|RootItemChevronToolTip|

# BreadcrumbBarItem
## Property

|Name|
|-|
|IsEllipsis|
|IsLastItem|
|ItemToolTip|
|ChevronToolTip|

# Example

```xml
<dev:BreadcrumbBar EllipsisButtonToolTip="More folders"
                   ItemsSource="{x:Bind Items, Mode=OneWay}"
                   RootItemToolTip="Root Folder" />
```

```cs
public ObservableCollection<BreadcrumbBarItem> Items { get; set; } = new ObservableCollection<BreadcrumbBarItem>
{
    new BreadcrumbBarItem { Content = "Home" },
    new BreadcrumbBarItem { Content = "Documents" },
    new BreadcrumbBarItem { Content = "Projects" },
    new BreadcrumbBarItem { Content = "2026" }
};
```

![BreadcrumbBar](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/BreadcrumbBar.png)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
