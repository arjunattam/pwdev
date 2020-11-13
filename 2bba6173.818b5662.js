(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),o=(n(0),n(608)),s={id:"class-cdpsession",title:"class: CDPSession"},c={unversionedId:"api/class-cdpsession",id:"version-1.5.2/api/class-cdpsession",isDocsHomePage:!1,title:"class: CDPSession",description:"* extends: EventEmitter",source:"@site/versioned_docs/version-1.5.2/api/class-cdpsession.md",slug:"/api/class-cdpsession",permalink:"/pwdev/docs/1.5.2/api/class-cdpsession",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.5.2/api/class-cdpsession.md",version:"1.5.2",sidebar:"version-1.5.2/api",previous:{title:"class: ChromiumCoverage",permalink:"/pwdev/docs/1.5.2/api/class-chromiumcoverage"},next:{title:"class: FirefoxBrowser",permalink:"/pwdev/docs/1.5.2/api/class-firefoxbrowser"}},i=[{value:"cdpSession.detach()",id:"cdpsessiondetach",children:[]},{value:"cdpSession.send(method, params)",id:"cdpsessionsendmethod-params",children:[]}],l={rightToc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"extends: ",Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"https://nodejs.org/api/events.html#events_class_eventemitter"}),"EventEmitter"))),Object(o.a)("p",null,"The ",Object(o.a)("inlineCode",{parentName:"p"},"CDPSession")," instances are used to talk raw Chrome Devtools Protocol:"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"protocol methods can be called with ",Object(o.a)("inlineCode",{parentName:"li"},"session.send")," method."),Object(o.a)("li",{parentName:"ul"},"protocol events can be subscribed to with ",Object(o.a)("inlineCode",{parentName:"li"},"session.on")," method.")),Object(o.a)("p",null,"Useful links:"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"Documentation on DevTools Protocol can be found here: ",Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"https://chromedevtools.github.io/devtools-protocol/"}),"DevTools Protocol Viewer"),"."),Object(o.a)("li",{parentName:"ul"},"Getting Started with DevTools Protocol: ",Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/aslushnikov/getting-started-with-cdp/blob/master/README.md"}),"https://github.com/aslushnikov/getting-started-with-cdp/blob/master/README.md"))),Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const client = await page.context().newCDPSession(page);\nawait client.send('Animation.enable');\nclient.on('Animation.animationCreated', () => console.log('Animation created!'));\nconst response = await client.send('Animation.getPlaybackRate');\nconsole.log('playback rate is ' + response.playbackRate);\nawait client.send('Animation.setPlaybackRate', {\n  playbackRate: response.playbackRate / 2\n});\n")),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#cdpsessiondetach"}),"cdpSession.detach()")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#cdpsessionsendmethod-params"}),"cdpSession.send(method[, params])"))),Object(o.a)("h2",{id:"cdpsessiondetach"},"cdpSession.detach()"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"returns: <","[Promise]",">")),Object(o.a)("p",null,"Detaches the CDPSession from the target. Once detached, the CDPSession object won't emit any events and can't be used\nto send messages."),Object(o.a)("h2",{id:"cdpsessionsendmethod-params"},"cdpSession.send(method","[, params]",")"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"method")," <","[string]","> protocol method name"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"params")," <","[Object]","> Optional method parameters"),Object(o.a)("li",{parentName:"ul"},"returns: <","[Promise]","<","[Object]",">>")))}p.isMDXComponent=!0},608:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,b=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?r.a.createElement(b,c(c({ref:t},l),{},{components:n})):r.a.createElement(b,c({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);