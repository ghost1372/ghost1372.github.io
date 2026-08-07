---
title: Card
---

It is used to display data in a card. It is a derived class of `ContentControl`.

```cs
public class Card : ContentControl
```

# Attributes

| Property                   | use                           |
| ---------------------- | ------------------------------ |
| Header                 | Card header content for displaying synchronized text |
| HeaderTemplate         | Card header template                   |
| HeaderTemplateSelector | Card template style selector             |
| HeaderStringFormat     | Card header template content display format       |
| Footer                 | Card footer content                   |
| FooterTemplate         | Card footer template                   |
| FooterTemplateSelector | Card footer Style Selector             |
| FooterStringFormat     | Card footer content display format           |

# Case

## Single card use

### `xaml`Use

```xml
    <hc:Card MaxWidth="240" BorderThickness="0" Effect="{DynamicResource EffectShadow2}" Margin="8">
        <!--Card Content section-->
        <Border CornerRadius="4,4,0,0" Width="160" Height="160">
            <TextBlock TextWrapping="Wrap" VerticalAlignment="Center" HorizontalAlignment="Center" Text="test"/>
        </Border>
        <!--Card Footer part-->
        <hc:Card.Footer>
            <StackPanel Margin="10" Width="160">
                <!--Card First-level content-->
                <TextBlock TextWrapping="NoWrap"  Style="{DynamicResource TextBlockLargeBold}" TextTrimming="CharacterEllipsis" 
                                           Text="Title" 
                                           HorizontalAlignment="Left"/>
                <!--Card Secondary content-->
                <TextBlock TextWrapping="NoWrap" Style="{DynamicResource TextBlockDefault}" TextTrimming="CharacterEllipsis" 
                                           Text="Description" Margin="0,6,0,0"
                                           HorizontalAlignment="Left"/>
            </StackPanel>
        </hc:Card.Footer>
    </hc:Card>
```

### effect

![Card-SampleCase](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/extend_controls/Card-SampleCase.png)

## As a data template

### type of data

```c#
    public class CardModel
    {
        public string Header { get; set; }
        public string Content { get; set; }
        public string Footer { get; set; }
    }
```

###  View entity

This entity is not designed according to the standard `mvvm` method, but is only used as a display for ordinary data sources.

```c#
    public class CardDemoViewModel
    {
        private IList<CardModel> _dataList;
        public CardDemoViewModel()
        {
            DataList = GetCardDataList();
        }
        internal ObservableCollection<CardModel> GetCardDataList()
        {
            return new ObservableCollection<CardModel>
            {
                new CardModel
                {
                    Header = "Atomic",
                    Content = "1.jpg",
                    Footer = "Stive Morgan"
                },
                new CardModel
                {
                    Header = "Zinderlong",
                    Content = "2.jpg",
                    Footer = "Zonderling"
                },
                new CardModel
                {
                    Header = "Busy Doin' Nothin'",
                    Content = "3.jpg",
                    Footer = "Ace Wilder"
                },
                new CardModel
                {
                    Header = "Wrong",
                    Content = "4.jpg",
                    Footer = "Blaxy Girls"
                },
                new CardModel
                {
                    Header = "The Lights",
                    Content = "5.jpg",
                    Footer = "Panda Eyes"
                },
                new CardModel
                {
                    Header = "EA7-50-Cent Disco",
                    Content = "6.jpg",
                    Footer = "еяхат музыка"
                },
                new CardModel
                {
                    Header = "Monsters",
                    Content = "7.jpg",
                    Footer = "Different Heaven"
                },
                new CardModel
                {
                    Header = "Gangsta Walk",
                    Content = "8.jpg",
                    Footer = "Illusionize"
                },
                new CardModel
                {
                    Header = "Won't Back Down",
                    Content = "9.jpg",
                    Footer = "Boehm"
                },
                new CardModel
                {
                    Header = "Katchi",
                    Content = "10.jpg",
                    Footer = "Ofenbach"
                }
            };
        }
        public IList<CardModel> DataList { get => _dataList; set => _dataList = value; }
    }
```

### `xaml`Use

`handycontrol` namespace and `DataContext` need to be introduced by themselves

```xml
xmlns:hc="https://handyorg.github.io/handycontrol"
xmlns:data="CardModel namespace"
xmlns:vm="CardDemoViewModel namespace"
........
```

```xml
	<!--Used in the parent of listbox-->
    <listbox.Resources>
        <vm:CardDemoViewModel x:Key="Card"></vm:CardDemoViewModel>
    </listbox.Resources>
    <listbox.DataContext>
        <Binding Source="{StaticResource Card}"/>
    </listbox.DataContext>
```

```xml
<ListBox Margin="32" BorderThickness="0" Style="{DynamicResource WrapPanelHorizontalListBox}" ItemsSource="{Binding DataList}">
        <ListBox.ItemTemplate>
            <DataTemplate DataType="data:CardModel">
                <hc:Card MaxWidth="240" BorderThickness="0" Effect="{DynamicResource EffectShadow2}" Margin="8" Footer="{Binding Footer}">
                    <!--Card Content section template-->
                    <Border CornerRadius="4,4,0,0" Width="160" Height="160">
                        <TextBlock TextWrapping="Wrap" VerticalAlignment="Center" HorizontalAlignment="Center" Text="{Binding Content}"/>
                    </Border>
                    <!--Card Footer section template-->
                    <hc:Card.FooterTemplate>
                        <DataTemplate>
                            <StackPanel Margin="10" Width="160">
                                <!--Card First-level content-->
                                <TextBlock TextWrapping="NoWrap"  Style="{DynamicResource TextBlockLargeBold}" TextTrimming="CharacterEllipsis" 
                                           Text="{Binding DataContext.Header,RelativeSource={RelativeSource AncestorType=hc:Card}}" 
                                           HorizontalAlignment="Left"/>
                                <!--Card Secondary content-->
                                <TextBlock TextWrapping="NoWrap" Style="{DynamicResource TextBlockDefault}" TextTrimming="CharacterEllipsis" 
                                           Text="{Binding}" Margin="0,6,0,0"
                                           HorizontalAlignment="Left"/>
                            </StackPanel>
                        </DataTemplate>
                    </hc:Card.FooterTemplate>
                </hc:Card>
            </DataTemplate>
        </ListBox.ItemTemplate>
    </ListBox>
```

### effect

![Card-Case01](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/extend_controls/Card-Case01.png)
