---
title: ThemeService
---

You can simplify the operation of saving, retrieving and selecting the Application theme and backdrop. 
All operations are performed automatically.

# Backdrops
|Name|
|-|
|None|
|Mica|
|MicaAlt|
|Acrylic|
|AcrylicThin|
|Transparent|

# Events
|Name|
|-|
|ThemeChanged|
|BackdropChanged|

# Properties
|Name|
|-|
|IsDark|
|ElementTheme|
|ActualTheme|
|BackdropType|

# Methods
|Name|
|-|
|Window|
|SetElementThemeAsync|
|SetElementThemeWithoutSaveAsync|
|SetBackdropTypeAsync|
|SetBackdropTypeWithoutSaveAsync|
|GetAcrylicSystemBackdrop|
|GetMicaSystemBackdrop|
|GetSystemBackdrop|
|OnThemeComboBoxSelectionChanged|
|SetThemeComboBoxDefaultItem|
|OnBackdropComboBoxSelectionChanged|
|SetBackdropComboBoxDefaultItem|
|OnThemeRadioButtonChecked|
|SetThemeRadioButtonDefaultItem|
|OnBackdropRadioButtonChecked|
|SetBackdropRadioButtonDefaultItem|
|Dispose|
|ConfigureAutoSave|
|ConfigureElementTheme|
|ConfigureBackdrop|
|Initialize|

# Simple Usage

```cs
var themeService = new ThemeService();
themeService.Initialize(window);
```

# Configs
there are some configure methods:

## ConfigureBackdrop

If you use the `ConfigureBackdrop`, the themeService will automatically save and restore the SystemBackdrop (if `ConfigureAutoSave` is enabled (by default it is enabled))

```cs
themeService.ConfigureBackdrop(BackdropType.Mica).Initialize(window);
```

## ConfigureElementTheme

If you use the `ConfigureElementTheme`, the themeService will automatically save and restore the ElementTheme (if `ConfigureAutoSave` is enabled (by default it is enabled))

```cs
themeService.ConfigureElementTheme(ElementTheme.Default).Initialize(window);
```

## ConfigureAutoSave
```cs
themeService.ConfigureAutoSave(true, filePath).Initialize(window);
```

# Changing ElementTheme in Runtime
you can change ElementTheme in Runtime like this:

```cs
await themeService.SetElementThemeAsync(ElementTheme.Dark);
```

# Changing SystemBackdrop Type in Runtime
you can change SystemBackdrop Type in Runtime like this:

```cs
await themeService.SetBackdropTypeAsync(BackdropType.Mica);
```

# MVVM Pattern
first register a `IThemeService` service:

```cs
services.AddSingleton<IThemeService, ThemeService>();
```
then in your `App.xaml.cs`


```cs
var themeService = GetService<IThemeService>() as ThemeService;
themeService.Initialize(Window);
```

# Multi-Window
if you have multiple window, you need to use `WindowHelper.TrackWindow` method, before Activate your window.

```cs
Window myWindow = new Window();
WindowHelper.TrackWindow(myWindow);
myWindow.Activate();
```

# TintColor (Mica and Acrylic)

**There are no built-in methods for working with `TintColor`. However, you can access the current backdrop by calling `GetAcrylicSystemBackdrop` or `GetMicaSystemBackdrop`, and then modify the `TintColor` property manually.**

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
    <ComboBoxItem Tag="MicaAlt" Content="Mica Alt"/>
    <ComboBoxItem Tag="Acrylic" Content="Acrylic"/>
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
    <RadioButton Tag="MicaAlt" Content="Mica Alt" />
    <RadioButton Content="Acrylic" Tag="Acrylic" />
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

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
