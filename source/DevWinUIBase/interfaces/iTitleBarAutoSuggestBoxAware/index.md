---
title: ITitleBarAutoSuggestBoxAware
---

Consider the following situation:
- MVVM Pattern
- AutosuggestBox in the title bar
- Doing something like searching through a box in all views

implement `ITitleBarAutoSuggestBoxAware` in your viewmodels:

```cs
public partial class GalleryViewModel : ITitleBarAutoSuggestBoxAware
{
    public void OnAutoSuggestBoxTextChanged(AutoSuggestBox sender, AutoSuggestBoxTextChangedEventArgs args)
    {
        Search(sender.Text);
    }

    public void OnAutoSuggestBoxQuerySubmitted(AutoSuggestBox sender, AutoSuggestBoxQuerySubmittedEventArgs args)
    {
        Search(sender.Text);
    }
}
```

and in your MainPage or wherever your box is located:

```cs
private void OnTextChanged(AutoSuggestBox sender, AutoSuggestBoxTextChangedEventArgs args)
{
    AutoSuggestBoxHelper.OnITitleBarAutoSuggestBoxTextChangedEvent(sender, args, NavFrame);
}

private void OnQuerySubmitted(AutoSuggestBox sender, AutoSuggestBoxQuerySubmittedEventArgs args)
{
    AutoSuggestBoxHelper.OnITitleBarAutoSuggestBoxQuerySubmittedEvent(sender, args, NavFrame);
}
```

then you should set DataContext to your ViewModel:

```cs
public GalleryPage()
{
    ViewModel = App.GetService<GalleryViewModel>();
    this.InitializeComponent();
    DataContext = ViewModel;
}
```

```cs
public ArchivePage()
{
    ViewModel = App.GetService<ArchiveViewModel>();
    this.InitializeComponent();
    DataContext = ViewModel;
}
```