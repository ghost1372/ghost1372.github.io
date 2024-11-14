---
title: OptimizedObservableCollection
---

A super awesome ObservableCollection that adds important methods such as: AddRange, RemoveRange, Replace, and ReplaceRange with single CollectionChanged notification.


Example:

```cs
public OptimizedObservableCollection<int> Items = new OptimizedObservableCollection<int>();

private void AddItems()
{
    var array = new int[3];
    array[0] = 7;
    array[1] = 6;
    array[2] = 7;

    Items.AddRange(array);
}

```