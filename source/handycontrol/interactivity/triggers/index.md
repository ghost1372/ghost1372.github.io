---
title: Triggers
---

You can use Interaction Triggers to handle user-initiated events

# EventTrigger

## EventToCommand
You can use this method if you want to handle event and pass event args to command
example:

{% note info %}
you should write event name in `EventName` Section
{% endnote %}

``` xml
 <hc:SearchBar>
    <hc:Interaction.Triggers>
        <hc:EventTrigger EventName="SearchStarted">
            <hc:EventToCommand Command="{Binding OnSearchStartedCommand}" PassEventArgsToCommand="True"/>
        </hc:EventTrigger>
    </hc:Interaction.Triggers>
</hc:SearchBar>
```

## InvokeCommandAction

``` xml
 <hc:Interaction.Triggers>
        <hc:EventTrigger EventName="MouseLeftButtonDown" >
            <hc:InvokeCommandAction Command="{Binding LeftMouseButtonDownCommand}" CommandParameter="test" />
        </hc:EventTrigger>
 </hc:Interaction.Triggers>
```

# LaunchUriOrFileAction
Open Url or File

``` xml
<Button x:Name="button" Content="Click Me">
    <hc:Interaction.Triggers>
        <hc:EventTrigger EventName="Click" SourceObject="{Binding ElementName=button}">
            <hc:LaunchUriOrFileAction Path="https://ghost1372.github.io" />
        </hc:EventTrigger>
    </hc:Interaction.Triggers>
</Button>
```