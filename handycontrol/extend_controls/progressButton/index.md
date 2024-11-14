---
title: ProgressButton
---

A progress display is attached to the switch button.

```cs
public class ProgressButton : ToggleButton
```

# Attributes
|Property|Description|Default Value|Remarks|
|-|-|-|-|
|ProgressStyle|Progress Bar Style|||
|Progress|Progress|0|||

# Case

```xml
<StackPanel>
    <hc:ProgressButton IsChecked="{Binding IsUploading,Mode=TwoWay}" Progress="{Binding Progress}" Content="{Binding IsChecked,RelativeSource={RelativeSource Self},Converter={StaticResource Boolean2StringConverter},ConverterParameter=UploadStr}" Width="180" Margin="5"/>
    <hc:ProgressButton Style="{StaticResource ProgressButtonPrimary}" IsChecked="{Binding IsUploading,Mode=TwoWay}" Progress="{Binding Progress}" Content="{Binding IsChecked,RelativeSource={RelativeSource Self},Converter={StaticResource Boolean2StringConverter},ConverterParameter=UploadStr}" Width="180" Margin="5"/>
    <hc:ProgressButton Style="{StaticResource ProgressButtonSuccess}" IsChecked="{Binding IsUploading,Mode=TwoWay}" Progress="{Binding Progress}" Content="{Binding IsChecked,RelativeSource={RelativeSource Self},Converter={StaticResource Boolean2StringConverter},ConverterParameter=UploadStr}" Width="180" Margin="5"/>
    <hc:ProgressButton Style="{StaticResource ProgressButtonInfo}" IsChecked="{Binding IsUploading,Mode=TwoWay}" Progress="{Binding Progress}" Content="{Binding IsChecked,RelativeSource={RelativeSource Self},Converter={StaticResource Boolean2StringConverter},ConverterParameter=UploadStr}" Width="180" Margin="5"/>
    <hc:ProgressButton Style="{StaticResource ProgressButtonWarning}" IsChecked="{Binding IsUploading,Mode=TwoWay}" Progress="{Binding Progress}" Content="{Binding IsChecked,RelativeSource={RelativeSource Self},Converter={StaticResource Boolean2StringConverter},ConverterParameter=UploadStr}" Width="180" Margin="5"/>
    <hc:ProgressButton Style="{StaticResource ProgressButtonDanger}" IsChecked="{Binding IsUploading,Mode=TwoWay}" Progress="{Binding Progress}" Content="{Binding IsChecked,RelativeSource={RelativeSource Self},Converter={StaticResource Boolean2StringConverter},ConverterParameter=UploadStr}" Width="180" Margin="5"/>
</StackPanel>
```

{% note warning %}
you can use ToggleButton instead of ProgressButton
{% endnote %}

``` xml
<ToggleButton Style="{StaticResource ToggleButtonLoading}" Progress="0" Content="Upload"/>
```

# Styles
| [ProgressButton] | [ToggleButton]          |
| ---------------------------- | ---------------------------- |
| ProgressButtonPrimary | ToggleButtonLoading |
| ProgressButtonSuccess    | ToggleButtonLoadingPrimary |
| ProgressButtonInfo | ToggleButtonLoadingSuccess |
| ProgressButtonWarning    | ToggleButtonLoadingInfo |
| ProgressButtonDanger | ToggleButtonLoadingWarning |

![ProgressButton](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Resources/ProgressButton.gif)