---
title: WelcomeHero
---

# Property

|Name|
|-|
|Modules|
|LogoAsset|
|RevealTargets|
|Playback|

# Events
|Name|
|-|
|ModuleInvoked|


# Example

> [!IMPORTANT]  
> You don’t need all of `WelcomeHeroPage`, `WelcomeHeroPage2`, and `WelcomeHeroPage3`. They’re just examples showing how you can display it the first time and then navigate back to the page.

Add a `WelcomeHeroPage.xaml`

```xml
<Frame x:Name="MainFrame" />
```

```cs
public sealed partial class WelcomeHeroPage : Page
{
    internal static WelcomeHeroPage Instance { get; private set; }
    public static bool WelcomeIntroPlayed { get; set; }
    public WelcomeHeroPage()
    {
        WelcomeIntroPlayed = false;
        InitializeComponent();
        Instance = this;

        MainFrame.Navigate(typeof(WelcomeHeroPage2));
    }

    public void NavigateToModule(string moduleTag)
    {
        MainFrame.Navigate(typeof(WelcomeHeroPage3), moduleTag);
    }
}
```

and a `WelcomeHeroPage2.xaml`

```xml
 <Grid Style="{StaticResource PageStyle}">
     <Grid.RowDefinitions>
         <RowDefinition Height="Auto" />
         <RowDefinition Height="*" />
     </Grid.RowDefinitions>

     <dev:WelcomeHero x:Name="Hero" ModuleInvoked="Hero_ModuleInvoked" />

     <ScrollViewer Grid.Row="1" VerticalScrollBarVisibility="Auto">
         <Grid Margin="32,0,32,24">
             <Grid.RowDefinitions>
                 <RowDefinition Height="*" />
                 <RowDefinition Height="Auto" />
             </Grid.RowDefinitions>
             <StackPanel VerticalAlignment="Top" Orientation="Vertical" Spacing="12">

                 <TextBlock x:Name="WelcomeTitle" HorizontalAlignment="Center" AutomationProperties.HeadingLevel="Level1" Style="{StaticResource TitleTextBlockStyle}" Text="Welcome to DevWinUI" />

                 <TextBlock x:Name="WelcomeDescription" HorizontalAlignment="Center" Foreground="{ThemeResource TextFillColorSecondaryBrush}" Text="DevWinUI is a collection of useful classes, controls, styles, and codes for WinUI 3." TextAlignment="Center" TextWrapping="Wrap" />

                 <StackPanel x:Name="WelcomeActions" Margin="0,24,0,48" HorizontalAlignment="Center" Orientation="Horizontal" Spacing="16">
                     <Button VerticalAlignment="Center">
                         <StackPanel Orientation="Horizontal" Spacing="8">
                             <FontIcon FontSize="14" Glyph="&#xE713;" />
                             <TextBlock Grid.Row="1" Margin="0,-1,0,0" HorizontalAlignment="Center" Text="Configure DevWinUI" />
                         </StackPanel>
                     </Button>

                     <HyperlinkButton VerticalAlignment="Center" NavigateUri="https://ghost1372.github.io/" Style="{StaticResource TextButtonStyle}">
                         <TextBlock Text="Documentation" TextWrapping="Wrap" />
                     </HyperlinkButton>
                 </StackPanel>
                 <dev:SettingsCard x:Name="DataDiagnosticsCard" Background="Transparent" Header="Send Diagnostic Data" HeaderIcon="{dev:FontIcon Glyph=&#xE9D9;}">
                     <dev:SettingsCard.Description>
                         <StackPanel Orientation="Vertical">
                             <TextBlock Style="{StaticResource SecondaryTextStyle}" Text="Helps us make DevWinUI faster, more stable, and better over time" TextWrapping="WrapWholeWords" />
                             <HyperlinkButton Margin="0,2,0,0" Content="Learn more" FontWeight="SemiBold" />
                             <HyperlinkButton Margin="0,2,0,0" Content="View more diagnostic data settings" FontWeight="SemiBold" />
                         </StackPanel>
                     </dev:SettingsCard.Description>
                     <ToggleSwitch />
                 </dev:SettingsCard>
             </StackPanel>

         </Grid>
     </ScrollViewer>
 </Grid>
```

