---
title: FrameworkElementExtensions
---

# Methods

|Name|
|-|
|AnimateX|
|AnimateXAsync|
|AnimateY|
|AnimateYAsync|
|AnimateScaleX|
|AnimateScaleXAsync|
|AnimateScaleY|
|AnimateScaleYAsync|
|AnimateWidth|
|AnimateWidthAsync|
|AnimateHeight|
|AnimateHeightAsync|
|FindChild|
|FindChildOrSelf|
|FindChildren|
|FindParent|
|FindParentOrSelf|
|FindParents|
|GetContentControl|
|FindResource|
|TryFindResource|
|StartClipAnimation|
|StartClipAnimationAsync|
|SetDropShadow|
|IsFullyVisibile|
|GetTranslateX|
|GetTranslateY|
|TranslateX|
|TranslateY|
|TranslateDeltaX|
|TranslateDeltaY|
|GetScaleX|
|GetScaleY|
|ScaleX|
|ScaleY|
|ScaleDeltaX|
|ScaleDeltaY|
|GetCompositeTransform|
|Ancestor|
|AncestorType|

# Ancestor | AncestorType

Useful when you want to bind outside of a ItemTemplate

```xml
<ItemsControl x:Name="ShortcutsControl" ItemsSource="{TemplateBinding Keys}">
    <ItemsControl.ItemTemplate>
        <DataTemplate>
            <StackPanel Orientation="Vertical">
                <local:KeyVisual2 local:FrameworkElementExtensions.AncestorType="local:ShortcutWithTextLabel2" Content="{Binding}" IsTabStop="False" Style="{Binding (local:FrameworkElementExtensions.Ancestor).KeyVisualStyle, RelativeSource={RelativeSource Self}}" />
            </StackPanel>
        </DataTemplate>
    </ItemsControl.ItemTemplate>
</ItemsControl>
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.