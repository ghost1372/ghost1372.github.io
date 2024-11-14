---
title: CirclePanel
---

The circular layout is often used as a container for direction buttons and function buttons.

```cs
public class CirclePanel : Panel
```
# Attributes
| Property | Description |
| - | - |
| Diameter                 | The size of the panel can be specified by its diameter |
| KeepVertical | Whether the element remains vertical |
| OffsetAngle | Overall angular offset |

# Case

```xml
<Style x:Key="CirclePanelButton" BasedOn="{StaticResource ButtonCustom}" TargetType="Button">
    <Setter Property="UseLayoutRounding" Value="False"/>
    <Setter Property="Height" Value="77"/>
    <Setter Property="Width" Value="36.06"/>
    <Setter Property="Template">
        <Setter.Value>
            <ControlTemplate TargetType="Button">
                <hc:SimplePanel>
                    <Path Data="{StaticResource CirclePanelDemoGeometry}" Fill="{DynamicResource PrimaryBrush}" Height="77" Width="36.06"/>
                    <Path Data="{StaticResource CirclePanelRightGeometry}" Stretch="Uniform" Margin="12" Fill="White"/>
                </hc:SimplePanel>
                <ControlTemplate.Triggers>
                    <Trigger Property="IsMouseOver" Value="True">
                        <Setter Property="Opacity" Value=".9"/>
                    </Trigger>
                    <Trigger Property="IsPressed" Value="True">
                        <Setter Property="Opacity" Value=".6"/>
                    </Trigger>
                    <Trigger Property="IsEnabled" Value="False">
                        <Setter Property="Opacity" Value="0.4"/>
                    </Trigger>
                </ControlTemplate.Triggers>
            </ControlTemplate>
        </Setter.Value>
    </Setter>
</Style>

<hc:CirclePanel Margin="64" Diameter="170">
    <Button Style="{StaticResource CirclePanelButton}"/>
    <Button Style="{StaticResource CirclePanelButton}"/>
    <Button Style="{StaticResource CirclePanelButton}"/>
    <Button Style="{StaticResource CirclePanelButton}"/>
    <Button Style="{StaticResource CirclePanelButton}"/>
    <Button Style="{StaticResource CirclePanelButton}"/>
    <Button Style="{StaticResource CirclePanelButton}"/>
    <Button Style="{StaticResource CirclePanelButton}"/>
</hc:CirclePanel>
```

![CirclePanel](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Resources/CirclePanel.png)