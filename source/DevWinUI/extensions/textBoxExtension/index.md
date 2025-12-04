---
title: TextBox Extensions
---

The Regex attached property allows text validation using a regular expression or using built in validation types.

The validation has 3 modes (TextBoxExtensions.ValidationMode):

Normal (Default): this mode will set the IsValid attached property to false or true whether the TextBox text is a valid or not against the Regex property.
Forced: this mode sets the IsValid property and removes the TextBox text if not valid when the TextBox loses focus.
Dynamic: this mode extends Normal and if is the newest input of the TextBox is invalid, the character which is invalid will be deleted. Note that the TextBoxExtensions.ValidationType values Email and PhoneNumber don't support this validation mode. If you set the validation mode to Dynamic, Normal is selected automatically instead.


```xml
<TextBox Name="PhoneNumberValidator"
        dev:TextBoxExtensions.Regex="^\s*\+?\s*([0-9][\s-]*){9,}$"
        Header="Text box with Regex extension for phone number, validation occurs on TextChanged"/>
<TextBlock Foreground="{ThemeResource TextFillColorSecondaryBrush}">
            <Run Text="Is valid: " />
            <Run FontWeight="SemiBold"
                    Text="{Binding (dev:TextBoxExtensions.IsValid), ElementName=PhoneNumberValidator}" />
</TextBlock>
```

```xml
<TextBox Name="CharactValidator"
            dev:TextBoxExtensions.ValidationMode="Dynamic"
            dev:TextBoxExtensions.ValidationType="Characters"
            Header="Text box with ValidationType=Characters, validation occurs at input with ValidationMode=Dynamic and clear only single character when value is invalid"
            Text="abcdef" />
<TextBlock Foreground="{ThemeResource TextFillColorSecondaryBrush}">
    <Run Text="Is valid: " />
    <Run FontWeight="SemiBold"
            Text="{Binding (dev:TextBoxExtensions.IsValid), ElementName=CharactValidator}" />
</TextBlock>
```

```xml
<TextBox Name="EmailValidator"
            dev:TextBoxExtensions.ValidationType="Email"
            Header="Text box with ValidationType=Email, validation occurs on TextChanged" />
<TextBlock Foreground="{ThemeResource TextFillColorSecondaryBrush}">
    <Run Text="Is valid: " />
    <Run FontWeight="SemiBold"
            Text="{Binding (dev:TextBoxExtensions.IsValid), ElementName=EmailValidator}" />
</TextBlock>
```

```xml
<TextBox Name="DecimalValidatorForce"
            dev:TextBoxExtensions.ValidationMode="Forced"
            dev:TextBoxExtensions.ValidationType="Decimal"
            Header="Text box with ValidationType=Decimal, validation occurs on TextChanged and force occurs on lose focus with ValidationMode=Force (333,111 or 333.111)"/>
<TextBlock Foreground="{ThemeResource TextFillColorSecondaryBrush}">
    <Run Text="Is valid: " />
    <Run FontWeight="SemiBold"
            Text="{Binding (dev:TextBoxExtensions.IsValid), ElementName=DecimalValidatorForce}" />
</TextBlock>
```

```xml
<TextBox Name="NumberValidatorDynamic"
            dev:TextBoxExtensions.ValidationMode="Dynamic"
            dev:TextBoxExtensions.ValidationType="Number"
            Header="Text box with ValidationType=Number, validation occurs at input with ValidationMode=Dynamic and clear only single character when value is invalid"/>
<TextBlock Foreground="{ThemeResource TextFillColorSecondaryBrush}">
    <Run Text="Is valid: " />
    <Run FontWeight="SemiBold"
            Text="{Binding (dev:TextBoxExtensions.IsValid), ElementName=NumberValidatorDynamic}" />
</TextBlock>
```

![TextBoxEx](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/TextBoxEx.png)


# Text mask
The Mask attached property allows a user to more easily enter fixed width text in TextBox control where you would like them to enter the data in a certain format, ex: phone number, postal code.

The developer adds the mask property to prevent end user to enter any other format but the required one (eg. a postal code in the format "aaa-9999").

The Mask property provides 3 built-in variable characters that can be used to define a mask:

a which represents [a-Z]
9 which represents [0-9]
* which represents a or 9

At the post code example the user will only be allowed to enter from a to Z in the first 3 characters, then there is a fixed character - which the user can change or remove, and the last part which the user can change by entering from 0 to 9 at each character. The Mask property prevents the TextBox from having non specified characters (eg. if you entered 1 or 2 into a mask like 9999).

The Mask property also supports 2 type of characters:

Variable: which the user can change like a,9,*
Fixed: which the user can't change and it is any non variable character (eg. the - in the first example)
Variable characters a represented to end user in form of placeholder so the user can know which characters he can change and which he can't, ex mask aaa-9999 will be presented to user as ___-____. The default placeholder is _, but you can change it using the MaskPlaceholder property.

You can escape variable by using \ (eg. the mask +\964 will be presented to the user as +964). This way, the 9 in the mask is treated as a fixed character, not as a variable. If you needed \ in the mask then you can write it as \\ (eg. 99\\99\\9999 will be presented to the user as __\__\__).

In case you want to add a custom variable character you can use the CustomMask property. You can add a character that represents certain regex as c:[a-c] and once you use character c in the mask the mask will prevent any characters but from a to c inside the TextBox, also you specify multiple variable characters by adding comma , after every character and its representation. This feature is helpful if you want to allow certain language characters (eg. French or Arabic only TextBox).

```xml
<StackPanel Spacing="24">
<TextBox dev:TextBoxExtensions.Mask="9a9a-a9a*"
            Header="Text box with Mask 9a9a-a9a* (9 allows from 0 to 9, a allow from a to Z and * allows both a and 9)"
            Text="TextBoxMask" />

<TextBox dev:TextBoxExtensions.Mask="+1999-9999"
            dev:TextBoxExtensions.MaskPlaceholder=" "
            Header="Text box with Mask +1999-9999 and placeHolder as space (placeholder represents the characters the user can change on runtime)" />

<TextBox dev:TextBoxExtensions.Mask="+\964 799 999 9999"
            Header="Text box with Mask +964 799 999 9999 (Notice how we escape the first 9 with a backslash)" />

<TextBox dev:TextBoxExtensions.Mask="99\\99\\9999"
            Header="Text box with Mask 99\99\9999 (You can escape a backslash with another backslash)" />

<TextBox dev:TextBoxExtensions.CustomMask="5:[1-5],c:[a-c]"
            dev:TextBoxExtensions.Mask="a5c-5c*9"
            Header="Text box with CustomMask in case you want to define your own variable character like a, 9 and *. Mask: a5c-5c*9, 5: [1-5], c: [a-c]" />

</StackPanel>

```

![TextBoxMaskEx](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/TextBoxMaskEx.png)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.