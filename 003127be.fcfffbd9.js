(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{59:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),i=(n(0),n(608)),o={id:"extensibility",title:"Extensibility"},c={unversionedId:"extensibility",id:"version-1.5.2/extensibility",isDocsHomePage:!1,title:"Extensibility",description:"- Custom selector engines",source:"@site/versioned_docs/version-1.5.2/extensibility.md",slug:"/extensibility",permalink:"/pwdev/docs/1.5.2/extensibility",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.5.2/extensibility.md",version:"1.5.2",sidebar:"version-1.5.2/docs",previous:{title:"Advanced installation",permalink:"/pwdev/docs/1.5.2/installation"}},l=[{value:"Custom selector engines",id:"custom-selector-engines",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"#custom-selector-engines"}),"Custom selector engines"))),Object(i.a)("h2",{id:"custom-selector-engines"},"Custom selector engines"),Object(i.a)("p",null,"Playwright supports custom selector engines, registered with ",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"/pwdev/docs/1.5.2/api#selectorsregistername-script-options"}),"selectors.register(name, script[, options])"),"."),Object(i.a)("p",null,"Selector engine should have the following properties:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"create")," function to create a relative selector from ",Object(i.a)("inlineCode",{parentName:"li"},"root")," (root is either a ",Object(i.a)("inlineCode",{parentName:"li"},"Document"),", ",Object(i.a)("inlineCode",{parentName:"li"},"ShadowRoot")," or ",Object(i.a)("inlineCode",{parentName:"li"},"Element"),") to a ",Object(i.a)("inlineCode",{parentName:"li"},"target")," element."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"query")," function to query first element matching ",Object(i.a)("inlineCode",{parentName:"li"},"selector")," relative to the ",Object(i.a)("inlineCode",{parentName:"li"},"root"),"."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"queryAll")," function to query all elements matching ",Object(i.a)("inlineCode",{parentName:"li"},"selector")," relative to the ",Object(i.a)("inlineCode",{parentName:"li"},"root"),".")),Object(i.a)("p",null,"By default the engine is run directly in the frame's JavaScript context and, for example, can call an application-defined function. To isolate the engine from any JavaScript in the frame, but leave access to the DOM, register the engine with ",Object(i.a)("inlineCode",{parentName:"p"},"{contentScript: true}")," option. Content script engine is safer because it is protected from any tampering with the global objects, for example altering ",Object(i.a)("inlineCode",{parentName:"p"},"Node.prototype")," methods. All built-in selector engines run as content scripts. Note that running as a content script is not guaranteed when the engine is used together with other custom engines."),Object(i.a)("p",null,"An example of registering selector engine that queries elements based on a tag name:"),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// Must be a function that evaluates to a selector engine instance.\nconst createTagNameEngine = () => ({\n  // Creates a selector that matches given target when queried at the root.\n  // Can return undefined if unable to create one.\n  create(root, target) {\n    return root.querySelector(target.tagName) === target ? target.tagName : undefined;\n  },\n\n  // Returns the first element matching given selector in the root's subtree.\n  query(root, selector) {\n    return root.querySelector(selector);\n  },\n\n  // Returns all elements matching given selector in the root's subtree.\n  queryAll(root, selector) {\n    return Array.from(root.querySelectorAll(selector));\n  }\n});\n\n// Register the engine. Selectors will be prefixed with \"tag=\".\nawait selectors.register('tag', createTagNameEngine);\n\n// Now we can use 'tag=' selectors.\nconst button = await page.$('tag=button');\n\n// We can combine it with other selector engines using `>>` combinator.\nawait page.click('tag=div >> span >> \"Click me\"');\n\n// We can use it in any methods supporting selectors.\nconst buttonCount = await page.$$eval('tag=button', buttons => buttons.length);\n")))}u.isMDXComponent=!0},608:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),b=r,g=m["".concat(o,".").concat(b)]||m[b]||p[b]||i;return n?a.a.createElement(g,c(c({ref:t},s),{},{components:n})):a.a.createElement(g,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);