(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{231:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),i=a(6),r=(a(0),a(285)),l={id:"click",title:"Supported click scenarios"},o={unversionedId:"development/click",id:"development/click",isDocsHomePage:!1,title:"Supported click scenarios",description:"Supported click scenarios",source:"@site/docs/development/click.md",slug:"/development/click",permalink:"/pwdev/docs/next/development/click",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/development/click.md",version:"current"},c=[{value:"Supported click scenarios",id:"supported-click-scenarios",children:[{value:"Positioning",id:"positioning",children:[]},{value:"Dynamic changes",id:"dynamic-changes",children:[]},{value:"Targeting",id:"targeting",children:[]}]},{value:"Unsupported click scenarios",id:"unsupported-click-scenarios",children:[{value:"Positioning",id:"positioning-1",children:[]},{value:"Dynamic changes",id:"dynamic-changes-1",children:[]},{value:"Targeting",id:"targeting-1",children:[]}]}],s={rightToc:c};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("h2",{id:"supported-click-scenarios"},"Supported click scenarios"),Object(r.a)("p",null,"These are some of the corner cases that Playwright aims to support."),Object(r.a)("h3",{id:"positioning"},"Positioning"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"Element is outside of the viewport."),Object(r.a)("pre",{parentName:"li"},Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<div style="height: 2000px;">Some content</div>\n<button>Click me</button>\n')),Object(r.a)("p",{parentName:"li"},"Playwright scrolls the element into the viewport if at all possible.")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"Empty element with non-empty pseudo."),Object(r.a)("pre",{parentName:"li"},Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),"<style>span::before { content: 'q'; }</style>\n<span></span>\n")),Object(r.a)("p",{parentName:"li"},"Playwright retrieves the actual visible regions of the target element and clicks at the pseudo.")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"Some part of the element is always outside of the viewport."),Object(r.a)("pre",{parentName:"li"},Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),"<style> i { position: absolute; top: -1000px; } </style>\n<span><i>one</i><b>two</b></span>\n")),Object(r.a)("p",{parentName:"li"},"Playwright retrieves the actual visible regions of the target element and clicks at the visible part.")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"Inline element is wrapped to the next line."),Object(r.a)("p",{parentName:"li"},"Playwright retrieves the actual visible regions of the target element and clicks at one of the inline boxes.")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"Element is rotated with transform."),Object(r.a)("pre",{parentName:"li"},Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<button style="transform: rotate(50deg);">Click me</button>\n')),Object(r.a)("p",{parentName:"li"},"Playwright retrieve the actual visible regions of the target element and clicks at the transformed visible point.")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"Element is deep inside the iframes and/or shadow dom."),Object(r.a)("p",{parentName:"li"},"Playwright just clicks it."))),Object(r.a)("h3",{id:"dynamic-changes"},"Dynamic changes"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"Element appears dynamically using display or visibility."),Object(r.a)("pre",{parentName:"li"},Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),"<button style=\"display: none\">Click me</button>\n<script>\n  setTimeout(() => document.querySelector('button').style.display = 'inline', 5000);\n<\/script>\n")),Object(r.a)("p",{parentName:"li"},"Playwright waits for the element to be visible before clicking.")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"Element is animating in."),Object(r.a)("pre",{parentName:"li"},Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<style>\n@keyframes move { from { marign-left: 0; } to { margin-left: 100px; } }\n</style>\n<button style="animation: 3s linear move forwards;">Click me</button>\n')),Object(r.a)("p",{parentName:"li"},"Playwright waits for the element to stop moving before clicking.")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"Another element is temporary obscuring the target element."),Object(r.a)("pre",{parentName:"li"},Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),"<style>\n  .overlay {\n    position: absolute;\n    left: 0; top: 0; right: 0; bottom: 0;\n    background: rgba(128, 128, 128, 0.5);\n    transition: opacity 1s;\n  }\n</style>\n<div style=\"position: relative;\">\n  <button>Click me</button>\n  <div class=overlay></div>\n</div>\n<script>\n  const div = document.querySelector('.overlay');\n  div.addEventListener('click', () => {\n    div.style.opacity ='0';\n    setTimeout(() => { div.remove(); }, 1000);\n  });\n<\/script>\n")),Object(r.a)("p",{parentName:"li"},"For example, the dialog is dismissed and is slowly fading out. Playwright waits for the obscuring element to disappear.\nMore precisely, it waits for the target element to actually receive pointer events.")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"Element is replaced with another one after animation."),Object(r.a)("pre",{parentName:"li"},Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),"<style>\n@keyframes move { from { marign-left: 0; } to { margin-left: 100px; } }\n</style>\n<button style=\"animation: 3s linear move forwards;\">Click me</button>\n<script>\nsetTimeout(() => {\n  const button = document.createElement('button');\n  button.textContent = 'Click me';\n  document.querySelector('button').replaceWith(button);\n}, 2500);\n<\/script>\n")),Object(r.a)("p",{parentName:"li"},"Playwright waits for the element to be at a stable position, detects that it has been removed from the DOM and retries."))),Object(r.a)("h3",{id:"targeting"},"Targeting"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"Element has ",Object(r.a)("inlineCode",{parentName:"p"},"pointer-events: none"),"."),Object(r.a)("pre",{parentName:"li"},Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<label style="pointer-events:none">Click target</label>\n')),Object(r.a)("p",{parentName:"li"},"Playwright will wait until ",Object(r.a)("inlineCode",{parentName:"p"},"pointer-events: none")," goes away or times out. However, if the element is inside of a ",Object(r.a)("inlineCode",{parentName:"p"},"<button>")," tag, Playwright will\nwait until the button can accept pointer events."),Object(r.a)("pre",{parentName:"li"},Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<button style="pointer-events: none">\n  <label>Click target</label>\n</button>\n')))),Object(r.a)("h2",{id:"unsupported-click-scenarios"},"Unsupported click scenarios"),Object(r.a)("p",null,"Some scenarios here are marked as a bug in the web page - we believe that the page should be fixed because the real user will suffer the same issue. Playwright tries to throw when it's possible to detect the issue or timeout otherwise."),Object(r.a)("p",null,"Other scenarios are perfectly fine, but Playwright cannot support them, and we usually suggest another way to handle. If Playwright logic does not work on your page, passing ",Object(r.a)("inlineCode",{parentName:"p"},"{force: true}")," option to the click will force the click without any checks. Use it when you know that's what you need."),Object(r.a)("h3",{id:"positioning-1"},"Positioning"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"Element moves outside of the viewport in onscroll."),Object(r.a)("pre",{parentName:"li"},Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),"<div style=\"height: 2000px;\">Some content</div>\n<button>Click me</button>\n<script>\nwindow.addEventListener('scroll', () => {\n  window.h = (window.h || 2000) + 200;\n  document.querySelector('div').style.height = window.h + 'px';\n});\n<\/script>\n")),Object(r.a)("p",{parentName:"li"},"Playwright throws, considering this a bug in the page."))),Object(r.a)("h3",{id:"dynamic-changes-1"},"Dynamic changes"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"Element is constantly animating."),Object(r.a)("pre",{parentName:"li"},Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<style>\n@keyframes move { from { marign-left: 0; } to { margin-left: 100px; } }\n200px; } }\n</style>\n<button style="animation: 3s linear move infinite;">Click me</button>\n')),Object(r.a)("p",{parentName:"li"},"Playwright waits for the element to be at a stable position and times out. A real user would be able to click in some cases.")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"Element is animating in, but temporarily pauses in the middle."),Object(r.a)("pre",{parentName:"li"},Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<style>\n@keyframes move { 0% { marign-left: 0; } 25% { margin-left: 100px; } 50% { margin-left: 100px;} 100% { margin-left: 200px; } }\n</style>\n<button style="animation: 3s linear move forwards;">Click me</button>\n')),Object(r.a)("p",{parentName:"li"},"Playwright clicks in the middle of the animation and could actually click at the wrong element. Playwright does not detect this case and does not throw. A real user would probably retry and click again.")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"Element is removed or hidden after ",Object(r.a)("inlineCode",{parentName:"p"},"fetch")," / ",Object(r.a)("inlineCode",{parentName:"p"},"xhr")," / ",Object(r.a)("inlineCode",{parentName:"p"},"setTimeout"),"."),Object(r.a)("pre",{parentName:"li"},Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),"<button>Click me</button>\n<script>\nfetch(location.href).then(() => document.querySelector('button').remove());\n<\/script>\n")),Object(r.a)("p",{parentName:"li"},"Playwright clicks the element, and might be able to misclick because it is already hidden. Playwright does not detect this case and does not throw."),Object(r.a)("p",{parentName:"li"},'This is a typical flaky failure, because the network fetch is racing against the input driven by Playwright. We suggest to wait for the response to arrive, and click after that. For example, consider a filtered list with an "Apply filters" button that fetches new data, removes all items from the list and inserts new ones.'),Object(r.a)("pre",{parentName:"li"},Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await Promise.all([\n  // This click triggers network fetch racing with next click.\n  page.click('text=Apply filters'),\n  // This waits for the network response to arrive.\n  page.waitForResponse('**/filtered?*'),\n]);\n// Safe to click now, because network response has been processed\n// and items in the list have been updated.\nawait page.click('.list-item');\n")))),Object(r.a)("h3",{id:"targeting-1"},"Targeting"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"A transparent overlay handles the input targeted at the content behind it."),Object(r.a)("pre",{parentName:"li"},Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<div style="position: relative;">\n  <span>Click me</span>\n  <div style="position: absolute; left: 0; top: 0; right: 0; bottom: 0" onclick="..."></div>\n</div>\n')),Object(r.a)("p",{parentName:"li"},"Playwright considers the overlay temporary and times out while waiting for the overlay to disappear.\nWhen the overlay element is actually handling the input instead of the target element, use ",Object(r.a)("inlineCode",{parentName:"p"},"{force: true}")," option to skip the checks and click anyway.")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"Hover handler creates an overlay."),Object(r.a)("pre",{parentName:"li"},Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<style>\n  .overlay { display: none; }\n  .container:hover > .overlay { display: block; }\n</style>\n<div class=container style="position: relative;">\n  <button>Click me</button>\n  <div class=overlay style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; background: red"></div>\n</div>\n')),Object(r.a)("p",{parentName:"li"},"We consider this a bug in the page, because in most circumstances users will not be able to click the element.\nWhen the overlay element is actually handling the input instead of the target element, use ",Object(r.a)("inlineCode",{parentName:"p"},"{force: true}")," option to skip the checks and click anyway."))))}p.isMDXComponent=!0},285:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,d=b["".concat(l,".").concat(u)]||b[u]||m[u]||r;return a?i.a.createElement(d,o(o({ref:t},s),{},{components:a})):i.a.createElement(d,o({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);