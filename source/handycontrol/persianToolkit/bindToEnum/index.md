---
title: BindToEnum
---
with this extension you can bind Enum to itemsources

# Enum

```cs
public enum Status
{
    Horrible,
    Bad,
    SoSo,
    Good,
    Better,
    Best
}
```

```xml
<hc:ComboBox ItemsSource="{Binding Source={hc:EnumBindingSource {x:Type local:Status}}}" Margin="10" />
```

# Description

{% note info %}
you can create description for enum and bind itemsources to description, you only need to change enum class like this:
{% endnote %}

```cs
[TypeConverter(typeof(EnumDescriptionTypeConverter))]
public enum Status
{
    [Description("This is horrible")]
    Horrible,
    [Description("This is bad")]
    Bad,
    [Description("This is so so")]
    SoSo,
    [Description("This is good")]
    Good,
    [Description("This is better")]
    Better,
    [Description("This is best")]
    Best
}
```

{% note info %}
If you are using a built-in or third party enums and you can not add a Description attribute to it, you can use this solution:
{% endnote %}

- Create an string[] Array and create your description in order

```xml
<Window.Resources>
    <x:Array Type="sys:String" x:Key="myDescription">
        <sys:String>Left To Right Description</sys:String>
        <sys:String>Right To Left Description</sys:String>
    </x:Array>
</Window.Resources>
```

- Pass your Description Array to EnumBindingSource

```xml
<hc:ComboBox ItemsSource="{Binding Source={hc:EnumBindingSource {x:Type FlowDirection}, {StaticResource myDescription}}}" DisplayMemberPath="Value" Margin="10" />
```

{% note info %}
Do not forget that in this case you must use DisplayMemberPath.
If `DisplayMemberPath` is set to `Value`, it displays the `Description` value and if `DisplayMemberPath` is set to `Key`, it displays `Enum` itself.
{% endnote %}

# Localized Description

you can use this attribute for localize enum

```cs
[TypeConverter(typeof(EnumDescriptionTypeConverter))]
public enum Status
{
    [LocalizedDescription("Good", typeof(LangResources))]
    Good,
    [LocalizedDescription("Better", typeof(LangResources))]
    Better,
    [LocalizedDescription("Best", typeof(LangResources))]
    Best
}
```