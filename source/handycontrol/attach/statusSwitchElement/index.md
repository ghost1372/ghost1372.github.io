---
title: StatusSwitchElement
---

# Attributes

| Name | Use |
| -------------------- | ---------------- |
| CheckedElement | Elements displayed when selected |
| HideUncheckedElement | Hide Elements |

# Use Cases

## CheckedElement The element that is displayed when selected

This additional property applies to the `ToggleButton` and subclass controls, which are used to control what needs to be displayed when the selection class control is selected. The default value is `False` and is not displayed.

```xml
    <ToggleButton Style="{DynamicResource ToggleButtonCustom}" Margin="5">
        <!--Checked-->
        <hc:StatusSwitchElement.CheckedElement>
            <Border Width="60" Height="20" CornerRadius="4" BorderThickness="1" BorderBrush="{DynamicResource BorderBrush}">
                <Ellipse Width="20" Height="20" Fill="{DynamicResource PrimaryBrush}" StrokeThickness="1" Stroke="{DynamicResource BorderBrush}"/>
            </Border>
        </hc:StatusSwitchElement.CheckedElement>
        <!--Default-->
        <Border Width="80" Height="30" CornerRadius="0" BorderThickness="1" BorderBrush="{DynamicResource BorderBrush}">
            <Ellipse Width="20" Height="20" Fill="{DynamicResource BorderBrush}" StrokeThickness="1" Stroke="{DynamicResource BorderBrush}"/>
        </Border>
    </ToggleButton>
```

effect:

Default state (when not selected) and selected state

![StatusSwitchElement.CheckedElement](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/attach/StatusSwitchElement.CheckedElement.png)

## HideUncheckedElement Whether to hide elements

Whether to hide the default content when the control is selected, the default value is `False`, not hidden

```xml
<StackPanel VerticalAlignment="Center" HorizontalAlignment="Center">
    <ToggleButton IsChecked="True" Style="{DynamicResource ToggleButtonCustom}" Margin="5">
        <!--Checked-->
        <hc:StatusSwitchElement.CheckedElement>
            <Border Width="60" Height="20" CornerRadius="0" BorderThickness="1" BorderBrush="{DynamicResource BorderBrush}">
                 <Ellipse Width="18" Height="18" Fill="{DynamicResource PrimaryBrush}"/>
            </Border>
        </hc:StatusSwitchElement.CheckedElement>
        <!--Default-->
        <Border Width="80" Height="30" CornerRadius="0" BorderThickness="1" BorderBrush="{DynamicResource BorderBrush}">
            <Ellipse Width="18" Height="18" Fill="{DynamicResource BorderBrush}"/>
        </Border>
    </ToggleButton>
<!--Explicitly set the hidden default content element when selected-->
 <ToggleButton IsChecked="True" Style="{DynamicResource ToggleButtonCustom}" hc:StatusSwitchElement.HideUncheckedElement="True" Margin="5">
        <!--Checked-->
        <hc:StatusSwitchElement.CheckedElement>
            <Border Width="60" Height="20" CornerRadius="0" BorderThickness="1" BorderBrush="{DynamicResource BorderBrush}">
                <Ellipse Width="18" Height="18" Fill="{DynamicResource PrimaryBrush}"/>
            </Border>
        </hc:StatusSwitchElement.CheckedElement>
        <!--Default-->
        <Border Width="80" Height="30" CornerRadius="0" BorderThickness="1" BorderBrush="{DynamicResource BorderBrush}">
            <Ellipse Width="18" Height="18" Fill="{DynamicResource BorderBrush}"/>
        </Border>
    </ToggleButton>
</StackPanel>
```

effect:

![StatusSwitchElement.HideUncheckedElement](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/attach/StatusSwitchElement.HideUncheckedElement.png)

{% note info no-icon %}

The above two attributes are used in combination, which can easily control the display function of the state of the selected class control, and can be reasonably adjusted according to the above cases.

{% endnote %}