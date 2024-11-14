---
title: ComboBox
---

# Styles

|Name|
|-|
|ComboBoxItem.Small|
|ComboBox.Small|
|ComboBoxExtend|
|ComboBoxExtend.Small|

# ComboBoxBaseStyle

The default style of the original combo box is not recommended for direct use. It should always be used by other styles in the BasedOn method. Native combo box uses this style by default if no style is set:

- Default style
```xml
<ComboBox ItemsSource="{Binding DataList}" SelectedIndex="0"/>
```

or

```xml
<ComboBox>
    <ComboBoxItem Content="Item 1"/>
    <ComboBoxItem Content="Item 2"/>
    <ComboBoxItem Content="Item 3"/>
</ComboBox>

```

![ComboBoxBaseStyle](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/ComboBoxBaseStyle.png)

# ComboBoxExtendBaseStyle : ComboBoxBaseStyle

The native combo box extends the default style and is not recommended for direct use. It should always be used by other styles in the BasedOn method.

# ComboBoxExtend : ComboBoxExtendBaseStyle

Relative to the default style of the original combo box, it can implement the function of title and watermark by means of additional attributes.

- Title on
```xml
<ComboBox ItemsSource="{Binding DataList}" SelectedIndex="0" hc:InfoElement.Title="This is the title" Style="{StaticResource ComboBoxExtend}" Text="Item 1"/>
```

![ComboBoxExtend_1](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/ComboBoxExtend_1.png)

- Title left
```xml
<ComboBox ItemsSource="{Binding DataList}" Width="380" hc:InfoElement.TitleWidth="140" hc:InfoElement.TitlePlacement="Left" hc:InfoElement.Title="Title on the left" Style="{StaticResource ComboBoxExtend}" Text="Item 1"/>
```

![ComboBoxExtend_2](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/ComboBoxExtend_2.png)

{% note warning %}
When the title is on the left, in order to align the left side of multiple input boxes, you need to set the title width. The title width does not need to be set one by one, and can be set uniformly on the external container.
{% endnote %}
{% note warning %}
common problem:
The font of Combobox is larger than the original default font, and the title is set to the left, and the title is incomplete due to the font size.
![ComboBoxExtend_2_Error1](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/ComboBoxExtend_2_Error1.png)
solution:
Add the additional attribute `hc:InfoElement.ContentHeight` to the Combobox. The default value is 30. The default font number is 12. After the change, the value of the additional attribute can be set according to the new font size. As shown above, the font size is 18. Then set `hc:InfoElement.ContentHeight` to 38 and the result is as follows: ![ComboBoxExtend_2_Ok1](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/ComboBoxExtend_2_Ok1.png)
{% endnote %}
- Title on, with watermark
```xml
<ComboBox ItemsSource="{Binding DataList}" hc:InfoElement.Placeholder="Please enter the content" hc:InfoElement.Title="This field is required" Style="{StaticResource ComboBoxExtend}"/>
```

![ComboBoxExtend_3](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/ComboBoxExtend_3.png)

- Title is on, with watermark, and is required
```xml
<ComboBox ItemsSource="{Binding DataList}" hc:InfoElement.Placeholder="Please enter the content" hc:InfoElement.Title="This field is required" Style="{StaticResource ComboBoxExtend}" hc:InfoElement.Necessary="True"/>
```
![ComboBoxExtend_4](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/ComboBoxExtend_4.png)

- The title is on, with a watermark, and is required, and a custom required prompt

```xml
<ComboBox ItemsSource="{Binding DataList}" hc:InfoElement.Placeholder="Please enter the content" hc:InfoElement.Title="This field is required" Style="{StaticResource ComboBoxExtend}" hc:InfoElement.Necessary="True" hc:InfoElement.Symbol="*"/>
```

![ComboBoxExtend_5](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/ComboBoxExtend_5.png)

{% note warning %}
To use Attached Properties (InfoElement), you should set Style to `ComboBoxExtend`
{% endnote %}