---
title: BlurAnimationHelper
---

# Example

```xml
<Grid>
    <Grid Name="grd">
        <Image Source="ms-appx:///Assets/Cover.png" />
    </Grid>
    <Button x:Name="btnLogin"
            Click="Button_Click"
            Content="Login"
            PointerEntered="btnLogin_PointerEntered"
            PointerExited="btnLogin_PointerExited" />
</Grid>
```

```cs
private void btnLogin_PointerEntered(object sender, Microsoft.UI.Xaml.Input.PointerRoutedEventArgs e)
{
    BlurAnimationHelper.StartBlurAnimation(grd, 0, 8, TimeSpan.FromSeconds(0.2));
}

private void btnLogin_PointerExited(object sender, Microsoft.UI.Xaml.Input.PointerRoutedEventArgs e)
{
    BlurAnimationHelper.StartBlurAnimation(grd, 8, 0, TimeSpan.FromSeconds(0.2));
}
```

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/Win2d/BlurAnimationHelper.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.