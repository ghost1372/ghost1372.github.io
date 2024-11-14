---
title: Theme
---

This documentation is for the `HandyControls` (unofficial version) If you are looking for the `HandyControl` (official version) documentation, read <ins>**[here](https://ghost1372.github.io/handycontrol/theme/handyControl)**</ins>

{% note info %}
All classes related to Theme Located in the **HandyControl.Themes** namespace.
```cs
Using HandyControl.Themes;
```
{% endnote %}

|Name|Type|Remarks|
|-|-|-|
|ActualApplicationThemeChanged|Event| This event is called whenever the ApplicationTheme changes|
|SystemThemeChanged|Event|This event is called whenever the Windows Theme changes|
|AccentColor|Property||
|ActualApplicationTheme|Property||
|ApplicationTheme|Property||
|UsingSystemTheme|Property||
|GetActualTheme|Method||
|GetHasThemeResources|Method||
|GetRequestedAccentColor|Method||
|GetRequestedTheme|Method||
|GetSystemTheme|Method||
|SetHasThemeResources|Method||
|SetRequestedAccentColor|Method||
|SetRequestedTheme|Method||
|AddActualThemeChangedHandler|Method||
|RemoveActualThemeChangedHandler|Method||
|GetElementTheme|Method||
|GetAccentColorFromSystem|Method||

# How to Address Resource?
```xml
<ResourceDictionary>
     <ResourceDictionary.MergedDictionaries>
           <hc:ThemeResources/>
           <hc:Theme/>
      </ResourceDictionary.MergedDictionaries>
</ResourceDictionary>
```

# Set the application theme
To override the default settings, set properties on the `ThemeResources` class in App.xaml. For example:

## Xaml
```xml
<hc:ThemeResources RequestedTheme="Dark" AccentColor="Red"/>
```

Values set this way are applied at both design time and runtime. If you'd like to change them at runtime, it's usually more convenient to use the `ThemeManager` class, which supports data binding. For example:

## Code-Behind
```cs
ThemeManager.Current.ApplicationTheme = ApplicationTheme.Dark;
ThemeManager.Current.AccentColor= Brushes.Red;
```

{% note info %}
- If you want to specify the Accent Color for whole application in `Xaml (ThemeResources)`, you must use the `AccentColor` property.
- If you want to specify the Accent Color for whole application in `C# code`, you must use `ThemeManager` Class and `AccentColor` property.
- If you want to specify the Accent Color of the `FrameworkElements`, you must use `ThemeManager` Class and `RequestedAccentColor` attached property.
- If you want to specify the ApplicationTheme of the `FrameworkElements`, you must use `ThemeManager` Class and `RequestedTheme` attached property.

|Name|NameSpace|Type|Remarks|
|-|-|-|-|
|AccentColor|ThemeResource|Brush|specify the Accent Color for whole application|
|AccentColor|ThemeManager|DependencyProperty|specify the Accent Color for whole application|
|RequestedAccentColor|ThemeManager|AttachedProperty|specify the Accent Color for FrameworkElements|
|RequestedTheme|ThemeManager|AttachedProperty|specify the ApplicationTheme for FrameworkElements|

{% endnote %}

{% note info %}
If you want to set the AccentColor to the default Color You must assign a `null` value to it.
{% code lang:csharp %}
ThemeManager.Current.AccentColor= null;
{% endcode %}
{% endnote %}

# Override the theme at element level
Set the `ThemeManager.RequestedTheme` or `hc:ThemeManager.RequestedAccentColor` attached property on any FrameworkElement. For example:

```xml
<Border Background="{DynamicResource RegionBrush}" Padding="12" hc:ThemeManager.RequestedTheme="Dark">
    <Button Content="Dark theme button" />
</Border>

<Border Background="{DynamicResource RegionBrush}" Padding="12" hc:ThemeManager.RequestedAccentColor="Red">
    <CheckBox Content="Accent Color" />
</Border>
```
Now this Border and its descendants will use the dark theme while the theme used by the rest of the app remains unchanged. 

{% note info %}
This feature sometimes doesn't work correctly at design time.
{% endnote %}

# Change Application Theme with System Theme Change
If `UsingSystemTheme` is enabled in `Xaml (ThemeResources)` or `C# code (ThemeManager)` (default is `false`), By changing the Windows theme (Light/Dark and Accent Color), the theme of the program also changes automatically.

{% note info %}
For systems running Windows 10, the system accent color and system Theme is used. for windows 7 system accent color and the light theme is used.
For systems running an earlier version of Windows, the light theme and the color PrimaryBrush (default blue) are used.
{% endnote %}

## Xaml
```xml
<hc:ThemeResources UsingSystemTheme="true"/>
```

## Code-Behind
```cs
ThemeManager.Current.UsingSystemTheme = true;
// OR you can use ThemeResources Class
// ThemeResources.Current.UsingSystemTheme= true;
```

## SystemThemeChanged Event
There is also an event called `SystemThemeChanged` if you want to do more.

### Xaml

```xml
<hc:ThemeResources UsingSystemTheme="true" SystemThemeChanged="ThemeResources_OnSystemThemeChanged"/>
```

```cs
private void ThemeResources_OnSystemThemeChanged(object? sender, FunctionEventArgs<ThemeManager.SystemTheme> e)
{
    Debug.WriteLine(e.Info.AccentBrush);
    Debug.WriteLine(e.Info.CurrentTheme);
}
```

### Code-Behind

if you want to use this event in another class you can use ThemeManager

```cs
ThemeManager.Current.SystemThemeChanged += OnSystemThemeChanged;
```

![Themes](https://user-images.githubusercontent.com/9213496/104836729-20619600-58c5-11eb-8d53-4b0485363016.gif)


# Change Application Theme with System (App) Theme Change
If `UsingSystemAppTheme` is enabled in `Xaml (ThemeResources)` or `C# code (ThemeManager)` (default is `false`), By changing the Windows App theme (Light/Dark), the theme of the program also changes automatically.

## Xaml
```xml
<hc:ThemeResources UsingSystemAppTheme="true"/>
```


# ThemeDictionaries (Override predefined colors)
You can overwrite predefined resources in ThemeDictionaries, Note that you need to know the resource key to override it.
also you can change your colors and styles according to the theme of the program.

Edit the `hc:ThemeResources` element in `App.xaml` to following:
```xml
<hc:ThemeResources>
    <hc:ThemeResources.ThemeDictionaries>
        <ResourceDictionary x:Key="Light" hc:ThemeDictionary.Key="Light">

            <!-- Put the resources you want to use in the Light theme Here -->

            <SolidColorBrush x:Key="PrimaryBrush" Color="Red" />
            <SolidColorBrush x:Key="AppBackgroundBrush" Color="#FFF1F1F1" />
        </ResourceDictionary>

        <ResourceDictionary x:Key="Dark" hc:ThemeDictionary.Key="Dark">

            <!-- Put the resources you want to use in the Dark theme Here -->

            <SolidColorBrush x:Key="PrimaryBrush" Color="Green" />
            <SolidColorBrush x:Key="AppBackgroundBrush" Color="#FF232323" />
        </ResourceDictionary>
    </hc:ThemeResources.ThemeDictionaries>
</hc:ThemeResources>
```

# ColorPresetResources (Customization)

See <ins>**[here](https://ghost1372.github.io/handycontrol/theme/colorPreset/)**</ins> To customize all the colors and brushes

# Enable IntelliSense for XAML resources
See <ins>**[here](https://ghost1372.github.io/handycontrol/intellisense/)**</ins>


# Theme Changing Animation

When you are changing the theme, call the `AnimateTheme` before and after the Theme Changing:


```cs
ThemeAnimationHelper.AnimateTheme(HandyControlDemo.MainWindow.Instance, ThemeAnimationHelper.SlideDirection.Top, 0.3, 1, 0.5);

ThemeManager.Current.ApplicationTheme = ApplicationTheme.Dark;

ThemeAnimationHelper.AnimateTheme(HandyControlDemo.MainWindow.Instance, ThemeAnimationHelper.SlideDirection.Bottom, 0.3, 0.5, 1);

```

![Themes](https://user-images.githubusercontent.com/9213496/101981825-d1509180-3c84-11eb-9dd9-61911ce84d1b.gif)