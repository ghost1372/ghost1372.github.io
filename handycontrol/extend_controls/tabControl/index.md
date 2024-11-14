---
title: TabControl
---

HC's extension to wpf native `TabControl`.

```cs
[TemplatePart(Name = OverflowButtonKey, Type = typeof(ContextMenuToggleButton))]
[TemplatePart(Name = HeaderPanelKey, Type = typeof(TabPanel))]
[TemplatePart(Name = OverflowScrollviewer, Type = typeof(ScrollViewer))]
[TemplatePart(Name = ScrollButtonLeft, Type = typeof(ButtonBase))]
[TemplatePart(Name = ScrollButtonRight, Type = typeof(ButtonBase))]
[TemplatePart(Name = HeaderBorder, Type = typeof(Border))]
public class TabControl : System.Windows.Controls.TabControl
```

# Attributes
|Property|Description|Default Value|Remarks|
|-|-|-|-|
|IsAnimationEnabled|Whether to enable animation effect|false||
|IsDraggable|Does the tab support dragging|false||
|ShowCloseButton|Whether the close button is displayed on the tab|false||
|ShowContextMenu|Does the tab support context menu|true||
|IsTabFillEnabled|Whether the tab automatically divides the space|false||
|TabItemWidth|Tab Width|200||
|TabItemHeight|Tab Height|30||
|IsScrollable|Whether the mouse wheel scroll is supported after the tab overflows|false||
|ShowOverflowButton|Whether to show the drop-down button after the tab overflows|true||
|ShowScrollButton|Whether to display scroll buttons|false||
|OverflowMenuDisplayMemberPath||||
|CanBeClosedByMiddleButton||||

# Events
|Event|
|-|
|Closed|
|Closing|

{% note info %}
Example:

<hc:TabControl hc:TabItem.Closed="TabControl_Closed" ShowCloseButton="True"/>

or

<hc:TabControl  ShowCloseButton="True">
    <hc:TabItem Header="test" Closed="TabItem_Closed"/>
</hc:TabControl>
{% endnote %}


# Case

```xml
<hc:TabControl IsAnimationEnabled="True" ShowCloseButton="True" IsDraggable="True" IsTabFillEnabled="True" Width="800" Height="300">
    <hc:TabItem Header="TabItem1">
        <hc:SimplePanel Background="{DynamicResource RegionBrush}"/>
    </hc:TabItem>
    <hc:TabItem IsSelected="True" Header="TabItem2">
        <hc:SimplePanel Background="#FFE8563F"/>
    </hc:TabItem>
    <hc:TabItem Header="TabItem3">
        <hc:SimplePanel Background="#FF3F4EE8"/>
    </hc:TabItem>
    <hc:TabItem Header="TabItem4">
        <hc:SimplePanel Background="#FFE83F6D"/>
    </hc:TabItem>
    <hc:TabItem Header="TabItem5">
        <hc:SimplePanel Background="#FFB23FE8"/>
    </hc:TabItem>
    <hc:TabItem Header="TabItem6">
        <hc:SimplePanel Background="#FF3FE8E8"/>
    </hc:TabItem>
    <hc:TabItem Header="TabItem7">
        <hc:SimplePanel Background="#FFE8E03F"/>
    </hc:TabItem>
</hc:TabControl>
```

![TabControl](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Resources/TabControl.gif)

## TabItem
You can use the `IconElement` class to set icons for tabs.