---
title: PinBox
---

Another form of password box.

```cs
[TemplatePart(Name = ElementPanel, Type = typeof(Panel))]
public class PinBox : Control
```

# Attributes
|Property|Description|Default Value|Remarks|
|-|-|-|-|
|Password|Password||For security reasons, cannot bind|
|PasswordChar|Mask character|●||
|IsSafeEnabled||||
|UnsafePassword||||
|Length|Password length|4|The minimum value is 4|
|SelectionTextBrush||||
|SelectionOpacity|||||
|SelectionBrush|||||
|CaretBrushProperty|||||
|ItemMargin|Cell Interval|||
|ItemWidth|Cell width|||
|ItemHeight|Cell height||||

# Events
|Name|Description|
|-|-|
| Completed | Triggered when input is complete |

# Case

```xml
<StackPanel Margin="32" VerticalAlignment="Center" hc:PinBox.Completed="PinBox_OnCompleted">
    <hc:PinBox Length="4" Password="1234"/>
    <hc:PinBox Length="6" Password="123456" Margin="0,16,0,0" PasswordChar="❤"/>
</StackPanel>
```

![PinBox](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Resources/PinBox.png)