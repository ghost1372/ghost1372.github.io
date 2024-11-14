---
title: Intellisense
---

If Visual Studio Intellisense unable to locate resources that are stored in a ResourceDictionary, follow this guide:

First, create a new ResourceDictionary and rename it to `DesignTimeResources.xaml`, and put it in `Properties\`.

for `HandyControls` copy this codes:

```xml
<ResourceDictionary xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
                    xmlns:hc="https://handyorg.github.io/handycontrol">
    <ResourceDictionary.MergedDictionaries>
        <hc:IntellisenseResources Source="/HandyControl;Component/DesignTime/DesignTimeResources.xaml" />
    </ResourceDictionary.MergedDictionaries>
</ResourceDictionary>
```

for `HandyControl` copy this codes:

```xml
<ResourceDictionary xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation">
    <ResourceDictionary.MergedDictionaries>
        <ResourceDictionary Source="/HandyControl;Component/Themes/Theme.xaml" />
    </ResourceDictionary.MergedDictionaries>
</ResourceDictionary>
```

Then edit your `csproj`, and add the following `ItemGroup`:

```xml
<ItemGroup>
    <Page Include="Properties\DesignTimeResources.xaml"
          Condition="'$(DesignTime)'=='true' OR ('$(SolutionPath)'!='' AND Exists('$(SolutionPath)') AND '$(BuildingInsideVisualStudio)'!='true' AND '$(BuildingInsideExpressionBlend)'!='true')">
      <Generator>MSBuild:Compile</Generator>
      <SubType>Designer</SubType>
      <ContainsDesignTimeResources>true</ContainsDesignTimeResources>
    </Page>
  </ItemGroup>
  ```

  Reload the project, and the XAML designer, and everything may now work…