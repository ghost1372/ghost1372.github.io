---
title: AncestorBindingExtension
---

`AncestorBinding` is a powerful markup extension that enables relative binding based on ancestor type. Similar to WPF’s {RelativeSource Mode=FindAncestor}, it allows developers to access elements outside of a DataTemplate from within, which is typically not possible through standard ElementName binding.

```xml
 <TextBlock Text="{dev:AncestorBinding Path=MyProperty, AncestorType=dev:MyControl}" />
```

{% note warning %}
AncestorBinding does not support NativeAOT.
{% endnote %}

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.