---
title: GridAttach
---

|Property|
|-|
|Name|
|RowName|
|ColumnName|

```xml
<Grid>
    <Grid.RowDefinitions>
      <RowDefinition hc:GridExtensions.Name="R0" />
      <RowDefinition hc:GridExtensions.Name="R1" />
    </Grid.RowDefinitions>
    <Grid.ColumnDefinitions>
      <ColumnDefinition />
      <ColumnDefinition />
      <ColumnDefinition hc:GridExtensions.Name="C1" />
    </Grid.ColumnDefinitions>
        <TextBlock hc:GridExtensions.RowName="R1" hc:GridExtensions.ColumnName="C1" Text="12" />
  </Grid>
```