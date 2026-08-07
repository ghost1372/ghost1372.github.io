---
title: Helper
---

|Name|Remarks|
|-|-|
|AnimationHelper||
|ArithmeticHelper|Internal|
|ConfigHelper||
|DesignerHelper||
|DpiHelper||
|IconHelper||
|InputClickHelper||
|ResourceHelper||
|ScreenHelper||
|SecurityHelper|Internal|
|SingleOpenHelper||
|TokenizerHelper|Internal|
|TouchDragMoveWindowHelper|Internal|
|ValidateHelper||
|VisualHelper||
|WindowHelper||
|BindingHelper||
|FullScreenHelper||

# AnimationHelper
## CreateAnimation

# ConfigHelper
|Name|Remarks|
|-|-|
|SetLang||
|SetConfig||
|SetTimelineFrameRate||
|SetWindowDefaultStyle||
|SetNavigationWindowDefaultStyle||

## SetLang
Change program language and culture

```cs
ConfigHelper.Instance.SetLang("en");
``` 

# DesignerHelper

```cs
var isDesign = DesignerHelper.IsInDesignMode;
```

# ResourceHelper
|Name|Remarks|
|-|-|
|GetResource||

Example:

```cs
var res = ResourceHelper.GetResource<Brush>("PrimaryBrush");
```

# SingleOpenHelper

Example:

```cs
var picker = SingleOpenHelper.CreateControl<ColorPicker>();
var window = new PopupWindow
{
    PopupElement = picker,
    WindowStartupLocation = WindowStartupLocation.CenterScreen,
    AllowsTransparency = true,
    WindowStyle = WindowStyle.None,
    MinWidth = 0,
    MinHeight = 0,
    Title = "Select Accent Color"
};
window.Show();
```

# ValidateHelper
|Name|Remarks|
|-|-|
|IsInRangeOfDouble||
|IsInRangeOfPosDouble||
|IsInRangeOfPosDoubleIncludeZero||
|IsInRangeOfNegDouble||
|IsInRangeOfNegDoubleIncludeZero||
|IsInRangeOfPosInt||
|IsInRangeOfPosIntIncludeZero||
|IsInRangeOfNegInt||
|IsInRangeOfNegIntIncludeZero||

# WindowHelper
|Name|Remarks|
|-|-|
|GetActiveWindow||
|WindowMaximizedPadding||
|SetWindowToForeground||
|TouchDragMove||
|CreateHandle||
|GetHandle||
|GetHwndSource||
|IsInRangeOfNegIntIncludeZero||
|StartFullScreen||
|EndFullScreen||

# DpiHelper

Get Device Dpi and Dpi Scale

```cs
var DpiScale = DpiHelper.LogicalToDeviceUnitsScalingFactorX;
// result: 1.25
var dpi = DpiHelper.DeviceDpiX;
// result: 120

```