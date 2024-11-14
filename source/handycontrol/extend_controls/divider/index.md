---
title: Divider
---

The dividing line that separates the content.

```cs
public class Divider : Control
```

# Attributes
|Property|Description|Default Value|Remarks|
|-|-|-|-|
|Content|Content|||
|Orientation|Orientation|||
|ContentTemplate|Content Template|||
|ContentStringFormat|Content String Format|||
|ContentTemplateSelector|Content Template|||
|LineStroke|Dividing line color|||
|LineStrokeThickness|Dividing line thickness|1||
|LineStrokeDashArray|Dividing line gap||||

# Case
```xml
<WrapPanel Margin="16">
    <StackPanel Margin="16" Width="300">
        <hc:Divider/>
        <hc:Divider Content="{ex:Lang Key={x:Static langs:LangKeys.Title}}"/>
        <hc:Divider Content="{ex:Lang Key={x:Static langs:LangKeys.Title}}" Padding="10,0"/>
        <hc:Divider LineStrokeThickness="2" LineStroke="{DynamicResource DarkPrimaryBrush}"/>
        <hc:Divider LineStrokeDashArray="2,2"/>
    </StackPanel>
    <StackPanel Margin="16" Width="300">
        <hc:Divider Content="{ex:Lang Key={x:Static langs:LangKeys.Title}}" HorizontalContentAlignment="Left"/>
        <hc:Divider Content="{ex:Lang Key={x:Static langs:LangKeys.Title}}" Padding="10,0"  HorizontalContentAlignment="Right"/>
        <StackPanel Orientation="Horizontal">
            <Button Content="{ex:Lang Key={x:Static langs:LangKeys.Button}}"/>
            <hc:Divider Orientation="Vertical" MaxHeight="16"/>
            <Button Content="{ex:Lang Key={x:Static langs:LangKeys.Button}}"/>
            <hc:Divider Orientation="Vertical" MaxHeight="16"/>
            <Button Content="{ex:Lang Key={x:Static langs:LangKeys.Button}}"/>
        </StackPanel>
        <StackPanel Orientation="Horizontal" Margin="0,16,0,0">
            <Button Content="{ex:Lang Key={x:Static langs:LangKeys.Button}}"/>
            <hc:Divider LineStrokeThickness="2" Orientation="Vertical" MaxHeight="16"/>
            <Button Content="{ex:Lang Key={x:Static langs:LangKeys.Button}}"/>
            <hc:Divider LineStrokeThickness="2" Orientation="Vertical" MaxHeight="16"/>
            <Button Content="{ex:Lang Key={x:Static langs:LangKeys.Button}}"/>
        </StackPanel>
        <StackPanel Orientation="Horizontal" Margin="0,16,0,0">
            <Button Content="{ex:Lang Key={x:Static langs:LangKeys.Button}}"/>
            <hc:Divider LineStrokeThickness="2" LineStroke="{DynamicResource DarkPrimaryBrush}" Orientation="Vertical" MaxHeight="16"/>
            <Button Content="{ex:Lang Key={x:Static langs:LangKeys.Button}}"/>
            <hc:Divider LineStrokeThickness="2" LineStroke="{DynamicResource DarkPrimaryBrush}" Orientation="Vertical" MaxHeight="16"/>
            <Button Content="{ex:Lang Key={x:Static langs:LangKeys.Button}}"/>
        </StackPanel>
    </StackPanel>
</WrapPanel>
```
![Divider](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Resources/Divider.png)