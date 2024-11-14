---
title: Commands
---

you can bind this pre-definded commands in your xaml

# Commands
| Command | Description |
| - | - |
| OpenLink | Open Link |
| ShutdownApp | Close Application |
| PushMainWindow2Top | Open MainWindow in front |
| CloseWindow | Close Current Window |
| StartScreenshot | Take Screenshot |

## OpenLink

``` xml
<Button Command="hc:ControlCommands.OpenLink" CommandParameter="https://google.com" Content="Open Link" />
```

## ShutdownApp

``` xml
<Button Command="hc:ControlCommands.ShutdownApp" Content="ShutDown App"/>
```

## PushMainWindow2Top

``` xml
<Button Command="hc:ControlCommands.PushMainWindow2Top" Content="Push Main Window"/>
```

## CloseWindow

``` xml
<Button Command="hc:ControlCommands.CloseWindow" CommandParameter="{Binding RelativeSource={RelativeSource Self}}" Content="Close Window"/>
```

## StartScreenshot

``` xml
<Button Command="hc:ControlCommands.StartScreenshot" Content="Start Screen Shot"/>
```