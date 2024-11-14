---
title: Dynamic Language
---

You can use this class to bring dynamic multilingual features to your applications

{% note info %}
Dynamic Language Located in the **HandyControl.Tools** namespace.
```cs
Using HandyControl.Tools;
```
{% endnote %}

# Features

- Design Time Preview
- Binding Support
- Dynamic language change in runtime
- Supports multiple resource files

# Create resource files

First you need to create a folder, here our folder called `Assets` We are going to create language files in this folder.
add resource files into this folder you can Right-click on folder and from the Add New Item option Select `Resources file` Be careful when naming it.

{% note info %}
- The default language can be without a language code

- No matter how many languages you have, you need to create a resource file for that language.

- You must include a 2-digit or 5-digit language code in resource file name.

{% endnote %}

We want our program to have 2 languages, `English` and `Persian` So I create 2 resource files Pay attention to the naming method.
- `Strings.resx`
- `Strings.en.resx` or `Strings.en-US.resx`

{% note info %}
You can change `Strings` to anything else
{% endnote %}

# Set up the provider
We need to know where your resource files are, so you need to set up your provider

```xml
<Window x:Class="WpfAppTest.MainWindow"
        xmlns:hc="https://handyorg.github.io/handycontrol"        
        hc:LocalizationManager.Provider="WpfAppTest;Assets.Strings">
```

{% note info %}
- Note that you must first write the name of your project (In this case it is `WpfAppTest`).
- Then you have to separate the project name from the file location with an `;`.
- Finally, you must write the folder name and file name after `;` (In this case, our Resource name is `Strings`, which is located in the `Assets` folder). 
- we seperate folder and file with dot `.`.
{% endnote %}

{% note warning %}
if any UIElement that has a provider, we will use that provider.

```xml
<TextBlock hc:LocalizationManager.Provider="WpfAppTest;Assets.Strings" Text="{hc:Localiation TextKey}"/>
```

If there is no provider, we find the parents of that control and check each provider in order, If a provider is found, we use it for localization.
 
```xml
<Grid hc:LocalizationManager.Provider="WpfAppTest;Assets.AnotherStrings">
  <StackPanel hc:LocalizationManager.Provider="WpfAppTest;Assets.Strings">
    <TextBlock Text="{hc:Localiation TextKey}"/>
  </StackPanel>
</Grid>
```
Note that as soon as the provider is found, we will not check on the other parents, In the example above, first Provider will be used and second (Grid) will no longer be checked.

If provider is still not found, We use the control host provider (UserControl/Window...).
 ```xml
<UserControl hc:LocalizationManager.Provider="WpfAppTest;Assets.AnotherStrings">
  <StackPanel>
    <TextBlock Text="{hc:Localiation TextKey}"/>
  </StackPanel>
</Grid>
```

If no provider is found again, we use the `Application.Current.MainWindow` Provider.
{% endnote %}

# Design-Time Preview
After specifying the provider and specifying the keys, you can see the preview of the keys in DesignTime.

if you need to change culture in DesignTime you can use `DesignCulture` AttachedProperty:

```xml
<Window x:Class="WpfAppTest.MainWindow"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        hc:LocalizationManager.DesignCulture="fa">
```
This gives you the possibility to check the correct localization directly in the WPF designer.

{% note info %}
- If you do not see the preview, try to Refresh VS Designer or Rebuild the project.
- Design mode is not available in Binding mode.
{% endnote %}

# Xaml Localization
There are several ways to do this

## Key Localization

``` xml
 <Button Content="{hc:Localization TextKey}"/>
<!-- OR -->
  <Button Content="{hc:Localization Key=TextKey}"/>
```

{% note warning %}
`TextKey` is the key you created in the resource (resx) file
{% endnote %}

## Binding Localization

``` xml
<TextBlock Text="{hc:Localization KeyBinding={Binding SomeProperty}}"/> 
```

### Argument Binding Localization

First Create two Key in Resx file.

Name: `SomeKey`
Value: `Hello {0}, {1}`

Name: `SomeKey2`
Value: `HandyControl`

Then create a string Property

```cs
private string _SomeProperty = "Bye!";
public string SomeProperty
{
    get { return _SomeProperty; }
    set { _SomeProperty = value;}
}
```
Now

