---
title: SpeedGraph
---

# Property

|Name|
|-|
|MaxSpeed|
|Total|
|BackgroundCircleDistance|
|SpeedLineVisibility|
|SpeedTextVisibility|
|SpeedText|
|AutoUpdateSpeedText|


# Methods
|Name|
|-|
|AddPoint|
|SetSpeed|
|ResetGraph|
|Error|
|Pause|
|Normal|

# Example

```xml
 <dev:SpeedGraph x:Name="SpeedGraphSample" />
```

```cs
ulong _totalBytes = 1024UL * 1024 * 500; // 500 MB
SpeedGraphSample.Total = _totalBytes;
SpeedGraphSample.MaxSpeed = 1024;
SpeedGraphSample.SetSpeed(50, 500);
```

Here we can simulate a file copy operation:

```cs
private bool _isSimulating;
private Random _random = new();

private async void StartFileCopy()
{
    ulong _totalBytes = 1024UL * 1024 * 500; // 500 MB

    SpeedGraphSample.Normal();

    if (_isSimulating)
        return;

    SpeedGraphSample.ResetGraph();

    _isSimulating = true;

    ulong copiedBytes = 0;
    SpeedGraphSample.Total = _totalBytes;

    while (copiedBytes < _totalBytes)
    {
        // Simulate varying copy speed (8–100 MB/s)
        ulong speed = (ulong)(_random.Next(8, 100) * 1024 * 1024);

        // Add progress (simulate ~1/3 second per chunk)
        copiedBytes += speed / 3;
        if (copiedBytes > _totalBytes)
            copiedBytes = _totalBytes;

        double percent = (double)copiedBytes / _totalBytes * 100.0;

        // Update SpeedGraph
        SpeedGraphSample.SetSpeed(percent, speed);
        // Update text

        // Wait before next tick
        await Task.Delay(100);
    }

    _isSimulating = false;
}
```

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/SpeedGraph.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
