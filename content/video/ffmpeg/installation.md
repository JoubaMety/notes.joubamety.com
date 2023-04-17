---
title: FFMPEG Installation
enableToc: false
tags:
- ffmpeg
- installation
- windows
---
# What's FFMPEG?
# Install FFMPEG on Windows
* Pre-compiled binaries
	* Recommend getting [Windows Terminal](https://learn.microsoft.com/en-us/windows/terminal/)!
	* Go to [`gyan.dev/ffmpeg/builds`](https://www.gyan.dev/ffmpeg/builds/) and pick either Git/Stable and Full/Essential (Recommend getting Stable-Full, I mainly use git for encoding with latest versions of AV1 encoders )
	* Extract the contents of `.zip` into `C:/Program Files/ffmpeg` (If ffmpeg Folder Doesn't exist, Create The Folder)
	* Right-click on the `bin` folder inside ffmpeg folder and `Copy path`
	* Go to Environment Variables, quickest way is to use Windows Search (`Win` Und `S`) and typing `env` and go with the first option. Another option is `Settings` -> `System` -> `Advanced System Settings`
	* Double-click on `Path` in either User or System Env. Var. 
	* Create new entry with `New` button and paste the copied path
	* `OK` the two windows
	* You should be good to go! (As is obvious, you'll have to restart your terminal to apply new Env. Var.)
	* Type `ffmpeg` in Terminal To Make Sure Env. Var. Is Set Correctly!