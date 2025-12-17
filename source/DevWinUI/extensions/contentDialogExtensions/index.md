---
title: ContentDialog Extensions
---

# ShowAsyncQueue
This Extension can fix following error:

{% note info %}
Only one ContentDialog can be shown at a time. To chain together more than one ContentDialog, handle the Closing event of the first ContentDialog. In the Closing event handler, call ShowAsync on the second dialog to show it.
{% endnote %}

```cs
contentDialog.ShowAsyncQueue();
```

# ShowAsyncDraggable
```cs
contentDialog.ShowAsyncDraggable();
```

# ShowAsyncQueueDraggable
```cs
contentDialog.ShowAsyncQueueDraggable();
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.