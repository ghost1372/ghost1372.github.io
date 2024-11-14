---
title: Extensions
---

{% note info %}
Extension methods Located in the **HandyControl.Tools.Extension** namespace.
```cs
Using HandyControl.Tools.Extension;
```
{% endnote %}

# Cryptography

|Name|Remark|
|-|-|
|GenerateMD5||
|GenerateSHA256||
|EncryptStringAES||
|DecryptStringAES||
|EncryptStringBase64||
|DecryptStringBase64||
|EncryptStringRSA||
|DecryptStringRSA||

## GenerateMD5, GenerateSHA256
Generate (SHA256 or MD5) Hash
```CS
var hashMD5 = "Test string".GenerateMD5();

var hashSHA256 = "Test string".GenerateSHA256();
``` 

## EncryptStringAES, DecryptStringAES
```CS
var enc = "Test string".EncryptStringAES("password");

var dec = "encrypted text".DecryptStringAES("password");
``` 

## EncryptStringBase64, DecryptStringBase64
```CS
var enc = "Test string".EncryptStringBase64();

var dec = "encrypted text".DecryptStringBase64();
``` 

## EncryptStringRSA, DecryptStringRSA
```CS
var enc = "Test string".EncryptStringRSA(publicKey);

var dec = "encrypted text".DecryptStringRSA(privateKey);
``` 

# String

|Name|Remark|
|-|-|
|Format|inline format|
|Transform|LowerCase-UpperCase|
|Truncate||
|ConvertToPersianDigit||
|ConvertToPersianChar||
|ConvertToEnglishDigit||
|ChangeEncoding||
|GetBytes||
|IsKindOf||
|IsIranNationalCode||
|IsPersian||
|IsUrl||
|IsChinese||
|IsIp||
|IsEmail||
|ToFileInfo||
|ToDirectoryInfo||
|IsNullOrEmpty||
|ToColor||

## Format
Enable quick and more natural string.Format calls
``` CS
var s = "The co-ordinate is ({0}, {1})".Format(point.X, point.Y);
```

## Transform
There is a Transform method that supersedes LetterCasing and ApplyCase.

```cs
"Sentence casing".Transform(To.LowerCase) => "sentence casing"
"Sentence casing".Transform(To.SentenceCase) => "Sentence casing"
"Sentence casing".Transform(To.TitleCase) => "Sentence Casing"
"Sentence casing".Transform(To.UpperCase) => "SENTENCE CASING"
```

## Truncate

You can truncate a string using the Truncate method:
```cs
"Long text to truncate".Truncate(10) => "Long text…"
```

By default the '…' character is used to truncate strings. The advantage of using the '…' character instead of "..." is that the former only takes a single character and thus allows more text to be shown before truncation. If you want, you can also provide your own truncation string:
```cs
"Long text to truncate".Truncate(10, "---") => "Long te---"
```
The default truncation strategy, Truncator.FixedLength, is to truncate the input string to a specific length, including the truncation string length. There are two more truncator strategies available: one for a fixed number of (alpha-numerical) characters and one for a fixed number of words. To use a specific truncator when truncating, the two Truncate methods shown in the previous examples all have an overload that allow you to specify the ITruncator instance to use for the truncation. Here are examples on how to use the three provided truncators:
```cs
"Long text to truncate".Truncate(10, Truncator.FixedLength) => "Long text…"
"Long text to truncate".Truncate(10, "---", Truncator.FixedLength) => "Long te---"

"Long text to truncate".Truncate(6, Truncator.FixedNumberOfCharacters) => "Long t…"
"Long text to truncate".Truncate(6, "---", Truncator.FixedNumberOfCharacters) => "Lon---"

"Long text to truncate".Truncate(2, Truncator.FixedNumberOfWords) => "Long text…"
"Long text to truncate".Truncate(2, "---", Truncator.FixedNumberOfWords) => "Long text---"
```
Note that you can also use create your own truncator by implementing the ITruncator interface.

There is also an option to choose whether to truncate the string from the beginning (TruncateFrom.Left) or the end (TruncateFrom.Right). Default is the right as shown in the examples above. The examples below show how to truncate from the beginning of the string:

