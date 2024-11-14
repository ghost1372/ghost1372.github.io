---
title: PopupWindow
---

`PopupWindow` can control the position of pop-up elements more flexibly than `PopTip`.

{% note warning %}
PopupWindow may become obsolete in future versions.
{% endnote %}

```cs
[TemplatePart(Name = ElementMainBorder, Type = typeof(Border))]
[TemplatePart(Name = ElementTitleBlock, Type = typeof(TextBlock))]
public class PopupWindow : System.Windows.Window
```

# Attributes
|Property|Description|Default Value|Remarks|
|-|-|-|-|
|PopupElement|Popup Element|||
|ShowTitle|Whether to show the title|true||
|ShowCancel|Whether to show the cancel button|false||
|ShowBorder|Whether to show the border|false|||

# Method
|Name|Description|
|-|-|
| Show(FrameworkElement, bool) | Display window (pop-up element, with background or not) |
| Show(System.Windows.Window, Point) | Display window (relative window, offset coordinates) |
| Show(string) | Show window (pop-up message) |
| ShowDialog(FrameworkElement, bool) | Modal display window (pop-up element, whether with background) |
| ShowDialog(string, string title, bool) | Modal display window (pop-up information, title, whether to display the cancel button) |

# Case

``` CS
PopupWindow popup = new PopupWindow()
                {
                    MinWidth = 400,
                    Title = "Title",
                    WindowStartupLocation = WindowStartupLocation.CenterScreen,
                    ShowInTaskbar = true,
                    AllowsTransparency = true,
                    WindowStyle = WindowStyle.None
                };
                TextBox txtUsername = new TextBox();
popup.PopupElement = mainStack;
popup.ShowDialog();
```
