---
title: IfExtension
---

Using the Conditional expression in XAML.

```xml
<Button Command="{hc:If {Binding BoolProperty},
                            {Binding OkCommand},
                            {Binding CancelCommand}}" />

<!--OR-->
<UserControl>
    <markup:If Condition="{Binding IsLoading}">
        <markup:If.True>
            <views:LoadingView />
        </markup:If.True>
        <markup:If.False>
            <views:LoadedView />
        </markup:If.False>
    </markup:If>
</UserControl>
```
