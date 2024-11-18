---
title: NavigationService
---

Easily implement a `NavigationView` With/Without `Json` file (we read navigationview items from a json file)

# Simple Usage

First Create a Class `myPageService` and inherit from `PageServiceEx`

then in this class in `ctor` add your pages with a key into `_pageKeyToTypeMap` dictionary:

```cs
public class myPageService : PageServiceEx
{
    public myPageService()
    {
        _pageKeyToTypeMap = new Dictionary<string, Type>
        {
            { "BlankPage1", typeof(BlankPage1) },
            { "BlankPage2", typeof(BlankPage2) },
            { "BlankPage3", typeof(BlankPage3) },
        };
    }
}
```

{% note info %}
you can also inherit from IPageService
{% endnote %}

now create a new `myPageService` class, and here you can set DefaultPage or SettingsPage for NavigationView:

```cs
var pageService = new myPageService();
pageService.SetDefaultPage(typeof(HomeLandingsPage));
pageService.SetSettingsPage(typeof(GeneralPage));
```

after creating myPageService, Create `INavigationViewServiceEx` and `INavigationServiceEx`:

```cs
INavigationViewServiceEx navigationViewService;
INavigationServiceEx navigationService;

navigationService = new NavigationServiceEx(pageService);
navigationService.Frame = navFrame;
navigationViewService = new NavigationViewServiceEx(navigationService, pageService);
```

as you can see, we should set `Frame` in `navigationService`.

then we should call `Initialize` Method:

```cs
navigationViewService.Initialize(navigationView);
```

now you should add a `NavigateTo` in your NavigationViewItem:

```xml
<NavigationViewItem helper:NavigationHelperEx.NavigateTo="BlankPage1" Content="First" />
```

{% note info %}
BlankPage1 is a key, you defined it in myPageService.
{% endnote %}

### Config
there are some config methods:

#### ConfigAutoSuggestBox

You can search in the autosuggestbox and be navigated to the results page
```cs
navigationViewService.ConfigAutoSuggestBox(autoSuggestBox);
```


```xml
<NavigationView Name="navigationView">
    <NavigationView.AutoSuggestBox>
        <AutoSuggestBox Name="autoSuggestBox" />
    </NavigationView.AutoSuggestBox>
    <NavigationView.MenuItems>
        <NavigationViewItem wuc:NavigationHelper.NavigateTo="BlankPage1"
                            Content="First" />
        <NavigationViewItem Content="Second">
            <NavigationViewItem.MenuItems>
                <NavigationViewItem wuc:NavigationHelper.NavigateTo="BlankPage2"
                                    Content="Third" />
                <NavigationViewItem Content="Four">
                    <NavigationViewItem.MenuItems>
                        <NavigationViewItem wuc:NavigationHelper.NavigateTo="BlankPage3"
                                            Content="Five" />
                    </NavigationViewItem.MenuItems>
                </NavigationViewItem>
            </NavigationViewItem.MenuItems>
        </NavigationViewItem>
    </NavigationView.MenuItems>
    <Frame Name="navFrame" />
</NavigationView>
```

### Complete Codes

```cs
INavigationViewServiceEx navigationViewService;
INavigationServiceEx navigationService;

var pageService = new myPageService();
pageService.SetDefaultPage(typeof(HomeLandingsPage));
pageService.SetSettingsPage(typeof(GeneralPage));

navigationService = new NavigationServiceEx(pageService);
navigationService.Frame = navFrame;

navigationViewService = new NavigationViewServiceEx(navigationService, pageService);
navigationViewService.Initialize(navigationView);
navigationViewService.ConfigAutoSuggestBox(autoSuggestBox);
```

