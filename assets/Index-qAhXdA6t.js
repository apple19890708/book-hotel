import{_ as I}from"./Index.vue_vue_type_script_setup_true_lang-vSjfX5vL.js";import{S as v}from"./SwiperImages-hQ0bwnXx.js";import{B as S}from"./BasicInformation-9bActu-V.js";import{c as E}from"./formatTransform-8BW5CwT8.js";import{d as C,r as n,v as T,e as L,f as U,g as $,q as j,i as H,w as y,x as R,y as W,o as i,c as u,a as e,l as r,F as z,j as A,t as f,h as F,b as N,z as V,A as q}from"./index-S4UG7zPW.js";import{_ as w,o as D}from"./getScrollTop-zLrWufuD.js";import{_ as M}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./BaseButton.vue_vue_type_style_index_0_lang-dEw0wdzt.js";import"./autoplay-J5XVYKaG.js";const x=o=>(V("data-v-626674bf"),o=o(),q(),o),P={key:0,class:"room-index-page"},G=x(()=>e("div",{class:"d-flex flex-column flex-lg-row align-items-center justify-content-center gap-6 gap-lg-10 position-absolute top-0 w-100 h-100"},[e("div",{class:"d-flex gap-2 flex-column align-items-center align-items-lg-start text-primary pb-lg-6 hotel-name"},[e("h2",{class:"m-0"},"享樂酒店"),e("h5",{class:"m-0"},"Enjoyment Luxury Hotel"),e("div",{class:"vertical-line d-lg-none"})]),e("h1",{class:"m-0 text-white"},"客房旅宿")],-1)),J={class:"room-intro-list container-lg d-flex flex-column gap-4 gap-lg-7 align-items-center py-6 py-lg-11"},K=x(()=>e("div",{class:"title mb-3 mb-lg-5"},[e("h6",{class:"mb-2 mb-lg-3"},"房型選擇"),e("h1",{class:"text-primary m-0"},"各種房型，任您挑選")],-1)),O={class:"swiper-images-div"},Q={class:"room-intro-card bg-white p-3 p-lg-6"},X={class:"mb-2 text-black"},Y={class:"mt-4 mt-lg-6 text-primary d-flex justify-content-between align-items-center room-intro-card-footer"},Z={class:"m-0"},ee=C({__name:"Index",setup(o){const l=n([]),b=T(()=>["https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/banner.png?raw=true",...l.value.map(_=>_.imageUrl)]);async function B(){try{l.value=await R()}catch{await W.push("/")}}B();const g=n(0),c=n(null),m=n(0),a=n("styleBgTransparent"),d=()=>{g.value=document.body.clientWidth},p=()=>{c.value&&(m.value=c.value.clientHeight)},h=()=>{const s=D();g.value>991?m.value<s+120?a.value="styleBgTransparentScroll":a.value="styleBgTransparent":m.value<s+72?a.value="styleBgTransparentScroll":a.value="styleBgTransparent"};return L(()=>{d(),window.addEventListener("resize",w(()=>{d(),p()},200)),window.addEventListener("scroll",w(()=>{h()},200))}),U(()=>{p()}),$(()=>{window.removeEventListener("resize",()=>{d(),p()}),window.removeEventListener("scroll",h)}),(s,_)=>{const k=j("font-awesome-icon");return i(),H(I,{type:a.value},{default:y(()=>[l.value.length?(i(),u("section",P,[e("section",{ref_key:"sectionRef",ref:c,class:"d-flex align-items-center justify-content-center position-relative main-banner"},[r(v,{class:"h-100 w-100","is-mask":!0,"is-navigation":!1,"is-autoplay":!0,"images-url":b.value},{content:y(()=>[G]),_:1},8,["images-url"])],512),e("section",J,[K,(i(!0),u(z,null,A(l.value,t=>(i(),u("div",{key:`room_${t._id}`,class:"room-intro d-flex flex-column flex-lg-row"},[e("div",O,[r(v,{class:"h-100 m-0","is-mask":!1,"is-navigation":!0,"is-autoplay":!1,"images-url":[t.imageUrl,...t.imageUrlList]},null,8,["images-url"])]),e("div",Q,[e("h2",X,f(t.name),1),e("div",null,f(t.description),1),r(S,{class:"py-4 py-lg-6 basic-information","is-hide-title":!0,"area-info":t.areaInfo,"max-people":t.maxPeople,"bed-info":t.bedInfo},null,8,["area-info","max-people","bed-info"]),e("div",Y,[e("h5",Z,f(F(E)(t.price)),1),r(k,{class:"fs-5",icon:"fa-solid fa-arrow-right",onClick:te=>s.$router.push(`/rooms/${t._id}`)},null,8,["onClick"])])])]))),128))])])):N("",!0)]),_:1},8,["type"])}}}),de=M(ee,[["__scopeId","data-v-626674bf"]]);export{de as default};
