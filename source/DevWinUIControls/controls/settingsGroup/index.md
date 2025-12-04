---
title: SettingsGroup
---

# Attributes

| Name |
|-|
|Header|
|Description|
|HeaderIcon|
|Content|
|Items|

# Example

```xml
<ScrollView>
    <dev:WrapPanel>
        <dev:SettingsGroup Margin="10"
                                Description="Recent and commonly used settings"
                                Header="Recommended settings">
            <dev:SettingsGroup.Items>
                <dev:SettingsCard Header="Installed apps"
                                    HeaderIcon="{dev:SymbolIcon Symbol=AllApps}"
                                    IsClickEnabled="True" />
                <dev:SettingsCard Header="Taskbar"
                                    HeaderIcon="{dev:SymbolIcon Symbol=More}"
                                    IsClickEnabled="True" />
                <dev:SettingsCard Header="Display"
                                    HeaderIcon="{dev:SymbolIcon Symbol=Mail}"
                                    IsClickEnabled="True" />
            </dev:SettingsGroup.Items>
        </dev:SettingsGroup>
        <dev:SettingsGroup Margin="10"
                                Description="Make sure OneDrive is installed on your PC so you can see your storage details here"
                                Header="Cloud storage"
                                HeaderIcon="{dev:BitmapIcon Source=Assets/oneDrive.png}">
            <dev:SettingsGroup.Content>
                <Button Content="Install OneDrive" />
            </dev:SettingsGroup.Content>
        </dev:SettingsGroup>
        <dev:SettingsGroup Margin="10"
                                Description="Manage, add, and remove devices"
                                Header="Bluetooth devices">
            <dev:SettingsGroup.Items>
                <dev:SettingsCard Description="Discoverable as 'DESKTOP-NJVNLK0'"
                                    Header="Bluetooth"
                                    HeaderIcon="{dev:SymbolIcon Symbol=DisconnectDrive}" />
                <dev:SettingsCard Description="Not connected"
                                    Header="KA"
                                    HeaderIcon="{dev:SymbolIcon Symbol=Mute}" />
                <dev:SettingsCard Header="View all devices"
                                    IsClickEnabled="True" />
            </dev:SettingsGroup.Items>
        </dev:SettingsGroup>
    </dev:WrapPanel>
</ScrollView>

```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.

![SettingsGroup](https://raw.githubusercontent.com/ghost1372/Resources/main/SettingsUI/Samples/SettingsGroup.png)
