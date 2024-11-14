---
title: Empty
---

A simple ContentControl to display on a page where there is no information

```c#
public class Empty : ContentControl
```

# Attributes

|Name|Use|
|-|-|
|Description|Get or set Description Text|
|Logo|Get or set Logo|
|ShowEmpty|Show or Hide Empty View|

{% note info %}
These controls will display an empty view if you set `hc:Empty.ShowEmpty="true"`

- ListBox
- DataGrid
- TreeView
- ComboBox
- CheckComboBox
- ListView

{% endnote %}

# Case

```xml
<ListBox hc:Empty.ShowEmpty="true"/>
```
or 

```xml
<hc:ToggleBlock IsChecked="{Binding ElementName=lst, Path=HasItems, Mode=OneWay}" VerticalContentAlignment="Stretch" HorizontalContentAlignment="Stretch">
    <hc:ToggleBlock.CheckedContent>
        <ListBox Name="lst"/>
    </hc:ToggleBlock.CheckedContent>
    <hc:ToggleBlock.UnCheckedContent>
        <hc:Empty hc:Empty.ShowEmpty="true"/>
        <!-- OR -->
        <!-- 
         <hc:Empty Description="No Data" hc:Empty.ShowEmpty="true">
            <hc:Empty.Logo>
                <Path Data="{DynamicResource EmptyGeometry}"/>
            </hc:Empty.Logo>
        </hc:Empty>
         -->
    </hc:ToggleBlock.UnCheckedContent>
</hc:ToggleBlock>
```

![Empty](https://user-images.githubusercontent.com/9213496/104848126-cbd80e00-58f8-11eb-9a79-6e9285cbd06e.png)
