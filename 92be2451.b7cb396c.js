(window.webpackJsonp=window.webpackJsonp||[]).push([[312],{370:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),i=(a(0),a(608)),o={id:"class-browser",title:"class: Browser"},l={unversionedId:"api/class-browser",id:"version-1.3.0/api/class-browser",isDocsHomePage:!1,title:"class: Browser",description:"* extends: EventEmitter",source:"@site/versioned_docs/version-1.3.0/api/class-browser.md",slug:"/api/class-browser",permalink:"/pwdev/docs/1.3.0/api/class-browser",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.3.0/api/class-browser.md",version:"1.3.0",sidebar:"version-1.3.0/api",previous:{title:"Playwright module",permalink:"/pwdev/docs/1.3.0/api/playwright-module"},next:{title:"class: BrowserContext",permalink:"/pwdev/docs/1.3.0/api/class-browsercontext"}},c=[{value:"event: &#39;disconnected&#39;",id:"event-disconnected",children:[]},{value:"browser.close()",id:"browserclose",children:[]},{value:"browser.contexts()",id:"browsercontexts",children:[]},{value:"browser.isConnected()",id:"browserisconnected",children:[]},{value:"browser.newContext(options)",id:"browsernewcontextoptions",children:[]},{value:"browser.newPage(options)",id:"browsernewpageoptions",children:[]},{value:"browser.version()",id:"browserversion",children:[]}],s={rightToc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"extends: ",Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://nodejs.org/api/events.html#events_class_eventemitter"}),"EventEmitter"))),Object(i.a)("p",null,"A Browser is created when Playwright connects to a browser instance, either through ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"#browsertypelaunchoptions"}),Object(i.a)("inlineCode",{parentName:"a"},"browserType.launch"))," or ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"#browsertypeconnectoptions"}),Object(i.a)("inlineCode",{parentName:"a"},"browserType.connect")),"."),Object(i.a)("p",null,"An example of using a ","[Browser]"," to create a ","[Page]",":"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { firefox } = require('playwright');  // Or 'chromium' or 'webkit'.\n\n(async () => {\n  const browser = await firefox.launch();\n  const page = await browser.newPage();\n  await page.goto('https://example.com');\n  await browser.close();\n})();\n")),Object(i.a)("p",null,"See ","[ChromiumBrowser]",", ","[FirefoxBrowser]"," and ","[WebKitBrowser]"," for browser-specific features. Note that ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"#browsertypeconnectoptions"}),"browserType.connect(options)")," and ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"#browsertypelaunchoptions"}),"browserType.launch([options])")," always return a specific browser instance, based on the browser being connected to or launched."),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#event-disconnected"}),"event: 'disconnected'")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#browserclose"}),"browser.close()")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#browsercontexts"}),"browser.contexts()")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#browserisconnected"}),"browser.isConnected()")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#browsernewcontextoptions"}),"browser.newContext([options])")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#browsernewpageoptions"}),"browser.newPage([options])")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#browserversion"}),"browser.version()"))),Object(i.a)("h2",{id:"event-disconnected"},"event: 'disconnected'"),Object(i.a)("p",null,"Emitted when Browser gets disconnected from the browser application. This might happen because of one of the following:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Browser application is closed or crashed."),Object(i.a)("li",{parentName:"ul"},"The ",Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#browserclose"}),Object(i.a)("inlineCode",{parentName:"a"},"browser.close"))," method was called.")),Object(i.a)("h2",{id:"browserclose"},"browser.close()"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"returns: <","[Promise]",">")),Object(i.a)("p",null,"In case this browser is obtained using ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"#browsertypelaunchoptions"}),"browserType.launch"),", closes the browser and all of its pages (if any were opened)."),Object(i.a)("p",null,"In case this browser is obtained using ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"#browsertypeconnectoptions"}),"browserType.connect"),", clears all created contexts belonging to this browser and disconnects from the browser server."),Object(i.a)("p",null,"The ","[Browser]"," object itself is considered to be disposed and cannot be used anymore."),Object(i.a)("h2",{id:"browsercontexts"},"browser.contexts()"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"returns: <","[Array]","<","[BrowserContext]",">>")),Object(i.a)("p",null,"Returns an array of all open browser contexts. In a newly created browser, this will return zero\nbrowser contexts."),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const browser = await pw.webkit.launch();\nconsole.log(browser.contexts().length); // prints `0`\n\nconst context = await browser.newContext();\nconsole.log(browser.contexts().length); // prints `1`\n")),Object(i.a)("h2",{id:"browserisconnected"},"browser.isConnected()"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"returns: <","[boolean]",">")),Object(i.a)("p",null,"Indicates that the browser is connected."),Object(i.a)("h2",{id:"browsernewcontextoptions"},"browser.newContext(","[options]",")"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"options")," <","[Object]",">",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"acceptDownloads")," <","[boolean]","> Whether to automatically download all the attachments. Defaults to ",Object(i.a)("inlineCode",{parentName:"li"},"false")," where all the downloads are canceled."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"ignoreHTTPSErrors")," <","[boolean]","> Whether to ignore HTTPS errors during navigation. Defaults to ",Object(i.a)("inlineCode",{parentName:"li"},"false"),"."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"bypassCSP")," <","[boolean]","> Toggles bypassing page's Content-Security-Policy."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"viewport")," <?","[Object]","> Sets a consistent viewport for each page. Defaults to an 1280x720 viewport. ",Object(i.a)("inlineCode",{parentName:"li"},"null")," disables the default viewport.",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"width")," <","[number]","> page width in pixels."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"height")," <","[number]","> page height in pixels."))),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"userAgent")," <","[string]","> Specific user agent to use in this context."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"deviceScaleFactor")," <","[number]","> Specify device scale factor (can be thought of as dpr). Defaults to ",Object(i.a)("inlineCode",{parentName:"li"},"1"),"."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"isMobile")," <","[boolean]","> Whether the ",Object(i.a)("inlineCode",{parentName:"li"},"meta viewport")," tag is taken into account and touch events are enabled. Defaults to ",Object(i.a)("inlineCode",{parentName:"li"},"false"),". Not supported in Firefox."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"hasTouch")," <","[boolean]","> Specifies if viewport supports touch events. Defaults to false."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"javaScriptEnabled")," <","[boolean]","> Whether or not to enable JavaScript in the context. Defaults to true."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"timezoneId")," <","[string]","> Changes the timezone of the context. See ",Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://cs.chromium.org/chromium/src/third_party/icu/source/data/misc/metaZones.txt?rcl=faee8bc70570192d82d2978a71e2a615788597d1"}),"ICU\u2019s ",Object(i.a)("inlineCode",{parentName:"a"},"metaZones.txt"))," for a list of supported timezone IDs."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"geolocation")," <","[Object]",">",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"latitude")," <","[number]","> Latitude between -90 and 90."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"longitude")," <","[number]","> Longitude between -180 and 180."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"accuracy")," <","[number]","> Non-negative accuracy value. Defaults to ",Object(i.a)("inlineCode",{parentName:"li"},"0"),"."))),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"locale")," <","[string]","> Specify user locale, for example ",Object(i.a)("inlineCode",{parentName:"li"},"en-GB"),", ",Object(i.a)("inlineCode",{parentName:"li"},"de-DE"),", etc. Locale will affect ",Object(i.a)("inlineCode",{parentName:"li"},"navigator.language")," value, ",Object(i.a)("inlineCode",{parentName:"li"},"Accept-Language")," request header value as well as number and date formatting rules."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"permissions")," <","[Array]","<","[string]",">> A list of permissions to grant to all pages in this context. See ",Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#browsercontextgrantpermissionspermissions-options"}),"browserContext.grantPermissions")," for more details."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"extraHTTPHeaders")," <","[Object]","<","[string]",", ","[string]",">> An object containing additional HTTP headers to be sent with every request. All header values must be strings."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"offline")," <","[boolean]","> Whether to emulate network being offline. Defaults to ",Object(i.a)("inlineCode",{parentName:"li"},"false"),"."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"httpCredentials")," <","[Object]","> Credentials for ",Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication"}),"HTTP authentication"),".",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"username")," <","[string]",">"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"password")," <","[string]",">"))),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"colorScheme"),' <"light"|"dark"|"no-preference"> Emulates ',Object(i.a)("inlineCode",{parentName:"li"},"'prefers-colors-scheme'")," media feature, supported values are ",Object(i.a)("inlineCode",{parentName:"li"},"'light'"),", ",Object(i.a)("inlineCode",{parentName:"li"},"'dark'"),", ",Object(i.a)("inlineCode",{parentName:"li"},"'no-preference'"),". See ",Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#pageemulatemediaoptions"}),"page.emulateMedia(options)")," for more details. Defaults to '",Object(i.a)("inlineCode",{parentName:"li"},"light"),"'."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"logger")," <","[Logger]","> Logger sink for Playwright logging."))),Object(i.a)("li",{parentName:"ul"},"returns: <","[Promise]","<","[BrowserContext]",">>")),Object(i.a)("p",null,"Creates a new browser context. It won't share cookies/cache with other browser contexts."),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"(async () => {\n  const browser = await playwright.firefox.launch();  // Or 'chromium' or 'webkit'.\n  // Create a new incognito browser context.\n  const context = await browser.newContext();\n  // Create a new page in a pristine context.\n  const page = await context.newPage();\n  await page.goto('https://example.com');\n})();\n")),Object(i.a)("h2",{id:"browsernewpageoptions"},"browser.newPage(","[options]",")"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"options")," <","[Object]",">",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"acceptDownloads")," <","[boolean]","> Whether to automatically download all the attachments. Defaults to ",Object(i.a)("inlineCode",{parentName:"li"},"false")," where all the downloads are canceled."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"ignoreHTTPSErrors")," <","[boolean]","> Whether to ignore HTTPS errors during navigation. Defaults to ",Object(i.a)("inlineCode",{parentName:"li"},"false"),"."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"bypassCSP")," <","[boolean]","> Toggles bypassing page's Content-Security-Policy."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"viewport")," <?","[Object]","> Sets a consistent viewport for each page. Defaults to an 1280x720 viewport. ",Object(i.a)("inlineCode",{parentName:"li"},"null")," disables the default viewport.",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"width")," <","[number]","> page width in pixels."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"height")," <","[number]","> page height in pixels."))),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"userAgent")," <","[string]","> Specific user agent to use in this context."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"deviceScaleFactor")," <","[number]","> Specify device scale factor (can be thought of as dpr). Defaults to ",Object(i.a)("inlineCode",{parentName:"li"},"1"),"."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"isMobile")," <","[boolean]","> Whether the ",Object(i.a)("inlineCode",{parentName:"li"},"meta viewport")," tag is taken into account and touch events are enabled. Defaults to ",Object(i.a)("inlineCode",{parentName:"li"},"false"),". Not supported in Firefox."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"hasTouch")," <","[boolean]","> Specifies if viewport supports touch events. Defaults to false."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"javaScriptEnabled")," <","[boolean]","> Whether or not to enable JavaScript in the context. Defaults to ",Object(i.a)("inlineCode",{parentName:"li"},"true"),"."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"timezoneId")," <","[string]","> Changes the timezone of the context. See ",Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://cs.chromium.org/chromium/src/third_party/icu/source/data/misc/metaZones.txt?rcl=faee8bc70570192d82d2978a71e2a615788597d1"}),"ICU\u2019s ",Object(i.a)("inlineCode",{parentName:"a"},"metaZones.txt"))," for a list of supported timezone IDs."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"geolocation")," <","[Object]",">",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"latitude")," <","[number]","> Latitude between -90 and 90."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"longitude")," <","[number]","> Longitude between -180 and 180."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"accuracy")," <","[number]","> Non-negative accuracy value. Defaults to ",Object(i.a)("inlineCode",{parentName:"li"},"0"),"."))),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"locale")," <","[string]","> Specify user locale, for example ",Object(i.a)("inlineCode",{parentName:"li"},"en-GB"),", ",Object(i.a)("inlineCode",{parentName:"li"},"de-DE"),", etc. Locale will affect ",Object(i.a)("inlineCode",{parentName:"li"},"navigator.language")," value, ",Object(i.a)("inlineCode",{parentName:"li"},"Accept-Language")," request header value as well as number and date formatting rules."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"permissions")," <","[Array]","<","[string]",">> A list of permissions to grant to all pages in this context. See ",Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#browsercontextgrantpermissionspermissions-options"}),"browserContext.grantPermissions")," for more details."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"extraHTTPHeaders")," <","[Object]","<","[string]",", ","[string]",">> An object containing additional HTTP headers to be sent with every request. All header values must be strings."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"offline")," <","[boolean]","> Whether to emulate network being offline. Defaults to ",Object(i.a)("inlineCode",{parentName:"li"},"false"),"."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"httpCredentials")," <","[Object]","> Credentials for ",Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication"}),"HTTP authentication"),".",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"username")," <","[string]",">"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"password")," <","[string]",">"))),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"colorScheme"),' <"light"|"dark"|"no-preference"> Emulates ',Object(i.a)("inlineCode",{parentName:"li"},"'prefers-colors-scheme'")," media feature, supported values are ",Object(i.a)("inlineCode",{parentName:"li"},"'light'"),", ",Object(i.a)("inlineCode",{parentName:"li"},"'dark'"),", ",Object(i.a)("inlineCode",{parentName:"li"},"'no-preference'"),". See ",Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#pageemulatemediaoptions"}),"page.emulateMedia(options)")," for more details. Defaults to '",Object(i.a)("inlineCode",{parentName:"li"},"light"),"'."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"logger")," <","[Logger]","> Logger sink for Playwright logging."))),Object(i.a)("li",{parentName:"ul"},"returns: <","[Promise]","<","[Page]",">>")),Object(i.a)("p",null,"Creates a new page in a new browser context. Closing this page will close the context as well."),Object(i.a)("p",null,"This is a convenience API that should only be used for the single-page scenarios and short snippets. Production code and testing frameworks should explicitly create ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"#browsernewcontextoptions"}),"browser.newContext")," followed by the ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"#browsercontextnewpage"}),"browserContext.newPage")," to control their exact life times."),Object(i.a)("h2",{id:"browserversion"},"browser.version()"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"returns: <","[string]",">")),Object(i.a)("p",null,"Returns the browser version."))}p.isMDXComponent=!0},608:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||i;return a?r.a.createElement(d,l(l({ref:t},s),{},{components:a})):r.a.createElement(d,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);