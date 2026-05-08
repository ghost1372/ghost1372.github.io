---
title: PasswordGenerator
---

Our Password Generator is a secure, flexible tool for creating strong and customizable passwords. It allows users to generate passwords according to their specific needs, ensuring a balance of security, readability, and compliance with password policies.

Whether you need a quick, strong password or a highly customized password set, our generator handles it all.


## Features
1.Fully Customizable Character Sets

You can choose which types of characters to include in your password:

- Uppercase Letters (A–Z)
- Lowercase Letters (a–z)
- Numbers (0–9)
- Math Symbols (+, -, *, /, <, =, >)
- Punctuation (!, ,, ., :, ;, ?)
- Brackets ((, ), [, ], {, })
- Quotes (", ', `)
- Special Characters (#, &, $, %, @, , ~, ^, _, |, -)
- Spaces

You can combine multiple sets for maximum flexibility.

2. Password Length Control

Choose the desired length of your password. By default, the generator creates 12-character passwords, but this can be adjusted to meet any requirement.

3. Avoid Ambiguous Characters

Easily remove characters that are visually confusing, such as O, 0, l, 1, and I. This ensures your passwords are easy to read and type.

4. Repetition Control

Decide whether characters can repeat in your password:

Allow repeating characters (default)
Disallow repeating characters for maximum uniqueness
5. Ensuring Character Set Inclusion

The generator can guarantee that at least one character from each selected set appears in your password. This ensures all password policies are met, such as including both letters and numbers.

6. Readable Passwords

Enable the Readable Password option to create passwords that avoid symbols and focus on letters and numbers, improving usability without sacrificing security.

7. Password Strength Assessment

Evaluate how secure a password is with built-in strength scoring:

Very Weak	Extremely easy to guess or crack
Weak	Weak security, not recommended
Normal	Moderate security, acceptable for casual use
Strong	High security, suitable for most purposes
Very Strong	Maximum security, highly resistant to attacks

The strength can be determined either by standard rules or by calculating entropy based on selected character sets and password length.

# Methods
|Name|
|-|
|Generate|
|GetPasswordStrength|

```cs
PasswordGenerator passwordGenerator = new PasswordGenerator();

var pass = passwordGenerator.Generate(new PasswordOptions
{
    Length = 12,
    CharacterSets = PasswordCharacterSet.UpperCase | PasswordCharacterSet.LowerCase | PasswordCharacterSet.Numbers,
    AllowRepeatingCharacters = false,
    EnsureEachSelectedSet = true
});

Debug.WriteLine(pass);

PasswordStrengthLevel strength = PasswordGenerator.GetPasswordStrength("myPasswrod");
```

![PasswordGenerator](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/PasswordGenerator.gif)

![PasswordGenerator](https://raw.githubusercontent.com/ghost1372/DevWinUI-Resources/refs/heads/main/DevWinUI-Docs/PasswordGenerator2.gif)

# Demo
you can run [demo](https://github.com/Ghost1372/DevWinUI) and see this feature.