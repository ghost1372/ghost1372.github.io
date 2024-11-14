---
title: Helpers
---

{% note info %}
Helpers Located in the **HandyControl.Tools** namespace.
```cs
Using HandyControl.Tools;
```
{% endnote %}

# GlobalDataHelper
{% note warning %}
**GlobalDataHelper** only Available in .NetCore >= 3.0, so you cant use it in .Net Framework
{% endnote %}
with GlobalDataHelper you can save and read your application settings object to a json file

Example:

first of all you need to create a class and inherit from the `GlobalDataHelper`, Then create your properties.

``` CS
public class AppConfig : GlobalDataHelper
{
    public string Name { get; set; }
    public string Password { get; set; } = "pass";
    public bool IsHash { get; set; } = true;

    public override string FileName { get; set; }
    public override JsonSerializerOptions JsonSerializerOptions { get; set; }
    public override int FileVersion { get; set; }
}
```

Note that there are 3 overriding properties:
By default, the Json file name is `AppConfig.json` and will be placed next to the executable file, So if you want to change the name and location of the file, use the FileName property:

```cs
public override string FileName { get; set; } = "setting.json";
```
If you have made major changes to your settings file and you get an error when running the program, you can use the File versioning, if you change the version number, the previous settings file will be deleted, and the new settings will be replaced.

```cs
public override int FileVersion { get; set; } = 2;
```

## Read/Write Settings

for reading values

``` CS
var settings = GlobalDataHelper.Load<AppConfig>();
MessageBox.Show(settings.Name);
```
if you prefer async:

``` CS
var settings = await GlobalDataHelper.LoadAsync<AppConfig>();
MessageBox.Show(settings.Name);
```

for writing values
``` CS
var settings = GlobalDataHelper.Load<AppConfig>();
settings.IsHash = false;
settings.Name = "Mahdi";
settings.Save();
```
if you prefer async:
``` CS
var settings = await GlobalDataHelper.LoadAsync<AppConfig>();
settings.IsHash = false;
settings.Name = "Mahdi";
await settings.SaveAsync();
```

# CryptographyHelper 

some method for generate hash and encrypt files

## Generate Hash
### MD5
``` CS
string text = CryptographyHelper.GenerateMD5("mahdi");
// result = F9C24B8F961D48841A9838CCA5274D8D
```

### VerifyMD5
``` CS
bool verify = CryptographyHelper.VerifyMD5("F9C24B8F961D48841A9838CCA5274D8D", "mahdi");
```

### SHA256
``` CS
string text = CryptographyHelper.GenerateSHA256("mahdi");
// result = 2e0af263c88c69ecc23a51a76b7a2442ed6a9dff080f275a27ec486d1a0e0148
```

### SHA256 for File
``` CS
string text = CryptographyHelper.GenerateSHA256FromFile(@"D:\test.zip");
// result = 40aff63c88c69ecc23a51a76b7a2442ed6a9dff080f275a27ec486d1a0e0135
```

### VerifySHA256
``` CS
bool verify = CryptographyHelper.VerifySHA256("2e0af263c88c69ecc23a51a76b7a2442ed6a9dff080f275a27ec486d1a0e0148", "mahdi");
```

## Encrypt & Decrypt Strings
### AES

``` CS
string enc = CryptographyHelper.EncryptStringAES("Mahdi", "password");

string dec = CryptographyHelper.DecryptStringAES("G7Jlxs4gb98msDUOIdN1iA==", "password");
```

### Base64
``` CS
string enc = CryptographyHelper.EncryptStringBase64("Mahdi");

string dec = CryptographyHelper.DecryptStringBase64("TWFoZGk=");
```

### RSA
first Create your public and private key 
```cs
var keys = CryptographyHelper.GenerateRSAKey();
```
Then encrypt and decrypt strings
``` CS
string enc = CryptographyHelper.EncryptStringRSA("Mahdi", keys.PublicKey);

string dec = CryptographyHelper.DecryptStringRSA(enc, keys.PrivateKey);
```

