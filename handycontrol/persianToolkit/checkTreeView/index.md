---
title: CheckTreeView
---
TreeView Control with Checkbox

example:

``` xml
<hc:CheckTreeView Margin="10" ItemsSource="{Binding TreeRoot}"/>
```

now you need to create observablecollection

``` CS
public ObservableCollection<CheckTreeView> TreeRoot { get; set; } = new ObservableCollection<CheckTreeView>();

CheckTreeView item = new CheckTreeView() { Text = "Item 1", IsChecked = false, CTag = "TAG" };

CheckTreeView subItem1 = new CheckTreeView() { Text = "SubItem 1", IsChecked = false, CTag = "TAG" };
CheckTreeView subItem2 = new CheckTreeView() { Text = "SubItem 2", IsChecked = false, CTag = "TAG" };
item.Add(subItem1);
item.Add(subItem2);
TreeRoot.Add(item);
```

![CheckTreeView](https://raw.githubusercontent.com/ghost1372/Resources/main/HandyControls/Docs/CheckTreeView.png)