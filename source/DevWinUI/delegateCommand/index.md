---
title: DelegateCommand
---

# DelegateCommand
Implementation of ICommand where the Execute and CanExecute callbacks are handled by delegates.

```cs
public ICommand AddItems { get; }

public TestViewModel()
{
    AddItems = DelegateCommand.Create(OnAddItems);
}

private void AddItemsImpl()
{
    Debug.WriteLine("Hello");
}
```

{% note info %}
you can use IDelegateCommand Instead of ICommand
{% endnote %}


# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.