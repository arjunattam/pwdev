(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{149:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var r=a(0),i=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(a),b=r,m=u["".concat(c,".").concat(b)]||u[b]||h[b]||n;return a?i.a.createElement(m,s(s({ref:t},l),{},{components:a})):i.a.createElement(m,s({ref:t},l))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,c=new Array(n);c[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<n;l++)c[l]=a[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},76:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));var r=a(2),i=a(6),n=(a(0),a(149)),c={id:"showcase",title:"Community Showcase"},s={unversionedId:"showcase",id:"showcase",isDocsHomePage:!1,title:"Community Showcase",description:"Users",source:"@site/docs/showcase.md",slug:"/showcase",permalink:"/pwdev/docs/showcase",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/showcase.md",version:"current"},o=[{value:"Users",id:"users",children:[]},{value:"Tools",id:"tools",children:[]},{value:"Frameworks",id:"frameworks",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Guides",id:"guides",children:[]},{value:"Contributing",id:"contributing",children:[]}],l={rightToc:o};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.a)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.a)("h2",{id:"users"},"Users"),Object(n.a)("ul",null,Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/microsoft/vscode"}),"VS Code"),": Playwright is used to run cross-browser tests on their web builds"),Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/microsoft/TypeScript"}),"TypeScript"),": Playwright is used test typescript.js across browsers"),Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/elastic/apm-agent-rum-js"}),"Elastic APM JS agent"),": Playwright is used to run benchmark tests across browsers"),Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/blockstack/ux"}),"Blockstack"),": Playwright is used to run cross-browser UI tests"),Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/fredericbonnet/instakittens-react-admin"}),"Instakittens React admin"),": Playwright is used to run end-to-end test scenarios written with Cucumber"),Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/xtermjs/xterm.js"}),"xterm.js"),": Playwright is used to run cross-browser integration tests"),Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/microsoft/accessibility-insights-web"}),"Accessibility Insights for Web"),": Playwright is used with Jest and axe-core to run end-to-end functional and accessibility tests of a WebExtension-based browser extension")),Object(n.a)("h2",{id:"tools"},"Tools"),Object(n.a)("ul",null,Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/Codeception/CodeceptJS"}),"CodeceptJS"),": Write scenario-driven Playwright tests with synchronous code"),Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/Xiphe/dom-to-playwright"}),"dom-to-playwright")," to copy a JSDOM snapshot into a Playwright page."),Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/elaichenkov/expected-condition-playwright"}),"expected-condition-playwright"),": Supplies a set of common expected conditions that can wait for certain states and conditions"),Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://headlesstesting.com/support/start/playwright.html"}),"Headless Testing"),": Run Playwright tests on browsers in the cloud"),Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/JakePartusch/lumberjack"}),"Lumberjack"),": Automated accessibility scanner to run checks on your entire website"),Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/HLTech/mockiavelli"}),"mockiavelli")," Request mocking library for Playwright to test SPA in isolation from backend APIs."),Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/aerokube/moon"}),"Moon"),": Run Playwright tests in parallel in Kubernetes cluster (free up to 4 parallel sessions)"),Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/hugomrdias/playwright-test"}),"playwright-test")," Run unit tests and benchmarks in browsers with Node's seamless experience."),Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/qawolf/playwright-video"}),"playwright-video"),": Capture a video while executing a Playwright script"),Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/qawolf/qawolf"}),"QA Wolf"),": Record and create Playwright tests and then run them in CI"),Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/testimio/root-cause"}),"Root Cause OSS"),": Capture screenshots on every step and display in a viewer with logs for easy troubleshooting."),Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/Xiphe/test-real-styles"}),"test-real-styles"),": Utility to test real styling of virtual DOM elements in a browser"),Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://www.testim.io/playground/"}),"Testim Playground"),": Record Playwright UI tests as code"),Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://try.playwright.tech/"}),"Try Playwright"),": Interactive playground for Playwright to run examples directly from your browser"),Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://applitools.com"}),"Applitools"),": Add AI-powered visual assertions and run your Playwright tests on all browser, device, and viewport combinations in parallel, without requiring any setup.")),Object(n.a)("h2",{id:"frameworks"},"Frameworks"),Object(n.a)("ul",null,Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/mmarkelov/jest-playwright"}),"jest-playwright"),": Jest preset to run Playwright tests with Jest"),Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/Georgegriff/query-selector-shadow-dom"}),"query-selector-shadow-dom"),": Custom selector engine to pierce shadow DOM roots"),Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/kblok/playwright-sharp"}),"Playwright Sharp"),": Work in progress port of Playwright to .NET"),Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/hdorgeval/playwright-fluent"}),"playwright-fluent"),": Fluent API around Playwright"),Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://robotframework-browser.org/"}),"robotframework-browser")," Robotframework library that uses Playwright to achieve good development ergonomics.")),Object(n.a)("h2",{id:"examples"},"Examples"),Object(n.a)("ul",null,Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/e2e-boilerplate?utf8=%E2%9C%93&q=playwright"}),"e2e Boilerplates"),": Project boilerplates for using Playwright with TypeScript, Cucumber, Jest, and other libraries"),Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/KyleADay/react-app-playwright"}),"react-app-playwright"),": Using Playwright with a create-react-app project"),Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/azemetre/playwright-react-typescript-jest-example"}),"playwright-react-typescript-jest-example"),": Using Playwright + Jest with a custom webpack configuration for React + Typescript project "),Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/roggerfe/playwright-mocha"}),"playwright-mocha"),": Using Playwright with Mocha and Chai"),Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/apeckham/playwright-cljs"}),"playwright-cljs"),": Playwright examples in ClojureScript"),Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/arjun27/playwright-azure-functions"}),"playwright-azure-functions"),": Playwright setup on Azure Functions"),Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/austinkelleher/playwright-aws-lambda"}),"playwright-aws-lambda"),": Playwright setup on AWS Lambda"),Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/d-shch/playwright-jest-circus-allure"}),"playwright-jest-circus-allure"),": Example how to use allure-report and jest-circus with playwright"),Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/mxschmitt/heroku-playwright-example"}),"Heroku Playwright Example"),": Example using Playwright on Heroku")),Object(n.a)("h2",{id:"guides"},"Guides"),Object(n.a)("ul",null,Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://theheadless.dev"}),"theheadless.dev"),": Practical guides and runnable examples on Playwright (and Puppeteer)")),Object(n.a)("h2",{id:"contributing"},"Contributing"),Object(n.a)("p",null,"Did we miss something in this list? Send us a PR!"))}p.isMDXComponent=!0}}]);