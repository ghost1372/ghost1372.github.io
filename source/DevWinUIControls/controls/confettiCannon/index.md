---
title: ConfettiCannon
---

# Methods

|Name|
|-|
|Fire|
|FireBasic|
|FireRandomDirection|
|FireRealistic|
|FireFireworks|
|FireStars|
|FireSnow|
|FireSchoolPride|

# Example

```cs
ConfettiCannonSample.FireBasic();
```

```xml
<dev:ConfettiCannon x:Name="ConfettiCannonSample" />
```

# Advanced

```cs
ConfettiCannonSample.Fire(new ConfettiCannonOptions());


public void FireBasic()
{
    ConfettiCannonSample.Fire(new ConfettiCannonOptions
    {
        ParticleCount = 100,
        Spread = 70,
        Origin = new Windows.Foundation.Point(0.5, 0.6)
    });
}

public void FireRandomDirection()
{
    var random = new Random();
    ConfettiCannonSample.Fire(new ConfettiCannonOptions
    {
        Angle = random.Next(55, 125),
        Spread = random.Next(50, 70),
        ParticleCount = random.Next(50, 100),
        Origin = new Windows.Foundation.Point(0.5, 0.6)
    });
}

public void FireRealistic()
{
    const int count = 200;

    Fire(0.25, new ConfettiCannonOptions { Spread = 26, StartVelocity = 55 });
    Fire(0.2, new ConfettiCannonOptions { Spread = 60 });
    Fire(0.35, new ConfettiCannonOptions { Spread = 100, Decay = 0.91, Scalar = 0.8 });
    Fire(0.1, new ConfettiCannonOptions { Spread = 120, StartVelocity = 25, Decay = 0.92, Scalar = 1.2 });
    Fire(0.1, new ConfettiCannonOptions { Spread = 120, StartVelocity = 45 });

    void Fire(double particleRatio, ConfettiCannonOptions options)
    {
        options.ParticleCount = (int)Math.Floor(count * particleRatio);
        ConfettiCannonSample.Fire(options);
    }
}

public void FireFireworks()
{
    const int duration = 15 * 1000;
    var random = new Random();
    var animationEnd = DateTime.Now + TimeSpan.FromMilliseconds(duration);
    var timer = new DispatcherTimer
    {
        Interval = TimeSpan.FromMilliseconds(250)
    };
    timer.Tick += (_, __) =>
    {
        double timeLeft = (animationEnd - DateTime.Now).TotalMilliseconds;

        if (timeLeft <= 0)
        {
            timer.Stop();
            return;
        }

        var particleCount = (int)(50 * (timeLeft / duration));
        ConfettiCannonSample.Fire(new ConfettiCannonOptions
        {
            StartVelocity = 30,
            Spread = 360,
            Ticks = 60,
            ParticleCount = particleCount,
            Origin = new Windows.Foundation.Point(RandomInRange(0.1, 0.3), random.NextDouble() - 0.2)
        });
        ConfettiCannonSample.Fire(new ConfettiCannonOptions
        {
            StartVelocity = 30,
            Spread = 360,
            Ticks = 60,
            ParticleCount = particleCount,
            Origin = new Windows.Foundation.Point(RandomInRange(0.7, 0.9), random.NextDouble() - 0.2)
        });
    };
    timer.Start();
}

public void FireStars()
{
    void Shoot()
    {
        ConfettiCannonSample.Fire(new ConfettiCannonOptions
        {
            Spread = 360,
            Ticks = 50,
            Gravity = 0,
            Decay = 0.94,
            StartVelocity = 30,
            Colors = new() { ColorHelper.GetColorFromHex("#FFE400"), ColorHelper.GetColorFromHex("#FFBD00"), ColorHelper.GetColorFromHex("#E89400"), ColorHelper.GetColorFromHex("#FFCA6C"), ColorHelper.GetColorFromHex("#FDFFB8") },
            ParticleCount = 40,
            Scalar = 1.2,
            Shapes = new() { "star" }
        });
        ConfettiCannonSample.Fire(new ConfettiCannonOptions
        {
            Spread = 360,
            Ticks = 50,
            Gravity = 0,
            Decay = 0.94,
            StartVelocity = 30,
            Colors = new() { ColorHelper.GetColorFromHex("#FFE400"), ColorHelper.GetColorFromHex("#FFBD00"), ColorHelper.GetColorFromHex("#E89400"), ColorHelper.GetColorFromHex("#FFCA6C"), ColorHelper.GetColorFromHex("#FDFFB8") },
            ParticleCount = 10,
            Scalar = 0.75,
            Shapes = new() { "circle" }
        });
    }

    SetTimeout(Shoot, 0);
    SetTimeout(Shoot, 100);
    SetTimeout(Shoot, 200);
}

public void FireSnow()
{
    const int duration = 15 * 1000;

    var random = new Random();
    DateTime animationEnd = DateTime.Now + TimeSpan.FromMilliseconds(duration);
    double skew = 1;

    var timer = new DispatcherTimer { Interval = TimeSpan.FromMilliseconds(16) };
    timer.Tick += (_, __) =>
    {
        double timeLeft = (animationEnd - DateTime.Now).TotalMilliseconds;

        if (timeLeft <= 0)
        {
            timer.Stop();
            return;
        }

        int ticks = (int)Math.Max(200, 500 * (timeLeft / duration));
        skew = Math.Max(0.8, skew - 0.001);

        ConfettiCannonSample.Fire(new ConfettiCannonOptions
        {
            ParticleCount = 1,
            StartVelocity = 0,
            Ticks = ticks,
            Origin = new Windows.Foundation.Point(random.NextDouble(), random.NextDouble() * skew - 0.2),
            Colors = new() { ColorHelper.GetColorFromHex("#ffffff") },
            Shapes = new() { "circle" },
            Gravity = RandomInRange(0.4, 0.6),
            Scalar = RandomInRange(0.4, 1),
            Drift = RandomInRange(-0.4, 0.4),
        });
    };
    timer.Start();
}

public void FireSchoolPride()
{
    const int duration = 15 * 1000;

    DateTime animationEnd = DateTime.Now + TimeSpan.FromMilliseconds(duration);

    var timer = new DispatcherTimer { Interval = TimeSpan.FromMilliseconds(16) };
    timer.Tick += (_, __) =>
    {
        double timeLeft = (animationEnd - DateTime.Now).TotalMilliseconds;
        if (timeLeft <= 0)
        {
            timer.Stop();
            return;
        }

        ConfettiCannonSample.Fire(new ConfettiCannonOptions
        {
            ParticleCount = 2,
            Angle = 60,
            Spread = 55,
            Origin = new Windows.Foundation.Point(0, 0.5),
            Colors = new() { ColorHelper.GetColorFromHex("#bb0000"), ColorHelper.GetColorFromHex("#ffffff") },
        });
        ConfettiCannonSample.Fire(new ConfettiCannonOptions
        {
            ParticleCount = 2,
            Angle = 120,
            Spread = 55,
            Origin = new Windows.Foundation.Point(1, 0.5),
            Colors = new() { ColorHelper.GetColorFromHex("#bb0000"), ColorHelper.GetColorFromHex("#ffffff") },
        });
    };
    timer.Start();
}

private double RandomInRange(double min, double max)
{
    var random = new Random();
    return random.NextDouble() * (max - min) + min;
}

private static void SetTimeout(Action action, int delayMilliseconds)
{
    var timer = new DispatcherTimer { Interval = TimeSpan.FromMilliseconds(delayMilliseconds) };
    timer.Tick += (_, __) =>
    {
        action();
        timer.Stop();
    };
    timer.Start();
}
```

![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/ConfettiCannon.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
