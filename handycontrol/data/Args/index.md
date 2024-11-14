---
title: Args
---

|name|Remarks|
|-|-|
|CancelRoutedEventArgs||
|FunctionEventArgs!1||
|KeyboardHookEventArgs||
|MouseHookEventArgs||

You can use `FunctionEventArgs!1` to create a custom event args

step 1: create a EventHandler

```cs
public event EventHandler<FunctionEventArgs<myArgument>> myEventChanged;

public class myArgument
{
    public string OldValue { get; internal set; }
    public string NewValue { get; internal set; }
}
```
step2: Notify change where necessary

```cs
myEventChanged?.Invoke(this, new FunctionEventArgs<myArgument>(OldValue = "Old", NewValue = "New"));
```

