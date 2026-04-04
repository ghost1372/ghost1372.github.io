---
title: AnimatedTextBlock
---

A TextBlock control which animates the text with customizable effects.

# Property

|Name|
|-|
|Text|
|TextEffect|
|TextAlignment|
|TextDirection|
|TextTrimming|
|TextWrapping|

# Events

|Name|
|-|
|RedrawStateChanged|

# Effects

|Name|
|-|
|TextDefaultEffect|
|TextBlurEffect|
|TextElasticEffect|
|TextMotionBlurEffect|
|TextPivotEffect|
|TextZoomEffect|

# Example

```xml
<dev:AnimatedTextBlock Text="DevWinUI">
    <dev:AnimatedTextBlock.TextEffect>
        <dev:TextDefaultEffect/>
    </dev:TextBlockFX.TextEffect>
</dev:AnimatedTextBlock>    
```


{% note info %}
You can Write Your Own Effects. Define a new effect class and implement the `ITextEffect` interface.
Draw the text by using Win2D API.
{% endnote %}

{% note warning %}
Use `AnimatedTextBlock` inside a `Grid`. If you place it in a `StackPanel` or other panels, make sure to set its width and height; otherwise, the control will not be visible.
{% endnote %}

![AnimatedTextBlock](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/AnimatedTextBlock.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
