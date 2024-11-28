---
title: ThemeService
---

You can simplify the operation of saving, retrieving and selecting the Application theme, backdrop and TintColors. All operations are performed automatically.

# Backdrops
|Name|
|-|
|None|
|Mica|
|MicaAlt|
|DesktopAcrylic|
|AcrylicThin|
|AcrylicBase|
|Transparent|

# Methods
|Name|
|-|
|Window|
|ConfigureBackdrop|
|ConfigureTintColor|
|ConfigureFallbackColor|
|ConfigureElementTheme|
|GetSystemBackdrop|
|GetBackdropType|
|GetElementTheme|
|GetActualTheme|
|SetBackdropType|
|SetBackdropTintColor|
|SetBackdropFallbackColor|
|SetElementTheme|
|SetElementThemeWithoutSave|
|IsDarkTheme|
|OnThemeComboBoxSelectionChanged|
|SetThemeComboBoxDefaultItem|
|OnBackdropComboBoxSelectionChanged|
|SetBackdropComboBoxDefaultItem|
|OnThemeRadioButtonChecked|
|SetThemeRadioButtonDefaultItem|
|OnBackdropRadioButtonChecked|
|SetBackdropRadioButtonDefaultItem|
|UpdateCaptionButtons|

# Simple Usage

There is multipe ways you can use ThemeService:

In this method, all settings are applied automatically.

```cs
var themeService = new ThemeService(window);
```

or

```cs
var themeService = new ThemeService();
themeService.AutoInitialize(window);
```

If you want to change some settings like autosave, file location, use `Initialize` method:

```cs
themeService.Initialize(window, true, @"D:\app\config.json");
```

and if you want to save and restore theme manually you can set `useAutoSave = false`
```cs
themeService.Initialize(window, false);
```

## Configs
there are some configure methods:

### ConfigureBackdrop

If you use the `ConfigureBackdrop`, the themeService will automatically save and restore the SystemBackdrop (if useAutoSave is true)

```cs
themeService.Initialize(...).ConfigureBackdrop(BackdropType.Mica);
```

### ConfigureElementTheme

If you use the `ConfigureElementTheme`, the themeService will automatically save and restore the ElementTheme (if useAutoSave is true)

```cs
themeService.Initialize(...).ConfigureElementTheme(ElementTheme.Default);
```

### ConfigureTintColor
you can change system backdrop TintColor.

```cs
themeService.Initialize(...).ConfigureTintColor();
```
then you can set your tint color:

```cs
themeService.SetBackdropTintColor(Colors.Yellow);
```

### ConfigureFallbackColor
you can change system backdrop FallBackColor.

```cs
themeService.Initialize(...).ConfigureFallbackColor();
```

then you can set your FallBackColor
```cs
themeService.SetBackdropFallBackColor();
```

{% note warning %}
ConfigureTintColor and ConfigureFallbackColor only works if you use Acrylic or Mica Backdrop.
{% endnote %}

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/TintColor.gif)

### EnableRequestedTheme
This method enables the ability to use the `Application.Current.RequestedTheme`.
```cs
themeService.Initialize(...).EnableRequestedTheme();
```
now you can use `Application.Current.RequestedTheme` in Runtime.

# Changing ElementTheme in Runtime
you can change ElementTheme in Runtime like this:

```cs
themeService.SetElementTheme(ElementTheme.Dark);
// themeService.GetElementTheme();

```

### Changing SystemBackdrop Type in Runtime
you can change SystemBackdrop Type in Runtime like this:

```cs
themeService.SetBackdropType(BackdropType.Mica);
// var systemBackdrop = themeService.GetSystemBackdrop();

```

# Auto Change Theme/Backdrop and Auto Load Default Item

if you want to set defualt item for combobox or radiobuttons, and auto switch between themes or backdrops just add following line in your xaml

## ComboBox

