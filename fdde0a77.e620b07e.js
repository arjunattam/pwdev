(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{274:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a(2),c=a(6),i=(a(0),a(285)),l={id:"input",title:"Input"},r={unversionedId:"input",id:"version-1.3.0/input",isDocsHomePage:!1,title:"Input",description:"- Mouse click",source:"@site/versioned_docs/version-1.3.0/input.md",slug:"/input",permalink:"/pwdev/docs/1.3.0/input",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.3.0/input.md",version:"1.3.0",sidebar:"version-1.3.0/docs",previous:{title:"Element selectors",permalink:"/pwdev/docs/1.3.0/selectors"},next:{title:"Device and environment emulation",permalink:"/pwdev/docs/1.3.0/emulation"}},o=[{value:"Mouse click",id:"mouse-click",children:[]},{value:"Text input",id:"text-input",children:[]},{value:"Checkboxes",id:"checkboxes",children:[]},{value:"Select options",id:"select-options",children:[]},{value:"Type characters",id:"type-characters",children:[]},{value:"Keys and shortcuts",id:"keys-and-shortcuts",children:[]},{value:"Focus element",id:"focus-element",children:[]}],p={rightToc:o};function s(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#mouse-click"}),"Mouse click")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#text-input"}),"Text input")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#checkboxes"}),"Checkboxes")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#select-options"}),"Select options")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#type-characters"}),"Type characters")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#keys-and-shortcuts"}),"Keys and shortcuts")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#focus-element"}),"Focus element"))),Object(i.a)("br",null),Object(i.a)("h2",{id:"mouse-click"},"Mouse click"),Object(i.a)("p",null,"Performs a simple human click."),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Generic click\nawait page.click('button#submit');\n\n// Double click\nawait page.dblclick('#item');\n\n// Right click\nawait page.click('#item', { button: 'right' });\n\n// Shift + click\nawait page.click('#item', { modifiers: ['Shift'] });\n\n// Hover over element\nawait page.hover('#item');\n\n// Click the top left corner\nawait page.click('#item', { position: { x: 0, y: 0} });\n")),Object(i.a)("p",null,"Under the hood, this and other pointer-related methods:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"wait for element with given selector to be in DOM"),Object(i.a)("li",{parentName:"ul"},"wait for it to become displayed, i.e. not empty, no ",Object(i.a)("inlineCode",{parentName:"li"},"display:none"),", no ",Object(i.a)("inlineCode",{parentName:"li"},"visibility:hidden")),Object(i.a)("li",{parentName:"ul"},"wait for it to stop moving, for example, until css transition finishes"),Object(i.a)("li",{parentName:"ul"},"scroll the element into view"),Object(i.a)("li",{parentName:"ul"},"wait for it to receive pointer events at the action point, for example, waits until element becomes non-obscured by other elements"),Object(i.a)("li",{parentName:"ul"},"retry if the element is detached during any of the above checks")),Object(i.a)("h4",{id:"forcing-the-click"},"Forcing the click"),Object(i.a)("p",null,"Sometimes, apps use non-trivial logic where hovering the element overlays it with another element that intercepts the click. This behavior is indistinguishable from a bug where element gets covered and the click is dispatched elsewhere. If you know this is taking place, you can bypass the ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"/pwdev/docs/1.3.0/actionability"}),"actionability")," checks and force the click:"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await page.click('button#submit', { force: true });\n")),Object(i.a)("h4",{id:"programmatic-click"},"Programmatic click"),Object(i.a)("p",null,"If you are not interested in testing your app under the real conditions and want to simulate the click by any means possible, you can trigger the ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click"}),Object(i.a)("inlineCode",{parentName:"a"},"HTMLElement.click()"))," behavior via simply dispatching a click event on the element:"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await page.dispatchEvent('button#submit', 'click');\n")),Object(i.a)("h4",{id:"api-reference"},"API reference"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#pageclickselector-options"}),"page.click(selector[, options])")," \u2014 main frame"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#frameclickselector-options"}),"frame.click(selector[, options])")," \u2014 given frame"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#elementhandleclickoptions"}),"elementHandle.click([options])")," \u2014 given element"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#pagedblclickselector-options"}),"page.dblclick(selector[, options])")," \u2014 main frame"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#framedblclickselector-options"}),"frame.dblclick(selector[, options])")," \u2014 given frame"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#elementhandledblclickoptions"}),"elementHandle.dblclick([options])")," \u2014 given element"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#pagehoverselector-options"}),"page.hover(selector[, options])")," \u2014 main frame"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#framehoverselector-options"}),"frame.hover(selector[, options])")," \u2014 given frame"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#elementhandlehoveroptions"}),"elementHandle.hover([options])")," \u2014 given element"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#pagedispatcheventselector-type-eventinit-options"}),"page.dispatchEvent(selector, type)")," \u2014 main frame"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#framedispatcheventselector-type-eventinit-options"}),"frame.dispatchEvent(selector, type)")," \u2014 given frame"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#elementhandledispatcheventtype-eventinit"}),"elementHandle.dispatchEvent(type)")," \u2014 given element")),Object(i.a)("br",null),Object(i.a)("h2",{id:"text-input"},"Text input"),Object(i.a)("p",null,"This is the easiest way to fill out the form fields. It focuses the element and triggers an ",Object(i.a)("inlineCode",{parentName:"p"},"input")," event with the entered text. It works for ",Object(i.a)("inlineCode",{parentName:"p"},"<input>"),", ",Object(i.a)("inlineCode",{parentName:"p"},"<textarea>")," and ",Object(i.a)("inlineCode",{parentName:"p"},"[contenteditable]")," elements."),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Text input\nawait page.fill('#name', 'Peter');\n\n// Date input\nawait page.fill('#date', '2020-02-02');\n\n// Time input\nawait page.fill('#time', '13-15');\n\n// Local datetime input\nawait page.fill('#local', '2020-03-02T05:15');\n")),Object(i.a)("h4",{id:"api-reference-1"},"API reference"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#pagefillselector-value-options"}),"page.fill(selector, value[, options])")," \u2014 main frame"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#framefillselector-value-options"}),"frame.fill(selector, value[, options])")," \u2014 given frame"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#elementhandlefillvalue-options"}),"elementHandle.fill(value[, options])")," \u2014 given element")),Object(i.a)("br",null),Object(i.a)("h2",{id:"checkboxes"},"Checkboxes"),Object(i.a)("p",null,"This is the easiest way to check and uncheck a checkbox. This method can be used on the ",Object(i.a)("inlineCode",{parentName:"p"},"input[type=checkbox]")," and on the ",Object(i.a)("inlineCode",{parentName:"p"},"label")," associated with that input."),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Check the checkbox\nawait page.check('#agree');\n\n// Uncheck by input <label>.\nawait page.uncheck('#subscribe-label');\n")),Object(i.a)("h4",{id:"api-reference-2"},"API reference"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#pagecheckselector-options"}),"page.check(selector[, options])")," \u2014 main frame"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#pageuncheckselector-options"}),"page.uncheck(selector[, options])")," \u2014 main frame"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#framecheckselector-options"}),"frame.check(selector[, options])")," \u2014 given frame"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#frameuncheckselector-options"}),"frame.uncheck(selector[, options])")," \u2014 given frame"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#elementhandleuncheckoptions"}),"elementHandle.check(value[, options])")," \u2014 given element"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#elementhandleuncheckoptions"}),"elementHandle.uncheck(value[, options])")," \u2014 given element")),Object(i.a)("br",null),Object(i.a)("h2",{id:"select-options"},"Select options"),Object(i.a)("p",null,"Selects one or multiple options in the ",Object(i.a)("inlineCode",{parentName:"p"},"<select>")," element.\nYou can specify option ",Object(i.a)("inlineCode",{parentName:"p"},"value"),", ",Object(i.a)("inlineCode",{parentName:"p"},"label")," or ",Object(i.a)("inlineCode",{parentName:"p"},"elementHandle")," to select. Multiple options can be selected."),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Single selection matching the value\nawait page.selectOption('select#colors', 'blue');\n\n// Single selection matching the label\nawait page.selectOption('select#colors', { label: 'Blue' });\n\n// Multiple selected items\nawait page.selectOption('select#colors', ['red', 'green', 'blue']);\n\n// Select the option via element handle\nconst option = await page.$('#best-option');\nawait page.selectOption('select#colors', option);\n")),Object(i.a)("h4",{id:"api-reference-3"},"API reference"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#pageselectoptionselector-values-options"}),"page.selectOption(selector, values[, options])")," \u2014 main frame"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#frameselectoptionselector-values-options"}),"frame.selectOption(selector, values[, options])")," \u2014 given frame"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#elementhandleselectoptionvalues-options"}),"elementHandle.selectOption(values[, options])")," \u2014 given element")),Object(i.a)("br",null),Object(i.a)("h2",{id:"type-characters"},"Type characters"),Object(i.a)("p",null,"Type into the field character by character, as if it was a user with a real keyboard."),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Type character by character\nawait page.type('#area', 'Hello World!');\n")),Object(i.a)("p",null,"This method will emit all the necessary keyboard events, with all the ",Object(i.a)("inlineCode",{parentName:"p"},"keydown"),", ",Object(i.a)("inlineCode",{parentName:"p"},"keyup"),", ",Object(i.a)("inlineCode",{parentName:"p"},"keypress")," events in place. You can even specify the optional ",Object(i.a)("inlineCode",{parentName:"p"},"delay")," between the key presses to simulate real user behavior."),Object(i.a)("blockquote",null,Object(i.a)("p",{parentName:"blockquote"},Object(i.a)("strong",{parentName:"p"},"NOTE")," that most of the time, ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"#text-input"}),Object(i.a)("inlineCode",{parentName:"a"},"page.fill"))," will just work. You only need to type characters if there is special keyboard handling on the page.")),Object(i.a)("h4",{id:"api-reference-4"},"API reference"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#pagetypeselector-text-options"}),"page.type(selector, text[, options])")," \u2014 main frame"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#frametypeselector-text-options"}),"frame.type(selector, text[, options])")," \u2014 given frame"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#elementhandletypetext-options"}),"elementHandle.type(text[, options])")," \u2014 given element"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#keyboardtypetext-options"}),"keyboard.type(text[, options])")," \u2014 focused element")),Object(i.a)("br",null),Object(i.a)("h2",{id:"keys-and-shortcuts"},"Keys and shortcuts"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Hit Enter\nawait page.press('#submit', 'Enter');\n\n// Dispatch Control+Right\nawait page.press('#name', 'Control+ArrowRight');\n\n// Press $ sign on keyboard\nawait page.press('#value', '$');\n")),Object(i.a)("p",null,"This method focuses the selected element and produces a single keystroke. It accepts the logical key names that are emitted in the ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key"}),"keyboardEvent.key")," property of the keyboard events:"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{}),"Backquote, Minus, Equal, Backslash, Backspace, Tab, Delete, Escape,\nArrowDown, End, Enter, Home, Insert, PageDown, PageUp, ArrowRight,\nArrowUp, F1 - F12, Digit0 - Digit9, KeyA - KeyZ, etc.\n")),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("p",{parentName:"li"},"You can alternatively specify a single character you'd like to produce such as ",Object(i.a)("inlineCode",{parentName:"p"},'"a"')," or ",Object(i.a)("inlineCode",{parentName:"p"},'"#"'),".")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("p",{parentName:"li"},"Following modification shortcuts are also supported: ",Object(i.a)("inlineCode",{parentName:"p"},"Shift, Control, Alt, Meta"),"."))),Object(i.a)("p",null,"Simple version produces a single character. This character is case-sensitive, so ",Object(i.a)("inlineCode",{parentName:"p"},'"a"')," and ",Object(i.a)("inlineCode",{parentName:"p"},'"A"')," will produce different results."),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// <input id=name>\nawait page.press('#name', 'Shift+A');\n\n// <input id=name>\nawait page.press('#name', 'Shift+ArrowLeft');\n")),Object(i.a)("p",null,"Shortcuts such as ",Object(i.a)("inlineCode",{parentName:"p"},'"Control+o"')," or ",Object(i.a)("inlineCode",{parentName:"p"},'"Control+Shift+T"')," are supported as well. When specified with the modifier, modifier is pressed and being held while the subsequent key is being pressed."),Object(i.a)("p",null,"Note that you still need to specify the capital ",Object(i.a)("inlineCode",{parentName:"p"},"A")," in ",Object(i.a)("inlineCode",{parentName:"p"},"Shift-A")," to produce the capital character. ",Object(i.a)("inlineCode",{parentName:"p"},"Shift-a")," produces a lower-case one as if you had the ",Object(i.a)("inlineCode",{parentName:"p"},"CapsLock")," toggled."),Object(i.a)("h4",{id:"api-reference-5"},"API reference"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#pagepressselector-key-options"}),"page.press(selector, key[, options])")," \u2014 main frame"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#framepressselector-key-options"}),"frame.press(selector, key[, options])")," \u2014 given frame"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#elementhandlepresskey-options"}),"elementHandle.press(key[, options])")," \u2014 given element"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.3.0/api#keyboardpresskey-options"}),"keyboard.press(key[, options])")," \u2014 focused element")),Object(i.a)("br",null),Object(i.a)("h2",{id:"focus-element"},"Focus element"),Object(i.a)("p",null,"For the dynamic pages that handle focus events, you can focus the given element."),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await page.focus('input#name');\n")),Object(i.a)("h4",{id:"api-reference-6"},"API reference"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright/blob/master/docs/api.md#pagefocusselector-options"}),"page.focus(selector, [options])")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright/blob/master/docs/api.md#framefocusselector-options"}),"frame.focus(selector, [options])")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright/blob/master/docs/api.md#elementhandlefocus-options"}),"elementHandle.focus([options])"))),Object(i.a)("br",null))}s.isMDXComponent=!0},285:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),c=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var p=c.a.createContext({}),s=function(e){var t=c.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(a),u=n,d=m["".concat(l,".").concat(u)]||m[u]||b[u]||i;return a?c.a.createElement(d,r(r({ref:t},p),{},{components:a})):c.a.createElement(d,r({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:n,l[1]=r;for(var p=2;p<i;p++)l[p]=a[p];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);