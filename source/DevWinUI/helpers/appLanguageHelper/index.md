---
title: AppLanguageHelper
---

# Properties

|Name|
|-|
|SupportedLanguages|
|PreferredLanguage|
|IsPreferredLanguageRtl|
|TryChange|

# Example

```xml
<ComboBox x:Name="CmbLanguage" ItemsSource="{x:Bind AppLanguages}" SelectedIndex="{x:Bind SelectedAppLanguageIndex, Mode=TwoWay}">
    <ComboBox.ItemTemplate>
        <DataTemplate x:DataType="dev:AppLanguageItem">
            <TextBlock Style="{ThemeResource BaseTextBlockStyle}"
                        Text="{x:Bind Name}" />
        </DataTemplate>
    </ComboBox.ItemTemplate>
</ComboBox>
```

```cs
 public ObservableCollection<AppLanguageItem> AppLanguages => AppLanguageHelper.SupportedLanguages;

private int selectedAppLanguageIndex;
public int SelectedAppLanguageIndex
{
    get => selectedAppLanguageIndex;
    set
    {
        if (AppLanguageHelper.TryChange(value))
        {
            selectedAppLanguageIndex = value;
            OnPropertyChanged(nameof(SelectedAppLanguageIndex));
        }
    }
}
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
