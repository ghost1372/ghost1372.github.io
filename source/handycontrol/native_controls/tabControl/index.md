---
title: TabControl
---

# TabControlBaseStyle

The default style of the tabcontrol is not recommended. It should always be used by other styles as BasedOn.

Case:

 ```xml
<TabControl Margin="10">
    <TabItem Header="Tab 1">
    </TabItem>
    <TabItem Header="Tab 2">
    </TabItem>
    <TabItem Header="Tab 3">
    </TabItem>
</TabControl>
 ```

effect::

![TabControl.DefaultStyle](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/TabControl.DefaultStyle.png)

# TabControlInLine : TabControlBaseStyle

Single line fill tab style

Case:

```xml
<TabControl Margin="10" Style="{StaticResource TabControlInLine}">
    <TabItem Header="Tab 1">
    </TabItem>
    <TabItem Header="Tab 2">
    </TabItem>
    <TabItem Header="Tab 3">
    </TabItem>
</TabControl>
```

effect::

![TabControl.InLineStyle](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/TabControl.InLineStyle.png)

# TabControlCapsule

Capsule tab style

Case:

```xml
<TabControl Margin="10" Style="{StaticResource TabControlCapsule}">
    <TabItem Header="Tab 1">
    </TabItem>
    <TabItem Header="Tab 2">
    </TabItem>
    <TabItem Header="Tab 3">
    </TabItem>
</TabControl>
```

effect::

![TabControl.CapsuleStyle](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/TabControl.CapsuleStyle.png)

# TabControlCapsuleSolid : TabControlCapsule

Capsule (solid) tab style

Case:

```xml
<TabControl Margin="10" Style="{StaticResource TabControlCapsuleSolid}">
    <TabItem Header="Tab 1">
    </TabItem>
    <TabItem Header="Tab 2">
    </TabItem>
    <TabItem Header="Tab 3">
    </TabItem>
</TabControl>
```

effect::

![TabControl.CapsuleSolidStyle](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/TabControl.CapsuleSolidStyle.png)

# Tips

You can use the property `TabStripPlacement` to set the position of the header title, the effect is as follows:

```xml
<UniformGrid Rows="2" Columns="2" Margin="16">
    <TabControl TabStripPlacement="Right" Margin="16" Width="400" Height="200">
        <TabItem Header="Title" HeaderStringFormat="{}{0}1">
            <Border Background="{DynamicResource PrimaryBrush}">
                <TextBlock Style="{StaticResource TextBlockLargeBold}" Foreground="{DynamicResource TextIconBrush}">
                        <Run Text="Text"/>
                        <Run Text="1"/>
                </TextBlock>
            </Border>
        </TabItem>
        <TabItem Header="Title" HeaderStringFormat="{}{0}2" IsEnabled="False">
            <Border Background="{DynamicResource SuccessBrush}">
                <TextBlock Style="{StaticResource TextBlockLargeBold}" Foreground="{DynamicResource TextIconBrush}">
                        <Run Text="Text"/>
                        <Run Text="2"/>
                </TextBlock>
            </Border>
        </TabItem>
        <TabItem Header="Title" HeaderStringFormat="{}{0}3">
            <Border Background="{DynamicResource InfoBrush}">
                <TextBlock Style="{StaticResource TextBlockLargeBold}" Foreground="{DynamicResource TextIconBrush}">
                        <Run Text="Text"/>
                        <Run Text="3"/>
                </TextBlock>
            </Border>
        </TabItem>
        <TabItem Header="Title" HeaderStringFormat="{}{0}4">
            <Border Background="{DynamicResource WarningBrush}">
                <TextBlock Style="{StaticResource TextBlockLargeBold}" Foreground="{DynamicResource TextIconBrush}">
                        <Run Text="Text"/>
                        <Run Text="4"/>
                </TextBlock>
            </Border>
        </TabItem>
        <TabItem Header="Title" HeaderStringFormat="{}{0}5">
            <Border Background="{DynamicResource DangerBrush}">
                <TextBlock Style="{StaticResource TextBlockLargeBold}" Foreground="{DynamicResource TextIconBrush}">
                        <Run Text="Text"/>
                        <Run Text="5"/>
                </TextBlock>
            </Border>
        </TabItem>
    </TabControl>
    <TabControl Margin="16" Width="400" Height="200" Style="{StaticResource TabControlInLine}">
        <TabItem Header="Title" HeaderStringFormat="{}{0}1">
            <Border Background="{DynamicResource PrimaryBrush}">
                <TextBlock Style="{StaticResource TextBlockLargeBold}" Foreground="{DynamicResource TextIconBrush}">
                        <Run Text="Text"/>
                        <Run Text="1"/>
                </TextBlock>
            </Border>
        </TabItem>
        <TabItem Header="Title" HeaderStringFormat="{}{0}2">
            <Border Background="{DynamicResource SuccessBrush}">
                <TextBlock Style="{StaticResource TextBlockLargeBold}" Foreground="{DynamicResource TextIconBrush}">
                        <Run Text="Text"/>
                        <Run Text="2"/>
                </TextBlock>
            </Border>
        </TabItem>
        <TabItem Header="Title" HeaderStringFormat="{}{0}3">
            <Border Background="{DynamicResource InfoBrush}">
                <TextBlock Style="{StaticResource TextBlockLargeBold}" Foreground="{DynamicResource TextIconBrush}">
                        <Run Text="Text"/>
                        <Run Text="3"/>
                </TextBlock>
            </Border>
        </TabItem>
        <TabItem Header="Title" HeaderStringFormat="{}{0}4">
            <Border Background="{DynamicResource WarningBrush}">
                <TextBlock Style="{StaticResource TextBlockLargeBold}" Foreground="{DynamicResource TextIconBrush}">
                        <Run Text="Text"/>
                        <Run Text="4"/>
                </TextBlock>
            </Border>
        </TabItem>
        <TabItem IsSelected="True" Header="Title" HeaderStringFormat="{}{0}5">
            <Border Background="{DynamicResource DangerBrush}">
                <TextBlock Style="{StaticResource TextBlockLargeBold}" Foreground="{DynamicResource TextIconBrush}">
                        <Run Text="Text"/>
                        <Run Text="5"/>
                </TextBlock>
            </Border>
        </TabItem>
    </TabControl>
    <TabControl TabStripPlacement="Left" Margin="16" Width="400" Height="200" Style="{StaticResource TabControlCapsule}">
        <TabItem Header="Title" HeaderStringFormat="{}{0}1">
            <Border Background="{DynamicResource PrimaryBrush}">
                <TextBlock Style="{StaticResource TextBlockLargeBold}" Foreground="{DynamicResource TextIconBrush}">
                        <Run Text="Text"/>
                        <Run Text="1"/>
                </TextBlock>
            </Border>
        </TabItem>
        <TabItem IsSelected="True" Header="Title" HeaderStringFormat="{}{0}2">
            <Border Background="{DynamicResource SuccessBrush}">
                <TextBlock Style="{StaticResource TextBlockLargeBold}" Foreground="{DynamicResource TextIconBrush}">
                        <Run Text="Text"/>
                        <Run Text="2"/>
                </TextBlock>
            </Border>
        </TabItem>
        <TabItem Header="Title" HeaderStringFormat="{}{0}3">
            <Border Background="{DynamicResource InfoBrush}">
                <TextBlock Style="{StaticResource TextBlockLargeBold}" Foreground="{DynamicResource TextIconBrush}">
                        <Run Text="Text"/>
                        <Run Text="3"/>
                </TextBlock>
            </Border>
        </TabItem>
        <TabItem Header="Title" HeaderStringFormat="{}{0}4">
            <Border Background="{DynamicResource WarningBrush}">
                <TextBlock Style="{StaticResource TextBlockLargeBold}" Foreground="{DynamicResource TextIconBrush}">
                        <Run Text="Text"/>
                        <Run Text="4"/>
                </TextBlock>
            </Border>
        </TabItem>
        <TabItem Header="Title" HeaderStringFormat="{}{0}5">
            <Border Background="{DynamicResource DangerBrush}">
                <TextBlock Style="{StaticResource TextBlockLargeBold}" Foreground="{DynamicResource TextIconBrush}">
                        <Run Text="Text"/>
                        <Run Text="5"/>
                </TextBlock>
            </Border>
        </TabItem>
    </TabControl>
    <TabControl TabStripPlacement="Bottom" Margin="16" Width="400" Height="200" Style="{StaticResource TabControlCapsuleSolid}">
        <TabItem Header="Title" HeaderStringFormat="{}{0}1">
            <Border Background="{DynamicResource PrimaryBrush}">
                <TextBlock Style="{StaticResource TextBlockLargeBold}" Foreground="{DynamicResource TextIconBrush}">
                        <Run Text="Text"/>
                        <Run Text="1"/>
                </TextBlock>
            </Border>
        </TabItem>
        <TabItem Header="Title" HeaderStringFormat="{}{0}2" IsEnabled="False">
            <Border Background="{DynamicResource SuccessBrush}">
                <TextBlock Style="{StaticResource TextBlockLargeBold}" Foreground="{DynamicResource TextIconBrush}">
                        <Run Text="Text"/>
                        <Run Text="2"/>
                </TextBlock>
            </Border>
        </TabItem>
        <TabItem Header="Title" HeaderStringFormat="{}{0}3">
            <Border Background="{DynamicResource InfoBrush}">
                <TextBlock Style="{StaticResource TextBlockLargeBold}" Foreground="{DynamicResource TextIconBrush}">
                        <Run Text="Text"/>
                        <Run Text="3"/>
                </TextBlock>
            </Border>
        </TabItem>
        <TabItem IsSelected="True" Header="Title" HeaderStringFormat="{}{0}4">
            <Border Background="{DynamicResource WarningBrush}">
                <TextBlock Style="{StaticResource TextBlockLargeBold}" Foreground="{DynamicResource TextIconBrush}">
                        <Run Text="Text"/>
                        <Run Text="4"/>
                </TextBlock>
            </Border>
        </TabItem>
        <TabItem Header="Title" HeaderStringFormat="{}{0}5">
            <Border Background="{DynamicResource DangerBrush}">
                <TextBlock Style="{StaticResource TextBlockLargeBold}" Foreground="{DynamicResource TextIconBrush}">
                        <Run Text="Text"/>
                        <Run Text="5"/>
                </TextBlock>
            </Border>
        </TabItem>
    </TabControl>
</UniformGrid>
```

