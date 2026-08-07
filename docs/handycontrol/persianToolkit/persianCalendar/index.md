---
title: PersianCalendar
---

PersianCalendar is Based on [Calendar](https://ghost1372.github.io/handycontrol/native_controls/calendar/) All methods and styles are available in this control

example:

``` xml
 <hc:PersianCalendar Margin="10"/>
```

![PersianCalendar](https://raw.githubusercontent.com/ghost1372/Resources/main/HandyControls/Docs/PersianCalendar.png)

# Afghanistan Calendar
Since the calendars of Iran and Afghanistan are the same and only the names of the months are different, You can use the Afghan calendar with Afghan names.
Put this code in `App.xaml.cs` and `OnStartup` Method

```cs
System.Threading.Thread.CurrentThread.CurrentCulture = new CultureInfo("fa-AF"); //ps-AF and prs-AF also can be used
```

# Wrapper for Material Design Style

if you want to use PersianCalendar with Material Design Styles follow this instructures

1. Install nuget packages
```
Install-Package HandyControls
Install-Package MaterialDesignThemes
```
2. Create a ResourceDictionary --> `MaterialPersianCalendar.xaml`

3. Add Resources into App.xaml
```xml
<Application.Resources>
    <ResourceDictionary>
        <ResourceDictionary.MergedDictionaries>
            <hc:ThemeResources/>
            <hc:Theme/>
            <materialDesign:BundledTheme BaseTheme="Light" PrimaryColor="DeepPurple" SecondaryColor="Lime" />
            <ResourceDictionary Source="pack://application:,,,/MaterialDesignThemes.Wpf;component/Themes/MaterialDesignTheme.Defaults.xaml" />
            <ResourceDictionary Source="/MaterialPersianCalendar.xaml"/>
        </ResourceDictionary.MergedDictionaries>
    </ResourceDictionary>
</Application.Resources>
```
4. Copy and Paste following Codes into `MaterialPersianCalendar.xaml`

```xml
<ResourceDictionary xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
                    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
                    xmlns:wpf="http://materialdesigninxaml.net/winfx/xaml/themes"
                    xmlns:primitives="clr-namespace:Microsoft.Windows.Controls.Primitives;assembly=HandyControl"
                    xmlns:hc="https://handyorg.github.io/handycontrol">
    <wpf:BooleanToVisibilityConverter x:Key="BooleanToVisibilityConverter" />

    <Style x:Key="MaterialDesignPersianCalendarButton" TargetType="primitives:CalendarButton">
        <Setter Property="MinWidth" Value="5"/>
        <Setter Property="MinHeight" Value="5"/>
        <Setter Property="FontSize" Value="12"/>
        <Setter Property="Cursor" Value="Hand"/>
        <Setter Property="Background" Value="Transparent"/>
        <Setter Property="Margin" Value="2"/>
        <Setter Property="Width" Value="48" />
        <Setter Property="Height" Value="48" />
        <Setter Property="HorizontalContentAlignment" Value="Center"/>
        <Setter Property="VerticalContentAlignment" Value="Center"/>
        <Setter Property="Template">
            <Setter.Value>
                <ControlTemplate TargetType="primitives:CalendarButton">
                    <Grid>
                        <VisualStateManager.VisualStateGroups>
                            <VisualStateGroup x:Name="CommonStates">
                                <VisualStateGroup.Transitions>
                                    <VisualTransition GeneratedDuration="0:0:0.1"/>
                                </VisualStateGroup.Transitions>
                                <VisualState x:Name="Normal"/>
                                <VisualState x:Name="MouseOver">
                                    <Storyboard>
                                        <DoubleAnimation Duration="0" To="0.5" Storyboard.TargetProperty="Opacity" Storyboard.TargetName="HighlightBackground"/>
                                    </Storyboard>
                                </VisualState>
                                <VisualState x:Name="Pressed">
                                    <Storyboard>
                                        <DoubleAnimation Duration="0" To="0.5" Storyboard.TargetProperty="Opacity" Storyboard.TargetName="HighlightBackground"/>
                                    </Storyboard>
                                </VisualState>
                                <VisualState x:Name="Disabled">
                                    <Storyboard>
                                        <DoubleAnimation Duration="0" To="0" Storyboard.TargetProperty="Opacity" Storyboard.TargetName="HighlightBackground"/>
                                        <DoubleAnimation Duration="0" To=".35" Storyboard.TargetProperty="Opacity" Storyboard.TargetName="NormalText"/>
                                    </Storyboard>
                                </VisualState>
                            </VisualStateGroup>
                            <VisualStateGroup x:Name="SelectionStates">
                                <VisualStateGroup.Transitions>
                                    <VisualTransition GeneratedDuration="0"/>
                                </VisualStateGroup.Transitions>
                                <VisualState x:Name="Unselected"/>
                                <VisualState x:Name="Selected">
                                    <Storyboard>
                                        <DoubleAnimation Duration="0" To=".75" Storyboard.TargetProperty="Opacity" Storyboard.TargetName="SelectedBackground"/>
                                        <ObjectAnimationUsingKeyFrames Storyboard.TargetProperty="(TextElement.Foreground)" Storyboard.TargetName="NormalText" FillBehavior="Stop">
                                            <DiscreteObjectKeyFrame Value="{DynamicResource PrimaryHueMidForegroundBrush}" KeyTime="0" />
                                        </ObjectAnimationUsingKeyFrames>
                                    </Storyboard>
                                </VisualState>
                            </VisualStateGroup>
                            <VisualStateGroup x:Name="CalendarButtonFocusStates">
                                <VisualStateGroup.Transitions>
                                    <VisualTransition GeneratedDuration="0"/>
                                </VisualStateGroup.Transitions>
                                <VisualState x:Name="CalendarButtonFocused">
                                    <Storyboard>
                                        <ObjectAnimationUsingKeyFrames Duration="0" Storyboard.TargetProperty="Visibility" Storyboard.TargetName="DayButtonFocusVisual">
                                            <DiscreteObjectKeyFrame KeyTime="0">
                                                <DiscreteObjectKeyFrame.Value>
                                                    <Visibility>Visible</Visibility>
                                                </DiscreteObjectKeyFrame.Value>
                                            </DiscreteObjectKeyFrame>
                                        </ObjectAnimationUsingKeyFrames>
                                    </Storyboard>
                                </VisualState>
                                <VisualState x:Name="CalendarButtonUnfocused">
                                    <Storyboard>
                                        <ObjectAnimationUsingKeyFrames Duration="0" Storyboard.TargetProperty="Visibility" Storyboard.TargetName="DayButtonFocusVisual">
                                            <DiscreteObjectKeyFrame KeyTime="0">
                                                <DiscreteObjectKeyFrame.Value>
                                                    <Visibility>Collapsed</Visibility>
                                                </DiscreteObjectKeyFrame.Value>
                                            </DiscreteObjectKeyFrame>
                                        </ObjectAnimationUsingKeyFrames>
                                    </Storyboard>
                                </VisualState>
                            </VisualStateGroup>
                            <VisualStateGroup x:Name="ActiveStates">
                                <VisualStateGroup.Transitions>
                                    <VisualTransition GeneratedDuration="0"/>
                                </VisualStateGroup.Transitions>
                                <VisualState x:Name="Active"/>
                                <VisualState x:Name="Inactive" />
                            </VisualStateGroup>
                        </VisualStateManager.VisualStateGroups>
                        <Ellipse x:Name="TodayBackground"
                                 Fill="{DynamicResource PrimaryHueLightBrush}"
                                 Opacity="0" />
                        <Ellipse x:Name="SelectedBackground"
                                 Fill="{DynamicResource PrimaryHueMidBrush}"
                                 Opacity="0" />
                        <Border BorderBrush="{TemplateBinding BorderBrush}"
                                BorderThickness="{TemplateBinding BorderThickness}"
                                Background="{TemplateBinding Background}" />
                        <Ellipse x:Name="HighlightBackground"
                                 Fill="{DynamicResource PrimaryHueDarkBrush}"
                                 Opacity="0" />
                        <ContentPresenter x:Name="NormalText"
                                          TextElement.Foreground="{TemplateBinding Foreground}"
                                          HorizontalAlignment="{TemplateBinding HorizontalContentAlignment}"
                                          Margin="5,1,5,1"
                                          VerticalAlignment="{TemplateBinding VerticalContentAlignment}"/>
                        <Ellipse x:Name="DayButtonFocusVisual"
                                 Stroke="{DynamicResource PrimaryHueDarkBrush}"
                                 Opacity="0"
                                 Visibility="Collapsed"
                                 StrokeThickness="1" />
                    </Grid>
                </ControlTemplate>
            </Setter.Value>
        </Setter>
        <Style.Triggers>
            <Trigger Property="IsInactive"
                     Value="True">
                <Setter Property="MinHeight"
                        Value="0" />
                <Setter Property="MaxHeight"
                        Value="0" />
            </Trigger>
        </Style.Triggers>
    </Style>

    <Style x:Key="MaterialDesignPersianCalendarDayButton" TargetType="primitives:CalendarDayButton">
        <Setter Property="Foreground" Value="{DynamicResource MaterialDesignBody}"/>
        <Setter Property="MinWidth" Value="5"/>
        <Setter Property="MinHeight" Value="5"/>
        <Setter Property="FontSize" Value="12"/>
        <Setter Property="Cursor" Value="Hand" />
        <Setter Property="Margin" Value="2"/>
        <Setter Property="Width" Value="28" />
        <Setter Property="Height" Value="28" />
        <Setter Property="HorizontalContentAlignment" Value="Center"/>
        <Setter Property="VerticalContentAlignment" Value="Center"/>
        <Setter Property="Template">
            <Setter.Value>
                <ControlTemplate TargetType="primitives:CalendarDayButton">
                    <Grid>
                        <VisualStateManager.VisualStateGroups>
                            <VisualStateGroup x:Name="CommonStates">
                                <VisualStateGroup.Transitions>
                                    <VisualTransition GeneratedDuration="0:0:0.1"/>
                                </VisualStateGroup.Transitions>
                                <VisualState x:Name="Normal"/>
                                <VisualState x:Name="MouseOver">
                                    <Storyboard>
                                        <DoubleAnimation Duration="0" To="0.5" Storyboard.TargetProperty="Opacity" Storyboard.TargetName="HighlightBackground"/>
                                    </Storyboard>
                                </VisualState>
                                <VisualState x:Name="Pressed">
                                    <Storyboard>
                                        <DoubleAnimation Duration="0" To="0.5" Storyboard.TargetProperty="Opacity" Storyboard.TargetName="HighlightBackground"/>
                                    </Storyboard>
                                </VisualState>
                            </VisualStateGroup>
                            <VisualStateGroup x:Name="SelectionStates">
                                <VisualStateGroup.Transitions>
                                    <VisualTransition GeneratedDuration="0"/>
                                </VisualStateGroup.Transitions>
                                <VisualState x:Name="Unselected"/>
                                <VisualState x:Name="Selected">
                                    <Storyboard>
                                        <DoubleAnimation Duration="0" To=".75" Storyboard.TargetProperty="Opacity" Storyboard.TargetName="SelectedBackground"/>
                                        <ObjectAnimationUsingKeyFrames Storyboard.TargetProperty="(TextElement.Foreground)" Storyboard.TargetName="NormalText" FillBehavior="Stop">
                                            <DiscreteObjectKeyFrame Value="{DynamicResource PrimaryHueMidForegroundBrush}" KeyTime="0" />
                                        </ObjectAnimationUsingKeyFrames>
                                    </Storyboard>
                                </VisualState>
                            </VisualStateGroup>
                            <VisualStateGroup x:Name="CalendarButtonFocusStates">
                                <VisualStateGroup.Transitions>
                                    <VisualTransition GeneratedDuration="0"/>
                                </VisualStateGroup.Transitions>
                                <VisualState x:Name="CalendarButtonFocused">
                                    <Storyboard>
                                        <ObjectAnimationUsingKeyFrames Duration="0" Storyboard.TargetProperty="Visibility" Storyboard.TargetName="DayButtonFocusVisual">
                                            <DiscreteObjectKeyFrame KeyTime="0">
                                                <DiscreteObjectKeyFrame.Value>
                                                    <Visibility>Visible</Visibility>
                                                </DiscreteObjectKeyFrame.Value>
                                            </DiscreteObjectKeyFrame>
                                        </ObjectAnimationUsingKeyFrames>
                                    </Storyboard>
                                </VisualState>
                                <VisualState x:Name="CalendarButtonUnfocused">
                                    <Storyboard>
                                        <ObjectAnimationUsingKeyFrames Duration="0" Storyboard.TargetProperty="Visibility" Storyboard.TargetName="DayButtonFocusVisual">
                                            <DiscreteObjectKeyFrame KeyTime="0">
                                                <DiscreteObjectKeyFrame.Value>
                                                    <Visibility>Collapsed</Visibility>
                                                </DiscreteObjectKeyFrame.Value>
                                            </DiscreteObjectKeyFrame>
                                        </ObjectAnimationUsingKeyFrames>
                                    </Storyboard>
                                </VisualState>
                            </VisualStateGroup>
                            <VisualStateGroup x:Name="ActiveStates">
                                <VisualStateGroup.Transitions>
                                    <VisualTransition GeneratedDuration="0"/>
                                </VisualStateGroup.Transitions>
                                <VisualState x:Name="Active"/>
                                <VisualState x:Name="Inactive"/>
                            </VisualStateGroup>
                            <VisualStateGroup x:Name="DayStates">
                                <VisualStateGroup.Transitions>
                                    <VisualTransition GeneratedDuration="0"/>
                                </VisualStateGroup.Transitions>
                                <VisualState x:Name="RegularDay"/>
                                <VisualState x:Name="Today">
                                    <Storyboard>
                                        <DoubleAnimation Duration="0" To="1" Storyboard.TargetProperty="Opacity" Storyboard.TargetName="TodayBackground"/>
                                    </Storyboard>
                                </VisualState>
                            </VisualStateGroup>
                            <VisualStateGroup x:Name="BlackoutDayStates">
                                <VisualStateGroup.Transitions>
                                    <VisualTransition GeneratedDuration="0"/>
                                </VisualStateGroup.Transitions>
                                <VisualState x:Name="NormalDay"/>
                                <VisualState x:Name="BlackoutDay">
                                    <Storyboard>
                                        <DoubleAnimation Duration="0"
                                                         To="0"
                                                         Storyboard.TargetProperty="Opacity"
                                                         Storyboard.TargetName="HighlightingBorder"/>
                                        <DoubleAnimation Duration="0"
                                                         To="0.38"
                                                         Storyboard.TargetProperty="Opacity" 
                                                         Storyboard.TargetName="NormalText" />
                                    </Storyboard>
                                </VisualState>
                            </VisualStateGroup>
                        </VisualStateManager.VisualStateGroups>
                        <Ellipse x:Name="TodayBackground"
                                 Fill="Transparent"
                                 Opacity="0" 
                                 StrokeThickness="1"
                                 Stroke="{TemplateBinding Foreground}"/>
                        <Ellipse x:Name="SelectedBackground"
                                 Fill="{DynamicResource PrimaryHueMidBrush}"
                                 Opacity="0" />
                        <Border BorderBrush="{TemplateBinding BorderBrush}"
                                BorderThickness="{TemplateBinding BorderThickness}"
                                Background="{TemplateBinding Background}"/>
                        <Border x:Name="HighlightingBorder"
                                Opacity="1">
                            <Ellipse x:Name="HighlightBackground"
                                     Fill="{DynamicResource PrimaryHueDarkBrush}"
                                     Opacity="0"/>
                        </Border>
                        <ContentPresenter x:Name="NormalText"
                                          TextElement.Foreground="{TemplateBinding Foreground}"
                                          HorizontalAlignment="{TemplateBinding HorizontalContentAlignment}"
                                          Margin="5,1,5,1"
                                          VerticalAlignment="{TemplateBinding VerticalContentAlignment}" />
                        <Ellipse x:Name="DayButtonFocusVisual"
                                 Stroke="{DynamicResource PrimaryHueDarkBrush}"
                                 Opacity="0"
                                 Visibility="Collapsed"
                                 StrokeThickness="1"/>
                    </Grid>
                </ControlTemplate>
            </Setter.Value>
        </Setter>
        <Style.Triggers>
            <Trigger Property="IsInactive"
                     Value="True">
                <Setter Property="MinHeight"
                        Value="0" />
                <Setter Property="MaxHeight"
                        Value="0" />
            </Trigger>
            <Trigger Property="IsBlackedOut"
                     Value="True">
                <Setter Property="Cursor"
                        Value="No" />
            </Trigger>
        </Style.Triggers>
    </Style>

    <Style x:Key="MaterialDesignPersianCalendarItem" TargetType="primitives:CalendarItem">
        <Setter Property="BorderThickness" Value="0"/>
        <Setter Property="Margin" Value="0,3,0,3"/>
        <Setter Property="Template">
            <Setter.Value>
                <ControlTemplate TargetType="primitives:CalendarItem">
                    <ControlTemplate.Resources>
                        <SineEase x:Key="EasingFunction" EasingMode="EaseOut"/>
                        <CubicEase x:Key="EasingFunctionIn" EasingMode="EaseIn"/>

                        <DataTemplate x:Key="DayTitleTemplate">
                            <TextBlock Foreground="{DynamicResource MaterialDesignToolTipBackground}"
                                       Opacity="0.65"
                                       FontWeight="Bold"
                                       FontSize="9.5"                                       
                                       HorizontalAlignment="Center" VerticalAlignment="Center"
                                       Margin="0,6,0,6"
                                       Text="{Binding [0]}"/>
                        </DataTemplate>
                    </ControlTemplate.Resources>
                    <Grid x:Name="PART_Root">
                        <Grid.Resources>
                            <SolidColorBrush x:Key="DisabledColor" Color="#A5FFFFFF"/>
                        </Grid.Resources>
                        <VisualStateManager.VisualStateGroups>
                            <VisualStateGroup x:Name="CommonStates">
                                <VisualState x:Name="Normal"/>
                                <VisualState x:Name="Disabled">
                                    <Storyboard>
                                        <DoubleAnimation Duration="0" To="1" Storyboard.TargetProperty="Opacity" Storyboard.TargetName="PART_DisabledVisual"/>
                                    </Storyboard>
                                </VisualState>
                            </VisualStateGroup>
                        </VisualStateManager.VisualStateGroups>
                        <wpf:Card UniformCornerRadius="2" wpf:ShadowAssist.ShadowDepth="Depth0">
                            <Grid Background="{TemplateBinding Background}" RenderOptions.ClearTypeHint="Enabled">
                                <Grid.Resources>
                                    <ControlTemplate x:Key="PreviousButtonTemplate" TargetType="{x:Type Button}">
                                        <Grid Cursor="Hand">
                                            <VisualStateManager.VisualStateGroups>
                                                <VisualStateGroup x:Name="CommonStates">
                                                    <VisualState x:Name="Normal"/>
                                                    <VisualState x:Name="MouseOver" />
                                                    <VisualState x:Name="Disabled">
                                                        <Storyboard>
                                                            <DoubleAnimation Duration="0" To=".56" Storyboard.TargetProperty="Opacity" Storyboard.TargetName="path"/>
                                                        </Storyboard>
                                                    </VisualState>
                                                </VisualStateGroup>
                                            </VisualStateManager.VisualStateGroups>
                                            <wpf:Ripple HorizontalAlignment="Center" VerticalAlignment="Center">
                                                <Viewbox Height="12" Margin="8">
                                                    <Path x:Name="path" Data="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" Fill="{TemplateBinding Foreground}" Stretch="Fill" />
                                                </Viewbox>
                                            </wpf:Ripple>
                                        </Grid>
                                    </ControlTemplate>
                                    <ControlTemplate x:Key="NextButtonTemplate" TargetType="{x:Type Button}">
                                        <Grid Cursor="Hand">
                                            <VisualStateManager.VisualStateGroups>
                                                <VisualStateGroup x:Name="CommonStates">
                                                    <VisualState x:Name="Normal"/>
                                                    <VisualState x:Name="MouseOver"/>
                                                    <VisualState x:Name="Disabled">
                                                        <Storyboard>
                                                            <DoubleAnimation Duration="0" To=".5" Storyboard.TargetProperty="Opacity" Storyboard.TargetName="path"/>
                                                        </Storyboard>
                                                    </VisualState>
                                                </VisualStateGroup>
                                            </VisualStateManager.VisualStateGroups>
                                            <wpf:Ripple HorizontalAlignment="Center" VerticalAlignment="Center">
                                                <Viewbox Height="12" Margin="8">
                                                    <Path x:Name="path" Data="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" Fill="{TemplateBinding Foreground}" Stretch="Fill"  />
                                                </Viewbox>
                                            </wpf:Ripple>
                                        </Grid>
                                    </ControlTemplate>
                                    <ControlTemplate x:Key="HeaderButtonTemplate" TargetType="{x:Type Button}">
                                        <Grid Cursor="Hand">
                                            <VisualStateManager.VisualStateGroups>
                                                <VisualStateGroup x:Name="CommonStates">
                                                    <VisualState x:Name="Normal"/>
                                                    <VisualState x:Name="MouseOver" />
                                                    <VisualState x:Name="Disabled"/>
                                                </VisualStateGroup>
                                            </VisualStateManager.VisualStateGroups>
                                            <wpf:MaterialDateDisplay x:Name="buttonContent" Foreground="{DynamicResource PrimaryHueMidForegroundBrush}"
                                                                     IsEnabled="{TemplateBinding IsEnabled}">
                                                <wpf:MaterialDateDisplay.DisplayDate>
                                                    <MultiBinding Mode="OneWay">
                                                        <MultiBinding.Converter>
                                                            <wpf:CalendarDateCoalesceConverter />
                                                        </MultiBinding.Converter>
                                                        <Binding RelativeSource="{RelativeSource FindAncestor, AncestorType=hc:PersianCalendar}" Path="DisplayDate" />
                                                        <Binding RelativeSource="{RelativeSource FindAncestor, AncestorType=hc:PersianCalendar}" Path="SelectedDate" />
                                                    </MultiBinding>
                                                </wpf:MaterialDateDisplay.DisplayDate>
                                            </wpf:MaterialDateDisplay>
                                        </Grid>
                                    </ControlTemplate>
                                    <wpf:CalendarYearMonthConverter x:Key="CalendarYearMonthConverter"/>
                                </Grid.Resources>
                                <Grid.ColumnDefinitions>
                                    <ColumnDefinition Width="*"/>
                                    <ColumnDefinition Width="Auto"/>
                                    <ColumnDefinition Width="Auto"/>
                                </Grid.ColumnDefinitions>
                                <Grid.RowDefinitions>
                                    <RowDefinition Height="Auto"/>
                                    <RowDefinition Height="Auto"/>
                                    <RowDefinition Height="Auto"/>
                                    <RowDefinition Height="*"/>
                                </Grid.RowDefinitions>
                                <Border Grid.ColumnSpan="3" Grid.Row="0" Background="{DynamicResource PrimaryHueMidBrush}" />
                                <Button x:Name="PART_HeaderButton"
                                        Grid.Row="0"
                                        Grid.Column="0"
                                        Grid.ColumnSpan="3"
                                        FontWeight="Bold"
                                        Focusable="False"
                                        FontSize="10.5"
                                        HorizontalAlignment="Left"
                                        VerticalAlignment="Center"
                                        Template="{StaticResource HeaderButtonTemplate}"
                                        Visibility="{TemplateBinding wpf:CalendarAssist.IsHeaderVisible, Converter={StaticResource BooleanToVisibilityConverter}}"
                                        Height="Auto"
                                        Margin="20 15" />
                                <TextBlock x:Name="CurrentDateTextBlock"
                                           Grid.Row="1" 
                                           Grid.Column="0"
                                           HorizontalAlignment="Left" 
                                           VerticalAlignment="Center"
                                           Margin="13 8 8 8"
                                           FontSize="14"
                                           FontWeight="SemiBold"
                                           Opacity="0.56"
                                           RenderTransformOrigin="0, 0.5">
                                    <TextBlock.Text>
                                        <MultiBinding Converter="{StaticResource CalendarYearMonthConverter}">
                                            <Binding RelativeSource="{RelativeSource FindAncestor, AncestorType=hc:PersianCalendar}" Path="DisplayDate"/>
                                            <Binding RelativeSource="{RelativeSource FindAncestor, AncestorType=hc:PersianCalendar}" Path="Language"/>
                                        </MultiBinding>
                                    </TextBlock.Text>
                                    <TextBlock.RenderTransform>
                                        <TranslateTransform X="0" Y="0"/>
                                    </TextBlock.RenderTransform>
                                </TextBlock>
                                <Button x:Name="PART_PreviousButton"
                                        Grid.Row="1"
                                        Grid.Column="1" 
                                        Focusable="False" 
                                        HorizontalAlignment="Left" 
                                        Height="36" 
                                        Width="32"
                                        Template="{StaticResource PreviousButtonTemplate}"
                                        Margin="3 0"
                                        Opacity="0.56"
                                        Foreground="{TemplateBinding Foreground}" />
                                <Button x:Name="PART_NextButton" 
                                        Grid.Row="1" 
                                        Grid.Column="2" 
                                        Focusable="False" 
                                        HorizontalAlignment="Right"
                                        Height="36"
                                        Width="32"
                                        Template="{StaticResource NextButtonTemplate}"
                                        Margin="3 0"
                                        Opacity="0.56"
                                        Foreground="{TemplateBinding Foreground}" />

                                <Grid x:Name="MonthViewWrapperGrid"
                                      Grid.ColumnSpan="3"
                                      Grid.Row="2"
                                      HorizontalAlignment="Center"
                                      VerticalAlignment="Top"
                                      Margin="6 -1 6 6"
                                      Visibility="Visible">
                                    <Border x:Name="PART_MonthViewCopy" RenderTransformOrigin="0, 0.5"
                                            Opacity="0" Margin="4 7 4 3">
                                        <Border.Background>
                                            <VisualBrush Visual="{Binding ElementName=PART_MonthView}" Stretch="UniformToFill"/>
                                        </Border.Background>
                                        <Border.RenderTransform>
                                            <TranslateTransform X="0"/>
                                        </Border.RenderTransform>
                                    </Border>
                                    <Grid x:Name="PART_MonthView" RenderTransformOrigin="0, 0.5" IsSharedSizeScope="True">
                                        <Grid.RenderTransform>
                                            <TranslateTransform X="0" />
                                        </Grid.RenderTransform>
                                        <Grid.ColumnDefinitions>
                                            <ColumnDefinition Width="Auto"/>
                                            <ColumnDefinition Width="Auto"/>
                                            <ColumnDefinition Width="Auto"/>
                                            <ColumnDefinition Width="Auto"/>
                                            <ColumnDefinition Width="Auto"/>
                                            <ColumnDefinition Width="Auto"/>
                                            <ColumnDefinition Width="Auto"/>
                                        </Grid.ColumnDefinitions>
                                        <Grid.RowDefinitions>
                                            <RowDefinition SharedSizeGroup="WeekRow" />
                                            <RowDefinition SharedSizeGroup="WeekRow" />
                                            <RowDefinition SharedSizeGroup="WeekRow" />
                                            <RowDefinition SharedSizeGroup="WeekRow" />
                                            <RowDefinition SharedSizeGroup="WeekRow" />
                                            <RowDefinition SharedSizeGroup="WeekRow" />
                                            <RowDefinition SharedSizeGroup="WeekRow" />
                                        </Grid.RowDefinitions>
                                    </Grid>
                                </Grid>

                                <Grid x:Name="YearViewWrapperGrid"
                                      Grid.ColumnSpan="3"
                                      Grid.Row="2"
                                      HorizontalAlignment="Center"
                                      VerticalAlignment="Top"
                                      Margin="6 -3 7 6"
                                      Visibility="Hidden">
                                    <Border x:Name="PART_YearViewCopy" RenderTransformOrigin="0, 0.5"
                                            Opacity="0" Margin="2">
                                        <Border.Background>
                                            <VisualBrush Visual="{Binding ElementName=PART_YearView}" Stretch="UniformToFill"/>
                                        </Border.Background>
                                        <Border.RenderTransform>
                                            <TranslateTransform X="0"/>
                                        </Border.RenderTransform>
                                    </Border>
                                    <Grid x:Name="PART_YearView"
                                                 RenderTransformOrigin="0, 0.5">
                                        <Grid.RenderTransform>
                                            <TranslateTransform X="0" />
                                        </Grid.RenderTransform>
                                        <Grid.ColumnDefinitions>
                                            <ColumnDefinition Width="Auto"/>
                                            <ColumnDefinition Width="Auto"/>
                                            <ColumnDefinition Width="Auto"/>
                                            <ColumnDefinition Width="Auto"/>
                                        </Grid.ColumnDefinitions>
                                        <Grid.RowDefinitions>
                                            <RowDefinition Height="Auto"/>
                                            <RowDefinition Height="Auto"/>
                                            <RowDefinition Height="Auto"/>
                                        </Grid.RowDefinitions>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </wpf:Card>
                        <Rectangle x:Name="PART_DisabledVisual" Fill="{StaticResource DisabledColor}" Opacity="0" RadiusY="2" RadiusX="2" Stretch="Fill" Stroke="{StaticResource DisabledColor}" StrokeThickness="1" Visibility="Collapsed"/>
                    </Grid>
                    <ControlTemplate.Triggers>
                        <Trigger Property="IsEnabled" Value="False">
                            <Setter Property="Visibility" TargetName="PART_DisabledVisual" Value="Visible"/>
                        </Trigger>
                        <DataTrigger Binding="{Binding DisplayMode, RelativeSource={RelativeSource FindAncestor, AncestorType=hc:PersianCalendar}}" Value="Year">
                            <Setter Property="Visibility" TargetName="MonthViewWrapperGrid" Value="Hidden"/>
                            <Setter Property="Visibility" TargetName="YearViewWrapperGrid" Value="Visible"/>
                        </DataTrigger>
                        <DataTrigger Binding="{Binding DisplayMode, RelativeSource={RelativeSource FindAncestor, AncestorType=hc:PersianCalendar}}" Value="Decade">
                            <Setter Property="Visibility" TargetName="MonthViewWrapperGrid" Value="Hidden"/>
                            <Setter Property="Visibility" TargetName="YearViewWrapperGrid" Value="Visible"/>
                        </DataTrigger>
                        <EventTrigger RoutedEvent="Button.Click" SourceName="PART_NextButton">
                            <BeginStoryboard>
                                <Storyboard>
                                    <DoubleAnimation Storyboard.TargetName="CurrentDateTextBlock"
                                                     Storyboard.TargetProperty="(UIElement.RenderTransform).(TranslateTransform.X)"
                                                     EasingFunction="{StaticResource EasingFunction}"
                                                     AccelerationRatio="0.1" DecelerationRatio="0.89"
                                                     From="240" To="0" Duration="0:0:0.450"/>

                                    <DoubleAnimation Storyboard.TargetName="PART_MonthViewCopy"
                                                     Storyboard.TargetProperty="(UIElement.Opacity)"
                                                     From="1" To="0" Duration="0:0:0.450"/>

                                    <DoubleAnimation Storyboard.TargetName="PART_MonthViewCopy"
                                                     Storyboard.TargetProperty="(UIElement.RenderTransform).(TranslateTransform.X)"
                                                     From="0" To="-270" Duration="0:0:0.450"
                                                     AccelerationRatio="0.3" DecelerationRatio="0.69"/>

                                    <DoubleAnimation Storyboard.TargetName="PART_MonthView"
                                                     Storyboard.TargetProperty="(UIElement.RenderTransform).(TranslateTransform.X)"
                                                     From="270" To="0" Duration="0:0:0.450"
                                                     AccelerationRatio="0.3" DecelerationRatio="0.69"/>

                                    <DoubleAnimation Storyboard.TargetName="PART_YearViewCopy"
                                                     Storyboard.TargetProperty="(UIElement.Opacity)"
                                                     From="1" To="0" Duration="0:0:0.450"/>

                                    <DoubleAnimation Storyboard.TargetName="PART_YearViewCopy"
                                                     Storyboard.TargetProperty="(UIElement.RenderTransform).(TranslateTransform.X)"
                                                     From="0" To="-240" Duration="0:0:0.450"
                                                     AccelerationRatio="0.3" DecelerationRatio="0.69"/>

                                    <DoubleAnimation Storyboard.TargetName="PART_YearView"
                                                     Storyboard.TargetProperty="(UIElement.RenderTransform).(TranslateTransform.X)"
                                                     From="240" To="0" Duration="0:0:0.450"
                                                     AccelerationRatio="0.3" DecelerationRatio="0.69"/>
                                </Storyboard>
                            </BeginStoryboard>
                        </EventTrigger>
                        <EventTrigger RoutedEvent="Button.Click" SourceName="PART_PreviousButton">
                            <BeginStoryboard>
                                <Storyboard>
                                    <DoubleAnimation Storyboard.TargetName="CurrentDateTextBlock"
                                                     Storyboard.TargetProperty="(UIElement.RenderTransform).(TranslateTransform.X)"
                                                     EasingFunction="{StaticResource EasingFunction}"
                                                     AccelerationRatio="0.1" DecelerationRatio="0.89"
                                                     From="-240" To="0" Duration="0:0:0.450"/>

                                    <DoubleAnimation Storyboard.TargetName="PART_MonthViewCopy"
                                                     Storyboard.TargetProperty="(UIElement.Opacity)"
                                                     From="1" To="0" Duration="0:0:0.450"/>

                                    <DoubleAnimation Storyboard.TargetName="PART_MonthViewCopy"
                                                     Storyboard.TargetProperty="(UIElement.RenderTransform).(TranslateTransform.X)"
                                                     From="0" To="270" Duration="0:0:0.450"
                                                     AccelerationRatio="0.3" DecelerationRatio="0.69"/>

                                    <DoubleAnimation Storyboard.TargetName="PART_MonthView"
                                                     Storyboard.TargetProperty="(UIElement.RenderTransform).(TranslateTransform.X)"
                                                     From="-270" To="0" Duration="0:0:0.450"
                                                     AccelerationRatio="0.3" DecelerationRatio="0.69"/>

                                    <DoubleAnimation Storyboard.TargetName="PART_YearViewCopy"
                                                     Storyboard.TargetProperty="(UIElement.Opacity)"
                                                     From="1" To="0" Duration="0:0:0.450"/>

                                    <DoubleAnimation Storyboard.TargetName="PART_YearViewCopy"
                                                     Storyboard.TargetProperty="(UIElement.RenderTransform).(TranslateTransform.X)"
                                                     From="0" To="240" Duration="0:0:0.450"
                                                     AccelerationRatio="0.3" DecelerationRatio="0.69"/>

                                    <DoubleAnimation Storyboard.TargetName="PART_YearView"
                                                     Storyboard.TargetProperty="(UIElement.RenderTransform).(TranslateTransform.X)"
                                                     From="-240" To="0" Duration="0:0:0.450"
                                                     AccelerationRatio="0.3" DecelerationRatio="0.69"/>
                                </Storyboard>
                            </BeginStoryboard>
                        </EventTrigger>
                    </ControlTemplate.Triggers>
                </ControlTemplate>
            </Setter.Value>
        </Setter>
    </Style>

    <Style x:Key="MaterialDesignPersianCalendar" TargetType="hc:PersianCalendar">
        <Setter Property="Language" Value="fa"/>
        <Setter Property="Foreground" Value="{DynamicResource MaterialDesignBody}"/>
        <Setter Property="Background" Value="{DynamicResource MaterialDesignPaper}" />
        <Setter Property="CalendarDayButtonStyle" Value="{StaticResource MaterialDesignPersianCalendarDayButton}" />
        <Setter Property="CalendarButtonStyle" Value="{StaticResource MaterialDesignPersianCalendarButton}" />
        <Setter Property="Template">
            <Setter.Value>
                <ControlTemplate TargetType="hc:PersianCalendar">
                    <primitives:CalendarItem
                        x:Name="PART_CalendarItem"
                        Style="{DynamicResource MaterialDesignPersianCalendarItem}"
                        BorderBrush="{TemplateBinding BorderBrush}"
                        BorderThickness="{TemplateBinding BorderThickness}"
                        Background="{TemplateBinding Background}"
                        wpf:CalendarAssist.IsHeaderVisible="{TemplateBinding wpf:CalendarAssist.IsHeaderVisible}" />
                </ControlTemplate>
            </Setter.Value>
        </Setter>
    </Style>
</ResourceDictionary>
```

5. Now you can use it

```xml
<hc:PersianCalendar Style="{StaticResource MaterialDesignPersianCalendar}"/>
```

![MaterialDesignPersianCalendar](https://user-images.githubusercontent.com/9213496/120096036-7d583d00-c13e-11eb-8094-2227728aad31.png)
