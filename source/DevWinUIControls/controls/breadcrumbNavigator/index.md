---
title: BreadcrumbNavigator
---

# Attributes
|Name|
|-|
|BreadCrumbs|
|Frame|
|UseBuiltInEventForFrame|

# Event
|Name|
|-|
|ItemClicked|

# Method
|Name|
|-|
|OnItemClicked|
|FixIndex|
|AddNewItem|
|ChangeBreadcrumbVisibility|

# Attached Property
|Name|Remark|
|-|-|
|IsHeaderVisible||
|PageTitle||
|ClearNavigation|Does not work in JsonNavigationViewService Mode|

{% note info %}
if you are using JsonNavigationViewService, we can find Page Title from json file, however if you find some issue with this you can use our PageTitle AttachedProperty. 
{% endnote %}

# Using with JsonNavigationViewService
The easiest way to use, put `BreadcrumbNavigator` in your main page for example in NavigationView Header:

```xml
<dev:BreadcrumbNavigator x:Name="JsonBreadCrumbNavigator"/>
```

then use `ConfigBreadcrumbBar` in `JsonNavigationViewService` 

```cs
jsonNavigationViewService.ConfigBreadcrumbBar(breadCrumb, NavigationPageMappings.PageDictionary);
```

everything will done automatically.

for more info [see here](https://Ghost1372.github.io/DevWinUI/navigationService/#ConfigBreadcrumbBar)

# Normal/Easy Usage
In this method, you have to add the items yourself
```xml
<dev:BreadcrumbNavigator x:Name="BasicBreadCrumbNavigator"/>
```

now you should pass your frame to BasicBreadcrumbNavigator:

```cs
BasicBreadCrumbNavigator.UseBuiltInEventForFrame = true;
BasicBreadCrumbNavigator.Frame = yourFrame;
```

{% note info %}
if you want to use AOT feature, you should pass your `PageDictionary` to `BasicBreadCrumbNavigator` otherwise you can skip this option. 
{% endnote %}

```cs
BasicBreadCrumbNavigator.PageDictionary = NavigationPageMappings.PageDictionary;
```

for more info and finding a T4 template for generating PageDictionary [see here](https://Ghost1372.github.io/DevWinUI/navigationService/#ConfigBreadcrumbBar)

then in your pages you should use attached property for Item Title and visibility

```xml
<Page
wuc:BreadcrumbNavigator.PageTitle="Test"
wuc:BreadcrumbNavigator.IsHeaderVisible="True"

>
```

{% note info %}
if you want to exclude a page to be shown in BreadcrumbNavigator, you can use our `IsHeaderVisibile` AttachedProperty. 
{% endnote %}

if you set `BasicBreadCrumbNavigator.UseBuiltInEventForFrame = true;` you can bypass this section.
when you are navigating to another pages, you should add a new item to `BreadcrumbNavigator`: (only do this if `UseBuiltInEventForFrame = false`)

```cs
BasicBreadcrumbNavigator.AddNewItem(targetPage, actionAfterItemAdded);
```

We have already prepared some codes, so clicking on the items and fixing the index of the items will be done automatically.
If you need to do more, you can create the `ItemClicked` event, but you should know that you have to do the rest yourself.

```cs
BasicBreadcrumbNavigator.ItemClicked += OnItemClicked;
```

you can use our prepared codes or you can write your own codes here:

```cs
private void OnItemClicked(BreadcrumbBar sender, BreadcrumbBarItemClickedEventArgs args)
{
    BasicBreadcrumbNavigator.OnItemClicked(args);
}
```

# Normal/Hard way
in this way you need to handle everything, so please look for source code and see how things happened.


# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/BreadcrumbNavigator.gif)
