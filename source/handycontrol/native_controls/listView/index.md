---
title: ListView
---

# Styles
|Name|
|-|
|ListViewBaseStyle|
|ListViewItemBaseStyle.Small|
|ListView.Small|

`HandyControl` only provides a default `ListView` style, which can be customized according to personal needs.

{% note info no-icon %}
Example：
{% code lang:xml %}
    <ListView ItemsSource="{Binding DataList}" Margin="20">
        <ListView.View>
            <GridView>
                <GridViewColumn Width="80" Header="title1" DisplayMemberBinding="{Binding Index}"/>
                <GridViewColumn Width="100" Header="title2" DisplayMemberBinding="{Binding Name}"/>
                <GridViewColumn Width="200" Header="title3" DisplayMemberBinding="{Binding Remark}"/>
            </GridView>
        </ListView.View>
    </ListView>
{% endcode %}

![ListView.DefaultStyle](https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Doc/native_controls/ListView.DefaultStyle.png)

{% endnote %}