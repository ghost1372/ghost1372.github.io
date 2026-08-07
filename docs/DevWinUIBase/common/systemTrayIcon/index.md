---
title: SystemTrayIcon
---

# Property

|Name|
|-|
|IsVisible|
|Tooltip|

# Methods

|Name|
|-|
|CloseFlyout|
|SetIcon|
|SetTheme|

# Events

|Name|
|-|
|LeftClick|
|RightClick|
|LeftDoubleClick|
|RightDoubleClick|

# Example

```cs
public SystemTrayIcon trayIcon { get; set; }

public void AddTrayIcon()
{
    uint iconId = 123;
    if (trayIcon is null)
    {
        var icon = WindowHelper.GetWindowIcon(this);
        trayIcon = new SystemTrayIcon(iconId, icon, "ToolTip");
        trayIcon.LeftClick += OnTrayIconLeftClick;
        trayIcon.RightClick += OnTrayIconRightClick;
    }
    trayIcon.IsVisible = true;
}

public void RemoveTrayIcon()
{
    if (trayIcon is not null)
    {
        trayIcon.LeftClick -= OnTrayIconLeftClick;
        trayIcon.RightClick -= OnTrayIconRightClick;
        trayIcon.IsVisible = false;
        trayIcon.Dispose();
        trayIcon = null;
    }
}

private void OnTrayIconRightClick(SystemTrayIcon sender, SystemTrayIconEventArgs args)
{
    var flyout = new MenuFlyout();
    flyout.Items.Add(new MenuFlyoutItem() { Text = "DevWinUI", IsEnabled = false });
    flyout.Items.Add(new MenuFlyoutItem() { Text = "Open DevWinUI Gallery" });
    flyout.Items.Add(new MenuFlyoutSeparator());
    flyout.Items.Add(new MenuFlyoutItem() { Text = "Exit" });

    ((MenuFlyoutItem)flyout.Items.Last()).Click += (s, e) => this.Close();

    var submenu = new MenuFlyoutSubItem() { Text = "About" };
    submenu.Items.Add(new MenuFlyoutItem() { Text = "GitHub" });
    submenu.Items.Add(new MenuFlyoutItem() { Text = "Docs" });
    flyout.Items.Add(submenu);

    args.Flyout = flyout;
}

private void OnTrayIconLeftClick(SystemTrayIcon sender, SystemTrayIconEventArgs args)
{
    AppWindow.Presenter.As<OverlappedPresenter>().Restore();
    WindowHelper.SetForegroundWindow(this);
}
```

![SystemTrayIcon](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/SystemTrayIcon.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
