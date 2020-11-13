(window.webpackJsonp=window.webpackJsonp||[]).push([[463],{519:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return u}));var r=a(2),n=a(6),o=(a(0),a(608)),c={id:"class-websocket",title:"class: WebSocket"},i={unversionedId:"api/class-websocket",id:"version-1.6.1/api/class-websocket",isDocsHomePage:!1,title:"class: WebSocket",description:"The [WebSocket] class represents websocket connections in the page.",source:"@site/versioned_docs/version-1.6.1/api/class-websocket.md",slug:"/api/class-websocket",permalink:"/pwdev/docs/api/class-websocket",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.6.1/api/class-websocket.md",version:"1.6.1",sidebar:"version-1.6.1/api",previous:{title:"class: Route",permalink:"/pwdev/docs/api/class-route"},next:{title:"class: TimeoutError",permalink:"/pwdev/docs/api/class-timeouterror"}},l=[{value:"event: &#39;close&#39;",id:"event-close",children:[]},{value:"event: &#39;framereceived&#39;",id:"event-framereceived",children:[]},{value:"event: &#39;framesent&#39;",id:"event-framesent",children:[]},{value:"event: &#39;socketerror&#39;",id:"event-socketerror",children:[]},{value:"webSocket.isClosed()",id:"websocketisclosed",children:[]},{value:"webSocket.url()",id:"websocketurl",children:[]},{value:"webSocket.waitForEvent(event, optionsOrPredicate)",id:"websocketwaitforeventevent-optionsorpredicate",children:[]}],s={rightToc:l};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"The ","[WebSocket]"," class represents websocket connections in the page."),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"#event-close-2"}),"event: 'close'")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"#event-framereceived"}),"event: 'framereceived'")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"#event-framesent"}),"event: 'framesent'")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"#event-socketerror"}),"event: 'socketerror'")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"#websocketisclosed"}),"webSocket.isClosed()")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"#websocketurl"}),"webSocket.url()")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"#websocketwaitforeventevent-optionsorpredicate"}),"webSocket.waitForEvent(event[, optionsOrPredicate])"))),Object(o.a)("h2",{id:"event-close"},"event: 'close'"),Object(o.a)("p",null,"Fired when the websocket closes."),Object(o.a)("h2",{id:"event-framereceived"},"event: 'framereceived'"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"<","[Object]","> web socket frame data",Object(o.a)("ul",{parentName:"li"},Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"payload")," <","[string]","|","[Buffer]","> frame payload")))),Object(o.a)("p",null,"Fired when the websocket recieves a frame."),Object(o.a)("h2",{id:"event-framesent"},"event: 'framesent'"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"<","[Object]","> web socket frame data",Object(o.a)("ul",{parentName:"li"},Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"payload")," <","[string]","|","[Buffer]","> frame payload")))),Object(o.a)("p",null,"Fired when the websocket sends a frame."),Object(o.a)("h2",{id:"event-socketerror"},"event: 'socketerror'"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"<","[String]","> the error message")),Object(o.a)("p",null,"Fired when the websocket has an error."),Object(o.a)("h2",{id:"websocketisclosed"},"webSocket.isClosed()"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"returns: <","[boolean]",">")),Object(o.a)("p",null,"Indicates that the web socket has been closed."),Object(o.a)("h2",{id:"websocketurl"},"webSocket.url()"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"returns: <","[string]",">")),Object(o.a)("p",null,"Contains the URL of the WebSocket."),Object(o.a)("h2",{id:"websocketwaitforeventevent-optionsorpredicate"},"webSocket.waitForEvent(event","[, optionsOrPredicate]",")"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"event")," <","[string]","> Event name, same one would pass into ",Object(o.a)("inlineCode",{parentName:"li"},"webSocket.on(event)"),"."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"optionsOrPredicate")," <","[Function]","|","[Object]","> Either a predicate that receives an event or an options object.",Object(o.a)("ul",{parentName:"li"},Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"predicate")," <","[Function]","> receives the event data and resolves to truthy value when the waiting should resolve."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"timeout")," <","[number]","> maximum time to wait for in milliseconds. Defaults to ",Object(o.a)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",Object(o.a)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"#browsercontextsetdefaulttimeouttimeout"}),"browserContext.setDefaultTimeout(timeout)")," or ",Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"#pagesetdefaulttimeouttimeout"}),"page.setDefaultTimeout(timeout)")," methods."))),Object(o.a)("li",{parentName:"ul"},"returns: <","[Promise]","<","[Object]",">> Promise which resolves to the event data value.")),Object(o.a)("p",null,"Waits for event to fire and passes its value into the predicate function. Resolves when the predicate returns truthy value. Will throw an error if the webSocket is closed before the event\nis fired."))}u.isMDXComponent=!0},608:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return a?n.a.createElement(m,i(i({ref:t},s),{},{components:a})):n.a.createElement(m,i({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=a[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);