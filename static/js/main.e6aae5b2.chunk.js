(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(8),r=n.n(c),a=n(9),o=n(26),s=n(2),i=n(5),u=n(0),l=n(17),d=n.n(l),b=n(21),j="SET_USER_NICKNAME_SUCCESS",p="SET_USER_NICKNAME_FAILURE",h="SET_USER_NICKNAME_RESET",f=function(){return function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:h});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},m=n(1),O=function(e){var t=e.onCLick,n=e.label;return Object(m.jsx)("button",{className:"my-btn",onClick:t,children:n})},v=function(e){var t=e.setNickname;return Object(m.jsx)("input",{onChange:function(e){return t(e.target.value)},type:"text",placeholder:"Enter your nickname here..."})},g=n(45),w=function(e){var t=e.variant,n=e.children,c=e.onClose;return Object(m.jsx)(g.a,{className:"myAlert",variant:t,dismissible:!0,onClose:c,children:n})};w.defaultProps={variant:"info"};var x=w,k={firstpack:{question:"Select all animals",all_words:["hole","sofa","pear","tiger","oatmeal","square","nut","cub","shirt","tub","passenger","cow"],good_words:["tiger","cow"]},secondpack:{question:"Select all colors",all_words:["jeans","existence","ink","red","blue","yellow","laugh","behavior","expansion","white","black","cakes"],good_words:["red","blue","yellow","white","black"]},thirdpack:{question:"Select all vehicles",all_words:["belief","wire","car","bus","star","river","hat","skirt","train"],good_words:["car","bus","train"]}},y=function(e,t){var n=document.querySelectorAll(".word-container-active");document.querySelectorAll(".word-container").forEach((function(e){e.style.pointerEvents="none"}));var c=[];n.forEach((function(e){return c.push(e.innerText)}));var r=function(e,t){var n={good:[],bad:[]},c={good:0,bad:0};return e.forEach((function(e){k[t].good_words.includes(e)?(n.good.push(e),c.good+=1):(n.bad.push(e),c.bad+=1)})),c.bad+=k[t].good_words.length-n.good.length,c.good*=2,[n,c.good-c.bad]}(c,e),a=Object(i.a)(r,2),o=a[0],s=a[1];n.forEach((function(e){o.good.includes(e.innerText)?(e.classList.remove("word-container-active"),e.classList.add("word-container-good")):o.bad.includes(e.innerText)&&(e.classList.remove("word-container-active"),e.classList.add("word-container-bad"))})),t(s)},E=function(e){var t=e.history,n=Object(u.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1],s=Object(u.useState)(!1),l=Object(i.a)(s,2),d=l[0],b=l[1],h=Object(a.b)(),g=Object(a.c)((function(e){return e.user})).error;Object(u.useEffect)((function(){d&&!g&&t.push("/game")}),[d,g,t]);return Object(m.jsxs)("div",{className:"page-container",children:[Object(m.jsxs)("div",{className:"homepage-content",children:[Object(m.jsx)("h1",{className:"page-title",children:"Worldcloud Game"}),Object(m.jsx)(v,{setNickname:o}),Object(m.jsx)(O,{onCLick:function(){var e,t;f(),r&&b(!0),h((e=(t=r).charAt(0).toUpperCase()+t.slice(1).toLowerCase(),function(t){e&&e.length>0?t({type:j,payload:e}):t({type:p,payload:"Invalid username"})}))},label:"Submit"})]}),g?Object(m.jsx)(x,{onClose:function(){f(),b(!1)},variant:"danger",children:g}):null]})},S=n.p+"static/media/cloud_bad.33193209.png",_=n.p+"static/media/cloud_good.acd64d74.png",C=n.p+"static/media/cloud_blue.68f72406.png",N=n.p+"static/media/cloud.1b17da74.png",L=function(e){var t=e.children,n=e.top,c=e.left,r=e.right,a=Object(u.useState)(!1),o=Object(i.a)(a,2),s=o[0],l=o[1],d=Object(u.useState)("url(".concat(N,")")),b=Object(i.a)(d,2),j=b[0],p=b[1],h=Object(u.useRef)();return Object(u.useEffect)((function(){h.current.classList.contains("word-container-active")?p("url(".concat(C,")")):h.current.classList.contains("word-container-bad")?p("url(".concat(S,")")):h.current.classList.contains("word-container-good")?p("url(".concat(_,")")):p("url(".concat(N,")"))}),[s]),Object(m.jsx)("div",{className:s?"word-container word-container-active":"word-container",style:{top:n,left:c,right:r,backgroundImage:j},onClick:function(){return l(!s)},ref:h,children:Object(m.jsx)("div",{className:"word",children:t})})},A=function(e){var t=e.history,n=Object(u.useState)(),c=Object(i.a)(n,2),r=c[0],o=c[1],s=Object(a.c)((function(e){return e.user})).username,l=function(){for(var e=[],t=3;t<=85;t+=15)for(var n=3;n<=85;n+=15)e.push([t,n]);var c=e.map((function(e){return{sort:Math.random(),value:e}})).sort((function(e,t){return e.sort-t.sort})).map((function(e){return e.value})),r=["firstpack","secondpack","thirdpack"],a=r[Math.floor(Math.random()*r.length)],o=[];return k[a].all_words.map((function(e,t){return o.push({key:e,pos:c[t]})})),[o,k[a].question,a]}(),d=Object(i.a)(l,3),b=d[0],j=d[1],p=d[2];return s&&0!==s.length||t.push("/"),Object(m.jsxs)("div",{className:"page-container",style:{height:"100%"},children:[Object(m.jsx)("h1",{children:"Witaj ".concat(s,"!")}),Object(m.jsx)("h3",{children:j}),r?Object(m.jsxs)("h3",{className:r>0?"points points-success":"points points-fail",children:["Your score: ",r]}):null,Object(m.jsx)("div",{className:"game-container",children:b.map((function(e,t){return Object(m.jsx)(L,{top:"".concat(e.pos[0],"%"),left:"".concat(e.pos[1],"%"),children:e.key},"word-".concat(t))}))}),Object(m.jsx)(O,{onCLick:function(){return y(p,o)},label:"Check answers"}),Object(m.jsx)(O,{onCLick:function(){f(),t.push("/")},label:"Menu"})]})};n(37),n(38),n(39);function M(){return Object(m.jsx)(o.a,{children:Object(m.jsxs)(s.c,{children:[Object(m.jsx)(s.a,{path:"/game",component:A}),Object(m.jsx)(s.a,{exact:!0,path:"/",component:E})]})})}var T=n(11),q=n(24),I=n(25),R=n(12),U=Object(T.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{username:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(R.a)(Object(R.a)({},e),{},{username:t.payload,error:""});case p:return Object(R.a)(Object(R.a)({},e),{},{error:t.payload});case h:return{username:"",error:""};default:return e}}}),K=[q.a],W=Object(T.createStore)(U,{user:{username:""}},Object(I.composeWithDevTools)(T.applyMiddleware.apply(void 0,K))),J=document.getElementById("root");r.a.render(Object(m.jsx)(a.a,{store:W,children:Object(m.jsx)(M,{})}),J)}},[[42,1,2]]]);
//# sourceMappingURL=main.e6aae5b2.chunk.js.map