---
title: ModernWindowCaptionButtonToolTip
---

A helper to replace the win32 caption button tooltip for WinUI3 Window using WinUI3's ToolTip.


# Usage

```xml
<dev:ModernWindowCaptionButtonToolTip x:Name="CaptionToolTip" Window="{x:Bind}"/>
```

```cs
public MainWindow()
{

    this.InitializeComponent();
    ExtendsContentIntoTitleBar = true;
}
```

![ModernWindowCaptionButtonToolTip](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/ModernWindowCaptionButtonToolTip.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.