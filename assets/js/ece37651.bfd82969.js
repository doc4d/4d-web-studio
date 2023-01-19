(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[536],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},819:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],s={id:"license-usage",title:"About license usage"},c=void 0,l={unversionedId:"configuration/license-usage",id:"configuration/license-usage",isDocsHomePage:!1,title:"About license usage",description:"To render webforms, you must have an available license, as rendering a webform opens a session on the project database's main web server.",source:"@site/docs/configuration/license-usage.md",sourceDirName:"configuration",slug:"/configuration/license-usage",permalink:"/4d-web-studio/docs/configuration/license-usage",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/configuration/license-usage.md",version:"current",frontMatter:{id:"license-usage",title:"About license usage"},sidebar:"docs",previous:{title:"Configuration",permalink:"/4d-web-studio/docs/configuration/4d-settings"},next:{title:"Qodly Models",permalink:"/4d-web-studio/docs/model/model-overview"}},u=[{value:"URL Schemes",id:"url-schemes",children:[{value:"Example",id:"example",children:[]}]},{value:"SameSite attribute",id:"samesite-attribute",children:[]},{value:"Recommendations",id:"recommendations",children:[]}],d={toc:u};function p(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To render webforms, you must have an available license, as rendering a webform opens a session on the project database's main web server."),(0,a.kt)("h2",{id:"url-schemes"},"URL Schemes"),(0,a.kt)("p",null,"4D Web Studio's URL scheme configuration (HTTP and HTTPS) determines how many licenses are retained when rendering webforms. With the right configuration, you can avoid unnecessary license retaining."),(0,a.kt)("p",null,"As explained in the ",(0,a.kt)("a",{parentName:"p",href:"/4d-web-studio/docs/configuration/4d-settings"},"configuration")," section, the 4D ",(0,a.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/Admin/webAdmin.html"},"WebAdmin web server")," provides a secured web access to 4D Web Studio."),(0,a.kt)("p",null,"On the other hand, the ",(0,a.kt)("a",{parentName:"p",href:"/4d-web-studio/docs/rendering"},"renderer")," communicates with the 4D web server of the database using REST requests. As such, it behaves like a conventional 4D Client."),(0,a.kt)("p",null,"If you run the renderer from the studio and these two web servers are not reached through the same URL scheme (HTTP or HTTPS), it might lead to wrong licence counting."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You run the Web Studio on an HTTPS URL scheme (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"https://127.0.0.1:7443/studio/"),")")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The web server of your database is started only on an HTTP port."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt-text",src:n(1787).Z})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"In the studio, you click on the ",(0,a.kt)("strong",{parentName:"li"},"rendering icon"),". You are warned that the two web servers are started on different schemes, but despite this you click on the ",(0,a.kt)("strong",{parentName:"li"},"Confirm")," button. ")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt-text",src:n(6617).Z})),(0,a.kt)("p",null,"As a result, two licenses are retained."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"You can enable/disable the display of this pop over using a ",(0,a.kt)("a",{parentName:"p",href:"/4d-web-studio/docs/settings#show-renderer-pop-over"},"User setting"),"."))),(0,a.kt)("h2",{id:"samesite-attribute"},"SameSite attribute"),(0,a.kt)("p",null,"The behavior previously described is due to the session cookie of the 4D web server. This session cookie has a ",(0,a.kt)("inlineCode",{parentName:"p"},"SameSite")," attribute that determines if the session cookie is sent to the web server."),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"SameSite")," attribute's value is ",(0,a.kt)("inlineCode",{parentName:"p"},"Strict")," (default), the session cookie is not sent to the web server, so a new session is opened each time a page is rendered or refreshed."),(0,a.kt)("p",null,"For more information on the ",(0,a.kt)("inlineCode",{parentName:"p"},"SameSite")," attribute, check out ",(0,a.kt)("a",{parentName:"p",href:"https://blog.4d.com/get-ready-for-the-new-%60SameSite%60-and-secure-attributes-for-cookies/"},"this blog post"),"."),(0,a.kt)("h2",{id:"recommendations"},"Recommendations"),(0,a.kt)("p",null,"To avoid using more licenses than necessary, we recommend doing one of the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Run the renderer on another browser tab (by entering the rendered URL of your Web form: ",(0,a.kt)("inlineCode",{parentName:"p"},"IP:port/$lib/renderer/?w=WebFormName"),").")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Ensure the Web Studio and your database are reached on the same URL scheme.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Lax")," value for the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/WebServer/webServerConfig.html#session-cookie-%60SameSite%60"},"session cookie")," of your project database's web server."))))}p.isMDXComponent=!0},6617:function(e,t,n){"use strict";t.Z=n.p+"assets/images/render-button-2efd7d27640056f8a19e71494f6af415.png"},1787:function(e,t,n){"use strict";t.Z=n.p+"assets/images/schemes-75be10c4c974242c227fe302ca126531.png"}}]);