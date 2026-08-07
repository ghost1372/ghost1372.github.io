---
title: Label
---

# Styles

|Name|
|-|
|LabelDefault|
|LabelDefault.Small|
|LabelPrimary|
|LabelPrimary.Small|
|LabelSuccess|
|LabelSuccess.Small|
|LabelInfo|
|LabelInfo.Small|
|LabelWarning|
|LabelWarning.Small|
|LabelDanger|
|LabelDanger.Small|

# LabelBaseStyle

The default style of the Label. which is not recommended. It should always be used by other styles based on On.

> [!NOTE]
> Example：
> ```
>     <Label Content="Label default style" Margin="10"/>
> ```
>
> ![Label.BaseStyle](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/Label.BaseStyle.png)

# LabelPrimary : LabelBaseStyle

Primary style:

> [!NOTE]
> Example：
> ```
>     <Label Content="LabelPrimary style" Margin="10" Style="{DynamicResource LabelPrimary}"/>
> ```
>
> ![Label.PrimaryStyle](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/Label.PrimaryStyle.png)

# LabelSuccess : LabelBaseStyle

Success type style

> [!NOTE]
> Example：
> ```
>     <Label Content="LabelSuccess style" Margin="10" Style="{DynamicResource LabelSuccess}"/>
> ```
>
> ![Label.SuccessStyle](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/Label.SuccessStyle.png)

# LabelInfo : LabelBaseStyle

Information type style

> [!NOTE]
> Example：
> ```
>     <Label Content="LabelInfo style" Margin="10" Style="{DynamicResource LabelInfo}"/>
> ```
>
> ![Label.InfoStyle](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/Label.InfoStyle.png)

# LabelWarning : LabelBaseStyle

Warning type style 

> [!NOTE]
> Example：
> ```
>     <Label Content="LabelWarning style" Margin="10" Style="{DynamicResource LabelWarning}"/>
> ```
>
> ![Label.WarningStyle](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/Label.WarningStyle.png)

# LabelDanger : LabelBaseStyle

Danger type style 

> [!NOTE]
> Example：
> ```
>     <Label Content="LabelDanger style" Margin="10" Style="{DynamicResource LabelDanger}"/>
> ```
>
> ![Label.DangerStyle](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/Label.DangerStyle.png)