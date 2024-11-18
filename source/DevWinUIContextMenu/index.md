---
title: DevWinUI.ContextMenu
---

### Experience .Net Apps quickly and easily with the help of DevWinUI, Everything you need to develop an application is gathered in one place.

Add Custom Context Menu For Windows 11, We use the following project to create menus https://github.com/ikas-mc/ContextMenuForWindows11
Therefore, make sure that your app is a `Packaged` Application and `not` a `UnPackaged`.
You can use `DevWinUI.ContextMenu` in any .Net >= 8.0 apps which supports Package Identity. this means you can use it in WPF or WinForm with MSIX Packaging.

# Download and Install

|Nuget|Github|
|-|-|
|[DevWinUI.ContextMenu](https://www.nuget.org/packages/DevWinUI.ContextMenu)|[Github](https://github.com/Ghost1372/DevWinUI)|

```
Install-Package DevWinUI.ContextMenu
```

After installing, add the following codes to `Package.appxmanifest`

```xml
  xmlns:com="http://schemas.microsoft.com/appx/manifest/com/windows10"
  xmlns:uap3="http://schemas.microsoft.com/appx/manifest/uap/windows10/3"
  xmlns:desktop="http://schemas.microsoft.com/appx/manifest/desktop/windows10"
  xmlns:desktop4="http://schemas.microsoft.com/appx/manifest/desktop/windows10/4"
  xmlns:desktop5="http://schemas.microsoft.com/appx/manifest/desktop/windows10/5"
  xmlns:desktop10="http://schemas.microsoft.com/appx/manifest/desktop/windows10/10"
<Extensions>
    <desktop4:Extension Category="windows.fileExplorerContextMenus">
        <desktop4:FileExplorerContextMenus>
            <desktop5:ItemType Type="Directory">
                <desktop5:Verb Id="CustomMenu" Clsid="YOUR_GUID" />
            </desktop5:ItemType>
            <desktop5:ItemType Type="*">
                <desktop5:Verb Id="CustomMenu" Clsid="YOUR_GUID" />
            </desktop5:ItemType>
            <desktop5:ItemType Type="Directory\Background">
                <desktop5:Verb Id="CustomMenu" Clsid="YOUR_GUID" />
            </desktop5:ItemType>
            <desktop10:ItemType Type="Drive">
                <desktop10:Verb Id="CustomMenu" Clsid="YOUR_GUID" />
            </desktop10:ItemType>
        </desktop4:FileExplorerContextMenus>
    </desktop4:Extension>
    <com:Extension Category="windows.comServer">
        <com:ComServer>
            <com:SurrogateServer  DisplayName="Custome Context Menu">
                <com:Class Id="YOUR_GUID" Path="ContextMenuCustomHost.dll" ThreadingModel="STA"/>
            </com:SurrogateServer>
        </com:ComServer>
    </com:Extension>
    <uap3:Extension Category="windows.appExecutionAlias">
        <uap3:AppExecutionAlias>
            <desktop:ExecutionAlias Alias="YOUR_APPNAME"/>
        </uap3:AppExecutionAlias>
    </uap3:Extension>
</Extensions>
```

{% note warning %}
- Replace `YOUR_APPNAME` with your applications name. (for example `App.exe`)
- Replace All `YOUR_GUID` with your GUID.(`19E348CC-C459-4103-8415-ACB13961B26A`) Follow the instructions below to create a new guide.
{% endnote %}

{% note warning %}
drive menu support (windows 11 22621+)
{% endnote %}

## How to Create GUID?
- 1.Open Visual Studio
- 2.From `Tools` menu Select `Create GUID` option

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/ContextMenuExtensionGUID.png)

- 3.Click `New GUID`, then Change GUID Format to `Registry Format` and Finally Click on `Copy`

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/ContextMenuExtensionGUID2.png)

{% note warning %}
Note that the created `GUID` is surrounded by `{` and `}`. We don't need them, so you have to delete them.
{% endnote %}

