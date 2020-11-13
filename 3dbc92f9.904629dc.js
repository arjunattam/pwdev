(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{187:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(608)),i={id:"class-selectors",title:"class: Selectors"},s={unversionedId:"api/class-selectors",id:"version-1.4.0/api/class-selectors",isDocsHomePage:!1,title:"class: Selectors",description:"Selectors can be used to install custom selector engines. See Working with selectors for more information.",source:"@site/versioned_docs/version-1.4.0/api/class-selectors.md",slug:"/api/class-selectors",permalink:"/pwdev/docs/1.4.0/api/class-selectors",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.4.0/api/class-selectors.md",version:"1.4.0",sidebar:"version-1.4.0/api",previous:{title:"class: Response",permalink:"/pwdev/docs/1.4.0/api/class-response"},next:{title:"class: Route",permalink:"/pwdev/docs/1.4.0/api/class-route"}},c=[{value:"selectors.register(name, script, options)",id:"selectorsregistername-script-options",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"Selectors can be used to install custom selector engines. See ",Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"#working-with-selectors"}),"Working with selectors")," for more information."),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"#selectorsregistername-script-options"}),"selectors.register(name, script[, options])"))),Object(o.a)("h2",{id:"selectorsregistername-script-options"},"selectors.register(name, script","[, options]",")"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"name")," <","[string]","> Name that is used in selectors as a prefix, e.g. ",Object(o.a)("inlineCode",{parentName:"li"},"{name: 'foo'}")," enables ",Object(o.a)("inlineCode",{parentName:"li"},"foo=myselectorbody")," selectors. May only contain ",Object(o.a)("inlineCode",{parentName:"li"},"[a-zA-Z0-9_]")," characters."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"script")," <","[function]","|","[string]","|","[Object]","> Script that evaluates to a selector engine instance.",Object(o.a)("ul",{parentName:"li"},Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"path")," <","[string]","> Path to the JavaScript file. If ",Object(o.a)("inlineCode",{parentName:"li"},"path")," is a relative path, then it is resolved relative to ",Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"https://nodejs.org/api/process.html#process_process_cwd"}),"current working directory"),"."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"content")," <","[string]","> Raw script content."))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"options")," <","[Object]",">",Object(o.a)("ul",{parentName:"li"},Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"contentScript")," <","[boolean]","> Whether to run this selector engine in isolated JavaScript environment. This environment has access to the same DOM, but not any JavaScript objects from the frame's scripts. Defaults to ",Object(o.a)("inlineCode",{parentName:"li"},"false"),". Note that running as a content script is not guaranteed when this engine is used together with other registered engines."))),Object(o.a)("li",{parentName:"ul"},"returns: <","[Promise]",">")),Object(o.a)("p",null,"An example of registering selector engine that queries elements based on a tag name:"),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { selectors, firefox } = require('playwright');  // Or 'chromium' or 'webkit'.\n\n(async () => {\n  // Must be a function that evaluates to a selector engine instance.\n  const createTagNameEngine = () => ({\n    // Creates a selector that matches given target when queried at the root.\n    // Can return undefined if unable to create one.\n    create(root, target) {\n      return root.querySelector(target.tagName) === target ? target.tagName : undefined;\n    },\n\n    // Returns the first element matching given selector in the root's subtree.\n    query(root, selector) {\n      return root.querySelector(selector);\n    },\n\n    // Returns all elements matching given selector in the root's subtree.\n    queryAll(root, selector) {\n      return Array.from(root.querySelectorAll(selector));\n    }\n  });\n\n  // Register the engine. Selectors will be prefixed with \"tag=\".\n  await selectors.register('tag', createTagNameEngine);\n\n  const browser = await firefox.launch();\n  const page = await browser.newPage();\n  await page.setContent(`<div><button>Click me</button></div>`);\n\n  // Use the selector prefixed with its name.\n  const button = await page.$('tag=button');\n  // Combine it with other selector engines.\n  await page.click('tag=div >> text=\"Click me\"');\n  // Can use it in any methods supporting selectors.\n  const buttonCount = await page.$$eval('tag=button', buttons => buttons.length);\n\n  await browser.close();\n})();\n")))}p.isMDXComponent=!0},608:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),b=r,g=m["".concat(i,".").concat(b)]||m[b]||u[b]||o;return n?a.a.createElement(g,s(s({ref:t},l),{},{components:n})):a.a.createElement(g,s({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);