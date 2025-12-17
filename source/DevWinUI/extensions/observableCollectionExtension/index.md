---
title: ObservableCollectionExtensions
---

|Available Extensions|
|-|
|AddRange|
|Clone|
|AddIfNotExists|
|UpdateValue|
|DeleteIfExists|
|AreValuesNull|

# Example

```cs

collection.AddRange(items);

//

var dupcollection = collection.Clone();

//

collection.AddIfNotExists(item);

//

collection.UpdateValue(item, newItem);

//

collection.DeleteIfExists(item);

//

bool areNull = collection.AreValuesNull();

```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.