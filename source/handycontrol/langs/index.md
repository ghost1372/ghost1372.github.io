---
title: Globalization
---

# Way of use

The language package to be used can be specified by `ConfigHelper.Instance.SetLang(string lang)`, English (en) is used by default.

The language package that comes with the control library is generally used internally by the control library, but users can also use it in the following two ways:

- xaml
The first step is to introduce the namespace: `xmlns:hc="https://handyorg.github.io/handycontrol"`
The second step is to use the language pack: `<TextBlock Text="{x:Static hc:Lang.Cancel}"/>`

- C#
`HandyControl.Properties.Langs.Lang.Cancel`

# Language packs

The language packs included with the control library include:

* Simplified Chinese (zh-cn)
* English (en)
* Persian (fa)
* French (fr)
* Korean (ko-kr)
* Russian (ru)
* Turkish (tr)
* Brazillian (pt-br)
* Polish (pl)
* Spanish (es)
* Catalan (Spain) (ca-ES)
* Japanese (ja)

`The default is English (en).`

If you need to expand on your own, it is recommended to use the open source plugin: [ResXManager](https://marketplace.visualstudio.com/items?itemName=TomEnglert.ResXManager) to maintain all language packs.

After the control library is referenced, the language package folder is generated in the running directory, and its naming style is like zh-cn, en, and so on.

## How to Install and Use Language Packs?
Language packs are provided as a nuget package, So just install your favorite language packs as nuget packs.
For example, if you want your app to support `Persian` and `Chinese`, just add the following packages to your project.

```
Install-Package HandyControls.Lang.fa
Install-Package HandyControls.Lang.zh-CN
```
After that you can change the language of the app as before.

# Dynamic Multi Language
You can use this method to bring dynamic multilingual switching features to your applications

## How to use?

First you need to create a folder in properties, here our folder called `Langs` We are going to create language files in this folder.
add resource files into this folder you can Right-click on folder and from the Add New Item option Select `Resources file` Be careful when naming it.

{% note info %}
- The default language can be without a language code

- No matter how many languages you have, you need to create a resource file for that language.

- You must include a 2-digit or 5-digit language code in resource file name.

{% endnote %}

We want our program to have 2 languages, `English` and `Persian` So I create 2 resource files Pay attention to the naming method.
- `Lang.resx`
- `Lang.en.resx` or `Lang.en-US.resx`

now we need to create a class called `LangProvider.cs` in `Langs` folder we should declare our language resource here and Make a reference to the LangProvider class:

``` CS
using HandyControl.Tools;
using System.ComponentModel;
using System.Globalization;
using System.Windows;
using System.Windows.Data;

namespace HandyControlProjectDemo.Properties.Langs
{
    public class LangProvider : INotifyPropertyChanged
    {
        internal static LangProvider Instance => ResourceHelper.GetResource<LangProvider>("DemoLangs");

        private static string CultureInfoStr;

        public static CultureInfo Culture
        {
            get => Lang.Culture;
            set
            {
                if (value == null) return;
                if (Equals(CultureInfoStr, value.EnglishName)) return;
                Lang.Culture = value;
                CultureInfoStr = value.EnglishName;

                Instance.UpdateLangs();
            }
        }

        public static string GetLang(string key) => Lang.ResourceManager.GetString(key, Culture);

        public static void SetLang(DependencyObject dependencyObject, DependencyProperty dependencyProperty, string key) =>
            BindingOperations.SetBinding(dependencyObject, dependencyProperty, new Binding(key)
            {
                Source = Instance,
                Mode = BindingMode.OneWay
            });

        private void UpdateLangs()
        {
            OnPropertyChanged(nameof(Test));
        }
        public event PropertyChangedEventHandler PropertyChanged;

        protected virtual void OnPropertyChanged(string propertyName) =>
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));

        public string Test => Lang.Test;
    }
    public class LangKeys
    {
        public static string Test = nameof(Test);
    }
}
```
you should add all of your language resources here:
`OnPropertyChanged(nameof(Test));`
`public string Test => Lang.Test;`
`public static string Test = nameof(Test);`

{% note info %}
Because it is time consuming and tedious, you can use text templates (t4) or similar options to automatically generate all language resources.
this is a example of t4 that can generate all language resources:

{% note warning %}
Please delete `LangProvider.cs` before creating T4 file.
{% endnote %}

now create a T4 file named `LangProvider.tt`
```cs
<#@ template debug="false" hostspecific="false" language="C#" #>
<#@ assembly name="System.Core" #>
<#@ import namespace="System.Linq" #>
<#@ import namespace="System.Collections.Generic"#>
<#@ assembly name="$(TargetPath)" #>
<#@ import namespace="HandyControlProjectDemo.Properties.Langs" #>
<#@ output extension=".cs" #>
<#
	var resourceType = typeof(Lang);
    var propertyNameList = resourceType.GetProperties().Where(item => item.PropertyType == typeof(string)).Select(item => item.Name);
    var langDic = new Dictionary<string, string>();
    foreach(var item in propertyNameList)
    {
        langDic[item] = 
        @$"/// <summary>
        ///   {string.Format(Lang.LangComment, Lang.ResourceManager.GetString(item, Lang.Culture))}
        /// </summary>";
    }
#>
using System.ComponentModel;
using System.Globalization;
using System.Windows;
using System.Windows.Data;
using HandyControl.Tools;

namespace HandyControlProjectDemo.Properties.Langs
{
    public class LangProvider : INotifyPropertyChanged
    {
        internal static LangProvider Instance => ResourceHelper.GetResource<LangProvider>("DemoLangs");

        private static string CultureInfoStr;

        public static CultureInfo Culture
        {
            get => Lang.Culture;
            set
            {
                if (value == null) return;
                if (Equals(CultureInfoStr, value.EnglishName)) return;
                Lang.Culture = value;
                CultureInfoStr = value.EnglishName;

                Instance.UpdateLangs();
            }
        }

        public static string GetLang(string key) => Lang.ResourceManager.GetString(key, Culture);

        public static void SetLang(DependencyObject dependencyObject, DependencyProperty dependencyProperty, string key) =>
            BindingOperations.SetBinding(dependencyObject, dependencyProperty, new Binding(key)
            {
                Source = Instance,
                Mode = BindingMode.OneWay
            });

		private void UpdateLangs()
        {
            <#foreach(var item in propertyNameList){#>
                OnPropertyChanged(nameof(<#=item#>));
            <#}#>
        }

<#foreach(var item in propertyNameList){#>
        <#=langDic[item]#>
		public string <#=item#> => Lang.<#=item#>;

<#}#>

        public event PropertyChangedEventHandler PropertyChanged;

        protected virtual void OnPropertyChanged(string propertyName) =>
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
    }

    public class LangKeys
    {
<#foreach(var item in propertyNameList){#>
        <#=langDic[item]#>
		public static string <#=item#> = nameof(<#=item#>);

<#}#>
    }
}
```
{% endnote %}

now in `app.xaml` after MergedDictionary write this code:
``` xml
<langs:LangProvider x:Key="DemoLangs"/>
```
`langs` is refrence to language folder `xmlns:langs="clr-namespace:HandyControlDemo.Properties.Langs"`

finally we need to create a class called `LangExtension` that should inherit from `HandyControl.Tools.Extension.LangExtension` so we have:
``` CS
public class LangExtension : HandyControl.Tools.Extension.LangExtension
    {
        public LangExtension()
        {
            Source = LangProvider.Instance;
        }
    }
```

### How to use in Xaml?
First we need to introduce the `Language folder` and `LangExtension` class to the program:

``` xml
xmlns:langs="clr-namespace:{YOUR NAMESPACE}.Properties.Langs"
xmlns:ex="clr-namespace:{YOUR NAMESPACE}.LangExtension"
```
Now all you have to do is set your key like this
``` xml
 <Button Content="{ex:Lang Key={x:Static langs:LangKeys.About}}"/>
```

if you need to using binding:
``` xml
<Button Content="{ex:Lang Key={Binding Name}}"/>
```

### How to use in Csharp?
It is very easy to use in Code-Behind
``` CS
 MessageBox.Show(LangProvider.GetLang("About"));
```

## How to Change language in Runtime?
To change the language in runtime, just write the following code and specify the language code
``` CS
ConfigHelper.Instance.SetLang("en");
LangProvider.Culture = new CultureInfo("en");
```