```xml
<ComboBox dev:ThemeServiceAttach.ThemeService="{x:Bind local:App.Current.GetThemeService}">
    <ComboBoxItem Content="Light" Tag="Light" />
    <ComboBoxItem Content="Dark" Tag="Dark" />
    <ComboBoxItem Content="Default" Tag="Default" />
</ComboBox>

<ComboBox dev:ThemeServiceAttach.ThemeService="{x:Bind local:App.Current.GetThemeService}">
    <ComboBoxItem Tag="None" Content="None"/>
    <ComboBoxItem Tag="Mica" Content="Mica"/>
    <ComboBoxItem Tag="MicaAlt" Content="MicaAlt"/>
    <ComboBoxItem Tag="DesktopAcrylic" Content="Desktop Acrylic"/>
    <ComboBoxItem Tag="AcrylicBase" Content="Acrylic Base"/>
    <ComboBoxItem Tag="AcrylicThin" Content="Acrylic Thin"/>
    <ComboBoxItem Tag="Transparent" Content="Transparent"/>
</ComboBox>
```

## RadioButtons

```xml
<StackPanel dev:ThemeServiceAttach.ThemeService="{x:Bind local:App.Current.GetThemeService}">
    <RadioButton Tag="Light" Content="Light"/>
    <RadioButton Tag="Dark"  Content="Dark" />
    <RadioButton Tag="Default" Content="Use system setting" />
</StackPanel>

 <StackPanel dev:ThemeServiceAttach.ThemeService="{x:Bind local:App.Current.GetThemeService}">
    <RadioButton Tag="None" Content="None"/>
    <RadioButton Tag="Mica" Content="Mica"/>
    <RadioButton Tag="MicaAlt" Content="MicaAlt" />
    <RadioButton Content="Desktop Acrylic" Tag="DesktopAcrylic" />
    <RadioButton Content="Acrylic Base" Tag="AcrylicBase" />
    <RadioButton Content="Acrylic Thin" Tag="AcrylicThin" />
    <RadioButton Content="Transparent" Tag="Transparent" />
</StackPanel>
```

# Auto Change Theme/Backdrop and Auto Load Default Item (Old Methods)

## ComboBox
if you want to handle everything by yourself, first of all remove `dev:ThemeServiceAttach.ThemeService="{x:Bind local:App.Current.GetThemeService}"` and then add your events:

for changing and saving application theme / backdrop:
```cs
private void cmbTheme_SelectionChanged(object sender, SelectionChangedEventArgs e)
{
    themeService.OnThemeComboBoxSelectionChanged(sender);
    themeService.OnBackdropComboBoxSelectionChanged(sender);
}
```
for selecting currect combobox item when page is loading, you can call `SetThemeComboBoxDefaultItem` or `SetBackdropComboBoxDefaultItem` method in Page `Loaded` event:

```cs
themeService.SetThemeComboBoxDefaultItem(cmb1);
themeService.SetBackdropComboBoxDefaultItem(cmb2);
```


## RadioButtons
if you want to handle everything by yourself, first of all remove `dev:ThemeServiceAttach.ThemeService="{x:Bind local:App.Current.GetThemeService}"` and then add your events:

for changing and saving application theme / backdrop:
```cs
private void OnThemeRadioButtonChecked(object sender, RoutedEventArgs e)
{
    themeService.OnThemeRadioButtonChecked(sender);
    themeService.OnBackdropRadioButtonChecked(sender);
}
```
for selecting currect radiobutton item when page is loading, you can call `SetThemeRadioButtonDefaultItem` or `SetBackdropRadioButtonDefaultItem` method in Page `Loaded` event:

```cs
themeService.SetThemeRadioButtonDefaultItem(ThemePanel1);
themeService.SetBackdropRadioButtonDefaultItem(ThemePanel2);
```

# Change Theme/Backdrop Manual

you can change Application Theme with `RootTheme`, `ActualTheme` and `ChangeTheme` method:

```cs
themeService.RootTheme = ElementTheme.Dark;
//OR
themeService.ActualTheme = ElementTheme.Dark;
//OR
themeService.SetElementTheme(ElementTheme.Dark);
```

you can change Application SystemBackdrop:

```cs
themeService.SetBackdropType(BackdropType.Mica);
```

# MVVM Pattern
first register a `IThemeService` service:

```cs
services.AddSingleton<IThemeService, ThemeService>();
```
then in your `App.xaml.cs`


```cs
var themeService = GetService<IThemeService>() as ThemeService;
if (themeService != null)
{
    themeService.AutoInitialize(Window);
}
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
