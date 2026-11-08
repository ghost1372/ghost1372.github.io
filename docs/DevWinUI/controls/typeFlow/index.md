---
title: TypeFlow
---

Types its text out character by character with a natural, slightly random rhythm. Every character gets timing jitter, spaces get extra variance, and punctuation adds a pause, so the result reads like a person typing rather than a fixed-speed ticker.

The part of the text that is not typed yet is laid out but invisible, so wrapping never jumps while it types.

## Usage

```xml
<dev:TypeFlow BaseDelay="45"
              PunctuationDelay="300"
              FontSize="24"
              Text="This is some awesome placeholder text, watch it render in style!" />
```

## Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `Text` | `string` | `""` | The text to type. Changing it while loaded restarts typing when `AutoStart` is on, otherwise resets to empty. |
| `BaseDelay` | `double` | `40` | Average delay in milliseconds between characters. Values below 1 are treated as 1. |
| `PunctuationDelay` | `double` | `260` | Extra pause in milliseconds after punctuation. Sentence endings pause twice as long. |
| `AutoStart` | `bool` | `true` | Starts typing when the control loads and whenever `Text` changes. |
| `TextWrapping` | `TextWrapping` | `Wrap` | Text wrapping mode. |
| `TextAlignment` | `TextAlignment` | `Left` | Text alignment. |
| `IsTyping` | `bool` | `false` | Read-only. `true` while characters are still being typed. |

Standard `Control` font and brush properties (`FontSize`, `FontFamily`, `FontWeight`, `FontStyle`, `FontStretch`, `CharacterSpacing`, `Foreground`) are applied to the text.

## Methods

| Method | Description |
|---|---|
| `Restart()` | Clears the text and types it again from the start. |
| `Skip()` | Stops typing and shows the full text immediately. |

## Events

| Event | Signature | Description |
|---|---|---|
| `Completed` | `EventHandler` | Raised when the whole text has been typed, or when `Skip()` jumps to the end. |

## Timing

The delay before each character is computed from the character before it:

| Previous character | Delay |
|---|---|
| Any other character | `BaseDelay` with ±40% jitter |
| Space | `BaseDelay` scaled randomly between 0.5x and 2x |
| `.` `!` `?` | Jittered `BaseDelay` + 2 × `PunctuationDelay` |
| `,` `;` `:` `—` `–` or a line feed | Jittered `BaseDelay` + `PunctuationDelay` |

Surrogate pairs such as emoji are never split in half.

## Manual start

```xml
<dev:TypeFlow x:Name="Flow" AutoStart="False" Text="Press the button to begin." />
<Button Click="OnStart" Content="Start" />
```

```csharp
private void OnStart(object sender, RoutedEventArgs e) => Flow.Restart();
```

## Reacting to completion

```csharp
Flow.Completed += (_, _) => NextButton.IsEnabled = true;
```

## Styling

Override these theme resources to change the text colors:

| Resource | Default |
|---|---|
| `TypeFlowForeground` | `TextFillColorPrimaryBrush` |
| `TypeFlowForegroundDisabled` | `TextFillColorDisabledBrush` |

High contrast uses `SystemColorWindowTextColorBrush` and `SystemColorGrayTextColorBrush`.

### Template parts

| Part | Type |
|---|---|
| `PART_Body` | `TextBlock` |

A custom template must contain a `TextBlock` named `PART_Body`. The control manages its inlines, so do not set `Text` or `Inlines` on it.

## Accessibility

The control is not a tab stop. Screen readers read the text as it is typed.

> [!NOTE]
> - Unloading the control cancels typing. If `AutoStart` is on, typing starts over when it loads again.
> - Calling `Restart()` while typing cancels the running pass and starts a new one.
> - Calling `Skip()` on text that is already fully shown does not raise `Completed` again.

![TypeFlow](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/TypeFlow.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
