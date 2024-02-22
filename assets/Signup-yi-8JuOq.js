import{d as j,a6 as L,G as M,i as k,w as F,h as o,o as l,a as e,V as g,ai as A,L as $,M as C,t as _,K as q,ah as K,r as w,q as T,c as d,W as R,F as B,j as G,S as H,aj as W,aa as Z,ak as J,y as O,n as P,b as I,ag as Q,m as U,l as X,z as Y,A as ee}from"./index-S4UG7zPW.js";import{t as se,o as ae,s as V}from"./vee-validate-zod.esm-9Qtbzjhn.js";import{_ as oe}from"./InformationForm.vue_vue_type_script_setup_true_lang-0aGw7hJX.js";import{_ as le}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./AddressSelect.vue_vue_type_script_setup_true_lang-shyFcWnf.js";const te={class:"d-flex flex-column gap-3"},ie={class:"d-flex flex-column gap-2"},ne=e("label",{for:"email",class:"fw-bold"},"電子信箱",-1),re={class:"invalid-feedback d-block"},de={class:"d-flex flex-column gap-2"},ce=e("label",{for:"password",class:"fw-bold"},"密碼",-1),me={class:"invalid-feedback d-block"},ue={class:"d-flex flex-column gap-2"},fe=e("label",{for:"confirm",class:"fw-bold"},"確認密碼",-1),pe={class:"invalid-feedback d-block"},_e=j({__name:"EmailAndPasswordForm",props:{isEmailExistsEmail:{type:String,required:!0}},emits:["emailAndPasswordSubmit"],setup(p,{emit:s}){const c=p,v=s,y=se(ae({email:V().min(1,"請輸入電子信箱").email({message:"請輸入信箱格式"}).default(""),password:V().min(1,"請輸入密碼").min(8,"密碼需至少 8 碼以上").regex(new RegExp(/^(?=.*[a-zA-Z])(?=.*\d).+$/),"密碼需包含數字與英文字母").default(""),confirm:V().min(1,"請再輸入一次密碼").default("")}).refine(f=>f.password===f.confirm,{message:"與密碼不符",path:["confirm"]}).refine(f=>f.email!==c.isEmailExistsEmail,{message:"此信箱已被註冊",path:["email"]})),{values:n,errors:t,defineField:m,meta:u,validate:i}=L({validationSchema:y}),[h,a]=m("email"),[b,z]=m("password"),[S,N]=m("confirm");function D(){const{confirm:f,...r}=n;v("emailAndPasswordSubmit",r)}return M(()=>c.isEmailExistsEmail,async()=>{await i()}),(f,r)=>(l(),k(o(K),{id:"EmailAndPasswordForm",onSubmit:D},{default:F(()=>[e("fieldset",te,[e("div",ie,[ne,g(e("input",$({"onUpdate:modelValue":r[0]||(r[0]=x=>C(h)?h.value=x:null),class:["form-control p-3",{"is-invalid":o(t).email}],type:"text",placeholder:"hello@exsample.com"},o(a),{id:"email"}),null,16),[[A,o(h)]]),e("div",re,_(o(t).email),1)]),e("div",de,[ce,g(e("input",$({"onUpdate:modelValue":r[1]||(r[1]=x=>C(b)?b.value=x:null),class:["form-control p-3",{"is-invalid":o(t).password}],type:"password",placeholder:"請輸入密碼"},o(z),{id:"password"}),null,16),[[A,o(b)]]),e("div",me,_(o(t).password),1)]),e("div",ue,[fe,g(e("input",$({"onUpdate:modelValue":r[2]||(r[2]=x=>C(S)?S.value=x:null),class:["form-control p-3",{"is-invalid":o(t).confirm}],type:"password",placeholder:"請再輸入一次密碼"},o(N),{id:"confirm"}),null,16),[[A,o(S)]]),e("div",pe,_(o(t).confirm),1)])]),q(f.$slots,"formMeta",{formMeta:o(u)})]),_:3}))}}),E=p=>(Y("data-v-3801be81"),p=p(),ee(),p),ve={class:"form-area d-flex flex-column gap-6"},he={class:"d-flex flex-column gap-3"},be={class:"d-flex flex-column gap-2"},xe={class:"fw-bold text-primary"},we=E(()=>e("h1",{class:"m-0"},"立即註冊",-1)),ge={class:"d-flex text-neutral-60 fw-bold gap-3 py-3"},ye={key:1},ke={key:0,class:"form-check"},Ee=["disabled"],Se=E(()=>e("label",{class:"form-check-label fw-bold",for:"AgreeCheck"}," 我已閱讀並同意本網站個資使用規範 ",-1)),Ae={class:"d-flex flex-column gap-3"},$e=["form","disabled"],Ce={key:0},Pe=E(()=>e("span",{class:"spinner-border spinner-border-sm",role:"status"},null,-1)),Ve={key:1},Fe={class:"d-flex align-items-baseline gap-1"},Te=E(()=>e("div",null,"已經有會員了嗎？",-1)),Be=j({__name:"Signup",setup(p){const s=w(1),c=w(!1),v=w(!1),y=w(""),n=w(null);async function t(m){var u;if(n.value={...n.value,...m},c.value=!0,s.value===1){const i=await Z((u=n==null?void 0:n.value)==null?void 0:u.email);i.status&&(i.result.isEmailExists?y.value=m.email:s.value=2)}else try{(await J(n.value)).status&&await O.push("/login")}catch(i){console.log("error",i)}c.value=!1}return(m,u)=>{const i=T("font-awesome-icon"),h=T("router-link");return l(),d("section",ve,[e("div",he,[e("div",be,[g(e("div",xe," 享樂酒店，誠摯歡迎 ",512),[[R,s.value===1]]),we]),e("section",ge,[(l(),d(B,null,G(2,a=>(l(),d(B,{key:`step_${a}`},[e("div",{class:P(["d-flex flex-column align-items-center gap-1",{"text-white":!(s.value===1&&a===2)}])},[e("div",{class:P(["step-circle border d-flex align-items-center justify-content-center",[`${s.value===1&&a===2?"border-neutral-60":"border-primary"}`,{"bg-primary":!(s.value===1&&a===2)}]])},[a===1&&s.value===2?(l(),k(i,{key:0,icon:"fa-solid fa-check",size:"lg",class:"fa"})):(l(),d("span",ye,_(a),1))],2),e("div",null,_(a===1?"輸入信箱及密碼":"填寫基本資料"),1)],2),a===1?(l(),d("hr",{key:0,class:P(["flex-grow-1 border-2 border-neutral-60 my-auto rounded-3 opacity-100",{"border-white":s.value===2}])},null,2)):I("",!0)],64))),64))])]),e("section",null,[(l(),k(W,null,[(l(),k(H(s.value===1?_e:oe),{isEmailExistsEmail:y.value,onEmailAndPasswordSubmit:t,onHandleSubmit:t},{formMeta:F(({formMeta:a})=>[s.value===2?(l(),d("div",ke,[g(e("input",{"onUpdate:modelValue":u[0]||(u[0]=b=>v.value=b),class:"form-check-input",type:"checkbox",id:"AgreeCheck",disabled:!a.touched||!a.valid},null,8,Ee),[[Q,v.value]]),Se])):I("",!0),e("section",Ae,[e("button",{class:"rounded-2 py-3 w-100 baseButton isStylePrimary mt-6",form:s.value===1?"EmailAndPasswordForm":"UserInfoForm",disabled:!a.touched||!a.valid||s.value===2&&!v.value||c.value},[c.value?(l(),d("span",Ce,[Pe,U(" Loading... ")])):(l(),d("span",Ve,_(s.value===1?"下一步":"完成註冊"),1))],8,$e),e("div",Fe,[Te,X(h,{class:"baseButton isStyleText p-0 fw-bold",to:"/login"},{default:F(()=>[U(" 立即登入 ")]),_:1})])])]),_:1},40,["isEmailExistsEmail"]))],1024))])])}}}),De=le(Be,[["__scopeId","data-v-3801be81"]]);export{De as default};
