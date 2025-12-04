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

{% note info %}
You can use Default WinUI Styles (`DefaultCalendarViewStyle`) or your own syles for CalendarView, just use `CalendarViewStyle` property. 
{% endnote %}

# Example

```xaml
<dev:CalendarWithClock />
```

{% note info %}
Use `ClockMode` for choosing between `TimePicker` or `AnalogClock`
{% endnote %}

{% note warning %}
Some Properties only works for TimePicker and Some for AnalogClock. 
{% endnote %}

![CalendarWithClock](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/CalendarWithClock.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
