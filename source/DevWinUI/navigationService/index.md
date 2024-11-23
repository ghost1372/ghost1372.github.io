---
title: NavigationService
---

First Create a Class `myPageService` and inherit from `PageServiceEx`

then in this class in `ctor` add your pages with a key into `_pageKeyToTypeMap` dictionary:

```cs
public class myPageService : PageServiceEx
{
    public myPageService()
    {
        _pageKeyToTypeMap = new Dictionary<string, Type>
        {
            { "BlankPage1", typeof(BlankPage1) },
            { "BlankPage2", typeof(BlankPage2) },
            { "BlankPage3", typeof(BlankPage3) },
        };
    }
}
```

{% note info %}
you can also inherit from IPageService
{% endnote %}

now create a new `myPageService` class, and here you can set DefaultPage or SettingsPage for NavigationView:

```cs
var pageService = new myPageService();
pageService.SetDefaultPage(typeof(HomeLandingsPage));
pageService.SetSettingsPage(typeof(GeneralPage));
```

after creating myPageService, Create `INavigationViewServiceEx` and `INavigationServiceEx`:

```cs
INavigationViewServiceEx navigationViewService;
INavigationServiceEx navigationService;

navigationService = new NavigationServiceEx(pageService);
navigationService.Frame = navFrame;
navigationViewService = new NavigationViewServiceEx(navigationService, pageService);
```

as you can see, we should set `Frame` in `navigationService`.

then we should call `Initialize` Method:

```cs
navigationViewService.Initialize(navigationView);
```

now you should add a `NavigateTo` in your NavigationViewItem:

```xml
<NavigationViewItem helper:NavigationHelperEx.NavigateTo="BlankPage1" Content="First" />
```

{% note info %}
BlankPage1 is a key, you defined it in myPageService.
{% endnote %}

# Config
there are some config methods:

## ConfigAutoSuggestBox

You can search in the autosuggestbox and be navigated to the results page
```cs
navigationViewService.ConfigAutoSuggestBox(autoSuggestBox);
```


```xml
<NavigationView Name="navigationView">
    <NavigationView.AutoSuggestBox>
        <AutoSuggestBox Name="autoSuggestBox" />
    </NavigationView.AutoSuggestBox>
    <NavigationView.MenuItems>
        <NavigationViewItem wuc:NavigationHelper.NavigateTo="BlankPage1"
                            Content="First" />
        <NavigationViewItem Content="Second">
            <NavigationViewItem.MenuItems>
                <NavigationViewItem wuc:NavigationHelper.NavigateTo="BlankPage2"
                                    Content="Third" />
                <NavigationViewItem Content="Four">
                    <NavigationViewItem.MenuItems>
                        <NavigationViewItem wuc:NavigationHelper.NavigateTo="BlankPage3"
                                            Content="Five" />
                    </NavigationViewItem.MenuItems>
                </NavigationViewItem>
            </NavigationViewItem.MenuItems>
        </NavigationViewItem>
    </NavigationView.MenuItems>
    <Frame Name="navFrame" />
</NavigationView>
```

## Complete Codes

```cs
INavigationViewServiceEx navigationViewService;
INavigationServiceEx navigationService;

var pageService = new myPageService();
pageService.SetDefaultPage(typeof(HomeLandingsPage));
pageService.SetSettingsPage(typeof(GeneralPage));

navigationService = new NavigationServiceEx(pageService);
navigationService.Frame = navFrame;

navigationViewService = new NavigationViewServiceEx(navigationService, pageService);
navigationViewService.Initialize(navigationView);
navigationViewService.ConfigAutoSuggestBox(autoSuggestBox);
```

![DevWinUI](https://raw.githubusercontent.com/ghost1372/Resources/main/SettingsUI/Samples/NavigationViewHelper.gif)

# MVVM Pattern
you can use MVVM pattern:

First Register your Services:

```cs
var services = new ServiceCollection();
services.AddSingleton<IPageServiceEx, myPageService>();
services.AddSingleton<INavigationServiceEx, NavigationServiceEx>();
services.AddTransient<INavigationViewServiceEx, NavigationViewServiceEx>();
```

then, in your `MainViewModel`

```cs
public INavigationServiceEx NavigationService { get; }
public INavigationViewServiceEx NavigationViewService { get; }
public MainViewModel(INavigationServiceEx navigationService, INavigationViewServiceEx navigationViewService)
{
    NavigationService = navigationService;
    NavigationViewService = navigationViewService;
}
```

finally in your `MainPage.xaml.cs`

```cs
ViewModel.NavigationService.Frame = frame;
ViewModel.NavigationViewService.Initialize(navigationView);
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.

![DevWinUI](https://raw.githubusercontent.com/ghost1372/Resources/main/SettingsUI/Samples/NavigationViewHelper.gif)
