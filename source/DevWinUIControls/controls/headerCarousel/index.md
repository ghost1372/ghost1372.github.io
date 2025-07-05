---
title: HeaderCarousel
---

# HeaderCarousel
## Event

|Name|
|-|
|ItemClick|

## Property

|Name|
|-|
|ImageStretch|
|SelectionDuration|
|DeSelectionDuration|
|Header|
|SecondaryHeader|
|SecondaryHeaderVisibility|
|HeaderVisibility|
|IsBlurEnabled|
|BlurAmount|
|IsAutoScrollEnabled|

# HeaderCarouselItem
## Property

|Name|
|-|
|Stretch|
|ImageUrl|
|Header|
|Description|
|Id|
|IsSelected|

# Example

```xml
<dev:HeaderCarousel BlurAmount="100"
                    IsBlurEnabled="True">
    <dev:HeaderCarousel.Header>
        <TextBlock HorizontalAlignment="Center"
                    CharacterSpacing="48"
                    FontSize="40"
                    FontWeight="Bold"
                    Opacity="0.8"
                    Text="AI Dev Gallery"
                    TextAlignment="Center"
                    TextWrapping="Wrap">
            <TextBlock.Foreground>
                <LinearGradientBrush StartPoint="0,0" EndPoint="1,1">
                    <GradientStop Offset="0.1" Color="#303030" />
                    <GradientStop Offset="0.3" Color="#4A4A4A" />
                    <GradientStop Offset="0.6" Color="#161515" />
                    <GradientStop Offset="0.9" Color="#303030" />
                </LinearGradientBrush>
            </TextBlock.Foreground>
        </TextBlock>
    </dev:HeaderCarousel.Header>
    <dev:HeaderCarousel.SecondaryHeader>
        <TextBlock Margin="10,4,10,4"
                    HorizontalAlignment="Center"
                    FontSize="12"
                    Foreground="{ThemeResource TextFillColorSecondaryBrush}"
                    TextAlignment="Center"
                    TextWrapping="Wrap">
            <Run Text="Build next-gen experiences with on-device AI." />
            <Run Text="This app is in" />
            <Hyperlink NavigateUri="https://aka.ms/ai-dev-gallery">preview</Hyperlink><Run Text="." />
        </TextBlock>
    </dev:HeaderCarousel.SecondaryHeader>
    <dev:HeaderCarouselItem Description="Chat with a local language model"
                            Foreground="{StaticResource DarkTextGradient}"
                            Header="Chat"
                            Id="chat"
                            ImageUrl="ms-appx:///Assets/TileImages/Chat.png" />
    <dev:HeaderCarouselItem Description="Summarize text with a local language model"
                            Foreground="{StaticResource DarkTextGradient}"
                            Header="Text Summarization"
                            Id="summarize-text"
                            ImageUrl="ms-appx:///Assets/TileImages/TextSummarization.png" />
    <dev:HeaderCarouselItem Description="Semantically search text with a local embeddings model"
                            Foreground="{StaticResource DarkTextGradient}"
                            Header="Semantic Search"
                            Id="semantic-search"
                            ImageUrl="ms-appx:///Assets/TileImages/SemanticSearch.png" />
    <dev:HeaderCarouselItem Description="Generate text with a local model"
                            Foreground="{StaticResource DarkTextGradient}"
                            Header="Text Generation"
                            Id="generate-text"
                            ImageUrl="ms-appx:///Assets/TileImages/TextGeneration.png" />
    <dev:HeaderCarouselItem Description="Classify the main object of a given photo"
                            Foreground="{StaticResource DarkTextGradient}"
                            Header="Classify Image"
                            Id="classify-image"
                            ImageUrl="ms-appx:///Assets/TileImages/ClassifyImage.png" />
    <dev:HeaderCarouselItem Description="Simple audio translation to English"
                            Foreground="{StaticResource LightTextGradient}"
                            Header="Translate"
                            Id="translate-audio"
                            ImageUrl="ms-appx:///Assets/TileImages/Translation.png" />
    <dev:HeaderCarouselItem Description="Detect items in a photo"
                            Foreground="{StaticResource DarkTextGradient}"
                            Header="Detect Objects"
                            Id="detect-objects"
                            ImageUrl="ms-appx:///Assets/TileImages/DetectObjects.png" />
    <dev:HeaderCarouselItem Description="Segment an image"
                            Foreground="{StaticResource LightTextGradient}"
                            Header="Image Segmentation"
                            Id="segment-image"
                            ImageUrl="ms-appx:///Assets/TileImages/ImageSegmentation.png" />
    <dev:HeaderCarouselItem Description="Transcribe audio into text"
                            Foreground="{StaticResource DarkTextGradient}"
                            Header="Transcribe"
                            Id="transcribe-audio"
                            ImageUrl="ms-appx:///Assets/TileImages/Transcription.png" />
</dev:HeaderCarousel>

```

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/HeaderCarousel.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
