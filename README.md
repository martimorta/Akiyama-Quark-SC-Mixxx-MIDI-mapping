# Akiyama Quark SC MIDI Mapping for Mixxx

## Docs

### Mixxx

The latest version of Mixxx docs is available at https://mixxx.org/manual/latest/en/

### Quark SC

The manual for Quark SC with its MIDI mapping is available in the folder docs

> Note: This used to be the url from Akiyama DJ but it is not active anymore
>
> http://www.akiyamadj.com/product_info1.php?products_model=QUARK-SC

## Installation

Windows

    C:\Users\xxxx\AppData\Local\Mixxx\controllers

Linux

    /usr/share/mixxx/controllers

Mac

    /Users/xxxx/Library/Application\ Support/Mixxx/controllers 

## Development

Edit QUARK_SC.js and QUARK.midi.xml files and copy as explained above.

### VS Code

Use launch.json and tasks.json files to run the copy script using Ctrl+F5

The batch script will copy from the repo to the controllers folder, in the case of mappings will copy both ways.

### Start Mixxx in debug mode

PowerShell

    & 'C:\Program Files\Mixxx\mixxx.exe' --controllerDebug --developer

### Learning MIDI controls

From [Mixxx latest Manual](https://mixxx.org/manual/latest/en-GB/chapters/advanced_topics.html#adding-support-for-your-midi-hid-controller)
The Controller wizard saves the new preset to the following file paths:

Linux: 

    /home/<username>/.mixxx/controllers

macOS: 

    /Users/<username>/Library/Application\ Support/Mixxx/controllers

Windows: 

    %LOCALAPPDATA%\Mixxx\controllers

%LOCALAPPDATA%\Mixxx\controllers


## About

Original author [Jakub Křižka](https://github.com/JakubKrizka) 

Original repository [Akiyama-Quark-SC-Mixxx-MIDI-mapping](https://github.com/JakubKrizka/Akiyama-Quark-SC-Mixxx-MIDI-mapping)