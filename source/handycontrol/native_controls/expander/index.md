---
title: Expander
---

# Styles

|Name|
|-|
|ExpanderBaseStyle|
|Expander.Small|

# ExpanderBaseStyle

Expander Expand Box The default style, which is not recommended for direct use, should always be used by other styles in the BasedOn method.

{% note info no-icon %}

Example:
{% code lang:xml %}
<StackPanel Margin="32" VerticalAlignment="Center" Width="240">
    <Expander Header="Title" BorderThickness="1,1,1,0" BorderBrush="{DynamicResource BorderBrush}">
        <Border Height="100" Background="{DynamicResource SecondaryRegionBrush}"/>
    </Expander>
    <Expander Header="Title" BorderThickness="1,1,1,0" BorderBrush="{DynamicResource BorderBrush}">
        <Border Height="100" Background="{DynamicResource SecondaryRegionBrush}"/>
    </Expander>
    <Expander Header="Title" BorderThickness="1,1,1,0" BorderBrush="{DynamicResource BorderBrush}">
        <Border Height="100" Background="{DynamicResource SecondaryRegionBrush}"/>
    </Expander>
    <Expander Header="Title" BorderThickness="1" BorderBrush="{DynamicResource BorderBrush}">
        <Border Height="100" Background="{DynamicResource SecondaryRegionBrush}"/>
    </Expander>
</StackPanel>
{% endcode %}

![ExpanderBaseStyle](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/ExpanderBaseStyle.png)

{% endnote %}