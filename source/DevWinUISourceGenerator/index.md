---
title: Welcome to DevWinUI Source Generator
---

# DevWinUI.SourceGenerator
 
## Install
```
Install-Package DevWinUI.SourceGenerator
```

## Example
For generating `BreadcrumbPageMappings` you need to define `<AdditionalFiles Include="**\*.xaml" />`, for `NavigationPageMappings` you need to define `<AdditionalFiles Include="Assets\NavViewMenu\AppData.json" />` and for `StringsPropertyGenerator` you need to define `<AdditionalFiles Include="Strings\en-US\Resources.resw" />`

```xml
<ItemGroup>
  <AdditionalFiles Include="Assets\NavViewMenu\AppData.json" />
  <AdditionalFiles Include="**\*.xaml" />
  <AdditionalFiles Include="Strings\en-US\Resources.resw" />
</ItemGroup>
```

you can define namespace for each file in `csproj` and `PropertyGroup` section:

```xml
<StringsNamespace>myStringsNamespace</StringsNamespace>
<NavigationMappingsNamespace>MyNavigationMappingsNamespace</NavigationMappingsNamespace>
<BreadcrumbMappingsNamespace>MyBreadcrumbMappingsNamespace</BreadcrumbMappingsNamespace>
```

## Demo

See the [Gallery](https://github.com/Ghost1372/DevWinUI) app to see how to use it

## Documentation

See Here for Online [Documentation](https://ghost1372.github.io/devWinUI/)

![GalleryApp](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/GalleryApp.png)
