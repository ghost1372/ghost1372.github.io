---
title: RepeatButton
---

# RepeatButtonBaseStyle : ButtonBaseBaseStyle

The default style of the repeatButton is not recommended for direct use and should always be used by other styles in the BasedOn mode.

> [!NOTE]
> All repeatButtons that inherit this style can use the additional properties defined in `IconElement` to control the properties of the geometry in the repeatButton.

> [!NOTE]
> All repeatButtons that inherit this style can use the `BorderElement.CornerRadius` attached property to control the fillet size of the repeatButton.

> [!NOTE]
> Example:
>
> ```
> <StackPanel Orientation="Horizontal">
>   <RepeatButton Content="This is a RepeatButton"/>
>   <RepeatButton Content="This is a RepeatButton" Margin="10,0,0,0" hc:BorderElement.CornerRadius="15"/>
>   <RepeatButton Content="This is a RepeatButton" Margin="10,0,0,0"
> hc:IconElement.Geometry="{StaticResource GithubGeometry}"/>
> </StackPanel>
> ```
>
> ![ButtonBaseStyle](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/ButtonBaseStyle_1.png)

# RepeatButtonPrimary : RepeatButtonBaseStyle

Main RepeatButton

> [!NOTE]
> Example:
>
> ```
> <StackPanel Orientation="Horizontal">
>    <RepeatButton Style="{StaticResource RepeatButtonPrimary}" Content="This is a RepeatButton"/>
>    <RepeatButton Style="{StaticResource RepeatButtonPrimary}" Content="This is a RepeatButton" Margin="10,0,0,0" hc:BorderElement.CornerRadius="15"/>
>    <RepeatButton Style="{StaticResource RepeatButtonPrimary}" Content="This is a RepeatButton" Margin="10,0,0,0" hc:IconElement.Geometry="{StaticResource GithubGeometry}"/>
> </StackPanel>
> ```
>
> ![ButtonPrimary](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/ButtonPrimary_1.png)

# RepeatButtonSuccess : RepeatButtonBaseStyle

Success RepeatButton

> [!NOTE]
> Example：
>
> ```
> <StackPanel Orientation="Horizontal">
>    <RepeatButton Style="{StaticResource RepeatButtonSuccess}" Content="This is a RepeatButton"/>
>    <RepeatButton Style="{StaticResource RepeatButtonSuccess}" Content="This is a RepeatButton" Margin="10,0,0,0" hc:BorderElement.CornerRadius="15"/>
>    <RepeatButton Style="{StaticResource RepeatButtonSuccess}" Content="This is a RepeatButton" Margin="10,0,0,0" hc:IconElement.Geometry="{StaticResource GithubGeometry}"/>
> </StackPanel>
> ```
>
> ![ButtonSuccess](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/ButtonSuccess_1.png)

# RepeatRepeatButtonInfo : RepeatButtonBaseStyle

Information RepeatButton

> [!NOTE]
> Example：
>
> ```
> <StackPanel Orientation="Horizontal">
>   <RepeatButton Style="{StaticResource RepeatButtonInfo}" Content="This is a RepeatButton"/>
>   <RepeatButton Style="{StaticResource RepeatButtonInfo}" Content="This is a RepeatButton" Margin="10,0,0,0" hc:BorderElement.CornerRadius="15"/>
>   <RepeatButton Style="{StaticResource RepeatButtonInfo}" Content="This is a RepeatButton" Margin="10,0,0,0" hc:IconElement.Geometry="{StaticResource GithubGeometry}"/>
> </StackPanel>
> ```
>
> ![ButtonInfo](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/ButtonInfo_1.png)

# RepeatButtonWarning : RepeatButtonBaseStyle

Warning RepeatButton

> [!NOTE]
> Example：
>
> ```
> <StackPanel Orientation="Horizontal">
>     <RepeatButton Style="{StaticResource RepeatButtonWarning}" Content="This is a RepeatButton"/>
>     <RepeatButton Style="{StaticResource RepeatButtonWarning}" Content="This is a RepeatButton" Margin="10,0,0,0" hc:BorderElement.CornerRadius="15"/>
>     <RepeatButton Style="{StaticResource RepeatButtonWarning}" Content="This is a RepeatButton" Margin="10,0,0,0" hc:IconElement.Geometry="{StaticResource GithubGeometry}"/>
> </StackPanel>
> ```
>
> ![ButtonWarning](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/ButtonWarning_1.png)

# RepeatButtonDanger : RepeatButtonBaseStyle

Danger RepeatButton

> [!NOTE]
> Example：
>
> ```
> <StackPanel Orientation="Horizontal">
>     <RepeatButton Style="{StaticResource RepeatButtonDanger}" Content="This is a RepeatButton"/>
>     <RepeatButton Style="{StaticResource RepeatButtonDanger}" Content="This is a RepeatButton" Margin="10,0,0,0" hc:BorderElement.CornerRadius="15"/>
>     <RepeatButton Style="{StaticResource RepeatButtonDanger}" Content="This is a RepeatButton" Margin="10,0,0,0" hc:IconElement.Geometry="{StaticResource GithubGeometry}"/>
> </StackPanel>
> ```
>
> ![ButtonDanger](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/ButtonDanger_1.png)

# RepeatButtonDefault : RepeatButtonBaseStyle

Default RepeatButton

> [!NOTE]
> Example：
>
> ```
> <StackPanel Orientation="Horizontal">
>     <RepeatButton Style="{StaticResource RepeatButtonDefault}" Content="This is a RepeatButton"/>
>     <RepeatButton Style="{StaticResource RepeatButtonDefault}" Content="This is a RepeatButton" Margin="10,0,0,0" hc:BorderElement.CornerRadius="15"/>
>     <RepeatButton Style="{StaticResource RepeatButtonDefault}" Content="This is a RepeatButton" Margin="10,0,0,0" hc:IconElement.Geometry="{StaticResource GithubGeometry}"/>
> </StackPanel>
> ```

# RepeatButtonIcon : RepeatButtonBaseStyle

This style is recommended if you only want to display the geometry RepeatButton.

> [!NOTE]
> Example：
>
> ```
> <StackPanel Orientation="Horizontal">
>     <RepeatButton Style="{StaticResource RepeatButtonIcon}" Foreground="Black" hc:IconElement.Geometry="{StaticResource UpDownGeometry}"/>
>     <RepeatButton Style="{StaticResource RepeatButtonIcon}" Background="Black" Foreground="White" hc:BorderElement.CornerRadius="15" hc:IconElement.Geometry="{StaticResource UpDownGeometry}" Margin="10,0,0,0"/>
>     <RepeatButton Style="{StaticResource RepeatButtonIcon}" BorderThickness="1" BorderBrush="Black" Foreground="Black" hc:IconElement.Geometry="{StaticResource UpDownGeometry}" Margin="10,0,0,0"/>
> </StackPanel>
> ```
>
> ![ButtonIcon](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/ButtonIcon_1.png)

# RepeatButtonCustom

This style is recommended if you want to fully customize the content of the RepeatButton. The content in `RepeatButtonCustom` is entirely up to you. In addition, you can switch the background with additional properties in `BackgroundSwitchElement`:

> [!NOTE]
> Example：
>
> ```
> <RepeatButton Height="30" Padding="10,0" Background="Black" Foreground="White" Content="This is a RepeatButton" Style="{StaticResource RepeatButtonCustom}" hc:BackgroundSwitchElement.MouseHoverBackground="Red" hc:BackgroundSwitchElement.MouseDownBackground="PaleVioletRed"/>
> ```
>
> ![ButtonCustom](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/ButtonCustom_1.gif)

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
