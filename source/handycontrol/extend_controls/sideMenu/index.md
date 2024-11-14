---
title: SideMenu
---

SideMenu is Menu that provides navigation for your app.

{% note warning %}
Currently the side menu only supports vertical layout, it may be expanded to any layout in the future.
{% endnote %}

```cs
[DefaultProperty("Items")]
[ContentProperty("Items")]
[TemplatePart(Name = ElementPanel, Type = typeof(Panel))]
public class SimpleItemsControl : Control
```

```cs
public class HeaderedSimpleItemsControl : SimpleItemsControl
```

```cs
public class SideMenu : HeaderedSimpleItemsControl
```

# Attributes
|Property|Description|Default Value|Remarks|
|-|-|-|-|
|AutoSelect|Whether to automatically select the first item|true||
|ExpandMode|Sub-item expansion mode|ExpandMode.ShowOne||
|SideBrush|Only Custom Version|||
|SubSideBrush|Only Custom Version|||
|Icon|Only Custom Version|||
|PanelAreaLength|Child container height|NaN|Currently the side menu only supports vertical layout, and it may be expanded to any layout in the future, so this attribute name is not set as `PanelAreaHeight`|


# Event
|Name|Description|
|-|-|
| SelectionChanged | Triggered when the selected item changes |

# Case

