---
title: ColorAnalyzer
---

The ColorAnalyzer is a resource that generates a color palette from any UIElement, but most notably from an Image. After the palette is generated, you can use a Analyzer or collection of Analyzer items to select colors from the palette to bind to in the UI.

# Properties
|Name|
|-|
|Source|
|Analyzers|
|AnalyzedColors|

# Methods
|Name|
|-|
|UpdateAnalyzerAsync|
|UpdateAnalyzer|

# Events
|Name|
|-|
|AnalyzerUpdated|

# Available Analyzers
|Name|
|-|
|AccentColorAnalyzer|
|BaseColorAnalyzer|
|ColorWeightAnalyzer|

# XXX ColorAnalyzer Properties
|Name|
|-|
|SelectedColors|
|MinColorCount|

# AccentColorAnalyzer
The `AccentColorAnalyzer` can be used to extract accent colors from an image. An accent color is a color that stands out, which we detect by looking for colors following a "colorness" formula.

# BaseColorAnalyzer
The `BaseColorAnalyzer` can be used to extract basic colors from an image. Basic colors are colors that standand out less stands out, which we detect by using the same "colorness" formula, as accent colors, but inverting the results.

# ColorWeightAnalyzer
The `ColorWeightAnalyzer` can be used to determine which colors cover the most area in an image.

# Using multiple Analyzer items
multiple Analyzer items can be used together in a single ColorAnalyzer to extract any combination of color data from an image.

# Xaml Example
This guide demonstrates how to set up and use the `ColorAnalyzer` to extract colors from an image.

1. Declare the Analyzer in Resources

First, define a ColorAnalyzer in your page's resources. You can add one or multiple analyzers such as `AccentColorAnalyzer`, `BaseColorAnalyzer`, or `ColorWeightAnalyzer` inside it:
```xml
<Page.Resources>
    <dev:ColorAnalyzer x:Name="ColorAnalyzerSample"
                        Source="{x:Bind ImageSample}">
        <dev:AccentColorAnalyzer x:Name="AccentColorAnalyzerSample"
                                    MinColorCount="3" />
        <dev:BaseColorAnalyzer x:Name="BaseColorAnalyzerSample"
                                MinColorCount="3" />
        <dev:ColorWeightAnalyzer x:Name="ColorWeightAnalyzerSample"
                                    MinColorCount="3" />
    </dev:ColorAnalyzer>
</Page.Resources>
```

You can use a single analyzer or a collection of analyzers depending on your needs.
`MinColorCount` defines the minimum number of prominent colors the analyzer should extract.

{% note info %}
The Source property should point to the element (e.g., an Image) you want to analyze.
{% endnote %}

2. Bind the Analyzer to an Image

Add an image to your UI and bind it to the `ColorAnalyzer` via the Source property:

```xml
 <Image x:Name="ImageSample"
        Width="200"
        Height="200"
        ImageOpened="ImageSample_ImageOpened"
        Source="ms-appx:///Assets/Carousel/5.jpg"
        Stretch="Uniform" />
```
The `ImageOpened` event ensures the analyzer is updated once the image is loaded.
If the image source changes, you must update the analyzer manually:

```cs
private void ImageSample_ImageOpened(object sender, RoutedEventArgs e)
{
    ColorAnalyzerSample.UpdateAnalyzer();
}
```

3. Access the Colors
You can now access the analyzed colors from each analyzer. For example, to set a background color:

```xml
<Border>
    <Border.Background>
        <SolidColorBrush Color="{x:Bind AccentColorAnalyzerSample.SelectedColors[0], FallbackValue=Transparent, Mode=OneWay}" />
    </Border.Background>
    <TextBlock dev:ContrastAnalyzer.Opponent="{x:Bind AccentColorAnalyzerSample.SelectedColors[0], FallbackValue=Transparent, Mode=OneWay}"
                Text="Primary Accent" />
</Border>
```

or

```xml
<Border>
    <Border.Background>
        <SolidColorBrush Color="{x:Bind BaseColorAnalyzer.SelectedColors[0], FallbackValue=Transparent, Mode=OneWay}" />
    </Border.Background>
    <TextBlock dev:ContrastAnalyzer.Opponent="{x:Bind BaseColorAnalyzer.SelectedColors[0], FallbackValue=Transparent, Mode=OneWay}"
                Text="Primary Base" />
</Border>
```

{% note info %}
SelectedColors returns a list of colors extracted by the analyzer.
You can access a specific color by index (e.g., [0] for the first prominent color).
{% endnote %}


# CSharp Example

```cs
var ColorAnalyzerSample = new ColorAnalyzer();
ColorAnalyzerSample.Source = ImageSample;

var AccentColorAnalyzerSample = new AccentColorAnalyzer() { MinColorCount = 3 };
var BaseColorAnalyzerSample = new BaseColorAnalyzer() { MinColorCount = 3 };
var ColorWeightAnalyzerSample = new ColorWeightAnalyzer() { MinColorCount = 3 };
ColorAnalyzerSample.Analyzers.Add(AccentColorAnalyzerSample);
ColorAnalyzerSample.Analyzers.Add(BaseColorAnalyzerSample);
ColorAnalyzerSample.Analyzers.Add(ColorWeightAnalyzerSample);

myElement.Foreground = new SolidColorBrush(AccentColorAnalyzerSample.SelectedColors[0]);

private void ImageSample_ImageOpened(object sender, RoutedEventArgs e)
{
    ColorAnalyzerSample.UpdateAnalyzer();
}
```

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/ColorAnalyzer.png)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.