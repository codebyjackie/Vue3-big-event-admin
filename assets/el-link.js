import{n as m,t as y,x as c,y as h,z as b,o as a,A as o,c as r,b as v,C as g,e as l,D as C,a3 as i,G as d,F as f,_ as E,J as B}from"./index.js";const _=m({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},target:{type:String,default:"_self"},icon:{type:y}}),S={click:t=>t instanceof MouseEvent},$=["href","target"],w=c({name:"ElLink"}),L=c({...w,props:_,emits:S,setup(t,{emit:u}){const s=t,n=h("link"),p=b(()=>[n.b(),n.m(s.type),n.is("disabled",s.disabled),n.is("underline",s.underline&&!s.disabled)]);function k(e){s.disabled||u("click",e)}return(e,z)=>(a(),o("a",{class:d(l(p)),href:e.disabled||!e.href?void 0:e.href,target:e.disabled||!e.href?void 0:e.target,onClick:k},[e.icon?(a(),r(l(C),{key:0},{default:v(()=>[(a(),r(g(e.icon)))]),_:1})):i("v-if",!0),e.$slots.default?(a(),o("span",{key:1,class:d(l(n).e("inner"))},[f(e.$slots,"default")],2)):i("v-if",!0),e.$slots.icon?f(e.$slots,"icon",{key:2}):i("v-if",!0)],10,$))}});var P=E(L,[["__file","link.vue"]]);const I=B(P);export{I as E};