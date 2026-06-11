---
title: LoopingList
---

An infinitely scrolling selector displayed in a flyout.

# Property

|Name|
|-|
|HeaderTemplate|
|Header|
|PrimaryItems|
|SecondaryItems|
|TertiaryItems|
|PrimarySelectedIndex|
|SecondarySelectedIndex|
|TertiarySelectedIndex|
|PrimarySelectedItem|
|SecondarySelectedItem|
|TertiarySelectedItem|
|PrimaryPlaceholderText|
|SecondaryPlaceholderText|
|TertiaryPlaceholderText|
|ShouldLoop|

# Method

|Name|
|-|
|ClearSelection|

# Example

```xml
 <dev:LoopingList x:Name="LoopingListSample"
                  PrimaryPlaceholderText="Country"
                  SecondaryPlaceholderText="Capital"
                  TertiaryPlaceholderText="City" />
```

```cs
LoopingListSample.PrimaryItems = new List<string>
{
    "USA", "Canada", "Germany", "Japan", "Australia",
    "France", "Brazil", "India", "Italy", "Spain",
    "Mexico", "China", "Russia", "Egypt", "South Africa"
};

LoopingListSample.SecondaryItems = new List<string>
{
    "California", "Ontario", "Bavaria", "Tokyo", "New South Wales",
    "Île-de-France", "São Paulo", "Maharashtra", "Lombardy", "Catalonia",
    "Jalisco", "Guangdong", "Moscow Oblast", "Cairo Governorate", "Gauteng"
};

LoopingListSample.TertiaryItems = new List<string>
{
    "Los Angeles", "Toronto", "Munich", "Shinjuku", "Sydney",
    "Paris", "São Paulo City", "Mumbai", "Milan", "Barcelona",
    "Guadalajara", "Guangzhou", "Moscow", "Cairo", "Johannesburg"
};

```

![LoopingList](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/LoopingList.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
