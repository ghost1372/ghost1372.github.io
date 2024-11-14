---
title: Grid
---

Wpf implementation of grid system, web version can refer to [element/layout](https://element.eleme.cn/#/en-US/component/layout)

```cs
public class Row : Panel
```

```cs
public class Col : ContentControl
```

# Attributes

## Row
|Property|Description|Default Value|Remarks|
|-|-|-|-|
|Gutter|Grid Interval|0|||

## Col column
|Property|Description|Default Value|Remarks|
|-|-|-|-|
|Layout|Layout Method|||
|Offset|The number of intervals on the left side of the grid|0||
|Span|Number of columns occupied by the grid|24||
|IsFixed|Is the column fixed|false|||

# Case

```xml
<StackPanel Margin="32">
    <TextBlock Text="{ex:Lang Key={x:Static langs:LangKeys.BasicLayout}}" Style="{StaticResource TextBlockLargeBold}" HorizontalAlignment="Left"/>
    <hc:Row Margin="0,20,0,0">
        <hc:Col Span="24">
            <Border Background="{DynamicResource SecondaryBorderBrush}" Height="36" CornerRadius="4"/>
        </hc:Col>
    </hc:Row>
    <hc:Row Margin="0,20,0,0">
        <hc:Col Span="12">
            <Border Background="{DynamicResource BorderBrush}" Height="36" CornerRadius="4"/>
        </hc:Col>
        <hc:Col Span="12">
            <Border Background="{DynamicResource SecondaryBorderBrush}" Height="36" CornerRadius="4"/>
        </hc:Col>
    </hc:Row>
    <hc:Row Margin="0,20,0,0">
        <hc:Col Span="8">
            <Border Background="{DynamicResource BorderBrush}" Height="36" CornerRadius="4"/>
        </hc:Col>
        <hc:Col Span="8">
            <Border Background="{DynamicResource SecondaryBorderBrush}" Height="36" CornerRadius="4"/>
        </hc:Col>
        <hc:Col Span="8">
            <Border Background="{DynamicResource BorderBrush}" Height="36" CornerRadius="4"/>
        </hc:Col>
    </hc:Row>
    <hc:Row Margin="0,20,0,0">
        <hc:Col Span="6">
            <Border Background="{DynamicResource BorderBrush}" Height="36" CornerRadius="4"/>
        </hc:Col>
        <hc:Col Span="6">
            <Border Background="{DynamicResource SecondaryBorderBrush}" Height="36" CornerRadius="4"/>
        </hc:Col>
        <hc:Col Span="6">
            <Border Background="{DynamicResource BorderBrush}" Height="36" CornerRadius="4"/>
        </hc:Col>
        <hc:Col Span="6">
            <Border Background="{DynamicResource SecondaryBorderBrush}" Height="36" CornerRadius="4"/>
        </hc:Col>
    </hc:Row>
    <hc:Row Margin="0,20,0,0">
        <hc:Col Span="4">
            <Border Background="{DynamicResource BorderBrush}" Height="36" CornerRadius="4"/>
        </hc:Col>
        <hc:Col Span="4">
            <Border Background="{DynamicResource SecondaryBorderBrush}" Height="36" CornerRadius="4"/>
        </hc:Col>
        <hc:Col Span="4">
            <Border Background="{DynamicResource BorderBrush}" Height="36" CornerRadius="4"/>
        </hc:Col>
        <hc:Col Span="4">
            <Border Background="{DynamicResource SecondaryBorderBrush}" Height="36" CornerRadius="4"/>
        </hc:Col>
        <hc:Col Span="4">
            <Border Background="{DynamicResource BorderBrush}" Height="36" CornerRadius="4"/>
        </hc:Col>
        <hc:Col Span="4">
            <Border Background="{DynamicResource SecondaryBorderBrush}" Height="36" CornerRadius="4"/>
        </hc:Col>
    </hc:Row>
    <TextBlock Text="{ex:Lang Key={x:Static langs:LangKeys.ColumnSpacing}}" Margin="0,32,0,0" Style="{StaticResource TextBlockLargeBold}" HorizontalAlignment="Left"/>
    <hc:Row Margin="0,20,0,0" Gutter="20">
        <hc:Col Span="6">
            <Border Background="{DynamicResource BorderBrush}" Height="36" CornerRadius="4"/>
        </hc:Col>
        <hc:Col Span="6">
            <Border Background="{DynamicResource BorderBrush}" Height="36" CornerRadius="4"/>
        </hc:Col>
        <hc:Col Span="6">
            <Border Background="{DynamicResource BorderBrush}" Height="36" CornerRadius="4"/>
        </hc:Col>
        <hc:Col Span="6">
            <Border Background="{DynamicResource BorderBrush}" Height="36" CornerRadius="4"/>
        </hc:Col>
    </hc:Row>
    <TextBlock Text="{ex:Lang Key={x:Static langs:LangKeys.HybridLayout}}" Margin="0,32,0,0" Style="{StaticResource TextBlockLargeBold}" HorizontalAlignment="Left"/>
    <hc:Row Margin="0,20,0,0" Gutter="20">
        <hc:Col Span="16">
            <Border Background="{DynamicResource BorderBrush}" Height="36" CornerRadius="4"/>
        </hc:Col>
        <hc:Col Span="8">
            <Border Background="{DynamicResource BorderBrush}" Height="36" CornerRadius="4"/>
        </hc:Col>
    </hc:Row>
    <hc:Row Margin="0,20,0,0" Gutter="20">
        <hc:Col Span="8">
            <Border Background="{DynamicResource BorderBrush}" Height="36" CornerRadius="4"/>
        </hc:Col>
        <hc:Col Span="8">
            <Border Background="{DynamicResource BorderBrush}" Height="36" CornerRadius="4"/>
        </hc:Col>
        <hc:Col Span="4">
            <Border Background="{DynamicResource BorderBrush}" Height="36" CornerRadius="4"/>
        </hc:Col>
        <hc:Col Span="4">
            <Border Background="{DynamicResource BorderBrush}" Height="36" CornerRadius="4"/>
        </hc:Col>
    </hc:Row>
    <hc:Row Margin="0,20,0,0" Gutter="20">
        <hc:Col Span="4">
            <Border Background="{DynamicResource BorderBrush}" Height="36" CornerRadius="4"/>
        </hc:Col>
        <hc:Col Span="16">
            <Border Background="{DynamicResource BorderBrush}" Height="36" CornerRadius="4"/>
        </hc:Col>
        <hc:Col Span="4">
            <Border Background="{DynamicResource BorderBrush}" Height="36" CornerRadius="4"/>
        </hc:Col>
    </hc:Row>
    <TextBlock Text="{ex:Lang Key={x:Static langs:LangKeys.ColumnOffset}}" Margin="0,32,0,0" Style="{StaticResource TextBlockLargeBold}" HorizontalAlignment="Left"/>
    <hc:Row Margin="0,20,0,0" Gutter="20">
        <hc:Col Span="6">
            <Border Background="{DynamicResource BorderBrush}" Height="36" CornerRadius="4"/>
        </hc:Col>
        <hc:Col Span="6" Offset="6">
            <Border Background="{DynamicResource BorderBrush}" Height="36" CornerRadius="4"/>
        </hc:Col>
    </hc:Row>
    <hc:Row Margin="0,20,0,0" Gutter="20">
        <hc:Col Span="6" Offset="6">
            <Border Background="{DynamicResource BorderBrush}" Height="36" CornerRadius="4"/>
        </hc:Col>
        <hc:Col Span="6" Offset="6">
            <Border Background="{DynamicResource BorderBrush}" Height="36" CornerRadius="4"/>
        </hc:Col>
    </hc:Row>
    <hc:Row Margin="0,20,0,0" Gutter="20">
        <hc:Col Span="12" Offset="6">
            <Border Background="{DynamicResource BorderBrush}" Height="36" CornerRadius="4"/>
        </hc:Col>
    </hc:Row>
    <TextBlock Text="{ex:Lang Key={x:Static langs:LangKeys.ResponsiveLayout}}" Margin="0,32,0,0" Style="{StaticResource TextBlockLargeBold}" HorizontalAlignment="Left"/>
    <hc:Row Margin="0,20,0,0" Gutter="10">
        <hc:Col Layout="8,6,4,3,1">
            <Border Background="{DynamicResource BorderBrush}" Height="36" CornerRadius="4"/>
        </hc:Col>
        <hc:Col Layout="4 6 8 9 11">
            <Border Background="{DynamicResource SecondaryBorderBrush}" Height="36" CornerRadius="4"/>
        </hc:Col>
        <hc:Col Layout="{extension:ColLayout Xs=4, Sm=6, Md=8, Lg=9, Xl=11}">
            <Border Background="{DynamicResource BorderBrush}" Height="36" CornerRadius="4"/>
        </hc:Col>
        <hc:Col Layout="{extension:ColLayout Xs=8, Sm=6, Md=4, Lg=3, Xl=1}">
            <Border Background="{DynamicResource SecondaryBorderBrush}" Height="36" CornerRadius="4"/>
        </hc:Col>
    </hc:Row>
</StackPanel>
```
![Grid](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Resources/Grid.gif)

{% note info %}
3 ways to write `Layout` in xaml:
Layout="{extension:ColLayout Xs=4, Sm=6, Md=8, Lg=9, Xl=11}"
Layout="4,6,8,9,11"
Layout="4 6 8 9 11"
{% endnote %}