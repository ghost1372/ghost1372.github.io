---
title: INIHelper
---

InIHelper class is for working with ini file in a simple way.

## AddValue
``` CS
bool result = InIHelper.AddValue("key1", "test1");
bool result = InIHelper.AddValue("key2", "test2", "mySection");

```

## ReadValue
``` CS
Debug.WriteLine(InIHelper.ReadValue("key1"));
// OR
Debug.WriteLine(InIHelper.ReadValue("key2", "mySection"));
```

## DeleteKey/DeleteSection

{% note info %}
you can delete a **key** or **section**
{% endnote %}
``` CS
InIHelper.DeleteKey("key2", "mySection");
InIHelper.DeleteSection("mySection");
```

## IsKeyExists

{% note info %}
you can check if a key exist or not
{% endnote %}

``` CS
bool result = InIHelper.IsKeyExists("key1");
bool result = InIHelper.IsKeyExists("key2", "mySection");
```
