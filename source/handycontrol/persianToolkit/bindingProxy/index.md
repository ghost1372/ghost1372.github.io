---
title: BindingProxy
---

```cs
public class BindingProxy : Freezable
```

{% note info %}
BindingProxy Located in the **HandyControl.Tools** namespace.
```cs
Using HandyControl.Tools;
```
{% endnote %}

The primary purpose of this class is to define objects that have a modifiable and a read-only state, but the interesting feature in our case is that Freezable objects can inherit the DataContext even when they’re not in the visual or logical tree.


Let’s illustrate with a simple example: we want to display a list of products in a DataGrid. In the grid, we want to be able to show or hide the Price column, based on the value of a ShowPrice property exposed by the ViewModel. The obvious approach is to bind the Visibility of the column to the ShowPrice property:

```xml
<DataGridTextColumn Header="Price" Binding="{Binding Price}" IsReadOnly="False" Visibility="{Binding ShowPrice, Converter={StaticResource visibilityConverter}}"/>
```

Unfortunately, changing the value of ShowPrice has no effect, and the column is always visible, If we look at the Output window in Visual Studio, we notice the following line:

```
System.Windows.Data Error: 2 : Cannot find governing FrameworkElement or FrameworkContentElement for target element. BindingExpression:Path=ShowPrice; DataItem=null; target element is ‘DataGridTextColumn’ (HashCode=32685253); target property is ‘Visibility’ (type ‘Visibility’)
```

The solution to our problem is actually quite simple, and takes advantage of the Freezable class.

# Example
We can declare an instance of this class in the resources of the DataGrid, and bind the `Value` property to the current DataContext:

```xml
<DataGrid.Resources>
    <hc:BindingProxy x:Key="proxy" Value="{Binding}" />
</DataGrid.Resources>
```

The last step is to specify this BindingProxy object (easily accessible with StaticResource) as the Source for the binding:

```xml
<DataGridTextColumn Header="Price" Binding="{Binding Price}" IsReadOnly="False" Visibility="{Binding Value.ShowPrice, Converter={StaticResource visibilityConverter}, Source={StaticResource proxy}}"/>
```

{% note info %}
Binding path has been prefixed with `Value`, since the path is now relative to the BindingProxy object.
{% endnote %}

The binding now works correctly, and the column is properly shown or hidden based on the ShowPrice property.