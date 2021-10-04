(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[436],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,b=u["".concat(p,".").concat(m)]||u[m]||l[m]||i;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6154:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],s={id:"configuration",title:"Configuration"},p=void 0,d={unversionedId:"getting-started/configuration",id:"getting-started/configuration",isDocsHomePage:!1,title:"Configuration",description:"Requirements",source:"@site/docs/getting-started/configuration.md",sourceDirName:"getting-started",slug:"/getting-started/configuration",permalink:"/4d-web-studio/docs/getting-started/configuration",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/getting-started/configuration.md",version:"current",frontMatter:{id:"configuration",title:"Configuration"},sidebar:"docs",previous:{title:"Overview",permalink:"/4d-web-studio/docs/getting-started/overview"},next:{title:"Using the Webform Editor",permalink:"/4d-web-studio/docs/webforms/using-web-form-editor"}},c=[{value:"Requirements",id:"requirements",children:[{value:"Browser",id:"browser",children:[]}]},{value:"Enabling access to 4D Web Studio",id:"enabling-access-to-4d-web-studio",children:[]},{value:"Activating authentication",id:"activating-authentication",children:[]},{value:"Opening the web studio",id:"opening-the-web-studio",children:[]}],l={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("h3",{id:"browser"},"Browser"),(0,i.kt)("p",null,"The web studio supports the following web browsers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chrome"),(0,i.kt)("li",{parentName:"ul"},"Edge"),(0,i.kt)("li",{parentName:"ul"},"FireFox")),(0,i.kt)("p",null,"The recommended resolution is 1920x1080."),(0,i.kt)("h2",{id:"enabling-access-to-4d-web-studio"},"Enabling access to 4D Web Studio"),(0,i.kt)("p",null,"By default, access to the web studio is not granted. You need to enable access to it on the project database level and on the ",(0,i.kt)("inlineCode",{parentName:"p"},"WebAdmin")," web server level."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To enable access to the web studio on the database level, you need to check the option on the ",(0,i.kt)("a",{parentName:"p",href:"../WebServer/webServerAdmin.md#enable-access-to-the-web-studio"},"web server configuration page"),". "),(0,i.kt)("p",{parentName:"li"},"To do this, go to ",(0,i.kt)("strong",{parentName:"p"},"Settings")," > ",(0,i.kt)("strong",{parentName:"p"},"Web")," > ",(0,i.kt)("strong",{parentName:"p"},"Web features")," and check ",(0,i.kt)("strong",{parentName:"p"},"Enable access to the web studio"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To enable access to the web studio on the ",(0,i.kt)("a",{parentName:"p",href:"../Admin/webAdmin.md"},(0,i.kt)("inlineCode",{parentName:"a"},"WebAdmin"))," web server, go to ",(0,i.kt)("strong",{parentName:"p"},"File")," > ",(0,i.kt)("strong",{parentName:"p"},"Web Administration")," > ",(0,i.kt)("strong",{parentName:"p"},"Settings...")," and check ",(0,i.kt)("strong",{parentName:"p"},"Enable access to the web studio"),"."))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Reminder")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The WebAdmin settings apply to the running 4D application. For the new settings to be taken into account, you'll need to restart the WebAdmin web server. "))),(0,i.kt)("h2",{id:"activating-authentication"},"Activating authentication"),(0,i.kt)("p",null,"Authentication on the ",(0,i.kt)("inlineCode",{parentName:"p"},"WebAdmin")," web server is granted using an access key. For more details, see ",(0,i.kt)("a",{parentName:"p",href:"../Admin/webAdmin.md#access-key"},"Access key"),"."),(0,i.kt)("h2",{id:"opening-the-web-studio"},"Opening the web studio"),(0,i.kt)("p",null,"The web studio page is available when the ",(0,i.kt)("a",{parentName:"p",href:"../Admin/webAdmin.md#starting-the-webadmin-web-server"},(0,i.kt)("inlineCode",{parentName:"a"},"WebAdmin")," web server is running")," and ",(0,i.kt)("a",{parentName:"p",href:"#activating-authentication"},"authentication is activated"),". "),(0,i.kt)("p",null,"There are two ways to access the web studio:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"from your 4D single-user application, go to ",(0,i.kt)("strong",{parentName:"p"},"Design")," > ",(0,i.kt)("strong",{parentName:"p"},"Web Studio..."),". "),(0,i.kt)("p",{parentName:"li"},"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"WebAdmin")," server is already running, depending on your web server configuration, your default browser opens at ",(0,i.kt)("inlineCode",{parentName:"p"},"IPaddress:HTTPPort/studio")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"IPaddress:HTTPSPort/studio"),". Otherwise, you will be prompted if you want to start the ",(0,i.kt)("inlineCode",{parentName:"p"},"WebAdmin")," web server first.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"on a browser, with the ",(0,i.kt)("inlineCode",{parentName:"p"},"WebAdmin")," web server running (launched from 4D or 4D Server), enter the following address:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"IPaddress:HTTPPort/studio\n")),(0,i.kt)("p",{parentName:"li"},"or:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"IPaddress:HTTPSPort/studio\n")),(0,i.kt)("p",{parentName:"li"},"For example, after launching a local web server on port 7080, type this address in your browser: "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"localhost:7080/studio\n")),(0,i.kt)("p",{parentName:"li"},"You will then be prompted to enter the ",(0,i.kt)("a",{parentName:"p",href:"../Admin/webAdmin.md#access-key"},"access key")," to open a ",(0,i.kt)("inlineCode",{parentName:"p"},"WebAdmin")," session on the server."))))}u.isMDXComponent=!0}}]);