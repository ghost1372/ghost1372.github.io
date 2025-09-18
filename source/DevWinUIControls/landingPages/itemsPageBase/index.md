---
title: ItemsPageBase
---

Inherited from Page and INotifyPropertyChanged. AllLandingPage and MainLandingPage Inherited from this class.

# Event
|Name|
|-|
|OnItemClick|

# Available Properties

|Name|
|-|
|Items|

# Example

in this example we use ItemsPageBase class for creating a LandingPage

```xml
<dev:ItemsPageBase
    x:Class="DevWinUI.LandingPages.Controls.MainLandingPage"
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:dev="using:DevWinUI"
    HighContrastAdjustment="None"
    NavigationCacheMode="Enabled">

    <Page.Resources>
        <CollectionViewSource x:Name="itemsCVS" IsSourceGrouped="true" />
    </Page.Resources>

    <!--  This grid acts as a root panel for the page.  -->
    <Grid>
        <VisualStateManager.VisualStateGroups>
            <!--  Visual states reflect the application's window size  -->
            <VisualStateGroup x:Name="LayoutVisualStates">
                <VisualState x:Name="WideLayout">
                    <VisualState.StateTriggers>
                        <AdaptiveTrigger MinWindowWidth="{StaticResource Breakpoint640Plus}" />
                    </VisualState.StateTriggers>
                </VisualState>
                <VisualState x:Name="NarrowLayout">
                    <VisualState.StateTriggers>
                        <AdaptiveTrigger MinWindowWidth="0" />
                    </VisualState.StateTriggers>
                    <VisualState.Setters>
                        <Setter Target="learnMoreGrid.Margin" Value="16,36,0,36" />
                        <Setter Target="itemGridView.Padding" Value="4,0,4,36" />
                        <Setter Target="itemGridView.ItemContainerStyle" Value="{StaticResource IndentedGridViewItemStyleSmall}" />
                    </VisualState.Setters>
                </VisualState>
            </VisualStateGroup>
        </VisualStateManager.VisualStateGroups>
        <GridView
            x:Name="itemGridView"
            Padding="24,0,24,0"
            AutomationProperties.AutomationId="ItemGridView"
            AutomationProperties.Name="Items In Group"
            ContainerContentChanging="OnItemGridViewContainerContentChanging"
            IsItemClickEnabled="True"
            IsSwipeEnabled="False"
            ItemClick="OnItemGridViewItemClick"
            ItemContainerStyle="{StaticResource IndentedGridViewItemStyle}"
            ItemTemplate="{StaticResource ControlItemTemplate}"
            ItemsSource="{x:Bind itemsCVS.View, Mode=OneWay}"
            Loaded="OnItemGridViewLoaded"
            SelectionMode="None">
            <GridView.Header>
                <Grid x:Name="HeaderGrid" Margin="-24,0,-24,0">
                    <Grid.RowDefinitions>
                        <RowDefinition Height="204" />
                        <RowDefinition Height="*" />
                    </Grid.RowDefinitions>
                    <dev:HomePageHeader
                        Grid.RowSpan="2"
                        Height="396"
                        HeaderSubtitleText="Version 1.0.0"
                        HeaderText="myApp"
                        HeaderImage="ms-appx:///Assets/Images/Header.png"
                        VerticalAlignment="Top" />
                    <dev:HorizontalScrollContainer
                        Grid.Row="1">
                        <dev:HorizontalScrollContainer.HeaderContent>
                            <StackPanel Orientation="Horizontal" Spacing="10">
                                <dev:HeaderTile
                                        Title="Documentation Center"
                                        Description="Learn how to work with controls and styles."
                                        Link="https://Ghost1372.github.io/DevWinUI/">
                                    <dev:HeaderTile.Source>
                                        <Image Source="/Assets/HomeHeaderTiles/Header-WinUIGallery.png" />
                                    </dev:HeaderTile.Source>
                                </dev:HeaderTile>
                                <dev:HeaderTile
                                        Title="DevWinUI"
                                        Description="Experience WinUI 3 quickly and easily with the help of DevWinUI, Everything you need to develop an application is gathered in one place."
                                        Link="https://github.com/Ghost1372/DevWinUI">
                                    <dev:HeaderTile.Source>
                                        <Image Source="/Assets/HomeHeaderTiles/icon.png" />
                                    </dev:HeaderTile.Source>
                                </dev:HeaderTile>
                                <dev:HeaderTile
                                        Title="Core"
                                        Description="Experience WinUI 3 quickly and easily with the help of Core, Everything you need to develop an application is gathered in one place."
                                        Link="https://github.com/Ghost1372/DevWinUI">
                                    <dev:HeaderTile.Source>
                                        <Image Source="/Assets/HomeHeaderTiles/icon.png" />
                                    </dev:HeaderTile.Source>
                                </dev:HeaderTile>
                                <dev:HeaderTile
                                        Title="ContextMenuExtensions"
                                        Description="add a new ContextMenu for Windows 11/10."
                                        Link="https://github.com/Ghost1372/DevWinUI">
                                    <dev:HeaderTile.Source>
                                        <Image Source="/Assets/HomeHeaderTiles/icon.png" />
                                    </dev:HeaderTile.Source>
                                </dev:HeaderTile>
                            </StackPanel>
                        </dev:HorizontalScrollContainer.HeaderContent>
                    </dev:HorizontalScrollContainer>
                </Grid>
            </GridView.Header>

            <GridView.GroupStyle>
                <GroupStyle>
                    <GroupStyle.HeaderTemplate>
                        <DataTemplate x:DataType="dev:GroupInfoList">
                            <TextBlock
                                x:Name="pageSubtitle"
                                Margin="4,32,0,0"
                                AutomationProperties.HeadingLevel="Level1"
                                Style="{StaticResource SubtitleTextBlockStyle}"
                                Text="{x:Bind Title}" />
                        </DataTemplate>
                    </GroupStyle.HeaderTemplate>
                </GroupStyle>
            </GridView.GroupStyle>
        </GridView>
    </Grid>
</dev:ItemsPageBase>

```

