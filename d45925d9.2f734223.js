(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{241:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return l})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return g}));var n=t(2),a=t(6),i=(t(0),t(285)),o={id:"class-logger",title:"class: Logger"},l={unversionedId:"api/class-logger",id:"version-1.4.0/api/class-logger",isDocsHomePage:!1,title:"class: Logger",description:"Playwright generates a lot of logs and they are accessible via the pluggable logger sink.",source:"@site/versioned_docs/version-1.4.0/api/class-logger.md",slug:"/api/class-logger",permalink:"/pwdev/docs/api/class-logger",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.4.0/api/class-logger.md",version:"1.4.0",sidebar:"version-1.4.0/api",previous:{title:"class: BrowserType",permalink:"/pwdev/docs/api/class-browsertype"},next:{title:"class: ChromiumBrowser",permalink:"/pwdev/docs/api/class-chromiumbrowser"}},s=[{value:"logger.isEnabled(name, severity)",id:"loggerisenabledname-severity",children:[]},{value:"logger.log(name, severity, message, args, hints)",id:"loggerlogname-severity-message-args-hints",children:[]}],c={rightToc:s};function g(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},c,t,{components:r,mdxType:"MDXLayout"}),Object(i.a)("p",null,"Playwright generates a lot of logs and they are accessible via the pluggable logger sink."),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.\n\n(async () => {\n  const browser = await chromium.launch({\n    logger: {\n      isEnabled: (name, severity) => name === 'browser',\n      log: (name, severity, message, args) => console.log(`${name} ${message}`)\n    }\n  });\n  ...\n})();\n")),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#loggerisenabledname-severity"}),"logger.isEnabled(name, severity)")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#loggerlogname-severity-message-args-hints"}),"logger.log(name, severity, message, args, hints)"))),Object(i.a)("h2",{id:"loggerisenabledname-severity"},"logger.isEnabled(name, severity)"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"name")," <","[string]","> logger name"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"severity"),' <"verbose"|"info"|"warning"|"error">'),Object(i.a)("li",{parentName:"ul"},"returns: <","[boolean]",">")),Object(i.a)("p",null,"Determines whether sink is interested in the logger with the given name and severity."),Object(i.a)("h2",{id:"loggerlogname-severity-message-args-hints"},"logger.log(name, severity, message, args, hints)"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"name")," <","[string]","> logger name"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"severity"),' <"verbose"|"info"|"warning"|"error">'),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"message")," <","[string]","|","[Error]","> log message format"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"args")," <","[Array]","<","[Object]",">> message arguments"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"hints")," <","[Object]","> optional formatting hints",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"color")," <","[string]","> preferred logger color")))))}g.isMDXComponent=!0},285:function(e,r,t){"use strict";t.d(r,"a",(function(){return u}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),g=function(e){var r=a.a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=g(t),u=n,b=m["".concat(o,".").concat(u)]||m[u]||p[u]||i;return t?a.a.createElement(b,l(l({ref:r},c),{},{components:t})):a.a.createElement(b,l({ref:r},c))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);