```cs
public sealed partial class WelcomeHeroPage2 : Page
{
    public static Action<string> NavigateToModuleCallback { get; set; }

    private const string WelcomeAssetFolder = "ms-appx:///Assets/Modules/OOBE/Welcome/";
    public WelcomeHeroPage2()
    {
        InitializeComponent();

        NavigateToModuleCallback = NavigateToModule;

        Hero.Playback = WelcomeHeroPage.WelcomeIntroPlayed ? WelcomeHeroPlayback.Settle : WelcomeHeroPlayback.Intro;
        WelcomeHeroPage.WelcomeIntroPlayed = true;

        Hero.LogoAsset = $"ms-appx:///Assets/AppIcon.png";

        Hero.Modules =
        [
            new($"{WelcomeAssetFolder}CommandPalette.png", "CmdPal", "Command Palette"),
            new($"{WelcomeAssetFolder}AdvancedPaste.png", "AdvancedPaste", "Advanced Paste"),
            new($"{WelcomeAssetFolder}FancyZones.png", "FancyZones", "FancyZones"),
            new($"{WelcomeAssetFolder}ColorPicker.png", "ColorPicker", "Color Picker"),
            new($"{WelcomeAssetFolder}PowerRename.png", "PowerRename", "PowerRename"),
            new($"{WelcomeAssetFolder}Peek.png", "Peek", "Peek"),
            new($"{WelcomeAssetFolder}Workspaces.png", "Workspaces", "Workspaces"),
            new($"{WelcomeAssetFolder}LightSwitch.png", "LightSwitch", "Light Switch"),
            new($"{WelcomeAssetFolder}TextExtractor.png", "TextExtractor", "Text Extractor"),
            new($"{WelcomeAssetFolder}ZoomIt.png", "ZoomIt", "ZoomIt"),
            new($"{WelcomeAssetFolder}KeyboardManager.png", "KBM", "Keyboard Manager"),
            new($"{WelcomeAssetFolder}EnvironmentVariables.png", "EnvironmentVariables", "Environment Variables"),
            new($"{WelcomeAssetFolder}ImageResizer.png", "ImageResizer", "Image Resizer"),
            new($"{WelcomeAssetFolder}AlwaysOnTop.png", "AlwaysOnTop", "Always on Top"),
            new($"{WelcomeAssetFolder}FileLocksmith.png", "FileLocksmith", "File Locksmith"),
            new($"{WelcomeAssetFolder}NewPlus.png", "NewPlus", "New+"),
            new($"{WelcomeAssetFolder}PowerDisplay.png", "PowerDisplay", "Power Display"),
            new($"{WelcomeAssetFolder}MouseWithoutBorders.png", "MouseWithoutBorders", "Mouse Without Borders"),
            new($"{WelcomeAssetFolder}Awake.png", "Awake", "Awake"),
            new($"{WelcomeAssetFolder}CropAndLock.png", "CropAndLock", "Crop And Lock"),
            new($"{WelcomeAssetFolder}ScreenRuler.png", "MeasureTool", "Screen Ruler"),
            new($"{WelcomeAssetFolder}ShortcutGuide.png", "ShortcutGuide", "Shortcut Guide"),
            new($"{WelcomeAssetFolder}QuickAccent.png", "QuickAccent", "Quick Accent"),
            new($"{WelcomeAssetFolder}Hosts.png", "Hosts", "Hosts File Editor"),
            new($"{WelcomeAssetFolder}RegistryPreview.png", "RegistryPreview", "Registry Preview"),
            new($"{WelcomeAssetFolder}CommandNotFound.png", "CmdNotFound", "Command Not Found"),
            new($"{WelcomeAssetFolder}FileExplorerPreview.png", "FileExplorer", "File Explorer Add-ons"),
            new($"{WelcomeAssetFolder}PowerToysRun.png", "Run", "PowerToys Run"),
            new($"{WelcomeAssetFolder}GrabAndMove.png", "GrabAndMove", "Grab And Move"),
            new($"{WelcomeAssetFolder}FindMyMouse.png", "MouseUtils", "Find My Mouse"),
            new($"{WelcomeAssetFolder}MouseJump.png", "MouseUtils", "Mouse Jump"),
            new($"{WelcomeAssetFolder}MouseHighlighter.png", "MouseUtils", "Mouse Highlighter"),
            new($"{WelcomeAssetFolder}MouseCrosshairs.png", "MouseUtils", "Mouse Crosshairs"),
            new($"{WelcomeAssetFolder}CursorWrap.png", "MouseUtils", "Cursor Wrap"),
            new($"{WelcomeAssetFolder}WindowingAndLayouts.png", "WindowingAndLayouts", "Windowing & Layouts"),
            new($"{WelcomeAssetFolder}SystemTools.png", "SystemTools", "System Tools"),
            new($"{WelcomeAssetFolder}SemanticKernel.png", "SemanticKernel", "Semantic Kernel"),
            new($"{WelcomeAssetFolder}MouseUtils.png", "MouseUtils", "Mouse Utilities"),
            new($"{WelcomeAssetFolder}InputOutput.png", "InputOutput", "Input / Output"),
            new($"{WelcomeAssetFolder}FileManagement.png", "FileManagement", "File Management"),
            new($"{WelcomeAssetFolder}Advanced.png", "Advanced", "Advanced"),
        ];

        Hero.RevealTargets.Add(WelcomeTitle);
        Hero.RevealTargets.Add(WelcomeDescription);
        Hero.RevealTargets.Add(WelcomeActions);
        Hero.RevealTargets.Add(DataDiagnosticsCard);
    }

    private void Hero_ModuleInvoked(object sender, string navigationTag)
    {
        NavigateToModuleCallback?.Invoke(navigationTag);
    }

    private void NavigateToModule(string tag)
    {
        // Simulates opening a module's settings page. Navigating back to BlankPage1
        // re-constructs it, and since WelcomeIntroPlayed is now true it plays the
        // short "Settle" animation instead of the full "Intro" again.
        WelcomeHeroPage.Instance.NavigateToModule(tag);
    }
}
```

