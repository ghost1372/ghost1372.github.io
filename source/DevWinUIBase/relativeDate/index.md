---
title: RelativeDate 
---

get a relative date similar to "5 minutes ago". It supports both local and UTC dates as well as dates with offset (DateTimeOffset). It supports English and Persian.

```cs
DateTime dateTime = new DateTime(2021, 09, 14, 0,0,0, DateTimeKind.Local);
var relativeDate = RelativeDate.Get(dateTime).ToString();
var relativeDate2 = RelativeDate.Get(dateTime).ToString("fa-IR");

Debug.WriteLine(relativeDate);
Debug.WriteLine(relativeDate2);
```

{% note info %}
we only support English and Persian localization.
{% endnote %}

![RelativeDate](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/RelativeDate.png)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.