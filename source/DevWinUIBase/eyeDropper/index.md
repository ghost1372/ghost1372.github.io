---
title: EyeDropper
---

Choose a color from anywhere on your screen.

# Events
|Name|
|-|
|ColorPicked|

# Methods
|Name|
|-|
|Start|
|Stop|

# Example

```cs
EyeDropper eyeDropper = new EyeDropper();
eyeDropper.ColorPicked += OnColorPicked;
eyeDropper.Start();

private void OnColorPicked(sender s, Color color)
{
    DispatcherQueue.TryEnqueue(() =>
    {
        myBorder.Background = new SolidColorBrush(color);
    });
}
```

{% note warning %}
`EyeDropper` uses a `GlobalMouseHook`, which operates on a separate `thread`. Because of this, if you need to update the UI in the `ColorPicked` event, you must call it from a `DispatcherQueue` to avoid exceptions.
{% endnote %}

![EyeDropper](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/EyeDropper.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.