---
title: WindowedContentDialog
---

# Property

|Name|
|-|
|Title|
|Content|
|PrimaryButtonText|
|SecondaryButtonText|
|CloseButtonText|
|TitleTemplate|
|ContentTemplate|
|ContentTemplateSelector|
|DefaultButton|
|IsPrimaryButtonEnabled|
|IsSecondaryButtonEnabled|
|PrimaryButtonStyle|
|SecondaryButtonStyle|
|CloseButtonStyle|
|Underlay|
|UnderlaySystemBackdrop|
|WindowTitle|
|SystemBackdrop|
|IsResizable|
|HasTitleBar|
|CenterInParent|
|OwnerWindow|
|Foreground|
|Background|
|BorderBrush|
|BorderThickness|
|FlowDirection|
|RequestedTheme|
|ContentMinWidth|
|ContentFlowDirection|

# Events

|Name|
|-|
|PrimaryButtonClick|
|SecondaryButtonClick|
|CloseButtonClick|
|Opened|
|Closed|

# Methods

|Name|
|-|
|ShowAsync|
|Close|

# Example

```cs
WindowedContentDialog dialog = new()
{
    Title = "YourTitle",
    Content = "YourContent",
    PrimaryButtonText = "YourPrimaryButtonText",
    SecondaryButtonText = "YourSecondaryButtonText",
    CloseButtonText = "YourCloseButtonText",
    DefaultButton = ContentDialogButton.Primary,
    OwnerWindow = App.Current.MainWindow
};
ContentDialogResult result = await dialog.ShowAsync();
var result = result.ToString();
```


{% note info %}
If you want to prevent dialog from closing after buttons clicked, please handle click event and set e.Cancel = true where e is ContentDialogWindowButtonClickEventArgs.

`dialog.PrimaryButtonClick += (o, e) => e.Cancel = true;`
{% endnote %}

{% note info %}
If you want to show a Underlay (SmokeLayer or SystemBackdrop), you should specify an `OwnerWindow`.
{% endnote %}


# Using in XAML / WindowedContentDialog

```xml
<Page.Resources>
    <dev:WindowedContentDialog
        x:Key="XamlWindowedContentDialog"
        x:Name="XamlWindowedContentDialog"
        CloseButtonText="CloseButtonText"
        DefaultButton="Primary"
        IsModal="false"
        IsPrimaryButtonEnabled="true"
        IsSecondaryButtonEnabled="true"
        PrimaryButtonText="PrimaryButtonText"
        SecondaryButtonText="SecondaryButtonText">
        <dev:WindowedContentDialog.SystemBackdrop>
            <MicaBackdrop />
        </dev:WindowedContentDialog.SystemBackdrop>

        <dev:WindowedContentDialog.Title>
            <dev:MessageBoxHeader Icon="Information" Text="Title" />
        </dev:WindowedContentDialog.Title>
            
            <StackPanel>
                <!-- Content -->
            </StackPanel>

    </dev:WindowedContentDialog>
</Page.Resources>
```

```cs
ContentDialogResult result = await XamlWindowedContentDialog.ShowAsync();
```

# Using in XAML / ContentDialogWindow

```xml
<dev:ContentDialogWindow
    x:Class="Sample.SampleContentDialogWindow"
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
    xmlns:dev="using:DevWinUI"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    Title="Sample ContentDialogWindow"
    CloseButtonText="Close Button"
    DefaultButton="Primary"
    DialogTitle="Title"
    PrimaryButtonText="Primary Button"
    SecondaryButtonText="Secondary Button"
    mc:Ignorable="d">

    <dev:ContentDialogWindow.SystemBackdrop>
        <MicaBackdrop />
    </dev:ContentDialogWindow.SystemBackdrop>

    <StackPanel>
        <!-- Content -->
    </StackPanel>

</dev:ContentDialogWindow>
```

```cs
new SampleContentDialogWindow().OpenAfterLoaded();
```

![WindowedContentDialog](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/WindowedContentDialog.png)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
