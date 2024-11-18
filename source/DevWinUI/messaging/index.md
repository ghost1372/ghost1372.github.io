---
title: Window Message Monitor
---

The Windows Message Monitor allows you to receive raw Windows Messaging Events and further control and monitor the Window.


# Example

```cs
var monitor = new WindowMessageMonitor(window); // or hwnd
monitor.WindowMessageReceived += OnWindowMessageReceived;
```

In the event handler you can then inspect these raw messages based on message id for type of message, and use the WParam and LParam according to the Windows Messaging documentation. Example:

```cs
private void OnWindowMessageReceived(object sender, WindowMessageEventArgs e)
{
    if (e.MessageType == NativeValues.WindowMessage.WM_GETMINMAXINFO)
    {
        var minMaxInfo = Marshal.PtrToStructure<NativeValues.MINMAXINFO>(e.Message.LParam);
        // some codes

        Marshal.StructureToPtr(minMaxInfo, e.Message.LParam, true);
    }
    else if (e.MessageType == NativeValues.WindowMessage.WM_NCRBUTTONDOWN)
    {
        // some codes
        e.Result = 0;
        e.Handled = true;
    }
}
```