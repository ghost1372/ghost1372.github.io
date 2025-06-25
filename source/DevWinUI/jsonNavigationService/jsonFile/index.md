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
|SectionId|string||
|Title|string||
|ApiNamespace|string||
|SecondaryTitle|string||
|Subtitle|string||
|Description|string||
|ImagePath|string||
|IconGlyph|string||
|LocalizeId|string||
|IsNavigationViewItemHeader|bool||
|UsexUid|bool||
|DataInfoBadge|DataInfoBadge||

# DataInfoBadge

|Name|Type|Remark|
|-|-|-|
|NavigationViewInfoBadgeStyle|string||
|LandingPageInfoBadgeStyle|string||
|InfoBadgeValue|string||
|IsLandingPageInfoBadgeHidden|bool||
|IsNavigationViewInfoBadgeHidden|bool||

# DataGroup (inherits from BaseDataInfo)

|Name|Type|Remark|
|-|-|-|
|DefaultBuiltInNavigationViewInfoBadgeStyle|string|default `StringInfoBadgeStyle`|
|DefaultBuiltInLandingPageInfoBadgeStyle|string|default `AttentionIconInfoBadgeStyle`|
|IsExpanded|bool||
|IsSpecialSection|bool||
|HideGroup|bool||
|ShowItemsWithoutGroup|bool||
|IsFooterNavigationViewItem|bool||
|Order|bool||
|OrderByDescending|bool||
|UseBuiltInNavigationViewInfoBadgeStyle|bool||
|UseBuiltInLandingPageInfoBadgeStyle|bool||
|Items|ObservableCollection<DataItem>||

# DataItem (inherits from BaseDataInfo)

|Name|Type|Remark|
|-|-|-|
|Content|string||
|Parameter|object||
|IsNew|bool||
|IsUpdated|bool||
|IsPreview|bool||
|HideItem|bool||
|HideNavigationViewItem|bool||
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
# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
