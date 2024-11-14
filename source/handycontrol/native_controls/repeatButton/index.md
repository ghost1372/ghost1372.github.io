---
title: RepeatButton
---

# RepeatButtonBaseStyle : ButtonBaseBaseStyle

The default style of the repeatButton is not recommended for direct use and should always be used by other styles in the BasedOn mode.

{% note info %}
All repeatButtons that inherit this style can use the additional properties defined in `IconElement` to control the properties of the geometry in the repeatButton.
{% endnote %}

{% note info %}
All repeatButtons that inherit this style can use the `BorderElement.CornerRadius` attached property to control the fillet size of the repeatButton.
{% endnote %}

{% note info no-icon %}
Example:

{% code lang:xml %}
<StackPanel Orientation="Horizontal">
  <RepeatButton Content="This is a RepeatButton"/>
  <RepeatButton Content="This is a RepeatButton" Margin="10,0,0,0" hc:BorderElement.CornerRadius="15"/>
  <RepeatButton Content="This is a RepeatButton" Margin="10,0,0,0"
hc:IconElement.Geometry="{StaticResource GithubGeometry}"/>
</StackPanel>
{% endcode %}

![ButtonBaseStyle](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/ButtonBaseStyle_1.png)

{% endnote %}

# RepeatButtonPrimary : RepeatButtonBaseStyle

Main RepeatButton

{% note info no-icon %}
Example:

{% code lang:xml %}
<StackPanel Orientation="Horizontal">
   <RepeatButton Style="{StaticResource RepeatButtonPrimary}" Content="This is a RepeatButton"/>
   <RepeatButton Style="{StaticResource RepeatButtonPrimary}" Content="This is a RepeatButton" Margin="10,0,0,0" hc:BorderElement.CornerRadius="15"/>
   <RepeatButton Style="{StaticResource RepeatButtonPrimary}" Content="This is a RepeatButton" Margin="10,0,0,0" hc:IconElement.Geometry="{StaticResource GithubGeometry}"/>
</StackPanel>
{% endcode %}

![ButtonPrimary](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/ButtonPrimary_1.png)

{% endnote %}

# RepeatButtonSuccess : RepeatButtonBaseStyle

Success RepeatButton

{% note info no-icon %}
Example：

{% code lang:xml %}
<StackPanel Orientation="Horizontal">
   <RepeatButton Style="{StaticResource RepeatButtonSuccess}" Content="This is a RepeatButton"/>
   <RepeatButton Style="{StaticResource RepeatButtonSuccess}" Content="This is a RepeatButton" Margin="10,0,0,0" hc:BorderElement.CornerRadius="15"/>
   <RepeatButton Style="{StaticResource RepeatButtonSuccess}" Content="This is a RepeatButton" Margin="10,0,0,0" hc:IconElement.Geometry="{StaticResource GithubGeometry}"/>
</StackPanel>
{% endcode %}

![ButtonSuccess](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/ButtonSuccess_1.png)

{% endnote %}

# RepeatRepeatButtonInfo : RepeatButtonBaseStyle

Information RepeatButton

{% note info no-icon %}
Example：

{% code lang:xml %}
<StackPanel Orientation="Horizontal">
  <RepeatButton Style="{StaticResource RepeatButtonInfo}" Content="This is a RepeatButton"/>
  <RepeatButton Style="{StaticResource RepeatButtonInfo}" Content="This is a RepeatButton" Margin="10,0,0,0" hc:BorderElement.CornerRadius="15"/>
  <RepeatButton Style="{StaticResource RepeatButtonInfo}" Content="This is a RepeatButton" Margin="10,0,0,0" hc:IconElement.Geometry="{StaticResource GithubGeometry}"/>
</StackPanel>
{% endcode %}

![ButtonInfo](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/ButtonInfo_1.png)

{% endnote %}

# RepeatButtonWarning : RepeatButtonBaseStyle

Warning RepeatButton

{% note info no-icon %}
Example：

{% code lang:xml %}
<StackPanel Orientation="Horizontal">
    <RepeatButton Style="{StaticResource RepeatButtonWarning}" Content="This is a RepeatButton"/>
    <RepeatButton Style="{StaticResource RepeatButtonWarning}" Content="This is a RepeatButton" Margin="10,0,0,0" hc:BorderElement.CornerRadius="15"/>
    <RepeatButton Style="{StaticResource RepeatButtonWarning}" Content="This is a RepeatButton" Margin="10,0,0,0" hc:IconElement.Geometry="{StaticResource GithubGeometry}"/>
</StackPanel>
{% endcode %}

![ButtonWarning](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/ButtonWarning_1.png)

{% endnote %}

# RepeatButtonDanger : RepeatButtonBaseStyle

Danger RepeatButton

{% note info no-icon %}
Example：

