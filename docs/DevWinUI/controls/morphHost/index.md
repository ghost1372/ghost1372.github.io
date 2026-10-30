---
title: MorphHost
---

`MorphHost` inherits from `Panel`. It stacks its children and reports a height that springs toward the natural height of `Current`.

# Property

|Name|
|-|
|Stiffness|
|Damping|
|AnimateHeight|
|Current|

# Methods

|Name|
|-|
|SnapNext|

# Example

```xml
<dev:MorphHost x:Name="Host">
    <StackPanel x:Name="PageOne">
        <TextBlock Text="Short content" />
    </StackPanel>
    <StackPanel x:Name="PageTwo" Visibility="Collapsed">
        <TextBlock Text="Taller content" />
        <TextBlock Text="With more lines" />
    </StackPanel>
</dev:MorphHost>
```

```csharp
Host.Current = PageTwo;
```

> [!NOTE]
> `Current` is a CLR property, not a dependency property, so it cannot be set from XAML or through binding.

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
