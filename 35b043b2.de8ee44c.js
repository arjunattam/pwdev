(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{107:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return o})),n.d(a,"metadata",(function(){return l})),n.d(a,"rightToc",(function(){return c})),n.d(a,"default",(function(){return p}));var t=n(2),r=n(6),i=(n(0),n(285)),o={id:"installation",title:"Advanced installation"},l={unversionedId:"installation",id:"version-1.3.0/installation",isDocsHomePage:!1,title:"Advanced installation",description:"- Managing browser binaries",source:"@site/versioned_docs/version-1.3.0/installation.md",slug:"/installation",permalink:"/pwdev/docs/1.3.0/installation",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.3.0/installation.md",version:"1.3.0",sidebar:"version-1.3.0/docs",previous:{title:"Actionability",permalink:"/pwdev/docs/1.3.0/actionability"},next:{title:"Extensibility",permalink:"/pwdev/docs/1.3.0/extensibility"}},c=[{value:"Managing browser binaries",id:"managing-browser-binaries",children:[]},{value:"Download from artifact repository",id:"download-from-artifact-repository",children:[]},{value:"Skip browser downloads",id:"skip-browser-downloads",children:[]},{value:"Download single browser binary",id:"download-single-browser-binary",children:[]}],s={rightToc:c};function p(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(t.a)({},s,n,{components:a,mdxType:"MDXLayout"}),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(t.a)({parentName:"li"},{href:"#managing-browser-binaries"}),"Managing browser binaries")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(t.a)({parentName:"li"},{href:"#download-from-artifact-repository"}),"Download from artifact repository")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(t.a)({parentName:"li"},{href:"#skip-browser-downloads"}),"Skip browser downloads")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(t.a)({parentName:"li"},{href:"#download-single-browser-binary"}),"Download single browser binary"))),Object(i.a)("br",null),Object(i.a)("h2",{id:"managing-browser-binaries"},"Managing browser binaries"),Object(i.a)("p",null,"Each version of Playwright needs specific versions of browser binaries to operate. By default Playwright downloads Chromium, WebKit and Firefox browsers into the OS-specific cache folders:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"%USERPROFILE%\\AppData\\Local\\ms-playwright")," on Windows"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"~/Library/Caches/ms-playwright")," on MacOS"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"~/.cache/ms-playwright")," on Linux")),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"npm i -D playwright\n")),Object(i.a)("p",null,"These browsers will take few hundreds of megabytes of the disk space when installed:"),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"du -hs ./Library/Caches/ms-playwright/*\n281M  chromium-XXXXXX\n187M  firefox-XXXX\n180M  webkit-XXXX\n")),Object(i.a)("p",null,"You can override default behavior using environment variables. When installing Playwright, ask it to download browsers into a specific location:"),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"# Linux/macOS\n$ PLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers npm i -D playwright\n\n# Windows\n$ set PLAYWRIGHT_BROWSERS_PATH=%USERPROFILE%\\pw-browsers\n$ npm i -D playwright\n")),Object(i.a)("p",null,"When running Playwright scripts, ask it to search for browsers in a shared location:"),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"# Linux/macOS\n$ PLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers node playwright-script.js\n\n# Windows\n$ set PLAYWRIGHT_BROWSERS_PATH=%USERPROFILE%\\pw-browsers\n$ node playwright-script.js\n")),Object(i.a)("p",null,"Or you can opt into the hermetic install and place binaries under the ",Object(i.a)("inlineCode",{parentName:"p"},"node_modules/")," folder:"),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"# Linux/macOS\n$ PLAYWRIGHT_BROWSERS_PATH=0 npm i -D playwright\n\n# Windows\n$ set PLAYWRIGHT_BROWSERS_PATH=0\n$ npm i -D playwright\n")),Object(i.a)("p",null,"Playwright keeps track of packages that need those browsers and will garbage collect them as you update Playwright to the newer versions."),Object(i.a)("br",null),Object(i.a)("blockquote",null,Object(i.a)("p",{parentName:"blockquote"},Object(i.a)("strong",{parentName:"p"},"NOTE")," Developers can opt-in in this mode via exporting ",Object(i.a)("inlineCode",{parentName:"p"},"PLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers")," in their ",Object(i.a)("inlineCode",{parentName:"p"},".bashrc"),".")),Object(i.a)("br",null),Object(i.a)("h2",{id:"download-from-artifact-repository"},"Download from artifact repository"),Object(i.a)("p",null,"By default, Playwright downloads browsers from Microsoft and Google public CDNs."),Object(i.a)("p",null,"Sometimes companies maintain an internal artifact repository to host browser\nbinaries. In this case, Playwright can be configured to download from a custom\nlocation using the ",Object(i.a)("inlineCode",{parentName:"p"},"PLAYWRIGHT_DOWNLOAD_HOST")," env variable."),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"# Linux/macOS\n$ PLAYWRIGHT_DOWNLOAD_HOST=192.168.1.78 npm i -D playwright\n\n# Windows\n$ set PLAYWRIGHT_DOWNLOAD_HOST=192.168.1.78\n$ npm i -D playwright\n")),Object(i.a)("p",null,"It is also possible to use a per-browser download hosts using ",Object(i.a)("inlineCode",{parentName:"p"},"PLAYWRIGHT_CHROMIUM_DOWNLOAD_HOST"),", ",Object(i.a)("inlineCode",{parentName:"p"},"PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST")," and ",Object(i.a)("inlineCode",{parentName:"p"},"PLAYWRIGHT_WEBKIT_DOWNLOAD_HOST")," env variables that\ntake precedence over ",Object(i.a)("inlineCode",{parentName:"p"},"PLAYWRIGHT_DOWNLOAD_HOST"),"."),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"# Linux/macOS\n$ PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST=192.168.1.1 PLAYWRIGHT_DOWNLOAD_HOST=192.168.1.78 npm i -D playwright\n")),Object(i.a)("br",null),Object(i.a)("h2",{id:"skip-browser-downloads"},"Skip browser downloads"),Object(i.a)("p",null,"In certain cases, it is desired to avoid browser downloads altogether because\nbrowser binaries are managed separately."),Object(i.a)("p",null,"This can be done by setting ",Object(i.a)("inlineCode",{parentName:"p"},"PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD")," variable before installation."),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"# Linux/macOS\n$ PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm i -D playwright\n\n# Windows\n$ set PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1\n$ npm i -D playwright\n")),Object(i.a)("br",null),Object(i.a)("h2",{id:"download-single-browser-binary"},"Download single browser binary"),Object(i.a)("p",null,"Playwright ships three packages that bundle only a single browser:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(t.a)({parentName:"li"},{href:"https://www.npmjs.com/package/playwright-chromium"}),Object(i.a)("inlineCode",{parentName:"a"},"playwright-chromium"))),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(t.a)({parentName:"li"},{href:"https://www.npmjs.com/package/playwright-webkit"}),Object(i.a)("inlineCode",{parentName:"a"},"playwright-webkit"))),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(t.a)({parentName:"li"},{href:"https://www.npmjs.com/package/playwright-firefox"}),Object(i.a)("inlineCode",{parentName:"a"},"playwright-firefox")))),Object(i.a)("blockquote",null,Object(i.a)("p",{parentName:"blockquote"},Object(i.a)("strong",{parentName:"p"},"NOTE")," All configuration environment variables also apply to these packages.")),Object(i.a)("p",null,"Using these packages is as easy as using a regular Playwright:"),Object(i.a)("p",null,"Install a specific package"),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"$ npm i -D playwright-webkit\n")),Object(i.a)("p",null,"Require package"),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"// Notice a proper package name in require\nconst { webkit } = require('playwright-webkit');\n\n(async () => {\n  const browser = await webkit.launch();\n  // ...\n})();\n")))}p.isMDXComponent=!0},285:function(e,a,n){"use strict";n.d(a,"a",(function(){return u}));var t=n(0),r=n.n(t);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var a=r.a.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},b={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},O=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),O=p(n),u=t,d=O["".concat(o,".").concat(u)]||O[u]||b[u]||i;return n?r.a.createElement(d,l(l({ref:a},s),{},{components:n})):r.a.createElement(d,l({ref:a},s))}));function u(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=O;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);