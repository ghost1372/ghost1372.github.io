---
title: Logger
---

Logger is a diagnostic logging class. It is easy to set up and has a clean API, Logger can write reports both in the Debug and in the text file.

{% note info %}
Logger Located in the **HandyControl.Tools** namespace.
```cs
Using HandyControl.Tools;
```

You can use the following `using` and use the methods without writing the class name
```cs
using static HandyControl.Tools.Logger;
```
{% endnote %}

{% note info %}
You can use the `DefaultInitialization` which includes `FileLoggerHandler` and `DebugLoggerHandler` or you can choose the handler you want
{% endnote %}

**FileLoggerHandler** means that Logs are stored in a text file
**DebugLoggerHandler** means that Logs are displayed in Visual Studio Output Section

# Initialize

```cs

public MainWindow()
{
    Logger.DefaultInitialization();

    // OR

    // Logger.LoggerHandlerManager
    //            .AddHandler(new FileLoggerHandler())
    //            .AddHandler(new DebugLoggerHandler());
}
```

# Default Level
Settings of default type of message
```cs
Logger.DefaultLevel = Logger.Level.Severe;
```

# Log

```cs
 // Fast logging (monitor name of class and methods from which is the application logged)
Logger.Log();

// We define a log message
Logger.Log("Hello world");

// We can define the level (type) of message
Logger.Log(Logger.Level.Fine, "Explicit define level");

// Explicit definition of the class from which the logging
Logger.Log<Program>("Explicit define log class");
Logger.Log<Program>(Logger.Level.Fine, "Explicit define log class and level");

```

# On/Off

The following methods help to disable or enable logging

|Name|Remark|
|-|-|
|On|Log|
|Off|Log|

```cs
// Log
Logger.Off();
Logger.Log("Not-logged message");

Logger.On();
Logger.Log("I'am back!");
```