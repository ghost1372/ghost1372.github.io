---
title: ElementGroup 
---

Easily extend controls by adding textbox, buttons... on either side.


```c#
public class ElementGroup : ItemsControl
```

# Attributes

|Name|
|-|
|Orientation|
|Layout|


# Styles

|Name|
|-|
|ElementGroupBaseStyle|
|ElementGroupSolid|

# Case

```xml
<hc:UniformSpacingPanel Margin="32" VerticalAlignment="Center" Orientation="Vertical" Spacing="16">
    <hc:ElementGroup Orientation="Horizontal" Layout="Stack">
        <Button HorizontalAlignment="Stretch" Width="auto" Content="Button"/>
        <Button HorizontalAlignment="Stretch" Width="auto" Content="Button"/>
        <Button HorizontalAlignment="Stretch" Width="auto" Content="Button"/>
        <Button HorizontalAlignment="Stretch" Width="auto" Content="Button"/>
    </hc:ElementGroup>
    <hc:ElementGroup Orientation="Horizontal" Width="500">
        <ToggleButton HorizontalAlignment="Stretch" Width="auto" Content="ToggleButton"/>
        <Button HorizontalAlignment="Stretch" Width="auto" Content="Button"/>
        <ToggleButton HorizontalAlignment="Stretch" Width="auto" Content="ToggleButton"/>
        <Button HorizontalAlignment="Stretch" Width="auto" Content="Button"/>
    </hc:ElementGroup>
    <hc:ElementGroup Orientation="Horizontal" Layout="Stack">
        <Border Style="{StaticResource BorderRegion}" Padding="6,0">
            <Path Data="{StaticResource ClockGeometry}" Width="16" Height="16" Stretch="Uniform" Fill="{DynamicResource BorderBrush}"/>
        </Border>
        <TextBox MinWidth="200"/>
        <Button Content="Button"/>
        <ToggleButton Content="ToggleButton"/>
    </hc:ElementGroup>
    <hc:ElementGroup>
        <hc:ElementGroup.ItemsPanel>
            <ItemsPanelTemplate>
                <Grid>
                    <Grid.ColumnDefinitions>
                        <ColumnDefinition/>
                        <ColumnDefinition Width="Auto"/>
                    </Grid.ColumnDefinitions>
                </Grid>
            </ItemsPanelTemplate>
        </hc:ElementGroup.ItemsPanel>
        <TextBox HorizontalAlignment="Stretch" DockPanel.Dock="Left"/>
        <Button Grid.Column="1" Width="100" Content="Button" DockPanel.Dock="Right" HorizontalAlignment="Right" Style="{StaticResource ButtonPrimary}"/>
    </hc:ElementGroup>
</hc:UniformSpacingPanel>
```

![ElementGroup](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Resources/ElementGroup.png)