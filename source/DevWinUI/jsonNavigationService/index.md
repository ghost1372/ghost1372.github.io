---
title: JsonNavigationService
---

# Normal Usage

Easily implement a `NavigationView` With `Json` file (we read navigationview items from a json file)


First Add a NavigationView:

```xml
<NavigationView x:Name="NavView">
    <NavigationView.AutoSuggestBox>
        <AutoSuggestBox x:Name="autoSuggestBox">
        </AutoSuggestBox>
    </NavigationView.AutoSuggestBox>
    <Frame x:Name="NavFrame"/>
</NavigationView>
```

then Create a new `IJsonNavigationService`:

```cs
IJsonNavigationService jsonNavigationService;
jsonNavigationService = new JsonNavigationService();
```

now you should call `Initialize` method with a `NavigationView`, `Frame` and `PageDictionary`

```cs
public Dictionary<string, Type> PageDictionary { get; } = new Dictionary<string, Type>
{
    {"DevWinUIGallery.Views.HomeLandingPage", typeof(DevWinUIGallery.Views.HomeLandingPage)},
    {"DevWinUIGallery.Views.BlankPage1", typeof(DevWinUIGallery.Views.BlankPage1)},
};

jsonNavigationService.Initialize(NavView, NavFrame, NavigationPageMappings.PageDictionary)
                     .ConfigureJsonFile("Assets/NavViewMenu/AppData.json");
```

# Json File

