(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{184:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var r=a(2),n=a(6),i=(a(0),a(608)),c={id:"intro",title:"Getting Started"},o={unversionedId:"intro",id:"version-1.6.1/intro",isDocsHomePage:!1,title:"Getting Started",description:"- Installation",source:"@site/versioned_docs/version-1.6.1/intro.md",slug:"/intro",permalink:"/pwdev/docs/intro",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.6.1/intro.md",version:"1.6.1",sidebar:"version-1.6.1/docs",previous:{title:"Why Playwright?",permalink:"/pwdev/docs/why-playwright"},next:{title:"Core concepts",permalink:"/pwdev/docs/core-concepts"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"First script",id:"first-script",children:[]},{value:"Record scripts",id:"record-scripts",children:[]},{value:"TypeScript support",id:"typescript-support",children:[{value:"In JavaScript",id:"in-javascript",children:[]},{value:"In TypeScript",id:"in-typescript",children:[]}]},{value:"System requirements",id:"system-requirements",children:[]}],l={rightToc:s};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"#installation"}),"Installation")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"#usage"}),"Usage")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"#first-script"}),"First script")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"#record-scripts"}),"Record scripts")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"#typescript-support"}),"TypeScript support")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"#system-requirements"}),"System requirements"))),Object(i.a)("h2",{id:"installation"},"Installation"),Object(i.a)("p",null,"Use npm or Yarn to install Playwright in your Node.js project. See ",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"#system-requirements"}),"system requirements"),"."),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm i -D playwright\n")),Object(i.a)("p",null,"This single command downloads the Playwright NPM package and browser binaries for Chromium, Firefox and WebKit. To modify this behavior see ",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"/pwdev/docs/installation"}),"installation parameters"),"."),Object(i.a)("h2",{id:"usage"},"Usage"),Object(i.a)("p",null,"Once installed, you can ",Object(i.a)("inlineCode",{parentName:"p"},"require")," Playwright in a Node.js script, and launch any of the 3 browsers (",Object(i.a)("inlineCode",{parentName:"p"},"chromium"),", ",Object(i.a)("inlineCode",{parentName:"p"},"firefox")," and ",Object(i.a)("inlineCode",{parentName:"p"},"webkit"),")."),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { chromium } = require('playwright');\n\n(async () => {\n  const browser = await chromium.launch();\n  // Create pages, interact with UI elements, assert values\n  await browser.close();\n})();\n")),Object(i.a)("p",null,"Playwright APIs are asynchronous and return Promise objects. Our code examples use ",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await"}),"the async/await pattern")," to ease readability. The code is wrapped in an unnamed async arrow function which is invoking itself."),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"(async () => { // Start of async arrow function\n  // Function code\n  // ...\n})(); // End of the function and () to invoke itself\n")),Object(i.a)("h2",{id:"first-script"},"First script"),Object(i.a)("p",null,"In our first script, we will navigate to ",Object(i.a)("inlineCode",{parentName:"p"},"whatsmyuseragent.org")," and take a screenshot in WebKit."),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { webkit } = require('playwright');\n\n(async () => {\n  const browser = await webkit.launch();\n  const page = await browser.newPage();\n  await page.goto('http://whatsmyuseragent.org/');\n  await page.screenshot({ path: `example.png` });\n  await browser.close();\n})();\n")),Object(i.a)("p",null,"By default, Playwright runs the browsers in headless mode. To see the browser UI, pass the ",Object(i.a)("inlineCode",{parentName:"p"},"headless: false")," flag while launching the browser. You can also use ",Object(i.a)("inlineCode",{parentName:"p"},"slowMo")," to slow down execution."),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"firefox.launch({ headless: false, slowMo: 50 });\n")),Object(i.a)("h2",{id:"record-scripts"},"Record scripts"),Object(i.a)("p",null,Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/playwright-cli"}),"Playwright CLI")," can be used to record user interactions and generate JavaScript code."),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{}),"npx playwright-cli codegen wikipedia.org\n")),Object(i.a)("h2",{id:"typescript-support"},"TypeScript support"),Object(i.a)("p",null,"Playwright includes built-in support for TypeScript. Type definitions will be imported automatically. It is recommended to use type-checking to improve the IDE experience."),Object(i.a)("h3",{id:"in-javascript"},"In JavaScript"),Object(i.a)("p",null,"Add the following to the top of your JavaScript file to get type-checking in VS Code or WebStorm."),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"//@ts-check\n// ...\n")),Object(i.a)("p",null,"Alternatively, you can use JSDoc to set types for variables."),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"/** @type {import('playwright').Page} */\nlet page;\n")),Object(i.a)("h3",{id:"in-typescript"},"In TypeScript"),Object(i.a)("p",null,"TypeScript support will work out-of-the-box. Types can also be imported explicitly."),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"let page: import('playwright').Page;\n")),Object(i.a)("h2",{id:"system-requirements"},"System requirements"),Object(i.a)("p",null,"Playwright requires Node.js version 10.17 or above. The browser binaries for Chromium,\nFirefox and WebKit work across the 3 platforms (Windows, macOS, Linux):"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("strong",{parentName:"li"},"Windows"),": Works with Windows and Windows Subsystem for Linux (WSL)."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("strong",{parentName:"li"},"macOS"),": Requires 10.14 or above."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("strong",{parentName:"li"},"Linux"),": Depending on your Linux distribution, you might need to install additional\ndependencies to run the browsers.",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},"Firefox requires Ubuntu 18.04+"),Object(i.a)("li",{parentName:"ul"},"For Ubuntu 18.04, the additional dependencies are defined in ",Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"docker/Dockerfile.bionic"}),"our Docker image"),",\nwhich is based on Ubuntu.")))))}p.isMDXComponent=!0},608:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(a),d=r,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||i;return a?n.a.createElement(m,o(o({ref:t},l),{},{components:a})):n.a.createElement(m,o({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);