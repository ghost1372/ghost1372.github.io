---
title: StartupHelper
---

Provides methods to enable or disable the application startup with Windows for Packaged and UnPackaged app.

> [!NOTE]
> StartupHelper automatically detects whether the application is packaged or unpackaged and uses the registry or StartupTask method.

> [!NOTE]
> By default we use the following options (So you don't need to pass any values ​​in the methods.):
> For Packaged applications, we automatically identify the taskId from the `first` available `StartupTask`.
> For UnPackaged applications, we use `Registry.CurrentUser`.
>
> If you want to specify a specific taskId or create a registry key in another location (for example, the LocalMachine), all of the methods below have overloads that allow you to specify a taskId or RegistryKey location.

# Packaged App
First you need to create a StartupTask in `Package.appxmanifest`:

```xml
 xmlns:uap5="http://schemas.microsoft.com/appx/manifest/uap/windows10/5"

<uap5:Extension Category="windows.startupTask">
    <uap5:StartupTask
        TaskId="MyAppStartOnLoginTask"
        Enabled="true"
        DisplayName="MyApp" />
</uap5:Extension>
```
> [!NOTE]
> `TaskId` should be unique for each app.

now you can use `EnableAppStartupWithWindowsAsync`, `DisableAppStartupWithWindowsAsync` and `IsAppStartupWithWindowsEnabledAsync` methods.

## How to know App Auto Started?

```cs
protected override void OnLaunched(Microsoft.UI.Xaml.LaunchActivatedEventArgs args)
{
    MainWindow = new MainWindow();

    AppActivationArguments appActivationArguments = Microsoft.Windows.AppLifecycle.AppInstance.GetCurrent().GetActivatedEventArgs();

    if (appActivationArguments.Kind is ExtendedActivationKind.StartupTask)
    {
        if (MainWindow.AppWindow.Presenter is OverlappedPresenter presenter)
        {
            MainWindow.AppWindow.Hide();
        }
    }
    else
    {
        MainWindow.Activate();
    }
}
```

# UnPackaged App
Unpackaged application uses registry for auto Startup.

Apps that are unpackaged will have a `/onBoot` parameter added to the registry, so you can determine by checking arguments in your app whether the app was automatically launched at Windows boot or if the user launched it themselves.
for example your app entry in registry will be:

`C:\Program Files (x86)\MyApp.exe /onboot`

You can find out what the tag is with `UnPackagedAppStartupTag` Property.

## UnPackagedAppStartupTag
return UnPackaged app Startup Tag, which you can use it to determine if app is launched by user or launched at Windows boot.

```cs
var result = StartupHelper.UnPackagedAppStartupTag;
// result : /onBoot
```

# EnableAppStartupWithWindowsAsync
Enables the application startup with Windows.

```cs
var result = await StartupHelper.EnableAppStartupWithWindowsAsync();
```

# DisableAppStartupWithWindowsAsync
Disables the application startup with Windows.

```cs
var result = await StartupHelper.DisableAppStartupWithWindowsAsync();
```

# IsAppStartupWithWindowsEnabledAsync
Checks if the application is configured to run at startup.

```cs
var result = await StartupHelper.IsAppStartupWithWindowsEnabledAsync();
```

# SetTaskIdForPackagedApp
Set a TaskId for a packaged application.
If your application is UnPackaged, you do not need to call this method.

```cs
var result = await StartupHelper.SetTaskIdForPackagedApp(taskId);
```

# IsAppStartupWithWindowsForXamlBindingEnabled

> [!WARNING]
> Do not use this property directly in your C# code.

This property is intended solely for XAML binding to control app startup. 
The property retrieves the value from the `IsAppStartupWithWindowsEnabledAsync` method.
When setting a value, it calls `EnableAppStartupWithWindowsAsync` or `DisableAppStartupWithWindowsAsync` to enable or disable app startup accordingly.

```XML
<dev:SettingsCard Description="Automatically launch app when you log in to Windows"
                  Header="Run at startup"
                  HeaderIcon="{dev:BitmapIcon Source=Assets/Fluent/Startup.png}">
    <ToggleSwitch IsOn="{x:Bind dev:StartupHelper.IsAppStartupWithWindowsForXamlBindingEnabled, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged}" />
</dev:SettingsCard>
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
