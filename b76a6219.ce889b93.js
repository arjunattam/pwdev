(window.webpackJsonp=window.webpackJsonp||[]).push([[386],{443:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return c})),t.d(a,"rightToc",(function(){return l})),t.d(a,"default",(function(){return p}));var r=t(2),o=t(6),n=(t(0),t(608)),i={id:"class-chromiumcoverage",title:"class: ChromiumCoverage"},c={unversionedId:"api/class-chromiumcoverage",id:"version-1.4.0/api/class-chromiumcoverage",isDocsHomePage:!1,title:"class: ChromiumCoverage",description:"Coverage gathers information about parts of JavaScript and CSS that were used by the page.",source:"@site/versioned_docs/version-1.4.0/api/class-chromiumcoverage.md",slug:"/api/class-chromiumcoverage",permalink:"/pwdev/docs/1.4.0/api/class-chromiumcoverage",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.4.0/api/class-chromiumcoverage.md",version:"1.4.0",sidebar:"version-1.4.0/api",previous:{title:"class: ChromiumBrowserContext",permalink:"/pwdev/docs/1.4.0/api/class-chromiumbrowsercontext"},next:{title:"class: CDPSession",permalink:"/pwdev/docs/1.4.0/api/class-cdpsession"}},l=[{value:"chromiumCoverage.startCSSCoverage(options)",id:"chromiumcoveragestartcsscoverageoptions",children:[]},{value:"chromiumCoverage.startJSCoverage(options)",id:"chromiumcoveragestartjscoverageoptions",children:[]},{value:"chromiumCoverage.stopCSSCoverage()",id:"chromiumcoveragestopcsscoverage",children:[]},{value:"chromiumCoverage.stopJSCoverage()",id:"chromiumcoveragestopjscoverage",children:[]}],s={rightToc:l};function p(e){var a=e.components,t=Object(o.a)(e,["components"]);return Object(n.a)("wrapper",Object(r.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(n.a)("p",null,"Coverage gathers information about parts of JavaScript and CSS that were used by the page."),Object(n.a)("p",null,"An example of using JavaScript coverage to produce Istambul report for page load:"),Object(n.a)("pre",null,Object(n.a)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { chromium } = require('playwright');\nconst v8toIstanbul = require('v8-to-istanbul');\n\n(async() => {\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n  await page.coverage.startJSCoverage();\n  await page.goto('https://chromium.org');\n  const coverage = await page.coverage.stopJSCoverage();\n  for (const entry of coverage) {\n    const converter = new v8toIstanbul('', 0, { source: entry.source });\n    await converter.load();\n    converter.applyCoverage(entry.functions);\n    console.log(JSON.stringify(converter.toIstanbul()));\n  }\n  await browser.close();\n})();\n")),Object(n.a)("ul",null,Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"#chromiumcoveragestartcsscoverageoptions"}),"chromiumCoverage.startCSSCoverage([options])")),Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"#chromiumcoveragestartjscoverageoptions"}),"chromiumCoverage.startJSCoverage([options])")),Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"#chromiumcoveragestopcsscoverage"}),"chromiumCoverage.stopCSSCoverage()")),Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"#chromiumcoveragestopjscoverage"}),"chromiumCoverage.stopJSCoverage()"))),Object(n.a)("h2",{id:"chromiumcoveragestartcsscoverageoptions"},"chromiumCoverage.startCSSCoverage(","[options]",")"),Object(n.a)("ul",null,Object(n.a)("li",{parentName:"ul"},Object(n.a)("inlineCode",{parentName:"li"},"options")," <","[Object]","> Set of configurable options for coverage",Object(n.a)("ul",{parentName:"li"},Object(n.a)("li",{parentName:"ul"},Object(n.a)("inlineCode",{parentName:"li"},"resetOnNavigation")," <","[boolean]","> Whether to reset coverage on every navigation. Defaults to ",Object(n.a)("inlineCode",{parentName:"li"},"true"),"."))),Object(n.a)("li",{parentName:"ul"},"returns: <","[Promise]","> Promise that resolves when coverage is started")),Object(n.a)("h2",{id:"chromiumcoveragestartjscoverageoptions"},"chromiumCoverage.startJSCoverage(","[options]",")"),Object(n.a)("ul",null,Object(n.a)("li",{parentName:"ul"},Object(n.a)("inlineCode",{parentName:"li"},"options")," <","[Object]","> Set of configurable options for coverage",Object(n.a)("ul",{parentName:"li"},Object(n.a)("li",{parentName:"ul"},Object(n.a)("inlineCode",{parentName:"li"},"resetOnNavigation")," <","[boolean]","> Whether to reset coverage on every navigation. Defaults to ",Object(n.a)("inlineCode",{parentName:"li"},"true"),"."),Object(n.a)("li",{parentName:"ul"},Object(n.a)("inlineCode",{parentName:"li"},"reportAnonymousScripts")," <","[boolean]","> Whether anonymous scripts generated by the page should be reported. Defaults to ",Object(n.a)("inlineCode",{parentName:"li"},"false"),"."))),Object(n.a)("li",{parentName:"ul"},"returns: <","[Promise]","> Promise that resolves when coverage is started")),Object(n.a)("blockquote",null,Object(n.a)("p",{parentName:"blockquote"},Object(n.a)("strong",{parentName:"p"},"NOTE")," Anonymous scripts are ones that don't have an associated url. These are scripts that are dynamically created on the page using ",Object(n.a)("inlineCode",{parentName:"p"},"eval")," or ",Object(n.a)("inlineCode",{parentName:"p"},"new Function"),". If ",Object(n.a)("inlineCode",{parentName:"p"},"reportAnonymousScripts")," is set to ",Object(n.a)("inlineCode",{parentName:"p"},"true"),", anonymous scripts will have ",Object(n.a)("inlineCode",{parentName:"p"},"__playwright_evaluation_script__")," as their URL.")),Object(n.a)("h2",{id:"chromiumcoveragestopcsscoverage"},"chromiumCoverage.stopCSSCoverage()"),Object(n.a)("ul",null,Object(n.a)("li",{parentName:"ul"},"returns: <","[Promise]","<","[Array]","<","[Object]",">>> Promise that resolves to the array of coverage reports for all stylesheets",Object(n.a)("ul",{parentName:"li"},Object(n.a)("li",{parentName:"ul"},Object(n.a)("inlineCode",{parentName:"li"},"url")," <","[string]","> StyleSheet URL"),Object(n.a)("li",{parentName:"ul"},Object(n.a)("inlineCode",{parentName:"li"},"text")," <","[string]","> StyleSheet content, if available."),Object(n.a)("li",{parentName:"ul"},Object(n.a)("inlineCode",{parentName:"li"},"ranges")," <","[Array]","<","[Object]",">> StyleSheet ranges that were used. Ranges are sorted and non-overlapping.",Object(n.a)("ul",{parentName:"li"},Object(n.a)("li",{parentName:"ul"},Object(n.a)("inlineCode",{parentName:"li"},"start")," <","[number]","> A start offset in text, inclusive"),Object(n.a)("li",{parentName:"ul"},Object(n.a)("inlineCode",{parentName:"li"},"end")," <","[number]","> An end offset in text, exclusive")))))),Object(n.a)("blockquote",null,Object(n.a)("p",{parentName:"blockquote"},Object(n.a)("strong",{parentName:"p"},"NOTE")," CSS Coverage doesn't include dynamically injected style tags without sourceURLs.")),Object(n.a)("h2",{id:"chromiumcoveragestopjscoverage"},"chromiumCoverage.stopJSCoverage()"),Object(n.a)("ul",null,Object(n.a)("li",{parentName:"ul"},"returns: <","[Promise]","<","[Array]","<","[Object]",">>> Promise that resolves to the array of coverage reports for all scripts",Object(n.a)("ul",{parentName:"li"},Object(n.a)("li",{parentName:"ul"},Object(n.a)("inlineCode",{parentName:"li"},"url")," <","[string]","> Script URL"),Object(n.a)("li",{parentName:"ul"},Object(n.a)("inlineCode",{parentName:"li"},"scriptId")," <","[string]","> Script ID"),Object(n.a)("li",{parentName:"ul"},Object(n.a)("inlineCode",{parentName:"li"},"source")," <","[string]","> Script content, if applicable."),Object(n.a)("li",{parentName:"ul"},Object(n.a)("inlineCode",{parentName:"li"},"functions")," <","[Array]","<","[Object]",">> V8-specific coverage format.",Object(n.a)("ul",{parentName:"li"},Object(n.a)("li",{parentName:"ul"},Object(n.a)("inlineCode",{parentName:"li"},"functionName")," <","[string]",">"),Object(n.a)("li",{parentName:"ul"},Object(n.a)("inlineCode",{parentName:"li"},"isBlockCoverage")," <","[boolean]",">"),Object(n.a)("li",{parentName:"ul"},Object(n.a)("inlineCode",{parentName:"li"},"ranges")," <","[Array]","<","[Object]",">>",Object(n.a)("ul",{parentName:"li"},Object(n.a)("li",{parentName:"ul"},Object(n.a)("inlineCode",{parentName:"li"},"count")," <","[number]",">"),Object(n.a)("li",{parentName:"ul"},Object(n.a)("inlineCode",{parentName:"li"},"startOffset")," <","[number]",">"),Object(n.a)("li",{parentName:"ul"},Object(n.a)("inlineCode",{parentName:"li"},"endOffset")," <","[number]",">")))))))),Object(n.a)("blockquote",null,Object(n.a)("p",{parentName:"blockquote"},Object(n.a)("strong",{parentName:"p"},"NOTE")," JavaScript Coverage doesn't include anonymous scripts by default. However, scripts with sourceURLs are\nreported.")))}p.isMDXComponent=!0},608:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var r=t(0),o=t.n(r);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var a=o.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},u={inlineCode:"code",wrapper:function(e){var a=e.children;return o.a.createElement(o.a.Fragment,{},a)}},m=o.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(t),b=r,g=m["".concat(i,".").concat(b)]||m[b]||u[b]||n;return t?o.a.createElement(g,c(c({ref:a},s),{},{components:t})):o.a.createElement(g,c({ref:a},s))}));function b(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,i=new Array(n);i[0]=m;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<n;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);