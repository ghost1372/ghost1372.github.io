---
title: Windows 11 Settings Examples
---

{% note info %}
for using inline icons like this:
`HeaderIcon="{dev:BitmapIcon Source=/Assets/FluentIcons/FluentIconsAwake.png}"`
you need to install `DevWinUI` package:
{% endnote %}

# Awake Page

```xml
<dev:SettingsPageControl
    IsTabStop="False"
    ModuleDescription="A convenient way to keep your PC awake on-demand."
    ModuleImageSource="ms-appx:///Assets/Modules/Awake.png"
    ModuleTitle="Awake"
    SecondaryLinksHeader="Attribution">
    <dev:SettingsPageControl.ModuleContent>
        <StackPanel Orientation="Vertical" ChildrenTransitions="{StaticResource SettingsCardsAnimations}">
            <dev:SettingsCard
                Header="Enable Awake"
                HeaderIcon="{dev:BitmapIcon Source=/Assets/FluentIcons/FluentIconsAwake.png}">
                <ToggleSwitch
                    OffContent="Off" OnContent="On"/>
            </dev:SettingsCard>
            <InfoBar
                Title="The system administrator is forcing this setting."
                IsClosable="False"
                IsOpen="True"
                Severity="Informational" />

            <dev:SimpleSettingsGroup
                Header="Behavior">

                <dev:SettingsCard Header="Mode"
                    Description="Manage the state of your device when Awake is active"
                    HeaderIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily}, Glyph=&#xE945;}">
                    <ComboBox
                        MinWidth="{StaticResource SettingActionControlMinWidth}" SelectedIndex="0">
                        <ComboBoxItem x:Uid="Awake_NoKeepAwakeSelector" />
                        <ComboBoxItem x:Uid="Awake_IndefiniteKeepAwakeSelector" />
                        <ComboBoxItem x:Uid="Awake_TemporaryKeepAwakeSelector" />
                        <ComboBoxItem x:Uid="Awake_ExpirableKeepAwakeSelector" />
                    </ComboBox>
                </dev:SettingsCard>

                <dev:SettingsExpander Header="End date and time"
                    Description="Keep custom awake state until a specific date and time"
                    HeaderIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily}, Glyph=&#xEC92;}" IsExpanded="True">
                    <dev:SettingsExpander.Items>
                        <dev:SettingsCard
                            Header="End date">
                            <DatePicker/>
                        </dev:SettingsCard>
                        <dev:SettingsCard
                            Header="End time">
                            <TimePicker ClockIdentifier="24HourClock"/>
                        </dev:SettingsCard>
                    </dev:SettingsExpander.Items>
                </dev:SettingsExpander>

                <dev:SettingsCard
                    Header="Interval before returning to the previous awakeness state"
                    HeaderIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily}, Glyph=&#xE916;}">

                    <StackPanel Orientation="Horizontal" MinWidth="{StaticResource SettingActionControlMinWidth}">
                        <NumberBox
                            Header="Hours"
                            Width="96"
                            HorizontalAlignment="Left"
                            LargeChange="5"
                            Minimum="0"
                            SmallChange="1"
                            SpinButtonPlacementMode="Compact"/>
                        <NumberBox
                            Header="Minutes"
                            Width="96"
                            Margin="8,0,0,0"
                            HorizontalAlignment="Left"
                            LargeChange="5"
                            Maximum="60"
                            Minimum="0"
                            SmallChange="1"
                            SpinButtonPlacementMode="Compact"/>
                    </StackPanel>
                </dev:SettingsCard>

                <dev:SettingsCard Header="Keep screen on"
                    Description="This setting is only available when keeping the PC awake"
                    HeaderIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily}, Glyph=&#xE7F4;}">
                    <ToggleSwitch/>
                </dev:SettingsCard>
            </dev:SimpleSettingsGroup>
        </StackPanel>
    </dev:SettingsPageControl.ModuleContent>

    <dev:SettingsPageControl.PrimaryLinks>
        <dev:PageLink Link="https://aka.ms/PowerToysOverview_Awake" Text="Learn more about Awake"/>
    </dev:SettingsPageControl.PrimaryLinks>
    <dev:SettingsPageControl.SecondaryLinks>
        <dev:PageLink Link="https://Awake.den.dev" Text="Den Delimarsky's Awake"/>
    </dev:SettingsPageControl.SecondaryLinks>
</dev:SettingsPageControl>
```

