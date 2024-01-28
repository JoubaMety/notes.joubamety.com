---
title: HEVC - Browser Support
description: A file about HEVC and it's browser support.
---
As of *28th of January, 2024*, these are only handful of browsers that support playing back HEVC, like shown in this pic from [CanIUse.com](https://caniuse.com/hevc).
![[Pasted image 20240128003212.png]]

# Safari
While Safari has native & enabled right out of the box (OOB) support, it doesn't behave how you might normally think.
* It demands specific Codec ID.
* It plays back videos that only have 4:2:0 chroma subsampling.
Source: [discussions.apple.com](https://discussions.apple.com/thread/253813055)
## Codec ID
For the Codec ID, it's as simple as tagging the video via `ffmpeg`:

```ps
-tag:v hvc1 
```

...but website also needs to specify the file is the correct codec, like :
```html
<video id="video2" controls width="512">
	<!-- Other browsers -->
	<source src="/_media/test_video-codecs/site_support_02_HEVC.mp4" type='video/mp4'>
	<!-- Safari -->
	<source src="/_media/test_video-codecs/site_support_02_HEVC.mp4" type='video/mp4; codecs="hvc1"'>
	<!-- Error message? -->
	Huh
</video>
```
# Chromium-based browsers
[Chromium-based browsers as of late 2022](https://chromestatus.com/feature/5186511939567616) added support for hardware-accelerated HEVC decoding. Compared to [[#Safari]] however, it seems it doesn't like to playback specifically-tagged in HTML content, but without tag in HTML, it will playback just fine.
> [!todo] Re-test

```html
<video id="video2" controls width="512">
	<!-- Other browsers -->
	<source src="/_media/test_video-codecs/site_support_02_HEVC.mp4" type='video/mp4'>
	<!-- Safari -->
	<source src="/_media/test_video-codecs/site_support_02_HEVC.mp4" type='video/mp4; codecs="hvc1"'>
	<!-- Error message? -->
	Huh
</video>
```

# Firefox
> [!failure] MARKED AS WONTFIX
> Source: [bugzilla.mozilla.org](https://bugzilla.mozilla.org/show_bug.cgi?id=1332136)

> [!quote] [Jean-Yves Avenard \[\:jya\]](https://bugzilla.mozilla.org/user_profile?user_id=512198) [- bugzilla.mozilla.org](https://bugzilla.mozilla.org/show_bug.cgi?id=1332136#c5)
> The reason we won't support H265 has nothing to do with the difficulty in finding a decoder, or that a decoder source code is released under GPL. Those are trivial matters.
> 
> \[...\]
> 
> **We will not support h265 video while its patent encumbered.**
> 
>  \[...\]
>  
> I suggest you research about the h265 patent pools and the licensing model in use.

Current state as of *28th of January, 2024*:
![[Pasted image 20240128005957.png]]

# Conclusion
![[site_support_02_HEVC_XXXautoplay=true.mp4]]

:4ktroll: