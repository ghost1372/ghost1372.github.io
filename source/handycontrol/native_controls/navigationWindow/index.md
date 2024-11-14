---
title: NavigationWindow
---


Implicit styles are not automatically applied to windows in `wpf`, and related methods are provided in `hc` to solve this problem.

{% note info %}
The default style of the navigationWindow can be set via 
{% code lang:cs %}
ConfigHelper.Instance.SetNavigationWindowDefaultStyle();
{% endcode %}
{% endnote %}

{% code lang:xml %}
<NavigationWindow x:Class="HandyControlDemo.Window.NavigationWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        WindowStartupLocation="CenterScreen"
        Title="Title" 
        Height="450" 
        Width="800">
</NavigationWindow>
{% endcode %}

{% code lang:cs %}
private readonly List<Page> _pageList;

        public NavigationWindow()
        {
            InitializeComponent();

            AddHandler(ButtonBase.ClickEvent, new RoutedEventHandler(Button_Click));

            _pageList = new List<Page>();
            for (var i = 0; i < 5; i++)
            {
                _pageList.Add(CreatePage(i));
            }

            Navigate(_pageList[0]);
        }

        private Page CreatePage(int index)
        {
            var indexStr = index.ToString();
            var button = new Button
            {
                HorizontalAlignment = HorizontalAlignment.Center,
                VerticalAlignment = VerticalAlignment.Center,
                Content = indexStr,
                Width = 320,
                Tag = indexStr
            };

            return new Page
            {
                Title = indexStr,
                Content = button
            };
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            if (e.OriginalSource is Button button && button.Tag is string tag)
            {
                var index = tag.Value<int>() + 1;
                Navigate(index >= _pageList.Count ? _pageList[0] : _pageList[index]);
            }
        }
    }
{% endcode %}
