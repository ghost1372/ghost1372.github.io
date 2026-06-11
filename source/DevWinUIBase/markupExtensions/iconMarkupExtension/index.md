---
title: Icon Markup Extensions
---

The FontIcon, FontIconSource and BitmapIcon markup extensions allow developers to easily declare these types of icons directly from XAML in a compact manner.

easily use Icons in FontIcon, SymbolIcon, BitmapIcon.

# Available Extensions
|Name|
|-|
|BitmapIconExtension|
|BitmapIconSourceExtension|
|FontIconExtension|
|FontIconSourceExtension|
|SymbolIconExtension|
|SymbolIconSourceExtension|

# Example
## BitmapIconExtension
The `BitmapIconExtension` markup extension is similar in structure to the two previous extensions, but it produces `BitmapIcon` instances instead of font-based icons. Here is how it can be used:

```xml
<MenuFlyoutItem
        Text="No, click me!"
        Icon="{dev:BitmapIcon Source=/Assets/myicon.png}" />
```

or

```xml
<MenuFlyoutItem
        Text="No, click me!"
        Icon="{dev:BitmapIcon Source=/Assets/myicon.png, ShowAsMonochrome = true}" />
```

## BitmapIconSourceExtension

The `BitmapIconSourceExtension` class mirrors the `BitmapIconExtension` type, with the only difference being that it returns a `BitmapIconSource` instance. Here is how it can be used:

```xaml
<SwipeItems Mode="Reveal">
    <SwipeItem Text="Send" IconSource="{dev:BitmapIconSource Source=/Assets/myicon.png}"/>
</SwipeItems>
```

## FontIconExtension

The `FontIconExtension` type provides the ability to create `FontIcon` instances from XAML with a more compact representation than by explicitly creating a new `FontIcon` object to assign to the target property. The property also maps all the available `FontIcon` properties, so the two APIs expose the same set of customization options, just through a different XAML syntax:

|Available Property|Remark|
|-|-|
|Glyph|Example: &#xE102|
|GlyphName| Choose Glyph by its name.|
|GlyphCode| Choose Glyph by its Code.|

```xml
<CommandBar>
    <AppBarButton Icon="{dev:FontIcon Glyph=&#xE102;}"/>
</CommandBar>
```

or

```xml
<CommandBar>
    <AppBarButton Icon="{dev:FontIcon GlyphName=Accept}"/>
</CommandBar>
```

or 

```xml
<CommandBar>
    <AppBarButton Icon="{dev:FontIcon GlyphCode=E700}"/>
</CommandBar>
```

![FontIconGlyph](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/FontIconGlyph.png)

![FontIconGlyph](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/FontIconGlyph2.png)


## FontIconSourceExtension

The `FontIconSourceExtension` class mirrors the `FontIconExtension` type, but producing `FontIconSource` instances instead of `FontIcon`:

```xml
<SwipeItems Mode="Reveal">
    <SwipeItem Text="Accept" IconSource="{dev:FontIconSource Glyph=&#xE10B;}"/>
</SwipeItems>
```

## SymbolIconExtension

The `SymbolIconExtension` type mirrors the `FontIcon` markup extension, with the main difference being that it uses a `Symbol` value to specify the icon. All the other properties from `FontIconExtension` are available, with the exception of the font family. Here is how it can be used:

```xml
<CommandBar>
    <AppBarButton Icon="{dev:SymbolIcon Symbol=Play}"/>
</CommandBar>
```

## SymbolIconSource

The `SymbolIconSourceExtension` type is an alternative for `FontIconSourceExtension` that takes a `Symbol` value instead of a text, and displays the icon. It's equivalent to the `SymbolIconExtension` type, except for the fact that it returns a `FontIconSource` instance:

```xml
<SwipeItems Mode="Reveal">
    <SwipeItem Text="Play" IconSource="{dev:SymbolIconSource Symbol=Play}"/>
</SwipeItems>
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.