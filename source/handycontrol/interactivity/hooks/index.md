---
title: Hooks
---

There are some hooks to work with Windows functions

# Hooks
| Name | 
| ---- | 
| ClipboardHook | 
| KeyboardHook |
| SystemMenuHook | 

## ClipboardHook 
### Methods and Events
| Method | Event |
| ---- | ---- |
| Start | ContentChanged |
| Stop ||

### Case
``` CS
ClipboardHook.Start();
ClipboardHook.Stop();
ClipboardHook.ContentChanged +=ClipboardHook_ContentChanged;
private void ClipboardHook_ContentChanged()
  {
  }
```

## KeyboardHook
### Methods and Events
| Method | Event |
| ---- | ---- |
| Start | KeyDown |
| Stop | KeyUp |
 
### Case
``` CS
KeyboardHook.Start();
KeyboardHook.Stop();
KeyboardHook.KeyDown +=KeyboardHook_KeyDown;
private void KeyboardHook_KeyDown(object sender, HandyControl.Data.KeyboardHookEventArgs e)
  {
  }
```

## SystemMenuHook

With this hook you can add a new item to the context menu Or display your Custom context menu

### Methods and Events
| Method | Event |
| ---- | ---- |
| Insert | Click |
| InsertSeperator | |
| Remove | |
| SetCustomContextMenu | |
 
### Case
#### Add Items to ContextMenu
{% note warning %}
Put this code on WindowLoaded Event
{% endnote %}
``` CS
SystemMenuHook.Insert(0, 1000, "Item 1", this);
SystemMenuHook.InsertSeperator(1, this);
SystemMenuHook.Remove(1000);
```

{% note warning %}
if you want to handle click event, you need to create click event
{% endnote %}
``` CS
SystemMenuHook.Click += SystemMenuHook_Click;
private void SystemMenuHook_Click(int obj)
        {
            switch (obj)
            {
                case MenuId:
                    MessageBox.Show("Hello");
                    break;
                
            }
        }
```

#### Display your Custom ContextMenu [[Available Only in Custom Version](https://github.com/ghost1372/HandyControls)]
first add a ContextMenu to your window resource with a Key
``` xml
<hc:Window.Resources>
        <ContextMenu x:Key="systemMenu">
            <MenuItem Header="Help"/>
            <MenuItem Header="Choose theme"/>
            <MenuItem Header="Add Note"/>
            <Separator />
            <MenuItem Header="Exit"/>
        </ContextMenu>
    </hc:Window.Resources>
```

then
 {% note warning %}
 Put this code on WindowLoaded Event
 {% endnote %}
``` CS
var context = Resources["systemMenu"] as ContextMenu;
SystemMenuHook.SetCustomContextMenu(this, context);
```