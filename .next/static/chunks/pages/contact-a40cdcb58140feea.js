(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{8105:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n(2942)}])},3816:function(e,t,n){"use strict";var r=n(5893),i=n(5200),l=n(2415),a=(n(7294),n(682)),s=n(1608),c=n(1555),o=n(1468),d=n(4394),h=i.ZP.logo,u=i.ZP.navItems,m=i.ZP.phone,f=i.ZP.icon,x=i.ZP.email,g=i.ZP.address,j=i.ZP.socials;t.Z=function(e){var t=e.className,n=void 0===t?"":t,i=(0,l.Z)(160).scrollTop;return(0,r.jsxs)("header",{className:"header-area ".concat(n),children:[(0,r.jsx)(a.Z,{children:(0,r.jsx)(s.Z,{children:(0,r.jsx)(c.Z,{lg:12,children:(0,r.jsxs)("div",{className:"header-top d-flex justify-content-between align-items-center",children:[(0,r.jsx)("div",{className:"header-info",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsxs)("a",{href:"mailto:".concat(x),children:[(0,r.jsx)("i",{className:"flaticon-email"})," ",x]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("a",{href:"#",children:[(0,r.jsx)("i",{className:"flaticon-placeholder"})," ",g]})})]})}),(0,r.jsx)(d.Z,{socials:j})]})})})}),(0,r.jsx)("div",{className:"main-header".concat(i?" sticky":""),children:(0,r.jsx)(a.Z,{children:(0,r.jsx)(o.Z,{logo:h,navItems:u,icon:f,phone:m})})})]})}},2251:function(e,t,n){"use strict";var r=n(5893),i=n(3762),l=(n(7294),n(682)),a=n(1608),s=n(1555),c=n(8129);t.Z=function(e){var t=e.title,n=void 0===t?"":t,o=e.page,d=void 0===o?"":o,h=e.parent,u=void 0===h?"":h;return(0,r.jsx)("section",{className:"page-title-area bg_cover",style:{backgroundImage:"url(".concat(i.default.src,")")},children:(0,r.jsx)(l.Z,{children:(0,r.jsx)(a.Z,{children:(0,r.jsx)(s.Z,{lg:12,children:(0,r.jsxs)("div",{className:"page-title-content",children:[(0,r.jsx)("h3",{className:"title",children:n}),(0,r.jsx)("nav",{"aria-label":"breadcrumb",children:(0,r.jsxs)("ol",{className:"breadcrumb",children:[(0,r.jsx)("li",{className:"breadcrumb-item",children:(0,r.jsx)(c.Z,{href:"/",children:"Home"})}),u&&(0,r.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:u}),(0,r.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:d||n})]})})]})})})})})}},1018:function(e,t,n){"use strict";var r=n(5893),i=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=(0,i.createContext)({}),o=function(e){var t=e.splittedText,n=void 0===t?"":t,l=e.i,a=(0,i.useContext)(c),s=a.lastIndex,o=a.newHighlight,d=a.highlight,h=a.highlightSeparator,u=a.renderText,m=a.renderSeparator,f=a.renderHighlight,x=a.renderNonHighlight,g=a.highlightClassName,j=n.trim(),p=j.toLowerCase();return(0,r.jsxs)(i.Fragment,{children:[function(){if(d&&p.includes(o)){if(p===o)return null===f||void 0===f?void 0:f(j,l===s,g);var e=j.split(h),t=e.length-1;return e.map((function(e,n){return(0,r.jsxs)(i.Fragment,{children:[e.toLowerCase()===o?null===f||void 0===f?void 0:f(e,t===n,g):null===x||void 0===x?void 0:x(e,t===n),h]},n)}))}return null===u||void 0===u?void 0:u(j,l===s)}()," ",l!==s&&(null===m||void 0===m?void 0:m())]})};t.Z=function(e){var t=e.text,n=void 0===t?"":t,l=e.separator,d=void 0===l?"\n":l,h=e.children,u=void 0===h?"":h,m=e.highlight,f=void 0===m?"":m,x=e.highlightSeparator,g=void 0===x?" ":x,j=e.highlightClassName,p=void 0===j?"":j,v=e.as,b=void 0===v?i.Fragment:v,N=e.renderText,y=void 0===N?function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e}:N,w=e.renderSeparator,Z=void 0===w?function(){return(0,r.jsx)("br",{})}:w,O=e.renderHighlight,P=void 0===O?function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(0,r.jsx)("span",{className:p,children:e})}:O,S=e.renderNonHighlight,k=void 0===S?function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e}:S,C=s(e,["text","separator","children","highlight","highlightSeparator","highlightClassName","as","renderText","renderSeparator","renderHighlight","renderNonHighlight"]),_=(u||n).split(d),H={lastIndex:_.length-1,newHighlight:f.toLowerCase(),highlight:f,highlightSeparator:g,renderText:y,renderSeparator:Z,renderHighlight:P,renderNonHighlight:k,highlightClassName:p};return(0,r.jsx)(c.Provider,{value:H,children:(0,r.jsx)(b,a({},C,{children:_.map((function(e,t){return(0,r.jsx)(o,{i:t,splittedText:e},t)}))}))})}},7539:function(e,t,n){"use strict";var r=n(5893);n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}t.Z=function(e){var t=e.title,n=void 0===t?"":t,a=e.tagline,s=void 0===a?"":a,c=e.children,o=e.className,d=void 0===o?"":o,h=l(e,["title","tagline","children","className"]);return(0,r.jsxs)("div",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({className:"section-title ".concat(d)},h,{children:[s&&(0,r.jsx)("span",{children:s}),(0,r.jsx)("h3",{className:"title",children:n||c})]}))}},2942:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(5893),i="Contact With Us Now",l="Write a Message",a=[{id:1,type:"text",placeholder:"First Name",name:"fname"},{id:2,type:"text",placeholder:"Last Name",name:"lname"},{id:3,type:"email",placeholder:"Email Address",name:"email"},{id:4,type:"text",placeholder:"Phone Number",name:"number"},{id:5,placeholder:"Write Message",name:"message",cols:30,rows:10}],s=[{id:1,icon:"flaticon-entrepreneur-1",title:"About Krowd",text:"Morbi ut tellus ac leo molestie luctus nec \n vehicula sed justo onec tempor rhoncus \n volutpat ras lorem."},{id:2,icon:"flaticon-location",title:"About Krowd",lists:["66 Road Broklyn Street, 600 New York.","United States of America","P.O Box 0000"]},{id:3,icon:"flaticon-contact",title:"About Krowd",lists:["needhelp@krowd.com","info@krowd.com","666 888 0000"]}],c=n(4596),o=(n(7294),n(682)),d=n(1608),h=n(1555),u=n(7539),m=i,f=l,x=a,g=function(){return(0,r.jsx)("section",{className:"contact-form-area",children:(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(d.Z,{className:"justify-content-center",children:(0,r.jsx)(h.Z,{lg:8,children:(0,r.jsx)(u.Z,{title:f,tagline:m,className:"text-center"})})}),(0,r.jsx)(d.Z,{className:"justify-content-center",children:(0,r.jsxs)(h.Z,{lg:8,children:[(0,r.jsx)("form",{onSubmit:(0,c.Z)((function(e){return console.log(e)})),id:"contact-form",children:(0,r.jsx)("div",{className:"conact-form-item",children:(0,r.jsxs)(d.Z,{children:[x.map((function(e){var t=e.id,n=e.type,i=e.name,l=e.placeholder,a=e.cols,s=e.rows;return(0,r.jsx)(h.Z,{lg:n?6:12,md:n?6:12,children:(0,r.jsx)("div",{className:"input-box mt-20",children:n?(0,r.jsx)("input",{type:n,placeholder:l,name:i}):(0,r.jsx)("textarea",{id:"#",cols:a,rows:s,placeholder:l,name:i})})},t)})),(0,r.jsx)(h.Z,{lg:12,children:(0,r.jsx)("div",{className:"input-box mt-20 text-center",children:(0,r.jsx)("button",{className:"main-btn",type:"submit",children:"Submit message"})})})]})})}),(0,r.jsx)("p",{className:"form-message"})]})})]})})},j=n(1018),p=function(){return(0,r.jsx)("section",{className:"contact-info-area",children:(0,r.jsx)(o.Z,{fluid:!0,className:"p-0",children:(0,r.jsx)(d.Z,{className:"no-gutters justify-content-center",children:s.map((function(e){var t=e.id,n=e.title,i=e.icon,l=e.text,a=e.lists,s=void 0===a?[]:a;return(0,r.jsx)(h.Z,{lg:4,md:9,children:(0,r.jsxs)("div",{className:"contact-info-item".concat(1!==t?" item-".concat(t):""),children:[(0,r.jsx)("div",{className:"icon",children:(0,r.jsx)("i",{className:i})}),(0,r.jsx)("h4",{className:"title",children:n}),l&&(0,r.jsx)(j.Z,{text:l,as:"p"}),s.length>0&&(0,r.jsx)("ul",{children:s.map((function(e,t){return(0,r.jsx)("li",{children:e},t)}))})]})},t)}))})})})},v=function(){return(0,r.jsx)("div",{className:"contact-map",children:(0,r.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14612.97540392891!2d90.497437!3d23.70298445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1593633952456!5m2!1sen!2sbd",width:600,height:450,style:{border:0},allowFullScreen:"","aria-hidden":!1,tabIndex:0})})},b=n(3816),N=n(3620),y=n(2251),w=function(){return(0,r.jsxs)(N.Z,{children:[(0,r.jsx)(b.Z,{}),(0,r.jsx)(y.Z,{title:"Contact"}),(0,r.jsx)(g,{}),(0,r.jsx)(p,{}),(0,r.jsx)(v,{})]})}}},function(e){e.O(0,[266,612,774,888,179],(function(){return t=8105,e(e.s=t);var t}));var t=e.O();_N_E=t}]);