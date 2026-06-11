---
title: NavigationParameterExtension
---

You should use this markup extension with `JsonNavigationService` or `NavigationServiceEx`.

|Name|
|-|
|PageType|
|BreadCrumbHeader|
|NavigationTransitionInfo|

# Example

```xml
<dev:SettingsCard Command="{x:Bind local:App.Current.NavService.NavigateToCommand}"
                  CommandParameter="{dev:NavigationParameter PageType=views:GeneralSettingPage,
                                                             BreadCrumbHeader='General'}"
                  Description="Change your app Settings"
                  Header="General"
                  HeaderIcon="{dev:BitmapIcon Source=Assets/Fluent/Settings.png}"
                  IsClickEnabled="True" />
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.