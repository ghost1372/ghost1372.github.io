---
title: PasswordBox
---

# Styles
|Style|
|-|
|PasswordBoxBaseStyle| 
|PasswordBox.Small| 
|PasswordBoxExtend| 
|PasswordBoxExtend.Small| 

# PasswordBoxBaseStyle

The default style of the native passwordbox is not recommended. It should always be used by other styles based on On.

> [!NOTE]
> Example：
> ```
>     <PasswordBox PasswordChar="*" VerticalAlignment="Center" Width="120"/>
> ```
>
> ![PasswordBox.BaseStyle](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/PasswordBox.BaseStyle.png)

# PasswordBoxExtendBaseStyle : PasswordBoxBaseStyle

The native passwordbox extends the default style. It is not recommended to use it directly, and it should always be used by other styles as BasedOn.

# PasswordBoxExtend : PasswordBoxExtendBaseStyle

Compared to the default style of the native passwordbox, it can implement the functions of title and watermark with the help of additional attributes.

> [!NOTE]
> example:
> ```
>     <!--In order to display the watermark in the normal password input text box, you need to set PasswordBoxAttach.PasswordLength="0"-->
>     <PasswordBox Style="{DynamicResource PasswordBoxExtend}" PasswordChar="*" 
>                  hc:PasswordBoxAttach.PasswordLength="0"
>                  hc:InfoElement.Placeholder="Please enter the password" 
>                  VerticalAlignment="Center"
>                  Width="120"/>
>     <PasswordBox Style="{DynamicResource PasswordBoxExtend}" PasswordChar="*" 
>                  hc:TitleElement.Title="user password:"
>                  hc:TitleElement.TitlePlacement="Top"
>                  VerticalAlignment="Center"
>                  Width="120"/>
> ```
>
> ![PasswordBox.ExtendStyle](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/PasswordBox.ExtendStyle.png)