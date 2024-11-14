---
title: ProgressBar
---

# ProgressBarBaseStyle

The default style of the progressbar. It is not recommended to use it directly, and it should always be used by other styles as BasedOn.

# Other styles

Other styles and effects included in `HandyControl`, including the following styles:

| Style Key | Uses | Parent Style |
| ------------------ | ---- ||
| ProgressBarSuccess | ProgressBar | ProgressBarBaseStyle |
| ProgressBarInfo | Prompt Color ProgressBar | ProgressBarBaseStyle |
| ProgressBarWarning | Warning color progressbar | ProgressBarBaseStyle |
| ProgressBarDanger | Dangerous ProgressBar | ProgressBarBaseStyle |
| ProgressBarStripeBaseStyle | Stripe progressbar default style (not recommended for direct use) |-|
| ProgressBarPrimaryStripe | Stripe ProgressBar | ProgressBarStripeBaseStyle |
| ProgressBarSuccessStripe | ProgressBar Stripe | ProgressBarStripeBaseStyle |
| ProgressBarInfoStripe | Information color stripe progressbar | ProgressBarStripeBaseStyle |
| ProgressBarWarningStripe | ProgressBar with warning stripes | ProgressBarStripeBaseStyle |
| ProgressBarDangerStripe | Dangerous Stripe ProgressBar | ProgressBarStripeBaseStyle |
| ProgressBarFlat | Flat style |-|

Case:

