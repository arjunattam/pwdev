(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{277:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return s})),t.d(a,"rightToc",(function(){return i})),t.d(a,"default",(function(){return p}));var n=t(2),r=t(6),o=(t(0),t(285)),c={id:"verification",title:"Verification"},s={unversionedId:"verification",id:"version-1.3.0/verification",isDocsHomePage:!1,title:"Verification",description:"- Videos",source:"@site/versioned_docs/version-1.3.0/verification.md",slug:"/verification",permalink:"/pwdev/docs/1.3.0/verification",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.3.0/verification.md",version:"1.3.0",sidebar:"version-1.3.0/docs",previous:{title:"Assertions",permalink:"/pwdev/docs/1.3.0/assertions"},next:{title:"Navigations",permalink:"/pwdev/docs/1.3.0/navigations"}},i=[{value:"Videos",id:"videos",children:[]},{value:"Screenshots",id:"screenshots",children:[]},{value:"Console logs",id:"console-logs",children:[]},{value:"Page errors",id:"page-errors",children:[]},{value:"Page events",id:"page-events",children:[]}],l={rightToc:i};function p(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},l,t,{components:a,mdxType:"MDXLayout"}),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"#videos"}),"Videos")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"#screenshots"}),"Screenshots")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"#console-logs"}),"Console logs")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"#page-errors"}),"Page errors")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"#page-events"}),"Page events"))),Object(o.a)("br",null),Object(o.a)("h2",{id:"videos"},"Videos"),Object(o.a)("p",null,"Playwright can record videos for all pages in a ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"/pwdev/docs/1.3.0/core-concepts#browser-contexts"}),"browser context"),". Videos are saved upon context closure, so make sure to await ",Object(o.a)("inlineCode",{parentName:"p"},"browserContext.close()"),"."),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// With browser.newContext()\nconst context = await browser.newContext({ recordVideo: { dir: 'videos/' } });\n// Make sure to await close, so that videos are saved.\nawait context.close();\n\n// With browser.newPage()\nconst page = await browser.newPage({ recordVideo: { dir: 'videos/' } });\n// Make sure to await close, so that videos are saved.\nawait page.close();\n\n// [Optional] Specify video size; defaults to viewport size\nconst context = await browser.newContext({\n  recordVideo: {\n    dir: 'videos/',\n    size: { width: 800, height: 600 },\n  }\n});\n")),Object(o.a)("h4",{id:"api-reference"},"API reference"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#class-browsercontext"}),"class ",Object(o.a)("inlineCode",{parentName:"a"},"BrowserContext"))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#browsernewcontextoptions"}),"browser.newContext([options])")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#browsernewpageoptions"}),"browser.newPage([options])")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#browsercontextclose"}),"browserContext.close()"))),Object(o.a)("h2",{id:"screenshots"},"Screenshots"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Save to file\nawait page.screenshot({ path: 'screenshot.png' });\n\n// Capture full page\nawait page.screenshot({ path: 'screenshot.png', fullPage: true });\n\n// Capture into buffer\nconst buffer = await page.screenshot();\nconsole.log(buffer.toString('base64'));\n\n// Capture given element\nconst elementHandle = await page.$('.header');\nawait elementHandle.screenshot({ path: 'screenshot.png' });\n")),Object(o.a)("h4",{id:"api-reference-1"},"API reference"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#pagescreenshotoptions"}),"page.screenshot([options])")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#elementhandlescreenshotoptions"}),"elementHandle.screenshot([options])"))),Object(o.a)("br",null),Object(o.a)("h2",{id:"console-logs"},"Console logs"),Object(o.a)("p",null,"Console messages logged in the page can be brought into the Node.js context."),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Listen for all console logs\npage.on('console', msg => console.log(msg.text()))\n\n// Listen for all console events and handle errors\npage.on('console', msg => {\n  if (msg.type() === 'error')\n    console.log(`Error text: \"${msg.text()}\"`);\n});\n\n// Get the next console log\nconst [msg] = await Promise.all([\n  page.waitForEvent('console'),\n  // Issue console.log inside the page\n  page.evaluate(() => {\n    console.log('hello', 42, { foo: 'bar' });\n  }),\n]);\n\n// Deconstruct console log arguments\nawait msg.args[0].jsonValue() // hello\nawait msg.args[1].jsonValue() // 42\n")),Object(o.a)("h4",{id:"api-reference-2"},"API reference"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#class-consolemessage"}),"class: ConsoleMessage")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#class-page"}),"class: Page")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#event-console"}),"event: 'console'"))),Object(o.a)("br",null),Object(o.a)("h2",{id:"page-errors"},"Page errors"),Object(o.a)("p",null,"Listen for uncaught exceptions in the page with the ",Object(o.a)("inlineCode",{parentName:"p"},"pagerror")," event."),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Log all uncaught errors to the terminal\npage.on('pageerror', exception => {\n  console.log(`Uncaught exception: \"${exception}\"`);\n});\n\n// Navigate to a page with an exception.\nawait page.goto('data:text/html,<script>throw new Error(\"Test\")<\/script>');\n")),Object(o.a)("h4",{id:"api-reference-3"},"API reference"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#class-page"}),"class: Page")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#event-pageerror"}),"event: 'pageerror'"))),Object(o.a)("br",null),Object(o.a)("h2",{id:"page-events"},"Page events"),Object(o.a)("h4",{id:"requestfailed"},Object(o.a)("inlineCode",{parentName:"h4"},'"requestfailed"')),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"page.on('requestfailed', request => {\n  console.log(request.url() + ' ' + request.failure().errorText);\n});\n")),Object(o.a)("h4",{id:"dialog---handle-alert-confirm-prompt"},Object(o.a)("inlineCode",{parentName:"h4"},'"dialog"')," - handle alert, confirm, prompt"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"page.on('dialog', dialog => {\n  dialog.accept();\n});\n")),Object(o.a)("h4",{id:"popup---handle-popup-windows"},Object(o.a)("inlineCode",{parentName:"h4"},'"popup"')," - handle popup windows"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const [popup] = await Promise.all([\n  page.waitForEvent('popup'),\n  page.click('#open')\n]);\n")),Object(o.a)("h4",{id:"api-reference-4"},"API reference"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#class-page"}),"class: Page")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#event-requestfailed"}),"event: 'requestfailed'")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#event-dialog"}),"event: 'dialog'")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#event-popup"}),"event: 'popup'"))))}p.isMDXComponent=!0},285:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var n=t(0),r=t.n(n);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var a=r.a.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},b={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(t),u=n,O=d["".concat(c,".").concat(u)]||d[u]||b[u]||o;return t?r.a.createElement(O,s(s({ref:a},l),{},{components:t})):r.a.createElement(O,s({ref:a},l))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=d;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var l=2;l<o;l++)c[l]=t[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);