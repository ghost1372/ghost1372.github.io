---
title: ModernWindow
---

WinUI Window with more convenience Methods/Properties

```cs
public partial class ModernWindow : Microsoft.UI.Xaml.Window
```

# Properties

|Name|Description|
|-|-|
|RasterizationScale|Get RasterizationScale from Content|
|DisplayMonitor|Get DisplayMonitor for Window|
|Hwnd|Get Current Window Hwnd|
|WindowId|Get Current Window WindowId|
|IsVisible||
|GetRainbowFrame|Get RainbowFrame Instance|
|GetModernSystemMenu|Get ModernSystemMenu Instance|
|ClientSize|Get Client Size|
|Size|Get Size|
|WindowLayout|Set WindowLayout (RightToLeft/LeftToRight)|
|LegacySystemMenuTheme|Set TitleBar Win32 SystemContextMenu Theme (Dark/Light)|
|IsShownInSwitchers|Show App Icon in Taskbar|
|Width|Window Width|
|Height|Window Height|
|ClientWidth||
|ClientHeight||
|BackdropType|Change Window Backdrop (Transparent/Mica/Acrylic)|
|CornerRadius|Change Window CornerRadius (Round/SmallRound/DoNotRound)|
|UseModernSystemMenu|Use Modern SystemContextMenu for TitleBar|
|IsAlwaysOnTop|Always on Top|
|IsMinimizable|Show/Hide Minimize Button|
|IsMaximizable|Show/Hide Maximize Button|
|IsResizable||
|HasTitleBar|Show/Hide TitleBar|
|CenterOnScreen|Move Window To Center Screen|
|TitleBar|Set Custom TitleBar|
|UseRainbowFrame|Use a Colourful rainbow on Window frame|
|Icon|Set App icon|
|WindowState|Change WindowState (Maximize, Minimize, Restore)|
|AutoTrackWindow||

{% note info %}
All properties can be used in `Xaml`, but note that Xaml Window is very limited and cannot be changed at runtime (Binding/x:Bind is not working too), but you can change properties with C# code without restrictions.
{% endnote %}

{% note success %}
Properties defined in `Xaml` are only executed once when Window is `Activated`.
{% endnote %}


# Events
You can easily monitor window messages by subscribing events.

|Name|
|-|
|WindowMessageReceived|
|WindowInputNonClientPointerSourceMessageReceived|

# Methods

|Name|
|-|
|BringToFront|
|SwitchToThisWindow|
|ReActivateWindow|

# Virtual Methods (Override)
You can easily monitor window messages by overriding virtual methods.

|Name|
|-|
|OnWindowMessageReceived|
|OnWindowInputNonClientPointerSourceMessageReceived|

## Simple Example

Create a new Window (`SampleWindow`) and Change `Window` to `ModernWindow`
```xml
<dev:ModernWindow x:Class="DevWinUIGallery.Views.SampleWindow"
                 xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
                 xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
                 xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
                 xmlns:dev="using:DevWinUI"
                 xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
                 Title="SampleWindow"
                 mc:Ignorable="d">

    <Grid>
        <TextBlock HorizontalAlignment="Center"
                   VerticalAlignment="Center"
                   FontSize="68"
                   Text="Modern Window" />
    </Grid>
</dev:ModernWindow>
```
edit `SampleWindow.xaml.cs` file to:

```cs
public sealed partial class SampleWindow : ModernWindow
{
    public SampleWindow()
    {
        this.InitializeComponent();
    }
}
```

## Window with TitleBar
```xml
<dev:ModernWindow x:Class="DevWinUIGallery.Views.SampleWindow"
                 xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
                 xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
                 xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
                 xmlns:dev="using:DevWinUI"
                 xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
                 Title="SampleWindow"
                 mc:Ignorable="d">
<dev:ModernWindow.TitleBar>
    <TitleBar Title="App" Subtitle="Preview"/>
</dev:ModernWindow.TitleBar>
    <Grid>
        <TextBlock HorizontalAlignment="Center"
                   VerticalAlignment="Center"
                   FontSize="68"
                   Text="Modern Window" />
    </Grid>
</dev:ModernWindow>
```
{% note info %}
You dont need to use `ExtendContentIntoTitleBar = true` and `SetTitleBar(AppTitleBar);`
{% endnote %}

## WindowLayout : RightToLeft Window

```xml
<dev:ModernWindow x:Class="DevWinUIGallery.Views.SampleWindow"
                 
                 WindowLayout="RightToLeft">

</dev:ModernWindow>
```

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/Window-WindowLayoutRightToLeft.png)


## LegacySystemMenuTheme
```xml
<dev:ModernWindow x:Class="DevWinUIGallery.Views.SampleWindow"
                 
                LegacySystemMenuTheme="Dark" >

</dev:ModernWindow>
```
![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/Window-LegacySystemMenuTheme.png)

## CornerRadius
```xml
<dev:ModernWindow x:Class="DevWinUIGallery.Views.SampleWindow"
                 
                CornerRadius="DWMWCP_DONOTROUND" >

</dev:ModernWindow>
```
![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/Window-CornerRadius.png)

## UseModernSystemMenu
```xml
<dev:ModernWindow x:Class="DevWinUIGallery.Views.SampleWindow"
                 
                UseModernSystemMenu="true" >

</dev:ModernWindow>
```
![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/Window-UseModernSystemMenu.png)

## UseRainbowFrame
```xml
<dev:ModernWindow x:Class="DevWinUIGallery.Views.SampleWindow"
                 
                UseRainbowFrame="true" >

</dev:ModernWindow>
```
![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/Window-UseRainbowFrame.gif)

## Monitor Window Messages
The Windows Message Monitor allows you to receive raw Windows Messaging Events and further control and monitor the Window.
You can override virtual methods or subscribe events.

```cs
protected override void OnWindowMessageReceived(object? sender, WindowMessageEventArgs e)
{
    base.OnWindowMessageReceived(sender, e);
    if (e.Message.MessageId == 0x0214) //WM_SIZING event
    {
        string side = "";
        switch (e.Message.WParam)
        {
            case 1: side = "Left"; break;
            case 2: side = "Right"; break;
            case 3: side = "Top"; break;
            case 4: side = "Top-Left"; break;
            case 5: side = "Top-Right"; break;
            case 6: side = "Bottom"; break;
            case 7: side = "Bottom-Left"; break;
            case 8: side = "Bottom-Right"; break;
        }
        var rect = Marshal.PtrToStructure<RECT>((IntPtr)e.Message.LParam);
        Debug.WriteLine($"WM_SIZING: Side: {side} Rect: {rect.left},{rect.top},{rect.right},{rect.bottom}");
    }
}
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
