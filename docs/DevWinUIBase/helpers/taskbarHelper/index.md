---
title: TaskbarHelper
---

you can handle Taskbar for your application:

```cs
TaskbarHelper.SetProgressState(windowHandle, TaskbarStates.Error);

TaskbarHelper.SetProgressValue(windowHandle, 56, 100);

TaskbarHelper.FlashWindow(windowHandle);
```

### FlashWindow

Flash Taskbar 3 times by default:
```cs
TaskbarHelper.FlashWindow(hwnd); // Or TaskbarHelper.FlashWindow(window);
```

Flash until Window comes to the foreground:

```cs
TaskbarHelper.FlashWindow(hwnd, TaskbarFlashFlags.FLASHW_TRAY | TaskbarFlashFlags.FLASHW_TIMERNOFG, count: 0);
```

Stop Flashing:

```cs
TaskbarHelper.FlashWindow(hwnd, TaskbarFlashFlags.FLASHW_STOP);
```

> [!WARNING] 
> To test it, keep in mind that clicking a button may not show the flashing effect while the app window is in the foreground. Add a delay before calling FlashWindow, for example, `await Task.Delay(4000);`, then minimize the app or switch to another window. This way, you can clearly see the flashing effect.

```cs
private async void ButtonClick(object sender, RoutedEventArgs e)
{
    await Task.Delay(4000);
    TaskbarHelper.FlashWindow(hwnd);
    // Now Minimize Your window immediatly
}
```


![TaskbarError](https://raw.githubusercontent.com/ghost1372/Resources/main/SettingsUI/Samples/TaskbarError.png)

![TaskbarValue](https://raw.githubusercontent.com/ghost1372/Resources/main/SettingsUI/Samples/TaskbarValue.png)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
