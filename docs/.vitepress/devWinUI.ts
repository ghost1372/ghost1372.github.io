export const devWinUISidebar = [
{
  text: 'Documentations',
  collapsed: false,
  items: [
  { text: 'Release Notes', link: '/ReleaseNotes/' },
  {
    text: 'Quick Start', collapsed: true,
    items: [
      {text: 'Getting Started DevWinUI', link: '/QuickStart/DevWinUIQuickStart'},
      {text: 'Getting Started DevWinUI.Base', link: '/QuickStart/BaseQuickStart'},
      {text: 'Getting Started DevWinUI.SourceGenerator', link: '/QuickStart/GeneratorQuickStart'},
      {text: 'Getting Started DevWinUI.Shader', link: '/QuickStart/ShaderQuickStart'},

    ]
  },
  {
    text: 'DevWinUI', collapsed: true, items: [
    {
      text: 'Attach', collapsed: true, items: [
        { text: 'FlipViewAttach', link: '/DevWinUI/attach/flipViewAttach/index' },
        { text: 'MaterialAttach', link: '/DevWinUI/attach/materialAttach/index' },
        { text: 'MenuFlyoutAttach', link: '/DevWinUI/attach/menuFlyoutAttach/index' },
        { text: 'SquircleClipAttach', link: '/DevWinUI/attach/squircleClipAttach/index' },
        { text: 'StoreNavigationViewItemAttach', link: '/DevWinUI/attach/storeNavigationViewItemAttach/index' },
      ]
    },
    {
      text: 'Brushes', collapsed: true, items: [
        { text: 'BlurEffectBrush', link: '/DevWinUI/brushes/blurEffectBrush/index' },
        { text: 'Brushes', link: '/DevWinUI/brushes/themeBrushes/index' },
        { text: 'ImageEffectBrush', link: '/DevWinUI/brushes/imageEffectBrush/index' },
        { text: 'TiledImageBrush', link: '/DevWinUI/brushes/tiledImageBrush/index' },
      ]
    },
    {
      text: 'Common', collapsed: true, items: [
        { text: 'BlurEffectManager', link: '/DevWinUI/common/blurEffectManager/index' },
        { text: 'ImageLoader', link: '/DevWinUI/common/imageLoader/index' },
        { text: 'Lights', link: '/DevWinUI/common/lights/index' },
        { text: 'PausableDispatcherTimer', link: '/DevWinUI/common/pausableDispatcherTimer/index' },
      ]
    },
    {
      text: 'CompositionProToolkit', link: '/DevWinUI/compositionProToolkit/index'
    },
    {
      text: 'Controls', collapsed: true, items: [
        { text: 'Accordion', link: '/DevWinUI/controls/accordion/index' },
        { text: 'AnimatedGradient', link: '/DevWinUI/controls/animatedGradient/index' },
        { text: 'AnimatedImage', link: '/DevWinUI/controls/animatedImage/index' },
        { text: 'AnimatedTextBlock', link: '/DevWinUI/controls/animatedTextBlock/index' },
        { text: 'AnimationPath', link: '/DevWinUI/controls/animationPath/index' },
        { text: 'ArcProgress', link: '/DevWinUI/controls/arcProgress/index' },
        { text: 'AudioWave', link: '/DevWinUI/controls/audioWave/index' },
        { text: 'AutoScrollView', link: '/DevWinUI/controls/autoScrollView/index' },
        { text: 'BannerView', link: '/DevWinUI/controls/bannerView/index' },
        { text: 'BetterLyric', link: '/DevWinUI/controls/betterLyric/index' },
        { text: 'BlendedImage', link: '/DevWinUI/controls/blendedImage/index' },
        { text: 'BlurEffectControl', link: '/DevWinUI/controls/blurEffectControl/index' },
        { text: 'BreadcrumbBar', link: '/DevWinUI/controls/breadcrumbBar/index' },
        { text: 'BreadcrumbNavigator', link: '/DevWinUI/controls/breadcrumbNavigator/index' },
        { text: 'BruteForce', link: '/DevWinUI/controls/bruteForce/index' },
        { text: 'Bubble', link: '/DevWinUI/controls/bubble/index' },
        { text: 'CalendarWithClock', link: '/DevWinUI/controls/calendarWithClock/index' },
        { text: 'Card', link: '/DevWinUI/controls/card/index' },
        { text: 'CarouselView', link: '/DevWinUI/controls/carouselView/index' },
        { text: 'CarouselView2', link: '/DevWinUI/controls/carouselView2/index' },
        { text: 'CheckBoxWithDescriptionControl', link: '/DevWinUI/controls/checkBoxWithDescriptionControl/index' },
        { text: 'CheckUpdateControl', link: '/DevWinUI/controls/checkUpdateControl/index' },
        { text: 'CircleIcon', link: '/DevWinUI/controls/circleIcon/index' },
        { text: 'CirclePanel', link: '/DevWinUI/controls/circlePanel/index' },
        { text: 'Clock', link: '/DevWinUI/controls/clock/index' },
        { text: 'ClockPicker', link: '/DevWinUI/controls/clockPicker/index' },
        { text: 'ColorBloomControl', link: '/DevWinUI/controls/colorBloomControl/index' },
        { text: 'ColorfulShimmingEffect', link: '/DevWinUI/controls/colorfulShimmingEffect/index' },
        { text: 'ColorPalette', link: '/DevWinUI/controls/colorPalette/index' },
        { text: 'ColorShadow', link: '/DevWinUI/controls/colorShadow/index' },
        { text: 'ColorSlideControl', link: '/DevWinUI/controls/colorSlideControl/index' },
        { text: 'CompareSlider', link: '/DevWinUI/controls/compareSlider/index' },
        { text: 'CompositionImage', link: '/DevWinUI/controls/compositionImage/index' },
        { text: 'CompositionShadow', link: '/DevWinUI/controls/compositionShadow/index' },
        { text: 'ConfettiCannon', link: '/DevWinUI/controls/confettiCannon/index' },
        { text: 'ContentSlider', link: '/DevWinUI/controls/contentSlider/index' },
        { text: 'CopyButton', link: '/DevWinUI/controls/copyButton/index' },
        { text: 'Countdown', link: '/DevWinUI/controls/countdown/index' },
        { text: 'CoverFlow', link: '/DevWinUI/controls/coverFlow/index' },
        { text: 'DateTimePicker', link: '/DevWinUI/controls/dateTimePicker/index' },
        { text: 'DepthLayerView', link: '/DevWinUI/controls/depthLayerView/index' },
        { text: 'DigitalSegment', link: '/DevWinUI/controls/digitalSegment/index' },
        { text: 'Divider', link: '/DevWinUI/controls/divider/index' },
        { text: 'DropdownColorPicker', link: '/DevWinUI/controls/dropdownColorPicker/index' },
        { text: 'EasyCarouselPanel', link: '/DevWinUI/controls/easyCarouselPanel/index' },
        { text: 'EdgeLighting', link: '/DevWinUI/controls/edgeLighting/index' },
        { text: 'ElementGroup', link: '/DevWinUI/controls/elementGroup/index' },
        { text: 'FlexPanel', link: '/DevWinUI/controls/flexPanel/index' },
        { text: 'FlipBlock', link: '/DevWinUI/controls/flipBlock/index' },
        { text: 'FlipCards', link: '/DevWinUI/controls/flipCards/index' },
        { text: 'FlipSide', link: '/DevWinUI/controls/flipSide/index' },
        { text: 'FlipToReveal', link: '/DevWinUI/controls/flipToReveal/index' },
        { text: 'FluidBanner', link: '/DevWinUI/controls/fluidBanner/index' },
        { text: 'FlyoutMenuButton', link: '/DevWinUI/controls/flyoutMenuButton/index' },
        { text: 'ForegroundFocusEffects', link: '/DevWinUI/controls/foregroundFocusEffects/index' },
        { text: 'FrostedGlass', link: '/DevWinUI/controls/frostedGlass/index' },
        { text: 'GifImage', link: '/DevWinUI/controls/gifImage/index' },
        { text: 'Gooey', link: '/DevWinUI/controls/gooey/index' },
        { text: 'GoToCard', link: '/DevWinUI/controls/goToCard/index' },
        { text: 'GoToTop', link: '/DevWinUI/controls/goToTop/index' },
        { text: 'Gravatar', link: '/DevWinUI/controls/gravatar/index' },
        { text: 'Growl Information notification', link: '/DevWinUI/controls/growl/index' },
        { text: 'Halo', link: '/DevWinUI/controls/halo/index' },
        { text: 'Hatch', link: '/DevWinUI/controls/hatch/index' },
        { text: 'HeaderCarousel', link: '/DevWinUI/controls/headerCarousel/index' },
        { text: 'HeaderTile', link: '/DevWinUI/controls/headerTile/index' },
        { text: 'HomePageHeader', link: '/DevWinUI/controls/homePageHeader/index' },
        { text: 'HoneycombPanel', link: '/DevWinUI/controls/honeycombPanel/index' },
        { text: 'HorizontalScrollContainer', link: '/DevWinUI/controls/horizontalScrollContainer/index' },
        { text: 'ImageFrame', link: '/DevWinUI/controls/imageFrame/index' },
        { text: 'IndeterminateProgressBar', link: '/DevWinUI/controls/indeterminateProgressBar/index' },
        { text: 'InfoCard', link: '/DevWinUI/controls/infoCard/index' },
        { text: 'InlineAutoCompleteTextBox', link: '/DevWinUI/controls/inlineAutoCompleteTextBox/index' },
        { text: 'IsEnabledTextBox', link: '/DevWinUI/controls/isEnabledTextBox/index' },
        { text: 'KeyCharPresenter', link: '/DevWinUI/controls/keyCharPresenter/index' },
        { text: 'KeyVisual', link: '/DevWinUI/controls/keyVisual/index' },
        { text: 'KeyVisual2', link: '/DevWinUI/controls/keyVisual2/index' },
        { text: 'LayeredFontIcons', link: '/DevWinUI/controls/layeredFontIcons/index' },
        { text: 'LayoutTransformer', link: '/DevWinUI/controls/layoutTransformer/index' },
        { text: 'LinearGradientBlurPanel', link: '/DevWinUI/controls/linearGradientBlurPanel/index' },
        { text: 'LiveGraph', link: '/DevWinUI/controls/liveGraph/index' },
        { text: 'LoadingIndicator', link: '/DevWinUI/controls/loadingIndicator/index' },
        { text: 'LongShadowTextBlock', link: '/DevWinUI/controls/longShadowTextBlock/index' },
        { text: 'LoopingList', link: '/DevWinUI/controls/loopingList/index' },
        { text: 'LoopingSelector', link: '/DevWinUI/controls/loopingSelector/index' },
        { text: 'LoopPanel', link: '/DevWinUI/controls/loopPanel/index' },
        { text: 'Magnifier', link: '/DevWinUI/controls/magnifier/index' },
        { text: 'MessageBox', link: '/DevWinUI/controls/messageBox/index' },
        { text: 'ModalWindow', link: '/DevWinUI/controls/modalWindow/index' },
        { text: 'MorphingAnimation', link: '/DevWinUI/controls/morphingAnimation/index' },
        { text: 'OffsetBox', link: '/DevWinUI/controls/offsetBox/index' },
        { text: 'OpacityMaskView', link: '/DevWinUI/controls/opacityMaskView/index' },
        { text: 'OptionsPageControl', link: '/DevWinUI/controls/optionsPageControl/index' },
        { text: 'OrbitLoadingIndicator', link: '/DevWinUI/controls/orbitLoadingIndicator/index' },
        { text: 'OutlineTextControl', link: '/DevWinUI/controls/outlineTextControl/index' },
        { text: 'OutOfBoxPage', link: '/DevWinUI/controls/outOfBoxPage/index' },
        { text: 'OverviewPageHeader', link: '/DevWinUI/controls/overviewPageHeader/index' },
        { text: 'PagerControl', link: '/DevWinUI/controls/pagerControl/index' },
        { text: 'ParallaxTilt', link: '/DevWinUI/controls/parallaxTilt/index' },
        { text: 'Particle', link: '/DevWinUI/controls/particle/index' },
        { text: 'PerspectiveHost', link: '/DevWinUI/controls/perspectiveHost/index' },
        { text: 'PerspectiveZoom', link: '/DevWinUI/controls/perspectiveZoom/index' },
        { text: 'PinBox', link: '/DevWinUI/controls/pinBox/index' },
        { text: 'ProfileControl', link: '/DevWinUI/controls/profileControl/index' },
        { text: 'ProgressButton', link: '/DevWinUI/controls/progressButton/index' },
        { text: 'ProgressRing', link: '/DevWinUI/controls/progressRing/index' },
        { text: 'RealClock', link: '/DevWinUI/controls/realClock/index' },
        { text: 'RichButton', link: '/DevWinUI/controls/richButton/index' },
        { text: 'SamplePanel', link: '/DevWinUI/controls/samplePanel/index' },
        { text: 'SegmentChar', link: '/DevWinUI/controls/segmentChar/index' },
        { text: 'SegmentedSlider', link: '/DevWinUI/controls/segmentedSlider/index' },
        { text: 'SelectorBarSegmented', link: '/DevWinUI/controls/selectorBarSegmented/index' },
        { text: 'SettingsCard', link: '/DevWinUI/controls/settingsCard/index' },
        { text: 'SettingsGroup', link: '/DevWinUI/controls/settingsGroup/index' },
        { text: 'Shield', link: '/DevWinUI/controls/shield/index' },
        { text: 'Shimmer', link: '/DevWinUI/controls/shimmer/index' },
        { text: 'ShimmerTextBlock', link: '/DevWinUI/controls/shimmerTextBlock/index' },
        { text: 'Shortcut', link: '/DevWinUI/controls/shortcut/index' },
        { text: 'ShortcutPreview', link: '/DevWinUI/controls/shortcutPreview/index' },
        { text: 'ShortcutWithTextLabel', link: '/DevWinUI/controls/shortcutWithTextLabel/index' },
        { text: 'ShortcutWithTextLabel2', link: '/DevWinUI/controls/shortcutWithTextLabel2/index' },
        { text: 'ShyHeader', link: '/DevWinUI/controls/shyHeader/index' },
        { text: 'SidebarView', link: '/DevWinUI/controls/sidebarView/index' },
        { text: 'SimpleSettingsGroup', link: '/DevWinUI/controls/simpleSettingsGroup/index' },
        { text: 'SnowFlakeEffect', link: '/DevWinUI/controls/snowFlakeEffect/index' },
        { text: 'SpectrumAnalyzer', link: '/DevWinUI/controls/spectrumAnalyzer/index' },
        { text: 'SpectrumVisualizer', link: '/DevWinUI/controls/spectrumVisualizer/index' },
        { text: 'SpeedGraph', link: '/DevWinUI/controls/speedGraph/index' },
        { text: 'SpeedGraph2', link: '/DevWinUI/controls/speedGraph2/index' },
        { text: 'SplitCircle', link: '/DevWinUI/controls/splitCircle/index' },
        { text: 'Spoiler', link: '/DevWinUI/controls/spoiler/index' },
        { text: 'Stars', link: '/DevWinUI/controls/stars/index' },
        { text: 'StepBar', link: '/DevWinUI/controls/stepBar/index' },
        { text: 'StorageBar', link: '/DevWinUI/controls/storageBar/index' },
        { text: 'StorageRing', link: '/DevWinUI/controls/storageRing/index' },
        { text: 'StoreCarousel', link: '/DevWinUI/controls/storeCarousel/index' },
        { text: 'SwitchPresenter', link: '/DevWinUI/controls/switchPresenter/index' },
        { text: 'TextBlockStrokeView', link: '/DevWinUI/controls/textBlockStrokeView/index' },
        { text: 'TextBox', link: '/DevWinUI/controls/textBox/index' },
        { text: 'TextGlitchEffect', link: '/DevWinUI/controls/textGlitchEffect/index' },
        { text: 'TextMorphEffect', link: '/DevWinUI/controls/textMorphEffect/index' },
        { text: 'ThemedIcon', link: '/DevWinUI/controls/themedIcon/index' },
        { text: 'TileControl', link: '/DevWinUI/controls/tileControl/index' },
        { text: 'Timeline', link: '/DevWinUI/controls/timeline/index' },
        { text: 'Toolbar', link: '/DevWinUI/controls/toolbar/index' },
        { text: 'TransitioningContentControl', link: '/DevWinUI/controls/transitioningContentControl/index' },
        { text: 'UacStyleDialogWindow', link: '/DevWinUI/controls/uacStyleDialogWindow/index' },
        { text: 'UniformGrid', link: '/DevWinUI/controls/uniformGrid/index' },
        { text: 'WanderingParticles', link: '/DevWinUI/controls/wanderingParticles/index' },
        { text: 'Watermark', link: '/DevWinUI/controls/watermark/index' },
        { text: 'WaveCircle', link: '/DevWinUI/controls/waveCircle/index' },
        { text: 'WaveformTimeline', link: '/DevWinUI/controls/waveformTimeline/index' },
        { text: 'WaveProgressBar', link: '/DevWinUI/controls/waveProgressBar/index' },
        { text: 'WindowedContentDialog', link: '/DevWinUI/controls/windowedContentDialog/index' },
        { text: 'Windows 11 Settings Examples', link: '/DevWinUI/controls/windows11SettingsExamples/index' },
      ]
    },
    {
      text: 'Converters', link: '/DevWinUI/converters/index'
    },
    {
      text: 'Extensions', link: '/DevWinUI/extensions/index'
    },
    {
      text: 'LandingPages', collapsed: true, items: [
        { text: 'AllLandingPage', link: '/DevWinUI/landingPages/allLandingPage/index' },
        { text: 'ItemsPageBase', link: '/DevWinUI/landingPages/itemsPageBase/index' },
        { text: 'MainLandingPage', link: '/DevWinUI/landingPages/mainLandingPage/index' },
        { text: 'SectionPage', link: '/DevWinUI/landingPages/sectionPage/index' },
      ]
    },
    {
      text: 'ThemedIconExtension', link: '/DevWinUI/markupExtensions/themedIconExtension/index'
    },
    {
      text: 'Styles', link: '/DevWinUI/styles/index'
    },
    {
      text: 'Validation', link: '/DevWinUI/validation/index'
    },
    ]            
  },
  {
    text: 'DevWinUI.Base', collapsed: true, 
    items: [
    {
      text: 'Attach', collapsed: true, items: [
        { text: 'BrushAttach', link: '/DevWinUIBase/attach/brushAttach/index' },
        { text: 'PanelAttach', link: '/DevWinUIBase/attach/panelAttach/index' },
        { text: 'TitleBarAttach', link: '/DevWinUIBase/attach/titleBarAttach/index' },
      ]
    },
    {
      text: 'Backdrop', link: '/DevWinUIBase/backdrop/index'
    },
    {
      text: 'Common', collapsed: true, items: [
        { text: 'Barcode', link: '/DevWinUIBase/common/barcode/index' },
        { text: 'ColorAnalyzer', link: '/DevWinUIBase/common/colorAnalyzer/index' },
        { text: 'CompositionAnimationController', link: '/DevWinUIBase/common/compositionAnimationController/index' },
        { text: 'ContrastAnalyzer', link: '/DevWinUIBase/common/contrastAnalyzer/index' },
        { text: 'ControlTokenManager', link: '/DevWinUIBase/common/controlTokenManager/index' },
        { text: 'CycleCollection', link: '/DevWinUIBase/common/cycleCollections/index' },
        { text: 'EyeDropper', link: '/DevWinUIBase/common/eyeDropper/index' },
        { text: 'LegacyMessageBox', link: '/DevWinUIBase/common/legacyMessageBox/index' },
        { text: 'ModernSystemMenu', link: '/DevWinUIBase/common/modernSystemMenu/index' },
        { text: 'NTPClient', link: '/DevWinUIBase/common/ntpClient/index' },
        { text: 'NTPServer', link: '/DevWinUIBase/common/ntpServer/index' },
        { text: 'PasswordGenerator', link: '/DevWinUIBase/common/passwordGenerator/index' },
        { text: 'PersianDateTime', link: '/DevWinUIBase/common/persianDateTime/index' },
        { text: 'QRCode', link: '/DevWinUIBase/common/qRCode/index' },
        { text: 'RainbowFrame', link: '/DevWinUIBase/common/rainbowFrame/index' },
        { text: 'RelativeDate', link: '/DevWinUIBase/common/relativeDate/index' },
        { text: 'RestartManager', link: '/DevWinUIBase/common/restartManager/index' },
        { text: 'SemanticVersion', link: '/DevWinUIBase/common/semanticVersion/index' },
        { text: 'SingleInstanceApp', link: '/DevWinUIBase/common/singleInstanceApp/index' },
        { text: 'SnapLayoutManager', link: '/DevWinUIBase/common/snapLayoutManager/index' },
        { text: 'SystemTrayIcon', link: '/DevWinUIBase/common/systemTrayIcon/index' },
        { text: 'Window Message Monitor', link: '/DevWinUIBase/common/messaging/index' },
        { text: 'WindowManager', link: '/DevWinUIBase/common/windowManager/index' },
      ]
    },
    {
      text: 'DelegateCommand', link: '/DevWinUIBase/delegateCommand/index'
    },
    {
      text: 'Extensions', collapsed: true, items: [
        { text: 'AnimationExtensions', link: '/DevWinUIBase/extensions/animationExtensions/index' },
        { text: 'CollectionExtensions', link: '/DevWinUIBase/extensions/collectionExtension/index' },
        { text: 'ColorExtensions', link: '/DevWinUIBase/extensions/colorExtension/index' },
        { text: 'CompositionExtensions', link: '/DevWinUIBase/extensions/compositionExtensions/index' },
        { text: 'ContentDialog Extensions', link: '/DevWinUIBase/extensions/contentDialogExtensions/index' },
        { text: 'DateTimeExtensions', link: '/DevWinUIBase/extensions/dateTimeExtension/index' },
        { text: 'DependencyObjectExtensions', link: '/DevWinUIBase/extensions/dependencyObjectExtensions/index' },
        { text: 'DictionaryExtensions', link: '/DevWinUIBase/extensions/dictionaryExtensions/index' },
        { text: 'DoubleExtensions', link: '/DevWinUIBase/extensions/doubleExtension/index' },
        { text: 'FloatExtensions', link: '/DevWinUIBase/extensions/floatExtension/index' },
        { text: 'FrameworkElementExtensions', link: '/DevWinUIBase/extensions/frameworkElementExtensions/index' },
        { text: 'ListExtensions', link: '/DevWinUIBase/extensions/listExtensions/index' },
        { text: 'ObservableCollectionExtensions', link: '/DevWinUIBase/extensions/observableCollectionExtension/index' },
        { text: 'PersianDateTimeExtension', link: '/DevWinUIBase/extensions/persianDateTimeExtension/index' },
        { text: 'ResourceDictionaryExtension', link: '/DevWinUIBase/extensions/resourceDictionaryExtension/index' },
        { text: 'ScrollViewerExtensions', link: '/DevWinUIBase/extensions/scrollViewerExtension/index' },
        { text: 'StringExtension', link: '/DevWinUIBase/extensions/stringExtension/index' },
        { text: 'TextBox Extensions', link: '/DevWinUIBase/extensions/textBoxExtension/index' },
        { text: 'UIElementExtensions', link: '/DevWinUIBase/extensions/uIElementExtension/index' },
        { text: 'VectorExtensions', link: '/DevWinUIBase/extensions/vectorExtension/index' },
        { text: 'VisualExtensions', link: '/DevWinUIBase/extensions/visualExtension/index' },
      ]
    },
    {
      text: 'Helpers', collapsed: true, items: [
        { text: 'AnimationEasingHelper', link: '/DevWinUIBase/helpers/animationEasingHelper/index' },
        { text: 'AppLanguageHelper', link: '/DevWinUIBase/helpers/appLanguageHelper/index' },
        { text: 'AutoSuggestBoxHelper', link: '/DevWinUIBase/helpers/autoSuggestBoxHelper/index' },
        { text: 'ColorHelper', link: '/DevWinUIBase/helpers/colorHelper/index' },
        { text: 'CompositionHelper', link: '/DevWinUIBase/helpers/compositionHelper/index' },
        { text: 'CredentialHelper', link: '/DevWinUIBase/helpers/credentialHelper/index' },
        { text: 'DisplayMonitorHelper', link: '/DevWinUIBase/helpers/displayMonitorHelper/index' },
        { text: 'DragMoveHelper', link: '/DevWinUIBase/helpers/dragMoveHelper/index' },
        { text: 'FileExtensionHelpers', link: '/DevWinUIBase/helpers/fileExtensionHelpers/index' },
        { text: 'FileHelper', link: '/DevWinUIBase/helpers/fileHelper/index' },
        { text: 'GeneralHelper', link: '/DevWinUIBase/helpers/generalHelper/index' },
        { text: 'INIHelper', link: '/DevWinUIBase/helpers/iniHelper/index' },
        { text: 'LocationHelper', link: '/DevWinUIBase/helpers/locationHelper/index' },
        { text: 'NetworkHelper', link: '/DevWinUIBase/helpers/networkHelper/index' },
        { text: 'OSVersionHelper', link: '/DevWinUIBase/helpers/osVersionHelper/index' },
        { text: 'PackageHelper', link: '/DevWinUIBase/helpers/packageHelper/index' },
        { text: 'PathHelper', link: '/DevWinUIBase/helpers/pathHelper/index' },
        { text: 'PopupHelper', link: '/DevWinUIBase/helpers/popupHelper/index' },
        { text: 'PreviewKeyDownHelper', link: '/DevWinUIBase/helpers/previewKeyDownHelper/index' },
        { text: 'ProcessInfoHelper', link: '/DevWinUIBase/helpers/processInfoHelper/index' },
        { text: 'ResourceHelper', link: '/DevWinUIBase/helpers/resourceHelper/index' },
        { text: 'RichTextFormatterHelper', link: '/DevWinUIBase/helpers/richTextFormatterHelper/index' },
        { text: 'RuntimeHelper', link: '/DevWinUIBase/helpers/runtimeHelper/index' },
        { text: 'SecurityHelper', link: '/DevWinUIBase/helpers/securityHelper/index' },
        { text: 'StartupHelper', link: '/DevWinUIBase/helpers/startupHelper/index' },
        { text: 'SunTimesHelper', link: '/DevWinUIBase/helpers/sunTimesHelper/index' },
        { text: 'TaskbarHelper', link: '/DevWinUIBase/helpers/taskbarHelper/index' },
        { text: 'TextBlockHelper', link: '/DevWinUIBase/helpers/textBlockHelper/index' },
        { text: 'UpdateHelper', link: '/DevWinUIBase/helpers/updateHelper/index' },
        { text: 'VisualHelper', link: '/DevWinUIBase/helpers/visualHelper/index' },
        { text: 'WindowHelper', link: '/DevWinUIBase/helpers/windowHelper/index' },
      ]
    },
    {
      text: 'Hooks', collapsed: true, items: [
        { text: 'GlobalKeyboardHook', link: '/DevWinUIBase/hooks/globalKeyboardHook/index' },
        { text: 'GlobalMouseHook', link: '/DevWinUIBase/hooks/globalMouseHook/index' },
      ]
    },
    {
      text: 'Interfaces', collapsed: true, items: [
        { text: 'ITitleBarAutoSuggestBoxAware', link: '/DevWinUIBase/interfaces/iTitleBarAutoSuggestBoxAware/index' },
      ]
    },
    {
      text: 'Navigation Service', collapsed: true, items: [
        { text: 'JsonFile', link: '/DevWinUIBase/jsonNavigationService/jsonFile/index' },
        { text: 'JsonNavigationService', link: '/DevWinUIBase/jsonNavigationService/index' },
        { text: 'NavigationServiceEx', link: '/DevWinUIBase/navigationService/index' },
      ]
    },
    {
      text: 'MarkupExtensions', collapsed: true, items: [
        { text: 'AncestorBindingExtension', link: '/DevWinUIBase/markupExtensions/ancestorBindingExtension/index' },
        { text: 'ColorBrightnessExtension', link: '/DevWinUIBase/markupExtensions/colorBrightnessExtension/index' },
        { text: 'EnumValuesExtension', link: '/DevWinUIBase/markupExtensions/enumValueExtension/index' },
        { text: 'Icon Markup Extensions', link: '/DevWinUIBase/markupExtensions/iconMarkupExtension/index' },
        { text: 'NavigationParameterExtension', link: '/DevWinUIBase/markupExtensions/navigationParameterExtension/index' },
        { text: 'ResourceStringExtension', link: '/DevWinUIBase/markupExtensions/resourceStringExtension/index' },
      ]
    },
    {
      text: 'ThemeService', link: '/DevWinUIBase/themeService/index'
    },
  ]
  },    
  {
    text: 'DevWinUI.Shader',
    collapsed: true,
    items: [
      {
        text: 'Controls', collapsed: true, items: [
          { text: 'ShaderBackground', link: '/DevWinUIShader/controls/shaderBackground/index' },
        ]
      },
      {
        text: 'Renderers', collapsed: true, items: [
          { text: 'AbstractMovementBackgroundRenderer', link: '/DevWinUIShader/renderers/abstractMovementBackgroundRenderer/index' },
          { text: 'ColourfulBubblesRenderer', link: '/DevWinUIShader/renderers/colourfulBubblesRenderer/index' },
          { text: 'CosmicRenderer', link: '/DevWinUIShader/renderers/cosmicRenderer/index' },
          { text: 'CoverBackgroundRenderer', link: '/DevWinUIShader/renderers/coverBackgroundRenderer/index' },
          { text: 'FireRenderer', link: '/DevWinUIShader/renderers/fireRenderer/index' },
          { text: 'FluidBackgroundRenderer', link: '/DevWinUIShader/renderers/fluidBackgroundRenderer/index' },
          { text: 'FogRenderer', link: '/DevWinUIShader/renderers/fogRenderer/index' },
          { text: 'GradientFlowRenderer', link: '/DevWinUIShader/renderers/gradientFlowRenderer/index' },
          { text: 'IceAndFireRenderer', link: '/DevWinUIShader/renderers/iceAndFireRenderer/index' },
          { text: 'MatrixRainRenderer', link: '/DevWinUIShader/renderers/matrixRainRenderer/index' },
          { text: 'PS3XMBBackgroundRenderer', link: '/DevWinUIShader/renderers/pS3XMBBackgroundRenderer/index' },
          { text: 'PureColorBackgroundRenderer', link: '/DevWinUIShader/renderers/pureColorBackgroundRenderer/index' },
          { text: 'RaindropRenderer', link: '/DevWinUIShader/renderers/raindropRenderer/index' },
          { text: 'ResidualBackgroundRadiationRenderer', link: '/DevWinUIShader/renderers/residualBackgroundRadiationRenderer/index' },
          { text: 'SeventiesMeltRenderer', link: '/DevWinUIShader/renderers/seventiesMeltRenderer/index' },
          { text: 'SnowRenderer', link: '/DevWinUIShader/renderers/snowRenderer/index' },
          { text: 'SparkRenderer', link: '/DevWinUIShader/renderers/sparkRenderer/index' },
          { text: 'SpectrumRenderer', link: '/DevWinUIShader/renderers/spectrumRenderer/index' },
          { text: 'StarNestRenderer', link: '/DevWinUIShader/renderers/starNestRenderer/index' },
          { text: 'StarNoiseRenderer', link: '/DevWinUIShader/renderers/starNoiseRenderer/index' },
          { text: 'TriangleGradientBackgroundRenderer', link: '/DevWinUIShader/renderers/triangleGradientBackgroundRenderer/index' },
          { text: 'WallpaperRenderer', link: '/DevWinUIShader/renderers/wallpaperRenderer/index' },
          { text: 'WavyBackgroundRenderer', link: '/DevWinUIShader/renderers/wavyBackgroundRenderer/index' },
        ]
      },
      {
        text: 'Shaders', collapsed: true, items: [
          { text: 'AbstractMovementBackgroundShader', link: '/DevWinUIShader/shaders/abstractMovementBackgroundShader/index' },
          { text: 'ColourfulBubblesShader', link: '/DevWinUIShader/shaders/colourfulBubblesShader/index' },
          { text: 'CosmicShader', link: '/DevWinUIShader/shaders/cosmicShader/index' },
          { text: 'FireShader', link: '/DevWinUIShader/shaders/fireShader/index' },
          { text: 'FluidBackgroundShader', link: '/DevWinUIShader/shaders/fluidBackgroundShader/index' },
          { text: 'FogShader', link: '/DevWinUIShader/shaders/fogShader/index' },
          { text: 'GradientFlowShader', link: '/DevWinUIShader/shaders/gradientFlowShader/index' },
          { text: 'IceAndFireShader', link: '/DevWinUIShader/shaders/iceAndFireShader/index' },
          { text: 'MatrixRainShader', link: '/DevWinUIShader/shaders/matrixRainShader/index' },
          { text: 'PS3XMBBackgroundShader', link: '/DevWinUIShader/shaders/pS3XMBBackgroundShader/index' },
          { text: 'RaindropShader', link: '/DevWinUIShader/shaders/raindropShader/index' },
          { text: 'ResidualBackgroundRadiationShader', link: '/DevWinUIShader/shaders/residualBackgroundRadiationShader/index' },
          { text: 'SeventiesMeltShader', link: '/DevWinUIShader/shaders/seventiesMeltShader/index' },
          { text: 'SnowShader', link: '/DevWinUIShader/shaders/snowShader/index' },
          { text: 'SparkShader', link: '/DevWinUIShader/shaders/sparkShader/index' },
          { text: 'StarNestShader', link: '/DevWinUIShader/shaders/starNestShader/index' },
          { text: 'StarNoiseShader', link: '/DevWinUIShader/shaders/starNoiseShader/index' },
          { text: 'TriangleGradientBackgroundShader', link: '/DevWinUIShader/shaders/triangleGradientBackgroundShader/index' },
          { text: 'WallpaperShader', link: '/DevWinUIShader/shaders/wallpaperShader/index' },
          { text: 'WavyBackgroundShader', link: '/DevWinUIShader/shaders/wavyBackgroundShader/index' },
        ]
      },
    ]
  },
  {
    text: 'DevWinUI.SourceGenerator',
    collapsed: true,
    items: [
      {
        text: 'BreadcrumbPageMappingsGenerator', link: '/DevWinUISourceGenerator/breadcrumbPageMappingsGenerator/index'
      },
      {
        text: 'NavigationPageMappingsGenerator', link: '/DevWinUISourceGenerator/navigationPageMappingsGenerator/index'
      },
      {
        text: 'StringsPropertyGenerator', link: '/DevWinUISourceGenerator/stringsPropertyGenerator/index'
      },
    ]
  },
  {
    text: 'DevWinUI.ContextMenu', collapsed: true, link: '/DevWinUIContextMenu/index'            
  },
  ]
},
]