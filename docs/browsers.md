# Supported browsers

Playwright enables testing web apps in all modern browsers. Modern browsers today
are built on open source web platform implementations that implement web specs. The HTML/CSS/JavaScript of your applications is rendered by these platform implementations.

* `chromium`: For Google Chrome and Microsoft Edge
* `firefox`: For Mozilla Firefox
* `webkit`: For Apple Safari

Stock browsers add propritary media codecs and add browser level features like
bookmarks sync, inject browser extensions.

By default, Playwright ships browser binaries for these web platform
implementations. Shipping

Playwright provides a single API to automate all modern browsers. This includes
Chromium-based browsers like **Google Chrome** and the new **Microsoft Edge**,
WebKit-based **Apple Safari** and the Gecko-based **Mozilla Firefox**.

Stock browsers like Google Chrome, Apple Safari embed rendering engines (Chromium, WebKit) and add stuff on top of them. In particular, they add proprietary media codecs, inject browser extensions, etc. They also add surrounding interfaces such as bookmarks sync. But they reuse the underlying web platform implementation.

Design principles
* Enable wide range of APIs
* Provide them today

compatibility test suite of a thousand tests uniformly against Chromium, WebKit & Firefox

That's a relatively small price to pay for a modern and capable testing solution we deliver today

Outline
- we support all modern browsers today
- design decisions: support everything, and make it available today
- how it works
  - we ship a browser binary
  - the browser binary is 

Questions to answer
- difference between our firefox and pptr firefox
- what is the difference between webkit and safari

* versions
* reference: web platform implemnetation, rendering engines, stock brwoseres
* full firefox vs small

https://github.com/microsoft/playwright/issues/1765
https://stackoverflow.com/questions/62184117/what-is-the-difference-between-testing-on-safari-vs-webkit/62205535#62205535

<!-- GEN:toc-top-level -->
- [Chromium](#chromium)
- [Firefox](#firefox)
- [WebKit](#webkit)
<!-- GEN:stop -->

## Chromium

Chromium is the open source web platform implementation used by Google Chrome, Opera, Microsoft Edge and other browsers. It implements web specs, renders content, works with network, etc. Playwright uses a stock Chromium build that can be automated with the Playwright API for e2e testing.

For Google Chrome things are simple: Chromium is a safe target to test, modulo proprietary media codecs and DRM. You can point Playwright against stock Chrome Canary or Edge Canary to use proprietary media codecs.

### Run against stock browsers
To test for media codecs
- steps for chromium and edge
- use canary builds

## Firefox 
Juggler 

Path to unpatched binary: Firefox is adding support for CDP and we 

## WebKit
WebKit is the web platform implementation

### Cross-platform support
With 