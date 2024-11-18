---
title: InlineAutoCompleteTextBox
---

# Attributes

| Name |
|-|
| IsSuggestionCaseSensitive |
| SuggestionsSource |
|SuggestionForeground|
|SuggestionPrefix|
|SuggestionSuffix|

# Example

```xml
<dev:InlineAutoCompleteTextBox IsSuggestionCaseSensitive="False" SuggestionsSource="{x:Bind DemoSuggestions, Mode=OneWay}"/>
```

```cs
private List<string> DemoSuggestions { get; } = new();

public MainWindow()
{
    this.InitializeComponent();
    DemoSuggestions.Add("Ted Mosby");
    DemoSuggestions.Add("Marshal Eriksen");
    DemoSuggestions.Add("Barney Stinson");
}
```
![DevWinUI](https://raw.githubusercontent.com/ghost1372/Resources/main/SettingsUI/Samples/InlineAutoComplete.png)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.

