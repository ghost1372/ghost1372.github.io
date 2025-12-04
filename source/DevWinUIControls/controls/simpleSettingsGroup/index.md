---
title: SimpleSettingsGroup
---

# Attributes

| Name |
|-|
|Header|
|Description|

# Example

```xml
<dev:SimpleSettingsGroup Header="Behavior">
    <dev:SettingsCard Header="Keep screen on">
        <dev:SettingsCard.HeaderIcon>
            <SymbolIcon Symbol="SetLockScreen"/>
        </dev:SettingsCard.HeaderIcon>
        <ToggleSwitch/>
    </dev:SettingsCard>
    <dev:SettingsCard Header="Auto Download">
        <dev:SettingsCard.HeaderIcon>
            <SymbolIcon Symbol="Download"/>
        </dev:SettingsCard.HeaderIcon>
        <ToggleSwitch/>
    </dev:SettingsCard>
</dev:SimpleSettingsGroup>
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.

![SimpleSettingsGroup](https://raw.githubusercontent.com/ghost1372/Resources/main/SettingsUI/Samples/SimpleSettingsGroup.png)
