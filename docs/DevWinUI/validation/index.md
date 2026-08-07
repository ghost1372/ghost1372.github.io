---
title: Validation
---

```xml
<Grid>
    <Grid.Resources>
        <DataTemplate x:Key="ValidationTemplate" x:DataType="x:String">
            <TextBlock Foreground="{ThemeResource SystemFillColorCriticalBrush}" Text="{x:Bind}" />
        </DataTemplate>
    </Grid.Resources>
    <Grid.ColumnDefinitions>
        <ColumnDefinition/>
        <ColumnDefinition/>
    </Grid.ColumnDefinitions>
    <StackPanel Spacing="6">
        <TextBox
                x:Name="NameBox"
                dev:Validation.ErrorTemplate="{StaticResource ValidationTemplate}"
                dev:Validation.ValidationPropertyName="Name"
                dev:Validation.ValidationProvider="{x:Bind UserInfo}"
                Header="Easy boxes with validation"
                PlaceholderText="Name"
                Style="{StaticResource ValidatingTextBoxStyle}"
                Text="{x:Bind UserInfo.Name, Mode=TwoWay}" />

        <TextBox
                x:Name="MailBox"
                dev:Validation.ErrorTemplate="{StaticResource ValidationTemplate}"
                dev:Validation.ValidationPropertyName="Mail"
                dev:Validation.ValidationProvider="{x:Bind UserInfo}"
                PlaceholderText="Mail"
                Style="{StaticResource ValidatingTextBoxStyle}"
                Text="{x:Bind UserInfo.Mail, Mode=TwoWay}" />

        <Button
                x:Name="CoolButton"
                Width="320"
                HorizontalAlignment="Center"
                Click="CoolButton_Click"
                Content="Cool button"
                IsEnabled="{x:Bind UserInfo.HasErrors.Equals(x:False), Mode=OneWay}"
                Style="{StaticResource AccentButtonStyle}" />
    </StackPanel>

    <Frame Name="frame" Grid.Column="1"/>
</Grid>
```

```cs
public sealed class UserInfo : INotifyDataErrorInfo, INotifyPropertyChanged
{
    public UserInfo()
    {
        ValidateName(_name);
        ValidateMail(_mail);
    }

    public event PropertyChangedEventHandler PropertyChanged;
    private void OnPropertyChanged([CallerMemberName] string propertyName = null)
        => PropertyChanged?.Invoke(this, new(propertyName));

    private string _name = string.Empty;
    public string Name
    {
        get => _name;
        set
        {
            if (_name != value)
            {
                _name = value;
                ValidateName(_name);
                OnPropertyChanged();
            }
        }
    }

    private string _mail = string.Empty;
    public string Mail
    {
        get => _mail;
        set
        {
            if (_mail != value)
            {
                _mail = value;
                ValidateMail(_mail);
                OnPropertyChanged();
            }
        }
    }

    private void ValidateName(string name)
    {
        var errors = new List<string>(3);
        if (name.Contains("1", StringComparison.InvariantCulture))
            errors.Add("Using Jungkook's favorite number is not allowed.");

        if (name.Length == 0)
            errors.Add("You'll need a name. I will not accept this.");
        else if (name.Length > 4)
            errors.Add("Your name is too long. Make it shorter.");

        if (name.Contains("LPK", StringComparison.InvariantCultureIgnoreCase))
            errors.Add("Name is forbidden for unknown reasons.");

        SetErrors("Name", errors);
    }

    private void ValidateMail(string mail)
    {
        var errors = new List<string>(2);
        if (mail.Contains("1", StringComparison.InvariantCulture))
            errors.Add("Using Jungkook's favorite number is not allowed.");

        if (!mail.Contains("@", StringComparison.InvariantCultureIgnoreCase))
            errors.Add("Invalid mail.");

        SetErrors("Mail", errors);
    }

    // Error validation
    private readonly Dictionary<string, ICollection<string>> _validationErrors = new();

    public bool HasErrors => _validationErrors.Count > 0;

    public event EventHandler<DataErrorsChangedEventArgs> ErrorsChanged;
    private void OnErrorsChanged(string propertyName)
    {
        ErrorsChanged?.Invoke(this, new(propertyName));
        OnPropertyChanged(nameof(HasErrors));
    }

    public IEnumerable GetErrors(string propertyName)
    {
        if (string.IsNullOrEmpty(propertyName) ||
            !_validationErrors.ContainsKey(propertyName))
            return null;

        return _validationErrors[propertyName];
    }

    private void SetErrors(string key, ICollection<string> errors)
    {
        if (errors.Any())
            _validationErrors[key] = errors;
        else
            _ = _validationErrors.Remove(key);

        OnErrorsChanged(key);
    }
}

```

and in MainWindow.xaml.cs

```cs
public UserInfo UserInfo { get; } = new();

private void CoolButton_Click(object sender, RoutedEventArgs e)
{
    frame.Navigate(typeof(AccountPage));
}
```

![Validation](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/Validation.png)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
