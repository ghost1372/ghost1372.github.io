---
title: ColorPresetResources
---

You can customize all colors and brushes for dark and light themes.

{% note info %}
All classes related to Theme Located in the **HandyControl.Themes** namespace.
```cs
Using HandyControl.Themes;
```
{% endnote %}

# Define resources

Expand `ThemeResources` and use a `ThemeDictionaries` Then define `ColorPresetResources` in the `ThemeDictionaries` with the appropriate `key`
```xml
<hc:ThemeResources>
    <hc:ThemeResources.ThemeDictionaries>

        <ResourceDictionary x:Key="Light" hc:ThemeDictionary.Key="Light">
           <ResourceDictionary.MergedDictionaries>
                <hc:ColorPresetResources TargetTheme="Light" />
           </ResourceDictionary.MergedDictionaries>
        </ResourceDictionary>

        <ResourceDictionary x:Key="Dark" hc:ThemeDictionary.Key="Dark">
            <ResourceDictionary.MergedDictionaries>
                <hc:ColorPresetResources TargetTheme="Dark" />
            </ResourceDictionary.MergedDictionaries>
        </ResourceDictionary>

    </hc:ThemeResources.ThemeDictionaries>
</hc:ThemeResources>
```

# Create Themes

Now it's time to create our own personalization theme.

- Create a folder and name it `Preset`.
- Create 2 more folders in this folder called `Default` and `MyTheme`

{% note info %}
You can choose other names for folders
{% endnote %}

- In each of these 2 folders, create 2 `ResourcesDictionary` named `Light.xaml` and `Dark.xaml`

So we have:
```
--Preset
  |
  --Default
    |
    --Light.xaml
    --Dark.xaml
  --MyTheme
    |
    --Light.xaml
    --Dark.xaml
```

{% note info %}
You can leave the dictionaries for the default folder blank, This is for when you want to clear your personalization and get back to normal
{% endnote %}

- Now open the MyTheme Light and Dark dictionary and Expand `MergedDictionaries` then define a `ColorPaletteResources`

`Dark.xaml`

```xml
<ResourceDictionary
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:hc="https://handyorg.github.io/handycontrol">
    <ResourceDictionary.MergedDictionaries>
        <hc:ColorPaletteResources
            TargetTheme="Dark"/>
    </ResourceDictionary.MergedDictionaries>
</ResourceDictionary>

```
`Light.xaml`


```xml
<ResourceDictionary
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:hc="https://handyorg.github.io/handycontrol">
    <ResourceDictionary.MergedDictionaries>
        <hc:ColorPaletteResources
            TargetTheme="Light"/>
    </ResourceDictionary.MergedDictionaries>
</ResourceDictionary>

```
{% note info %}
Be sure to set the `TargetTheme` to `Dark` for `Dark` theme and `Light` for `Light` theme
{% endnote %}

- Now it's time to set the colors and brushes

`Dark.xaml`
```xml
<ResourceDictionary
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:hc="https://handyorg.github.io/handycontrol">
    <ResourceDictionary.MergedDictionaries>
        <hc:ColorPaletteResources
            TargetTheme="Dark"
            PrimaryBrush="#326cf3"
            DangerColor="#db3340"/>
    </ResourceDictionary.MergedDictionaries>
</ResourceDictionary>
```

`Light.xaml`
```xml
<ResourceDictionary
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:hc="https://handyorg.github.io/handycontrol">
    <ResourceDictionary.MergedDictionaries>
        <hc:ColorPaletteResources
            TargetTheme="Light"
            PrimaryBrush="#2db84d"
            DangerColor="#7b1fa2"/>
    </ResourceDictionary.MergedDictionaries>
</ResourceDictionary>
```

# Set Preset
In the end we have to set our Preset

```cs
PresetManager.Current.ColorPreset = new PresetManager.Preset { ColorPreset = @"Preset\MyTheme", AssemblyName = Assembly.GetExecutingAssembly().GetName().Name };
```

# ColorPresetChanged Event

```cs
PresetManager.Current.ColorPresetChanged += OnColorPresetChanged;

private void OnColorPresetChanged(object sender, EventArgs e)
{

}
```