import{r as c,a as g,o as _,c as u,b as r,F as b,d as I,e as p,w as y,n as f,u as A,p as w,f as $,t as O,g as N,h as V,i as j,j as B}from"./vendor.697a2638.js";const D=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}};D();var R="/Uplink-landing/logo.png";var v=(t,a)=>{const i=t.__vccOpts||t;for(const[n,e]of a)i[n]=e;return i};const h=t=>(w("data-v-3aa5b0d4"),t=t(),$(),t),T={class:"navbar-brand"},S=h(()=>r("img",{src:R,width:"45"},null,-1)),U=h(()=>r("h1",{class:"text-gray-50 text-xl font-semibold lg:text-3xl"},"UP LINK",-1)),W=h(()=>r("i",{class:"fa fa-bars text-gray-50 text-2xl"},null,-1)),F=[W],K={class:"navbar-list"},M=h(()=>r("i",{class:"fa fa-times text-gray-50"},null,-1)),q=[M],z=["onClick","href"],H={setup(t){c("Beranda");const a=c(!1),i=c(window.innerWidth);let n=c(!1);document.addEventListener("scroll",function(){let s=document.body.getBoundingClientRect().top,o=c(window.innerWidth);s<o.value*.56*-1?n.value=!0:n.value=!1}),i.value>=768&&(a.value=!0);const e=[{name:"Inicio",to:"/"},{name:"Nosotros",to:"/about"},{name:"Planes",to:"/plans"},{name:"TV",to:"/tv"},{name:"Contacto",to:"/contact"},{name:"Medidor",to:"/speedtest"}];return(s,o)=>{const m=g("router-link");return _(),u("main",{class:f(["transition-colors duration-500 navbar-transparent",A(n)||s.$route.path!="/"?"navbar-gradient":"md:navbar-transparent"])},[r("section",T,[S,U,r("button",{onClick:o[0]||(o[0]=d=>a.value=!0),class:"active:scale-95 duration-300 md:hidden",type:"button"},F)]),r("section",{class:f([a.value?"right-0":"-right-full","navbar-menu"])},[r("ul",K,[r("span",{onClick:o[1]||(o[1]=d=>a.value=!1),class:"md:hidden"},q),(_(),u(b,null,I(e,(d,k)=>p(m,{key:k,to:d.to,custom:""},{default:y(({href:P,route:ve,navigate:L,isActive:C,isExactActive:he})=>[r("li",{class:f([C?"border-b-4 border-blue-400":"","text-gray-50 font-medium duration-300"])},[r("a",{onClick:L,href:P},O(d.name),9,z)],2)]),_:2},1032,["to"])),64))])],2)],2)}}};var J=v(H,[["__scopeId","data-v-3aa5b0d4"]]);const Z={},G={class:"text-gray-100"},Q=r("section",{class:"w-full flex flex-col gap-10 md:flex-row md:justify-between lg:justify-center"},[r("section",{class:"md:w-5/12"})],-1),X=r("section",{class:"w-full text-center mt-16"}," UP LINK DE VENEZUELA, C.A \xA9 2024 J-29355952-9 ",-1),Y=[Q,X];function ee(t,a){return _(),u("footer",G,Y)}var te=v(Z,[["render",ee]]);const oe={setup(){c("Beranda");const t=c(!1);c(window.innerWidth).value>=768&&(t.value=!0)}},ne=t=>(w("data-v-add3a6f2"),t=t(),$(),t),se={key:0,class:"fixed"},re=["onClick"],ae=ne(()=>r("div",{class:"buttonDiv bg-b-blue"}," Pagar ",-1)),ie=[ae];function ce(t,a,i,n,e,s){const o=g("router-link");return _(),u("main",{class:f(["transition-colors duration-500 navbar-transparent",t.showColoredBackground?"navbar-gradient":"md:navbar-transparent"])},[r("section",null,[t.$route.path!="/pagos"?(_(),u("div",se,[p(o,{to:"/pagos",custom:""},{default:y(({navigate:m})=>[r("a",{onClick:m,class:"button"},ie,8,re)]),_:1})])):N("",!0)])],2)}var le=v(oe,[["render",ce],["__scopeId","data-v-add3a6f2"]]);const de={class:"section bg-gradient-to-r from-slate-700 to-indigo-900"},_e={setup(t){return(a,i)=>{const n=g("router-view");return _(),u(b,null,[p(J),p(le),p(n),r("section",de,[p(te)])],64)}}};var ue=v(_e,[["__scopeId","data-v-0e9c1564"]]);const pe="modulepreload",x={},me="/Uplink-landing/",l=function(a,i){return!i||i.length===0?a():Promise.all(i.map(n=>{if(n=`${me}${n}`,n in x)return;x[n]=!0;const e=n.endsWith(".css"),s=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${s}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":pe,e||(o.as="script",o.crossOrigin=""),o.href=n,document.head.appendChild(o),e)return new Promise((m,d)=>{o.addEventListener("load",m),o.addEventListener("error",d)})})).then(()=>a())},fe=V({history:j("/Uplink-landing/"),routes:[{path:"/",component:()=>l(()=>import("./Landing.d3958ffa.js"),["assets/Landing.d3958ffa.js","assets/Landing.ebac0cf8.css","assets/vendor.697a2638.js"])},{path:"/pagos",name:"pagos",component:()=>l(()=>import("./Payment.c09cb4bd.js"),["assets/Payment.c09cb4bd.js","assets/Payment.46752506.css","assets/vendor.697a2638.js"])},{path:"/about",name:"nosotros",component:()=>l(()=>import("./About.442ebf1e.js"),["assets/About.442ebf1e.js","assets/vendor.697a2638.js"])},{path:"/plans",name:"planes",component:()=>l(()=>import("./Plans.f9306e85.js"),["assets/Plans.f9306e85.js","assets/vendor.697a2638.js"])},{path:"/tv",name:"tv",component:()=>l(()=>import("./tv.ddfe7f9a.js"),["assets/tv.ddfe7f9a.js","assets/vendor.697a2638.js"])},{path:"/contact",name:"contact",component:()=>l(()=>import("./Contact.0be5398d.js"),[])},{path:"/speedtest",name:"speedtest",component:()=>l(()=>import("./speedtest.dae79634.js"),[])}]}),E=B(ue);E.use(fe);E.mount("#app");export{v as _};
