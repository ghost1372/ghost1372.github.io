---
title: SplitButton
---

Provide additional click items on the basis of normal buttons.

```cs
public class SplitButton : ButtonBase
```

# Attributes
|Property|Description|Default Value|Remarks|
|-|-|-|-|
|HitMode|Drop-down box trigger mode|HitMode.Click||
|MaxDropDownHeight|The maximum height of the drop-down box|||
|IsDropDownOpen|Whether the drop-down box is open|false||
|DropDownContent|DropDownContent||||

# Styles
| Style |
| - |
|SplitButtonDefault|
| SplitButtonPrimary |
| SplitButtonDanger |
| SplitButtonWarning |
| SplitButtonInfo |
| SplitButtonSuccess |
|SplitButtonDefault.Small|
| SplitButtonPrimary.Small |
| SplitButtonDanger.Small |
| SplitButtonWarning.Small |
| SplitButtonInfo.Small |
| SplitButtonSuccess.Small |

# Case

```xml
<StackPanel Margin="32" VerticalAlignment="Center">
    <hc:SplitButton Margin="0,0,0,10" Content="Default" Command="{Binding SelectCmd}" CommandParameter="Command0" HorizontalAlignment="Stretch">
        <hc:SplitButton.DropDownContent>
            <StackPanel>
                <MenuItem Header="Title" Command="{Binding SelectCmd}" CommandParameter="Command1"/>
                <MenuItem Header="Title" Command="{Binding SelectCmd}" CommandParameter="Command2"/>
                <MenuItem Header="Title" Command="{Binding SelectCmd}" CommandParameter="Command3"/>
            </StackPanel>
        </hc:SplitButton.DropDownContent>
    </hc:SplitButton>
    <hc:SplitButton Style="{StaticResource SplitButtonPrimary}" Margin="0,0,0,10" Content="Primary" Command="{Binding SelectCmd}" CommandParameter="Command0" HorizontalAlignment="Stretch">
        <hc:SplitButton.DropDownContent>
            <StackPanel>
                <MenuItem Header="Title" Command="{Binding SelectCmd}" CommandParameter="Command1"/>
                <MenuItem Header="Title" Command="{Binding SelectCmd}" CommandParameter="Command2"/>
                <MenuItem Header="Title" Command="{Binding SelectCmd}" CommandParameter="Command3"/>
            </StackPanel>
        </hc:SplitButton.DropDownContent>
    </hc:SplitButton>
    <hc:SplitButton Style="{StaticResource SplitButtonWarning}" Margin="0,0,0,10" Content="Warning" HitMode="Hover" HorizontalAlignment="Stretch">
        <hc:SplitButton.DropDownContent>
            <StackPanel>
                <MenuItem Header="Title" Command="{Binding SelectCmd}" CommandParameter="Command1"/>
                <MenuItem Header="Title" Command="{Binding SelectCmd}" CommandParameter="Command2"/>
                <MenuItem Header="Title" Command="{Binding SelectCmd}" CommandParameter="Command3"/>
            </StackPanel>
        </hc:SplitButton.DropDownContent>
    </hc:SplitButton>
</StackPanel>
```

![SplitButton](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Resources/SplitButton.gif)