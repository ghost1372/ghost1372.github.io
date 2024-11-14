---
title: TitleElement
---

# Attributes

| Name | Use |
| -------------- | ------------ |
| Title | Title Information |
| Background | Title Background Color |
| Foreground | Title Font Color |
| BorderBrush | Title Border Color |
| TitlePlacement | Title Alignment |
| TitleWidth | Title Width |
| MarginOnTheLeft | Margin On The Left |
|Padding||
|MinHeight||
|MinWidth||
|MarginOnTheTop||

# Use Cases

## Title

```xml
     <hc:TextBox hc:TitleElement.Title="Title Information"
                 Margin="10,10"></hc:TextBox>
```

![TitleElement.Title](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/attach/TitleElement.Title.png)

## TitlePlacement

```xml
     <!--The title is on the top side -->
     <hc:TextBox hc:TitleElement.Title="Title Information"
              Hc:TitleElement.TitlePlacement="Top"
              Margin="10,10"></hc:TextBox>
     <!--The title is on the left -->
     <hc:TextBox hc:TitleElement.Title="Title Information"
              Hc:TitleElement.TitlePlacement="Left"
              Margin="10,10"></hc:TextBox>
```

![TitleElement.TitlePlacement](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/attach/TitleElement.TitlePlacement.png)

## TitleWidth

```xml
         <!--Set TitleWidth to Auto-->
         <hc:TextBox hc:TitleElement.Title="Title Information"
              Hc:TitleElement.TitlePlacement="Left"
              Hc:TitleElement.TitleWidth="Auto"
              Margin="10,10"></hc:TextBox>
         <!--Set TitleWidth to a specific value -->
         <hc:TextBox hc:TitleElement.Title="Title Information"
              Hc:TitleElement.TitlePlacement="Left"
              Hc:TitleElement.TitleWidth="60"
              Margin="10,10"></hc:TextBox>
```

![TitleElement.TitleWidth](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/attach/TitleElement.TitleWidth.png)