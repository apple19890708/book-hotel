function l(e,n){let o=0;return(...d)=>{const t=Date.now();t-o<n||(o=t,e(...d))}}function c(){let e=0;return typeof window.pageYOffset<"u"?e=window.pageYOffset:typeof document.compatMode<"u"&&document.compatMode!=="BackCompat"?e=document.documentElement.scrollTop:typeof document.body<"u"&&(e=document.body.scrollTop),e}export{l as _,c as o};