```xml
<WrapPanel Margin="32" ItemWidth="600">
            <StackPanel Orientation="Horizontal">
                <StackPanel Width="400">
                    <ProgressBar Value="20" Margin="0,0,0,10"/>
                    <ProgressBar Style="{StaticResource ProgressBarSuccess}" Margin="0,0,0,10" Value="40"/>
                    <ProgressBar Style="{StaticResource ProgressBarInfo}" Margin="0,0,0,10" Value="60"/>
                    <ProgressBar Style="{StaticResource ProgressBarWarning}" Margin="0,0,0,10" Value="80"/>
                    <ProgressBar Style="{StaticResource ProgressBarDanger}" Margin="0,0,0,10" Value="100" Maximum="200" IsIndeterminate="True"/>
                </StackPanel>
                <StackPanel Margin="10,0,0,0" Width="200" HorizontalAlignment="Left">
                    <TextBlock Padding="0,2,0,3" Style="{StaticResource TextBlockDefault}" Text="ProgressBarPrimary" HorizontalAlignment="Left"/>
                    <TextBlock Padding="0,12,0,3" Style="{StaticResource TextBlockDefault}" Text="ProgressBarSuccess" HorizontalAlignment="Left"/>
                    <TextBlock Padding="0,12,0,3" Style="{StaticResource TextBlockDefault}" Text="ProgressBarInfo" HorizontalAlignment="Left"/>
                    <TextBlock Padding="0,12,0,3" Style="{StaticResource TextBlockDefault}" Text="ProgressBarWarning" HorizontalAlignment="Left"/>
                    <TextBlock Padding="0,12,0,3" Style="{StaticResource TextBlockDefault}" Text="ProgressBarDanger" HorizontalAlignment="Left"/>
                </StackPanel>
            </StackPanel>
            <StackPanel Orientation="Horizontal">
                <StackPanel Width="400">
                    <ProgressBar Style="{StaticResource ProgressBarPrimaryStripe}" Margin="0,0,0,10" Value="120" Maximum="200" />
                    <ProgressBar Style="{StaticResource ProgressBarSuccessStripe}" Margin="0,0,0,10" Value="60" Maximum="200" />
                    <ProgressBar Style="{StaticResource ProgressBarInfoStripe}" Margin="0,0,0,10" Value="50" Maximum="200" />
                    <ProgressBar Style="{StaticResource ProgressBarWarningStripe}" Margin="0,0,0,10" Value="180" Maximum="200" />
                    <ProgressBar Style="{StaticResource ProgressBarDangerStripe}" Margin="0,0,0,10" IsIndeterminate="True" Maximum="200" />
                    <ProgressBar Style="{StaticResource ProgressBarFlat}" Margin="0,8,0,10" Value="110" Maximum="200" IsIndeterminate="True"/>
                </StackPanel>
                <StackPanel Margin="10,0,0,0" Width="200" HorizontalAlignment="Left">
                    <TextBlock Padding="0,2,0,3" Style="{StaticResource TextBlockDefault}" Text="ProgressBarPrimaryStripe" HorizontalAlignment="Left"/>
                    <TextBlock Padding="0,12,0,3" Style="{StaticResource TextBlockDefault}" Text="ProgressBarSuccessStripe" HorizontalAlignment="Left"/>
                    <TextBlock Padding="0,12,0,3" Style="{StaticResource TextBlockDefault}" Text="ProgressBarInfoStripe" HorizontalAlignment="Left"/>
                    <TextBlock Padding="0,12,0,3" Style="{StaticResource TextBlockDefault}" Text="ProgressBarWarningStripe" HorizontalAlignment="Left"/>
                    <TextBlock Padding="0,12,0,3" Style="{StaticResource TextBlockDefault}" Text="ProgressBarDangerStripe" HorizontalAlignment="Left"/>
                    <TextBlock Padding="0,12,0,3" Style="{StaticResource TextBlockDefault}" Text="ProgressBarFlat" HorizontalAlignment="Left"/>
                </StackPanel>
            </StackPanel>
            <StackPanel Orientation="Horizontal" Height="200">
                <ProgressBar Value="20" Margin="0,0,10,0" Orientation="Vertical" Width="20"/>
                <ProgressBar Style="{StaticResource ProgressBarSuccess}" Margin="0,0,10,0" Value="40" Orientation="Vertical" Width="20"/>
                <ProgressBar Style="{StaticResource ProgressBarInfo}" Margin="0,0,10,0" Value="60" Orientation="Vertical" Width="20"/>
                <ProgressBar Style="{StaticResource ProgressBarWarning}" Margin="0,0,10,0" Value="80" Orientation="Vertical" Width="20"/>
                <ProgressBar Style="{StaticResource ProgressBarDanger}" Margin="0,0,10,0" Value="100" Maximum="200" IsIndeterminate="True" Width="20" Orientation="Vertical"/>
                
                <ProgressBar Style="{StaticResource ProgressBarPrimaryStripe}" Margin="10,0,10,0" Value="120" Maximum="200" Orientation="Vertical" Width="20" />
                <ProgressBar Style="{StaticResource ProgressBarSuccessStripe}" Margin="0,0,10,0" Value="60" Maximum="200" Orientation="Vertical" Width="20" />
                <ProgressBar Style="{StaticResource ProgressBarInfoStripe}" Margin="0,0,10,0" Value="50" Maximum="200" Orientation="Vertical" Width="20" />
                <ProgressBar Style="{StaticResource ProgressBarWarningStripe}" Margin="0,0,10,0" Value="180" Maximum="200" Orientation="Vertical" Width="20" />
                <ProgressBar Style="{StaticResource ProgressBarDangerStripe}" Margin="0,0,10,0" IsIndeterminate="True" Maximum="200" Orientation="Vertical" Width="20"/>
                <ProgressBar Style="{StaticResource ProgressBarFlat}" Margin="0,0,10,0" Value="110" Maximum="200" IsIndeterminate="True" Orientation="Vertical" Width="4"/>
            </StackPanel>
        </WrapPanel>
```

{% note info %}
if you want to show/hide progress text in progress bar you can use `hc:VisualElement.Text`
{% code lang:xml %}
<ProgressBar Value="40" hc:VisualElement=""/>
{% endcode %}
{% endnote %}

effect:

![ProgressBar.Styles](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/ProgressBar.Styles.png)

# Tips

For color, rounded corners or other custom requirements, please refer to [ProgressBar Style Source](https://github.com/HandyOrg/HandyControl/blob/master/src/Shared/HandyControl_Shared/Themes/Styles/ProgressBar.xaml)Define it yourself.