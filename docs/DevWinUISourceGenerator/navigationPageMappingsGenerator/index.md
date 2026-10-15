---
title: NavigationPageMappingsGenerator
---

Use this generator to create a page-mapping dictionary class for `JsonNavigationService`, and configure it by calling
`NavService.Initialize(NavView, NavFrame, NavigationPageMappings.PageDictionary).`

This generator reads the JSON file and extracts each `UniqueId` along with its corresponding page type.

# How To Use it?

Just add an `AdditionalFiles` entry to your .csproj.

```xml
<ItemGroup>
  <AdditionalFiles Include="Assets\NavViewMenu\AppData.json" Link="%(RecursiveDir)%(Filename)%(Extension)" Visible="false"/>
</ItemGroup>
```

# Namespace

You can define your own namespace by adding a property to a `PropertyGroup`.

```xml
<PropertyGroup>
    <NavigationMappingsNamespace>MyNavigationMappingsNamespace</NavigationMappingsNamespace>
</PropertyGroup>
```

# Result
The result is a mapping dictionary similar to the following:

```cs
public partial class NavigationPageMappings
{
    public static Dictionary<string, Type> PageDictionary { get; } = new Dictionary<string, Type>
    {
        {"DevWinUIGallery.Views.HomeLandingPage", typeof(DevWinUIGallery.Views.HomeLandingPage)},
        {"DevWinUIGallery.Views.ColorAnalyzerPage", typeof(DevWinUIGallery.Views.ColorAnalyzerPage)},
        {"DevWinUIGallery.Views.MenuFlyoutSecondaryMenuPage", typeof(DevWinUIGallery.Views.MenuFlyoutSecondaryMenuPage)},
    }
}
```

> [!NOTE]  
> Each valid JSON file generates its own mapping class. A single file keeps the `NavigationPageMappings` name; with multiple files, `AppData.json` (or the first file by path if absent) generates `NavigationPageMappings`, while other files use their filename as a suffix (for example, `AppDataGlyph.json` generates `NavigationPageMappingsAppDataGlyph`).

