(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{326:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var i=a(2),n=a(6),l=(a(0),a(608)),r={id:"class-accessibility",title:"class: Accessibility"},o={unversionedId:"api/class-accessibility",id:"version-1.6.1/api/class-accessibility",isDocsHomePage:!1,title:"class: Accessibility",description:"The Accessibility class provides methods for inspecting Chromium's accessibility tree. The accessibility tree is used by assistive technology such as screen readers or switches.",source:"@site/versioned_docs/version-1.6.1/api/class-accessibility.md",slug:"/api/class-accessibility",permalink:"/pwdev/docs/api/class-accessibility",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.6.1/api/class-accessibility.md",version:"1.6.1",sidebar:"version-1.6.1/api",previous:{title:"class: TimeoutError",permalink:"/pwdev/docs/api/class-timeouterror"},next:{title:"class: Worker",permalink:"/pwdev/docs/api/class-worker"}},c=[{value:"accessibility.snapshot(options)",id:"accessibilitysnapshotoptions",children:[]}],s={rightToc:c};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.a)("wrapper",Object(i.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.a)("p",null,"The Accessibility class provides methods for inspecting Chromium's accessibility tree. The accessibility tree is used by assistive technology such as ",Object(l.a)("a",Object(i.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Screen_reader"}),"screen readers")," or ",Object(l.a)("a",Object(i.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Switch_access"}),"switches"),"."),Object(l.a)("p",null,"Accessibility is a very platform-specific thing. On different platforms, there are different screen readers that might have wildly different output."),Object(l.a)("p",null,'Blink - Chromium\'s rendering engine - has a concept of "accessibility tree", which is then translated into different platform-specific APIs. Accessibility namespace gives users\naccess to the Blink Accessibility Tree.'),Object(l.a)("p",null,'Most of the accessibility tree gets filtered out when converting from Blink AX Tree to Platform-specific AX-Tree or by assistive technologies themselves. By default, Playwright tries to approximate this filtering, exposing only the "interesting" nodes of the tree.'),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(i.a)({parentName:"li"},{href:"#accessibilitysnapshotoptions"}),"accessibility.snapshot([options])"))),Object(l.a)("h2",{id:"accessibilitysnapshotoptions"},"accessibility.snapshot(","[options]",")"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"options")," <","[Object]",">",Object(l.a)("ul",{parentName:"li"},Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"interestingOnly")," <","[boolean]","> Prune uninteresting nodes from the tree. Defaults to ",Object(l.a)("inlineCode",{parentName:"li"},"true"),"."),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"root")," <","[ElementHandle]","> The root DOM element for the snapshot. Defaults to the whole page."))),Object(l.a)("li",{parentName:"ul"},"returns: <","[Promise]","<","[null]","|","[Object]",">> An ","[AXNode]"," object with the following properties:",Object(l.a)("ul",{parentName:"li"},Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"role")," <","[string]","> The ",Object(l.a)("a",Object(i.a)({parentName:"li"},{href:"https://www.w3.org/TR/wai-aria/#usage_intro"}),"role"),"."),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"name")," <","[string]","> A human readable name for the node."),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"value")," <","[string]","|","[number]","> The current value of the node, if applicable."),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"description")," <","[string]","> An additional human readable description of the node, if applicable."),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"keyshortcuts")," <","[string]","> Keyboard shortcuts associated with this node, if applicable."),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"roledescription")," <","[string]","> A human readable alternative to the role, if applicable."),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"valuetext")," <","[string]","> A description of the current value, if applicable."),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"disabled")," <","[boolean]","> Whether the node is disabled, if applicable."),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"expanded")," <","[boolean]","> Whether the node is expanded or collapsed, if applicable."),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"focused")," <","[boolean]","> Whether the node is focused, if applicable."),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"modal")," <","[boolean]","> Whether the node is ",Object(l.a)("a",Object(i.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Modal_window"}),"modal"),", if applicable."),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"multiline")," <","[boolean]","> Whether the node text input supports multiline, if applicable."),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"multiselectable")," <","[boolean]","> Whether more than one child can be selected, if applicable."),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"readonly")," <","[boolean]","> Whether the node is read only, if applicable."),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"required")," <","[boolean]","> Whether the node is required, if applicable."),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"selected")," <","[boolean]","> Whether the node is selected in its parent node, if applicable."),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"checked")," <","[boolean]",'|"mixed"> Whether the checkbox is checked, or "mixed", if applicable.'),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"pressed")," <","[boolean]",'|"mixed"> Whether the toggle button is checked, or "mixed", if applicable.'),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"level")," <","[number]","> The level of a heading, if applicable."),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"valuemin")," <","[number]","> The minimum value in a node, if applicable."),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"valuemax")," <","[number]","> The maximum value in a node, if applicable."),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"autocomplete")," <","[string]","> What kind of autocomplete is supported by a control, if applicable."),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"haspopup")," <","[string]","> What kind of popup is currently being shown for a node, if applicable."),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"invalid")," <","[string]","> Whether and in what way this node's value is invalid, if applicable."),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"orientation")," <","[string]","> Whether the node is oriented horizontally or vertically, if applicable."),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"children")," <","[Array]","<","[Object]",">> Child ","[AXNode]","s of this node, if any, if applicable.")))),Object(l.a)("p",null,"Captures the current state of the accessibility tree. The returned object represents the root accessible node of the page."),Object(l.a)("blockquote",null,Object(l.a)("p",{parentName:"blockquote"},Object(l.a)("strong",{parentName:"p"},"NOTE")," The Chromium accessibility tree contains nodes that go unused on most platforms and by\nmost screen readers. Playwright will discard them as well for an easier to process tree,\nunless ",Object(l.a)("inlineCode",{parentName:"p"},"interestingOnly")," is set to ",Object(l.a)("inlineCode",{parentName:"p"},"false"),".")),Object(l.a)("p",null,"An example of dumping the entire accessibility tree:"),Object(l.a)("pre",null,Object(l.a)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"const snapshot = await page.accessibility.snapshot();\nconsole.log(snapshot);\n")),Object(l.a)("p",null,"An example of logging the focused node's name:"),Object(l.a)("pre",null,Object(l.a)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"const snapshot = await page.accessibility.snapshot();\nconst node = findFocusedNode(snapshot);\nconsole.log(node && node.name);\n\nfunction findFocusedNode(node) {\n  if (node.focused)\n    return node;\n  for (const child of node.children || []) {\n    const foundNode = findFocusedNode(child);\n    return foundNode;\n  }\n  return null;\n}\n")))}p.isMDXComponent=!0},608:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var i=a(0),n=a.n(i);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(a),u=i,m=d["".concat(r,".").concat(u)]||d[u]||b[u]||l;return a?n.a.createElement(m,o(o({ref:t},s),{},{components:a})):n.a.createElement(m,o({ref:t},s))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=a[s];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);