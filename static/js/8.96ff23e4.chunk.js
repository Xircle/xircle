(this.webpackJsonpykring=this.webpackJsonpykring||[]).push([[8],{179:function(e,t,n){"use strict";n.r(t);var a=n(17),r=n(1),c=n(18),s=n(176),o=n(3),l=n(177),i=n(52);var u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(l.a)(e,Object(o.a)({defaultTheme:i.a},t))},h=n(0),d=u((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}}}}));function b(e){var t=e.history,n=d(),c=Object(r.useState)(""),o=Object(a.a)(c,2),l=o[0],i=o[1],u=/^[a-zA-Z0-9]([-_]?[a-zA-Z0-9])*@(korea.ac.kr|yonsei.ac.kr|snu.ac.kr|sogang.ac.kr|skky.edu|hanyang.ac.kr)$/,b=Object(r.useCallback)((function(e){e.preventDefault(),i(e.target.value)}),[]),j=Object(r.useCallback)((function(e){l.match(u)?(e.preventDefault(),t.push("/univ")):(e.preventDefault(),alert("\uc62c\ubc14\ub978 \uba54\uc77c\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694."))}),[l]);return Object(h.jsxs)("form",{className:n.root,noValidate:!0,autoComplete:"off",children:[Object(h.jsx)("div",{className:"w-full text-center mt-5",children:Object(h.jsx)(s.a,{error:!l.match(u),id:"outlined-error-helper-text",label:"\ud559\uad50 \uc774\uba54\uc77c \uc778\uc99d\ud558\uae30",helperText:l.match(u)?"":"\uc774\uba54\uc77c\uc744 \uc62c\ubc14\ub974\uac8c \uc785\ub825\ud574\uc8fc\uc138\uc694.",autoFocus:!0,required:!0,fullWidth:!0,variant:"outlined",onChange:function(e){return b(e)}})}),Object(h.jsx)("button",{onClick:function(e){return j(e)},className:"font-sans w-full border-2 rounded-2xl px-5 py-3 mt-10 bg-black text-white focus:outline-none",children:"\uba54\uc77c\ub85c \uc778\uc99d\ud558\uae30"})]})}t.default=function(e){var t=e.history,n=Object(r.useState)(!1),s=Object(a.a)(n,2);s[0],s[1];return Object(h.jsx)("div",{className:"w-full overflow-y-hidden",children:Object(h.jsxs)(c.a,{headerNone:!0,footerNone:!0,children:[Object(h.jsx)("section",{style:{height:"20%"},className:"my-5 flex flex-row items-center ",children:Object(h.jsx)("img",{style:{height:"70px",width:"70px"},src:"https://2donny.github.io/yk-logo.png",alt:"yk-logo",className:"rounded-2xl mx-auto"})}),Object(h.jsxs)("section",{style:{height:"50%"},className:"px-10 mb-5",children:[Object(h.jsx)("p",{style:{color:"#C5C1C1"},className:" text-sm text-center",children:"\uce5c\uad6c\ub4e4\uacfc \uc5d1\ud2f0\ube44\ud2f0\ub97c \uc990\uae30\ub824\uba74 \ub85c\uadf8\uc778 \ud574\uc8fc\uc138\uc694."}),Object(h.jsx)(b,{history:t})]})]})})}}}]);
//# sourceMappingURL=8.96ff23e4.chunk.js.map