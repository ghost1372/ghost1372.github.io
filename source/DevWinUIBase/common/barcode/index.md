---
title: Barcode
---

Barcode generation library with SVG and PNG renderers. Implements the Barcode specification from scratch with support for Code 39 / Code 128 linear barcodes.

## Supported Barcode Types

| Type | Method | Description |
|------|--------|-------------|
| Code 39 | `Barcode.CreateCode39(...)` | Supports standard Code 39 alphabet, optional Mod 43 checksum |
| Code 93 | `Barcode.CreateCode93(...)` | Supports standard and extended Code 93 character encoding |
| Code 128 | `Barcode.CreateCode128(...)` | Supports Code Set B and automatic switching to Code Set C for numeric runs |
| EAN-8 | `Barcode.CreateEan8(...)` | Supports 7/8-digit payloads and optional 2/5-digit add-on extension |
| EAN-13 | `Barcode.CreateEan13(...)` | Supports 12/13-digit payloads and optional 2/5-digit add-on extension |
| UPC-A | `Barcode.CreateUpcA(...)` | Supports 11/12-digit payloads and optional 2/5-digit add-on extension |
| Codabar | `Barcode.CreateCodabar(...)` | Supports standard Codabar payload characters and configurable start/stop guards |
| ITF | `Barcode.CreateItf(...)` | Supports numeric payloads with an even number of digits |

## Usage

### Generate barcodes (Code 39, Code 93, Code 128, EAN/UPC, Codabar, ITF)

```csharp
var code39 = Barcode.CreateCode39("ABC-123", includeChecksum: true);
var code93 = Barcode.CreateCode93("ABC123");
var code128 = Barcode.CreateCode128("SKU-123456");
var ean8 = Barcode.CreateEan8("5512345");
var ean13 = Barcode.CreateEan13("400638133393");
var upcA = Barcode.CreateUpcA("03600029145", extension: "12");
var codabar = Barcode.CreateCodabar("40156", startCharacter: 'A', stopCharacter: 'B');
var itf = Barcode.CreateItf("12345678");

Console.WriteLine($"{code39.Type} {code39.Width}x{code39.Height}");
Console.WriteLine($"{code93.Type} {code93.Width}x{code93.Height}");
Console.WriteLine($"{code128.Type} {code128.Width}x{code128.Height}");
Console.WriteLine($"{ean8.Type} {ean8.Width}x{ean8.Height}");
Console.WriteLine($"{ean13.Type} {ean13.Width}x{ean13.Height}");
Console.WriteLine($"{upcA.Type} {upcA.Width}x{upcA.Height}");
Console.WriteLine($"{codabar.Type} {codabar.Width}x{codabar.Height}");
Console.WriteLine($"{itf.Type} {itf.Width}x{itf.Height}");
```



### Render as SVG

```csharp
var barcodeSvg = code128.ToSvg(new BarcodeSvgOptions
{
    ModuleWidth = 2,
    ModuleHeight = 80,
    QuietZoneModules = 10,
});
```
Logo images are currently supported in the SVG renderer only.

### Render as PNG

```csharp

var barcodePng = code39.ToPng(new BarcodePngOptions
{
    ModuleWidth = 2,
    ModuleHeight = 80,
    DarkColor = Color.FromRgb(0x0f, 0x76, 0x6e),
    LightColor = Color.FromRgb(0xec, 0xfe, 0xff),
});
File.WriteAllBytes("barcode.png", barcodePng);
```

![Barcode](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/Barcode.png)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.