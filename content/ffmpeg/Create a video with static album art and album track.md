---
title: Create a video with static album art and album track
enableToc: false
tags:
- ffmpeg
- static image
  
---
Sometimes, I like to share music to my Discord friends. **Unfortunately, Discord doesn't yet have native audio player in mobile apps.**
So in order for my iOS/Android friends to still be able to play music without having to download them, I've started using ffmpeg to create videos with album art and music track VERY quickly, without the need of some kind of video editor, just one *(or multiple, depending on complexity of problem.)*

# 0. Get album art if not available.
You might not have album art, but you might have music file with album art inside. If so, then there's very easy way to extract it.
```bash
ffmpeg -i music.mp3 cover.jpg
```
# 1. The magic command
```bash
ffmpeg -loop 1 -i cover.jpg -i music.mp3 -map 0:v:0 -map 1:a:0 -pix_fmt yuv420p -vf scale=1080:-2:flags=lanczos -c:v libx264 -tune stillimage -c:a aac -b:a 128k -shortest -movflags +faststart epic.mp4
```
I'm gonna point out few important things that make this command work.
- `-loop 1` loops the image, because otherwise image will show for maybe one second and then the rest of video is broken because of that.
- `-vf scale=1080:-2:flags=lanczos` scales the video to width of 1080 and then fitting height while still being divisible by 2.
  This is important because of two things: efficiency and libx264.
  - Efficiency is because we prolly won't need 2160x2160, which is more taxing to decode, but also to encode.
  - Libx264 doesn't like height/width that isn't divisible by 2. So that's also an extra measure.
- `-shortest` shorts the loop. Well, basically, since the first input `cover.jpg` is being looped constantly thanks to the first flag, we **need** to stop encoding once audio is done, because if we don't do this, it will continue encoding indefinitely until we fill our disk space with cover art.

# The *very hopeful* result
![[ffmpeg/_media/New Order - Blue Monday.webm]]
- **New Order - Blue Monday**
```bash
ffmpeg -y -loop 1 -i .\cover.JPG -ss 01:30 -to 01:40 -i '.\01 - Blue Monday.flac' -map 0:v -map 1:a -pix_fmt yuv420p -vf scale=256:-2:flags=lanczos -c:v libsvtav1 -preset 6 -c:a libopus -b:a 80k -shortest -movflags +faststart '.\New Order - Blue Monday.webm'
```