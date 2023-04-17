---
title: Create a video with static background image and audio
enableToc: false
tags:
- video
- ffmpeg
- static background
---
Sometimes, I like to share music to my Discord friends. **Unfortunately, Discord doesn't yet have native audio player in mobile apps. *(Except voice messages?! What's up with that, Discord?)***<br>
So in order for my iOS/Android friends to still be able to play music without having to download them, I've started using [`ffmpeg`](video/ffmpeg/installation) to create videos with album art and music track VERY quickly, without the need of some kind of video editor, just one *(or multiple, depending on complexity of problem.)*

# 0. Get album art if not available.
You might not have album art, but you might have music file with album art inside. If so, then there's very easy way to extract it.
```bash
ffmpeg -i music.mp3 cover.jpg
```
# 1. The magic command
We're gonna basically input two media files: album art and music, use `libx264` with `-tune -stillimage` for best possible compression and `aac` because Apple s\*\*ks a\*\*, and then output to mp4
```bash
ffmpeg -loop 1 -i cover.jpg -i music.mp3 -map 0:v:0 -map 1:a:0 -pix_fmt yuv420p -vf scale=1080:-2:flags=lanczos -c:v libx264 -tune stillimage -c:a aac -b:a 128k -shortest -movflags +faststart epic.mp4
```
I'm gonna point out few important things that make this command work.
- `-loop 1` loops the image, because otherwise image will show for maybe one second and then the rest of video is broken because of that.
- `-pix_fmt yuv420p` sets the pixel format to YUV420p, so we don't get unexpected behavior when converting from PNG's RGB24 or JPG's YUV444.
- `-vf scale=1080:-2:flags=lanczos` scales the video to width of 1080 and then fitting height while still being divisible by 2.
  This is important because of two things: efficiency and libx264.
  - Efficiency is because we prolly won't need 2160x2160, which is more taxing to decode, but also to encode.
  - Libx264 doesn't like height/width that isn't divisible by 2. So that's also an extra measure.
- `-shortest` shorts the loop. Well, basically, since the first input `cover.jpg` is being looped constantly thanks to the first flag, we **need** to stop encoding once audio is done, because if we don't do this, it will continue encoding indefinitely until we fill our disk space with cover art.

# The *very hopeful* result
<video id="myvideo" controls width="256">
	<source src="https://cdn.discordapp.com/attachments/677266163994198020/1069037555758141600/Imagine_Dragons_-_Bones_Final_4K_Prhq-SVTAV1.mp4" type="video/webm">
	Huh
</video>
<script>
var video = document.getElementById("myvideo");
video.setAttribute("controls","controls")   
</script>

- **New Order - Blue Monday**
```bash
ffmpeg -y -loop 1 -i .\cover.JPG -ss 01:30 -to 01:40 -i '.\01 - Blue Monday.flac' -map 0:v -map 1:a -pix_fmt yuv420p -vf scale=256:-2:flags=lanczos -c:v libsvtav1 -preset 6 -c:a libopus -b:a 80k -shortest -movflags +faststart '.\New Order - Blue Monday.webm'
```
