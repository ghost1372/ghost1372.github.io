---
title: GlobalShortcut
---

With this property you can use shortcut keys

| Name | Use |
|-|-|
| Host | Desired window |

```xml
hc:GlobalShortcut.Host="True"
```

```xml
 <hc:GlobalShortcut.KeyBindings>
        <KeyBinding Modifiers="Control+Alt" Key="I" Command="{Binding GlobalShortcutInfoCmd}"/>
        <KeyBinding Modifiers="Control+Alt" Key="E" Command="{Binding GlobalShortcutWarningCmd}"/>
    </hc:GlobalShortcut.KeyBindings>
```