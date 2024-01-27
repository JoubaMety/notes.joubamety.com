---
title: Various Video Codecs for Browser Testing
description: A collection of videos encoded in different Video Codecs to test Browser capabilities.
---
# Outputs
| Codec | Output |
| ---- | ---- |
| [[ffmpeg/codec/vcodec/avc/index\|H.264 (AVC)]] | ![[site_support_01_AVC_XXXheight=320_XXXwidth=427.mp4]] |
| [[ffmpeg/codec/vcodec/hevc/index\|H.265 (HEVC)]] | ![[site_support_02_HEVC_XXXheight=320_XXXwidth=427.mp4]] |
| [[ffmpeg/codec/vcodec/vp9/index\|VP9]] | ![[site_support_03_VP9_XXXheight=320_XXXwidth=427.mp4]] |
| [[ffmpeg/codec/vcodec/av1/index\|AV1]] | ![[site_support_04_AV1_SVT_XXXheight=320_XXXwidth=427.mp4]] |
# Details
## Commands
### [[ffmpeg/codec/vcodec/avc/index|H.264 (AVC)]]
```ps
-c:v h264_nvenc -preset p7 -b:v 4M
```
```ps
ffmpeg -hwaccel auto -ss 18.222 -to 36.250 -i ".\2022-06-07_19.51.20.mp4" -vf "fps=60"  -c:v h264_nvenc -preset p7 -b:v 4M -movflags +faststart ".\site_support_01_AVC.mp4"
```
### [[ffmpeg/codec/vcodec/hevc/index|H.265 (HEVC)]]
> [!warning]
> 
> We add `hvc1` tag to the video codec section because Apple devices won't be able to recognise HEVC videos *as HEVC videos*!
> > [!failure]- HEVC videos on Websites
> > In addition to adding the tag, we need to tell the browser that the video even has HEVC video, like in this example:
> > ```html
> > <video id="video2" controls width="512">
> > 	<source src="/_media/test_video-codecs/site_support_02_HEVC.mp4" type='video/mp4'>
> > 	<source src="/_media/test_video-codecs/site_support_02_HEVC.mp4" type='video/mp4; codecs="hvc1"'>
> > 	Huh
> > </video>
> > ```
> > - Reason for having two sources is because Chromium doesn’t deal with this Apple thing, making the HEVC video unplayable!  
> >   But by including the normal source first makes it playable for Chromium users, and Apple (Safari) will play the second one! Splendid!

