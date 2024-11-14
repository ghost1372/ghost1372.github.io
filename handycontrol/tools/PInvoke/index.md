---
title: P/Invoke
---

We have a lot of WinAPI functions that You can easily use them in your applications

# InteropMethods

|Name|Remarks|
|-|-|
|RegisterWindowMessage||
|ReadProcessMemory||
|SendMessage||
|GetWindowThreadProcessId||
|AttachThreadInput||
|GetForegroundWindow||
|OpenProcess||
|VirtualAllocEx||
|CloseHandle||
|VirtualFreeEx||
|FindWindow||
|FindWindowEx||
|GetWindowRect||
|GetCursorPos||
|GetDesktopWindow||
|AddClipboardFormatListener||
|RemoveClipboardFormatListener||
|GetSystemMenu||
|EnableMenuItem||
|InsertMenu||
|IntDestroyMenu||
|IntGetDC||
|IntReleaseDC||
|GetDeviceCaps||
|GetSystemMetrics||
|IntDestroyIcon||
|IntDeleteObject||
|IntCloseHandle||
|PrivateCreateDIBSection||
|PrivateCreateIconIndirect||
|PrivateCreateBitmap||
|IntGetModuleFileName||
|ExtractIconEx||
|Shell_NotifyIcon||
|CreateWindowEx||
|RegisterClass||
|DefWindowProc||
|SetForegroundWindow||
|CallNextHookEx||
|GetModuleHandle||
|UnhookWindowsHookEx||
|SetWindowsHookEx||
|GetWindowDC||
|GetPixel||
|ReleaseDC||
|GetDeviceCaps||
|GetDC||
|GetWindowPlacement||
|MonitorFromWindow||
|EnumThreadWindows||
|DeleteDC||
|CreateCompatibleDC||
|SelectObject||
|SendMessage||
|MonitorFromPoint||
|GetWindow||
|IsWindowVisible||
|IsIconic||
|IsZoomed||
|SetWindowPos||
|GetWindowLong||
|SetWindowLongPtr32||
|SetWindowLongPtr64||
|SetWindowLong||
|SetWindowLongPtr||
|GetCurrentThreadId||
|DestroyWindow||
|UnregisterClass||
|UpdateLayeredWindow||
|RedrawWindow||
|EnumDisplayMonitors||
|IntersectRect||
|GetMonitorInfo||
|CreateDIBSection||
|AlphaBlend||
|ChildWindowFromPointEx||
|CreateCompatibleBitmap||
|BitBlt||
|EnableWindow||
|SHAppBarMessage||
|SetWindowPlacement||
|GetWindowText||
|EnumDesktopWindows||
|FindWindowByCaption||
|MouseEvent||
|RtlGetVersion||
|GetImmersiveUserColorSetPreference||
|GetImmersiveColorSetCount||
|GetImmersiveColorFromColorSetEx||
|GetImmersiveColorTypeFromName||
|GetImmersiveColorNamedTypeByIndex||
|InternetGetConnectedState||
|GetModuleFileName||
|WritePrivateProfileString||
|GetPrivateProfileString||
|DwmGetColorizationColor||
|DwmSetWindowAttribute||
|GetWindowLongPtr32||
|GetWindowLongPtr64||
|GetWindowLongPtr||
|GdipImageGetFrameDimensionsCount|located in Gdip|
|GdipImageGetFrameDimensionsList|located in Gdip|
|GdipImageGetFrameCount|located in Gdip|
|GdipGetPropertyItemSize|located in Gdip|
|GdipGetPropertyItem|located in Gdip|
|GdipCreateHBITMAPFromBitmap|located in Gdip|
|GdipImageSelectActiveFrame|located in Gdip|
|GdipCreateBitmapFromFile|located in Gdip|
|GdipImageForceValidation|located in Gdip|
|IntGdipDisposeImage|located in Gdip|
|GdiplusStartup|located in Gdip|
|GdipGetImageRawFormat|located in Gdip|
|SetWindowCompositionAttribute|located in Gdip|
|GdipCreateBitmapFromStream|located in Gdip|
|GdipCreateBitmapFromHBITMAP|located in Gdip|
|GdipGetImageEncodersSize|located in Gdip|
|GdipGetImageDecodersSize|located in Gdip|
|GdipGetImageDecoders|located in Gdip|
|GdipGetImageEncoders|located in Gdip|
|GdipSaveImageToStream|located in Gdip|
|GetActiveWindow||

# InteropValues

## ExternDll
you can access dll from `ExternDll`
```cs
[DllImport(InteropValues.ExternDll.User32, CharSet = CharSet.Auto)]
```

|Name|Remarks|
|-|-|
|User32||
|Gdi32||
|GdiPlus||
|Kernel32||
|Shell32||
|MsImg||
|NTdll||
|WinInet||
|uxtheme||
|dwmapi||

## StructLayout

|Name|Remarks|
|-|-|
|NOTIFYICONDATA||
|TBBUTTON||
|TRAYDATA||
|POINT||
|MOUSEHOOKSTRUCT||
|RECT||
|BLENDFUNCTION||
|BITMAPINFOHEADER||
|WINDOWPOS||
|WINDOWPLACEMENT||
|SIZE||
|MONITORINFO||
|WNDCLASS||
|WNDCLASS4ICON||
|BITMAPINFO||
|ICONINFO||
|WINCOMPATTRDATA||
|ACCENTPOLICY||
|ImageCodecInfoPrivate||
|MINMAXINFO||
|APPBARDATA||
|RTL_OSVERSIONINFOEX||

## Flags

|Name|Remarks|
|-|-|
|AllocationType||
|MemoryProtection||
|FreeType||
|SetWindowPosFlags||
|ProcessAccess||
|RedrawWindowFlags||
|WindowPositionFlags||

## Enum

|Name|Remarks|
|-|-|
|ShowWindowCommands||
|MouseEvent||
|FreeType||
|HookType||
|GWL||
|GWLP||
|SM||
|CacheSlot||
|WINDOWCOMPOSITIONATTRIB||
|ACCENTSTATE||

# Example

## InternetGetConnectedState

With the help of this method, you can check the status of the Internet

```cs
public bool IsConnectedToInternet()
{
    return InteropMethods.InternetGetConnectedState(out int Desc, 0);
}
```

## GetCursorPos
Get mouse Position

```cs
var position = InteropMethods.GetCursorPos();

int X = position.X;
int Y = position.Y;
```