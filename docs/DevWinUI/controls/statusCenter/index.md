---
title: StatusCenter
---

A status center that tracks the progress of operations, from long-running tasks with detailed progress to quick status notifications.

## StatusCenterButton

### Property

|Name|
|-|
|FlyoutPlacement|
|ViewModel|

### Methods

|Name|
|-|
|Open|

## StatusCenter

The flyout panel hosted inside `StatusCenterButton`.

### Property

|Name|
|-|
|ViewModel|

## StatusCenterViewModel

### Property

|Name|
|-|
|Instance|
|StatusCenterItems|
|InProgressItemCount|
|HasAnyItemInProgress|
|HasAnyItem|
|AverageOperationProgressValue|
|ShowProgressRing|
|InfoBadgeState|
|InfoBadgeValue|

### Methods

|Name|
|-|
|RemoveItem|
|RemoveAllCompletedItems|
|AddItem|
|NotifyChanges|
|UpdateAverageProgressValue|
|OnStatusCenterFlyoutOpened|

### Events

|Name|
|-|
|NewItemAdded|

> [!NOTE]
> `StatusCenterViewModel.Instance` is a singleton shared by all status-center UI and helper methods, so operations added in one part of the app appear in every status-center flyout.

## StatusCenterHelper

### Property

|Name|
|-|
|SizeUnitFormat|

### Methods

|Name|
|-|
|ToSizeString|
|AddCard|
|UpdateCardStrings|

> [!NOTE]
> `SizeUnitFormat` affects all status center cards. `BinaryUnits` uses `KiB`/`MiB`/`GiB` (1024-based), `DecimalUnits` uses `KB`/`MB`/`GB` (1000-based).

### StatusCenterHelper.AddCard

```csharp
public static StatusCenterItem AddCard(
    ReturnResult status,
    string header,
    string subHeader,
    string message,
    StatusCenterItemIconKind iconKind,
    bool canProvideProgress = true,
    long itemsCount = 0,
    long totalSize = 0,
    Func<StatusCenterItem, StatusCenterItemProgressModel, (string Header, string SubHeader, string Message)>? update = null)
```

|Name|Type|Remark|
|-|-|-|
|status|`ReturnResult`|Operation state. `InProgress` creates a cancellation token.|
|header|string|Main card text.|
|subHeader|string|Secondary card text; not displayed.|
|message|string|Progress text for determinate in-progress cards.|
|iconKind|`StatusCenterItemIconKind`|Icon for `InProgress` and `Cancelled` cards.|
|canProvideProgress|bool|`false` shows indeterminate progress and hides details.|
|itemsCount|long|Known or estimated number of items.|
|totalSize|long|Known or estimated total bytes.|
|update|delegate?|Called per progress report; return updated `Header`, `SubHeader`, `Message`.|

## StatusCenterItem

### Property

