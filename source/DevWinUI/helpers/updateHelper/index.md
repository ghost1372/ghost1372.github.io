---
title: UpdateHelper
---

you can use UpdateHelper for checking application updates from github release page

first you must create a new release tag in github repository, tag version must be in this format : `1.0.0.0`
now we can check for update with github username and github repository

```cs
var update = await UpdateHelper.CheckUpdateAsync("Ghost1372", "DevWinUI");

if (update.StableRelease.IsExistNewVersion)
{
    Debug.WriteLine(update.StableRelease.ReleaseUrl);
    Debug.WriteLine(update.StableRelease.CreatedAt.ToString());
    Debug.WriteLine(update.StableRelease.PublishedAt.ToString());
    
    //Asset is List so maybe there is more than one file you can use forech or increase index
    Debug.WriteLine(update.StableRelease.Assets[0].Url);
    Debug.WriteLine(update.StableRelease.IsPreRelease.ToString());
    Debug.WriteLine(update.StableRelease.Assets[0].Size.ToString());
    Debug.WriteLine(update.StableRelease.Version);
    Debug.WriteLine(update.StableRelease.Changelog);
}
else if (update.PreRelease.IsExistNewVersion)
{
    Debug.WriteLine(update.PreRelease.ReleaseUrl);
    Debug.WriteLine(update.PreRelease.CreatedAt.ToString());
    Debug.WriteLine(update.PreRelease.PublishedAt.ToString());
    
    //Asset is List so maybe there is more than one file you can use forech or increase index
    Debug.WriteLine(update.PreRelease.Assets[0].Url);
    Debug.WriteLine(update.PreRelease.IsPreRelease.ToString());
    Debug.WriteLine(update.PreRelease.Assets[0].Size.ToString());
    Debug.WriteLine(update.PreRelease.Version);
    Debug.WriteLine(update.PreRelease.Changelog);
}
else
{
    Debug.WriteLine("You are using latest version");
}
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
