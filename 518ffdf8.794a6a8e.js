(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{226:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a(2),i=a(6),l=(a(0),a(608)),c={id:"input",title:"Input"},r={unversionedId:"input",id:"version-1.4.0/input",isDocsHomePage:!1,title:"Input",description:"- Text input",source:"@site/versioned_docs/version-1.4.0/input.md",slug:"/input",permalink:"/pwdev/docs/1.4.0/input",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.4.0/input.md",version:"1.4.0",sidebar:"version-1.4.0/docs",previous:{title:"Element selectors",permalink:"/pwdev/docs/1.4.0/selectors"},next:{title:"Device and environment emulation",permalink:"/pwdev/docs/1.4.0/emulation"}},o=[{value:"Text input",id:"text-input",children:[]},{value:"Checkboxes",id:"checkboxes",children:[]},{value:"Select options",id:"select-options",children:[]},{value:"Mouse click",id:"mouse-click",children:[]},{value:"Type characters",id:"type-characters",children:[]},{value:"Keys and shortcuts",id:"keys-and-shortcuts",children:[]},{value:"Upload files",id:"upload-files",children:[]},{value:"Focus element",id:"focus-element",children:[]}],p={rightToc:o};function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(l.a)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"#text-input"}),"Text input")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"#checkboxes"}),"Checkboxes")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"#select-options"}),"Select options")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"#mouse-click"}),"Mouse click")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"#type-characters"}),"Type characters")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"#keys-and-shortcuts"}),"Keys and shortcuts")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"#upload-files"}),"Upload files")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"#focus-element"}),"Focus element"))),Object(l.a)("br",null),Object(l.a)("h2",{id:"text-input"},"Text input"),Object(l.a)("p",null,"This is the easiest way to fill out the form fields. It focuses the element and triggers an ",Object(l.a)("inlineCode",{parentName:"p"},"input")," event with the entered text. It works for ",Object(l.a)("inlineCode",{parentName:"p"},"<input>"),", ",Object(l.a)("inlineCode",{parentName:"p"},"<textarea>")," and ",Object(l.a)("inlineCode",{parentName:"p"},"[contenteditable]")," elements."),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Text input\nawait page.fill('#name', 'Peter');\n\n// Date input\nawait page.fill('#date', '2020-02-02');\n\n// Time input\nawait page.fill('#time', '13-15');\n\n// Local datetime input\nawait page.fill('#local', '2020-03-02T05:15');\n")),Object(l.a)("h4",{id:"api-reference"},"API reference"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.4.0/api#pagefillselector-value-options"}),"page.fill(selector, value[, options])")," \u2014 main frame"),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.4.0/api#framefillselector-value-options"}),"frame.fill(selector, value[, options])")," \u2014 given frame"),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.4.0/api#elementhandlefillvalue-options"}),"elementHandle.fill(value[, options])")," \u2014 given element")),Object(l.a)("br",null),Object(l.a)("h2",{id:"checkboxes"},"Checkboxes"),Object(l.a)("p",null,"This is the easiest way to check and uncheck a checkbox. This method can be used on the ",Object(l.a)("inlineCode",{parentName:"p"},"input[type=checkbox]")," and on the ",Object(l.a)("inlineCode",{parentName:"p"},"label")," associated with that input."),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Check the checkbox\nawait page.check('#agree');\n\n// Uncheck by input <label>.\nawait page.uncheck('#subscribe-label');\n")),Object(l.a)("h4",{id:"api-reference-1"},"API reference"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.4.0/api#pagecheckselector-options"}),"page.check(selector[, options])")," \u2014 main frame"),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.4.0/api#pageuncheckselector-options"}),"page.uncheck(selector[, options])")," \u2014 main frame"),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.4.0/api#framecheckselector-options"}),"frame.check(selector[, options])")," \u2014 given frame"),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.4.0/api#frameuncheckselector-options"}),"frame.uncheck(selector[, options])")," \u2014 given frame"),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.4.0/api#elementhandleuncheckoptions"}),"elementHandle.check(value[, options])")," \u2014 given element"),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.4.0/api#elementhandleuncheckoptions"}),"elementHandle.uncheck(value[, options])")," \u2014 given element")),Object(l.a)("br",null),Object(l.a)("h2",{id:"select-options"},"Select options"),Object(l.a)("p",null,"Selects one or multiple options in the ",Object(l.a)("inlineCode",{parentName:"p"},"<select>")," element.\nYou can specify option ",Object(l.a)("inlineCode",{parentName:"p"},"value"),", ",Object(l.a)("inlineCode",{parentName:"p"},"label")," or ",Object(l.a)("inlineCode",{parentName:"p"},"elementHandle")," to select. Multiple options can be selected."),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Single selection matching the value\nawait page.selectOption('select#colors', 'blue');\n\n// Single selection matching the label\nawait page.selectOption('select#colors', { label: 'Blue' });\n\n// Multiple selected items\nawait page.selectOption('select#colors', ['red', 'green', 'blue']);\n\n// Select the option via element handle\nconst option = await page.$('#best-option');\nawait page.selectOption('select#colors', option);\n")),Object(l.a)("h4",{id:"api-reference-2"},"API reference"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.4.0/api#pageselectoptionselector-values-options"}),"page.selectOption(selector, values[, options])")," \u2014 main frame"),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.4.0/api#frameselectoptionselector-values-options"}),"frame.selectOption(selector, values[, options])")," \u2014 given frame"),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.4.0/api#elementhandleselectoptionvalues-options"}),"elementHandle.selectOption(values[, options])")," \u2014 given element")),Object(l.a)("br",null),Object(l.a)("h2",{id:"mouse-click"},"Mouse click"),Object(l.a)("p",null,"Performs a simple human click."),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Generic click\nawait page.click('button#submit');\n\n// Double click\nawait page.dblclick('#item');\n\n// Right click\nawait page.click('#item', { button: 'right' });\n\n// Shift + click\nawait page.click('#item', { modifiers: ['Shift'] });\n\n// Hover over element\nawait page.hover('#item');\n\n// Click the top left corner\nawait page.click('#item', { position: { x: 0, y: 0} });\n")),Object(l.a)("p",null,"Under the hood, this and other pointer-related methods:"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"wait for element with given selector to be in DOM"),Object(l.a)("li",{parentName:"ul"},"wait for it to become displayed, i.e. not empty, no ",Object(l.a)("inlineCode",{parentName:"li"},"display:none"),", no ",Object(l.a)("inlineCode",{parentName:"li"},"visibility:hidden")),Object(l.a)("li",{parentName:"ul"},"wait for it to stop moving, for example, until css transition finishes"),Object(l.a)("li",{parentName:"ul"},"scroll the element into view"),Object(l.a)("li",{parentName:"ul"},"wait for it to receive pointer events at the action point, for example, waits until element becomes non-obscured by other elements"),Object(l.a)("li",{parentName:"ul"},"retry if the element is detached during any of the above checks")),Object(l.a)("h4",{id:"forcing-the-click"},"Forcing the click"),Object(l.a)("p",null,"Sometimes, apps use non-trivial logic where hovering the element overlays it with another element that intercepts the click. This behavior is indistinguishable from a bug where element gets covered and the click is dispatched elsewhere. If you know this is taking place, you can bypass the ",Object(l.a)("a",Object(n.a)({parentName:"p"},{href:"/pwdev/docs/1.4.0/actionability"}),"actionability")," checks and force the click:"),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await page.click('button#submit', { force: true });\n")),Object(l.a)("h4",{id:"programmatic-click"},"Programmatic click"),Object(l.a)("p",null,"If you are not interested in testing your app under the real conditions and want to simulate the click by any means possible, you can trigger the ",Object(l.a)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click"}),Object(l.a)("inlineCode",{parentName:"a"},"HTMLElement.click()"))," behavior via simply dispatching a click event on the element:"),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await page.dispatchEvent('button#submit', 'click');\n")),Object(l.a)("h4",{id:"api-reference-3"},"API reference"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.4.0/api#pageclickselector-options"}),"page.click(selector[, options])")," \u2014 main frame"),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.4.0/api#frameclickselector-options"}),"frame.click(selector[, options])")," \u2014 given frame"),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.4.0/api#elementhandleclickoptions"}),"elementHandle.click([options])")," \u2014 given element"),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.4.0/api#pagedblclickselector-options"}),"page.dblclick(selector[, options])")," \u2014 main frame"),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.4.0/api#framedblclickselector-options"}),"frame.dblclick(selector[, options])")," \u2014 given frame"),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.4.0/api#elementhandledblclickoptions"}),"elementHandle.dblclick([options])")," \u2014 given element"),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.4.0/api#pagehoverselector-options"}),"page.hover(selector[, options])")," \u2014 main frame"),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.4.0/api#framehoverselector-options"}),"frame.hover(selector[, options])")," \u2014 given frame"),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.4.0/api#elementhandlehoveroptions"}),"elementHandle.hover([options])")," \u2014 given element"),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.4.0/api#pagedispatcheventselector-type-eventinit-options"}),"page.dispatchEvent(selector, type)")," \u2014 main frame"),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.4.0/api#framedispatcheventselector-type-eventinit-options"}),"frame.dispatchEvent(selector, type)")," \u2014 given frame"),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.4.0/api#elementhandledispatcheventtype-eventinit"}),"elementHandle.dispatchEvent(type)")," \u2014 given element")),Object(l.a)("br",null),Object(l.a)("h2",{id:"type-characters"},"Type characters"),Object(l.a)("p",null,"Type into the field character by character, as if it was a user with a real keyboard."),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Type character by character\nawait page.type('#area', 'Hello World!');\n")),Object(l.a)("p",null,"This method will emit all the necessary keyboard events, with all the ",Object(l.a)("inlineCode",{parentName:"p"},"keydown"),", ",Object(l.a)("inlineCode",{parentName:"p"},"keyup"),", ",Object(l.a)("inlineCode",{parentName:"p"},"keypress")," events in place. You can even specify the optional ",Object(l.a)("inlineCode",{parentName:"p"},"delay")," between the key presses to simulate real user behavior."),Object(l.a)("blockquote",null,Object(l.a)("p",{parentName:"blockquote"},Object(l.a)("strong",{parentName:"p"},"NOTE")," that most of the time, ",Object(l.a)("a",Object(n.a)({parentName:"p"},{href:"#text-input"}),Object(l.a)("inlineCode",{parentName:"a"},"page.fill"))," will just work. You only need to type characters if there is special keyboard handling on the page.")),Object(l.a)("h4",{id:"api-reference-4"},"API reference"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.4.0/api#pagetypeselector-text-options"}),"page.type(selector, text[, options])")," \u2014 main frame"),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.4.0/api#frametypeselector-text-options"}),"frame.type(selector, text[, options])")," \u2014 given frame"),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.4.0/api#elementhandletypetext-options"}),"elementHandle.type(text[, options])")," \u2014 given element"),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.4.0/api#keyboardtypetext-options"}),"keyboard.type(text[, options])")," \u2014 focused element")),Object(l.a)("br",null),Object(l.a)("h2",{id:"keys-and-shortcuts"},"Keys and shortcuts"),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Hit Enter\nawait page.press('#submit', 'Enter');\n\n// Dispatch Control+Right\nawait page.press('#name', 'Control+ArrowRight');\n\n// Press $ sign on keyboard\nawait page.press('#value', '$');\n")),Object(l.a)("p",null,"This method focuses the selected element and produces a single keystroke. It accepts the logical key names that are emitted in the ",Object(l.a)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key"}),"keyboardEvent.key")," property of the keyboard events:"),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{}),"Backquote, Minus, Equal, Backslash, Backspace, Tab, Delete, Escape,\nArrowDown, End, Enter, Home, Insert, PageDown, PageUp, ArrowRight,\nArrowUp, F1 - F12, Digit0 - Digit9, KeyA - KeyZ, etc.\n")),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("p",{parentName:"li"},"You can alternatively specify a single character you'd like to produce such as ",Object(l.a)("inlineCode",{parentName:"p"},'"a"')," or ",Object(l.a)("inlineCode",{parentName:"p"},'"#"'),".")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("p",{parentName:"li"},"Following modification shortcuts are also supported: ",Object(l.a)("inlineCode",{parentName:"p"},"Shift, Control, Alt, Meta"),"."))),Object(l.a)("p",null,"Simple version produces a single character. This character is case-sensitive, so ",Object(l.a)("inlineCode",{parentName:"p"},'"a"')," and ",Object(l.a)("inlineCode",{parentName:"p"},'"A"')," will produce different results."),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// <input id=name>\nawait page.press('#name', 'Shift+A');\n\n// <input id=name>\nawait page.press('#name', 'Shift+ArrowLeft');\n")),Object(l.a)("p",null,"Shortcuts such as ",Object(l.a)("inlineCode",{parentName:"p"},'"Control+o"')," or ",Object(l.a)("inlineCode",{parentName:"p"},'"Control+Shift+T"')," are supported as well. When specified with the modifier, modifier is pressed and being held while the subsequent key is being pressed."),Object(l.a)("p",null,"Note that you still need to specify the capital ",Object(l.a)("inlineCode",{parentName:"p"},"A")," in ",Object(l.a)("inlineCode",{parentName:"p"},"Shift-A")," to produce the capital character. ",Object(l.a)("inlineCode",{parentName:"p"},"Shift-a")," produces a lower-case one as if you had the ",Object(l.a)("inlineCode",{parentName:"p"},"CapsLock")," toggled."),Object(l.a)("h4",{id:"api-reference-5"},"API reference"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.4.0/api#pagepressselector-key-options"}),"page.press(selector, key[, options])")," \u2014 main frame"),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.4.0/api#framepressselector-key-options"}),"frame.press(selector, key[, options])")," \u2014 given frame"),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.4.0/api#elementhandlepresskey-options"}),"elementHandle.press(key[, options])")," \u2014 given element"),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"/pwdev/docs/1.4.0/api#keyboardpresskey-options"}),"keyboard.press(key[, options])")," \u2014 focused element")),Object(l.a)("br",null),Object(l.a)("h2",{id:"upload-files"},"Upload files"),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Select one file\nawait page.setInputFiles('input#upload', 'myfile.pdf');\n\n// Select multiple files\nawait page.setInputFiles('input#upload', ['file1.txt', 'file2.txt']);\n\n// Remove all the selected files\nawait page.setInputFiles('input#upload', []);\n\n// Upload buffer from memory\nawait page.setInputFiles('input#upload', {\n  name: 'file.txt',\n  mimeType: 'text/plain',\n  buffer: Buffer.from('this is test')\n});\n")),Object(l.a)("p",null,"You can select input files for upload using the ",Object(l.a)("inlineCode",{parentName:"p"},"page.setInputFiles")," method. It expects first argument to point to an ",Object(l.a)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"}),"input element")," with the type ",Object(l.a)("inlineCode",{parentName:"p"},'"file"'),". Multiple files can be passed in the array. If some of the file paths are relative, they are resolved relative to the ",Object(l.a)("a",Object(n.a)({parentName:"p"},{href:"https://nodejs.org/api/process.html#process_process_cwd"}),"current working directory"),". Empty array clears the selected files."),Object(l.a)("h4",{id:"example"},"Example"),Object(l.a)("p",null,Object(l.a)("a",Object(n.a)({parentName:"p"},{href:"examples/upload.js"}),"This script")," uploads a file to an ",Object(l.a)("inlineCode",{parentName:"p"},"input")," element that accepts file uploads."),Object(l.a)("h4",{id:"api-reference-6"},"API reference"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright/blob/master/docs/api.md#pagesetinputfilesselector-value-options"}),"page.setInputFiles(selector, files[, options])")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright/blob/master/docs/api.md#framesetinputfilesselector-value-options"}),"frame.setInputFiles(selector, files[, options])")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright/blob/master/docs/api.md#elementhandlesetinputfilesfiles-options"}),"elementHandle.setInputFiles(files[, options])"))),Object(l.a)("br",null),Object(l.a)("h2",{id:"focus-element"},"Focus element"),Object(l.a)("p",null,"For the dynamic pages that handle focus events, you can focus the given element."),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await page.focus('input#name');\n")),Object(l.a)("h4",{id:"api-reference-7"},"API reference"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright/blob/master/docs/api.md#pagefocusselector-options"}),"page.focus(selector, [options])")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright/blob/master/docs/api.md#framefocusselector-options"}),"frame.focus(selector, [options])")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright/blob/master/docs/api.md#elementhandlefocus-options"}),"elementHandle.focus([options])"))),Object(l.a)("br",null))}s.isMDXComponent=!0},608:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),i=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),b=s(a),u=n,d=b["".concat(c,".").concat(u)]||b[u]||m[u]||l;return a?i.a.createElement(d,r(r({ref:t},p),{},{components:a})):i.a.createElement(d,r({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=b;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:n,c[1]=r;for(var p=2;p<l;p++)c[p]=a[p];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);