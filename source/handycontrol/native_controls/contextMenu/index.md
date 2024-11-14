---
title: ContextMenu 
---

# Styles

|Name|
|-|
|ContextMenu.Small|

# ContextMenuBaseStyle

The default style of the context menu is not recommended for direct use and should always be used by other styles in the BasedOn mode.

{% note info no-icon %}
Example：

{% code lang:xml %}
<ContextMenu ItemsSource="{Binding DataList}">
    <ContextMenu.ItemTemplate>
        <HierarchicalDataTemplate ItemsSource="{Binding DataList}">
            <TextBlock Text="{Binding Name}"/>
        </HierarchicalDataTemplate>
    </ContextMenu.ItemTemplate>
</ContextMenu>
{% endcode %}

![ContextMenu](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Resources/ContextMenu.png)

{% endnote %}