```ps
-c:v hevc_nvenc -preset p7 -b:v 4M -tag:v hvc1 
```
```ps
ffmpeg -hwaccel auto -ss 18.222 -to 36.250 -i ".\2022-06-07_19.51.20.mp4" -vf "fps=60" -c:v hevc_nvenc -preset p7 -b:v 4M -tag:v hvc1 -movflags +faststart ".\site_support_02_HEVC.mp4"
```
### [[ffmpeg/codec/vcodec/vp9/index|VP9]]
```ps
-c:v libvpx-vp9 -row-mt 1 -b:v 4M 
```
```ps
ffmpeg -hwaccel auto -ss 18.222 -to 36.250 -i ".\2022-06-07_19.51.20.mp4" -vf "fps=60" -c:v libvpx-vp9 -row-mt 1 -b:v 4M -movflags +faststart ".\site_support_03_VP9.mp4"
```
### [[ffmpeg/codec/vcodec/av1/index|AV1]]
```ps
-c:v libsvtav1 -preset 8 -b:v 4M 
```
```ps
ffmpeg -hwaccel auto -ss 18.222 -to 36.250 -i ".\2022-06-07_19.51.20.mp4" -vf "fps=60" -c:v libsvtav1 -preset 8 -b:v 4M -movflags +faststart ".\site_support_04_AV1_SVT.mp4"
```
## Media Properties ([[FFprobe|FFprobe]])
### Source
```
$ ffprobe ".\2022-06-07_19.51.20.mp4"
Input #0, mov,mp4,m4a,3gp,3g2,mj2, from '.\2022-06-07_19.51.20.mp4':
  Metadata:
    major_brand     : isom
    minor_version   : 512
    compatible_brands: isomiso2avc1mp41
    encoder         : Lavf58.76.100
  Duration: 00:00:42.25, start: 0.000000, bitrate: 115903 kb/s
  Stream #0:0[0x1](und): Video: h264 (Main) (avc1 / 0x31637661), yuv420p(progressive), 1440x1080 [SAR 1:1 DAR 4:3], 115897 kb/s, 144 fps, 144 tbr, 18432 tbn (default)
    Metadata:
      handler_name    : VideoHandler
      vendor_id       : [0][0][0][0]
```
### [[ffmpeg/codec/vcodec/avc/index|H.264 (AVC)]]
```
$ ffprobe ".\site_support_01_AVC.mp4"
Input #0, mov,mp4,m4a,3gp,3g2,mj2, from '.\site_support_01_AVC.mp4':
  Metadata:
    major_brand     : isom
    minor_version   : 512
    compatible_brands: isomiso2avc1mp41
    encoder         : Lavf60.4.100
  Duration: 00:00:18.03, start: 0.000000, bitrate: 3965 kb/s
  Stream #0:0[0x1](und): Video: h264 (Main) (avc1 / 0x31637661), yuv420p(progressive), 1440x1080 [SAR 1:1 DAR 4:3], 3959 kb/s, 60 fps, 60 tbr, 15360 tbn (default)
    Metadata:
      handler_name    : VideoHandler
      vendor_id       : [0][0][0][0]
      encoder         : Lavc60.5.100 h264_nvenc
```
### [[ffmpeg/codec/vcodec/hevc/index|H.265 (HEVC)]]
```
$ ffprobe ".\site_support_02_HEVC.mp4"
Input #0, mov,mp4,m4a,3gp,3g2,mj2, from '.\site_support_02_HEVC.mp4':
  Metadata:
    major_brand     : isom
    minor_version   : 512
    compatible_brands: isomiso2mp41
    encoder         : Lavf60.4.100
  Duration: 00:00:18.03, start: 0.000000, bitrate: 4176 kb/s
  Stream #0:0[0x1](und): Video: hevc (Main) (hvc1 / 0x31637668), yuv420p(tv, progressive), 1440x1080 [SAR 1:1 DAR 4:3], 4170 kb/s, 60 fps, 60 tbr, 15360 tbn (default)
    Metadata:
      handler_name    : VideoHandler
      vendor_id       : [0][0][0][0]
      encoder         : Lavc60.5.100 hevc_nvenc
```
### [[ffmpeg/codec/vcodec/vp9/index|VP9]]
```
$ ffprobe ".\site_support_03_VP9.mp4"
Input #0, mov,mp4,m4a,3gp,3g2,mj2, from '.\site_support_03_VP9.mp4':
  Metadata:
    major_brand     : isom
    minor_version   : 512
    compatible_brands: isomiso2mp41
    encoder         : Lavf60.4.100
  Duration: 00:00:18.03, start: 0.000000, bitrate: 3773 kb/s
  Stream #0:0[0x1](und): Video: vp9 (Profile 0) (vp09 / 0x39307076), yuv420p(tv, progressive), 1440x1080, 3771 kb/s, SAR 1:1 DAR 4:3, 60 fps, 60 tbr, 15360 tbn (default)
    Metadata:
      handler_name    : VideoHandler
      vendor_id       : [0][0][0][0]
      encoder         : Lavc60.5.100 libvpx-vp9
```
### [[ffmpeg/codec/vcodec/av1/index|AV1]]
```
$ ffprobe ".\site_support_04_AV1_SVT.mp4"
Input #0, mov,mp4,m4a,3gp,3g2,mj2, from '.\site_support_04_AV1_SVT.mp4':
  Metadata:
    major_brand     : isom
    minor_version   : 512
    compatible_brands: isomav01iso2mp41
    encoder         : Lavf60.4.100
  Duration: 00:00:18.03, start: 0.000000, bitrate: 4092 kb/s
  Stream #0:0[0x1](und): Video: av1 (Main) (av01 / 0x31307661), yuv420p(tv, progressive), 1440x1080, 4090 kb/s, SAR 1:1 DAR 4:3, 60 fps, 60 tbr, 15360 tbn (default)
    Metadata:
      handler_name    : VideoHandler
      vendor_id       : [0][0][0][0]
      encoder         : Lavc60.5.100 libsvtav1
```