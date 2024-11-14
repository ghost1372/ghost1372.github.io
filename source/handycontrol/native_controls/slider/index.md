---
title: Slider
---

# SliderBaseStyle

The default style of the slider is not recommended. It should always be used by other styles as BasedOn.

Case:

```xml
<Slider VerticalAlignment="Center" Width="400" Value="40" Maximum="100"/>
```

effect:

![Slider.DefaultStyle](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/Slider.DefaultStyle.png)

{% note info %}
you can use `TipElement` Attached Property
{% code lang:xml %}
<Slider hc:TipElement.Visibility="Visible" hc:TipElement.Placement="BottomRight" IsSnapToTickEnabled="True" Value="5" TickPlacement="Both" Orientation="Vertical"/>
{% endcode %}
{% endnote %}