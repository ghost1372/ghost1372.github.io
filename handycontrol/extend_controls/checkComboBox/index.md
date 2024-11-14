---
title: CheckComboBox
---

Optionally select combo boxes for multiple items.

```cs
[TemplatePart(Name = ElementPanel, Type = typeof(Panel))]
[TemplatePart(Name = ElementSelectAll, Type = typeof(CheckComboBoxItem))]
public class CheckComboBox : ListBox, IDataInput
```

# Attributes
|Property|Description|Default Value|Remarks|
|-|-|-|-|
|MaxDropDownHeight|The maximum height of the drop-down content|||
|IsDropDownOpen|Whether the drop-down box is expanded|false||
|TagStyle|Check mark style|||
|ShowSelectAllButton|Whether to show all selected buttons|false|||

# Additional attributes
|Property|Description|Default Value|Remarks|
|-|-|-|-|
|InfoElement.Placeholder|Placeholder|||
|InfoElement.Necessary|Is it required|false||
|InfoElement.Symbol|Required mark|●||
|InfoElement.ContentHeight|Content Height|30|Available when the title is above|
|InfoElement.MinContentHeight|Minimum content height|30|Available when the title is on the top|
|TitleElement.Title|Title|||
|TitleElement.TitlePlacement|Title Alignment|TitlePlacementType.Top||
|TitleElement.TitleWidth|TitleWidth|120||
|DropDownElement.ConsistentWidth|Whether the drop-down content is the same as the width of the drop-down box|false|||
|IsReadOnly|||||
# Style
|Style|Description|
|-|-|
|CheckComboBoxBaseStyle|Default Style|
|CheckComboBoxExtendBaseStyle|Default extended style|
|CheckComboBoxPlusBaseStyle|Default Enhanced Style|
|CheckComboBoxExtend|Extended Style|
|CheckComboBoxPlus|Enhanced Style|
|Tag4CheckComboBoxStyle.Small|
|CheckComboBox.Small|
|CheckComboBoxExtend.Small|
|CheckComboBoxPlus.Small|
|CheckComboBoxItem.Small|

# Case

```xml
<hc:CheckComboBox>
    <hc:CheckComboBoxItem Content="Item 1"/>
    <hc:CheckComboBoxItem Content="Item 2"/>
    <hc:CheckComboBoxItem Content="Item 3"/>
</hc:CheckComboBox>

```
Or

```xml
<StackPanel Margin="32" Orientation="Horizontal">
    <StackPanel>
        <hc:CheckComboBox ShowClearButton="True" MaxWidth="380" ItemsSource="{Binding DataList}" ShowSelectAllButton="True"/>
        <hc:CheckComboBox MaxWidth="380" ItemsSource="{Binding DataList}" Style="{StaticResource CheckComboBoxExtend}" Margin="0,16,0,0"  IsEnabled="False" ShowSelectAllButton="True"/>
        <hc:CheckComboBox ShowClearButton="True" MaxWidth="380" ItemsSource="{Binding DataList}" Style="{StaticResource CheckComboBoxExtend}" hc:InfoElement.Title="TitleDemoStr1" Margin="0,32,0,0" ShowSelectAllButton="True"/>
        <hc:CheckComboBox MaxWidth="380" ItemsSource="{Binding DataList}" hc:InfoElement.Placeholder="PlsEnterContent" hc:InfoElement.Title="TitleDemoStr2" Style="{StaticResource CheckComboBoxExtend}" hc:InfoElement.Necessary="True" Margin="0,16,0,0"/>
        <hc:CheckComboBox ShowClearButton="True" Width="380" ItemsSource="{Binding DataList}" hc:InfoElement.TitleWidth="140" hc:InfoElement.TitlePlacement="Left" Style="{StaticResource CheckComboBoxExtend}" hc:InfoElement.Title="TitleDemoStr3" Margin="0,32,0,0" ShowSelectAllButton="True"/>
        <hc:CheckComboBox Width="380" ItemsSource="{Binding DataList}" hc:InfoElement.TitleWidth="140" hc:InfoElement.TitlePlacement="Left" hc:InfoElement.Placeholder="PlsEnterContent" hc:InfoElement.Title="TitleDemoStr3" Style="{StaticResource CheckComboBoxExtend}" hc:InfoElement.Necessary="True" Margin="0,16,0,0"/>
    </StackPanel>
    <StackPanel Margin="32,0,0,0">
        <hc:CheckComboBox ShowClearButton="True" MaxWidth="380" ItemsSource="{Binding DataList}" Style="{StaticResource CheckComboBoxPlus}" ShowSelectAllButton="True"/>
        <hc:CheckComboBox MaxWidth="380" ItemsSource="{Binding DataList}" Margin="0,16,0,0" IsEnabled="False" Style="{StaticResource CheckComboBoxPlus}"/>
        <hc:CheckComboBox MaxWidth="380" ShowClearButton="True" ItemsSource="{Binding DataList}" Style="{StaticResource CheckComboBoxPlus}" hc:InfoElement.Title="TitleDemoStr1" Margin="0,32,0,0" ShowSelectAllButton="True"/>
        <hc:CheckComboBox MaxWidth="380" ItemsSource="{Binding DataList}" hc:InfoElement.Placeholder="PlsEnterContent" hc:InfoElement.Title="TitleDemoStr2" Style="{StaticResource CheckComboBoxPlus}" hc:InfoElement.Necessary="True" Margin="0,16,0,0"/>
        <hc:CheckComboBox MaxWidth="380" ItemsSource="{Binding DataList}" ShowClearButton="True" Width="380" hc:InfoElement.TitleWidth="140" hc:InfoElement.TitlePlacement="Left" Style="{StaticResource CheckComboBoxPlus}" hc:InfoElement.Title="TitleDemoStr3" Margin="0,32,0,0" ShowSelectAllButton="True"/>
        <hc:CheckComboBox MaxWidth="380" ItemsSource="{Binding DataList}" Width="380" hc:InfoElement.TitleWidth="140" hc:InfoElement.TitlePlacement="Left" hc:InfoElement.Placeholder="PlsEnterContent" hc:InfoElement.Title="TitleDemoStr3" Style="{StaticResource CheckComboBoxPlus}" hc:InfoElement.Necessary="True" Margin="0,16,0,0"/>
    </StackPanel>
</StackPanel>
```

![CheckComboBox](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Resources/CheckComboBox.png)