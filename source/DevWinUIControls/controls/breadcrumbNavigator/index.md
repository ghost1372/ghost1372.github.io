---
title: BreadcrumbNavigator
---

# Attributes
|Name|
|-|
|AllowDuplication|
|NavigationTransitionInfo|
|IsClickable|
|HeaderVisibilityOptions|
|BreadCrumbs|

# Event
|Name|
|-|
|ItemClicked|

# Method
|Name|
|-|
|NavigateFromBreadcrumb|
|Initialize|
|AddNewItem|
|ChangeBreadcrumbVisibility|

# Attached Property
|Name|Remark|
|-|-|
|IsHeaderVisible||
|PageTitle||
|ClearNavigation|Does not work in JsonNavigationService Mode|

# Using with JsonNavigationService

{% note info %}
if you are using JsonNavigationService, we can find Page Title from json file, however if you find some issue with this you can use our PageTitle AttachedProperty. 
{% endnote %}

The easiest way to use, put `BreadcrumbNavigator` in your main page for example in NavigationView Header:

```xml
<dev:BreadcrumbNavigator x:Name="BreadCrumbNav"/>
```

then use `ConfigBreadcrumbBar` in `JsonNavigationService` 

```cs
jsonNavigationService.ConfigBreadcrumbBar(BreadCrumbNav, NavigationPageMappings.PageDictionary);
```

everything will done automatically.

for more info [see here](https://Ghost1372.github.io/DevWinUI/jsonNavigationService/#ConfigureBreadcrumbBar)

# Using with NavigationServiceEx
The easiest way to use, put `BreadcrumbNavigator` in your main page for example in NavigationView Header:

```xml
<dev:BreadcrumbNavigator x:Name="BreadCrumbNav"/>
```

then use `ConfigBreadcrumbBar` in `NavigationServiceEx` 

```cs
navigationServiceEx.ConfigBreadcrumbBar(BreadCrumbNav, NavigationPageMappings.PageDictionary);
```

everything will done automatically.

for more info [see here](https://Ghost1372.github.io/DevWinUI/navigationService/#ConfigureBreadcrumbBar)

# Normal Usage
In this method, you have to add the items yourself
```xml
<dev:BreadcrumbNavigator x:Name="BasicBreadCrumbNavigator"/>
```

now you should call `Initialize` method:

```cs
public static Dictionary<Type, BreadcrumbPageConfig> pageDictionary = new()
{
    {typeof(DevWinUIGallery.Views.SettingsPage), new BreadcrumbPageConfig { PageTitle = null, IsHeaderVisible = true, ClearNavigation = false}},
    {typeof(DevWinUIGallery.Views.AboutUsSettingPage), new BreadcrumbPageConfig { PageTitle = null, IsHeaderVisible = true, ClearNavigation = false}},
    {typeof(DevWinUIGallery.Views.AppUpdateSettingPage), new BreadcrumbPageConfig { PageTitle = null, IsHeaderVisible = true, ClearNavigation = false}},
    {typeof(DevWinUIGallery.Views.GeneralSettingPage), new BreadcrumbPageConfig { PageTitle = null, IsHeaderVisible = true, ClearNavigation = false}},
    {typeof(DevWinUIGallery.Views.ThemeSettingPage), new BreadcrumbPageConfig { PageTitle = null, IsHeaderVisible = true, ClearNavigation = false}},
};
BasicBreadCrumbNavigator.Initialize(frame, navigationView, pageDictionary);
```

{% note info %}
for more info and finding a T4 template for generating PageDictionary [see here](https://Ghost1372.github.io/DevWinUI/navigationService/#ConfigBreadcrumbBar)
{% endnote %}

{% note info %}
if you want to exclude a page to be shown in BreadcrumbNavigator, you can use our `IsHeaderVisibile` AttachedProperty. 
{% endnote %}

then in your pages you should use attached property for Item Title and visibility

```xml
<Page
dev:BreadcrumbNavigator.PageTitle="Test"
dev:BreadcrumbNavigator.IsHeaderVisible="True"

>
```

when you are navigating to another page, you should add a new item to `BreadcrumbNavigator`:

```cs
BasicBreadcrumbNavigator.AddNewItem(targetPage);
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.

![BreadcrumbNavigator](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/BreadcrumbNavigator.gif)
