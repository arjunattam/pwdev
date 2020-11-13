(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{261:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var r=a(2),n=a(6),o=(a(0),a(285)),c={id:"network",title:"Network"},i={unversionedId:"network",id:"version-1.3.0/network",isDocsHomePage:!1,title:"Network",description:"Playwright provides APIs to monitor and modify network traffic, both HTTP and HTTPS.",source:"@site/versioned_docs/version-1.3.0/network.md",slug:"/network",permalink:"/pwdev/docs/1.3.0/network",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.3.0/network.md",version:"1.3.0",sidebar:"version-1.3.0/docs",previous:{title:"Device and environment emulation",permalink:"/pwdev/docs/1.3.0/emulation"},next:{title:"Assertions",permalink:"/pwdev/docs/1.3.0/assertions"}},s=[{value:"HTTP Authentication",id:"http-authentication",children:[]},{value:"Network events",id:"network-events",children:[]},{value:"Handle requests",id:"handle-requests",children:[]},{value:"Modify requests",id:"modify-requests",children:[]},{value:"Abort requests",id:"abort-requests",children:[]},{value:"Proxy",id:"proxy",children:[]}],l={rightToc:s};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"Playwright provides APIs to ",Object(o.a)("strong",{parentName:"p"},"monitor")," and ",Object(o.a)("strong",{parentName:"p"},"modify")," network traffic, both HTTP and HTTPS.\nAny requests that page does, including ",Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"}),"XHRs")," and\n",Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"}),"fetch")," requests, can be tracked, modified and handled."),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"#http-authentication"}),"HTTP Authentication")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"#network-events"}),"Network events")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"#handle-requests"}),"Handle requests")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"#modify-requests"}),"Modify requests")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"#abort-requests"}),"Abort requests")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"#proxy"}),"Proxy"))),Object(o.a)("br",null),Object(o.a)("h2",{id:"http-authentication"},"HTTP Authentication"),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const context = await browser.newContext({\n  httpCredentials: {\n    username: 'bill',\n    password: 'pa55w0rd',\n  },\n});\nconst page = await context.newPage();\nawait page.goto('https://example.com');\n")),Object(o.a)("h4",{id:"api-reference"},"API reference"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#browsernewcontextoptions"}),Object(o.a)("inlineCode",{parentName:"a"},"browser.newContext([options])")))),Object(o.a)("h2",{id:"network-events"},"Network events"),Object(o.a)("p",null,"You can monitor all the requests and responses:"),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { chromium, webkit, firefox } = require('playwright');\n\n(async () => {\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n\n  // Subscribe to 'request' and 'response' events.\n  page.on('request', request =>\n      console.log('>>', request.method(), request.url()));\n  page.on('response', response =>\n      console.log('<<', response.status(), response.url()));\n  await page.goto('https://example.com');\n\n  await browser.close();\n})();\n")),Object(o.a)("p",null,"Or wait for a network response after the button click:"),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// Use a glob URL pattern\nconst [response] = await Promise.all([\n  page.waitForResponse('**/api/fetch_data'),\n  page.click('button#update'),\n]);\n")),Object(o.a)("h4",{id:"variations"},"Variations"),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// Use a RegExp\nconst [response] = await Promise.all([\n  page.waitForResponse(/\\.jpeg$/),\n  page.click('button#update'),\n]);\n\n// Use a predicate taking a Response object\nconst [response] = await Promise.all([\n  page.waitForResponse(response => response.url().includes(token)),\n  page.click('button#update'),\n]);\n")),Object(o.a)("h4",{id:"api-reference-1"},"API reference"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#class-request"}),"class ",Object(o.a)("inlineCode",{parentName:"a"},"Request"))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#class-response"}),"class ",Object(o.a)("inlineCode",{parentName:"a"},"Response"))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#event-request"}),"event ",Object(o.a)("inlineCode",{parentName:"a"},"'request'"))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#event-response"}),"event ",Object(o.a)("inlineCode",{parentName:"a"},"'response'"))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#pagewaitforrequesturlorpredicate-options"}),Object(o.a)("inlineCode",{parentName:"a"},"page.waitForRequest(urlOrPredicate[, options])"))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#pagewaitforresponseurlorpredicate-options"}),Object(o.a)("inlineCode",{parentName:"a"},"page.waitForResponse(urlOrPredicate[, options])")))),Object(o.a)("br",null),Object(o.a)("h2",{id:"handle-requests"},"Handle requests"),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"await page.route('**/api/fetch_data', route => route.fulfill({\n  status: 200,\n  body: testData,\n}));\nawait page.goto('https://example.com');\n")),Object(o.a)("p",null,"You can mock API endpoints via handling the network quests in your Playwright script."),Object(o.a)("h4",{id:"variations-1"},"Variations"),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// Set up route on the entire browser context.\n// It will apply to popup windows and opened links.\n\nawait browserContext.route('**/api/login', route => route.fulfill({\n  status: 200,\n  body: 'accept',\n}));\nawait page.goto('https://example.com');\n")),Object(o.a)("h4",{id:"api-reference-2"},"API reference"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#browsercontextrouteurl-handler"}),Object(o.a)("inlineCode",{parentName:"a"},"browserContext.route(url, handler)"))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#browsercontextunrouteurl-handler"}),Object(o.a)("inlineCode",{parentName:"a"},"browserContext.unroute(url[, handler])"))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#pagerouteurl-handler"}),Object(o.a)("inlineCode",{parentName:"a"},"page.route(url, handler)"))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#pageunrouteurl-handler"}),Object(o.a)("inlineCode",{parentName:"a"},"page.unroute(url[, handler])"))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#class-route"}),Object(o.a)("inlineCode",{parentName:"a"},"Route")))),Object(o.a)("br",null),Object(o.a)("h2",{id:"modify-requests"},"Modify requests"),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// Delete header\nawait page.route('**/*', route => {\n  const headers = route.request().headers();\n  delete headers['X-Secret'];\n  route.continue({headers});\n});\n\n// Continue requests as POST.\nawait page.route('**/*', route => route.continue({method: 'POST'}));\n")),Object(o.a)("p",null,"You can continue requests with modifications. Example above removes an HTTP header from the outgoing requests."),Object(o.a)("h2",{id:"abort-requests"},"Abort requests"),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"await page.route('**/*.{png,jpg,jpeg}', route => route.abort());\n\n// Abort based on the request type\nawait page.route('**/*', route => {\n  return route.request().resourceType() === 'image' ?\n      route.abort() : route.continue();\n});\n")),Object(o.a)("h4",{id:"api-reference-3"},"API reference"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#pagerouteurl-handler"}),Object(o.a)("inlineCode",{parentName:"a"},"page.route(url, handler)"))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#browsercontextrouteurl-handler"}),Object(o.a)("inlineCode",{parentName:"a"},"browserContext.route(url, handler)"))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#routeaborterrorcode"}),Object(o.a)("inlineCode",{parentName:"a"},"route.abort([errorCode])")))),Object(o.a)("br",null),Object(o.a)("h2",{id:"proxy"},"Proxy"))}p.isMDXComponent=!0},285:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(a),d=r,O=b["".concat(c,".").concat(d)]||b[d]||u[d]||o;return a?n.a.createElement(O,i(i({ref:t},l),{},{components:a})):n.a.createElement(O,i({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=a[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);