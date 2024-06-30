![made-with-react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![made-with-tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)


<!-- LOGO -->
<br />
<h1>
<p align="center">
  <img src="https://raw.githubusercontent.com/marquesag/proxyease/main/public/images/prxease-logo.png" width="280px">
  
</h1>
  <p align="center">
    A Chrome extension developed based on Manifest V3 to connect to proxies in various countries and obtain user information.
    <br />
    </p>
</p>

![gif](https://raw.githubusercontent.com/marquesag/proxyease/main/public/images/prxease-demo.gif)
<p align="center">
  <a href="#about-the-project">About The Project</a> •
  <a href="#usage">How To Use</a> •
  <a href="#examples">Examples</a> •
  <a href="#best-practice">Best Practice</a> •
  <a href="#credits">Credits</a> •
  <a href="examples.md">More Examples</a>
</p>  

<p align="center">
 
</p>                                                                                                                             
                                                                                                                                                      
## About The Project
📜 This Chrome extension is a UI prototype, meticulously developed using React JS and Tailwind JS. 
1. It operates seamlessly under [Chrome's V3 manifest](https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3), demonstrating exceptional integration and performance. 

![screenshot](https://raw.githubusercontent.com/marquesag/proxyease/main/public/images/cover.jpg)

1. As soon, i might integrate public proxies.
2. To provide a seamless user experience, this extension exemplifies the power of modern web development frameworks.

✍ ✨The prototype developed by me in Figma is [available here](https://www.figma.com/community/file/1383629443351683238/proxyease-browser-extension)

## Pre-requisites
- Install [Node.js](https://nodejs.org/en/) **v20.15.0** with long-term support.
## Getting started
- Clone the repository
```
git clone https://github.com/marquesag/proxyease.git
```
- Install dependencies
```
npm i
```
- Build and run the project
```
npm run build
```
💡 The files will be built in`/dist`

## Usage
In any `chrome-based` browser go to: [chrome://extensions](chrome://extensions)
1. Turn on  `Developer mode`
1. Click on  `Load unpacked` to upload

>  Remember that the files were saved in `/dist`📁

4. Go to the project folder and upload `dist 📁`

After the steps above, you should see something like `this` above.

![screenshot](https://raw.githubusercontent.com/marquesag/proxyease/main/public/images/pxease_extensions.png)

 - [ ] I can see the loaded extension and its icon in the browser header.

👍 After this, **enjoy!**

## Examples
```py
from google.colab import drive
drive.mount('/gdrive', force_remount=False)
import os
!wget -q https://raw.githubusercontent.com/L0garithmic/fastcolabcopy/main/fastcopy.py
import fastcopy
!python fastcopy.py /gdrive/Shareddrives/Source/. /gdrive/Shareddrives/Destination --thread 20 --size-limit 400mb
```
If you want to see copy execution time:
```mod
!pip install -q ipython-autotime
%load_ext autotime
```
Check out <a href="examples.md">examples.md</a> for some more examples.

## Credits
- Credit to [ikonikon](https://github.com/ikonikon/fast-copy) for the base multi-threading code.   
- Thanks to [@Ostokhoon](https://www.freelancer.com/u/Ostokhoon) for ALL argument and folder hierarchy functionality.
