---
title: GotoTop
---

You can scroll the `ScrollView` or the control with `ScrollView` to the top position by clicking `GotoTop`.

```cs
public class GotoTop : Button
```

# Attributes
|Property|Description|Default Value|Remarks|
|-|-|-|-|
|Target|`ScrollView` or controls with `ScrollView`|||
|Animated|Whether to use animation|true||
|AnimationTime|Animation duration|0.2s||
|HidingHeight|When `ScrollView` scrolls this height, `GotoTop` will be hidden|0||
|AutoHiding|Whether to automatically hide|true|||

# Case

```xml
<hc:SimplePanel Width="500" Height="400">
    <hc:ScrollViewer Name="ScrollViewerDemo" IsInertiaEnabled="True" Margin="0,10,0,0">
        <Border Height="2000" Margin="8,0">
            <Border.Background>
                <LinearGradientBrush EndPoint="0.5,1" StartPoint="0.5,0">
                    <GradientStop Color="White" Offset="0"/>
                    <GradientStop Color="Black" Offset="1"/>
                </LinearGradientBrush>
            </Border.Background>
        </Border>
    </hc:ScrollViewer>
    <hc:GotoTop Animated="True" AutoHiding="True" AnimationTime="500" Target="{Binding ElementName=ScrollViewerDemo}" HorizontalAlignment="Right" VerticalAlignment="Bottom" Margin="0,0,20,20"/>
</hc:SimplePanel>
```
![GotoTop](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Resources/GoToTop.gif)