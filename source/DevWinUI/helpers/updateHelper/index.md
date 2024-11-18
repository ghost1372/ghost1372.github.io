---
title: UpdateHelper
---

you can use UpdateHelper for checking application updates from github release page

first you must create a new release tag in github repository, tag version must be in this format : `1.0.0.0`
now we can check for update with github username and github repository

```cs
var ver = await UpdateHelper.CheckUpdateAsync("Ghost1372", "DevWinUI");
if(ver.IsExistNewVersion)
{
    Debug.WriteLine(ver.ReleaseUrl);
    Debug.WriteLine(ver.CreatedAt.ToString());
    Debug.WriteLine(ver.PublishedAt.ToString());
    
    //Asset is List so maybe there is more than one file you can use forech or increase index
    Debug.WriteLine(ver.Assets[0].Url);
    Debug.WriteLine(ver.IsPreRelease.ToString());
    Debug.WriteLine(ver.Assets[0].Size.ToString());
    Debug.WriteLine(ver.Version);
    Debug.WriteLine(ver.Changelog);
}
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
