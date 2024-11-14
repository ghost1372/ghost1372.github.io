---
title: Quick start
---

# Easy Ways
Download the source code or reference the control library in Nuget mode or use VSIX Extension

## The difference between official and unofficial versions
`HandyControls` is Unofficial version Which has all the features of the official version + more features.

In the unofficial version you will enjoy the following features:

- Faster nuget release, usually every 20 days or 1 month (Official version every 3 months)
- Faster VSIX Update (VSIX will be updated with the release of the new version of Nuget)
- Helper classes
- Useful Extension methods
- More controls
- More styles for some controls
- Powerful ThemeManager
- Great features like dynamic language
- Optimized collections
- Persian Date and Calendar

And other awesome features which You can see the list of all of them along with the documents <ins>**[here](https://ghost1372.github.io/handycontrol/persianToolkit/)**</ins>

{% note warning %}
- HandyControl is official version
- HandyControls is Unofficial version
- You do not need to install both, just choose one of them
{% endnote %}

|Nuget|Github|Extension|
|-|-|-|
|[HandyControl-Nuget](https://www.nuget.org/packages/HandyControl/)|[HandyControl-Github](https://github.com/HandyOrg/HandyControl)|[HandyControl-Extension](https://marketplace.visualstudio.com/items?itemName=HandyOrg.handycontrolforvs2019)|
|[HandyControls-Nuget](https://www.nuget.org/packages/HandyControls/)|[HandyControls-Github](https://github.com/ghost1372/HandyControls)|[HandyControls-Extension](https://marketplace.visualstudio.com/items?itemName=MahdiHosseini.HandyControls)|

# HandyControls

Add the following code to App.xaml:

{% code lang:xml %}
<Application xmlns:hc="https://handyorg.github.io/handycontrol">
  <Application.Resources>
    <ResourceDictionary>
        <ResourceDictionary.MergedDictionaries>
             <hc:ThemeResources/>
             <hc:Theme/>
         </ResourceDictionary.MergedDictionaries>
     </ResourceDictionary>
  </Application.Resources>
</Application>
{% endcode %}

For more information about the theme click [here](https://ghost1372.github.io/handycontrol/theme/)

# HandyControl

Add the following code to App.xaml:

{% code lang:xml %}
<Application xmlns:hc="https://handyorg.github.io/handycontrol">
  <Application.Resources>
    <ResourceDictionary>
        <ResourceDictionary.MergedDictionaries>
            <hc:Theme Name="HandyTheme"/>
         </ResourceDictionary.MergedDictionaries>
     </ResourceDictionary>
  </Application.Resources>
</Application>
{% endcode %}

{% note info %}

In older versions of 2.5.1, you should add this code

{% code lang:xml %}
<Application.Resources>
    <ResourceDictionary>
        <ResourceDictionary.MergedDictionaries>
            <ResourceDictionary Source="pack://application:,,,/HandyControl;component/Themes/SkinDefault.xaml"/>
            <ResourceDictionary Source="pack://application:,,,/HandyControl;component/Themes/Theme.xaml"/>
        </ResourceDictionary.MergedDictionaries>
    </ResourceDictionary>
</Application.Resources>
{% endcode %}

{% endnote %}

# Last step
Add a namespace: `xmlns:hc="https://handyorg.github.io/handycontrol"`

# Extension

just download and install handycontrol template from marketplace. in this way you dont need to add anything. after installing hc, create new project with handycontrol template

![Extension](https://raw.githubusercontent.com/ghost1372/Resources/main/HandyControls/Docs/vsixTemplate.png)

# Nuget Nightly Builds

If you want to get the latest changes at the same time as the change in the source code as a nuget package, you can use Nightly Builds.

{% note warning %}
Nightly Builds are not recommended for use in products due to their instability.
{% endnote %}

- Open Visual Studio and go to the Nuget settings via:
 Tools -> Options -> Nuget PackageManager -> Package Sources

- Click the Add button
- Enter a name
- Enter the source

```
https://www.myget.org/F/handycontrols/
```
- Click the OK button

![Nightly](https://user-images.githubusercontent.com/9213496/114267902-b5cb7c80-9a13-11eb-8280-dba482427cf3.png)


Now when you want to install the nuget package change the source to the source you created

![Nightly](https://user-images.githubusercontent.com/9213496/114267905-ba903080-9a13-11eb-91a4-30047c729bba.png)
