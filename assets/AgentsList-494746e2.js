import{O as p,R as Pe,r as S,T as Te,E as K,U as me,a as ae,H as De,K as _,V as Ne,W as ze,X as ve,D as he,G as ye,u as Ie,o as Fe,A as se,b as I,c as W,d as H,e as b,w as L,h as x,f as R,t as A,g as Y,Y as Ue}from"./index-3a745e6e.js";function be(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,a)}return t}function Z(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?be(Object(t),!0).forEach(function(a){Me(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):be(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function Me(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ee(e){return typeof e=="function"}function fe(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function ne(e){return ee(e.$validator)?Z({},e):{$validator:e}}function Re(e){return typeof e=="object"?e.$valid:e}function Ce(e){return e.$validator||e}function ke(e,n){if(!fe(e))throw new Error(`[@vuelidate/validators]: First parameter to "withParams" should be an object, provided ${typeof e}`);if(!fe(n)&&!ee(n))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const t=ne(n);return t.$params=Z(Z({},t.$params||{}),e),t}function Ge(e,n){if(!ee(e)&&typeof p(e)!="string")throw new Error(`[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided ${typeof e}`);if(!fe(n)&&!ee(n))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const t=ne(n);return t.$message=e,t}function Be(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];const t=ne(e);return Z(Z({},t),{},{$async:!0,$watchTargets:n})}function qe(e){return{$validator(n){for(var t=arguments.length,a=new Array(t>1?t-1:0),o=1;o<t;o++)a[o-1]=arguments[o];return p(n).reduce((l,s,m)=>{const g=Object.entries(s).reduce((i,v)=>{let[$,y]=v;const h=e[$]||{},r=Object.entries(h).reduce((u,d)=>{let[w,D]=d;const C=Ce(D).call(this,y,s,m,...a),E=Re(C);if(u.$data[w]=C,u.$data.$invalid=!E||!!u.$data.$invalid,u.$data.$error=u.$data.$invalid,!E){let P=D.$message||"";const M=D.$params||{};typeof P=="function"&&(P=P({$pending:!1,$invalid:!E,$params:M,$model:y,$response:C})),u.$errors.push({$property:$,$message:P,$params:M,$response:C,$model:y,$pending:!1,$validator:w})}return{$valid:u.$valid&&E,$data:u.$data,$errors:u.$errors}},{$valid:!0,$data:{},$errors:[]});return i.$data[$]=r.$data,i.$errors[$]=r.$errors,{$valid:i.$valid&&r.$valid,$data:i.$data,$errors:i.$errors}},{$valid:!0,$data:{},$errors:{}});return{$valid:l.$valid&&g.$valid,$data:l.$data.concat(g.$data),$errors:l.$errors.concat(g.$errors)}},{$valid:!0,$data:[],$errors:[]})},$message:n=>{let{$response:t}=n;return t?t.$errors.map(a=>Object.values(a).map(o=>o.map(l=>l.$message)).reduce((o,l)=>o.concat(l),[])):[]}}}const J=e=>{if(e=p(e),Array.isArray(e))return!!e.length;if(e==null)return!1;if(e===!1)return!0;if(e instanceof Date)return!isNaN(e.getTime());if(typeof e=="object"){for(let n in e)return!0;return!1}return!!String(e).length},$e=e=>(e=p(e),Array.isArray(e)?e.length:typeof e=="object"?Object.keys(e).length:String(e).length);function U(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return a=>(a=p(a),!J(a)||n.every(o=>(o.lastIndex=0,o.test(a))))}var le=Object.freeze({__proto__:null,forEach:qe,len:$e,normalizeValidatorObject:ne,regex:U,req:J,unwrap:p,unwrapNormalizedValidator:Ce,unwrapValidatorResponse:Re,withAsync:Be,withMessage:Ge,withParams:ke});U(/^[a-zA-Z]*$/);U(/^[a-zA-Z0-9]*$/);U(/^\d*(\.\d+)?$/);const We=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;U(We);function He(e){return n=>!J(n)||$e(n)<=p(e)}function ie(e){return{$validator:He(e),$message:n=>{let{$params:t}=n;return`The maximum length allowed is ${t.max}`},$params:{max:e,type:"maxLength"}}}function Ke(e){return n=>!J(n)||$e(n)>=p(e)}function ce(e){return{$validator:Ke(e),$message:n=>{let{$params:t}=n;return`This field should be at least ${t.min} characters long`},$params:{min:e,type:"minLength"}}}function Ze(e){return typeof e=="string"&&(e=e.trim()),J(e)}var de={$validator:Ze,$message:"Value is required",$params:{type:"required"}};const Je=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;U(Je);U(/(^[0-9]*$)|(^-[0-9]+$)/);U(/^[-]?\d*(\.\d+)?$/);function we(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,a)}return t}function F(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?we(Object(t),!0).forEach(function(a){Xe(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):we(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function Xe(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function xe(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Object.keys(e).reduce((t,a)=>(n.includes(a)||(t[a]=p(e[a])),t),{})}function te(e){return typeof e=="function"}function Ye(e){return Ne(e)||ze(e)}function je(e,n,t){let a=e;const o=n.split(".");for(let l=0;l<o.length;l++){if(!a[o[l]])return t;a=a[o[l]]}return a}function ue(e,n,t){return _(()=>e.some(a=>je(n,a,{[t]:!1})[t]))}function Oe(e,n,t){return _(()=>e.reduce((a,o)=>{const l=je(n,o,{[t]:!1})[t]||[];return a.concat(l)},[]))}function Le(e,n,t,a){return e.call(a,p(n),p(t),a)}function Ee(e){return e.$valid!==void 0?!e.$valid:!e}function Qe(e,n,t,a,o,l,s){let{$lazy:m,$rewardEarly:g}=o,i=arguments.length>7&&arguments[7]!==void 0?arguments[7]:[],v=arguments.length>8?arguments[8]:void 0,$=arguments.length>9?arguments[9]:void 0,y=arguments.length>10?arguments[10]:void 0;const h=S(!!a.value),r=S(0);t.value=!1;const u=K([n,a].concat(i,y),()=>{if(m&&!a.value||g&&!$.value&&!t.value)return;let d;try{d=Le(e,n,v,s)}catch(w){d=Promise.reject(w)}r.value++,t.value=!!r.value,h.value=!1,Promise.resolve(d).then(w=>{r.value--,t.value=!!r.value,l.value=w,h.value=Ee(w)}).catch(w=>{r.value--,t.value=!!r.value,l.value=w,h.value=!0})},{immediate:!0,deep:typeof n=="object"});return{$invalid:h,$unwatch:u}}function et(e,n,t,a,o,l,s,m){let{$lazy:g,$rewardEarly:i}=a;const v=()=>({}),$=_(()=>{if(g&&!t.value||i&&!m.value)return!1;let y=!0;try{const h=Le(e,n,s,l);o.value=h,y=Ee(h)}catch(h){o.value=h}return y});return{$unwatch:v,$invalid:$}}function tt(e,n,t,a,o,l,s,m,g,i,v){const $=S(!1),y=e.$params||{},h=S(null);let r,u;e.$async?{$invalid:r,$unwatch:u}=Qe(e.$validator,n,$,t,a,h,o,e.$watchTargets,g,i,v):{$invalid:r,$unwatch:u}=et(e.$validator,n,t,a,h,o,g,i);const d=e.$message;return{$message:te(d)?_(()=>d(xe({$pending:$,$invalid:r,$params:xe(y),$model:n,$response:h,$validator:l,$propertyPath:m,$property:s}))):d||"",$params:y,$pending:$,$invalid:r,$response:h,$unwatch:u}}function at(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n=p(e),t=Object.keys(n),a={},o={},l={};let s=null;return t.forEach(m=>{const g=n[m];switch(!0){case te(g.$validator):a[m]=g;break;case te(g):a[m]={$validator:g};break;case m==="$validationGroups":s=g;break;case m.startsWith("$"):l[m]=g;break;default:o[m]=g}}),{rules:a,nestedValidators:o,config:l,validationGroups:s}}const nt="__root";function rt(e,n,t,a,o,l,s,m,g){const i=Object.keys(e),v=a.get(o,e),$=S(!1),y=S(!1),h=S(0);if(v){if(!v.$partial)return v;v.$unwatch(),$.value=v.$dirty.value}const r={$dirty:$,$path:o,$touch:()=>{$.value||($.value=!0)},$reset:()=>{$.value&&($.value=!1)},$commit:()=>{}};return i.length?(i.forEach(u=>{r[u]=tt(e[u],n,r.$dirty,l,s,u,t,o,g,y,h)}),r.$externalResults=_(()=>m.value?[].concat(m.value).map((u,d)=>({$propertyPath:o,$property:t,$validator:"$externalResults",$uid:`${o}-externalResult-${d}`,$message:u,$params:{},$response:null,$pending:!1})):[]),r.$invalid=_(()=>{const u=i.some(d=>p(r[d].$invalid));return y.value=u,!!r.$externalResults.value.length||u}),r.$pending=_(()=>i.some(u=>p(r[u].$pending))),r.$error=_(()=>r.$dirty.value?r.$pending.value||r.$invalid.value:!1),r.$silentErrors=_(()=>i.filter(u=>p(r[u].$invalid)).map(u=>{const d=r[u];return ae({$propertyPath:o,$property:t,$validator:u,$uid:`${o}-${u}`,$message:d.$message,$params:d.$params,$response:d.$response,$pending:d.$pending})}).concat(r.$externalResults.value)),r.$errors=_(()=>r.$dirty.value?r.$silentErrors.value:[]),r.$unwatch=()=>i.forEach(u=>{r[u].$unwatch()}),r.$commit=()=>{y.value=!0,h.value=Date.now()},a.set(o,e,r),r):(v&&a.set(o,e,r),r)}function ot(e,n,t,a,o,l,s){const m=Object.keys(e);return m.length?m.reduce((g,i)=>(g[i]=pe({validations:e[i],state:n,key:i,parentKey:t,resultsCache:a,globalConfig:o,instance:l,externalResults:s}),g),{}):{}}function st(e,n,t){const a=_(()=>[n,t].filter(r=>r).reduce((r,u)=>r.concat(Object.values(p(u))),[])),o=_({get(){return e.$dirty.value||(a.value.length?a.value.every(r=>r.$dirty):!1)},set(r){e.$dirty.value=r}}),l=_(()=>{const r=p(e.$silentErrors)||[],u=a.value.filter(d=>(p(d).$silentErrors||[]).length).reduce((d,w)=>d.concat(...w.$silentErrors),[]);return r.concat(u)}),s=_(()=>{const r=p(e.$errors)||[],u=a.value.filter(d=>(p(d).$errors||[]).length).reduce((d,w)=>d.concat(...w.$errors),[]);return r.concat(u)}),m=_(()=>a.value.some(r=>r.$invalid)||p(e.$invalid)||!1),g=_(()=>a.value.some(r=>p(r.$pending))||p(e.$pending)||!1),i=_(()=>a.value.some(r=>r.$dirty)||a.value.some(r=>r.$anyDirty)||o.value),v=_(()=>o.value?g.value||m.value:!1),$=()=>{e.$touch(),a.value.forEach(r=>{r.$touch()})},y=()=>{e.$commit(),a.value.forEach(r=>{r.$commit()})},h=()=>{e.$reset(),a.value.forEach(r=>{r.$reset()})};return a.value.length&&a.value.every(r=>r.$dirty)&&$(),{$dirty:o,$errors:s,$invalid:m,$anyDirty:i,$error:v,$pending:g,$touch:$,$reset:h,$silentErrors:l,$commit:y}}function pe(e){let{validations:n,state:t,key:a,parentKey:o,childResults:l,resultsCache:s,globalConfig:m={},instance:g,externalResults:i}=e;const v=o?`${o}.${a}`:a,{rules:$,nestedValidators:y,config:h,validationGroups:r}=at(n),u=F(F({},m),h),d=a?_(()=>{const V=p(t);return V?p(V[a]):void 0}):t,w=F({},p(i)||{}),D=_(()=>{const V=p(i);return a?V?p(V[a]):void 0:V}),B=rt($,d,a,s,v,u,g,D,t),C=ot(y,d,v,s,u,g,D),E={};r&&Object.entries(r).forEach(V=>{let[k,z]=V;E[k]={$invalid:ue(z,C,"$invalid"),$error:ue(z,C,"$error"),$pending:ue(z,C,"$pending"),$errors:Oe(z,C,"$errors"),$silentErrors:Oe(z,C,"$silentErrors")}});const{$dirty:P,$errors:M,$invalid:O,$anyDirty:c,$error:q,$pending:N,$touch:T,$reset:re,$silentErrors:j,$commit:X}=st(B,C,l),G=a?_({get:()=>p(d),set:V=>{P.value=!0;const k=p(t),z=p(i);z&&(z[a]=w[a]),me(k[a])?k[a].value=V:k[a]=V}}):null;a&&u.$autoDirty&&K(d,()=>{P.value||T();const V=p(i);V&&(V[a]=w[a])},{flush:"sync"});async function oe(){return T(),u.$rewardEarly&&(X(),await ye()),await ye(),new Promise(V=>{if(!N.value)return V(!O.value);const k=K(N,()=>{V(!O.value),k()})})}function f(V){return(l.value||{})[V]}function ge(){me(i)?i.value=w:Object.keys(w).length===0?Object.keys(i).forEach(V=>{delete i[V]}):Object.assign(i,w)}return ae(F(F(F({},B),{},{$model:G,$dirty:P,$error:q,$errors:M,$invalid:O,$anyDirty:c,$pending:N,$touch:T,$reset:re,$path:v||nt,$silentErrors:j,$validate:oe,$commit:X},l&&{$getResultsForChild:f,$clearExternalResults:ge,$validationGroups:E}),C))}class lt{constructor(){this.storage=new Map}set(n,t,a){this.storage.set(n,{rules:t,result:a})}checkRulesValidity(n,t,a){const o=Object.keys(a),l=Object.keys(t);return l.length!==o.length||!l.every(m=>o.includes(m))?!1:l.every(m=>t[m].$params?Object.keys(t[m].$params).every(g=>p(a[m].$params[g])===p(t[m].$params[g])):!0)}get(n,t){const a=this.storage.get(n);if(!a)return;const{rules:o,result:l}=a,s=this.checkRulesValidity(n,t,o),m=l.$unwatch?l.$unwatch:()=>({});return s?l:{$dirty:l.$dirty,$partial:!0,$unwatch:m}}}const Q={COLLECT_ALL:!0,COLLECT_NONE:!1},_e=Symbol("vuelidate#injectChildResults"),Ve=Symbol("vuelidate#removeChildResults");function it(e){let{$scope:n,instance:t}=e;const a={},o=S([]),l=_(()=>o.value.reduce((v,$)=>(v[$]=p(a[$]),v),{}));function s(v,$){let{$registerAs:y,$scope:h,$stopPropagation:r}=$;r||n===Q.COLLECT_NONE||h===Q.COLLECT_NONE||n!==Q.COLLECT_ALL&&n!==h||(a[y]=v,o.value.push(y))}t.__vuelidateInjectInstances=[].concat(t.__vuelidateInjectInstances||[],s);function m(v){o.value=o.value.filter($=>$!==v),delete a[v]}t.__vuelidateRemoveInstances=[].concat(t.__vuelidateRemoveInstances||[],m);const g=ve(_e,[]);he(_e,t.__vuelidateInjectInstances);const i=ve(Ve,[]);return he(Ve,t.__vuelidateRemoveInstances),{childResults:l,sendValidationResultsToParent:g,removeValidationResultsFromParent:i}}function Ae(e){return new Proxy(e,{get(n,t){return typeof n[t]=="object"?Ae(n[t]):_(()=>n[t])}})}let Se=0;function ct(e,n){var t;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};arguments.length===1&&(a=e,e=void 0,n=void 0);let{$registerAs:o,$scope:l=Q.COLLECT_ALL,$stopPropagation:s,$externalResults:m,currentVueInstance:g}=a;const i=g||((t=Pe())===null||t===void 0?void 0:t.proxy),v=i?i.$options:{};o||(Se+=1,o=`_vuelidate_${Se}`);const $=S({}),y=new lt,{childResults:h,sendValidationResultsToParent:r,removeValidationResultsFromParent:u}=i?it({$scope:l,instance:i}):{childResults:S({})};if(!e&&v.validations){const d=v.validations;n=S({}),Te(()=>{n.value=i,K(()=>te(d)?d.call(n.value,new Ae(n.value)):d,w=>{$.value=pe({validations:w,state:n,childResults:h,resultsCache:y,globalConfig:a,instance:i,externalResults:m||i.vuelidateExternalResults})},{immediate:!0})}),a=v.validationsConfig||a}else{const d=me(e)||Ye(e)?e:ae(e||{});K(d,w=>{$.value=pe({validations:w,state:n,childResults:h,resultsCache:y,globalConfig:a,instance:i??{},externalResults:m})},{immediate:!0})}return i&&(r.forEach(d=>d($,{$registerAs:o,$scope:l,$stopPropagation:s})),De(()=>u.forEach(d=>d(o)))),_(()=>F(F({},p($.value)),h.value))}const dt={className:"card"},ut=x("h4",null,"Agent List",-1),mt={class:"flex justify-content-end"},ft={style:{display:"flex",gap:"10px","margin-top":"20px"}},pt={style:{display:"flex","flex-direction":"column",gap:"5px","margin-bottom":"20px"}},$t=x("label",{for:"username",class:"font-semibold"},[R("First Name "),x("small",{style:{color:"var(--red-400)"}},"*")],-1),gt={key:0,style:{color:"var(--red-400)"}},vt={style:{display:"flex","flex-direction":"column",gap:"5px","margin-bottom":"20px"}},ht=x("label",{for:"username",class:"font-semibold"},[R("Last Name "),x("small",{style:{color:"var(--red-400)"}},"*")],-1),yt={key:0,style:{color:"var(--red-400)"}},bt={style:{display:"flex","flex-direction":"column",gap:"5px","margin-bottom":"20px"}},wt=x("label",{for:"username",class:"font-semibold"},[R("Username "),x("small",{style:{color:"var(--red-400)"}},"*")],-1),xt={key:0,style:{color:"var(--red-400)"}},Ot={key:0,style:{display:"flex","flex-direction":"column",gap:"5px","margin-bottom":"20px"}},_t=x("label",{for:"username",class:"font-semibold"},"Default Password",-1),Vt={style:{display:"flex","flex-direction":"column",gap:"5px","margin-bottom":"20px"}},St=x("label",{for:"username",class:"font-semibold"},[R("GGR % "),x("small",null,"(Casino Commission)")],-1),Rt={style:{display:"flex","flex-direction":"column",gap:"5px","margin-bottom":"20px"}},Ct=x("label",{for:"username",class:"font-semibold"},[R("Sabong % "),x("small",null,"(Valid Turn Over)")],-1),jt={style:{display:"flex","flex-direction":"column",gap:"5px","margin-bottom":"20px"}},Lt=x("label",{for:"username",class:"font-semibold"},[R("Lottery % "),x("small",null,"(Valid Turn Over)")],-1),Et={style:{display:"flex","flex-direction":"column",gap:"5px","margin-bottom":"20px"}},At=x("label",{for:"username",class:"font-semibold"},[R("Sports % "),x("small",null,"(Valid Turn Over)")],-1),Pt={class:"flex justify-content-end gap-2"},Dt={__name:"AgentsList",setup(e){const n=S(!1),t=S(),a=JSON.parse(localStorage.getItem("auth.admin")),o=S("Add"),l=S(!1),s=ae({selectedCasino:{name:"5%",code:"5"},selectedSabong:{name:"1%",code:"1"},selectedLottery:{name:"5%",code:"5"},selectedSports:{name:".5%",code:"0.5"},fname:"",lname:"",password:"123456",username:""}),m=S([]),g=S([]),i=S([]),v=S([]);a[0].role===3?(m.value=[{name:"5%",code:"5"},{name:"10%",code:"10"},{name:"15%",code:"15"},{name:"20%",code:"20"},{name:"25%",code:"25"},{name:"30%",code:"30"},{name:"31%",code:"31"},{name:"32%",code:"32"},{name:"33%",code:"33"},{name:"34%",code:"34"},{name:"35%",code:"35"},{name:"36%",code:"36"},{name:"37%",code:"37"},{name:"38%",code:"38"},{name:"39%",code:"39"},{name:"40%",code:"40"},{name:"41%",code:"41"},{name:"42%",code:"42"},{name:"43%",code:"43"},{name:"44%",code:"44"},{name:"45%",code:"45"},{name:"46%",code:"46"},{name:"47%",code:"47"},{name:"48%",code:"48"},{name:"49%",code:"49"},{name:"50%",code:"50"}],g.value=[{name:"1%",code:"1"},{name:"2%",code:"2"},{name:"3%",code:"3"},{name:"4%",code:"4"},{name:"5%",code:"5"},{name:"6%",code:"6"},{name:"7%",code:"7"},{name:"8%",code:"8"},{name:"9%",code:"9"},{name:"10%",code:"10"}],i.value=[{name:"5%",code:"5"},{name:"10%",code:"10"},{name:"15%",code:"15"},{name:"20%",code:"20"},{name:"25%",code:"25"}],v.value=[{name:".5%",code:"0.5"},{name:".6%",code:"0.6"},{name:".7%",code:"0.7"},{name:".8%",code:"0.8"},{name:".9%",code:"0.9"},{name:"1%",code:"1"},{name:"1.1%",code:"1.1"},{name:"1.2%",code:"1.2"},{name:"1.3%",code:"1.3"},{name:"1.4%",code:"1.4"},{name:"1.5%",code:"1.5"},{name:"2%",code:"2"}]):(m.value=[{name:"5%",code:"5"},{name:"10%",code:"10"},{name:"15%",code:"15"},{name:"20%",code:"20"},{name:"25%",code:"25"},{name:"30%",code:"30"},{name:"31%",code:"31"},{name:"32%",code:"32"},{name:"33%",code:"33"},{name:"34%",code:"34"},{name:"35%",code:"35"},{name:"36%",code:"36"},{name:"37%",code:"37"},{name:"38%",code:"38"},{name:"39%",code:"39"},{name:"40%",code:"40"}],g.value=[{name:"1%",code:"1"},{name:"2%",code:"2"},{name:"3%",code:"3"},{name:"4%",code:"4"},{name:"5%",code:"5"},{name:"6%",code:"6"},{name:"7%",code:"7"},{name:"8%",code:"8"}],i.value=[{name:"5%",code:"5"},{name:"10%",code:"10"},{name:"15%",code:"15"},{name:"20%",code:"20"}],v.value=[{name:".5%",code:"0.5"},{name:".6%",code:"0.6"},{name:".7%",code:"0.7"},{name:".8%",code:"0.8"},{name:".9%",code:"0.9"},{name:"1%",code:"1"},{name:"1.1%",code:"1.1"},{name:"1.2%",code:"1.2"},{name:"1.3%",code:"1.3"},{name:"1.4%",code:"1.4"},{name:"1.5%",code:"1.5"}]);const $=Ie(),y=O=>/^[a-zA-Z0-9]+$/.test(O),h=(O,c)=>O.includes("Value")?O.replace("Value",c):O,r={username:a[0].username,token:a[0].token};Fe(async()=>{const O=await se.showAllAgents(r);O.resStatus===0?t.value=O.data:alert(O.resMsg)});const u=_(()=>({username:{required:de,specialCharacterChecking:le.withMessage("This field does not allow special characters",y),minLengthValue:ce(3),maxLengthValue:ie(15)},lname:{required:de,minLengthValue:ce(3),maxLengthValue:ie(30),specialCharacterChecking:le.withMessage("This field does not allow special characters",y)},fname:{required:de,minLengthValue:ce(3),maxLengthValue:ie(30),specialCharacterChecking:le.withMessage("This field does not allow special characters",y)}})),d=ct(u,s),w=async()=>{if(console.log(s.selectedCasino.code),l.value=!0,d.value.$validate(),!d.value.$error){const O={comCasino:s.selectedCasino.code,comSabong:s.selectedSabong.code,comLottery:s.selectedLottery.code,comSport:s.selectedSports.code,fname:s.fname.trim(),lname:s.lname.trim(),password:"123456",agent_username:s.username.trim(),...r},c=await se.postAddAgent(O);console.log(O),console.log(c),c.resStatus===0?($.add({severity:"success",summary:"Success",detail:"New agent has been added successfully",life:5e3}),n.value=!1):$.add({severity:"error",summary:"Failed",detail:c.resMsg,life:5e3}),l.value=!1}l.value=!1},D=O=>{switch(O){case 0:return"Offline";case 1:return"Online";case 2:return"Idle";default:return"Unknown"}},B=O=>{o.value="Edit";const c=t.value.filter(q=>q.id===O);console.log({name:c[0].comCasino.toString()+"%",code:c[0].comCasino.toString()}),s.selectedCasino={name:c[0].comCasino.toString()+"%",code:c[0].comCasino.toString()},s.selectedSabong={name:c[0].comSabong.toString()+"%",code:c[0].comSabong.toString()},s.selectedLottery={name:c[0].comLottery.toString()+"%",code:c[0].comLottery.toString()},s.selectedSports={name:c[0].comSports.toString()+"%",code:c[0].comSports.toString()},s.fname=c[0].fname,s.lname=c[0].lname,s.username=c[0].username,s.id=c[0].id,s.is_online=c[0].is_online.toString(),n.value=!0},C=async()=>{if(l.value=!0,d.value.$validate(),!d.value.$error){const O={id:s.id,comCasino:s.selectedCasino.code,comSabong:s.selectedSabong.code,comLottery:s.selectedLottery.code,comSport:s.selectedSports.code,isActive:s.isActive,fname:s.fname.trim(),lname:s.lname.trim(),...r},c=await se.postUpdateAgent(O);c.resStatus===0?($.add({severity:"success",summary:"Success",detail:"New agent has been updated successfully",life:5e3}),n.value=!1):$.add({severity:"error",summary:"Failed",detail:c.resMsg,life:5e3}),l.value=!1}l.value=!1},E=S({global:{value:null,matchMode:Ue.CONTAINS}}),P=()=>{n.value=!0,o.value="Add",s.selectedGGR=null,s.selectedVTO=null,s.fname="",s.lname="",s.username=""},M=O=>O.toLocaleString("en-US",{style:"currency",currency:"PHP"});return(O,c)=>{const q=I("Toast"),N=I("Button"),T=I("InputText"),re=I("IconField"),j=I("Column"),X=I("DataTable"),G=I("Dropdown"),oe=I("Dialog");return W(),H("div",dt,[b(q),ut,b(N,{label:"Add Agent",class:"mb-5",onClick:P}),b(X,{filters:E.value,"onUpdate:filters":c[1]||(c[1]=f=>E.value=f),globalFilterFields:["fname","username","walletGGR","walletVTO","comCasino","comSabong","comLottery","comSports","is_online","date"],value:t.value,stripedRows:"",rowsPerPageOptions:[5,10,20,50],rows:10,paginator:!0,responsiveLayout:"scroll"},{header:L(()=>[x("div",mt,[b(re,{iconPosition:"right"},{default:L(()=>[b(T,{modelValue:E.value.global.value,"onUpdate:modelValue":c[0]||(c[0]=f=>E.value.global.value=f),placeholder:"Keyword Search"},null,8,["modelValue"])]),_:1})])]),default:L(()=>[b(j,{sortable:!0,header:"Name"},{body:L(f=>[R(A(f.data.fname)+" "+A(f.data.lname),1)]),_:1}),b(j,{sortable:!0,field:"username",header:"Username"}),b(j,{sortable:!0,header:"GGR Wallet"},{body:L(f=>[R(A(M(f.data.walletGGR)),1)]),_:1}),b(j,{sortable:!0,header:"VTO Wallet"},{body:L(f=>[R(A(M(f.data.walletVTO)),1)]),_:1}),b(j,{sortable:!0,header:"Casino"},{body:L(f=>[R(A(f.data.comCasino)+"% ",1)]),_:1}),b(j,{sortable:!0,field:"Sabong",header:"Sabong"},{body:L(f=>[R(A(f.data.comSabong)+"% ",1)]),_:1}),b(j,{sortable:!0,field:"Lottery",header:"Lottery"},{body:L(f=>[R(A(f.data.comLottery)+"% ",1)]),_:1}),b(j,{sortable:!0,field:"Sports",header:"Sports"},{body:L(f=>[R(A(f.data.comSports)+"% ",1)]),_:1}),b(j,{sortable:!0,field:"is_online",header:"Status"},{body:L(f=>[R(A(D(f.data.is_online)),1)]),_:1}),b(j,{sortable:!0,field:"date",header:"Date"}),b(j,{header:"Action"},{body:L(f=>[b(N,{label:"Edit",icon:"pi pi-pencil",onClick:ge=>B(f.data.id)},null,8,["onClick"])]),_:1})]),_:1},8,["filters","value"]),b(oe,{visible:n.value,"onUpdate:visible":c[12]||(c[12]=f=>n.value=f),modal:"",header:`${o.value} Agent`,style:{width:"35rem"},draggable:!1},{default:L(()=>[x("div",ft,[x("div",pt,[$t,b(T,{modelValue:s.fname,"onUpdate:modelValue":c[2]||(c[2]=f=>s.fname=f),id:"username",class:"w-full",autocomplete:"off"},null,8,["modelValue"]),p(d).fname.$error?(W(),H("small",gt,A(h(p(d).fname.$errors[0].$message,"First Name")),1)):Y("",!0)]),x("div",vt,[ht,b(T,{modelValue:s.lname,"onUpdate:modelValue":c[3]||(c[3]=f=>s.lname=f),id:"username",class:"w-full",autocomplete:"off"},null,8,["modelValue"]),p(d).lname.$error?(W(),H("small",yt,A(h(p(d).lname.$errors[0].$message,"Last Name")),1)):Y("",!0)])]),x("div",bt,[wt,b(T,{modelValue:s.username,"onUpdate:modelValue":c[4]||(c[4]=f=>s.username=f),id:"username",class:"w-full",autocomplete:"off",disabled:o.value!="Add"},null,8,["modelValue","disabled"]),p(d).username.$error?(W(),H("small",xt,A(h(p(d).username.$errors[0].$message,"Username")),1)):Y("",!0)]),o.value=="Add"?(W(),H("div",Ot,[_t,b(T,{modelValue:s.password,"onUpdate:modelValue":c[5]||(c[5]=f=>s.password=f),id:"username",class:"w-full",autocomplete:"off",readonly:""},null,8,["modelValue"])])):Y("",!0),x("div",Vt,[St,b(G,{modelValue:s.selectedCasino,"onUpdate:modelValue":c[6]||(c[6]=f=>s.selectedCasino=f),options:m.value,optionLabel:"name",placeholder:"Select",class:"w-full"},null,8,["modelValue","options"])]),x("div",Rt,[Ct,b(G,{modelValue:s.selectedSabong,"onUpdate:modelValue":c[7]||(c[7]=f=>s.selectedSabong=f),options:g.value,optionLabel:"name",placeholder:"Select",class:"w-full"},null,8,["modelValue","options"])]),x("div",jt,[Lt,b(G,{modelValue:s.selectedLottery,"onUpdate:modelValue":c[8]||(c[8]=f=>s.selectedLottery=f),options:i.value,optionLabel:"name",placeholder:"Select",class:"w-full"},null,8,["modelValue","options"])]),x("div",Et,[At,b(G,{modelValue:s.selectedSports,"onUpdate:modelValue":c[9]||(c[9]=f=>s.selectedSports=f),options:v.value,optionLabel:"name",placeholder:"Select",class:"w-full"},null,8,["modelValue","options"])]),x("div",Pt,[b(N,{type:"button",label:"Cancel",severity:"secondary",onClick:c[10]||(c[10]=f=>n.value=!1)}),b(N,{loading:l.value,type:"button",label:o.value=="Add"?"Submit":"Update",severity:o.value=="Add"?"primary":"warning",onClick:c[11]||(c[11]=f=>o.value=="Add"?w():C())},null,8,["loading","label","severity"])])]),_:1},8,["visible","header"])])}}};export{Dt as default};
