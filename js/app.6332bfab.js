(function(){"use strict";var e={7758:function(e,t,l){var a=l(5130),s=(l(4114),l(6768)),o=l(1387),n=l(144);const i={darkmode:!0,startScreen:"/",notes:{showEditor:!1,currentNote:{},showPreview:!0,defaultEditorMode:"View",autoFocusOnEdit:!0}},r=(0,n.Kh)({settings:i}),d=()=>{try{const e=JSON.parse(localStorage.getItem("settings"))||{};r.settings={...i,...e}}catch(e){r.settings=i}},u=()=>{localStorage.setItem("settings",JSON.stringify(r.settings))};d();l(8992),l(4520),l(1454);var c=l(4232);const b={class:"ms-3 flex-fill d-flex align-items-center"},v=["id","onUpdate:modelValue","onChange"],p=["for"],m={class:"fs-6"},k={key:0,class:"text-info",style:{"font-size":".75rem"}},g={class:"btn-div align-items-center pe-1"},f=["onClick"];var h={__name:"TodoItem",props:{todos:{type:Array,required:!0},visible:{type:Boolean,default:!0}},emits:["change","click"],setup(e,{emit:t}){const l=t,o=e,n=e=>{e.modifiedOn=Date.now(),setTimeout((()=>{l("change")}),500)},i=e=>{l("click",e)};return(e,t)=>((0,s.uX)(),(0,s.Wv)(a.F,{name:"list",tag:"ul",class:"list-group list-group-hover"},{default:(0,s.k6)((()=>[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.todos,(e=>((0,s.uX)(),(0,s.CE)("li",{key:e.id,class:(0,c.C4)([{disabled:!o.visible},"list-group-item d-flex align-items-center p-0 m-0"])},[(0,s.Lk)("div",b,[(0,s.bo)((0,s.Lk)("input",{id:"todo-"+e.id,type:"checkbox",class:"form-check-input my-0 me-3 fs-4","onUpdate:modelValue":t=>e.done=t,onChange:t=>n(e)},null,40,v),[[a.lH,e.done]]),(0,s.Lk)("label",{for:"todo-"+e.id,class:(0,c.C4)(["form-check-label stretched-link",{completed:e.done}])},[(0,s.Lk)("span",m,(0,c.v_)(e.name),1),e.repeat?((0,s.uX)(),(0,s.CE)("span",k,t[0]||(t[0]=[(0,s.Lk)("br",null,null,-1),(0,s.Lk)("i",{class:"bi bi-repeat me-2"},null,-1),(0,s.eW)("Auto Repeat")]))):(0,s.Q3)("",!0)],10,p)]),(0,s.Lk)("div",g,[(0,s.Lk)("button",{"data-bs-toggle":"modal","data-bs-target":"#editTodoModal",class:"btn",onClick:t=>i(e)},t[1]||(t[1]=[(0,s.Lk)("i",{class:"bi bi-pencil"},null,-1)]),8,f)])],2)))),128))])),_:1}))}},y=l(1241);const w=(0,y.A)(h,[["__scopeId","data-v-1a43083d"]]);var L=w;const C={class:"switch"},x=["checked","disabled"];var E={__name:"ToggleSwitch",props:(0,s.zz)({readonly:{type:Boolean}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=(0,s.fn)(e,"modelValue"),l=e;return(e,o)=>((0,s.uX)(),(0,s.CE)("label",C,[(0,s.bo)((0,s.Lk)("input",{type:"checkbox",checked:t.value,"onUpdate:modelValue":o[0]||(o[0]=e=>t.value=e),disabled:l.readonly},null,8,x),[[a.lH,t.value]]),o[1]||(o[1]=(0,s.Lk)("span",{class:"slider round"},null,-1))]))}};const _=(0,y.A)(E,[["__scopeId","data-v-4e6e1166"]]);var R=_;const F=["id"],X={class:"modal-dialog modal-dialog-centered"},V={class:"modal-content"},I={key:0,class:"modal-header"},S={key:1,class:"modal-header"},W={class:"modal-title"},N={key:2,class:"modal-body"},T={key:3,class:"modal-footer"};var O={__name:"BaseModal",props:{modalId:{type:String,required:!0},title:{type:String}},setup(e){const t=e;return(e,l)=>((0,s.uX)(),(0,s.CE)("div",{id:t.modalId,class:"modal fade",tabIndex:"-1"},[(0,s.Lk)("div",X,[(0,s.Lk)("div",V,[e.$slots.header?((0,s.uX)(),(0,s.CE)("div",I,[(0,s.RG)(e.$slots,"header")])):((0,s.uX)(),(0,s.CE)("div",S,[(0,s.Lk)("h5",W,(0,c.v_)(t.title||""),1)])),e.$slots.body?((0,s.uX)(),(0,s.CE)("div",N,[(0,s.RG)(e.$slots,"body")])):(0,s.Q3)("",!0),e.$slots.footer?((0,s.uX)(),(0,s.CE)("div",T,[(0,s.RG)(e.$slots,"footer")])):(0,s.Q3)("",!0)])])],8,F))}};const M=O;var K=M;const B={key:0,class:"modal-title"},A={key:1,class:"modal-title"},Q={class:"row row-cols-1 g-3"},D={class:"d-flex align-items-center"},j={class:"d-flex align-items-center"};var U={__name:"TodoModal",props:(0,s.zz)({modalId:{type:String,required:!0},isNew:{type:Boolean,required:!0},addNewTodo:{type:Function,required:!1}},{modelValue:{},modelModifiers:{}}),emits:(0,s.zz)(["add","delete","change"],["update:modelValue"]),setup(e,{emit:t}){const l=t,o=(0,s.fn)(e,"modelValue"),n=e,i=()=>{o.value.modifiedOn=Date.now(),l("change")},r=()=>{l("delete",o.value.id)};return(t,l)=>((0,s.uX)(),(0,s.Wv)(K,{"modal-id":e.modalId},{header:(0,s.k6)((()=>[e.isNew?((0,s.uX)(),(0,s.CE)("h5",B,"Add a new item...")):((0,s.uX)(),(0,s.CE)("h5",A,"Edit item")),l[6]||(l[6]=(0,s.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal"},null,-1))])),body:(0,s.k6)((()=>[(0,s.Lk)("div",Q,[(0,s.Lk)("div",D,[(0,s.bo)((0,s.Lk)("input",{type:"checkbox",class:"form-check-input my-0 me-2 fs-5","onUpdate:modelValue":l[0]||(l[0]=e=>o.value.done=e),onChange:i},null,544),[[a.aG,!e.isNew],[a.lH,o.value.done]]),e.isNew?(0,s.bo)(((0,s.uX)(),(0,s.CE)("input",{key:1,type:"text",class:"form-control","onUpdate:modelValue":l[2]||(l[2]=e=>o.value.name=e),onKeyup:l[3]||(l[3]=(0,a.jR)((e=>n.addNewTodo(o.value)),["enter"]))},null,544)),[[a.Jo,o.value.name,void 0,{trim:!0}]]):(0,s.bo)(((0,s.uX)(),(0,s.CE)("input",{key:0,type:"text",class:"form-control","onUpdate:modelValue":l[1]||(l[1]=e=>o.value.name=e),onChange:i},null,544)),[[a.Jo,o.value.name,void 0,{trim:!0}]])]),(0,s.Lk)("div",j,[l[7]||(l[7]=(0,s.Lk)("label",{class:"me-auto"},[(0,s.Lk)("i",{class:"bi bi-repeat me-2"}),(0,s.eW)("Auto Repeat")],-1)),(0,s.bF)(R,{onChange:i,modelValue:o.value.repeat,"onUpdate:modelValue":l[4]||(l[4]=e=>o.value.repeat=e)},null,8,["modelValue"])])])])),footer:(0,s.k6)((()=>[e.isNew?((0,s.uX)(),(0,s.CE)("button",{key:0,onClick:l[5]||(l[5]=e=>n.addNewTodo(o.value)),type:"button",class:"btn btn-primary","data-bs-dismiss":"modal"},l[8]||(l[8]=[(0,s.Lk)("i",{class:"bi bi-file-arrow-up-fill"},null,-1),(0,s.eW)(" Save ")]))):((0,s.uX)(),(0,s.CE)("button",{key:1,onClick:r,type:"button",class:"btn btn-danger","data-bs-dismiss":"modal"},l[9]||(l[9]=[(0,s.Lk)("i",{class:"bi bi-trash3"},null,-1),(0,s.eW)(" Delete ")])))])),_:1},8,["modal-id"]))}};const $=U;var q=$;const H={class:"fixed-bottom",style:{height:"70px"}},z={class:"container",style:{height:"50px"}};var P={__name:"FixedBottom",setup(e){const t=(0,s.OA)();return(e,l)=>((0,s.uX)(),(0,s.CE)("div",H,[(0,s.Lk)("div",z,[(0,s.Lk)("div",{class:(0,c.C4)((0,n.R1)(t).class||"d-flex justify-content-end")},[(0,s.RG)(e.$slots,"default")],2)])]))}};const G=(0,y.A)(P,[["__scopeId","data-v-2e51fe60"]]);var J=G;const Y={class:"navbar fixed-top shadow"},Z={class:"container py-1 d-flex"},ee={class:"fs-4 ms-1 m-0 me-auto no-select"},te={class:"offcanvas offcanvas-end",tabIndex:"-1",id:"offcanvasRight"},le={class:"offcanvas-body"},ae={class:"row row-cols-1 g-3"},se={"data-bs-dismiss":"offcanvas"},oe={"data-bs-dismiss":"offcanvas"},ne={"data-bs-dismiss":"offcanvas"},ie={class:"dropdown"},re={class:"btn btn-outline-primary dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},de={key:0},ue={key:1},ce={class:"dropdown-menu"},be="col p-2 rounded",ve="d-flex align-items-center fs-6";var pe={__name:"TopNav",props:{title:{type:String,required:!0},iconClass:{type:String,required:!0}},setup(e){const t=(0,o.lq)(),l=e,a=()=>{r.settings.notes.autoFocusOnEdit=!r.settings.notes.autoFocusOnEdit},i=()=>{r.settings.notes.showPreview=!r.settings.notes.showPreview},d=()=>{r.settings.darkmode=!r.settings.darkmode},u=(e,t={})=>{navigator.serviceWorker.getRegistration().then((l=>{l.showNotification(e,t)}))},b=()=>"granted"===Notification.permission,v=()=>{b?u("Permission already granted!"):Notification.requestPermission((e=>{"granted"===e&&u("Permission granted!")}))},p=e=>{r.settings.notes.defaultEditorMode=e};return(e,o)=>{const u=(0,s.g2)("RouterLink");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",Y,[(0,s.Lk)("div",Z,[(0,s.Lk)("p",ee,[(0,s.Lk)("i",{class:(0,c.C4)(l.iconClass)},null,2),(0,s.eW)(" "+(0,c.v_)(l.title),1)]),(0,s.RG)(e.$slots,"nav-buttons"),o[5]||(o[5]=(0,s.Lk)("button",{class:"btn py-0 my-0 px-1 mx-1",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasRight"},[(0,s.Lk)("i",{class:"bi bi-list fs-4"})],-1))])]),(0,s.RG)(e.$slots,"modal"),(0,s.Lk)("div",te,[o[19]||(o[19]=(0,s.Lk)("div",{class:"offcanvas-header"},[(0,s.Lk)("h5",{class:"offcanvas-title",id:"offcanvasRightLabel"},"Settings"),(0,s.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1)),(0,s.Lk)("div",le,[(0,s.Lk)("div",ae,[(0,s.Lk)("div",{class:(0,c.C4)(be)},[(0,s.Lk)("div",{class:(0,c.C4)([ve,"flex-wrap"])},[(0,s.Lk)("span",se,[(0,s.bF)(u,{class:"btn btn-primary m-1",to:"/todolist"},{default:(0,s.k6)((()=>o[6]||(o[6]=[(0,s.Lk)("i",{class:"bi bi-check2-square me-2"},null,-1),(0,s.eW)("Tasks")]))),_:1})]),(0,s.Lk)("span",oe,[(0,s.bF)(u,{class:"btn btn-primary m-1",to:"/notes"},{default:(0,s.k6)((()=>o[7]||(o[7]=[(0,s.Lk)("i",{class:"bi bi-journals me-2"},null,-1),(0,s.eW)("Notes")]))),_:1})]),(0,s.Lk)("span",ne,[(0,s.bF)(u,{class:"btn btn-primary m-1",to:"/rss"},{default:(0,s.k6)((()=>o[8]||(o[8]=[(0,s.Lk)("i",{class:"bi bi-activity me-2"},null,-1),(0,s.eW)("Pulse")]))),_:1})])])]),(0,s.Lk)("div",{class:(0,c.C4)(["col-btn btn w-100",be]),onClick:d},[(0,s.Lk)("div",{class:(0,c.C4)(ve)},[o[9]||(o[9]=(0,s.Lk)("label",{class:"me-auto"},[(0,s.Lk)("i",{class:"bi bi-moon-stars-fill me-2"}),(0,s.eW)("Dark mode")],-1)),(0,s.bF)(R,{readonly:"",modelValue:(0,n.R1)(r).settings.darkmode,"onUpdate:modelValue":o[0]||(o[0]=e=>(0,n.R1)(r).settings.darkmode=e)},null,8,["modelValue"])])]),(0,s.Lk)("div",{class:(0,c.C4)(be)},[(0,s.Lk)("div",{class:(0,c.C4)(ve)},[o[10]||(o[10]=(0,s.Lk)("label",{class:"me-auto"},[(0,s.Lk)("i",{class:"bi bi-bell-fill me-2"}),(0,s.eW)("Enable notifications")],-1)),(0,s.Lk)("button",{onClick:v,class:(0,c.C4)(["btn btn-outline-primary",{"disabled btn-outline-secondary":b}])},(0,c.v_)(b?"Enabled":"Request"),3)])]),"/todolist"===(0,n.R1)(t).path||"/"===(0,n.R1)(t).path?((0,s.uX)(),(0,s.CE)("div",{key:0,class:(0,c.C4)([be,"col-btn"]),"data-bs-toggle":"modal","data-bs-target":"#newListModal"},[(0,s.Lk)("div",{class:(0,c.C4)(ve)},o[11]||(o[11]=[(0,s.Lk)("label",{class:"me-auto"},[(0,s.Lk)("i",{class:"bi bi-plus-lg me-2"}),(0,s.eW)("Create new list")],-1)]))])):(0,s.Q3)("",!0),"/notes"===(0,n.R1)(t).path?((0,s.uX)(),(0,s.CE)("div",{key:1,class:(0,c.C4)(["col-btn btn w-100",be]),onClick:i},[(0,s.Lk)("div",{class:(0,c.C4)(ve)},[o[12]||(o[12]=(0,s.Lk)("label",{class:"me-auto"},[(0,s.Lk)("i",{class:"bi bi-binoculars-fill me-2"}),(0,s.eW)("Show note preview")],-1)),(0,s.bF)(R,{readonly:"",modelValue:(0,n.R1)(r).settings.notes.showPreview,"onUpdate:modelValue":o[1]||(o[1]=e=>(0,n.R1)(r).settings.notes.showPreview=e)},null,8,["modelValue"])])])):(0,s.Q3)("",!0),"/notes"===(0,n.R1)(t).path?((0,s.uX)(),(0,s.CE)("div",{key:2,class:(0,c.C4)(["col-btn btn w-100",be]),onClick:a},[(0,s.Lk)("div",{class:(0,c.C4)(ve)},[o[13]||(o[13]=(0,s.Lk)("label",{class:"me-auto"},[(0,s.Lk)("i",{class:"bi bi-keyboard me-2"}),(0,s.eW)("Autofocus on edit")],-1)),(0,s.bF)(R,{readonly:"",modelValue:(0,n.R1)(r).settings.notes.autoFocusOnEdit,"onUpdate:modelValue":o[2]||(o[2]=e=>(0,n.R1)(r).settings.notes.autoFocusOnEdit=e)},null,8,["modelValue"])])])):(0,s.Q3)("",!0),"/notes"===(0,n.R1)(t).path?((0,s.uX)(),(0,s.CE)("div",{key:3,class:(0,c.C4)(be)},[(0,s.Lk)("div",{class:(0,c.C4)(ve)},[o[18]||(o[18]=(0,s.Lk)("label",{class:"me-auto"},[(0,s.Lk)("i",{class:"bi bi-card-text me-2"}),(0,s.eW)("Default editor mode")],-1)),(0,s.Lk)("div",ie,[(0,s.Lk)("button",re,["View"===(0,n.R1)(r).settings.notes.defaultEditorMode?((0,s.uX)(),(0,s.CE)("span",de,o[14]||(o[14]=[(0,s.Lk)("i",{class:"bi bi-eye-fill me-2"},null,-1),(0,s.eW)("View")]))):(0,s.Q3)("",!0),"Edit"===(0,n.R1)(r).settings.notes.defaultEditorMode?((0,s.uX)(),(0,s.CE)("span",ue,o[15]||(o[15]=[(0,s.Lk)("i",{class:"bi bi-pencil-fill me-2"},null,-1),(0,s.eW)("Edit")]))):(0,s.Q3)("",!0)]),(0,s.Lk)("ul",ce,[(0,s.Lk)("li",null,[(0,s.Lk)("a",{onClick:o[3]||(o[3]=e=>p("View")),class:"dropdown-item"},o[16]||(o[16]=[(0,s.Lk)("i",{class:"bi bi-eye-fill me-2"},null,-1),(0,s.eW)("View")]))]),(0,s.Lk)("li",null,[(0,s.Lk)("a",{onClick:o[4]||(o[4]=e=>p("Edit")),class:"dropdown-item"},o[17]||(o[17]=[(0,s.Lk)("i",{class:"bi bi-pencil-fill me-2"},null,-1),(0,s.eW)("Edit")]))])])])])])):(0,s.Q3)("",!0)])])])],64)}}};const me=(0,y.A)(pe,[["__scopeId","data-v-eb92cab6"]]);var ke=me,ge=l(1114);function fe(){return navigator.language||navigator.languages[0]}function he(e){return e.charAt(0).toUpperCase()+e.slice(1)}class ye{constructor(){}static hexToRgb(e){e=e.replace(/^#/,"");const t=parseInt(e.substr(0,2),16),l=parseInt(e.substr(2,2),16),a=parseInt(e.substr(4,2),16),s=(299*t+587*l+114*a)/1e3;return{r:t,g:l,b:a,isLight:s>=128}}static blendColors(e,t,l,a=1){const s=ye.hexToRgb(e),o=ye.hexToRgb(t),n=Math.round(s.r*(1-l)+o.r*l),i=Math.round(s.b*(1-l)+o.b*l),r=Math.round(s.g*(1-l)+o.g*l),d=`#${((1<<24)+(n<<16)+(r<<8)+i).toString(16).slice(1).toUpperCase()}${Math.round(255*a).toString(16).padStart(2,"0").toUpperCase()}`;return d}}(0,ge.A)(ye,"colorOptions",{blue:"#0d6efd",indigo:"#6610f2",purple:"#6f42c1",pink:"#d63384",red:"#dc3545",orange:"#fd7e14",yellow:"#ffc107",green:"#198754",teal:"#20c997",cyan:"#0dcaf0",charcoal:"#343a40"});class we{constructor(){}static now(){return Date.now()}static today(){const e=new Date;return e.setHours(0,0,0,0),e}static new(e){return new Date(e)}static formatLocal(e){const t=we.new(e);return t.toLocaleString(fe(),{dateStyle:"medium",timeStyle:"full"})}static formatRelativeTime(e){const t=we.new(e),l=new Date,a=Math.floor((l-t)/1e3),s=Math.floor(a/60),o=Math.floor(s/60),n=Math.floor(o/24),i=new Intl.RelativeTimeFormat(fe(),{numeric:"auto"});return a<60?i.format(-a,"second"):s<60?i.format(-s,"minute"):o<24?i.format(-o,"hour"):n<30?i.format(-n,"day"):t.toLocaleString(fe(),{dateStyle:"medium",timeStyle:"short"})}}const Le={class:"container"},Ce={key:0,class:"d-flex align-items-center input-container"},xe={key:0,class:"m-0 mb-2 p-0 text-black"};var Ee={__name:"TodoList",setup(e){const t=(0,n.KR)([]),l=(0,n.KR)(!1),o=(0,n.KR)(!1),i=(0,n.KR)({}),r=(0,n.KR)(""),d=(0,s.rk)("showIncompleteButton"),u=(0,s.EW)((()=>[...t.value].sort(((e,t)=>t.id-e.id)))),b=(0,s.EW)((()=>u.value.filter((e=>e.done)))),v=(0,s.EW)((()=>u.value.filter((e=>!e.done)))),p=(0,s.EW)((()=>b.value.length)),m=(0,s.EW)((()=>l.value?"bi bi-chevron-down":"bi bi-chevron-right")),k=()=>{t.value=JSON.parse(localStorage.getItem("todoItems"))||[]},g=e=>{setTimeout((()=>{e.target.style.outline="none",e.target.style.boxShadow="none",d.value.blur()}),250)},f=e=>{l.value=!l.value,g(e)},h=()=>{r.value&&(t.value.push({id:Date.now(),name:he(r.value),done:!1}),r.value="",C())},y=e=>{i.value=e},w=e=>{t.value=t.value.filter((t=>t.id!==e)),C()},C=()=>{localStorage.setItem("todoItems",JSON.stringify(t.value))},x=()=>{t.value=t.value.map((e=>{const t=we.new(e.modifiedOn)<we.today();return e.done&&e.repeat&&t?{...e,done:!1,modifiedOn:Date.now()}:e}))},E={mounted:e=>e.focus()};return(0,s.sV)(k),(0,s.sV)(x),(e,t)=>((0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(ke,{title:"Todo List",iconClass:"bi bi-check2-square"},{modal:(0,s.k6)((()=>[(0,s.bF)(K,{"modal-id":"newListModal",title:"Create a new list"},{body:(0,s.k6)((()=>t[4]||(t[4]=[(0,s.Lk)("input",{type:"text",placeholder:"New list name...",class:"form-control"},null,-1)]))),footer:(0,s.k6)((()=>t[5]||(t[5]=[(0,s.Lk)("button",{"data-bs-dismiss":"modal",class:"btn btn-danger"},[(0,s.Lk)("i",{class:"bi bi-x-lg me-1"}),(0,s.eW)("Cancel")],-1),(0,s.Lk)("button",{"data-bs-dismiss":"modal",class:"btn btn-primary"},[(0,s.Lk)("i",{class:"bi bi-check-lg me-1"}),(0,s.eW)("Submit")],-1)]))),_:1})])),_:1}),(0,s.Lk)("div",Le,[(0,s.bF)(a.eB,{name:"input"},{default:(0,s.k6)((()=>[o.value?((0,s.uX)(),(0,s.CE)("div",Ce,[(0,s.bo)((0,s.Lk)("input",{id:"newTodoInput",type:"text",class:"form-control me-auto",placeholder:"Add a new item...","onUpdate:modelValue":t[0]||(t[0]=e=>r.value=e),onKeyup:(0,a.jR)(h,["enter"]),onFocusout:t[1]||(t[1]=e=>o.value=!1)},null,544),[[E],[a.Jo,r.value,void 0,{trim:!0}]]),t[6]||(t[6]=(0,s.Lk)("button",{class:"btn text-danger"},[(0,s.Lk)("i",{class:"bi bi-x-lg"})],-1))])):(0,s.Q3)("",!0)])),_:1}),(0,s.bF)(a.eB,null,{default:(0,s.k6)((()=>[(0,s.bF)(L,{todos:v.value,visible:!0,onChange:C,onClick:y},null,8,["todos"])])),_:1}),(0,s.Lk)("button",{id:"showIncompleteButton",ref_key:"showIncompleteButton",ref:d,class:(0,c.C4)(["btn w-100 text-start text-muted",{"mt-2":v.value.length>0}]),onClick:f},[(0,s.Lk)("i",{class:(0,c.C4)(m.value)},null,2),(0,s.eW)(" Completed "+(0,c.v_)(p.value),1)],2),l.value?((0,s.uX)(),(0,s.CE)("hr",xe)):(0,s.Q3)("",!0),(0,s.bF)(a.eB,null,{default:(0,s.k6)((()=>[(0,s.bo)((0,s.bF)(L,{visible:l.value,todos:b.value,onChange:C,onClick:y},null,8,["visible","todos"]),[[a.aG,l.value]])])),_:1})]),null!==i.value?((0,s.uX)(),(0,s.Wv)(q,{key:0,"modal-id":"editTodoModal","is-new":!1,modelValue:i.value,"onUpdate:modelValue":t[2]||(t[2]=e=>i.value=e),onChange:C,onDelete:w},null,8,["modelValue"])):(0,s.Q3)("",!0),(0,s.bF)(J,null,{default:(0,s.k6)((()=>[(0,s.bF)(a.eB,null,{default:(0,s.k6)((()=>[(0,s.bo)((0,s.Lk)("button",{onClick:t[3]||(t[3]=e=>o.value=!o.value),style:{height:"50px",width:"50px"},class:"btn btn-primary rounded-circle fs-5 shadow"},t[7]||(t[7]=[(0,s.Lk)("i",{class:"bi bi-plus-lg"},null,-1)]),512),[[a.aG,!o.value]])])),_:1})])),_:1})],64))}};const _e=(0,y.A)(Ee,[["__scopeId","data-v-1558684b"]]);var Re=_e,Fe={__name:"TodoListView",setup(e){return(e,t)=>((0,s.uX)(),(0,s.Wv)(Re))}};const Xe=Fe;var Ve=Xe,Ie=(l(3949),l(1017)),Se=l.n(Ie);l(9106);const We=["disabled"],Ne={ref:"outputElement",class:"form-control p-0 m-0",id:"highlighting"};var Te={__name:"MarkdownEditor",props:(0,s.zz)({editorVisible:{type:Boolean},disabled:{type:Boolean}},{modelValue:{},modelModifiers:{}}),emits:(0,s.zz)(["input","keydown.enter"],["update:modelValue"]),setup(e,{emit:t}){let o=l(6709);o.use({breaks:!0,silent:!0});const i=(0,s.fn)(e,"modelValue"),d=t,u=e,b=(0,n.KR)(i.value),v=(0,s.rk)("inputElement"),p=(0,s.rk)("editorBg"),m=()=>{let e=document.getElementById("highlighting-content"),t=v.value.value;"\n"==t[t.length-1]&&(t+=" "),e.innerHTML=Se().highlight(t,Se().languages.markdown,"md")},k=()=>{v.value.style.height="5px",v.value.style.height=v.value.scrollHeight+"px",p.value.style.height=v.value.scrollHeight+"px"},g=()=>{const e=v.value.selectionStart,t=v.value.value,l=t.lastIndexOf("\n",e-1),a=t.substring(l+1,e);return a},f=()=>{let e=v.value.value,t=e.slice(0,v.value.selectionStart),l=e.slice(v.value.selectionEnd,v.value.value.length),a=e.slice(v.value.selectionStart,v.value.selectionEnd),s={start:v.value.selectionStart,end:v.value.selectionEnd};const o=e.lastIndexOf("\n",s.start-1),n=-1===o?0:o+1,i=e.indexOf("\n",s.start),r=-1===i?e.length:i,d=e.slice(n,r);return{selected:a,before:t,after:l,cursor:s,line:d,isCollapsed:s.start===s.end}},h=e=>{let t=f();v.value.value=t.before+e+t.after,v.value.selectionStart=t.cursor.start+e.length,v.value.selectionEnd=t.cursor.start+e.length,m(),k()},y=()=>{const e=/^(\t*)(\d+)\..+$/,t=v.value.value,l=t.split("\n"),a=v.value.selectionStart;let s=0;l.forEach((function(t,a){const o=e.exec(t);o?(s++,l[a]=l[a].replace(e,((e,t,l)=>t+`${s}`+e.slice(l.length+t.length)))):s=0})),v.value.value=l.join("\n"),v.value.selectionStart=a,v.value.selectionEnd=a,m()},w=e=>{e.preventDefault(),h("\t")},L=()=>{m(),k(),i.value=v.value.value,d("input")},C=e=>{e.preventDefault();const t=/^\t*(\d+)\..+$/,l=/^\t*(-|\*) .+$/;let a=g(),s="\n";if(a.length>0){const e=t.exec(a),o=l.exec(a),n=/(\t+).+/.exec(a);if(n){const e=n.at(0).split("\t").length;s+="\t".repeat(e-1)}if(e){let t=parseInt(e.at(1))+1;s+=`${t}. `}else o&&(s+=o.at(1)+" ")}h(s),y()};return(0,s.wB)((()=>u.editorVisible),(e=>{e&&v.value&&p.value&&(0,s.dY)((()=>{k(),m(),r.settings.notes.autoFocusOnEdit&&v.value.focus()}))})),(0,s.$u)(k),(e,t)=>((0,s.uX)(),(0,s.CE)("div",{class:(0,c.C4)(["root-container",{disabled:u.disabled}])},[(0,s.bo)((0,s.Lk)("textarea",{placeholder:"Note",id:"editing",ref_key:"inputElement",ref:v,spellcheck:"false",rows:"1",class:"form-control p-0 m-0","onUpdate:modelValue":t[0]||(t[0]=e=>b.value=e),disabled:u.disabled,onInput:L,onKeydown:[(0,a.jR)(C,["enter"]),(0,a.jR)(w,["tab"])]},"        ",40,We),[[a.Jo,b.value]]),(0,s.Lk)("div",{ref_key:"editorBg",ref:p,id:"editor-bg",class:"form-control p-0 m-0"},null,512),(0,s.Lk)("pre",Ne,t[1]||(t[1]=[(0,s.Lk)("code",{id:"highlighting-content"},null,-1),(0,s.Lk)("div",{id:"content-bottom"},null,-1)]),512)],2))}};const Oe=(0,y.A)(Te,[["__scopeId","data-v-19197fd2"]]);var Me=Oe;const Ke={class:"container note-editor"},Be={class:"container note-viewer"},Ae={class:"d-flex align-items-center p-0 m-0 mb-2 flex-wrap"},Qe=["textContent"],De=["innerHTML"],je={class:"d-flex flex-wrap"},Ue=["onClick"],$e=["disabled"],qe={key:0,class:"bi bi-eye-fill"},He={key:1,class:"bi bi-pencil-fill"};let ze=l(6709);ze.use({breaks:!0,silent:!0});const Pe="btn rounded-circle fs-5 shadow",Ge={height:"50px",width:"50px"};var Je={__name:"NoteEditor",props:(0,s.zz)({isNew:{type:Boolean,required:!0}},{modelValue:{},modelModifiers:{}}),emits:(0,s.zz)(["hide-editor","update","delete"],["update:modelValue"]),setup(e,{emit:t}){const l=(0,s.fn)(e,"modelValue"),o=e,i=t,d=(0,n.KR)(o.isNew),u=(0,n.KR)({...l.value}),b=(0,n.KR)(null),v=(0,s.rk)("titleInput"),p=(0,s.EW)((()=>new Date(u.value.id).toLocaleString(fe(),{dateStyle:"medium",timeStyle:"short"}))),m=(0,s.EW)((()=>{let e=u.value.color||ye.colorOptions.cyan;return y(e)})),k=(0,s.EW)((()=>ze.parse(u.value.text))),g=(0,s.EW)((()=>f.value||!o.isNew)),f=(0,s.EW)((()=>u.value.title.trim().length>=3)),h=e=>{u.value.color=e,x()},y=e=>{let t=ye.hexToRgb(e),l=t.isLight?"#000000":"#FFFFFF";return{bg:e,txt:ye.blendColors(e,l,.7)}},w=()=>{f.value||(u.value.title=b.value||"")},L=()=>{d.value=!d.value,d.value?R():_()},C=()=>{i("hide-editor")},x=()=>{f.value&&i("update",u.value)},E=()=>{i("delete",u.value.id),i("hide-editor")},_=()=>{const e=document.getElementsByTagName("blockquote");for(const t of e)t.classList.add("blockquote","border-start","border-dark-subtle","border-3","ps-2","py-1","fs-6")};async function R(){await(0,s.dY)(),""===u.value.title&&v.value.focus()}return(0,s.wB)((()=>u.value.title),(e=>{f.value&&(b.value=e),R()}),{immediate:!0}),(0,s.sV)((()=>{"Edit"===r.settings.notes.defaultEditorMode&&(d.value=!0),_()})),(e,t)=>((0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bo)((0,s.Lk)("div",Ke,[(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>u.value.title=e),ref_key:"titleInput",ref:v,class:"fs-3 form-control mb-2",placeholder:"Title",type:"text",onInput:x,onFocusout:w},null,544),[[a.Jo,u.value.title]]),(0,s.bF)(Me,{modelValue:u.value.text,"onUpdate:modelValue":t[1]||(t[1]=e=>u.value.text=e),onInput:x,disabled:!f.value,"editor-visible":d.value},null,8,["modelValue","disabled","editor-visible"])],512),[[a.aG,d.value]]),(0,s.bo)((0,s.Lk)("div",Be,[(0,s.Lk)("div",Ae,[(0,s.Lk)("div",{class:"fs-3 text-muted m-0 p-0 flex-fill",textContent:(0,c.v_)(u.value.title)},null,8,Qe),(0,s.Lk)("div",{class:"badge my-1",style:(0,c.Tr)({backgroundColor:m.value.bg,color:m.value.txt})},[t[3]||(t[3]=(0,s.Lk)("i",{class:"bi bi-calendar"},null,-1)),(0,s.eW)(" "+(0,c.v_)(p.value),1)],4)]),t[4]||(t[4]=(0,s.Lk)("hr",{class:"p-0 m-0 mb-2"},null,-1)),(0,s.Lk)("div",{innerHTML:k.value},null,8,De)],512),[[a.aG,!d.value]]),(0,s.bF)(K,{modalId:"confirmDeleteModal",title:"Are you sure you want to delete this note?"},{footer:(0,s.k6)((()=>[t[6]||(t[6]=(0,s.Lk)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},[(0,s.Lk)("i",{class:"bi bi-x-lg"}),(0,s.eW)(" Cancel ")],-1)),(0,s.Lk)("button",{onClick:E,type:"button",class:"btn btn-danger","data-bs-dismiss":"modal"},t[5]||(t[5]=[(0,s.Lk)("i",{class:"bi bi-trash3"},null,-1),(0,s.eW)(" Delete ")]))])),_:1}),(0,s.bF)(K,{modalId:"selectColorModal",title:"Select a color..."},{body:(0,s.k6)((()=>[(0,s.Lk)("div",je,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)((0,n.R1)(ye).colorOptions,((e,t)=>((0,s.uX)(),(0,s.CE)("button",{key:e,onClick:t=>h(e),"data-bs-dismiss":"modal",class:"btn rounded-pill m-1 color-option",style:(0,c.Tr)({backgroundColor:e,color:y(e).txt})},(0,c.v_)(t),13,Ue)))),128))])])),footer:(0,s.k6)((()=>[(0,s.Lk)("button",{type:"button",onClick:t[2]||(t[2]=e=>h(null)),class:"btn btn-secondary btn-warning","data-bs-dismiss":"modal"},t[7]||(t[7]=[(0,s.Lk)("i",{class:"bi bi-eraser-fill"},null,-1),(0,s.eW)(" Clear ")])),t[8]||(t[8]=(0,s.Lk)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},[(0,s.Lk)("i",{class:"bi bi-x-lg"}),(0,s.eW)(" Cancel ")],-1))])),_:1}),(0,s.bF)(J,null,{default:(0,s.k6)((()=>[(0,s.Lk)("button",{disabled:!g.value,onClick:L,style:Ge,class:(0,c.C4)([Pe,"btn-primary"]),type:"button"},[d.value?((0,s.uX)(),(0,s.CE)("i",qe)):((0,s.uX)(),(0,s.CE)("i",He))],8,$e),(0,s.Lk)("button",{onClick:C,style:Ge,class:(0,c.C4)([Pe,"ms-2 btn-secondary"]),type:"button"},t[9]||(t[9]=[(0,s.Lk)("i",{class:"bi bi-x-lg"},null,-1)]))])),_:1})],64))}};const Ye=(0,y.A)(Je,[["__scopeId","data-v-d2b8d6ac"]]);var Ze=Ye;const et={key:0,class:"bi bi-pin-fill fs-4 text-warning"},tt={key:1,class:"bi bi-pin fs-4"},lt={key:1,"data-bs-toggle":"modal","data-bs-target":"#selectColorModal",class:"btn py-0 my-0 px-1 mx-1",type:"button"},at={key:2,"data-bs-toggle":"modal","data-bs-target":"#confirmDeleteModal",class:"btn py-0 my-0 px-1 mx-1",type:"button"},st={key:1,class:"container note-list"},ot={key:0,class:"fs-5 text-muted"},nt={class:"row g-2"},it=["onClick"],rt={class:"d-flex align-items-center flex-wrap mb-1"},dt={class:"fs-6 fw-medium flex-fill"};var ut={__name:"NotesList",setup(e){const t=(0,n.KR)([]),l=(0,n.KR)(!1),a=(0,s.EW)((()=>[...t.value].sort(((e,t)=>e.pinned===t.pinned?t.id-e.id:!0===e.pinned?-1:1))));function o(){r.settings.notes.showEditor=!1,r.settings.notes.currentNote={}}const i=()=>{t.value=JSON.parse(localStorage.getItem("notes"))||[]},d=e=>{let t=e.text.replace(/#{1,6}\s+/g,"");return t=t.replace(/(\*\*|__)(.*?)\1/g,"$2"),t=t.replace(/(\*|_)(.*?)\1/g,"$2"),t=t.replace(/-{3,}/g,""),t},u=e=>{const t=d(e);let l=t.slice(0,100);return l+=l.length<t.length?"...":"",l},b=e=>{let t=void 0!==e.color&&e.color,l=e.color||ye.colorOptions.cyan,a=ye.hexToRgb(l),s=a.isLight?"#000000":"#FFFFFF";return{bg:t?l:"inherit",txt:t?ye.blendColors(l,s,.7):"inherit",badge:t?ye.blendColors(l,s,.7):l,badgeTxt:t?l:ye.blendColors(l,s,.9)}},v=e=>{r.settings.notes.currentNote=e,l.value=!1,setTimeout((()=>{r.settings.notes.showEditor=!0}),100)},p=()=>{localStorage.setItem("notes",JSON.stringify(t.value))},m=e=>{const a=t.value.findIndex((t=>t.id===e.id));e.modifiedOn=Date.now(),-1!==a?t.value[a]=e:l.value&&t.value.push(e),r.settings.notes.currentNote=e},k=e=>{t.value=t.value.filter((t=>t.id!==e))},g=()=>{r.settings.notes.currentNote={id:Date.now(),title:"",text:""},l.value=!0,r.settings.notes.showEditor=!0},f=()=>{void 0===r.settings.notes.currentNote.pinned?r.settings.notes.currentNote.pinned=!0:r.settings.notes.currentNote.pinned=!r.settings.notes.currentNote.pinned};return(0,s.wB)((()=>t.value),(()=>{p()}),{deep:!0}),(0,s.sV)(i),(0,s.hi)(o),(e,i)=>((0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(ke,{title:"Notes",iconClass:"bi bi-journals"},{"nav-buttons":(0,s.k6)((()=>[(0,n.R1)(r).settings.notes.showEditor?((0,s.uX)(),(0,s.CE)("button",{key:0,onClick:f,class:"btn py-0 my-0 px-1 mx-1",type:"button"},[(0,n.R1)(r).settings.notes.currentNote.pinned?((0,s.uX)(),(0,s.CE)("i",et)):((0,s.uX)(),(0,s.CE)("i",tt))])):(0,s.Q3)("",!0),(0,n.R1)(r).settings.notes.showEditor?((0,s.uX)(),(0,s.CE)("button",lt,i[1]||(i[1]=[(0,s.Lk)("i",{class:"bi bi-palette-fill fs-4 text-primary"},null,-1)]))):(0,s.Q3)("",!0),(0,n.R1)(r).settings.notes.showEditor?((0,s.uX)(),(0,s.CE)("button",at,i[2]||(i[2]=[(0,s.Lk)("i",{class:"bi bi-trash3 fs-4 text-danger"},null,-1)]))):(0,s.Q3)("",!0)])),_:1}),(0,n.R1)(r).settings.notes.showEditor?((0,s.uX)(),(0,s.Wv)(Ze,{key:0,modelValue:(0,n.R1)(r).settings.notes.currentNote,"onUpdate:modelValue":i[0]||(i[0]=e=>(0,n.R1)(r).settings.notes.currentNote=e),"is-new":l.value,onHideEditor:o,onUpdate:m,onDelete:k},null,8,["modelValue","is-new"])):(0,s.Q3)("",!0),(0,n.R1)(r).settings.notes.showEditor?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("div",st,[0===t.value.length?((0,s.uX)(),(0,s.CE)("p",ot,"I know I'm empty right now but I'm full of potential...")):(0,s.Q3)("",!0),(0,s.Lk)("div",nt,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a.value,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.id,class:"col-6 list-group-hover no-select d-flex",onClick:t=>v(e)},[(0,s.Lk)("div",{class:(0,c.C4)(["item list-group-item flex-fill",{"li-active":(0,n.R1)(r).settings.notes.currentNote.id===e.id}]),style:(0,c.Tr)({backgroundColor:e.color,color:b(e).txt})},[(0,s.Lk)("div",rt,[(0,s.Lk)("div",dt,(0,c.v_)(e.title),1),(0,s.Lk)("div",null,[e.pinned?((0,s.uX)(),(0,s.CE)("i",{key:0,class:"me-2 bi bi-pin-fill",style:(0,c.Tr)({color:b(e).badge})},null,4)):(0,s.Q3)("",!0),(0,s.Lk)("div",{class:"badge",style:(0,c.Tr)({backgroundColor:b(e).badge,color:b(e).badgeTxt})},(0,c.v_)(new Date(e.id).toLocaleDateString((0,n.R1)(fe)())),5)])]),(0,n.R1)(r).settings.notes.showPreview?((0,s.uX)(),(0,s.CE)("div",{key:0,class:"note-preview",style:(0,c.Tr)({color:b(e).txt})},(0,c.v_)(u(e)),5)):(0,s.Q3)("",!0)],6)],8,it)))),128))])])),(0,n.R1)(r).settings.notes.showEditor?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.Wv)(J,{key:2},{default:(0,s.k6)((()=>[(0,s.Lk)("button",{onClick:g,style:{height:"50px",width:"50px"},class:"btn btn-primary rounded-circle fs-5 shadow",type:"button"},i[3]||(i[3]=[(0,s.Lk)("i",{class:"bi bi-plus-lg"},null,-1)]))])),_:1}))],64))}};const ct=(0,y.A)(ut,[["__scopeId","data-v-aa402192"]]);var bt=ct,vt={__name:"NotesView",setup(e){return(e,t)=>((0,s.uX)(),(0,s.Wv)(bt))}};const pt=vt;var mt=pt;l(670);const kt={class:"container"},gt={key:0},ft=["src"],ht={class:"card-body"},yt={class:"d-flex align-items-center flex-wrap mb-1"},wt={class:"badge text-truncate text-bg-primary m-1"},Lt={class:"badge text-bg-warning m-1"},Ct={class:"text-muted m-1"},xt=["href"],Et=["innerHTML"],_t={key:1},Rt="btn rounded-circle fs-5 shadow",Ft={height:"50px",width:"50px"};var Xt={__name:"RssReader",setup(e){const t=(0,n.KR)([]),l=(0,n.KR)([]),o=(0,n.KR)(0),i=(0,s.rk)("parseHtmlContainer"),r=(0,s.EW)((()=>[...l.value].sort(((e,t)=>we.new(p(t))-we.new(p(e)))))),d=(0,s.EW)((()=>o.value>200)),u=async()=>{try{const e=await fetch("https://gist.githubusercontent.com/thedatag33k/b8651d3082627e7d485e09cbea714952/raw/feed_data.json"),a=await e.json();t.value=JSON.parse(a),l.value=t.value.flatMap(((e,t)=>e.entries.map((e=>({entry:e,feedIndex:t})))))}catch(e){console.log("Error fetching gist data:",e)}},b=()=>{window.scrollTo(0,0)},v=e=>{const t=e.entry.media_thumbnail;if(t)return t[0].url;{const t=/<img[^>]+src="([^">]+)/,l=t.exec(e.entry.summary);if(l)return l.at(1)}return""},p=e=>e.entry.published||e.entry.updated,m=e=>{const t=e.entry.tags;return t?t[0].term:null},k=e=>(i.value.innerHTML=e.entry.summary||null,i.value.innerText),g=e=>t.value.at(e.feedIndex).feed.title;return(0,s.sV)((()=>{u(),window.addEventListener("scroll",(()=>{o.value=window.scrollY}))})),(e,t)=>((0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(ke,{title:"Pulse",iconClass:"bi bi-activity"}),(0,s.Lk)("div",kt,[(0,s.bo)((0,s.Lk)("div",{ref_key:"parseHtmlContainer",ref:i},null,512),[[a.aG,!1]]),l.value.length>0?((0,s.uX)(),(0,s.CE)("div",gt,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(r.value,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.entry.id,class:"card shadow mb-2"},[(0,s.Lk)("img",{src:v(e),class:"card-img-top",style:{"max-height":"200px","object-fit":"cover","object-position":"50% 20%"}},null,8,ft),(0,s.Lk)("div",ht,[(0,s.Lk)("div",yt,[(0,s.Lk)("span",wt,(0,c.v_)(g(e)),1),(0,s.Lk)("span",Lt,(0,c.v_)(m(e)),1),(0,s.Lk)("span",Ct,(0,c.v_)((0,n.R1)(we).formatRelativeTime(p(e))),1)]),(0,s.Lk)("a",{href:e.entry.link||"#",target:"_blank",class:"card-title fs-5 link-underline-secondary"},(0,c.v_)(e.entry.title),9,xt),(0,s.Lk)("div",{innerHTML:k(e),class:"card-text"},null,8,Et)])])))),128))])):(0,s.Q3)("",!0),0===l.value.length?((0,s.uX)(),(0,s.CE)("div",_t,[((0,s.uX)(),(0,s.CE)(s.FK,null,(0,s.pI)(10,(e=>(0,s.Lk)("div",{key:e,class:"card shadow mb-2"},t[0]||(t[0]=[(0,s.Fv)('<img src="" class="card-img-top placeholder" data-v-b0024c8e><div class="card-body" data-v-b0024c8e><a class="btn btn-primary disabled placeholder col-1 mb-2" aria-disabled="true" style="height:10px;" data-v-b0024c8e></a><a class="btn btn-warning disabled placeholder col-1 ms-2 mb-2" aria-disabled="true" style="height:10px;" data-v-b0024c8e></a><h5 class="card-title placeholder-glow" data-v-b0024c8e><span class="placeholder col-6" data-v-b0024c8e></span></h5><p class="card-text placeholder-glow" data-v-b0024c8e><span class="placeholder col-7" data-v-b0024c8e></span><span class="placeholder col-4" data-v-b0024c8e></span><span class="placeholder col-4" data-v-b0024c8e></span><span class="placeholder col-6" data-v-b0024c8e></span><span class="placeholder col-8" data-v-b0024c8e></span></p><a class="btn btn-primary disabled placeholder col-6" aria-disabled="true" data-v-b0024c8e></a></div>',2)])))),64))])):(0,s.Q3)("",!0)]),(0,s.bF)(J,null,{default:(0,s.k6)((()=>[d.value?((0,s.uX)(),(0,s.CE)("button",{key:0,onClick:b,style:Ft,class:(0,c.C4)([Rt,"ms-2 btn-secondary"]),type:"button"},t[1]||(t[1]=[(0,s.Lk)("i",{class:"bi bi-chevron-up"},null,-1)]))):(0,s.Q3)("",!0)])),_:1})],64))}};const Vt=(0,y.A)(Xt,[["__scopeId","data-v-b0024c8e"]]);var It=Vt;const St=[{path:"/",name:"Home",component:Ve},{path:"/todolist",name:"Tasks",component:Ve},{path:"/notes",name:"Notes",component:mt},{path:"/rss",name:"RSS Reader",component:It}],Wt=(0,o.aE)({history:(0,o.Bt)(),routes:St});var Nt=Wt,Tt={__name:"App",setup(e){const t=(0,o.lq)();return(0,s.wB)((()=>r),(()=>{u(),document.querySelector("body").setAttribute("data-bs-theme",r.settings.darkmode?"dark":"light")}),{immediate:!0,deep:!0}),(0,s.wB)((()=>t.path),(e=>{r.settings.startScreen=e})),(0,s.sV)((()=>{r.settings.startScreen&&Nt.push(r.settings.startScreen)})),(e,t)=>{const l=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.Wv)(l)}}};const Ot=Tt;var Mt=Ot,Kt=(l(9953),l(4458));(0,Kt.k)("/turbo-todo/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),(0,Kt.k)("/turbo-todo/custom-service-worker.js");const Bt=(0,a.Ef)(Mt);Bt.use(Nt),Bt.mount("#app")}},t={};function l(a){var s=t[a];if(void 0!==s)return s.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,l),o.exports}l.m=e,function(){var e=[];l.O=function(t,a,s,o){if(!a){var n=1/0;for(u=0;u<e.length;u++){a=e[u][0],s=e[u][1],o=e[u][2];for(var i=!0,r=0;r<a.length;r++)(!1&o||n>=o)&&Object.keys(l.O).every((function(e){return l.O[e](a[r])}))?a.splice(r--,1):(i=!1,o<n&&(n=o));if(i){e.splice(u--,1);var d=s();void 0!==d&&(t=d)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[a,s,o]}}(),function(){l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,{a:t}),t}}(),function(){l.d=function(e,t){for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};l.O.j=function(t){return 0===e[t]};var t=function(t,a){var s,o,n=a[0],i=a[1],r=a[2],d=0;if(n.some((function(t){return 0!==e[t]}))){for(s in i)l.o(i,s)&&(l.m[s]=i[s]);if(r)var u=r(l)}for(t&&t(a);d<n.length;d++)o=n[d],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(u)},a=self["webpackChunkturbo_todo"]=self["webpackChunkturbo_todo"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=l.O(void 0,[504],(function(){return l(7758)}));a=l.O(a)})();
//# sourceMappingURL=app.6332bfab.js.map