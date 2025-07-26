---
title: Accordion
---

# Accordion
## Property

|Name|
|-|
|SelectedIndex|
|ItemsSource|
|ItemTemplate|
|HeaderTemplate|
|Subtitle|
|Description|
|Profile|
|Footer|

# AccordionItem
## Property
|Name|
|-|
|Header|
|HeaderTemplate|

# AccordionPanel
## Property
|Name|
|-|
|SelectedIndex|
|ItemsSource|
|ItemTemplate|
|HeaderTemplate|

# Example

```xml
<dev:Accordion ItemsSource="{x:Bind ViewModel.SampleImageAndTextData, Mode=OneWay}">
    <dev:Accordion.ItemTemplate>
        <DataTemplate x:DataType="model:SampleData">
            <Image HorizontalAlignment="Center"
                    VerticalAlignment="Center"
                    Source="{x:Bind ImageUrl}"
                    Stretch="UniformToFill" />
        </DataTemplate>
    </dev:Accordion.ItemTemplate>
    <dev:Accordion.HeaderTemplate>
        <DataTemplate x:DataType="model:SampleData">
            <Grid>
                <Grid.Background>
                    <SolidColorBrush Opacity="0.25"
                                        Color="{ThemeResource CardBackgroundFillColorDefault}" />
                </Grid.Background>
                <TextBlock Margin="0,0,0,4"
                            HorizontalAlignment="Center"
                            VerticalAlignment="Center"
                            Style="{ThemeResource TitleTextBlockStyle}"
                            Text="{x:Bind Name}" />
            </Grid>
        </DataTemplate>
    </dev:Accordion.HeaderTemplate>
</dev:Accordion>
```

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/Accordion.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
