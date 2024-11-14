---
title: HatchBrushGenerator
---

# Styles
| Style | | | |
| --------------- | ----- | ---- | --- |
| Horizontal | Vertical | ForwardDiagonal | BackwardDiagonal |
| Cross | DiagonalCross | Percent05 | Percent10 |
| Percent20 | Percent25 | Percent30 | Percent40 |
| Percent50 | Percent60 | Percent70 | Percent75 |
| Percent80 | Percent90 | LightDownwardDiagonal | LightUpwardDiagonal | 
| DarkDownwardDiagonal | DarkUpwardDiagonal | WideDownwardDiagonal | WideUpwardDiagonal| 
| LightVertical | LightHorizontal | NarrowVertical | NarrowHorizontal |
| DarkVertical | DarkHorizontal | DashedDownwardDiagonal | DashedUpwardDiagonal |
| DashedHorizontal | DashedVertical | SmallConfetti | LargeConfetti |
| ZigZag | Wave | DiagonalBrick | HorizontalBrick |
| Weave | Plaid | Divot | DottedGrid |
| DottedDiamond | Shingle | Trellis | Sphere |
| SmallGrid | SmallCheckerBoard | LargeCheckerBoard | OutlinedDiamond |
| SolidDiamond |

# Methods
| Method |
| - |
| GetHashCode |
| GetHatchBrush |

# Case

first create ObjectProvider in App.xaml
`xmlns:sys="clr-namespace:System;assembly=mscorlib"`

```xml
 <ObjectDataProvider x:Key="HatchStyles" MethodName="GetValues" ObjectType="sys:Enum">
	                <ObjectDataProvider.MethodParameters>
	                    <x:Type Type="hc:HatchStyle"/>
	                </ObjectDataProvider.MethodParameters>
</ObjectDataProvider>
```

then create a HatchBrushConverter converter

```cs
public class HatchBrushConverter : IValueConverter
	    {
	        private readonly HatchBrushGenerator _brushGenerator;
	
	        public HatchBrushConverter()
	        {
	            _brushGenerator = new HatchBrushGenerator();
	        }
	
	        public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
	        {
	            if (value is HatchStyle style)
	            {
	                return _brushGenerator.GetHatchBrush(style, ResourceHelper.GetResource<Color>("DarkPrimaryColor"), ResourceHelper.GetResource<Color>("BackgroundColor"));
	            }
	            return Brushes.Transparent;
	        }
	
	        public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
	        {
	            throw new NotImplementedException();
	        }
	    }
```

now you can use hatch

```xml
 <Border Style="{StaticResource BorderRegion}" Margin="32" Background="{Binding SelectedValue,ElementName=ComboBoxDemo,Converter={StaticResource HatchBrushConverter}}">
	            <ComboBox SelectedIndex="0" VerticalAlignment="Center" Name="ComboBoxDemo" Width="180" ItemsSource="{Binding Source={StaticResource HatchStyles}}"/>
	        </Border>
```