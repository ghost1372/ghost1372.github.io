---
title: MessageBox
---

# Methods

|Name|
|-|
|ShowAsync|
|ShowErrorAsync|
|ShowSuccessAsync|
|ShowInfoAsync|
|ShowQuestionAsync|
|ShowWarningAsync|

# Example

```cs
await MessageBox.ShowAsync(txtContent.Text?.ToString(), txtTitle.Text?.ToString(), MessageBoxButtons.OKCancel);
```

{% note info %}
If you want to show a Underlay (SmokeLayer or SystemBackdrop), you should specify an `OwnerWindow`.
{% endnote %}

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/MessageBox.png)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
