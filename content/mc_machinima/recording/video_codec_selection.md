---
title: Video Codec Selection
description: A note about codec selection when recording a Minecraft Machinima. (Can be applied to recording outside of Minecraft Machinimas)
---
> [!tldr]
> If you care more about size than anything else, use the usual [[ffmpeg/codec/vcodec/avc/index|H.264 (AVC)]], [[ffmpeg/codec/vcodec/hevc/index|H.265 (HEVC)]] or more modern [[ffmpeg/codec/vcodec/av1/index|AV1]] if your tools support it. However, if you care about speed and/or quality, you should use intraframe video codecs such as ==ProRes== or ==DNxHR==. Using lossless compression (and especially not uncompressed) has diminishing returns, especially in video.

If you ever record anything, if it's via computer or a camera, you will eventually stumble upon [[ffmpeg/codec/vcodec/index|video codecs]]. In this note, I'll talk about how you should select an appropriate video codec, which affect your video creation workflow.
# Theory
## Intraframe vs Interframe Coding
Difference is literally in the name, [intra](https://en.wiktionary.org/wiki/intra-#English) vs [inter](https://en.wiktionary.org/wiki/inter-#English).[^1]
* **Intraframe** -> each video frame is compressed independently
* **Interframe** -> frames copy data from the ones before it, only 'adding in the difference', they're dependent on original frame

While **interframe codecs** is preferred for media consumption, because of possibly massive reduction in sizes, it makes decoding (playing) the video that more computationally expensive. For that reason, even decades after introduction of [[ffmpeg/codec/vcodec/avc/index|H.264 (AVC)]], professional video editors don't usually work with it, but instead work with **intraframe codecs** like ==ProRes==, which make editing a video a breeze.
## Generation Loss
Generation Loss is something that's part of lossy compression, it's basically a loss of quality that occurs after generations (compressions) of the video.
Popular interframe codecs such as [[ffmpeg/codec/vcodec/avc/index|H.264 (AVC)]] are especially susceptible to this, more noticeable at lower bitrates. 
![[generation_loss_comparison.webp]]
*JPEG compression at 80% quality using [ImageMagick convert](https://imagemagick.org/script/convert.php); 1 generation (on the left) vs 1000 generations (on the right) Source: A thumbnail source for [2024-06-YUI](https://youtu.be/ksJQnBe_qGE) Minecraft machinima.*

MKBHD also made a pretty cool video on this topic: [This Is What Happens When You Re-Upload a YouTube Video 1000 Times!](https://www.youtube.com/watch?v=JR4KHfqw-oE)

While intraframe codecs like ==ProRes== also introduce generation loss, it's really not gonna be a problem unless you use really low profiles.[^2]
# Practice
## My Experience: Minecraft Machinimas
Before I started working on the Minecraft machinima [2024-06-YUI](https://youtu.be/ksJQnBe_qGE) ("Project"), I used high bitrate ==x264== encoder for my footage for [my 2023's Minecraft machinima](https://youtu.be/_r-IfyCsA3A), which proved to be a bit hard to edit, especially since the footage was shot at 3240x2160 resolution.
```
$ ffprobe footage.mp4
Input #0, mov,mp4,m4a,3gp,3g2,mj2, from 'footage.mp4':
  Metadata:
    major_brand     : isom
    minor_version   : 512
    compatible_brands: isomiso2avc1mp41
    encoder         : Lavf60.9.100
  Duration: 00:00:07.50, start: 0.000000, bitrate: 59787 kb/s
  Stream #0:0[0x1](und): Video: h264 (High 4:4:4 Predictive) (avc1 / 0x31637661), yuv444p(progressive), 3240x2160, 59785 kb/s, 30 fps, 30 tbr, 15360 tbn (default)
    Metadata:
      handler_name    : VideoHandler
      vendor_id       : [0][0][0][0]
      encoder         : Lavc60.21.100 libx264
```
*Snippet of [[FFprobe|FFprobe]] CLI tool used for identifying streams inside media containers.*

As mentioned in previous sections, this choice of video codec might not have been ideal. I was already using high bitrate to combat the quality loss and [[video_codec_selection#Generation Loss|generation loss]], and I had to slightly suffer with bad seeking performance due to [[video_codec_selection#Intraframe vs Interframe Coding|H.264 being interframe codec]].

So when I began work on the "Project", I went for ==DNxHR==, one of the intraframe codecs, to improve seeking performance and maintain good quality, both of which are important for video editors.
==DNxHR== has bunch of profiles, ranging from low quality (LQ - 8-bit 4:2:2) to cinema quality (444 - 12-bit 4:4:4). I went for SQ (8-bit 4:2:2), which was good enough for my needs.
```
$ ffprobe footage.mov
Input #0, mov,mp4,m4a,3gp,3g2,mj2, from 'footage.mov':
  Metadata:
    major_brand     : qt
    minor_version   : 512
    compatible_brands: qt
    encoder         : Lavf60.9.100
  Duration: 00:00:21.92, start: 0.000000, bitrate: 124257 kb/s
  Stream #0:0[0x1]: Video: dnxhd (DNXHR SQ) (AVdh / 0x68645641), yuv422p(tv, bt709/unknown/unknown), 2048x1080, 124256 kb/s, 24 fps, 24 tbr, 12288 tbn (default)
    Metadata:
      handler_name    : VideoHandler
      vendor_id       : FFMP
      encoder         : Lavc60.21.100 dnxhd
```
*Snippet of [[FFprobe|FFprobe]] CLI tool used for identifying streams inside media containers.*

And here's my *Encoder Arguments* / *[[ffmpeg/index|FFmpeg]] Arguments* in Minema:
```
-f rawvideo -pix_fmt bgr24 -s %WIDTH%x%HEIGHT% -r %FPS% -i - -vf %DEFVF% -c:v dnxhd -profile:v dnxhr_sq %NAME%.mov
```

In the end, recording and editing of "Project" went much faster than I expected it to be, which made me happy.

[^1]: https://en.wikipedia.org/wiki/Video_coding_format
[^2]: https://www.apple.com/final-cut-pro/docs/Apple_ProRes.pdf