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

## DelegateCommand With Parameter and CanExecute

```cs
public ICommand CloseCommand { get; }
public TestViewModel()
{
    CloseCommand = DelegateCommand.Create(Close, CanExecuteClose);
}

private bool CanExecuteClose(object? parameter)
{
    return true;
}
private void Close(object? parameter)
{
    Application.Current.Exit();
}
```

{% note info %}
you can use IDelegateCommand Instead of ICommand
{% endnote %}


# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.