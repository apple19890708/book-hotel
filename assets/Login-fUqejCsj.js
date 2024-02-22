import{d as te,r as c,a3 as ie,a6 as G,q as O,c as u,a as e,l as t,w as m,h as l,i as W,b as Z,a7 as de,a8 as ne,a9 as re,aa as ce,ab as P,ac as me,ad as ue,ae as fe,o as r,af as b,L as h,V as ve,ag as pe,m as x,ah as R,M as V,F as _e,z as be,A as he}from"./index-LQp6EBFN.js";import{t as z,o as N,s as y}from"./vee-validate-zod.esm-vNkzREmG.js";import{_ as ye}from"./_plugin-vue_export-helper-x3n3nnut.js";const i=k=>(be("data-v-df7a3b78"),k=k(),he(),k),ge={class:"form-area d-flex flex-column gap-6 position-relative z-1"},we=i(()=>e("div",{class:"d-flex flex-column gap-2"},[e("div",{class:"text-primary fw-bold"},"享樂酒店，誠摯歡迎"),e("h1",{class:"m-0"},"立即開始旅程")],-1)),xe={class:"d-flex flex-column gap-3"},ke={class:"d-flex flex-column gap-2"},Ee=i(()=>e("label",{for:"email",class:"fw-bold"},"電子信箱",-1)),Se={class:"d-flex flex-column gap-2"},Fe=i(()=>e("label",{for:"password",class:"fw-bold"},"密碼",-1)),Pe={class:"d-flex justify-content-between"},Ve={class:"form-check"},Ce=i(()=>e("label",{class:"form-check-label fw-bold",for:"remember"}," 記住帳號 ",-1)),Be=i(()=>e("div",null,[e("button",{type:"button",class:"baseButton isStyleText","data-bs-toggle":"modal","data-bs-target":"#forgetPwdModal"}," 忘記密碼？ ")],-1)),Le=["disabled"],Me={key:0},Te=i(()=>e("span",{class:"spinner-border spinner-border-sm",role:"status"},null,-1)),Ie={key:1},Ue={class:"d-flex align-items-baseline gap-2"},Re=i(()=>e("div",null,"沒有會員嗎？",-1)),ze={class:"modal-dialog modal-dialog-centered"},Ne={class:"modal-content"},Ae=i(()=>e("h1",{class:"modal-title fs-5 text-neutral",id:"forgetPwdModalLabel"}," 忘記密碼 ",-1)),De={class:"modal-body text-neutral"},je={class:"d-flex flex-column gap-3"},$e={class:"d-flex flex-column gap-2"},qe=i(()=>e("label",{for:"verifyEmail",class:"fw-bold"},"輸入已註冊的電子信箱",-1)),Ge={class:"modal-footer"},Oe=["disabled"],We={key:0},Ze=i(()=>e("span",{class:"spinner-border spinner-border-sm",role:"status"},null,-1)),He={key:1},Je={class:"modal-body text-neutral"},Ke={class:"d-flex flex-column gap-3"},Qe={class:"d-flex flex-column gap-2"},Xe=i(()=>e("label",{for:"verifyEmail",class:"fw-bold"},"電子信箱",-1)),Ye=["disabled"],ea={class:"d-flex flex-column gap-2"},aa=i(()=>e("label",{for:"code",class:"fw-bold"},"驗證碼",-1)),sa={class:"d-flex"},la=["disabled"],oa={key:1,class:"spinner-border spinner-border-sm",role:"status"},ta={class:"d-flex flex-column gap-2"},ia=i(()=>e("label",{for:"newPassword",class:"fw-bold"},"新密碼",-1)),da={class:"modal-footer"},na=["disabled"],ra={key:0},ca=i(()=>e("span",{class:"spinner-border spinner-border-sm",role:"status"},null,-1)),ma={key:1},ua=te({__name:"Login",setup(k){const E=c(!1),S=c(!1),f=c(""),H=ie(),J=z(N({email:y().min(1,"請輸入電子信箱!").email({message:"請輸入信箱格式"}).default(f.value),password:y().min(1,"請輸入密碼").default("")}));async function K(o){E.value=!0,await H.login(o),E.value=!1,Q(S.value)}function Q(o){o?de("email",f.value):ne("email")}function X(){f.value=re("email")||"",f.value&&(S.value=!0)}X();const g=c(1),d=c(!1),w=c(!1),C=c(null),A=c(null),B=c(),L=c(),D=z(N({verifyEmail:y().email({message:"請輸入信箱格式"}).default(""),newPassword:y().min(1,"請輸入新密碼").min(8,"密碼需至少 8 碼以上").regex(new RegExp(/^(?=.*[a-zA-Z])(?=.*\d).+$/),"密碼需包含數字與英文字母").default(""),code:y().min(1,"請輸入驗證碼").default("")})),j=z(N({verifyEmail:y().min(1,"請輸入電子信箱").email({message:"請輸入信箱格式"}).default("")}));async function Y(o){d.value=!0,await ce(o.verifyEmail).then(async s=>{s.result.isEmailExists?await $(o.verifyEmail):P.fire({icon:"error",title:"驗證失敗",text:"此 Email 尚未註冊過",customClass:{confirmButton:"baseButton isStyleSecondary"}})}).catch(()=>{d.value=!1}).finally(()=>{d.value=!1})}async function $(o,s=!1){s&&(w.value=!0),o?await me(o).then(()=>{g.value=2,v.value=o,P.fire({icon:"success",title:"驗證成功",text:"已寄送驗證碼至您的 Email"})}).catch(()=>{d.value=!0,s&&(w.value=!1)}).finally(()=>{d.value=!1,s&&(w.value=!1)}):(P.fire({icon:"error",title:"錯誤訊息",text:"Email 無法驗證，請重新填寫",customClass:{confirmButton:"baseButton isStyleSecondary"}}),g.value=1)}async function ee(o){d.value=!0;const s={email:o.verifyEmail,code:o.code,newPassword:o.newPassword};await ue(s).then(()=>{P.fire({icon:"success",title:"修改成功",text:"密碼已修改，請使用新密碼完成登入"}),F(),C.value&&(A.value=fe.getOrCreateInstance(C.value),A.value.hide())}).catch(()=>{d.value=!1}).finally(()=>{d.value=!1})}const{resetForm:ae,defineField:se}=G({validationSchema:j}),{resetForm:le,defineField:M}=G({validationSchema:D}),[T]=se("verifyEmail"),[v]=M("verifyEmail"),[I]=M("code"),[U]=M("newPassword");function F(){g.value=1,le(),ae(),B.value&&B.value.resetForm(),L.value&&L.value.resetForm()}return(o,s)=>{const p=O("ErrorMessage"),oe=O("router-link");return r(),u("div",null,[e("section",ge,[we,t(l(R),{"validation-schema":l(J),onSubmit:K,id:"LoginForm",class:"position-relative z-1"},{default:m(({meta:_})=>[e("fieldset",xe,[e("div",ke,[Ee,t(l(b),{modelValue:f.value,"onUpdate:modelValue":s[0]||(s[0]=a=>f.value=a),name:"email"},{default:m(({field:a,errors:n})=>[e("input",h({class:["form-control p-3",{"is-invalid":n.length}],type:"text",placeholder:"hello@exsample.com"},a,{id:"email"}),null,16)]),_:1},8,["modelValue"]),t(p,{name:"email",class:"invalid-feedback"})]),e("div",Se,[Fe,t(l(b),{name:"password"},{default:m(({field:a,errors:n})=>[e("input",h({class:["form-control p-3",{"is-invalid":n.length}],type:"password",placeholder:"請輸入密碼"},a,{id:"password"}),null,16)]),_:1}),t(p,{name:"password",class:"invalid-feedback"})]),e("div",Pe,[e("div",Ve,[ve(e("input",{"onUpdate:modelValue":s[1]||(s[1]=a=>S.value=a),class:"form-check-input",type:"checkbox",id:"remember"},null,512),[[pe,S.value]]),Ce]),Be])]),e("button",{class:"rounded-2 py-3 w-100 baseButton isStylePrimary mt-6",form:"LoginForm",disabled:!_.valid||E.value},[E.value?(r(),u("span",Me,[Te,x(" Loading... ")])):(r(),u("span",Ie," 登入 "))],8,Le)]),_:1},8,["validation-schema"]),e("div",Ue,[Re,t(oe,{class:"baseButton isStyleText p-0 fw-bold",to:"/signup"},{default:m(()=>[x(" 前往註冊 ")]),_:1})])]),e("div",{class:"modal fade",id:"forgetPwdModal",tabindex:"-1","aria-labelledby":"forgetPwdModalLabel","aria-hidden":"true",ref_key:"modalRef",ref:C},[e("div",ze,[e("div",Ne,[e("div",{class:"modal-header"},[Ae,e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:F})]),g.value===1?(r(),W(l(R),{key:0,"validation-schema":l(j),onSubmit:Y,ref_key:"verifyEmailForm",ref:B,id:"verifyEmailForm"},{default:m(({meta:_})=>[e("div",De,[e("fieldset",je,[e("div",$e,[qe,t(l(b),{modelValue:l(T),"onUpdate:modelValue":s[2]||(s[2]=a=>V(T)?T.value=a:null),name:"verifyEmail"},{default:m(({field:a,errors:n})=>[e("input",h({class:["form-control p-3",{"is-invalid":n.length}],type:"text",placeholder:"hello@exsample.com"},a,{id:"verifyEmail"}),null,16)]),_:1},8,["modelValue"]),t(p,{name:"verifyEmail",class:"invalid-feedback"})])])]),e("div",Ge,[e("button",{type:"button",class:"rounded-2 baseButton isStyleSecondary",onClick:F,"data-bs-dismiss":"modal"}," 關閉 "),e("button",{class:"rounded-2 baseButton isStylePrimary",form:"verifyEmailForm",disabled:!_||!_.valid||d.value},[d.value?(r(),u("span",We,[Ze,x(" Loading... ")])):(r(),u("span",He," 驗證 "))],8,Oe)])]),_:1},8,["validation-schema"])):Z("",!0),g.value===2?(r(),W(l(R),{key:1,"validation-schema":l(D),onSubmit:ee,id:"forgetPwdForm",ref_key:"forgetPwdForm",ref:L},{default:m(({meta:_})=>[e("div",Je,[e("fieldset",Ke,[e("div",Qe,[Xe,t(l(b),{modelValue:l(v),"onUpdate:modelValue":s[3]||(s[3]=a=>V(v)?v.value=a:null),name:"verifyEmail"},{default:m(({field:a,errors:n})=>{var q;return[e("input",h({class:["form-control p-3",{"is-invalid":n.length}],type:"text",placeholder:"hello@exsample.com"},a,{id:"verifyEmail",disabled:!!((q=l(v))!=null&&q.length)}),null,16,Ye)]}),_:1},8,["modelValue"]),t(p,{name:"verifyEmail",class:"invalid-feedback"})]),e("div",ea,[aa,e("div",sa,[t(l(b),{modelValue:l(I),"onUpdate:modelValue":s[4]||(s[4]=a=>V(I)?I.value=a:null),name:"code"},{default:m(({field:a,errors:n})=>[e("input",h({class:["form-control p-3",{"is-invalid":n.length}],type:"text",placeholder:"請輸入驗證碼"},a,{id:"code"}),null,16)]),_:1},8,["modelValue"]),e("button",{class:"baseButton isStyleText ms-2",onClick:s[5]||(s[5]=a=>$(l(v),!0)),disabled:w.value,style:{width:"82px"}},[w.value?(r(),u("span",oa)):(r(),u(_e,{key:0},[x("重寄驗證碼")],64))],8,la)]),t(p,{name:"code",class:"invalid-feedback"})]),e("div",ta,[ia,t(l(b),{modelValue:l(U),"onUpdate:modelValue":s[6]||(s[6]=a=>V(U)?U.value=a:null),name:"newPassword"},{default:m(({field:a,errors:n})=>[e("input",h({class:["form-control p-3",{"is-invalid":n.length}],type:"password",placeholder:"請輸入密碼"},a,{id:"newPassword"}),null,16)]),_:1},8,["modelValue"]),t(p,{name:"newPassword",class:"invalid-feedback"})])])]),e("div",da,[e("button",{type:"button",class:"rounded-2 baseButton isStyleSecondary","data-bs-dismiss":"modal",onClick:F}," 關閉 "),e("button",{class:"rounded-2 baseButton isStylePrimary",form:"forgetPwdForm",disabled:!_.valid||d.value},[d.value?(r(),u("span",ra,[ca,x(" Loading... ")])):(r(),u("span",ma," 送出 "))],8,na)])]),_:1},8,["validation-schema"])):Z("",!0)])])],512)])}}}),_a=ye(ua,[["__scopeId","data-v-df7a3b78"]]);export{_a as default};