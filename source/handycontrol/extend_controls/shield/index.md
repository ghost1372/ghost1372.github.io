---
title: Shield
---

The badge consists of the name of the left half and the value of the right half. Click the badge to open the corresponding link.

```cs
[ContentProperty(nameof(Status))]
public class Shield : ButtonBase
```

# Attributes
|Property|Description|Default Value|Remarks|
|-|-|-|-|
|Subject|Name|||
|Status|Value|||
|Color|Color||||

# Case

```xml
<StackPanel Orientation="Horizontal" Margin="32">
    <hc:Shield Subject=".net" Status=">=4.0" Color="#1182c3"/>
    <hc:Shield Subject="c#" Status="7.0" Margin="4,0,0,0" Color="#1182c3"/>
    <hc:Shield Subject="IDE" Status="2017" Margin="4,0,0,0" Color="#1182c3"/>
    <hc:Shield Subject="chat" Status="on gitter" Margin="4,0,0,0" Color="#4eb899" Command="hc:ControlCommands.OpenLink" CommandParameter="https://gitter.im/HandyControl/Lobby?utm_source=badge&amp;utm_medium=badge&amp;utm_campaign=pr-badge&amp;utm_content=badge"/>
    <hc:Shield Subject="qq" Status="714704041" Margin="4,0,0,0" Color="#d8624c" Command="hc:ControlCommands.OpenLink" CommandParameter="http://shang.qq.com/wpa/qunwpa?idkey=a571e5553c9d41e49c4f22f3a8b2865451497a795ff281fedf3285def247efc1"/>
</StackPanel>
```

![Shield](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Resources/Shield.png)