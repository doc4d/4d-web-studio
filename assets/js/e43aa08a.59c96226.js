(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[799],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return c},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=n.createContext({}),l=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(d.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,f=u["".concat(d,".").concat(m)]||u[m]||p[m]||i;return t?n.createElement(f,a(a({ref:r},c),{},{components:t})):n.createElement(f,a({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var d in r)hasOwnProperty.call(r,d)&&(s[d]=r[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1313:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var n=t(2122),o=t(9756),i=(t(7294),t(3905)),a=["components"],s={id:"rendering",title:"Rendering Webforms"},d=void 0,l={unversionedId:"webforms/rendering",id:"webforms/rendering",isDocsHomePage:!1,title:"Rendering Webforms",description:"Overview",source:"@site/docs/webforms/rendering.md",sourceDirName:"webforms",slug:"/webforms/rendering",permalink:"/4d-web-studio/docs/webforms/rendering",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/webforms/rendering.md",version:"current",frontMatter:{id:"rendering",title:"Rendering Webforms"},sidebar:"docs",previous:{title:"Using the Webform Editor",permalink:"/4d-web-studio/docs/webforms/using-web-form-editor"},next:{title:"Datasources",permalink:"/4d-web-studio/docs/datasources"}},c=[{value:"Overview",id:"overview",children:[]},{value:"License",id:"license",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Rendering webforms",id:"rendering-webforms",children:[{value:"From the 4D Web Studio IDE",id:"from-the-4d-web-studio-ide",children:[]},{value:"From a browser window",id:"from-a-browser-window",children:[]}]},{value:"Exposed and non-exposed datasources",id:"exposed-and-non-exposed-datasources",children:[]}],p={toc:c};function u(e){var r=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,s,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"4D Web Studio does not generate HTML code directly. When you drop components on the canvas, when you map datasources to components, or when you configure an event, 4D Web Studio places your work in a JSON file. This JSON file, the webform, cannot directly be opened in a web browser. It is \u201crendered\u201d either when you preview it in the webstudio, or when you choose to render it in a dedicated browser tab."),(0,i.kt)("p",null,"At runtime, webforms are generated and interpreted by a built-in renderer engine."),(0,i.kt)("p",null,"Each webform has its own URL on the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/WebServer/webServer.html"},"4D web server"),"."),(0,i.kt)("p",null,"The following diagram describes how data flows to and from the studio:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"workflow-diagram",src:t(1602).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The 4D WebAdmin web server provides a secured web access to 4D Web Studio and allows previewing webforms inside the studio."),(0,i.kt)("li",{parentName:"ul"},"The main 4D web server is ",(0,i.kt)("a",{parentName:"li",href:"https://developer.4d.com/docs/en/REST/configuration.html#starting-the-rest-server"},"exposed as REST server"),", and the renderer communicates with it using ",(0,i.kt)("a",{parentName:"li",href:"https://developer.4d.com/docs/en/REST/gettingStarted.html"},"REST requests"),"."),(0,i.kt)("li",{parentName:"ul"},"The webforms are deployed with the application, and end users render them in their browsers. ")),(0,i.kt)("h2",{id:"license"},"License"),(0,i.kt)("p",null,"To render webforms, you must have an available REST license, as rendering a webform opens a session on the project database's main web server."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"The following options must be set:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The project's ",(0,i.kt)("strong",{parentName:"li"},"Settings")," > ",(0,i.kt)("strong",{parentName:"li"},"Web")," > ",(0,i.kt)("strong",{parentName:"li"},"Web Features")," > ",(0,i.kt)("strong",{parentName:"li"},"Expose as REST server")," option must be activated "),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://developer.4d.com/docs/en/WebServer/webServer.html"},"4D web server")," must be running")),(0,i.kt)("p",null,"For more information on REST server configuration, see ",(0,i.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/REST/configuration.html"},"Server Configuration")," on developer.4d.com."),(0,i.kt)("p",null,"Additionally, you can configure the 4D web server's IP and HTTP/HTTPS ports in ",(0,i.kt)("strong",{parentName:"p"},"Settings")," > ",(0,i.kt)("strong",{parentName:"p"},"Web")," > ",(0,i.kt)("strong",{parentName:"p"},"Configuration"),"."),(0,i.kt)("p",null,"When rendering webforms, the renderer will connect to the 4D web server through HTTP or HTTPS, depending on the settings, following the same HTTP/HTTPS connection pattern as for the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/Admin/webAdmin.html#accept-http-connections-on-localhost"},"WebAdmin web server"),"."),(0,i.kt)("h2",{id:"rendering-webforms"},"Rendering webforms"),(0,i.kt)("p",null,"Webforms can be rendered from the 4D Web Studio IDE, or directly from a browser window. "),(0,i.kt)("h3",{id:"from-the-4d-web-studio-ide"},"From the 4D Web Studio IDE"),(0,i.kt)("p",null,"To open a browser tab and render a webform, click the ",(0,i.kt)("strong",{parentName:"p"},"Render")," button :"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"render-button",src:t(2161).Z})),(0,i.kt)("p",null,"A tab will open at ",(0,i.kt)("inlineCode",{parentName:"p"},"IP:port/$lib/renderer/?w=WebFormName"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The button is displayed only when the ",(0,i.kt)("a",{parentName:"p",href:"#configuration"},"configuration options")," are activated."))),(0,i.kt)("h3",{id:"from-a-browser-window"},"From a browser window"),(0,i.kt)("p",null,"Webforms can be rendered directly from a browser window, by typing the following address:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"IP:port/$lib/renderer/?w=WebFormName")),(0,i.kt)("h2",{id:"exposed-and-non-exposed-datasources"},"Exposed and non-exposed datasources"),(0,i.kt)("p",null,"The renderer engine applies the REST resource restrictions defined in your 4D project's database. This means that only exposed datasources are rendered in the browser."))}u.isMDXComponent=!0},2161:function(e,r,t){"use strict";r.Z=t.p+"assets/images/render-button-f08ad8a8bb6f31ec4bd325f497618df7.png"},1602:function(e,r,t){"use strict";r.Z=t.p+"assets/images/workflow-270238fe59daa38386214f58375ad832.png"}}]);