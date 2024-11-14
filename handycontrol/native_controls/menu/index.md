---
title: Menu
---

# Styles
|Name|
|-|
|Menu.Small|
|MenuBaseStyle|

# Attached Property
| Properties | Description |
| - | - |
| AnimationMode  | Change Transition Animation  `Only Custom Version` |
| IsEnabledAnimation  | Enable or Disable Transition Animation  `Only Custom Version` |

```xml
     <Menu hc:MenuAttach.AnimationMode="Fade"/>
<!--OR-->
    <Menu hc:MenuAttach.IsEnabledAnimation="False"/>
```

# MenuBaseStyle

The default style of the menu is not recommended. It should always be used by other styles in the manner of BasedOn.

{% note info no-icon %}
example:
{% code lang:xml %}
    <Menu ItemsSource="{Binding Menus}">
        <Menu.ItemTemplate>
            <HierarchicalDataTemplate ItemsSource="{Binding Children}">
                <TextBlock Text="{Binding Name}"></TextBlock>
            </HierarchicalDataTemplate>
        </Menu.ItemTemplate>
</Menu>
{% endcode %}

![Menu.BaseStyle](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/Menu.BaseStyle.png)

{% endnote %}