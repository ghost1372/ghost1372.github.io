---
title: RadioButton
---

# Styles

|Name|
|-|
|RadioButtonBaseStyle|
|RadioButtonIcon|
|RadioGroupItemDefault|
|RadioGroupItemHorizontalFirst|
|RadioGroupItemHorizontalLast|
|RadioGroupItemSingle|
|RadioGroupItemVerticalFirst|
|RadioGroupItemVerticalLast|
|RadioButtonSameAsButtonBaseStyle|
|RadioButtonSameAsButtonPrimary|
|RadioButtonSameAsButtonSuccess|
|RadioButtonSameAsButtonInfo|
|RadioButtonSameAsButtonWarning|
|RadioButtonSameAsButtonDanger|
|RadioButtonSameAsButtonDefault.Small|
|RadioButtonSameAsButtonPrimary.Small|
|RadioButtonSameAsButtonSuccess.Small|
|RadioButtonSameAsButtonInfo.Small|
|RadioButtonSameAsButtonWarning.Small|
|RadioButtonSameAsButtonDanger.Small|
|RadioButtonIcon.Small|

# RadioButtonBaseStyle

The default style of the radiobutton is not recommended. It should always be used by other styles as BasedOn.

Case:

```xml
<StackPanel>
    <RadioButton Content="Default style"/>
    <RadioButton Margin="0,16,0,0" Content="Not editable" IsChecked="True" IsEnabled="False"/>
    <RadioButton Margin="0,16,0,0" Content="Default style"/>
    <RadioButton Margin="0,16,0,0" Content="Not editable" IsEnabled="False"/>
</StackPanel>
```

effect:

![RadioButton.DefaultStyle](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/RadioButton.DefaultStyle.png)

# RadioButtonIcon : RadioButtonBaseStyle

With icon style, can display only icons or graphics

Case:

```xml
<UniformGrid Margin="22,0,0,0" Rows="2" Columns="2">
    <RadioButton Margin="10,0,0,0" Background="{DynamicResource SecondaryRegionBrush}" hc:IconElement.Geometry="{StaticResource CalendarGeometry}" Style="{StaticResource RadioButtonIcon}" Content="RadioButtonIcon"/>
    <RadioButton Margin="10,0,0,0" Background="{DynamicResource SecondaryRegionBrush}" Style="{StaticResource RadioButtonIcon}" Content="RadioButtonIcon" IsChecked="True"/>
    <RadioButton Margin="10,0,0,0" BorderThickness="1" hc:IconElement.Geometry="{StaticResource CalendarGeometry}" Style="{StaticResource RadioButtonIcon}" Content="RadioButtonIcon"/>
    <RadioButton Margin="10,0,0,0" BorderThickness="1" Style="{StaticResource RadioButtonIcon}" Content="RadioButtonIcon"/>
</UniformGrid>
```

effect:

![RadioButton.IconStyle](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/RadioButton.IconStyle.png)