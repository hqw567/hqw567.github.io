import{d as i,o as s,c as m,w as c,h as u,f as a,t as f,B as Y,b as r,F as b,v as L,A as k,V as x,a0 as A,an as C,ao as B,y as V,g as w,k as n,ap as F,aq as P,ar as D,x as E}from"./app-B-0E09g4.js";import{o as I}from"./index-CTsk327V.js";import{_ as N}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-BP4tYWCX.js";import"./animation-AmmUjgZD.js";const R=["title"],S=["src","alt","on-error"],T={class:"yun-album-caption yun-title-effects text-$va-c-text inline-flex"},W=i({__name:"YunAlbum",props:{album:{}},setup(_){return(t,e)=>{const o=Y;return s(),m(o,{class:"yun-album-list-item",to:t.album.url},{default:c(()=>[u("figure",{class:"m-10",flex:"~ col",title:t.album.desc},[u("img",{loading:"lazy",class:"yun-album-list-cover",src:t.album.cover,alt:t.album.caption,"on-error":a(I)},null,40,S),u("figcaption",T,f(t.album.caption),1)],8,R)]),_:1},8,["to"])}}}),q={class:"yun-album-list mb-4"},z=i({__name:"YunAlbumList",props:{albums:{}},setup(_){return(t,e)=>{const o=W;return s(),r("div",q,[(s(!0),r(b,null,L(t.albums,l=>(s(),m(o,{key:l.url,album:l},null,8,["album"]))),128))])}}}),H={text:"center",class:"yun-text-light",p:"2"},Q=i({__name:"albums",setup(_){const{t}=k(),e=x(),o=A(e);C([B({"@type":"CollectionPage"})]);const l=V(()=>e.value.albums||[]);return(O,j)=>{const d=P,g=N,y=z,p=w("RouterView"),h=D,v=E;return s(),r(b,null,[n(h,null,{default:c(()=>[n(d),n(p,null,{default:c(({Component:$})=>[(s(),m(F($),null,{"main-header":c(()=>[n(g,{title:a(o)||a(t)("title.album"),icon:a(e).icon||"i-ri-gallery-line",color:a(e).color,"page-title-class":a(e).pageTitleClass},null,8,["title","icon","color","page-title-class"])]),"main-content":c(()=>[u("div",H,f(a(t)("counter.albums",l.value.length)),1),n(y,{albums:l.value},null,8,["albums"]),n(p)]),_:2},1024))]),_:1})]),_:1}),n(v)],64)}}});export{Q as default};