```xml
<hc:SideMenu BorderThickness="1" Width="200" Margin="32">
    <hc:Interaction.Triggers>
        <hc:EventTrigger EventName="SelectionChanged">
            <hc:EventToCommand Command="{Binding SwitchItemCmd}" PassEventArgsToCommand="True" />
        </hc:EventTrigger>
    </hc:Interaction.Triggers>
    <hc:SideMenuItem Header="Overview">
        <hc:SideMenuItem.Icon>
            <Image Source="/HandyControlDemo;component/Resources/Img/DevOps/DevOps-Overview.png" Width="24" Height="24"/>
        </hc:SideMenuItem.Icon>
        <hc:SideMenuItem Header="Summary" Command="{Binding SelectCmd}" CommandParameter="{Binding Header,RelativeSource={RelativeSource Self}}">
            <hc:SideMenuItem.Icon>
                <TextBlock Text="&#xf2cb;" Style="{StaticResource TextBlockFabricIcons}"/>
            </hc:SideMenuItem.Icon>
        </hc:SideMenuItem>
        <hc:SideMenuItem Header="Dashboards" Command="{Binding SelectCmd}" CommandParameter="{Binding Header,RelativeSource={RelativeSource Self}}">
            <hc:SideMenuItem.Icon>
                <TextBlock Text="&#xf246;" Style="{StaticResource TextBlockFabricIcons}"/>
            </hc:SideMenuItem.Icon>
        </hc:SideMenuItem>
        <hc:SideMenuItem Header="Wiki" Command="{Binding SelectCmd}" CommandParameter="{Binding Header,RelativeSource={RelativeSource Self}}">
            <hc:SideMenuItem.Icon>
                <TextBlock Text="&#xe82d;" Style="{StaticResource TextBlockFabricIcons}"/>
            </hc:SideMenuItem.Icon>
        </hc:SideMenuItem>
    </hc:SideMenuItem>
    <hc:SideMenuItem Header="Boards">
        <hc:SideMenuItem.Icon>
            <Image Source="/HandyControlDemo;component/Resources/Img/DevOps/DevOps-Boards.png" Width="24" Height="24"/>
        </hc:SideMenuItem.Icon>
        <hc:SideMenuItem Header="Work Items">
            <hc:SideMenuItem.Icon>
                <TextBlock Text="&#xf314;" Style="{StaticResource TextBlockFabricIcons}"/>
            </hc:SideMenuItem.Icon>
        </hc:SideMenuItem>
        <hc:SideMenuItem Header="Boards">
            <hc:SideMenuItem.Icon>
                <TextBlock Text="&#xf444;" Style="{StaticResource TextBlockFabricIcons}"/>
            </hc:SideMenuItem.Icon>
        </hc:SideMenuItem>
        <hc:SideMenuItem Header="Backlogs">
            <hc:SideMenuItem.Icon>
                <TextBlock Text="&#xf6bf;" Style="{StaticResource TextBlockFabricIcons}"/>
            </hc:SideMenuItem.Icon>
        </hc:SideMenuItem>
        <hc:SideMenuItem Header="Sprints">
            <hc:SideMenuItem.Icon>
                <TextBlock Text="&#xf3b0;" Style="{StaticResource TextBlockFabricIcons}"/>
            </hc:SideMenuItem.Icon>
        </hc:SideMenuItem>
        <hc:SideMenuItem Header="Queries">
            <hc:SideMenuItem.Icon>
                <TextBlock Text="&#xf2b8;" Style="{StaticResource TextBlockFabricIcons}"/>
            </hc:SideMenuItem.Icon>
        </hc:SideMenuItem>
    </hc:SideMenuItem>
    <hc:SideMenuItem Header="Repos">
        <hc:SideMenuItem.Icon>
            <Image Source="/HandyControlDemo;component/Resources/Img/DevOps/DevOps-Repos.png" Width="24" Height="24"/>
        </hc:SideMenuItem.Icon>
        <hc:SideMenuItem Header="Files">
            <hc:SideMenuItem.Icon>
                <TextBlock Text="&#xf30e;" Style="{StaticResource TextBlockFabricIcons}"/>
            </hc:SideMenuItem.Icon>
        </hc:SideMenuItem>
        <hc:SideMenuItem Header="Commits">
            <hc:SideMenuItem.Icon>
                <TextBlock Text="&#xf293;" Style="{StaticResource TextBlockFabricIcons}"/>
            </hc:SideMenuItem.Icon>
        </hc:SideMenuItem>
        <hc:SideMenuItem Header="Pushes">
            <hc:SideMenuItem.Icon>
                <TextBlock Text="&#xf298;" Style="{StaticResource TextBlockFabricIcons}"/>
            </hc:SideMenuItem.Icon>
        </hc:SideMenuItem>
        <hc:SideMenuItem Header="Branches">
            <hc:SideMenuItem.Icon>
                <TextBlock Text="&#xebc2;" Style="{StaticResource TextBlockFabricIcons}"/>
            </hc:SideMenuItem.Icon>
        </hc:SideMenuItem>
        <hc:SideMenuItem Header="Tags">
            <hc:SideMenuItem.Icon>
                <TextBlock Text="&#xe8ec;" Style="{StaticResource TextBlockFabricIcons}"/>
            </hc:SideMenuItem.Icon>
        </hc:SideMenuItem>
        <hc:SideMenuItem Header="Pull requests">
            <hc:SideMenuItem.Icon>
                <TextBlock Text="&#xf296;" Style="{StaticResource TextBlockFabricIcons}"/>
            </hc:SideMenuItem.Icon>
        </hc:SideMenuItem>
    </hc:SideMenuItem>
    <hc:SideMenuItem Header="Pipelines">
        <hc:SideMenuItem.Icon>
            <Image Source="/HandyControlDemo;component/Resources/Img/DevOps/DevOps-Pipelines.png" Width="24" Height="24"/>
        </hc:SideMenuItem.Icon>
        <hc:SideMenuItem Header="Builds">
            <hc:SideMenuItem.Icon>
                <TextBlock Text="&#xf28f;" Style="{StaticResource TextBlockFabricIcons}"/>
            </hc:SideMenuItem.Icon>
        </hc:SideMenuItem>
        <hc:SideMenuItem Header="Releases">
            <hc:SideMenuItem.Icon>
                <TextBlock Text="&#xf3b3;" Style="{StaticResource TextBlockFabricIcons}"/>
            </hc:SideMenuItem.Icon>
        </hc:SideMenuItem>
        <hc:SideMenuItem Header="Library">
            <hc:SideMenuItem.Icon>
                <TextBlock Text="&#xe8f1;" Style="{StaticResource TextBlockFabricIcons}"/>
            </hc:SideMenuItem.Icon>
        </hc:SideMenuItem>
        <hc:SideMenuItem Header="Task groups">
            <hc:SideMenuItem.Icon>
                <TextBlock Text="&#xf2ae;" Style="{StaticResource TextBlockFabricIcons}"/>
            </hc:SideMenuItem.Icon>
        </hc:SideMenuItem>
        <hc:SideMenuItem Header="Deployment groups">
            <hc:SideMenuItem.Icon>
                <TextBlock Text="&#xf29d;" Style="{StaticResource TextBlockFabricIcons}"/>
            </hc:SideMenuItem.Icon>
        </hc:SideMenuItem>
    </hc:SideMenuItem>
    <hc:SideMenuItem Header="Test Plans">
        <hc:SideMenuItem.Icon>
            <Image Source="/HandyControlDemo;component/Resources/Img/DevOps/DevOps-TestPlans.png" Width="24" Height="24"/>
        </hc:SideMenuItem.Icon>
        <hc:SideMenuItem Header="Test Plans">
            <hc:SideMenuItem.Icon>
                <TextBlock Text="&#xf3ab;" Style="{StaticResource TextBlockFabricIcons}"/>
            </hc:SideMenuItem.Icon>
        </hc:SideMenuItem>
        <hc:SideMenuItem Header="Runs">
            <hc:SideMenuItem.Icon>
                <TextBlock Text="&#xf3ac;" Style="{StaticResource TextBlockFabricIcons}"/>
            </hc:SideMenuItem.Icon>
        </hc:SideMenuItem>
        <hc:SideMenuItem Header="Load test">
            <hc:SideMenuItem.Icon>
                <TextBlock Text="&#xe8a9;" Style="{StaticResource TextBlockFabricIcons}"/>
            </hc:SideMenuItem.Icon>
        </hc:SideMenuItem>
    </hc:SideMenuItem>
</hc:SideMenu>
```

![SideMenu](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Resources/SideMenu.png)