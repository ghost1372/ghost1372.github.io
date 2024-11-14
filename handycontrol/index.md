---
title: Welcome to HandyControl
---

HandyControl is a WPF control library that rewrites almost all native styles and includes more than 80 custom controls (increasingly).

# Requirements

![dotnet-require](https://img.shields.io/badge/.net-%3E%3D4.0-blue.svg) ![os-require](https://img.shields.io/badge/OS-%3E%3Dwin7-brightgreen) ![IDE-require](https://img.shields.io/badge/IDE-vs2019-blue.svg) ![csharp-require](https://img.shields.io/badge/C%23-8.0-blue.svg)

# Download

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


{% note warning %}
Github is generally updated every day and is relatively unsuitable for production.
{% endnote %}

# Project Structure Introduction

## the whole frame

After cloning the source code from Github, go to the src folder. The folder structure is as follows:
![Project_Structure](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/Project_Structure.png)

`Net_GE45` means that the .Net version is greater than or equal to 4.5.

The `Shared` folder is used to store the code of the shared project.

The five folders in the figure each contain two subfolders, for example, two shared subfolders in Shared:
![Sub_Folder_Structure](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/Sub_Folder_Structure.png)

They store the source code of the control and the sample source of the control.

## Source structure

We use HandyControl.sln as an example to illustrate, use VS2019 to open the solution:
![Net_GE45_Structure](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/Net_GE45_Structure.png)

If you want to start the example and see the effect of the control, please use HandyControlDemo_[specified item type] as the startup item.

As shown in the figure, HandyControlDemo_Net_GE45 has been used as the startup item.

Most of the public source code is in the Shared folder, and some of the code that needs to be customized for a particular project type is proposed to be placed in its own folder.

The HandyControl source code (mainly in HandyControl_Shared) mainly contains 7 folders, and their descriptions are as follows:

| Name | Use |
|-|-|
| Controls | Background interaction logic with all controls |
| Data | Basic data definitions required by the control library |
| Expression | Extracted from Microsoft.Expression.Drawing |
| Interactivity | Extracted from Microsoft.Expression.Interactions & System.Windows.Interactivity and made some modifications |
| Properties | Contains control library properties and language packs |
| Themes | Contains all xaml definitions for the control library |
| Tools | Mainly contains the help methods and extension methods required by the control library |

{% note info %}
Each control in Controls can generally find the corresponding xaml definition in Themes.
{% endnote %}

# Compile source code

{% note warning %}
Please confirm that your development environment meets the requirements before compiling.
- Visual Studio 2019
- .Net greater than or equal to `5.0.100` 
{% endnote %}

Open HandyControl.sln and select the specified environment to compile in the Solution Configuration drop-down box:
![Build_Config](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/Build_Config.png)

## Compile source code with Powershell

Go to Build folder and open Powershell here, then execute this command

{% code %}
.\build.ps1
{% endcode %}