![DevWinUI](https://raw.githubusercontent.com/ghost1372/Resources/main/SettingsUI/Samples/NavigationViewHelper.gif)

### MVVM Pattern
you can use MVVM pattern:

First Register your Services:

```cs
var services = new ServiceCollection();
services.AddSingleton<IPageServiceEx, myPageService>();
services.AddSingleton<INavigationServiceEx, NavigationServiceEx>();
services.AddTransient<INavigationViewServiceEx, NavigationViewServiceEx>();
```

then, in your `MainViewModel`

```cs
public INavigationServiceEx NavigationService { get; }
public INavigationViewServiceEx NavigationViewService { get; }
public MainViewModel(INavigationServiceEx navigationService, INavigationViewServiceEx navigationViewService)
{
    NavigationService = navigationService;
    NavigationViewService = navigationViewService;
}
```

finally in your `MainPage.xaml.cs`

```cs
ViewModel.NavigationService.Frame = frame;
ViewModel.NavigationViewService.Initialize(navigationView);
```

## NavigationView With Json File

First Add a NavigationView:

```xml
<NavigationView x:Name="navigationView">
    <NavigationView.AutoSuggestBox>
        <AutoSuggestBox x:Name="autoSuggestBox">
        </AutoSuggestBox>
    </NavigationView.AutoSuggestBox>
    <Frame x:Name="navFrame"/>
</NavigationView>
```

then Create a new `IJsonNavigationViewService`:

```cs
IJsonNavigationViewService jsonNavigationViewService;
jsonNavigationViewService = new JsonNavigationViewService();
```

now you should call `Initialize` method with a `NavigationView`, `Frame` and `PageDictionary`

for `PageDictionary`, Create a new T4 template and Copy-Paste following Script, this script help you to Auto Generate it:

{% note info %}
Due to the limitation in using reflection in AOT, we have to use the following method
{% endnote %}

{% note warning %}
- Replace `$T4_NAMESPACE$` with your app namespace
{% endnote %}

```cs
jsonNavigationViewService
                .Initialize(NavView, NavFrame, NavigationPageMappings.PageDictionary)
                .ConfigureJsonFile("Assets/NavViewMenu/AppData.json");
```
T4 Template:

```t4
<#@ template language="C#" hostspecific="true" #>
<#@ output extension=".cs" #>
<#@ assembly name="System.IO" #>
<#@ assembly name="System.Text.Json" #>
<#@ assembly name="System.Memory" #>
<#@ import namespace="System.IO" #>
<#@ import namespace="System.Text.Json" #>
<#@ assembly name="System.Core" #>
<#@ import namespace="System.Linq" #>
<#@ assembly name="System.Xml" #>
<#@ assembly name="System.Xml.Linq" #>
<#@ import namespace="System.Xml.Linq" #>
<#@ import namespace="System.Collections.Generic" #>
// -----------------------------------------------------------------------------------------------------
// | <auto-generated>                                                                                  |
// |    This code was generated by a tool.                                                             |
// |                                                                                                   |
// |    Changes to this file may cause incorrect behavior and will be lost if the code is regenerated. |
// | </auto-generated>                                                                                 |
// -----------------------------------------------------------------------------------------------------

// Define JSON file path variable for easy adjustment
<# string JSON_FILE_PATH = "AppData.json"; #>

namespace $T4_NAMESPACE$;
public partial class NavigationPageMappings
{
    public static Dictionary<string, Type> PageDictionary { get; } = new Dictionary<string, Type>
    {
<#
// Helper method for recursive parsing
void ProcessItems(JsonElement items, List<string> xamlPages)
{
    foreach (JsonElement item in items.EnumerateArray())
    {
        string uniqueId = item.GetProperty("UniqueId").GetString();
        string parameter = item.TryGetProperty("Parameter", out JsonElement param) ? param.GetString() : string.Empty;
        string sectionId = item.TryGetProperty("SectionId", out JsonElement secId) ? secId.GetString() : null;

        if (string.IsNullOrEmpty(sectionId))
        {
            // Look for the xamlClass using uniqueId
            string xamlClass = xamlPages.FirstOrDefault(x => x.Equals(uniqueId));

            if (!string.IsNullOrEmpty(xamlClass))
            {
#>
        {"<#= uniqueId + parameter #>", typeof(<#= xamlClass #>)},
<#
            }
        }
        else
        {
            // Look for the xamlClass using sectionId
            string xamlClass = xamlPages.FirstOrDefault(x => x.Equals(sectionId));

            if (!string.IsNullOrEmpty(xamlClass))
            {
#>
        {"<#= uniqueId + parameter #>", typeof(<#= xamlClass #>)},
<#
            }
        }

        // Recursively process nested Items
        if (item.TryGetProperty("Items", out JsonElement nestedItems) && nestedItems.ValueKind == JsonValueKind.Array)
        {
            ProcessItems(nestedItems, xamlPages); // Recursive call
        }
    }
}

string jsonFilePath = string.Empty;
List<string> xamlPages = null;
string rootDirectory = FindProjectRoot(Path.GetDirectoryName(Host.TemplateFile));
if (rootDirectory != null)
{
    jsonFilePath = FindJsonFile(rootDirectory, JSON_FILE_PATH);
    xamlPages = GetXamlClasses(rootDirectory);
}

if (File.Exists(jsonFilePath))
{
    string jsonContent = File.ReadAllText(jsonFilePath);
    using (JsonDocument jsonDoc = JsonDocument.Parse(jsonContent))
    {
        JsonElement root = jsonDoc.RootElement;
        if (root.TryGetProperty("Groups", out JsonElement groups) && groups.ValueKind == JsonValueKind.Array)
        {
            foreach (JsonElement group in groups.EnumerateArray())
            {
                if (group.TryGetProperty("Items", out JsonElement items) && items.ValueKind == JsonValueKind.Array)
                {
                    ProcessItems(items, xamlPages); // Call the recursive method
                }
            }
        }
    }
}
else
{
#>
        //Json file not found.
<#
}
#>
    };
}
<#+
// Helper function to load XAML classes
List<string> GetXamlClasses(string projectDirectory)
{
    var xamlClasses = new List<string>();
    var xamlFiles = Directory.GetFiles(projectDirectory, "*.xaml", SearchOption.AllDirectories);

    foreach (var file in xamlFiles)
    {
        // Filter out files that belong to other projects (assumed by the presence of 'obj' or 'bin' folders)
        if (file.Contains($"{Path.DirectorySeparatorChar}obj{Path.DirectorySeparatorChar}") ||
            file.Contains($"{Path.DirectorySeparatorChar}bin{Path.DirectorySeparatorChar}"))
        {
            continue;
        }

        XDocument xamlDoc = null;
        try
        {
            xamlDoc = XDocument.Load(file);
        }
        catch
        {
            continue;
        }

        XElement rootElement = xamlDoc.Root;
        if (rootElement != null && rootElement.Name.LocalName != "Window" &&
            rootElement.Name.LocalName != "Application" &&
            rootElement.Name.LocalName != "ResourceDictionary")
        {
            XAttribute classAttribute = rootElement.Attribute(XName.Get("Class", "http://schemas.microsoft.com/winfx/2006/xaml"));
            if (classAttribute != null)
            {
                xamlClasses.Add(classAttribute.Value);
            }
        }
    }

    return xamlClasses;
}

// Helper function to find JSON file
string FindJsonFile(string directory, string fileName)
{
    string[] files = Directory.GetFiles(directory, fileName, SearchOption.AllDirectories);
    return files.Length > 0 ? files[0] : null;
}

string FindProjectRoot(string directory)
{
    while (!string.IsNullOrEmpty(directory))
    {
        // Check for .csproj or .sln files in the current directory
        if (Directory.GetFiles(directory, "*.csproj", SearchOption.TopDirectoryOnly).Any() ||
            Directory.GetFiles(directory, "*.sln", SearchOption.TopDirectoryOnly).Any())
        {
            return directory; // Found the project root
        }

        // Move one level up in the directory hierarchy
        directory = Directory.GetParent(directory)?.FullName;
    }

    return null; // No project root found
}
#>
```

{% note warning %}
Visual Studio cannot automatically generate T4 files, to solve this problem we need to create a target to generate all T4 files when building the project.
{% endnote %}

```xml
<Target Name="TransformAllT4Templates" BeforeTargets="BeforeBuild">
  <ItemGroup>
    <!-- This picks up all T4 templates in the project -->
    <T4Template Include="**\*.tt" />
  </ItemGroup>

  <!-- Check if TextTransform.exe exists before running -->
  <Exec Command="if exist &quot;$(DevEnvDir)TextTransform.exe&quot; &quot;$(DevEnvDir)TextTransform.exe&quot; &quot;%(T4Template.FullPath)&quot;" Condition="Exists('$(DevEnvDir)TextTransform.exe')" />
</Target>
```

### Configs
there are some configure methods:

#### ConfigDefaultPage
set Default page for NavigationView
```cs
Initializ(...).ConfigDefaultPage(typeof(HomeLandingsPage));
```
#### ConfigSettingsPage
set Settings page for NavigationView

```cs
Initializ(...).ConfigSettingsPage(typeof(GeneralPage));
```

#### ConfigAutoSuggestBox
You can search in the autosuggestbox and be navigated to the results page

```cs
Initializ(...).ConfigAutoSuggestBox(autoSuggestBox);
```            

#### ConfigBreadcrumbBar
for `PageDictionary`, Create a new T4 template and Copy-Paste following Script, this script help you to Auto Generate it:

{% note info %}
Due to the limitation in using reflection in AOT, we have to use the following method
{% endnote %}

{% note warning %}
- Replace `$T4_NAMESPACE$` with your app namespace
{% endnote %}

```cs
Initializ(...).ConfigBreadcrumbBar(breadCrumb, NavigationPageMappings.PageDictionary);
```            

use `wuc:BreadcrumbNavigator.PageTitle` and `wuc:BreadcrumbNavigator.IsHeaderVisible` attached properties on your pages, for Title and Header visiblity.

```t4
<#@ template language="C#" hostspecific="true" #>
<#@ output extension=".cs" #>
<#@ assembly name="System.IO" #>
<#@ assembly name="System.Text.Json" #>
<#@ assembly name="System.Memory" #>
<#@ import namespace="System.IO" #>
<#@ import namespace="System.Text.Json" #>
<#@ assembly name="System.Core" #>
<#@ import namespace="System.Linq" #>
<#@ assembly name="System.Xml" #>
<#@ assembly name="System.Xml.Linq" #>
<#@ import namespace="System.Xml.Linq" #>
<#@ import namespace="System.Collections.Generic" #>
// -----------------------------------------------------------------------------------------------------
// | <auto-generated>                                                                                  |
// |    This code was generated by a tool.                                                             |
// |                                                                                                   |
// |    Changes to this file may cause incorrect behavior and will be lost if the code is regenerated. |
// | </auto-generated>                                                                                 |
// -----------------------------------------------------------------------------------------------------

namespace $T4_NAMESPACE$;
public partial class BreadcrumbPageMappings
{
    public static Dictionary<Type, BreadcrumbPageConfig> PageDictionary = new()
    {
<#
// Get the directory of the project
string rootDirectory = FindProjectRoot(Path.GetDirectoryName(Host.TemplateFile));
List<string> xamlFiles = GetXamlClasses(rootDirectory);
foreach (var file in xamlFiles)
{
    try
    {
        string content = File.ReadAllText(file);
        string relativePath = GetRelativePath(rootDirectory, file);
        ExtractAttachedProperties(content);
    }
    catch (Exception ex)
    {
#> 
        // Output an error message as comment in the generated file
        <#= $"// Error loading XAML file: {file} - {ex.Message}" #>
<# 
    }
}

void ExtractAttachedProperties(string content)
{
    // Extract the Type from the x:Class attribute
    string xClassValue = GetXClassValue(content);
    if (string.IsNullOrEmpty(xClassValue))
    {
        return; // Skip if no x:Class found
    }

    string pageTitle = GetAttachedPropertyValue("BreadcrumbNavigator.PageTitle", content);
    string isHeaderVisible = GetAttachedPropertyValue("BreadcrumbNavigator.IsHeaderVisible", content);
    string clearCache = GetAttachedPropertyValue("BreadcrumbNavigator.ClearCache", content);

    // Using ternary operators to set values or default to empty strings
    string title = !string.IsNullOrEmpty(pageTitle) ? pageTitle : string.Empty;

    // Convert to bool based on string value directly
    bool isHeaderVisibile = isHeaderVisible?.Equals("True", StringComparison.OrdinalIgnoreCase) ?? false;
    bool clearNavigation = clearCache?.Equals("True", StringComparison.OrdinalIgnoreCase) ?? false;

    if (string.IsNullOrEmpty(title) && string.IsNullOrEmpty(isHeaderVisible) && string.IsNullOrEmpty(clearCache))
    {
        return;
    }
#>
        <#= $"{{typeof({xClassValue}), new BreadcrumbPageConfig {{ PageTitle = {(string.IsNullOrEmpty(title) ? "null" : $"\"{title}\"")}, IsHeaderVisible = {isHeaderVisibile.ToString().ToLower()}, ClearNavigation = {clearNavigation.ToString().ToLower()}}}}}," #>
<#
}
string GetXClassValue(string content)
{
    // Simple regex to match x:Class attribute
    var match = System.Text.RegularExpressions.Regex.Match(content, @"x:Class=""([^""]+)""");
    if (match.Success && match.Groups.Count > 1)
    {
        return match.Groups[1].Value; // Return the matched class value
    }
    return null;
}

string GetAttachedPropertyValue(string propertyName, string content)
{
    // Find the property assignment in the content
    var lines = content.Split(new[] { '\r', '\n' }, StringSplitOptions.RemoveEmptyEntries);
    foreach (var line in lines)
    {
        if (line.Contains(propertyName))
        {
            // Extract the value after '=' and before the next ';' or new line
            int startIndex = line.IndexOf('=') + 1;
            int endIndex = line.IndexOf(';', startIndex);
            if (endIndex == -1) endIndex = line.Length;

            string value = line.Substring(startIndex, endIndex - startIndex).Trim().Trim('"');
            return value;
        }
    }
    return null;
}

List<string> GetXamlClasses(string projectDirectory)
{
    var xamlClasses = new List<string>();
    var xamlFiles = Directory.GetFiles(projectDirectory, "*.xaml", SearchOption.AllDirectories);

    foreach (var file in xamlFiles)
    {
        // Filter out files that belong to other projects (assumed by the presence of 'obj' or 'bin' folders)
        if (file.Contains($"{Path.DirectorySeparatorChar}obj{Path.DirectorySeparatorChar}") ||
            file.Contains($"{Path.DirectorySeparatorChar}bin{Path.DirectorySeparatorChar}"))
        {
            continue;
        }

        XDocument xamlDoc = null;
        try
        {
            xamlDoc = XDocument.Load(file);
        }
        catch
        {
            continue;
        }

        XElement rootElement = xamlDoc.Root;
        if (rootElement != null && rootElement.Name.LocalName != "Window" &&
            rootElement.Name.LocalName != "Application" &&
            rootElement.Name.LocalName != "ResourceDictionary")
        {
            XAttribute classAttribute = rootElement.Attribute(XName.Get("Class", "http://schemas.microsoft.com/winfx/2006/xaml"));
            if (classAttribute != null)
            {
                xamlClasses.Add(file);
            }
        }
    }

    return xamlClasses;
}

string GetRelativePath(string basePath, string fullPath)
{
    Uri baseUri = new Uri(basePath + Path.DirectorySeparatorChar);
    Uri fullUri = new Uri(fullPath);
    return baseUri.MakeRelativeUri(fullUri).ToString().Replace('/', Path.DirectorySeparatorChar);
}
string FindProjectRoot(string directory)
{
    while (!string.IsNullOrEmpty(directory))
    {
        // Check for .csproj or .sln files in the current directory
        if (Directory.GetFiles(directory, "*.csproj", SearchOption.TopDirectoryOnly).Any() ||
            Directory.GetFiles(directory, "*.sln", SearchOption.TopDirectoryOnly).Any())
        {
            return directory; // Found the project root
        }

        // Move one level up in the directory hierarchy
        directory = Directory.GetParent(directory)?.FullName;
    }

    return null; // No project root found
}
#>
    };
}
```

{% note warning %}
Visual Studio cannot automatically generate T4 files, to solve this problem we need to create a target to generate all T4 files when building the project.
{% endnote %}

```xml
<Target Name="TransformAllT4Templates" BeforeTargets="BeforeBuild">
  <ItemGroup>
    <!-- This picks up all T4 templates in the project -->
    <T4Template Include="**\*.tt" />
  </ItemGroup>

  <!-- Check if TextTransform.exe exists before running -->
  <Exec Command="if exist &quot;$(DevEnvDir)TextTransform.exe&quot; &quot;$(DevEnvDir)TextTransform.exe&quot; &quot;%(T4Template.FullPath)&quot;" Condition="Exists('$(DevEnvDir)TextTransform.exe')" />
</Target>
```

#### ConfigLocalizer

step1:

```cs
Initializ(...).ConfigLocalizer(resourceManager, resourceContext);
```      

step2:
add `"UsexUid": true` for every item in json file.

step3:
add some resources in your resw files.
for example: 

|Key|Value|
|-|-|
|Nav_HomeTitle|Home|

step4:
copy and paste Key in your json file for `Title` or `subtitle`...

`"Title": "Nav_HomeTitle"`

In the last step, you need to create the json file:
create a new `json` file (`AppData.json`) in a folder called `DataModel`:


{% note warning %}
- Set BuildAction for `AppData.json` to `Content` and if you are in a Unpackaged app, also set `CopyToOutput` to `Always`
{% endnote %}

{% note info %}
To see details and descriptions of Json's properties, refer to <ins>**[this](https://ghost1372.github.io/DevWinUI/jsonFile)**</ins> page
{% endnote %}

{% note warning %}
If you have items that use the same Page, you should set the `parameter` property in the json file to avoid navigation errors.

"UniqueId": "DevWinUI.DemoApp.Pages.myPage",
"Title": "Movie"
"Parameter": "Movie"

---

"UniqueId": "DevWinUI.DemoApp.Pages.myPage",
"Title": "Series"
"Parameter": "Series"

{% endnote %}

{% note info %}
When we add page information (key, page) in the dictionary, the key is created as follows (parameter can be null)
UniqueId + Parameter
{% endnote %}

this is a json file content:

```json
{
  "Groups": [
    {
      "UniqueId": "Features",
      "Title": "Features pages",
      "IsSpecialSection": false,
      "Items": [
        {
          "UniqueId": "DevWinUI.DemoApp.Pages.ApplicationDataContainerPage",
          "Title": "ApplicationDataContainer",
          "SecondaryTitle": "Test SecondaryTitle",
          "Subtitle": "you can use ApplicationDataContainerHelper for saving and loading application settings.",
          "ImagePath": "ms-appx:///Assets/Modules/PT.png",
          "Description": "test description",
          "IsUpdated": true,
          "IncludedInBuild": true,
          "Links": [
            {
              "Title": "ApplicationDataContainerPage",
              "Uri": "https://DevWinUI.github.io/DevWinUI/helpers/applicationDataContainerHelper/"
            }
          ],
          "Extra": [
            "AppBarToggleButton",
            "AppBarSeparator",
            "CommandBar"
          ]
        },
        {
          "UniqueId": "DevWinUI.DemoApp.Pages.AppNotificationPage",
          "Title": "App Notification",
          "SecondaryTitle": "Test SecondaryTitle",
          "Subtitle": "you can use AppNotificationPage for Sending Toast Notification.",
          "ImagePath": "ms-appx:///Assets/Modules/PT.png",
          "IncludedInBuild": true,
          "Links": [
            {
              "Title": "AppNotificationPage",
              "Uri": "https://DevWinUI.github.io/DevWinUI/helpers/appNotification/"
            }
          ]
        },
      ]
    },
    {
      "UniqueId": "Settings",
      "Title": "Settings pages",
      "SecondaryTitle": "Test SecondaryTitle",
      "Items": [
        {
          "UniqueId": "DevWinUI.DemoApp.Pages.OobePage",
          "Title": "Oobe Page",
          "ApiNamespace": "DemoApp",
          "SecondaryTitle": "Test SecondaryTitle",
          "Subtitle": "Settings Page with a Hero Image",
          "ImagePath": "ms-appx:///Assets/Modules/PT.png",
          "IsUpdated": true,
          "IncludedInBuild": true,
        }
      ]
    }
  ]
}

```

- UniqueId
this is your pages full address, for example: `DevWinUI.DemoApp.Pages.ApplicationDataContainerPage`

- ApiNamespace
this is your apps namespace, for example: `DevWinUI.DemoApp`

{% note warning %}
for Navigating to a Page we used UniqueId.
{% endnote %}

### Methods and Properties

there is some methods and properties that you can use them:

```cs
var jsonDataSource = jsonNavigationViewService.DataSource;

jsonNavigationViewService.SearchNavigationViewItems(navigationView.MenuItems, "query")
```

### Complete Codes

```cs
IJsonNavigationViewService jsonNavigationViewService;
jsonNavigationViewService = new JsonNavigationViewService();
jsonNavigationViewService
                .Initialize(NavView, NavFrame, NavigationPageMappings.PageDictionary)
                .ConfigureJsonFile("Assets/NavViewMenu/AppData.json")
                .ConfigureDefaultPage(typeof(HomeLandingPage))
                .ConfigureSettingsPage(typeof(SettingsPage))
                .ConfigureSectionPage(typeof(DemoSectionPage))
                .ConfigureAutoSuggestBox(HeaderAutoSuggestBox)
                .ConfigureBreadcrumbBar(JsonBreadCrumbNavigator, BreadcrumbPageMappings.PageDictionary);
```

# MVVM Patern
first register a `IJsonNavigationViewService` service:

```cs
services.AddSingleton<IJsonNavigationViewService, JsonNavigationViewService>();
```

then:

```cs
public MainPage()
{
    this.InitializeComponent();
    var service = App.GetService<IJsonNavigationViewService>() as JsonNavigationViewService;
    
    service.Initialize(NavView, NavFrame, NavigationPageMappings.PageDictionary)
            .ConfigureJsonFile("Assets/NavViewMenu/AppData.json")
            .ConfigureDefaultPage(typeof(HomeLandingPage))
            .ConfigureSettingsPage(typeof(SettingsPage))
            .ConfigureSectionPage(typeof(DemoSectionPage))
            .ConfigureAutoSuggestBox(HeaderAutoSuggestBox);
}
```

# INavigationAwareEx
you can use `INavigationAwareEx` in your ViewModel and you can access to `OnNavigatedFrom` and `OnNavigatedTo` methods.

```cs
public partial class myViewModel : INavigationAwareEx

public void OnNavigatedFrom()
{

}

public async void OnNavigatedTo(object parameter)
{
    
}

```

{% note warning %}
you should set `DataContext`, otherwise you cant use this interface.
{% endnote %}

```cs
public myViewModel ViewModel {get;}

public BlankPage()
{
    ViewModel = App.GetService<myViewModel>();
    DataContext = ViewModel;
    this.InitializeComponent();
}
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.

![NavigationWithJson](https://raw.githubusercontent.com/ghost1372/Resources/main/SettingsUI/Samples/NavigationWithJson.png)