---
title: StartupHelper
---

Provides methods to enable or disable the application startup with Windows for Packaged and UnPackaged app.

{% note info %}
StartupHelper automatically detects whether the application is packaged or unpackaged and uses the registry or StartupTask method.
{% endnote %}

# Packaged App
First you need to create a StartupTask in `Package.appxmanifest`:

```xml
 xmlns:uap5="http://schemas.microsoft.com/appx/manifest/uap/windows10/5"

<uap5:Extension Category="windows.startupTask">
    <uap5:StartupTask
        TaskId="MyAppStartOnLoginTask"
        Enabled="true"
        DisplayName="ms-resource:AppDisplayName" />
</uap5:Extension>
```
{% note info %}
`TaskId` should be unique for each app.
{% endnote %}

Then you need to tell StartupHelper what the task ID is:
```cs
StartupHelper.SetTaskIdForPackagedApp("MyAppStartOnLoginTask");
```

now you can use `EnableAppStartupWithWindowsAsync`, `DisableAppStartupWithWindowsAsync` and `IsAppStartupWithWindowsEnabledAsync` methods.

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

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