``` xml
 <TextBlock> 
    <TextBlock.Text> 
        <hc:Localization Key="SomeKey"> 
            <Binding Source="{hc:Localization SomeKey2}"/> 
            <Binding Path="SomeProperty" /> 
        </hc:Localization> 
    </TextBlock.Text> 
</TextBlock> 
```

![Animation2](https://user-images.githubusercontent.com/9213496/119326232-ec451a00-bc96-11eb-82d6-dbca2cb5c69b.png)

OR

Create a Key in Resx file.

Name: `SomeKey`
Value: `Hello {0}`

Then create a string Property

```cs
private string _SomeProperty = "HandyControl";
public string SomeProperty
{
    get { return _SomeProperty; }
    set { _SomeProperty = value;}
}
```
Now

``` xml
<TextBlock> 
    <TextBlock.Text> 
         <hc:Localization Key="SomeKey">
            <Binding Path="SomeProperty" />
         </hc:Localization>
    </TextBlock.Text> 
</TextBlock>
```

![Argument3](https://user-images.githubusercontent.com/9213496/119326238-ee0edd80-bc96-11eb-8dba-54bc5b944518.png)

## Static Arguments Localization

First Create a `SomeKey` Key with `Alphabet {0}, {1}, {2}` value in Resx file.

Name: `SomeKey`
Value: `Alphabet {0}, {1}, {2}`

Then Create an array in Xaml

```xml
<x:Array x:Key="SomeArray" Type="system:String" xmlns:system="clr-namespace:System;assembly=mscorlib">
    <system:String>A</system:String>
    <system:String>B</system:String>
    <system:String>C</system:String>
</x:Array>
```
Now we can use our array in our localization

``` xml
 <TextBlock> 
    <TextBlock.Text> 
      <hc:Localization Key="SomeKey" Arguments="{StaticResource SomeArray}" />
    </TextBlock.Text>
 </TextBlock> 
```

![Argument](https://user-images.githubusercontent.com/9213496/119326213-e94a2980-bc96-11eb-8acb-3b5a1bcace74.png)


# Localize in Code-Behind
It is very easy to use in Code-Behind
## Localize
Return localized value as object.
for example When you have saved the FlowDirection value in the resource, you can use this method to get value as an object and cast it to FlowDirection.

``` CS
var msg = LocalizationManager.Localize("Key");

// OR

var msg2 = LocalizationManager.Localize("Key", new CultureInfo("en"));

// OR
ILocalizationProvider provider = new ResxLocalizationProvider("WpfAppTest.Assets.Strings", Assembly.Load("WpfAppTest"));

var msg3 = LocalizationManager.Localize(provider, "Key", new CultureInfo("en"));
```

## LocalizeString
Return localized value as String.

``` CS
string msg = LocalizationManager.LocalizeString("Key");

// OR

string msg2 = LocalizationManager.LocalizeString("Key", new CultureInfo("en"));

// OR
ILocalizationProvider provider = new ResxLocalizationProvider("WpfAppTest.Assets.Strings", Assembly.Load("WpfAppTest"));

string msg3 = LocalizationManager.LocalizeString(provider, "Key", new CultureInfo("en"));

```

# Change language in Runtime
To change the language in runtime, just write the following code and specify the language code

``` CS
ConfigHelper.Instance.SetLang("fa");
```

# CultureChanged Event
This event is called whenever the culture changes So you can get the details of the culture:

```cs
LocalizationManager.Instance.CultureChanged += OnCultureChanged;

private void OnCultureChanged(object sender, FunctionEventArgs<CultureInfo> e)
{
  var info = e.Info.Name;
}
```

# Available Culture
You can use this method to get the list of languages of each resource, `GetAvailableCultures` return `Dictionary<string, IEnumerable<CultureInfo>>`

```cs
foreach (var item in LocalizationManager.GetAvailableCultures())
{
  foreach (var lang in item.Value)
  {
    Debug.WriteLine(lang.Name);
  }
}

```

# AvailableResxProvider and AvailableResourceManager
if you need Providers or ResourceManagers, you can use these 2 dictionaries.

- `AvailableResxProvider` Holds all your application providers.
- `AvailableResourceManager` Holds all your application ResourceManager.


