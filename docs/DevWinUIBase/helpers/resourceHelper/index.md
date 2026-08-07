---
title: ResourceHelper
---

```cs
var resourceHelper = new ResourceHelper();

// OR

var resourceHelper = new ResourceHelper(new ResourceManager());

```

# GetAllResourcesKeys

```cs
var getAllResources = resourceHelper.GetAllResourcesKeys();
```

# SetLanguage

```cs
resourceHelper.SetLanguage("fa");
```
# GetString

```cs
var value = resourceHelper.GetString("Test");
```

# MVVM Pattern

```cs
services.AddSingleton<IResourceHelper, ResourceHelper>();


public MainViewModel(IResourceHelper resourceHelper)
{
    resourceHelper.GetString("Test");
}

```