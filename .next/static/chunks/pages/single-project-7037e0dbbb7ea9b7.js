(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[284],{5233:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/single-project",function(){return i(6504)}])},9322:function(e,s,i){"use strict";var t=i(5893),a=i(7294),n=function(e){var s=e.faq,i=e.current,a=e.handleCurrent,n=s.id,r=s.title,l=s.text,c=i===n;return(0,t.jsx)("div",{className:"accrodion overflow-hidden".concat(c?" active":""),children:(0,t.jsxs)("div",{className:"accrodion-inner",children:[(0,t.jsx)("div",{onClick:function(){return a(n)},className:"accrodion-title",children:(0,t.jsxs)("h4",{children:[(0,t.jsxs)("span",{children:[n,"."]})," ",r]})}),(0,t.jsx)("div",{className:"accrodion-content".concat(c?"":" d-none"),children:(0,t.jsx)("div",{className:"inner animated".concat(c?" fadeInUp":""),children:(0,t.jsx)("p",{children:l})})})]})})};s.Z=function(e){var s=e.faqs,i=void 0===s?[]:s,r=e.className,l=void 0===r?"":r,c=(0,a.useState)(1),o=c[0],d=c[1],u=function(e){d(e)};return(0,t.jsx)("div",{className:"faq-accordion overflow-hidden ".concat(l),children:(0,t.jsx)("div",{className:"accrodion-grp".concat(l?"":" animated fadeInLeft"," faq-accrodion"),children:i.map((function(e){return(0,t.jsx)(n,{faq:e,current:o,handleCurrent:u},e.id)}))})})}},3816:function(e,s,i){"use strict";var t=i(5893),a=i(5200),n=i(2415),r=(i(7294),i(682)),l=i(1608),c=i(1555),o=i(1468),d=i(4394),u=a.ZP.logo,m=a.ZP.navItems,h=a.ZP.phone,p=a.ZP.icon,j=a.ZP.email,x=a.ZP.address,f=a.ZP.socials;s.Z=function(e){var s=e.className,i=void 0===s?"":s,a=(0,n.Z)(160).scrollTop;return(0,t.jsxs)("header",{className:"header-area ".concat(i),children:[(0,t.jsx)(r.Z,{children:(0,t.jsx)(l.Z,{children:(0,t.jsx)(c.Z,{lg:12,children:(0,t.jsxs)("div",{className:"header-top d-flex justify-content-between align-items-center",children:[(0,t.jsx)("div",{className:"header-info",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsxs)("a",{href:"mailto:".concat(j),children:[(0,t.jsx)("i",{className:"flaticon-email"})," ",j]})}),(0,t.jsx)("li",{children:(0,t.jsxs)("a",{href:"#",children:[(0,t.jsx)("i",{className:"flaticon-placeholder"})," ",x]})})]})}),(0,t.jsx)(d.Z,{socials:f})]})})})}),(0,t.jsx)("div",{className:"main-header".concat(a?" sticky":""),children:(0,t.jsx)(r.Z,{children:(0,t.jsx)(o.Z,{logo:u,navItems:m,icon:p,phone:h})})})]})}},7335:function(e,s,i){"use strict";var t=i(5893),a=i(4596),n=(i(7294),i(1608)),r=i(1555);s.Z=function(){return(0,t.jsxs)("div",{className:"comment-form me-1",children:[(0,t.jsx)("h3",{className:"comment-one__block-title",children:"Leave a Comment"}),(0,t.jsx)("form",{onSubmit:(0,a.Z)((function(e){return console.log(e)})),className:"contact-one__form",children:(0,t.jsxs)(n.Z,{children:[(0,t.jsx)(r.Z,{lg:6,children:(0,t.jsx)("div",{className:"input-box",children:(0,t.jsx)("input",{type:"text",placeholder:"Name",name:"name"})})}),(0,t.jsx)(r.Z,{lg:6,children:(0,t.jsx)("div",{className:"input-box",children:(0,t.jsx)("input",{type:"text",placeholder:"Email",name:"email"})})}),(0,t.jsx)(r.Z,{lg:12,children:(0,t.jsx)("div",{className:"input-box",children:(0,t.jsx)("textarea",{placeholder:"Write Comment",name:"message"})})}),(0,t.jsx)(r.Z,{lg:12,className:"text-left",children:(0,t.jsx)("div",{className:"input-box",children:(0,t.jsx)("button",{type:"submit",className:"main-btn",children:"Submit comment"})})})]})})]})}},4713:function(e,s,i){"use strict";var t=i(5893),a=(i(7294),i(1330)),n=function(e){var s=e.comment,n=void 0===s?{}:s,r=n.image,l=n.name,c=n.date,o=n.text;return(0,t.jsxs)("div",{className:"comment-one__single",children:[(0,t.jsx)("div",{className:"comment-one__image",children:(0,t.jsx)(a.Z,{src:i(990)("./".concat(r)).default.src,alt:""})}),(0,t.jsxs)("div",{className:"comment-one__content",children:[(0,t.jsxs)("h3",{children:[l," ",(0,t.jsxs)("span",{className:"comment-one__date",children:[" ",c]})]}),(0,t.jsx)("p",{children:o})]}),(0,t.jsx)("div",{className:"blog-btn",children:(0,t.jsx)("a",{href:"#",className:"main-btn",children:"Reply"})})]})};s.Z=function(e){var s=e.comments,i=void 0===s?[]:s,a=e.className,r=void 0===a?"":a;return(0,t.jsxs)("div",{className:"comment-one ".concat(r),children:[(0,t.jsxs)("h3",{className:"comment-one__block-title",children:[i.length," Comments"]}),i.map((function(e){return(0,t.jsx)(n,{comment:e},e.id)}))]})}},9844:function(e,s,i){"use strict";var t=i(5893),a=(i(7294),i(1330)),n=i(8129);s.Z=function(e){var s=e.project,i=void 0===s?{}:s,r=i.image,l=i.category,c=i.date,o=i.title,d=i.goal,u=i.raised;return(0,t.jsxs)("div",{className:"explore-projects-item mt-30",children:[(0,t.jsxs)("div",{className:"explore-projects-thumb",children:[(0,t.jsx)(a.Z,{src:r.src,alt:"explore-projects"}),(0,t.jsx)("a",{href:"#",children:(0,t.jsx)("i",{className:"fa fa-heart"})})]}),(0,t.jsxs)("div",{className:"explore-projects-content",children:[(0,t.jsxs)("div",{className:"item d-flex align-items-center",children:[(0,t.jsx)("span",{children:l}),(0,t.jsxs)("p",{children:[(0,t.jsx)("i",{className:"fa fa-clock-o"})," ",c]})]}),(0,t.jsx)(n.Z,{href:"/single-project",children:(0,t.jsx)("h3",{className:"title",children:o})}),(0,t.jsx)("div",{className:"projects-range",children:(0,t.jsxs)("div",{className:"projects-range-content",children:[(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Raised:"}),(0,t.jsxs)("li",{children:[u,"%"]})]}),(0,t.jsx)("div",{className:"range"})]})}),(0,t.jsx)("div",{className:"projects-goal",children:(0,t.jsxs)("span",{children:["Goal: ",(0,t.jsxs)("span",{children:[d," USD"]})]})})]})]})}},2251:function(e,s,i){"use strict";var t=i(5893),a=i(3762),n=(i(7294),i(682)),r=i(1608),l=i(1555),c=i(8129);s.Z=function(e){var s=e.title,i=void 0===s?"":s,o=e.page,d=void 0===o?"":o,u=e.parent,m=void 0===u?"":u;return(0,t.jsx)("section",{className:"page-title-area bg_cover",style:{backgroundImage:"url(".concat(a.default.src,")")},children:(0,t.jsx)(n.Z,{children:(0,t.jsx)(r.Z,{children:(0,t.jsx)(l.Z,{lg:12,children:(0,t.jsxs)("div",{className:"page-title-content",children:[(0,t.jsx)("h3",{className:"title",children:i}),(0,t.jsx)("nav",{"aria-label":"breadcrumb",children:(0,t.jsxs)("ol",{className:"breadcrumb",children:[(0,t.jsx)("li",{className:"breadcrumb-item",children:(0,t.jsx)(c.Z,{href:"/",children:"Home"})}),m&&(0,t.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:m}),(0,t.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:d||i})]})})]})})})})})}},7539:function(e,s,i){"use strict";var t=i(5893);i(7294);function a(e,s,i){return s in e?Object.defineProperty(e,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[s]=i,e}function n(e,s){if(null==e)return{};var i,t,a=function(e,s){if(null==e)return{};var i,t,a={},n=Object.keys(e);for(t=0;t<n.length;t++)i=n[t],s.indexOf(i)>=0||(a[i]=e[i]);return a}(e,s);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)i=n[t],s.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}s.Z=function(e){var s=e.title,i=void 0===s?"":s,r=e.tagline,l=void 0===r?"":r,c=e.children,o=e.className,d=void 0===o?"":o,u=n(e,["title","tagline","children","className"]);return(0,t.jsxs)("div",function(e){for(var s=1;s<arguments.length;s++){var i=null!=arguments[s]?arguments[s]:{},t=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),t.forEach((function(s){a(e,s,i[s])}))}return e}({className:"section-title ".concat(d)},u,{children:[l&&(0,t.jsx)("span",{children:l}),(0,t.jsx)("h3",{className:"title",children:i||c})]}))}},6204:function(e,s,i){"use strict";i.d(s,{RJ:function(){return r},_f:function(){return a},jn:function(){return l},zI:function(){return n}});var t=i(5346),a=[{id:1,title:"Is my campaign allowed on krowd?",text:"There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable."},{id:2,title:"How to soft launch your campaign?",text:"There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable."},{id:3,title:"How to turn visitors into contributors?",text:"There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable."},{id:4,title:"How can i find my campaign?",text:"There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable."}],n={bg:t.default,tagline:"Frequently Asked Questions",title:"How Can We Help?",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Have you done google research which works all the time.",categories:[{id:1,icon:"flaticon-handshake",text:"Backers",href:"#"},{id:2,icon:"flaticon-computer",text:"Campaigns",href:"#"},{id:3,icon:"flaticon-pay",text:"Payments",href:"#"}],faqs:a},r={tagline:"Frequently Asked Questions",title:"How Can We Help?"},l={navItems:[{id:1,href:"pills-1",icon:"flaticon-handshake",name:"Backers"},{id:2,href:"pills-2",icon:"flaticon-computer",name:"Campaigns"},{id:3,href:"pills-3",icon:"flaticon-pay",name:"Payments"},{id:4,href:"pills-4",icon:"flaticon-entrepreneur",name:"Entrepreneur"},{id:5,href:"pills-5",icon:"flaticon-fingerprint-scan",name:"Legal"},{id:6,href:"pills-6",icon:"flaticon-account",name:"Backers"}],tabPane:[{id:"pills-1",faqsData:[a,a]},{id:"pills-2",faqsData:[a,a]},{id:"pills-3",faqsData:[a,a]},{id:"pills-4",faqsData:[a,a]},{id:"pills-5",faqsData:[a,a]},{id:"pills-6",faqsData:[a,a]}]}},7513:function(e,s,i){"use strict";i.d(s,{Ar:function(){return C},Wd:function(){return q},c9:function(){return y},cb:function(){return Z},ht:function(){return w},jw:function(){return k},qZ:function(){return P},tC:function(){return D},tL:function(){return S},wp:function(){return L},xJ:function(){return b}});var t=i(3221),a=i(8242),n=i(6539),r=i(2753),l=i(5602),c=i(504),o=i(7785),d=i(3728),u=i(7845),m=i(9202),h=i(7458),p=i(95),j=i(1408),x=i(6503),f=i(2204),g=i(9792),v=i(6204),N=[{id:1,image:t.default,category:"Design",date:"20 Days Left",title:"A New Super Car on Your Wrist",goal:"3600.00",raised:23},{id:2,image:a.default,category:"Design",date:"20 Days Left",title:"A New Super Car on Your Wrist",goal:"3600.00",raised:23},{id:3,image:n.default,category:"Design",date:"20 Days Left",title:"A New Super Car on Your Wrist",goal:"3600.00",raised:23},{id:4,image:r.default,category:"Design",date:"20 Days Left",title:"A New Super Car on Your Wrist",goal:"3600.00",raised:23},{id:5,image:l.default,category:"Design",date:"20 Days Left",title:"A New Super Car on Your Wrist",goal:"3600.00",raised:23},{id:6,image:c.default,category:"Design",date:"20 Days Left",title:"A New Super Car on Your Wrist",goal:"3600.00",raised:23}],b={tagline:"Businesses You Can Back",title:"Explore Projects",projects:N},y={tagline:"Businesses You Can Back",title:"Explore Projects",projects:[{id:1,image:"project-1.jpg",tagline:"Design",date:"20 Days Left",title:"The Power Bank that is Always Charged",raised:23},{id:2,image:"project-2.jpg",tagline:"Design",date:"20 Days Left",title:"The Power Bank that is Always Charged",raised:23},{id:3,image:"project-3.jpg",tagline:"Design",date:"20 Days Left",title:"The Power Bank that is Always Charged",raised:23},{id:4,image:"project-4.jpg",tagline:"Design",date:"20 Days Left",title:"The Power Bank that is Always Charged",raised:23},{id:5,image:"project-5.jpg",tagline:"Design",date:"20 Days Left",title:"The Power Bank that is Always Charged",raised:23},{id:6,image:"project-7.jpg",tagline:"Design",date:"20 Days Left",title:"The Power Bank that is Always Charged",raised:23}]},w=[{id:1,bg:u.default,title:"Ready? Explore",text:"There are not is many variations of passages of lorem available.",linkText:"Discover projects"},{id:2,bg:m.default,title:"Feeling Inspired?",text:"There are not is many variations of passages of lorem available.",linkText:"Join our team",btnClassName:" main-btn-2",className:" project-inspired"}],Z={thumb:g.default,flag:o.default,tagline:"Design",country:"United Kingdom",title:"A New Super Car on Your Wrist",pledged:2203,backers:68,daysLeft:20,raised:23,goal:"3600.00",socials:[{id:1,icon:"fa fa-facebook-square",href:"#"},{id:2,icon:"fa fa-twitter",href:"#"},{id:3,icon:"ffa fa-pinterest-p",href:"#"},{id:4,icon:"fa fa-instagram",href:"#"}]},q=[{id:"pills-home",name:"Story"},{id:"pills-profile",name:"FAQs"},{id:"pills-contact",name:"Updates"},{id:"pills-4",name:"Comments"}],k={id:"pills-home",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate sed mauris vitae pellentesque. Nunc ut ullamcorper libero. Aenean fringilla mauris quis risus laoreet interdum. Quisque imperdiet orci in metus aliquam egestas. Fusce elit libero, imperdiet nec orci quis, convallis hendrerit nisl. Cras auctor nec purus at placerat.",lists:["Nsectetur cing mauris quis risus laoreet elit.","Suspe ndisse dolor sit amet suscipit sagittis leo.","Entum estibulum metus aliquam egestas dignissim posuere.","If you are going to use a auctor nec purus passage.","Lorem Ipsum on the tend to repeat."],image:j.default,text2:"Integer feugiat est in tincidunt congue. Nam eget accumsan ligula. Nunc auctor ligula a quam fermentum, non iaculis diam suscipit. Aliquam lacinia lorem vel suscipit pulvinar. Etiam condimentum nunc non ultricies hendrerit. Sed nec blandit libero, ut gravida quam. Nam tortor est, faucibus at dolor id, blandit venenatis leo. Praesent euismod tempus libero et accumsan. Nunc ultrices sit amet urna sed euismod. Pellentesque finibus ipsum non mi sodales, vel ullamcorper ipsum pharetra. Praesent nec pharetra neque.",text3:"Nulla in ex at mi viverra sagittis ut non erat raesent nec congue elit. Nunc arcu odio, convallis a lacinia ut, tristique id eros. Suspendisse leo erat, pellentesque et commodo vel, varius in felis. Nulla mollis turpis porta justo eleifend volutpat. Cras malesuada nec magna eu blandit. Nam sed efficitur ante. Quisque lobortis sodales risus, eu dapibus dolor porta vitae. Vestibulum eu ex auctor, scelerisque velit sit amet, vehicula sapien.",items:[{id:1,title:"One Power Bank for Every Wrist Car",text:"Lorem Ipsum nibh vel velit auctor aliquet. Aenean sollic tudin, lorem is simply free text quis bibendum."},{id:2,title:"One Power Bank for Every Wrist Car",className:"mt-45 mb-50",text:"Lorem Ipsum nibh vel velit auctor aliquet. Aenean sollic tudin, lorem is simply free text quis bibendum."}],images:[h.default,p.default]},C={id:"pills-profile",faqs:v._f},P={id:"pills-contact",updates:[{id:1,title:"This is the first update of our new project",info:{image:d.default,name:"Sarah Albert",date:"4 March, 2020"},text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate sed mauris vitae pellentesque. Nunc ut ullamcorper libero. Aenean fringilla mauris quis risus laoreet interdum. Quisque imperdiet orci in metus aliquam egestas. Fusce elit libero, imperdiet nec orci quis, convallis hendrerit nisl. Cras auctor nec purus at placerat.",text2:"Quisque consectetur, lectus in ullamcorper tempus, dolor arcu suscipit elit, id laoreet tortor justo nec arcu. Nam eu dictum ipsum. Morbi in mi eu urna placerat finibus a vel neque. Nulla in ex at mi viverra sagittis ut non erat. Praesent nec congue elit.",image:"project-updates-thumb-1.jpg"},{id:2,title:"This is the first update of our new project",info:{image:d.default,name:"Sarah Albert",date:"4 March, 2020"},text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate sed mauris vitae pellentesque. Nunc ut ullamcorper libero. Aenean fringilla mauris quis risus laoreet interdum. Quisque imperdiet orci in metus aliquam egestas. Fusce elit libero, imperdiet nec orci quis, convallis hendrerit nisl. Cras auctor nec purus at placerat.",text2:"Quisque consectetur, lectus in ullamcorper tempus, dolor arcu suscipit elit, id laoreet tortor justo nec arcu. Nam eu dictum ipsum. Morbi in mi eu urna placerat finibus a vel neque. Nulla in ex at mi viverra sagittis ut non erat. Praesent nec congue elit.",image:"project-updates-thumb-2.jpg"}]},D={id:"pills-4",comments:[{id:1,image:"comment-2.2.jpg",name:"Kevin Martin",date:"3 March, 2020",text:"Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis."},{id:2,image:"comment-2.1.jpg",name:"Sarah albert",date:"3 March, 2020",text:"Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis."}]},S={info:{image:x.default,name:"John Smith",backed:20,text:"Aenean fringilla mauris quis risus laoreet interdum. Quisque imperdiet orci in metus aliquam egestas."},perks:[{id:1,image:f.default,sold:50,off:62,amount:"5,800",date:"November 2022",claimed:23,totalClaimed:30},{id:2,sold:50,off:62,amount:"5,800",date:"November 2022",claimed:23,totalClaimed:30}]},L={tagline:"Businesses You Can Back",title:"Similar Projects",projects:N.slice(0,3)}},6504:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return ae}});var t=i(5893),a=i(3816),n=i(3620),r=i(7513),l=i(7294),c=i(682),o=i(1608),d=i(1555),u=i(1330),m=r.cb.thumb,h=r.cb.flag,p=r.cb.tagline,j=r.cb.country,x=r.cb.title,f=r.cb.pledged,g=r.cb.backers,v=r.cb.daysLeft,N=r.cb.raised,b=r.cb.goal,y=r.cb.socials,w=function(){return(0,t.jsx)("section",{className:"project-details-area pt-120 pb-190",children:(0,t.jsx)(c.Z,{children:(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(d.Z,{lg:7,children:(0,t.jsxs)("div",{className:"project-details-thumb",children:[(0,t.jsx)(u.Z,{src:m.src,alt:""}),(0,t.jsx)("div",{className:"icon",children:(0,t.jsx)("i",{className:"fa fa-heart"})})]})}),(0,t.jsx)(d.Z,{lg:5,children:(0,t.jsxs)("div",{className:"project-details-content",children:[(0,t.jsxs)("div",{className:"details-btn",children:[(0,t.jsx)("span",{children:p}),(0,t.jsxs)("div",{className:"flag",children:[(0,t.jsx)(u.Z,{src:h.src,alt:""}),(0,t.jsx)("p",{children:j})]})]}),(0,t.jsx)("h3",{className:"title",children:x}),(0,t.jsxs)("div",{className:"project-details-item",children:[(0,t.jsxs)("div",{className:"item text-center",children:[(0,t.jsxs)("h5",{className:"title",children:["$",f]}),(0,t.jsx)("span",{children:"Pledged"})]}),(0,t.jsxs)("div",{className:"item text-center",children:[(0,t.jsx)("h5",{className:"title",children:g}),(0,t.jsx)("span",{children:"Backers"})]}),(0,t.jsxs)("div",{className:"item text-center",children:[(0,t.jsx)("h5",{className:"title",children:v}),(0,t.jsx)("span",{children:"Days Left"})]})]}),(0,t.jsx)("div",{className:"projects-range",children:(0,t.jsxs)("div",{className:"projects-range-content",children:[(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Raised:"}),(0,t.jsxs)("li",{children:[N,"%"]})]}),(0,t.jsx)("div",{className:"range"})]})}),(0,t.jsx)("div",{className:"projects-goal",children:(0,t.jsxs)("span",{children:["Goal: ",(0,t.jsxs)("span",{children:[b," USD"]})]})}),(0,t.jsx)("div",{className:"project-btn mt-25",children:(0,t.jsx)("a",{className:"main-btn",href:"#",children:"Back this project"})}),(0,t.jsxs)("div",{className:"project-share d-flex align-items-center",children:[(0,t.jsx)("span",{children:"Share this Project"}),(0,t.jsx)("ul",{children:y.map((function(e){var s=e.id,i=e.icon,a=e.href;return(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:a,children:(0,t.jsx)("i",{className:i})})},s)}))})]})]})})]})})})},Z=i(7335),q=i(4713),k=r.tC.id,C=r.tC.comments,P=function(e){var s=e.getClassName;return(0,t.jsxs)("div",{className:s(k),id:"pills-4",role:"tabpanel",children:[(0,t.jsx)(q.Z,{comments:C,className:"mt-50"}),(0,t.jsx)(Z.Z,{})]})},D=i(9322),S=r.Ar.faqs,L=r.Ar.id,A=function(e){var s=e.getClassName;return(0,t.jsx)("div",{className:s(L),id:L,role:"tabpanel",children:(0,t.jsx)(D.Z,{faqs:S,className:"mt-70"})})},_=r.tL.info,I=r.tL.perks,O=function(e){var s=e.perk,i=void 0===s?{}:s,a=i.id,n=i.image,r=i.sold,l=i.off,c=i.amount,o=i.date,d=i.claimed,m=i.totalClaimed;return(0,t.jsxs)("div",{className:"project-details-park mt-30 box".concat(2===a?" item-2":""),children:[(0,t.jsx)("h4",{className:"title",children:"Select a Perk"}),n&&(0,t.jsx)(u.Z,{src:n.src,alt:""}),(0,t.jsxs)("span",{children:["SAPPHIRE(",r," sold already)"]}),(0,t.jsxs)("p",{children:["$",c," (",l,"% OFF)"]}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Estimated Shipping"}),(0,t.jsx)("li",{children:(0,t.jsx)("span",{children:o})}),(0,t.jsxs)("li",{children:[d," out of ",m," ",(0,t.jsx)("span",{children:"claimed"})]})]}),(0,t.jsx)("a",{className:"main-btn",href:"#",children:"Continue now"})]})},B=function(){return(0,t.jsxs)("div",{className:"project-details-sidebar",children:[(0,t.jsxs)("div",{className:"project-details-info mt-70 box",children:[(0,t.jsxs)("div",{className:"info",children:[(0,t.jsx)(u.Z,{src:_.image.src,alt:""}),(0,t.jsx)("h5",{className:"title",children:_.name}),(0,t.jsxs)("span",{children:[_.backed," backed"]})]}),(0,t.jsx)("p",{children:_.text})]}),I.map((function(e){return(0,t.jsx)(O,{perk:e},e.id)}))]})},E=r.jw.id,T=r.jw.text,W=r.jw.lists,H=r.jw.text2,Q=r.jw.items,Y=r.jw.text3,F=r.jw.image,M=r.jw.images,R=function(e){var s=e.getClassName;return(0,t.jsxs)("div",{className:null===s||void 0===s?void 0:s(E),id:E,role:"tabpanel",children:[(0,t.jsxs)("div",{className:"project-details-content-top",children:[(0,t.jsx)("p",{children:T}),(0,t.jsx)("ul",{children:W.map((function(e,s){return(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{className:"flaticon-check"})," ",e]},s)}))}),(0,t.jsx)("div",{className:"project-details-thumb",children:(0,t.jsx)(u.Z,{src:F.src,alt:""})})]}),(0,t.jsxs)("div",{className:"project-details-item",children:[(0,t.jsx)("p",{children:H}),Q.map((function(e){var s=e.id,i=e.title,a=e.text,n=e.className,r=void 0===n?"":n;return(0,t.jsxs)("div",{className:"item ".concat(r),children:[(0,t.jsx)("i",{className:"flaticon-checkmark"}),(0,t.jsx)("h5",{className:"title",children:i}),(0,t.jsx)("p",{children:a})]},s)})),(0,t.jsx)(o.Z,{children:M.map((function(e,s){return(0,t.jsx)(d.Z,{lg:6,md:6,sm:6,children:(0,t.jsx)("div",{className:"project-details-thumb",children:(0,t.jsx)(u.Z,{src:e.src,alt:""})})},s)}))}),(0,t.jsx)("p",{className:"text",children:Y})]})]})},U=r.qZ.id,J=r.qZ.updates,G=function(e){var s=e.update,a=void 0===s?{}:s,n=a.title,r=a.info,l=a.text,c=a.text2,o=a.image,d=a.id;return(0,t.jsxs)("div",{className:"project-details-updates",children:[(0,t.jsxs)("div",{className:"project-details-updates-top",children:[(0,t.jsx)("h3",{className:"title",children:n}),(0,t.jsxs)("div",{className:"info-updates d-block d-sm-flex justify-content-between align-items-center",children:[(0,t.jsxs)("div",{className:"info",children:[(0,t.jsx)(u.Z,{src:r.image.src,alt:""}),(0,t.jsxs)("span",{children:["by"," ",(0,t.jsxs)("span",{children:[r.name,(0,t.jsxs)("span",{children:[" ",r.date]})]})]})]}),(0,t.jsx)("div",{className:"update",children:(0,t.jsxs)("span",{children:["#",d," Update"]})})]})]}),(0,t.jsxs)("div",{className:"project-details-updates-content",children:[(0,t.jsx)("p",{children:l}),(0,t.jsx)("p",{className:"text",children:c}),(0,t.jsx)("div",{className:"project-updates-thumb mt-50",children:(0,t.jsx)(u.Z,{src:i(990)("./".concat(o)).default.src,alt:""})})]})]})},K=function(e){var s=e.getClassName;return(0,t.jsx)("div",{className:s(U),id:U,children:J.map((function(e){return(0,t.jsx)(G,{update:e},e.id)}))})},X=function(){var e=(0,l.useState)("pills-home"),s=e[0],i=e[1],a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=s===e;return"tab-pane animated".concat(i?" fadeIn show active":"")};return(0,t.jsx)("section",{className:"project-details-content-area pb-110",children:(0,t.jsx)(c.Z,{children:(0,t.jsxs)(o.Z,{className:"justify-content-center",children:[(0,t.jsxs)(d.Z,{lg:8,children:[(0,t.jsx)("div",{className:"tab-btns",children:(0,t.jsx)("ul",{className:"nav nav-pills",id:"pills-tab",role:"tablist",children:r.Wd.map((function(e){var a=e.id,n=e.name;return(0,t.jsx)("li",{className:"nav-item",role:"presentation",children:(0,t.jsx)("a",{onClick:function(){return i(a)},className:"nav-link cursor-pointer".concat(a===s?" active":""),role:"tab",children:n})},a)}))})}),(0,t.jsxs)("div",{className:"tab-content",id:"pills-tabContent",children:[(0,t.jsx)(R,{getClassName:a}),(0,t.jsx)(A,{getClassName:a}),(0,t.jsx)(K,{getClassName:a}),(0,t.jsx)(P,{getClassName:a})]})]}),(0,t.jsx)(d.Z,{lg:4,md:7,sm:9,children:(0,t.jsx)(B,{})})]})})})},$=i(7539),z=i(9844),V=r.wp.tagline,ee=r.wp.title,se=r.wp.projects,ie=function(){return(0,t.jsx)("section",{className:"explore-projects-area explore-projects-page-area",children:(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(o.Z,{className:"justify-content-center",children:(0,t.jsx)(d.Z,{lg:8,children:(0,t.jsx)($.Z,{title:ee,tagline:V,className:"text-center"})})}),(0,t.jsx)(o.Z,{className:"justify-content-center",children:se.map((function(e){return(0,t.jsx)(d.Z,{lg:4,md:6,sm:9,children:(0,t.jsx)(z.Z,{project:e})},e.id)}))})]})})},te=i(2251),ae=function(){return(0,t.jsxs)(n.Z,{children:[(0,t.jsx)(a.Z,{}),(0,t.jsx)(te.Z,{title:"Single Project",page:"Explore"}),(0,t.jsx)(w,{}),(0,t.jsx)(X,{}),(0,t.jsx)(ie,{})]})}}},function(e){e.O(0,[266,612,990,774,888,179],(function(){return s=5233,e(e.s=s);var s}));var s=e.O();_N_E=s}]);