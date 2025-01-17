---
title: StepBar
---
A step-by-step navigation bar that guides users to complete tasks in accordance with the process.

```cs
[ContentProperty(Name = nameof(Items))]
[StyleTypedProperty(Property = nameof(ItemContainerStyle), StyleTargetType = typeof(StepBarItem))]
[TemplatePart(Name = ElementProgressBar, Type = typeof(ProgressBar))]
public class StepBar : ItemsControl
```

# Attributes
|Property|
|-|
|HeaderDisplayMode|
|Orientation|
|StepIndex|
|Status|
|ShowStepIndex|

# Events
|Property|
|-|
|StepChanged|

# Method
|Name|Description|
|-|-|
| Next() | Jump to the next step |
| Prev() | Jump to the previous step |

# Example

```xml
<dev:StepBar>
    <dev:StepBarItem Content="Register" />
    <dev:StepBarItem Content="BasicInfo" />
    <dev:StepBarItem Content="UploadFile" />
    <dev:StepBarItem Content="Complete" />
</dev:StepBar>
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/StepBar.gif)
