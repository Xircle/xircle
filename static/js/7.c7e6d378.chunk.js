(this.webpackJsonpykring=this.webpackJsonpykring||[]).push([[7],{178:function(e,t,l){"use strict";l.r(t);var c=l(1),n=l.n(c),a=l(0);var s=function(e){var t=e.questionNum,l="0%";return l="1"===t?"10%":"2"===t?"18%":"3"===t?"30%":"4"===t?"47%":"5"===t?"62%":"6"===t?"80%":"7"===t?"87%":"8"===t?"90%":"9"===t?"93%":"10"===t?"96%":"11"===t?"100%":"0%",Object(a.jsx)("div",{style:{width:"".concat(l),backgroundColor:"black",transition:"all .3s ease-in",border:"10px solid black",borderTopRightRadius:"10px",borderBottomRightRadius:"10px"}})},i=l(17);var o=function(e){var t=e.show,l=e.clicked;return t?Object(a.jsx)("div",{style:{backgroundColor:"rgba(0, 0, 0, .7"},className:"w-full h-full z-30 fixed left-0 top-0",onClick:l}):null},r=function(e){var t=e.children,l=e.show,c=e.clicked;return Object(a.jsxs)("div",{className:"w-full",children:[Object(a.jsx)(o,{show:l,clicked:c}),Object(a.jsx)("div",{className:"w-full",children:Object(a.jsx)("div",{style:{visibility:l?"visible":"hidden",borderRadius:"10px",position:"fixed",zIndex:500,width:"340px",textAlign:"center",border:"1px solid #ccc",boxShadow:"1px 1px 1px black",backgroundColor:"white",padding:"36px",left:"calc(50% - 170px)",top:"20%",boxSizing:"border-box",transition:"all .3s ease-out",transform:l?"scale(1)":"scale(0.5)",opacity:l?"1":"0"},children:t})})]})},u=n.a.memo(r),b=l(75),x=l(47),j=l(175),d=l(176),h=function(e){var t=e.label,l=e.placeholder,c=e.submitted,n=e.changeHandler;return Object(a.jsx)("form",{onSubmit:function(e){return c(e)},noValidate:!0,autoComplete:"off",style:{width:"50%"},children:Object(a.jsx)(d.a,{id:"filled-basic",variant:"filled",placeholder:l,label:t,onChange:function(e){return n(e)},autoFocus:!0})})},p=function(){Object(c.useEffect)((function(){e()}),[]);var e=function(){var e=window.Kakao;e.init("ce14d0c486ce0607ac90a14977d21f5b"),e.isInitialized()||e.init("ce14d0c486ce0607ac90a14977d21f5b"),e.Link.createDefaultButton({container:"#kakao-link-btn",objectType:"feed",content:{title:"\uc5f0\uace0\ub9c1",description:"#\ub300\ud559\uc0dd #\uce5c\uad6c #\uccad\ucd98 #20\ub300",imageUrl:"https://2donny.github.io/yk-logo.png",link:{mobileWebUrl:"https://2donny.github.io/",webUrl:"https://2donny.github.io/"}},social:{likeCount:133,commentCount:255,sharedCount:333},buttons:[{title:"\uc6f9\uc73c\ub85c \ubcf4\uae30",link:{mobileWebUrl:"https://2donny.github.io/",webUrl:"https://2donny.github.io/"}},{title:"\uc571\uc73c\ub85c \ubcf4\uae30",link:{mobileWebUrl:"https://2donny.github.io/",webUrl:"https://2donny.github.io/"}}]})};return Object(a.jsx)("div",{style:{display:"inline"},children:Object(a.jsx)("button",{id:"kakao-link-btn",children:Object(a.jsx)("img",{style:{width:"64px",height:"64px",borderRadius:"120px",objectFit:"contain"},src:"/kakao.png",alt:"kakao-share-icon"})})})},m=l(169),f=l(170),O=l(171),g=l(172),v=l(173),y=l(174),k=(l(98),function(e){var t=e.history,l=e.questionNum,n=Object(c.useState)(""),s=Object(i.a)(n,2),o=(s[0],s[1]),r=Object(c.useState)(""),d=Object(i.a)(r,2),k=d[0],N=d[1],w=Object(c.useState)(""),C=Object(i.a)(w,2),F=C[0],S=C[1],D=Object(c.useState)(""),R=Object(i.a)(D,2),A=(R[0],R[1]),U=Object(c.useState)(""),B=Object(i.a)(U,2),q=(B[0],B[1]),z=Object(c.useState)(null),H=Object(i.a)(z,2),W=H[0],I=H[1],L=Object(c.useState)(""),V=Object(i.a)(L,2),J=V[0],T=V[1],E=Object(c.useRef)(),K=Object(c.useState)(""),M=Object(i.a)(K,2),G=(M[0],M[1]),P=Object(c.useState)(""),Q=Object(i.a)(P,2),X=Q[0],Y=Q[1],Z=Object(c.useState)(""),$=Object(i.a)(Z,2),_=($[0],$[1]),ee=Object(c.useState)(""),te=Object(i.a)(ee,2),le=(te[0],te[1]),ce=Object(c.useState)(!1),ne=Object(i.a)(ce,2),ae=ne[0],se=ne[1],ie=Object(c.useState)(!1),oe=Object(i.a)(ie,2),re=oe[0],ue=oe[1],be=Object(c.useCallback)((function(e){se(!0),o("Woman")}),[]),xe=Object(c.useCallback)((function(e){se(!0),o("Man")}),[]),je=Object(c.useCallback)((function(e){console.log(e),N(e),t.push("/setting/3")}),[]),de=Object(c.useCallback)((function(e){console.log(e),S(e),t.push("/setting/4")}),[]),he=Object(c.useCallback)((function(e){t.push("/setting/5")}),[]),pe=Object(c.useCallback)((function(e){A(e.target.value)}),[]),me=Object(c.useCallback)((function(e){e.preventDefault();var t=new FileReader;t.onload=function(e){I(e.target.result)};var l=e.target.files[0];q(l),t.readAsDataURL(l)}),[]),fe=Object(c.useCallback)((function(e){e.preventDefault(),t.push("/setting/6")}),[]),Oe=Object(c.useCallback)((function(e){e.preventDefault(),t.push("/setting/7")}),[]),ge=Object(c.useCallback)((function(e){e.preventDefault()}),[]),ve=Object(c.useCallback)((function(e){e.preventDefault();E.current.value.match(/^@/)?(T(E.current.value),t.push("/setting/8")):alert("\ub2c9\ub124\uc784\uc740 @\uc744 \ud3ec\ud568\ud574\uc57c\ud569\ub2c8\ub2e4.")}),[]),ye=Object(c.useCallback)((function(e){e.preventDefault(),t.push("/setting/9")}),[]),ke=Object(c.useCallback)((function(e){e.preventDefault(),t.push("/setting/10")}),[]),Ne=Object(c.useCallback)((function(e){e.preventDefault(),G(e.target.value)}),[]),we=Object(c.useCallback)((function(e){e.preventDefault();var t=new FileReader;t.onload=function(e){Y(e.target.result)};var l=e.target.files[0];_(l),t.readAsDataURL(l)}),[]),Ce=Object(c.useCallback)((function(e){e.preventDefault(),t.push("/setting/11")}),[]),Fe=Object(c.useCallback)((function(e){e.preventDefault(),le(e.target.value)}),[]),Se=Object(c.useCallback)((function(e){e.preventDefault(),t.push("/setting/12")}),[]),De=Object(c.useCallback)((function(){ue(!re)}),[re]),Re=Number(l),Ae=null;return 1===Re?Ae=Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("section",{className:"text-center px-5 mt-5",children:[Object(a.jsx)("p",{style:{textAlign:"left"},className:"text-2xl text-left",children:"\ub098\ub294?"}),Object(a.jsx)("button",{onClick:function(e){return be(e)},style:{width:"80%"},className:"font-sans block border-2 px-5 py-3 mt-5 focus:outline-none",children:Object(a.jsx)("span",{className:" text-lg",children:"\ud83d\ude4b\ud83c\udffb\u200d\u2640\ufe0f \uc5ec\uc790"})}),Object(a.jsx)("button",{onClick:function(e){return xe(e)},style:{width:"80%"},className:"font-sans block border-2 px-5 py-3 mt-5 focus:outline-none",children:Object(a.jsx)("span",{className:"text-lg",children:"\ud83d\ude4b\ud83c\udffb \ub0a8\uc790"})})]}),Object(a.jsxs)(u,{show:ae,clicked:function(){return se(!1)},children:[Object(a.jsxs)("div",{className:"mb-5",children:[Object(a.jsx)("h1",{className:" text-xl mb-5",children:"\ud68c\uc6d0\ub2d8\uc740 \uba87 \uc0b4\uc774\uc2e0\uac00\uc694?"}),Object(a.jsx)("span",{style:{fontSize:"14px",color:"#5c5c5c"},children:"\uac71\uc815\ub9c8\uc138\uc694! \ub098\uc774\ub294 20\ub300 \ucd08, \uc911, \ud6c4\ubc18\uc73c\ub85c \ud45c\uc2dc\ub429\ub2c8\ub2e4."})]}),Object(a.jsx)(b.a,{isSearchable:!1,blurInputOnSelect:!0,placeholder:"\ub098\uc774\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694.",options:x.a}),Object(a.jsxs)("div",{className:"flex flex-row justify-evenly",children:[Object(a.jsx)("button",{onClick:function(){return se(!1)},className:"font-sans border-2 rounded-3xl px-5 py-3 mt-10 hover:text-white hover:bg-black focus:outline-none",children:"\ucde8\uc18c"}),Object(a.jsx)("button",{onClick:function(){return t.push("/setting/2")},className:"font-sans border-2 rounded-3xl px-5 py-3 mt-10 hover:text-white hover:bg-black focus:outline-none",children:"\ud655\uc778"})]})]})]}):2===Re?Ae=Object(a.jsxs)("section",{className:"text-center px-3 mt-3",children:[Object(a.jsx)("p",{style:{textAlign:"left"},className:"text-2xl text-left",children:"\ud68c\uc6d0\ub2d8\uc744 \uc124\uba85\ud574\uc8fc\uc138\uc694."}),Object(a.jsx)(j.a,{className:"text-left"}),Object(a.jsx)("section",{style:{maxHeight:"400px"},className:"mt-3 px-2 overflow-y-scroll",children:x.e.map((function(e,t){return Object(a.jsx)("article",{onClick:function(){return je(e.value)},style:{border:"1px solid #ccc"},className:" cursor-pointer text-left mt-5 py-7 px-10 rounded-xl",children:Object(a.jsx)("span",{children:e.value})},t)}))})]}):3===Re?Ae=Object(a.jsxs)("section",{className:"text-center px-3 mt-3",children:[Object(a.jsx)("p",{style:{textAlign:"left"},className:"text-2xl text-left",children:"\ud68c\uc6d0\ub2d8\uc744 \uc124\uba85\ud574\uc8fc\uc138\uc694."}),Object(a.jsxs)("div",{className:"flex flex-row items-center",children:[Object(a.jsx)(j.a,{size:"big",className:"text-left w-1/4"}),Object(a.jsx)("h1",{className:"ml-3 text-xl my-auto font-medium",children:k})]}),Object(a.jsx)("section",{style:{maxHeight:"380px"},className:"mt-3 px-2 overflow-y-scroll",children:x.d.map((function(e,t){return Object(a.jsx)("article",{onClick:function(){return de(e.value)},style:{border:"1px solid #ccc"},className:" cursor-pointer text-left mt-5 py-7 px-10 border-2 rounded-xl",children:Object(a.jsx)("span",{children:e.value})},t)}))})]}):4===Re?Ae=Object(a.jsxs)("section",{className:"h-1/4 text-center px-3 mt-3",children:[Object(a.jsxs)("div",{className:"h-full flex flex-row justify-center items-center pt-20",children:[Object(a.jsx)("p",{style:{marginBottom:0},className:"mr-5",children:"\ub098\ub294\x1d"}),Object(a.jsx)(h,{submitted:function(e){return he(e)},changeHandler:function(e){return pe(e)},label:"\uc0ac\ub294\uacf3",placeholder:"\uc11c\uc6b8\ud2b9\ubcc4\uc2dc \uac15\ub3d9\uad6c"}),Object(a.jsx)("p",{className:"text-lg ml-5",children:"\uc5d0 \uc0bd\ub2c8\ub2e4."})]}),Object(a.jsx)("button",{onClick:function(e){return he(e)},className:"mt-20 w-full border-2 rounded-3xl px-5 py-3 hover:text-white hover:bg-black focus:outline-none",children:"\ud655\uc778"})]}):5===Re?Ae=Object(a.jsxs)("section",{className:" h-1/6 text-center px-3 mt-3",children:[Object(a.jsx)("div",{className:"mt-3",children:Object(a.jsx)("h3",{className:"text-left text-3xl font-light",children:"\uce5c\uad6c\ub4e4\uc5d0\uac8c \uacf5\uc720\ud558\uace0\uc2f6\uc740 \uc790\uc2e0\uc758 \uc77c\uc0c1\uc744 \ud55c\uac00\uc9c0\ub9cc \uc0ac\uc9c4\uacfc\ud568\uaed8 \uc801\uc5b4\ubcf4\uc138\uc694! ex.\uc624\ub298 \uc785\uc740 \uc637\u314e\u314e"})}),Object(a.jsxs)("section",{className:"mt-7 px-5",children:[Object(a.jsx)("img",{style:{margin:"0 auto 10px",width:"350px",height:"350px",objectFit:"contain"},src:W||null}),Object(a.jsx)("input",{type:"file",accept:"image/x-png,image/jpeg,image/gif",onChange:function(e){return me(e)}}),Object(a.jsx)("button",{onClick:function(e){return fe(e)},className:"mt-5 w-1/3 border-2 rounded-3xl px-5 py-3 bg-black text-white focus:outline-none",children:Object(a.jsx)("p",{style:{wordBreak:"keep-all"},children:"\uc5c5\ub85c\ub4dc \ud558\uae30\x1b"})})]})]}):6===Re?Ae=Object(a.jsxs)("section",{className:" h-1/6 text-center px-5 mt-10",children:[Object(a.jsx)("h3",{className:"text-2xl",children:"[\uc5f0\uace0\ub9c1 \uc774\ubca4\ud2b8]"})," ",Object(a.jsxs)("p",{children:[" ",Object(a.jsx)("strong",{className:"text-xl",children:"Airpod 2"}),"  \uc808\ub300 \ub193\uce58\uc9c0 \ub9c8\uc138\uc694!!!"]}),Object(a.jsx)("textarea",{placeholder:"\uce5c\uad6c\ub4e4\uc5d0\uac8c \uacf5\uc720\ud560 \uae00 \uc791\uc131\ud574\ubcf4\uc138\uc694. \ud574\uc2dc\ud0dc\uadf8",style:{height:"250px",border:"1px solid gray"},className:"my-3 px-3 py-5 w-full text-base placeholder-gray-400"}),Object(a.jsx)("button",{onClick:function(e){return Oe(e)},className:"mt-5 w-full border-2 rounded-3xl px-5 py-3 bg-black text-white focus:outline-none",children:"\ub2e4\uc74c"})]}):7===Re?Ae=Object(a.jsxs)("section",{className:" h-1/6 text-center px-3 mt-10",children:[Object(a.jsx)("h3",{className:"text-left text-3xl font-light",children:"\ub2c9\ub124\uc784\uc744 \uc124\uc815\ud574\uc8fc\uc138\uc694."}),Object(a.jsx)("h5",{className:"text-left font-normal mb-10",children:"\uc0c8 \uacc4\uc815\uc5d0 \uc0ac\uc6a9\ud560 \uc0ac\uc6a9\uc790 \uc774\ub984\uc744 \uc120\ud0dd\ud558\uc138\uc694. \ub098\uc911\uc5d0 \uc5b8\uc81c\ub4e0\uc9c0 \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),Object(a.jsxs)("form",{onSubmit:function(e){return ve(e)},autoComplete:"off",noValidate:!0,children:[Object(a.jsx)("input",{type:"text",defaultValue:"@",className:"w-3/4 bg-gray-200 px-5 py-5 rounded-xl mr-3",autoFocus:!0,ref:E,onChange:function(e){return ge(e)}}),Object(a.jsx)("button",{onClick:function(e){return ve(e)},className:"mt-5 w-1/2 border-2 rounded-3xl px-5 py-3 bg-black text-white focus:outline-none",children:"\ub2e4\uc74c"})]})]}):8===Re?Ae=Object(a.jsxs)("section",{className:" h-1/6 text-center px-3 mt-10",children:[Object(a.jsxs)("h3",{className:"text-left text-3xl font-light",children:[F," ",k," ",J,"\ub2d8 ",Object(a.jsx)("br",{}),"\uc694\uc998 \ubb34\uc5c7\uc5d0 \uad00\uc2ec\uc788\uc73c\uc2e0\uac00\uc694?"]}),Object(a.jsx)("h5",{className:"text-left font-normal mb-10",children:"\uc0c8 \uacc4\uc815\uc5d0 \uc0ac\uc6a9\ud560 \uc0ac\uc6a9\uc790 \uc774\ub984\uc744 \uc120\ud0dd\ud558\uc138\uc694. \ub098\uc911\uc5d0 \uc5b8\uc81c\ub4e0\uc9c0 \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),Object(a.jsx)("button",{onClick:function(e){return ye(e)},className:"mt-5 w-1/2 border-2 rounded-3xl px-5 py-3 bg-black text-white focus:outline-none",children:"\ub2e4\uc74c"})]}):9===Re?Ae=Object(a.jsxs)("section",{className:" h-1/6 text-center px-5 mt-10",children:[Object(a.jsxs)("h3",{className:"text-left text-3xl font-light",children:[F," ",k," ",J,"\ub2d8 ",Object(a.jsx)("br",{}),"\uce5c\uad6c\ub4e4\uc5d0\uac8c \ubcf4\uc5ec\uc9c8 \uc790\uc2e0\uc758 \ud55c\uc904\uc18c\uac1c\ub97c  \uac04\ub2e8\ud788 \uc801\uc5b4\uc8fc\uc138\uc694! "]}),Object(a.jsx)("h5",{className:"text-left font-normal mb-10",children:"\uc0c8 \uacc4\uc815\uc5d0 \uc0ac\uc6a9\ud560 \uc0ac\uc6a9\uc790 \uc774\ub984\uc744 \uc120\ud0dd\ud558\uc138\uc694. \ub098\uc911\uc5d0 \uc5b8\uc81c\ub4e0\uc9c0 \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),Object(a.jsx)("textarea",{placeholder:"\uc608) \uc548\ub155\ud558\uc138\uc694. \uc800\ub294 24\uc0b4 \uc5f0\uc138\ub300\ud559\uad50\uc5d0 \uc7ac\ud559\uc911\uc778 \ubfc5\ubfc5\ubfc5\uc785\ub2c8\ub2e4. \uc800\ub294 \ud604\uc7ac \uc2a4\ud0c0\ud2b8\uc5c5\uc5d0\uc11c \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \uae30\ud68d\uc744 \ud558\uace0\uc788\uc2b5\ub2c8\ub2e4. \ucee4\ub9ac\uc5b4\uc801\uc73c\ub85c\ub294 \uc778\uc0ac\uc774\ud2b8\ub97c \uacf5\uc720\ud558\uace0\uc2f6\uc5b4\uc694! \ucde8\ubbf8\ub85c\ub294 \ud568\uaed8 \uce74\ud398\uc5d0\uc11c \ucee4\ud53c\ud55c\uc794 \ud568\uaed8 \ub9c8\uc2dc\ub294\uac78 \uc990\uaca8\uc694. \ub610 \uc804\uc2dc\ud68c \ubba4\uc9c0\uceec\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4! \ub208\uacfc \uc785\uc774 \uc990\uac70\uc6b4\uac78 \uc0ac\ub791\ud558\ub294 \uccad\ucd98\uc785\ub2c8\ub2e4 \ud573\ud573",onChange:function(e){return Ne(e)},style:{height:"250px",border:"1px solid gray"},className:"my-3 px-3 py-5 w-full text-base placeholder-gray-400"}),Object(a.jsx)("button",{onClick:function(e){return ke(e)},className:"my-5 w-1/2 border-2 rounded-3xl px-5 py-3 bg-black text-white focus:outline-none",children:"\ub2e4\uc74c"})]}):10===Re?Ae=Object(a.jsxs)("section",{className:" h-1/6 text-center px-3 mt-10",children:[Object(a.jsx)("h5",{className:"text-left font-normal mb-10",children:"\ub9c8\uc9c0\ub9c9!! \ud68c\uc6d0\ub2d8\uc758 \ud504\ub85c\ud544 \uc0ac\uc9c4\uc744 \uc62c\ub824\uc8fc\uc138\uc694!"}),Object(a.jsx)("p",{children:"\uc5bc\uad74 \uc0ac\uc9c4\uc774 \uc544\ub2c8\uc5b4\ub3c4 \ub429\ub2c8\ub2e4. \ubcf8\uc778\uc744 \uac00\uc7a5 \uc798 \ub4dc\ub7ec\ub0bc \uc218  \uc788\ub294 \uc0ac\uc9c4 \ud558\ub098\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694 ;) "}),Object(a.jsxs)("section",{className:"mt-5 px-5",children:[Object(a.jsx)("img",{style:{margin:"0 auto 10px",width:"350px",height:"350px",objectFit:"contain"},src:X||null}),Object(a.jsx)("input",{type:"file",accept:"image/x-png,image/jpeg,image/gif",onChange:function(e){return we(e)}}),Object(a.jsx)("button",{onClick:function(e){return Ce(e)},className:"mt-5 w-1/3 border-2 rounded-3xl px-5 py-3 bg-black text-white focus:outline-none",children:"\uc5c5\ub85c\ub4dc \ud558\uae30\x1b"})]})]}):11===Re?Ae=Object(a.jsxs)("section",{className:" h-1/6 text-center px-3 mt-10",children:[Object(a.jsxs)("h3",{className:"text-left font-normal mb-10 text-2xl",children:["\uc774\ubca4\ud2b8 \uacf5\uc9c0\ub97c \uc704\ud55c \uc804\ud654\ubc88\ud638 ",Object(a.jsx)("br",{})," (\uc774\ubca4\ud2b8 \ucc38\uac00\uc790 \ud544\uc218)"]}),Object(a.jsxs)("section",{className:"mt-3",children:[Object(a.jsx)("input",{type:"text",className:"w-3/4 bg-gray-200 px-5 py-5 rounded-xl",autoFocus:!0,onChange:function(e){return Fe(e)}}),Object(a.jsx)("button",{onClick:function(e){return Se(e)},className:"mt-5 w-1/3 ml-3 border-2 rounded-3xl px-5 py-3 bg-black text-white focus:outline-none",children:"\uc644\ub8cc"})]})]}):12===Re&&(Ae=Object(a.jsxs)("div",{className:"h-screen",children:[Object(a.jsx)("section",{style:{height:"20%"},className:"mt-5 flex flex-row items-center ",children:Object(a.jsx)("img",{style:{height:"70px",width:"70px"},src:"https://2donny.github.io/yk-logo.png",alt:"yk-logo",className:"rounded-2xl mx-auto"})}),Object(a.jsxs)("section",{style:{height:"40%"},className:" text-center pt-5",children:[Object(a.jsx)("h1",{className:"mb-3 px-10",children:"\uc5f0\uace0\ub9c1 \ud68c\uc6d0\uac00\uc785 \ubc0f \uc0ac\uc804\uc2e0\uccad\uc744 \ud574\uc8fc\uc154\uc11c \ub300\ub2e8\ud788 \uac10\uc0ac\ud569\ub2c8\ub2e4."}),Object(a.jsx)("p",{className:"px-10 pt-5 text-lg",children:"\uc815\uc2dd \uc11c\ube44\uc2a4\ub294 3\uc6d4 20\uc77c\ub0a0 \uc2dc\uc791\ub429\ub2c8\ub2e4. \uc0ac\uc804\uc2e0\uccad \uc774\ubca4\ud2b8 \uacb0\uacfc\ub294 \uc5f0\uace0\ub9c1 \uce74\uce74\uc624\ud1a1 \ud50c\ub7ec\uc2a4 \ucc44\ub110\ub85c \uacf5\uc9c0\uac00 \ub429\ub2c8\ub2e4.  \uaf2d \uc5f0\uace0\ub9c1 \uce5c\uad6c\ucd94\uac00 \ud574\uc8fc\uc138\uc694! \uce5c\uad6c\uc5d0\uac8c \uc5f0\uace0\ub9c1\uc744 \uacf5\uc720\ud558\uba74 \uacf5\uc720\ud55c \uce5c\uad6c \uac1c\uc218\ub9cc\ud07c \ucd94\ucca8\ubc88\ud638 \ub298\ub824\ub4dc\ub9bd\ub2c8\ub2e4!"})]}),Object(a.jsxs)("section",{style:{height:"30%",padding:"0 10px"},children:[Object(a.jsxs)("article",{style:{opacity:re?1:0,transition:"all .2s ease-in",marginBottom:"10px"},className:"mt-24 text-center",children:[Object(a.jsx)(p,{}),Object(a.jsx)(m.a,{url:"https://2donny.github.io/",children:Object(a.jsx)(f.a,{round:!0})}),Object(a.jsx)(O.a,{url:"https://2donny.github.io/",children:Object(a.jsx)(g.a,{round:!0})}),Object(a.jsx)(v.a,{url:"https://2donny.github.io/",children:Object(a.jsx)(y.a,{round:!0})})]}),Object(a.jsx)("button",{onClick:function(){return De()},className:"w-full border-2 rounded-2xl px-5 py-3 bg-black text-white focus:outline-none",children:"\uacf5\uc720\ud558\uace0 \uc5d0\uc5b4\ud31f \ub2f9\ucca8 \ud655\ub960 up\ud558\uae30 "})]})]})),Object(a.jsx)("div",{children:Ae})}),N=l(18);t.default=function(e){var t=e.history,l=e.match.params.questionNum;return Object(a.jsx)(a.Fragment,{children:"12"!==l?Object(a.jsx)("div",{className:"w-full overflow-x-hidden",children:Object(a.jsxs)(N.a,{headerNone:!0,footerNone:!0,children:[Object(a.jsxs)("nav",{style:{height:"7%",borderBottom:"0.5px solid #ccc"},className:"flex flex-row items-center justify-between border-b-2",children:[Object(a.jsx)("img",{onClick:function(){return t.goBack()},style:{width:"25px",height:"25px",cursor:"pointer"},src:"/arrow-back-outline.svg",alt:"back"}),Object(a.jsx)("p",{style:{marginRight:"30px"},className:"w-full text-lg text-center",children:"\ud68c\uc6d0\uac00\uc785"})]}),Object(a.jsx)(s,{questionNum:l}),Object(a.jsx)(k,{history:t,questionNum:l})]})}):Object(a.jsx)("div",{className:"w-full",children:Object(a.jsx)(N.a,{headerNone:!0,footerNone:!0,children:Object(a.jsx)(k,{history:t,questionNum:l})})})})}},47:function(e,t,l){"use strict";l.d(t,"b",(function(){return c})),l.d(t,"c",(function(){return n})),l.d(t,"a",(function(){return a})),l.d(t,"e",(function(){return s})),l.d(t,"d",(function(){return i}));var c=[{value:"seoul",label:"\uc11c\uc6b8\ub300\ud559\uad50",color:"#00B8D9",isFixed:!0},{value:"korea",label:"\uace0\ub824\ub300\ud559\uad50",color:"#0052CC"},{value:"yonsei",label:"\uc5f0\uc138\ub300\ud559\uad50",color:"#5243AA"},{value:"hanyang",label:"\ud55c\uc591\ub300\ud559\uad50",color:"#FF5630",isFixed:!0},{value:"seokang",label:"\uc11c\uac15\ub300\ud559\uad50",color:"#FF5630",isFixed:!0},{value:"sungkyunkwan",label:"\uc131\uade0\uad00\ub300\ud559\uad50",color:"#FF5630",isFixed:!0}],n=[{label:"\ub300\ud559",options:c}],a=[{label:20,value:20},{label:21,value:21},{label:22,value:22},{label:23,value:23},{label:24,value:24},{label:25,value:25},{label:26,value:26},{label:27,value:27},{label:28,value:28},{label:29,value:29},{label:30,value:30},{label:31,value:31},{label:32,value:32},{label:33,value:33},{label:34,value:34},{label:35,value:35}],s=[{label:"\ub300\ud559\uc0dd",value:"\ub300\ud559\uc0dd"},{label:"\uc2e0\uc785\uc0dd",value:"\uc2e0\uc785\uc0dd"},{label:"\uac1c\ubc1c\uc790",value:"\uac1c\ubc1c\uc790"},{label:"\uae30\ud68d\uc790",value:"\uae30\ud68d\uc790"},{label:"\ub9c8\ucf00\ud130",value:"\ub9c8\ucf00\ud130"},{label:"\ub300\ud45c",value:"\ub300\ud45c"},{label:"\ud3b8\uc9d1\uc790",value:"\ud3b8\uc9d1\uc790"},{label:"\uc0dd\uc0b0\uc6d0",value:"\uc0dd\uc0b0\uc6d0"},{label:"\uc120\uc0dd\ub2d8",value:"\uc120\uc0dd\ub2d8"},{label:"\ub9c8\uc220\uc0ac",value:"\ub9c8\uc220\uc0ac"},{label:"\uc0ac\uc5c5\uac00",value:"\uc0ac\uc5c5\uac00"},{label:"\ud504\ub9ac\ub79c\uc11c",value:"\ud504\ub9ac\ub79c\uc11c"},{label:"\uc54c\ubc14\uc0dd",value:"\uc54c\ubc14\uc0dd"},{label:"\uc11c\ube44\uc2a4\uc6d0",value:"\uc11c\ube44\uc2a4\uc6d0"},{label:"\uc0dd\uc0b0\uc6d0",value:"\uc0dd\uc0b0\uc6d0"},{label:"\uae30\uc220\uc790",value:"\uae30\uc220\uc790"}],i=[{label:"\uc2ec\uc2ec\ud55c",value:"\uc2ec\uc2ec\ud55c"},{label:"\ubc30\ubd80\ub978",value:"\ubc30\ubd80\ub978"},{label:"\ub611\ub611\ud55c",value:"\ub611\ub611\ud55c"},{label:"\uc5f4\uc815\uc774 \ub118\uce58\ub294",value:"\uc5f4\uc815\uc774 \ub118\uce58\ub294"},{label:"\ub3c5\ud2b9\ud55c",value:"\ub3c5\ud2b9\ud55c"},{label:"\ub9e4\ub825\uc788\ub294",value:"\ub9e4\ub825\uc788\ub294"},{label:"\ubc30\uace0\ud508",value:"\ubc30\uace0\ud508"},{label:"\ud5e4\ub871\ud5e4\ub871\ud55c",value:"\ud5e4\ub871\ud5e4\ub871\ud55c"},{label:"\ub514\uc790\uc774\ub108\uac00 \ub418\uace0\uc2f6\uc740",value:"\ub514\uc790\uc774\ub108\uac00 \ub418\uace0\uc2f6\uc740"},{label:"\uac1c\ubc1c\uc790\uac00 \ub418\uace0\uc2f6\uc740",value:"\uac1c\ubc1c\uc790\uac00 \ub418\uace0\uc2f6\uc740"}]}}]);
//# sourceMappingURL=7.c7e6d378.chunk.js.map