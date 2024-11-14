---
title: Validation Rule
---

# Rules
|Name|Remarks|
|-|-|
|NoBlankTextRule|Property: ErrorContent|
|RegexRule|Property: ErrorContent, Type, Pattern|

# How to Create ValidationRule?
```cs
public class NumericUpDownDemoRule : ValidationRule
{
    public override ValidationResult Validate(object value, CultureInfo cultureInfo)
    {
        if (value is not double doubleValue)
        {
            return new ValidationResult(false, HandyControl.Properties.Langs.Lang.FormatError);
        }

        return doubleValue % 2 > double.Epsilon
            ? new ValidationResult(false, Properties.Langs.Lang.Error)
            : ValidationResult.ValidResult;
    }
}
```
# Example

## RegexRule
```cs
 <hc:SearchBar hc:InfoElement.Placeholder="Please Enter Email" hc:InfoElement.Title="Title" Margin="0,32,0,0" hc:InfoElement.Necessary="True" Style="{StaticResource SearchBarPlus}">
    <hc:SearchBar.Text>
        <Binding Path="Email1" UpdateSourceTrigger="PropertyChanged">
            <Binding.ValidationRules>
                <hc:RegexRule Type="Mail"/>
            </Binding.ValidationRules>
        </Binding>
    </hc:SearchBar.Text>
</hc:SearchBar>
```

## NoBlankTextRule
```cs
 <hc:SearchBar Style="{StaticResource SearchBarPlus}">
    <hc:SearchBar.Text>
        <Binding Path="Email1" UpdateSourceTrigger="PropertyChanged">
            <Binding.ValidationRules>
                <hc:NoBlankTextRule/>
            </Binding.ValidationRules>
        </Binding>
    </hc:SearchBar.Text>
</hc:SearchBar>
```
