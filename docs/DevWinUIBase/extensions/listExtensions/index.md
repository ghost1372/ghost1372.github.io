---
title: ListExtensions
---

|Available Extensions|
|-|
|Clone|
|AddIfNotExists|
|UpdateValue|
|DeleteIfExists|
|AreValuesNull|

# Example

```cs

var dupList = list.Clone();

//

list.AddIfNotExists(item);

//

list.UpdateValue(item, newItem);

//

list.DeleteIfExists(item);

//

bool areNull = list.AreValuesNull();

```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.