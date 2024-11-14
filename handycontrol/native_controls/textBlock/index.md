---
title: TextBlock
---

# TextBlockBaseStyle

The default style of the textblock is not recommended. It should always be used by other styles based on On.

# TextBlockBoldBaseStyle

The default style of bold textblocks is not recommended. It should always be used by other styles as BasedOn.

# Case

```xml
<StackPanel>
    <TextBlock HorizontalAlignment="Left" Margin="5" Text="TextBlockLargeBold" Style="{StaticResource TextBlockLargeBold}"/>
    <TextBlock HorizontalAlignment="Left" Margin="5" Text="TextBlockLarge" Style="{StaticResource TextBlockLarge}"/>
    <TextBlock HorizontalAlignment="Left" Margin="5" Text="TextBlockHeaderBold" Style="{StaticResource TextBlockTitleBold}"/>
    <TextBlock HorizontalAlignment="Left" Margin="5" Text="TextBlockHeader" Style="{StaticResource TextBlockTitle}"/>
    <TextBlock HorizontalAlignment="Left" Margin="5" Text="TextBlockSubHeaderBold" Style="{StaticResource TextBlockSubTitleBold}"/>
    <TextBlock HorizontalAlignment="Left" Margin="5" Text="TextBlockSubHeader" Style="{StaticResource TextBlockSubTitle}"/>

    <TextBlock HorizontalAlignment="Left" Margin="5" Text="TextBlockDefaultBold" Style="{StaticResource TextBlockDefaultBold}"/>
    <TextBlock HorizontalAlignment="Left" Margin="5" Text="TextBlockDefault" Style="{StaticResource TextBlockDefault}"/>
    <TextBlock HorizontalAlignment="Left" Margin="5" Text="TextBlockDefaultAccent" Style="{StaticResource TextBlockDefaultAccent}"/>
    <TextBlock HorizontalAlignment="Left" Margin="5" Text="TextBlockDefaultSecLight" Style="{StaticResource TextBlockDefaultSecLight}"/>
    <TextBlock HorizontalAlignment="Left" Margin="5" Text="TextBlockDefaultThiLight" Style="{StaticResource TextBlockDefaultThiLight}"/>
    <TextBlock HorizontalAlignment="Left" Margin="5" Text="TextBlockDefaultPrimary" Style="{StaticResource TextBlockDefaultPrimary}"/>
    <TextBlock HorizontalAlignment="Left" Margin="5" Text="TextBlockDefaultDanger" Style="{StaticResource TextBlockDefaultDanger}"/>
    <TextBlock HorizontalAlignment="Left" Margin="5" Text="TextBlockDefaultWarning" Style="{StaticResource TextBlockDefaultWarning}"/>
    <TextBlock HorizontalAlignment="Left" Margin="5" Text="TextBlockDefaultInfo" Style="{StaticResource TextBlockDefaultInfo}"/>
    <TextBlock HorizontalAlignment="Left" Margin="5" Text="TextBlockDefaultSuccess" Style="{StaticResource TextBlockDefaultSuccess}"/>
</StackPanel>
```

# Styles
| Available styles |  |  |
| ---------------- | ---------------- | ---------------- |
|TextBlockLargeBold|TextBlockLarge|TextBlockDefaultThiLight|
|TextBlockTitleBold|TextBlockTitle|TextBlockDefaultPrimary|
|TextBlockSubTitleBold|TextBlockDefaultBold|TextBlockDefaultDanger|
|TextBlockSubTitle|TextBlockDefault|TextBlockDefaultWarning|
|TextBlockDefaultAccent|TextBlockDefaultSecLight|TextBlockDefaultInfo|
|TextBlockDefaultSuccess|TextBlockDefaultSecLight| |
|HighlightTextBlockBaseStyle|||

![TextBlockStyle](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Resources/TextBlock.png)