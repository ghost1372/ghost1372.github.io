---
title: Divider
---

The dividing line that separates the content.

# Attributes
|Property|
|-|
|Content|
|LineStroke|
|LineStrokeThickness|
|LineStrokeDashArray|
|ContentPadding|
|HorizontalContentAlignment|
|Orientation|

# Example

```xml
<StackPanel Margin="10"
            ChildrenTransitions="{StaticResource SettingsCardsAnimations}"
            Spacing="10">
    <StackPanel Orientation="Horizontal"
                Spacing="10">
        <StackPanel Width="300">
            <dev:Divider />
            <dev:Divider Content="Title" />
            <dev:Divider ContentPadding="0">
                <Button Content="More" />
            </dev:Divider>
            <dev:Divider LineStroke="{ThemeResource AccentAAFillColorDefaultBrush}"
                            LineStrokeThickness="2" />
            <dev:Divider LineStroke="{ThemeResource SystemFillColorCriticalBrush}"
                            LineStrokeThickness="2" />

            <dev:Divider LineStrokeDashArray="2,2" />
        </StackPanel>
        <StackPanel Width="300">
            <dev:Divider HorizontalContentAlignment="Left"
                            Content="Title" />
            <dev:Divider HorizontalContentAlignment="Right"
                            Content="Title"
                            ContentPadding="10,0" />
            <StackPanel Orientation="Horizontal">
                <Button Content="Button" />
                <dev:Divider MaxHeight="16"
                                Orientation="Vertical" />
                <Button Content="Button" />
                <dev:Divider MaxHeight="16"
                                Orientation="Vertical" />
                <Button Content="Button" />
            </StackPanel>
            <StackPanel Margin="0,16,0,0"
                        Orientation="Horizontal">
                <Button Content="Button" />
                <dev:Divider MaxHeight="16"
                                LineStrokeThickness="2"
                                Orientation="Vertical" />
                <Button Content="Button" />
                <dev:Divider MaxHeight="16"
                                LineStrokeThickness="2"
                                Orientation="Vertical" />
                <Button Content="Button" />
            </StackPanel>
            <StackPanel Margin="0,16,0,0"
                        Orientation="Horizontal">
                <Button Content="Button" />
                <dev:Divider MaxHeight="16"
                                LineStroke="{ThemeResource AccentAAFillColorTertiaryBrush}"
                                LineStrokeThickness="2"
                                Orientation="Vertical" />
                <Button Content="Button" />
                <dev:Divider MaxHeight="16"
                                LineStroke="{ThemeResource SystemFillColorCriticalBrush}"
                                LineStrokeThickness="2"
                                Orientation="Vertical" />
                <Button Content="Button" />
            </StackPanel>
        </StackPanel>
    </StackPanel>
</StackPanel>
```


# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/Divider.png)
