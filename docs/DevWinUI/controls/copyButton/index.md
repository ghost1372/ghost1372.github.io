---
title: CopyButton
---

```xml
<dev:CopyButton x:Name="CopyCodeButton"
                Click="CopyCodeButton_Click"
                Content="&#xE8C8;" />
```

```cs
DataPackage package = new DataPackage();
package.SetText(actualCode);
Clipboard.SetContent(package);
```

you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.

![CopyButton](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/CopyButton.gif)
