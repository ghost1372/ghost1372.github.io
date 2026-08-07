---
title: AutoCompleteTextBox
---


The AutoCompleteTextBox is similar to TextBox with auto complete behavior.

```cs
public class AutoCompleteTextBox : ComboBox
```

# Attributes

Case:
```xml
<hc:AutoCompleteTextBox Width="380" VerticalAlignment="Center" HorizontalAlignment="Center" Margin="32" ItemsSource="{Binding Items}" Text="{Binding SearchText}" DisplayMemberPath="Name"/>
```

effect:

![AutoCompleteTextBox](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Resources/AutoCompleteTextBox.gif)