and a `WelcomeHeroPage3.xaml`

```xml
<Grid Padding="20" Style="{StaticResource PageStyle}">
    <StackPanel HorizontalAlignment="Center" VerticalAlignment="Center" Spacing="16">
        <!--
            This simulates a module's settings page. Navigating here and back to
            BlankPage1 (Welcome) demonstrates that the hero only plays its full
            "Intro" animation once per app window: the second time BlankPage1 is
            constructed, WelcomeHeroPlayback.Settle is used instead.
        -->
        <TextBlock x:Name="ModuleTitleText" HorizontalAlignment="Center" Style="{StaticResource TitleTextBlockStyle}" />

        <TextBlock HorizontalAlignment="Center" Foreground="{ThemeResource TextFillColorSecondaryBrush}" Text="This is a stand-in for a module's settings page." />

        <Button HorizontalAlignment="Center" Click="BackButton_Click" Content="Back to Welcome" />
    </StackPanel>
</Grid>
```

```cs
public sealed partial class WelcomeHeroPage3 : Page
{
    public WelcomeHeroPage3()
    {
        InitializeComponent();
    }

    protected override void OnNavigatedTo(NavigationEventArgs e)
    {
        base.OnNavigatedTo(e);

        var navigationTag = e.Parameter as string;
        ModuleTitleText.Text = string.IsNullOrEmpty(navigationTag) ? "Module" : navigationTag;
    }

    private void BackButton_Click(object sender, RoutedEventArgs e)
    {
        if (Frame.CanGoBack)
        {
            Frame.GoBack();
        }
    }
}

```

![WelcomeHero](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/WelcomeHero.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