|Name|Remark|
|-|-|
|Header|Main card text.|
|HeaderTooltip|Tooltip shown for the header text.|
|SubHeader|Secondary card text; not displayed.|
|Message|Progress text; hidden when `IsIndeterminateProgress` is `true`.|
|ProgressPercentage|Current progress percentage.|
|ProgressPercentageText|Progress percentage as display text (e.g. `42%`).|
|SpeedText|Formatted speed text (e.g. `12.3 MiB/s` or `450 items/s`); updated on progress reports.|
|CurrentProcessingItemName|Name of the item currently being processed.|
|CurrentProcessedSizeHumanized|Processed size display text; currently unused — superseded by `Message`.|
|IsExpanded|Card expansion state.|
|AnimatedIconState|State of the animated expand icon (`NormalOn`/`NormalOff`).|
|IsSpeedAndProgressAvailable|Determines whether the card can be expanded.|
|IsIndeterminateProgress|Shows an indeterminate progress bar; hides `Message` and `CurrentProcessingItemName`.|
|IsPausable|Determines whether the item can be paused; shows the pause action in the options menu.|
|IsPaused|Whether the operation is currently paused; switches `ItemKind` to `Paused` while `IsInProgress` and drives `SpeedGraphState` and the pause/resume UI.|
|HasActions|`true` when `IsCancelable` or `IsPausable` is `true`; controls the options button visibility.|
|SpeedGraphState|Speed graph color state — `GraphState.Warning` while paused, otherwise `GraphState.Normal`.|
|PauseButtonText|Text of the pause menu item — `Pause` or `Resume`.|
|PauseButtonIconGlyph|Glyph of the pause menu item icon — `&#xE769;` for Pause, `&#xE768;` for Resume.|
|OnPauseAsync|Optional callback awaited when the item is paused; use it to suspend the underlying operation (e.g. pause a download).|
|OnResumeAsync|Optional callback awaited when the item is resumed; use it to continue the underlying operation.|
|IsCancelable|Determines whether the item can be cancelled.|
|ItemKind|Visual state of the card.|
|ItemIconKind|Built-in icon kind.|
|IconSource|Custom icon; accepts `PathIconSource`, `FontIconSource`, `BitmapIconSource`, `SymbolIconSource`, or `AnimatedIconSource`. For `FontIconSource`, set `FontSize` to `16`.|
|IconBackgroundCircleBorderOpacity|Opacity of the icon background circle.|
|FileSystemOperationReturnResult|The card's `ReturnResult` state.|
|TotalItemsCount|Number of items in the operation.|
|TotalSize|Total size in bytes.|
|IsInProgress|Whether the operation is still running.|
|UpdateStrings|Rewrites `Header`, `SubHeader`, `Message` on each progress report.|
|CancellationToken|Cancelled by `CancelCommand`; observe it and return `ReturnResult.Cancelled`.|
|PauseCommand|Toggles `IsPaused` when `IsPausable` and `IsInProgress` are `true`.|
|CancelCommand|Cancels `CancellationToken`; the card shows an indeterminate bar and a `Canceling - ` header prefix until the operation returns.|
|Progress|The `StatusCenterItemProgressModel` tracking the operation.|
|ProgressEventSource|`Progress<StatusCenterItemProgressModel>` to report to.|
|SpeedGraphValues|Speed history points for the graph; populated automatically.|

### Methods

|Name|
|-|
|ExecutePauseCommandAsync|
|ExecuteCancelCommand|

> [!NOTE]
> Set `IsPausable = true` on an in-progress item and provide `OnPauseAsync`/`OnResumeAsync` to support pausing. Your operation must observe `IsPaused` and wait for it to take effect.

## StatusCenterItemProgressModel

```csharp
public StatusCenterItemProgressModel(
    IProgress<StatusCenterItemProgressModel>? progress,
    bool enumerationCompleted = false,
    ReturnResult? status = null,
    long itemsCount = 0,
    int samplerInterval = 100)
```

### Property

|Name|
|-|
|Status|
|EnumerationCompleted|
|FileName|
|TotalSize|
|ItemsCount|
|ProcessedSize|
|ProcessedItemsCount|
|ProcessingSizeSpeed|
|ProcessingItemsCountSpeed|
|StartTime|
|CompletedTime|
|Percentage|

### Methods

|Name|
|-|
|AddProcessedItemsCount|
|SetProcessedSize|
|Report|
|ReportStatus|

> [!NOTE]
> `ProcessedSize` and `ProcessedItemsCount` are read-only — use `SetProcessedSize` for an absolute byte count or `AddProcessedItemsCount` to increment the item count.

> [!NOTE]
> When enumeration is complete and the processed counts match the totals (or `Report(100)` is called), an in-progress status converts to success automatically. Use `ReportStatus(status, percentage)` to change `Status` and report at the same time.

> [!NOTE]
> Reporting a completed `Status` does not remove the card or change its visual state. When the operation ends, remove the in-progress item and add a final card with `Success`, `Failed`, or `Cancelled`.

## Enums

### ReturnResult

|Name|Remark|
|-|-|
|InProgress|Operation is still running. `StatusCenterHelper.AddCard` creates a cancellation token for this state.|
|Success|Operation completed successfully.|
|Failed|Operation failed.|
|Cancelled|Operation was cancelled.|

### StatusCenterItemIconKind

|Name|
|-|
|Copy|
|Move|
|Delete|
|Recycle|
|Extract|
|Compress|
|Successful|
|Error|
|Git|
|InstallFont|

