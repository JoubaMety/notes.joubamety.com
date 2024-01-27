---
title: FFprobe
---
# Description
**FFprobe** (ffprobe) is a command-line tool that gathers information from multimedia streams and prints it in human- and machine-readable fashion.
* For example it can be used to check the format of the container used by a multimedia stream and the format and type of each media stream contained in it.
* If a url is specified in input, ffprobe will try to open and probe the url content. If the url cannot be opened or recognized as a multimedia file, a positive exit code is returned.
* If no output is specified as output with o ffprobe will write to stdout.

ffprobe may be employed both as a standalone application or in combination with a textual filter, which may perform more sophisticated processing, e.g. statistical processing or plotting.

Options are used to list some of the formats supported by ffprobe or for specifying which information to display, and for setting how ffprobe will show it.

ffprobe output is designed to be easily parsable by a textual filter, and consists of one or more sections of a form defined by the selected writer, which is specified by the output_format option.

Sections may contain other nested sections, and are identified by a name (which may be shared by other sections), and an unique name. See the output of sections.

Metadata tags stored in the container or in the streams are recognized and printed in the corresponding "FORMAT", "STREAM" or "PROGRAM_STREAM" section.

Source: [ffmpeg.org](https://www.ffmpeg.org/ffprobe.html)

# Examples
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