![TabControl.TabStripPlacement](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/TabControl.TabStripPlacement.png)

# TabItemTransparentStyle `Only Custom Version`
``` xml
<TabControl>
    <TabItem Header="Test" Style={StaticResource TabItemTransparentStyle}>
</TabControl>
```

# TabControlSliding
# TabItemSliding

```xaml
<TabControl SelectedIndex="3" Style="{StaticResource TabControlSliding}">
    <TabItem Header="Title" HeaderStringFormat="{}{0}1">
        <Border>
            <TextBlock Style="{StaticResource TextBlockLargeBold}">
                <Run Text="Text" />
                <Run Text="1" />
            </TextBlock>
        </Border>
    </TabItem>
    <TabItem Header="Title" HeaderStringFormat="{}{0}22" IsEnabled="False">
        <Border>
            <TextBlock Style="{StaticResource TextBlockLargeBold}">
                <Run Text="Text" />
                <Run Text="2" />
            </TextBlock>
        </Border>
    </TabItem>
    <TabItem Header="Title" HeaderStringFormat="{}{0}333">
        <Border>
            <TextBlock Style="{StaticResource TextBlockLargeBold}">
                <Run Text="Text" />
                <Run Text="3" />
            </TextBlock>
        </Border>
    </TabItem>
    <TabItem Header="Title" HeaderStringFormat="{}{0}4444">
        <Border>
            <TextBlock Style="{StaticResource TextBlockLargeBold}">
                <Run Text="Text" />
                <Run Text="4" />
            </TextBlock>
        </Border>
    </TabItem>
    <TabItem Header="Title" HeaderStringFormat="{}{0}55555">
        <Border>
            <TextBlock Style="{StaticResource TextBlockLargeBold}">
                <Run Text="Text" />
                <Run Text="5" />
            </TextBlock>
        </Border>
    </TabItem>
</TabControl>
<TabControl Style="{StaticResource TabControlSliding}" TabStripPlacement="Bottom">
    <TabItem Header="Title" HeaderStringFormat="{}{0}1">
        <Border>
            <TextBlock Style="{StaticResource TextBlockLargeBold}">
                <Run Text="Text" />
                <Run Text="1" />
            </TextBlock>
        </Border>
    </TabItem>
    <TabItem Header="Title" HeaderStringFormat="{}{0}22" IsEnabled="False">
        <Border>
            <TextBlock Style="{StaticResource TextBlockLargeBold}">
                <Run Text="Text" />
                <Run Text="2" />
            </TextBlock>
        </Border>
    </TabItem>
    <TabItem Header="Title" HeaderStringFormat="{}{0}333">
        <Border>
            <TextBlock Style="{StaticResource TextBlockLargeBold}">
                <Run Text="Text" />
                <Run Text="3" />
            </TextBlock>
        </Border>
    </TabItem>
    <TabItem Header="Title" HeaderStringFormat="{}{0}4444">
        <Border>
            <TextBlock Style="{StaticResource TextBlockLargeBold}">
                <Run Text="Text" />
                <Run Text="4" />
            </TextBlock>
        </Border>
    </TabItem>
    <TabItem Header="Title" HeaderStringFormat="{}{0}55555">
        <Border>
            <TextBlock Style="{StaticResource TextBlockLargeBold}">
                <Run Text="Text" />
                <Run Text="5" />
            </TextBlock>
        </Border>
    </TabItem>
</TabControl>
```