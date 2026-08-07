---
title: PersianDateTimeExtension
---

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
Debug.WriteLine(DateTime.Now.ToShamsiDate());
//Result : 1398/11/03

Debug.WriteLine(DateTime.Now.ToShortShamsiDate());
//Result : 98/11/03

Debug.WriteLine(DateTime.Now.ToLongShamsiDate());
//Result : پنجشنبه 3 بهمن 1398

Debug.WriteLine(DateTime.Now.GetDiffrenceToNow());

Debug.WriteLine(DateTime.Now.ToGregorianDate());
// Result : 16/01/2021

Debug.WriteLine(PersianDateTime.Now.ToGregorianDate());
// Result : 16/01/2021
```
