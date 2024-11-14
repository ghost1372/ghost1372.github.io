---
title: Pagination
---

When there is too much data, use paging to decompose the data.

```cs
[TemplatePart(Name = ElementButtonLeft, Type = typeof(Button))]
[TemplatePart(Name = ElementButtonRight, Type = typeof(Button))]
[TemplatePart(Name = ElementButtonFirst, Type = typeof(RadioButton))]
[TemplatePart(Name = ElementMoreLeft, Type = typeof(FrameworkElement))]
[TemplatePart(Name = ElementPanelMain, Type = typeof(Panel))]
[TemplatePart(Name = ElementMoreRight, Type = typeof(FrameworkElement))]
[TemplatePart(Name = ElementButtonLast, Type = typeof(RadioButton))]
[TemplatePart(Name = ElementButtonLast, Type = typeof(NumericUpDown))]
public class Pagination : Control
```

# Attributes
|Property|Description|Default Value|Remarks|
|-|-|-|-|
|MaxPageCount|Maximum number of pages|1||
|DataCountPerPage|The amount of data per page|20||
|PageIndex|Page Number|1||
|MaxPageInterval|The maximum distance between the currently selected button and the left and right direction buttons (4 means 4 buttons apart, if it exceeds, it will be indicated by an ellipsis)|3||
|IsJumpEnabled|Whether to display the jump box|false||
|PaginationButtonStyle||||
|AutoHiding|||||


# Events
|Name|Description|
|-|-|
| PageUpdated | Triggered when the page number changes |

# Case

```xml
<hc:Pagination MaxPageCount="10" PageIndex="5" IsJumpEnabled="True"/>
```

![Pagination](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/extend_controls/Pagination.png)

{% note warning %}
When the page number is 1, the whole page number bar will not be displayed.
{% endnote %}

# Full Example

first we create a pagination and a datagrid also we create a `PageUpdated` event for pagiantion
``` xml
<Grid>
    <Grid.RowDefinitions>
        <RowDefinition Height="Auto"/>
        <RowDefinition/>
    </Grid.RowDefinitions>
    
    <hc:Pagination MaxPageCount="10" PageUpdated="page_PageUpdated" PageIndex="1"/>

    <DataGrid Grid.Row="1" AutoGenerateColumns="False" ItemsSource="{Binding DataList}">
        <DataGrid.Columns>
            <DataGridTextColumn Binding="{Binding Index}" Header="Index"/>
            <DataGridTextColumn Binding="{Binding Name}" Header="Name"/>           
        </DataGrid.Columns>
    </DataGrid>
</Grid>
```
for example we load 100 items to a list called `_totalDataList` then we take 10 items to a another list called `DataList` Which is binded on datagrid

``` CS
_totalDataList = dataService.GetDemoDataList(100);
DataList = _totalDataList.Take(10).ToList();
```
now we need update our list based on page so we do this in `PageUpdated` event:

``` CS     
private void page_PageUpdated(object sender, HandyControl.Data.FunctionEventArgs<int> e)
{
    DataList = _totalDataList.Skip((e.Info - 1) * 10).Take(10).ToList();
}
```
