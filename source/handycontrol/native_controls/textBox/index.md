---
title: TextBox
---

# Styles
| Style |
| - |
| TextBoxBaseStyle  | 
| TextBox.Small  | 
| TextBoxExtend  | 
| TextBoxExtend.Small  | 

# TextBoxBaseStyle

The default style of the native textbox is not recommended. It should always be used by other styles as BasedOn.

-Default style
```xml
<TextBox Width="200" VerticalAlignment="Center"/>
```
![TextBoxBaseStyle](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/TextBoxBaseStyle.png)

# TextBoxExtendBaseStyle : TextBoxBaseStyle

The native textbox extends the default style. It is not recommended to use it directly. It should always be used by other styles based on On.

# TextBoxExtend : TextBoxExtendBaseStyle

Compared with the default style of the native textbox, it can achieve the functions of title and watermark with the help of additional attributes.

- Title on
```xml
<TextBox Style="{StaticResource TextBoxExtend}" hc:InfoElement.Title="This is the title" Width="200" VerticalAlignment="Center"/>
```
![TextBoxExtend_1](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/TextBoxExtend_1.png)

- Title on left
```xml
<TextBox Style="{StaticResource TextBoxExtend}" hc:InfoElement.TitlePlacement="Left" hc:InfoElement.Title="This is the title" Width="300" VerticalAlignment="Center"/>
```
![TextBoxExtend_2](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/TextBoxExtend_2.png)

{% note warning %}
When the title is on the left, in order to align the left sides of multiple input boxes, the title width needs to be set. The title width does not need to be set one by one, and can be set uniformly on the external container.
{% endnote %}

- Title on top with watermark
[See Combobox](https://ghost1372.github.io/handycontrol/native_controls/comboBox/)

- Title is above, with watermark, and is required
[See Combobox](https://ghost1372.github.io/handycontrol/native_controls/comboBox/)

- The title is on the top, with a watermark, and it is required, and the required prompt is customized
[See Combobox](https://ghost1372.github.io/handycontrol/native_controls/comboBox/)