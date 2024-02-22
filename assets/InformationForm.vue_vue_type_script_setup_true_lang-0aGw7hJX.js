import{d as Z,_ as q,a6 as H,G as J,i as O,w as Q,h as e,o as _,a,V as r,ai as m,L as n,M as p,t as u,c as S,l as w,K as X,ah as Y}from"./index-S4UG7zPW.js";import{o as x,s as c,n as I,t as ee}from"./vee-validate-zod.esm-9Qtbzjhn.js";import{_ as se,a as ae}from"./AddressSelect.vue_vue_type_script_setup_true_lang-shyFcWnf.js";const le={class:"d-flex flex-column gap-3"},te={class:"d-flex flex-column gap-2"},oe=a("label",{for:"name",class:"fw-bold"},"姓名",-1),de={class:"invalid-feedback d-block"},ie={class:"d-flex flex-column gap-2"},ne=a("label",{for:"phone",class:"fw-bold"},"手機號碼",-1),ce={class:"invalid-feedback d-block"},re={key:0,class:"d-flex flex-column gap-2"},me=a("label",{for:"email",class:"fw-bold"},"電子信箱",-1),pe={class:"invalid-feedback d-block"},ue={key:1,class:"d-flex flex-column gap-2"},fe=a("label",{for:"birthday",class:"fw-bold"},"生日",-1),he={class:"d-flex flex-column gap-3"},ve=a("label",{for:"addressDetail",class:"fw-bold"},"地址",-1),be={class:"invalid-feedback d-block"},ke=Z({__name:"InformationForm",props:{userInformation:{}},emits:["handleSubmit"],setup(V,{expose:T,emit:A}){const y=V,{userInformation:s}=y,U=A,g=q().name||"",F=x({name:c().min(1,"請輸入姓名").regex(new RegExp(/^[a-zA-Z\u4e00-\u9fa5\s]+$/),"請輸入您的中英文姓名，可包含空白，但不能包含特殊字元").default((s==null?void 0:s.name)||""),phone:c().min(1,"請輸入手機號碼").regex(new RegExp(/^\d+$/),"請輸入數字").startsWith("09",{message:"請輸入正確的手機號碼格式"}).length(10,{message:"請輸入正確的手機號碼格式"}).default((s==null?void 0:s.phone)||""),zipcode:I().default((s==null?void 0:s.address.zipcode)||800),addressDetail:c().min(1,"請輸入詳細地址").default((s==null?void 0:s.address.detail)||"")}),$=x({email:c().min(1,"請輸入電子信箱").email({message:"請輸入信箱格式"}).default((s==null?void 0:s.email)||"")}),B=x({birthday:c().min(1,"請選擇生日").default((s==null?void 0:s.birthday)||"1990/8/15")}),M=ee(F.merge(g==="rooms-reservation"?$:B)),{values:R,errors:o,defineField:i,meta:k,setValues:E}=H({validationSchema:M});function N(){const{zipcode:d,addressDetail:l,...t}=R,W={...t,address:{zipcode:d,detail:l}};U("handleSubmit",W)}const[f,C]=i("name"),[h,j]=i("phone"),[v,G]=i("email"),[D,K]=i("birthday"),[z,L]=i("zipcode"),[b,P]=i("addressDetail");return J(()=>y.userInformation,d=>{if(d){const{zipcode:l,detail:t}=d.address;E({zipcode:l,addressDetail:t,...d})}},{immediate:!0,deep:!0}),T({meta:k}),(d,l)=>(_(),O(e(Y),{onSubmit:N,id:"UserInfoForm"},{default:Q(()=>[a("fieldset",le,[a("div",te,[oe,r(a("input",n({"onUpdate:modelValue":l[0]||(l[0]=t=>p(f)?f.value=t:null),class:["form-control p-3",{"is-invalid":e(o).name}],type:"text",placeholder:"請輸入姓名"},e(C),{id:"name"}),null,16),[[m,e(f),void 0,{trim:!0}]]),a("div",de,u(e(o).name),1)]),a("div",ie,[ne,r(a("input",n({"onUpdate:modelValue":l[1]||(l[1]=t=>p(h)?h.value=t:null),class:["form-control p-3",{"is-invalid":e(o).phone}],type:"text",placeholder:"請輸入手機號碼"},e(j),{id:"phone"}),null,16),[[m,e(h)]]),a("div",ce,u(e(o).phone),1)]),e(g)==="rooms-reservation"?(_(),S("div",re,[me,r(a("input",n({"onUpdate:modelValue":l[2]||(l[2]=t=>p(v)?v.value=t:null),class:["form-control p-3",{"is-invalid":e(o).email}],type:"text",placeholder:"請輸入電子信箱"},e(G),{id:"email"}),null,16),[[m,e(v)]]),a("div",pe,u(e(o).email),1)])):(_(),S("div",ue,[fe,w(se,n({"model-value":e(D),"onUpdate:modelValue":l[3]||(l[3]=t=>D.value=t)},e(K)),null,16,["model-value"])])),a("div",he,[ve,w(ae,n({"model-value":e(z),"onUpdate:modelValue":l[4]||(l[4]=t=>z.value=t)},e(L)),null,16,["model-value"]),r(a("input",n({"onUpdate:modelValue":l[5]||(l[5]=t=>p(b)?b.value=t:null),class:["form-control p-3",{"is-invalid":e(o).addressDetail}],type:"text",placeholder:"請輸入詳細地址"},e(P),{id:"addressDetail"}),null,16),[[m,e(b)]]),a("div",be,u(e(o).addressDetail),1)])]),X(d.$slots,"formMeta",{formMeta:e(k)})]),_:3}))}});export{ke as _};
