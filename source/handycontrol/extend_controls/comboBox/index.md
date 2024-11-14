---
title: ComboBox
---

HC extension of native combobox.

```cs
public class ComboBox : System.Windows.Controls.ComboBox, IDataInput
```
# Attributes
|Property|Description|Default Value|Remarks|
|-|-|-|-|
|AutoComplete|Whether to automatically complete the input|false||
|SelectionTextBrush||||
|SelectionOpacity||||
|SelectionBrush||||
|CaretBrushProperty||||


# Additional attributes
|Attribute|Description|Default Value|Remarks|
|-|-|-|-|
|InfoElement.Placeholder|Placeholder|||
|InfoElement.Necessary|Is it required|false||
|InfoElement.Symbol|Required mark|●||
|InfoElement.ContentHeight|Content Height|30|Available when the title is above|
|InfoElement.MinContentHeight|Minimum content height|30|Available when the title is on top|
|TitleElement.Title|Title|||
|TitleElement.TitlePlacement|Title Alignment|TitlePlacementType.Top||
|TitleElement.TitleWidth|TitleWidth|120||
|DropDownElement.ConsistentWidth|Whether the drop-down content is the same as the width of the drop-down box|false|||

# Style
|Style|Description|
|-|-|
|ComboBoxPlusBaseStyle|Default Style|
|ComboBoxPlus.Small||

# Case
The native functions behave the same on the extended ComboBox.

```xml
<hc:ComboBox>
    <hc:ComboBoxItem Content="Item 1"/>
    <hc:ComboBoxItem Content="Item 2"/>
    <hc:ComboBoxItem Content="Item 3"/>
</hc:ComboBox>

```
Or

```xml
<StackPanel Margin="32">
    <hc:ComboBox ShowClearButton="True" ItemsSource="{Binding DataList}" SelectedIndex="0"/>
    <hc:ComboBox ItemsSource="{Binding DataList}" Margin="0,16,0,0" SelectedIndex="0" IsEnabled="False"/>
    <hc:ComboBox ShowClearButton="True" ItemsSource="{Binding DataList}" SelectedIndex="0" Margin="0,16,0,0" IsEditable="True"/>
    <hc:ComboBox ItemsSource="{Binding DataList}" SelectedIndex="0" hc:InfoElement.Title="This is the title" Margin="0,32,0,0" Text="This is the content"/>
    <hc:ComboBox ShowClearButton="True" ItemsSource="{Binding DataList}" hc:InfoElement.Placeholder="This is placeholder" hc:InfoElement.Title="This is the title" hc:InfoElement.Necessary="True" Margin="0,32,0,0"/>
    <hc:ComboBox ItemsSource="{Binding DataList}" IsEditable="True" SelectedIndex="0" hc:InfoElement.Title="This is the title" Margin="0,32,0,0" Text="This is the content"/>
    <hc:ComboBox AutoComplete="True" ShowClearButton="True" ItemsSource="{Binding DataList}" IsEditable="True" hc:InfoElement.Placeholder="This is placeholder" hc:InfoElement.Title="This is the title" hc:InfoElement.Necessary="True" Margin="0,32,0,0"/>
    <hc:ComboBox ItemsSource="{Binding DataList}" Width="380" hc:InfoElement.TitleWidth="140" hc:InfoElement.TitlePlacement="Left" hc:InfoElement.Title="This is the title" Margin="0,32,0,0" Text="This is the content"/>
    <hc:ComboBox ShowClearButton="True" ItemsSource="{Binding DataList}" Width="380" hc:InfoElement.TitleWidth="140" hc:InfoElement.Placeholder="This is placeholder" hc:InfoElement.TitlePlacement="Left" hc:InfoElement.Title="This is the title" hc:InfoElement.Necessary="True" Margin="0,32,0,0"/>
    <hc:ComboBox ItemsSource="{Binding DataList}" IsEditable="True" Width="380" hc:InfoElement.TitleWidth="140" hc:InfoElement.TitlePlacement="Left" hc:InfoElement.Title="This is the title" Margin="0,32,0,0" Text="This is the content"/>
    <hc:ComboBox AutoComplete="True" ShowClearButton="True" ItemsSource="{Binding DataList}" IsEditable="True" Width="380" hc:InfoElement.TitleWidth="140" hc:InfoElement.Placeholder="This is placeholder" hc:InfoElement.TitlePlacement="Left" hc:InfoElement.Title="This is the title" hc:InfoElement.Necessary="True" Margin="0,32,0,0"/>
</StackPanel>
```
![ComboBox](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/extend_controls/ComboBox_1.png)