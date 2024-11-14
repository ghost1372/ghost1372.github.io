---
title: Command
---

You can use commands to use in the MVVM pattern, Different types of commands are available.

|Name|
|-|
|SimpleRelayCommand|
|DelegateCommand|
|RelayCommand|
|AsyncCommand|

{% note info %}
All Commands Located in the **HandyControl.Tools.Command** namespace.
```cs
Using HandyControl.Tools;
```
{% endnote %}

# SimpleRelayCommand
Implementation of ICommand where the CanExecute callback alway return true.

```cs
private ICommand _ClickCommand;
public ICommand ClickCommand
{
    get
    {
        return _ClickCommand;
    }
    set
    {
        _ClickCommand = value;
    }
}

ClickCommand = new SimpleRelayCommand(new Action(OnClick));

private void OnClick()
{
    MessageBox.Show("Hello");
}

```

# DelegateCommand
Implementation of ICommand where the Execute and CanExecute callbacks are handled by delegates.

{% note warning %}
**DelegateCommand** is not Available in **.Net 4.0**, **.Net 4.5**, **.Net 4.5.1** and **.Net 4.5.2** 
{% endnote %}

```cs
public ICommand AddItems { get; }

public TestViewModel()
{
    AddItems = DelegateCommand.Create(OnAddItems);
}

private void AddItemsImpl()
{
    MessageBox.Show("Hello");
}
```

{% note info %}
also you can use **IDelegateCommand** Instead of **ICommand**
{% endnote %}

# RelayCommand

Implementation of ICommand with CommandParameter.

```cs
private ICommand _ClickCommand;
public ICommand ClickCommand
{
    get
    {
        return _ClickCommand;
    }
    set
    {
        _ClickCommand = value;
    }
}

ClickCommand = new RelayCommand(new Action<object>(OnClick), new Func<object, bool>(CanExecute));

private bool CanExecute(object arg)
{
    throw new NotImplementedException();
}

private void OnClick(object obj)
{
    throw new NotImplementedException();
}

```

# AsyncCommand

Implement asynchronous command binding, including pause and cancel. Also contains NotifyTaskCompletion.

{% note warning %}
**AsyncCommand** is not Available in **.Net 4.0**
{% endnote %}

AsyncCommand contains 12 overloads 

```cs
AsyncCommand<object> Create(Func<Task> command, Func<bool> canExecute = null)
AsyncCommand<TResult> Create<TResult>(Func<Task<TResult>> command, Func<bool> canExecute = null)
AsyncCommand<object> Create(Func<CancellationToken, Task> command, Func<bool> canExecute = null, bool isCancelUpTask = false)
AsyncCommand<TResult> Create<TResult>(Func<CancellationToken, Task<TResult>> command, Func<bool> canExecute = null, bool isCancelUpTask = false)
AsyncCommand<object> Create(Func<CancellationToken, ManualResetEvent, Task> command, Func<bool> canExecute = null, bool isCancelUpTask = false)
AsyncCommand<TResult> Create<TResult>(Func<CancellationToken, ManualResetEvent, Task<TResult>> command, Func<bool> canExecute = null, bool isCancelUpTask = false)
AsyncCommand<T, object> Create<T>(Func<T, Task> command, Func<bool> canExecute = null)
AsyncCommand<T, TResult> Create<T, TResult>(Func<T, Task<TResult>> command, Func<bool> canExecute = null)
AsyncCommand<T, object> Create<T>(Func<T, CancellationToken, Task> command, Func<bool> canExecute = null, bool isCancelUpTask = false)
AsyncCommand<T, TResult> Create<T, TResult>(Func<T, CancellationToken, Task<TResult>> command, Func<bool> canExecute = null, bool isCancelUpTask = false)
AsyncCommand<T, object> Create<T>(Func<T, CancellationToken, ManualResetEvent, Task> command, Func<bool> canExecute = null, bool isCancelUpTask = false)
AsyncCommand<T, TResult> Create<T, TResult>(Func<T, CancellationToken, ManualResetEvent, Task<TResult>> command, Func<bool> canExecute = null, bool isCancelUpTask = false)
```

## Without parameters

```cs
private IAsyncCommand test1;
public IAsyncCommand Test1 => test1 ??= AsyncCommand.Create(async () => {
  await Task.CompletedTask;
});

private IAsyncCommand test2;
public IAsyncCommand Test2 => test2 ??= AsyncCommand.Create(async token => {
  await Task.CompletedTask;
});

private IAsyncCommand test3;
public IAsyncCommand Test3 => test3 ??= AsyncCommand.Create(async (token, manual) => {
  await Task.CompletedTask;
});
```

# With CommandParameter parameter

```cs
private IAsyncCommand test1;
public IAsyncCommand Test1 => test1 ??= AsyncCommand.Create<Data>(async data => {
  await Task.CompletedTask;
});

private IAsyncCommand test2;
public IAsyncCommand Test2 => test2 ??= AsyncCommand.Create<Data>(async (data, token) => {
  await Task.CompletedTask;
});

private IAsyncCommand test3;
public IAsyncCommand Test3 => test3 ??= AsyncCommand.Create<Data>(async (data, token, manual) => {
  manual.WaitOne();
  if (token.IsCancellationRequested) return;
  await Task.CompletedTask;
});
```

## without async

```cs
private IAsyncCommand test1;
public IAsyncCommand Test1 => test1 ??= AsyncCommand.Create(() => {
  return Task.CompletedTask;
});
```

## Cancel the last command before executing

```cs
private IAsyncCommand test4;
public IAsyncCommand Test4 => test4 ??= AsyncCommand.Create(async token => {
  if (token.IsCancellationRequested) return;
  await Task.CompletedTask;
}, true);
```

## Xaml

```xml
<TextBlock Text="{Binding Test1.Execution.Result}"/>
<TextBlock Text="{Binding Test1.Execution.IsCompleted}"/>
<TextBlock Text="{Binding Test1.Execution.IsNotCompleted}"/>
<TextBlock Text="{Binding Test1.Execution.IsSuccessfullyCompleted}"/>
<TextBlock Text="{Binding Test1.Execution.IsCanceled}"/>
<TextBlock Text="{Binding Test1.Execution.IsFaulted}"/>
<TextBlock Text="{Binding Test1.Execution.ErrorMessage}"/>
<Button Command = "{Binding Test1}" CommandParameter="111222">test</Button>
<Button Command = "{Binding Test1.CancelCommand}" > cancel </ Button >
<Button Command="{Binding Test1.ManualResetAsyncCommand}">timeout</Button>
<TextBlock Text = "{Binding Test1.IsSuspend}" />
```