---
title: BindablePropertyBase
---

```cs
public abstract class BindablePropertyBase : INotifyPropertyChanged
```

{% note info %}
BindablePropertyBase Located in the **HandyControl.Tools** namespace.
```cs
Using HandyControl.Tools;
```
{% endnote %}

To support OneWay or TwoWay binding to enable your binding target properties to automatically reflect the dynamic changes of the binding source (for example, to have the preview pane updated automatically when the user edits a form), your class needs to provide the proper property changed notifications. This class help you to implement INotifyPropertyChanged.

You must inherit this class first

```cs
public class MyViewModel : BindablePropertyBase
```

Then just call `RaisePropertyChanged()` in the property set method.

```cs
private string _name;
public string Name
{
    get => _name;
    set
    {
        if (_name != value)
        {
            _name = value;
            RaisePropertyChanged();
            // OR
            // RaisePropertyChanged(_name);
        }
    }
}
```

or If you need a simpler and faster method, you can use the `Set` method of this class

```cs
private string _name;
public string Name
{
    get => _name;
    set { Set(ref _name, value); }
}
```