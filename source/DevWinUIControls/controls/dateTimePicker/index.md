---
title: DateTimePicker
---

# Event

|Name|
|-|
|ConfirmClick|
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
|CalendarViewCornerRadius|
|PlaceholderText|
|Description|
|Header|
|HeaderTemplate|
|ConfirmButtonContent|
|ConfirmButtonStyle|
|ShowConfirmButton|
|ClockBorderThickness|
|ClockMargin|
|ShowAccentBorderOnHeader|
|ClockMode|

{% note info %}
You can use Default WinUI Styles (`DefaultCalendarViewStyle`) or your own syles for CalendarView, just use `CalendarViewStyle` property. 
{% endnote %}

{% note info %}
You can use your own styles for ConfirmButton, just use `ConfirmButtonStyle` property.
{% endnote %}

# Example

```xaml
<dev:DateTimePicker />
```

{% note info %}
Use `ClockMode` for choosing between `TimePicker` or `AnalogClock`
{% endnote %}

{% note warning %}
Some Properties only works for TimePicker and Some for AnalogClock. 
{% endnote %}


![DevWinUI](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/DateTimePicker.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.
