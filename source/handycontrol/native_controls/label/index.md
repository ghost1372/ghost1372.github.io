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

{% note info no-icon %}
Example：
{% code lang:xml %}
    <Label Content="Label default style" Margin="10"/>
{% endcode %}

![Label.BaseStyle](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/Label.BaseStyle.png)

{% endnote %}

# LabelPrimary : LabelBaseStyle

Primary style:

{% note info no-icon %}
Example：
{% code lang:xml %}
    <Label Content="LabelPrimary style" Margin="10" Style="{DynamicResource LabelPrimary}"/>
{% endcode %}

![Label.PrimaryStyle](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/Label.PrimaryStyle.png)

{% endnote %}

# LabelSuccess : LabelBaseStyle

Success type style

{% note info no-icon %}
Example：
{% code lang:xml %}
    <Label Content="LabelSuccess style" Margin="10" Style="{DynamicResource LabelSuccess}"/>
{% endcode %}

![Label.SuccessStyle](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/Label.SuccessStyle.png)

{% endnote %}

# LabelInfo : LabelBaseStyle

Information type style

{% note info no-icon %}
Example：
{% code lang:xml %}
    <Label Content="LabelInfo style" Margin="10" Style="{DynamicResource LabelInfo}"/>
{% endcode %}

![Label.InfoStyle](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/Label.InfoStyle.png)

{% endnote %}

# LabelWarning : LabelBaseStyle

Warning type style 

{% note info no-icon %}
Example：
{% code lang:xml %}
    <Label Content="LabelWarning style" Margin="10" Style="{DynamicResource LabelWarning}"/>
{% endcode %}

![Label.WarningStyle](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/Label.WarningStyle.png)

{% endnote %}

# LabelDanger : LabelBaseStyle

Danger type style 

{% note info no-icon %}
Example：
{% code lang:xml %}
    <Label Content="LabelDanger style" Margin="10" Style="{DynamicResource LabelDanger}"/>
{% endcode %}

![Label.DangerStyle](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/Label.DangerStyle.png)

{% endnote %}