### StatusCenterItemKind

|Name|
|-|
|InProgress|
|Successful|
|Error|
|Paused|
|Canceled|

### SizeUnitTypes

|Name|
|-|
|BinaryUnits|
|DecimalUnits|

## Example

```xml
<dev:StatusCenterButton x:Name="StatusCenterButtonSample"
                        FlyoutPlacement="BottomEdgeAlignedRight" />
```

```csharp
private async void Copy_Click(object sender, RoutedEventArgs e)
{
    var fileCount = Random.Shared.Next(3, 9);
    string[] source = FilePaths(@"C:\Users\Public\Documents", fileCount);
    string[] destination = FilePaths(@"C:\Users\Public\Downloads", fileCount);
    var totalSize = fileCount * Random.Shared.NextInt64(24, 97) * 1024 * 1024;
    var banner = AddCard_Copy(ReturnResult.InProgress, source, destination, 0, totalSize);

    var result = await SimulateFileOperationAsync(banner.ProgressEventSource, source, totalSize, banner.CancellationToken, banner);

    StatusCenterViewModel.Instance.RemoveItem(banner);
    AddCard_Copy(result, source, destination, banner.TotalItemsCount, totalSize);
}

private static StatusCenterItem AddCard_Copy(
    ReturnResult returnStatus,
    string[] source,
    string[] destination,
    long itemsCount = 0,
    long totalSize = 0)
{
    var sourcePath = GetParentDir(source.FirstOrDefault());
    var destinationPath = GetParentDir(destination.FirstOrDefault());
    var destinationDirName = destinationPath.Split('\\').Last();

    string ItemsText(long count) => count == 1 ? "1 item" : $"{count} items";

    string Header(long count) => returnStatus switch
    {
        ReturnResult.Cancelled => $"Canceled copying {ItemsText(count)} to \"{destinationDirName}\"",
        ReturnResult.Success => $"Copied {ItemsText(count)} to \"{destinationDirName}\"",
        ReturnResult.Failed => $"Error copying {ItemsText(count)} to \"{destinationDirName}\"",
        _ => $"Copying {ItemsText(count)} to \"{destinationDirName}\""
    };

    string SubHeader(long count) => returnStatus switch
    {
        ReturnResult.Cancelled => $"Canceled copying {ItemsText(count)} from \"{sourcePath}\" to \"{destinationPath}\"",
        ReturnResult.Success => $"Copied {ItemsText(count)} from \"{sourcePath}\" to \"{destinationPath}\"",
        ReturnResult.Failed => $"Failed to copy {ItemsText(count)} from \"{sourcePath}\" to \"{destinationPath}\"",
        _ => $"Copying {ItemsText(count)} from \"{sourcePath}\" to \"{destinationPath}\""
    };

    string Message(StatusCenterItemProgressModel progress)
        => progress.Percentage is null
            ? progress.EnumerationCompleted ? "Processing items..." : "Discovering items..."
            : $"{StatusCenterHelper.ToSizeString(progress.ProcessedSize)} of {StatusCenterHelper.ToSizeString(progress.TotalSize)} processed";

    var card = StatusCenterHelper.AddCard(
        returnStatus,
        Header(itemsCount),
        SubHeader(itemsCount),
        "Discovering items...",
        StatusCenterItemIconKind.Copy,
        itemsCount: itemsCount,
        totalSize: totalSize,
        update: (item, progress) => progress.EnumerationCompleted
            ? (Header(item.TotalItemsCount), SubHeader(item.TotalItemsCount), Message(progress))
            : ($"Discovered {ItemsText(item.TotalItemsCount)}", SubHeader(item.TotalItemsCount), Message(progress)));

    if (returnStatus is ReturnResult.InProgress)
        card.IsPausable = true;

    return card;
}

private static async Task<ReturnResult> SimulateFileOperationAsync(
    IProgress<StatusCenterItemProgressModel> progress,
    string[] source,
    long totalSize,
    CancellationToken cancellationToken,
    StatusCenterItem item,
    bool simulateDiscovery = true)
{
    var itemTotal = simulateDiscovery ? Random.Shared.Next(1, 26) : source.Length;
    var progressModel = new StatusCenterItemProgressModel(
        progress,
        enumerationCompleted: !simulateDiscovery,
        status: ReturnResult.InProgress,
        itemsCount: simulateDiscovery ? 0 : itemTotal);

    if (!simulateDiscovery)
    {
        progressModel.TotalSize = totalSize;
        progressModel.Report();
    }

    var pauseDelay = PauseAwareDelay(item);

    try
    {
        if (simulateDiscovery)
        {
            for (var discovered = 1; discovered <= itemTotal; discovered++)
            {
                await pauseDelay(Random.Shared.Next(120, 220), cancellationToken);
                progressModel.ItemsCount = discovered;
                progressModel.Report();
            }
        }

        progressModel.TotalSize = totalSize;
        progressModel.ItemsCount = itemTotal;
        progressModel.EnumerationCompleted = true;
        progressModel.Report();

        await pauseDelay(Random.Shared.Next(50, 500), cancellationToken);
        progressModel.Report(0);

        var failAtPercentage = Random.Shared.Next(0, 100) < 20 ? Random.Shared.Next(40, 85) : double.MaxValue;
        var percentage = 0.0;

        while (percentage < 100)
        {
            var delay = Random.Shared.Next(100, 140);
            if (Random.Shared.Next(0, 15) == 0)
                delay += Random.Shared.Next(150, 300);

            await pauseDelay(delay, cancellationToken);

            percentage = Math.Min(100, percentage + Random.Shared.Next(2, 5));

            var processedItems = Math.Min(itemTotal, (int)Math.Ceiling(itemTotal * percentage / 100));
            var pendingItems = processedItems - progressModel.ProcessedItemsCount;

            if (pendingItems > 0)
                progressModel.AddProcessedItemsCount(pendingItems);

            if (processedItems > 0)
                progressModel.FileName = Path.GetFileName(source[(processedItems - 1) % source.Length]);

            progressModel.Report(percentage);

            if (percentage >= failAtPercentage && percentage < 100)
                return ReturnResult.Failed;
        }

        return ReturnResult.Success;
    }
    catch (OperationCanceledException)
    {
        await Task.Delay(Random.Shared.Next(50, 500), CancellationToken.None);
        return ReturnResult.Cancelled;
    }
}

private static Func<int, CancellationToken, Task> PauseAwareDelay(StatusCenterItem item)
{
    var resumeSignal = new TaskCompletionSource(TaskCreationOptions.RunContinuationsAsynchronously);
    item.OnPauseAsync = () =>
    {
        resumeSignal = new TaskCompletionSource(TaskCreationOptions.RunContinuationsAsynchronously);
        return Task.CompletedTask;
    };
    item.OnResumeAsync = () =>
    {
        resumeSignal.TrySetResult();
        return Task.CompletedTask;
    };

    return async (millisecondsDelay, cancellationToken) =>
    {
        while (item.IsPaused)
            await resumeSignal.Task.WaitAsync(cancellationToken);

        await Task.Delay(millisecondsDelay, cancellationToken);
    };
}

private static string[] FilePaths(string directory, int count)
    => [.. Enumerable.Range(1, count).Select(i => $@"{directory}\File {i}.txt")];

private static string GetParentDir(string? path)
{
    if (string.IsNullOrEmpty(path))
        return string.Empty;

    var index = path.Contains('/', StringComparison.Ordinal) ? path.LastIndexOf('/') : path.LastIndexOf('\\');
    return path[..(index != -1 ? index : path.Length)];
}
```

### Programmatic open

> [!NOTE]
> Call `Open()` to toggle the status center flyout programmatically — it opens the flyout, or closes it if it is already open. To bind a keyboard shortcut, add a `KeyboardAccelerator` on a parent element (for example the window root) and call `Open()` from its `Invoked` handler:

```xml
<Window.KeyboardAccelerators>
    <KeyboardAccelerator Key="J" Modifiers="Control" Invoked="OpenStatusCenter" />
</Window.KeyboardAccelerators>
```

```csharp
private void OpenStatusCenter(KeyboardAccelerator sender, KeyboardAcceleratorInvokedEventArgs args)
{
    StatusCenterButtonSample.Open();
    args.Handled = true;
}
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
