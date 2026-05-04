---
title: GlobalMouseHook
---

A Low-Level Global Mouse Hook runs on a separate thread.

# Events
|Name|
|-|
|StatusChanged|

# Methods
|Name|
|-|
|Start|
|Stop|
|Dispose|

# Property
|Name|
|-|
|Level|
|TargetWindowHandle|

# Example

```cs
GlobalMouseHook hook = new GlobalMouseHook();
hook.StatusChanged += OnStatusChanged;
hook.Start();

private void OnStatusChanged(sender s, MouseHookEventArgs e)
{
    // X Position = e.X
    // Y Possition = e.Y

    if (e.MessageType == MouseHookMessageType.MouseMove)
    {
        // Do Something

        DispatcherQueue.TryEnqueue(() =>
        {
            // Update UI Here
        });
    }

    if (e.MessageType == MouseHookMessageType.LeftButtonDown)
    {
        // Do Something
    }
}
```

{% note warning %}
Since the `GlobalMouseHook` operates on a different `thread`, you'll need to update the UI in the `StatusChanged` event via a `DispatcherQueue`. Failing to do so will result in an exception.
{% endnote %}

# Example with HookLevel
You can restrict the hook to your application window by specifying the `TargetWindowHandle` and Hook `Level`.

```cs
GlobalMouseHook hook = new GlobalMouseHook();
hook.TargetWindowHandle = myWindowHwnd;
hook.Level = HookLevel.Application;
hook.StatusChanged += OnStatusChanged;
hook.Start();
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.