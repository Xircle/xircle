(this.webpackJsonpykring=this.webpackJsonpykring||[]).push([[7],{167:function(e,t,l){"use strict";l.r(t);var c=l(1),n=l(0);var a=function(e){var t=e.questionNum,l="0%";return"1"===t?l="10%":"2"===t?l="18%":"3"===t?l="30%":"4"===t?l="47%":"5"===t?l="62%":"6"===t?l="80%":"7"===t?l="87%":"8"===t?l="90%":"9"===t?l="93%":"10"===t?l="96%":"11"===t&&(l="102%"),Object(n.jsx)("div",{style:{width:"".concat(l),transition:"all .3s ease-in",border:"10px solid black",borderTopRightRadius:"10px",borderBottomRightRadius:"10px"}})},s=l(17),r=l(21),o=l(72),i=l(48),u=l(164),b=l(165),x=function(e){var t=e.label,l=e.placeholder,c=e.submitted,a=e.changeHandler;return Object(n.jsx)("form",{onSubmit:function(e){return c(e)},noValidate:!0,autoComplete:"off",children:Object(n.jsx)(b.a,{id:"filled-basic",variant:"filled",placeholder:l,label:t,onChange:function(e){return a(e)},autoFocus:!0})})},j=(l(95),function(e){var t=e.history,l=e.questionNum,a=Object(c.useState)(""),b=Object(s.a)(a,2),j=(b[0],b[1]),d=Object(c.useState)(""),h=Object(s.a)(d,2),m=h[0],p=h[1],f=Object(c.useState)(""),O=Object(s.a)(f,2),g=O[0],v=O[1],N=Object(c.useState)(""),y=Object(s.a)(N,2),k=(y[0],y[1]),w=Object(c.useState)(""),C=Object(s.a)(w,2),F=(C[0],C[1]),S=Object(c.useState)(null),D=Object(s.a)(S,2),A=D[0],R=D[1],q=Object(c.useState)(""),B=Object(s.a)(q,2),H=B[0],J=B[1],L=Object(c.useState)(""),U=Object(s.a)(L,2),z=(U[0],U[1]),I=Object(c.useState)(""),M=Object(s.a)(I,2),T=M[0],V=M[1],W=Object(c.useState)(""),E=Object(s.a)(W,2),G=(E[0],E[1]),K=Object(c.useState)(""),P=Object(s.a)(K,2),Q=(P[0],P[1]),X=Object(c.useState)(!1),Y=Object(s.a)(X,2),Z=Y[0],$=Y[1],_=Object(c.useCallback)((function(e){$(!0),j("Woman")}),[]),ee=Object(c.useCallback)((function(e){$(!0),j("Man")}),[]),te=Object(c.useCallback)((function(e){console.log(e),p(e),t.push("/setting/3")}),[]),le=Object(c.useCallback)((function(e){console.log(e),v(e),t.push("/setting/4")}),[]),ce=Object(c.useCallback)((function(e){t.push("/setting/5")}),[]),ne=Object(c.useCallback)((function(e){k(e.target.value)}),[]),ae=Object(c.useCallback)((function(e){e.preventDefault();var t=new FileReader;t.onload=function(e){R(e.target.result)};var l=e.target.files[0];F(l),t.readAsDataURL(l)}),[]),se=Object(c.useCallback)((function(e){e.preventDefault(),t.push("/setting/6")}),[]),re=Object(c.useCallback)((function(e){e.preventDefault(),t.push("/setting/7")}),[]),oe=Object(c.useCallback)((function(e){e.preventDefault(),J(e.target.value)}),[]),ie=Object(c.useCallback)((function(e){e.preventDefault(),t.push("/setting/8")}),[]),ue=Object(c.useCallback)((function(e){e.preventDefault(),t.push("/setting/9")}),[]),be=Object(c.useCallback)((function(e){e.preventDefault(),t.push("/setting/10")}),[]),xe=Object(c.useCallback)((function(e){e.preventDefault(),z(e.target.value)}),[]),je=Object(c.useCallback)((function(e){e.preventDefault();var t=new FileReader;t.onload=function(e){V(e.target.result)};var l=e.target.files[0];G(l),t.readAsDataURL(l)}),[]),de=Object(c.useCallback)((function(e){e.preventDefault(),t.push("/setting/11")}),[]),he=Object(c.useCallback)((function(e){e.preventDefault(),Q(e.target.value)}),[]),me=Object(c.useCallback)((function(e){e.preventDefault(),t.push("/setting/12")}),[]),pe=Number(l),fe=null;return 1===pe?fe=Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("section",{className:"text-center px-5 mt-5",children:[Object(n.jsx)("p",{style:{textAlign:"left"},className:"text-2xl text-left",children:"\ub098\ub294?"}),Object(n.jsx)("button",{onClick:function(e){return _(e)},style:{width:"80%"},className:"font-sans block border-2 px-5 py-3 mt-5 focus:outline-none",children:Object(n.jsx)("span",{className:" text-lg",children:"\ud83d\ude4b\ud83c\udffb\u200d\u2640\ufe0f \uc5ec\uc790"})}),Object(n.jsx)("button",{onClick:function(e){return ee(e)},style:{width:"80%"},className:"font-sans block border-2 px-5 py-3 mt-5 focus:outline-none",children:Object(n.jsx)("span",{className:"text-lg",children:"\ud83d\ude4b\ud83c\udffb \ub0a8\uc790"})})]}),Object(n.jsxs)(r.a,{show:Z,clicked:function(){return $(!1)},children:[Object(n.jsxs)("div",{className:"mb-5",children:[Object(n.jsx)("h1",{className:" text-xl mb-5",children:"\ud68c\uc6d0\ub2d8\uc740 \uba87 \uc0b4\uc774\uc2e0\uac00\uc694?"}),Object(n.jsx)("span",{style:{fontSize:"14px",color:"#5c5c5c"},children:"\uac71\uc815\ub9c8\uc138\uc694! \ub098\uc774\ub294 20\ub300 \ucd08, \uc911, \ud6c4\ubc18\uc73c\ub85c \ud45c\uc2dc\ub429\ub2c8\ub2e4."})]}),Object(n.jsx)(o.a,{isSearchable:!1,blurInputOnSelect:!0,placeholder:"\ub098\uc774\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694.",options:i.a}),Object(n.jsxs)("div",{className:"flex flex-row justify-evenly",children:[Object(n.jsx)("button",{onClick:function(){return $(!1)},className:"font-sans border-2 rounded-3xl px-5 py-3 mt-10 hover:text-white hover:bg-black focus:outline-none",children:"\ucde8\uc18c"}),Object(n.jsx)("button",{onClick:function(){return t.push("/setting/2")},className:"font-sans border-2 rounded-3xl px-5 py-3 mt-10 hover:text-white hover:bg-black focus:outline-none",children:"\ud655\uc778"})]})]})]}):2===pe?fe=Object(n.jsxs)("section",{className:"text-center px-3 mt-3",children:[Object(n.jsx)("p",{style:{textAlign:"left"},className:"text-2xl text-left",children:"\ud68c\uc6d0\ub2d8\uc744 \uc124\uba85\ud574\uc8fc\uc138\uc694."}),Object(n.jsx)(u.a,{className:"text-left w-full"}),Object(n.jsx)("section",{style:{maxHeight:"400px"},className:"mt-3 px-2 overflow-y-scroll",children:i.e.map((function(e,t){return Object(n.jsx)("article",{onClick:function(){return te(e.value)},style:{border:"1px solid #ccc"},className:" cursor-pointer text-left mt-5 py-7 px-10 rounded-xl",children:Object(n.jsx)("span",{children:e.value})},t)}))})]}):3===pe?fe=Object(n.jsxs)("section",{className:"text-center px-3 mt-3",children:[Object(n.jsx)("p",{style:{textAlign:"left"},className:"text-2xl text-left",children:"\ud68c\uc6d0\ub2d8\uc744 \uc124\uba85\ud574\uc8fc\uc138\uc694."}),Object(n.jsxs)("div",{className:"flex flex-row items-center",children:[Object(n.jsx)(u.a,{className:"text-left"}),Object(n.jsx)("h1",{className:"ml-3 text-xl my-auto font-medium",children:m})]}),Object(n.jsx)("section",{style:{maxHeight:"380px"},className:"mt-3 px-2 overflow-y-scroll",children:i.d.map((function(e,t){return Object(n.jsx)("article",{onClick:function(){return le(e.value)},style:{border:"1px solid #ccc"},className:" cursor-pointer text-left mt-5 py-7 px-10 border-2 rounded-xl",children:Object(n.jsx)("span",{children:e.value})},t)}))})]}):4===pe?fe=Object(n.jsxs)("section",{className:"h-1/4 text-center px-3 mt-3",children:[Object(n.jsxs)("div",{className:"h-full flex flex-row justify-center items-center pt-20",children:[Object(n.jsx)("p",{style:{marginBottom:0},className:"text-lg mr-5",children:"\ub098\ub294\x1d"}),Object(n.jsx)(x,{submitted:function(e){return ce(e)},changeHandler:function(e){return ne(e)},label:"\uc0ac\ub294\uacf3",placeholder:"\uc11c\uc6b8\ud2b9\ubcc4\uc2dc \uac15\ub3d9\uad6c"}),Object(n.jsx)("p",{className:"text-lg ml-5",children:"\uc5d0 \uc0bd\ub2c8\ub2e4."})]}),Object(n.jsx)("button",{onClick:function(e){return ce(e)},className:"mt-20 w-full border-2 rounded-3xl px-5 py-3 hover:text-white hover:bg-black focus:outline-none",children:"\ud655\uc778"})]}):5===pe?fe=Object(n.jsxs)("section",{className:" h-1/6 text-center px-3 mt-3",children:[Object(n.jsx)("div",{className:"mt-3",children:Object(n.jsx)("h3",{className:"text-left text-3xl font-light",children:"\uce5c\uad6c\ub4e4\uc5d0\uac8c \uacf5\uc720\ud558\uace0\uc2f6\uc740 \uc790\uc2e0\uc758 \uc77c\uc0c1\uc744 \ud55c\uac00\uc9c0\ub9cc \uc0ac\uc9c4\uacfc\ud568\uaed8 \uc801\uc5b4\ubcf4\uc138\uc694! ex.\uc624\ub298 \uc785\uc740 \uc637\u314e\u314e"})}),Object(n.jsxs)("section",{className:" mt-7",children:[Object(n.jsx)("img",{style:{margin:"0 auto 10px",width:"300px",height:"300px",objectFit:"contain"},src:A||null}),Object(n.jsx)("input",{type:"file",accept:"image/x-png,image/jpeg,image/gif",onChange:function(e){return ae(e)}}),Object(n.jsx)("button",{onClick:function(e){return se(e)},className:"mt-5 w-1/3 border-2 rounded-3xl px-5 py-3 bg-black text-white focus:outline-none",children:Object(n.jsx)("p",{style:{wordBreak:"keep-all"},children:"\uc5c5\ub85c\ub4dc \ud558\uae30\x1b"})})]})]}):6===pe?fe=Object(n.jsxs)("section",{className:" h-1/6 text-center px-3 mt-10",children:[Object(n.jsx)("h3",{className:"text-2xl",children:"[\uc5f0\uace0\ub9c1 \uc774\ubca4\ud2b8]"})," ",Object(n.jsxs)("p",{children:[" ",Object(n.jsx)("strong",{className:"text-xl",children:"Airpod 2"}),"  \uc808\ub300 \ub193\uce58\uc9c0 \ub9c8\uc138\uc694!!!"]}),Object(n.jsx)("textarea",{placeholder:"\uce5c\uad6c\ub4e4\uc5d0\uac8c \uacf5\uc720\ud560 \uae00 \uc791\uc131\ud574\ubcf4\uc138\uc694. \ud574\uc2dc\ud0dc\uadf8",style:{height:"250px",border:"1px solid gray"},className:"my-3 px-3 py-5 w-full text-base placeholder-gray-400"}),Object(n.jsx)("button",{onClick:function(e){return re(e)},className:"mt-5 w-full border-2 rounded-3xl px-5 py-3 bg-black text-white focus:outline-none",children:"\ub2e4\uc74c"})]}):7===pe?fe=Object(n.jsxs)("section",{className:" h-1/6 text-center px-3 mt-10",children:[Object(n.jsx)("h3",{className:"text-left text-3xl font-light",children:"\ub2c9\ub124\uc784\uc744 \uc124\uc815\ud574\uc8fc\uc138\uc694."}),Object(n.jsx)("h5",{className:"text-left font-normal mb-10",children:"\uc0c8 \uacc4\uc815\uc5d0 \uc0ac\uc6a9\ud560 \uc0ac\uc6a9\uc790 \uc774\ub984\uc744 \uc120\ud0dd\ud558\uc138\uc694. \ub098\uc911\uc5d0 \uc5b8\uc81c\ub4e0\uc9c0 \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),Object(n.jsx)("input",{type:"text",className:"w-3/4 bg-gray-200 px-5 py-5 rounded-xl",autoFocus:!0,onChange:function(e){return oe(e)}}),Object(n.jsx)("button",{onClick:function(e){return ie(e)},className:"mt-5 w-1/2 border-2 rounded-3xl px-5 py-3 bg-black text-white focus:outline-none",children:"\ub2e4\uc74c"})]}):8===pe?fe=Object(n.jsxs)("section",{className:" h-1/6 text-center px-3 mt-10",children:[Object(n.jsxs)("h3",{className:"text-left text-3xl font-light",children:[g," ",m," ",H,"\ub2d8 ",Object(n.jsx)("br",{}),"\uc694\uc998 \ubb34\uc5c7\uc5d0 \uad00\uc2ec\uc788\uc73c\uc2e0\uac00\uc694?"]}),Object(n.jsx)("h5",{className:"text-left font-normal mb-10",children:"\uc0c8 \uacc4\uc815\uc5d0 \uc0ac\uc6a9\ud560 \uc0ac\uc6a9\uc790 \uc774\ub984\uc744 \uc120\ud0dd\ud558\uc138\uc694. \ub098\uc911\uc5d0 \uc5b8\uc81c\ub4e0\uc9c0 \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),Object(n.jsx)("button",{onClick:function(e){return ue(e)},className:"mt-5 w-1/2 border-2 rounded-3xl px-5 py-3 bg-black text-white focus:outline-none",children:"\ub2e4\uc74c"})]}):9===pe?fe=Object(n.jsxs)("section",{className:" h-1/6 text-center px-3 mt-10",children:[Object(n.jsxs)("h3",{className:"text-left text-3xl font-light",children:[g," ",m," ",H,"\ub2d8 ",Object(n.jsx)("br",{}),"\uce5c\uad6c\ub4e4\uc5d0\uac8c \ubcf4\uc5ec\uc9c8 \uc790\uc2e0\uc758 \ud55c\uc904\uc18c\uac1c\ub97c  \uac04\ub2e8\ud788 \uc801\uc5b4\uc8fc\uc138\uc694! "]}),Object(n.jsx)("h5",{className:"text-left font-normal mb-10",children:"\uc0c8 \uacc4\uc815\uc5d0 \uc0ac\uc6a9\ud560 \uc0ac\uc6a9\uc790 \uc774\ub984\uc744 \uc120\ud0dd\ud558\uc138\uc694. \ub098\uc911\uc5d0 \uc5b8\uc81c\ub4e0\uc9c0 \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),Object(n.jsx)("textarea",{placeholder:"\uc608) \uc548\ub155\ud558\uc138\uc694. \uc800\ub294 24\uc0b4 \uc5f0\uc138\ub300\ud559\uad50\uc5d0 \uc7ac\ud559\uc911\uc778 \ubfc5\ubfc5\ubfc5\uc785\ub2c8\ub2e4. \uc800\ub294 \ud604\uc7ac \uc2a4\ud0c0\ud2b8\uc5c5\uc5d0\uc11c \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \uae30\ud68d\uc744 \ud558\uace0\uc788\uc2b5\ub2c8\ub2e4. \ucee4\ub9ac\uc5b4\uc801\uc73c\ub85c\ub294 \uc778\uc0ac\uc774\ud2b8\ub97c \uacf5\uc720\ud558\uace0\uc2f6\uc5b4\uc694! \ucde8\ubbf8\ub85c\ub294 \ud568\uaed8 \uce74\ud398\uc5d0\uc11c \ucee4\ud53c\ud55c\uc794 \ud568\uaed8 \ub9c8\uc2dc\ub294\uac78 \uc990\uaca8\uc694. \ub610 \uc804\uc2dc\ud68c \ubba4\uc9c0\uceec\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4! \ub208\uacfc \uc785\uc774 \uc990\uac70\uc6b4\uac78 \uc0ac\ub791\ud558\ub294 \uccad\ucd98\uc785\ub2c8\ub2e4 \ud573\ud573",onChange:function(e){return xe(e)},style:{height:"250px",border:"1px solid gray"},className:"my-3 px-3 py-5 w-full text-base placeholder-gray-400"}),Object(n.jsx)("button",{onClick:function(e){return be(e)},className:"my-5 w-1/2 border-2 rounded-3xl px-5 py-3 bg-black text-white focus:outline-none",children:"\ub2e4\uc74c"})]}):10===pe?fe=Object(n.jsxs)("section",{className:" h-1/6 text-center px-3 mt-10",children:[Object(n.jsx)("h5",{className:"text-left font-normal mb-10",children:"\ub9c8\uc9c0\ub9c9!! \ud68c\uc6d0\ub2d8\uc758 \ud504\ub85c\ud544 \uc0ac\uc9c4\uc744 \uc62c\ub824\uc8fc\uc138\uc694!"}),Object(n.jsx)("p",{children:"\uc5bc\uad74 \uc0ac\uc9c4\uc774 \uc544\ub2c8\uc5b4\ub3c4 \ub429\ub2c8\ub2e4. \ubcf8\uc778\uc744 \uac00\uc7a5 \uc798 \ub4dc\ub7ec\ub0bc \uc218  \uc788\ub294 \uc0ac\uc9c4 \ud558\ub098\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694 ;) "}),Object(n.jsxs)("section",{className:"mt-3",children:[Object(n.jsx)("img",{style:{margin:"0 auto 10px",width:"300px",height:"300px",objectFit:"contain"},src:T||null}),Object(n.jsx)("input",{type:"file",accept:"image/x-png,image/jpeg,image/gif",onChange:function(e){return je(e)}}),Object(n.jsx)("button",{onClick:function(e){return de(e)},className:"mt-5 w-1/3 border-2 rounded-3xl px-5 py-3 bg-black text-white focus:outline-none",children:"\uc5c5\ub85c\ub4dc \ud558\uae30\x1b"})]})]}):11===pe?fe=Object(n.jsxs)("section",{className:" h-1/6 text-center px-3 mt-10",children:[Object(n.jsx)("h5",{className:"text-left font-normal mb-10",children:"\uc774\ubca4\ud2b8 \uacf5\uc9c0\ub97c \uc704\ud55c \uc804\ud654\ubc88\ud638"}),Object(n.jsx)("p",{children:"(\uc774\ubca4\ud2b8 \ucc38\uac00\uc790 \ud544\uc218)"}),Object(n.jsxs)("section",{className:"mt-3",children:[Object(n.jsx)("input",{type:"text",className:"w-3/4 bg-gray-200 px-5 py-5 rounded-xl",autoFocus:!0,onChange:function(e){return he(e)}}),Object(n.jsx)("button",{onClick:function(e){return me(e)},className:"mt-5 w-1/3 border-2 rounded-3xl px-5 py-3 bg-black text-white focus:outline-none",children:"\uc644\ub8cc"})]})]}):12===pe&&(fe=Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("section",{style:{height:"20%"},className:"mt-5 flex flex-row items-center ",children:Object(n.jsx)("img",{style:{height:"70px",width:"70px"},src:"https://2donny.github.io/yk-logo.png",alt:"yk-logo",className:"rounded-2xl mx-auto"})}),Object(n.jsxs)("section",{style:{height:"40%"},className:" text-center pt-5",children:[Object(n.jsx)("h1",{className:"mb-3 px-10",children:"\uc5f0\uace0\ub9c1 \ud68c\uc6d0\uac00\uc785 \ubc0f \uc0ac\uc804\uc2e0\uccad\uc744 \ud574\uc8fc\uc154\uc11c \ub300\ub2e8\ud788 \uac10\uc0ac\ud569\ub2c8\ub2e4."}),Object(n.jsx)("p",{className:"px-10 pt-5 text-lg",children:"\uc815\uc2dd \uc11c\ube44\uc2a4\ub294 3\uc6d4 20\uc77c\ub0a0 \uc2dc\uc791\ub429\ub2c8\ub2e4. \uc0ac\uc804\uc2e0\uccad \uc774\ubca4\ud2b8 \uacb0\uacfc\ub294 \uc5f0\uace0\ub9c1 \uce74\uce74\uc624\ud1a1 \ud50c\ub7ec\uc2a4 \ucc44\ub110\ub85c \uacf5\uc9c0\uac00 \ub429\ub2c8\ub2e4.  \uaf2d \uc5f0\uace0\ub9c1 \uce5c\uad6c\ucd94\uac00 \ud574\uc8fc\uc138\uc694! \uce5c\uad6c\uc5d0\uac8c \uc5f0\uace0\ub9c1\uc744 \uacf5\uc720\ud558\uba74 \uacf5\uc720\ud55c \uce5c\uad6c \uac1c\uc218\ub9cc\ud07c \ucd94\ucca8\ubc88\ud638 \ub298\ub824\ub4dc\ub9bd\ub2c8\ub2e4!"})]}),Object(n.jsx)("section",{style:{height:"30%",padding:"0 10px"},children:Object(n.jsx)("button",{onClick:function(){return console.log("clicked")},className:"font-sans w-full border-2 rounded-2xl px-5 py-3 mt-24 bg-black text-white hover:text-black hover:bg-white focus:outline-none",children:"\uacf5\uc720\ud558\uace0 \uc5d0\uc5b4\ud31f \ub2f9\ucca8 \ud655\ub960 up\ud558\uae30 "})})]})),Object(n.jsx)(n.Fragment,{children:fe})}),d=l(18);t.default=function(e){var t=e.history,l=e.match.params.questionNum;return Object(n.jsx)("div",{className:"w-full overflow-x-hidden",children:Object(n.jsxs)(d.a,{headerNone:!0,footerNone:!0,children:["12"===l?null:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{style:{height:"2%"}}),Object(n.jsx)("nav",{style:{height:"7%",borderBottom:"1px solid #ccc"},className:"flex flex-row items-center justify-between border-b-2",children:Object(n.jsx)("p",{className:"w-full text-lg text-center",children:"\ud68c\uc6d0\uac00\uc785"})}),Object(n.jsx)(a,{questionNum:l})]}),Object(n.jsx)(j,{history:t,questionNum:l})]})})}},48:function(e,t,l){"use strict";l.d(t,"b",(function(){return c})),l.d(t,"c",(function(){return n})),l.d(t,"a",(function(){return a})),l.d(t,"e",(function(){return s})),l.d(t,"d",(function(){return r}));var c=[{value:"seoul",label:"\uc11c\uc6b8\ub300\ud559\uad50",color:"#00B8D9",isFixed:!0},{value:"korea",label:"\uace0\ub824\ub300\ud559\uad50",color:"#0052CC"},{value:"yonsei",label:"\uc5f0\uc138\ub300\ud559\uad50",color:"#5243AA"},{value:"hanyang",label:"\ud55c\uc591\ub300\ud559\uad50",color:"#FF5630",isFixed:!0},{value:"seokang",label:"\uc11c\uac15\ub300\ud559\uad50",color:"#FF5630",isFixed:!0},{value:"sungkyunkwan",label:"\uc131\uade0\uad00\ub300\ud559\uad50",color:"#FF5630",isFixed:!0}],n=[{label:"\ub300\ud559",options:c}],a=[{label:20,value:20},{label:21,value:21},{label:22,value:22},{label:23,value:23},{label:24,value:24},{label:25,value:25},{label:26,value:26},{label:27,value:27},{label:28,value:28},{label:29,value:29},{label:30,value:30},{label:31,value:31},{label:32,value:32},{label:33,value:33},{label:34,value:34},{label:35,value:35}],s=[{label:"\ub300\ud559\uc0dd",value:"\ub300\ud559\uc0dd"},{label:"\uc2e0\uc785\uc0dd",value:"\uc2e0\uc785\uc0dd"},{label:"\uac1c\ubc1c\uc790",value:"\uac1c\ubc1c\uc790"},{label:"\uae30\ud68d\uc790",value:"\uae30\ud68d\uc790"},{label:"\ub9c8\ucf00\ud130",value:"\ub9c8\ucf00\ud130"},{label:"\ub300\ud45c",value:"\ub300\ud45c"},{label:"\ud3b8\uc9d1\uc790",value:"\ud3b8\uc9d1\uc790"},{label:"\uc0dd\uc0b0\uc6d0",value:"\uc0dd\uc0b0\uc6d0"},{label:"\uc120\uc0dd\ub2d8",value:"\uc120\uc0dd\ub2d8"},{label:"\ub9c8\uc220\uc0ac",value:"\ub9c8\uc220\uc0ac"},{label:"\uc0ac\uc5c5\uac00",value:"\uc0ac\uc5c5\uac00"},{label:"\ud504\ub9ac\ub79c\uc11c",value:"\ud504\ub9ac\ub79c\uc11c"},{label:"\uc54c\ubc14\uc0dd",value:"\uc54c\ubc14\uc0dd"},{label:"\uc11c\ube44\uc2a4\uc6d0",value:"\uc11c\ube44\uc2a4\uc6d0"},{label:"\uc0dd\uc0b0\uc6d0",value:"\uc0dd\uc0b0\uc6d0"},{label:"\uae30\uc220\uc790",value:"\uae30\uc220\uc790"}],r=[{label:"\uc2ec\uc2ec\ud55c",value:"\uc2ec\uc2ec\ud55c"},{label:"\ubc30\ubd80\ub978",value:"\ubc30\ubd80\ub978"},{label:"\ub611\ub611\ud55c",value:"\ub611\ub611\ud55c"},{label:"\uc5f4\uc815\uc774 \ub118\uce58\ub294",value:"\uc5f4\uc815\uc774 \ub118\uce58\ub294"},{label:"\ub3c5\ud2b9\ud55c",value:"\ub3c5\ud2b9\ud55c"},{label:"\ub9e4\ub825\uc788\ub294",value:"\ub9e4\ub825\uc788\ub294"},{label:"\ubc30\uace0\ud508",value:"\ubc30\uace0\ud508"},{label:"\ud5e4\ub871\ud5e4\ub871\ud55c",value:"\ud5e4\ub871\ud5e4\ub871\ud55c"},{label:"\ub514\uc790\uc774\ub108\uac00 \ub418\uace0\uc2f6\uc740",value:"\ub514\uc790\uc774\ub108\uac00 \ub418\uace0\uc2f6\uc740"},{label:"\uac1c\ubc1c\uc790\uac00 \ub418\uace0\uc2f6\uc740",value:"\uac1c\ubc1c\uc790\uac00 \ub418\uace0\uc2f6\uc740"}]}}]);
//# sourceMappingURL=7.63477a70.chunk.js.map