---
title: Info
---

{% note info no-icon %}
class
{% endnote %}

|Class Name|Remarks|
|-|-|
|GrowlInfo||
|ImageCodecInfo|Internal|
|MessageBoxInfo||
|SystemVersionInfo||

{% note info no-icon %}
Growl message initialization model
{% endnote %}

|Member Name|Type|Description|Default|
|-|-|-|-|
| Message | string | Notification content | - |
| ShowDateTime | bool | Whether to show notification time | true |
| ShowPersianDateTime | bool | Whether to show notification persian date time (Only available in Custom Version) | false |
| FlowDirection | FlowDirection | (Only available in Custom Version) | LeftToRight |
| Time | int | Waiting for automatic shutdown time | 6 |
| CancelStr | string | Cancel String | Lang.Cancel |
| ConfirmStr | string | Confirm String | Lang.Confirm |
| ActionBeforeClose | Func<bool, bool> | Delegate before closing | - |
| StaysOpen | bool | Keep open | false |
| IsCustom | bool | Whether to customize behavior | false |
| Type | InfoType | Message Type | InfoType.Success |
| Icon | string | Icon key name | - |
| IconBrush | string | Icon Paint Key Name | - |
| ShowCloseButton | bool | Whether to show the close button | true |
| Token | string | Message tag | - |
| GrowlParent | bool | set Growl Panel | false |

## FAQ

{% note info no-icon %}
What should I fill in Icon and IconBrush here?
{% endnote %}

Icon must fill in the Key name of the resource type `Geometry`, for example, the following resource, its Key name `GitterGeometry` can be used as Icon:
``` xml
<Geometry x:Key="GitterGeometry">M260.8 645H160V0h100.8v645zM461.8 152.2h-100.8V1024h100.8V152.2z m201.2 0h-100.8V1024h100.8V152.2zM864 152h-100.8v494H864V152z</Geometry>
```

IconBrushKey must be filled with the Key name of the resource type `Brush`, such as the following resource, its Key name `ToolBarBackground` can be used as IconBrushKey:

``` xml
<LinearGradientBrush x:Key="ToolBarBackground" EndPoint="0.5,1" StartPoint="0.5,0">
    <GradientStop Color="#F5F4F5" Offset="0"/>
    <GradientStop Color="#D1CFD1" Offset="1"/>
</LinearGradientBrush>
```
