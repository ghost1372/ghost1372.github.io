---
title: NotifyIcon
---

The wpf implementation of the system tray icon.

```cs
public class NotifyIcon : FrameworkElement, IDisposable
```

# Attributes
|Property|Description|Default Value|Remarks|
|-|-|-|-|
|Token|Used to set the message mark||Used to display the bubble prompt on the specified tray icon|
|Text|Mouse prompt text|||
|Icon|Icon|||
|ContextContent|Right click to pop up content|||
|BlinkInterval|Blink Interval|500ms||
|IsBlink|Is it blinking|false|||

# Method
|Name|Description|
|-|-|
| Init() | Initialization |
| Register(string, NotifyIcon) | Register a message mark for the specified tray icon |
| Unregister(string, NotifyIcon) | Unregister the message mark for the specified tray icon |
| Unregister(NotifyIcon) | If the tray icon is registered with a message mark, cancel the registration |
| Unregister(string) | Unregister if the message is marked with a corresponding tray icon |
| ShowBalloonTip(string, string, NotifyIconInfoType, string) | Show bubble tip |
| ShowBalloonTip(string, string, NotifyIconInfoType) | Show bubble tip |
| CloseContextControl() | Close the context control |

# Events
|Name|Description|
|-|-|
| Click | Triggered when clicked |
| MouseDoubleClick | Triggered on double click |

# Case

```xml
<hc:NotifyIcon Text="HandyControl" IsBlink="true" Visibility="Visible" Icon="/HandyControlDemo;component/Resources/Img/icon-white.ico"/>
```

or

``` xml
 <hc:NotifyIcon Text="HandyControl">
                <hc:NotifyIcon.ContextMenu>
                    <ContextMenu>
                        <MenuItem Command="hc:ControlCommands.PushMainWindow2Top" Header="Open"/>
                        <MenuItem Command="hc:ControlCommands.ShutdownApp" Header="Exit"/>
                    </ContextMenu>
                </hc:NotifyIcon.ContextMenu>
            </hc:NotifyIcon>
```

or

``` xml
<hc:NotifyIcon Text="HandyControl" Icon="/HandyControlDemo;component/Resources/Img/icon-white.ico">
                <hc:NotifyIcon.ContextContent>
                    <Border>
                        <StackPanel VerticalAlignment="Center" Margin="16">
                            <Path Width="100" Height="100" Fill="#f06632" Data="{StaticResource LogoGeometry}"/>
                            <StackPanel Margin="0,16,0,0" HorizontalAlignment="Center" Orientation="Horizontal">
                                <Button Click="ButtonPush_OnClick" Command="hc:ControlCommands.PushMainWindow2Top" MinWidth="100" Content="OpenPanel"/>
                                <Button Command="hc:ControlCommands.ShutdownApp" Margin="16,0,0,0" MinWidth="100" Style="{StaticResource ButtonPrimary}" Content="Exit"/>
                            </StackPanel>
                        </StackPanel>
                    </Border>
                </hc:NotifyIcon.ContextContent>
            </hc:NotifyIcon>
```

{% note info %}
you can use ```hc:ControlCommands``` for exit app or open it. or you can use event instead of it.
{% code lang:csharp %}
private void ButtonPush_OnClick(object sender, RoutedEventArgs e) => NotifyIconContextContent.CloseContextControl();
{% endcode %}
{% endnote %}

![NotifyIcon](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Resources/NotifyIcon.gif)

# BallonTip
```cs
NotifyIcon.ShowBalloonTip("HandyControl", "Hello", NotifyIconInfoType.None, ContextMenuIsShow ? MessageToken.NotifyIconDemo : MessageToken.NotifyIconContextDemo);
```

# Fix dissapear icon from taskbar
If `Explorer.exe` process restarts or crashs, the notification icon will disappear from the taskbar.
To Fix this issue, define the following behavior in the one of `hc:Window`, `hc:BlurWindow`, `hc:GlowWindow` or `System.Windows.Window`

``` xml
<hc:Window>
  <hc:NotifyIcon x:Name="NotifyIcon"/>
  <hc:Interaction.Behaviors>
    <hc:TaskbarRebuildBehavior Element="{Binding ElementName=NotifyIcon}" />
  </hc:Interaction.Behaviors>
</hc:Window>
```