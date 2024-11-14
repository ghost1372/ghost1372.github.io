---
title: Updatable Markup Extension
---

this markup help you to update the target of a markup extension after the initial evaluation.

{% note info %}
`UpdatableMarkupExtension` Located in the **HandyControl.Tools** namespace.
```cs
Using HandyControl.Tools;
```
{% endnote %}

# Example
Let’s assume we want to create a custom markup extension which indicates whether the network is available. It would be used like that :

```xml
<CheckBox IsChecked="{local:NetworkAvailable}" Content="Network is available" />
```
Obviously, we want the checkbox to be updated when the availability of the network changes (e.g. when the network cable is plugged or unplugged, or when the Wifi network is out of reach). So we need to handle the `NetworkChange.NetworkAvailabilityChanged` event, and update the `IsChecked` property accordingly. So the extension will inherit the `UpdatableMarkupExtension` class to take advantage of the `UpdateValue` method :

```cs
public class NetworkAvailableExtension : UpdatableMarkupExtension
{
    public NetworkAvailableExtension()
    {
        NetworkChange.NetworkAvailabilityChanged += new NetworkAvailabilityChangedEventHandler(NetworkChange_NetworkAvailabilityChanged);
    }

    protected override object ProvideValueInternal(IServiceProvider serviceProvider)
    {
        return NetworkInterface.GetIsNetworkAvailable();
    }

    private void NetworkChange_NetworkAvailabilityChanged(object sender, NetworkAvailabilityEventArgs e)
    {
        UpdateValue(e.IsAvailable);
    }
}

```

{% note info %}
We subscribe to the `NetworkAvailabilityChanged` event in the class constructor. If we wanted to subscribe to an event of the target object, we would have to do it in the ProvideValueInternal method, so that the target object can be accessed.
{% endnote %}

