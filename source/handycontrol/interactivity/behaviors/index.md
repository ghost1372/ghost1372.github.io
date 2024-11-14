---
title: Behaviors
---

# FluidMoveBehavior

``` xml
<StackPanel x:Name="Panel" Grid.Row="0">
    <hc:Interaction.Behaviors>
        <hc:FluidMoveBehavior Duration="00:00:01" AppliesTo="Children">
            <hc:FluidMoveBehavior.EaseY>
                <BounceEase EasingMode="EaseOut" Bounces="2" />
            </hc:FluidMoveBehavior.EaseY>
        </hc:FluidMoveBehavior>
    </hc:Interaction.Behaviors>
</StackPanel>
```

now add items:
``` CS
 Rectangle rect = new Rectangle();
 rect.Height = 50;
 rect.Width = 50;
 rect.Fill = Brushes.DeepPink;
 rect.Margin = new Thickness(5.0);
 this.Panel.Children.Add(rect);
```
or remove items:
``` CS
if (this.Panel.Children.Count > 0)
{
    this.Panel.Children.RemoveAt(0);
}
```

# MouseDragElementBehavior
``` xml
<Rectangle Width="40" Height="40" Fill="DeepPink">
    <hc:Interaction.Behaviors>
        <hc:MouseDragElementBehavior/>
    </hc:Interaction.Behaviors>
</Rectangle>
```