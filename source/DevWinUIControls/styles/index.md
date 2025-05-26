---
title: Styles
---

# Buttons
## HyperlinkButton
|Name|
|-|
|HyperlinkButtonStyle|

```xml
<HyperlinkButton Content="Click Here" Style="{ThemeResource HyperlinkButtonStyle}"/>
```

![DevWinUI](https://raw.githubusercontent.com/ghost1372/Resources/main/SettingsUI/Samples/HyperlinkButtonStyle.png)

## ButtonBase
|Name|
|-|
|TextButtonStyle|
|ScrollButtonStyle|

```xml
<Button Content="Click Here" Style="{ThemeResource TextButtonStyle}"/>

```
![DevWinUI](https://raw.githubusercontent.com/ghost1372/Resources/main/SettingsUI/Samples/TextButtonStyle.png)

```xml
<Button Style="{StaticResource ScrollButtonStyle}">
    <FontIcon FontSize="{ThemeResource FlipViewButtonFontSize}"
              Glyph="&#xedd9;" />
</Button>
<Button Style="{StaticResource ScrollButtonStyle}">
    <FontIcon FontSize="{ThemeResource FlipViewButtonFontSize}"
              Glyph="&#xEDDA;" />
</Button>
```
![DevWinUI](https://raw.githubusercontent.com/ghost1372/Resources/main/SettingsUI/Samples/ScrollButtonStyle.png)

## DropDownButton
|Name|
|-|
|AccentDropDownButtonStyle|

```xml
<DropDownButton Content="Email"
                Style="{StaticResource AccentDropDownButtonStyle}">
    <DropDownButton.Flyout>
        <MenuFlyout Placement="Bottom">
            <MenuFlyoutItem Text="Send" />
            <MenuFlyoutItem Text="Reply" />
            <MenuFlyoutItem Text="Reply All" />
        </MenuFlyout>
    </DropDownButton.Flyout>
</DropDownButton>
```

![DevWinUI](https://raw.githubusercontent.com/ghost1372/Resources/main/SettingsUI/Samples/AccentDropDownButtonStyle.png)

# TextBlock
|Name|
|-|
|OobeSubtitleStyle|
|SecondaryTextStyle|

```xml
<TextBlock Text="Test" Style="{ThemeResource OobeSubtitleStyle}"/>
<TextBlock Text="Test" Style="{ThemeResource SecondaryTextStyle}"/> 
```

![DevWinUI](https://raw.githubusercontent.com/ghost1372/Resources/main/SettingsUI/Samples/TextBlockStyle.png)

# ListViewItem
|Name|
|-|
|ListViewItemSettingStyle|

```xml
<ListView HorizontalAlignment="Stretch" ItemsSource="{x:Bind ColorFormats, Mode=TwoWay}" SelectionMode="None">
    <ListView.Resources>
        <Style TargetType="ListViewItem" BasedOn="{StaticResource ListViewItemSettingStyle}"/>
    </ListView.Resources>
    <ListView.ItemTemplate>
        <DataTemplate x:DataType="models:ColorFormatModel">
            <Grid MinHeight="68" Padding="0,0,16,0" HorizontalAlignment="Stretch" AutomationProperties.Name="{x:Bind Name}" Background="{ThemeResource  SettingsCardBackground}" BorderBrush="{ThemeResource SettingsCardBorderBrush}" BorderThickness="{ThemeResource SettingsCardBorderThickness}" CornerRadius="{ThemeResource ControlCornerRadius}">
                <Grid.RowDefinitions>
                    <RowDefinition/>
                    <RowDefinition/>
                </Grid.RowDefinitions>
                <TextBlock Margin="56,8,0,0" FontSize="16" FontWeight="SemiBold" Text="{x:Bind Name}"/>
                <TextBlock Grid.Row="1" Margin="56,0,0,8" Style="{StaticResource SecondaryTextStyle}" Text="{x:Bind Example}"/>
                <ToggleSwitch Grid.RowSpan="2" Margin="0,0,56,0" HorizontalAlignment="Right" AutomationProperties.HelpText="{x:Bind Name}" IsOn="{x:Bind IsShown, Mode=TwoWay}" OffContent="" OnContent=""/>

                <Button Grid.RowSpan="2" HorizontalAlignment="Right" VerticalAlignment="Center" Background="Transparent" Content="&#xE10C;" FontFamily="{ThemeResource SymbolThemeFontFamily}">
                    <Button.Flyout>
                        <MenuFlyout>
                            <MenuFlyoutItem Icon="Up" IsEnabled="{x:Bind CanMoveUp}" Text="Move up"/>
                            <MenuFlyoutItem IsEnabled="{x:Bind CanMoveDown}" Text="Move down">
                                <MenuFlyoutItem.Icon>
                                    <FontIcon Glyph="&#xE1FD;"/>
                                </MenuFlyoutItem.Icon>
                            </MenuFlyoutItem>
                        </MenuFlyout>
                    </Button.Flyout>
                    <ToolTipService.ToolTip>
                        <TextBlock Text="More options"/>
                    </ToolTipService.ToolTip>
                </Button>
            </Grid>
        </DataTemplate>
    </ListView.ItemTemplate>
</ListView>
```

```cs
public ObservableCollection<ColorFormatModel> ColorFormats { get; set; } = new ObservableCollection<ColorFormatModel>();

public void InitializeColorFormat()
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
![DevWinUI](https://raw.githubusercontent.com/ghost1372/Resources/main/SettingsUI/Samples/ListViewItemSettingStyle.png)


# Border
|Name|
|-|
|BorderPanel|
|InfoBorderPanelStyle|
|WarningBorderPanelStyle|
|ErrorBorderPanelStyle|
|SuccessBorderPanelStyle|

```xml
<Border Style="{ThemeResource BorderPanel}">

</Border>

```
![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/BorderStyle.png)

# Grid
|Name|
|-|
|GridPanel|
|GridCardPanel|

```xml
<Grid Style="{ThemeResource GridPanel}">

</Grid>
```

```xml
<Grid Style="{ThemeResource GridCardPanel}">

</Grid>
```
![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/GridStyle.png)

# StackPanel
|Name|
|-|
|StackPanelStyle|

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/StackPanelStyle.png)


# TabViewItem
|Name|
|-|
|TabViewItemRounded|

```xml
<Grid>
    <Grid.Resources>
        <Style TargetType="TabViewItem" BasedOn="{StaticResource TabViewItemRounded}"/>
    </Grid.Resources>
    
    <TabView>
        <TabViewItem Header="Settings">
            <TabViewItem.IconSource>
                <SymbolIconSource Symbol="Setting"/>
            </TabViewItem.IconSource>
            
        </TabViewItem>
        <TabViewItem Header="History">
            <TabViewItem.IconSource>
                <SymbolIconSource Symbol="PostUpdate"/>
            </TabViewItem.IconSource>
        </TabViewItem>
        <TabViewItem Header="Download">
            <TabViewItem.IconSource>
                <SymbolIconSource Symbol="Download"/>
            </TabViewItem.IconSource>
        </TabViewItem>
    </TabView>
</Grid>
```
or

```xml
<TabView>
    <TabViewItem Header="Settings" Style="{ThemeResource TabViewItemRounded}">
        <TabViewItem.IconSource>
            <SymbolIconSource Symbol="Setting"/>
        </TabViewItem.IconSource>
        
    </TabViewItem>
    <TabViewItem Header="History" Style="{ThemeResource TabViewItemRounded}">
        <TabViewItem.IconSource>
            <SymbolIconSource Symbol="PostUpdate"/>
        </TabViewItem.IconSource>
    </TabViewItem>
    <TabViewItem Header="Download" Style="{ThemeResource TabViewItemRounded}">
        <TabViewItem.IconSource>
            <SymbolIconSource Symbol="Download"/>
        </TabViewItem.IconSource>
    </TabViewItem>
</TabView>

```

![DevWinUI](https://raw.githubusercontent.com/ghost1372/Resources/main/SettingsUI/Samples/TabViewItemRounded.png)

# InfoBar with Blue Color for Informational Severity

just add this:

```xml
<ResourceDictionary Source="ms-appx:///DevWinUI.Controls/Themes/InfoBarInformationalColor.xaml" />
```

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/BlueInfoBar.png)

# AppTitleBarMenuFlyoutItemStyle


# SelectorBar

## TokenViewSelectorBarStyle

```xml
<SelectorBar Style="{StaticResource TokenViewSelectorBarStyle}">
    <SelectorBarItem Text="Recent" />
    <SelectorBarItem Text="New" />
    <SelectorBarItem Text="Fav" />
</SelectorBar>
```
![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/TokenViewSelectorBarStyle.gif)
