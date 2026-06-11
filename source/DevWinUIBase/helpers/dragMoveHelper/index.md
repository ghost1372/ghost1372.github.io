---
title: DragMoveHelper
---

Drag your window by set a UIElement as a Drag Region

# SetDragMove

```cs
DragMoveHelper dragMove = new DragMoveHelper(myWindow);
dragMove.SetDragMove(element);
```

# UnsetDragMove

```cs
dragMove.UnsetDragMove(element);
```

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.

![DragMoveAndResize](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/DragMoveAndResize.gif)