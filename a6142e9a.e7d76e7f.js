(window.webpackJsonp=window.webpackJsonp||[]).push([[353],{411:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var a=r(2),n=r(6),o=(r(0),r(608)),i={id:"class-route",title:"class: Route"},l={unversionedId:"api/class-route",id:"version-1.4.0/api/class-route",isDocsHomePage:!1,title:"class: Route",description:"Whenever a network route is set up with page.route(url, handler) or browserContext.route(url, handler), the Route object allows to handle the route.",source:"@site/versioned_docs/version-1.4.0/api/class-route.md",slug:"/api/class-route",permalink:"/pwdev/docs/1.4.0/api/class-route",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.4.0/api/class-route.md",version:"1.4.0",sidebar:"version-1.4.0/api",previous:{title:"class: Selectors",permalink:"/pwdev/docs/1.4.0/api/class-selectors"},next:{title:"class: TimeoutError",permalink:"/pwdev/docs/1.4.0/api/class-timeouterror"}},c=[{value:"route.abort(errorCode)",id:"routeaborterrorcode",children:[]},{value:"route.continue(overrides)",id:"routecontinueoverrides",children:[]},{value:"route.fulfill(response)",id:"routefulfillresponse",children:[]},{value:"route.request()",id:"routerequest",children:[]}],s={rightToc:c};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.a)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"Whenever a network route is set up with ",Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"#pagerouteurl-handler"}),"page.route(url, handler)")," or ",Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"#browsercontextrouteurl-handler"}),"browserContext.route(url, handler)"),", the ",Object(o.a)("inlineCode",{parentName:"p"},"Route")," object allows to handle the route."),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#routeaborterrorcode"}),"route.abort([errorCode])")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#routecontinueoverrides"}),"route.continue([overrides])")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#routefulfillresponse"}),"route.fulfill(response)")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"#routerequest"}),"route.request()"))),Object(o.a)("h2",{id:"routeaborterrorcode"},"route.abort(","[errorCode]",")"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"errorCode")," <","[string]","> Optional error code. Defaults to ",Object(o.a)("inlineCode",{parentName:"li"},"failed"),", could be\none of the following:",Object(o.a)("ul",{parentName:"li"},Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"'aborted'")," - An operation was aborted (due to user action)"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"'accessdenied'")," - Permission to access a resource, other than the network, was denied"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"'addressunreachable'")," - The IP address is unreachable. This usually means\nthat there is no route to the specified host or network."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"'blockedbyclient'")," - The client chose to block the request."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"'blockedbyresponse'")," - The request failed because the response was delivered along with requirements which are not met ('X-Frame-Options' and 'Content-Security-Policy' ancestor checks, for instance)."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"'connectionaborted'")," - A connection timed out as a result of not receiving an ACK for data sent."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"'connectionclosed'")," - A connection was closed (corresponding to a TCP FIN)."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"'connectionfailed'")," - A connection attempt failed."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"'connectionrefused'")," - A connection attempt was refused."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"'connectionreset'")," - A connection was reset (corresponding to a TCP RST)."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"'internetdisconnected'")," - The Internet connection has been lost."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"'namenotresolved'")," - The host name could not be resolved."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"'timedout'")," - An operation timed out."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"'failed'")," - A generic failure occurred."))),Object(o.a)("li",{parentName:"ul"},"returns: <","[Promise]",">")),Object(o.a)("p",null,"Aborts the route's request."),Object(o.a)("h2",{id:"routecontinueoverrides"},"route.continue(","[overrides]",")"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"overrides")," <","[Object]","> Optional request overrides, which can be one of the following:",Object(o.a)("ul",{parentName:"li"},Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"method")," <","[string]","> If set changes the request method (e.g. GET or POST)"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"postData")," <","[string]","|","[Buffer]","> If set changes the post data of request"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"headers")," <","[Object]","<","[string]",", ","[string]",">> If set changes the request HTTP headers. Header values will be converted to a string."))),Object(o.a)("li",{parentName:"ul"},"returns: <","[Promise]",">")),Object(o.a)("p",null,"Continues route's request with optional overrides."),Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"await page.route('**/*', (route, request) => {\n  // Override headers\n  const headers = {\n    ...request.headers(),\n    foo: 'bar', // set \"foo\" header\n    origin: undefined, // remove \"origin\" header\n  };\n  route.continue({headers});\n});\n")),Object(o.a)("h2",{id:"routefulfillresponse"},"route.fulfill(response)"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"response")," <","[Object]","> Response that will fulfill this route's request.",Object(o.a)("ul",{parentName:"li"},Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"status")," <","[number]","> Response status code, defaults to ",Object(o.a)("inlineCode",{parentName:"li"},"200"),"."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"headers")," <","[Object]","<","[string]",", ","[string]",">> Optional response headers. Header values will be converted to a string."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"contentType")," <","[string]","> If set, equals to setting ",Object(o.a)("inlineCode",{parentName:"li"},"Content-Type")," response header."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"body")," <","[string]","|","[Buffer]","> Optional response body."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"path")," <","[string]","> Optional file path to respond with. The content type will be inferred from file extension. If ",Object(o.a)("inlineCode",{parentName:"li"},"path")," is a relative path, then it is resolved relative to ",Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"https://nodejs.org/api/process.html#process_process_cwd"}),"current working directory"),"."))),Object(o.a)("li",{parentName:"ul"},"returns: <","[Promise]",">")),Object(o.a)("p",null,"Fulfills route's request with given response."),Object(o.a)("p",null,"An example of fulfilling all requests with 404 responses:"),Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"await page.route('**/*', route => {\n  route.fulfill({\n    status: 404,\n    contentType: 'text/plain',\n    body: 'Not Found!'\n  });\n});\n")),Object(o.a)("p",null,"An example of serving static file:"),Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"await page.route('**/xhr_endpoint', route => route.fulfill({ path: 'mock_data.json' }));\n")),Object(o.a)("h2",{id:"routerequest"},"route.request()"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"returns: <","[Request]","> A request to be routed.")))}u.isMDXComponent=!0},608:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(r),b=a,O=d["".concat(i,".").concat(b)]||d[b]||p[b]||o;return r?n.a.createElement(O,l(l({ref:t},s),{},{components:r})):n.a.createElement(O,l({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);