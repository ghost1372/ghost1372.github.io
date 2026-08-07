---
title: OutOfBoxPage
---


# Attributes

| Name |
|-|
|Title|
|Description|
|HeroImage|
|HeroImageHeight|
|UseTopHeroImage|
|ActionContent|
|Content|
|ContentMargin|
|PrimaryLinks|
|PrimaryLinkItemsPanelTemplate|
|PrimaryLinksItemTemplate|
|SecondaryLinks|
|SecondaryLinksHeader|
|SecondaryLinkItemsPanelTemplate|
|SecondaryLinksItemTemplate|
|SecondaryLinksMargin|

# Example

```xml
<dev:OutOfBoxPage Title="Awake"
                Description="A convenient way to keep your PC awake on-demand."
                HeroImage="ms-appx:///Assets/Modules/Awake.png"
                SecondaryLinksHeader="Attribution">
    <dev:OutOfBoxPage.Content>
        <StackPanel dev:PanelAttach.ChildrenTransitions="Default"
                    Orientation="Vertical">
            <dev:SettingsCard Header="Enable Awake"
                                HeaderIcon="{dev:BitmapIcon Source=/Assets/Fluent/awake.png}">
                <ToggleSwitch OffContent="Off"
                                OnContent="On" />
            </dev:SettingsCard>
            <InfoBar Title="The system administrator is forcing this setting."
                        IsClosable="False"
                        IsOpen="True"
                        Severity="Informational" />

            <dev:SimpleSettingsGroup Header="Behavior">

                <dev:SettingsCard Description="Manage the state of your device when Awake is active"
                                    Header="Mode"
                                    HeaderIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily},
                                                            Glyph=&#xE945;}">
                    <ComboBox MinWidth="{StaticResource SettingActionControlMinWidth}"
                                SelectedIndex="0">
                        <ComboBoxItem Content="Keep using the selected power plan" />
                        <ComboBoxItem Content="Keep awake indefinitely" />
                        <ComboBoxItem Content="Keep awake for a time interval" />
                        <ComboBoxItem Content="Keep awake until expiration" />
                    </ComboBox>
                </dev:SettingsCard>

                <dev:SettingsExpander Description="Keep custom awake state until a specific date and time"
                                        Header="End date and time"
                                        HeaderIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily},
                                                                Glyph=&#xEC92;}"
                                        IsExpanded="True">
                    <dev:SettingsExpander.Items>
                        <dev:SettingsCard Header="End date">
                            <DatePicker />
                        </dev:SettingsCard>
                        <dev:SettingsCard Header="End time">
                            <TimePicker ClockIdentifier="24HourClock" />
                        </dev:SettingsCard>
                    </dev:SettingsExpander.Items>
                </dev:SettingsExpander>

                <dev:SettingsCard Header="Interval before returning to the previous awakeness state"
                                    HeaderIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily},
                                                            Glyph=&#xE916;}">

                    <StackPanel MinWidth="{StaticResource SettingActionControlMinWidth}"
                                Orientation="Horizontal">
                        <NumberBox Width="96"
                                    HorizontalAlignment="Left"
                                    Header="Hours"
                                    LargeChange="5"
                                    Minimum="0"
                                    SmallChange="1"
                                    SpinButtonPlacementMode="Compact" />
                        <NumberBox Width="96"
                                    Margin="8,0,0,0"
                                    HorizontalAlignment="Left"
                                    Header="Minutes"
                                    LargeChange="5"
                                    Maximum="60"
                                    Minimum="0"
                                    SmallChange="1"
                                    SpinButtonPlacementMode="Compact" />
                    </StackPanel>
                </dev:SettingsCard>

                <dev:SettingsCard Description="This setting is only available when keeping the PC awake"
                                    Header="Keep screen on"
                                    HeaderIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily},
                                                            Glyph=&#xE7F4;}">
                    <ToggleSwitch />
                </dev:SettingsCard>
            </dev:SimpleSettingsGroup>
        </StackPanel>
    </dev:OutOfBoxPage.Content>

    <dev:OutOfBoxPage.PrimaryLinks>
        <dev:OutOfBoxPageLink Link="https://aka.ms/PowerToysOverview_Awake"
                                Text="Learn more about Awake" />
    </dev:OutOfBoxPage.PrimaryLinks>
    <dev:OutOfBoxPage.SecondaryLinks>
        <dev:OutOfBoxPageLink Link="https://Awake.den.dev"
                                Text="Den Delimarsky's Awake" />
    </dev:OutOfBoxPage.SecondaryLinks>
</dev:OutOfBoxPage>
```

![OutOfBoxPage](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/OutOfBoxPage.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
