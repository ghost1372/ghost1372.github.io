---
title: DatePicker
---

The DatePicker control allows the user to select a date by typing the date in the textbox or using the drop-down calendar control.

``` CS
[TemplatePart(Name = ElementTextBox, Type = typeof(DatePickerTextBox))]
public class DatePicker : System.Windows.Controls.DatePicker, IDataInput
```

# Create DatePicker

``` XML
<hc:DatePicker />
```

``` CS
var datePicker = new DatePicker();
```

The generated DatePicker is shown below:

![DatePicker](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/extend_controls/DatePicker_1.png)

# Select date

You can enter the date through the textbox, or click the button to the right of the text box to open the drop-down calendar control to select the date.

![DatePicker](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/extend_controls/DatePicker_2.png)

You can also set the date like this in a XAML clock or code.

``` XML
<hc:DatePicker SelectedDate="{x:Static system:DateTime.Now}"/>
```

``` CS
datePicker.SelectedDate = DateTime.Now;
```
# Set title and placeholder text

You can add Headers and Placeholders to the DatePicker to indicate to the user what they do.

``` XML
<hc:DatePicker hc:InfoElement.TitleWidth="140"
               hc:InfoElement.TitlePlacement="Left"
               hc:InfoElement.Placeholder="Please enter the content"
               hc:InfoElement.Title="Title" />
```


# Styles

|Available Styles|
|-|
|DatePickerPlus.Small|

# Attributes
| Property | Description |
| ---------------- | ------------------ |
| SelectedDate | Get or set the currently selected date |
|SelectionTextBrush||
|SelectionOpacity||
|SelectionBrush||
|CaretBrushProperty||

{% note info %}
you can change datepicker ui culture:
{% endnote %}

``` CS
ConfigHelper.Instance.SetLang("en");
```