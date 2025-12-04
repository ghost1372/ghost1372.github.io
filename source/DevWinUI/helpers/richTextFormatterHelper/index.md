---
title: RichTextFormatterHelper
---
Formats a TextBlock/RichTextBlock using HTML-like formatting codes.  

# Supported Tags

|Name|
|-|
|br|
|b|
|u|
|i|
|font size='size'|
|font color='hexcolor'|
|font bgcolor='hexcolor'|

{% note info %}
To combine both foreground and background colors, use font colors='hexforecolor,hexbackcolor' (colors separated by a comma).
{% endnote %}

# Example

```cs
var text = "Test of <b>bold</b> <i>italic</i> <u>underline</u><br>larger <font size='20'>font</font>||<font color='00c600'>Forecolor</font> <font bgcolor='00c600'> Background </font>||<font colors='cb3d00,004500'> Both combined </font>||regular";
```

## FormatTextBlock
Formats a TextBlock using HTML-like formatting codes.

```cs
RichTextFormatterHelper.FormatTextBlock(text, textBlock);
```

## FormatRichTextBlock
Formats a RichTextBlock using HTML-like formatting codes.

```cs
RichTextFormatterHelper.FormatRichTextBlock(text, richTextBlock);
```

![RichTextFormatter](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/RichTextFormatter.png)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
