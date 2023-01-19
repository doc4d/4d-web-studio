(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[45],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return A},kt:function(){return u}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},A=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,A=s(e,["components","mdxType","originalType","parentName"]),f=c(n),u=i,m=f["".concat(l,".").concat(u)]||f[u]||d[u]||o;return n?r.createElement(m,a(a({ref:t},A),{},{components:n})):r.createElement(m,a({ref:t},A))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6881:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return A},default:function(){return f}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=["components"],s={id:"create-webform",title:"Webform Editor Overview"},l=void 0,c={unversionedId:"design-webforms/create-webform",id:"design-webforms/create-webform",isDocsHomePage:!1,title:"Webform Editor Overview",description:"Creating a webform",source:"@site/docs/design-webforms/create-webform.md",sourceDirName:"design-webforms",slug:"/design-webforms/create-webform",permalink:"/4d-web-studio/docs/design-webforms/create-webform",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/design-webforms/create-webform.md",version:"current",frontMatter:{id:"create-webform",title:"Webform Editor Overview"},sidebar:"docs",previous:{title:"Datastore Classes",permalink:"/4d-web-studio/docs/model/datastore-classes"},next:{title:"Components",permalink:"/4d-web-studio/docs/design-webforms/components"}},A=[{value:"Creating a webform",id:"creating-a-webform",children:[]},{value:"Interface",id:"interface",children:[{value:"Breadcrumbs",id:"breadcrumbs",children:[]},{value:"Outline",id:"outline",children:[]}]},{value:"Sanity check",id:"sanity-check",children:[]}],d={toc:A};function f(e){var t=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"creating-a-webform"},"Creating a webform"),(0,o.kt)("p",null,"In 4D Web Studio, everything starts with a webform. A webform is a container that holds all the other components (buttons, grids, style boxes, etc.) of your application."),(0,o.kt)("p",null,"To create a webform:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"from the homepage, click ",(0,o.kt)("strong",{parentName:"li"},"Webform")," and enter a name for the new webform"),(0,o.kt)("li",{parentName:"ul"},"from the Webform Editor, click the ",(0,o.kt)("strong",{parentName:"li"},"New +")," tab > ",(0,o.kt)("strong",{parentName:"li"},"Webform"))),(0,o.kt)("h2",{id:"interface"},"Interface"),(0,o.kt)("p",null,"The Webform Editor provides several tools to customize the interface and contents of your application:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"interface",src:n(6538).Z})),(0,o.kt)("ol",{class:"interface-numbers"},(0,o.kt)("li",{class:"interface-item"},"Explorer: Lists your project's webforms, methods, classes, shared elements (such as images), and debuggger sessions. Use the **...** contextual menu at the right side of each element to access actions available for the element (usually **Delete**, **Duplicate**, **Open** or **Edit**). The Explorer also provides access to the project's definition files: roles and privileges, data model, and settings. "),(0,o.kt)("li",{class:"interface-item"},"Tabs: They let you keep track of your currently opened elements, such as your forms and methods."),(0,o.kt)("li",{class:"interface-item"},"Components: The building blocks of your application."),(0,o.kt)("li",{class:"interface-item"},"Data Sources: Create and explore your datasources."),(0,o.kt)("li",{class:"interface-item"},"Styles Library: Holds predefined and customized styles for your components."),(0,o.kt)("li",{class:"interface-item"},"Outline: Presents the structure of your webform and allows you to navigate between the different elements. "),(0,o.kt)("li",{class:"interface-item"},"Canvas: This is where you combine your components, styles and datasources. You can drag and drop components onto your canvas, then drag and drop CSS classes and datasources onto these components, and preview or render your webforms."),(0,o.kt)("li",{class:"interface-item"},"Properties panel: Allows for advanced style customization. Also allows binding datasources to components."),(0,o.kt)("li",{class:"interface-item"},"Contextual configuration panel: Link events and methods to your components, edit CSS styles, etc."),(0,o.kt)("li",{class:"interface-item-2"}," Header: Save and preview your work, access the Data Explorer as well as additional settings.")),(0,o.kt)("h3",{id:"breadcrumbs"},"Breadcrumbs"),(0,o.kt)("p",null,"When you select a component in the canvas, the breadcrumbs display its hierarchy:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"breadcrumbs",src:n(553).Z})),(0,o.kt)("p",null,"To select any parent component displayed in the breadcrumbs trail, click its name. "),(0,o.kt)("h3",{id:"outline"},"Outline"),(0,o.kt)("p",null,"The outline section displays the hierarchy of your webform:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"outline",src:n(3751).Z})),(0,o.kt)("p",null,"Click an element in the list to select it, or click and drag it anywhere in the outline to move it somewhere else."),(0,o.kt)("p",null,"To display or hide an element, click the eye icon."),(0,o.kt)("h2",{id:"sanity-check"},"Sanity check"),(0,o.kt)("p",null,"The Webfom editor includes a ",(0,o.kt)("strong",{parentName:"p"},"Sanity check")," feature, allowing you to easily and quickly check the consistency of your Webforms. This tool is useful to avoid errors at runtime and save time. In particular, the sanity check will detect if a component is bound with a non existing datasource. "),(0,o.kt)("p",null,"The Sanity check is automatically enabled when an opened webform is being edited. Its icon is located at the upper right area above the canvas. When there are no errors, the icon looks like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"sanity",src:n(6451).Z})),(0,o.kt)("p",null,"When errors have been detected, the number of errors is displayed on the icon and you can click on it to display more information about the error(s):"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"sanity",src:n(1809).Z})),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The Sanity check is only informative. A webform can always be saved even if it contains errors. "))))}f.isMDXComponent=!0},553:function(e,t){"use strict";t.Z="data:image/png;base64,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"},3751:function(e,t){"use strict";t.Z="data:image/png;base64,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"},6451:function(e,t){"use strict";t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAXCAIAAACXqLgAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADoSURBVEhL1ZM5EsIwDAD5mZu0KWj4QNLyhhROwbPZcZSMsCVhCsiwFbGlHR3mkr7AedJxHK8FfshRSCQdhmGe55zzQ7EsC4dcSZCFK6WuSqfhKqjalpIg2SGe15DSWlvjrSAfO4SZczCk0zRJkuJekA8FwZKmMKTrukpGB+xN0hS11JsmFZkdQDvZWsrSJfaV8kzdK0ne+YnUaz+Qvm8fzEV50q5FgbkQT0qwpCkMKe+5LdaUEtb7+MGbbEU7zQ1bCiQE/wKuPCO4UqA1RsYqxFTgk0Oz64NIekBR20yD6jRd0k/5F2lKT2AXijts1iSXAAAAAElFTkSuQmCC"},1809:function(e,t,n){"use strict";t.Z=n.p+"assets/images/sanity-3f4584021a914a750cc2b787a323bb20.png"},6538:function(e,t,n){"use strict";t.Z=n.p+"assets/images/web-form-editor-interface-38963a6a0b857f82617c4ee6deffa902.png"}}]);