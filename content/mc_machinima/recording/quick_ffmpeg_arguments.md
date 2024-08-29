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
```ps
-f rawvideo -pix_fmt bgr24 -s %WIDTH%x%HEIGHT% -r %FPS% -i - -vf %DEFVF% -start_number 0 %NAME%_%04d.png
```
* Suffix `_%04d` includes a number format, which formats it to 4 digit number with leading numbers, starts `0000` and ends at `9999`, *and when it passes 9999, FFmpeg will stop encoding new frames & stop the recording*.
* To change the number of digits, change the number `4` in `%04d`.
* By default, FFmpeg starts IMG sequence output *frame* counter at number `1`, which basically yeets 1 potential frame that could be stored in single recording[^1]... anyway, in this command, we overwrite to `0` using `start_number`.
# AVC (H.264)
Folder: [[ffmpeg/codec/vcodec/avc/index|AVC (H.264)]]
## x264; slow; crf 23; yuv420p
```ps
-f rawvideo -pix_fmt bgr24 -s %WIDTH%x%HEIGHT% -r %FPS% -i - -vf %DEFVF% -pix_fmt yuv420p -c:v libx264 -preset slow -crf 23 -b:v 0 %NAME%.mov
```
## -||- max/buf 8 Mbit/16Mbit
Ideal for sharing over Discord (I consider 8Mbit to be max comfortable bitrate for Discord)
```ps
-f rawvideo -pix_fmt bgr24 -s %WIDTH%x%HEIGHT% -r %FPS% -i - -vf %DEFVF% -pix_fmt yuv420p -c:v libx264 -preset slow -crf 23 -b:v 0 -maxrate 8M -bufsize 16M %NAME%.mov
```
[^1]: https://ffmpeg.org/ffmpeg-formats.html#Options-27