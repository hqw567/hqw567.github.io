const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/YunGallery-Bf_E4vSx.js","assets/app-B-0E09g4.js","assets/app-CZuO60_q.css","assets/decrypt-XVW2pbJi.js","assets/YunPageHeader.vue_vue_type_script_setup_true_lang-BP4tYWCX.js"])))=>i.map(i=>d[i]);
import{d as b,g as x,o as s,c as d,l as g,b as y,h as a,a9 as $,ab as D,z as G,am as A,k as l,u as E,A as Y,V as O,a0 as R,an as S,ao as T,y as B,G as F,aD as L,w as _,ap as z,f as o,t as I,F as N,aq as j,ar as K,x as M,aE as W}from"./app-B-0E09g4.js";import{u as q}from"./decrypt-XVW2pbJi.js";import{_ as H}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-BP4tYWCX.js";const J=b({__name:"YunGallery",props:{photos:{}},setup(m){return(r,n)=>{const e=x("VAGallery");return s(),d(e,{photos:r.photos},null,8,["photos"])}}}),U={key:0,"w-full":"","pt-14":"","pb-10":""},Q={class:"decrypt-password-container w-full sm:w-1/2","flex-center":"","m-auto":"",relative:""},X={key:1},Z=b({__name:"ValaxyGalleryDecrypt",props:{encryptedPhotos:{}},setup(m){const r=m,n=g(""),e=g(""),c=g(!1),{decrypt:i}=q();async function f(){const u=r.encryptedPhotos;if(u)try{const t=await i(n.value,u);e.value=t||""}catch{c.value=!0}}function h(){e.value="",n.value=""}return(u,t)=>{const v=J;return s(),y("div",null,[e.value?(s(),y("div",X,[l(v,{photos:JSON.parse(e.value)},null,8,["photos"]),a("div",{"w-full":"","text-center":"","mt-8":""},[a("button",{"m-auto":"",class:"btn","font-bold":"",onClick:h}," Encrypt Again ")])])):(s(),y("div",U,[a("div",Q,[$(a("input",{"onUpdate:modelValue":t[0]||(t[0]=p=>n.value=p),"w-full":"",border:"","pl-5":"","pr-11":"","py-3":"",rounded:"","hover:shadow":"",transition:"",type:"password",placeholder:"Enter password",class:G(c.value&&"border-red"),onInput:t[1]||(t[1]=p=>c.value=!1),onKeyup:A(f,["enter"])},null,34),[[D,n.value]]),a("div",{"cursor-pointer":"",absolute:"","text-2xl":"","i-ri-arrow-right-circle-line":"","right-3":"","text-gray":"","hover:text-black":"",onClick:f})])]))])}}}),ee={text:"center",class:"yun-text-light",p:"2"},te={class:"page-action",text:"center"},oe=["title"],ne=b({__name:"gallery",setup(m){const r=E(),{t:n}=Y(),e=O(),c=R(e);S([T({"@type":"CollectionPage"})]);const i=B(()=>e.value.photos||[]),h=F().value.addons["valaxy-addon-lightgallery"]?L(()=>W(()=>import("./YunGallery-Bf_E4vSx.js"),__vite__mapDeps([0,1,2,3,4]))):()=>null;return(u,t)=>{const v=j,p=H,C=Z,w=x("RouterView"),k=K,P=M;return s(),y(N,null,[l(k,null,{default:_(()=>[l(v),l(w,null,{default:_(({Component:V})=>[(s(),d(z(V),null,{"main-header":_(()=>[l(p,{title:o(c)||o(n)("title.gallery"),icon:o(e).icon||"i-ri-gallery-line",color:o(e).color,"page-title-class":o(e).pageTitleClass},null,8,["title","icon","color","page-title-class"])]),"main-content":_(()=>[a("div",ee,I(o(n)("counter.photos",i.value.length)),1),a("div",te,[a("a",{class:"yun-icon-btn",title:o(n)("accessibility.back"),onClick:t[0]||(t[0]=()=>o(r).back())},t[1]||(t[1]=[a("div",{"i-ri-arrow-go-back-line":""},null,-1)]),8,oe)]),o(e).encryptedPhotos?(s(),d(C,{key:0,"encrypted-photos":o(e).encryptedPhotos},null,8,["encrypted-photos"])):(s(),d(o(h),{key:1,photos:i.value},null,8,["photos"])),l(w)]),_:2},1024))]),_:1})]),_:1}),l(P)],64)}}}),re=Object.freeze(Object.defineProperty({__proto__:null,default:ne},Symbol.toStringTag,{value:"Module"}));export{J as _,re as g};
