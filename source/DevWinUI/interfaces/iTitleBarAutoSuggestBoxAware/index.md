---
title: ITitleBarAutoSuggestBoxAware
---

Consider the following situation:
- MVVM Pattern
- AutosuggestBox in the title bar
- Doing something like searching through a box in all views

implement `ITitleBarAutoSuggestBoxAware` in your viewmodels:

```cs
public partial class ServerViewModel : ITitleBarAutoSuggestBoxAware
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
private void AutoSuggestBox_TextChanged(AutoSuggestBox sender, AutoSuggestBoxTextChangedEventArgs args)
{
    var viewModel = NavFrame.GetPageViewModel();
var frameContentAOTSafe = NavFrame?.Content;
if (frameContentAOTSafe is Page page && page?.DataContext is ITitleBarAutoSuggestBoxAware viewModelAOTSafe)
{
    viewModelAOTSafe.OnAutoSuggestBoxTextChanged(sender, args);
}
else if (viewModel != null && viewModel is ITitleBarAutoSuggestBoxAware titleBarAutoSuggestBoxAware)
{
    titleBarAutoSuggestBoxAware.OnAutoSuggestBoxTextChanged(sender, args);
}
}

private void AutoSuggestBox_QuerySubmitted(AutoSuggestBox sender, AutoSuggestBoxQuerySubmittedEventArgs args)
{
    var viewModel = NavFrame.GetPageViewModel();
var frameContentAOTSafe = NavFrame?.Content;
if (frameContentAOTSafe is Page page && page?.DataContext is ITitleBarAutoSuggestBoxAware viewModelAOTSafe)
{
    viewModelAOTSafe.OnAutoSuggestBoxQuerySubmitted(sender, args);
}
else if (viewModel != null && viewModel is ITitleBarAutoSuggestBoxAware titleBarAutoSuggestBoxAware)
{
    titleBarAutoSuggestBoxAware.OnAutoSuggestBoxQuerySubmitted(sender, args);
}
}
```