for example:

Change this
`{DDED3896-A379-42EA-AB1F-64B0DBD0328D}`
to this:
`DDED3896-A379-42EA-AB1F-64B0DBD0328D`

# Attributes

|Name|Remark|
|-|-|
|File||
|FileName||
|Enabled||
|Title||
|Exe||
|Param||
|Icon||
|IconDark||
|AcceptDirectory||
|AcceptDirectoryFlag||
|AcceptFile||
|AcceptFileFlag||
|AcceptExts||
|AcceptFileRegex||
|AcceptMultipleFilesFlag||
|PathDelimiter||
|ParamForMultipleFiles||
|Index||
|ShowWindowFlag||
|WorkingDirectory||

# Methods

|Name|
|-|
|QueryAllAsync|
|GetMenusFolderAsync|
|SaveAsync|
|ReadAsync|
|RenameMenuFile|
|DeleteAsync|
|IsEnabled|
|EnableAsync|
|BuildToCacheAsync|
|ClearCache|
|ConvertMenuFromJson|
|ConvertMenuToJson|
|OpenMenusFolderAsync|
|OpenMenuFileAsync|
|GetCustomMenuName|
|SetCustomMenuName|
|ClearAllMenus|
|ReplaceMenu|
|RefreshMenuAsync|
|CheckMenuExistsAsync|

# Create a New Menu
Open Your `App.xaml.cs` file and in your `OnLaunched` method, Create a new `ContextMenuItem`.

```cs

using DevWinUI;

protected async override void OnLaunched(LaunchActivatedEventArgs args)
{
    ....
    ContextMenuItem menu = new ContextMenuItem
    {
        Title = "YOUR_MENU_TITLE",
        Param = @"""{path}""",
        AcceptFileFlag = (int)FileMatchFlagEnum.All,
        AcceptDirectoryFlag = (int)(DirectoryMatchFlagEnum.Directory | DirectoryMatchFlagEnum.Background | DirectoryMatchFlagEnum.Desktop),
        AcceptMultipleFilesFlag = (int)FilesMatchFlagEnum.Each,
        Index = 0,
        Enabled = true,
        Icon = ProcessInfoHelper.GetFileVersionInfo().FileName,
        Exe = "YOUR_APPNAME"
    };

    ContextMenuService menuService = new ContextMenuService();
    await menuService.SaveAsync(menu);
}
```

{% note warning %}
- Replace `YOUR_APPNAME` with your applications name. (for example `App.exe`)
- Replace `YOUR_MENU_TITLE` with your menu title. (for example `Open App Here`)
{% endnote %}

## Config menu for Specific Extension
make sure your Type is set to `*`
```xml
<desktop5:ItemType Type="*">
    <desktop5:Verb Id="CustomMenu" Clsid="YOUR_GUID" />
</desktop5:ItemType>
```
then you need to change `AcceptFileFlag` and `AcceptExts`
```cs
AcceptFileFlag = (int)FileMatchFlagEnum.ExtList,
AcceptExts = ".pkg|.pup",
```

# Fix Some Issues
- if you dont see any menu items, make sure that the `ContextMenuCustomHost.dll` file is copied next to the executable file.
We will do this by default and you don't need to do anything, but if you have a problem, First of all, make sure that the `ContextMenuCustomHost.dll` file is copied next to the executable file.
- Restart `Explorer.exe` process

# Set Custom Menu Name
If you have several menus, they will be created as sub-menus, Therefore, you can change the name of the main menu with the following code

```cs
menuService.SetCustomMenuName("MyApp Main Menu");
```

# Examples
there is a lot of examples here, take a look [here](https://github.com/ikas-mc/ContextMenuForWindows11/tree/main/menuSample) to see how properties can be filled.

# More Deatils
see [here](https://github.com/ikas-mc/ContextMenuForWindows11/wiki/Help) for more details.

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/ContextMenu.png)
