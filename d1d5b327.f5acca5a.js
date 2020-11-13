(window.webpackJsonp=window.webpackJsonp||[]).push([[443],{499:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return b}));var a=r(2),n=r(6),o=(r(0),r(608)),c={id:"class-chromiumbrowsercontext",title:"class: ChromiumBrowserContext"},i={unversionedId:"api/class-chromiumbrowsercontext",id:"version-1.5.2/api/class-chromiumbrowsercontext",isDocsHomePage:!1,title:"class: ChromiumBrowserContext",description:"* extends: [BrowserContext]",source:"@site/versioned_docs/version-1.5.2/api/class-chromiumbrowsercontext.md",slug:"/api/class-chromiumbrowsercontext",permalink:"/pwdev/docs/1.5.2/api/class-chromiumbrowsercontext",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.5.2/api/class-chromiumbrowsercontext.md",version:"1.5.2",sidebar:"version-1.5.2/api",previous:{title:"class: ChromiumBrowser",permalink:"/pwdev/docs/1.5.2/api/class-chromiumbrowser"},next:{title:"class: ChromiumCoverage",permalink:"/pwdev/docs/1.5.2/api/class-chromiumcoverage"}},s=[{value:"event: &#39;backgroundpage&#39;",id:"event-backgroundpage",children:[]},{value:"event: &#39;serviceworker&#39;",id:"event-serviceworker",children:[]},{value:"chromiumBrowserContext.backgroundPages()",id:"chromiumbrowsercontextbackgroundpages",children:[]},{value:"chromiumBrowserContext.newCDPSession(page)",id:"chromiumbrowsercontextnewcdpsessionpage",children:[]},{value:"chromiumBrowserContext.serviceWorkers()",id:"chromiumbrowsercontextserviceworkers",children:[]}],l={rightToc:s};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.a)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"extends: ","[BrowserContext]")),Object(o.a)("p",null,"Chromium-specific features including background pages, service worker support, etc."),Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const backgroundPage = await context.waitForEvent('backgroundpage');\n")),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#event-backgroundpage"}),"event: 'backgroundpage'")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#event-serviceworker"}),"event: 'serviceworker'")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#chromiumbrowsercontextbackgroundpages"}),"chromiumBrowserContext.backgroundPages()")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#chromiumbrowsercontextnewcdpsessionpage"}),"chromiumBrowserContext.newCDPSession(page)")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#chromiumbrowsercontextserviceworkers"}),"chromiumBrowserContext.serviceWorkers()")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#event-close"}),"event: 'close'")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#event-page"}),"event: 'page'")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#browsercontextaddcookiescookies"}),"browserContext.addCookies(cookies)")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#browsercontextaddinitscriptscript-arg"}),"browserContext.addInitScript(script[, arg])")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#browsercontextbrowser"}),"browserContext.browser()")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#browsercontextclearcookies"}),"browserContext.clearCookies()")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#browsercontextclearpermissions"}),"browserContext.clearPermissions()")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#browsercontextclose"}),"browserContext.close()")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#browsercontextcookiesurls"}),"browserContext.cookies([urls])")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#browsercontextexposebindingname-playwrightbinding-options"}),"browserContext.exposeBinding(name, playwrightBinding[, options])")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#browsercontextexposefunctionname-playwrightfunction"}),"browserContext.exposeFunction(name, playwrightFunction)")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#browsercontextgrantpermissionspermissions-options"}),"browserContext.grantPermissions(permissions[][, options])")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#browsercontextnewpage"}),"browserContext.newPage()")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#browsercontextpages"}),"browserContext.pages()")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#browsercontextrouteurl-handler"}),"browserContext.route(url, handler)")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#browsercontextsetdefaultnavigationtimeouttimeout"}),"browserContext.setDefaultNavigationTimeout(timeout)")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#browsercontextsetdefaulttimeouttimeout"}),"browserContext.setDefaultTimeout(timeout)")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#browsercontextsetextrahttpheadersheaders"}),"browserContext.setExtraHTTPHeaders(headers)")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#browsercontextsetgeolocationgeolocation"}),"browserContext.setGeolocation(geolocation)")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#browsercontextsethttpcredentialshttpcredentials"}),"browserContext.setHTTPCredentials(httpCredentials)")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#browsercontextsetofflineoffline"}),"browserContext.setOffline(offline)")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#browsercontextunrouteurl-handler"}),"browserContext.unroute(url[, handler])")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#browsercontextwaitforeventevent-optionsorpredicate"}),"browserContext.waitForEvent(event[, optionsOrPredicate])"))),Object(o.a)("h2",{id:"event-backgroundpage"},"event: 'backgroundpage'"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"<","[Page]",">")),Object(o.a)("p",null,"Emitted when new background page is created in the context."),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},Object(o.a)("strong",{parentName:"p"},"NOTE")," Only works with persistent context.")),Object(o.a)("h2",{id:"event-serviceworker"},"event: 'serviceworker'"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"<","[Worker]",">")),Object(o.a)("p",null,"Emitted when new service worker is created in the context."),Object(o.a)("h2",{id:"chromiumbrowsercontextbackgroundpages"},"chromiumBrowserContext.backgroundPages()"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"returns: <","[Array]","<","[Page]",">> All existing background pages in the context.")),Object(o.a)("h2",{id:"chromiumbrowsercontextnewcdpsessionpage"},"chromiumBrowserContext.newCDPSession(page)"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"page")," <","[Page]","> Page to create new session for."),Object(o.a)("li",{parentName:"ul"},"returns: <","[Promise]","<","[CDPSession]",">> Promise that resolves to the newly created session.")),Object(o.a)("h2",{id:"chromiumbrowsercontextserviceworkers"},"chromiumBrowserContext.serviceWorkers()"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"returns: <","[Array]","<","[Worker]",">> All existing service workers in the context.")))}b.isMDXComponent=!0},608:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),b=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(r),m=a,O=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return r?n.a.createElement(O,i(i({ref:t},l),{},{components:r})):n.a.createElement(O,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);