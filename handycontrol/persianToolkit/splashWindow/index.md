---
title: SplashWindow
---

A Simple Dynamic Splash Screen.

{% note info %}
Available Only in Custom Version
{% endnote %}

```cs
public class SplashWindow : HandyControl.Controls.Window, ISplashWindow, INotifyPropertyChanged
```

# Case

First create a Windows (we call it `MySplashWindow.xaml`) and change `<Window` to `<hc:SplashWindow`

```xml
<hc:SplashWindow x:Class="HandyControlDemo.MySplashWindow"
           xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
           xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
           xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
           xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
           xmlns:hc="https://handyorg.github.io/handycontrol"
           mc:Ignorable="d"
           WindowStartupLocation="CenterScreen"
           Title="Splash Window" 
           Height="450" 
           Width="800">
   
</hc:SplashWindow>
```

```cs
public partial class MySplashWindow : HandyControl.Controls.SplashWindow
{
    public MySplashWindow()
    {
        InitializeComponent();
    }
}
```

Now initialize the `SplashWindow` in `App.cs` and `OnStartup` method

``` CS
protected override void OnStartup(StartupEventArgs e)
{
    SplashWindow.Init(()=> {
                MySplashWindow splash = new MySplashWindow();
                return splash;
            });
    base.OnStartup(e);
}
```

Now to display messages in splash you can use the built-in `Message` property.
Be sure to connect the `AncestorType` to the `hc:SplashWindow`

```xml
<hc:SplashWindow x:Class="HandyControlDemo.MySplashWindow"
           xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
           xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
           xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
           xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
           xmlns:hc="https://handyorg.github.io/handycontrol"
           mc:Ignorable="d"
           WindowStartupLocation="CenterScreen"
           Title="Splash Window" 
           Height="450" 
           Width="800">
    <TextBlock Text="{Binding Message, RelativeSource={RelativeSource AncestorType=hc:SplashWindow}}"/>
</hc:SplashWindow>
```

Now do this to display splash and update messages

``` CS
public MainWindow()
{
    SplashWindow.Instance.AddMessage("Loading main window");
    DoSomethingThatTakesALongTime();
    SplashWindow.Instance.AddMessage("Loading something Witty");
    DoSomethingElseThatTakesALongTime();
    //This will probably never actually get seen
    SplashWindow.Instance.AddMessage("Done!");
    InitializeComponent();
    SplashWindow.Instance.LoadComplete();
}

private void DoSomethingElseThatTakesALongTime()
{
    Thread.Sleep(2000);
}

private void DoSomethingThatTakesALongTime()
{
    Thread.Sleep(2000);
}
```