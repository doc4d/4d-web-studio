(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[498],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return A}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),A=o,m=u["".concat(l,".").concat(A)]||u[A]||p[A]||r;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function A(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var d=2;d<r;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2876:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),s=["components"],i={id:"datasources",title:"Datasources"},l=void 0,d={unversionedId:"design-webforms/datasources",id:"design-webforms/datasources",isDocsHomePage:!1,title:"Datasources",description:"Datasources contain data. You can bind them to your Webform components to determine where the data is displayed in your application.",source:"@site/docs/design-webforms/datasources.md",sourceDirName:"design-webforms",slug:"/design-webforms/datasources",permalink:"/4d-web-studio/docs/design-webforms/datasources",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/design-webforms/datasources.md",version:"current",frontMatter:{id:"datasources",title:"Datasources"},sidebar:"docs",previous:{title:"Styling",permalink:"/4d-web-studio/docs/design-webforms/styling"},next:{title:"Events and interactions",permalink:"/4d-web-studio/docs/design-webforms/events/events"}},c=[{value:"Datasource types",id:"datasource-types",children:[{value:"Exposed and non-exposed assets",id:"exposed-and-non-exposed-assets",children:[]}]},{value:"Creating a datasource",id:"creating-a-datasource",children:[]},{value:"Binding a datasource to a component",id:"binding-a-datasource-to-a-component",children:[]},{value:"Attaching events to datasources",id:"attaching-events-to-datasources",children:[]},{value:"Storing data in a datasource",id:"storing-data-in-a-datasource",children:[]},{value:"Keeping track of your datasources",id:"keeping-track-of-your-datasources",children:[]}],p={toc:c};function u(e){var t=e.components,i=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Datasources contain data. You can bind them to your Webform components to determine where the data is displayed in your application."),(0,r.kt)("h2",{id:"datasource-types"},"Datasource types"),(0,r.kt)("p",null,"Inside the Webform Editor, the ",(0,r.kt)("strong",{parentName:"p"},"Data Sources")," section groups the available datasources:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt-text",src:n(8665).Z})),(0,r.kt)("p",null,"In this section, you'll find:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"Catalog"),", which holds:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"data from your database: You can designate entities or entity selections from your ",(0,r.kt)("a",{parentName:"li",href:"https://developer.4d.com/docs/en/ORDA/dsmapping.html"},"datastore"),", and they will be handled by the server as Remote datasources."),(0,r.kt)("li",{parentName:"ul"},"Class functions: The Catalog displays the functions defined in each class. "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Remote datasources"),": Entities and entity selections, handled on the server, that can be assigned to components.\nThey offer functions defined on the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/ORDA/ordaClasses.html#class-description"},"ORDA classes")," that they instantiate (Entity class, Entity Selection class).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Local datasources"),": Scalar types handled with the browser's memory. Can be assigned to variables. No request is sent to the server to access local datasources."))),(0,r.kt)("h3",{id:"exposed-and-non-exposed-assets"},"Exposed and non-exposed assets"),(0,r.kt)("p",null,"4D Web Studio runs through the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/Admin/webAdmin.html"},"4D WebAdmin web server"),". When you use 4D Web Studio as a developer, even when you preview a webform in the studio, you\u2019re using the 4D WebAdmin web server. This allows you to see dataclasses, functions and attributes that are not exposed as REST resources for example (they are greyed out)."),(0,r.kt)("p",null,"However, ",(0,r.kt)("a",{parentName:"p",href:"/4d-web-studio/docs/rendering"},"webform rendering")," happens outside 4D Web Studio, and is served by the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/WebServer/webServer.html"},"standard 4D web server"),". In this situation, your web application cannot access assets that are not exposed as REST resources."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/ORDA/ordaClasses.html#exposed-vs-non-exposed-functions"},"Exposed vs non-exposed functions")," and ",(0,r.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/REST/configuration.html#exposing-tables"},"Exposing tables")," for more information on how to expose assets."),(0,r.kt)("h2",{id:"creating-a-datasource"},"Creating a datasource"),(0,r.kt)("h4",{id:"from-the-catalog"},"From the Catalog"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the Data Sources section, choose ",(0,r.kt)("strong",{parentName:"li"},"Catalog")," > ",(0,r.kt)("strong",{parentName:"li"},"Data Classes")),(0,r.kt)("li",{parentName:"ol"},'Click the "+" icon next to a dataclass'),(0,r.kt)("li",{parentName:"ol"},"Select Entity or Entity Selection and click ",(0,r.kt)("strong",{parentName:"li"},"Confirm"),". The newly created Entity or Entity selection now appears as a Remote datasource")),(0,r.kt)("h4",{id:"from-a-remote-datasource"},"From a Remote datasource"),(0,r.kt)("p",null,'Click the "+" icon:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"next to an entity selection to create an entity (current element of the entity selection)"),(0,r.kt)("li",{parentName:"ul"},"next to an entity's relation to create an entity selection or an entity ")),(0,r.kt)("h4",{id:"from-a-text-component"},"From a Text component"),(0,r.kt)("p",null,"Select text inside a ",(0,r.kt)("strong",{parentName:"p"},"Text")," component and click the ",(0,r.kt)("strong",{parentName:"p"},"Toggle Datasource")," icon to create a local datasource."),(0,r.kt)("h2",{id:"binding-a-datasource-to-a-component"},"Binding a datasource to a component"),(0,r.kt)("p",null,"There are several ways to bind a datasource to a component:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Drag it from the Data Source section and drop it on a component"),(0,r.kt)("li",{parentName:"ul"},"Select a component and enter the name of the datasource in the Properties panel > Data Access > DataSource ")),(0,r.kt)("h2",{id:"attaching-events-to-datasources"},"Attaching events to datasources"),(0,r.kt)("p",null,"You can attach events to datasources to trigger certain actions when these datasources are updated in the web browser. See ",(0,r.kt)("a",{parentName:"p",href:"/4d-web-studio/docs/design-webforms/events/events#datasource-events"},"datasource events")," for more information."),(0,r.kt)("h2",{id:"storing-data-in-a-datasource"},"Storing data in a datasource"),(0,r.kt)("p",null,"You can store data in local and remote datasources. For example, you can configure an event that calls a function, and store the result of that function in a datasource. See the ",(0,r.kt)("a",{parentName:"p",href:"/4d-web-studio/docs/design-webforms/events/events#example-search-feature-using-the-onchange-event"},"example from the user events section"),"."),(0,r.kt)("h2",{id:"keeping-track-of-your-datasources"},"Keeping track of your datasources"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Inspect")," option ",(0,r.kt)("img",{alt:"styles-library",src:n(7420).Z})," allows you to check where your datasources are used in your webforms. Toggle the option by clicking the icon, then mouse over a datasource to highlight its location in your webform."))}u.isMDXComponent=!0},8665:function(e,t){"use strict";t.Z="data:image/png;base64,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"},7420:function(e,t){"use strict";t.Z="data:image/png;base64,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"}}]);