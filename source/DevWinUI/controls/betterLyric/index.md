---
title: BetterLyric
---
An elegant and deeply customizable lyrics visualizer

# BetterLyric Documentation

BetterLyric is a WinUI control for synced lyrics with translation, phonetic text, animation, and click interaction.

# Properties

|Name|
|-|
| CurrentLyricsData|
| CurrentPosition |
| CurrentIsPlaying |
| PositionOffset | 
| TimelineSyncThreshold |
| IsLyricsVisible |
| IsTranslationEnabled |
| IsPhoneticEnabled | 
| IsAutoLayoutEnabled |
|MouseScrollOffset|
|IsMouseInLyricsArea|
|IsMousePressing|
|IsMouseScrolling|
|MousePosition|
| LyricsStartX | 
| LyricsStartY |
| LyricsWidth | 
| LyricsHeight |
| IsScrollViewerEnabled |
| PlayingLineTopOffset |
| IsDynamicLyricsFontSize |
| OriginalLyricsFontSize | 
| TranslatedLyricsFontSize |
| PhoneticLyricsFontSize | 
| PhoneticLyricsOpacity | 
| PlayedOriginalLyricsOpacity |
| UnplayedOriginalLyricsOpacity | 
| TranslatedLyricsOpacity |
| LyricsAlignmentType | 
| LyricsLineContentOrientation |
| AutoWrap |
| LyricsFontStrokeWidth | 
| NonCurrentLineFillColor |
| PlayedCurrentLineFillColor |
| UnplayedCurrentLineFillColor |
| PlayedTextStrokeColor | 
| UnplayedTextStrokeColor |
| LyricsFontWeight | 
| LyricsLineOverallSpacingFactor |
| LyricsLineInnerSpacingFactor | 
| LyricsWesternFontFamily | 
| LyricsCJKFontFamily | 
| IsRightToLeftLyric | 
| WordByWordEffectMode |
| IsLyricsBlurEffectEnabled |
| IsLyricsFadeOutEffectEnabled |
| IsLyricsOutOfSightEffectEnabled |
| IsLyricsGlowEffectEnabled |
| LyricsGlowEffectScope | 
| LyricsGlowEffectLongSyllableDuration |
| IsLyricsGlowEffectAmountAutoAdjust | 
| LyricsGlowEffectAmount | 
| IsLyricsShadowEffectEnabled |
| IsLyricsScaleEffectEnabled | 
| LyricsScaleEffectLongSyllableDuration |
| IsLyricsScaleEffectAmountAutoAdjust | 
| LyricsScaleEffectAmount | 
| IsLyricsFloatAnimationEnabled |
| IsLyricsFloatAnimationAmountAutoAdjust |
| LyricsFloatAnimationAmount | 
| LyricsFloatAnimationDuration |
| LyricsScrollEasingType | 
| LyricsScrollEasingMode | 
| LyricsScrollDuration | 
| LyricsScrollTopDuration | 
| LyricsScrollBottomDuration |
| LyricsScrollTopDelay |
| LyricsScrollBottomDelay |
| IsFanLyricsEnabled | 
| FanLyricsAngle | 
| Is3DLyricsEnabled |
| Lyrics3DXAngle | 
| Lyrics3DYAngle | 
| Lyrics3DZAngle | 
| Lyrics3DAutoFitLayout |
| Lyrics3DDepth | 
| IsLyricsBrethingEffectEnabled |
| LyricsBreathingIntensity | 
| SongPosition |
| CurrentCanvasYScroll |
| ActualLyricsHeight | 
| CurrentHoveringLineIndex |

## Methods

|Name|
|-|
| ApplyLayoutFromContainer |

## Events

|Name|
|-|
| LineClicked |


# Example

```xml
<dev:BetterLyric x:Name="MyBetterLyric" IsLyricsVisible="True" CurrentIsPlaying="True" />
```

```cs
MyBetterLyric.CurrentLyricsData = GetEnglishSample();

public static LyricData GetEnglishSample()
{
    static LyricLine Line(string text, int startSec, int endSec) => new LyricLine
    {
        StartMs = (int)TimeSpan.FromSeconds(startSec).TotalMilliseconds,
        EndMs = (int)TimeSpan.FromSeconds(endSec).TotalMilliseconds,
        PrimaryText = text,
        PrimarySyllables =
        [
            new BaseLyric
            {
                Text = text,
                StartMs = (int)TimeSpan.FromSeconds(startSec).TotalMilliseconds,
                EndMs = (int)TimeSpan.FromSeconds(endSec).TotalMilliseconds,
            }
        ],
        IsPrimaryHasRealSyllableInfo = true,
    };

    return new LyricData()
    {
        LyricsLines =
        [
            Line("Is this the real life?",        0,  4),
            Line("Is this just fantasy?",         4,  8),
            Line("Caught in a landslide,",        8, 12),
            Line("No escape from reality.",      12, 16),
            Line("Open your eyes,",              16, 20),
            Line("Look up to the skies and see,",20, 25),
            Line("I'm just a poor boy,",         25, 29),
            Line("I need no sympathy.",          29, 33),
            Line("Because it's easy come, easy go,", 33, 38),
            Line("Little high, little low.",     38, 43),
            Line("Anyway the wind blows",        43, 47),
            Line("Doesn't really matter to me,", 47, 52),
            Line("To me.",                       52, 56),
        ],
    };
}
```

