(window.webpackJsonp=window.webpackJsonp||[]).push([[410],{467:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return d}));var n=a(2),i=a(6),l=(a(0),a(608)),c={id:"actionability",title:"Actionability"},r={unversionedId:"actionability",id:"version-1.6.0/actionability",isDocsHomePage:!1,title:"Actionability",description:"Playwright does a range of actionability checks on the elements before performing certain actions. These checks ensure that action behaves as expected, for example Playwright does not click on a disabled button.",source:"@site/versioned_docs/version-1.6.0/actionability.md",slug:"/actionability",permalink:"/pwdev/docs/1.6.0/actionability",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.6.0/actionability.md",version:"1.6.0",sidebar:"version-1.6.0/docs",previous:{title:"Continuous Integration",permalink:"/pwdev/docs/1.6.0/ci"},next:{title:"Advanced installation",permalink:"/pwdev/docs/1.6.0/installation"}},b=[{value:"Visible",id:"visible",children:[]},{value:"Stable",id:"stable",children:[]},{value:"Enabled",id:"enabled",children:[]},{value:"Editable",id:"editable",children:[]},{value:"Receiving events",id:"receiving-events",children:[]},{value:"Attached",id:"attached",children:[]}],o={rightToc:b};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(l.a)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.a)("p",null,"Playwright does a range of actionability checks on the elements before performing certain actions. These checks ensure that action behaves as expected, for example Playwright does not click on a disabled button."),Object(l.a)("p",null,"Playwright waits until all the relevant actionability checks pass before performing an action. This means that action will fail with ",Object(l.a)("inlineCode",{parentName:"p"},"TimeoutError")," if checks do not pass within the specified ",Object(l.a)("inlineCode",{parentName:"p"},"timeout"),"."),Object(l.a)("p",null,"Some actions like ",Object(l.a)("inlineCode",{parentName:"p"},"page.click()")," support ",Object(l.a)("inlineCode",{parentName:"p"},"{force: true}")," option that disable non-essential actionability checks, for example passing ",Object(l.a)("inlineCode",{parentName:"p"},"force")," to ",Object(l.a)("inlineCode",{parentName:"p"},"click()")," method will not check that the target element actually receives click events."),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Actions"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Performed checks"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"check()"),Object(l.a)("br",null),Object(l.a)("inlineCode",{parentName:"td"},"click()"),Object(l.a)("br",null),Object(l.a)("inlineCode",{parentName:"td"},"dblclick()"),Object(l.a)("br",null),Object(l.a)("inlineCode",{parentName:"td"},"uncheck()")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"#visible",title:"Visible"}),"Visible"),Object(l.a)("br",null),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"#stable",title:"Stable"}),"Stable"),Object(l.a)("br",null),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"#enabled",title:"Enabled"}),"Enabled"),Object(l.a)("br",null),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"#receiving-events",title:"Receiving Events"}),"Receiving Events"),Object(l.a)("br",null),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"#attached",title:"Attached"}),"Attached"))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"hover()")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"#visible",title:"Visible"}),"Visible"),Object(l.a)("br",null),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"#stable",title:"Stable"}),"Stable"),Object(l.a)("br",null),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"#receiving-events",title:"Receiving Events"}),"Receiving Events"),Object(l.a)("br",null),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"#attached",title:"Attached"}),"Attached"))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"fill()")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"#visible",title:"Visible"}),"Visible"),Object(l.a)("br",null),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"#enabled",title:"Enabled"}),"Enabled"),Object(l.a)("br",null),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"#editable",title:"Editable"}),"Editable"),Object(l.a)("br",null),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"#attached",title:"Attached"}),"Attached"))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"dispatchEvent()"),Object(l.a)("br",null),Object(l.a)("inlineCode",{parentName:"td"},"focus()"),Object(l.a)("br",null),Object(l.a)("inlineCode",{parentName:"td"},"press()"),Object(l.a)("br",null),Object(l.a)("inlineCode",{parentName:"td"},"setInputFiles()"),Object(l.a)("br",null),Object(l.a)("inlineCode",{parentName:"td"},"selectOption()"),Object(l.a)("br",null),Object(l.a)("inlineCode",{parentName:"td"},"type()")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"#attached",title:"Attached"}),"Attached"))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"scrollIntoViewIfNeeded()"),Object(l.a)("br",null),Object(l.a)("inlineCode",{parentName:"td"},"screenshot()")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"#visible",title:"Visible"}),"Visible"),Object(l.a)("br",null),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"#stable",title:"Stable"}),"Stable"),Object(l.a)("br",null),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"#attached",title:"Attached"}),"Attached"))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"selectText()")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"#visible",title:"Visible"}),"Visible"),Object(l.a)("br",null),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"#attached",title:"Attached"}),"Attached"))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"getAttribute()"),Object(l.a)("br",null),Object(l.a)("inlineCode",{parentName:"td"},"innerText()"),Object(l.a)("br",null),Object(l.a)("inlineCode",{parentName:"td"},"innerHTML()"),Object(l.a)("br",null),Object(l.a)("inlineCode",{parentName:"td"},"textContent()")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"#attached",title:"Attached"}),"Attached"))))),Object(l.a)("h3",{id:"visible"},"Visible"),Object(l.a)("p",null,"Element is considered visible when it has non-empty bounding box and does not have ",Object(l.a)("inlineCode",{parentName:"p"},"visibility:hidden")," computed style. Note that elements of zero size or with ",Object(l.a)("inlineCode",{parentName:"p"},"display:none")," are not considered visible."),Object(l.a)("h3",{id:"stable"},"Stable"),Object(l.a)("p",null,"Element is considered stable when it has maintained the same bounding box for at least two consecutive animation frames."),Object(l.a)("h3",{id:"enabled"},"Enabled"),Object(l.a)("p",null,"Element is considered enabled when it is not a ",Object(l.a)("inlineCode",{parentName:"p"},"<button>"),", ",Object(l.a)("inlineCode",{parentName:"p"},"<select>")," or ",Object(l.a)("inlineCode",{parentName:"p"},"<input>")," with a ",Object(l.a)("inlineCode",{parentName:"p"},"disabled")," property set."),Object(l.a)("h3",{id:"editable"},"Editable"),Object(l.a)("p",null,"Element is considered editable when it does not have ",Object(l.a)("inlineCode",{parentName:"p"},"readonly")," property set."),Object(l.a)("h3",{id:"receiving-events"},"Receiving events"),Object(l.a)("p",null,"Element is considered receiving pointer events when it is the hit target of the pointer event at the action point. For example, when clicking at the point ",Object(l.a)("inlineCode",{parentName:"p"},"(10;10)"),", Playwright checks whether some other element (usually an overlay) will instead capture the click at ",Object(l.a)("inlineCode",{parentName:"p"},"(10;10)"),"."),Object(l.a)("h3",{id:"attached"},"Attached"),Object(l.a)("p",null,"Element is considered attached when it is ",Object(l.a)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected"}),"connected")," to a Document or a ShadowRoot."),Object(l.a)("p",null,"Attached check differs between selector-based and handle-based actions, like ",Object(l.a)("inlineCode",{parentName:"p"},"page.click(selector, options)")," as opposite to ",Object(l.a)("inlineCode",{parentName:"p"},"elementHandle.click(options)"),":"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"For selector-based actions, Playwright first waits for an element matching ",Object(l.a)("inlineCode",{parentName:"li"},"selector")," to be attached to the DOM, and then checks that element is still attached before performing the action. If element was detached, the action is retried from the start."),Object(l.a)("li",{parentName:"ul"},"For handle-based actions, Playwright throws if the element is not attached.")),Object(l.a)("p",null,"For example, consider a scenario where Playwright will click ",Object(l.a)("inlineCode",{parentName:"p"},"Sign Up")," button regardless of when the ",Object(l.a)("inlineCode",{parentName:"p"},"page.click()")," call was made:"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"page is checking that user name is unique and ",Object(l.a)("inlineCode",{parentName:"li"},"Sign Up")," button is disabled;"),Object(l.a)("li",{parentName:"ul"},"after checking with the server, the disabled ",Object(l.a)("inlineCode",{parentName:"li"},"Sign Up")," button is replaced with another one that is now enabled.")))}d.isMDXComponent=!0},608:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a(0),i=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=i.a.createContext({}),d=function(e){var t=i.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),s=d(a),O=n,j=s["".concat(c,".").concat(O)]||s[O]||p[O]||l;return a?i.a.createElement(j,r(r({ref:t},o),{},{components:a})):i.a.createElement(j,r({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=s;var r={};for(var b in t)hasOwnProperty.call(t,b)&&(r[b]=t[b]);r.originalType=e,r.mdxType="string"==typeof e?e:n,c[1]=r;for(var o=2;o<l;o++)c[o]=a[o];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);