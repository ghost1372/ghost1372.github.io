---
title: Shield
---

The badge consists of the name of the left half and the value of the right half. Click the badge to open the corresponding link.


# Attributes
|Property|Description|Default Value|Remarks|
|-|-|-|-|
|Subject|Name|||
|Status|Value|||
|Color|Color||||

# Example

```xml
<x:String x:Key="GitHubIcon">M8.00662 0C3.57917 0 0 3.66665 0 8.2028C0 11.8288 2.29329 14.8981 5.4747 15.9844C5.87246 16.0661 6.01816 15.8079 6.01816 15.5908C6.01816 15.4006 6.00505 14.7488 6.00505 14.0696C3.7778 14.5586 3.31399 13.0918 3.31399 13.0918C2.95606 12.1411 2.42572 11.8968 2.42572 11.8968C1.69674 11.3943 2.47882 11.3943 2.47882 11.3943C3.28744 11.4486 3.71175 12.2363 3.71175 12.2363C4.42745 13.4856 5.58074 13.1326 6.04471 12.9153C6.11092 12.3856 6.32315 12.0189 6.5485 11.8153C4.77211 11.6251 2.90312 10.919 2.90312 7.76813C2.90312 6.8718 3.22107 6.13847 3.72486 5.56814C3.64538 5.36448 3.36693 4.52231 3.80451 3.39515C3.80451 3.39515 4.48055 3.17782 6.00488 4.23715C6.6575 4.05759 7.33054 3.96625 8.00662 3.96548C8.68266 3.96548 9.37181 4.06065 10.0082 4.23715C11.5327 3.17782 12.2087 3.39515 12.2087 3.39515C12.6463 4.52231 12.3677 5.36448 12.2882 5.56814C12.8053 6.13847 13.1101 6.8718 13.1101 7.76813C13.1101 10.919 11.2411 11.6115 9.45146 11.8153C9.74318 12.0733 9.99492 12.5621 9.99492 13.3363C9.99492 14.4363 9.98181 15.3191 9.98181 15.5906C9.98181 15.8079 10.1277 16.0661 10.5253 15.9846C13.7067 14.8979 16 11.8288 16 8.2028C16.0131 3.66665 12.4208 0 8.00662 0Z</x:String>


<StackPanel Spacing="10">
    <dev:Shield Click="Shield_Click"
                Status="Controls"
                Subject="DevWinUI" />
    <dev:Shield Click="Shield_Click"
                Status="Core"
                Subject="DevWinUI"
                Color="Green" />
    <dev:Shield Click="Shield_Click"
                Status="LandingPage"
                Subject="DevWinUI"
                Color="Orange" />
    <dev:Shield Click="Shield_Click"
                Status="Github"
                Color="Violet">
        <dev:Shield.Subject>
            <Viewbox Margin="2">
                <PathIcon Data="{StaticResource GitHubIcon}" />
            </Viewbox>
        </dev:Shield.Subject>
    </dev:Shield>
    <dev:Shield Click="Shield_Click"
                Subject="Github"
                Color="Violet">
        <dev:Shield.Status>
            <Viewbox>
                <PathIcon Margin="2"
                        Data="{StaticResource GitHubIcon}" />
            </Viewbox>
        </dev:Shield.Status>
    </dev:Shield>
</StackPanel>
```

```cs
private async void Shield_Click(object sender, Microsoft.UI.Xaml.RoutedEventArgs e)
{
    await Launcher.LaunchUriAsync(new Uri("https://github.com/Ghost1372/DevWinUI"));
}
```


# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/Shield.png)
