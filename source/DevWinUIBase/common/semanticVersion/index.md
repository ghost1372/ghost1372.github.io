---
title: SemanticVersion
---

# Methods

|Name|
|-|
|Parse|
|TryParse|
|NextMajorVersion|
|NextMinorVersion|
|NextPatchVersion|

# Example

```cs
SemanticVersion.TryParse("1.2.3-apha.1+build.1.2", out SemanticVersion version);

// version.HasMetadata
// version.Metadata
// version.IsPrerelease
// version.PrereleaseLabels
// version.Major
// version.Minor
// version.Patch
```

{% note info %}
1.2.3
v1.2.3
1.2.3-alpha
1.2.3-alpha.1
1.2.3-apha.1+build
1.2.3-apha.1+build.1.2
1.2.3+build
1.2.3+build.1.2
{% endnote %}


# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.