---
title: UndoRedoObservableCollection
---

List and ObservableCollection which support undo/redo.

{% note info %}
You can use both in the **List** and **ObservableCollection**.
{% endnote %}

{% note warning %}
**UndoRedoList** and **UndoRedoObservableCollection** is not Available in **.Net 4.0**, **.Net 4.5**, **.Net 4.5.1**, **.Net 4.5.2**, **.Net 4.6**, **.Net 4.6.1** and **.Net 4.6.2** 
{% endnote %}

Example:

```cs
UndoRedoObservableCollection<string> list = new UndoRedoObservableCollection<string>();
// OR
// UndoRedoList<string> list = new UndoRedoList<string>();
public MainWindow()
{
    InitializeComponent();
    list.Add("Hello");
    list.Add("Bye");

    // Result: Hello, Bye
}
private void AddToList_Click(object sender, RoutedEventArgs e)
{
    list.Add("Welcome");
    // Result: Hello, Bye, Welcome
}

private void Undo_Click(object sender, RoutedEventArgs e)
{
    list.Undo();
    // Result: Hello, Bye
}
private void Redo_Click(object sender, RoutedEventArgs e)
{
    list.Redo();
    // Result: Hello, Bye, Welcome
}

```