# Memories of '66 touchscreen video installation

This repo contains the code for running the video installation. Videos need to be sourced through Tim Brunsden.

## Basic requirements

This application uses HTML5, and runs in a web browser. I recommend using Google Chrome – get it at http://google.com/chrome

_N.B. if the Windows machine you’re installing on doesn’t have an Internet connection, [use this link](https://www.google.com/intl/en/chrome/browser/desktop/index.html?standalone=1) on another machine to get a standalone installer._

## Setup

1. In Control Panel, set the screen resolution to 720p (1280x720), which is what all of the content is scaled for.
2. Drag and drop the ‘66installation’ folder to a memorable place (e.g. C:\Users\Public\)
3. Inside this a three notable directories: ‘screen1’, ‘screen2’, and ‘screen3’ (which refer to ‘Boys of 66, ‘Tournament stories’, and ‘Behind the scenes’, respectively.
4. Open the ‘index.html’ file of the relevant screen, and copy the address from the address bar to an empty Notepad document.
5. In the same document, type in --chrome --kiosk --app="address you copied earlier goes in between these quotes"
6. Next, open Task Scheduler (you can search for this in the Start menu)
7. On the right-hand side, create a new task
8. Under ‘Triggers’, create a new trigger to execute when the user logs on
9. Under actions, make sure it’s set to open a program, and browser to Chrome in ‘Program Files (x86)’
10. For the additional arguments box beneath this, paste in what you’ve got in Notepad
11. In my experience, ‘--kiosk’ doesn’t always work from the task scheduler (although it does work in the Windows command line) so you may need to hit F11 to fullscreen it. If you then use Alt-F4 to close the program, it should remember that it was fullscreen, and do that every time! Failing that, you can ditch the ‘app=‘ argument and use the menu to the right of the address bar to manually fullscreen Chrome once it starts.

## Notes

- All the videos and video thumbnails are labelled based on the order of the videos from left to right. The naming convention for them is _vid_**screenNumber**-**videoNumber**_.mp4_ and **screenNumber**-**videoNumber**_.png_

- Videos need to be in MP4 format and at 720p.
