(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[46],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return p}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=n.createContext({}),s=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),p=o,b=d["".concat(m,".").concat(p)]||d[p]||c[p]||a;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3227:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],l={id:"WebFormClass",title:"WebForm"},m=void 0,s={unversionedId:"API/web-form-editor/WebFormClass",id:"API/web-form-editor/WebFormClass",isDocsHomePage:!1,title:"WebForm",description:"When working in 4D Web Studio, the WebForm class allows you to handle the behavior of your webform and its components on the server side.",source:"@site/docs/API/web-form-editor/WebFormClass.md",sourceDirName:"API/web-form-editor",slug:"/API/web-form-editor/WebFormClass",permalink:"/4d-web-studio/docs/API/web-form-editor/WebFormClass",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/API/web-form-editor/WebFormClass.md",version:"current",frontMatter:{id:"WebFormClass",title:"WebForm"},sidebar:"docs",previous:{title:"EntitySelection",permalink:"/4d-web-studio/docs/API/orda/EntitySelectionClass"},next:{title:"WebFormItem",permalink:"/4d-web-studio/docs/API/web-form-editor/WebFormItemClass"}},u=[{value:"WebForm Objects",id:"webform-objects",children:[]},{value:"Summary",id:"summary",children:[]},{value:"Web Form",id:"web-form",children:[]}],c={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When working in ",(0,a.kt)("a",{parentName:"p",href:"../web-studio/web-studio.md"},"4D Web Studio"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"WebForm")," class allows you to handle the behavior of your webform and its components on the server side."),(0,a.kt)("h3",{id:"webform-objects"},"WebForm Objects"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"WebForm")," objects are instantiated with the ",(0,a.kt)("a",{parentName:"p",href:"#web-form"},"Web Form")," command."),(0,a.kt)("h3",{id:"summary"},"Summary"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#web-form"}),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0"))))),(0,a.kt)("h2",{id:"web-form"},"Web Form"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),"|Version|Changes| |---|---| |v19 R3|Added|"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Web Form")," : 4D.WebForm"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"}),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Result"),(0,a.kt)("td",{parentName:"tr",align:null},"4D.WebForm"),(0,a.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,a.kt)("td",{parentName:"tr",align:null},"New ",(0,a.kt)("inlineCode",{parentName:"td"},"WebForm")," object")))),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Web Form")," command "," returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.WebForm")," object that references a webform."),(0,a.kt)("p",null,"Each property of the returned object is an object of the ",(0,a.kt)("a",{parentName:"p",href:"/4d-web-studio/docs/API/web-form-editor/WebFormItemClass"},"4D.WebFormItem")," class."),(0,a.kt)("p",null,"The command returns ",(0,a.kt)("inlineCode",{parentName:"p"},"Null")," if it is called in a request that does not originate from ",(0,a.kt)("a",{parentName:"p",href:"../web-studio/web-studio.md"},"4D Web Studio"),"."))}d.isMDXComponent=!0}}]);