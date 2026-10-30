---
title: MorphingWizard
---

# Property

|Name|
|-|
|Steps|
|CurrentIndex|
|DefaultIndex|
|ResetOnCompleted|
|BackText|
|ContinueText|
|FinishText|
|CounterFormat|
|CounterForeground|
|TrackBrush|
|ProgressBrush|
|SegmentForeground|
|ActiveSegmentForeground|

# MorphingWizardStep

|Name|
|-|
|Id|
|Label|
|Content|

# Methods

|Name|
|-|
|GoTo|

# Events

|Name|
|-|
|Completed|
|StepChanged|

# Example

```xml
<dev:MorphingWizard>
    <dev:MorphingWizardStep Id="account" Label="Account">
        <StackPanel Spacing="8">
            <TextBox Header="Email" />
            <PasswordBox Header="Password" />
        </StackPanel>
    </dev:MorphingWizardStep>
    <dev:MorphingWizardStep Id="profile" Label="Profile">
        <StackPanel Spacing="8">
            <TextBox Header="Display name" />
        </StackPanel>
    </dev:MorphingWizardStep>
    <dev:MorphingWizardStep Id="done" Label="Done">
        <TextBlock Text="You are all set." />
    </dev:MorphingWizardStep>
</dev:MorphingWizard>
```

```csharp
wizard.StepChanged += (s, index) => { };
wizard.Completed += (s, e) => { };
wizard.GoTo(2);
```

> [!NOTE]
> `Steps` is the content property, so `MorphingWizardStep` elements can be placed directly inside `MorphingWizard`. `CounterFormat` receives the current step number as `{0}` and the step count as `{1}`.

> [!WARNING]
> `CurrentIndex` is read-only. When `ResetOnCompleted` is `true`, the wizard returns to the first step after `Completed` is raised.

![MorphingWizard](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/MorphingWizard.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
