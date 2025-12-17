---
title: StringExtension
---

|Name|
|-|
|IsEmail|
|IsDecimal|
|IsNumeric|
|IsPhoneNumber|
|IsCharacterString|
|DecodeHtml|
|FixHtml|
|Truncate|
|GetHash|
|ConvertToPersianDigit|
|ConvertToPersianChar|
|ConvertToEnglishDigit|
|GetSolidColorBrush|
|FormatRichTextBlock|
|FormatTextBlock|
|ToBitmapImage|

# Example

```cs

bool output1 = text.IsEmail();

//

bool output2 = text.IsDecimal();

//

bool output3 = text.IsNumeric();

//

bool output4 = text.IsPhoneNumber();

//

bool output5 = text.IsCharacterString();

//

var output6 = text.DecodeHtml(); //  Returns a string with HTML comments, scripts, styles, and tags removed.

//

var output7 = text.FixHtml(); //  Returns a string with HTML comments, scripts, and styles removed.

//

var output8 = text.Truncate(length); // Truncates a string to the specified length.

```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.