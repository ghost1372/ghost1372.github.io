---
title: RelativePanel
---

RelativePanel is a layout container that is useful for creating UI that do not have a clear linear pattern  
If your UI consists of multiple nested panels, RelativePanel is a good option to consider.

You can use the additional properties of `RelativePanel` to relatively layout its content.
See: [RelativePanel Class](https://docs.microsoft.com/en-us/uwp/api/Windows.UI.Xaml.Controls.RelativePanel)

```cs
public class RelativePanel : Panel
```

# Attributes
|Property|Description|Default Value|Remarks|
|-|-|-|-|
|Above|Make this element above the target element|||
|AlignBottomWith|Align this element with the bottom of the target element|||
|AlignBottomWithPanel|Align this element with the bottom of the Panel|false||
|AlignHorizontalCenterWith|Align this element horizontally with the target element in the center|||
|AlignHorizontalCenterWithPanel|Align this element horizontally with the Panel in the center|false||
|AlignLeftWith|Align this element with the left side of the target element|||
|AlignLeftWithPanel|Align this element with the left side of the Panel|false||
|AlignRightWith|Align this element with the right side of the target element|||
|AlignRightWithPanel|Align this element with the right side of the Panel|false||
|AlignTopWith|Align this element with the top of the target element|||
|AlignTopWithPanel|Align this element with the top side of the Panel|false||
|AlignVerticalCenterWith|Align this element with the target element vertically in the center|||
|AlignVerticalCenterWithPanel|Make this element and Panel vertically aligned in the center|false||
|Below|Make this element below the target element|||
|LeftOf|Make this element to the left of the target element|||
|RightOf|Make this element to the right of the target element||||

# Case

```xml
<hc:RelativePanel Width="620" Height="700" Margin="32">
    <Border Name="Rect1" Background="{DynamicResource DangerBrush}" Height="50" Width="50">
        <TextBlock Text="Rect1" Foreground="White" FontWeight="Bold" HorizontalAlignment="Center" VerticalAlignment="Center"/>
    </Border>
    <Border Name="Rect2" Background="{DynamicResource PrimaryBrush}" Height="50" Width="50" hc:RelativePanel.AlignHorizontalCenterWithPanel="True">
        <TextBlock Text="Rect2" Foreground="White" FontWeight="Bold" HorizontalAlignment="Center" VerticalAlignment="Center"/>
    </Border>
    <Border Name="Rect3" Background="{DynamicResource SuccessBrush}" Height="50" Width="50" hc:RelativePanel.AlignRightWithPanel="True">
        <TextBlock Text="Rect3" Foreground="White" FontWeight="Bold" HorizontalAlignment="Center" VerticalAlignment="Center"/>
    </Border>
    <Border Name="Rect4" Background="{DynamicResource DangerBrush}" Height="50" Width="50" hc:RelativePanel.AlignBottomWithPanel="True">
        <TextBlock Text="Rect4" Foreground="White" FontWeight="Bold" HorizontalAlignment="Center" VerticalAlignment="Center"/>
    </Border>
    <Border Name="Rect5" Background="{DynamicResource PrimaryBrush}" Height="50" Width="50" hc:RelativePanel.AlignBottomWithPanel="True" hc:RelativePanel.AlignHorizontalCenterWithPanel="True">
        <TextBlock Text="Rect5" Foreground="White" FontWeight="Bold" HorizontalAlignment="Center" VerticalAlignment="Center"/>
    </Border>
    <Border Name="Rect6" Background="{DynamicResource SuccessBrush}" Height="50" Width="50" hc:RelativePanel.AlignBottomWithPanel="True" hc:RelativePanel.AlignRightWithPanel="True">
        <TextBlock Text="Rect6" Foreground="White" FontWeight="Bold" HorizontalAlignment="Center" VerticalAlignment="Center"/>
    </Border>
    <Border Name="Rect7" Background="{DynamicResource PrimaryBrush}" Height="50" hc:RelativePanel.RightOf="{Binding ElementName=Rect1}">
        <TextBlock Text="Rect7 (RightOf Rect1)" Padding="10,0" Foreground="White" FontWeight="Bold" HorizontalAlignment="Center" VerticalAlignment="Center"/>
    </Border>
    <Border Name="Rect8" Background="{DynamicResource SuccessBrush}" Height="50" hc:RelativePanel.Below="{Binding ElementName=Rect7}">
        <TextBlock Text="Rect8 (Below Rect7)" Padding="10,0" Foreground="White" FontWeight="Bold" HorizontalAlignment="Center" VerticalAlignment="Center"/>
    </Border>
    <Border Name="Rect9" Background="{DynamicResource PrimaryBrush}" Height="140" Width="460" hc:RelativePanel.AlignHorizontalCenterWithPanel="True" hc:RelativePanel.AlignVerticalCenterWithPanel="True">
        <TextBlock Text="Rect9" Padding="10" Foreground="White" FontWeight="Bold" HorizontalAlignment="Center" VerticalAlignment="Top"/>
    </Border>
    <Border Name="Rect10" Background="{DynamicResource DangerBrush}" Width="50" hc:RelativePanel.RightOf="{Binding ElementName=Rect9}" hc:RelativePanel.AlignVerticalCenterWith="{Binding ElementName=Rect9}">
        <TextBlock Text="Rect14 (RightOf Rect9, AlignVerticalCenterWith Rect9)" Padding="10,0" Foreground="White" FontWeight="Bold" HorizontalAlignment="Center" VerticalAlignment="Center">
            <TextBlock.LayoutTransform>
                <TransformGroup>
                    <RotateTransform Angle="-90"/>
                </TransformGroup>
            </TextBlock.LayoutTransform>
        </TextBlock>
    </Border>
    <Border Name="Rect11" Background="{DynamicResource DangerBrush}" Height="50" hc:RelativePanel.AlignBottomWith="{Binding ElementName=Rect9}" hc:RelativePanel.AlignHorizontalCenterWith="{Binding ElementName=Rect9}">
        <TextBlock Text="Rect11 (AlignBottomWith Rect9, AlignHorizontalCenterWith Rect9)" Padding="10,0" Foreground="White" FontWeight="Bold" HorizontalAlignment="Center" VerticalAlignment="Center"/>
    </Border>
    <Border Name="Rect12" Background="{DynamicResource DangerBrush}" Height="50" hc:RelativePanel.Below="{Binding ElementName=Rect8}" hc:RelativePanel.AlignLeftWith="{Binding ElementName=Rect7}">
        <TextBlock Text="Rect12 (Below Rect8, AlignLeftWith Rect7)" Padding="10,0" Foreground="White" FontWeight="Bold" HorizontalAlignment="Center" VerticalAlignment="Center"/>
    </Border>
    <Border Name="Rect13" Background="{DynamicResource PrimaryBrush}" Height="50" hc:RelativePanel.Below="{Binding ElementName=Rect12}" hc:RelativePanel.AlignRightWith="{Binding ElementName=Rect12}">
        <TextBlock Text="Rect13 (Below Rect12, AlignRightWith Rect12)" Padding="10,0" Foreground="White" FontWeight="Bold" HorizontalAlignment="Center" VerticalAlignment="Center"/>
    </Border>
    <Border Name="Rect14" Background="{DynamicResource SuccessBrush}" Height="50" hc:RelativePanel.Above="{Binding ElementName=Rect9}" hc:RelativePanel.AlignRightWith="{Binding ElementName=Rect9}">
        <TextBlock Text="Rect14 (Above Rect9, AlignRightWith Rect9)" Padding="10,0" Foreground="White" FontWeight="Bold" HorizontalAlignment="Center" VerticalAlignment="Center"/>
    </Border>
    <Border Name="Rect15" Background="{DynamicResource DangerBrush}" Height="50" hc:RelativePanel.LeftOf="{Binding ElementName=Rect2}" hc:RelativePanel.AlignTopWith="{Binding ElementName=Rect9}">
        <TextBlock Text="Rect15 (LeftOf Rect2, AlignTopWith Rect9)" Padding="10,0" Foreground="White" FontWeight="Bold" HorizontalAlignment="Center" VerticalAlignment="Center"/>
    </Border>
</hc:RelativePanel>
```

![RelativePanel](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Resources/RelativePanel.png)