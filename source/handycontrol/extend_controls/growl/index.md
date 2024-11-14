---
title: Growl Information notification
---

This control can be used when you want to arrange notification information from top to bottom in the right area of the window.

# Control effect

![Growl](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Resources/Growl.gif)

# Ready to work

Add a `StackPanel` container to the right side of the specified window
``` xml
<ScrollViewer VerticalScrollBarVisibility="Hidden" HorizontalAlignment="Right">
    <StackPanel VerticalAlignment="Top" Margin="0,10,10,10"/>
</ScrollViewer>
```
In order to facilitate scrolling, a `ScrollViewer` is usually wrapped in the outer layer. At the same time, for the sake of beauty, we set `VerticalScrollBarVisibility="Hidden"` of `ScrollViewer`. It is best to add a suitable `Margin` to `StackPanel`, which is also for aesthetics.

# Basic usage

Step 1: Set `StackPanel` to the container of `Growl`

``` xml
<ScrollViewer VerticalScrollBarVisibility="Hidden" HorizontalAlignment="Right">
    <StackPanel hc:Growl.GrowlParent="True" VerticalAlignment="Top" Margin="0,10,10,10"/>
</ScrollViewer>
```
{% note warning %}
Note the code `hc:Growl.GrowlParent="True"`。
{% endnote %}

{% note warning %}
If user do not set `hc:Growl.GrowlParent="True"`, growl will create a default panel.
{% endnote %}

Step 2: Call the relevant interface of `Growl` to display the specified message.

{% note info no-icon %}
Use case: `Growl.Success("File saved successfully!");`
{% endnote %}

# Display information notification only in the active window

Rewrite `OnActivated` and `OnDeactivated` methods for windows that need to display information notifications, call `Growl.SetGrowlParent(GrowlPanel, true);` in `OnActivated`, call `Growl.SetGrowlParent(GrowlPanel, false) in `OnDeactivated`

{% note warning %}
Where `GrowlPanel` is the information notification container, the type recommendation is `StackPanel`
{% endnote %}

{% note warning %}
Need to explain here, a window corresponds to a `StackPanel` container, Growl internally maintains a variable to store this container, each time the notification is triggered, the instance of Growl will be inserted into the container, that is, each call `Growl.SetGrowlParent(GrowlPanel, true);`, `GrowlPanel` will become the internal variable.
{% endnote %}

{% note warning %}
In this case, you don't need to set `hc:Growl.GrowlParent="True"` in xaml.
{% endnote %}

# Display information notifications in any `StackPanel` container

Step 1: Give the message to the `StackPanel` container: SuccessMsg
``` xml
<ScrollViewer VerticalScrollBarVisibility="Hidden" HorizontalAlignment="Right">
    <StackPanel hc:Growl.Token="SuccessMsg" VerticalAlignment="Top" Margin="0,10,10,10"/>
</ScrollViewer>
```
{% note warning %}
Note the code`hc:Growl.Token="SuccessMsg"`。
{% endnote %}

Step 2: Use the message tag: SuccessMsg and call the relevant interface of `Growl` to display the specified message.

{% note info no-icon %}
Example：`Growl.Success("File saved successfully!", "SuccessMsg");`
{% endnote %}

{% note warning %}
Now the "File saved successfully!" message will only be sent to the `StackPanel` container with the "SuccessMsg" message tag.
{% endnote %}

# Global Usage
you can use growl in desktop Not just the app itself
In this case you don't need anything just use `Growl.XXXGlobal` to display the message

``` CS
Growl.InfoGlobal("GrowlInfo");
//OR
Growl.SuccessGlobal("GrowlSuccess");
// OR
Growl.WarningGlobal(new GrowlInfo
            {
                Message = "GrowlWarning",
                CancelStr = "Ignore",
                ActionBeforeClose = isConfirmed =>
                {
                    Growl.InfoGlobal(isConfirmed.ToString());
                    return true;
                }
            });
