---
title: ToggleBlock
---

This control can switch the display content according to the selected state, and in some cases can replace `ToggleButton`.

```cs
public class ToggleBlock : Control
```

# Attributes
|Property|Description|Default Value|Remarks|
|-|-|-|-|
|IsChecked|Is checked|false||
|CheckedContent|The content displayed when selected|||
|UnCheckedContent|The content displayed when unchecked|||
|IndeterminateContent|The content displayed when the selected state is unknown||||
|ToggleGesture|||||
# Case

```xml
<hc:ToggleBlock>
    <hc:ToggleBlock.UnCheckedContent>
        
    </hc:ToggleBlock.UnCheckedContent>
    <hc:ToggleBlock.CheckedContent>
    </hc:ToggleBlock.CheckedContent>
</hc:ToggleBlock>
```

``` XML
<hc:ToggleBlock IsChecked="{Binding DataGot}" VerticalContentAlignment="Stretch" HorizontalContentAlignment="Stretch">
            <hc:ToggleBlock.UnCheckedContent>
                <hc:LoadingCircle IsRunning="{Binding DataGot,Converter={StaticResource Boolean2BooleanReConverter}}"/>
            </hc:ToggleBlock.UnCheckedContent>
            <hc:ToggleBlock.CheckedContent>
                <ListBox Background="Transparent" ItemContainerStyle="{StaticResource ListBoxItemCustom}" BorderThickness="0" ItemsSource="{Binding DataList}" ItemsPanel="{StaticResource FluidMoveBehaviorWrapPanelItemsPanelTemplate}">
                    <ListBox.ItemTemplate>
                        <DataTemplate>
                            <userControl:Avatar DisplayName="{Binding DisplayName}" Link="{Binding Link}" Source="{Binding AvatarUri}"/>
                        </DataTemplate>
                    </ListBox.ItemTemplate>
                </ListBox>
            </hc:ToggleBlock.CheckedContent>
        </hc:ToggleBlock>
```