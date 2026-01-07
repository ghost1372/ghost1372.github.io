---
title: BreadcrumbPageMappingsGenerator
---

Use this generator to create a page-mapping dictionary class for `JsonNavigationService`, and configure it using
`.ConfigureBreadcrumbBar(BreadCrumbNav, BreadcrumbPageMappings.PageDictionary)`.

This generator scans all XAML files and extracts pages that define `BreadcrumbNavigator` attached properties.

# How To Use it?

Just add an `AdditionalFiles` entry to your .csproj.

```xml
<ItemGroup>
  <AdditionalFiles Include="**\*.xaml" />
</ItemGroup>
```

# Namespace

You can define your own namespace by adding a property to a `PropertyGroup`.

```xml
<PropertyGroup>
    <BreadcrumbMappingsNamespace>MyBreadcrumbMappingsNamespace</BreadcrumbMappingsNamespace>
</PropertyGroup>
```

# Result

The output is a mapping dictionary similar to the following:

```cs
public partial class BreadcrumbPageMappings
{
    public static Dictionary<Type, BreadcrumbPageConfig> PageDictionary = new()
    {
        {typeof(DevWinUIGallery.Views.SettingsPage), new BreadcrumbPageConfig { PageTitle = null, IsHeaderVisible = true, ClearNavigation = false}},
        {typeof(DevWinUIGallery.Views.AboutUsSettingPage), new BreadcrumbPageConfig { PageTitle = null, IsHeaderVisible = true, ClearNavigation = false}},
        {typeof(DevWinUIGallery.Views.AppUpdateSettingPage), new BreadcrumbPageConfig { PageTitle = null, IsHeaderVisible = true, ClearNavigation = false}},
        {typeof(DevWinUIGallery.Views.GeneralSettingPage), new BreadcrumbPageConfig { PageTitle = null, IsHeaderVisible = true, ClearNavigation = false}},
        {typeof(DevWinUIGallery.Views.ThemeSettingPage), new BreadcrumbPageConfig { PageTitle = null, IsHeaderVisible = true, ClearNavigation = false}},
    };
}
```

