import{r as _,o as r,c as i,a as e,F as g,b as h,n as b,p as y,d as w,t as f,e as x,f as $,u as k,g as P,h as m,i as L}from"./vendor.2167b0dc.js";const N=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}};N();var I="/Uplink-landing/logo.png";var u=(s,n)=>{const o=s.__vccOpts||s;for(const[c,t]of n)o[c]=t;return o};const p=s=>(y("data-v-71aaf467"),s=s(),w(),s),U={class:"navbar"},j={class:"navbar-brand"},A=p(()=>e("img",{src:I,width:"45"},null,-1)),C=p(()=>e("h1",{class:"text-gray-50 text-xl font-semibold lg:text-3xl"},"UP-LINK",-1)),S=p(()=>e("i",{class:"fa fa-bars text-gray-50 text-2xl"},null,-1)),E=[S],B={class:"navbar-list"},V=p(()=>e("i",{class:"fa fa-times text-gray-50"},null,-1)),z=[V],K=["onClick","href"],M={setup(s){const n=_("Beranda"),o=_(!1);_(window.innerWidth).value>=768&&(o.value=!0);const t=[{name:"Home",to:"#"},{name:"Pagos",to:"#pagos"},{name:"Planes",to:"#planes"},{name:"Nosotros",to:"#about"}];return(a,l)=>(r(),i("main",U,[e("section",j,[A,C,e("button",{onClick:l[0]||(l[0]=d=>o.value=!0),class:"active:scale-95 duration-300 md:hidden",type:"button"},E)]),e("section",{class:b([o.value?"right-0":"-right-full","navbar-menu"])},[e("ul",B,[e("span",{onClick:l[1]||(l[1]=d=>o.value=!1),class:"md:hidden"},z),(r(),i(g,null,h(t,(d,v)=>e("li",{key:v,class:b([n.value===d.name?"border-b-4 border-blue-400":"","text-gray-50 font-medium duration-300"])},[e("a",{onClick:Ie=>n.value=d.name,href:d.to},f(d.name),9,K)],2)),64))])],2)]))}};var O=u(M,[["__scopeId","data-v-71aaf467"]]),D="/Uplink-landing/vector.png";const F={},q={class:"z-10 mt-20 md:py-10 lg:pt-28 md:flex md:flex-row-reverse md:justify-between md:items-center gap-3"},R=x('<img src="'+D+'" class="md:w-5/12 block mb-8 lg:mb-0"><section class="md:w-5/11"><h1 id="heading" class="lg:text-5xl lg:leading-snug text-3xl text-gray-50 font-semibold"> UP LINK DE VENEZUELA, C.A </h1><p class="lg:text-2xl text-gray-100 font-medium mt-4">A La Velocidad De La Luz!!</p><div class="mt-10 md:mt-16 text-gray-100 flex items-center gap-2"><a href="https://instagram.com/uplink_oriente?utm_medium=copy_link" target="_blank"><i class="fab fa-instagram text-2xl text-pink-600"></i> uplink_oriente </a></div></section>',2),Z=[R];function H(s,n){return r(),i("main",q,Z)}var G=u(F,[["render",H]]),W="/Uplink-landing/about.png";const J={},Q={class:"py-10"},T=x('<h1 class="text-center pb-6 text-3xl md:text-4xl lg:text-5xl font-semibold text-indigo-500">Nosotros</h1><p class="text-gray-600 text-center lg:px-24">UP-LINK de Venezuela</p><section class="mt-10 md:flex md:gap-8 md:items-start xl:items-start"><img class="md:mx-auto mb-5 md:w-3/12 lg:w-2/12" src="'+W+'" width="150"><p class="xl:px-6 lg:text-lg text-gray-600 xl:w-9/12 leading-thight"><span class="text-indigo-700 font-medium">UP-LINK</span> es una empresa que ofrece Internet de alta velocidad en la zona norte de Anzo\xE1tegui. La empresa avanza con la expansi\xF3n de su red de Internet Fibra \xD3ptica de banda ancha simetrica con tecnolog\xEDa GPON en Piritu y Puerto Piritu. Desde hace 2 a\xF1os, <span class="text-indigo-700 font-medium">UP-LINK</span> incursion\xF3 en el mercado oriental ofreciendo internet de alta velocidad, cubriendo la necesidad de contar con internet estable en la zona. <span class="text-indigo-700 font-medium">UP-LINK</span> busca posicionarse como la empresa #1 con los mejores est\xE1ndares de calidad. <span class="text-indigo-700 font-medium">UP-LINK</span> ofrece distintos planes para conectarse a la red, ellos incluyen Residencial, Condominios, Empresarial y Corporativo. La velocidad de conexi\xF3n var\xEDa de acuerdo al plan contratado, que van desde 30Mb hasta 200 Mb. </p></section>',3),X=[T];function Y(s,n){return r(),i("main",Q,X)}var ee=u(J,[["render",Y]]),te="/Uplink-landing/event.png",se=[{name:"Plan Residencial",job:"Velocidad: 120MBPS"},{name:" Plan Comercial",job:"Velocidad: 200MBPS"},{name:"Plan Premium",job:"Velocidad: 300MBPS"},{name:"Plan Platinum",job:"Velocidad: 500MBPS"}];const ne={class:"md:w-4/12 p-6 rounded-xl shadow-lg border-4 border-gray-200 bg-gradient-to-r from-sky-600 to-indigo-700 text-gray-50 mb-6"},oe=["src"],ae={class:"text-center"},re={class:"text-xl font-semibold"},ie={class:"md:text-sm"},le={props:{profile:{type:Object},useSosmed:{type:Boolean,default:!0}},setup(s){return(n,o)=>(r(),i("main",ne,[e("img",{src:s.profile.avatar,class:"rounded-full mx-auto mb-5",width:"100"},null,8,oe),e("div",ae,[e("h1",re,f(s.profile.name),1),e("h3",ie,f(s.profile.job),1)]),$(n.$slots,"footer")]))}},ce=x('<h1 class="text-center pb-6 text-3xl md:text-4xl lg:text-5xl font-semibold text-indigo-500">Reportar Pago</h1><p class="text-gray-600 text-center lg:px-24"></p><section class="mt-10 md:flex flex-wrap justify-between gap-5"><div class="md:w-5/12 mb-8 md:mb-0 grid place-items-center"><img src="'+te+'" class="w-6/12 md:w-11/12 lg:w-8/12"></div><div class="md:w-5/12 mb-8 md:mb-0"><label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Ingrese Su Cedula</label><div class="relative"><div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"><svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path></svg></div><input type="number" id="search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Cedula" required></div></div></section>',3),de={class:"mt-12",id:"planes"},me=e("h1",{class:"text-center pb-6 text-3xl md:text-4xl lg:text-5xl font-semibold text-indigo-500"},"Planes",-1),ue={class:"md:flex justify-evenly gap-6"},pe={setup(s){return(n,o)=>(r(),i("main",null,[ce,e("section",de,[me,e("div",ue,[(r(!0),i(g,null,h(k(se),(c,t)=>(r(),P(le,{key:t,profile:c},null,8,["profile"]))),128))])])]))}},_e={},ge={class:"text-gray-100"},fe=e("section",{class:"w-full flex flex-col gap-10 md:flex-row md:justify-between lg:justify-center"},[e("section",{class:"md:w-5/12"},[e("strong",null,"Uplink"),e("p",null,"Piritu Edo. Anzo\xE1tegui")])],-1),xe=e("section",{class:"w-full text-center mt-16"}," UP LINK DE VENEZUELA, C.A \xA9 2024 ",-1),he=[fe,xe];function be(s,n){return r(),i("footer",ge,he)}var ve=u(_e,[["render",be]]);const ye={class:"w-full scroll-smooth"},we={class:"lg:min-h-screen section bg-[#1521c5]"},$e={id:"pagos",class:"section bg-gray-50"},ke={id:"about",class:"section bg-gray-100"},Pe={class:"section bg-gradient-to-r from-slate-700 to-indigo-900"},Le={setup(s){return(n,o)=>(r(),i(g,null,[m(O),e("main",ye,[e("section",we,[m(G)]),e("section",$e,[m(pe)]),e("section",ke,[m(ee)]),e("section",Pe,[m(ve)])])],64))}};var Ne=u(Le,[["__scopeId","data-v-d4fb04ee"]]);L(Ne).mount("#app");