// OR
Growl.ErrorGlobal("GrowlError");
// OR
Growl.AskGlobal("GrowlAsk", isConfirmed =>
            {
                Growl.InfoGlobal(isConfirmed.ToString());
                return true;
            });
// OR
Growl.FatalGlobal(new GrowlInfo
            {
                Message = "GrowlFatal",
                ShowDateTime = false
            });
// And for Clearing growls
Growl.ClearGlobal();
```

# Attributes

|Property|Description|
|-|-|
| GrowlPanel | Currently used message container |

# Additional attribute

|Name|Description|
|-|-|
| Token | Used to set message tags |
| GrowlParent | for setting up message containers |

# Method

|Name|Description|
|-|-|
| Success(string) | Show a success notification |
| Success(string, string) | Display a success notification with the specified message tag |
| Success(GrowlInfo) | Use a full message initialization model to display a success notification |
| SuccessGlobal(string) | Display a global success notification |
| SuccessGlobal(GrowlInfo) | Display a Global Success notification with the full message initialization model |
| Info(string) | Show a message notification |
| Info(string, string) | Display a message notification with the specified message tag |
| Info(GrowlInfo) | Display a message notification with the full message initialization model |
| InfoGlobal(string) | Display a global Info notification |
| InfoGlobal(GrowlInfo) | Display a Global Info notification with the full message initialization model |
| Warning(string) | Show a warning notification |
| Warning(string, string) | Display a warning notification with the specified message tag |
| Warning(GrowlInfo) | Display a warning notification with the full message initialization model |
| WarningGlobal(string) | Display a global warning notification |
| WarningGlobal(GrowlInfo) | Display a Global Warning notification with the full message initialization model |
| Error(string) | Show an error notification |
| Error(string, string) | Display an error notification with the specified message tag |
| Error(GrowlInfo) | Displaying an error notification with a full message initialization model |
| ErrorGlobal(string) | Display a global Error notification |
| ErrorGlobal(GrowlInfo) | Display a Error Fatal notification with the full message initialization model |
| Fatal(string) | Show a critical notification |
| Fatal(string, string) | Display a serious notification with the specified message tag |
| Fatal(GrowlInfo) | Display a serious notification with the full message initialization model |
| FatalGlobal(string) | Display a global Fatal notification |
| FatalGlobal(GrowlInfo) | Display a Global Fatal notification with the full message initialization model |
| Ask(string, Func<bool, bool>) | Show a notification |
| Ask(string, Func<bool, bool>, string) | Display a notification with the specified message tag |
| Ask(GrowlInfo) | Use a full message initialization model to display a notification |
| AskGlobal(string, Func<bool, bool>) | Show a global notification |
| AskGlobal(GrowlInfo) | Display a Global Ask notification with the full message initialization model |
| Register(string, Panel) | Register message tags for the specified container |
| Unregister(string, Panel) | Unregister the message tag for the specified container |
| Unregister(Panel) | Unregister if the container is registered with a message tag |
| Unregister(string) | Unregister if the message is marked with a corresponding container |
| Clear( ) | Clear messages in the currently used message container |
| Clear(string) | Clear the message in the message container with the specified message tag |
| Clear(Panel) | Empty messages in the specified container |
| ClearGlobal( ) | Empty messages in the global container |

# Note

`Error` and `Fatal` modes are not turned off automatically.

# FAQ

{% note info no-icon %}
Ask is special, what?
{% endnote %}

The main focus of the Ask method is the second parameter, its type is `Func<bool, bool>`, let's look at the sample code:
``` csharp
Growl.Ask("do you want to update?", isConfirmed =>
{
    Growl.Info(isConfirmed.ToString());
    return true;
});
```
By using the Ask method, the "confirm" and "cancel" buttons are displayed by default. When you click "confirm", the value of `isConfirmed` in the above code is `true`, and clicking "cancel" is `false", which can be based on `isConfirmed The value of ` takes the corresponding action. Finally, if you return `true`, the Growl notification will be closed, and if `false` is returned, it will not be closed.