---
title: Native Control
---

Native controls refer to the controls that come with the WPF framework. In addition to this, simple extensions are implemented through additional properties.

> [!WARNING]
> In HandyControl, almost all native controls have a base style that is implemented by default (that is, when a style is defined, the given Key value is not displayed).

> [!WARNING]
> The base style generally has the word "Base". It is not recommended for users to use it directly in the view layer. The appropriate usage scenario is a resource file.

# FAQ

> [!NOTE]
> How can I override the default implementation of the style? Can I give BaseOn without a Key?

You can use this syntax: `BasedOn="{StaticResource {x:Type Button}}"` to override the default style of `Button`.