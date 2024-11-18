---
title: ColorfulShimmingEffect
---

# Attributes

| Name |
|-|
|ColorfulShimmingEffectItem|
|Content|

# Example

```xml
<dev:ColorfulShimmingEffect>
    <dev:ColorfulShimmingEffect.ColorfulShimmingEffectItems>
        <dev:ColorfulShimmingEffectItem DelayTimeSpan="0"
                                        DurationTimeSpan="0:0:10"
                                        Z="50.0"
                                        Color="Yellow" />
        <dev:ColorfulShimmingEffectItem DelayTimeSpan="0:0:0.25"
                                        DurationTimeSpan="0:0:10"
                                        Z="50.0"
                                        Color="Green" />
    </wuc:ColorfulShimmingEffect.ColorfulShimmingEffectItems>
    <TextBlock HorizontalAlignment="Center"
               FontSize="140"
               FontWeight="Bold"
               Foreground="White"
               Text="DevWinUI" />
</wuc:ColorfulShimmingEffect>
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/ColorfulShimmingEffect.gif)
