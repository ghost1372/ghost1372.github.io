---
title: Image
---

In `HandyControl`, corresponding to the native` Image` control, only a default control style is provided, and no special style is provided. For personalized customization, users need to customize it themselves

{% note info no-icon %}
Example:
{% code lang:xml %}
    <StackPanel Background="LightGray">
        <Image Source="Resources/Images/Image_basestyle.png" Margin="0,10"/>
        <Image Source="Resources/Images/Image_basestyle.png" RenderOptions.BitmapScalingMode="HighQuality" Stretch="Uniform"/>
    </StackPanel>
{% endcode %}

![image.baseStyle](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/image.baseStyle.png)

{% endnote %}