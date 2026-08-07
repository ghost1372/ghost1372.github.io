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
|TextElasticSlideFadeEffect|

# Example

```xml
<dev:AnimatedTextBlock Text="DevWinUI">
    <dev:AnimatedTextBlock.TextEffect>
        <dev:TextDefaultEffect/>
    </dev:TextBlockFX.TextEffect>
</dev:AnimatedTextBlock>    
```


> [!NOTE]
> You can Write Your Own Effects. Define a new effect class and implement the `ITextEffect` interface.
> Draw the text by using Win2D API.

> [!WARNING]
> Use `AnimatedTextBlock` inside a `Grid`. If you place it in a `StackPanel` or other panels, make sure to set its width and height; otherwise, the control will not be visible.

![AnimatedTextBlock](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/AnimatedTextBlock.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
