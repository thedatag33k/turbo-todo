(function(){"use strict";var e={5918:function(e,t,l){var a=l(5130),s=(l(4114),l(6768)),o=l(1387),n=l(144);const i={darkmode:!0,startScreen:"/",notes:{showEditor:!1,currentNote:{},showPreview:!0,defaultEditorMode:"View",autoFocusOnEdit:!0}},r=(0,n.Kh)({settings:i}),d=()=>{try{const e=JSON.parse(localStorage.getItem("settings"))||{};r.settings={...i,...e}}catch(e){r.settings=i}},c=()=>{localStorage.setItem("settings",JSON.stringify(r.settings))};d();var u=l(4232);const b={class:"switch"},p=["checked","disabled"];var m={__name:"ToggleSwitch",props:(0,s.zz)({readonly:{type:Boolean}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=(0,s.fn)(e,"modelValue"),l=e;return(e,o)=>((0,s.uX)(),(0,s.CE)("label",b,[(0,s.bo)((0,s.Lk)("input",{type:"checkbox",checked:t.value,"onUpdate:modelValue":o[0]||(o[0]=e=>t.value=e),disabled:l.readonly},null,8,p),[[a.lH,t.value]]),o[1]||(o[1]=(0,s.Lk)("span",{class:"slider round"},null,-1))]))}},v=l(1241);const g=(0,v.A)(m,[["__scopeId","data-v-4e6e1166"]]);var f=g;const k={class:"navbar fixed-top shadow"},h={class:"container py-1 d-flex"},y={class:"fs-4 ms-1 m-0 me-auto no-select"},w={class:"offcanvas offcanvas-end",tabIndex:"-1",id:"offcanvasRight"},L={class:"offcanvas-body"},C={class:"row row-cols-1 g-3"},x={key:0,"data-bs-dismiss":"offcanvas"},E={key:1,"data-bs-dismiss":"offcanvas"},_={key:2,"data-bs-dismiss":"offcanvas"},R={class:"dropdown"},F={class:"btn btn-outline-primary dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},X={key:0},S={key:1},I={class:"dropdown-menu"},V="col p-2 rounded",N="d-flex align-items-center fs-6";var T={__name:"TopNav",props:{title:{type:String,required:!0},iconClass:{type:String,required:!0}},setup(e){const t=(0,o.lq)(),l=e,a=()=>{r.settings.notes.autoFocusOnEdit=!r.settings.notes.autoFocusOnEdit},i=()=>{r.settings.notes.showPreview=!r.settings.notes.showPreview},d=()=>{r.settings.darkmode=!r.settings.darkmode},c=(e,t={})=>{navigator.serviceWorker.getRegistration().then((l=>{l.showNotification(e,t)}))},b=()=>"granted"===Notification.permission,p=()=>{b?c("Permission already granted!"):Notification.requestPermission((e=>{"granted"===e&&c("Permission granted!")}))},m=e=>{r.settings.notes.defaultEditorMode=e};return(e,o)=>{const c=(0,s.g2)("RouterLink");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",k,[(0,s.Lk)("div",h,[(0,s.Lk)("p",y,[(0,s.Lk)("i",{class:(0,u.C4)(l.iconClass)},null,2),(0,s.eW)(" "+(0,u.v_)(l.title),1)]),(0,s.RG)(e.$slots,"nav-buttons"),o[5]||(o[5]=(0,s.Lk)("button",{class:"btn py-0 my-0 px-1 mx-1",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasRight"},[(0,s.Lk)("i",{class:"bi bi-list fs-4"})],-1))])]),(0,s.Lk)("div",w,[o[19]||(o[19]=(0,s.Lk)("div",{class:"offcanvas-header"},[(0,s.Lk)("h5",{class:"offcanvas-title",id:"offcanvasRightLabel"},"Settings"),(0,s.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1)),(0,s.Lk)("div",L,[(0,s.Lk)("div",C,[(0,s.Lk)("div",{class:(0,u.C4)(V)},[(0,s.Lk)("div",{class:(0,u.C4)([N,"flex-wrap"])},[["/","/todolist"].includes((0,n.R1)(t).path)?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("span",x,[(0,s.bF)(c,{class:"btn btn-primary m-1",to:"/todolist"},{default:(0,s.k6)((()=>o[6]||(o[6]=[(0,s.Lk)("i",{class:"bi bi-check2-square me-2"},null,-1),(0,s.eW)("Tasks")]))),_:1})])),"/notes"!==(0,n.R1)(t).path?((0,s.uX)(),(0,s.CE)("span",E,[(0,s.bF)(c,{class:"btn btn-primary m-1",to:"/notes"},{default:(0,s.k6)((()=>o[7]||(o[7]=[(0,s.Lk)("i",{class:"bi bi-journals me-2"},null,-1),(0,s.eW)("Notes")]))),_:1})])):(0,s.Q3)("",!0),"/rss"!==(0,n.R1)(t).path?((0,s.uX)(),(0,s.CE)("span",_,[(0,s.bF)(c,{class:"btn btn-primary m-1",to:"/rss"},{default:(0,s.k6)((()=>o[8]||(o[8]=[(0,s.Lk)("i",{class:"bi bi-activity me-2"},null,-1),(0,s.eW)("Pulse")]))),_:1})])):(0,s.Q3)("",!0)])]),(0,s.Lk)("div",{class:(0,u.C4)(["col-btn btn w-100",V]),onClick:d},[(0,s.Lk)("div",{class:(0,u.C4)(N)},[o[9]||(o[9]=(0,s.Lk)("label",{class:"me-auto"},[(0,s.Lk)("i",{class:"bi bi-moon-stars-fill me-2"}),(0,s.eW)("Dark mode")],-1)),(0,s.bF)(f,{readonly:"",modelValue:(0,n.R1)(r).settings.darkmode,"onUpdate:modelValue":o[0]||(o[0]=e=>(0,n.R1)(r).settings.darkmode=e)},null,8,["modelValue"])])]),(0,s.Lk)("div",{class:(0,u.C4)(V)},[(0,s.Lk)("div",{class:(0,u.C4)(N)},[o[10]||(o[10]=(0,s.Lk)("label",{class:"me-auto"},[(0,s.Lk)("i",{class:"bi bi-bell-fill me-2"}),(0,s.eW)("Enable notifications")],-1)),(0,s.Lk)("button",{onClick:p,class:(0,u.C4)(["btn btn-outline-primary",{"disabled btn-outline-secondary":b}])},(0,u.v_)(b?"Enabled":"Request"),3)])]),"/todolist"===(0,n.R1)(t).path||"/"===(0,n.R1)(t).path?((0,s.uX)(),(0,s.CE)("div",{key:0,class:(0,u.C4)([V,"col-btn"])},[(0,s.Lk)("div",{class:(0,u.C4)(N)},o[11]||(o[11]=[(0,s.Lk)("label",{class:"me-auto"},[(0,s.Lk)("i",{class:"bi bi-plus-lg me-2"}),(0,s.eW)("Create new list")],-1)]))])):(0,s.Q3)("",!0),"/notes"===(0,n.R1)(t).path?((0,s.uX)(),(0,s.CE)("div",{key:1,class:(0,u.C4)(["col-btn btn w-100",V]),onClick:i},[(0,s.Lk)("div",{class:(0,u.C4)(N)},[o[12]||(o[12]=(0,s.Lk)("label",{class:"me-auto"},[(0,s.Lk)("i",{class:"bi bi-binoculars-fill me-2"}),(0,s.eW)("Show note preview")],-1)),(0,s.bF)(f,{readonly:"",modelValue:(0,n.R1)(r).settings.notes.showPreview,"onUpdate:modelValue":o[1]||(o[1]=e=>(0,n.R1)(r).settings.notes.showPreview=e)},null,8,["modelValue"])])])):(0,s.Q3)("",!0),"/notes"===(0,n.R1)(t).path?((0,s.uX)(),(0,s.CE)("div",{key:2,class:(0,u.C4)(["col-btn btn w-100",V]),onClick:a},[(0,s.Lk)("div",{class:(0,u.C4)(N)},[o[13]||(o[13]=(0,s.Lk)("label",{class:"me-auto"},[(0,s.Lk)("i",{class:"bi bi-keyboard me-2"}),(0,s.eW)("Autofocus on edit")],-1)),(0,s.bF)(f,{readonly:"",modelValue:(0,n.R1)(r).settings.notes.autoFocusOnEdit,"onUpdate:modelValue":o[2]||(o[2]=e=>(0,n.R1)(r).settings.notes.autoFocusOnEdit=e)},null,8,["modelValue"])])])):(0,s.Q3)("",!0),"/notes"===(0,n.R1)(t).path?((0,s.uX)(),(0,s.CE)("div",{key:3,class:(0,u.C4)(V)},[(0,s.Lk)("div",{class:(0,u.C4)(N)},[o[18]||(o[18]=(0,s.Lk)("label",{class:"me-auto"},[(0,s.Lk)("i",{class:"bi bi-card-text me-2"}),(0,s.eW)("Default editor mode")],-1)),(0,s.Lk)("div",R,[(0,s.Lk)("button",F,["View"===(0,n.R1)(r).settings.notes.defaultEditorMode?((0,s.uX)(),(0,s.CE)("span",X,o[14]||(o[14]=[(0,s.Lk)("i",{class:"bi bi-eye-fill me-2"},null,-1),(0,s.eW)("View")]))):(0,s.Q3)("",!0),"Edit"===(0,n.R1)(r).settings.notes.defaultEditorMode?((0,s.uX)(),(0,s.CE)("span",S,o[15]||(o[15]=[(0,s.Lk)("i",{class:"bi bi-pencil-fill me-2"},null,-1),(0,s.eW)("Edit")]))):(0,s.Q3)("",!0)]),(0,s.Lk)("ul",I,[(0,s.Lk)("li",null,[(0,s.Lk)("a",{onClick:o[3]||(o[3]=e=>m("View")),class:"dropdown-item"},o[16]||(o[16]=[(0,s.Lk)("i",{class:"bi bi-eye-fill me-2"},null,-1),(0,s.eW)("View")]))]),(0,s.Lk)("li",null,[(0,s.Lk)("a",{onClick:o[4]||(o[4]=e=>m("Edit")),class:"dropdown-item"},o[17]||(o[17]=[(0,s.Lk)("i",{class:"bi bi-pencil-fill me-2"},null,-1),(0,s.eW)("Edit")]))])])])])])):(0,s.Q3)("",!0)])])])],64)}}};const W=(0,v.A)(T,[["__scopeId","data-v-72c94abd"]]);var O=W;l(8992),l(4520),l(1454);const M={class:"ms-3 flex-fill d-flex align-items-center"},A=["id","onUpdate:modelValue","onChange"],B=["for"],K={class:"fs-6"},U={key:0,class:"text-info",style:{"font-size":".75rem"}},D={class:"btn-div align-items-center pe-1"},Q=["onClick"];var q={__name:"TodoItem",props:{todos:{type:Array,required:!0},visible:{type:Boolean,default:!0}},emits:["change","click"],setup(e,{emit:t}){const l=t,o=e,n=e=>{e.modifiedOn=Date.now(),setTimeout((()=>{l("change")}),500)},i=e=>{l("click",e)};return(e,t)=>((0,s.uX)(),(0,s.Wv)(a.F,{name:"list",tag:"ul",class:"list-group list-group-hover"},{default:(0,s.k6)((()=>[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.todos,(e=>((0,s.uX)(),(0,s.CE)("li",{key:e.id,class:(0,u.C4)([{disabled:!o.visible},"list-group-item d-flex align-items-center p-0 m-0"])},[(0,s.Lk)("div",M,[(0,s.bo)((0,s.Lk)("input",{id:"todo-"+e.id,type:"checkbox",class:"form-check-input my-0 me-3 fs-4","onUpdate:modelValue":t=>e.done=t,onChange:t=>n(e)},null,40,A),[[a.lH,e.done]]),(0,s.Lk)("label",{for:"todo-"+e.id,class:(0,u.C4)(["form-check-label stretched-link",{completed:e.done}])},[(0,s.Lk)("span",K,(0,u.v_)(e.name),1),e.repeat?((0,s.uX)(),(0,s.CE)("span",U,t[0]||(t[0]=[(0,s.Lk)("br",null,null,-1),(0,s.Lk)("i",{class:"bi bi-repeat me-2"},null,-1),(0,s.eW)("Auto Repeat")]))):(0,s.Q3)("",!0)],10,B)]),(0,s.Lk)("div",D,[(0,s.Lk)("button",{"data-bs-toggle":"modal","data-bs-target":"#editTodoModal",class:"btn",onClick:t=>i(e)},t[1]||(t[1]=[(0,s.Lk)("i",{class:"bi bi-pencil"},null,-1)]),8,Q)])],2)))),128))])),_:1}))}};const j=(0,v.A)(q,[["__scopeId","data-v-eebad696"]]);var $=j;const z=["id"],P={class:"modal-dialog modal-dialog-centered"},H={class:"modal-content"},J={key:0,class:"modal-header"},G={key:1,class:"modal-header"},Y={class:"modal-title"},Z={key:2,class:"modal-body"},ee={key:3,class:"modal-footer"};var te={__name:"BaseModal",props:{modalId:{type:String,required:!0},title:{type:String}},setup(e){const t=e;return(e,l)=>((0,s.uX)(),(0,s.CE)("div",{id:t.modalId,class:"modal fade",tabIndex:"-1"},[(0,s.Lk)("div",P,[(0,s.Lk)("div",H,[e.$slots.header?((0,s.uX)(),(0,s.CE)("div",J,[(0,s.RG)(e.$slots,"header")])):((0,s.uX)(),(0,s.CE)("div",G,[(0,s.Lk)("h5",Y,(0,u.v_)(t.title||""),1)])),e.$slots.body?((0,s.uX)(),(0,s.CE)("div",Z,[(0,s.RG)(e.$slots,"body")])):(0,s.Q3)("",!0),e.$slots.footer?((0,s.uX)(),(0,s.CE)("div",ee,[(0,s.RG)(e.$slots,"footer")])):(0,s.Q3)("",!0)])])],8,z))}};const le=te;var ae=le;const se={key:0,class:"modal-title"},oe={key:1,class:"modal-title"},ne={class:"row row-cols-1 g-3"},ie={class:"d-flex align-items-center"},re={class:"d-flex align-items-center"};var de={__name:"TodoModal",props:(0,s.zz)({modalId:{type:String,required:!0},isNew:{type:Boolean,required:!0},addNewTodo:{type:Function,required:!1}},{modelValue:{},modelModifiers:{}}),emits:(0,s.zz)(["add","delete","change"],["update:modelValue"]),setup(e,{emit:t}){const l=t,o=(0,s.fn)(e,"modelValue"),n=e,i=()=>{o.value.modifiedOn=Date.now(),l("change")},r=()=>{l("delete",o.value.id)};return(t,l)=>((0,s.uX)(),(0,s.Wv)(ae,{"modal-id":e.modalId},{header:(0,s.k6)((()=>[e.isNew?((0,s.uX)(),(0,s.CE)("h5",se,"Add a new item...")):((0,s.uX)(),(0,s.CE)("h5",oe,"Edit item")),l[6]||(l[6]=(0,s.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal"},null,-1))])),body:(0,s.k6)((()=>[(0,s.Lk)("div",ne,[(0,s.Lk)("div",ie,[(0,s.bo)((0,s.Lk)("input",{type:"checkbox",class:"form-check-input my-0 me-2 fs-5","onUpdate:modelValue":l[0]||(l[0]=e=>o.value.done=e),onChange:i},null,544),[[a.aG,!e.isNew],[a.lH,o.value.done]]),e.isNew?(0,s.bo)(((0,s.uX)(),(0,s.CE)("input",{key:1,type:"text",class:"form-control","onUpdate:modelValue":l[2]||(l[2]=e=>o.value.name=e),onKeyup:l[3]||(l[3]=(0,a.jR)((e=>n.addNewTodo(o.value)),["enter"]))},null,544)),[[a.Jo,o.value.name,void 0,{trim:!0}]]):(0,s.bo)(((0,s.uX)(),(0,s.CE)("input",{key:0,type:"text",class:"form-control","onUpdate:modelValue":l[1]||(l[1]=e=>o.value.name=e),onChange:i},null,544)),[[a.Jo,o.value.name,void 0,{trim:!0}]])]),(0,s.Lk)("div",re,[l[7]||(l[7]=(0,s.Lk)("label",{class:"me-auto"},[(0,s.Lk)("i",{class:"bi bi-repeat me-2"}),(0,s.eW)("Auto Repeat")],-1)),(0,s.bF)(f,{onChange:i,modelValue:o.value.repeat,"onUpdate:modelValue":l[4]||(l[4]=e=>o.value.repeat=e)},null,8,["modelValue"])])])])),footer:(0,s.k6)((()=>[e.isNew?((0,s.uX)(),(0,s.CE)("button",{key:0,onClick:l[5]||(l[5]=e=>n.addNewTodo(o.value)),type:"button",class:"btn btn-primary","data-bs-dismiss":"modal"},l[8]||(l[8]=[(0,s.Lk)("i",{class:"bi bi-file-arrow-up-fill"},null,-1),(0,s.eW)(" Save ")]))):((0,s.uX)(),(0,s.CE)("button",{key:1,onClick:r,type:"button",class:"btn btn-danger","data-bs-dismiss":"modal"},l[9]||(l[9]=[(0,s.Lk)("i",{class:"bi bi-trash3"},null,-1),(0,s.eW)(" Delete ")])))])),_:1},8,["modal-id"]))}};const ce=de;var ue=ce;const be={class:"fixed-bottom",style:{height:"70px"}},pe={class:"container",style:{height:"50px"}};var me={__name:"FixedBottom",setup(e){const t=(0,s.OA)();return(e,l)=>((0,s.uX)(),(0,s.CE)("div",be,[(0,s.Lk)("div",pe,[(0,s.Lk)("div",{class:(0,u.C4)((0,n.R1)(t).class||"d-flex justify-content-end")},[(0,s.RG)(e.$slots,"default")],2)])]))}};const ve=(0,v.A)(me,[["__scopeId","data-v-2e51fe60"]]);var ge=ve,fe=l(1114);function ke(){return navigator.language||navigator.languages[0]}function he(e){return e.charAt(0).toUpperCase()+e.slice(1)}class ye{constructor(){}static hexToRgb(e){e=e.replace(/^#/,"");const t=parseInt(e.substr(0,2),16),l=parseInt(e.substr(2,2),16),a=parseInt(e.substr(4,2),16),s=(299*t+587*l+114*a)/1e3;return{r:t,g:l,b:a,isLight:s>=128}}static blendColors(e,t,l,a=1){const s=ye.hexToRgb(e),o=ye.hexToRgb(t),n=Math.round(s.r*(1-l)+o.r*l),i=Math.round(s.b*(1-l)+o.b*l),r=Math.round(s.g*(1-l)+o.g*l),d=`#${((1<<24)+(n<<16)+(r<<8)+i).toString(16).slice(1).toUpperCase()}${Math.round(255*a).toString(16).padStart(2,"0").toUpperCase()}`;return d}}(0,fe.A)(ye,"colorOptions",{blue:"#0d6efd",indigo:"#6610f2",purple:"#6f42c1",pink:"#d63384",red:"#dc3545",orange:"#fd7e14",yellow:"#ffc107",green:"#198754",teal:"#20c997",cyan:"#0dcaf0",charcoal:"#343a40"});class we{constructor(){}static now(){return Date.now()}static today(){const e=new Date;return e.setHours(0,0,0,0),e}static new(e){return new Date(e)}static formatLocal(e){const t=we.new(e);return t.toLocaleString(ke(),{dateStyle:"medium",timeStyle:"full"})}static formatRelativeTime(e){const t=we.new(e),l=new Date,a=Math.floor((l-t)/1e3),s=Math.floor(a/60),o=Math.floor(s/60),n=Math.floor(o/24),i=new Intl.RelativeTimeFormat(ke(),{numeric:"auto"});return a<60?i.format(-a,"second"):s<60?i.format(-s,"minute"):o<24?i.format(-o,"hour"):n<30?i.format(-n,"day"):t.toLocaleString(ke(),{dateStyle:"medium",timeStyle:"short"})}}const Le={class:"container"},Ce={key:0,class:"m-0 mb-2 p-0 text-black"},xe={class:"input-group"};var Ee={__name:"TodoList",setup(e){const t=(0,n.KR)([]),l=(0,n.KR)(!1),o=(0,n.KR)(!1),i=(0,n.KR)({}),r=(0,n.KR)(""),d=(0,s.rk)("todoInput"),c=(0,s.rk)("showIncompleteButton"),b=(0,s.EW)((()=>[...t.value].sort(((e,t)=>t.id-e.id)))),p=(0,s.EW)((()=>b.value.filter((e=>e.done)))),m=(0,s.EW)((()=>b.value.filter((e=>!e.done)))),v=(0,s.EW)((()=>p.value.length)),g=(0,s.EW)((()=>l.value?"bi bi-chevron-down":"bi bi-chevron-right")),f=()=>{t.value=JSON.parse(localStorage.getItem("todoItems"))||[]},k=e=>{setTimeout((()=>{e.target.style.outline="none",e.target.style.boxShadow="none",c.value.blur()}),250)},h=e=>{l.value=!l.value,k(e)},y=()=>{r.value&&(t.value.push({id:Date.now(),name:he(r.value),done:!1}),r.value="",C())},w=e=>{i.value=e},L=e=>{t.value=t.value.filter((t=>t.id!==e)),C()},C=()=>{localStorage.setItem("todoItems",JSON.stringify(t.value))};return(0,s.wB)((()=>o.value),(e=>{e&&(0,s.dY)((()=>{d.value.focus()}))})),(0,s.sV)(f),(0,s.sV)((()=>{t.value=t.value.map((e=>{const t=we.new(e.modifiedOn)<we.today();return e.done&&e.repeat&&t?{...e,done:!1,modifiedOn:Date.now()}:e}))})),(e,t)=>((0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",Le,[(0,s.bF)(a.eB,null,{default:(0,s.k6)((()=>[(0,s.bF)($,{todos:m.value,visible:!0,onChange:C,onClick:w},null,8,["todos"])])),_:1}),(0,s.Lk)("button",{id:"showIncompleteButton",ref_key:"showIncompleteButton",ref:c,class:(0,u.C4)(["btn w-100 text-start text-muted",{"mt-2":m.value.length>0}]),onClick:h},[(0,s.Lk)("i",{class:(0,u.C4)(g.value)},null,2),(0,s.eW)(" Completed "+(0,u.v_)(v.value),1)],2),l.value?((0,s.uX)(),(0,s.CE)("hr",Ce)):(0,s.Q3)("",!0),(0,s.bF)(a.eB,null,{default:(0,s.k6)((()=>[(0,s.bo)((0,s.bF)($,{visible:l.value,todos:p.value,onChange:C,onClick:w},null,8,["visible","todos"]),[[a.aG,l.value]])])),_:1})]),null!==i.value?((0,s.uX)(),(0,s.Wv)(ue,{key:0,"modal-id":"editTodoModal","is-new":!1,modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=e=>i.value=e),onChange:C,onDelete:L},null,8,["modelValue"])):(0,s.Q3)("",!0),(0,s.bF)(ge,null,{default:(0,s.k6)((()=>[(0,s.bF)(a.eB,null,{default:(0,s.k6)((()=>[(0,s.bo)((0,s.Lk)("div",xe,[(0,s.bo)((0,s.Lk)("input",{ref_key:"todoInput",ref:d,style:{height:"3.5rem"},type:"text",class:"form-control",placeholder:"Add a new item...","onUpdate:modelValue":t[1]||(t[1]=e=>r.value=e),onKeyup:(0,a.jR)(y,["enter"]),onFocusout:t[2]||(t[2]=e=>o.value=!1)},null,544),[[a.Jo,r.value,void 0,{trim:!0}]]),t[4]||(t[4]=(0,s.Lk)("button",{class:"btn btn-danger"},[(0,s.Lk)("i",{class:"bi bi-x-lg"})],-1))],512),[[a.aG,o.value]])])),_:1}),(0,s.bF)(a.eB,null,{default:(0,s.k6)((()=>[(0,s.bo)((0,s.Lk)("button",{onClick:t[3]||(t[3]=e=>o.value=!o.value),style:{height:"50px",width:"50px"},class:"btn btn-primary rounded-circle fs-5 shadow"},t[5]||(t[5]=[(0,s.Lk)("i",{class:"bi bi-plus-lg"},null,-1)]),512),[[a.aG,!o.value]])])),_:1})])),_:1})],64))}};const _e=(0,v.A)(Ee,[["__scopeId","data-v-434dbf7f"]]);var Re=_e,Fe={__name:"TodoListView",setup(e){return(e,t)=>((0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(O,{title:"Todo List",iconClass:"bi bi-check2-square"}),(0,s.bF)(Re)],64))}};const Xe=Fe;var Se=Xe,Ie=(l(3949),l(1017)),Ve=l.n(Ie);l(9106);const Ne=["disabled"],Te={ref:"outputElement",class:"form-control p-0 m-0",id:"highlighting"};var We={__name:"MarkdownEditor",props:(0,s.zz)({editorVisible:{type:Boolean},disabled:{type:Boolean}},{modelValue:{},modelModifiers:{}}),emits:(0,s.zz)(["input","keydown.enter"],["update:modelValue"]),setup(e,{emit:t}){let o=l(6709);o.use({breaks:!0,silent:!0});const i=(0,s.fn)(e,"modelValue"),d=t,c=e,b=(0,n.KR)(i.value),p=(0,s.rk)("inputElement"),m=(0,s.rk)("editorBg"),v=()=>{let e=document.getElementById("highlighting-content"),t=p.value.value;"\n"==t[t.length-1]&&(t+=" "),e.innerHTML=Ve().highlight(t,Ve().languages.markdown,"md")},g=()=>{p.value.style.height="5px",p.value.style.height=p.value.scrollHeight+"px",m.value.style.height=p.value.scrollHeight+"px"},f=()=>{const e=p.value.selectionStart,t=p.value.value,l=t.lastIndexOf("\n",e-1),a=t.substring(l+1,e);return a},k=()=>{let e=p.value.value,t=e.slice(0,p.value.selectionStart),l=e.slice(p.value.selectionEnd,p.value.value.length),a=e.slice(p.value.selectionStart,p.value.selectionEnd),s={start:p.value.selectionStart,end:p.value.selectionEnd};const o=e.lastIndexOf("\n",s.start-1),n=-1===o?0:o+1,i=e.indexOf("\n",s.start),r=-1===i?e.length:i,d=e.slice(n,r);return{selected:a,before:t,after:l,cursor:s,line:d,isCollapsed:s.start===s.end}},h=e=>{let t=k();p.value.value=t.before+e+t.after,p.value.selectionStart=t.cursor.start+e.length,p.value.selectionEnd=t.cursor.start+e.length,v(),g()},y=()=>{const e=/^(\t*)(\d+)\..+$/,t=p.value.value,l=t.split("\n"),a=p.value.selectionStart;let s=0;l.forEach((function(t,a){const o=e.exec(t);o?(s++,l[a]=l[a].replace(e,((e,t,l)=>t+`${s}`+e.slice(l.length+t.length)))):s=0})),p.value.value=l.join("\n"),p.value.selectionStart=a,p.value.selectionEnd=a,v()},w=e=>{e.preventDefault(),h("\t")},L=()=>{v(),g(),i.value=p.value.value,d("input")},C=e=>{e.preventDefault();const t=/^\t*(\d+)\..+$/,l=/^\t*(-|\*) .+$/;let a=f(),s="\n";if(a.length>0){const e=t.exec(a),o=l.exec(a),n=/(\t+).+/.exec(a);if(n){const e=n.at(0).split("\t").length;s+="\t".repeat(e-1)}if(e){let t=parseInt(e.at(1))+1;s+=`${t}. `}else o&&(s+=o.at(1)+" ")}h(s),y()};return(0,s.wB)((()=>c.editorVisible),(e=>{e&&p.value&&m.value&&(0,s.dY)((()=>{g(),v(),r.settings.notes.autoFocusOnEdit&&p.value.focus()}))})),(0,s.$u)(g),(e,t)=>((0,s.uX)(),(0,s.CE)("div",{class:(0,u.C4)(["root-container",{disabled:c.disabled}])},[(0,s.bo)((0,s.Lk)("textarea",{placeholder:"Note",id:"editing",ref_key:"inputElement",ref:p,spellcheck:"false",rows:"1",class:"form-control p-0 m-0","onUpdate:modelValue":t[0]||(t[0]=e=>b.value=e),disabled:c.disabled,onInput:L,onKeydown:[(0,a.jR)(C,["enter"]),(0,a.jR)(w,["tab"])]},"        ",40,Ne),[[a.Jo,b.value]]),(0,s.Lk)("div",{ref_key:"editorBg",ref:m,id:"editor-bg",class:"form-control p-0 m-0"},null,512),(0,s.Lk)("pre",Te,t[1]||(t[1]=[(0,s.Lk)("code",{id:"highlighting-content"},null,-1),(0,s.Lk)("div",{id:"content-bottom"},null,-1)]),512)],2))}};const Oe=(0,v.A)(We,[["__scopeId","data-v-19197fd2"]]);var Me=Oe;const Ae={class:"container note-editor"},Be={class:"container note-viewer"},Ke={class:"d-flex align-items-center p-0 m-0 mb-2 flex-wrap"},Ue=["textContent"],De=["innerHTML"],Qe={class:"d-flex flex-wrap"},qe=["onClick"],je=["disabled"],$e={key:0,class:"bi bi-eye-fill"},ze={key:1,class:"bi bi-pencil-fill"};let Pe=l(6709);Pe.use({breaks:!0,silent:!0});const He="btn rounded-circle fs-5 shadow",Je={height:"50px",width:"50px"};var Ge={__name:"NoteEditor",props:(0,s.zz)({isNew:{type:Boolean,required:!0}},{modelValue:{},modelModifiers:{}}),emits:(0,s.zz)(["hide-editor","update","delete"],["update:modelValue"]),setup(e,{emit:t}){const l=(0,s.fn)(e,"modelValue"),o=e,i=t,d=(0,n.KR)(o.isNew),c=(0,n.KR)({...l.value}),b=(0,n.KR)(null),p=(0,s.rk)("titleInput"),m=(0,s.EW)((()=>new Date(c.value.id).toLocaleString(ke(),{dateStyle:"medium",timeStyle:"short"}))),v=(0,s.EW)((()=>{let e=c.value.color||ye.colorOptions.cyan;return y(e)})),g=(0,s.EW)((()=>Pe.parse(c.value.text))),f=(0,s.EW)((()=>k.value||!o.isNew)),k=(0,s.EW)((()=>c.value.title.trim().length>=3)),h=e=>{c.value.color=e,x()},y=e=>{let t=ye.hexToRgb(e),l=t.isLight?"#000000":"#FFFFFF";return{bg:e,txt:ye.blendColors(e,l,.7)}},w=()=>{k.value||(c.value.title=b.value||"")},L=()=>{d.value=!d.value,d.value?R():_()},C=()=>{i("hide-editor")},x=()=>{k.value&&i("update",c.value)},E=()=>{i("delete",c.value.id),i("hide-editor")},_=()=>{const e=document.getElementsByTagName("blockquote");for(const t of e)t.classList.add("blockquote","border-start","border-dark-subtle","border-3","ps-2","py-1","fs-6")};async function R(){await(0,s.dY)(),""===c.value.title&&p.value.focus()}return(0,s.wB)((()=>c.value.title),(e=>{k.value&&(b.value=e),R()}),{immediate:!0}),(0,s.sV)((()=>{"Edit"===r.settings.notes.defaultEditorMode&&(d.value=!0),_()})),(e,t)=>((0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bo)((0,s.Lk)("div",Ae,[(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>c.value.title=e),ref_key:"titleInput",ref:p,class:"fs-3 form-control mb-2",placeholder:"Title",type:"text",onInput:x,onFocusout:w},null,544),[[a.Jo,c.value.title]]),(0,s.bF)(Me,{modelValue:c.value.text,"onUpdate:modelValue":t[1]||(t[1]=e=>c.value.text=e),onInput:x,disabled:!k.value,"editor-visible":d.value},null,8,["modelValue","disabled","editor-visible"])],512),[[a.aG,d.value]]),(0,s.bo)((0,s.Lk)("div",Be,[(0,s.Lk)("div",Ke,[(0,s.Lk)("div",{class:"fs-3 text-muted m-0 p-0 flex-fill",textContent:(0,u.v_)(c.value.title)},null,8,Ue),(0,s.Lk)("div",{class:"badge my-1",style:(0,u.Tr)({backgroundColor:v.value.bg,color:v.value.txt})},[t[3]||(t[3]=(0,s.Lk)("i",{class:"bi bi-calendar"},null,-1)),(0,s.eW)(" "+(0,u.v_)(m.value),1)],4)]),t[4]||(t[4]=(0,s.Lk)("hr",{class:"p-0 m-0 mb-2"},null,-1)),(0,s.Lk)("div",{innerHTML:g.value},null,8,De)],512),[[a.aG,!d.value]]),(0,s.bF)(ae,{modalId:"confirmDeleteModal",title:"Are you sure you want to delete this note?"},{footer:(0,s.k6)((()=>[t[6]||(t[6]=(0,s.Lk)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},[(0,s.Lk)("i",{class:"bi bi-x-lg"}),(0,s.eW)(" Cancel ")],-1)),(0,s.Lk)("button",{onClick:E,type:"button",class:"btn btn-danger","data-bs-dismiss":"modal"},t[5]||(t[5]=[(0,s.Lk)("i",{class:"bi bi-trash3"},null,-1),(0,s.eW)(" Delete ")]))])),_:1}),(0,s.bF)(ae,{modalId:"selectColorModal",title:"Select a color..."},{body:(0,s.k6)((()=>[(0,s.Lk)("div",Qe,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)((0,n.R1)(ye).colorOptions,((e,t)=>((0,s.uX)(),(0,s.CE)("button",{key:e,onClick:t=>h(e),"data-bs-dismiss":"modal",class:"btn rounded-pill m-1 color-option",style:(0,u.Tr)({backgroundColor:e,color:y(e).txt})},(0,u.v_)(t),13,qe)))),128))])])),footer:(0,s.k6)((()=>[(0,s.Lk)("button",{type:"button",onClick:t[2]||(t[2]=e=>h(null)),class:"btn btn-secondary btn-warning","data-bs-dismiss":"modal"},t[7]||(t[7]=[(0,s.Lk)("i",{class:"bi bi-eraser-fill"},null,-1),(0,s.eW)(" Clear ")])),t[8]||(t[8]=(0,s.Lk)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},[(0,s.Lk)("i",{class:"bi bi-x-lg"}),(0,s.eW)(" Cancel ")],-1))])),_:1}),(0,s.bF)(ge,null,{default:(0,s.k6)((()=>[(0,s.Lk)("button",{disabled:!f.value,onClick:L,style:Je,class:(0,u.C4)([He,"btn-primary"]),type:"button"},[d.value?((0,s.uX)(),(0,s.CE)("i",$e)):((0,s.uX)(),(0,s.CE)("i",ze))],8,je),(0,s.Lk)("button",{onClick:C,style:Je,class:(0,u.C4)([He,"ms-2 btn-secondary"]),type:"button"},t[9]||(t[9]=[(0,s.Lk)("i",{class:"bi bi-x-lg"},null,-1)]))])),_:1})],64))}};const Ye=(0,v.A)(Ge,[["__scopeId","data-v-d2b8d6ac"]]);var Ze=Ye;const et={key:0,class:"bi bi-pin-fill fs-4 text-warning"},tt={key:1,class:"bi bi-pin fs-4"},lt={key:1,"data-bs-toggle":"modal","data-bs-target":"#selectColorModal",class:"btn py-0 my-0 px-1 mx-1",type:"button"},at={key:2,"data-bs-toggle":"modal","data-bs-target":"#confirmDeleteModal",class:"btn py-0 my-0 px-1 mx-1",type:"button"},st={key:1,class:"container note-list"},ot={key:0,class:"fs-5 text-muted"},nt={class:"row g-2"},it=["onClick"],rt={class:"d-flex align-items-center flex-wrap mb-1"},dt={class:"fs-6 fw-medium flex-fill"};var ct={__name:"NotesList",setup(e){const t=(0,n.KR)([]),l=(0,n.KR)(!1),a=(0,s.EW)((()=>[...t.value].sort(((e,t)=>e.pinned===t.pinned?t.id-e.id:!0===e.pinned?-1:1))));function o(){r.settings.notes.showEditor=!1,r.settings.notes.currentNote={}}const i=()=>{t.value=JSON.parse(localStorage.getItem("notes"))||[]},d=e=>{let t=e.text.replace(/#{1,6}\s+/g,"");return t=t.replace(/(\*\*|__)(.*?)\1/g,"$2"),t=t.replace(/(\*|_)(.*?)\1/g,"$2"),t=t.replace(/-{3,}/g,""),t},c=e=>{const t=d(e);let l=t.slice(0,100);return l+=l.length<t.length?"...":"",l},b=e=>{let t=void 0!==e.color&&e.color,l=e.color||ye.colorOptions.cyan,a=ye.hexToRgb(l),s=a.isLight?"#000000":"#FFFFFF";return{bg:t?l:"inherit",txt:t?ye.blendColors(l,s,.7):"inherit",badge:t?ye.blendColors(l,s,.7):l,badgeTxt:t?l:ye.blendColors(l,s,.9)}},p=e=>{r.settings.notes.currentNote=e,l.value=!1,setTimeout((()=>{r.settings.notes.showEditor=!0}),100)},m=()=>{localStorage.setItem("notes",JSON.stringify(t.value))},v=e=>{const a=t.value.findIndex((t=>t.id===e.id));e.modifiedOn=Date.now(),-1!==a?t.value[a]=e:l.value&&t.value.push(e),r.settings.notes.currentNote=e},g=e=>{t.value=t.value.filter((t=>t.id!==e))},f=()=>{r.settings.notes.currentNote={id:Date.now(),title:"",text:""},l.value=!0,r.settings.notes.showEditor=!0},k=()=>{void 0===r.settings.notes.currentNote.pinned?r.settings.notes.currentNote.pinned=!0:r.settings.notes.currentNote.pinned=!r.settings.notes.currentNote.pinned};return(0,s.wB)((()=>t.value),(()=>{m()}),{deep:!0}),(0,s.sV)(i),(0,s.hi)(o),(e,i)=>((0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(O,{title:"Notes",iconClass:"bi bi-journals"},{"nav-buttons":(0,s.k6)((()=>[(0,n.R1)(r).settings.notes.showEditor?((0,s.uX)(),(0,s.CE)("button",{key:0,onClick:k,class:"btn py-0 my-0 px-1 mx-1",type:"button"},[(0,n.R1)(r).settings.notes.currentNote.pinned?((0,s.uX)(),(0,s.CE)("i",et)):((0,s.uX)(),(0,s.CE)("i",tt))])):(0,s.Q3)("",!0),(0,n.R1)(r).settings.notes.showEditor?((0,s.uX)(),(0,s.CE)("button",lt,i[1]||(i[1]=[(0,s.Lk)("i",{class:"bi bi-palette-fill fs-4 text-primary"},null,-1)]))):(0,s.Q3)("",!0),(0,n.R1)(r).settings.notes.showEditor?((0,s.uX)(),(0,s.CE)("button",at,i[2]||(i[2]=[(0,s.Lk)("i",{class:"bi bi-trash3 fs-4 text-danger"},null,-1)]))):(0,s.Q3)("",!0)])),_:1}),(0,n.R1)(r).settings.notes.showEditor?((0,s.uX)(),(0,s.Wv)(Ze,{key:0,modelValue:(0,n.R1)(r).settings.notes.currentNote,"onUpdate:modelValue":i[0]||(i[0]=e=>(0,n.R1)(r).settings.notes.currentNote=e),"is-new":l.value,onHideEditor:o,onUpdate:v,onDelete:g},null,8,["modelValue","is-new"])):(0,s.Q3)("",!0),(0,n.R1)(r).settings.notes.showEditor?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("div",st,[0===t.value.length?((0,s.uX)(),(0,s.CE)("p",ot,"I know I'm empty right now but I'm full of potential...")):(0,s.Q3)("",!0),(0,s.Lk)("div",nt,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a.value,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.id,class:"col-6 list-group-hover no-select d-flex",onClick:t=>p(e)},[(0,s.Lk)("div",{class:(0,u.C4)(["item list-group-item flex-fill",{"li-active":(0,n.R1)(r).settings.notes.currentNote.id===e.id}]),style:(0,u.Tr)({backgroundColor:e.color,color:b(e).txt})},[(0,s.Lk)("div",rt,[(0,s.Lk)("div",dt,(0,u.v_)(e.title),1),(0,s.Lk)("div",null,[e.pinned?((0,s.uX)(),(0,s.CE)("i",{key:0,class:"me-2 bi bi-pin-fill",style:(0,u.Tr)({color:b(e).badge})},null,4)):(0,s.Q3)("",!0),(0,s.Lk)("div",{class:"badge",style:(0,u.Tr)({backgroundColor:b(e).badge,color:b(e).badgeTxt})},(0,u.v_)(new Date(e.id).toLocaleDateString((0,n.R1)(ke)())),5)])]),(0,n.R1)(r).settings.notes.showPreview?((0,s.uX)(),(0,s.CE)("div",{key:0,class:"note-preview",style:(0,u.Tr)({color:b(e).txt})},(0,u.v_)(c(e)),5)):(0,s.Q3)("",!0)],6)],8,it)))),128))])])),(0,n.R1)(r).settings.notes.showEditor?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.Wv)(ge,{key:2},{default:(0,s.k6)((()=>[(0,s.Lk)("button",{onClick:f,style:{height:"50px",width:"50px"},class:"btn btn-primary rounded-circle fs-5 shadow",type:"button"},i[3]||(i[3]=[(0,s.Lk)("i",{class:"bi bi-plus-lg"},null,-1)]))])),_:1}))],64))}};const ut=(0,v.A)(ct,[["__scopeId","data-v-aa402192"]]);var bt=ut,pt={__name:"NotesView",setup(e){return(e,t)=>((0,s.uX)(),(0,s.Wv)(bt))}};const mt=pt;var vt=mt;l(6573),l(8100),l(7936),l(7467),l(4732),l(9577),l(4979);const gt=/.+src="(http\S+)"\s.+/,ft=[{name:"title",alts:["title"]},{name:"link",alts:["link"]},{name:"description",alts:["description","summary","content:encoded"]},{name:"date",alts:["pubDate","published","dc:date"]},{name:"id",alts:["guid","id"]},{name:"category",alts:["category"]}],kt=[{tag:"media:thumbnail",attr:"url"},{tag:"media:content",attr:"url"}],ht=[{tag:"link",attr:"href"}],yt=e=>!e||""===e,wt=async(e=[])=>{try{const t=e.map((e=>fetch(`http://localhost:5000/proxy?url=${encodeURIComponent(e)}`).then((e=>{if(e.ok)return e.text();console.log("Error fetching feed")})))),l=await Promise.all(t);return l}catch(t){return console.log("Error fetching data"),null}},Lt=async(e=[])=>{const t=await wt(e);if(t){const e=document.createElement("div"),l=t.map((t=>xt(Ct(t),e)));return e.remove(),l}return null},Ct=e=>{let t=e;if(t.includes("base64,"))try{const e=atob(t.split(",")[1]),l=new Uint8Array(e.length);for(let t=0;t<e.length;t++)l[t]=e.charCodeAt(t);const a=new TextDecoder("utf-8");t=a.decode(l)}catch(l){return null}try{const e=new DOMParser,l=e.parseFromString(t,"text/xml");return l}catch(l){return console.log("Failed to parse XML document. Error: "+l),null}},xt=(e,t)=>{if(e){const l=e.querySelector("title"),a=l?l.textContent||l.innerText:null;let s=e.querySelectorAll("item");0===s.length&&(s=e.querySelectorAll("entry"));const o=[];for(let e=0;e<s.length;e++){const l=s[e],n={feedName:a,uniqueId:crypto.randomUUID()};for(let e=0;e<ft.length;e++){const t=ft[e];for(let e=0;e<t.alts.length;e++){const a=t.alts[e],s=l.getElementsByTagName(a);if(s.length>0){n[t.name]=s[0].textContent;break}}}for(let e=0;e<kt.length;e++){const t=kt[e],a=l.getElementsByTagName(t.tag);if(a.length>0){const e=a[0].getAttribute(t.attr);if(e.includes("http")){n.imageUrl=e;break}}}if(yt(n.link))for(let e=0;e<ht.length;e++){const t=ht[e],a=l.getElementsByTagName(t.tag);if(a.length>0){const e=a[0].getAttribute(t.attr);if(e.includes("http")){n.link=e;break}}}if(yt(n.imageUrl)){const e=gt.exec(l.innerHTML);e&&(n.imageUrl=e.at(1))}yt(n.category)&&(n.category=null),n.description&&(n.description.includes("&#")||n.description.includes("</"))&&(t.innerHTML=n.description,n.description=t.textContent||t.innerText||n.description),o.push(n)}return{title:a,items:o}}return null},Et={class:"container"},_t={key:0},Rt=["src"],Ft={class:"card-body"},Xt={class:"d-flex align-items-center flex-wrap mb-1"},St={class:"badge text-truncate text-bg-primary m-1"},It={class:"badge text-bg-warning m-1"},Vt={class:"text-muted m-1"},Nt=["href"],Tt={class:"card-text"},Wt={key:1},Ot="btn rounded-circle fs-5 shadow",Mt={height:"50px",width:"50px"};var At={__name:"RssReader",setup(e){const t=[{url:"https://www.wired.com/feed/rss",category:"Tech"},{url:"https://www.theverge.com/rss/index.xml",category:"Tech"},{url:"https://feeds.bbci.co.uk/news/world/rss.xml",category:"News"},{url:"https://www.dr.dk/nyheder/service/feeds/senestenyt",category:"News"},{url:"https://www.dr.dk/nyheder/service/feeds/indland",category:"News"},{url:"https://www.aljazeera.com/xml/rss/all.xml",category:"News"},{url:"https://techcrunch.com/feed/",category:"Tech"},{url:"https://www.nature.com/nature.rss",category:"Science"}],l=(0,n.KR)([]),a=(0,n.KR)([]),o=(0,n.KR)(0),i=(0,s.EW)((()=>[...a.value].sort(((e,t)=>we.new(t.date)-we.new(e.date))))),r=()=>{l.value=JSON.parse(localStorage.getItem("rssFeeds"))||t},d=async()=>{a.value=[];const e=await Lt(l.value.map((e=>e.url)));e&&e.forEach((e=>{a.value.push(...e.items)}))},c=(0,s.EW)((()=>o.value>200)),b=()=>{window.scrollTo(0,0)};return(0,s.sV)((()=>{r(),d(),window.addEventListener("scroll",(()=>{o.value=window.scrollY}))})),(e,t)=>((0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(O,{title:"Pulse",iconClass:"bi bi-activity"}),(0,s.Lk)("div",Et,[a.value.length>0?((0,s.uX)(),(0,s.CE)("div",_t,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(i.value,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.uniqueId,class:"card shadow mb-2"},[(0,s.Lk)("img",{src:e.imageUrl,class:"card-img-top",style:{"max-height":"200px","object-fit":"cover","object-position":"50% 20%"}},null,8,Rt),(0,s.Lk)("div",Ft,[(0,s.Lk)("div",Xt,[(0,s.Lk)("span",St,(0,u.v_)(e.feedName),1),(0,s.Lk)("span",It,(0,u.v_)(e.category),1),(0,s.Lk)("span",Vt,(0,u.v_)((0,n.R1)(we).formatRelativeTime(e.date)),1)]),(0,s.Lk)("a",{href:e.link||"#",target:"_blank",class:"card-title fs-5"},(0,u.v_)(e.title),9,Nt),(0,s.Lk)("p",Tt,(0,u.v_)(e.description),1)])])))),128))])):(0,s.Q3)("",!0),0===a.value.length?((0,s.uX)(),(0,s.CE)("div",Wt,[((0,s.uX)(),(0,s.CE)(s.FK,null,(0,s.pI)(10,(e=>(0,s.Lk)("div",{key:e,class:"card shadow mb-2"},t[0]||(t[0]=[(0,s.Fv)('<img src="" class="card-img-top placeholder" data-v-4136df76><div class="card-body" data-v-4136df76><a class="btn btn-primary disabled placeholder col-1 mb-2" aria-disabled="true" style="height:10px;" data-v-4136df76></a><a class="btn btn-warning disabled placeholder col-1 ms-2 mb-2" aria-disabled="true" style="height:10px;" data-v-4136df76></a><h5 class="card-title placeholder-glow" data-v-4136df76><span class="placeholder col-6" data-v-4136df76></span></h5><p class="card-text placeholder-glow" data-v-4136df76><span class="placeholder col-7" data-v-4136df76></span><span class="placeholder col-4" data-v-4136df76></span><span class="placeholder col-4" data-v-4136df76></span><span class="placeholder col-6" data-v-4136df76></span><span class="placeholder col-8" data-v-4136df76></span></p><a class="btn btn-primary disabled placeholder col-6" aria-disabled="true" data-v-4136df76></a></div>',2)])))),64))])):(0,s.Q3)("",!0)]),(0,s.bF)(ge,null,{default:(0,s.k6)((()=>[c.value?((0,s.uX)(),(0,s.CE)("button",{key:0,onClick:b,style:Mt,class:(0,u.C4)([Ot,"ms-2 btn-secondary"]),type:"button"},t[1]||(t[1]=[(0,s.Lk)("i",{class:"bi bi-chevron-up"},null,-1)]))):(0,s.Q3)("",!0)])),_:1})],64))}};const Bt=(0,v.A)(At,[["__scopeId","data-v-4136df76"]]);var Kt=Bt;const Ut=[{path:"/",name:"Home",component:Se},{path:"/todolist",name:"Tasks",component:Se},{path:"/notes",name:"Notes",component:vt},{path:"/rss",name:"RSS Reader",component:Kt}],Dt=(0,o.aE)({history:(0,o.Bt)(),routes:Ut});var Qt=Dt,qt={__name:"App",setup(e){const t=(0,o.lq)();return(0,s.wB)((()=>r),(()=>{c(),document.querySelector("body").setAttribute("data-bs-theme",r.settings.darkmode?"dark":"light")}),{immediate:!0,deep:!0}),(0,s.wB)((()=>t.path),(e=>{r.settings.startScreen=e})),(0,s.sV)((()=>{r.settings.startScreen&&Qt.push(r.settings.startScreen)})),(e,t)=>{const l=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.Wv)(l)}}};const jt=qt;var $t=jt,zt=(l(9953),l(4458));(0,zt.k)("/turbo-todo/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),(0,zt.k)("/turbo-todo/custom-service-worker.js");const Pt=(0,a.Ef)($t);Pt.use(Qt),Pt.mount("#app")}},t={};function l(a){var s=t[a];if(void 0!==s)return s.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,l),o.exports}l.m=e,function(){var e=[];l.O=function(t,a,s,o){if(!a){var n=1/0;for(c=0;c<e.length;c++){a=e[c][0],s=e[c][1],o=e[c][2];for(var i=!0,r=0;r<a.length;r++)(!1&o||n>=o)&&Object.keys(l.O).every((function(e){return l.O[e](a[r])}))?a.splice(r--,1):(i=!1,o<n&&(n=o));if(i){e.splice(c--,1);var d=s();void 0!==d&&(t=d)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[a,s,o]}}(),function(){l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,{a:t}),t}}(),function(){l.d=function(e,t){for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};l.O.j=function(t){return 0===e[t]};var t=function(t,a){var s,o,n=a[0],i=a[1],r=a[2],d=0;if(n.some((function(t){return 0!==e[t]}))){for(s in i)l.o(i,s)&&(l.m[s]=i[s]);if(r)var c=r(l)}for(t&&t(a);d<n.length;d++)o=n[d],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(c)},a=self["webpackChunkturbo_todo"]=self["webpackChunkturbo_todo"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=l.O(void 0,[504],(function(){return l(5918)}));a=l.O(a)})();
//# sourceMappingURL=app.2f5352a8.js.map