---
title: DataGrid
---
# Style
| Name | Type | Description |
| - | - | - |
| RowHeaderGripperStyle | Thumb | Row Header Drag Strip Style |
| ColumnHeaderGripperStyle | Thumb | Column Header Drag Style |
| DataGridCellStyle | DataGridCell | Cell Style |
| DataGridRowStyle | DataGridRow | Line Style |
| DataGridColumnHeaderStyle | DataGridColumnHeader | Column Header Style |
| DataGridRowHeaderStyle | DataGridRowHeader | Row Header Style |
| DataGridComboBoxColumnStyle | ComboBox | ComboBox Non-Edit Mode Style |
| DataGridEditingComboBoxColumnStyle | ComboBox | |
| DataGridEditingComboBoxColumnStyle.Small | ComboBox | |
| DataGridEditingTextColumnStyle | TextBox | |
| DataGridEditingTextColumnStyle.Small | TextBox | |
| DataGridTextColumnStyle | TextBlock | Default Text Style |

{% note info no-icon %}
Example：

{% code lang:xml %}
<DataGrid HeadersVisibility="All" RowHeaderWidth="60" AutoGenerateColumns="False" ItemsSource="{Binding DataList}">
    <DataGrid.RowHeaderTemplate>
        <DataTemplate>
            <CheckBox IsChecked="{Binding IsSelected,RelativeSource={RelativeSource AncestorType=DataGridRow}}"/>
        </DataTemplate>
    </DataGrid.RowHeaderTemplate>
    <DataGrid.Columns>
        <DataGridTextColumn IsReadOnly="True" Width="80" CanUserResize="False" Binding="{Binding Index}" Header="Index"/>
        <DataGridTemplateColumn Width="60" CanUserResize="False">
            <DataGridTemplateColumn.CellTemplate>
                <DataTemplate>
                    <Image Source="{Binding ImgPath}" Width="32" Height="32" Stretch="Uniform"/>
                </DataTemplate>
            </DataGridTemplateColumn.CellTemplate>
        </DataGridTemplateColumn>
        <DataGridTextColumn Width="1*" Binding="{Binding Name}" Header="Name"/>
        <DataGridCheckBoxColumn Width="100" CanUserResize="False" Binding="{Binding IsSelected}" Header="Selected"/>
        <DataGridComboBoxColumn ItemsSource="{Binding Source={StaticResource DemoTypes}}" Width="100" CanUserResize="False" SelectedValueBinding="{Binding Type}" Header="Type"/>
        <DataGridTextColumn Width="1*" Binding="{Binding Remark}" Header="Remark"/>
    </DataGrid.Columns>
</DataGrid>
{% endcode %}

![DataGrid](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Resources/DataGrid.png)

{% endnote %}

# FAQ
{% note warning no-icon%}
For the text display column `DataGridTextColumn`, you need to set the text content `horizontal centered` or `horizontal right', instead of the default style set in HandyControl as `left left`, you need to inherit the `DataGridCellStyle` override `HorizontalContentAlignment` attribute. For `Center` or `Right`, it should be noted that this method is only applicable to projects that have introduced the HandControl resource style. This is not valid for normal native DataGrids.

{% endnote %}

Use for example:

```xml
<Style x:Key="DataGridTextCenterColumnStyle" TargetType="DataGridCell" BasedOn="{StaticResource DataGridCellStyle}">
    <Setter Property="HorizontalContentAlignment" Value="Center"/>
</Style>
```

```xml
<DataGrid ItemsSource="{Binding Datas}" AutoGenerateColumns="False">
    <DataGrid.Columns>
        <DataGridTextColumn Header="Left" Binding="{Binding Name}" Width="*"/>
        <DataGridTextColumn Header="Centered" CellStyle="{StaticResource DataGridTextCenterColumnStyle}" Width="*" Binding="{Binding Name}"/>
​    </DataGrid.Columns>
</DataGrid>
```

The effect is as follows:

![DataGridWarning01](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/DataGrid-Warning01.png)

{% note info %}
if you want to generate row numbers you should use DataGridAttach Attached Property.

First Remove `DataGrid.RowHeaderTemplate` Then add this Attached Property
{% code lang:xml %}
<DataGrid hc:DataGridAttach.ShowRowNumber="True"/>
{% endcode %}
{% endnote %}

![DataGridShowRowNumber](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Resources/DataGrid.png)