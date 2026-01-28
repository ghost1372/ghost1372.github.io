---
title: NavigationServiceEx
---

Easily implement a NavigationView!

First Add a NavigationView with your Items:

```cs
<NavigationView x:Name="NavView">
    <NavigationView.MenuItems>
        <NavigationViewItem dev:NavigationServiceEx.NavigateTo="views:BlankPage1"
                            Content="Page 1" />
        <NavigationViewItem dev:NavigationServiceEx.NavigateTo="views:BlankPage2"
                            Content="Page 2" />
        <NavigationViewItem dev:NavigationServiceEx.NavigateTo="views:BlankPage3"
                            Content="Page 3" />
    </NavigationView.MenuItems>
    <Frame x:Name="NavFrame"/>
</NavigationView>
```

{% note warning %}
`NavigationServiceEx.NavigateTo` attached property allows each `NavigationViewItem` to define the destination page directly in XAML. It simplifies navigation by binding menu items to specific views without requiring explicit event handlers.
{% endnote %}

then Create a new INavigationServiceEx:

```cs
INavigationServiceEx navigationService;
navigationService = new NavigationServiceEx();

```
now you should call `Initialize` method with a `NavigationView` and `Frame`

```cs
navigationService.Initialize(NavView, NavFrame);
```

# NavigateToCommand
You can use a predefined command for navigating between pages. To do this, define a `CommandParameter` using the `NavigationParameter` markup extension, specifying the target page and the BreadCrumbNavigator header (if using `ConfigureBreadCrumbNavigator`). Additionally, you can set a `NavigationTransitionInfo` to customize the transition effect.

```cs
<Button Content="Navigate" Command="{x:Bind local:App.Current.NavService.NavigateToCommand}"
                           CommandParameter="{dev:NavigationParameter PageType=views:GeneralSettingPage, BreadCrumbHeader='General'}" />
```

# Configs
there are some configure methods:

## ConfigureDefaultPage
set Default page for NavigationView

```cs
Initializ(...).ConfigureDefaultPage(typeof(HomeLandingsPage));
```

## ConfigureSettingsPage
set Settings page for NavigationView

```cs
Initializ(...).ConfigureSettingsPage(typeof(GeneralPage));
```

## ConfigureBreadcrumbBar
You should have a `PageDictionary` like this, which you can define your pages:

```cs
public Dictionary<Type, BreadcrumbPageConfig> PageDictionary = new()
{
    {typeof(BlankPage1), new BreadcrumbPageConfig { PageTitle = "Page 1", IsHeaderVisible = true, ClearNavigation = false}},
    {typeof(BlankPage2), new BreadcrumbPageConfig { PageTitle = "Page 2", IsHeaderVisible = true, ClearNavigation = false}},
    {typeof(BlankPage3), new BreadcrumbPageConfig { PageTitle = "Page 3", IsHeaderVisible = true, ClearNavigation = false}},
};
```

it is better to place `BreadcrumbNavigator` in `NavigationView.Header`

```xml
<NavigationView.Header>
    <dev:BreadcrumbNavigator x:Name="BreadCrumbNav" />
</NavigationView.Header>
```

Now Call `ConfigureBreadcrumbBar` method:

```cs
Initializ(...).ConfigureBreadcrumbBar(BreadCrumbNav, NavigationPageMappings.PageDictionary);
```

use `dev:BreadcrumbNavigator.PageTitle` and `dev:BreadcrumbNavigator.IsHeaderVisible` attached properties on your pages, for Title and Header visiblity.

### Source Generator
You can simplify creating `PageDictionary` by installing our `DevWinUI.SourceGenerator` nuget package.

1.Install nuget package
`Install-Package DevWinUI.SourceGenerator`

2.Just add an `AdditionalFiles` entry to your `csproj`.

```xml
<ItemGroup>
  <AdditionalFiles Include="**\*.xaml" />
</ItemGroup>
```

## ConfigureTitleBar
you can use ConfigureTitleBar to automatically handle `BackButton` and `PaneToggleButton`

```cs
Initializ(...).ConfigureTitleBar(AppTitleBar);
```

![NavigationViewHelper](https://raw.githubusercontent.com/ghost1372/Resources/main/SettingsUI/Samples/NavigationViewHelper.gif)

## Complete Codes

```cs
INavigationServiceEx navigationService;
navigationService = new NavigationServiceEx();
navigationService.Initialize(NavView, NavFrame)
                 .ConfigureDefaultPage(typeof(HomeLandingPage))
                 .ConfigureSettingsPage(typeof(SettingsPage))
                 .ConfigureBreadcrumbBar(BreadCrumbNav, BreadcrumbPageMappings.PageDictionary);
```

# MVVM Pattern
first register a `INavigationServiceEx` service:


```cs
services.AddSingleton<INavigationServiceEx, NavigationServiceEx>();
```

then:

```cs
public MainPage()
{
    this.InitializeComponent();
    var navService = App.GetService<INavigationServiceEx>() as NavigationServiceEx;
    
    navService.Initialize(NavView, NavFrame)
            .ConfigureDefaultPage(typeof(HomeLandingPage))
            .ConfigureSettingsPage(typeof(SettingsPage));
}
```

# INavigationAwareEx
you can use `INavigationAwareEx` in your ViewModel and you can access to `OnNavigatedFrom` and `OnNavigatedTo` methods.

```cs
public partial class myViewModel : INavigationAwareEx

public void OnNavigatedFrom()
{

}

public async void OnNavigatedTo(object parameter)
{
    
}

```

{% note warning %}
you should set `DataContext`, otherwise you cant use this interface.
{% endnote %}

```cs
public myViewModel ViewModel {get;}

public BlankPage()
{
    ViewModel = App.GetService<myViewModel>();
    DataContext = ViewModel;
    this.InitializeComponent();
}
```

# Notes

{% note warning %}
If you want to use `Frame.GoBack` to navigate back in the frame while maintaining the correct `NavigationViewItem` selection, you should use `NavigationServiceEx.GoBack` instead. This ensures that the NavigationView stays in sync with the current page.
{% endnote %}

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.

![NavigationViewHelper](https://raw.githubusercontent.com/ghost1372/Resources/main/SettingsUI/Samples/NavigationViewHelper.gif)
