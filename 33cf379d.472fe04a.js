(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(608)),i={id:"environment-variables",title:"Environment Variables"},s={unversionedId:"api/environment-variables",id:"version-1.3.0/api/environment-variables",isDocsHomePage:!1,title:"Environment Variables",description:"NOTE playwright-core does not respect environment variables.",source:"@site/versioned_docs/version-1.3.0/api/environment-variables.md",slug:"/api/environment-variables",permalink:"/pwdev/docs/api/environment-variables",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.3.0/api/environment-variables.md",version:"1.3.0",sidebar:"version-1.3.0/api",previous:{title:"EvaluationArgument",permalink:"/pwdev/docs/api/evaluationargument"},next:{title:"Working with selectors",permalink:"/pwdev/docs/api/working-with-selectors"}},l=[],c={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},Object(o.a)("strong",{parentName:"p"},"NOTE")," ",Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/playwright-core"}),"playwright-core")," ",Object(o.a)("strong",{parentName:"p"},"does not")," respect environment variables.")),Object(o.a)("p",null,"Playwright looks for certain ",Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Environment_variable"}),"environment variables")," to aid its operations.\nIf Playwright doesn't find them in the environment, a lowercased variant of these variables will be used from the ",Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"https://docs.npmjs.com/cli/config"}),"npm config"),"."),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"PLAYWRIGHT_DOWNLOAD_HOST")," - overwrite URL prefix that is used to download browsers. Note: this includes protocol and might even include path prefix. By default, Playwright uses ",Object(o.a)("inlineCode",{parentName:"li"},"https://storage.googleapis.com")," to download Chromium and ",Object(o.a)("inlineCode",{parentName:"li"},"https://playwright.azureedge.net")," to download Webkit & Firefox. You can also use browser-specific download hosts that superceed the ",Object(o.a)("inlineCode",{parentName:"li"},"PLAYWRIGHT_DOWNLOAD_HOST")," variable:",Object(o.a)("ul",{parentName:"li"},Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"PLAYWRIGHT_CHROMIUM_DOWNLOAD_HOST")," - host to specify Chromium downloads"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST")," - host to specify Firefox downloads"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"PLAYWRIGHT_WEBKIT_DOWNLOAD_HOST")," - host to specify Webkit downloads"))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"PLAYWRIGHT_BROWSERS_PATH")," - specify a shared folder that playwright will use to download browsers and to look for browsers when launching browser instances."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD")," - set to non-empty value to skip browser downloads altogether.")),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"# Linux/macOS\n# Install browsers to the shared location.\n$ PLAYWRIGHT_BROWSERS_PATH=$HOME/playwright-browsers npm install --save-dev playwright\n# Use shared location to find browsers.\n$ PLAYWRIGHT_BROWSERS_PATH=$HOME/playwright-browsers node playwright-script.js\n\n# Windows\n# Install browsers to the shared location.\n$ set PLAYWRIGHT_BROWSERS_PATH=%USERPROFILE%\\playwright-browsers\n$ npm install --save-dev playwright\n# Use shared location to find browsers.\n$ set PLAYWRIGHT_BROWSERS_PATH=%USERPROFILE%\\playwright-browsers\n$ node playwright-script.js\n")))}p.isMDXComponent=!0},608:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);