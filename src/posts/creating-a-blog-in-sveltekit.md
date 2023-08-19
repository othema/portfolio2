---
title: Pure CSS GUI icons
image: /img/me_large3.jpg
description: An experiment that uses pseudo-elements to create 84 simple GUI icons using CSS and semantic HTML. Shared as an exercise in creative problem solving and working within constraints. This is not a “production ready” CSS icon set.
date: 19-08-2023
tags:
  - SvelteKit
  - Blog
---

**Demo**: [Pure CSS GUI icons](https://google.com)

*Known support*: Firefox 3.5+, Safari 5+, Chrome 5+, Opera 10.6+.

# An exercise in constraint
Several months ago I was experimenting with the creation of common GUI icons with CSS. The HTML is very simple and it relies on CSS pseudo-elements rather than extraneous HTML elements. The technical aspects of this exercise might be of interest to others, so I’ve decided to share it.

![Image](https://picsum.photos/600/300)

Pseudo-elements provide many possibilities to developers interested in enhancing existing semantic HTML.

# Example code
The technique behind this experiment is an expansion of the basic shape-creation that was used to make Pure CSS speech bubbles. Some of these GUI icons can only be created in browsers that support CSS3 transforms.

The HTML is a basic unordered list of links.
```html
<ul>
  <li class="power"><a href="#non">Power</a></li>
  <li class="play"><a href="#non">Play</a></li>
  <li class="stop"><a href="#non">Stop</a></li>
  <li class="pause"><a href="#non">Pause</a></li>
</ul>
```
Each icon uses its own set of styles. For example, the key parts of the CSS responsible for the “expand” icon are as follows:
```css
.expand a:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 1px;
  width: 5px;
  height: 0;
  border-width: 7px 7px 0;
  border-style: solid;
  border-color: transparent #c55500;
  margin-top: -4px;
  /* css3 */
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.expand a:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 5px;
  width: 8px;
  height: 8px;
  border-width: 3px 0 0 3px;
  border-style: solid;
  border-color: #c55500;
  margin-top: -6px;
}

.expand a:hover:before,
.expand a:focus:before,
.expand a:active:before {
  border-color: transparent #730800;
}

.expand a:hover:after,
.expand a:focus:after,
.expand a:active:after {
  border-color: #730800;
}
```
The [demo page](https://google.com) contains a full set of user interaction and media player control icons, as well as other common icons. For now, several icons actually require more than one element as CSS 2.1 only specifies 2 pseudo-elements per element that can contain generated content. The CSS3 Generated and Replaced Content Module allows for an unlimited number of pseudo-elements but has yet to be fully implemented in any modern browser
