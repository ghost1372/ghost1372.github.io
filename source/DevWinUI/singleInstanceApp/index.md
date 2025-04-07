---
title: SingleInstanceApp
---

The `SingleInstanceApp` class provides a convenient way to create a single instance application. When your app is launched, it will only allow one instance to run at a time. If another instance of the app is launched, the app will redirect to the already running instance.

# 1. Disable auto-generated Program code

We need to check for redirection as early as possible, before creating any windows. To do this, we must define the symbol `DISABLE_XAML_GENERATED_MAIN` in the project file.

Add the following XML to the project file:
```xml
<PropertyGroup>
  <DefineConstants>$(DefineConstants);DISABLE_XAML_GENERATED_MAIN</DefineConstants>
</PropertyGroup>
```
Adding the `DISABLE_XAML_GENERATED_MAIN` symbol will disable the auto-generated Program code for your project.

# 2. Define a Program class with a Main method

## Simple

A customized `Program.cs` file which inherited from `SingleInstanceApp` must be created, and call the `Run` method in your `Main` function.

```cs
public class Program : SingleInstanceApp
{
    [STAThread]
    static int Main(string[] args)
    {
        return Run(args, "MySingleInstanceApp", () => new Program(), () => new App());
    }

    protected override void OnActivated(object sender, AppActivationArguments args)
    {
        ExtendedActivationKind kind = args.Kind;
        Debug.WriteLine("Activated");
    }
}
```

## More Control
If you want more control over how the app is launched and you don’t want to pass the `new App()` directly, you can use an overload of the `Run` method that does not require you to pass the `new App()` instance at the Main method. Instead, you need to `override` the `OnLaunched` method in your class.

```cs
public class Program : SingleInstanceApp
{
    [STAThread]
    static int Main(string[] args)
    {
        return Run(args, "MySingleInstanceApp", () => new Program());
    }

    protected override void OnLaunched()
    {
        Application.Start(p =>
        {
            var context = new DispatcherQueueSynchronizationContext(DispatcherQueue.GetForCurrentThread());
            SynchronizationContext.SetSynchronizationContext(context);
            _ = new App();
        });
    }

    protected override void OnActivated(object sender, AppActivationArguments args)
    {
        ExtendedActivationKind kind = args.Kind;
        Debug.WriteLine("Activated");
    }
}
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.