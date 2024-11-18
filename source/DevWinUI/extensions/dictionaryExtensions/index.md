---
title: DictionaryExtensions
---

|Available Extensions|
|-|
|Clone|
|AddIfNotExists|
|Update|
|DeleteIfExistsKey|
|DeleteIfExistsValue|
|AreValuesNull|
|AreKeysNull|

# Example

```cs

var dupdictionary = dictionary.Clone();

//

dictionary.AddIfNotExists(key, value);

//

dictionary.Update(key, value);

//

dictionary.DeleteIfExistsKey(key);

//

bool areNull = dictionary.AreValuesNull();

```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.