# Example with Slider

```xml
 <dev:BetterLyric x:Name="MyBetterLyric" CurrentIsPlaying="True" IsLyricsVisible="True" />
 <StackPanel Spacing="4">
     <Slider x:Name="ProgressSlider" PointerPressed="ProgressSlider_PointerPressed" PointerReleased="ProgressSlider_PointerReleased" ValueChanged="ProgressSlider_ValueChanged" />
     <TextBlock x:Name="PositionText" HorizontalAlignment="Center" FontSize="12" Opacity="0.7" />
 </StackPanel>
```

```cs
private DispatcherQueueTimer? _playbackTimer = App.Current.Resources.DispatcherQueue.CreateTimer();
private bool _isDraggingSlider = false;

MyBetterLyric.CurrentLyricsData = LyricData.GetEnglishWithTranslationSample();

MyBetterLyric.LineClicked += OnLineClicked;
ApplyLyricsDataToSlider();
StartPlaybackTimer();

private void OnLineClicked(object? sender, int lineIndex)
{
    var lines = MyBetterLyric.CurrentLyricsData?.LyricsLines;
    if (lines != null && lineIndex >= 0 && lineIndex < lines.Count)
        ProgressSlider.Value = lines[lineIndex].StartMs;
}

private void ApplyLyricsDataToSlider()
{
    var totalMs = (int)MyBetterLyric?.CurrentLyricsData?.Duration.TotalMiliseconds;
    ProgressSlider.Minimum = 0;
    ProgressSlider.Maximum = totalMs;
    ProgressSlider.StepFrequency = 100;
    ProgressSlider.Value = 0;

    var total = TimeSpan.FromMilliseconds(totalMs);
    PositionText.Text = $"0:00 / {(int)total.TotalMinutes}:{total.Seconds:D2}";
}

private void StartPlaybackTimer()
{
    try
    {
        _playbackTimer!.Interval = TimeSpan.FromMilliseconds(100);
        _playbackTimer.Tick += (s, e) =>
        {
            if (_isDraggingSlider) return;

            var newMs = ProgressSlider.Value + 100;
            if (newMs > (int)MyBetterLyric?.CurrentLyricsData?.Duration.TotalMiliseconds) newMs = 0;

            ProgressSlider.Value = newMs;
        };
        _playbackTimer.Start();
    }
    catch (Exception)
    {
    }
}

private void ProgressSlider_ValueChanged(object sender, Microsoft.UI.Xaml.Controls.Primitives.RangeBaseValueChangedEventArgs e)
{
    var ms = (int)e.NewValue;
    MyBetterLyric.CurrentPosition = TimeSpan.FromMilliseconds(ms);

    var current = TimeSpan.FromMilliseconds(ms);
    var total = TimeSpan.FromMilliseconds(TotalMs);
    PositionText.Text = $"{(int)current.TotalMinutes}:{current.Seconds:D2} / {(int)MyBetterLyric?.CurrentLyricsData?.Duration.TotalMinutes}:{MyBetterLyric?.CurrentLyricsData?.Duration.Seconds:D2}";
}

private void ProgressSlider_PointerPressed(object sender, PointerRoutedEventArgs e)
{
    _isDraggingSlider = true;
}

private void ProgressSlider_PointerReleased(object sender, PointerRoutedEventArgs e)
{
    _isDraggingSlider = false;
}
```

{% note info %}
When `IsAutoLayoutEnabled` is set to `true`, `LyricsStartX`, `LyricsStartY`, `LyricsWidth`, and `LyricsHeight` are calculated `automatically`.  If you want to customize these values yourself, `disable` `IsAutoLayoutEnabled` and set them manually.
{% endnote %}

{% note info %}
By default, the `ScrollViewer` for lyrics is `enabled`. You can scroll using the `mouse wheel` and `click` on any item to jump to it.  If you want to `disable` it, set `IsScrollViewerEnabled` to `false`.
{% endnote %}

![BetterLyric](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/BetterLyric.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