![DevWinUI](https://raw.githubusercontent.com/ghost1372/Resources/main/SettingsUI/Samples/Awake_Demo.png)

# ColorPicker Page

```xml
<Page.Resources>
    <Style TargetType="ListViewItem" BasedOn="{StaticResource ListViewItemSettingStyle}"/>
</Page.Resources>
<dev:SettingsPageControl
    ModuleDescription="Quick and simple system-wide color picker."
    ModuleImageSource="ms-appx:///Assets/Modules/ColorPicker.png"
    ModuleTitle="Color Picker"
    SecondaryLinksHeader="Attribution">
    <dev:SettingsPageControl.ModuleContent>
        <StackPanel
            ChildrenTransitions="{StaticResource SettingsCardsAnimations}"
            Orientation="Vertical">
            <dev:SettingsCard
                Header="Enable Color Picker"
                HeaderIcon="{dev:BitmapIcon Source=/Assets/FluentIcons/FluentIconsColorPicker.png}">
                <ToggleSwitch />
            </dev:SettingsCard>
            <InfoBar
                Title="The system administrator is forcing this setting."
                IsClosable="False"
                IsOpen="True"
                Severity="Informational" />

            <dev:SimpleSettingsGroup Header="Shortcut">
                <dev:SettingsCard Header="Activation behavior" HeaderIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily}, Glyph=&#xEC4E;}">
                    <ComboBox MinWidth="{StaticResource SettingActionControlMinWidth}" SelectedIndex="0">
                        <ComboBoxItem Content="Open editor" />
                        <ComboBoxItem Content="Pick a color and open editor" />
                        <ComboBoxItem Content="Only pick a color" />
                    </ComboBox>
                </dev:SettingsCard>

            </dev:SimpleSettingsGroup>

            <dev:SimpleSettingsGroup Header="Picker behavior">
                <dev:SettingsCard Header="Default color format" Description="This format will be copied to your clipboard" HeaderIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily}, Glyph=&#xF0E3;}">
                    <ComboBox
                        MinWidth="{StaticResource SettingActionControlMinWidth}"/>
                </dev:SettingsCard>

                <dev:SettingsCard Header="Show color name" Description="This will show the name of the color when picking a color">
                    <ToggleSwitch />
                </dev:SettingsCard>
            </dev:SimpleSettingsGroup>

            <dev:SimpleSettingsGroup Header="Color formats">
                <dev:SettingsCard
                    Header="Color formats"
                    Description="Configure the color formats (edit, delete, hide, reorder them)"
                    HeaderIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily},
                                                Glyph=&#xE762;}">
                    <Button
                        Content="Add new format"
                        HorizontalAlignment="Right"
                        Style="{StaticResource AccentButtonStyle}" />
                </dev:SettingsCard>
                <ListView
                    HorizontalAlignment="Stretch"
                    AutomationProperties.Name="{Binding ElementName=ColorFormatsSetting, Path=Header}"
                    ItemsSource="{x:Bind ColorFormats, Mode=TwoWay}"
                    SelectionMode="None">
                    <ListView.ItemTemplate>
                        <DataTemplate x:DataType="models:ColorFormatModel">
                            <dev:SettingsCard
                                Margin="0,0,0,2"
                                Description="{x:Bind Example, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged}"
                                Header="{x:Bind Name, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged}"
                                IsActionIconVisible="False"
                                IsClickEnabled="True">
                                <dev:SettingsCard.Resources>
                                    <x:Double x:Key="SettingsCardLeftIndention">42</x:Double>
                                    <x:Double x:Key="SettingsCardActionButtonWidth">0</x:Double>
                                </dev:SettingsCard.Resources>
                                <StackPanel Orientation="Horizontal" Spacing="4">
                                    <ToggleSwitch
                                        OffContent=""
                                        OnContent="" />
                                    <Button
                                        Grid.Column="1"
                                        VerticalAlignment="Center"
                                        Content="&#xE712;"
                                        FontFamily="{ThemeResource SymbolThemeFontFamily}"
                                        Style="{StaticResource SubtleButtonStyle}">
                                        <Button.Flyout>
                                            <MenuFlyout>
                                                <MenuFlyoutItem
                                                    Text="MoveUp">
                                                    <MenuFlyoutItem.Icon>
                                                        <FontIcon Glyph="&#xE74A;" />
                                                    </MenuFlyoutItem.Icon>
                                                </MenuFlyoutItem>
                                                <MenuFlyoutItem
                                                    Text="MoveDown">
                                                    <MenuFlyoutItem.Icon>
                                                        <FontIcon Glyph="&#xE74B;" />
                                                    </MenuFlyoutItem.Icon>
                                                </MenuFlyoutItem>
                                                <MenuFlyoutSeparator />
                                                <MenuFlyoutItem
                                                    Text="RemoveItem">
                                                    <MenuFlyoutItem.Icon>
                                                        <FontIcon Glyph="&#xE74D;" />
                                                    </MenuFlyoutItem.Icon>
                                                </MenuFlyoutItem>

                                            </MenuFlyout>
                                        </Button.Flyout>
                                        <ToolTipService.ToolTip>
                                            <TextBlock Text="More options" />
                                        </ToolTipService.ToolTip>
                                    </Button>
                                </StackPanel>
                            </dev:SettingsCard>
                        </DataTemplate>
                    </ListView.ItemTemplate>
                </ListView>
            </dev:SimpleSettingsGroup>
        </StackPanel>
    </dev:SettingsPageControl.ModuleContent>

    <dev:SettingsPageControl.PrimaryLinks>
        <dev:PageLink Link="https://aka.ms/PowerToysOverview_ColorPicker" Text="Learn more about Color Picker"/>
    </dev:SettingsPageControl.PrimaryLinks>
    <dev:SettingsPageControl.SecondaryLinks>
        <dev:PageLink Link="https://github.com/martinchrzan/ColorPicker/" Text="Martin Chrzan's Color Picker"/>
        <dev:PageLink Link="https://medium.com/@Niels9001/a-fluent-color-meter-for-powertoys-20407ededf0c" Text="Niels Laute's UX concept"/>
    </dev:SettingsPageControl.SecondaryLinks>
</dev:SettingsPageControl>
```

```cs
public ObservableCollection<ColorFormatModel> ColorFormats { get; set; } = new ObservableCollection<ColorFormatModel>();

public void InitializeColorFormats()
{
    var hexFormatName = "HEX";
    var rgbFormatName = "RGB";
    var hslFormatName = "HSL";
    var hsvFormatName = "HSV";
    var cmykFormatName = "CMYK";
    var hsbFormatName = "HSB";
    var hsiFormatName = "HSI";
    var hwbFormatName = "HWB";
    var ncolFormatName = "NCol";

    ColorFormats.Add(new ColorFormatModel(hexFormatName, "#EF68FF", true));
    ColorFormats.Add(new ColorFormatModel(rgbFormatName, "rgb(239, 104, 255)", true));
    ColorFormats.Add(new ColorFormatModel(hslFormatName, "hsl(294, 100%, 70%)", true));
    ColorFormats.Add(new ColorFormatModel(hsvFormatName, "hsv(294, 59%, 100%)", true));
    ColorFormats.Add(new ColorFormatModel(cmykFormatName, "cmyk(6%, 59%, 0%, 0%)", true));
    ColorFormats.Add(new ColorFormatModel(hsbFormatName, "hsb(100, 50%, 75%)", true));
    ColorFormats.Add(new ColorFormatModel(hsiFormatName, "hsi(100, 50%, 75%)", true));
    ColorFormats.Add(new ColorFormatModel(hwbFormatName, "hwb(100, 50%, 75%)", true));
    ColorFormats.Add(new ColorFormatModel(ncolFormatName, "R10, 50%, 75%", true));
}
public class ColorFormatModel : Observable
{
    private string _name;
    private string _example;
    private bool _isShown;
    private bool _canMoveUp = true;
    private bool _canMoveDown = true;

    public ColorFormatModel(string name, string example, bool isShown)
    {
        Name = name;
        Example = example;
        IsShown = isShown;
    }

    public string Name
    {
        get { return _name; }
        set { Set(ref _name, value); }
    }

    public string Example
    {
        get { return _example; }
        set { Set(ref _example, value); }
    }

    public bool IsShown
    {
        get { return _isShown; }
        set { Set(ref _isShown, value); }
    }

    public bool CanMoveUp
    {
        get { return _canMoveUp; }
        set { Set(ref _canMoveUp, value); }
    }

    public bool CanMoveDown
    {
        get { return _canMoveDown; }
        set { Set(ref _canMoveDown, value); }
    }
}
```

![DevWinUI](https://raw.githubusercontent.com/ghost1372/Resources/main/SettingsUI/Samples/ColorFornat1_Demo.png)


![DevWinUI](https://raw.githubusercontent.com/ghost1372/Resources/main/SettingsUI/Samples/ColorFornat2_Demo.png)

# FancyZones Page

```xml
<dev:SettingsPageControl
    ModuleDescription="Create window layouts to help make multi-tasking easy."
    ModuleImageSource="ms-appx:///Assets/Modules/FancyZones.png"
    ModuleTitle="FancyZones">
    <dev:SettingsPageControl.ModuleContent>
        <StackPanel Orientation="Vertical" ChildrenTransitions="{StaticResource SettingsCardsAnimations}">
            <dev:SettingsCard
                Header="Enable FancyZones"
                HeaderIcon="{dev:BitmapIcon Source=/Assets/FluentIcons/FluentIconsFancyZones.png}">
                <ToggleSwitch/>
            </dev:SettingsCard>
            <InfoBar
                Title="The system administrator is forcing this setting."
                IsClosable="False"
                IsOpen="True"
                Severity="Informational" />

            <dev:SimpleSettingsGroup
                Header="Editor">
                <dev:SettingsCard
                    Header="Launch layout editor"
                    Description="Set and manage your layouts"
                    ActionIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily}, FontSize=14, Glyph=&#xE8A7;}"
                    HeaderIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily}, Glyph=&#xEB3C;}"
                    IsClickEnabled="True" />

                <dev:SettingsCard
                    Header="Activation shortcut" Description="Customize the shortcut to activate this module"
                    HeaderIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily}, Glyph=&#xEDA7;}">
                </dev:SettingsCard>

                <dev:SettingsCard
                    Header="Launch editor on the display" Description="When using multiple displays"
                    HeaderIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily}, Glyph=&#xe7b5;}">
                    <ComboBox
                        MinWidth="{StaticResource SettingActionControlMinWidth}"
                        SelectedIndex="0">
                        <ComboBoxItem Content="With active focus" />
                        <ComboBoxItem Content="Where the mouse pointer is" />
                    </ComboBox>
                </dev:SettingsCard>
            </dev:SimpleSettingsGroup>


            <dev:SimpleSettingsGroup
                Header="Zones">
                <dev:SettingsExpander
                    Header="Zone behavior" Description="Manage how zones behave when using FancyZones"
                    IsExpanded="True">
                    <dev:SettingsExpander.Items>
                        <dev:SettingsCard ContentAlignment="Left">
                            <CheckBox
                                Content="Hold Shift key to activate zones while dragging"/>
                        </dev:SettingsCard>
                        <dev:SettingsCard ContentAlignment="Left">
                            <CheckBox
                                Content="Use a non-primary mouse button to toggle zone activation"/>
                        </dev:SettingsCard>
                        <dev:SettingsCard ContentAlignment="Left">
                            <CheckBox
                                Content="Show zones on all monitors while dragging a window"/>
                        </dev:SettingsCard>
                        <dev:SettingsCard ContentAlignment="Left">
                            <dev:CheckBoxWithDescriptionControl
                                Content="Allow zones to span across monitors"/>
                        </dev:SettingsCard>
                        <dev:SettingsCard Header="When multiple zones overlap">
                            <ComboBox
                                MinWidth="{StaticResource SettingActionControlMinWidth}"
                                SelectedIndex="0">
                                <ComboBoxItem Content="Activate the smallest zone by area" />
                                <ComboBoxItem Content="Activate the largest zone by area" />
                                <ComboBoxItem Content="Split the overlapped area into multiple activation targets" />
                                <ComboBoxItem Content="Activate the zone whose center is closest to the cursor" />
                            </ComboBox>
                        </dev:SettingsCard>
                    </dev:SettingsExpander.Items>
                </dev:SettingsExpander>

                <dev:SettingsExpander Header="Zone appearance"
                    Description="Customize the way zones look"
                    HeaderIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily}, Glyph=&#xEB3C;}"
                    IsExpanded="True">
                    <ComboBox
                        MinWidth="{StaticResource SettingActionControlMinWidth}"
                        SelectedIndex="0">
                        <ComboBoxItem Content="Custom colors" />
                        <ComboBoxItem Content="Windows default" />
                    </ComboBox>
                    <dev:SettingsExpander.Items>
                        <dev:SettingsCard ContentAlignment="Left">
                            <CheckBox
                                Content="Show zone number"/>
                        </dev:SettingsCard>
                        <dev:SettingsCard Header="Opacity">
                            <Slider
                                MinWidth="{StaticResource SettingActionControlMinWidth}"
                                Maximum="100"
                                Minimum="0"/>
                        </dev:SettingsCard>
                    </dev:SettingsExpander.Items>
                </dev:SettingsExpander>
            </dev:SimpleSettingsGroup>

            <dev:SimpleSettingsGroup
                Header="Windows">

                <dev:SettingsExpander
                    Header=">Window behavior" Description="Manage how windows behave when using FancyZones"
                    IsExpanded="True">
                    <dev:SettingsExpander.Items>
                        <dev:SettingsCard ContentAlignment="Left">
                            <CheckBox
                                Content="Keep windows in their zones when the screen resolution changes"/>
                        </dev:SettingsCard>
                        <dev:SettingsCard ContentAlignment="Left">
                            <CheckBox
                                Content="During zone layout changes, windows assigned to a zone will match new size/positions"/>
                        </dev:SettingsCard>
                        <dev:SettingsCard ContentAlignment="Left">
                            <CheckBox
                                Content="Move newly created windows to their last known zone"/>
                        </dev:SettingsCard>
                        <dev:SettingsCard ContentAlignment="Left">
                            <CheckBox
                                Content="Move newly created windows to the current active monitor (Experimental)"/>
                        </dev:SettingsCard>
                        <dev:SettingsCard ContentAlignment="Left">
                            <CheckBox
                                Content="Restore the original size of windows when unsnapping"/>
                        </dev:SettingsCard>
                        <dev:SettingsCard ContentAlignment="Left">
                            <CheckBox
                                Content="Make dragged window transparent"/>
                        </dev:SettingsCard>
                        <dev:SettingsCard ContentAlignment="Left">
                            <dev:CheckBoxWithDescriptionControl Header="Allow popup windows snapping"
                                Description="This setting can affect all popup windows including notifications"
                                Margin="0,0,0,6"/>
                        </dev:SettingsCard>
                        <dev:SettingsCard ContentAlignment="Left">
                            <CheckBox
                                Content="Allow child windows snapping"/>
                        </dev:SettingsCard>
                        <dev:SettingsCard
                            ContentAlignment="Left">
                            <CheckBox
                                Content="Disable round corners when window is snapped"/>
                        </dev:SettingsCard>
                    </dev:SettingsExpander.Items>
                </dev:SettingsExpander>

                <dev:SettingsExpander
                    Header="Override Windows Snap" Description="This overrides the Windows Snap shortcut (Win + arrow) to move windows between zones"
                    HeaderIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily}, Glyph=&#xE90C;}"
                    IsExpanded="True">
                    <ToggleSwitch/>
                    <dev:SettingsExpander.Items>
                        <dev:SettingsCard
                            Header="Move windows based on">
                            <ComboBox
                                MinWidth="{StaticResource SettingActionControlMinWidth}"
                                MinHeight="56"
                                SelectedIndex="0">
                                <ComboBoxItem>
                                    <StackPanel
                                        Orientation="Vertical"
                                        Spacing="4">
                                        <dev:IsEnabledTextBlock Text="Zone index" />
                                        <TextBlock
                                            FontFamily="{ThemeResource SymbolThemeFontFamily}"
                                            Style="{StaticResource SecondaryTextStyle}">
                                            <Run Text="Windows key +  or " />
                                        </TextBlock>
                                    </StackPanel>
                                </ComboBoxItem>
                                <ComboBoxItem>
                                    <StackPanel
                                        Orientation="Vertical"
                                        Spacing="4">
                                        <dev:IsEnabledTextBlock Text="Relative position" />
                                        <TextBlock
                                            FontFamily="{ThemeResource SymbolThemeFontFamily}"
                                            Style="{StaticResource SecondaryTextStyle}">
                                            <Run Text="Windows key +    or " />
                                        </TextBlock>
                                    </StackPanel>
                                </ComboBoxItem>
                            </ComboBox>
                        </dev:SettingsCard>
                        <dev:SettingsCard
                            ContentAlignment="Left">
                            <CheckBox
                                Content="Move windows between zones across all monitors"/>
                        </dev:SettingsCard>
                    </dev:SettingsExpander.Items>
                </dev:SettingsExpander>
            </dev:SimpleSettingsGroup>

            <dev:SimpleSettingsGroup
                Header="Layouts">
                <dev:SettingsExpander 
                    Header="Enable quick layout switch" Description="Layout-specific shortcuts can be configured in the editor"
                    HeaderIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily}, Glyph=&#xEDA7;}">
                    <ToggleSwitch/>
                    <dev:SettingsExpander.Items>
                        <dev:SettingsCard
                            ContentAlignment="Left">
                            <CheckBox
                                Content="Flash zones when switching layout"/>
                        </dev:SettingsCard>
                    </dev:SettingsExpander.Items>
                </dev:SettingsExpander>
            </dev:SimpleSettingsGroup>

            <dev:SimpleSettingsGroup
                Header="Excluded apps">

                <dev:SettingsExpander
                    Header="Excluded apps" Description="Excludes an application from snapping to zones and will only react to Windows Snap - add one application name per line"
                    HeaderIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily}, Glyph=&#xECE4;}"
                    IsExpanded="True">
                    <dev:SettingsExpander.Items>
                        <dev:SettingsCard ContentAlignment="Vertical" HorizontalContentAlignment="Stretch">
                            <TextBox
                                PlaceholderText=">Example: outlook.exe"
                                MinWidth="240"
                                MinHeight="160"
                                AcceptsReturn="True"
                                ScrollViewer.IsVerticalRailEnabled="True"
                                ScrollViewer.VerticalScrollBarVisibility="Visible"
                                ScrollViewer.VerticalScrollMode="Enabled"
                                TextWrapping="Wrap" />
                        </dev:SettingsCard>
                    </dev:SettingsExpander.Items>
                </dev:SettingsExpander>
            </dev:SimpleSettingsGroup>
        </StackPanel>
    </dev:SettingsPageControl.ModuleContent>

    <dev:SettingsPageControl.PrimaryLinks>
        <dev:PageLink Link="https://aka.ms/PowerToysOverview_FancyZones" Text="Learn more about FancyZones"/>
    </dev:SettingsPageControl.PrimaryLinks>
</dev:SettingsPageControl>
```

![DevWinUI](https://raw.githubusercontent.com/ghost1372/Resources/main/SettingsUI/Samples/FancyZones_Demo.png)

# General Page

```xml
<dev:SettingsPageControl ModuleDescription="Microsoft PowerToys is a set of utilities for power users to tune and streamline their Windows experience for greater productivity. Made with 💗 by Microsoft and the PowerToys community."
                                ModuleImageSource="ms-appx:///Assets/Modules/PT.png"
                                ModuleTitle="General"
                                SecondaryLinksHeader="Related information">
    <dev:SettingsPageControl.ModuleContent>
        <StackPanel ChildrenTransitions="{StaticResource SettingsCardsAnimations}" Orientation="Vertical">
            <dev:SimpleSettingsGroup Header="Version" Margin="0,-32,0,0">
                <dev:SettingsCard Header="PowerToys V1.0" HeaderIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily}, Glyph=&#xE895;}">
                    <dev:SettingsCard.Description>
                        <StackPanel Orientation="Vertical">
                            <TextBlock Style="{StaticResource SecondaryTextStyle}">
                                <Run Text="Last checked: " />
                                <Run Text="2023/04/27" />
                            </TextBlock>
                            <HyperlinkButton
                                Content="Release Notes"
                                Margin="0,2,0,0"
                                FontWeight="SemiBold" />
                        </StackPanel>
                    </dev:SettingsCard.Description>

                    <Button
                            Content="Check for Update"
                            HorizontalAlignment="Right"/>
                </dev:SettingsCard>
                <InfoBar
                    Title="PowerToys is up to date"
                    IsClosable="False"
                    IsOpen="True"
                    Severity="Success" />

                <dev:SettingsCard
                    Header="Download updates automatically"
                    Description="Except on metered connections"
                    Margin="0,-6,0,0">
                    <ToggleSwitch/>
                </dev:SettingsCard>
                <InfoBar
                    Title="The system administrator has disabled the automatic download of updates."
                    IsClosable="False"
                    IsOpen="True"
                    Severity="Informational" />
            </dev:SimpleSettingsGroup>

            <dev:SimpleSettingsGroup Header="Appearance &amp; behavior" IsEnabled="True">
                <dev:SettingsCard Header="App theme" HeaderIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily}, Glyph=&#xE790;}">
                    <dev:SettingsCard.Description>
                        <HyperlinkButton Content="Windows color settings"/>
                    </dev:SettingsCard.Description>
                    <ComboBox MinWidth="{StaticResource SettingActionControlMinWidth}" SelectedIndex="0">
                        <ComboBoxItem Content="Dark" />
                        <ComboBoxItem Content="Light" />
                        <ComboBoxItem Content="Default" />
                    </ComboBox>
                </dev:SettingsCard>

                <dev:SettingsCard Header="Run at startup" Description="PowerToys will launch automatically">
                    <ToggleSwitch/>
                </dev:SettingsCard>
            </dev:SimpleSettingsGroup>

            <dev:SimpleSettingsGroup Header="Backup &amp; restore" Visibility="Visible">
                <dev:SettingsExpander Header="Backup and restore your settings" Description="PowerToys will restart automatically if needed" HeaderIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily}, Glyph=&#xE777;}">
                    <StackPanel Orientation="Horizontal" Spacing="8">
                        <Button Content="Backup"/>
                        <Button Content="Restore"/>
                    </StackPanel>
                    <dev:SettingsExpander.Items>
                        <dev:SettingsCard Header="Location">
                            <StackPanel
                                HorizontalAlignment="Right"
                                Orientation="Horizontal"
                                Spacing="8">
                                <TextBlock
                                    x:Name="pathTextBlock"
                                    Width="350"
                                    HorizontalAlignment="Right"
                                    VerticalAlignment="Center"
                                    FontSize="12"
                                    Foreground="{ThemeResource TextFillColorSecondaryBrush}"
                                    IsTextSelectionEnabled="True"
                                    TextAlignment="Right"
                                    TextTrimming="CharacterEllipsis"/>
                                <Button
                                    Content="&#xe8da;"
                                    FontFamily="{ThemeResource SymbolThemeFontFamily}">
                                    <ToolTipService.ToolTip>
                                        <ToolTip>
                                            <TextBlock Text="Select folder" />
                                        </ToolTip>
                                    </ToolTipService.ToolTip>
                                </Button>
                            </StackPanel>
                        </dev:SettingsCard>
                        <dev:SettingsCard
                            Header="Backup information"
                            HorizontalContentAlignment="Left"
                            ContentAlignment="Vertical">
                            <dev:SettingsCard.Resources>
                                <Style TargetType="TextBlock">
                                    <Setter Property="FontSize" Value="12" />
                                </Style>
                            </dev:SettingsCard.Resources>
                            <Grid Margin="0,0,0,6" ColumnSpacing="8">
                                <Grid.ColumnDefinitions>
                                    <ColumnDefinition Width="Auto" />
                                    <ColumnDefinition Width="*" />
                                </Grid.ColumnDefinitions>
                                <Grid.RowDefinitions>
                                    <RowDefinition Height="Auto" />
                                    <RowDefinition Height="Auto" />
                                    <RowDefinition Height="Auto" />
                                    <RowDefinition Height="Auto" />
                                </Grid.RowDefinitions>
                                <TextBlock Text="Status:" />
                                <TextBlock Grid.Column="1" Foreground="{ThemeResource TextFillColorSecondaryBrush}">
                                    <Run/>
                                    <Hyperlink TextDecorations="Underline">
                                        <Run Text="Refresh" />
                                    </Hyperlink>
                                </TextBlock>

                                <TextBlock Text="File name:" Grid.Row="1" />
                                <TextBlock
                                    Grid.Row="1"
                                    Grid.Column="1"
                                    Foreground="{ThemeResource TextFillColorSecondaryBrush}" />

                                <TextBlock Text="Source machine:" Grid.Row="2" />
                                <TextBlock
                                    Grid.Row="2"
                                    Grid.Column="1"
                                    Foreground="{ThemeResource TextFillColorSecondaryBrush}" />
                                <TextBlock Text="Created at:" Grid.Row="3" />
                                <TextBlock
                                    Grid.Row="3"
                                    Grid.Column="1"
                                    Foreground="{ThemeResource TextFillColorSecondaryBrush}"/>
                            </Grid>
                        </dev:SettingsCard>
                    </dev:SettingsExpander.Items>
                </dev:SettingsExpander>
            </dev:SimpleSettingsGroup>
            <InfoBar
                Title="Result"
                IsClosable="False"
                IsOpen="True"/>
            <dev:SimpleSettingsGroup Header="Experimentation" Visibility="Visible">
                <dev:SettingsCard Header="Allow experimentation with new features" Description="Note: Only Windows Insider builds may be selected for experimentation">
                    <dev:SettingsCard.HeaderIcon>
                        <PathIcon Data="M1859 1758q14 23 21 47t7 51q0 40-15 75t-41 61-61 41-75 15H354q-40 0-75-15t-61-41-41-61-15-75q0-27 6-51t21-47l569-992q10-14 10-34V128H640V0h768v128h-128v604q0 19 10 35l569 991zM896 732q0 53-27 99l-331 577h972l-331-577q-27-46-27-99V128H896v604zm799 1188q26 0 44-19t19-45q0-10-2-17t-8-16l-164-287H464l-165 287q-9 15-9 33 0 26 18 45t46 19h1341z" />
                    </dev:SettingsCard.HeaderIcon>
                    <ToggleSwitch/>
                </dev:SettingsCard>
                <InfoBar
                    Title="The system administrator has disabled experimentation."
                    IsClosable="False"
                    IsOpen="True"
                    Severity="Informational" />
            </dev:SimpleSettingsGroup>
        </StackPanel>
    </dev:SettingsPageControl.ModuleContent>
    <dev:SettingsPageControl.PrimaryLinks>
        <dev:PageLink Link="https://aka.ms/powertoys"
                            Text="Documentation" />
        <dev:PageLink Link="https://aka.ms/powertoys"
                            Text="GitHub repository" />
        <dev:PageLink Link="https://aka.ms/powerToysReportBug"
                            Text="Report a bug" />
        <dev:PageLink Link="https://aka.ms/powerToysRequestFeature"
                            Text="Request a feature" />
    </dev:SettingsPageControl.PrimaryLinks>
    <dev:SettingsPageControl.SecondaryLinks>
        <dev:PageLink Link="http://go.microsoft.com/fwlink/?LinkId=521839"
                            Text="Privacy statement" />
        <dev:PageLink Link="https://github.com/microsoft/PowerToys/blob/master/NOTICE.md"
                            Text="Open-source notice" />
    </dev:SettingsPageControl.SecondaryLinks>
</dev:SettingsPageControl>
```

![DevWinUI](https://raw.githubusercontent.com/ghost1372/Resources/main/SettingsUI/Samples/General_Demo.png)

# ImageResizer Page

```xml
<dev:SettingsPageControl
    ModuleDescription="Lets you resize images by right-clicking."
    ModuleImageSource="ms-appx:///Assets/Modules/ImageResizer.png"
    ModuleTitle="Image Resizer"
    SecondaryLinksHeader="Attribution">
    <dev:SettingsPageControl.ModuleContent>
        <StackPanel ChildrenTransitions="{StaticResource SettingsCardsAnimations}">
            <dev:SettingsCard
                Header="Enable Image Resizer"
                HeaderIcon="{dev:BitmapIcon Source=/Assets/FluentIcons/FluentIconsImageResizer.png}">
                <ToggleSwitch/>
            </dev:SettingsCard>

            <InfoBar
                Title="The system administrator is forcing this setting."
                IsClosable="False"
                IsOpen="True"
                Severity="Informational" />

            <dev:SimpleSettingsGroup Header="Image sizes">
                <dev:SettingsCard Header="Presets" Description="Manage preset sizes that can be used in the editor" HeaderIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily}, Glyph=&#xE792;}">
                    <Button
                        Content="Add new size"
                        Style="{ThemeResource AccentButtonStyle}" />
                </dev:SettingsCard>
                <ListView
                    x:Name="ImagesSizesListView"
                    ItemsSource="{x:Bind Sizes, Mode=TwoWay}"
                    SelectionMode="None">
                    <ListView.ItemTemplate>
                        <DataTemplate x:Name="SingleLineDataTemplate" x:DataType="models:ImageSize">
                            <dev:SettingsCard Header="{x:Bind Name, Mode=OneWay}">
                                <dev:SettingsCard.Resources>
                                    <x:Double x:Key="SettingsCardLeftIndention">42</x:Double>
                                </dev:SettingsCard.Resources>
                                <dev:SettingsCard.Description>
                                    <StackPanel
                                        Grid.Row="1"
                                        Grid.Column="1"
                                        Margin="0,4,0,0"
                                        Orientation="Horizontal">
                                        <TextBlock
                                            Margin="0,0,4,0"
                                            Style="{ThemeResource SecondaryTextStyle}"
                                            Text="{x:Bind Fit}" />
                                        <TextBlock
                                            Margin="0,0,4,0"
                                            FontWeight="SemiBold"
                                            Style="{ThemeResource SecondaryTextStyle}"
                                            Text="{x:Bind Width, Mode=OneWay}" />
                                        <TextBlock
                                            Margin="0,0,4,0"
                                            Foreground="{ThemeResource SystemBaseMediumColor}"
                                            Style="{ThemeResource SecondaryTextStyle}"
                                            Text="{x:Bind Unit}" />
                                    </StackPanel>
                                </dev:SettingsCard.Description>
                                <StackPanel
                                    Grid.Column="2"
                                    HorizontalAlignment="Right"
                                    Orientation="Horizontal"
                                    Spacing="8">
                                    <Button
                                        Width="40"
                                        Height="36"
                                        Content="&#xE70F;"
                                        FontFamily="{ThemeResource SymbolThemeFontFamily}"
                                        Style="{StaticResource SubtleButtonStyle}">
                                        <Button.Flyout>
                                            <Flyout>
                                                <StackPanel Margin="0,12,0,0" Spacing="16">
                                                    <TextBox
                                                        Header="Name"
                                                        Width="240"
                                                        HorizontalAlignment="Left"
                                                        Text="{x:Bind Path=Name, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged}" />

                                                    <ComboBox
                                                        Header="Fit"
                                                        Width="240"
                                                        HorizontalAlignment="Left"
                                                        SelectedIndex="0">
                                                        <ComboBoxItem Content="Fill" />
                                                        <ComboBoxItem Content="Fit" />
                                                        <ComboBoxItem Content="Stretch" />
                                                    </ComboBox>

                                                    <StackPanel Orientation="Horizontal" Spacing="8">
                                                        <NumberBox
                                                            Header="Width"
                                                            Width="116"
                                                            Minimum="0"
                                                            SpinButtonPlacementMode="Compact"
                                                            Value="{x:Bind Path=Width, Mode=TwoWay}" />

                                                        <NumberBox
                                                            Header="Height"
                                                            Width="116"
                                                            Minimum="0"
                                                            SpinButtonPlacementMode="Compact"
                                                            Value="{x:Bind Path=Height, Mode=TwoWay}" />

                                                    </StackPanel>
                                                    <ComboBox
                                                        Header="Size"
                                                        Width="240"
                                                        Margin="0,0,0,24"
                                                        SelectedIndex="0">
                                                        <ComboBoxItem Content="CM" />
                                                        <ComboBoxItem Content="Inches" />
                                                        <ComboBoxItem Content="Percent" />
                                                        <ComboBoxItem Content="Pixels" />
                                                    </ComboBox>
                                                </StackPanel>
                                            </Flyout>
                                        </Button.Flyout>
                                    </Button>

                                    <Button
                                        x:Name="RemoveButton"
                                        Width="40"
                                        Height="36"
                                        Content="&#xE74D;"
                                        FontFamily="{ThemeResource SymbolThemeFontFamily}"
                                        Style="{StaticResource SubtleButtonStyle}"/>
                                </StackPanel>
                            </dev:SettingsCard>
                        </DataTemplate>
                    </ListView.ItemTemplate>
                </ListView>
            </dev:SimpleSettingsGroup>

            <dev:SimpleSettingsGroup Header="Encoding">
                <dev:SettingsCard Header="Fallback encoder">
                    <ComboBox MinWidth="{StaticResource SettingActionControlMinWidth}" SelectedIndex="0">
                        <ComboBoxItem Content="PNG" />
                        <ComboBoxItem Content="BMP" />
                        <ComboBoxItem Content="JPEG" />
                        <ComboBoxItem Content="TIFF" />
                        <ComboBoxItem Content="WMPhoto" />
                        <ComboBoxItem Content="GIF" />
                    </ComboBox>
                </dev:SettingsCard>

                <dev:SettingsCard Header="JPEG quality level">
                    <Slider
                        MinWidth="{StaticResource SettingActionControlMinWidth}"
                        Maximum="100"
                        Minimum="0"/>
                </dev:SettingsCard>

                <dev:SettingsCard Header="PNG interlacing">
                    <ComboBox MinWidth="{StaticResource SettingActionControlMinWidth}" SelectedIndex="0">
                        <ComboBoxItem Content="Default" />
                        <ComboBoxItem Content="On" />
                        <ComboBoxItem Content="Off" />
                    </ComboBox>
                </dev:SettingsCard>

                <dev:SettingsCard Header="TIFF compression">
                    <ComboBox MinWidth="{StaticResource SettingActionControlMinWidth}" SelectedIndex="0">
                        <ComboBoxItem Content="Default" />
                        <ComboBoxItem Content="None" />
                        <ComboBoxItem Content="CCITT3" />
                        <ComboBoxItem Content="CCITT4" />
                        <ComboBoxItem Content="LZW" />
                        <ComboBoxItem Content="RLE" />
                        <ComboBoxItem Content="Zip" />
                    </ComboBox>
                </dev:SettingsCard>
            </dev:SimpleSettingsGroup>

            <dev:SimpleSettingsGroup Header="File">
                <dev:SettingsCard Header="Filename format" Description="This format is used as the filename for resized images">
                    <StackPanel Orientation="Horizontal" Spacing="4">
                        <TextBox
                            PlaceholderText="Example: %1 (%2)"
                            MinWidth="{StaticResource SettingActionControlMinWidth}"/>
                        <Button
                            Content="&#xE946;"
                            FontFamily="{ThemeResource SymbolThemeFontFamily}"
                            Style="{StaticResource SubtleButtonStyle}">
                            <Button.Flyout>
                                <Flyout>
                                    <TextBlock x:Name="FileFormatTextBlock">
                                        <Run Text="The following parameters can be used:" />
                                        <LineBreak />
                                        <LineBreak />
                                        <Run FontWeight="Bold" Text="%1" />
                                        <Run Text=" - " />
                                        <Run Text="Original filename" />
                                        <LineBreak />
                                        <Run FontWeight="Bold" Text="%2" />
                                        <Run Text=" - " />
                                        <Run Text="Size name" />
                                        <LineBreak />
                                        <Run FontWeight="Bold" Text="%3" />
                                        <Run Text=" - " />
                                        <Run Text="Selected width" />
                                        <LineBreak />
                                        <Run FontWeight="Bold" Text="%4" />
                                        <Run Text=" - " />
                                        <Run Text="Selected height" />
                                        <LineBreak />
                                        <Run FontWeight="Bold" Text="%5" />
                                        <Run Text=" - " />
                                        <Run Text="Actual width" />
                                        <LineBreak />
                                        <Run FontWeight="Bold" Text="%6" />
                                        <Run Text=" - " />
                                        <Run Text="Actual height" />
                                    </TextBlock>
                                </Flyout>
                            </Button.Flyout>
                        </Button>
                    </StackPanel>
                </dev:SettingsCard>

                <dev:SettingsCard Header="File modified timestamp" Description="Used as the 'modified timestamp' in the file properties">
                    <ComboBox MinWidth="{StaticResource SettingActionControlMinWidth}" SelectedIndex="0">
                        <ComboBoxItem Content="Original file timestamp" />
                        <ComboBoxItem Content="Timestamp of resize action" />
                    </ComboBox>
                </dev:SettingsCard>
            </dev:SimpleSettingsGroup>
        </StackPanel>
    </dev:SettingsPageControl.ModuleContent>

    <dev:SettingsPageControl.PrimaryLinks>
        <dev:PageLink Link="https://aka.ms/PowerToysOverview_ImageResizer" Text="Learn more about Image Resizer"/>
    </dev:SettingsPageControl.PrimaryLinks>
    <dev:SettingsPageControl.SecondaryLinks>
        <dev:PageLink Link="https://github.com/bricelam/ImageResizer/" Text="Brice Lambson's ImageResizer"/>
    </dev:SettingsPageControl.SecondaryLinks>
</dev:SettingsPageControl>
```

```cs
public ObservableCollection<ImageSize> Sizes { get; set; } = new ObservableCollection<ImageSize>();

public void InitializeImageSize()
{
    Sizes.Add(new ImageSize { Name = "Small", Fit = 100, Width = 854, Unit = 100, Height = 480, Id = 0 });
    Sizes.Add(new ImageSize { Name = "Medium", Fit = 100, Width = 1366, Unit = 100, Height = 768, Id = 1 });
    Sizes.Add(new ImageSize { Name = "Large", Fit = 100, Width = 1920, Unit = 100, Height = 1080, Id = 2 });
    Sizes.Add(new ImageSize { Name = "Phone", Fit = 100, Width = 320, Unit = 100, Height = 568, Id = 3 });
}

public class ImageSize : Observable
{
    private int _id;
    private string _name;
    private int _fit;
    private double _height;
    private double _width;
    private int _unit;

    public int Id
    {
        get { return _id; }
        set { Set(ref _id, value); }
    }

    public string Name
    {
        get { return _name; }
        set { Set(ref _name, value); }
    }

    public int Fit
    {
        get { return _fit; }
        set { Set(ref _fit, value); }
    }

    public double Width
    {
        get { return _width; }
        set { Set(ref _width, value); }
    }

    public double Height
    {
        get { return _height; }
        set { Set(ref _height, value); }
    }

    public int Unit
    {
        get { return _unit; }
        set { Set(ref _unit, value); }
    }
}
```
![DevWinUI](https://raw.githubusercontent.com/ghost1372/Resources/main/SettingsUI/Samples/ImageResize_Demo.png)

# KeyboardManager Page

```xml
<dev:SettingsPageControl
    ModuleDescription="Reconfigure your keyboard by remapping keys and shortcuts"
    ModuleImageSource="ms-appx:///Assets/Modules/KBM.png"
    ModuleTitle="Keyboard Manager">
    <dev:SettingsPageControl.ModuleContent>
        <StackPanel ChildrenTransitions="{StaticResource SettingsCardsAnimations}">
            <dev:SettingsCard Header="Enable Keyboard Manager" HeaderIcon="{dev:BitmapIcon Source=/Assets/FluentIcons/FluentIconsKeyboardManager.png}">
                <ToggleSwitch/>
                <dev:SettingsCard.Description>
                    <HyperlinkButton NavigateUri="https://aka.ms/powerToysCannotRemapKeys">
                        <TextBlock FontWeight="SemiBold" Text="Learn more about remapping limitations"/>
                    </HyperlinkButton>
                </dev:SettingsCard.Description>
            </dev:SettingsCard>

            <dev:SimpleSettingsGroup Header="Keys" IsEnabled="False">
                <dev:SettingsCard
                        Description="Remap keys to other keys or shortcuts"
                        Header="Remap a key"
                        ActionIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily}, FontSize=14, Glyph=&#xE8A7;}"
                        HeaderIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily}, Glyph=&#xE92E;}"
                        IsClickEnabled="True"/>
            </dev:SimpleSettingsGroup>

            <dev:SimpleSettingsGroup Header="Shortcuts" IsEnabled="False">
                <dev:SettingsCard
                    Description="Remap shortcuts to other shortcuts or keys for all or specific applications"
                    Header="Remap a shortcut"
                    ActionIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily}, FontSize=14, Glyph=&#xE8A7;}"
                    HeaderIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily}, Glyph=&#xE92E;}"
                    IsClickEnabled="True" />
            </dev:SimpleSettingsGroup>
        </StackPanel>
    </dev:SettingsPageControl.ModuleContent>
    <dev:SettingsPageControl.PrimaryLinks>
        <dev:PageLink Link="https://aka.ms/PowerToysOverview_KeyboardManager" Text="Learn more about Keyboard Manager"/>
    </dev:SettingsPageControl.PrimaryLinks>
</dev:SettingsPageControl>
```
![DevWinUI](https://raw.githubusercontent.com/ghost1372/Resources/main/SettingsUI/Samples/KeyboardManager_Demo.png)


# OOBE Page

```xml
<dev:OOBEPageControl Title="FileExplorer Preview"
    HeroImage="ms-appx:///Assets/Modules/OOBE/FileExplorer.png"
    Description="These settings allow you to manage your Windows File Explorer custom preview handlers.">
    <dev:OOBEPageControl.PageContent>
        <StackPanel Orientation="Vertical" ChildrenTransitions="{StaticResource SettingsCardsAnimations}">
            <TextBlock Text="How to enable"
                        Style="{ThemeResource OobeSubtitleStyle}" />
            <StackPanel Orientation="Horizontal" Spacing="12" Margin="0,24,0,0">
                <Button Content="Open Settings"/>
                <HyperlinkButton Style="{StaticResource TextButtonStyle}">
                    <TextBlock Text="Learn more about File Explorer add-ons" TextWrapping="Wrap" />
                </HyperlinkButton>
            </StackPanel>
        </StackPanel>
    </dev:OOBEPageControl.PageContent>
</dev:OOBEPageControl>
```
![DevWinUI](https://raw.githubusercontent.com/ghost1372/Resources/main/SettingsUI/Samples/OOBE_Demo.png)

# PowerLauncher Page
```xml
<dev:SettingsPageControl
    ModuleDescription="A quick launcher that has additional capabilities without sacrificing performance."
    ModuleImageSource="ms-appx:///Assets/Modules/PowerLauncher.png"
    ModuleTitle="Demo Run"
    SecondaryLinksHeader="Attribution">
    <dev:SettingsPageControl.ModuleContent>
        <StackPanel Orientation="Vertical" ChildrenTransitions="{StaticResource SettingsCardsAnimations}">
            <dev:SettingsCard
                Header="Enable PowerToys Run"
                HeaderIcon="{dev:BitmapIcon Source=/Assets/FluentIcons/FluentIconsPowerToysRun.png}">
                <ToggleSwitch/>
            </dev:SettingsCard>
            <InfoBar
                Title="The system administrator is forcing this setting."
                IsClosable="False"
                IsOpen="True"
                Severity="Informational" />

            <dev:SimpleSettingsGroup
                x:Uid="Shortcut">
                <dev:SettingsExpander
                    Description="Customize the keyboard shortcut to activate this module"
                            Header="Activation shortcut"
                    HeaderIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily},
                                                Glyph=&#xEDA7;}"
                    IsExpanded="True">
                    <dev:SettingsExpander.Items>
                        <dev:SettingsCard ContentAlignment="Left">
                            <dev:CheckBoxWithDescriptionControl
                                Header="Use centralized keyboard hook" Description="Try this if there are issues with the shortcut (PowerToys Run might not get focus when triggered from an elevated window)"/>
                        </dev:SettingsCard>
                        <dev:SettingsCard ContentAlignment="Left">
                            <CheckBox
                                Content="Ignore shortcuts in fullscreen mode"/>
                        </dev:SettingsCard>
                    </dev:SettingsExpander.Items>
                </dev:SettingsExpander>
            </dev:SimpleSettingsGroup>

            <dev:SimpleSettingsGroup 
                Header="Position &amp; appearance">
                <dev:SettingsExpander
                        Description="If multiple monitors are in use, PowerToys Run can be launched on the desired monitor"
                    Header="Preferred monitor position"
                    HeaderIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily}, Glyph=&#xec48;}"
                    IsExpanded="True">
                    <ToggleSwitch/>
                    <dev:SettingsExpander.Items>
                        <dev:SettingsCard Header="Immediate plugins" Description="Affects the plugins that make the UI wait for their results by this amount. Recommended: 30-50 ms.">
                            <NumberBox
                                MinWidth="{StaticResource SettingActionControlMinWidth}"
                                LargeChange="50"
                                Maximum="500"
                                Minimum="0"
                                SmallChange="10"
                                SpinButtonPlacementMode="Compact"/>
                        </dev:SettingsCard>
                        <dev:SettingsCard
                            Header="Background execution plugins" Description="Affects the plugins that execute in the background by this amount. Recommended: 100-150 ms.">
                            <NumberBox
                                MinWidth="{StaticResource SettingActionControlMinWidth}"
                                LargeChange="50"
                                Maximum="1000"
                                Minimum="0"
                                SmallChange="10"
                                SpinButtonPlacementMode="Compact"/>
                        </dev:SettingsCard>
                    </dev:SettingsExpander.Items>
                </dev:SettingsExpander>
            </dev:SimpleSettingsGroup>

            <dev:SimpleSettingsGroup
                Header="Position &amp; appearance">
                <dev:SettingsCard
                    Header="Preferred monitor position" Description="If multiple monitors are in use, PowerToys Run can be launched on the desired monitor"
                    HeaderIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily}, Glyph=&#xe78b;}">
                    <ComboBox
                        MinWidth="{StaticResource SettingActionControlMinWidth}"
                        SelectedIndex="0">
                        <ComboBoxItem Content="Run_Radio_Position_Cursor" />
                        <ComboBoxItem Content="Run_Radio_Position_Primary_Monitor" />
                        <ComboBoxItem Content="Run_Radio_Position_Focus" />
                    </ComboBox>
                </dev:SettingsCard>

                <dev:SettingsCard
                    x:Uid="ColorModeHeader"
                    HeaderIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily}, Glyph=&#xE790;}">
                    <dev:SettingsCard.Description>
                        <HyperlinkButton
                            Content="Windows color settings"/>
                    </dev:SettingsCard.Description>
                    <ComboBox
                        MinWidth="{StaticResource SettingActionControlMinWidth}"
                        SelectedIndex="0">
                        <ComboBoxItem Content="Dark" />
                        <ComboBoxItem Content="Light" />
                        <ComboBoxItem Content="Default" />
                    </ComboBox>
                </dev:SettingsCard>
            </dev:SimpleSettingsGroup>

            <dev:SimpleSettingsGroup
                Header="Plugins">
                <InfoBar
                    Title="PowerToys Run can't provide any results without plugins"
                    IsClosable="False"
                    IsOpen="True"
                    Message="Enable at least one plugin to get started"
                    Severity="Informational">
                    <InfoBar.ActionButton>
                        <HyperlinkButton
                            Content="Learn more about conflicting activation commands"/>
                    </InfoBar.ActionButton>
                </InfoBar>

                <dev:SettingsCard
                        Description="You can include or remove each plugin from the global results, change the direct activation phrase and configure additional options"
                    Header="Plugins"
                    HeaderIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily}, Glyph=&#xEA86;}">
                    <AutoSuggestBox
                        PlaceholderText="Search this list"
                        MinWidth="{StaticResource SettingActionControlMinWidth}"
                        QueryIcon="Find">
                    </AutoSuggestBox>
                </dev:SettingsCard>
                <InfoBar
                    Title="PowerToys Run can't provide any results without plugins"
                    IsClosable="False"
                    IsOpen="True"
                    Message="Enable at least one plugin to get started"
                    Severity="Error"/>

                <StackPanel
                    Orientation="Horizontal">
                    <ProgressRing
                        Width="20"
                        Height="20"
                        Margin="18,18"
                        IsActive="True" />
                    <TextBlock
                        Text="Plugins are loading..."
                        VerticalAlignment="Center"
                        Style="{ThemeResource SecondaryTextStyle}" />
                </StackPanel>
            </dev:SimpleSettingsGroup>
        </StackPanel>
    </dev:SettingsPageControl.ModuleContent>
    <dev:SettingsPageControl.PrimaryLinks>
        <dev:PageLink Link="https://aka.ms/PowerToysOverview_PowerToysRun" Text="Learn more about Demo Run"/>
    </dev:SettingsPageControl.PrimaryLinks>
    <dev:SettingsPageControl.SecondaryLinks>
        <dev:PageLink Link="https://github.com/Wox-launcher/Wox/" Text="Wox"/>
        <dev:PageLink Link="https://github.com/betsegaw/windowwalker/" Text="Beta Tadele's Window Walker"/>
    </dev:SettingsPageControl.SecondaryLinks>
</dev:SettingsPageControl>
```
![DevWinUI](https://raw.githubusercontent.com/ghost1372/Resources/main/SettingsUI/Samples/Powertoys_Demo.png)

# PowerPreview Page
```xml
<dev:SettingsPageControl
    ModuleDescription="These settings allow you to manage your Windows File Explorer custom preview handlers."
    ModuleImageSource="ms-appx:///Assets/Modules/PowerPreview.png"
    ModuleTitle="File Explorer">
    <dev:SettingsPageControl.ModuleContent>
        <StackPanel Orientation="Vertical" ChildrenTransitions="{StaticResource SettingsCardsAnimations}">
            <dev:SimpleSettingsGroup Header="Preview Pane" Description="Select the file types which must be rendered in the Preview Pane. Ensure that Preview Pane is open by toggling the view with Alt + P in File Explorer.">
                <InfoBar
                    Title="Enabling the preview handlers will override other preview handlers already installed - there have been reports of incompatibility between Outlook and the PDF Preview Handler."
                    IsClosable="False"
                    IsOpen="True"
                    IsTabStop="True"
                    Severity="Warning" />
                <dev:SettingsExpander
                    Header="Scalable Vector Graphics" Description="File extension, should not be altered"
                    HeaderIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily}, Glyph=&#xE91B;}">
                    <ToggleSwitch/>
                    <dev:SettingsExpander.Items>
                        <dev:SettingsCard Header="Color mode">
                            <ComboBox MinWidth="{StaticResource SettingActionControlMinWidth}" SelectedIndex="0">
                                <ComboBoxItem Content="Default" />
                                <ComboBoxItem Content="Color" />
                                <ComboBoxItem Content="Shade" />
                            </ComboBox>
                        </dev:SettingsCard>
                        <dev:SettingsCard Header="FileExplorerPreview_Preview_SVG_Checkered_Shade_Mode">
                            <ComboBox MinWidth="{StaticResource SettingActionControlMinWidth}" SelectedIndex="0">
                                <ComboBoxItem Content="Shade_1" />
                                <ComboBoxItem Content="Shade_2" />
                                <ComboBoxItem Content="Shade_3" />
                            </ComboBox>
                        </dev:SettingsCard>
                    </dev:SettingsExpander.Items>
                </dev:SettingsExpander>

                <InfoBar
                    Title="The system administrator is forcing this setting."
                    IsClosable="False"
                    IsOpen="True"
                    Severity="Informational" />

                <dev:SettingsCard
                    Header="Markdown" Description=".md, .markdown, .mdown, .mkdn, .mkd, .mdwn, .mdtxt, .mdtext"
                    HeaderIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily}, Glyph=&#xE943;}">
                    <ToggleSwitch/>
                </dev:SettingsCard>

                <InfoBar
                    Title="The system administrator is forcing this setting."
                    IsClosable="False"
                    IsOpen="True"
                    Severity="Informational" />


                <dev:SettingsExpander
                    Header="Source code files (Monaco)" Description=".cpp, .py, .json, .xml, .csproj, ..."
                    HeaderIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily}, Glyph=&#xE99A;}">
                    <ToggleSwitch/>
                    <dev:SettingsExpander.Items>
                        <dev:SettingsCard
                            ContentAlignment="Left">
                            <CheckBox
                                Content="Wrap text"/>
                        </dev:SettingsCard>
                        <dev:SettingsCard
                            ContentAlignment="Left">
                            <dev:CheckBoxWithDescriptionControl
                                Header="Try to format the source for preview" Description="Applies to json and xml. Files remain unchanged." />
                        </dev:SettingsCard>
                        <dev:SettingsCard
                            Header="Maximum file size to preview" Description="The maximum size, in kilobytes, for files to be displayed. This is a safety mechanism to prevent loading large files into RAM.">
                            <NumberBox
                                MinWidth="{StaticResource SettingActionControlMinWidth}"
                                Maximum="100"
                                Minimum="2"
                                SpinButtonPlacementMode="Compact"/>
                        </dev:SettingsCard>
                    </dev:SettingsExpander.Items>
                </dev:SettingsExpander>

                <InfoBar
                    Title="The system administrator is forcing this setting."
                    IsClosable="False"
                    IsOpen="True"
                    Severity="Informational" />

                <dev:SettingsCard
                    Header="Portable Document Format" Description=".pdf"
                    HeaderIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily}, Glyph=&#xEA90;}">
                    <ToggleSwitch/>
                </dev:SettingsCard>
                <InfoBar
                    Title="The system administrator is forcing this setting."
                    IsClosable="False"
                    IsOpen="True"
                    Severity="Informational" />
            </dev:SimpleSettingsGroup>

            <dev:SimpleSettingsGroup Header="Thumbnail icon Preview" Description="Select the file types for which thumbnail previews must be rendered.">
                <InfoBar
                    Title="A reboot may be required for changes to these settings to take effect"
                    IsClosable="False"
                    IsOpen="True"
                    IsTabStop="True"
                    Severity="Informational" />
                <InfoBar
                    Title="Thumbnails might not appear on paths managed by cloud storage solutions like OneDrive, since these solutions may get their thumbnails from the cloud instead of generating them locally."
                    IsClosable="False"
                    IsOpen="True"
                    IsTabStop="True"
                    Severity="Warning" />
                <dev:SettingsCard
                    Header="Scalable Vector Graphics" Description=".svg"
                    HeaderIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily}, Glyph=&#xE91B;}">
                    <ToggleSwitch/>
                </dev:SettingsCard>
            </dev:SimpleSettingsGroup>
        </StackPanel>
    </dev:SettingsPageControl.ModuleContent>

    <dev:SettingsPageControl.PrimaryLinks>
        <dev:PageLink Link="https://aka.ms/PowerToysOverview_FileExplorerAddOns" Text="Learn more about File Explorer add-ons"/>
    </dev:SettingsPageControl.PrimaryLinks>
</dev:SettingsPageControl>
```

![DevWinUI](https://raw.githubusercontent.com/ghost1372/Resources/main/SettingsUI/Samples/FileExplorer_Demo.png)

# PowerRename Page
```xml
<dev:SettingsPageControl
    ModuleDescription="A Windows Shell extension for more advanced bulk renaming using search and replace or regular expressions."
    ModuleImageSource="ms-appx:///Assets/Modules/PowerRename.png"
    ModuleTitle="PowerRename"
    SecondaryLinksHeader="Attribution">
    <dev:SettingsPageControl.ModuleContent>
        <StackPanel
            x:Name="PowerRenameView" ChildrenTransitions="{StaticResource SettingsCardsAnimations}"
            Orientation="Vertical">
            <dev:SettingsCard
                Header="Enable PowerRename"
                HeaderIcon="{dev:BitmapIcon Source=/Assets/FluentIcons/FluentIconsPowerRename.png}">
                <ToggleSwitch/>
            </dev:SettingsCard>
            <InfoBar
                Title="The system administrator is forcing this setting."
                IsClosable="False"
                IsOpen="True"
                Severity="Informational" />
            <dev:SimpleSettingsGroup
                Header="Shell integration">
                <dev:SettingsExpander
                    Header="Show PowerRename in"
                    IsExpanded="True">
                    <ComboBox
                        MinWidth="{StaticResource SettingActionControlMinWidth}"
                        SelectedIndex="0">
                        <ComboBoxItem Content="Default and extended context menu" />
                        <ComboBoxItem Content="Extended context menu only" />
                    </ComboBox>
                    <dev:SettingsExpander.Items>
                        <dev:SettingsCard ContentAlignment="Left">
                            <CheckBox
                                Content="Hide icon in context menu"/>
                        </dev:SettingsCard>
                    </dev:SettingsExpander.Items>
                </dev:SettingsExpander>
            </dev:SimpleSettingsGroup>

            <dev:SimpleSettingsGroup
                Header="Auto-complete">
                <dev:SettingsExpander
                    Header="Enable auto-complete for the search &amp; replace fields"
                    IsExpanded="True">
                    <ToggleSwitch/>
                    <dev:SettingsExpander.Items>
                        <dev:SettingsCard
                            Header="Maximum number of items">
                            <NumberBox
                                MinWidth="{StaticResource SettingActionControlMinWidth}"
                                Maximum="20"
                                Minimum="0"
                                SpinButtonPlacementMode="Compact" />
                        </dev:SettingsCard>
                    </dev:SettingsExpander.Items>
                </dev:SettingsExpander>

                <dev:SettingsCard
                    Header="Show recently used strings"
                    HeaderIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily}, Glyph=&#xe81c;}">
                    <ToggleSwitch/>
                </dev:SettingsCard>
            </dev:SimpleSettingsGroup>
            <dev:SimpleSettingsGroup
                Header="Behavior">
                <dev:SettingsCard Header="Use Boost library" Description="Provides extended features but may use different regex syntax">
                    <ToggleSwitch />
                </dev:SettingsCard>
            </dev:SimpleSettingsGroup>
        </StackPanel>
    </dev:SettingsPageControl.ModuleContent>

    <dev:SettingsPageControl.PrimaryLinks>
        <dev:PageLink Link="https://aka.ms/PowerToysOverview_PowerRename" Text="Learn more about PowerRename"/>
    </dev:SettingsPageControl.PrimaryLinks>
    <dev:SettingsPageControl.SecondaryLinks>
        <dev:PageLink Link="https://github.com/chrdavis/SmartRename" Text="Chris Davis's SmartRenamer"/>
    </dev:SettingsPageControl.SecondaryLinks>
</dev:SettingsPageControl>
```

![DevWinUI](https://raw.githubusercontent.com/ghost1372/Resources/main/SettingsUI/Samples/PowerRename_Demo.png)

# ShortcutGuid Page
```xml
<dev:SettingsPageControl
    ModuleDescription="Shows a help overlay with Windows shortcuts when the Windows key is pressed."
    ModuleImageSource="ms-appx:///Assets/Modules/ShortcutGuide.png"
    ModuleTitle="Shortcut Guide">
    <dev:SettingsPageControl.ModuleContent>
        <StackPanel Orientation="Vertical" ChildrenTransitions="{StaticResource SettingsCardsAnimations}">
            <dev:SettingsCard Header="Enable Shortcut Guide" HeaderIcon="{dev:BitmapIcon Source=/Assets/FluentIcons/FluentIconsShortcutGuide.png}">
                <ToggleSwitch/>
            </dev:SettingsCard>

            <dev:KeyVisual IsTabStop="False"
                                        AutomationProperties.AccessibilityView="Raw"
                                        VisualType="SmallOutline"
                                        VerticalAlignment="Center"
                                        HorizontalAlignment="Left"
                                        Content="Ctrl+F5" />
            <dev:ShortcutWithTextLabelControl x:Name="HotkeyMicVidControl" Text="to toggle both your microphone and video" />
            <dev:ShortcutWithTextLabelControl x:Name="HotkeyMicControl" Text="to toggle your microphone" />
            <dev:ShortcutWithTextLabelControl x:Name="HotkeyVidControl" Text="to toggle your microphone" />
            <Button Content="Open Shortcut Dialog" Click="Button_Click"/>
            <dev:SimpleSettingsGroup Header="Appearance &amp; behavior">
                <dev:SettingsCard Header="Choose a mode" HeaderIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily}, Glyph=&#xE790;}">
                    <dev:SettingsCard.Description>
                        <HyperlinkButton Content="Windows color settings"/>
                    </dev:SettingsCard.Description>
                    <ComboBox MinWidth="{StaticResource SettingActionControlMinWidth}" SelectedIndex="0">
                        <ComboBoxItem Content="Dark"/>
                        <ComboBoxItem Content="Light"/>
                        <ComboBoxItem Content="Default"/>
                    </ComboBox>
                </dev:SettingsCard>

                <dev:SettingsCard Header="Opacity of background">
                    <Slider
                            MinWidth="{StaticResource SettingActionControlMinWidth}"
                            Maximum="100"
                            Minimum="0"/>
                </dev:SettingsCard>
            </dev:SimpleSettingsGroup>
            
            <dev:SimpleSettingsGroup Header="Excluded apps">
                <dev:SettingsExpander Description="Turns off Shortcut Guide when these applications have focus - add one application name per line"
                            Header="Exclude apps" IsExpanded="True" HeaderIcon="{dev:FontIcon FontFamily={StaticResource SymbolThemeFontFamily}, Glyph=&#xECE4;}">
                    <dev:SettingsExpander.Items>
                        <dev:SettingsCard
                            HorizontalContentAlignment="Stretch"
                            ContentAlignment="Vertical">
                            <TextBox
                                PlaceholderText="Example: outlook.exe"
                                MinWidth="240"
                                MinHeight="160"
                                AcceptsReturn="True"
                                ScrollViewer.IsVerticalRailEnabled="True"
                                ScrollViewer.VerticalScrollBarVisibility="Visible"
                                ScrollViewer.VerticalScrollMode="Enabled"
                                TextWrapping="Wrap" />
                        </dev:SettingsCard>
                    </dev:SettingsExpander.Items>
                </dev:SettingsExpander>
            </dev:SimpleSettingsGroup>
        </StackPanel>
    </dev:SettingsPageControl.ModuleContent>
    <dev:SettingsPageControl.PrimaryLinks>
        <dev:PageLink Link="https://aka.ms/PowerToysOverview_ShortcutGuide" Text="Learn more about Shortcut Guide"/>
    </dev:SettingsPageControl.PrimaryLinks>
</dev:SettingsPageControl>
```

```cs
private ShortcutDialogContentControl c = new ShortcutDialogContentControl();
private ContentDialog shortcutDialog;
bool canClose = false;
public void InitializeShortcut()
{
    HotkeyMicVidControl.Keys = new List<object> { "Ctrl", "Alt", "F5" };
    HotkeyMicControl.Keys = new List<object> { "Ctrl", "Alt", "F5" };
    HotkeyVidControl.Keys = new List<object> { "Ctrl", "Alt", "F5" };
}
private async void Button_Click(object sender, Microsoft.UI.Xaml.RoutedEventArgs e)
{
    c.Keys = new List<object> { "Ctrl", "Alt", "F5" };
    shortcutDialog = new ContentDialog
    {
        XamlRoot = Content.XamlRoot,
        Title = "Activation shortcut",
        Content = c,
        PrimaryButtonText = "Save",
        SecondaryButtonText = "Confirm",
        CloseButtonText = "Cancel",
        DefaultButton = ContentDialogButton.Primary,
    };

    shortcutDialog.Closing += ShortcutDialog_Closing;
    shortcutDialog.PrimaryButtonClick += ShortcutDialog_PrimaryButtonClick;
    shortcutDialog.SecondaryButtonClick += ShortcutDialog_SecondaryButtonClick;
    shortcutDialog.CloseButtonClick += ShortcutDialog_CloseButtonClick;
    await shortcutDialog.ShowAsyncQueue();
}

private void ShortcutDialog_CloseButtonClick(ContentDialog sender, ContentDialogButtonClickEventArgs args)
{
    canClose = true;
}

private void ShortcutDialog_Closing(ContentDialog sender, ContentDialogClosingEventArgs args)
{
    args.Cancel = !canClose;
}
private void ShortcutDialog_PrimaryButtonClick(ContentDialog sender, ContentDialogButtonClickEventArgs args)
{
    DisableKeys();
}
private void ShortcutDialog_SecondaryButtonClick(ContentDialog sender, ContentDialogButtonClickEventArgs args)
{
    EnableKeys();
}
private void EnableKeys()
{
    shortcutDialog.IsPrimaryButtonEnabled = true;
    c.IsError = false;
}
private void DisableKeys()
{
    shortcutDialog.IsPrimaryButtonEnabled = false;
    c.IsError = true;
}
```

![DevWinUI](https://raw.githubusercontent.com/ghost1372/Resources/main/SettingsUI/Samples/Shortcut_Demo.png)


# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
