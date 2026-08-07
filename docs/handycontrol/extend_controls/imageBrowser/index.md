---
title: ImageBrowser
---

You can easily browse a single picture with the help of `ImageBrowser`.

```cs
public class ImageBrowser : Window
```

# Case
After the constructor passes in the picture address, you can start to browse the picture:

```cs
new ImageBrowser(new Uri("pack://application:,,,/Resources/Img/1.jpg")).Show()
```

![ImageBrowser](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Resources/ImageBrowser.gif)

# Features
The screenshot of the function panel is as follows:

![ImageBrowser](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/extend_controls/ImageBrowser_1.png)

The functions from left to right are: `Save to local`, `Open the picture with the system default program`, `Zoom out the picture`, `Enlarge the picture`, `Original size`, `Turn left picture`, `Turn right picture` .