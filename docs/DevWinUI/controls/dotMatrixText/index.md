---
title: DotMatrixText
---

# Property

|Name|
|-|
|Text|
|DotSize|
|DotSpacing|
|InactiveForeground|
|IsGlowing|

# Example

```xml
<dev:DotMatrixText Text="Hello 2026" />
```

```xml
<dev:DotMatrixText Text="GATE 12"
                   DotSize="8"
                   DotSpacing="3"
                   IsGlowing="False" />
```

> [!WARNING]
> Text is converted to uppercase. Supported characters are `A-Z`, `0-9`, `-` and space. Any other character is drawn as blank.

![DotMatrixText](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/DotMatrixText.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
