# Usage

1. Change into directory that has your videos.

2. Run this command

```
# change the env vars to your video names
docker run -it --rm -v $PWD:/videos -e VIDEO1=/videos/<your_first_video>.mp4 -e VIDEO2=/videos/<your_second_video>.mp4 rupamsaha/docker-video-psnr 
# e.g.
docker run -it --rm -v $PWD:/videos -e VIDEO1=/videos/video1.mp4 -e VIDEO2=/videos/video2.mp4 rupamsaha/docker-video-psnr
```