and our csharp codes

```cs
public sealed partial class MainLandingPage : ItemsPageBase
{
    public string NewGroupText { get; set; } = "Recently added";
    public string UpdatedGroupText { get; set; } = "Recently updated";
    public string PreviewGroupText { get; set; } = "Preview";

    public MainLandingPage()
    {
        this.InitializeComponent();
    }

    public async void GetDataAsync(string JsonRelativeFilePath)
    {
        await DataSource.Instance.GetGroupsAsync(JsonRelativeFilePath);
        Items = DataSource.Instance.Groups.Where(g => !g.HideGroup).SelectMany(g => g.Items.Where(i => i.BadgeString != null && !i.HideItem)).OrderBy(i => i.Title).ToList();
        GetCollectionViewSource().Source = FormatData();
    }

    public CollectionViewSource GetCollectionViewSource()
    {
        return itemsCVS;
    }

    public ObservableCollection<GroupInfoList> FormatData()
    {
        var query = from item in this.Items
                    group item by item.BadgeString into g
                    orderby g.Key
                    select new GroupInfoList(g) { Key = g.Key };

        ObservableCollection<GroupInfoList> groupList = new ObservableCollection<GroupInfoList>(query);

        if (groupList.Any())
        {
            //Move Preview to the back of the list
            foreach (var item in groupList?.ToList())
            {
                if (item?.Key.ToString() == "Preview")
                {
                    groupList?.Remove(item);
                    groupList?.Insert(groupList.Count, item);
                }
            }
            

            foreach (var item in groupList)
            {
                switch (item.Key.ToString())
                {
                    case "New":
                        item.Title = NewGroupText;
                        break;
                    case "Updated":
                        item.Title = UpdatedGroupText;
                        break;
                    case "Preview":
                        item.Title = PreviewGroupText;
                        break;
                }
            }

            return groupList;
        }
        return null;
    }

    protected override bool GetIsNarrowLayoutState()
    {
        return LayoutVisualStates.CurrentState == NarrowLayout;
    }
}
```