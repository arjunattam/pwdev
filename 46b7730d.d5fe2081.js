(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{127:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(285)),i={id:"class-video",title:"class: Video"},c={unversionedId:"api/class-video",id:"version-1.3.0/api/class-video",isDocsHomePage:!1,title:"class: Video",description:"When browser context is created with the videosPath option, each page has a video object associated with it.",source:"@site/versioned_docs/version-1.3.0/api/class-video.md",slug:"/api/class-video",permalink:"/pwdev/docs/1.3.0/api/class-video",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.3.0/api/class-video.md",version:"1.3.0",sidebar:"version-1.3.0/api",previous:{title:"class: Download",permalink:"/pwdev/docs/1.3.0/api/class-download"},next:{title:"class: FileChooser",permalink:"/pwdev/docs/1.3.0/api/class-filechooser"}},s=[{value:"video.path()",id:"videopath",children:[]}],l={rightToc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"When browser context is created with the ",Object(o.a)("inlineCode",{parentName:"p"},"videosPath")," option, each page has a video object associated with it."),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"console.log(await page.video().path());\n")),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"#videopath"}),"video.path()"))),Object(o.a)("h2",{id:"videopath"},"video.path()"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"returns: <","[Promise]","<","[string]",">>")),Object(o.a)("p",null,"Returns the file system path this video will be recorded to. The video is guaranteed to be written to the filesystem upon closing the browser context."))}p.isMDXComponent=!0},285:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,f=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return r?a.a.createElement(f,c(c({ref:t},l),{},{components:r})):a.a.createElement(f,c({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);