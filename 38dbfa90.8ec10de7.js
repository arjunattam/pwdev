(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{179:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),i=(a(0),a(608)),o={id:"intro",title:"Getting Started"},s={unversionedId:"intro",id:"version-1.3.0/intro",isDocsHomePage:!1,title:"Getting Started",description:"- Installation",source:"@site/versioned_docs/version-1.3.0/intro.md",slug:"/intro",permalink:"/pwdev/docs/intro",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.3.0/intro.md",version:"1.3.0",sidebar:"version-1.3.0/docs",next:{title:"Core concepts",permalink:"/pwdev/docs/core-concepts"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"First script",id:"first-script",children:[]},{value:"System requirements",id:"system-requirements",children:[]},{value:"TypeScript IDE support",id:"typescript-ide-support",children:[]}],l={rightToc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#installation"}),"Installation")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#usage"}),"Usage")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#first-script"}),"First script")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#system-requirements"}),"System requirements")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#typescript-ide-support"}),"TypeScript IDE support"))),Object(i.a)("br",null),Object(i.a)("h2",{id:"installation"},"Installation"),Object(i.a)("p",null,"Use npm or Yarn to install Playwright in your Node.js project. Playwright requires Node.js 10 or higher."),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npm i -D playwright\n")),Object(i.a)("p",null,"During installation, Playwright downloads browser binaries for Chromium, Firefox and WebKit. This sets up your environment for browser automation with just one command. It is possible to modify this default behavior for monorepos and other scenarios. See ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"/pwdev/docs/installation"}),"installation parameters")," for mode details."),Object(i.a)("br",null),Object(i.a)("h2",{id:"usage"},"Usage"),Object(i.a)("p",null,"Once installed, you can ",Object(i.a)("inlineCode",{parentName:"p"},"require")," Playwright in a Node.js script, and launch any of the 3 browsers (",Object(i.a)("inlineCode",{parentName:"p"},"chromium"),", ",Object(i.a)("inlineCode",{parentName:"p"},"firefox")," and ",Object(i.a)("inlineCode",{parentName:"p"},"webkit"),")."),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { chromium } = require('playwright');\n\n(async () => {\n  const browser = await chromium.launch();\n  // Create pages, interact with UI elements, assert values\n  await browser.close();\n})();\n")),Object(i.a)("p",null,"Playwright APIs are asynchronous and return Promise objects. Our code examples use ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await"}),"the async/await pattern")," to simplify comprehension. The code is wrapped in an unnamed async arrow function which is invoking itself."),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"(async () => { // Start of async arrow function\n  // Function code\n  // ...\n})(); // End of the function and () to invoke itself\n")),Object(i.a)("br",null),Object(i.a)("h2",{id:"first-script"},"First script"),Object(i.a)("p",null,"In our first script, we will navigate to ",Object(i.a)("inlineCode",{parentName:"p"},"whatsmyuseragent.org")," and take a screenshot in WebKit."),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { webkit } = require('playwright');\n\n(async () => {\n  const browser = await webkit.launch();\n  const page = await browser.newPage();\n  await page.goto('http://whatsmyuseragent.org/');\n  await page.screenshot({ path: `example.png` });\n  await browser.close();\n})();\n")),Object(i.a)("p",null,"By default, Playwright runs the browsers in headless mode. To see the browser UI, pass the ",Object(i.a)("inlineCode",{parentName:"p"},"headless: false")," flag while launching the browser. You can also use ",Object(i.a)("inlineCode",{parentName:"p"},"slowMo")," to slow down execution."),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"firefox.launch({ headless: false, slowMo: 50 });\n")),Object(i.a)("br",null),Object(i.a)("h2",{id:"system-requirements"},"System requirements"),Object(i.a)("p",null,"Playwright requires Node.js version 10.15 or above. The browser binaries for Chromium,\nFirefox and WebKit work across the 3 platforms (Windows, macOS, Linux):"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("strong",{parentName:"li"},"Windows"),": Works with Windows and Windows Subsystem for Linux (WSL)."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("strong",{parentName:"li"},"macOS"),": Requires 10.14 or above."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("strong",{parentName:"li"},"Linux"),": Depending on your Linux distribution, you might need to install additional\ndependencies to run the browsers.",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},"Firefox requires Ubuntu 18.04+"),Object(i.a)("li",{parentName:"ul"},"For Ubuntu 18.04, the additional dependencies are defined in ",Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"docker/Dockerfile.bionic"}),"our Docker image"),",\nwhich is based on Ubuntu.")))),Object(i.a)("br",null),Object(i.a)("h2",{id:"typescript-ide-support"},"TypeScript IDE support"),Object(i.a)("p",null,"Playwright comes with built-in support for TypeScript. Playwright type definitions will be imported automatically."),Object(i.a)("p",null,"It is also possible to add these types to your variables manually. In TypeScript:"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"let page: import('playwright').Page;\n")),Object(i.a)("p",null,"If you use JavaScript, you can still use TypeScript definitions for improved auto-completions and warnings in Visual Studio Code or WebStorm. Add the following to the top of your JavaScript file:"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"//@ts-check\n// ...\n")),Object(i.a)("p",null,"You can also use JSDoc to set types for variables."),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"/** @type {import('playwright').Page} */\nlet page;\n")))}p.isMDXComponent=!0},608:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return a?r.a.createElement(m,s(s({ref:t},l),{},{components:a})):r.a.createElement(m,s({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);