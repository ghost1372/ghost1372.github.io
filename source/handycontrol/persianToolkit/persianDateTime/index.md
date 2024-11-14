---
title: PersianDateTime
---
with this class you can convert current date to Persian Date there is also some extension method for `DateTime.Now`

{% note info %}
PersianDateTime Located in the **HandyControl.Tools** namespace.
```cs
Using HandyControl.Tools;
```
{% endnote %}

example:

``` CS
var date = PersianDateTime.Now
Console.WriteLine(date.DateTime);

// OR
PersianDateTime persian = new PersianDateTime(DateTime.Now);

Console.WriteLine(persian.DateTime);
//Result : 1399/10/27

// OR
PersianDateTime persian = new PersianDateTime();

Console.WriteLine(persian.GetShamsiYear(DateTime.Now));
//Result : 1399

Console.WriteLine(persian.GetShamsiMonthName(DateTime.Now));
//Result : دی

Console.WriteLine(persian.GetShamsiDayString(DateTime.Now));
//Result : 03

Console.WriteLine(persian.GetShamsiDayName(DateTime.Now));
//Result : چهارشنبه

Console.WriteLine(persian.GetShamsiDayShortName(DateTime.Now));
//Result : چ

//انواع روشهای تعریف تاریخ شمسی	
var dt1 = new PersianDateTime(1399, 10, 13);
var dt2 = new PersianDateTime("1399/10/13");	
var dt3 = new PersianDateTime("1399/12/29 23:30");
var dt4 = new PersianDateTime("1399/12/29 23:30:00");

//تعریف بر اساس تاریخ میلادی	
DateTime dateTime = DateTime.Now;
var persianDateTime = new PersianDateTime(dateTime);

//فاصله دو تاریخ	
var dt1 = new PersianDateTime("1399/12/29");
var dt2 = new PersianDateTime("1399/11/29");
Convert.ToInt32(Extensions.DateDifference(dt1,dt2));
//result: 30
```

|توضیحات|متد|خروجی|
|-|-|-|
||PersianDateTime.Now.ToLongStringYMDHMS|شنبه بیست آذر سال یکهزار سیصد و نود وهفت ساعت هفت و سی دقیقه و بیست ثانیه|
||PersianDateTime.Now.ToLongStringYMDHMS|شنبه بیست آذر سال یکهزار سیصد و نود وهفت ساعت هفت و سی دقیقه|
|تبدیل تاریخ شمسی به میلادی|PersianDateTime.Now.ToGregorianDate|16/01/2021|
|تولید تاریخ|PersianDateTime.Now.ToLongStringYMD|شنبه بیست آذر سال یکهزار سیصد و نود وهفت|
|تولید ساعت|PersianDateTime.Now.ToLongStringHMS|ساعت پانزده و سی دقیقه و ده ثانیه|
|تولید ساعت|PersianDateTime.Now.ToLongStringHM|ساعت پانزده و سی دقیقه|
|تبدیل اعداد به حروف|PersianUtil.Convert(11200000)|یازده میلیون و دویست هزار |

# Extensions

[Go Here](https://ghost1372.github.io/handycontrol/persianToolkit/extensions/#DateTime)
