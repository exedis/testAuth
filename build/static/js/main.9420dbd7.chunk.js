(this.webpackJsonpipavlov=this.webpackJsonpipavlov||[]).push([[0],[,,function(e,t,a){e.exports={authForm:"AuthForm_authForm__3ppzM",formControl:"AuthForm_formControl__1hX6f",input:"AuthForm_input__2wh7G",btn:"AuthForm_btn__3_ed6",title:"AuthForm_title__14_Db"}},,function(e,t,a){e.exports={wrapper:"FormAuth_wrapper__3ftw5",loading:"FormAuth_loading__2sCzl",authorized:"FormAuth_authorized__nM63f",logoutBtn:"FormAuth_logoutBtn__2DjJy"}},,,,function(e,t,a){e.exports={message:"AuthMessages_message__11l_L",error:"AuthMessages_error__VwarZ"}},,function(e,t,a){e.exports={loader:"Loader_loader__3x1Se"}},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(9),o=a.n(s),c=(a(15),a(16),a(5)),i=a(3),u=a(6),l=a.n(u),d=a(2),m=a.n(d),j=a.p+"static/media/logo.6ce24c58.svg",b=a(0),f=function(e){var t=e.onLogin,a=Object(n.useState)(""),r=Object(i.a)(a,2),s=r[0],o=r[1],c=Object(n.useState)(""),u=Object(i.a)(c,2),l=u[0],d=u[1];return Object(b.jsxs)("form",{action:"",className:m.a.authForm,onSubmit:function(e){return function(e){e.preventDefault(),t(s,l)}(e)},children:[Object(b.jsxs)("div",{className:m.a.formControl,children:[Object(b.jsx)("img",{src:j,alt:""}),Object(b.jsx)("div",{className:m.a.title,children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"})]}),Object(b.jsx)("div",{className:m.a.formControl,children:Object(b.jsx)("input",{required:!0,type:"email",className:m.a.input,placeholder:"Email",name:"email",value:s,onChange:function(e){return t=e.target.value,void o(t);var t}})}),Object(b.jsx)("div",{className:m.a.formControl,children:Object(b.jsx)("input",{required:!0,type:"password",className:m.a.input,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"pass",value:l,onChange:function(e){return t=e.target.value,void d(t);var t}})}),Object(b.jsx)("div",{className:m.a.formControl,children:Object(b.jsx)("button",{className:m.a.btn,type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})})]})},h=a(8),p=a.n(h),O=function(e){var t=e.message,a=e.template,r=e.hideMessage;return Object(n.useEffect)((function(){var e=setTimeout((function(){r()}),2e3);return function(){clearTimeout(e)}})),t?Object(b.jsx)("div",{className:l()(p.a.message,Object(c.a)({},p.a.error,!a)),children:t}):null},v=a(10),_=a.n(v),g=a.p+"static/media/loader.2f67a12a.svg",x=function(){return Object(b.jsx)("div",{className:_.a.loader,children:Object(b.jsx)("img",{src:g,alt:""})})},N=a(4),S=a.n(N),w=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(!1),o=Object(i.a)(s,2),u=o[0],d=o[1],m=Object(n.useState)({}),j=Object(i.a)(m,2),h=j[0],p=j[1],v=Object(n.useState)({success:!0,text:""}),_=Object(i.a)(v,2),g=_[0],N=_[1];function w(){var e={name:"username",login:"dev@dev.com",password:"123",token:"asdasda32423sdasdasda",authorized:!0};return e=JSON.stringify(e),new Promise((function(t,a){setTimeout((function(){t(e)}),1e3)}))}var A=function(e){return localStorage.setItem("token",e)},F=function(e){p({username:e})},C=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";N({success:e,text:t})};Object(n.useEffect)((function(){var e=localStorage.getItem("token");e&&(r(!0),w().then((function(t){var a=JSON.parse(t);a.authorized&&a.token===e&&(d(!0),F(a.name)),r(!1)})))}),[r]);var k=Object(b.jsx)(f,{onLogin:function(e,t){return function(e,t){if(u)return C(!0,"\u0412\u044b \u0443\u0436\u0435 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d\u044b!");r(!0),w().then((function(a){r(!1);var n=JSON.parse(a);n.login===e&&n.password===t?(A("asdasda32423sdasdasda"),d(!0),F(n.name),C(!0,"\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d!")):C(!1,"\u041e\u0448\u0438\u0431\u043a\u0430! \u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c!")}),(function(e){alert("Rejected: ".concat(e))}))}(e,t)}}),y=Object(b.jsxs)("div",{className:S.a.authorized,children:[Object(b.jsxs)("h1",{children:["\u041f\u0440\u0438\u0432\u0435\u0442, ",h.username]}),Object(b.jsx)("button",{className:S.a.logoutBtn,onClick:function(){u&&(d(!1),A(""),C(!0,"\u0412\u044b\u0445\u043e\u0434 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d"))},type:"button",children:"\u0412\u044b\u0439\u0442\u0438"})]}),z=u?y:k;return Object(b.jsxs)("div",{className:l()(S.a.wrapper,Object(c.a)({},S.a.loading,a)),children:[a&&Object(b.jsx)(x,{}),z,Object(b.jsx)(O,{message:g.text,template:g.success,hideMessage:function(){return N("")}})]})};var A=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(w,{})})};o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(A,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.9420dbd7.chunk.js.map