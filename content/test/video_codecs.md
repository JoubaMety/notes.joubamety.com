---
title: Video with different video codes for testing browser support
enableToc: false
---
All of these videos are encoded with target bitrate of `4M`,<br>
individual video weighing at around `9 MB`.

# AVC/H.264
<video id="video1" controls width="512">
	<source src="/test/_media/site_support_01_AVC.mp4" type="video/mp4">
	Huh
</video>
<script>
var video = document.getElementById("video1");
video.setAttribute("controls","controls")   
</script>

```powershell
$ ffmpeg -hwaccel auto -ss 18.222 -to 36.250 -i ".\2022-06-07_19.51.20.mp4" -vf "fps=60" -c:v h264_nvenc -preset p7 -b:v 4M -movflags +faststart ".\site_support_01_AVC.mp4"
```
```
$ ffprobe ".\site_support_01_AVC.mp4"
Input #0, mov,mp4,m4a,3gp,3g2,mj2, from 'D:\Games\MultiMC\instances\Mikeinette 2.0\.minecraft\movies-144hz\site_support_01_AVC.mp4':
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
# HEVC/H.265
<video id="video2" controls width="512">
	<source src="/test/_media/site_support_02_HEVC.mp4" type="video/mp4">
	Huh
</video>
<script>
var video = document.getElementById("video2");
video.setAttribute("controls","controls")   
</script>

```powershell
$ ffmpeg -hwaccel auto -ss 18.222 -to 36.250 -i ".\2022-06-07_19.51.20.mp4" -vf "fps=60" -c:v hevc_nvenc -preset p7 -b:v 4M -movflags +faststart ".\site_support_02_HEVC.mp4"
```
```
$ ffprobe ".\site_support_02_HEVC.mp4"
Input #0, mov,mp4,m4a,3gp,3g2,mj2, from 'D:\Games\MultiMC\instances\Mikeinette 2.0\.minecraft\movies-144hz\site_support_02_HEVC.mp4':
  Metadata:
    major_brand     : isom
    minor_version   : 512
    compatible_brands: isomiso2mp41
    encoder         : Lavf60.4.100
  Duration: 00:00:18.03, start: 0.000000, bitrate: 4176 kb/s
  Stream #0:0[0x1](und): Video: hevc (Main) (hev1 / 0x31766568), yuv420p(tv, progressive), 1440x1080 [SAR 1:1 DAR 4:3], 4170 kb/s, 60 fps, 60 tbr, 15360 tbn (default)
    Metadata:
      handler_name    : VideoHandler
      vendor_id       : [0][0][0][0]
      encoder         : Lavc60.5.100 hevc_nvenc
```
# VP9
<video id="video3" controls width="512">
	<source src="/test/_media/site_support_03_VP9.mp4" type="video/mp4">
	Huh
</video>
<script>
var video = document.getElementById("video3");
video.setAttribute("controls","controls")   
</script>

```powershell
$ ffmpeg -hwaccel auto -ss 18.222 -to 36.250 -i ".\2022-06-07_19.51.20.mp4" -vf "fps=60" -c:v libvpx-vp9 -row-mt 1 -b:v 4M -movflags +faststart ".\site_support_03_VP9.mp4"
```
```
$ ffprobe ".\site_support_03_VP9.mp4"
Input #0, mov,mp4,m4a,3gp,3g2,mj2, from 'D:\Games\MultiMC\instances\Mikeinette 2.0\.minecraft\movies-144hz\site_support_03_VP9.mp4':
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
# AV1
<video id="video4" controls width="512">
	<source src="/test/_media/site_support_04_AV1_SVT.mp4" type="video/mp4">
	Huh
</video>
<script>
var video = document.getElementById("video4");
video.setAttribute("controls","controls")   
</script>

```powershell
$ ffmpeg -hwaccel auto -ss 18.222 -to 36.250 -i ".\2022-06-07_19.51.20.mp4" -vf "fps=60" -c:v libsvtav1 -preset 8 -b:v 4M -movflags +faststart ".\site_support_04_AV1_SVT.mp4"
```
```
$ ffprobe ".\site_support_04_AV1_SVT.mp4"
Input #0, mov,mp4,m4a,3gp,3g2,mj2, from 'D:\Games\MultiMC\instances\Mikeinette 2.0\.minecraft\movies-144hz\site_support_04_AV1_SVT.mp4':
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
# FFMPEG Build
```
ffmpeg version 2023-03-02-git-814178f926-full_build-www.gyan.dev Copyright (c) 2000-2023 the FFmpeg developers
  built with gcc 12.2.0 (Rev10, Built by MSYS2 project)
  configuration: --enable-gpl --enable-version3 --enable-static --disable-w32threads --disable-autodetect --enable-fontconfig --enable-iconv --enable-gnutls --enable-libxml2 --enable-gmp --enable-bzlib --enable-lzma --enable-libsnappy --enable-zlib --enable-librist --enable-libsrt --enable-libssh --enable-libzmq --enable-avisynth --enable-libbluray --enable-libcaca --enable-sdl2 --enable-libaribb24 --enable-libdav1d --enable-libdavs2 --enable-libuavs3d --enable-libzvbi --enable-librav1e --enable-libsvtav1 --enable-libwebp --enable-libx264 --enable-libx265 --enable-libxavs2 --enable-libxvid --enable-libaom --enable-libjxl --enable-libopenjpeg --enable-libvpx --enable-mediafoundation --enable-libass --enable-frei0r --enable-libfreetype --enable-libfribidi --enable-liblensfun --enable-libvidstab --enable-libvmaf --enable-libzimg --enable-amf --enable-cuda-llvm --enable-cuvid --enable-ffnvcodec --enable-nvdec --enable-nvenc --enable-d3d11va --enable-dxva2 --enable-libvpl --enable-libshaderc --enable-vulkan --enable-libplacebo --enable-opencl --enable-libcdio --enable-libgme --enable-libmodplug --enable-libopenmpt --enable-libopencore-amrwb --enable-libmp3lame --enable-libshine --enable-libtheora --enable-libtwolame --enable-libvo-amrwbenc --enable-libilbc --enable-libgsm --enable-libopencore-amrnb --enable-libopus --enable-libspeex --enable-libvorbis --enable-ladspa --enable-libbs2b --enable-libflite --enable-libmysofa --enable-librubberband --enable-libsoxr --enable-chromaprint
```