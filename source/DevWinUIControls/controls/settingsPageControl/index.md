---
title: SettingsPageControl
---

```cs
public sealed partial class SettingsPageControl : UserControl
```

# Attributes

| Name |
|-|
|ModuleTitle|
|ModuleDescription|
|ModuleImageSource|
|PrimaryLinks|
|SecondaryLinksHeader|
|SecondaryLinks|
|ModuleContent|

# Example

```xml
<dev:SettingsPageControl ModuleDescription="Microsoft PowerToys is a set of utilities for power users to tune and streamline their Windows experience for greater productivity. Made with 💗 by Microsoft and the PowerToys community."
                                ModuleImageSource="ms-appx:///Assets/PT.png"
                                ModuleTitle="General"
                                SecondaryLinksHeader="Related information">
    <dev:SettingsPageControl.ModuleContent>
        <StackPanel Orientation="Vertical" ChildrenTransitions="{StaticResource SettingsCardsAnimations}">
            <!-- Settings Here -->
        </StackPanel>
    </wuc:SettingsPageControl.ModuleContent>

    <dev:SettingsPageControl.PrimaryLinks>
        <dev:PageLink Link="https://aka.ms/powertoys"
                            Text="Documentation" />
        <dev:PageLink Link="https://aka.ms/powertoys"
                            Text="GitHub repository" />
        <dev:PageLink Link="https://aka.ms/powerToysReportBug"
                            Text="Report a bug" />
        <dev:PageLink Link="https://aka.ms/powerToysRequestFeature"
                            Text="Request a feature" />
    </wuc:SettingsPageControl.PrimaryLinks>

    <dev:SettingsPageControl.SecondaryLinks>
        <dev:PageLink Link="http://go.microsoft.com/fwlink/?LinkId=521839"
                            Text="Privacy statement" />
        <dev:PageLink Link="https://github.com/microsoft/PowerToys/blob/master/NOTICE.md"
                            Text="Open-source notice" />
    </wuc:SettingsPageControl.SecondaryLinks>
</wuc:SettingsPageControl>
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.

![DevWinUI](https://raw.githubusercontent.com/ghost1372/Resources/main/SettingsUI/Samples/SettingsPageControl.png)
