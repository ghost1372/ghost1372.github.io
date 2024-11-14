---
title: DatePicker
---

# Styles

|Available Styles|
|-|
|DatePicker.Small|
|DatePickerExtend|
|DatePickerExtend.Small|

# DatePickerBaseStyle

Native datepicker default style, not recommended for direct use, should always be used by other styles in the BasedOn mode. The native datepicker uses this style by default if no style is set:

- Default style
```xml
<DatePicker SelectedDate="{x:Static system:DateTime.Now}"/>
```
![ComboBoxBaseStyle](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/DatePickerBaseStyle.png)

# DatePickerExtendBaseStyle : DatePickerBaseStyle

The native datepicker extends the default style and is not recommended for direct use. It should always be used by other styles in the BasedOn mode.

# DatePickerExtend : DatePickerExtendBaseStyle

- Title on
```xml
<DatePicker SelectedDate="{x:Static system:DateTime.Now}" Style="{StaticResource DatePickerExtend}" hc:InfoElement.Title="This is the title"/>
```
![DatePickerExtend_1](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/DatePickerExtend_1.png)

- Title left
```xml
<DatePicker SelectedDate="{x:Static system:DateTime.Now}" Width="380" hc:InfoElement.TitleWidth="140" hc:InfoElement.TitlePlacement="Left" Style="{StaticResource DatePickerExtend}" hc:InfoElement.Title="Title on the left"/>
```
![DatePickerExtend_2](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/DatePickerExtend_2.png)

{% note warning %}
When the title is on the left, in order to align the left side of multiple input boxes, you need to set the title width. The title width does not need to be set one by one, and can be set uniformly on the external container.
{% endnote %}

- Title on, with watermark
[See Combobox](https://ghost1372.github.io/handycontrol/native_controls/comboBox/)

- Title is on, with watermark, and is required
[See Combobox](https://ghost1372.github.io/handycontrol/native_controls/comboBox/)

- The title is on, with a watermark, and is required, and a custom required prompt
[See Combobox](https://ghost1372.github.io/handycontrol/native_controls/comboBox/)

{% note info %}
you can change datepicker ui culture:

{% code lang:cs %}
ConfigHelper.Instance.SetLang("en");
{% endcode %}

{% endnote %}

{% note warning %}
To use Attached Properties (InfoElement), you should set Style to `DatePickerExtend`
{% endnote %}