```cs
"Long text to truncate".Truncate(10, Truncator.FixedLength, TruncateFrom.Left) => "… truncate"
"Long text to truncate".Truncate(10, "---", Truncator.FixedLength, TruncateFrom.Left) => "---runcate"

"Long text to truncate".Truncate(10, Truncator.FixedNumberOfCharacters, TruncateFrom.Left) => "…o truncate"
"Long text to truncate".Truncate(16, "---", Truncator.FixedNumberOfCharacters, TruncateFrom.Left) => "---ext to truncate"

"Long text to truncate".Truncate(2, Truncator.FixedNumberOfWords, TruncateFrom.Left) => "…to truncate"
"Long text to truncate".Truncate(2, "---", Truncator.FixedNumberOfWords, TruncateFrom.Left) => "---to truncate"
```

## Digits and Char

```cs
"5".ConvertToPersianDigit(); // result: ۵
"y".ConvertToPersianChar(); // result: غ
"۵".ConvertToEnglishDigit(); // result 5
```

## ChangeEncoding
Change the Encoding of a string
```cs
string test = "Hello";
var text = test.ChangeEncoding(Encoding.ASCII, Encoding.UTF8);
```

## GetBytes
Get bytes from string
```cs
string test = "Hello";
var text = test.GetBytes();
```

## ToFileInfo
Get string file path as FileInfo
```cs
var fileInfo = @"D:\Documents\image.jpg".ToFileInfo();
```

## ToDirectoryInfo
Get string directory path as DirectoryInfo
```cs
var directoryInfo = @"D:\Documents".ToDirectoryInfo();
```

## IsNullOrEmpty
Check if string is null or empty
```cs
var isNUll = "hello".IsNullOrEmpty();
```

## ToColor
Creates a Color from a XAML color string.
```cs
var color = "#3260a8".ToColor();
```

# DateTime

|Name|Type|Remark|
|-|-|-|
|ToShamsiDate|DateTime|Convert GregorianDate to ShamsiDate|
|ToShortShamsiDate|DateTime|Convert GregorianDate to ShamsiDate (Short Format)|
|ToLongShamsiDate|DateTime|Convert GregorianDate to ShamsiDate (Long Format)|
|GetDiffrenceToNow|DateTime|Get Diffrence between DateTime and Current DateTime|
|ToGregorianDate|DateTime|Convert ShamsiDate to GregorianDate|
|ToGregorianDate|PersianDateTime|Convert PersianDateTime to GregorianDate|

``` CS
Console.WriteLine(DateTime.Now.ToShamsiDate());
//Result : 1398/11/03

Console.WriteLine(DateTime.Now.ToShortShamsiDate());
//Result : 98/11/03

Console.WriteLine(DateTime.Now.ToLongShamsiDate());
//Result : پنجشنبه 3 بهمن 1398

Console.WriteLine(DateTime.Now.GetDiffrenceToNow());

Console.WriteLine(DateTime.Now.ToGregorianDate());
// Result : 16/01/2021

Console.WriteLine(PersianDateTime.Now.ToGregorianDate());
// Result : 16/01/2021
```

# EnumerableExtension

|Name|Type|Remark|
|-|-|-|
|GetEnumeratorWithIndex|IEnumerable||
|ShapeView|IEnumerable||
|ForEach|IEnumerable||
|ReverseForEach|IEnumerable||
|Do|IEnumerable||
|DoWithIndex|IEnumerable||

## GetEnumeratorWithIndex
This Extension Help you to access item index in foreach loop

```cs
var s = "ABCDEFG";
foreach (var item in s.GetEnumeratorWithIndex())
{
    System.Console.WriteLine("Character: {0}, Position: {1}", item.Value, item.Index);
}
```

## Do
``` CS
data.Do(item =>
{
    
});
```

## DoWithIndex
This Extension Help you to access item index
``` CS
data.DoWithIndex((item, index) => {

});
```

## ShapeView
This Extension Help you to Easily implement search, sort, and group operations

```cs
IEnumerable<Person> datalist;

// Using query comprehension
var query =
    from p in datalist.ShapeView()
    where p.Age >= 18
    orderby p.LastName, p.FirstName
    group p by p.Country;

query.Apply();

// Using extension methods
datalist.ShapeView()
      .Where(p => p.Age >= 18)
      .OrderBy(p => p.LastName)
      .ThenBy(p => p.FirstName)
      .GroupBy(p => p.Gender)
      .Apply();

//clear
datalist.ShapeView().ClearAll().Apply();
```

