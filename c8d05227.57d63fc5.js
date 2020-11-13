(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{234:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return p}));var a=t(2),n=t(6),o=(t(0),t(285)),i={id:"class-chromiumbrowser",title:"class: ChromiumBrowser"},c={unversionedId:"api/class-chromiumbrowser",id:"api/class-chromiumbrowser",isDocsHomePage:!1,title:"class: ChromiumBrowser",description:"* extends: [Browser]",source:"@site/docs/api/class-chromiumbrowser.md",slug:"/api/class-chromiumbrowser",permalink:"/pwdev/docs/next/api/class-chromiumbrowser",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/class-chromiumbrowser.md",version:"current",sidebar:"api",previous:{title:"class: Logger",permalink:"/pwdev/docs/next/api/class-logger"},next:{title:"class: ChromiumBrowserContext",permalink:"/pwdev/docs/next/api/class-chromiumbrowsercontext"}},s=[{value:"chromiumBrowser.newBrowserCDPSession()",id:"chromiumbrowsernewbrowsercdpsession",children:[]},{value:"chromiumBrowser.startTracing(page, options)",id:"chromiumbrowserstarttracingpage-options",children:[]},{value:"chromiumBrowser.stopTracing()",id:"chromiumbrowserstoptracing",children:[]}],l={rightToc:s};function p(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(o.a)("wrapper",Object(a.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"extends: ","[Browser]")),Object(o.a)("p",null,"Chromium-specific features including Tracing, service worker support, etc.\nYou can use ",Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"#chromiumbrowserstarttracingpage-options"}),Object(o.a)("inlineCode",{parentName:"a"},"chromiumBrowser.startTracing"))," and ",Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"#chromiumbrowserstoptracing"}),Object(o.a)("inlineCode",{parentName:"a"},"chromiumBrowser.stopTracing"))," to create a trace file which can be opened in Chrome DevTools or ",Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"https://chromedevtools.github.io/timeline-viewer/"}),"timeline viewer"),"."),Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"await browser.startTracing(page, {path: 'trace.json'});\nawait page.goto('https://www.google.com');\nawait browser.stopTracing();\n")),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#chromiumbrowsernewbrowsercdpsession"}),"chromiumBrowser.newBrowserCDPSession()")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#chromiumbrowserstarttracingpage-options"}),"chromiumBrowser.startTracing([page, options])")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#chromiumbrowserstoptracing"}),"chromiumBrowser.stopTracing()")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#event-disconnected"}),"event: 'disconnected'")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#browserclose"}),"browser.close()")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#browsercontexts"}),"browser.contexts()")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#browserisconnected"}),"browser.isConnected()")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#browsernewcontextoptions"}),"browser.newContext([options])")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#browsernewpageoptions"}),"browser.newPage([options])")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#browserversion"}),"browser.version()"))),Object(o.a)("h2",{id:"chromiumbrowsernewbrowsercdpsession"},"chromiumBrowser.newBrowserCDPSession()"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"returns: <","[Promise]","<","[CDPSession]",">> Promise that resolves to the newly created browser\nsession.")),Object(o.a)("h2",{id:"chromiumbrowserstarttracingpage-options"},"chromiumBrowser.startTracing(","[page, options]",")"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"page")," <","[Page]","> Optional, if specified, tracing includes screenshots of the given page."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"options")," <","[Object]",">",Object(o.a)("ul",{parentName:"li"},Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"path")," <","[string]","> A path to write the trace file to."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"screenshots")," <","[boolean]","> captures screenshots in the trace."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"categories")," <","[Array]","<","[string]",">> specify custom categories to use instead of default."))),Object(o.a)("li",{parentName:"ul"},"returns: <","[Promise]",">")),Object(o.a)("p",null,"Only one trace can be active at a time per browser."),Object(o.a)("h2",{id:"chromiumbrowserstoptracing"},"chromiumBrowser.stopTracing()"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"returns: <","[Promise]","<","[Buffer]",">> Promise which resolves to buffer with trace data.")))}p.isMDXComponent=!0},285:function(e,r,t){"use strict";t.d(r,"a",(function(){return b}));var a=t(0),n=t.n(a);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=n.a.createContext({}),p=function(e){var r=n.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},u=n.a.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),b=a,w=u["".concat(i,".").concat(b)]||u[b]||m[b]||o;return t?n.a.createElement(w,c(c({ref:r},l),{},{components:t})):n.a.createElement(w,c({ref:r},l))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);