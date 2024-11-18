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
        </wuc:SettingsCard.HeaderIcon>
        <ToggleSwitch/>
    </wuc:SettingsCard>
    <dev:SettingsCard Header="Auto Download">
        <dev:SettingsCard.HeaderIcon>
            <SymbolIcon Symbol="Download"/>
        </wuc:SettingsCard.HeaderIcon>
        <ToggleSwitch/>
    </wuc:SettingsCard>
</wuc:SimpleSettingsGroup>
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.

![DevWinUI](https://raw.githubusercontent.com/ghost1372/Resources/main/SettingsUI/Samples/SimpleSettingsGroup.png)
