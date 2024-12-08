---
title: TextBox
---
TextBox control with `Content` Property

```xml
<dev:TextBox Header="TextBox with Content"
                PlaceholderText="PlaceHolder...">
    <dev:TextBox.Content>
        <Button Content="&#xE895;" />
    </dev:TextBox.Content>
</dev:TextBox>
```

or

```xml
<dev:TextBox Header="TextBox with Content"
                PlaceholderText="PlaceHolder...">
    <dev:TextBox.Content>
        <StackPanel Orientation="Horizontal">
            <Button Content="&#xE896;" />
            <Button>
                <FontIcon Glyph="&#xE895;" />
            </Button>
        </StackPanel>
    </dev:TextBox.Content>
</dev:TextBox>
```

you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/TextBox.png)
