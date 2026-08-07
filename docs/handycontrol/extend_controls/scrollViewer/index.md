---
title: ScrollViewer
---

An extension to the native scroll view.

```cs
public class ScrollViewer : System.Windows.Controls.ScrollViewer
```

# Attributes
|Property|Description|Default Value|Remarks|
|-|-|-|-|
|CanMouseWheel|Whether to respond to mouse wheel operation|true||
|IsInertiaEnabled|Whether to support inertial scrolling|false||
|IsPenetrating|Is it possible to penetrate the click|false|||

# Case

```xml
<Grid>
    <Grid.RowDefinitions>
        <RowDefinition Height="Auto"/>
        <RowDefinition/>
    </Grid.RowDefinitions>
    <Border BorderThickness="1" BorderBrush="{DynamicResource BorderBrush}">
        <hc:ScrollViewer Orientation="Horizontal" HorizontalScrollBarVisibility="Auto" VerticalScrollBarVisibility="Hidden" IsInertiaEnabled="True">
            <StackPanel Orientation="Horizontal">
                <Border Style="{StaticResource BorderRegion}" Width="200" Height="200" Margin="10,10,32,10">
                    <Border Background="{DynamicResource PrimaryBrush}">
                        <TextBlock Text="ContentDemoStr" VerticalAlignment="Center" HorizontalAlignment="Center" Foreground="White"/>
                    </Border>
                </Border>
                <Border Style="{StaticResource BorderRegion}" Width="200" Height="200" Margin="10,10,32,10">
                    <Border Background="{DynamicResource PrimaryBrush}">
                        <TextBlock Text="ContentDemoStr" VerticalAlignment="Center" HorizontalAlignment="Center" Foreground="White"/>
                    </Border>
                </Border>
                <Border Style="{StaticResource BorderRegion}" Width="200" Height="200" Margin="10,10,32,10">
                    <Border Background="{DynamicResource PrimaryBrush}">
                        <TextBlock Text="ContentDemoStr" VerticalAlignment="Center" HorizontalAlignment="Center" Foreground="White"/>
                    </Border>
                </Border>
                <Border Style="{StaticResource BorderRegion}" Width="200" Height="200" Margin="10,10,32,10">
                    <Border Background="{DynamicResource PrimaryBrush}">
                        <TextBlock Text="ContentDemoStr" VerticalAlignment="Center" HorizontalAlignment="Center" Foreground="White"/>
                    </Border>
                </Border>
                <Border Style="{StaticResource BorderRegion}" Width="200" Height="200" Margin="10,10,32,10">
                    <Border Background="{DynamicResource PrimaryBrush}">
                        <TextBlock Text="ContentDemoStr" VerticalAlignment="Center" HorizontalAlignment="Center" Foreground="White"/>
                    </Border>
                </Border>
            </StackPanel>
        </hc:ScrollViewer>
    </Border>
    <Border Grid.Row="1" BorderThickness="1" BorderBrush="{DynamicResource BorderBrush}" Margin="0,16,0,0">
        <hc:ScrollViewer IsInertiaEnabled="True">
            <WrapPanel Orientation="Horizontal">
                <Border Style="{StaticResource BorderRegion}" Width="200" Height="200" Margin="10,10,32,10">
                    <Border Background="{DynamicResource PrimaryBrush}">
                        <TextBlock Text="ContentDemoStr" VerticalAlignment="Center" HorizontalAlignment="Center" Foreground="White"/>
                    </Border>
                </Border>
                <Border Style="{StaticResource BorderRegion}" Width="200" Height="200" Margin="10,10,32,10">
                    <Border Background="{DynamicResource PrimaryBrush}">
                        <TextBlock Text="ContentDemoStr" VerticalAlignment="Center" HorizontalAlignment="Center" Foreground="White"/>
                    </Border>
                </Border>
                <Border Style="{StaticResource BorderRegion}" Width="200" Height="200" Margin="10,10,32,10">
                    <Border Background="{DynamicResource PrimaryBrush}">
                        <TextBlock Text="ContentDemoStr" VerticalAlignment="Center" HorizontalAlignment="Center" Foreground="White"/>
                    </Border>
                </Border>
                <Border Style="{StaticResource BorderRegion}" Width="200" Height="200" Margin="10,10,32,10">
                    <Border Background="{DynamicResource PrimaryBrush}">
                        <TextBlock Text="ContentDemoStr" VerticalAlignment="Center" HorizontalAlignment="Center" Foreground="White"/>
                    </Border>
                </Border>
                <Border Style="{StaticResource BorderRegion}" Width="200" Height="200" Margin="10,10,32,10">
                    <Border Background="{DynamicResource PrimaryBrush}">
                        <TextBlock Text="ContentDemoStr" VerticalAlignment="Center" HorizontalAlignment="Center" Foreground="White"/>
                    </Border>
                </Border>
            </WrapPanel>
        </hc:ScrollViewer>
    </Border>
</Grid>
```

![ScrollViewer](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/extend_controls/ScrollViewer.gif)