## ForEach

```cs
actions.ForEach(action => action.DoSomething());
```

## ReverseForEach

```cs
actions.ReverseForEach(action => action.DoSomething());
```

# CollectionExtension

|Name|Type|Remark|
|-|-|-|
|AddRange|ICollection||
|AddOnUI|ICollection||
|Shape|ICollectionView||
|Clone|ObservableCollection||
|AddIfNotExists|ObservableCollection||
|UpdateValue|ObservableCollection||
|DeleteIfExists|ObservableCollection||
|AreValuesNull|ObservableCollection||

# AddRange

``` CS
DataList.AddRange(list);
```

## AddOnUI
This Extension Method Help you to Add Items into ObservableCollection from Another Thread
``` CS
DataList.AddOnUI(new PackagesModel { Name = name, IsInstalled = isInstalled, Version = version, Id = id });
```

## Shape
This Extension Help you to Easily implement search, sort, and group operations

same as **ShapeView**

## Clone
Clones the observable collection.
## AddIfNotExists
Adds a value if it doesn't exist yet.
## UpdateValue
Updates a value.
## DeleteIfExists
Deletes a value if it exists.
## AreValuesNull
Checks whether all values are null or not.

```cs
var observableCollection = new ObservableCollection<string>();

observableCollection.AddIfNotExists("a");

observableCollection.DeleteIfExists("a");

observableCollection.UpdateValue("b", "c");

Debug.WriteLine(observableCollection.AreValuesNull());

var observableCollection1 = new ObservableCollection<string>();
var observableCollection2 = observableCollection1.Clone();
```

# ListExtension

|Name|Type|Remark|
|-|-|-|
|Clone|List||
|AddIfNotExists|List||
|UpdateValue|List||
|DeleteIfExists|List||
|AreValuesNull|List||

## Clone
Clones the list.
## AddIfNotExists
Adds a value if it doesn't exist yet.
## UpdateValue
Updates a value.
## DeleteIfExists
Deletes a value if it exists.
## AreValuesNull
Checks whether all values are null or not.

```cs
var list = new List<string>();
list.AddIfNotExists("a");

list.DeleteIfExists("a");

list.UpdateValue("b", "c");

Debug.WriteLine(list.AreValuesNull());

var list1 = new List<string>();
var list2 = list1.Clone();
```

# DictionaryExtension

|Name|Type|Remark|
|-|-|-|
|Clone|Dictionary||
|AddIfNotExists|Dictionary||
|Update|Dictionary||
|DeleteIfExistsKey|Dictionary||
|DeleteIfExistsValue|Dictionary||
|AreValuesNull|Dictionary||
|AreKeysNull|Dictionary||

## Clone
Clones the dictionary.
## AddIfNotExists
Adds a value if it doesn't exist yet.
## Update
Updates a value.
## DeleteIfExistsKey
Deletes the key if it exists.
## DeleteIfExistsValue
Deletes a value if it exists.
## AreValuesNull
Checks whether all values are null or not.
## AreKeysNull
Checks whether all keys are null or not.

```cs
var dictionary = new Dictionary<string, string>();

dictionary.AddIfNotExists("a", "abc");

dictionary.Update("b", "defg");

var pair = dictionary.First(x => x.Key.Equals("b"));
dictionary.Update(pair);

dictionary.DeleteIfExistsKey("a");

dictionary.DeleteIfExistsValue("defg");

Debug.WriteLine(dictionary.AreKeysNull());
Debug.WriteLine(dictionary.AreValuesNull());

var dict1 = new Dictionary<string, string>();
var dict2 = dict1.Clone();
```

# MergedDictionary

|Name|Remark|
|-|-|
|AddIfNotNull||
|RemoveIfNotNull||
|InsertOrReplace||
|RemoveAll||
|InsertIfNotExists|||

```cs
ResourceDictioanry.RemoveAll();
```

# ColorExtension

|Name|Type|Remark|
|-|-|-|
|ToInt32|Color||
|ToInt32Reverse|Color||