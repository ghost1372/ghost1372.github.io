---
title: Welcome to DevWinUI Release Notes
---

# Version 9.8.0
- Add `OrbitLoadingIndicator`
- Add `LinearGradientBlurPanel`
- Add `SpectrumVisualizer`
- Add `AudioWave`
- Add `CycleCollection`
- Add `BannerView`
- Add `Stars`
- Add `EasyCarouselPanel`
- Add `CarouselView`
- Add `CarouselView2`
- Add `ContentSlider`
- Add `CoverFlow`
- Add `LoopPanel`
- Add `Color` and `Intensity` properties in `AmbLight`
- Add `Composition` Extensions

# Version 9.7.0
- Add `StoreCarousel`
- Add `ColorAnalyzer` and `ContrastAnalyzer`
- Add `IsRounded` and `Mask` proeprties for `ColorShadow`
- Add `WindowManager` (Min/Max Width/Height)
- Add `PercentageChanged` event in `ArcProgress`
- Add `RippleLight`
- Add `PausableDispatcherTimer`
- Fix `ProfileControl` [Native AOT]
- Fix `FluidBanner` [Native AOT]
- Fix `ColorShadow` [Native AOT]
- Fix `BlendedImage` [Native AOT]

# Version 9.6.0
- Add CompositionProToolkit
- Add AnimatedTextBlock
- Add SnapLayoutManager
- Add ImageFrame
- Add ProfileControl
- Add FrostedGlass
- Add FluidBanner
- Add ColorShadow
- Add OffsetBox
- Add CircleIcon
- Add Countdown
- Add BlendedImage
- Add Halo (HaloPanel, HaloArc, HaloChain, HaloDisk, HaloRingPanel, HaloSlice, HaloSlider, HaloRingLabel, HaloTimePicker)
- Add FlipViewAttach
- Add SquircleClipAttach
- Enable AnimatedIcon for NavigationViewStoreStyle
- Remove Duplicate Styles

# Version 9.5.0
- Add Support .Net10
- Add InfoCard
- Add GoToCard
- Add LoopingSelector
- Add LoopingList
- Add `HomePageHeaderForeground` and `HomePageHeaderSubtitleForeground` resource key in `HomePageHeader`
- Add Polar Day/Night detection to SunTimesHelper
- Add RoundedTabViewItem Style
- Add SmoothWindowResizer
- Add UseEdgeColorFromImage in CompositionShadow
- Add CardGradient3Brush Brush
- Enable Dot Badge for NavigationViewStoreStyle
- Fix Acrylic backdrop misdetection caused by invalid flag comparison
- Fix bugs

# Version 9.4.0
- Add HorizontalSimpleGridLayout
- Add SegmentedSlider
- Add MenuFlyout SecondaryMenu Attach

# Version 9.3.0
- Add LocationHelper
- Fix Shortcut KeyVisual Cut off
- Fix ConfettiEngine by synchronizing access
- Fix SystemTrayIcon
- Fix monitor enumeration logic and add direct GetMonitorInfo method
- Adjust the height of small c in Matrix 8x14 Segment char Thanks to @xasx

# Version 9.2.0
- Add SunTimesHelper
- Add SystemTrayIcon
- Add Timeline
- Add WanderingParticles
- Add SpeedGraph
- Add Opened and Closed events and Close Method to WindowedContentDialog
- Add new Proeprties in `ProcessInfoHelper`
- Add `LoadNativeString` in `GeneralHelper`
- Add `HideWindow`, `ShowWindow`, `GetDpiForWindow`, `SetRegion` and `GetWindowIcon` methods in `WindowHelper`
- Add `KeyNameProvider`, `UseAutoValidation` and `ValidateShortcut` in `Shortcut`
- Use LoadString to load localized text for message box buttons
- Improve ThemeService
- Fix Bugs

