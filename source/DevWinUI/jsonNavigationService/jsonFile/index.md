---
title: JsonFile
---

JSON File Structure.

💡 Schema Support:
This JSON structure is supported by an IntelliSense schema available at:
`https://raw.githubusercontent.com/Ghost1372/DevWinUI/refs/heads/main/AppData.Schema.json`

```json
{
  "$schema": "https://raw.githubusercontent.com/Ghost1372/DevWinUI/refs/heads/main/AppData.Schema.json",
  ...
}

```

You can reference this schema in your JSON files for editor support like autocompletion and validation by adding the following line at the top of your JSON file:

# BaseDataInfo
Inherited by `DataGroup` and `DataItem`


|Name|Type|Remark|
|-|-|-|
|UniqueId|string|The `UniqueId` must exactly match the full namespace (including file name) of your .xaml view file (e.g., `DevWinUIGallery.Views.HomeLandingPage`).|
|SectionId|string|Defines a page as a section in the gallery. Initialize it using `.ConfigureSectionPage(typeof(DemoSectionPage))`.Make sure to provide the full namespace of the section page, for example:`DevWinUIGallery.Views.DemoSectionPage`[See example here](https://ghost1372.github.io/DevWinUI/jsonNavigationService/#ConfigureSectionPage)|
|Title|string||
|ApiNamespace|string||
|SecondaryTitle|string||
|Subtitle|string||
|Description|string||
|ImagePath|string|Defines the image source shown on both the LandingPage and the NavigationViewItem icon. Example: `ms-appx:///Assets/Fluent/Extensions.png`|
|IconGlyph|string|Specifies a glyph (Unicode character) to be used as the icon for the NavigationViewItem, typically via a FontIcon. Example: `EA6A` Note: If both `IconGlyph` and `ImagePath` are defined, the NavigationViewItem will prioritize and use `IconGlyph`|
|LocalizeId|string|Specifies the resource key used for localizing properties such as `Title`, `Subtitle`, `Description`, and `SecondaryTitle`. Example: `Nav_HomeKey` Requires `UsexUid` to be set to true. [See example here](https://ghost1372.github.io/DevWinUI/jsonNavigationService/#Localize-Strings)|
|IsNavigationViewItemHeader|bool|Marks the item as a header within the `NavigationView`|
|UsexUid|bool|Enables localization through `x:Uid`. Required when using `LocalizeId`.|
|DataInfoBadge|DataInfoBadge|Assigns an `InfoBadge` to the item, allowing visual indicators like status or alerts.|

# DataInfoBadge

|Name|Type|Remark|
|-|-|-|
|NavigationViewInfoBadgeStyle|string|Specifies the `style` of the `InfoBadge` in the `NavigationView`. Example: `StringInfoBadgeStyle`|
|LandingPageInfoBadgeStyle|string|Specifies the style of the `InfoBadge` on the `LandingPage`. Example: `AttentionIconInfoBadgeStyle`|
|InfoBadgeValue|string|Sets the `value` of the `InfoBadge` if the style is `StringInfoBadgeStyle`. Examples: "`BETA`", "`NEW`"|
|IsLandingPageInfoBadgeHidden|bool|Controls the visibility of the InfoBadge on the LandingPage.|
|IsNavigationViewInfoBadgeHidden|bool|Controls the visibility of the InfoBadge in the NavigationView item.|

# DataGroup (inherits from BaseDataInfo)

|Name|Type|Remark|
|-|-|-|
|DefaultBuiltInNavigationViewInfoBadgeStyle|string|Sets the default style for `InfoBadge` in the `NavigationView`. Default: `StringInfoBadgeStyle`|
|DefaultBuiltInLandingPageInfoBadgeStyle|string|Sets the default style for `InfoBadge` on the `LandingPage`. Default: `AttentionIconInfoBadgeStyle`|
|IsExpanded|bool||
|IsSpecialSection|bool||
|HideGroup|bool|Hides the entire group from the `NavigationView`|
|ShowItemsWithoutGroup|bool|Displays individual NavigationViewItems that don’t belong to any group as separate entries.|
|IsFooterNavigationViewItem|bool|If true, the item will be placed in the footer section of the NavigationView.|
|Order|bool|When enabled, sorts items in ascending order.|
|OrderByDescending|bool|If true, sorts items in descending order.|
|UseBuiltInNavigationViewInfoBadgeStyle|bool|If enabled, applies the default style defined in `DefaultBuiltInNavigationViewInfoBadgeStyle`. Automatically displays InfoBadge when `IsNew`, `IsUpdated`, or `IsPreview` are set to true.|
|UseBuiltInLandingPageInfoBadgeStyle|bool|If enabled, applies the default style defined in `DefaultBuiltInLandingPageInfoBadgeStyle`. Automatically displays InfoBadge when `IsNew`, `IsUpdated`, or `IsPreview` are set to true.|
|Items|ObservableCollection<DataItem>||

# DataItem (inherits from BaseDataInfo)

|Name|Type|Remark|
|-|-|-|
|Content|string||
|Parameter|object||
|IsNew|bool||
|IsUpdated|bool||
|IsPreview|bool||
|HideItem|bool|Hides the item from the LandingPage.|
|HideNavigationViewItem|bool|Hides the item from the NavigationView.|
|IncludedInBuild|bool||
|Links|ObservableCollection<DataLink>||
|Extra|ObservableCollection<string>||

# DataLink

|Name|Type|Remark|
|-|-|-|
|Title|string||
|Uri|string||


# Example

```json
{
  "$schema": "https://raw.githubusercontent.com/Ghost1372/DevWinUI/refs/heads/main/AppData.Schema.json",
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
        }
      ]
    }
  ]
}

```
# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
