# *Medium* Viable Startpage

![Screenshot](https://raw.githubusercontent.com/0-Tikaro/minimum-viable-startpage/master/docs/screenshot.png)

This is a startpage *that @0-Tikaro* put together on one lazy afternoon, which was then modified with a few extra features by me (@hozza). Cheers. :rocket:

### Goals of the modifications by @hozza
 - [x] TODO auto blur background image, ready for db
 - [ ] TODO search box
 - [ ] TODO local-storage db, for settings page
 - [ ] TODO locally-stored bookmarks
 - [ ] TODO flat-color and waves background option (source: https://tobias-schoch.github.io/startpage-wave/)

Local offline storage in browser will allow the user to change wallpaper, fonts, search engine and other options without coding or or forking a local copy. Once setup, the "*medium* viable startpage" can be offered statically buy Github Pages for all to use and customise privately.


## What is a startpage?
A startpage is a simple custom webpage that replaces the new tab, or homepage, page of your browser. It's usually done for aesthetics or efficiency.

Some great static-website startpages are offered open-source style over at <https://www.reddit.com/r/startpages/>.

## Shortcuts
This startpage supports keyboard shortcuts, no need to use the mouse anywhere! Great if you're more at-home in the terminal :nerd:.

<kbd>Tab</kbd>+<kbd>KEY</kbd> to open your links. 

<kbd>Tab</kbd> <!-- I never knew about the kbd HTML tag! @hozza --> is the *shortcut starter*, pressing tab will quickly flash a KEY shortcut next to each link, use that <kbd>Tab + KEY</kbd> to open the link.

## Customization
To change the groups of links and keyboard shortcuts, change the `MASTER_MAP` object inside `script.js`. The syntax should be extremely intuitive.

TODO fit the setting button and change the settings to store locally.

## Installation & Usage
To install this startpage and use it on your local machine, simply clone the repository and set your browser's new tab URL to the `index.html` filepath.

TODO load the startparge bu Github Pages URL and enter in your local settings, then save as your start page.

### Known Issues / Gotchas

- URL Changing: Your browser may not support changing new tab's URL natively. I use [New Tab Redirect](https://chrome.google.com/webstore/detail/new-tab-redirect/icpgjfneehieebagbmdbhnlpiopdcmna) extension for Chrome.*
- Blurred Backgrounds: Uses CSS `backdrop-filter` which is not officially supported in in Firefox version 70 this feature is behind the `layout.css.backdrop-filter.enabled` preference (needs to be set to true) and the `gfx.webrender.all` preference (needs to be set to true). To change preferences in Firefox, visit about:config.

## Credits

* [Wallpaper used for the background](https://wallpapercave.com/wp/VD8ldiL.jpg)
* Upstream ["Minimal Viable Startpage"](https://github.com/0-Tikaro/minimum-viable-startpage) was wonderfully produced and shared by @0-Tikaro"

