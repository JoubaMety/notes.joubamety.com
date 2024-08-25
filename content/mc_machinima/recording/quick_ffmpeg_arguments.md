---
title: Quick FFmpeg Arguments (Minema)
description: Place where I can quickly access frequently used FFmpeg Arguments for Minema mod.
aliases:
---
[Minema Mod](https://www.curseforge.com/minecraft/mc-mods/minema) uses FFmpeg to encode captured frames into standard codecs / containers.
You can find ==FFmpeg Arguments== by going to `Mods -> Minema -> Encoding`
# DNxHR
Learn more about ==DNxHR== in [[video_codec_selection|Video Codec Selection]]
## DNxHR SQ
```ps
-f rawvideo -pix_fmt bgr24 -s %WIDTH%x%HEIGHT% -r %FPS% -i - -vf %DEFVF% -c:v dnxhd -profile:v dnxhr_sq -pix_fmt yuv422p %NAME%.mov
```
# PNG Sequence
* Suffix `_%03d` includes a number format, which formats it to 3 digit number with leading numbers, starts `000` and ends at `999`, *not entirely sure what it does when it passes 999...*.
* To increase number of digits, change the number `3` in `%03d`.
```ps
-f rawvideo -pix_fmt bgr24 -s %WIDTH%x%HEIGHT% -r %FPS% -i - -vf %DEFVF% %NAME%_%03d.png
```