---
title: GroupBox
---

# Styles

|Name|
|-|
|GroupBoxBaseStyle|
|GroupBoxOriginalBaseStyle|
|GroupBoxTabBaseStyle|
|GroupBox.Small|
|GroupBoxOriginal|
|GroupBoxTab|
|GroupBoxTab.Small|

# GroupBoxBaseStyle

The default style of the GroupBox. It is not recommended to use it directly, and it should always be used by other styles as BasedOn.

> [!NOTE]
> Example:
> ```
>      <GroupBox Grid.Row = "0" Grid.Column = "0" Width = "300" Height = "200" Header = "Title"
>          Padding = "10" Margin = "16">
>          <Border Background = "{DynamicResource PrimaryBrush}" CornerRadius = "4">
>              <TextBlock Text = "Content" VerticalAlignment = "Center" HorizontalAlignment = "Center"
>              Foreground = "White" />
>          </Border>
>      </GroupBox>
> ```
>
> ![GroupBoxBaseStyle](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/GroupBox_Base.png)

Here is another style for developers to choose

> [!NOTE]
> Just add extended attributes
> ```
> hc:TitleElement.TitlePlacement="Left"
> ```
> Example:
> ```
>     <GroupBox Grid.Row="0" Grid.Column="1" Width="300" Height="200" Header="Title" Padding="10" 
>         Margin="16"  hc:TitleElement.TitlePlacement="Left">
>         <Border Background="{DynamicResource PrimaryBrush}" CornerRadius="4">
>             <TextBlock Text="Content" VerticalAlignment="Center" HorizontalAlignment="Center" 
>             Foreground="White"/>
>         </Border>
>     </GroupBox>
> ```
>
> ![GroupBox_Base_left](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/GroupBox_Base_left.png)

# GroupBoxTab : GroupBoxTabBaseStyle : GroupBoxBaseStyle

Another style of GroupBox is GroupBoxTabBaseStyle which is not recommended to be used directly, and should always be used by other styles as BasedOn.

> [!NOTE]
> Example:
> ```
>     <GroupBox Grid.Row="1" Grid.Column="0" Width="300" Height="200" Header="Title" Padding="10" 
>         Margin="16" Style="{StaticResource GroupBoxTab}">
>         <Border Background="{DynamicResource PrimaryBrush}" CornerRadius="4">
>             <TextBlock Text="Content" VerticalAlignment="Center" HorizontalAlignment="Center" 
>             Foreground="White"/>
>         </Border>
>     </GroupBox>
> ```
>
> - You can also use extended attributes  ``` hc:TitleElement.TitlePlacement="Left" ```
>
> ![GroupBox_Tab](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/GroupBox_Tab.png) ![GroupBox_Tab_left](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/GroupBox_Tab_left.png)

# GroupBoxOriginal : GroupBoxOriginalBaseStyle : GroupBoxBaseStyle

Another style of GroupBox is GroupBoxOriginalBaseStyle which is not recommended to be used directly, it should always be used by other styles in the way of BasedOn.

> [!NOTE]
> example:
> ```
>     <GroupBox Grid.Row="2" Grid.Column="0" Width="300" Header="Title" Margin="16" 
>         Style="{StaticResource GroupBoxOriginal}" HorizontalContentAlignment="Left">
>         <TextBox/>
>     </GroupBox>
>     <GroupBox Grid.Row="2" VerticalAlignment="Bottom" Grid.Column="1" Width="300" hc:TitleElement.TitleWidth="100"
>         Header="Title" Margin="16" Style="{StaticResource GroupBoxOriginal}"
>         HorizontalContentAlignment="Left" hc:TitleElement.TitlePlacement="Left">
>         <ComboBox DataContext="{Binding ComboBoxDemo,Source={StaticResource Locator}}" ItemsSource="{Binding DataList}"/>
>     </GroupBox>
> ```
>
> ![GroupBox_Origin](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/GroupBox_Origin.png) ![GroupBox_Origin_left](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/GroupBox_Origin_left.png)