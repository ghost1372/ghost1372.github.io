---
title: SearchBar
---

Trigger the search by typing a keyword.

```cs
public class SearchBar : TextBox, ICommandSource
```

# Attributes
|Property|Description|Default Value|Remarks|
|-|-|-|-|
|IsRealTime|Whether to search in real time|false|If it is `true`, the search start event will be automatically triggered every time the input is made|
|Command|Command|||
|CommandParameter|Command Parameters|||
|CommandTarget|Command target element||||

# Additional attributes
|Property|Description|Default Value|Remarks|
|-|-|-|-|
|InfoElement.Placeholder|Placeholder|||
|InfoElement.Necessary|Is it required|false||
|InfoElement.Symbol|Required mark|●||
|InfoElement.ContentHeight|Content Height|30|Available when the title is above|
|InfoElement.MinContentHeight|Minimum content height|30|Available when the title is on the top|
|TitleElement.Title|Title|||
|TitleElement.TitlePlacement|Title Alignment|TitlePlacementType.Top||
|TitleElement.TitleWidth|TitleWidth|120|||

# Event
|Name|Description|
|-|-|
| SearchStarted | Triggered when the search starts |

# Style
|Style|Description|
|-|-|
|SearchBarBaseStyle|Default Style|
|SearchBarExtendBaseStyle|Default extended style|
|SearchBarPlusBaseStyle|The default enhanced style|
|SearchBarExtend|Extended Style|
|SearchBarPlus|Enhance the style|
|SearchBar.Small||
|SearchBarExtend.Small||
|SearchBarPlus.Small||

# Case

```xml
<StackPanel Margin="32" Orientation="Horizontal">
    <StackPanel>
        <hc:SearchBar Command="{Binding SearchCmd}" CommandParameter="{Binding Text,RelativeSource={RelativeSource Self"/>
        <hc:SearchBar Margin="0,32,0,0" IsEnabled="False"/>
        <hc:SearchBar hc:InfoElement.Title="TitleDemoStr1" Margin="0,32,0,0" Style="{StaticResource SearchBarExtend}"/>
        <hc:SearchBar hc:InfoElement.Placeholder="PlsEnterContent" hc:InfoElement.Title="TitleDemoStr1" Margin="0,32,0,0" hc:InfoElement.Necessary="True" Style="{StaticResource SearchBarExtend}"/>
        <hc:SearchBar Width="380" hc:InfoElement.TitleWidth="140" hc:InfoElement.Placeholder="PlsEnterContent" hc:InfoElement.TitlePlacement="Left" hc:InfoElement.Title="TitleDemoStr3" Style="{StaticResource SearchBarExtend}" Margin="0,32,0,0"/>
        <hc:SearchBar Width="380" hc:InfoElement.TitleWidth="140" hc:InfoElement.Placeholder="PlsEnterContent" hc:InfoElement.TitlePlacement="Left" hc:InfoElement.Title="TitleDemoStr3" Style="{StaticResource SearchBarExtend}" hc:InfoElement.Necessary="True" Margin="0,32,0,0"/>
    </StackPanel>
    <StackPanel Margin="32,0,0,0">
        <hc:SearchBar Name="SearchBarCustomVerify" ShowClearButton="True" Style="{StaticResource SearchBarPlus}"/>
        <hc:SearchBar Margin="0,32,0,0" IsEnabled="False" Style="{StaticResource SearchBarPlus}"/>
        <hc:SearchBar ShowClearButton="True" hc:InfoElement.Title="TitleDemoStr1" Margin="0,32,0,0" Style="{StaticResource SearchBarPlus}"/>
        <hc:SearchBar TextType="Mail" hc:InfoElement.Placeholder="PlsEnterEmail" hc:InfoElement.Title="TitleDemoStr1" Margin="0,32,0,0" hc:InfoElement.Necessary="True" Style="{StaticResource SearchBarPlus}"/>
        <hc:SearchBar Width="380" hc:InfoElement.TitleWidth="140" hc:InfoElement.TitlePlacement="Left" hc:InfoElement.Title="TitleDemoStr3" Style="{StaticResource SearchBarPlus}" Margin="0,32,0,0"/>
        <hc:SearchBar ShowClearButton="True" Width="380" hc:InfoElement.TitleWidth="140" hc:InfoElement.Placeholder="PlsEnterContent" hc:InfoElement.TitlePlacement="Left" hc:InfoElement.Title="TitleDemoStr3" Style="{StaticResource SearchBarPlus}" hc:InfoElement.Necessary="True" Margin="0,32,0,0"/>
    </StackPanel>
</StackPanel>
```

# Validation
for validation follow instructions:

bind to ValidationRule
```cs
 <hc:SearchBar hc:InfoElement.Placeholder="Please Enter Email" hc:InfoElement.Title="Title" Margin="0,32,0,0" hc:InfoElement.Necessary="True" Style="{StaticResource SearchBarPlus}">
    <hc:SearchBar.Text>
        <Binding Path="Email1" UpdateSourceTrigger="PropertyChanged">
            <Binding.ValidationRules>
                <hc:RegexRule Type="Mail"/>
            </Binding.ValidationRules>
        </Binding>
    </hc:SearchBar.Text>
</hc:SearchBar>
```

![SearchBar](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Resources/SearchBar.png)