## Encrypt & Decrypt Files

### AES
``` CS
CryptographyHelper.EncryptFileAESAsync(sourcefile, destination, "password");

CryptographyHelper.DecryptFileAESAsync(sourcefile, destination, "password");
```

### RSA
first Create your public and private key 
```cs
var keys = CryptographyHelper.GenerateRSAKey();
```
Then encrypt and decrypt files
``` CS
CryptographyHelper.EncryptFileRSAAsync(inputFilePath, outputFilePath, keys.PublicKey);

CryptographyHelper.DecryptFileRSAAsync(inputFilePath, outputFilePath, keys.PrivateKey);
```

## Read and Write RSA Key
We have methods for reading and writing public and private keys from/to files

``` CS
// export public key to file
ExportPublicKeyToFile("publicKey.public", publicKey);

// read public key from file
var pubKey = ReadPublicKey("publicKey.public");

// export private key to file
ExportPrivateKeyToFile("privateKey.enc", privateKey, password);

// read private key from file
var privKey = ReadPrivateKey("privateKey.enc", password);

// export public and private key to file
ExportPublicAndPrivateKeyToFile("publicKey.public", "privateKey.enc", RSAKey, password);

// read public and private key from file
var rsaKey = ReadPublicAndPrivateKey("publicKey.public", "privateKey.enc", password);
```

# INIHelper

InIHelper class is for working with ini file in simple way.

## Add Value 
{% note info %}
    you can use default **section** and **path**
{% endnote %}

``` CS
InIHelper.AddValue("key1", "test1");
InIHelper.AddValue("key2", "test2");
InIHelper.AddValue("key3", "test3", "mySection");
InIHelper.AddValue("file4", "test4", "mySection");
InIHelper.AddValue("file5", "test5", "mySection");
InIHelper.AddValue("file6", "test6", "mySection2", @"D:\config.ini");
```

## Read Value
``` CS
MessageBox.Info(InIHelper.ReadValue("key1"));
// OR
MessageBox.Info(InIHelper.ReadValue("key3", "mySection"));
// OR
MessageBox.Info(InIHelper.ReadValue("key3", "mySection", @"D:\config.ini"));
```

## Delete Key 

{% note info %}
you can delete a **key** or **section**
{% endnote %}
``` CS
InIHelper.DeleteKey("key4", "mySection");
InIHelper.DeleteSection("mySection");
InIHelper.DeleteKey("key4", "mySection", @"D:\config.ini");
```

## Exist Key 

{% note info %}
you can check if a key exist or not
{% endnote %}
``` CS
MessageBox.Info(InIHelper.IsKeyExists("key4", "mySection"));
```

# RegistryHelper
RegistryHelper class is for working with windows Registry

## Add Key 

{% note info %}
value can be everything (bool, int, string,...), default RegistryKey is CurrentUser for other type you need Admin Access
{% endnote %}

``` CS
RegistryHelper.AddOrUpdateKey("myKey", "myFolder", value);
//OR
RegistryHelper.AddOrUpdateKey("myKey2", "myFolder", "test", Registry.LocalMachine);
```

## Get Key
{% note info %}
you can cast value to any type you want
{% endnote %}
``` CS
RegistryHelper.GetValue<bool>("myKey", "myFolder");
RegistryHelper.GetValue<string>("myKey", "myFolder", Registry.LocalMachine);
```

## Delete Key
{% note info %}
default value for IsDeleteSubKey is False
{% endnote %}
``` CS
bool result = RegistryHelper.DeleteKey("myKey", "myFolder");
// OR
bool result = RegistryHelper.DeleteKey("myKey", "myFolder", True);
```

## Delete SubKey Tree
``` CS
bool result = RegistryHelper.DeleteSubKeyTree("subkey", "myFolder");
// OR
bool result = RegistryHelper.DeleteSubKeyTree("subkey", "myFolder", Registry.LocalMachine);
```

