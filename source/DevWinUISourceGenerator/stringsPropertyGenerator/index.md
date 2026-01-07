---
title: StringsPropertyGenerator
---

Use this generator to create a class containing all keys and values from the `Resources.resw` file or any resw file which has `Resources` keyword in its name.(eg: `Resources.Error.resw`)

This generator reads the `Resources\en-US\resources.resw` file and extracts each key.
The result is a generated class similar to the following:

The generator locates the `.resw` files by filtering for `en-US\Resources`, so make sure your `.resw` file is placed inside the `en-US` folder and has a `Resources` in its name. Otherwise, the generator will not be able to find it.

# How To Use it?

Just add an `AdditionalFiles` entry to your .csproj.

```xml
<ItemGroup>
  <AdditionalFiles Include="Strings\en-US\Resources.resw" />
  <!-- OR  <AdditionalFiles Include="Strings\en-US\Resources.Error.resw" /> -->
</ItemGroup>
```

# Namespace

You can define your own namespace by adding a property to a `PropertyGroup`.

```xml
<PropertyGroup>
    <StringsNamespace>myStringsNamespace</StringsNamespace>
</PropertyGroup>
```

# Result

```cs
public sealed partial class Strings
{

    /// <summary>
    /// </summary>
    /// <remarks>
    /// e.g.: <b>Al-Anwar is an open-source software for reading and reciting the Holy Quran.</b>
    /// </remarks>
    public const string AboutUsSettingPage_About_Description = "AboutUsSettingPage_About/Description";

    /// <summary>
    /// </summary>
    /// <remarks>
    /// e.g.: <b>AlAnvar</b>
    /// </remarks>
    public const string AboutUsSettingPage_About_Header = "AboutUsSettingPage_About/Header";

    /// <summary>
    /// </summary>
    /// <remarks>
    /// e.g.: <b>Related Links</b>
    /// </remarks>
    public const string AboutUsSettingPage_RelatedLink_Text = "AboutUsSettingPage_RelatedLink/Text";

    /// <summary>
    /// </summary>
    /// <remarks>
    /// e.g.: <b>Release notes</b>
    /// </remarks>
    public const string AboutUsSettingPage_ReleaseNote_Content = "AboutUsSettingPage_ReleaseNote/Content";
}
```