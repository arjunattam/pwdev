(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{216:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),l=(a(0),a(608)),i={id:"a11y",title:"Accessibility testing with Playwright [WIP]"},c={unversionedId:"a11y",id:"a11y",isDocsHomePage:!1,title:"Accessibility testing with Playwright [WIP]",description:"Why",source:"@site/docs/a11y.md",slug:"/a11y",permalink:"/pwdev/docs/next/a11y",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/a11y.md",version:"current"},o=[],u={rightToc:o};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.a)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(l.a)("p",null,"Why"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"native input events")),Object(l.a)("p",null,"Common issues"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"Unable to read",Object(l.a)("ul",{parentName:"li"},Object(l.a)("li",{parentName:"ul"},"Incorrect screen reader (VoiceOver) behavior",Object(l.a)("ul",{parentName:"li"},Object(l.a)("li",{parentName:"ul"},"Focus landing on wrong element"),Object(l.a)("li",{parentName:"ul"},"Focus order is incorrect"))),Object(l.a)("li",{parentName:"ul"},"Missing alt-text (static violations)"))),Object(l.a)("li",{parentName:"ul"},"Unable to interact",Object(l.a)("ul",{parentName:"li"},Object(l.a)("li",{parentName:"ul"},"Enter to click a link"),Object(l.a)("li",{parentName:"ul"},"Left/right to select options"),Object(l.a)("li",{parentName:"ul"},"Form interactions: checkbox space"))),Object(l.a)("li",{parentName:"ul"},"Special elements",Object(l.a)("ul",{parentName:"li"},Object(l.a)("li",{parentName:"ul"},"Auto completion"),Object(l.a)("li",{parentName:"ul"},"Date picker",Object(l.a)("ul",{parentName:"li"},Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"https://www.accessibility-developer-guide.com/examples/widgets/datepicker/"}),"https://www.accessibility-developer-guide.com/examples/widgets/datepicker/"))))))),Object(l.a)("p",null,"Recommended patterns"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"Autofocus or not",Object(l.a)("ul",{parentName:"li"},Object(l.a)("li",{parentName:"ul"},"Google has auto-focus"),Object(l.a)("li",{parentName:"ul"},'most blind users always intuitively press Ctrl + Home first ("Auto focus workaround")')))),Object(l.a)("p",null,"Techniques to solving"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"Static violations detection with Axe (check for semantics?)",Object(l.a)("ul",{parentName:"li"},Object(l.a)("li",{parentName:"ul"},"Alt-text"),Object(l.a)("li",{parentName:"ul"},"Contrast"),Object(l.a)("li",{parentName:"ul"},"Full list: ",Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"https://dequeuniversity.com/rules/axe/3.5"}),"https://dequeuniversity.com/rules/axe/3.5")))),Object(l.a)("li",{parentName:"ul"},"Full website violations (",Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/JakePartusch/lumberjack"}),"https://github.com/JakePartusch/lumberjack"),")"),Object(l.a)("li",{parentName:"ul"},"Tab stops",Object(l.a)("ul",{parentName:"li"},Object(l.a)("li",{parentName:"ul"},"After page load"),Object(l.a)("li",{parentName:"ul"},"Tab after a specific active element"))),Object(l.a)("li",{parentName:"ul"},"Accessibility tree"),Object(l.a)("li",{parentName:"ul"},"Shadow DOM testing"),Object(l.a)("li",{parentName:"ul"},"Aria live regions",Object(l.a)("ul",{parentName:"li"},Object(l.a)("li",{parentName:"ul"},"Can I test assertive / polite announcement?")))),Object(l.a)("p",null,"Other approaches"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"Press tab to check all interactive elements are covered",Object(l.a)("ul",{parentName:"li"},Object(l.a)("li",{parentName:"ul"},'Including "fake buttons (div)"'))),Object(l.a)("li",{parentName:"ul"},"Roving tabindex for custom components")),Object(l.a)("p",null,"Limitations"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"Regressions \u2013 and not exploratory",Object(l.a)("ul",{parentName:"li"},Object(l.a)("li",{parentName:"ul"},"How to avoid? Always define behavior if current element is in focus?")))),Object(l.a)("p",null,"Notes"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("p",{parentName:"li"},'What does "swipe left" do in VO?')),Object(l.a)("li",{parentName:"ul"},Object(l.a)("p",{parentName:"li"},"Aria role=application"),Object(l.a)("ul",{parentName:"li"},Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"https://marcozehe.de/2012/02/06/if-you-use-the-wai-aria-role-application-please-do-so-wisely/"}),"https://marcozehe.de/2012/02/06/if-you-use-the-wai-aria-role-application-please-do-so-wisely/"))))))}p.isMDXComponent=!0},608:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),p=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),b=p(a),m=n,O=b["".concat(i,".").concat(m)]||b[m]||s[m]||l;return a?r.a.createElement(O,c(c({ref:t},u),{},{components:a})):r.a.createElement(O,c({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=b;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<l;u++)i[u]=a[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);