# UpdateHelper
you can use UpdateHelper for checking application updates from github release page

## Methods
| Method | Description |
|-|-|
| CheckUpdateAsync | Use the GitHab Release Page to check if the update is available |
| CheckUpdate | Use the GitHab Release Page to check if the update is available |

first you must create a new release tag in [github repository](https://github.com/ghost1372/HandyControls/releases/new):

{% note info %}
tag version must be in this format : 1.0.0.0
{% endnote %}

now we can check for update with github username and github repository
``` CS
var ver = await UpdateHelper.CheckUpdateAsync("ghost1372", "HandyControls");
// var ver = UpdateHelper.CheckUpdate("ghost1372", "HandyControls");
if(ver.IsExistNewVersion)
{
    Growl.InfoGlobal("New Version Found!");
    lblUrl2.Text = ver.ReleaseUrl;
    lbl1.Text = ver.CreatedAt.ToString();
    lbl2.Text = ver.PublishedAt.ToString();
    
    //Asset is List so maybe there is more than one file you can use forech or increase index
    lbl3.Text = ver.Assets[0].Url;
    lbl4.Text = ver.IsPreRelease.ToString();
    lbl5.Text = ver.Assets[0].Size.ToString();
    lbl6.Text = ver.Version;
    txtChangelog2.Text = ver.Changelog;
}
else
{
    Growl.ErrorGlobal("you are using latest version");
}
```

# ApplicationHelper

## IsSingleInstance
you can use IsSingleInstance for Run only one Instance of the program at a time.
This method returns a true or false value If the value is true, it means that a Instance of the program is running and automatically closes the program and Brings Window To Front

Example:
``` CS
if(!ApplicationHelper.IsSingleInstance())
{
    MessageBox("Another Instance Already Running...");
}
```

If for any reason the method does not work properly, specify the name of the program manually

```cs
ApplicationHelper.IsSingleInstance("myApplication");
```

## IsAdministrator
Check if Running Application runs with admin access or not

```cs
if(ApplicationHelper.IsAdministrator())
{
    MessageBox("Your application is running in admin mode");
}
```

## BringWindowToFront
You can use this method to find and focus MainWindow that is running

```cs
ApplicationHelper.BringWindowToFront();
```

## StartProfileOptimization
Faster application execution at startup by caching

```cs
ApplicationHelper.StartProfileOptimization();

// OR Change Default Cache Path
// var CachePath = $"{AppDomain.CurrentDomain.BaseDirectory}AppCache"
// ApplicationHelper.StartProfileOptimization(CachePath);
```

{% note warning %}
**StartProfileOptimization** is not Available in **.Net 4.0** 
{% endnote %}

## IsConnectedToInternet
Check if the internet is connected or not

```cs
bool IsConnected = ApplicationHelper.IsConnectedToInternet();
```

## GetAbsoluteUri

Get Absolute Uri path
```cs
var uri = ApplicationHelper.GetAbsoluteUri("myApp", @"Resource/Theme.xaml");
// result => pack://application:,,,/myApp;component/Resource/Theme.xaml
```

## RegisterContextMenuToDirectory
Register Context Menu in Windows Directory 
```cs
string command = $"\"{Process.GetCurrentProcess().MainModule.FileName}\" \"%1\"";
ApplicationHelper.RegisterContextMenuToDirectory("MyApp", command);
```

for UnRegister Context Menu from Windows Directory
```cs
bool result = ApplicationHelper.UnRegisterContextMenuFromDirectory("MyApp");
```

## RegisterContextMenuToFile
Register Context Menu in Windows File 
```cs
string command = $"\"{Process.GetCurrentProcess().MainModule.FileName}\" \"%1\"";
ApplicationHelper.RegisterContextMenuToFile("MyApp", command);
```

for UnRegister Context Menu from Windows File
```cs
ApplicationHelper.UnRegisterContextMenuFromFile("MyApp");
```

## RegisterContextMenuToBackground
Register Context Menu in Windows Background 
```cs
string command = $"\"{Process.GetCurrentProcess().MainModule.FileName}\" \"%1\"";
ApplicationHelper.RegisterContextMenuToBackground("MyApp", command);
```

for UnRegister Context Menu from Windows File
```cs
ApplicationHelper.UnRegisterContextMenuFromBackground("MyApp");
```

## RegisterContextMenuToDrive
Register Context Menu in Windows Background 
```cs
string command = $"\"{Process.GetCurrentProcess().MainModule.FileName}\" \"%1\"";
ApplicationHelper.RegisterContextMenuToDrive("MyApp", command);
```

for UnRegister Context Menu from Windows File
```cs
ApplicationHelper.UnRegisterContextMenuFromDrive("MyApp");
```

{% note info %}
All of the above methods have an additional method, That contain `Cascade`
Use these methods when you want to create a Cascade Context Menu.
{% endnote %}

{% note warning %}
Registring and Unregsitring 
Registering and UnRegistering ContextMenu To Drive and `Cascade` Mode requires Administrator Access.
{% endnote %}

## Restart

Restart Application
```cs
ApplicationHelper.Restart();

// Or Restart as Administrator
// ApplicationHelper.Restart(true);
```

## GetExecutablePathNative
this is a P/Invoke Method to get current application executable path, this method work fine in .net framework and .net core in portable and publish mode release.

```cs
var path = ApplicationHelper.GetExecutablePathNative();
```

## GetExecutablePath
this is a Assembly based Method to get current application executable path, this method work fine in .net framework and .net core in portable and publish mode release. for .net 5.0, `GetExecutablePathNative` method is used in this method.

```cs
var path = ApplicationHelper.GetExecutablePath();
```

## SendMessageToAnotherProcess and ListenToReceiveMessageFromAnotherProcess

if you want to send message between different applications you can use this native method

```cs
ApplicationHelper.SendMessageToAnotherProcess("MainWindowTitle", "Message");
```

now You must register a listener to receive the message

```cs
private void MainWindow_Loaded(object sender, RoutedEventArgs e)
{
    ApplicationHelper.ListenToReceiveMessageFromAnotherProcess(this, message =>
    {
        MessageBox.Show(message);
    });
}
```

# ColorHelper

## GetColorFromBrush
Get Color from LinearGradientBrush, SolidColorBrush and Brush
```cs
var color = ApplicationHelper.GetColorFromBrush(brush);
```

## GetColorFromString
Creates a Color from a XAML color string.
```cs
var color = GetColorFromString("#3260a8");
```

## GetHexFromColor
Get Hex Code from Color
```cs
var color = GetHexFromColor(color);
```

## GetHexFromBrush
Get Hex Code from Brush
```cs
var color = GetHexFromBrush(brush);
```

# OSVersionHelper
get os version

```cs
OSVersionHelper.GetOSVersion();
var win10_1909 = OSVersionHelper.IsWindows10_1909_OrGreater();
```

## Methods
|Methods|
|-|
|IsWindowsNT|
|IsWindows7|
|IsWindows7_OrGreater|
|IsWindows8|
|IsWindows8_OrGreater|
|IsWindows81|
|IsWindows81_OrGreater|
|IsWindows10|
|IsWindows10_OrGreater|
|IsWindows10_1507|
|IsWindows10_1507_OrGreater|
|IsWindows10_1511|
|IsWindows10_1511_OrGreater|
|IsWindows10_1607|
|IsWindows10_1607_OrGreater|
|IsWindows10_1703|
|IsWindows10_1703_OrGreater|
|IsWindows10_1709|
|IsWindows10_1709_OrGreater|
|IsWindows10_1803|
|IsWindows10_1803_OrGreater|
|IsWindows10_1809|
|IsWindows10_1809_OrGreater|
|IsWindows10_1903|
|IsWindows10_1903_OrGreater|
|IsWindows10_1909|
|IsWindows10_1909_OrGreater|
|IsWindows10_2004|
|IsWindows10_2004_OrGreater|
|IsWindows10_2009|
|IsWindows10_2009_OrGreater|

# GenericCompare

Check if there is an specific item in the collection or not

```cs
var model = new Model
{
    Id = 1,
    Name = "Test"
};
var contain = DataList.Contains(model, new GenericCompare<Model>(x=>x.Id)); 
```

# DispatcherHelper

Run codes in Main Thread

```cs
DispatcherHelper.RunOnMainThread(() =>
{
    //action
});
```

# ConvertHelper

## BytesToBitmapImage
convert `byte[]` to `BitmapImage`

```cs
var bitmap = BytesToBitmapImage(bytes);
```

## BitmapImageToBytes
convert `BitmapImage` to `byte[]`

```cs
var bytes = BitmapImageToBytes(bitmap);
```

## BitmapImageToBase64
convert `BitmapImage` to `Base64`

```cs
var base64 = BitmapImageToBase64(bitmap);
```

## Base64ToBitmapImage
convert `Base64` to `BitmapImage`

```cs
var bitmap = Base64ToBitmapImage(base64);
```

## ToFileSize

Translate numeric file size in bytes to a human-readable shorter string format.

```cs
string fileSize = ToFileSize(564654644);
//Result: 538/5 MB
```

# XmlHelper

Serialize and Deserialize properties of a class to xml file.

```cs
Person person = new Person() { Name = "Mahdi", Age = 27 };
XmlHelper.Serialize<Person>(person, @"output.xml");

Person person2 = new Person();
person2 = XmlHelper.Deserialize<Person>(@"output.xml");

Console.WriteLine("Name: {0}", person2.Name);
Console.WriteLine("Age: {0}", person2.Age);
```

# WindowHelper

## DetermineIfInLightThemeMode

you can determine if windows theme is light or Dark

```cs
bool isLight = WindowHelper.DetermineIfInLightThemeMode();
```

# MicaHelper

## ApplyMicaEffect
You can enable mica material for Windows
{% note info %}
You do not need to use this helper to activate mica on hc:Window, hc:GlowWindow and BlurWindow, Mica is available on these windows by default through `ApplyBackdropMaterial` Property.
{% endnote %}

Use this helper for `System.Windows.Window` or any other type

{% note warning %}
Mica only works on Windows 11 and above
{% endnote %}

1.First we need to Create a WindowChrome and then change the background to `Transparent`
```cs
public MainWindow()
{
    var chrome = new WindowChrome
    {
        CornerRadius = new CornerRadius(),
        ResizeBorderThickness = new Thickness(8),
        GlassFrameThickness = new Thickness(-1),
        NonClientFrameEdges = NonClientFrameEdges.None,
        UseAeroCaptionButtons = false
    };
    WindowChrome.SetWindowChrome(this, chrome);
    InitializeComponent();
    this.Background = Brushes.Transparent;
}
```

2. Now we can Activate mica 

```cs
MicaHelper.ApplyMicaEffect(this);
```
or you can use another method with support dark mode
```cs
MicaHelper.ApplyMicaEffect(handle, isDark);
```

{% note warning %}
If your Windows uses a dark theme, you need to set `isDark` to `true`
{% endnote %}

if you need to remove Mica you can use RemoveMicaEffect method

```cs
MicaHelper.RemoveMicaEffect();
// OR
MicaHelper.RemoveMicaEffect(handle);
```

if you want to know that mica effect is applied you can use:
```cs
bool isApplied = MicaHelper.IsMicaEffectApplied;
```

# TaskbarHelper

You can control your app Taskbar Progressbar with this helper class

for changing Progressbar state:

```cs
TaskbarHelper.SetProgressState(handle, TaskbarStates.Error);
```

for changing Progressbar value:

```cs
TaskbarHelper.SetProgressValue(handle, 10, 100);
```