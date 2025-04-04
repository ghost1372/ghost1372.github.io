---
title: OptionsPageControl
---

# Available Properties

|Name|
|-|
|MainCardCornerRadius|
|PageContent|
|PageFooterContent|
|OptionsPaneContent|
|OptionsPaneMinWidth|
|OptionsPanePadding|
|OptionsPaneVisibility|
|OptionsBarContent|
|OptionsBarFooterContent|
|OptionsBarHorizontalContentAlignment|
|OptionsBarMinWidth|
|IsPageFooterExpanded|
|IsPageFooterEnabled|
|IsOptionsBarEnabled|
|PageFooterVisibility|
|PageFooterHeader|

# Example

```xml
<Page.Resources>
    <x:String x:Key="CodeIcon">M4.86842 13.8679L9.66536 2.49276C9.8392 2.08037 10.3094 1.88921 10.7157 2.06577C11.0928 2.22973 11.2821 2.6531 11.168 3.04292L11.1362 3.13215L6.33927 14.5073C6.16537 14.9196 5.69514 15.1108 5.28897 14.9343C4.91182 14.7703 4.72253 14.3469 4.83665 13.957L4.86842 13.8679ZM0.234313 7.92378L3.43431 4.67484C3.74674 4.35764 4.25326 4.35764 4.56569 4.67484C4.85407 4.96764 4.87626 5.42838 4.63224 5.74701L4.56569 5.82353L1.93137 8.4982L4.56569 11.1728C4.8781 11.49 4.8781 12.0042 4.56569 12.3215C4.2773 12.6142 3.82351 12.6368 3.50968 12.3891L3.43431 12.3215L0.234313 9.07254C-0.0540715 8.77972 -0.0762554 8.31893 0.167761 8.00037L0.234313 7.92378ZM11.4337 4.67384C11.7221 4.38105 12.1758 4.35855 12.4897 4.60631L12.565 4.67389L15.7657 7.92386C16.0542 8.21675 16.0762 8.67778 15.8319 8.99635L15.7653 9.07286L12.5646 12.3183C12.252 12.6352 11.7454 12.6349 11.4333 12.3175C11.145 12.0245 11.1232 11.5637 11.3674 11.2453L11.434 11.1688L14.0683 8.49779L11.4336 5.82253C11.1212 5.50531 11.1212 4.99102 11.4337 4.67384Z</x:String>
</Page.Resources>
<dev:OptionsPageControl x:Name="OptionsPage"
                            Margin="50"
                            IsOptionsBarEnabled="{x:Bind IsOptionsBarEnabled.IsOn, Mode=OneWay}"
                            IsPageFooterEnabled="{x:Bind IsPageFooterEnabled.IsOn, Mode=OneWay}"
                            IsPageFooterExpanded="{x:Bind IsPageFooterExpanded.IsOn, Mode=OneWay}"
                            OptionsBarMinWidth="{x:Bind OptionsBarMinWidth.Value, Mode=OneWay}"
                            OptionsPaneMinWidth="{x:Bind OptionsPaneMinWidth.Value, Mode=OneWay}"
                            OptionsPaneVisibility="{x:Bind OptionsPaneVisibility.IsOn, Converter={StaticResource BoolToVisibilityConverter}, Mode=OneWay}"
                            PageFooterHeader="{x:Bind PageFooterHeader.Text, Mode=OneWay}"
                            PageFooterVisibility="{x:Bind PageFooterVisibility.IsOn, Converter={StaticResource BoolToVisibilityConverter}, Mode=OneWay}">
        <dev:OptionsPageControl.PageContent>
            <Page>
                <TextBlock FontSize="48"
                           Text="Page" />
            </Page>
        </dev:OptionsPageControl.PageContent>
        <dev:OptionsPageControl.OptionsPaneContent>
            <StackPanel>
                <NumberBox x:Name="OptionsPaneMinWidth"
                           Header="Options Pane Min Width"
                           Minimum="286"
                           SpinButtonPlacementMode="Inline"
                           Value="286" />
                <NumberBox x:Name="OptionsBarMinWidth"
                           Header="OptionsBar Min Width"
                           Minimum="32"
                           SpinButtonPlacementMode="Inline"
                           Value="32" />
                <ToggleSwitch x:Name="IsOptionsBarEnabled"
                              Header="Is OptionsBar Enabled"
                              IsOn="True" />
                <ToggleSwitch x:Name="IsPageFooterEnabled"
                              Header="IsPage Footer Enabled"
                              IsOn="True" />
                <ToggleSwitch x:Name="IsPageFooterExpanded"
                              Header="IsPage Footer Expanded"
                              IsOn="True" />
                <ToggleSwitch x:Name="PageFooterVisibility"
                              Header="Page Footer Visibility"
                              IsOn="True" />
                <ToggleSwitch x:Name="OptionsPaneVisibility"
                              Header="Options Pane Visibility"
                              IsOn="True" />
                <TextBox x:Name="PageFooterHeader"
                         PlaceholderText="Page Footer Header" />
            </StackPanel>
        </dev:OptionsPageControl.OptionsPaneContent>
        <dev:OptionsPageControl.OptionsBarContent>
            <StackPanel>
                <Button Width="32"
                        Height="32"
                        Padding="4"
                        HorizontalAlignment="Center"
                        Style="{StaticResource SubtleButtonStyle}"
                        ToolTipService.ToolTip="Toggle theme">
                    <Button.Content>
                        <FontIcon FontSize="16"
                                  Glyph="&#xE793;" />
                    </Button.Content>
                </Button>

                <Button Width="32"
                        Height="32"
                        Padding="4"
                        HorizontalAlignment="Center"
                        VerticalAlignment="Top"
                        Style="{StaticResource SubtleButtonStyle}"
                        ToolTipService.ToolTip="Toggle right-to-left">
                    <Button.Content>
                        <FontIcon FontSize="16"
                                  Glyph="&#xE1A0;" />
                    </Button.Content>
                </Button>
            </StackPanel>
        </dev:OptionsPageControl.OptionsBarContent>
        <dev:OptionsPageControl.OptionsBarFooterContent>
            <StackPanel>
                <Button Width="32"
                        Height="32"
                        Padding="0,0,0,2"
                        HorizontalAlignment="Center"
                        Style="{StaticResource AccentButtonStyle}"
                        ToolTipService.ToolTip="View code">
                    <Button.Content>
                        <PathIcon VerticalAlignment="Center"
                                  Data="{StaticResource CodeIcon}" />
                    </Button.Content>
                </Button>
            </StackPanel>
        </dev:OptionsPageControl.OptionsBarFooterContent>
        <dev:OptionsPageControl.PageFooterContent>
            <Page>
                <TextBlock FontSize="48"
                           Text="Footer" />
            </Page>
        </dev:OptionsPageControl.PageFooterContent>
    </dev:OptionsPageControl>

```

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/OptionsPageControl.png)


# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
