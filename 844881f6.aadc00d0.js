(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{331:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return c})),t.d(a,"rightToc",(function(){return l})),t.d(a,"default",(function(){return p}));var n=t(2),r=t(6),o=(t(0),t(608)),i={id:"network",title:"Network"},c={unversionedId:"network",id:"version-1.5.2/network",isDocsHomePage:!1,title:"Network",description:"Playwright provides APIs to monitor and modify network traffic, both HTTP and HTTPS.",source:"@site/versioned_docs/version-1.5.2/network.md",slug:"/network",permalink:"/pwdev/docs/1.5.2/network",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.5.2/network.md",version:"1.5.2",sidebar:"version-1.5.2/docs",previous:{title:"Device and environment emulation",permalink:"/pwdev/docs/1.5.2/emulation"},next:{title:"Assertions",permalink:"/pwdev/docs/1.5.2/assertions"}},l=[{value:"HTTP Authentication",id:"http-authentication",children:[]},{value:"Handle file downloads",id:"handle-file-downloads",children:[]},{value:"Network events",id:"network-events",children:[]},{value:"Handle requests",id:"handle-requests",children:[]},{value:"Modify requests",id:"modify-requests",children:[]},{value:"Abort requests",id:"abort-requests",children:[]}],s={rightToc:l};function p(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(o.a)("p",null,"Playwright provides APIs to ",Object(o.a)("strong",{parentName:"p"},"monitor")," and ",Object(o.a)("strong",{parentName:"p"},"modify")," network traffic, both HTTP and HTTPS.\nAny requests that page does, including ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"}),"XHRs")," and\n",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"}),"fetch")," requests, can be tracked, modified and handled."),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"#http-authentication"}),"HTTP Authentication")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"#handle-file-downloads"}),"Handle file downloads")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"#network-events"}),"Network events")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"#handle-requests"}),"Handle requests")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"#modify-requests"}),"Modify requests")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"#abort-requests"}),"Abort requests"))),Object(o.a)("br",null),Object(o.a)("h2",{id:"http-authentication"},"HTTP Authentication"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const context = await browser.newContext({\n  httpCredentials: {\n    username: 'bill',\n    password: 'pa55w0rd',\n  },\n});\nconst page = await context.newPage();\nawait page.goto('https://example.com');\n")),Object(o.a)("h4",{id:"api-reference"},"API reference"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.5.2/api#browsernewcontextoptions"}),Object(o.a)("inlineCode",{parentName:"a"},"browser.newContext([options])")))),Object(o.a)("br",null),Object(o.a)("h2",{id:"handle-file-downloads"},"Handle file downloads"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const [ download ] = await Promise.all([\n  page.waitForEvent('download'), // <-- start waiting for the download\n  page.click('button#delayed-download') // <-- perform the action that directly or indirectly initiates it.\n]);\nconst path = await download.path();\n")),Object(o.a)("p",null,"For every attachment downloaded by the page, ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright/blob/master/docs/api.md#event-download"}),Object(o.a)("inlineCode",{parentName:"a"},'"download"'))," event is emitted. If you create a browser context with the ",Object(o.a)("inlineCode",{parentName:"p"},"acceptDownloads: true"),", all these attachments are going to be downloaded into a temporary folder. You can obtain the download url, file system path and payload stream using the ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright/blob/master/docs/api.md#class-download"}),Object(o.a)("inlineCode",{parentName:"a"},"Download"))," object from the event."),Object(o.a)("h4",{id:"variations"},"Variations"),Object(o.a)("p",null,"If you have no idea what initiates the download, you can still handle the event:"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"page.on('download', download => download.path().then(console.log));\n")),Object(o.a)("p",null,"Note that handling the event forks the control flow and makes script harder to follow. Your scenario might end while you are downloading a file since your main control flow is not awaiting for this operation to resolve."),Object(o.a)("h4",{id:"api-reference-1"},"API reference"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright/blob/master/docs/api.md#class-download"}),Object(o.a)("inlineCode",{parentName:"a"},"Download"))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright/blob/master/docs/api.md#event-download"}),Object(o.a)("inlineCode",{parentName:"a"},"page.on('download')"))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright/blob/master/docs/api.md##pagewaitforeventevent-optionsorpredicate"}),Object(o.a)("inlineCode",{parentName:"a"},"page.waitForEvent(event)")))),Object(o.a)("br",null),Object(o.a)("h2",{id:"network-events"},"Network events"),Object(o.a)("p",null,"You can monitor all the requests and responses:"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { chromium, webkit, firefox } = require('playwright');\n\n(async () => {\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n\n  // Subscribe to 'request' and 'response' events.\n  page.on('request', request =>\n      console.log('>>', request.method(), request.url()));\n  page.on('response', response =>\n      console.log('<<', response.status(), response.url()));\n  await page.goto('https://example.com');\n\n  await browser.close();\n})();\n")),Object(o.a)("p",null,"Or wait for a network response after the button click:"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Use a glob URL pattern\nconst [response] = await Promise.all([\n  page.waitForResponse('**/api/fetch_data'),\n  page.click('button#update'),\n]);\n")),Object(o.a)("h4",{id:"variations-1"},"Variations"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Use a RegExp\nconst [response] = await Promise.all([\n  page.waitForResponse(/\\.jpeg$/),\n  page.click('button#update'),\n]);\n\n// Use a predicate taking a Response object\nconst [response] = await Promise.all([\n  page.waitForResponse(response => response.url().includes(token)),\n  page.click('button#update'),\n]);\n")),Object(o.a)("h4",{id:"api-reference-2"},"API reference"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.5.2/api#class-request"}),"class ",Object(o.a)("inlineCode",{parentName:"a"},"Request"))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.5.2/api#class-response"}),"class ",Object(o.a)("inlineCode",{parentName:"a"},"Response"))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.5.2/api#event-request"}),"event ",Object(o.a)("inlineCode",{parentName:"a"},"'request'"))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.5.2/api#event-response"}),"event ",Object(o.a)("inlineCode",{parentName:"a"},"'response'"))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.5.2/api#pagewaitforrequesturlorpredicate-options"}),Object(o.a)("inlineCode",{parentName:"a"},"page.waitForRequest(urlOrPredicate[, options])"))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.5.2/api#pagewaitforresponseurlorpredicate-options"}),Object(o.a)("inlineCode",{parentName:"a"},"page.waitForResponse(urlOrPredicate[, options])")))),Object(o.a)("br",null),Object(o.a)("h2",{id:"handle-requests"},"Handle requests"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await page.route('**/api/fetch_data', route => route.fulfill({\n  status: 200,\n  body: testData,\n}));\nawait page.goto('https://example.com');\n")),Object(o.a)("p",null,"You can mock API endpoints via handling the network quests in your Playwright script."),Object(o.a)("h4",{id:"variations-2"},"Variations"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Set up route on the entire browser context.\n// It will apply to popup windows and opened links.\n\nawait browserContext.route('**/api/login', route => route.fulfill({\n  status: 200,\n  body: 'accept',\n}));\nawait page.goto('https://example.com');\n")),Object(o.a)("h4",{id:"api-reference-3"},"API reference"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.5.2/api#browsercontextrouteurl-handler"}),Object(o.a)("inlineCode",{parentName:"a"},"browserContext.route(url, handler)"))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.5.2/api#browsercontextunrouteurl-handler"}),Object(o.a)("inlineCode",{parentName:"a"},"browserContext.unroute(url[, handler])"))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.5.2/api#pagerouteurl-handler"}),Object(o.a)("inlineCode",{parentName:"a"},"page.route(url, handler)"))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.5.2/api#pageunrouteurl-handler"}),Object(o.a)("inlineCode",{parentName:"a"},"page.unroute(url[, handler])"))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.5.2/api#class-route"}),Object(o.a)("inlineCode",{parentName:"a"},"Route")))),Object(o.a)("br",null),Object(o.a)("h2",{id:"modify-requests"},"Modify requests"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Delete header\nawait page.route('**/*', route => {\n  const headers = route.request().headers();\n  delete headers['X-Secret'];\n  route.continue({headers});\n});\n\n// Continue requests as POST.\nawait page.route('**/*', route => route.continue({method: 'POST'}));\n")),Object(o.a)("p",null,"You can continue requests with modifications. Example above removes an HTTP header from the outgoing requests."),Object(o.a)("h2",{id:"abort-requests"},"Abort requests"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await page.route('**/*.{png,jpg,jpeg}', route => route.abort());\n\n// Abort based on the request type\nawait page.route('**/*', route => {\n  return route.request().resourceType() === 'image' ?\n      route.abort() : route.continue();\n});\n")),Object(o.a)("h4",{id:"api-reference-4"},"API reference"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.5.2/api#pagerouteurl-handler"}),Object(o.a)("inlineCode",{parentName:"a"},"page.route(url, handler)"))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.5.2/api#browsercontextrouteurl-handler"}),Object(o.a)("inlineCode",{parentName:"a"},"browserContext.route(url, handler)"))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.5.2/api#routeaborterrorcode"}),Object(o.a)("inlineCode",{parentName:"a"},"route.abort([errorCode])")))),Object(o.a)("br",null))}p.isMDXComponent=!0},608:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var n=t(0),r=t.n(n);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var a=r.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),b=n,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return t?r.a.createElement(m,c(c({ref:a},s),{},{components:t})):r.a.createElement(m,c({ref:a},s))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);