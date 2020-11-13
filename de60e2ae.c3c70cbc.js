(window.webpackJsonp=window.webpackJsonp||[]).push([[468],{524:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),l=(a(0),a(608)),i={id:"releasing",title:"1. Create a release branch"},o={unversionedId:"development/releasing",id:"version-1.3.0/development/releasing",isDocsHomePage:!1,title:"1. Create a release branch",description:"1. Bump a version to the new -post version and land a chore: cut vX.Y.Z-post version commit",source:"@site/versioned_docs/version-1.3.0/development/releasing.md",slug:"/development/releasing",permalink:"/pwdev/docs/development/releasing",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.3.0/development/releasing.md",version:"1.3.0"},c=[],s={rightToc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.a)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.a)("ol",null,Object(l.a)("li",{parentName:"ol"},"Bump a version to the new ",Object(l.a)("inlineCode",{parentName:"li"},"-post")," version and land a ",Object(l.a)("inlineCode",{parentName:"li"},"chore: cut vX.Y.Z-post version")," commit")),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"./utils/update_version.js vX.Y.Z-post"))),Object(l.a)("ol",null,Object(l.a)("li",{parentName:"ol"},"On your local machine, create a new branch ",Object(l.a)("inlineCode",{parentName:"li"},"release-X.Y"),' based off the "cutting" commit and land a ',Object(l.a)("inlineCode",{parentName:"li"},"chore: mark vX.Y.Z")," in the local branch:")),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"git checkout master")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"git checkout -b release-X.Y")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"./utils/update_version.js vX.Y")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"npm run doc")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"git commit -am 'chore: mark vX.Y.Z'"))),Object(l.a)("ol",null,Object(l.a)("li",{parentName:"ol"},"Push branch to the upstream")),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"git push upstream release-X.Y"))),Object(l.a)("p",null,"Once release branch is pushed, it's last commit will be picked up by our CI/CD:"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"make sure commit passes all the bots. If there are any failures, carefully inspect failures to see if these are flakes."),Object(l.a)("li",{parentName:"ul"},"the ",Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"../../.github/workflows/publish_canary_npm.yml"}),Object(l.a)("inlineCode",{parentName:"a"},"publish_canary"))," workflow will publish a ",Object(l.a)("inlineCode",{parentName:"li"},"@next")," version for the commit - this will be our ",Object(l.a)("strong",{parentName:"li"},"release candidate"),". Go manually to it's page on NPM   to see what it looks like. Try installing locally.")),Object(l.a)("h1",{id:"2-prepare-release-notes"},"2. Prepare release notes"),Object(l.a)("ol",null,Object(l.a)("li",{parentName:"ol"},"Use ",Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright/releases/new"}),'"draft new release tag"'),"."),Object(l.a)("li",{parentName:"ol"},'Version starts with "v", e.g. "vX.Y.Z".'),Object(l.a)("li",{parentName:"ol"},"Run ",Object(l.a)("inlineCode",{parentName:"li"},"./utils/draft_release_notes.sh"),' and fill in the "TODO" in generated text.'),Object(l.a)("li",{parentName:"ol"},"When making links to the API, copy actual links from ",Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright/blob/master/docs/api.md"}),"GitHub"),", and not from ",Object(l.a)("inlineCode",{parentName:"li"},"api.md")," source - these might be incorrect.",Object(l.a)("ul",{parentName:"li"},Object(l.a)("li",{parentName:"ul"},"Before publishing, replace ",Object(l.a)("inlineCode",{parentName:"li"},"blob/master/docs")," with ",Object(l.a)("inlineCode",{parentName:"li"},"blob/vX.Y.Z/docs")," in all the links."))),Object(l.a)("li",{parentName:"ol"},'Use "Save Draft", not "Publish".')),Object(l.a)("h1",{id:"3-publish-release"},"3. Publish Release"),Object(l.a)("ol",null,Object(l.a)("li",{parentName:"ol"},'Hit "publish release"')),Object(l.a)("p",null,"Once release is published, the ",Object(l.a)("a",Object(n.a)({parentName:"p"},{href:"../../.github/workflows/publish_release.yml"}),Object(l.a)("inlineCode",{parentName:"a"},"publish_release"))," will kick in and publish package version on NPM."))}p.isMDXComponent=!0},608:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(a),m=n,O=b["".concat(i,".").concat(m)]||b[m]||u[m]||l;return a?r.a.createElement(O,o(o({ref:t},s),{},{components:a})):r.a.createElement(O,o({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);