---
title: NTPClient
---

An NTP client library for querying NTP servers to retrieve accurate network time. Supports NTPv3 and NTPv4.

## Features
- NTPv3 and NTPv4: Configurable protocol version
- Clock offset calculation: Computes the time difference between client and server
- Round-trip delay: Measures network round-trip time
- Async/await: Fully asynchronous API with cancellation support
- OpenTelemetry: Built-in ActivitySource tracing for NTP queries

# Methods
|Name|
|-|
|QueryAsync|
|Dispose|

```cs
// Query an NTP server using NTPv4 (default)
using var client = new NtpClient("pool.ntp.org");
var response = await client.QueryAsync();

Console.WriteLine($"Server time: {response.TransmitTimestamp}");
Console.WriteLine($"Clock offset: {response.ClockOffset}");
Console.WriteLine($"Round-trip delay: {response.RoundTripDelay}");
Console.WriteLine($"Stratum: {response.Stratum}");
```

# Using NTPv3
```cs
using var client = new NtpClient("pool.ntp.org", new NtpClientOptions
{
    Version = NtpVersion.V3,
});
var response = await client.QueryAsync();
```

# Cancellation and timeout
```cs
using var cts = new CancellationTokenSource(TimeSpan.FromSeconds(10));
using var client = new NtpClient("time.google.com");
var response = await client.QueryAsync(cts.Token);
```

# Custom port
```cs
using var client = new NtpClient("localhost", new NtpClientOptions
{
    Port = 12345,
});
var response = await client.QueryAsync();
```

![NtpClient](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/NtpClient.png)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.