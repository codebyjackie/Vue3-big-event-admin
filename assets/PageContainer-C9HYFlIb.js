import{n as y,v as h,x as _,y as m,o as r,A as d,G as o,e as a,F as t,g as p,am as l,a3 as u,h as n,B as v,_ as g,J as S,c as C,b as f}from"./index-BD_vPOIF.js";import{_ as $}from"./_plugin-vue_export-helper-sP4-tHla.js";const b=y({header:{type:String,default:""},footer:{type:String,default:""},bodyStyle:{type:h([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),w=_({name:"ElCard"}),k=_({...w,props:b,setup(i){const s=m("card");return(e,c)=>(r(),d("div",{class:o([a(s).b(),a(s).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(r(),d("div",{key:0,class:o(a(s).e("header"))},[t(e.$slots,"header",{},()=>[p(l(e.header),1)])],2)):u("v-if",!0),n("div",{class:o([a(s).e("body"),e.bodyClass]),style:v(e.bodyStyle)},[t(e.$slots,"default")],6),e.$slots.footer||e.footer?(r(),d("div",{key:1,class:o(a(s).e("footer"))},[t(e.$slots,"footer",{},()=>[p(l(e.footer),1)])],2)):u("v-if",!0)],2))}});var B=g(k,[["__file","card.vue"]]);const N=S(B),P={class:"header"},E={class:"extra"},V={__name:"PageContainer",props:{title:{required:!0,type:String}},setup(i){return(s,e)=>{const c=N;return r(),C(c,{class:"page-container"},{header:f(()=>[n("div",P,[n("span",null,l(i.title),1),n("div",E,[t(s.$slots,"extra",{},void 0,!0)])])]),default:f(()=>[t(s.$slots,"default",{},void 0,!0)]),_:3})}}},I=$(V,[["__scopeId","data-v-647d6c34"]]);export{I as _};