---
title: Welcome to DevWinUI
---

# Download and Install

|Nuget|Github|
|-|-|
|[DevWinUI](https://www.nuget.org/packages/DevWinUI/)|[Github](https://github.com/Ghost1372/DevWinUI)


{% note warning %}
Github is generally updated every day and is relatively unsuitable for production.
{% endnote %}

## Install
```
Install-Package DevWinUI
```
Or
```
dotnet add package DevWinUI
```

After installing, add the following resource to `app.xaml`

```xml
<ResourceDictionary Source="ms-appx:///DevWinUI/Themes/Generic.xaml"/>
```

{% note warning %}
We moved all namespaces into a single namespace. No matter which (DevWinUI) library you use, the namespace is always as follows
For use in the Xaml:
`xmlns:dev="using:DevWinUI"`
For use in the Csharp:
`using DevWinUI;`
{% endnote %}


See the Demo app to see how to use it

![GalleryApp](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/GalleryApp.png)
