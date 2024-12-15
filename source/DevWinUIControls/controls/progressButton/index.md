---
title: ProgressButton
---

# Attributes
|Property|
|-|
|ProgressBackground|
|ProgressForeground|
|ProgressRingHorizontalAlignment|
|ProgressRingSize|
|ProgressRingVisibility|
|IsIndeterminateProgressRing|
|ProgressRingStyle|
|CheckedContent|
|ShowError|
|ShowPaused|
|IsIndeterminate|
|Progress|


# Example

```xml
<dev:ProgressButton Width="200"
                    Checked="ProgressButton_Checked"
                    CheckedContent="Downloading..."
                    Content="Click Here"
                    Unchecked="ProgressButton_Checked" />

<dev:ProgressButton Width="200"
                    Checked="ProgressButton_Checked"
                    CheckedContent="Downloading..."
                    Content="Click Here"
                    IsIndeterminateProgressRing="true"
                    ProgressRingVisibility="Visible"
                    Unchecked="ProgressButton_Checked" />
```

```cs
private async void ProgressButton_Checked(object sender, RoutedEventArgs e)
{
    var pb = sender as ProgressButton;
    if (pb.IsChecked.Value && !pb.IsIndeterminate)
    {
        pb.Progress = 0;
        while (true)
        {
            pb.Progress += 1;
            await Task.Delay(50);
            if (pb.Progress == 100)
            {
                pb.IsChecked = false;
                break;
            }
        }
    }
}
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/ProgressButton.gif)
