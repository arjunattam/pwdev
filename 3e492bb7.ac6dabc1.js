(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{119:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),i=a(6),r=(a(0),a(285)),o={id:"class-browser",title:"class: Browser"},l={unversionedId:"api/class-browser",id:"version-1.4.0/api/class-browser",isDocsHomePage:!1,title:"class: Browser",description:"* extends: EventEmitter",source:"@site/versioned_docs/version-1.4.0/api/class-browser.md",slug:"/api/class-browser",permalink:"/pwdev/docs/api/class-browser",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.4.0/api/class-browser.md",version:"1.4.0",sidebar:"version-1.4.0/api",previous:{title:"Playwright module",permalink:"/pwdev/docs/api/playwright-module"},next:{title:"class: BrowserContext",permalink:"/pwdev/docs/api/class-browsercontext"}},c=[{value:"event: &#39;disconnected&#39;",id:"event-disconnected",children:[]},{value:"browser.close()",id:"browserclose",children:[]},{value:"browser.contexts()",id:"browsercontexts",children:[]},{value:"browser.isConnected()",id:"browserisconnected",children:[]},{value:"browser.newContext(options)",id:"browsernewcontextoptions",children:[]},{value:"browser.newPage(options)",id:"browsernewpageoptions",children:[]},{value:"browser.version()",id:"browserversion",children:[]}],s={rightToc:c};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"extends: ",Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"https://nodejs.org/api/events.html#events_class_eventemitter"}),"EventEmitter"))),Object(r.a)("p",null,"A Browser is created when Playwright connects to a browser instance, either through ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"#browsertypelaunchoptions"}),Object(r.a)("inlineCode",{parentName:"a"},"browserType.launch"))," or ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"#browsertypeconnectoptions"}),Object(r.a)("inlineCode",{parentName:"a"},"browserType.connect")),"."),Object(r.a)("p",null,"An example of using a ","[Browser]"," to create a ","[Page]",":"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { firefox } = require('playwright');  // Or 'chromium' or 'webkit'.\n\n(async () => {\n  const browser = await firefox.launch();\n  const page = await browser.newPage();\n  await page.goto('https://example.com');\n  await browser.close();\n})();\n")),Object(r.a)("p",null,"See ","[ChromiumBrowser]",", ","[FirefoxBrowser]"," and ","[WebKitBrowser]"," for browser-specific features. Note that ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"#browsertypeconnectoptions"}),"browserType.connect(options)")," and ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"#browsertypelaunchoptions"}),"browserType.launch([options])")," always return a specific browser instance, based on the browser being connected to or launched."),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#event-disconnected"}),"event: 'disconnected'")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#browserclose"}),"browser.close()")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#browsercontexts"}),"browser.contexts()")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#browserisconnected"}),"browser.isConnected()")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#browsernewcontextoptions"}),"browser.newContext([options])")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#browsernewpageoptions"}),"browser.newPage([options])")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#browserversion"}),"browser.version()"))),Object(r.a)("h2",{id:"event-disconnected"},"event: 'disconnected'"),Object(r.a)("p",null,"Emitted when Browser gets disconnected from the browser application. This might happen because of one of the following:"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"Browser application is closed or crashed."),Object(r.a)("li",{parentName:"ul"},"The ",Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#browserclose"}),Object(r.a)("inlineCode",{parentName:"a"},"browser.close"))," method was called.")),Object(r.a)("h2",{id:"browserclose"},"browser.close()"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"returns: <","[Promise]",">")),Object(r.a)("p",null,"In case this browser is obtained using ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"#browsertypelaunchoptions"}),"browserType.launch"),", closes the browser and all of its pages (if any were opened)."),Object(r.a)("p",null,"In case this browser is obtained using ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"#browsertypeconnectoptions"}),"browserType.connect"),", clears all created contexts belonging to this browser and disconnects from the browser server."),Object(r.a)("p",null,"The ","[Browser]"," object itself is considered to be disposed and cannot be used anymore."),Object(r.a)("h2",{id:"browsercontexts"},"browser.contexts()"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"returns: <","[Array]","<","[BrowserContext]",">>")),Object(r.a)("p",null,"Returns an array of all open browser contexts. In a newly created browser, this will return zero\nbrowser contexts."),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const browser = await pw.webkit.launch();\nconsole.log(browser.contexts().length); // prints `0`\n\nconst context = await browser.newContext();\nconsole.log(browser.contexts().length); // prints `1`\n")),Object(r.a)("h2",{id:"browserisconnected"},"browser.isConnected()"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"returns: <","[boolean]",">")),Object(r.a)("p",null,"Indicates that the browser is connected."),Object(r.a)("h2",{id:"browsernewcontextoptions"},"browser.newContext(","[options]",")"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"options")," <","[Object]",">",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"acceptDownloads")," <","[boolean]","> Whether to automatically download all the attachments. Defaults to ",Object(r.a)("inlineCode",{parentName:"li"},"false")," where all the downloads are canceled."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"ignoreHTTPSErrors")," <","[boolean]","> Whether to ignore HTTPS errors during navigation. Defaults to ",Object(r.a)("inlineCode",{parentName:"li"},"false"),"."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"bypassCSP")," <","[boolean]","> Toggles bypassing page's Content-Security-Policy."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"viewport")," <","[null]","|","[Object]","> Sets a consistent viewport for each page. Defaults to an 1280x720 viewport. ",Object(r.a)("inlineCode",{parentName:"li"},"null")," disables the default viewport.",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"width")," <","[number]","> page width in pixels."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"height")," <","[number]","> page height in pixels."))),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"userAgent")," <","[string]","> Specific user agent to use in this context."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"deviceScaleFactor")," <","[number]","> Specify device scale factor (can be thought of as dpr). Defaults to ",Object(r.a)("inlineCode",{parentName:"li"},"1"),"."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"isMobile")," <","[boolean]","> Whether the ",Object(r.a)("inlineCode",{parentName:"li"},"meta viewport")," tag is taken into account and touch events are enabled. Defaults to ",Object(r.a)("inlineCode",{parentName:"li"},"false"),". Not supported in Firefox."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"hasTouch")," <","[boolean]","> Specifies if viewport supports touch events. Defaults to false."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"javaScriptEnabled")," <","[boolean]","> Whether or not to enable JavaScript in the context. Defaults to true."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"timezoneId")," <","[string]","> Changes the timezone of the context. See ",Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"https://cs.chromium.org/chromium/src/third_party/icu/source/data/misc/metaZones.txt?rcl=faee8bc70570192d82d2978a71e2a615788597d1"}),"ICU\u2019s ",Object(r.a)("inlineCode",{parentName:"a"},"metaZones.txt"))," for a list of supported timezone IDs."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"geolocation")," <","[Object]",">",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"latitude")," <","[number]","> Latitude between -90 and 90."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"longitude")," <","[number]","> Longitude between -180 and 180."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"accuracy")," <","[number]","> Non-negative accuracy value. Defaults to ",Object(r.a)("inlineCode",{parentName:"li"},"0"),"."))),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"locale")," <","[string]","> Specify user locale, for example ",Object(r.a)("inlineCode",{parentName:"li"},"en-GB"),", ",Object(r.a)("inlineCode",{parentName:"li"},"de-DE"),", etc. Locale will affect ",Object(r.a)("inlineCode",{parentName:"li"},"navigator.language")," value, ",Object(r.a)("inlineCode",{parentName:"li"},"Accept-Language")," request header value as well as number and date formatting rules."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"permissions")," <","[Array]","<","[string]",">> A list of permissions to grant to all pages in this context. See ",Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#browsercontextgrantpermissionspermissions-options"}),"browserContext.grantPermissions")," for more details."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"extraHTTPHeaders")," <","[Object]","<","[string]",", ","[string]",">> An object containing additional HTTP headers to be sent with every request. All header values must be strings."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"offline")," <","[boolean]","> Whether to emulate network being offline. Defaults to ",Object(r.a)("inlineCode",{parentName:"li"},"false"),"."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"httpCredentials")," <","[Object]","> Credentials for ",Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication"}),"HTTP authentication"),".",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"username")," <","[string]",">"),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"password")," <","[string]",">"))),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"colorScheme"),' <"light"|"dark"|"no-preference"> Emulates ',Object(r.a)("inlineCode",{parentName:"li"},"'prefers-colors-scheme'")," media feature, supported values are ",Object(r.a)("inlineCode",{parentName:"li"},"'light'"),", ",Object(r.a)("inlineCode",{parentName:"li"},"'dark'"),", ",Object(r.a)("inlineCode",{parentName:"li"},"'no-preference'"),". See ",Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#pageemulatemediaoptions"}),"page.emulateMedia(options)")," for more details. Defaults to '",Object(r.a)("inlineCode",{parentName:"li"},"light"),"'."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"logger")," <","[Logger]","> Logger sink for Playwright logging."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"proxy")," <","[Object]","> Network proxy settings to use with this context. Note that browser needs to be launched with the global proxy for this option to work. If all contexts override the proxy, global proxy will be never used and can be any string, for example ",Object(r.a)("inlineCode",{parentName:"li"},"launch({ proxy: { server: 'per-context' } })"),".",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"server")," <","[string]","> Proxy to be used for all requests. HTTP and SOCKS proxies are supported, for example ",Object(r.a)("inlineCode",{parentName:"li"},"http://myproxy.com:3128")," or ",Object(r.a)("inlineCode",{parentName:"li"},"socks5://myproxy.com:3128"),". Short form ",Object(r.a)("inlineCode",{parentName:"li"},"myproxy.com:3128")," is considered an HTTP proxy."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"bypass")," <","[string]","> Optional coma-separated domains to bypass proxy, for example ",Object(r.a)("inlineCode",{parentName:"li"},'".com, chromium.org, .domain.com"'),"."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"username")," <","[string]","> Optional username to use if HTTP proxy requires authentication."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"password")," <","[string]","> Optional password to use if HTTP proxy requires authentication."))),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"videosPath")," <","[string]","> ",Object(r.a)("strong",{parentName:"li"},"NOTE")," Use ",Object(r.a)("inlineCode",{parentName:"li"},"recordVideo")," instead, it takes precedence over ",Object(r.a)("inlineCode",{parentName:"li"},"videosPath"),". Enables video recording for all pages to ",Object(r.a)("inlineCode",{parentName:"li"},"videosPath")," directory. If not specified, videos are not recorded. Make sure to await ",Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#browsercontextclose"}),Object(r.a)("inlineCode",{parentName:"a"},"browserContext.close"))," for videos to be saved."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"videoSize")," <","[Object]","> ",Object(r.a)("strong",{parentName:"li"},"NOTE")," Use ",Object(r.a)("inlineCode",{parentName:"li"},"recordVideo")," instead, it takes precedence over ",Object(r.a)("inlineCode",{parentName:"li"},"videoSize"),". Specifies dimensions of the automatically recorded video. Can only be used if ",Object(r.a)("inlineCode",{parentName:"li"},"videosPath")," is set. If not specified the size will be equal to ",Object(r.a)("inlineCode",{parentName:"li"},"viewport"),". If ",Object(r.a)("inlineCode",{parentName:"li"},"viewport")," is not configured explicitly the video size defaults to 1280x720. Actual picture of the page will be scaled down if necessary to fit specified size.",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"width")," <","[number]","> Video frame width."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"height")," <","[number]","> Video frame height."))),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"recordHar")," <","[Object]","> Enables ",Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"http://www.softwareishard.com/blog/har-12-spec"}),"HAR")," recording for all pages into ",Object(r.a)("inlineCode",{parentName:"li"},"recordHar.path")," file. If not specified, the HAR is not recorded. Make sure to await ",Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#browsercontextclose"}),Object(r.a)("inlineCode",{parentName:"a"},"browserContext.close"))," for the HAR to be saved.",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"omitContent")," <","[boolean]","> Optional setting to control whether to omit request content from the HAR. Defaults to ",Object(r.a)("inlineCode",{parentName:"li"},"false"),"."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"path")," <","[string]","> Path on the filesystem to write the HAR file to."))),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"recordVideo")," <","[Object]","> Enables video recording for all pages into ",Object(r.a)("inlineCode",{parentName:"li"},"recordVideo.dir")," directory. If not specified videos are not recorded. Make sure to await ",Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#browsercontextclose"}),Object(r.a)("inlineCode",{parentName:"a"},"browserContext.close"))," for videos to be saved.",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"dir")," <","[string]","> Path to the directory to put videos into."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"size")," <","[Object]","> Optional dimensions of the recorded videos. If not specified the size will be equal to ",Object(r.a)("inlineCode",{parentName:"li"},"viewport"),". If ",Object(r.a)("inlineCode",{parentName:"li"},"viewport")," is not configured explicitly the video size defaults to 1280x720. Actual picture of each page will be scaled down if necessary to fit the specified size.",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"width")," <","[number]","> Video frame width."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"height")," <","[number]","> Video frame height."))))))),Object(r.a)("li",{parentName:"ul"},"returns: <","[Promise]","<","[BrowserContext]",">>")),Object(r.a)("p",null,"Creates a new browser context. It won't share cookies/cache with other browser contexts."),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"(async () => {\n  const browser = await playwright.firefox.launch();  // Or 'chromium' or 'webkit'.\n  // Create a new incognito browser context.\n  const context = await browser.newContext();\n  // Create a new page in a pristine context.\n  const page = await context.newPage();\n  await page.goto('https://example.com');\n})();\n")),Object(r.a)("h2",{id:"browsernewpageoptions"},"browser.newPage(","[options]",")"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"options")," <","[Object]",">",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"acceptDownloads")," <","[boolean]","> Whether to automatically download all the attachments. Defaults to ",Object(r.a)("inlineCode",{parentName:"li"},"false")," where all the downloads are canceled."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"ignoreHTTPSErrors")," <","[boolean]","> Whether to ignore HTTPS errors during navigation. Defaults to ",Object(r.a)("inlineCode",{parentName:"li"},"false"),"."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"bypassCSP")," <","[boolean]","> Toggles bypassing page's Content-Security-Policy."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"viewport")," <","[null]","|","[Object]","> Sets a consistent viewport for each page. Defaults to an 1280x720 viewport. ",Object(r.a)("inlineCode",{parentName:"li"},"null")," disables the default viewport.",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"width")," <","[number]","> page width in pixels."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"height")," <","[number]","> page height in pixels."))),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"userAgent")," <","[string]","> Specific user agent to use in this context."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"deviceScaleFactor")," <","[number]","> Specify device scale factor (can be thought of as dpr). Defaults to ",Object(r.a)("inlineCode",{parentName:"li"},"1"),"."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"isMobile")," <","[boolean]","> Whether the ",Object(r.a)("inlineCode",{parentName:"li"},"meta viewport")," tag is taken into account and touch events are enabled. Defaults to ",Object(r.a)("inlineCode",{parentName:"li"},"false"),". Not supported in Firefox."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"hasTouch")," <","[boolean]","> Specifies if viewport supports touch events. Defaults to false."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"javaScriptEnabled")," <","[boolean]","> Whether or not to enable JavaScript in the context. Defaults to ",Object(r.a)("inlineCode",{parentName:"li"},"true"),"."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"timezoneId")," <","[string]","> Changes the timezone of the context. See ",Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"https://cs.chromium.org/chromium/src/third_party/icu/source/data/misc/metaZones.txt?rcl=faee8bc70570192d82d2978a71e2a615788597d1"}),"ICU\u2019s ",Object(r.a)("inlineCode",{parentName:"a"},"metaZones.txt"))," for a list of supported timezone IDs."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"geolocation")," <","[Object]",">",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"latitude")," <","[number]","> Latitude between -90 and 90."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"longitude")," <","[number]","> Longitude between -180 and 180."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"accuracy")," <","[number]","> Non-negative accuracy value. Defaults to ",Object(r.a)("inlineCode",{parentName:"li"},"0"),"."))),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"locale")," <","[string]","> Specify user locale, for example ",Object(r.a)("inlineCode",{parentName:"li"},"en-GB"),", ",Object(r.a)("inlineCode",{parentName:"li"},"de-DE"),", etc. Locale will affect ",Object(r.a)("inlineCode",{parentName:"li"},"navigator.language")," value, ",Object(r.a)("inlineCode",{parentName:"li"},"Accept-Language")," request header value as well as number and date formatting rules."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"permissions")," <","[Array]","<","[string]",">> A list of permissions to grant to all pages in this context. See ",Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#browsercontextgrantpermissionspermissions-options"}),"browserContext.grantPermissions")," for more details."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"extraHTTPHeaders")," <","[Object]","<","[string]",", ","[string]",">> An object containing additional HTTP headers to be sent with every request. All header values must be strings."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"offline")," <","[boolean]","> Whether to emulate network being offline. Defaults to ",Object(r.a)("inlineCode",{parentName:"li"},"false"),"."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"httpCredentials")," <","[Object]","> Credentials for ",Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication"}),"HTTP authentication"),".",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"username")," <","[string]",">"),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"password")," <","[string]",">"))),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"colorScheme"),' <"light"|"dark"|"no-preference"> Emulates ',Object(r.a)("inlineCode",{parentName:"li"},"'prefers-colors-scheme'")," media feature, supported values are ",Object(r.a)("inlineCode",{parentName:"li"},"'light'"),", ",Object(r.a)("inlineCode",{parentName:"li"},"'dark'"),", ",Object(r.a)("inlineCode",{parentName:"li"},"'no-preference'"),". See ",Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#pageemulatemediaoptions"}),"page.emulateMedia(options)")," for more details. Defaults to '",Object(r.a)("inlineCode",{parentName:"li"},"light"),"'."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"logger")," <","[Logger]","> Logger sink for Playwright logging."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"proxy")," <","[Object]","> Network proxy settings to use with this context. Note that browser needs to be launched with the global proxy for this option to work. If all contexts override the proxy, global proxy will be never used and can be any string, for example ",Object(r.a)("inlineCode",{parentName:"li"},"launch({ proxy: { server: 'per-context' } })"),".",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"server")," <","[string]","> Proxy to be used for all requests. HTTP and SOCKS proxies are supported, for example ",Object(r.a)("inlineCode",{parentName:"li"},"http://myproxy.com:3128")," or ",Object(r.a)("inlineCode",{parentName:"li"},"socks5://myproxy.com:3128"),". Short form ",Object(r.a)("inlineCode",{parentName:"li"},"myproxy.com:3128")," is considered an HTTP proxy."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"bypass")," <","[string]","> Optional coma-separated domains to bypass proxy, for example ",Object(r.a)("inlineCode",{parentName:"li"},'".com, chromium.org, .domain.com"'),"."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"username")," <","[string]","> Optional username to use if HTTP proxy requires authentication."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"password")," <","[string]","> Optional password to use if HTTP proxy requires authentication."))),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"videosPath")," <","[string]","> ",Object(r.a)("strong",{parentName:"li"},"NOTE")," Use ",Object(r.a)("inlineCode",{parentName:"li"},"recordVideo")," instead, it takes precedence over ",Object(r.a)("inlineCode",{parentName:"li"},"videosPath"),". Enables video recording for all pages to ",Object(r.a)("inlineCode",{parentName:"li"},"videosPath")," directory. If not specified, videos are not recorded. Make sure to await ",Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#pagecloseoptions"}),Object(r.a)("inlineCode",{parentName:"a"},"page.close"))," for videos to be saved."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"videoSize")," <","[Object]","> ",Object(r.a)("strong",{parentName:"li"},"NOTE")," Use ",Object(r.a)("inlineCode",{parentName:"li"},"recordVideo")," instead, it takes precedence over ",Object(r.a)("inlineCode",{parentName:"li"},"videoSize"),". Specifies dimensions of the automatically recorded video. Can only be used if ",Object(r.a)("inlineCode",{parentName:"li"},"videosPath")," is set. If not specified the size will be equal to ",Object(r.a)("inlineCode",{parentName:"li"},"viewport"),". If ",Object(r.a)("inlineCode",{parentName:"li"},"viewport")," is not configured explicitly the video size defaults to 1280x720. Actual picture of the page will be scaled down if necessary to fit specified size.",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"width")," <","[number]","> Video frame width."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"height")," <","[number]","> Video frame height."))),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"recordHar")," <","[Object]","> Enables ",Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"http://www.softwareishard.com/blog/har-12-spec"}),"HAR")," recording for all pages into ",Object(r.a)("inlineCode",{parentName:"li"},"recordHar.path")," file. If not specified, the HAR is not recorded. Make sure to await ",Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#pagecloseoptions"}),Object(r.a)("inlineCode",{parentName:"a"},"page.close"))," for the HAR to be saved.",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"omitContent")," <","[boolean]","> Optional setting to control whether to omit request content from the HAR. Defaults to ",Object(r.a)("inlineCode",{parentName:"li"},"false"),"."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"path")," <","[string]","> Path on the filesystem to write the HAR file to."))),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"recordVideo")," <","[Object]","> Enables video recording for all pages into ",Object(r.a)("inlineCode",{parentName:"li"},"recordVideo.dir")," directory. If not specified videos are not recorded. Make sure to await ",Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#pagecloseoptions"}),Object(r.a)("inlineCode",{parentName:"a"},"page.close"))," for videos to be saved.",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"dir")," <","[string]","> Path to the directory to put videos into."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"size")," <","[Object]","> Optional dimensions of the recorded videos. If not specified the size will be equal to ",Object(r.a)("inlineCode",{parentName:"li"},"viewport"),". If ",Object(r.a)("inlineCode",{parentName:"li"},"viewport")," is not configured explicitly the video size defaults to 1280x720. Actual picture of each page will be scaled down if necessary to fit the specified size.",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"width")," <","[number]","> Video frame width."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"height")," <","[number]","> Video frame height."))))))),Object(r.a)("li",{parentName:"ul"},"returns: <","[Promise]","<","[Page]",">>")),Object(r.a)("p",null,"Creates a new page in a new browser context. Closing this page will close the context as well."),Object(r.a)("p",null,"This is a convenience API that should only be used for the single-page scenarios and short snippets. Production code and testing frameworks should explicitly create ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"#browsernewcontextoptions"}),"browser.newContext")," followed by the ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"#browsercontextnewpage"}),"browserContext.newPage")," to control their exact life times."),Object(r.a)("h2",{id:"browserversion"},"browser.version()"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"returns: <","[string]",">")),Object(r.a)("p",null,"Returns the browser version."))}p.isMDXComponent=!0},285:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,u=d["".concat(o,".").concat(m)]||d[m]||b[m]||r;return a?i.a.createElement(u,l(l({ref:t},s),{},{components:a})):i.a.createElement(u,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);