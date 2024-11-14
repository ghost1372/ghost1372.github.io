---
title: ThreadSafeObservableCollection
---

If you have ever bound an ObservableCollection<T> to a WPF control, you know it's hard to add or remove items from multi-threads. Indeed, the UI expects the events to be raised on the UI thread. Also, you should not change the collection until the change event is processed by the UI. This means your algorithm is blocked until the UI process the events. This could slow down your processing as multiple threads may be waiting for the UI.

{% note info %}
- In WPF, you can use `BindingOperations.EnableCollectionSynchronization` to bind a collection and use it from multiple threads. However, this solution is not very convenient as you need to lock the collection when accessing it and errors are possible.

- This requires a little more of memory, but this is the trade-off to have an easy to use thread-safe observable collection.

- You can safely bind **collection.AsObservable** to a WPF control. This observable collection implements **INotifyCollectionChanged**, **INotifyPropertyChanged** and **IReadOnlyList<T>**, so it integrates well with WPF controls.
{% endnote %}

{% note warning %}
**ThreadSafeObservableCollection** is only Available in .NetCore >= 3.0, so you cant use it in Net Framework.
{% endnote %}

Example:

```xml
<ListBox Grid.Row="1" ItemsSource="{Binding Items.AsObservable}" />
```

```cs
public ThreadSafeObservableCollection<string> Items { get; } = new ThreadSafeObservableCollection<string>();

private void AddItems()
{
    Task.Run(() => Parallel.For(0, 1000, i =>
        {
            // No need to lock here as the collection is thread-safe
            Items.Add($"Item {i}");
        }));
}

```