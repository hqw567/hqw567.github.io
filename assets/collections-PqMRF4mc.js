import{l as k,d as u,g as p,o as e,c as n,w as t,i as h,b as i,r as g,k as w,ap as C,h as b,F as d,v,f as y}from"./app-B-0E09g4.js";import{_ as B}from"./YunSidebar.vue_vue_type_style_index_0_lang-0kk-TrVb.js";function R(){return{collections:k([{id:"i-and-she",name:"I and She",description:"Love letters from the past"},{id:"love-and-peace",name:"爱与和平",description:"Recipes for a good life"}])}}const V=u({__name:"YunCollectionItem",props:{collection:{}},setup(a){return(s,o)=>{const l=p("RouterLink");return e(),n(l,{class:"inline-flex rounded p-4 h-50 w-40 bg-gray-100 dark:bg-dark-300 shadow",to:`/collections/${s.collection.id}`},{default:t(()=>o[0]||(o[0]=[h(" Book ")])),_:1},8,["to"])}}}),$={flex:"~ wrap",gap:"4"},I=u({__name:"collections",setup(a){const{collections:s}=R();return(o,l)=>{const r=B,_=V,m=p("RouterView");return e(),i(d,null,[o.$slots["sidebar-child"]?(e(),n(r,{key:0},{default:t(()=>[g(o.$slots,"sidebar-child")]),_:3})):(e(),n(r,{key:1})),w(m,null,{default:t(({Component:f})=>[(e(),n(C(f),null,{default:t(()=>[b("div",$,[(e(!0),i(d,null,v(y(s),c=>(e(),n(_,{key:c.id,collection:c},null,8,["collection"]))),128))])]),_:2},1024))]),_:1})],64)}}});export{I as default};