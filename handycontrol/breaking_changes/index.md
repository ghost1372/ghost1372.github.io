---
title: Breaking Changes
---

A breaking change is a change that may require you to make changes to your application in order to avoid disruption to your integration.

{% note info %}
See [here](https://github.com/ghost1372/HandyControls/releases) and [here](https://github.com/HandyOrg/HandyControl/releases) for full changes
{% endnote %}

## 3.4.0 (HandyControls)
- `ApplyBackdropMaterial` Changed to `SystemBackdropType`

## 3.3.0 and 3.3.10 (HandyControls)
- To change the language of the controls, you must first install the desired language pack See [here](https://ghost1372.github.io/handycontrol/langs/#Language-packs) for more information

## 3.3.8 (HandyControls)
- All Violet and Default Styles Removed eg: ToggleButtonViolet, SplitButtonDefault
- GithubTimeLine Removed
- TabControl UsingWinUIStyle Property Removed
- FORCE_ENABLE_ACRYLIC_BLUR Property Removed (BlurWindow now can be used in all windows 10 builds)

## 3.3.0 (HandyControls)
- Legacy Dynamic Localization Removed and The newer version has been replaced with better features See [here](https://ghost1372.github.io/handycontrol/persianToolkit/dynamicLanguage/)

## 3.2.0 (HandyControls)
- The namespace of the helper classes has changed from `HandyControl.Controls` to `HandyControl.Tools`.
- PersianDateTime namespace changed from `HandyControl.Controls` to `HandyControl.Tools`.
- `InstanceHelper` and `PackUriHelper` moved to `ApplicationHelper`.

## 3.1.0 (HandyControls)
Things that have been deleted:
- Theme.cs
- SkinType.cs
- SkinDefault.xaml
- SkinDark.xaml
- SkinViolet.xaml
- Brushes.xaml
- ColorsViolet.xaml

Things that have been renamed and moved:
- Colors.xaml reanamed to Light.xaml
- ColorsDark.xaml reanamed to Dark.xaml
- Brushes content moved to Light.xaml and Dark.xaml 

We are using a new theme system, Therefore the following codes:
```xml
<ResourceDictionary>
    <ResourceDictionary.MergedDictionaries>
        <hc:Theme/>
    </ResourceDictionary.MergedDictionaries>
</ResourceDictionary>
```
changed to:
```xml
<ResourceDictionary>
    <ResourceDictionary.MergedDictionaries>
        <hc:ThemeResources/>
        <hc:Theme/>
    </ResourceDictionary.MergedDictionaries>
</ResourceDictionary>
```
the following codes:
```xml
<ResourceDictionary>
        <ResourceDictionary.MergedDictionaries>
            <ResourceDictionary Source="pack://application:,,,/HandyControl;component/Themes/SkinDefault.xaml"/>
            <ResourceDictionary Source="pack://application:,,,/HandyControl;component/Themes/Theme.xaml"/>
        </ResourceDictionary.MergedDictionaries>
</ResourceDictionary>
```
changed to:
```xml
<ResourceDictionary>
        <ResourceDictionary.MergedDictionaries>
            <ResourceDictionary Source="pack://application:,,,/HandyControl;component/Themes/Basic/Colors/Light.xaml"/>
            <ResourceDictionary Source="pack://application:,,,/HandyControl;component/Themes/Theme.xaml"/>
        </ResourceDictionary.MergedDictionaries>
</ResourceDictionary>
```

- SkinType Changed to ApplicationTheme

- For Changing Application Theme Follow [these](https://ghost1372.github.io/handycontrol/theme/) instructions


## 3.0.0 

- `TitleElement.TitleAlignment` Renamed to `TitleElement.TitlePlacement`
- `TagPanel` Replaced by `TagContainer`