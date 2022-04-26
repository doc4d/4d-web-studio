(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[498],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return A}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(a),A=o,m=p["".concat(d,".").concat(A)]||p[A]||u[A]||s;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function A(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,r=new Array(s);r[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var l=2;l<s;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2876:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var n=a(2122),o=a(9756),s=(a(7294),a(3905)),r=["components"],i={id:"datasources",title:"Datasources"},d=void 0,l={unversionedId:"design-webforms/datasources",id:"design-webforms/datasources",isDocsHomePage:!1,title:"Datasources",description:"Datasources contain data. You can bind them to your Webform components to determine where the data is displayed in your application.",source:"@site/docs/design-webforms/datasources.md",sourceDirName:"design-webforms",slug:"/design-webforms/datasources",permalink:"/4d-web-studio/docs/design-webforms/datasources",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/design-webforms/datasources.md",version:"current",frontMatter:{id:"datasources",title:"Datasources"},sidebar:"docs",previous:{title:"Styling",permalink:"/4d-web-studio/docs/design-webforms/styling"},next:{title:"Events and interactions",permalink:"/4d-web-studio/docs/design-webforms/events/events"}},c=[{value:"Datasource types",id:"datasource-types",children:[{value:"Exposed and non-exposed assets",id:"exposed-and-non-exposed-assets",children:[]}]},{value:"Creating a datasource",id:"creating-a-datasource",children:[]},{value:"Binding a datasource to a component",id:"binding-a-datasource-to-a-component",children:[]},{value:"Attaching events to datasources",id:"attaching-events-to-datasources",children:[]},{value:"Storing data in a datasource",id:"storing-data-in-a-datasource",children:[]},{value:"Keeping track of your datasources",id:"keeping-track-of-your-datasources",children:[]},{value:"Shared datasources",id:"shared-datasources",children:[{value:"Shared functions",id:"shared-functions",children:[]}]}],u={toc:c};function p(e){var t=e.components,i=(0,o.Z)(e,r);return(0,s.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Datasources contain data. You can bind them to your Webform components to determine where the data is displayed in your application."),(0,s.kt)("h2",{id:"datasource-types"},"Datasource types"),(0,s.kt)("p",null,"Inside the Webform Editor, the ",(0,s.kt)("strong",{parentName:"p"},"Data Sources")," section groups the available datasources:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt-text",src:a(8665).Z})),(0,s.kt)("p",null,"In this section, you'll find:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The ",(0,s.kt)("strong",{parentName:"p"},"Catalog"),", which holds:"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"data from your database. From this list, you can designate entities or entity selections from your ",(0,s.kt)("a",{parentName:"li",href:"https://developer.4d.com/docs/en/ORDA/dsmapping.html"},"datastore"),", and they will be handled by the server as remote datasources."),(0,s.kt)("li",{parentName:"ul"},"the functions defined in each class"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Remote datasources"),": Entities and entity selections, handled on the server, that can be assigned to components.\nThey offer functions defined on the ",(0,s.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/ORDA/ordaClasses.html#class-description"},"ORDA classes")," that they instantiate (Entity class, Entity Selection class).")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Local datasources"),": Scalar types handled with the browser's memory. Can be assigned to variables. No request is sent to the server to access local datasources."))),(0,s.kt)("h3",{id:"exposed-and-non-exposed-assets"},"Exposed and non-exposed assets"),(0,s.kt)("p",null,"4D Web Studio runs through the ",(0,s.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/Admin/webAdmin.html"},"4D WebAdmin web server"),". When you use 4D Web Studio as a developer, even when you preview a webform in the studio, you\u2019re using the 4D WebAdmin web server. This allows you to see dataclasses, functions and attributes that are not exposed as REST resources for example (they are greyed out)."),(0,s.kt)("p",null,"However, ",(0,s.kt)("a",{parentName:"p",href:"/4d-web-studio/docs/rendering"},"webform rendering")," happens outside 4D Web Studio, and is served by the ",(0,s.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/WebServer/webServer.html"},"standard 4D web server"),". In this situation, your web application cannot access assets that are not exposed as REST resources."),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/ORDA/ordaClasses.html#exposed-vs-non-exposed-functions"},"Exposed vs non-exposed functions")," and ",(0,s.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/REST/configuration.html#exposing-tables"},"Exposing tables")," for more information on how to expose assets."),(0,s.kt)("h2",{id:"creating-a-datasource"},"Creating a datasource"),(0,s.kt)("h4",{id:"from-the-catalog"},"From the Catalog"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"In the Data Sources section, choose ",(0,s.kt)("strong",{parentName:"li"},"Catalog")," > ",(0,s.kt)("strong",{parentName:"li"},"Data Classes")),(0,s.kt)("li",{parentName:"ol"},'Click the "+" icon next to a dataclass'),(0,s.kt)("li",{parentName:"ol"},"Select Entity or Entity Selection and click ",(0,s.kt)("strong",{parentName:"li"},"Confirm"),". The newly created Entity or Entity selection now appears as a Remote datasource")),(0,s.kt)("h4",{id:"from-a-remote-datasource"},"From a Remote datasource"),(0,s.kt)("p",null,'Click the "+" icon:'),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"next to an entity selection to create an entity (current element of the entity selection)"),(0,s.kt)("li",{parentName:"ul"},"next to an entity's relation to create an entity selection or an entity ")),(0,s.kt)("h4",{id:"from-a-text-component"},"From a Text component"),(0,s.kt)("p",null,"Select text inside a ",(0,s.kt)("strong",{parentName:"p"},"Text")," component and click the ",(0,s.kt)("strong",{parentName:"p"},"Toggle Datasource")," icon to create a local datasource."),(0,s.kt)("h2",{id:"binding-a-datasource-to-a-component"},"Binding a datasource to a component"),(0,s.kt)("p",null,"There are several ways to bind a datasource to a component:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Drag it from the Data Source section and drop it on a component"),(0,s.kt)("li",{parentName:"ul"},"Select a component and enter the name of the datasource in the ",(0,s.kt)("strong",{parentName:"li"},"Properties")," panel > ",(0,s.kt)("strong",{parentName:"li"},"Data Access")," > ",(0,s.kt)("strong",{parentName:"li"},"DataSource")," ")),(0,s.kt)("h2",{id:"attaching-events-to-datasources"},"Attaching events to datasources"),(0,s.kt)("p",null,"You can attach events to datasources to trigger certain actions when these datasources are updated in the web browser. See ",(0,s.kt)("a",{parentName:"p",href:"/4d-web-studio/docs/design-webforms/events/events#datasource-events"},"datasource events")," for more information."),(0,s.kt)("h2",{id:"storing-data-in-a-datasource"},"Storing data in a datasource"),(0,s.kt)("p",null,"You can store data in local and remote datasources. For example, you can configure an event that calls a function, and store the result of that function in a datasource. See the ",(0,s.kt)("a",{parentName:"p",href:"/4d-web-studio/docs/design-webforms/events/events#example-search-feature-using-the-onchange-event"},"example from the user events section"),"."),(0,s.kt)("h2",{id:"keeping-track-of-your-datasources"},"Keeping track of your datasources"),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"Inspect")," option ",(0,s.kt)("img",{alt:"styles-library",src:a(7420).Z})," allows you to check where your datasources are used in your webforms. Toggle the option by clicking the icon, then mouse over a datasource to highlight its location in your webform."),(0,s.kt)("h2",{id:"shared-datasources"},"Shared datasources"),(0,s.kt)("p",null,"Inside a project, you can create ",(0,s.kt)("em",{parentName:"p"},"shared datasources"),". A shared datasource can be used in several webforms inside the same project."),(0,s.kt)("p",null,"Shared datasources are grouped under namespaces. To create a shared datasource, follow the steps to ",(0,s.kt)("a",{parentName:"p",href:"#creating-a-datasource"},"create a local or remote datasource")," and enter a namespace before choosing ",(0,s.kt)("strong",{parentName:"p"},"Confirm"),". "),(0,s.kt)("p",null,"When you select a component linked to a datasource, the Properties panel allows you to identify if that datasource is shared:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"If the datasource is shared, its namespace appears next to its name."),(0,s.kt)("li",{parentName:"ul"},"If the datasource is not shared, ",(0,s.kt)("em",{parentName:"li"},"webform")," is displayed next to its name to indicate that it can only be used in the current webform.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"shared-datasource",src:a(2690).Z})),(0,s.kt)("p",null,"Namespaces of shared datasources are also displayed in the Contextual panel when you configure events that trigger functions."),(0,s.kt)("h3",{id:"shared-functions"},"Shared functions"),(0,s.kt)("p",null,"By extension, when entity and entity selections are used as shared datasources, their functions are shared too and can be used in several webforms in the same project. "),(0,s.kt)("p",null,"When you configure a function event, the Contextual panel indicates if the function is shared by displaying its namespace. When the function is not shared, ",(0,s.kt)("em",{parentName:"p"},"webform")," is displayed."))}p.isMDXComponent=!0},8665:function(e,t){"use strict";t.Z="data:image/png;base64,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"},7420:function(e,t){"use strict";t.Z="data:image/png;base64,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"},2690:function(e,t){"use strict";t.Z="data:image/png;base64,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"}}]);