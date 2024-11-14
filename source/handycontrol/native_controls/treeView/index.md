---
title: TreeView
---

# TreeViewBaseStyle : BaseStyle

The default style of the treeview is not recommended. It should always be used by other styles in the BasicOn mode.

Case:

 ```xml
<TreeView Width="200" VerticalAlignment="Center">
    <TreeViewItem Header="111">
        <TreeViewItem Header="111"/>
        <TreeViewItem Header="222"/>
        <TreeViewItem Header="333"/>
    </TreeViewItem>
    <TreeViewItem Header="222">
        <TreeViewItem Header="111"/>
        <TreeViewItem Header="222"/>
        <TreeViewItem Header="333"/>
    </TreeViewItem>
</TreeView>
 ```

effect:

![TreeViewBaseStyle](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/TreeViewBaseStyle.png)

# Related styles

| Name | Inherited from | Description |
|-|-|-|
| TreeViewItemBaseStyle | BaseStyle | Tree View Item Default Style |
| ExpandCollapseToggleStyle | | Treeview Collapse Button Style |
|TreeViewItemBaseStyle.Small|||
|TreeView.Small|||