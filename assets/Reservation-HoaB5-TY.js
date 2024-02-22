import{_ as U}from"./Index.vue_vue_type_script_setup_true_lang-GgEuWHZp.js";import{B as E}from"./BasicInformation-Z1-ZhMEB.js";import{c as I,_ as D,d as w}from"./handleDate-c5uJV3cC.js";import{_ as H}from"./InformationForm.vue_vue_type_script_setup_true_lang-Bn6jgT8e.js";import{d as q,r as p,_ as A,a2 as G,G as M,v as $,a3 as Y,s as J,q as B,i as K,w as S,o as c,c as d,a as t,l as r,m as u,t as l,h as i,b as v,F as C,$ as Q}from"./index-LQp6EBFN.js";import{a as V}from"./orders-iCKlx5fV.js";import{c as f}from"./formatTransform-8BW5CwT8.js";import{u as W}from"./booking-Rw9c1gcj.js";import"./BaseButton.vue_vue_type_style_index_0_lang-C5nvT8bo.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./vee-validate-zod.esm-vNkzREmG.js";import"./AddressSelect.vue_vue_type_script_setup_true_lang-vMTxKcyG.js";const X={key:0,class:"text-neutral"},Z={class:"container-lg py-6 py-lg-11"},tt={class:"d-flex align-items-center mb-6"},et={class:"d-flex justify-content-center align-items-center me-2",style:{width:"40px",height:"40px"}},st=t("h3",{class:"mb-0"},"確認訂房資訊",-1),ot={class:"row gy-6 gx-xl-9"},at={class:"col-lg-7"},nt={class:"list-group list-group-flush d-grid gap-6 gap-lg-7"},lt={class:"list-group-item bg-transparent text-neutral px-0 pt-0 pb-6 pb-lg-7"},it=t("h4",{class:"mb-5 mb-lg-6"},"訂房資訊",-1),ct={class:"d-grid gap-4"},rt={class:"row gx-3 align-items-center"},dt={class:"col"},ut={class:"d-grid gap-2"},_t=t("div",{class:"d-flex align-items-center"},[t("div",{class:"customize-vr"}),t("strong",null,"選擇房型")],-1),mt={class:"row gx-3 align-items-center"},gt={class:"col"},pt={class:"d-grid gap-2"},vt=t("div",{class:"d-flex align-items-center"},[t("div",{class:"customize-vr"}),t("strong",null,"訂房日期")],-1),ft={class:"d-grid gap-2"},ht={class:"col-auto"},bt={class:"row gx-3 align-items-center"},xt={class:"col"},yt={class:"d-grid gap-2"},kt=t("div",{class:"d-flex align-items-center"},[t("div",{class:"customize-vr"}),t("strong",null,"房客人數")],-1),It={class:"col-auto"},Dt={class:"list-group-item bg-transparent text-neutral px-0 pt-0 pb-6 pb-lg-7"},wt={class:"list-group-item bg-transparent text-neutral p-0"},$t=t("h4",{class:"mb-5 mb-lg-6"},"房間資訊",-1),Bt={class:"d-grid gap-4"},St={key:0},Ct={class:"col-lg"},Rt={class:"card rounded-3 border-0 text-neutral roomPositionSticky"},Tt={class:"card-body p-3 p-lg-6 d-grid gap-3 gap-lg-6"},Ft=["src","alt"],Nt={class:"d-grid gap-3 gap-lg-4"},Ot=t("h4",{class:"mb-0"},"價格詳情",-1),Pt={class:"d-grid",style:{gap:"0.75rem"}},zt={class:"row g-0"},jt={key:0,class:"col d-flex align-items-center"},Lt={key:0,class:"ms-2 text-body"},Ut={class:"col-auto"},Et={class:"row g-0"},Ht=t("div",{class:"col"},"住宿折扣",-1),qt={class:"col-auto text-primary"},At=t("div",{class:"bg-neutral-40",style:{height:"1px"}},null,-1),Gt={class:"row g-0"},Mt=t("div",{class:"col"},[t("strong",null,"總價")],-1),Yt={class:"col-auto"},Jt=["disabled"],Kt=t("span",{class:"spinner-border spinner-border-sm me-1",role:"status","aria-hidden":"true"},null,-1),ce=q({__name:"Reservation",setup(Qt){const a=p(null),o=p(null),m=p(!1),R=A(),h=G(),T=W(),{booking:g,clearBookingData:F}=T;M(()=>R.params.id,async e=>{if(e){if(g.id!==e){await h.push(`/rooms/${e}`);return}a.value=await Q(e),o.value={roomId:e,peopleNum:g.peopleNum,userInfo:{address:{zipcode:800,detail:""},name:"",phone:"",email:""},...N()}}},{immediate:!0});const N=()=>{const e=y(new Date(g.startDate)),s=y(new Date(g.endDate));return{checkInDate:e,checkOutDate:s}},y=e=>{const s=e.getFullYear(),n=`0${e.getMonth()+1}`.slice(-2),_=`0${e.getDate()}`.slice(-2);return`${s}-${n}-${_}`},k=$(()=>{let e=0,s=0;const{value:n}=o;if(n){const{checkInDate:_,checkOutDate:x}=n;e=+w(_,x,!0)}return a.value&&(s=a.value.price),e*s}),O=Y(),{userInformation:P}=J(O);async function z(){const{value:e}=P,{userInfo:s}=o.value;s&&e&&Object.keys(s).forEach(n=>s[n]=e[n])}async function j(e){m.value=!0,o.value&&(o.value.userInfo=e),await V(o.value),setTimeout(()=>m.value=!1,1e3),F()}const b=p(null),L=$(()=>{const{value:e}=b;console.log(e);let s=(e==null?void 0:e.meta)&&!1;if(e!=null&&e.meta){const{meta:n}=b.value;s=!n.valid}return s});return(e,s)=>{const n=B("font-awesome-icon"),_=B("RouterLink");return c(),K(U,null,{default:S(()=>[o.value&&a.value?(c(),d("section",X,[t("div",Z,[t("div",tt,[t("div",et,[r(_,{to:`/rooms/${o.value.roomId}`,class:"flex-shrink-0 baseButton isStyleText text-neutral fs-6"},{default:S(()=>[r(n,{icon:"fa-solid fa-angle-left"})]),_:1},8,["to"])]),st]),t("div",ot,[t("div",at,[t("ul",nt,[t("li",lt,[it,t("div",ct,[t("div",rt,[t("div",dt,[t("div",ut,[_t,u(" "+l(a.value.name),1)])])]),t("div",mt,[t("div",gt,[t("div",pt,[vt,t("section",ft,[t("span",null,"入住："+l(i(I)(o.value.checkInDate)),1),t("span",null,"退房："+l(i(I)(o.value.checkOutDate)),1)])])]),t("div",ht,[t("button",{type:"button",class:"baseButton isStyleText text-neutral",onClick:s[0]||(s[0]=x=>i(h).push(`/rooms/${o.value.roomId}`))}," 編輯 ")])]),t("div",bt,[t("div",xt,[t("div",yt,[kt,t("section",null,l(o.value.peopleNum)+" 人",1)])]),t("div",It,[t("button",{type:"button",class:"baseButton isStyleText p-0 border-0 text-neutral",onClick:s[1]||(s[1]=x=>i(h).push(`/rooms/${o.value.roomId}`))}," 編輯 ")])])])]),t("li",Dt,[t("h4",{class:"mb-5 mb-lg-6 d-flex align-items-center justify-content-between"},[u(" 訂房人資訊 "),t("button",{type:"button",class:"baseButton isStyleText d-none d-lg-block p-0 border-0",onClick:z}," 套用會員資料 ")]),r(H,{ref_key:"informationFormComponentRef",ref:b,userInformation:o.value.userInfo,onHandleSubmit:j},null,8,["userInformation"])]),t("li",wt,[$t,t("div",Bt,[a.value?(c(),d("section",St,[r(E,{areaInfo:a.value.areaInfo,bedInfo:a.value.bedInfo,maxPeople:a.value.maxPeople},null,8,["areaInfo","bedInfo","maxPeople"])])):v("",!0),t("section",null,[r(D,{info:a.value.facilityInfo,title:"房內設備"},null,8,["info"])]),t("section",null,[r(D,{info:a.value.amenityInfo,title:"備品提供"},null,8,["info"])])])])])]),t("div",Ct,[t("div",Rt,[t("div",Tt,[t("img",{class:"rounded roomImgHeight",src:a.value.imageUrl,alt:a.value.name},null,8,Ft),t("div",Nt,[Ot,t("div",Pt,[t("div",zt,[a.value.price?(c(),d("div",jt,[u(l(i(f)(a.value.price))+" ",1),o.value?(c(),d("div",Lt,[r(n,{icon:"fa-solid fa-xmark",class:"me-1"}),u(" "+l(i(w)(o.value.checkInDate,o.value.checkOutDate)),1)])):v("",!0)])):v("",!0),t("div",Ut,l(i(f)(k.value)),1)]),t("div",Et,[Ht,t("div",qt,l(i(f)(0)),1)])]),At,t("div",Gt,[Mt,t("div",Yt,[t("strong",null,l(i(f)(k.value)),1)])])]),t("button",{form:"UserInfoForm",class:"baseButton isStylePrimary d-block",disabled:L.value||m.value},[m.value?(c(),d(C,{key:0},[Kt,u(" Loading... ")],64)):(c(),d(C,{key:1},[u("確認訂房")],64))],8,Jt)])])])])])])):v("",!0)]),_:1})}}});export{ce as default};