---
title: DelegateCommand
---

# DelegateCommand
Implementation of ICommand where the Execute and CanExecute callbacks are handled by delegates.

```cs
public IDelegateCommand AddItems { get; }

public TestViewModel()
{
    AddItems = DelegateCommand.Create(OnAddItems);
}

private void AddItemsImpl()
{
    Debug.WriteLine("Hello");
}
```

# DelegateCommand With Parameter and CanExecute

```cs
private IDelegateCommand CommandWithCanExecute { get; }
CommandWithCanExecute = DelegateCommand.Create(OnSimpleCommand, CanExecuteCommandWithCanExecute);

private bool CanExecuteCommandWithCanExecute()
{
    return true;
}

private void OnSimpleCommand()
{
    
}

```

# Command with Paramter

```cs
private IDelegateCommand CommandWithParameter { get; }
CommandWithParameter = DelegateCommand.Create(OnCommandWithParameter, CanExecuteCommandWithParameter);

private bool CanExecuteCommandWithParameter(object? parameter)
{
    return true;
}

private void OnCommandWithParameter(object? parameter)
{
    
}

```

{% note info %}
you can use IDelegateCommand Instead of ICommand
{% endnote %}


# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.