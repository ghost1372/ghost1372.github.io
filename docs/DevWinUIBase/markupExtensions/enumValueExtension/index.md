---
title: EnumValuesExtension
---

Assuming we had an Animal enum type and we wanted the user to pick one of the available names, here is the XAML syntax that allows us to create a ComboBox and display all Animal values, directly from XAML and with no code-behind:

```xml
<ComboBox
    xmlns:dev="using:DevWinUI"
    xmlns:enums="using:MyApplication.Enums"
    ItemsSource="{dev:EnumValues Type=enums:Animal}"
    SelectedIndex="0"/>

```

![EnumValueEx](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/EnumValueEx.png)



# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.