(this.webpackJsonpykring=this.webpackJsonpykring||[]).push([[10],{120:function(t,n,e){"use strict";e(1);var r=e(347),c=e(0);n.a=function(t){var n=t.width,e=t.label,o=t.placeholder,u=t.submitted,i=t.changeHandler;return Object(c.jsx)("form",{onSubmit:function(t){return u(t)},noValidate:!0,autoComplete:"off",className:"flex flex-row justify-center",style:{width:n},children:Object(c.jsx)(r.a,{id:"filled-basic",variant:"filled",placeholder:o,label:e,onChange:function(t){return i(t)},autoFocus:!0})})}},332:function(t,n,e){"use strict";e.r(n);var r=e(15),c=e(1),o=e(26),u=e(25),i=e(120),a=e(66),l=e(0);n.default=function(t){var n=t.history,e=Object(c.useState)(""),s=Object(r.a)(e,2),f=s[0],d=s[1],p=Object(o.b)(),y=Object(c.useCallback)((function(t){console.log(t.target.value),d(t.target.value)}),[]),h=Object(c.useCallback)((function(t){if(t.preventDefault(),11!==f.length)return alert("\uc804\ud654\ubc88\ud638\ub97c \uc62c\ubc14\ub974\uac8c \uc785\ub825\ud574\uc8fc\uc138\uc694.");p(a.l(f)),n.push("/login")}),[f]);return Object(l.jsxs)(u.a,{headerNone:!0,footerNone:!0,children:[Object(l.jsx)("nav",{style:{height:"60px",borderBottom:"1px solid #eee"},className:"flex flex-row items-center justify-between ",children:Object(l.jsx)("img",{onClick:function(){return n.goBack()},style:{width:"25px",height:"25px",cursor:"pointer"},src:"/arrow-back-outline.svg",alt:"back"})}),Object(l.jsxs)("section",{className:"mb-10",children:[Object(l.jsxs)("section",{style:{padding:"10px 30px"},className:"text-left mt-5",children:[Object(l.jsx)("h1",{style:{margin:"10px 0",fontSize:"24px"},className:"text-2xl text-left",children:"\uc804\ud654\ubc88\ud638"}),Object(l.jsxs)("p",{style:{color:"#C5C1C1"},children:["XIRCLE \uad00\ub828 \uc911\uc694 \uacf5\uc9c0\uc0ac\ud56d\uc744 \ubcf4\ub0bc\ub54c \uc774\uc678\uc5d0\ub294 ",Object(l.jsx)("br",{})," \uc808\ub300 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."]})]}),Object(l.jsx)("section",{className:"px-10 mt-32",children:Object(l.jsx)(i.a,{width:"100%",submitted:function(t){return h(t)},changeHandler:function(t){return y(t)},label:"\uc804\ud654\ubc88\ud638",placeholder:"-\uc5c6\uc774 \uc785\ub825\ud574\uc8fc\uc138\uc694"})}),Object(l.jsx)("div",{className:"flex flex-row justify-center",children:Object(l.jsx)("button",{onClick:function(t){return h(t)},className:"mt-20 w-3/4 border-2 rounded-xl px-5 py-3 bg-gray-400 text-white focus:bg-black focus:outline-none",children:"\ub2e4\uc74c"})})]})]})}},66:function(t,n,e){"use strict";e.d(n,"m",(function(){return i})),e.d(n,"n",(function(){return s})),e.d(n,"l",(function(){return f})),e.d(n,"i",(function(){return d})),e.d(n,"h",(function(){return p})),e.d(n,"e",(function(){return y})),e.d(n,"b",(function(){return h})),e.d(n,"j",(function(){return b})),e.d(n,"a",(function(){return g})),e.d(n,"k",(function(){return m})),e.d(n,"q",(function(){return v})),e.d(n,"d",(function(){return k})),e.d(n,"c",(function(){return w})),e.d(n,"o",(function(){return T})),e.d(n,"p",(function(){return C})),e.d(n,"g",(function(){return A})),e.d(n,"f",(function(){return O})),e.d(n,"r",(function(){return S})),e.d(n,"s",(function(){return B})),e.d(n,"t",(function(){return G}));var r=e(3),c=e(104),o=e.n(c).a.create({baseURL:"https://ykring.herokuapp.com"}),u=function(){return{type:r.q}},i=function(t,n){return function(e){e({type:r.r});var c={email:t};o.post("/email",c).then((function(c){if(console.log(c),c.data.success)e(function(t,n){return{type:r.s,email:t,univ:n}}(t,n));else{var o=c.data.code;e(u()),450===o?window.location.assign("/my-profile"):alert("\ub124\ud2b8\uc6cc\ud06c \ud639\uc740 \uc11c\ubc84\uc5d0 \uc77c\uc2dc\uc801\uc778 \uc624\ub958\uac00 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694")}})).catch((function(t){console.log(t),alert("\ub124\ud2b8\uc6cc\ud06c \ud639\uc740 \uc11c\ubc84\uc5d0 \uc77c\uc2dc\uc801\uc778 \uc624\ub958\uac00 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694"),e(u())}))}},a=function(){return{type:r.m}},l=function(){return{type:r.n}},s=function(t){return function(n){n({type:r.o});var e={email:t};o.post("/check/email",e).then((function(t){console.log(t),t.data.success?(n({type:r.p}),n(l())):(n(a()),n(l()))})).catch((function(t){console.log(t),n(a()),n(l()),alert("\ub124\ud2b8\uc6cc\ud06c \ud639\uc740 \uc11c\ubc84\uc5d0 \uc77c\uc2dc\uc801\uc778 \uc624\ub958\uac00 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694")}))}},f=function(t){return{type:r.l,phoneNumber:t}},d=function(t){return{type:r.i,isPublic:t}},p=function(t){return{type:r.h,isGraduate:t}},y=function(t){return{type:r.e,gender:t}},h=function(t){return{type:r.b,age:t}},b=function(t){return{type:r.j,job:t}},g=function(t){return{type:r.a,adj:t}},m=function(t){return{type:r.k,location:t}},j=function(){return{type:r.y}},x=function(){return{type:r.B}},v=function(t){return function(n){n({type:r.z}),console.log(t),o.post("/img",t).then((function(t){console.log(t);var e=t.data.data;t.data.success?(n(function(t){return{type:r.A,imgAwsUrl:t}}(e)),n(x())):(n(j()),n(x()))})).catch((function(t){console.log(t),n(j()),n(x())}))}},k=function(t){return{type:r.d,articleText:t}},w=function(t){return{type:r.c,articleTag:t}},O=function(t){return{type:r.f,interestArr:t}},N=function(){return{type:r.t}},C=function(){return{type:r.u}},T=function(t){return function(n){n({type:r.v});var e={displayName:t};o.post("/check/name",e).then((function(e){console.log(e);var c=e.data.success;n(c?function(t){return{type:r.w,displayName:t}}(t):N())})).catch((function(t){console.log(t),n(N())}))}},A=function(t){return{type:r.g,introText:t}},I=function(){return{type:r.C}},S=function(t){return function(n){n({type:r.D}),o.post("/img",t).then((function(t){console.log(t);var e=t.data.data,c=t.data.success;n(c?function(t){return{type:r.E,imgAwsUrl:t}}(e):I())})).catch((function(t){console.log(t),n(I())}))}},P=function(){return{type:r.F}},B=function(t,n,e,c,u,i,a,l,s,f,d,p,y,h,b,g,m,j){return function(x){x({type:r.G});var v={phoneNumber:t,email:c,isPublic:n,isGraduate:e,gender:u,age:i,job:a,adj:l,location:s,articleImgSrc:f,articleText:d,articleTag:p,displayName:y,interestArr:h,introText:b,profileImgSrc:g,resume:m,workPlace:j};o.post("/pre/user",v).then((function(t){console.log(t),t.data.success?x({type:r.H}):(x(P()),alert(t.data.message))})).catch((function(t){console.log(t),x(P()),alert("\uc77c\uc2dc\uc801\uc778 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \uc7a0\uc2dc\ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.")}))}},G=function(t){return function(n){n(function(t){return{type:r.I,updatedProfileImg:t}}(t))}}}}]);
//# sourceMappingURL=10.27b6570f.chunk.js.map