- Update XamlStyler and Reformat Xaml files [`848c4c2`](https://github.com/ghost1372/DevWinUI/commit/848c4c20dbd52f24d80869e9517135fde0f93850)
- Add Timeline [`f1c2dc4`](https://github.com/ghost1372/DevWinUI/commit/f1c2dc416d4a6b05614814752587d1b04d8b2b10)
- Add SpeedGraph [`cfb81a1`](https://github.com/ghost1372/DevWinUI/commit/cfb81a17d5491b7dc45cff6755921fdd52f51026)
- Add TrayIcon [`319655f`](https://github.com/ghost1372/DevWinUI/commit/319655f55dab6fde9da1a1abc280355c1e895d61)
- Add SetRegion in WindowHelper [`3183fdf`](https://github.com/ghost1372/DevWinUI/commit/3183fdf26a18cc843bc2a47c09c9c292ba1db19d)
- Add WanderingParticles [`380265f`](https://github.com/ghost1372/DevWinUI/commit/380265fc490716fa347bd4107e56bdd6e9383b06)
- Add SunTimesHelper [`67eaca9`](https://github.com/ghost1372/DevWinUI/commit/67eaca9a3a389a2991e68829502cc851fa18e492)
- Add KeyboardAccelerators [`2713d75`](https://github.com/ghost1372/DevWinUI/commit/2713d75d7c18ab806d06b2ee9dd2899ef28e06c7)
- Add UseAutoValidation Property and Fix Shortcut properties not updating in open ContentDialog #108 [`31c1e5e`](https://github.com/ghost1372/DevWinUI/commit/31c1e5e4d3a7d1fac3f04ab52c3d48a4d1a4fb92)
- Add Timeline Sample [`995546c`](https://github.com/ghost1372/DevWinUI/commit/995546c61512dbfd87586fea6317cfaffa36992a)
- Add SystemTrayIcon Sample [`3dc974f`](https://github.com/ghost1372/DevWinUI/commit/3dc974f68f94685faff1843a531d81db3f4bcf74)
- Fix Shortcut unresponsive to smaller sizes #103 #104 [`f6d6f43`](https://github.com/ghost1372/DevWinUI/commit/f6d6f43f318c2b96c6182db1c27de59657ff8d0f)
- Use LoadString to load localized text for message box button #99 [`f6a5c09`](https://github.com/ghost1372/DevWinUI/commit/f6a5c0996f65248098707d2c07b3384aeea9f704)
- Add Some Properties in ProcessInfoHelper [`8f31c4f`](https://github.com/ghost1372/DevWinUI/commit/8f31c4f02fca607e05793ebcb1191a59dd07eaca)
- Add WanderingParticles Sample [`3a638b8`](https://github.com/ghost1372/DevWinUI/commit/3a638b817032aaee98f93b4567316c2250556112)
- Fix KeyVisual Issue [`f0cf800`](https://github.com/ghost1372/DevWinUI/commit/f0cf800b4e466fdc4295da6561afc7d45af0b9fc)
- Add More VirtualKey for Shortcut #102 [`afe1e1b`](https://github.com/ghost1372/DevWinUI/commit/afe1e1b459213dde3e4f54e8f18d4cd2ec0ddc7b)
- Fix ThemeService Initial Options #100 [`3349178`](https://github.com/ghost1372/DevWinUI/commit/3349178edfa0b7e54ed9ae115e2b7ab0b34df2ec)
- Lower the opacity of a BitmapIcon when card is Disabled [`4608553`](https://github.com/ghost1372/DevWinUI/commit/4608553eed16992e0b95745bef6ffa705276b6f0)
- Rename TrayIcon to SystemTrayIcon [`6fdd017`](https://github.com/ghost1372/DevWinUI/commit/6fdd0170283187030d7e405fd9de99522736495e)
- Add New HideWindow/ShowWindow/GetDpiForWindow/GetWindowIcon methods in WindowHelper [`cf47f1b`](https://github.com/ghost1372/DevWinUI/commit/cf47f1be199a4ded0176b23fda0b8706ea235a91)
- Update Shortcut.cs [`fbd2ec8`](https://github.com/ghost1372/DevWinUI/commit/fbd2ec8fa77ebe0772130a03cdb77507d9d28b8c)
- Update ContentDialogEx.cs [`f2bc8e4`](https://github.com/ghost1372/DevWinUI/commit/f2bc8e4f67d95807eeec43ccb2771506afeebd22)
- Fix Card Padding and Margin #88 [`08cf424`](https://github.com/ghost1372/DevWinUI/commit/08cf4244e5cd13d3db01af556f748cfc503bcb07)
- Update SystemTrayIcon.cs [`9f5a083`](https://github.com/ghost1372/DevWinUI/commit/9f5a08389ae283c39df892f8181c0f1b8ad21940)
- Update 1-bug_report.yaml [`23b778d`](https://github.com/ghost1372/DevWinUI/commit/23b778d28dc7c0055bf590861904301520b1e406)
- Add ValidateShortcut in Shortcut [`9feff8d`](https://github.com/ghost1372/DevWinUI/commit/9feff8dbb6a562a1edc89358dc507b454757fa04)
- Update Dependencies [`b7c71ae`](https://github.com/ghost1372/DevWinUI/commit/b7c71aef8713eaaffdfd3e32443ebca14653af3f)
- Add Opened and Closed events and Close Method to WindowedContentDialog [`30e9fe0`](https://github.com/ghost1372/DevWinUI/commit/30e9fe0c2ba7ad0cb5d0b3bd54b7d15ac6e35e7a)
- Make GetKeyName Configurable #102 [`6b754e3`](https://github.com/ghost1372/DevWinUI/commit/6b754e35405ca4d884e6903dc27b065a0564a972)
- Update Caption Buttons When Windows Theme Changed #98 [`ef52be8`](https://github.com/ghost1372/DevWinUI/commit/ef52be8fbb3e80b6decace6e74b617b278f3a99e)
- Replaced hardcoded HorizontalAlignment="Right" with TemplateBinding to HorizontalAlignment in Shortcut #107 [`e3327bd`](https://github.com/ghost1372/DevWinUI/commit/e3327bdffed844f08bd382822c5a9dfdc11d8285)
- Fix VSIX Template #96 [`af61073`](https://github.com/ghost1372/DevWinUI/commit/af61073c836565add63713d75fd02b2ced3ec0e7)
- Update README.md [`264f4e1`](https://github.com/ghost1372/DevWinUI/commit/264f4e19d479579ef80a58c398bc5d6e1da81f3b)
- Fix Shortcut ContentDialog Entrance Animation #105 [`df0e7df`](https://github.com/ghost1372/DevWinUI/commit/df0e7dfce41f2dc70e7859373a2dd7fbb56338ec)
- Update DependencyObjectEx.DP.cs [`142250f`](https://github.com/ghost1372/DevWinUI/commit/142250fb0f17cea1585192902b3a8950ed4281ac)
- Update Directory.Build.props [`19aaea7`](https://github.com/ghost1372/DevWinUI/commit/19aaea72a41e1bb472fd4556d7a8bcc362ff6def)
- Fix WindowedContentDialog BorderBrush and BorderThickness not displaying the selected brush or BorderThickness #97 [`a3d9879`](https://github.com/ghost1372/DevWinUI/commit/a3d98796a4e9ebb6dc3b7375e7fb6149ac8cc5f3)
- Move SpeedGraph [`2242372`](https://github.com/ghost1372/DevWinUI/commit/224237215665a61eea2f19c1c63568813e6a876a)


# Version 9.1.0
- Add DigitalSegment (SixteenSegmentChar, FourteenSegmentChar, Matrix5x7SegmentChar, Matrix5x8SegmentChar, Matrix8x14SegmentChar)
- Add `FlipBlock` and `FlipCards`
- Add `SnowFlakeEffect`
- Update MainLandingPage UI
- `TileGallery` Removed and replaced with new `HorizontalScrollContainer`
- `HomePageHeaderImage` removed and replaced with new `HomePageHeader`
- Following properties removed from `MainLandingPage` and `AllLandingPage` (`HeaderOverlayImage`, `HeaderVerticalAlignment`, `HeaderCornerRadius`, `HeaderContentMargin`, `UseFullScreenHeaderImage`, `HeaderMargin`)

# Version 9.0.0
- Add `AncestorBindingExtension`
- Add `DispatcherQueue` and `Dispatcher` `Extensions`
- DevWinUI now requires Windows App SDK v1.8.
- WASDK Updated to `v1.8.0`
- `ThemeService` refactored.
- Improve `MessageBox`
- Improve `WindowedContentDialog`
- Improve `OutOfBoxPage`
- Improve `CheckUpdateControl`
- Change `PathHelper.GetKnownFolderPath` to Use `Microsoft.Windows.Storage.Pickers.PickerLocationId` instead of `Windows.Storage.Pickers.PickerLocationId`
- Rename `MessageBoxImage` to `MessageBoxIcon`
- Remove Obsolete Methods and Classes (`SettingsNavigationAttach`, `FileAndFolderPickerHelper`, `NavigationHelperEx`, `ModernWindow`, `FilePicker`, `FolderPicker`, `SavePicker`)
- Remove Experimental `ModernWindow`
- Fix `SelectorBarSegmented` SelectedIndex `out of range` issue

# Version 8.9.2
- Add OutOfBoxPage
- Add CheckUpdateControl
- Add PreviewKeyDownHelper
- Add MessageBox Image
- Improve ContentDialogWindow
- Improve NullToVisibilityConverter
- Remove OOBEPageControl and SettingsPageControl

All notable changes to this project will be documented in this file. Dates are displayed in UTC.

#### [v8.9.2](https://github.com/ghost1372/DevWinUI/compare/v8.9.1...v8.9.2)

> 20 August 2025

- Add OutOfBoxPage Control [`b9d435c`](https://github.com/ghost1372/DevWinUI/commit/b9d435cb7ae141730bacb82323fbd7ff52bd70b3)
- Add MessageBox Image [`b6dccc8`](https://github.com/ghost1372/DevWinUI/commit/b6dccc830f0ae8916a861b94a89fcd4e0de48d6d)
- Improve ContentDialogWindow [`f6b8184`](https://github.com/ghost1372/DevWinUI/commit/f6b818430e6835239b901fa1021b654a4c9c8b56)
- Add CheckUpdateControl [`46a9ffc`](https://github.com/ghost1372/DevWinUI/commit/46a9ffc07ab5bf220b0f5d32a150c0cc6683114f)
- Remove OOBEPageControl and  SettingsPageControl [`b97233e`](https://github.com/ghost1372/DevWinUI/commit/b97233e4e5aa1b4051c643d53bba61dc7d4e857e)
- Add PreviewKeyDownHelper [`ca52f76`](https://github.com/ghost1372/DevWinUI/commit/ca52f765f95c6a982b8729085884967118231137)
- Add OutOfBoxPage Sample [`75457b2`](https://github.com/ghost1372/DevWinUI/commit/75457b258b846fcd9fd35a2ea39151bc7ac73661)
- Update ContentDialogContent.cs [`c1c1aba`](https://github.com/ghost1372/DevWinUI/commit/c1c1abaf5a0e0965f576c0c28e518b0c6b023ddc)
- Use ItemsControl Instead of ItemsRepeater in OutOfBoxPage [`26c6619`](https://github.com/ghost1372/DevWinUI/commit/26c66198b9db2dd7e9ff4b0e1a22976ae45abc0c)
- Improve WindowedContentDialog [`57c98e8`](https://github.com/ghost1372/DevWinUI/commit/57c98e8f6c4c0706a1c34c693be1a953d5779dad)
- Improve NullToVisibilityConverter [`e34410e`](https://github.com/ghost1372/DevWinUI/commit/e34410e3985391f954fa2a356e0ca6aa81baaa3c)
- Improve OutOfBoxPage HeroImage [`b6f1743`](https://github.com/ghost1372/DevWinUI/commit/b6f1743d5593c5b45ddbe1de051ea7c33df5e689)
- Update ContentDialogWindow.cs [`cd1c22c`](https://github.com/ghost1372/DevWinUI/commit/cd1c22cdb3790efa0a3bb997dee86b0a2e45704e)
- Update Directory.Build.props [`f69d913`](https://github.com/ghost1372/DevWinUI/commit/f69d9131896c34304d5883723a0f307a6761f347)


# Version 8.9.0|8.9.1

- Add ControlTokenManager
- Add Card
- Add MessageBoxOptions in MessageBox
- Public DoubleToVisibilityConverter
- Improve ConfettiCannon (AnimationStarted/AnimationCompleted events, ClearColor/IsFixedTimeStep properties)
- Improve ContextMenuCustomHost.dll
- Improve WindowedContentDialog
- Fix Shared Colors in ColorPalette
- Remove Duplicate Acrylic Members from BackdropType (Use `Acrylic` instead of `DesktopAcrylic` and `AcrylicBase`)
- Fix bugs

# Version 8.7.0|8.8.0

- Add StorageBar
- Add StorageRing
- Add SplitCircle
- Add DropdownColorPicker
- Add ArcProgress
- Add FlipToReveal
- Add FrameworkElementExtensions
- Add AnimationExtensions
- Add ShyHeader
- Add Accordion
- Add GifImage
- Add DepthLayerView
- Add ConfettiCannon
- Add MessageBox (Based on WindowedContentDialog)
- Add WindowedContentDialog
- Add BoolToVisibilityReConverter Converter
- Improve StepBar [Add DisplayMode(Index, Icon), ItemClick event, and AutoSelectOnItemClick] 
- ReWrite ColorPalette
- Rename `MessageBox` to `LegacyMessageBox`
- Update PathHelper
- Update FileHelper
- Fix Divider Initial Margin

All notable changes to this project will be documented in this file. Dates are displayed in UTC.

#### [v8.7.0](https://github.com/ghost1372/DevWinUI/compare/v8.6.0...v8.7.0)

> 31 July 2025

- Fix #74  Divider Initial Margin [`#74`](https://github.com/ghost1372/DevWinUI/issues/74)
- Add StorageBar and StorageRing [`dabb4f9`](https://github.com/ghost1372/DevWinUI/commit/dabb4f9b5b34d952f62f0b7a529bb6ab454c7a34)
- Add MessageBox, ContentDialogWindow , WindowedContentDialog, ContentDialogExtensions [`2551412`](https://github.com/ghost1372/DevWinUI/commit/255141201111c1327a598a32e1d9535c12fbdaec)
- Add StorageBar and StorageRing Samples [`121ba00`](https://github.com/ghost1372/DevWinUI/commit/121ba009cd3d45ad4d47a4acd278f57c7d93ba1d)
- Add WindowedContentDialog and MessageBox Samples [`9346671`](https://github.com/ghost1372/DevWinUI/commit/9346671ef7f06a9a349018bf4dcc30e799846149)
- ReWrite ColorPalette [`9475f6f`](https://github.com/ghost1372/DevWinUI/commit/9475f6f1c6756b8190db61bbdeef56776093df87)
- Add ConfettiCannon [`b936c0e`](https://github.com/ghost1372/DevWinUI/commit/b936c0eff7e8b2f1c690d39450c0c1613c2139b3)
- Add DropdownColorPicker [`cf3adca`](https://github.com/ghost1372/DevWinUI/commit/cf3adca39d56033a3cdc6fda4a448ead755c813f)
- Add Accordion [`64c978b`](https://github.com/ghost1372/DevWinUI/commit/64c978bde15e7294b3eb60e963bcc9c3d7495c06)
- Add GifImage [`ea213a4`](https://github.com/ghost1372/DevWinUI/commit/ea213a4fe09efd0555bc8cc9dff784e36188ccde)
- Add ShyHeader [`b228078`](https://github.com/ghost1372/DevWinUI/commit/b228078184391010c80f4b01365f261d96cc55b3)
- Add ArcProgress [`b530482`](https://github.com/ghost1372/DevWinUI/commit/b5304825cb577811c342676ca7b9ce36a2ec255f)
- Add DepthLayerView [`d20989c`](https://github.com/ghost1372/DevWinUI/commit/d20989c7ac6d65de1e9d0eba3ba8d4653265d0c0)
- Add SplitCircle [`1447557`](https://github.com/ghost1372/DevWinUI/commit/144755751a16388b3b6ed6f19bfda5a76899d3d2)
- Add AnimationExtensions [`6eda79e`](https://github.com/ghost1372/DevWinUI/commit/6eda79e2142793931d549caf7566518f28d3015f)
- Add FlipToReveal [`5356acb`](https://github.com/ghost1372/DevWinUI/commit/5356acbeaea790fb9c2ddf0dc67e21da5b685840)
- Update ColorPalette.cs [`ac385e7`](https://github.com/ghost1372/DevWinUI/commit/ac385e7e795f4b5f8b3483cf60812545eb995535)
- VSIX Fix AOT Support [`3c5dc7c`](https://github.com/ghost1372/DevWinUI/commit/3c5dc7c5e65d91e185fbfd781bec0083546c944b)
- Create FrameworkElementExtensions.cs [`3c7a6d0`](https://github.com/ghost1372/DevWinUI/commit/3c7a6d0ca924236ee7078ab927909f5dc2918993)
- Use DispatcherQueue.GetForCurrentThread().EnsureSystemDispatcherQueue instead if custom EnsureSystemDispatcherQueue [`84b854e`](https://github.com/ghost1372/DevWinUI/commit/84b854ea97cb84ea90c05f6b72a5311b5f8f2629)
- Fix ThemeSettingPage [`2838d51`](https://github.com/ghost1372/DevWinUI/commit/2838d51fc262ce8ae96bd7179730c9816ff141de)
- Update FileHelper.cs [`c59d7d9`](https://github.com/ghost1372/DevWinUI/commit/c59d7d9732521410af7844bdc061148a5fb6f601)
- Update PathHelper.cs [`69b8529`](https://github.com/ghost1372/DevWinUI/commit/69b8529848322923acc5103afe1ea7ff0a3a7b27)
- Update SettingsCardAutomationPeer.cs [`93f346c`](https://github.com/ghost1372/DevWinUI/commit/93f346cb51472cb1c20afd0084f37982f5410d0a)
- Update NativeMethods.cs [`51ec14b`](https://github.com/ghost1372/DevWinUI/commit/51ec14b48e91070425d9cf9290b119c437080e1c)
- Update DepthLayerView.xaml [`6ece112`](https://github.com/ghost1372/DevWinUI/commit/6ece1123664563dcbc7e6c1423d2145fbbe8ca96)
- Update ColorPalettePage.xaml [`13d44a5`](https://github.com/ghost1372/DevWinUI/commit/13d44a535b04a4b4a65a2d34ceac1db98a8c2c0d)
- Rename MessageBox to LegacyMessageBox [`cc4ae4c`](https://github.com/ghost1372/DevWinUI/commit/cc4ae4c9b6cb4934e6f6141c400e64b620073f74)
- Update PredefinedCodes.cs [`553b1e6`](https://github.com/ghost1372/DevWinUI/commit/553b1e651d45dec22d12f748a91c35a03e60c6d3)
- Update Directory.Build.props [`505af4a`](https://github.com/ghost1372/DevWinUI/commit/505af4a4a8d073495bed2e176e13b99836c654dc)
- [VSIX] Add &lt;WinUISDKReferences&gt;false&lt;/WinUISDKReferences&gt; [`c269e49`](https://github.com/ghost1372/DevWinUI/commit/c269e49b4f0f7f07f955c02bdab17a2494e264b8)
- Update README.md [`7855a4c`](https://github.com/ghost1372/DevWinUI/commit/7855a4c920bf7b9decf081fe00cd0883548e14ad)
- Update GeneralSettingPage.xaml [`41dc38a`](https://github.com/ghost1372/DevWinUI/commit/41dc38a6d65bf9f0b1c39e0aa6a45aa536e98019)
- Update source.extension.vsixmanifest [`824c73e`](https://github.com/ghost1372/DevWinUI/commit/824c73e65192dded6e5354d453758934cef661ef)
- Update README.md [`6701a43`](https://github.com/ghost1372/DevWinUI/commit/6701a43608ab28c86433656b1ba3d4e80816f0ec)
- Update source.extension.vsixmanifest [`1e1dd37`](https://github.com/ghost1372/DevWinUI/commit/1e1dd372e296c2760d4deada18b90b50175acadd)
- Update LayoutTransformer.cs [`773e055`](https://github.com/ghost1372/DevWinUI/commit/773e0555faf1f8fc29846db1b9c239d3fd598e42)
- Update ColorItemShape.cs [`baa9af2`](https://github.com/ghost1372/DevWinUI/commit/baa9af28223ecf12a85a5afee5d737e7f7c648fb)
- Revert "Update Directory.Build.props" [`3904d78`](https://github.com/ghost1372/DevWinUI/commit/3904d782fd9c897c9059eee5000b4840c0d5e3cf)
- Update Directory.Build.props [`f115c22`](https://github.com/ghost1372/DevWinUI/commit/f115c2244815d89a448dd03610168769dfc16824)

# Version 8.6.0

- Add GetFileFromUri, GetFileFromEmbededResources and GetFileFromEmbededResourcesOrUri
- Fixed Native AOT bugs (Library and Gallery now work correctly with Native AOT enabled)
- App performance is now incredibly fast and smooth.
- Reduced Gallery app size from 107 MB to 95 MB (or 58 MB without the PDB file)
- Fixed other bugs

All notable changes to this project will be documented in this file. Dates are displayed in UTC.

#### [v8.6.0](https://github.com/ghost1372/DevWinUI/compare/v8.5.0...v8.6.0)

> 17 July 2025

- Fix #71 [`#71`](https://github.com/ghost1372/DevWinUI/issues/71)
- Fix #71  HeaderCarousel IsAutoScrollEnabled and blur instantly when selected [`#71`](https://github.com/ghost1372/DevWinUI/issues/71)
- Add Logger [`25fe950`](https://github.com/ghost1372/DevWinUI/commit/25fe950fefe3b0b3bc0d9ecc23a1965cc310bbec)
- Add GetFileFromUri, GetFileFromEmbededResources and GetFileFromEmbededResourcesOrUri [`d657bc4`](https://github.com/ghost1372/DevWinUI/commit/d657bc4372f2c67cf6cc4cc7aabf0c05747eaafd)
- Improve Shortcut [`00609b9`](https://github.com/ghost1372/DevWinUI/commit/00609b9a20a27663275ddb369b4a7688b324d3df)
- Fix Some NAOT Issues [`49a77dc`](https://github.com/ghost1372/DevWinUI/commit/49a77dcd0f80a27f26aa1c5016bcbeb49aa00f74)
- Add Missing CompositionImage Sample [`d9776c0`](https://github.com/ghost1372/DevWinUI/commit/d9776c07d414a7749dcb99c9cf16f7b0672aeffe)
- Revert "Remove Logger" [`2fcf3b3`](https://github.com/ghost1372/DevWinUI/commit/2fcf3b353c58d76c556b477aeb07ae1a23301478)
- Remove Logger [`592f0e2`](https://github.com/ghost1372/DevWinUI/commit/592f0e2fe26b51f77a459b27981aac94e130c252)
- Fix StepBar AOT [`344473d`](https://github.com/ghost1372/DevWinUI/commit/344473de3a0b8055610f4f69a96397677c84c819)
- Improve Gallery AOT Support [`c068965`](https://github.com/ghost1372/DevWinUI/commit/c068965b28176d566dea08dd76ed5621a089ecbd)
- Fix ElementGroup AOT [`e2b8f08`](https://github.com/ghost1372/DevWinUI/commit/e2b8f08a12581abc14725d94dac69e01bc36b2ed)
- Update HeaderCarousel.cs [`78cb3ef`](https://github.com/ghost1372/DevWinUI/commit/78cb3eff4082b00391a41fb56d86e3c6ca2a9bbb)
- Revert "Update GeneralSettingPage.xaml" [`25aba63`](https://github.com/ghost1372/DevWinUI/commit/25aba63b4b860e42752d8a0ac38e2e1a7c3a8e0f)
- Update CheckUpdatePage.xaml.cs [`66de462`](https://github.com/ghost1372/DevWinUI/commit/66de46201c58e4eb44a84d2da13701cd30cf6430)
- Update GeneralSettingPage.xaml [`ca7bc99`](https://github.com/ghost1372/DevWinUI/commit/ca7bc99ed4b8793958646c06f421bd75215167b5)
- Update DragMoveAndResizePage.xaml [`babf571`](https://github.com/ghost1372/DevWinUI/commit/babf5719c39932c106892d9683e4d260775c679b)
- Revert "Update GeneralSettingPage.xaml.cs" [`764da27`](https://github.com/ghost1372/DevWinUI/commit/764da275cace25307a7b9073c7e5a52f07f3e2a9)
- Update GeneralSettingPage.xaml.cs [`c8adc2b`](https://github.com/ghost1372/DevWinUI/commit/c8adc2b5bb38ead56a4ea71925f210d18862c9bd)
- Fix Some Issues [`ca28364`](https://github.com/ghost1372/DevWinUI/commit/ca2836472b9b66dad98de931950a817a05057419)
- Update Generic.xaml [`df4c3dc`](https://github.com/ghost1372/DevWinUI/commit/df4c3dc1fd0d66ae0dc5717fe32b835b5e94ac77)
- Update Directory.Build.props [`57d069f`](https://github.com/ghost1372/DevWinUI/commit/57d069f4b4dbc5e1fcfa7f030e207751362010e6)
- Fix Shortcut [`0bdea77`](https://github.com/ghost1372/DevWinUI/commit/0bdea7721c17e2e3d0856782b8d5e3efc804ba89)
- Update Shortcut [`cbc843c`](https://github.com/ghost1372/DevWinUI/commit/cbc843cff6a0c9eb14b1ba430600b3526114d72d)
- Update publish-release.yml [`50cf3e5`](https://github.com/ghost1372/DevWinUI/commit/50cf3e51fc26e893843f414406b21b022f105478)
- Update AppConfig.cs [`7f9a859`](https://github.com/ghost1372/DevWinUI/commit/7f9a859ee160124ce3ad354666c9d4b8b65508dd)
- Update AppHelper.cs [`c6a342c`](https://github.com/ghost1372/DevWinUI/commit/c6a342caca7b354ce9f87ab248c2dcab503b930c)
- Update README.md [`cc8f0f4`](https://github.com/ghost1372/DevWinUI/commit/cc8f0f46ae404bcb65010a692526812798b30bc8)
- Update JsonNavigationService.cs [`3ea0dfc`](https://github.com/ghost1372/DevWinUI/commit/3ea0dfc36f1c0ee459c6ee675538f9e5c38d4dad)
- Update StepBar.cs [`5b334fb`](https://github.com/ghost1372/DevWinUI/commit/5b334fb68a5427dcc43e0909be56c46db20e4d80)
- Update AppConfig.cs [`0fcdecd`](https://github.com/ghost1372/DevWinUI/commit/0fcdecd3017df81acd17c3b4f5501918a4f1be03)
- Update DevWinUI.Gallery.csproj [`a50be51`](https://github.com/ghost1372/DevWinUI/commit/a50be514c68d70e5c9f6c91bae82a714cc708c98)

# Version 8.5.0
- Add Shortcut, ShortcutEditor and ShortcutWithTextLabel
- Add TryGetAllWindowIds in WindowHelper
- Add new gradients
- Add OverviewPageHeader
- Add BlurEffectManager
- Add HeaderCarousel
- Add AnimatedImage 
- Add CompositionAnimationController
- Add ImageLoader
- Add CompositionImage
- Add CompositionShadow
- Add PerspectiveZoom
- Add ForegroundFocusEffects
- Add ColorBloomControl
- Add ColorSlideControl
- Add ShimmerTextBlock
- Add AnimatedGradient
- Add BlurEffectControl
- Add BlurEffectBrush 
- Add ImageEffectBrush
- Add HideNavigationViewItemIcon in JsonNavigationService
- Improve ShortcutDialogContentControl
- Removed BlurAnimationHelper

All notable changes to this project will be documented in this file. Dates are displayed in UTC.

#### [v8.5.0](https://github.com/ghost1372/DevWinUI/compare/v8.4.0...v8.5.0)

> 12 July 2025

- Add Contributing.md #68 [`#69`](https://github.com/ghost1372/DevWinUI/pull/69)
- Fix #60 Refactor window message monitor variables to fields [`#60`](https://github.com/ghost1372/DevWinUI/issues/60)
- Add HeaderCarousel [`e0f3e9b`](https://github.com/ghost1372/DevWinUI/commit/e0f3e9b643530ddd51596b84259f60076a801c31)
- Add CompositionImage [`34a75bb`](https://github.com/ghost1372/DevWinUI/commit/34a75bb52031cf885dd716b1af58029708931838)
- Rename ShortcutEditor to Shortcut [`dc4dddf`](https://github.com/ghost1372/DevWinUI/commit/dc4dddf21acf6e04244942dd662bf641ed8d7396)
- Add ColorBloomController, ColorSlideController [`85a1c0f`](https://github.com/ghost1372/DevWinUI/commit/85a1c0f5bfb856c0ba55f7aebdb9542b260c5868)
- Make ColorSlide/ColorBloom Controller as a Custom Control [`a2057dd`](https://github.com/ghost1372/DevWinUI/commit/a2057dd4527e851fcbe7579fd8da924b6a204703)
- Add ForegroundFocusEffects [`4f371cd`](https://github.com/ghost1372/DevWinUI/commit/4f371cd3cfd0f97b10cb6e6ce5fb0171cedf7d50)
- Add BlurEffectControl Sample [`53d4b2f`](https://github.com/ghost1372/DevWinUI/commit/53d4b2fe5f8a7375946d294f9cb9fc4b136cc1f0)
- Add Shortcut, ShortcutEditor and ShortcutWithTextLabel [`c2ad0be`](https://github.com/ghost1372/DevWinUI/commit/c2ad0bebb5a29422f17abacf7f279b9d1a93be30)
- Add BlurEffectControl and Imporve BlurEffectManager [`a108b70`](https://github.com/ghost1372/DevWinUI/commit/a108b7005352642b9c8577098c12fc721b7a788d)
- Add BlurEffectManager [`9941a6c`](https://github.com/ghost1372/DevWinUI/commit/9941a6c886f02910e65ddfaf32c9e7c026a2c32b)
- Add PerspectiveZoom [`02baf1e`](https://github.com/ghost1372/DevWinUI/commit/02baf1e409a942441699c68be7203d5fca7bd84e)
- Add CompositionShadow [`b07804c`](https://github.com/ghost1372/DevWinUI/commit/b07804c6c938a88a39f6555d22bfe5ce32dea684)
- Add BlurEffectBrush  and ImageEffectBrush [`28db6bf`](https://github.com/ghost1372/DevWinUI/commit/28db6bf45977ca0a0784d5618655a6a8e4198eb4)
- Update Styles Sample [`fdf3429`](https://github.com/ghost1372/DevWinUI/commit/fdf34293417941250f6adfca9df38cea314f0efe)
- Improve HeaderCarousel [`91097c0`](https://github.com/ghost1372/DevWinUI/commit/91097c007d9c611c935521920923d6a7831351e2)
- Add CompositionAnimationController [`3eb4979`](https://github.com/ghost1372/DevWinUI/commit/3eb497901d9112dbfe868792f301f34428ad1ee4)
- Add AnimatedGradient [`826dd0e`](https://github.com/ghost1372/DevWinUI/commit/826dd0e0d9ab2715464d8c856f6235857f5f3a32)
- Add HeaderCarousel Sample [`537aa41`](https://github.com/ghost1372/DevWinUI/commit/537aa41263cb5a7ee51a52af649e7346a72a6a52)
- Improve Shortcut [`16107c1`](https://github.com/ghost1372/DevWinUI/commit/16107c134f540e3b66544aa172018ec214ca98b4)
- Add Shortcut Sample [`a45950f`](https://github.com/ghost1372/DevWinUI/commit/a45950f74d681755495ccaeb651760ca36325113)
- Refactor panel styles and add new gradients [`1234ae1`](https://github.com/ghost1372/DevWinUI/commit/1234ae17891182846613fef2a52ec5981ae309e6)
- Add OverviewPageHeader Sample [`0f21ace`](https://github.com/ghost1372/DevWinUI/commit/0f21acea54485e764eaeb1e0ccfb135da7b9576f)
- Add Border, Grid and StackPanel Samples [`614fc1c`](https://github.com/ghost1372/DevWinUI/commit/614fc1c7256f65f92e06332871100cd7c64d03bc)
- Add ShimmerTextBlock [`f39e8f2`](https://github.com/ghost1372/DevWinUI/commit/f39e8f228db5eac003176dab1b128a1101f9aeae)
- Add Brush Samples [`3c017d8`](https://github.com/ghost1372/DevWinUI/commit/3c017d8dc3fd3b1637f7e14c3c85012ba81945cd)
- Add OverviewPageHeader [`3a41dc4`](https://github.com/ghost1372/DevWinUI/commit/3a41dc489744db1bdf309696a66a1d8f8c6328dc)
- Add AnimatedImage Sample [`e7334ce`](https://github.com/ghost1372/DevWinUI/commit/e7334ceaa13df417eac543519efe1da33c9613e0)
- Add KeyVisual Missing Sample [`6d9eaca`](https://github.com/ghost1372/DevWinUI/commit/6d9eacaf26248369cc0735957f257997d085688d)
- Improve Gallery [`0d47c14`](https://github.com/ghost1372/DevWinUI/commit/0d47c14ff068b344d8f38eb887d5debce9aed093)
- Add BlurEffectManager [`1e3f2bc`](https://github.com/ghost1372/DevWinUI/commit/1e3f2bc08c494743b1199b7da75ddfdc3ca68f0f)
- Update KeyVisual.cs [`e0105cc`](https://github.com/ghost1372/DevWinUI/commit/e0105cc5eedf1de1a18a8511ddf03dc37d169e35)
- Create BlurEffectManager.cs [`62a974e`](https://github.com/ghost1372/DevWinUI/commit/62a974e0e46a1a1ed7e1249088faac561a9a570a)
- Improve ShortcutDialogContentControl [`0d1f925`](https://github.com/ghost1372/DevWinUI/commit/0d1f925941e1e9ce1a14d39f27f8562d0222928e)
- Add TryGetAllWindowIds in WindowHelper [`6ecd690`](https://github.com/ghost1372/DevWinUI/commit/6ecd690cd894cc42ad8cabb60049a8ac9f3e50b0)
- Update Samples [`db18d5f`](https://github.com/ghost1372/DevWinUI/commit/db18d5f89aa92ea6cbe32a7389cd9ba77c590e86)
- Update Sample [`94025db`](https://github.com/ghost1372/DevWinUI/commit/94025db993ae596102051f3ac2ec710fdd22bc03)
- Update BlurEffectManager.cs [`8be0bb1`](https://github.com/ghost1372/DevWinUI/commit/8be0bb11ec16af790984d5c86be641d9065341b7)
- Improve Styling [`074c63b`](https://github.com/ghost1372/DevWinUI/commit/074c63b346b6cbee07e29fa37a946154856243e3)
- Add IsAutoScrollEnabled in HeaderCarousel [`e2eff76`](https://github.com/ghost1372/DevWinUI/commit/e2eff7690365a2f36d8d8a9cc3542e79c5e1191d)
- Update HeaderCarousel [`0683ab0`](https://github.com/ghost1372/DevWinUI/commit/0683ab0ba083a4ba57179e7d00f7e191f248a392)
- Update CONTRIBUTING.md [`06040ca`](https://github.com/ghost1372/DevWinUI/commit/06040caafe9f31d900a8950dfa9531fec03aeb09)
- Update CONTRIBUTING.md [`e3b5b85`](https://github.com/ghost1372/DevWinUI/commit/e3b5b8539ce3fc9533770c008ea2d77e4efd1fa3)
- Update Sample [`51aa0f5`](https://github.com/ghost1372/DevWinUI/commit/51aa0f579231e244e069c600cc48a877d5e12b79)
- make class partial [`c5ae624`](https://github.com/ghost1372/DevWinUI/commit/c5ae6242424c9ec3aabce9c13be4f9b204c0722b)
- Update BlurEffectManager.cs [`5d62216`](https://github.com/ghost1372/DevWinUI/commit/5d62216e63d7228ee050757fa326894195421435)
- Update Samples [`dec1d05`](https://github.com/ghost1372/DevWinUI/commit/dec1d05c82d6bf35b5cb348028e67265c03ff2b4)
- Add HideNavigationViewItemIcon in JsonNavigationService [`f3730ad`](https://github.com/ghost1372/DevWinUI/commit/f3730add18eaadbad0d5681b159c7fcffc8a31c6)
- Update CONTRIBUTING.md [`a0b28b0`](https://github.com/ghost1372/DevWinUI/commit/a0b28b0dc7d4b5e19633b47cd197013ef9175240)
- Update Directory.Build.props [`45cf1ca`](https://github.com/ghost1372/DevWinUI/commit/45cf1caa64fa5e0030bf2035700db2ee5e169ab3)
- Update CONTRIBUTING.md [`0ead7cf`](https://github.com/ghost1372/DevWinUI/commit/0ead7cf926d2c27ed9a5f9e0f8996297b6b5d936)
- Update AnimatedImage.xaml [`971b726`](https://github.com/ghost1372/DevWinUI/commit/971b726f60ebfb18856ee762b47c5871a3d599dc)
- Update README.md [`c51c9f7`](https://github.com/ghost1372/DevWinUI/commit/c51c9f7e63c1af3c86867a09d5a95406418bf89c)
- Update DevWinUI.Controls.csproj [`450fc64`](https://github.com/ghost1372/DevWinUI/commit/450fc6485419ec97fe1fd0474bb0d75e9d42c2ac)
- Update CONTRIBUTING.md [`f33fdb3`](https://github.com/ghost1372/DevWinUI/commit/f33fdb3864992b5665a66723000b47c4837219d2)
- Update Sample [`9bde51b`](https://github.com/ghost1372/DevWinUI/commit/9bde51b489dec102118ec197bedb0150063d1f2e)
- Update HeaderCarousel.xaml [`0145f7c`](https://github.com/ghost1372/DevWinUI/commit/0145f7cb6ae7a9dd7d3169b535f34ee4784ca253)
- Update WindowHelper.cs [`4231ee9`](https://github.com/ghost1372/DevWinUI/commit/4231ee98c5f488b456ac426908ee3aa197ef185f)
- Update DevWinUI.csproj [`84d2103`](https://github.com/ghost1372/DevWinUI/commit/84d21037d5feb044f41979f671ede51ae2de4f6b)
- Update ColorSlideControlPage.xaml [`b797bda`](https://github.com/ghost1372/DevWinUI/commit/b797bdac091809adc802095c39e94ed93178f65a)
- Update BrushPage.xaml [`bbeddc8`](https://github.com/ghost1372/DevWinUI/commit/bbeddc89954789f5f0c37fb89744f56bbc899f9a)
- Update BlurEffectControl.cs [`3af7302`](https://github.com/ghost1372/DevWinUI/commit/3af7302bb20ce84e2581b8a9444c2a9abce78c1d)
- Update README.md [`57afdfe`](https://github.com/ghost1372/DevWinUI/commit/57afdfeb0cadd902965b957d4991478001f0c502)
- Update CONTRIBUTING.md [`deabfcb`](https://github.com/ghost1372/DevWinUI/commit/deabfcb2caa721462eb986f5ecdbade05382fd2f)
- Update CONTRIBUTING.md [`131b982`](https://github.com/ghost1372/DevWinUI/commit/131b9822d26b6167f3bbd0c768aff2cd3c74a81a)
- Update CONTRIBUTING.md [`1ea4f42`](https://github.com/ghost1372/DevWinUI/commit/1ea4f4244403382e0589a646a0300e86a2b3f147)
- Update CONTRIBUTING.md [`e427382`](https://github.com/ghost1372/DevWinUI/commit/e42738292d4a1d17342e5bb0946b377c7c10c642)
- Update AppData.json [`313b062`](https://github.com/ghost1372/DevWinUI/commit/313b062eaa2d7eaeb8202d14f218f7ff37f1dee8)
- Update ShortcutPage.xaml.cs [`8dfacec`](https://github.com/ghost1372/DevWinUI/commit/8dfacec0a3e7722d184ef76ed258f3693c1dd2e0)
- Update README.md [`b079b15`](https://github.com/ghost1372/DevWinUI/commit/b079b15d2ce583542f418dc25f4f221ae03e8dbd)
- Move Blur Stuffs [`22f9d4e`](https://github.com/ghost1372/DevWinUI/commit/22f9d4e375906bd289f7d3a00f4ad59f99fb9b2f)
- Delete ToolTip.png [`9001e9b`](https://github.com/ghost1372/DevWinUI/commit/9001e9bdd56c805434b81e058c74596e1c2c3744)

# Version 8.4.0

- Add TokenViewSelectorBarStyle
- Add Some Button Styles
- Add SubtleComboBoxStyle
- Add Colors
- Add Shimmer
- Add NavigationViewStoreStyle
- Add LayeredFontIcons
- Add Magnifier
- Add StringInfoBadgeStyle
- Add `GeneralHelper.GetGeometryFromString` method
- Add `GeneralHelper.IsPrivacySensitiveRegion` method
- Improve JsonNavigationViewService
- Improve WindowMessageMonitor
- Improve LayoutTransformer
- Rename `GeneralHelper.GetGeometry` to `GeneralHelper.GetGeometryFromAppResources`
- Remove NavigationViewItemStyle
- `Microsoft.Windows.SDK.BuildTools` Updated from `10.0.26100.1742` to `10.0.26100.4188`

All notable changes to this project will be documented in this file. Dates are displayed in UTC.

#### [v8.4.0](https://github.com/Ghost1372/DevWinUI/compare/v8.3.0...v8.4.0)

> 24 June 2025

- Add NavigationViewStoreStyle [`b18ec92`](https://github.com/Ghost1372/DevWinUI/commit/b18ec922e5f320f44bad66463ec7d40eb3f270e9)
- Remove NavigationViewItemStyle [`f418bad`](https://github.com/Ghost1372/DevWinUI/commit/f418bad83466111ad2cdfbe8facffc925ede73d1)
- Add Some Buttons Style [`865babe`](https://github.com/Ghost1372/DevWinUI/commit/865babe5acab87ed49ddaa3b09759c96b84e9718)
- Add SubtleComboBoxStyle [`b0fd2de`](https://github.com/Ghost1372/DevWinUI/commit/b0fd2de909e455cbf06d605dad5e625fd7a3b8e3)
- Improve JsonNavigationViewService InfoBadge [`8058786`](https://github.com/Ghost1372/DevWinUI/commit/8058786d2fa41d4aafd3afff967afb82e136e846)
- Update ReadMe [`9000e06`](https://github.com/Ghost1372/DevWinUI/commit/9000e06255f661b52bedeefab4c137f7d2fd02ba)
- Add Shimmer [`972b8ee`](https://github.com/Ghost1372/DevWinUI/commit/972b8ee798b986dccf52f015d402d38e696ec4e0)
- Add TokenViewSelectorBarStyle [`18b476d`](https://github.com/Ghost1372/DevWinUI/commit/18b476d4ea8bb20513b473c42d6322d8fa66fe06)
- Add Magnifier [`cf7744a`](https://github.com/Ghost1372/DevWinUI/commit/cf7744a25fdebfbe90d1582ea6ca5895eeb85ae9)
- Add Colors [`58607f8`](https://github.com/Ghost1372/DevWinUI/commit/58607f8a2d474d3314d241882c2b65a6983ef10a)
- Add LayeredFontIcons [`b3ec2c7`](https://github.com/Ghost1372/DevWinUI/commit/b3ec2c72186dde28990ef301172ba67ca5630887)
- Update ValidationPage.xaml.cs [`a820377`](https://github.com/Ghost1372/DevWinUI/commit/a820377d940e76a36b648ab6bdd71f2f5474a16a)
- Add Issue Template [`e160b69`](https://github.com/Ghost1372/DevWinUI/commit/e160b6919c2ed5151bc9fa49a5d54b41c70373b3)
- Update ShimmerPage.xaml [`02f8bdc`](https://github.com/Ghost1372/DevWinUI/commit/02f8bdce7482180cd1e2d11ccf85a308a37dedef)
- Update StylesPage.xaml [`adca9ce`](https://github.com/Ghost1372/DevWinUI/commit/adca9cec54da5fe6fcb15198a4a0fd391b137933)
- Add InfoBadge Style StringInfoBadgeStyle [`4b3b8dd`](https://github.com/Ghost1372/DevWinUI/commit/4b3b8ddc718dbf626bf0ec6845642ceaa622cbe1)
- Update Magnifier.cs [`2e2dba0`](https://github.com/Ghost1372/DevWinUI/commit/2e2dba09cb8533b03e8dab94d9aa1269f3332a96)
- Update WindowMessageMonitor.cs [`7b9f69f`](https://github.com/Ghost1372/DevWinUI/commit/7b9f69ffc5d6c2504a5e57b6f2793731d096bc97)
- Update LayoutTransformer.cs [`7a3c8aa`](https://github.com/Ghost1372/DevWinUI/commit/7a3c8aa1c829c1ff7d7840a7d7761e9199c87155)
- Update Packages [`461f3a5`](https://github.com/Ghost1372/DevWinUI/commit/461f3a51481a4f0b1aa48595e2bcd2bdd555c4f8)
- Update GeneralHelper.cs [`8c63190`](https://github.com/Ghost1372/DevWinUI/commit/8c63190a36304c5feb1935034e72d94a8f3353cc)
- Update GeneralHelper.cs [`154026b`](https://github.com/Ghost1372/DevWinUI/commit/154026bf5550ae236524f8bbf4a47e1e611dd97d)
- Update ValidationPage.xaml.cs [`35b4914`](https://github.com/Ghost1372/DevWinUI/commit/35b4914c74b0f83efd73345eeb719e256ad6059f)
- Update README.md [`f5656f4`](https://github.com/Ghost1372/DevWinUI/commit/f5656f4a6f70ae85add710a630651808adf82d1d)
- Update README.md [`e8d0d88`](https://github.com/Ghost1372/DevWinUI/commit/e8d0d88214e9ea0c51c17bfad52bbc7a5c331037)
- Update JsonNavigationService.NavigationView.cs [`8bb29d1`](https://github.com/Ghost1372/DevWinUI/commit/8bb29d1aa333980f98499cdb25b055d4375d6efd)
- Update App.xaml [`5c40025`](https://github.com/Ghost1372/DevWinUI/commit/5c40025fd71de9b61cc7abef8778501519c5c739)

# Version 8.3.0
The following sections describe new and updated features and known issues for version 8.3.0

#### [v8.3.0](https://github.com/ghost1372/DevWinUI/compare/v8.2.0...v8.3.0)

> 19 May 2025

- Add AccentProgressButtonStyle #42 [`ee96e45`](https://github.com/ghost1372/DevWinUI/commit/ee96e45f69f37e8dc7c3f6230a253810f7445660)
- Update GridViewItemTemplate.xaml [`93e1f5f`](https://github.com/ghost1372/DevWinUI/commit/93e1f5fb856ad88dbee26cb797c6b25bfb90de78)
- Add AnimationDuration and AnimationDampingRatio for FlipSide #52 [`30866f1`](https://github.com/ghost1372/DevWinUI/commit/30866f1c1da74baa51be16912bb083d4357ce795)
- Fix Showing Legacy SystemContextMenu in ModernSystemContextMenu #54 [`1a3e86d`](https://github.com/ghost1372/DevWinUI/commit/1a3e86d63ee519e188f6984547688af32fac11d6)
- [VSIX] Fix DeveloperMode Option [`5bbca88`](https://github.com/ghost1372/DevWinUI/commit/5bbca88e04153f07acd563c03527cec5402e6994)
- Add AutoUpdateTitleBarCaptionButtonsColor for ThemeService #51 [`f3e1fdb`](https://github.com/ghost1372/DevWinUI/commit/f3e1fdb0d30a51f66f9047a909708ba6e333d435)
- Update Directory.Build.props [`5c089fb`](https://github.com/ghost1372/DevWinUI/commit/5c089fb03378992896b3938fe81821a8c9f455fa)
- Update DevWinUI.Gallery.csproj [`c951f37`](https://github.com/ghost1372/DevWinUI/commit/c951f37287a81be3574f544aa4eb9089181f24b6)


# Version 8.2.0
The following sections describe new and updated features and known issues for version 8.2.0

#### [v8.2.0](https://github.com/ghost1372/DevWinUI/compare/v8.1.0...v8.2.2)

> 17 April 2025

- ReWrite NavigationServiceEx [`5000ba2`](https://github.com/ghost1372/DevWinUI/commit/5000ba2b232a0cd348e3dde2ee069b5b8907bb50)
- Simplify BreadcrumbNavigator [`30d339e`](https://github.com/ghost1372/DevWinUI/commit/30d339e04b16c9b310fb3b351f37526c0b562a00)
- Refactor [`d56e233`](https://github.com/ghost1372/DevWinUI/commit/d56e233b3989e55298580c301659aa932e418a49)
- Improve INIHelper #48 [`b4bdd25`](https://github.com/ghost1372/DevWinUI/commit/b4bdd251e2b86281f7c5638860910335bf89042f)
- Add NavigationParameterExtension and NavigateToCommand for JsonNavigationService/NavigationServiceEx [`e53dac6`](https://github.com/ghost1372/DevWinUI/commit/e53dac67d136bd76a8376be14fe467b100d79075)
- Add SingleInstanceApp [`6b26a39`](https://github.com/ghost1372/DevWinUI/commit/6b26a399344ed59971c2be76f67248c7a669f171)
- Refactor [`b6d9197`](https://github.com/ghost1372/DevWinUI/commit/b6d91972d21cecebf7ff67ac078c3eb7901bab13)
- Create ContentDialogEx.cs [`4e40416`](https://github.com/ghost1372/DevWinUI/commit/4e40416de109a6d079619b48ba5027d66d34054a)
- Improve Native Methods [`bf2d12f`](https://github.com/ghost1372/DevWinUI/commit/bf2d12fc0c9736d30de01b7c364ce76f4f2e25dc)
- Update RainbowFrame.cs [`e7978f9`](https://github.com/ghost1372/DevWinUI/commit/e7978f92c119f756af8c85657f1f30008bf2eb9e)
- Update README.md [`3f1783c`](https://github.com/ghost1372/DevWinUI/commit/3f1783c24fa2837a9145f155066f4ee9587a766d)
- Update Versions [`6f63854`](https://github.com/ghost1372/DevWinUI/commit/6f6385420c83f3a5cd01779cde22dc98a27af7f2)
- Update PredefinedCodes.cs [`6c57703`](https://github.com/ghost1372/DevWinUI/commit/6c57703edfed25ae4652d5a6a3c09dc42ba690a2)
- Add ContrastColorBlackWhite ColorHelper #45 [`14921cc`](https://github.com/ghost1372/DevWinUI/commit/14921cc89903abf76f37f512402046030fe2bbd4)
- Add Missing AttachedProperty [`42b5137`](https://github.com/ghost1372/DevWinUI/commit/42b513746ef3685b5e22d37a095efc319796f532)
- Update WindowHelper.cs [`5ca73f5`](https://github.com/ghost1372/DevWinUI/commit/5ca73f5a95cc8b896d0716b8789bf5d9face35dd)
- INIHelper Increase MAX_LENGTH #48 [`943eec4`](https://github.com/ghost1372/DevWinUI/commit/943eec479d9d7bc9adfeb905f694f1384bedc1b1)
- Add DevWinUI ResourceDictionary [`4945833`](https://github.com/ghost1372/DevWinUI/commit/4945833e902fa7d7db85cad6ceb6ba050c16d64e)
- Update DevWinUI_Template.csproj [`b8aa9ff`](https://github.com/ghost1372/DevWinUI/commit/b8aa9ffaf32017a21a0b50993552476f15209506)
- NoWarn [`23e7af6`](https://github.com/ghost1372/DevWinUI/commit/23e7af659a51f15276adda6f55bd6b1a92e847d5)
- Update BreadcrumbNavigator.cs [`3323f2f`](https://github.com/ghost1372/DevWinUI/commit/3323f2f9fac6ef53f3d9bbb79472b27fe213df65)
- Update PredefinedLibrary VSIX [`4841c6d`](https://github.com/ghost1372/DevWinUI/commit/4841c6d303dff49e945b6cd47f3cd479fddd380c)
- Make NavigationHelperEx and SettingsNavigationAttach Obsolete [`e4a354c`](https://github.com/ghost1372/DevWinUI/commit/e4a354c3671d672b6d8487ae9c46d2d279045438)
- Update SingleInstanceApp.cs [`84e53e0`](https://github.com/ghost1372/DevWinUI/commit/84e53e01dddbc75fade5c8ffdcb320700f50e3dc)

# Version 8.0.0 | 8.1.0
The following sections describe new and updated features and known issues for version 8.0.0 | 8.1.0

## New: 🚀
- Rebranding to DevWinUI [`86edb00`](https://github.com/ghost1372/DevWinUI/commit/86edb00c9530cfbbbf69a4e1cb0522aaf3c61bfd)
- Add Multi-Window Support for ThemeService #10 [`11c3dc0`](https://github.com/ghost1372/DevWinUI/commit/11c3dc0918d53d4bc6e0d0caf69321b9e15332b0)
- Add TextBox Control #8 [`7335ffa`](https://github.com/ghost1372/DevWinUI/commit/7335ffac1756456b41a0898d4a2ad8300e14244a)
- Add GetApplicationTheme and ResetBackdropProperties [`a33eba3`](https://github.com/ghost1372/DevWinUI/commit/a33eba3c3e54c827d14a8df7a6c3a35a7e125769)
- Add ConfigureTintColor for VSIX [`0eae6d7`](https://github.com/ghost1372/DevWinUI/commit/0eae6d78b2a8e3b2edd121bc93c57c5aa8c90cab)
- Add ConfigureTitleBar [`89b188f`](https://github.com/ghost1372/DevWinUI/commit/89b188ff0781b150812365102daa8bce3101aa7a)
- Add TransitioningContentControl [`8604e02`](https://github.com/ghost1372/DevWinUI/commit/8604e02ff3cdf95c348345bde0a9f22e6776a947)
- Add Clock Control [`f1c8fca`](https://github.com/ghost1372/DevWinUI/commit/f1c8fcad696129c90138e6fa9a5631443d49c08d)
- Add CalendarWithClock and DateTimePicker Gallery Demo #3 [`0b7b80b`](https://github.com/ghost1372/DevWinUI/commit/0b7b80b13f4a24544350b3f7ddc9659c2560954b)
- Add CalendarWithClock and DateTimePicker control #3 [`1c9c399`](https://github.com/ghost1372/DevWinUI/commit/1c9c399732bcecde703b050f187930611f6e22bc)
- Add StepBar [`a1bbb6d`](https://github.com/ghost1372/DevWinUI/commit/a1bbb6d40deff8eef188cfc81c40b8bd5b5ebe96)
- Add HoneycombPanel and FlexPanel [`12b2348`](https://github.com/ghost1372/DevWinUI/commit/12b234894cd8acca804b5fd758e6b6ca52d01eda)
- Add ClockMode for CalendarWithClock [`38140e4`](https://github.com/ghost1372/DevWinUI/commit/38140e40d7e9bc0ea90619c66ce1a9edc23ac550)
- Add ProgressButton [`fa0bad2`](https://github.com/ghost1372/DevWinUI/commit/fa0bad2db0b52c0b2b6bb1f630e61bac6a2190f9)
- Add CompareSlider [`57abc6a`](https://github.com/ghost1372/DevWinUI/commit/57abc6a67b84ec2b227ea58a93065287d23c851f)
- Add LayoutTransformer [`6e54266`](https://github.com/ghost1372/DevWinUI/commit/6e542667cb0be074c386a9ca4d3e394ae886bbd3)
- Add GoToTop [`e0739f1`](https://github.com/ghost1372/DevWinUI/commit/e0739f1a35307ecd417df93047a4822a4a20b24b)
- Add Hatch [`51ec4ed`](https://github.com/ghost1372/DevWinUI/commit/51ec4edde3bfe8b174b400052bcc0d9ebea3515b)
- Add DefaultStyle for all controls [`6478fc5`](https://github.com/ghost1372/DevWinUI/commit/6478fc5c56e70692c7b08dae490d8e098c0a256c)
- Add RichTextFormatter #12 Special Tnx to @MPITech [`4952459`](https://github.com/ghost1372/DevWinUI/commit/495245965b644065c1070a7f1bbdaef87bb7bd6e)
- Add ElementGroup [`f0adbe0`](https://github.com/ghost1372/DevWinUI/commit/f0adbe08b4f63459cb383842310f938407ea7dce)
- Add CirclePane; [`bbc0d34`](https://github.com/ghost1372/DevWinUI/commit/bbc0d3457976c07c0c11670c259ec6a1cbaec24d)
- Add LayoutTransformer Sample [`3c480b1`](https://github.com/ghost1372/DevWinUI/commit/3c480b1b6becb460f41b862f46f3902b4f5439e7)
- Add DefaultStyleKey [`bda03af`](https://github.com/ghost1372/DevWinUI/commit/bda03af5a5bfd55a99f6277dac3b4450733bd5b0)
- Add ShowStepIndex Option for StepBar #23 [`8036cae`](https://github.com/ghost1372/DevWinUI/commit/8036cae6b1bf4dfb47b5bcdcd829656ca3fe43c0)
- Add StartupHelper [`b35e9f6`](https://github.com/ghost1372/DevWinUI/commit/b35e9f62f27c644564393f620aeda72ab4160681)
- Add DisplayMonitorHelper [`631a7cd`](https://github.com/ghost1372/DevWinUI/commit/631a7cd2a2730c710056ac6a942835d26dd24c38)
- Add RuntimeHelper [`9c6cec3`](https://github.com/ghost1372/DevWinUI/commit/9c6cec3c6220771ba1db248c87d0d99bba7ae885)
- Add GetApplicationData for PathHelper [`81fd074`](https://github.com/ghost1372/DevWinUI/commit/81fd07472cea0265dae546c18ef2a0c8ba2a674f)
- Add Some Docs for Methods with Copilot AI [`eee5498`](https://github.com/ghost1372/DevWinUI/commit/eee5498d31d26887b06ecc65ee853ea5f70eed98)
- Add new FilePicker, FolderPicker and SavePicker which Support AOT, Packaged/UnPackaged and elevated apps #18 [`1e7c3ad`](https://github.com/ghost1372/DevWinUI/commit/1e7c3add145e87c30847b1cafdb40bcf0cbc16ed)
- Add Window [`3e04f4c`](https://github.com/ghost1372/DevWinUI/commit/3e04f4c348b7a1582deed6a63626ffba4c463a41)
- Add ModernSystemMenu [`90870d5`](https://github.com/ghost1372/DevWinUI/commit/90870d52eab29b253c0cc65f357ea89815e38752)
- Add SemanticVersion Parser [`53c3f7b`](https://github.com/ghost1372/DevWinUI/commit/53c3f7b2a5bd2edef7c0109d79e4648760a043e1)
- Add BrushAttach, ColorBrightnessExtension and LightenColor/DarkenColor [`dadb1d6`](https://github.com/ghost1372/DevWinUI/commit/dadb1d6243b7b135d03e2da03f37f25eedaaab06)
- Add DelegateCommand [`55a1713`](https://github.com/ghost1372/DevWinUI/commit/55a17137025604ab6dbfa6ab172e6c08d35522f5)
- Add ModalWindow [`00af190`](https://github.com/ghost1372/DevWinUI/commit/00af1900918823878cef0666f8eb42ed37955b41)
- Add RelativeDate [`e8a5cd6`](https://github.com/ghost1372/DevWinUI/commit/e8a5cd6fe757655bc305368c1aa1c48b3436c7a2)
- Add GetValidFileName for FileHelper [`e4d8cb9`](https://github.com/ghost1372/DevWinUI/commit/e4d8cb95dbf2a14efa07a47c9aeaaf32aadb6e62)
- Add CenterOnScreen Method for WindowHelper [`74e5195`](https://github.com/ghost1372/DevWinUI/commit/74e51956fca7ad71652cb84b6db2f09c85e11ff8)


## Breaking Changes:🔥
- Update Slnx [`2d05b2f`](https://github.com/ghost1372/DevWinUI/commit/2d05b2fa5bb554c2538ac7dcd81a1fddacc84395)
- Fix TargetFramework [`a74e2bb`](https://github.com/ghost1372/DevWinUI/commit/a74e2bbf0cf8d3fbab0dc13063dd177e2339457c)
- Rename JsonNavigationViewService to JsonNavigationService [`221f9e2`](https://github.com/ghost1372/DevWinUI/commit/221f9e2fe3242078017fbb276587a00a738689c4)
- Rename JsonBreadCrumbNavigator to BreadCrumbNav [`418edd7`](https://github.com/ghost1372/DevWinUI/commit/418edd7d72887ea1bd5aec6a749515ecc35fe99e)
- Update Services Interface (IThemeService and IJsonNavigationService) and Added EnableRequestedTheme [`9a39b1a`](https://github.com/ghost1372/DevWinUI/commit/9a39b1a8454b0f65ae8738f8aba4a4c2c18dfcb1)
- Removed some styles and fixed an issue where Visual Studio was loading unwanted styles and causing Visual Studio to change its own style. [`27d67ac`](https://github.com/ghost1372/DevWinUI/commit/27d67ac392cef59b7e0af4abe57bf6fc3493a7a8)
- Mark Classes as Partial [`9fc08f0`](https://github.com/ghost1372/DevWinUI/commit/9fc08f00bb8da8cca2212f48338538084bcc8f0a)
- Update UpdateHelper.cs [`8d880ef`](https://github.com/ghost1372/DevWinUI/commit/8d880efcafc9aec8215028055c9bf4094368b1bf)
- Improve JsonNavigationService [`1dba625`](https://github.com/ghost1372/DevWinUI/commit/1dba62531c0cd8b053dd357c07f2dcaaa6313448)
- Remove CommunityToolkit.WinUI.Media from DevWinUI.Control Package [`0fb56ae`](https://github.com/ghost1372/DevWinUI/commit/0fb56aed3462a19f927709e80338507466e8da5e)


## Full Details🚀👇

### [v8.0.0](https://github.com/ghost1372/DevWinUI/compare/v8.0.0-Preview1...v8.0.0)

> 18 November 2024

- Rebranding to DevWinUI [`86edb00`](https://github.com/ghost1372/DevWinUI/commit/86edb00c9530cfbbbf69a4e1cb0522aaf3c61bfd)
- Update CHANGELOG.md [`cec0949`](https://github.com/ghost1372/DevWinUI/commit/cec094949d779312f4ba2538dc29dc4f2e81c2ec)
- Update Slnx [`2d05b2f`](https://github.com/ghost1372/DevWinUI/commit/2d05b2fa5bb554c2538ac7dcd81a1fddacc84395)
- Update Docs [`fad9c43`](https://github.com/ghost1372/DevWinUI/commit/fad9c4329169e7f1bd02de40e64296a95d909dcd)
- Fix TargetFramework [`a74e2bb`](https://github.com/ghost1372/DevWinUI/commit/a74e2bbf0cf8d3fbab0dc13063dd177e2339457c)
- Update Slnx [`6d42da9`](https://github.com/ghost1372/DevWinUI/commit/6d42da96441fbdfcd2db9b3a06260a7e59a37afe)

> 13 December 2024

- Wizard [`#2`](https://github.com/ghost1372/DevWinUI/pull/2)
- Fix #14 [`#14`](https://github.com/ghost1372/DevWinUI/issues/14)
- Fix #9 [`#9`](https://github.com/ghost1372/DevWinUI/issues/9)
- Fix #6 [`#6`](https://github.com/ghost1372/DevWinUI/issues/6)
- filescoped namespace for vsix [`2451fff`](https://github.com/ghost1372/DevWinUI/commit/2451fffa80ddc7d9ba41892fdd7b3d00a370d15f)
- Add Multi-Window Support for ThemeService #10 [`11c3dc0`](https://github.com/ghost1372/DevWinUI/commit/11c3dc0918d53d4bc6e0d0caf69321b9e15332b0)
- Fix VSIX [`4c05de0`](https://github.com/ghost1372/DevWinUI/commit/4c05de07d56c84497afcb3b72cf0c6108c908760)
- Rename JsonNavigationViewService to JsonNavigationService [`221f9e2`](https://github.com/ghost1372/DevWinUI/commit/221f9e2fe3242078017fbb276587a00a738689c4)
- Fix Templates [`30e0c68`](https://github.com/ghost1372/DevWinUI/commit/30e0c68de7a04585b0f440ca75587c97fcaf3be7)
- Rename JsonBreadCrumbNavigator to BreadCrumbNav [`418edd7`](https://github.com/ghost1372/DevWinUI/commit/418edd7d72887ea1bd5aec6a749515ecc35fe99e)
- Update Generic.xaml [`6c236f3`](https://github.com/ghost1372/DevWinUI/commit/6c236f37c3508eb2160022aff621830f93ee5280)
- Refactor Wizard [`64d5fab`](https://github.com/ghost1372/DevWinUI/commit/64d5fabfab4117e638f74b5a1357725bb1830c01)
- Refactor Wizard [`70f1dde`](https://github.com/ghost1372/DevWinUI/commit/70f1dde26d4be22e83d8f0ec1c87274e8babd719)
- Add TextBox Control #8 [`7335ffa`](https://github.com/ghost1372/DevWinUI/commit/7335ffac1756456b41a0898d4a2ad8300e14244a)
- Improve VSIX Libraries [`ae333f7`](https://github.com/ghost1372/DevWinUI/commit/ae333f78f320495651ef458009eb40dd1a4f6cf8)
- Refactor Wizard [`e151cfb`](https://github.com/ghost1372/DevWinUI/commit/e151cfb31aa7f6242844eb557e73ae6fb6a0759a)
- simplify RunStarted in VSIX [`5cfb6f7`](https://github.com/ghost1372/DevWinUI/commit/5cfb6f764404388d4999cf90e904d10b2ca8cdcd)
- Update SharedWizard.cs [`ab04837`](https://github.com/ghost1372/DevWinUI/commit/ab048371bc3313e9be19e5b0d496d9738b980fc2)
- Remove Wizard for Blank and Test Template in VSIX [`16cc170`](https://github.com/ghost1372/DevWinUI/commit/16cc1701e6cc83b89e6fb67801b49905cb563cdf)
- Add pubxml files and fix Gallery Suffix Version [`d79d8c3`](https://github.com/ghost1372/DevWinUI/commit/d79d8c35f4d03ea586eedc5f6cee7fe517c19222)
- Update Services Interface (IThemeService and IJsonNavigationService) and Added EnableRequestedTheme [`9a39b1a`](https://github.com/ghost1372/DevWinUI/commit/9a39b1a8454b0f65ae8738f8aba4a4c2c18dfcb1)
- Add StartupToolWindow in VSIX [Not Completed] [`6eda6ce`](https://github.com/ghost1372/DevWinUI/commit/6eda6ce299e01cd8007a245b58bffe44a7147c8c)
- Update ThirdPartyNotices [`bea03a1`](https://github.com/ghost1372/DevWinUI/commit/bea03a18ba468ac1457776a689b9e68d1c98a1e0)
- Update Gallery Icons [`26ca192`](https://github.com/ghost1372/DevWinUI/commit/26ca1924320c91f9cab6e85a855c4a4a35d8e99d)
- Fix NavigationViewItem Selection When Using Back Button [`c574d70`](https://github.com/ghost1372/DevWinUI/commit/c574d70041dc4478b45bd5c6687e1d17991e2f91)
- #11 [`4ebdd44`](https://github.com/ghost1372/DevWinUI/commit/4ebdd4414c5cf43a86402592ac1935340cfd7b90)
- refactor vsix [`0c42af8`](https://github.com/ghost1372/DevWinUI/commit/0c42af80437b09a4b8c588d1ffdcdd5e007f5189)
- Fix VSIX Crash [`63cb8d0`](https://github.com/ghost1372/DevWinUI/commit/63cb8d09252f2d99177b13bfbfd4ce81127ca55b)
- Add GetApplicationTheme and ResetBackdropProperties [`a33eba3`](https://github.com/ghost1372/DevWinUI/commit/a33eba3c3e54c827d14a8df7a6c3a35a7e125769)
- Update Template Icons [`5d4fdb3`](https://github.com/ghost1372/DevWinUI/commit/5d4fdb3118d84c807a2d57b4c11d34c5176a823e)
- Update WASDK version to 1.7.241114004-experimental1 and Update EnsureNavigationSelection [`a997415`](https://github.com/ghost1372/DevWinUI/commit/a997415f1bb96dee9bc61652ec627d0d727c64b0)
- Improve VSIX Startup Page [`0672c65`](https://github.com/ghost1372/DevWinUI/commit/0672c652d308678f96f757ae5664ec260314f4a6)
- Add ConfigureTintColor for VSIX [`0eae6d7`](https://github.com/ghost1372/DevWinUI/commit/0eae6d78b2a8e3b2edd121bc93c57c5aa8c90cab)
- Update README.md [`658711e`](https://github.com/ghost1372/DevWinUI/commit/658711ececce89ea13b520bcdd05c2da900a92a1)
- Update publish-release.yml [`9bac897`](https://github.com/ghost1372/DevWinUI/commit/9bac897b4787a4e54762f835ba766a7d2b6ee27e)
- Improve VSIX [`4a9ea64`](https://github.com/ghost1372/DevWinUI/commit/4a9ea64aad377b3e22bfcdd611f6513b7c752959)
- Add ConfigureTitleBar [`89b188f`](https://github.com/ghost1372/DevWinUI/commit/89b188ff0781b150812365102daa8bce3101aa7a)
- Fix Template Icon [`bd32861`](https://github.com/ghost1372/DevWinUI/commit/bd32861b58d880bce11da220a66505ae2026eb06)
- Clean Gallery [`6d67c9d`](https://github.com/ghost1372/DevWinUI/commit/6d67c9d3205688a718c3e2f08b20ec446aa1dcdb)
- Update SharedWizard.cs [`c5d88c8`](https://github.com/ghost1372/DevWinUI/commit/c5d88c885b691ce648c0230512ebbab0ce5c63b7)
- Removed some styles and fixed an issue where Visual Studio was loading unwanted styles and causing Visual Studio to change its own style. [`27d67ac`](https://github.com/ghost1372/DevWinUI/commit/27d67ac392cef59b7e0af4abe57bf6fc3493a7a8)
- Update publish-release.yml [`ebe51f4`](https://github.com/ghost1372/DevWinUI/commit/ebe51f4eaab29d3e3449b93318b741dd97ae154a)
- Fix Compile Issues for VSIX [`994098e`](https://github.com/ghost1372/DevWinUI/commit/994098e1c67f7206460965f1f377cd22dba42a90)
- Update Templates [`04d182e`](https://github.com/ghost1372/DevWinUI/commit/04d182e601ffd7f350cd602c0a025741e80d6bdc)
- Update publish-release.yml [`ae616d6`](https://github.com/ghost1372/DevWinUI/commit/ae616d63d85e13bcb81ad4992dd7983f09ab2779)
- Fix AOT/Trim Crash for Gallery App [`1bf0e01`](https://github.com/ghost1372/DevWinUI/commit/1bf0e015ad4c8a21626c2d769b3038a4d9e15205)
- Fix VSIX [`c90a62e`](https://github.com/ghost1372/DevWinUI/commit/c90a62eac0148a09b0ea67c9c0aa569d1c4a7310)
- Improve OOB UI [`149461b`](https://github.com/ghost1372/DevWinUI/commit/149461b1b1f87a4af15a1243ae7d5c373b4241cb)
- refactor vsix [`acd616d`](https://github.com/ghost1372/DevWinUI/commit/acd616d90178a1bc957b72336f6522b6d69ce280)
- Update VSIX Template [`aee3917`](https://github.com/ghost1372/DevWinUI/commit/aee39174763702b984f313ab08a6bf13af88bc6c)
- Fix SettingsGroup AOT/Trim Crash [`ad0e13d`](https://github.com/ghost1372/DevWinUI/commit/ad0e13dc1cbb1a5d464949af7c908dbc7334d3ea)
- Update ThirdPartyNotices.txt [`21b4400`](https://github.com/ghost1372/DevWinUI/commit/21b4400a80949eac40b2e1461797214779a3dc85)
- Mark Classes as Partial [`9fc08f0`](https://github.com/ghost1372/DevWinUI/commit/9fc08f00bb8da8cca2212f48338538084bcc8f0a)
- Fix AOT Crash for LandingPages [`b9962f6`](https://github.com/ghost1372/DevWinUI/commit/b9962f6b2123141a0b9d658276303c057ceb7e3a)
- Update VSIX Icons [`eb7cb0f`](https://github.com/ghost1372/DevWinUI/commit/eb7cb0ff67950365a9e10bc10940b68579cb76d3)
- Update All Icons to new WinUI Icon [`61e06ed`](https://github.com/ghost1372/DevWinUI/commit/61e06edc057d2865f93ecb68e4ca0a326586b6f1)
- Fix AOT Crash for LandingPages [`8ba88f4`](https://github.com/ghost1372/DevWinUI/commit/8ba88f45e22c8053dced387ee395500ea4cfb9cc)
- Update publish-release.yml [`35fa8fb`](https://github.com/ghost1372/DevWinUI/commit/35fa8fb0489f3cb97ded237859ee3795389f06b6)
- Fix Templates [`5c4a909`](https://github.com/ghost1372/DevWinUI/commit/5c4a909db6b7057a0c0a086a3f2774dd0b0b5aef)
- Improve Versioning [`aba12cd`](https://github.com/ghost1372/DevWinUI/commit/aba12cdacd6925f4dae7aa71bf8c41001c1237cd)
- Update README.md [`5e4da83`](https://github.com/ghost1372/DevWinUI/commit/5e4da83fc3187e902bc55ef4a1e22a5a686b3bd7)
- Fix VSIX Template [`cbe967b`](https://github.com/ghost1372/DevWinUI/commit/cbe967bbc684a4db21c6c9df7d94d72fa399a553)
- Update DevWinUI_Template.csproj [`463c5a1`](https://github.com/ghost1372/DevWinUI/commit/463c5a197b9693bdf2e74e923d7612f8a3fb4c09)
- Update DevWinUI_Template.csproj [`c3c7d73`](https://github.com/ghost1372/DevWinUI/commit/c3c7d73b3d8ec63e9702e6119ebd737178d471b2)
- Update T4 [`88bd63e`](https://github.com/ghost1372/DevWinUI/commit/88bd63e7345fcf381d3d5ef9c56de3682ae5e9b2)
- Add Icon to TitleBar [`53b2b8b`](https://github.com/ghost1372/DevWinUI/commit/53b2b8b899f01deb3643827eccfbea706680387a)
- Fix VSIX Binding issues [`1882a73`](https://github.com/ghost1372/DevWinUI/commit/1882a736207d200e244cbf675e5891a334c02fa1)
- Remove Unused Refrences [`c9e473e`](https://github.com/ghost1372/DevWinUI/commit/c9e473ebc4483d1cf7607f4703a90d02b000d7a2)
- Update TextBlockStrokeHelper.cs [`0f9be0c`](https://github.com/ghost1372/DevWinUI/commit/0f9be0cad87657247807b470fc71266c1dbd3780)
- Update README.md [`4694a91`](https://github.com/ghost1372/DevWinUI/commit/4694a9195d7163c3d0dcd8214d5e65e7389c7671)
- Update Workflow [`5b0594c`](https://github.com/ghost1372/DevWinUI/commit/5b0594ca3eae4a998cac2157e90494c55ad104a9)
- Update StringToUriConverter.cs [`0617205`](https://github.com/ghost1372/DevWinUI/commit/0617205f418929c13092ac8ea97dac72f96d3f3d)
- Fix VSIX Size 9mb to 7mb [`574a387`](https://github.com/ghost1372/DevWinUI/commit/574a3876b075610aa1340717e40e90a9930a2ea7)
- remove unused refrences [`bc83030`](https://github.com/ghost1372/DevWinUI/commit/bc830303f5fc5539fe5d991cd8228c0aa62676ba)
- Update DevWinUI.Gallery.csproj [`0ad8dbb`](https://github.com/ghost1372/DevWinUI/commit/0ad8dbbf762e58c775a7dcd0beb942606825dddf)
- Update UpdateHelper.cs [`8d880ef`](https://github.com/ghost1372/DevWinUI/commit/8d880efcafc9aec8215028055c9bf4094368b1bf)
- Update SpriteVisualPool.cs [`3d0a15d`](https://github.com/ghost1372/DevWinUI/commit/3d0a15da37606c536a54325912739b62ffca8f50)
- Update README.md [`638f8ef`](https://github.com/ghost1372/DevWinUI/commit/638f8ef95b2ff3efc08b0ce0ad0335f8ab7dc038)
- Fix VSIX Templates #7 [`2111f19`](https://github.com/ghost1372/DevWinUI/commit/2111f193fde1763429404eae6f42f70dc43afa91)
- Update DevWinUI.slnx [`8934442`](https://github.com/ghost1372/DevWinUI/commit/89344425b41a137fbd84715ea5dcfbec67222e83)
- Update Directory.Build.props [`b0740c0`](https://github.com/ghost1372/DevWinUI/commit/b0740c045dedb399ab16ebdaf083bb145cdb4fe9)
- Update publish-release.yml [`dce8532`](https://github.com/ghost1372/DevWinUI/commit/dce85321f71ce614f340a5bd2773323c7042b038)
- Update publish-release.yml [`a80e3d8`](https://github.com/ghost1372/DevWinUI/commit/a80e3d807a1405d3edecf89256f9aa4b26bc1843)
- Update SettingsPageControl.xaml [`2255e66`](https://github.com/ghost1372/DevWinUI/commit/2255e66003b9243211b6c4c7169704e89b66d62e)
- Update DevWinUI_Template.csproj [`22e7db0`](https://github.com/ghost1372/DevWinUI/commit/22e7db0e7727ef3b42d6fe5f26c3c652771dd796)
- Update publish-release.yml [`28febf5`](https://github.com/ghost1372/DevWinUI/commit/28febf51be6016ade1f97486bbadedaebbc07dd5)
- Update StartupToolWindowControl.xaml [`6e09683`](https://github.com/ghost1372/DevWinUI/commit/6e0968311893dd9c062f10d942a4e185c2a5a132)
- Update source.extension.vsixmanifest [`fe219a9`](https://github.com/ghost1372/DevWinUI/commit/fe219a9ff5c447e13edee00599cc1bd3c49ee53e)
- Update README.md [`426aa7f`](https://github.com/ghost1372/DevWinUI/commit/426aa7ff3dbb2c2cb9184206d4d12ab090fe3af5)
- Update DevWinUI.slnx [`da1570e`](https://github.com/ghost1372/DevWinUI/commit/da1570e8255b936bcf8bcecae1229dd89326bf29)
- Update TiledImageBrushPage.xaml [`c2c04cb`](https://github.com/ghost1372/DevWinUI/commit/c2c04cbf4726bfff27f2035a67a5aa9f825424b8)
- Update Icons [`6837415`](https://github.com/ghost1372/DevWinUI/commit/6837415c8f13b773518c9d2419296d0cd5fbf715)
- Update Package.appxmanifest [`22b3005`](https://github.com/ghost1372/DevWinUI/commit/22b30055b246d63d588b8a96b4fca1c5e2cb3961)
- Update PreDefinedLibrary.cs [`f7506c3`](https://github.com/ghost1372/DevWinUI/commit/f7506c31c0ac68a373e4ec199bb724cc7804fb2b)
- Update Directory.Build.props [`bb99974`](https://github.com/ghost1372/DevWinUI/commit/bb99974fcdb9231d22793aa72bd277001d755af8)
- Update TextBlockStrokeView.xaml [`72690aa`](https://github.com/ghost1372/DevWinUI/commit/72690aa559d7b82eb9a967e7fe3c1f5136bf6dcc)
- Update DevWinUI.slnx [`b3030a3`](https://github.com/ghost1372/DevWinUI/commit/b3030a3ce368e849708a2d8c2553c4324130ea87)
- Update NavigationPageMappings.cs [`84057db`](https://github.com/ghost1372/DevWinUI/commit/84057dbc3475d2f8781c7b4ffe02cfee482c3e12)
- Update Icons [`ef31d4e`](https://github.com/ghost1372/DevWinUI/commit/ef31d4eb5063b481875e964d98c8e9853f0bcdb8)
- Update LockScreenLogo.scale-200.png [`b89f56c`](https://github.com/ghost1372/DevWinUI/commit/b89f56c2a0a01b40ee68cea6de03f899dbfbb7ae)
- Update Logo [`5c260c2`](https://github.com/ghost1372/DevWinUI/commit/5c260c2ea67195a9fe40d5d511139cb129b142e5)

> 10 January 2025

- Fix #15 [`#15`](https://github.com/ghost1372/DevWinUI/issues/15)
- Add TransitioningContentControl [`8604e02`](https://github.com/ghost1372/DevWinUI/commit/8604e02ff3cdf95c348345bde0a9f22e6776a947)
- Improve LandingPages [`2a02257`](https://github.com/ghost1372/DevWinUI/commit/2a022575685218a9d5e18ea54dadf2622122b934)
- Fix CalendarViewStyle and Clock Border Background [`0a467ce`](https://github.com/ghost1372/DevWinUI/commit/0a467ce2b16b8eafb235840a36da4df4adfcb8c7)
- Add CirclePanel Sample [`4eb7d51`](https://github.com/ghost1372/DevWinUI/commit/4eb7d51e386e78e588176237c9afe405ba16a0e7)
- Add Clock Control [`f1c8fca`](https://github.com/ghost1372/DevWinUI/commit/f1c8fcad696129c90138e6fa9a5631443d49c08d)
- Fix DateTimePicker Sample [`ef6c5d4`](https://github.com/ghost1372/DevWinUI/commit/ef6c5d4378ca57ea9370d156ed27adad9d19bc3e)
- Add CalendarWithClock and DateTimePicker Gallery Demo #3 [`0b7b80b`](https://github.com/ghost1372/DevWinUI/commit/0b7b80b13f4a24544350b3f7ddc9659c2560954b)
- Fix Some Bugs #3 [`31bf00b`](https://github.com/ghost1372/DevWinUI/commit/31bf00bec7f38d3a256ead183a72f00d7af65a3a)
- Update ReadMe [`6271847`](https://github.com/ghost1372/DevWinUI/commit/62718478febbc4cb274fff6e9baa2eb3414cf825)
- Rename IsConfirmButtonShow to ShowConfirmButton [`6fa460b`](https://github.com/ghost1372/DevWinUI/commit/6fa460b913071416253e1e0807b8688ff7ad925a)
- Add CalendarWithClock and DateTimePicker control #3 [`1c9c399`](https://github.com/ghost1372/DevWinUI/commit/1c9c399732bcecde703b050f187930611f6e22bc)
- Add StepBar [`a1bbb6d`](https://github.com/ghost1372/DevWinUI/commit/a1bbb6d40deff8eef188cfc81c40b8bd5b5ebe96)
- Add HoneycombPanel and FlexPanel [`12b2348`](https://github.com/ghost1372/DevWinUI/commit/12b234894cd8acca804b5fd758e6b6ca52d01eda)
- Add ClockMode for CalendarWithClock [`38140e4`](https://github.com/ghost1372/DevWinUI/commit/38140e40d7e9bc0ea90619c66ce1a9edc23ac550)
- Add ProgressButton [`fa0bad2`](https://github.com/ghost1372/DevWinUI/commit/fa0bad2db0b52c0b2b6bb1f630e61bac6a2190f9)
- Add CompareSlider [`57abc6a`](https://github.com/ghost1372/DevWinUI/commit/57abc6a67b84ec2b227ea58a93065287d23c851f)
- Add LayoutTransformer [`6e54266`](https://github.com/ghost1372/DevWinUI/commit/6e542667cb0be074c386a9ca4d3e394ae886bbd3)
- Add GoToTop [`e0739f1`](https://github.com/ghost1372/DevWinUI/commit/e0739f1a35307ecd417df93047a4822a4a20b24b)
- Add Hatch [`51ec4ed`](https://github.com/ghost1372/DevWinUI/commit/51ec4edde3bfe8b174b400052bcc0d9ebea3515b)
- Add DefaultStyle for all controls [`6478fc5`](https://github.com/ghost1372/DevWinUI/commit/6478fc5c56e70692c7b08dae490d8e098c0a256c)
- Add RichTextFormatter #12 Special Tnx to @MPITech [`4952459`](https://github.com/ghost1372/DevWinUI/commit/495245965b644065c1070a7f1bbdaef87bb7bd6e)
- Add ElementGroup [`f0adbe0`](https://github.com/ghost1372/DevWinUI/commit/f0adbe08b4f63459cb383842310f938407ea7dce)
- Improve JsonNavigationService [`1dba625`](https://github.com/ghost1372/DevWinUI/commit/1dba62531c0cd8b053dd357c07f2dcaaa6313448)
- Refactor [`6ed856f`](https://github.com/ghost1372/DevWinUI/commit/6ed856f08774eefad0d88b80df5930ad7dcb024d)
- Improve Clock and CalendarWithClock Colors [`d2fd0d3`](https://github.com/ghost1372/DevWinUI/commit/d2fd0d333cf2fcd73b76dd875dd49cb0690c1622)
- Improve LandingPages [`6fda9d2`](https://github.com/ghost1372/DevWinUI/commit/6fda9d20e89054acd4712596db9d18224dde767a)
- Update Animation [`49c0820`](https://github.com/ghost1372/DevWinUI/commit/49c082005284bbd03efa749d6938554edee23874)
- Improve JsonNavigationService [`8f54b6b`](https://github.com/ghost1372/DevWinUI/commit/8f54b6bab4807e989a7516c8b8398716c9044e9d)
- Improve DateTimePicker [`c2b22e2`](https://github.com/ghost1372/DevWinUI/commit/c2b22e2b33b423408638a2a06d67e2095a8d5ac0)
- Improve JsonNavigationService [`e5d68ec`](https://github.com/ghost1372/DevWinUI/commit/e5d68ec3f2320df511e277164bd63bf954ff30f8)
- Fix ShortcutGuidePage [`ce0583c`](https://github.com/ghost1372/DevWinUI/commit/ce0583cb2ec98267887bdb82b88bce7a44c50726)
- Add CirclePane; [`bbc0d34`](https://github.com/ghost1372/DevWinUI/commit/bbc0d3457976c07c0c11670c259ec6a1cbaec24d)
- Add LayoutTransformer Sample [`3c480b1`](https://github.com/ghost1372/DevWinUI/commit/3c480b1b6becb460f41b862f46f3902b4f5439e7)
- Fix Clock, CalendarWithClock and DateTimePicker [`d340390`](https://github.com/ghost1372/DevWinUI/commit/d3403900ec6acbb5cd2adedd7123979c7638edab)
- Init Gallery Demo #3 [`d6a19dc`](https://github.com/ghost1372/DevWinUI/commit/d6a19dce33b98d22217f75943fb22e076a943f04)
- Fix Clock [`8c7143c`](https://github.com/ghost1372/DevWinUI/commit/8c7143c59eb8f2962dc67c768a4974be7bba1f5c)
- Add SelectedTimeChanged event in Clock, and CalendarWithClock [`f95cece`](https://github.com/ghost1372/DevWinUI/commit/f95cecec3b923f7f823ee40d0121867754b7b712)
- Improve JsonNavigationService [`e7b4c53`](https://github.com/ghost1372/DevWinUI/commit/e7b4c539eeab2834ae670aee9ef40ee3244a7bf2)
- Add Clock Sample [`b33c22f`](https://github.com/ghost1372/DevWinUI/commit/b33c22f1380da9807b4ff279f66fffc237f4dc28)
- Improve StepBar [`041fe33`](https://github.com/ghost1372/DevWinUI/commit/041fe33b5c45d81c26d6e18160db41e8a3094120)
- Improve WaveProgressBar Background and BorderBrush [`48be979`](https://github.com/ghost1372/DevWinUI/commit/48be979bd3875c424deb5b7a23ac4b751d262cf7)
- Improve CalendarWithClock Sample [`594252f`](https://github.com/ghost1372/DevWinUI/commit/594252ff3e7947897d6ae47447470a9912285a97)
- Update CalendarWithClock.cs [`431dc2c`](https://github.com/ghost1372/DevWinUI/commit/431dc2c404c8a06510eba5d1154c373aa62c73d7)
- Update ColorHelper.cs [`907bc70`](https://github.com/ghost1372/DevWinUI/commit/907bc703d78c361d5ae38482cee8c4a091c79227)
- Update ThirdPartyNotices.txt #11 [`9f241f0`](https://github.com/ghost1372/DevWinUI/commit/9f241f0ebb22367db10cd79268a9f670bff601b1)
- Update JsonNavigationService.cs [`134c8b4`](https://github.com/ghost1372/DevWinUI/commit/134c8b49815cd8d583b6759870a7e2fdb92eacec)
- Add StepChanged event for StepBar [`0cdd6e0`](https://github.com/ghost1372/DevWinUI/commit/0cdd6e02badf619b7c31e9c609bb13de800ab3e2)
- Fix NavigationViewItem Expand crash #20 [`a2d6e9b`](https://github.com/ghost1372/DevWinUI/commit/a2d6e9bd1815e67ccf015a891115ae83c2f4b994)
- Rename IsConfirmButtonShow to ShowConfirmButton [`edd6b92`](https://github.com/ghost1372/DevWinUI/commit/edd6b925788e379fe4de6ebdc106bb0464f0e140)
- Improve Gallery [`c97954d`](https://github.com/ghost1372/DevWinUI/commit/c97954d41cee13de7fc3d20cae5453828e13f124)
- Update Clock Sample [`4cc1cac`](https://github.com/ghost1372/DevWinUI/commit/4cc1cac3dd1efac234b838534daf8196f2dd65b6)
- Update WASDK v1.7-exp2 [`1e1f823`](https://github.com/ghost1372/DevWinUI/commit/1e1f823c5f3f80731d691c3d67f46375a636e385)
- Update CompareSlider [`233df7b`](https://github.com/ghost1372/DevWinUI/commit/233df7be9543375fd2ee966b70b36d92a4c2d60f)
- Update JsonNavigationService.cs [`43dc6ad`](https://github.com/ghost1372/DevWinUI/commit/43dc6adf2e37ce330866e59f1c0c25cb802a505d)
- Update README.md [`220b8c5`](https://github.com/ghost1372/DevWinUI/commit/220b8c5581b91379e76f3f02d5f38eb46af2f9bc)
- Update Templates [`0d6659a`](https://github.com/ghost1372/DevWinUI/commit/0d6659a203d3d3472bf5f07d2b608424d5b07e31)
- Update GeneralHelper.cs [`4cf8f36`](https://github.com/ghost1372/DevWinUI/commit/4cf8f369590c1604b183776b1ecd4a3d514b7258)
- Update Package.appxmanifest [`8bc024f`](https://github.com/ghost1372/DevWinUI/commit/8bc024f36ffe81a0890250efaa340f6cc1b03e8b)
- Update JsonNavigationService.NavigationView.cs [`4ebed6f`](https://github.com/ghost1372/DevWinUI/commit/4ebed6fe1d089efcf730d67ce40bf3971e8df2f8)
- Update DateTimeBase.cs [`a255674`](https://github.com/ghost1372/DevWinUI/commit/a255674fe8ed3110883b49746af692dc09b8cfe0)
- Update README.md [`95ff89c`](https://github.com/ghost1372/DevWinUI/commit/95ff89c88d19f23e05ac7828369f3142f71c6463)
- Update AppData.json [`dd63a86`](https://github.com/ghost1372/DevWinUI/commit/dd63a863322aa9797f2b089193a40affc0dc3742)
- Update MainPage.xaml.cs [`d04f5e4`](https://github.com/ghost1372/DevWinUI/commit/d04f5e41ea6bbcb8b398a0c168f5b85ffc95d243)
- Update JsonNavigationService.cs [`a9f70d9`](https://github.com/ghost1372/DevWinUI/commit/a9f70d95bc4f44cd8d8ef9e62ae68ac21030062a)
- Fix GalleryApp Runtime Theme Change [`033ff0e`](https://github.com/ghost1372/DevWinUI/commit/033ff0e46a61939c2f13eadbaa3ae41a727bb478)
- Update PinBox.cs [`18cceab`](https://github.com/ghost1372/DevWinUI/commit/18cceab6f8e0ab87d5dd641ca7fe3ce13055f661)
- Update README.md [`6f799dd`](https://github.com/ghost1372/DevWinUI/commit/6f799dd15040a064992818f6186fc1e6f690b7e4)
- Update README.md [`0261b2d`](https://github.com/ghost1372/DevWinUI/commit/0261b2d26dc0c6a030a83e6321dbeb9f2e64b01b)

> 7 February 2025

- Clock improvements plus made DateTimePicker bindable. [`#27`](https://github.com/ghost1372/DevWinUI/pull/27)
- Fixed DateTimePicker, and made names more intuitive [`#25`](https://github.com/ghost1372/DevWinUI/pull/25)
- Fix #22 [`#22`](https://github.com/ghost1372/DevWinUI/issues/22)
- Update Templates and Replace MainPage with MainWindow [`0d39c11`](https://github.com/ghost1372/DevWinUI/commit/0d39c11f82fc0ed686540012e047bc290832c08b)
- Remove CommunityToolkit.WinUI.Media from DevWinUI.Control Package [`0fb56ae`](https://github.com/ghost1372/DevWinUI/commit/0fb56aed3462a19f927709e80338507466e8da5e)
- Improve ThemeService for Multi-Window #26 [`e5ae95b`](https://github.com/ghost1372/DevWinUI/commit/e5ae95bbe2e159ff88c48fd79d18f9828f57807b)
- Made DateTimePicker's SelectedDateTime assignable/bindable by not requiring a seperate time. [`671d881`](https://github.com/ghost1372/DevWinUI/commit/671d881eaba22816415c3baed69fcf79dc1d3e9e)
- Fix Templates Issues [`7c2e926`](https://github.com/ghost1372/DevWinUI/commit/7c2e9268de2572ae2297ecceacfb17407566fffb)
- Update ThemeService.Configs.cs #26 [`c04adbf`](https://github.com/ghost1372/DevWinUI/commit/c04adbf6418963f886008558e7eafc70991036d4)
- Add DefaultStyleKey [`bda03af`](https://github.com/ghost1372/DevWinUI/commit/bda03af5a5bfd55a99f6277dac3b4450733bd5b0)
- Added Try-Finally guards to prevent infinite loops. [`0537fc2`](https://github.com/ghost1372/DevWinUI/commit/0537fc286e001d5e36576bb0df38f10100b75cc8)
- Use MainWindow Instead of MainPage [`a031a70`](https://github.com/ghost1372/DevWinUI/commit/a031a702cf2e16ed66b714195225e749279dfae5)
- Fixed the issue with the DateTimePicker not properly updating the DateTime. [`0cf8ec4`](https://github.com/ghost1372/DevWinUI/commit/0cf8ec4872c40d0b8eb7991b62721fc2a7fdbfdf)
- Renamed SelectedDateTime to SelectedDateTimeString [`4240854`](https://github.com/ghost1372/DevWinUI/commit/4240854950a21c7425b12749cb22d14051777d9c)
- Improve Growl [`43be266`](https://github.com/ghost1372/DevWinUI/commit/43be266ad4f6064053f99fd9516c66c754aacc9d)
- Add MakeTransparentWindowClickThrough to WindowHelper [`353db5e`](https://github.com/ghost1372/DevWinUI/commit/353db5e63e6ee3d065c6a1af139cf8e34bd40203)
- Update Libs [`48995c3`](https://github.com/ghost1372/DevWinUI/commit/48995c3df1f84dfa2fc1057f1982f09ea0f69231)
- Add ShowStepIndex Option for StepBar #23 [`8036cae`](https://github.com/ghost1372/DevWinUI/commit/8036cae6b1bf4dfb47b5bcdcd829656ca3fe43c0)
- Update ThemeService.Set.cs #26 [`c38cb2c`](https://github.com/ghost1372/DevWinUI/commit/c38cb2c69564ac1001f62f88fbec7ec6c65fecfd)
- ThemeService.Set.cs #26 [`b604563`](https://github.com/ghost1372/DevWinUI/commit/b604563d75f01f817307f4568e25bbf64a34daf2)
- Fix Xaml HotReload for Templates [`f8913ee`](https://github.com/ghost1372/DevWinUI/commit/f8913eef92df5a23a4a1882f75b54dba7707b9d3)
- Fix Templates Compile Issues [`e4f98dc`](https://github.com/ghost1372/DevWinUI/commit/e4f98dcff70bf10ee36539e61ce0511c5359e34d)
- Add RemoveWindowBorderAndTitleBar [`9e74000`](https://github.com/ghost1372/DevWinUI/commit/9e74000c54728cf4774ac8169a884392b530d3cb)
- Move comments to the top [`1d8a10e`](https://github.com/ghost1372/DevWinUI/commit/1d8a10ed71d3282841a4701a39c37efe041731c6)
- Update PreDefinedLibrary.cs [`e629d87`](https://github.com/ghost1372/DevWinUI/commit/e629d87d0b5680ca577588be88265843fc900271)
- Update TransparentBackdrop.cs [`61267e7`](https://github.com/ghost1372/DevWinUI/commit/61267e72caf855d35684626d3dcdc76b1c87c6a1)
- Update VSIX prerequisites [`5fd9f33`](https://github.com/ghost1372/DevWinUI/commit/5fd9f33a301eb0f59edd9962c1f6bd4b1500f733)
- Update WindowMessageMonitor.cs [`228f5ef`](https://github.com/ghost1372/DevWinUI/commit/228f5ef610a3add497df21518c998d02a284e72e)
- Update WASDK v1.7-EXP3 [`1e9c19c`](https://github.com/ghost1372/DevWinUI/commit/1e9c19c9b74ee686bb8225ec1c357fe1d7f57172)
- Update TransparentBackdrop.cs [`6784242`](https://github.com/ghost1372/DevWinUI/commit/67842425563e176baee516cf53a2d5d562e056d4)
- Update PreDefinedLibrary.cs [`aac49ad`](https://github.com/ghost1372/DevWinUI/commit/aac49adb8b8164aab8cb0401c99da93232538df8)
- Update ThemeService.Set.cs [`4e42c07`](https://github.com/ghost1372/DevWinUI/commit/4e42c0769ac542a9161abf05dcc2365c4de0d43b)
- Am/Pm should be all one case. [`5649d24`](https://github.com/ghost1372/DevWinUI/commit/5649d244203d678492bdcdfff3b4527cd7131902)
- Update DateTimePicker.cs [`c849f82`](https://github.com/ghost1372/DevWinUI/commit/c849f822917b605f154872b8e53fbadab44d5f67)
- Update HomePageHeaderImage.xaml.cs [`e54cd24`](https://github.com/ghost1372/DevWinUI/commit/e54cd248b3dd0bbfbfd9ecdd13e508308c749581)
- Update WindowMessageEventArgs.cs [`7baa03f`](https://github.com/ghost1372/DevWinUI/commit/7baa03fddecb10f7e9aa247016638de2e6583376)
- Really not used to slnx, deleting automatically created project. [`0aaf209`](https://github.com/ghost1372/DevWinUI/commit/0aaf209bf6a1c9a9ee4021d5eded8fbf80731fe2)
- Fix ProgressButton Background in Indeterminate Mode #29 [`7c08308`](https://github.com/ghost1372/DevWinUI/commit/7c083082e9eb7941569259e4939d10765f680976)
- Update Clock.cs [`d09f6fe`](https://github.com/ghost1372/DevWinUI/commit/d09f6fe514240cdb9c0ebcce0c711e0a8f272ed9)
- Removed weird automatic gitignore change. [`d0ea019`](https://github.com/ghost1372/DevWinUI/commit/d0ea01954807754c24c5464326afc56eec689c99)
- Made the same changes on DateTimePicker. [`9ed50c0`](https://github.com/ghost1372/DevWinUI/commit/9ed50c0fe539cd1fecd405a89efa136cdf1818b3)

> 13 February 2025

- Improve Templates Add ContentPagePadding to fix VerticalScrollBars #31 [`649179e`](https://github.com/ghost1372/DevWinUI/commit/649179ecb8c24a0f5f5dac0f515013236bb1d328)
- Refactor LandingPages [`98c5e3a`](https://github.com/ghost1372/DevWinUI/commit/98c5e3af836151b7959f62a4a63d0a70d92722a3)
- Improve LandingPages [`a3c658b`](https://github.com/ghost1372/DevWinUI/commit/a3c658beeb39efd7cf6c0b257d3b0de1ddb013d3)
- Add StartupHelper [`b35e9f6`](https://github.com/ghost1372/DevWinUI/commit/b35e9f62f27c644564393f620aeda72ab4160681)
- Fix Template issues [`e1830b9`](https://github.com/ghost1372/DevWinUI/commit/e1830b9692aa16838e84cda30d19294df9e047dc)
- Add Startup option [`970f867`](https://github.com/ghost1372/DevWinUI/commit/970f867bb8975a02cbf015bde6ae898ba1b1047c)
- Add DisplayMonitorHelper [`631a7cd`](https://github.com/ghost1372/DevWinUI/commit/631a7cd2a2730c710056ac6a942835d26dd24c38)
- Add RuntimeHelper [`9c6cec3`](https://github.com/ghost1372/DevWinUI/commit/9c6cec3c6220771ba1db248c87d0d99bba7ae885)
- Update GeneralHelper.cs [`33a97c2`](https://github.com/ghost1372/DevWinUI/commit/33a97c2ab0c318c86066b3afc28bdd235e976e43)
- Improve Template [`f887ee4`](https://github.com/ghost1372/DevWinUI/commit/f887ee4bb1f3d37d00a35278d9e2f988c0c7fcab)
- Improve LandingPages [`aba3687`](https://github.com/ghost1372/DevWinUI/commit/aba36876bbbc331e22feaf39d2f2f51847695c19)
- Update MainWindow.xaml [`9e73433`](https://github.com/ghost1372/DevWinUI/commit/9e7343359d09887ba651f30e881a7772f39a7f8f)
- Update WASDK to v1.7-Preview1 [`4b420e8`](https://github.com/ghost1372/DevWinUI/commit/4b420e8a4b7e9a21ffd7016d09b16ce6def2b0eb)
- Move GetApplicationData to GeneralHelper [`5220280`](https://github.com/ghost1372/DevWinUI/commit/52202807a27714cdc05544458326f99ecf557e98)
- Update StartupHelper.cs [`7f5e3cf`](https://github.com/ghost1372/DevWinUI/commit/7f5e3cf57534f628c6254c710e480438583a6e1c)
- Improve Templates [`7b7cae4`](https://github.com/ghost1372/DevWinUI/commit/7b7cae4ac66f9524fc99b2455c971a0a0677ae09)
- Add GetApplicationData for PathHelper [`81fd074`](https://github.com/ghost1372/DevWinUI/commit/81fd07472cea0265dae546c18ef2a0c8ba2a674f)
- fix [`6d417be`](https://github.com/ghost1372/DevWinUI/commit/6d417be677a12d65f029014aacf7d8ffe730295f)
- Update App.xaml.cs [`5885d0c`](https://github.com/ghost1372/DevWinUI/commit/5885d0c2792385a0c1db556b30ebd6dda3b39f4b)
- Update MainLandingPage [`724daee`](https://github.com/ghost1372/DevWinUI/commit/724daeeef4e02199bdeec35e270fbb8585af67d3)

> 14 March 2025

- Window [`#39`](https://github.com/ghost1372/DevWinUI/pull/39)
- Add SemanticVersion Parser [`53c3f7b`](https://github.com/ghost1372/DevWinUI/commit/53c3f7b2a5bd2edef7c0109d79e4648760a043e1)
- Add DelegateCommand Demo [`5f075ac`](https://github.com/ghost1372/DevWinUI/commit/5f075ac987677bebeb3865503375580e64cee84e)
- Add MessageBox Demo [`f7e5017`](https://github.com/ghost1372/DevWinUI/commit/f7e50176584e9d87a6045240fd9775799c9e247c)
- refactor [`64a6484`](https://github.com/ghost1372/DevWinUI/commit/64a64842cb7f5919adccc33775a72cb662895d35)
- Update CommandPage [`93b6312`](https://github.com/ghost1372/DevWinUI/commit/93b6312cfe3c9ad0eafa1d55dc0e306a4abc5e3f)
- Update Generic.xaml [`34c363d`](https://github.com/ghost1372/DevWinUI/commit/34c363d9869ef38b9578708d87fb23a1bf0a6bb7)
- refactor usings [`e31d94e`](https://github.com/ghost1372/DevWinUI/commit/e31d94ebbcb204ceeda9402e4531f0079fcdfcbc)
- Add Some Docs for Methods with Copilot AI [`eee5498`](https://github.com/ghost1372/DevWinUI/commit/eee5498d31d26887b06ecc65ee853ea5f70eed98)
- Add new FilePicker, FolderPicker and SavePicker which Support AOT, Packaged/UnPackaged and elevated apps #18 [`1e7c3ad`](https://github.com/ghost1372/DevWinUI/commit/1e7c3add145e87c30847b1cafdb40bcf0cbc16ed)
- Add Window [`3e04f4c`](https://github.com/ghost1372/DevWinUI/commit/3e04f4c348b7a1582deed6a63626ffba4c463a41)
- Add ModernSystemMenu [`90870d5`](https://github.com/ghost1372/DevWinUI/commit/90870d52eab29b253c0cc65f357ea89815e38752)
- Improve JsonNavigationService and LandingPages Localization [`02fb693`](https://github.com/ghost1372/DevWinUI/commit/02fb69331b7cae99f26dedcb61bdbe1f7e356c73)
- Add BrushAttach, ColorBrightnessExtension and LightenColor/DarkenColor [`dadb1d6`](https://github.com/ghost1372/DevWinUI/commit/dadb1d6243b7b135d03e2da03f37f25eedaaab06)
- refactor [`09e1938`](https://github.com/ghost1372/DevWinUI/commit/09e193898bfee8cf02c353adff0046dcb597d088)
- Update MessageBox.cs [`d85fa00`](https://github.com/ghost1372/DevWinUI/commit/d85fa00479d8a3c0ad584f24dfb39416d3de6abc)
- Add DelegateCommand [`55a1713`](https://github.com/ghost1372/DevWinUI/commit/55a17137025604ab6dbfa6ab172e6c08d35522f5)
- Refactor Pickers [`31b6aac`](https://github.com/ghost1372/DevWinUI/commit/31b6aac7d3f2696a256dcf1afcc4fc8b8144f0d8)
- Fix Some AOT Warning for GalleryApp [`9502c54`](https://github.com/ghost1372/DevWinUI/commit/9502c5456976477d64d3075770adc3ead7affb53)
- Add SemanticVersionPage Demo [`678c680`](https://github.com/ghost1372/DevWinUI/commit/678c68059b62df18dabfeda6c4a9737c636f6053)
- Fix ThemeService TintColor [`bc27b29`](https://github.com/ghost1372/DevWinUI/commit/bc27b293e222319867b890f3b38d33735801dbd1)
- Create ModernSystemMenuStyle.xaml [`2f538bf`](https://github.com/ghost1372/DevWinUI/commit/2f538bf8e6895dcf31643d3729531ff4b68b0cb4)
- Add Backdrop Sample [`79dd88d`](https://github.com/ghost1372/DevWinUI/commit/79dd88d096b700b62a22a12006831201f96faba5)
- Add ModalWindow [`00af190`](https://github.com/ghost1372/DevWinUI/commit/00af1900918823878cef0666f8eb42ed37955b41)
- Add ColorBrightness Demo [`418ed0e`](https://github.com/ghost1372/DevWinUI/commit/418ed0e6c57d591afaa39791358cb1e47c7dc641)
- Update MainLandingPage.xaml.cs [`077a1be`](https://github.com/ghost1372/DevWinUI/commit/077a1be61db7aa0f182f19e55e2cf7d3c72e74e7)
- Update GalleryApp with ModernSystemMenu [`90f7abe`](https://github.com/ghost1372/DevWinUI/commit/90f7abeee0556b8fd1c90031c2be3b3cf71fa9e5)
- Add DragMoveAndResizePage Demo [`fc28e77`](https://github.com/ghost1372/DevWinUI/commit/fc28e770712eedf7edddfb8fdb497479166741b5)
- Improve RelativeDate [`7afe02a`](https://github.com/ghost1372/DevWinUI/commit/7afe02a2f97af39de4341dbc7da8a4f113fad9a1)
- Add RelativeDate [`e8a5cd6`](https://github.com/ghost1372/DevWinUI/commit/e8a5cd6fe757655bc305368c1aa1c48b3436c7a2)
- Add GetValidFileName for FileHelper [`e4d8cb9`](https://github.com/ghost1372/DevWinUI/commit/e4d8cb95dbf2a14efa07a47c9aeaaf32aadb6e62)
- Add CenterOnScreen Method for WindowHelper [`74e5195`](https://github.com/ghost1372/DevWinUI/commit/74e51956fca7ad71652cb84b6db2f09c85e11ff8)
- Update ModernSystemMenu.cs [`bafabb8`](https://github.com/ghost1372/DevWinUI/commit/bafabb8ab91c3151457a80ab361871416ffb0e9d)
- Use Windows.Storage.Pickers.PickerLocationId instead of built-in PickerLocationId [`054f9d7`](https://github.com/ghost1372/DevWinUI/commit/054f9d775f5f7476c6d4248bf13b6cd324f85833)
- Update MessageBox.cs [`8a5cec5`](https://github.com/ghost1372/DevWinUI/commit/8a5cec5f1f8e0e6597278eb6da1fd6d27d93369b)
- Fix ThemeService TintColor and FallbackColor [`ed33586`](https://github.com/ghost1372/DevWinUI/commit/ed33586617b630869ba3825fb069e0f42883d6df)
- Bring Back CreateDispatcherQueue Legacy PInvoke (CSWin32 has some issues) [`aac4302`](https://github.com/ghost1372/DevWinUI/commit/aac4302c84a47b03379b583d76274f304e978b94)
- [VSIX-Template] Add Tall TitleBar #38 [`c18d7a9`](https://github.com/ghost1372/DevWinUI/commit/c18d7a9a7178545b3f46650783d248645039c952)
- Improve WindowHelper [`6725636`](https://github.com/ghost1372/DevWinUI/commit/6725636fe2e6a8bb2a1585f2d1d37b7af4ce8a36)
- Add ShowDetailedExtension for Pickers [`6e21d87`](https://github.com/ghost1372/DevWinUI/commit/6e21d873fbf5220792ffceb57adefb0aa0b07964)
- Improve ResourceHelper [`7b6d49c`](https://github.com/ghost1372/DevWinUI/commit/7b6d49c2eac9d6bf56eb64ab27e86347720be35d)
- [VSIX-Templates] Fix Blank Templates endless nuget installation dialog [`d907f9c`](https://github.com/ghost1372/DevWinUI/commit/d907f9ce5664b628de948553acc494ad762ac731)
- Improve ModernSystemMenu [`eb3d615`](https://github.com/ghost1372/DevWinUI/commit/eb3d615e69764e1ee97840f0326afc4832ac5f9d)
- Update ThemeService.Get.cs [`e466bd3`](https://github.com/ghost1372/DevWinUI/commit/e466bd3f3e21feb9b86b755b92156a86aa1cc12e)
- Remove Unused Classes [`1560cb5`](https://github.com/ghost1372/DevWinUI/commit/1560cb57d1259d105490da66570603de0c7dfca8)
- Add ResizeAndCenterWindowToPercentageOfWorkArea #35 Tnx to @MPITech [`fb982b0`](https://github.com/ghost1372/DevWinUI/commit/fb982b0b9e76d3a1c0c155c2815bb21fe7af43ff)
- Update RelativeDate.cs [`6e4c370`](https://github.com/ghost1372/DevWinUI/commit/6e4c370cf23ef5f3ba22426bf6acc3ae6e898bce)
- Update README.md [`197082b`](https://github.com/ghost1372/DevWinUI/commit/197082b56b9ee404ea7c0eec9b592ba4f6f26952)
- Update Window.Properties.cs [`b91581a`](https://github.com/ghost1372/DevWinUI/commit/b91581a78f2ce1f267f39841194e606b71e3100d)
- add window overload for Pickers [`451b90b`](https://github.com/ghost1372/DevWinUI/commit/451b90b9b85a4508a9e2befb0f9d33dd73e13bec)
- Update CompareSlider.cs [`aa1c12a`](https://github.com/ghost1372/DevWinUI/commit/aa1c12a8b512735de27b2653b6b532e817f0ac12)
- [AOT] Fix BreadcrumbNavigator [`4e871f9`](https://github.com/ghost1372/DevWinUI/commit/4e871f91d58e3f5734cf9c8a792d43dd2e6f2819)
- Update README.md [`6d1084f`](https://github.com/ghost1372/DevWinUI/commit/6d1084ff3b3fa92e0fbf9d667c550b0aae6cb89a)
- Update README.md [`e4e6162`](https://github.com/ghost1372/DevWinUI/commit/e4e61621fd9cfddcb2190368cb87aa54368b7a4d)
- Update FolderPicker.cs [`ded9401`](https://github.com/ghost1372/DevWinUI/commit/ded9401861a9b41db1277178538e5bd41c89a1db)
- Rename Window to ModernWindow [`1f27b49`](https://github.com/ghost1372/DevWinUI/commit/1f27b49a0b4e14890c74d916a945db9b049eb81c)
- Update Window.Properties.cs [`1f24af9`](https://github.com/ghost1372/DevWinUI/commit/1f24af99ef5455645682f5ed105231dad7b439eb)
- Update ModalWindow.cs [`ea31169`](https://github.com/ghost1372/DevWinUI/commit/ea31169360f6d3344d2aa05d4964b6a09e427746)
- Disabling Registry/File Virtualization not getting applied in VSIX Template #37 [`68982f8`](https://github.com/ghost1372/DevWinUI/commit/68982f857df81b1934fa8f7f33aa881a12c84ab8)
- Improve Messaging [`fb39a4b`](https://github.com/ghost1372/DevWinUI/commit/fb39a4b95433cfe8a10cd8722e0135ece391138e)
- refactor Pickers [`258303d`](https://github.com/ghost1372/DevWinUI/commit/258303d690f48a6d5b74011d99c328c7880dc985)
- Update RainbowFrame.cs [`0f8e3e8`](https://github.com/ghost1372/DevWinUI/commit/0f8e3e833a97b5a312821b16128d26d074567835)
- Update README.md [`7a39eb9`](https://github.com/ghost1372/DevWinUI/commit/7a39eb9ebcaa2959ad39c793e93a66ea18fdc3ea)
- Update README.md [`5adf7ed`](https://github.com/ghost1372/DevWinUI/commit/5adf7edaac220d683d7762c38c846f706bb2644b)
- Update README.md [`23256cd`](https://github.com/ghost1372/DevWinUI/commit/23256cd0f61be938ddc67ad27811e6374235c0a4)
- Update Window.Properties.cs [`0f76e81`](https://github.com/ghost1372/DevWinUI/commit/0f76e8156c191409e0f7a8a28436adc7fc070d04)
- Update README.md [`eff9e4e`](https://github.com/ghost1372/DevWinUI/commit/eff9e4e87f874f8fdb8d7dbe60a51518e1351876)
- Update Directory.Build.props [`62d1ae2`](https://github.com/ghost1372/DevWinUI/commit/62d1ae27579c3f62491073cb30deb5cd59a25687)
- Update PickerHelper.cs [`482c5ef`](https://github.com/ghost1372/DevWinUI/commit/482c5efa414e0215fa1b6ff4121b8c76424c513b)
- Update MainWindow.xaml.cs [`d907a0b`](https://github.com/ghost1372/DevWinUI/commit/d907a0bf4ab5b7b90a21a6a9244e275053abd71d)
- Update README.md [`17f010c`](https://github.com/ghost1372/DevWinUI/commit/17f010c842e05cf5b0399882d72229fbc949504b)
- Update ModernSystemMenu.cs [`8a9c1c1`](https://github.com/ghost1372/DevWinUI/commit/8a9c1c1bfc5ee8a283867371e6bac8f57a833cb7)
- Update source.extension.vsixmanifest [`d87f6c1`](https://github.com/ghost1372/DevWinUI/commit/d87f6c195a2f28748934bc22e2d5e9a749568bcf)
- Update MainWindow.xaml.cs [`7cb48dd`](https://github.com/ghost1372/DevWinUI/commit/7cb48dd8fd85f9316739db04a6c5f9af117a07e7)
- Update ColorBrightnessExtension.cs [`a4ad4e8`](https://github.com/ghost1372/DevWinUI/commit/a4ad4e8258cd44034013b46b9101bb683da9b03c)
- Update SampleModalWindow.xaml.cs [`9fffec0`](https://github.com/ghost1372/DevWinUI/commit/9fffec0a6c9e58d383a595c0171b3347a157f0ca)
- refactor [`9b55fd9`](https://github.com/ghost1372/DevWinUI/commit/9b55fd970e6a7cb6152e3f7353efa3925f2f2496)
- refactor [`49ea0a1`](https://github.com/ghost1372/DevWinUI/commit/49ea0a189d0042c81af0d0e9192c078a312967b9)
- Move Classes [`d1f8733`](https://github.com/ghost1372/DevWinUI/commit/d1f8733733f8fdf14f150b4a6dc5b7f5fda9b9df)
- Move DisplayMonitorHelper to Helpers Folder [`135a4ac`](https://github.com/ghost1372/DevWinUI/commit/135a4acab9bad3b51c099a353f6cc2d684b30138)

> 19 March 2025

- [VSIX] Add ProfileOptimization Option and Hwnd Property [`328398c`](https://github.com/ghost1372/DevWinUI/commit/328398cb223ca7fea256bba8e7c6165b3478c4e4)
- Update WASDK to 1.7 and DevWinUI to 8.0.0 stable [`9ca64f7`](https://github.com/ghost1372/DevWinUI/commit/9ca64f7c5fa4ce0e29ebb5bebb15d15dfaa7f8ef)
- Add Pickers Gallery Sample [`ec0af0c`](https://github.com/ghost1372/DevWinUI/commit/ec0af0c172e7390c08917ae603df703b0c11db23)
- Improve Pickers Initialize [`9995570`](https://github.com/ghost1372/DevWinUI/commit/9995570529ff3c1b45b78f8e6886cca0171f88b7)
- Add PreferredMinimumWidth/Height and Update Version to Stable [`cdbc5a8`](https://github.com/ghost1372/DevWinUI/commit/cdbc5a8306c090a40d578f36a9c1ace8f38b51f0)
- Fix InvalidOperationException for ProcessInfoHelper [`0bce61c`](https://github.com/ghost1372/DevWinUI/commit/0bce61c53b49c22461e28337e85d5ebc2b2567c3)
- Update MainWindow.xaml [`00f26fa`](https://github.com/ghost1372/DevWinUI/commit/00f26fa3b105c8e767d53c70a558ae084d0701ae)
