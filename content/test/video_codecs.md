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
> [!warning]
> It's possible that you won't be able to playback HEVC video due to browser implementation issues. See [[browser_support|here]] for more info. 
# Details
## Commands
### H.264 (AVC)
```ps
-c:v libx264 -preset veryslow -b:v 1M
```
```ps
ffmpeg -hwaccel auto -ss 18.222 -to 36.250 -i ".\2022-06-07_19.51.20.mp4" -vf "scale=-2:720:flags=lanczos,fps=60" -c:v libx264 -preset veryslow -b:v 1M -movflags +faststart ".\site_support_01_AVC.mp4"
```
### H.265 (HEVC)
> [!warning]
> HEVC content needs extra care when handling. See [[browser_support|here]] for more info. 

```ps
-c:v libx265 -preset medium -b:v 1M -tag:v hvc1
```
```ps
ffmpeg -hwaccel auto -ss 18.222 -to 36.250 -i ".\2022-06-07_19.51.20.mp4" -vf "scale=-2:720:flags=lanczos,fps=60" -c:v libx265 -preset medium -b:v 1M -tag:v hvc1 -movflags +faststart ".\site_support_02_HEVC.mp4"
```
### VP9
```ps
-c:v libvpx-vp9 -row-mt 1 -b:v 1M 
```
```ps
ffmpeg -hwaccel auto -ss 18.222 -to 36.250 -i ".\2022-06-07_19.51.20.mp4" -vf "scale=-2:720:flags=lanczos,fps=60" -c:v libvpx-vp9 -row-mt 1 -b:v 4M -movflags +faststart ".\site_support_03_VP9.mp4"
```
### AV1
```ps
-c:v libsvtav1 -preset 8 -b:v 1M 
```
```ps
ffmpeg -hwaccel auto -ss 18.222 -to 36.250 -i ".\2022-06-07_19.51.20.mp4" -vf "scale=-2:720:flags=lanczos,fps=60" -c:v libsvtav1 -preset 8 -b:v 1M -movflags +faststart ".\site_support_04_AV1_SVT.mp4"
```
## Media Properties ([[FFprobe|FFprobe]])
### Source
```
$ ffprobe -hide_banner ".\2022-06-07_19.51.20.mp4"
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
### H.264 (AVC)
```
$ ffprobe -hide_banner .\site_support_01_AVC.mp4
Input #0, mov,mp4,m4a,3gp,3g2,mj2, from '.\site_support_01_AVC.mp4':
  Metadata:
    major_brand     : isom
    minor_version   : 512
    compatible_brands: isomiso2avc1mp41
    encoder         : Lavf60.9.100
  Duration: 00:00:18.03, start: 0.000000, bitrate: 1019 kb/s
  Stream #0:0[0x1](und): Video: h264 (High) (avc1 / 0x31637661), yuv420p(progressive), 960x720 [SAR 1:1 DAR 4:3], 1014 kb/s, 60 fps, 60 tbr, 15360 tbn (default)
    Metadata:
      handler_name    : VideoHandler
      vendor_id       : [0][0][0][0]
      encoder         : Lavc60.21.100 libx264
```
### H.265 (HEVC)
```
$ ffprobe -hide_banner .\site_support_02_HEVC.mp4
Input #0, mov,mp4,m4a,3gp,3g2,mj2, from '.\site_support_02_HEVC.mp4':
  Metadata:
    major_brand     : isom
    minor_version   : 512
    compatible_brands: isomiso2mp41
    encoder         : Lavf60.9.100
  Duration: 00:00:18.03, start: 0.000000, bitrate: 1035 kb/s
  Stream #0:0[0x1](und): Video: hevc (Main) (hvc1 / 0x31637668), yuv420p(tv, progressive), 960x720 [SAR 1:1 DAR 4:3], 1027 kb/s, 60 fps, 60 tbr, 15360 tbn (default)
    Metadata:
      handler_name    : VideoHandler
      vendor_id       : [0][0][0][0]
      encoder         : Lavc60.21.100 libx265
```
### VP9
```
Input #0, mov,mp4,m4a,3gp,3g2,mj2, from '.\site_support_03_VP9.mp4':
  Metadata:
    major_brand     : isom
    minor_version   : 512
    compatible_brands: isomiso2mp41
    encoder         : Lavf60.9.100
  Duration: 00:00:18.03, start: 0.000000, bitrate: 1075 kb/s
  Stream #0:0[0x1](und): Video: vp9 (Profile 0) (vp09 / 0x39307076), yuv420p(tv, progressive), 960x720, 1072 kb/s, SAR 1:1 DAR 4:3, 60 fps, 60 tbr, 15360 tbn (default)
    Metadata:
      handler_name    : VideoHandler
      vendor_id       : [0][0][0][0]
      encoder         : Lavc60.21.100 libvpx-vp9
```
### AV1
```
$ ffprobe -hide_banner .\site_support_04_AV1_SVT.mp4
Input #0, mov,mp4,m4a,3gp,3g2,mj2, from '.\site_support_04_AV1_SVT.mp4':
  Metadata:
    major_brand     : isom
    minor_version   : 512
    compatible_brands: isomav01iso2mp41
    encoder         : Lavf60.9.100
  Duration: 00:00:18.03, start: 0.000000, bitrate: 1037 kb/s
  Stream #0:0[0x1](und): Video: av1 (Main) (av01 / 0x31307661), yuv420p(tv, progressive), 960x720, 1034 kb/s, SAR 1:1 DAR 4:3, 60 fps, 60 tbr, 15360 tbn (default)
    Metadata:
      handler_name    : VideoHandler
      vendor_id       : [0][0][0][0]
      encoder         : Lavc60.21.100 libsvtav1
```