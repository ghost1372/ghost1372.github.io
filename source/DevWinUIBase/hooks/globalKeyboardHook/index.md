---
title: GlobalKeyboardHook
---

A Low-Level Global Keyboard Hook runs on a separate thread.

# Events
|Name|
|-|
|KeyDown|
|KeyUp|
|KeyPressed|

# Methods
|Name|
|-|
|Start|
|Stop|
|Dispose|

# Example

```cs
GlobalKeyboardHook hook = new GlobalKeyboardHook();
hook.KeyDown += OnKeyDown;
hook.Start();

private void OnKeyDown(sender s, KeyboardHookEventArgs e)
{
   if(e.Key == VirtualKey.B && e.IsCtrl)
   {
        // Ctrl + B
   }
}
```

{% note warning %}
Since the `GlobalKeyboardHook` operates on a different `thread`, you'll need to update the UI in the `KeyDown/KeyUp/KeyPressed` events via a `DispatcherQueue`. Failing to do so will result in an exception.
{% endnote %}

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.