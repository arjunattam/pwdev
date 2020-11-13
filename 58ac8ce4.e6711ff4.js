(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),o=(a(0),a(285)),i={id:"debug",title:"Debugging tools"},l={unversionedId:"debug",id:"debug",isDocsHomePage:!1,title:"Debugging tools",description:"Playwright scripts work with existing debugging tools, like Node.js debuggers",source:"@site/docs/debug.md",slug:"/debug",permalink:"/pwdev/docs/next/debug",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/debug.md",version:"current",sidebar:"docs",previous:{title:"Core concepts",permalink:"/pwdev/docs/next/core-concepts"},next:{title:"Supported languages",permalink:"/pwdev/docs/next/languages"}},c=[{value:"Run in headful mode",id:"run-in-headful-mode",children:[]},{value:"Visual Studio Code debugger",id:"visual-studio-code-debugger",children:[{value:"Use launch config",id:"use-launch-config",children:[]},{value:"Use the new JavaScript debugger",id:"use-the-new-javascript-debugger",children:[]}]},{value:"Browser Developer Tools",id:"browser-developer-tools",children:[{value:"API for Chromium",id:"api-for-chromium",children:[]}]},{value:"Run in Debug Mode",id:"run-in-debug-mode",children:[{value:"Defaults",id:"defaults",children:[]},{value:"Debugging Selectors",id:"debugging-selectors",children:[]},{value:"Evaluate Source Maps",id:"evaluate-source-maps",children:[]}]},{value:"Verbose API logs",id:"verbose-api-logs",children:[]}],u={rightToc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"Playwright scripts work with existing debugging tools, like Node.js debuggers\nand browser developer tools. Playwright also introduces new debugging features\nfor browser automation."),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"#run-in-headful-mode"}),"Run in headful mode")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"#visual-studio-code-debugger"}),"Visual Studio Code debugger"),Object(o.a)("ul",{parentName:"li"},Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"#use-launch-config"}),"Use launch config")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"#use-the-new-javascript-debugger"}),"Use the new JavaScript debugger")))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"#browser-developer-tools"}),"Browser Developer Tools"),Object(o.a)("ul",{parentName:"li"},Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"#api-for-chromium"}),"API for Chromium")))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"#run-in-debug-mode"}),"Run in Debug Mode"),Object(o.a)("ul",{parentName:"li"},Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"#defaults"}),"Defaults")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"#debugging-selectors"}),"Debugging Selectors")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"#evaluate-source-maps"}),"Evaluate Source Maps")))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"#verbose-api-logs"}),"Verbose API logs"))),Object(o.a)("h2",{id:"run-in-headful-mode"},"Run in headful mode"),Object(o.a)("p",null,"Playwright runs browsers in headless mode by default. To change this behavior,\nuse ",Object(o.a)("inlineCode",{parentName:"p"},"headless: false")," as a launch option. You can also use the ",Object(o.a)("inlineCode",{parentName:"p"},"slowMo")," option\nto slow down execution and follow along while debugging."),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await chromium.launch({ headless: false, slowMo: 100 }); // or firefox, webkit\n")),Object(o.a)("h2",{id:"visual-studio-code-debugger"},"Visual Studio Code debugger"),Object(o.a)("p",null,"The VS Code debugger can be used to pause and resume execution of Playwright\nscripts with breakpoints. The debugger can be configured in two ways."),Object(o.a)("h3",{id:"use-launch-config"},"Use launch config"),Object(o.a)("p",null,"Setup ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://code.visualstudio.com/docs/nodejs/nodejs-debugging"}),Object(o.a)("inlineCode",{parentName:"a"},"launch.json")," configuration"),"\nfor your Node.js project. Once configured launch the scripts with F5 and use\nbreakpoints."),Object(o.a)("h3",{id:"use-the-new-javascript-debugger"},"Use the new JavaScript debugger"),Object(o.a)("p",null,"VS Code 1.46+ introduces the new JavaScript debugger behind a feature flag. The\nnew debugger does not require a ",Object(o.a)("inlineCode",{parentName:"p"},"launch.json")," configuration. To use this:"),Object(o.a)("ol",null,Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"Enable the preview debugger"),Object(o.a)("ul",{parentName:"li"},Object(o.a)("li",{parentName:"ul"},"Open JSON settings and add ",Object(o.a)("inlineCode",{parentName:"li"},'"debug.javascript.usePreview": true')),Object(o.a)("li",{parentName:"ul"},"Open settings UI and enable the ",Object(o.a)("inlineCode",{parentName:"li"},"Debug \u203a JavaScript: Use Preview")," setting"))),Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"Set a breakpoint in VS Code"),Object(o.a)("ul",{parentName:"li"},Object(o.a)("li",{parentName:"ul"},"Use the ",Object(o.a)("inlineCode",{parentName:"li"},"debugger")," keyword or set a breakpoint in the VS Code UI"))),Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"Run your Node.js script from the terminal"))),Object(o.a)("h2",{id:"browser-developer-tools"},"Browser Developer Tools"),Object(o.a)("p",null,"You can use browser developer tools in Chromium, Firefox and WebKit while running\na Playwright script. Developer tools help to:"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"Inspect the DOM tree and ",Object(o.a)("strong",{parentName:"li"},"find element selectors")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"See console logs")," during execution (or learn how to ",Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/next/verification#console-logs"}),"read logs via API"),")"),Object(o.a)("li",{parentName:"ul"},"Check ",Object(o.a)("strong",{parentName:"li"},"network activity")," and other developer tools features")),Object(o.a)("a",{href:"https://user-images.githubusercontent.com/284612/77234134-5f21a500-6b69-11ea-92ec-1c146e1333ec.png"},Object(o.a)("img",{src:"https://user-images.githubusercontent.com/284612/77234134-5f21a500-6b69-11ea-92ec-1c146e1333ec.png",width:"500",alt:"Chromium Developer Tools"})),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},Object(o.a)("strong",{parentName:"p"},"For WebKit"),": Note that launching WebKit Inspector during the execution will\nprevent the Playwright script from executing any further.")),Object(o.a)("h3",{id:"api-for-chromium"},"API for Chromium"),Object(o.a)("p",null,"In Chromium, you can also open developer tools through a launch option."),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await chromium.launch({ devtools: true });\n")),Object(o.a)("h2",{id:"run-in-debug-mode"},"Run in Debug Mode"),Object(o.a)("p",null,"Set the ",Object(o.a)("inlineCode",{parentName:"p"},"PWDEBUG")," environment variable to run your scripts in debug mode. This\nconfigures the browser for debugging."),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"# Linux/macOS\n$ PWDEBUG=1 npm run test\n\n# Windows\n$ set PWDEBUG=1\n$ npm run test\n")),Object(o.a)("h3",{id:"defaults"},"Defaults"),Object(o.a)("p",null,"With PWDEBUG, the following defaults are configured for you:"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"Run in headful"),": With PWDEBUG, browsers always launch in headful mode"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"Disables timeout"),": PWDEBUG sets timeout to 0 (= no timeout)"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"Preserve DevTools preferences"),": When used with ",Object(o.a)("inlineCode",{parentName:"li"},"devtools: true"),", PWDEBUG\npreserves the docked/undocked state of Chrome DevTools")),Object(o.a)("h3",{id:"debugging-selectors"},"Debugging Selectors"),Object(o.a)("p",null,"PWDEBUG configures a ",Object(o.a)("inlineCode",{parentName:"p"},"playwright")," object in the browser to highlight\n",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"/pwdev/docs/next/selectors"}),"Playwright selectors"),". This can be used to verify text or\ncomposite selectors. To use this:"),Object(o.a)("ol",null,Object(o.a)("li",{parentName:"ol"},"Setup a breakpoint to pause the execution"),Object(o.a)("li",{parentName:"ol"},"Open the console panel in browser developer tools"),Object(o.a)("li",{parentName:"ol"},"Use the ",Object(o.a)("inlineCode",{parentName:"li"},"playwright")," API",Object(o.a)("ul",{parentName:"li"},Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"playwright.$(selector)"),": Highlight the first occurrence of the selector. This reflects\nhow ",Object(o.a)("inlineCode",{parentName:"li"},"page.$")," would see the page."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"playwright.$$(selector)"),": Highlight all occurrences of the selector. This reflects\nhow ",Object(o.a)("inlineCode",{parentName:"li"},"page.$$")," would see the page."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"playwright.inspect(selector)"),": Inspect the selector in the Elements panel."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"playwright.clear()"),": Clear existing highlights.")))),Object(o.a)("a",{href:"https://user-images.githubusercontent.com/284612/86857345-299abc00-c073-11ea-9e31-02923a9f0d4b.png"},Object(o.a)("img",{src:"https://user-images.githubusercontent.com/284612/86857345-299abc00-c073-11ea-9e31-02923a9f0d4b.png",width:"500",alt:"Highlight selectors"})),Object(o.a)("h3",{id:"evaluate-source-maps"},"Evaluate Source Maps"),Object(o.a)("p",null,"PWDEBUG also enables source maps for ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"/pwdev/docs/next/core-concepts#evaluation"}),Object(o.a)("inlineCode",{parentName:"a"},"page.evaluate")," executions"),".\nThis improves the debugging experience for JavaScript executions in the page context."),Object(o.a)("a",{href:"https://user-images.githubusercontent.com/284612/86857568-a6c63100-c073-11ea-82a4-bfd531a4ec87.png"},Object(o.a)("img",{src:"https://user-images.githubusercontent.com/284612/86857568-a6c63100-c073-11ea-82a4-bfd531a4ec87.png",width:"500",alt:"Highlight selectors"})),Object(o.a)("h2",{id:"verbose-api-logs"},"Verbose API logs"),Object(o.a)("p",null,"Playwright supports verbose logging with the ",Object(o.a)("inlineCode",{parentName:"p"},"DEBUG")," environment variable."),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"# Linux/macOS\n$ DEBUG=pw:api npm run test\n\n# Windows\n$ set DEBUG=pw:api\n$ npm run test\n")))}s.isMDXComponent=!0},285:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=s(a),d=n,g=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return a?r.a.createElement(g,l(l({ref:t},u),{},{components:a})):r.a.createElement(g,l({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);