{% code lang:xml %}
<StackPanel Orientation="Horizontal">
    <RepeatButton Style="{StaticResource RepeatButtonDanger}" Content="This is a RepeatButton"/>
    <RepeatButton Style="{StaticResource RepeatButtonDanger}" Content="This is a RepeatButton" Margin="10,0,0,0" hc:BorderElement.CornerRadius="15"/>
    <RepeatButton Style="{StaticResource RepeatButtonDanger}" Content="This is a RepeatButton" Margin="10,0,0,0" hc:IconElement.Geometry="{StaticResource GithubGeometry}"/>
</StackPanel>
{% endcode %}

![ButtonDanger](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/ButtonDanger_1.png)

{% endnote %}

# RepeatButtonDefault : RepeatButtonBaseStyle

Default RepeatButton

{% note info no-icon %}
Example：

{% code lang:xml %}
<StackPanel Orientation="Horizontal">
    <RepeatButton Style="{StaticResource RepeatButtonDefault}" Content="This is a RepeatButton"/>
    <RepeatButton Style="{StaticResource RepeatButtonDefault}" Content="This is a RepeatButton" Margin="10,0,0,0" hc:BorderElement.CornerRadius="15"/>
    <RepeatButton Style="{StaticResource RepeatButtonDefault}" Content="This is a RepeatButton" Margin="10,0,0,0" hc:IconElement.Geometry="{StaticResource GithubGeometry}"/>
</StackPanel>
{% endcode %}

{% endnote %}

# RepeatButtonIcon : RepeatButtonBaseStyle

This style is recommended if you only want to display the geometry RepeatButton.

{% note info no-icon %}
Example：

{% code lang:xml %}
<StackPanel Orientation="Horizontal">
    <RepeatButton Style="{StaticResource RepeatButtonIcon}" Foreground="Black" hc:IconElement.Geometry="{StaticResource UpDownGeometry}"/>
    <RepeatButton Style="{StaticResource RepeatButtonIcon}" Background="Black" Foreground="White" hc:BorderElement.CornerRadius="15" hc:IconElement.Geometry="{StaticResource UpDownGeometry}" Margin="10,0,0,0"/>
    <RepeatButton Style="{StaticResource RepeatButtonIcon}" BorderThickness="1" BorderBrush="Black" Foreground="Black" hc:IconElement.Geometry="{StaticResource UpDownGeometry}" Margin="10,0,0,0"/>
</StackPanel>
{% endcode %}

![ButtonIcon](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/ButtonIcon_1.png)

{% endnote %}

# RepeatButtonCustom

This style is recommended if you want to fully customize the content of the RepeatButton. The content in `RepeatButtonCustom` is entirely up to you. In addition, you can switch the background with additional properties in `BackgroundSwitchElement`:

{% note info no-icon %}
Example：

{% code lang:xml %}
<RepeatButton Height="30" Padding="10,0" Background="Black" Foreground="White" Content="This is a RepeatButton" Style="{StaticResource RepeatButtonCustom}" hc:BackgroundSwitchElement.MouseHoverBackground="Red" hc:BackgroundSwitchElement.MouseDownBackground="PaleVioletRed"/>
{% endcode %}

![ButtonCustom](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/ButtonCustom_1.gif)

{% endnote %}

# Styles
| Style |
| - |
| RepeatButtonPrimary  | 
| RepeatButtonInfo  | 
| RepeatButtonDanger  | 
| RepeatButtonWarning  | 
| RepeatButtonDefault | 
| RepeatButtonSuccess  | 
| RepeatButtonIcon  | 
| RepeatButtonIconCircular  | 
| RepeatButtonDashed  | 
| RepeatButtonDashedPrimary  | 
| RepeatButtonDashedSuccess  | 
| RepeatButtonDashedInfo  | 
| RepeatButtonDashedWarning  | 
| RepeatButtonDashedDanger  | 
| RepeatButtonCustom  | 
| RepeatButtonGroupItemDefault  | 
| RepeatButtonGroupItemHorizontalFirst  | 
| RepeatButtonGroupItemHorizontalLast  | 
| RepeatButtonGroupItemSingle |
| RepeatButtonGroupItemVerticalFirst |
| RepeatButtonGroupItemVerticalLast |
|RepeatButtonDefault.Small|
|RepeatButtonPrimary.Small|
|RepeatButtonInfo.Small|
|RepeatButtonDanger.Small|
|RepeatButtonWarning.Small|
|RepeatButtonSuccess.Small|
|RepeatButtonIcon.Small|
|RepeatButtonIconCircular.Small|
|RepeatButtonDashed.Small|
|RepeatButtonDashedPrimary.Small|
|RepeatButtonDashedSuccess.Small|
|RepeatButtonDashedInfo.Small|
|RepeatButtonDashedWarning.Small|
|RepeatButtonDashedDanger.Small|
