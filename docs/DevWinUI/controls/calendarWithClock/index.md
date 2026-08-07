---
title: CalendarWithClock
---

# Event

|Name|
|-|
|SelectedTimeChanged|

# Property

|Name|
|-|
|IsGroupLabelVisible|
|IsTodayHighlighted|
|DisplayMode|
|FirstDayOfWeek|
|DayOfWeekFormat|
|CalendarIdentifier|
|IsOutOfScopeEnabled|
|MaxDate|
|MinDate|
|CalendarViewMargin|
|TimePickerMargin|
|CalendarViewStyle|
|CalendarViewBorderThickness|
|SelectedTime|
|SelectedDateTime|
|TimePickerDisplayMode|
|ShowAccentBorderOnHeader|
|ClockMode|
|ClockCornerRadius|
|CalendarViewCornerRadius|
|ClockBorderThickness|
|ClockMargin|
|DateTimeFormat|
|MinuteIncrement|


> [!NOTE]
> You can use Default WinUI Styles (`DefaultCalendarViewStyle`) or your own syles for CalendarView, just use `CalendarViewStyle` property.

# Example

```xml
<dev:CalendarWithClock />
```

> [!NOTE]
> Use `ClockMode` for choosing between `TimePicker` or `AnalogClock`

> [!WARNING]
> Some Properties only works for TimePicker and Some for AnalogClock.

![CalendarWithClock](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/CalendarWithClock.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
