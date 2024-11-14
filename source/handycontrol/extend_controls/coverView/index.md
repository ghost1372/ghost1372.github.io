---
title: CoverView
---

Copy the album view of Itunes.

```cs
public class CoverView : RegularItemsControl
```

# Attributes
|Property|Description|Default Value|Remarks|
|-|-|-|-|
|CoverViewContentStyle|CoverViewContentStyle|||
|ItemContentHeight|Item ContentHeight|300||
|ItemContentHeightFixed|Is the item content height fixed|true||
|ItemHeaderTemplate|Item Header Template|||
|SourceContent|Source Content (Current Content)|||
|Groups|Number of Groups|||
|ItemWidth|Specifies the width of the item|||
|ItemHeight|Specifies the Height of the item|||
|ItemSource|if you want to bind your data to ItemsSource|||
|ContentHeight|Height of the CoverViewContent|||
|ShowContent|Show or Hide Content when selected items, Only Available in [Custom Version](https://github.com/ghost1372/handyControls)|||

# Case

```xml
<hc:CoverView Margin="27" Width="880" Height="432" ItemWidth="160" ItemHeight="160" ItemsSource="{Binding DataList}">
    <hc:CoverView.ItemHeaderTemplate>
        <DataTemplate>
            <Image Source="{Binding ImgPath}"/>
        </DataTemplate>
    </hc:CoverView.ItemHeaderTemplate>
    <hc:CoverView.ItemTemplate>
        <DataTemplate>
            <Border Margin="10" Height="300" Background="{Binding BackgroundToken,Converter={StaticResource String2BrushConverter}}">
                <TextBlock Text="{ex:Lang Key={x:Static langs:LangKeys.ContentDemoStr}}" VerticalAlignment="Center" HorizontalAlignment="Center" Foreground="White"/>
            </Border>
        </DataTemplate>
    </hc:CoverView.ItemTemplate>
</hc:CoverView>
```

or

```xml
<hc:CoverView>
            <hc:CoverViewItem>
                <hc:CoverViewItem.Header>
                    <Image Source="/HandyControlDemo;component/Resources/Img/Album/1.jpg"/>
                </hc:CoverViewItem.Header>
               <TextBlock Text="Content"/>
            </hc:CoverViewItem>

<hc:CoverViewItem>
                <hc:CoverViewItem.Header>
                    <Image Source="/HandyControlDemo;component/Resources/Img/Album/2.jpg"/>
                </hc:CoverViewItem.Header>
               <TextBlock Text="Content"/>
            </hc:CoverViewItem>
</hc:CoverView>
```
![CoverView](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Resources/CoverView.gif)