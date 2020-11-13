(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{107:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(2),o=a(6),i=(a(0),a(149)),l={id:"class-mouse",title:"class: Mouse"},r={unversionedId:"api/class-mouse",id:"api/class-mouse",isDocsHomePage:!1,title:"class: Mouse",description:"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport.",source:"@site/docs/api/class-mouse.md",slug:"/api/class-mouse",permalink:"/pwdev/docs/api/class-mouse",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/class-mouse.md",version:"current",sidebar:"api",previous:{title:"class: Keyboard",permalink:"/pwdev/docs/api/class-keyboard"},next:{title:"class: Touchscreen",permalink:"/pwdev/docs/api/class-touchscreen"}},c=[{value:"mouse.click(x, y, options)",id:"mouseclickx-y-options",children:[]},{value:"mouse.dblclick(x, y, options)",id:"mousedblclickx-y-options",children:[]},{value:"mouse.down(options)",id:"mousedownoptions",children:[]},{value:"mouse.move(x, y, options)",id:"mousemovex-y-options",children:[]},{value:"mouse.up(options)",id:"mouseupoptions",children:[]}],p={rightToc:c};function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport."),Object(i.a)("p",null,"Every ",Object(i.a)("inlineCode",{parentName:"p"},"page")," object has its own Mouse, accessible with ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"#pagemouse"}),Object(i.a)("inlineCode",{parentName:"a"},"page.mouse")),"."),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Using \u2018page.mouse\u2019 to trace a 100x100 square.\nawait page.mouse.move(0, 0);\nawait page.mouse.down();\nawait page.mouse.move(0, 100);\nawait page.mouse.move(100, 100);\nawait page.mouse.move(100, 0);\nawait page.mouse.move(0, 0);\nawait page.mouse.up();\n")),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#mouseclickx-y-options"}),"mouse.click(x, y[, options])")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#mousedblclickx-y-options"}),"mouse.dblclick(x, y[, options])")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#mousedownoptions"}),"mouse.down([options])")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#mousemovex-y-options"}),"mouse.move(x, y[, options])")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#mouseupoptions"}),"mouse.up([options])"))),Object(i.a)("h2",{id:"mouseclickx-y-options"},"mouse.click(x, y","[, options]",")"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"x")," <","[number]",">"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"y")," <","[number]",">"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"options")," <","[Object]",">",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"button"),' <"left"|"right"|"middle"> Defaults to ',Object(i.a)("inlineCode",{parentName:"li"},"left"),"."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"clickCount")," <","[number]","> defaults to 1. See ","[UIEvent.detail]","."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"delay")," <","[number]","> Time to wait between ",Object(i.a)("inlineCode",{parentName:"li"},"mousedown")," and ",Object(i.a)("inlineCode",{parentName:"li"},"mouseup")," in milliseconds. Defaults to 0."))),Object(i.a)("li",{parentName:"ul"},"returns: <","[Promise]",">")),Object(i.a)("p",null,"Shortcut for ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"#mousemovex-y-options"}),Object(i.a)("inlineCode",{parentName:"a"},"mouse.move")),", ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"#mousedownoptions"}),Object(i.a)("inlineCode",{parentName:"a"},"mouse.down"))," and ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"#mouseupoptions"}),Object(i.a)("inlineCode",{parentName:"a"},"mouse.up")),"."),Object(i.a)("h2",{id:"mousedblclickx-y-options"},"mouse.dblclick(x, y","[, options]",")"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"x")," <","[number]",">"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"y")," <","[number]",">"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"options")," <","[Object]",">",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"button"),' <"left"|"right"|"middle"> Defaults to ',Object(i.a)("inlineCode",{parentName:"li"},"left"),"."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"delay")," <","[number]","> Time to wait between ",Object(i.a)("inlineCode",{parentName:"li"},"mousedown")," and ",Object(i.a)("inlineCode",{parentName:"li"},"mouseup")," in milliseconds. Defaults to 0."))),Object(i.a)("li",{parentName:"ul"},"returns: <","[Promise]",">")),Object(i.a)("p",null,"Shortcut for ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"#mousemovex-y-options"}),Object(i.a)("inlineCode",{parentName:"a"},"mouse.move")),", ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"#mousedownoptions"}),Object(i.a)("inlineCode",{parentName:"a"},"mouse.down")),", ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"#mouseupoptions"}),Object(i.a)("inlineCode",{parentName:"a"},"mouse.up")),", ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"#mousedownoptions"}),Object(i.a)("inlineCode",{parentName:"a"},"mouse.down"))," and ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"#mouseupoptions"}),Object(i.a)("inlineCode",{parentName:"a"},"mouse.up")),"."),Object(i.a)("h2",{id:"mousedownoptions"},"mouse.down(","[options]",")"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"options")," <","[Object]",">",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"button"),' <"left"|"right"|"middle"> Defaults to ',Object(i.a)("inlineCode",{parentName:"li"},"left"),"."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"clickCount")," <","[number]","> defaults to 1. See ","[UIEvent.detail]","."))),Object(i.a)("li",{parentName:"ul"},"returns: <","[Promise]",">")),Object(i.a)("p",null,"Dispatches a ",Object(i.a)("inlineCode",{parentName:"p"},"mousedown")," event."),Object(i.a)("h2",{id:"mousemovex-y-options"},"mouse.move(x, y","[, options]",")"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"x")," <","[number]",">"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"y")," <","[number]",">"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"options")," <","[Object]",">",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"steps")," <","[number]","> defaults to 1. Sends intermediate ",Object(i.a)("inlineCode",{parentName:"li"},"mousemove")," events."))),Object(i.a)("li",{parentName:"ul"},"returns: <","[Promise]",">")),Object(i.a)("p",null,"Dispatches a ",Object(i.a)("inlineCode",{parentName:"p"},"mousemove")," event."),Object(i.a)("h2",{id:"mouseupoptions"},"mouse.up(","[options]",")"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"options")," <","[Object]",">",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"button"),' <"left"|"right"|"middle"> Defaults to ',Object(i.a)("inlineCode",{parentName:"li"},"left"),"."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"clickCount")," <","[number]","> defaults to 1. See ","[UIEvent.detail]","."))),Object(i.a)("li",{parentName:"ul"},"returns: <","[Promise]",">")),Object(i.a)("p",null,"Dispatches a ",Object(i.a)("inlineCode",{parentName:"p"},"mouseup")," event."))}u.isMDXComponent=!0},149:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(a),b=n,O=m["".concat(l,".").concat(b)]||m[b]||s[b]||i;return a?o.a.createElement(O,r(r({ref:t},p),{},{components:a})):o.a.createElement(O,r({ref:t},p))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:n,l[1]=r;for(var p=2;p<i;p++)l[p]=a[p];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);