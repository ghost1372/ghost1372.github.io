---
title: INIHelper
---

InIHelper class is for working with ini file in a simple way.

First Create a new IniHelper:

```cs
// You can use RelativePath or AbsolutePath
string filePath = "myiniFile.ini";
InIHelper iniHelper = new InIHelper(filePath);
```

## AddValue
``` CS
bool result = iniHelper.AddValue("key1", "test1");
bool result = iniHelper.AddValue("key2", "test2", "mySection");

```

## ReadValue
``` CS
Debug.WriteLine(iniHelper.ReadValue("key1"));
// OR
Debug.WriteLine(iniHelper.ReadValue("key2", "mySection"));
```

## DeleteKey/DeleteSection

{% note info %}
you can delete a **key** or **section**
{% endnote %}
``` CS
iniHelper.DeleteKey("key2", "mySection");
iniHelper.DeleteSection("mySection");
```

## IsKeyExists

{% note info %}
you can check if a key exist or not
{% endnote %}

``` CS
bool result = iniHelper.IsKeyExists("key1");
bool result = iniHelper.IsKeyExists("key2", "mySection");
```
