---
title: ContextMenu 
---

# Styles

|Name|
|-|
|ContextMenu.Small|

# ContextMenuBaseStyle

The default style of the context menu is not recommended for direct use and should always be used by other styles in the BasedOn mode.

> [!NOTE]
> Example：
>
> ```
> <ContextMenu ItemsSource="{Binding DataList}">
>     <ContextMenu.ItemTemplate>
>         <HierarchicalDataTemplate ItemsSource="{Binding DataList}">
>             <TextBlock Text="{Binding Name}"/>
>         </HierarchicalDataTemplate>
>     </ContextMenu.ItemTemplate>
> </ContextMenu>
> ```
>
> ![ContextMenu](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Resources/ContextMenu.png)