{% note info %}
For a complete list of available properties and the full JSON structure, please refer to the <ins>**[JSON File](https://ghost1372.github.io/DevWinUI/jsonNavigationService/jsonFile)**</ins> Structure Documentation.
{% endnote %}


This is just an example:

The `UniqueId` must exactly match the full namespace (including file name) of your .xaml view file (e.g., `DevWinUIGallery.Views.HomeLandingPage`).

```json
{
  "$schema": "https://raw.githubusercontent.com/Ghost1372/DevWinUI/refs/heads/main/tools/AppData.Schema.json",
  "Groups": [
    {
      "UniqueId": "DevWinUIGallery.Views.HomeLandingPage",
      "ShowItemsWithoutGroup": true,
      "Items": [
        {
          "UniqueId": "DevWinUIGallery.Views.HomeLandingPage",
          "Title": "Home",
          "HideItem": true,
          "ImagePath": "ms-appx:///Assets/Icon.png"
        }
      ]
    },
    {
      "UniqueId": "LandingPages",
      "SectionId": "DevWinUIGallery.Views.DemoSectionPage",
      "Title": "LandingPages",
      "SecondaryTitle": "",
      "ImagePath": "ms-appx:///Assets/Fluent/dataGrid.png",
      "UseBuiltInNavigationViewInfoBadgeStyle": true,
      "Items": [
        {
          "UniqueId": "DevWinUIGallery.Views.BlankPage1",
          "Title": "BlankPage1",
          "Subtitle": "",
          "ImagePath": "ms-appx:///Assets/Fluent/DataGrid.png"
        }
      ]
    }
  ]
}

```


# NavigateToCommand
You can use a predefined command for navigating between pages. To do this, define a `CommandParameter` using the `NavigationParameter` markup extension, specifying the target page and the BreadCrumbNavigator header (if using `ConfigureBreadCrumbNavigator`). Additionally, you can set a `NavigationTransitionInfo` to customize the transition effect.

```cs
<Button Content="Navigate" Command="{x:Bind local:App.Current.NavService.NavigateToCommand}"
                           CommandParameter="{dev:NavigationParameter PageType=views:GeneralSettingPage, BreadCrumbHeader='General'}" />
```

# Source Generator
You can simplify creating `PageDictionary` by installing our `DevWinUI.SourceGenerator` nuget package.

1.Install nuget package
`Install-Package DevWinUI.SourceGenerator`

2.Just add an `AdditionalFiles` entry to your `csproj`.

```xml
<ItemGroup>
  <AdditionalFiles Include="Assets\NavViewMenu\AppData.json" />
</ItemGroup>
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

## ConfigureAutoSuggestBox
You can search in the autosuggestbox and be navigated to the results page

```cs
Initializ(...).ConfigureAutoSuggestBox(autoSuggestBox);
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

## ConfigureSectionPage
if you want to click on a group and see list of items, you can use SectionPage:

```cs
Initializ(...).ConfigureSectionPage(typeof(DemoSectionPage));
```
more details about [SectionPage](https://ghost1372.github.io/DevWinUIControls/landingPages/sectionPage/)

## ConfigureTitleBar
you can use ConfigureTitleBar to automatically handle `BackButton` and `PaneToggleButton`

```cs
Initializ(...).ConfigureTitleBar(AppTitleBar);
```

## Complete Codes

```cs
IJsonNavigationService jsonNavigationService;
jsonNavigationService = new JsonNavigationService();
jsonNavigationService
                .Initialize(NavView, NavFrame, NavigationPageMappings.PageDictionary)
                .ConfigureDefaultPage(typeof(HomeLandingPage))
                .ConfigureSettingsPage(typeof(SettingsPage))
                .ConfigureSectionPage(typeof(DemoSectionPage))
                .ConfigureJsonFile("Assets/NavViewMenu/AppData.json")
                .ConfigureAutoSuggestBox(HeaderAutoSuggestBox)
                .ConfigureBreadcrumbBar(BreadCrumbNav, BreadcrumbPageMappings.PageDictionary);
```

{% note warning %}
Make sure to call `ConfigureJsonFile` method after `ConfigureDefaultPage`, this will ensure the default page loads properly in initial load.
{% endnote %}

# MVVM Patern
first register a `IJsonNavigationService` service:

```cs
services.AddSingleton<IJsonNavigationService, JsonNavigationService>();
```

then:

```cs
public MainPage()
{
    this.InitializeComponent();
    var navService = App.GetService<IJsonNavigationService>() as JsonNavigationService;
    
    navService.Initialize(NavView, NavFrame, NavigationPageMappings.PageDictionary)
            .ConfigureDefaultPage(typeof(HomeLandingPage))
            .ConfigureSettingsPage(typeof(SettingsPage))
            .ConfigureSectionPage(typeof(DemoSectionPage))
            .ConfigureJsonFile("Assets/NavViewMenu/AppData.json")
            .ConfigureAutoSuggestBox(HeaderAutoSuggestBox);
}
```
{% note warning %}
Make sure to call `ConfigureJsonFile` method after `ConfigureDefaultPage`, this will ensure the default page loads properly in initial load.
{% endnote %}

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
If you want to use `Frame.GoBack` to navigate back in the frame while maintaining the correct `NavigationViewItem` selection, you should use `JsonNavigationService.GoBack` instead. This ensures that the NavigationView stays in sync with the current page.
{% endnote %}

# Localize Strings

you can use our built-in `ResourceManager/ResourceContext` or you can define your specific `ResourceManager/ResourceContext` in `ConfigureJsonFile`.

step1:
add `"UsexUid": true` for every item you want in json file.

step2:
add some resources in your resw files. you should follow WinUI resource naming.
for example: 

|Key|Value|
|-|-|
|Nav_HomeTitle.Title|Home|
|Nav_HomeTitle.SecondaryTitle|My Home|
|Nav_HomeTitle.Subtitle|First Page|
|Nav_HomeTitle.Description|See Whats new!|

step3:
use your `key` in `LocalizeId` field in json file.

`"LocalizeId": "Nav_HomeTitle"`


{% note warning %}
- Set BuildAction for `AppData.json` to `Content` and if you are in a Unpackaged app, also set `CopyToOutput` to `Always`
{% endnote %}

this is a json file content:

```json
{
  "$schema": "https://raw.githubusercontent.com/Ghost1372/DevWinUI/refs/heads/main/tools/AppData.Schema.json",
  "Groups": [
    {
      "UniqueId": "Features",
      "Title": "Features pages",
      "IsSpecialSection": false,
      "Items": [
        {
          "UniqueId": "DevWinUI.DemoApp.Pages.ApplicationDataContainerPage",
          "Title": "ApplicationDataContainer",
          "SecondaryTitle": "Test SecondaryTitle",
          "Subtitle": "you can use ApplicationDataContainerHelper for saving and loading application settings.",
          "ImagePath": "ms-appx:///Assets/Modules/PT.png",
          "Description": "test description",
          "IsUpdated": true,
          "IncludedInBuild": true,
          "Links": [
            {
              "Title": "ApplicationDataContainerPage",
              "Uri": "https://DevWinUI.github.io/DevWinUI/helpers/applicationDataContainerHelper/"
            }
          ],
          "Extra": [
            "AppBarToggleButton",
            "AppBarSeparator",
            "CommandBar"
          ]
        },
        {
          "UniqueId": "DevWinUI.DemoApp.Pages.AppNotificationPage",
          "Title": "App Notification",
          "SecondaryTitle": "Test SecondaryTitle",
          "Subtitle": "you can use AppNotificationPage for Sending Toast Notification.",
          "ImagePath": "ms-appx:///Assets/Modules/PT.png",
          "IncludedInBuild": true,
          "Links": [
            {
              "Title": "AppNotificationPage",
              "Uri": "https://DevWinUI.github.io/DevWinUI/helpers/appNotification/"
            }
          ]
        },
      ]
    },
    {
      "UniqueId": "Settings",
      "Title": "Settings pages",
      "SecondaryTitle": "Test SecondaryTitle",
      "Items": [
        {
          "UniqueId": "DevWinUI.DemoApp.Pages.OobePage",
          "Title": "Oobe Page",
          "ApiNamespace": "DemoApp",
          "SecondaryTitle": "Test SecondaryTitle",
          "Subtitle": "Settings Page with a Hero Image",
          "ImagePath": "ms-appx:///Assets/Modules/PT.png",
          "IsUpdated": true,
          "IncludedInBuild": true,
        }
      ]
    }
  ]
}

```

- UniqueId
this is your pages full address, for example: `DevWinUI.DemoApp.Pages.ApplicationDataContainerPage`

- ApiNamespace
this is your apps namespace, for example: `DevWinUI.DemoApp`

{% note warning %}
for Navigating to a Page we used UniqueId.
{% endnote %}

{% note warning %}
if you need dynamic changes, you can call `ReInitialize()` method. 
{% endnote %}

# ReInitialize
Reset everything and ReInitialize it.

# InfoBadge
The InfoBadge feature allows you to visually mark items or groups using a small badge indicator (such as "NEW", "1", or an icon). This is useful for highlighting updates, status changes, or important items in your app's navigation or landing page.
Each DataGroup and DataItem can display InfoBadges using either custom styles or built-in styles.

## Group Level Properties
|Name|Remark|
|-|-|
|UseBuiltInNavigationViewInfoBadgeStyle| If set to true, the group will use the `DefaultBuiltInNavigationViewInfoBadgeStyle` for badges in the NavigationView.|
|UseBuiltInLandingPageInfoBadgeStyle| If set to true, the group will use the `DefaultBuiltInLandingPageInfoBadgeStyle` for badges on the landing page.|
|DefaultBuiltInNavigationViewInfoBadgeStyle| Name of the built-in style used for NavigationView InfoBadges.|
|DefaultBuiltInLandingPageInfoBadgeStyle| Name of the built-in style used for landing page InfoBadges.|

## Item Level Properties
|Name|Remark|
|-|-|
|NavigationViewInfoBadgeStyle| Custom style name for the InfoBadge shown in the NavigationView.|
|LandingPageInfoBadgeStyle| Custom style name for the InfoBadge shown on the landing page.|
|IsLandingPageInfoBadgeHidden| Hides the InfoBadge on the landing page when set to true.|
|IsNavigationViewInfoBadgeHidden| Hides the InfoBadge in the NavigationView when set to true.|
|InfoBadgeValue| Text value displayed in the InfoBadge. Used by styles like `StringInfoBadgeStyle`. this value will be injected to `InfoBadge.Tag` property|

## Example

```json
{
  "UniqueId": "Common",
  "SectionId": "DevWinUIGallery.Views.DemoSectionPage",
  "Title": "Common",
  "ImagePath": "ms-appx:///Assets/Fluent/Extensions.png",
  "UseBuiltInNavigationViewInfoBadgeStyle": true,
  "Items": [
    {
      "UniqueId": "DevWinUIGallery.Views.DragMoveAndResizePage",
      "Title": "DragMoveAndResize",
      "Subtitle": "Drag and Move Window by UIElement",
      "ImagePath": "ms-appx:///Assets/Fluent/Extensions.png",
      "DataInfoBadge": {
        "NavigationViewInfoBadgeStyle": "StringInfoBadgeStyle",
        "InfoBadgeValue": "BETA"
      }
    }
  ]
}
```
![JsonNavigationViewInfoBadge](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/JsonNavigationViewInfoBadge.png)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.

![NavigationWithJson](https://raw.githubusercontent.com/ghost1372/Resources/main/SettingsUI/Samples/NavigationWithJson.png)