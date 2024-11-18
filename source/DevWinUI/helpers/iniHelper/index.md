---
title: INIHelper
---

InIHelper class is for working with ini file in simple way.

## Add Value 
{% note info %}
    you can use default **section** and **path**
{% endnote %}

``` CS
InIHelper.AddValue("key1", "test1");
InIHelper.AddValue("key2", "test2");
InIHelper.AddValue("key3", "test3", "mySection");
InIHelper.AddValue("file4", "test4", "mySection");
InIHelper.AddValue("file5", "test5", "mySection");
InIHelper.AddValue("file6", "test6", "mySection2", @"D:\config.ini");
```

## Read Value
``` CS
Debug.WriteLine(InIHelper.ReadValue("key1"));
// OR
Debug.WriteLine(InIHelper.ReadValue("key3", "mySection"));
// OR
Debug.WriteLine(InIHelper.ReadValue("key3", "mySection", @"D:\config.ini"));
```

## Delete Key 

{% note info %}
you can delete a **key** or **section**
{% endnote %}
``` CS
InIHelper.DeleteKey("key4", "mySection");
InIHelper.DeleteSection("mySection");
InIHelper.DeleteKey("key4", "mySection", @"D:\config.ini");
```

## Exist Key 

{% note info %}
you can check if a key exist or not
{% endnote %}
``` CS
Debug.WriteLine(InIHelper.IsKeyExists("key4", "mySection"));
```
