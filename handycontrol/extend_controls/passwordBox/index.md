---
title: PasswordBox
---

Represents a control for entering and processing passwords.

``` CS
[TemplatePart(Name = ElementPasswordBox, Type = typeof(System.Windows.Controls.PasswordBox))]
[TemplatePart(Name = ElementTextBox, Type = typeof(System.Windows.Controls.TextBox))]
public class PasswordBox : Control, IDataInput
```
# Create PasswordBox

``` XML
<hc:PasswordBox />
```

``` CS
var passwordBox = new PasswordBox();
```

# enter password
You can enter the password in the textbox, or you can set the date in the XAML clock or code.

``` XML
<hc:PasswordBox Password="123456"/>
```
``` CS
passwordBox.Password = "123456";
```
# show password
The PasswordBox control can actively display the entered password. Set `ShowEyeButton` to `true` and PasswordBox will display an "eye" button. Click this button to display the password you have entered.

``` xml
<hc:PasswordBox ShowEyeButton="True"/>
``` 

![PasswordBox](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/extend_controls/PasswordBox_2.gif)

# Set title and placeholder text
You can add Headers and Placeholders to the PasswordBox to indicate to the user what they do.

``` XML
<hc:PasswordBox hc:InfoElement.Placeholder="Please enter the content"
               hc:InfoElement.Title="Title"
```

# Styles
|Style|
|-|
|PasswordBoxPlusBaseStyle| 
|PasswordBoxPlus.Small| 

# Attributes
| Property | Description |
| ---------------- | ------------------ |
| Password | Gets or sets the password currently reserved by PasswordBox. |
| PasswordChar | Gets or sets the mask character of the PasswordBox. |
| ShowEyeButton | Get or set whether to show an "eye" button. Click to display the password. |
| ShowPassword | Get or set whether to show the password. |
| Text | Get the text displayed by **TimePicker**, or set the selected time |
| SelectionOpacity | |
| CaretBrush | |
| SelectionTextBrush | |
| SelectionBrush | |
| MaxLength | |
| IsSafeEnabled | if this property is false, we can bind UnsafePassword |
| UnsafePassword | |

# Method
| Method | Description |
| ---------------- | ------------------ |
| Clear () | Clears the value of the Password property. |
| Paste () | Replaces the current selection in the PasswordBox with the contents of the clipboard. |
| SelectAll () | Selects everything in PasswordBox. |
| VerifyData () | Verify the data. |

# Binding
``` xml
 <hc:PasswordBox Name="PasswordBoxDemo" ShowClearButton="True" Password="123456" IsSafeEnabled="False"/>
<TextBox Text="{Binding UnsafePassword,ElementName=PasswordBoxDemo,UpdateSourceTrigger=PropertyChanged}" Margin="0,6,0,0"/>
```
