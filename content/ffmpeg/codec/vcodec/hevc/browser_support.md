---
title: HEVC - Browser Support
description: A file about HEVC and it's browser support.
---
As of *22nd of October, 2026*, major browsers  support playing back HEVC, like shown in this pic from [CanIUse.com](https://caniuse.com/hevc).
![[Pasted image 20261022101658.webp]]

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
[Chromium-based browsers as of late 2022](https://chromestatus.com/feature/5186511939567616) added support for hardware-accelerated HEVC decoding.

![[Pasted image 20240711184916.webp]]

*State of Chromium-based browser on Windows as of 11th of July, 2024*
# Firefox
[Firefox as of early 2025](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Video_codecs#hevc_h.265) added support for hardware and software HEVC decoders.

>[!quote] HEVC (H.265) - Browser Compatibility
>Firefox enables HEVC on:
>- Windows from Firefox 134 using either hardware (on devices that support it, where the range is the same as Edge) or software (on Windows the user must pay for and install an extension)
>- macOS from Firefox 136 using either hardware or software.
>- Linux from Firefox 137 using either hardware or software (via the system ffmpeg).
>- Android from Firefox 137 using hardware only.
>
>Source: [developer.mozilla.com](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Video_codecs#hevc_h.265:~:text=Firefox%20enables%20HEVC%20on%3A)

![[Pasted image 20240711184712.webp]]

*State of HEVC on Windows as of 11th of July, 2024*

# Conclusion
<video src="site_support_02_HEVC.mp4" autoplay muted loop></video>

:4ktroll: