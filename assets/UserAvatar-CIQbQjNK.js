import{_ as U}from"./PageContainer-Hd4ZI94o.js";import{u as y,r as p,o as r,c as i,b as a,d as o,A as E,e as l,g as d,bO as w,E as A,D as S,aS as f,bP as x}from"./index-zc_v5nyy.js";import{_ as b,E as B}from"./_plugin-vue_export-helper-DKCE8a4o.js";import{E as R}from"./el-progress-CdQO9PKY.js";import"./el-message-CpYJPQ9D.js";import"./isEqual-C5yxneQA.js";const h=["src"],C={__name:"UserAvatar",setup(z){const n=y(),t=p(n.user.user_pic),c=p(null),m=u=>{const e=new FileReader;e.onload=s=>{t.value=s.target.result},e.readAsDataURL(u.raw)},v=async()=>{await w(t.value),await n.getUser(),A.success("更换头像成功")};return(u,e)=>{const s=S,g=R,_=B,k=U;return r(),i(k,{title:"更换头像"},{default:a(()=>[o(g,{class:"avatar-uploader","show-file-list":!1,"auto-upload":!1,ref_key:"uploadRef",ref:c,"on-change":m},{default:a(()=>[t.value?(r(),E("img",{key:0,src:t.value,class:"avatar"},null,8,h)):(r(),i(s,{key:1,class:"avatar-uploader-icon"},{default:a(()=>[o(l(f))]),_:1}))]),_:1},512),o(_,{type:"primary",icon:l(f),size:"large",onClick:e[0]||(e[0]=D=>c.value.$el.querySelector("input").click())},{default:a(()=>[d("选择图片")]),_:1},8,["icon"]),o(_,{type:"success",icon:l(x),size:"large",onClick:v},{default:a(()=>[d("上传头像")]),_:1},8,["icon"])]),_:1})}}},L=b(C,[["__scopeId","data-v-1810e5f7"]]);export{L as default};