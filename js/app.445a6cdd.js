(function(){"use strict";var e={2923:function(e,t,o){var l=o(5130),s=(o(4114),o(6768)),n=o(1387),a=o(144);const i={darkmode:!0,startScreen:"/",notes:{showEditor:!1,currentNote:{},showPreview:!0,defaultEditorMode:"View",autoFocusOnEdit:!0}},d=(0,a.Kh)({settings:i}),r=()=>{try{const e=JSON.parse(localStorage.getItem("settings"))||{};d.settings={...i,...e}}catch(e){d.settings=i}},u=()=>{localStorage.setItem("settings",JSON.stringify(d.settings))};function c(e,t,o,l,n,a){const i=(0,s.g2)("TopNav"),d=(0,s.g2)("TodoList");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(i,{title:"Todo List",iconClass:"bi bi-check2-square"}),(0,s.bF)(d)],64)}r();var b=o(4232);const v={class:"switch"},p=["checked"];var m={__name:"ToggleSwitch",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(e){const t=(0,s.fn)(e,"modelValue");return(e,o)=>((0,s.uX)(),(0,s.CE)("label",v,[(0,s.bo)((0,s.Lk)("input",{type:"checkbox",checked:t.value,"onUpdate:modelValue":o[0]||(o[0]=e=>t.value=e)},null,8,p),[[l.lH,t.value]]),o[1]||(o[1]=(0,s.Lk)("span",{class:"slider round"},null,-1))]))}},k=o(1241);const f=(0,k.A)(m,[["__scopeId","data-v-24b67bf2"]]);var g=f;const y={class:"navbar fixed-top shadow"},h={class:"container py-1 d-flex"},C={class:"fs-4 ms-1 m-0 me-auto no-select"},L={class:"offcanvas offcanvas-end",tabIndex:"-1",id:"offcanvasRight"},w={class:"offcanvas-body"},E={class:"row row-cols-1 g-3"},x={key:0,"data-bs-dismiss":"offcanvas"},_={key:1,"data-bs-dismiss":"offcanvas"},R={class:"dropdown"},F={class:"btn btn-outline-primary dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},X={key:0},I={key:1},N={class:"dropdown-menu"},V="col p-2 rounded",T="d-flex align-items-center fs-6";var S={__name:"TopNav",props:{title:{type:String,required:!0},iconClass:{type:String,required:!0}},setup(e){const t=(0,n.lq)(),o=e,l=()=>{window.location.reload()},i=(e,t={})=>{navigator.serviceWorker.getRegistration().then((o=>{o.showNotification(e,t)}))},r=()=>"granted"===Notification.permission,u=()=>{r?i("Permission already granted!"):Notification.requestPermission((e=>{"granted"===e&&i("Permission granted!")}))},c=e=>{d.settings.notes.defaultEditorMode=e};return(e,n)=>{const i=(0,s.g2)("RouterLink");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",y,[(0,s.Lk)("div",h,[(0,s.Lk)("p",C,[(0,s.Lk)("i",{class:(0,b.C4)(o.iconClass)},null,2),(0,s.eW)(" "+(0,b.v_)(o.title),1)]),(0,s.RG)(e.$slots,"nav-buttons"),n[5]||(n[5]=(0,s.Lk)("button",{class:"btn py-0 my-0 px-1 mx-1",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasRight"},[(0,s.Lk)("i",{class:"bi bi-list fs-4"})],-1))])]),(0,s.Lk)("div",L,[n[19]||(n[19]=(0,s.Lk)("div",{class:"offcanvas-header"},[(0,s.Lk)("h5",{class:"offcanvas-title",id:"offcanvasRightLabel"},"Settings"),(0,s.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1)),(0,s.Lk)("div",w,[(0,s.Lk)("div",E,[(0,s.Lk)("div",{class:(0,b.C4)(V)},[(0,s.Lk)("div",{class:(0,b.C4)(T)},[["/","/todolist"].includes((0,a.R1)(t).path)?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("span",x,[(0,s.bF)(i,{class:"btn btn-primary",to:"/todolist"},{default:(0,s.k6)((()=>n[6]||(n[6]=[(0,s.Lk)("i",{class:"bi bi-check2-square me-2"},null,-1),(0,s.eW)("Tasks")]))),_:1})])),"/notes"!==(0,a.R1)(t).path?((0,s.uX)(),(0,s.CE)("span",_,[(0,s.bF)(i,{class:"btn btn-primary",to:"/notes"},{default:(0,s.k6)((()=>n[7]||(n[7]=[(0,s.Lk)("i",{class:"bi bi-journals me-2"},null,-1),(0,s.eW)("Notes")]))),_:1})])):(0,s.Q3)("",!0)])]),(0,s.Lk)("div",{class:(0,b.C4)(V)},[(0,s.Lk)("div",{class:(0,b.C4)(T)},[n[8]||(n[8]=(0,s.Lk)("label",{class:"me-auto"},[(0,s.Lk)("i",{class:"bi bi-moon-stars-fill me-2"}),(0,s.eW)("Dark mode")],-1)),(0,s.bF)(g,{modelValue:(0,a.R1)(d).settings.darkmode,"onUpdate:modelValue":n[0]||(n[0]=e=>(0,a.R1)(d).settings.darkmode=e)},null,8,["modelValue"])])]),(0,s.Lk)("div",{class:(0,b.C4)(V)},[(0,s.Lk)("div",{class:(0,b.C4)(T)},[n[9]||(n[9]=(0,s.Lk)("label",{class:"me-auto"},[(0,s.Lk)("i",{class:"bi bi-bell-fill me-2"}),(0,s.eW)("Enable notifications")],-1)),(0,s.Lk)("button",{onClick:u,class:(0,b.C4)(["btn btn-outline-primary",{"disabled btn-outline-secondary":r}])},(0,b.v_)(r?"Enabled":"Request"),3)])]),"/todolist"===(0,a.R1)(t).path||"/"===(0,a.R1)(t).path?((0,s.uX)(),(0,s.CE)("div",{key:0,class:(0,b.C4)([V,"col-btn"])},[(0,s.Lk)("div",{class:(0,b.C4)(T)},n[10]||(n[10]=[(0,s.Lk)("label",{class:"me-auto"},[(0,s.Lk)("i",{class:"bi bi-plus-lg me-2"}),(0,s.eW)("Create new list")],-1)]))])):(0,s.Q3)("",!0),"/notes"===(0,a.R1)(t).path?((0,s.uX)(),(0,s.CE)("div",{key:1,class:(0,b.C4)(V)},[(0,s.Lk)("div",{class:(0,b.C4)(T)},[n[11]||(n[11]=(0,s.Lk)("label",{class:"me-auto"},[(0,s.Lk)("i",{class:"bi bi-binoculars-fill me-2"}),(0,s.eW)("Show note preview")],-1)),(0,s.bF)(g,{modelValue:(0,a.R1)(d).settings.notes.showPreview,"onUpdate:modelValue":n[1]||(n[1]=e=>(0,a.R1)(d).settings.notes.showPreview=e)},null,8,["modelValue"])])])):(0,s.Q3)("",!0),"/notes"===(0,a.R1)(t).path?((0,s.uX)(),(0,s.CE)("div",{key:2,class:(0,b.C4)(V)},[(0,s.Lk)("div",{class:(0,b.C4)(T)},[n[12]||(n[12]=(0,s.Lk)("label",{class:"me-auto"},[(0,s.Lk)("i",{class:"bi bi-keyboard me-2"}),(0,s.eW)("Autofocus on edit")],-1)),(0,s.bF)(g,{modelValue:(0,a.R1)(d).settings.notes.autoFocusOnEdit,"onUpdate:modelValue":n[2]||(n[2]=e=>(0,a.R1)(d).settings.notes.autoFocusOnEdit=e)},null,8,["modelValue"])])])):(0,s.Q3)("",!0),"/notes"===(0,a.R1)(t).path?((0,s.uX)(),(0,s.CE)("div",{key:3,class:(0,b.C4)(V)},[(0,s.Lk)("div",{class:(0,b.C4)(T)},[n[17]||(n[17]=(0,s.Lk)("label",{class:"me-auto"},[(0,s.Lk)("i",{class:"bi bi-card-text me-2"}),(0,s.eW)("Default editor mode")],-1)),(0,s.Lk)("div",R,[(0,s.Lk)("button",F,["View"===(0,a.R1)(d).settings.notes.defaultEditorMode?((0,s.uX)(),(0,s.CE)("span",X,n[13]||(n[13]=[(0,s.Lk)("i",{class:"bi bi-eye-fill me-2"},null,-1),(0,s.eW)("View")]))):(0,s.Q3)("",!0),"Edit"===(0,a.R1)(d).settings.notes.defaultEditorMode?((0,s.uX)(),(0,s.CE)("span",I,n[14]||(n[14]=[(0,s.Lk)("i",{class:"bi bi-pencil-fill me-2"},null,-1),(0,s.eW)("Edit")]))):(0,s.Q3)("",!0)]),(0,s.Lk)("ul",N,[(0,s.Lk)("li",null,[(0,s.Lk)("a",{onClick:n[3]||(n[3]=e=>c("View")),class:"dropdown-item"},n[15]||(n[15]=[(0,s.Lk)("i",{class:"bi bi-eye-fill me-2"},null,-1),(0,s.eW)("View")]))]),(0,s.Lk)("li",null,[(0,s.Lk)("a",{onClick:n[4]||(n[4]=e=>c("Edit")),class:"dropdown-item"},n[16]||(n[16]=[(0,s.Lk)("i",{class:"bi bi-pencil-fill me-2"},null,-1),(0,s.eW)("Edit")]))])])])])])):(0,s.Q3)("",!0),(0,s.Lk)("div",{class:"col p-0 bg-transparent"},[(0,s.Lk)("button",{onClick:l,class:"btn btn-primary w-100"},n[18]||(n[18]=[(0,s.Lk)("i",{class:"bi bi-arrow-clockwise me-2"},null,-1),(0,s.eW)("Reload App")]))])])])])],64)}}};const W=(0,k.A)(S,[["__scopeId","data-v-7f482165"]]);var O=W;o(7642),o(8004),o(3853),o(5876),o(2475),o(5024),o(1698),o(8992),o(4520),o(1454);const B={class:"ms-3 flex-fill d-flex align-items-center"},M=["id","onUpdate:modelValue"],K=["for"],q={class:"btn-div align-items-center pe-1"},A=["onClick"];var Q={__name:"TodoItem",props:{todos:{type:Array,required:!0},setCurrentTodo:{type:Function,required:!0},saveTodos:{type:Function,required:!0},visible:{type:Boolean,default:!0}},setup(e){const t=e,o=()=>{setTimeout((()=>{t.saveTodos()}),500)};return(e,n)=>((0,s.uX)(),(0,s.Wv)(l.F,{name:"list",tag:"ul",class:"list-group list-group-hover"},{default:(0,s.k6)((()=>[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(t.todos,(e=>((0,s.uX)(),(0,s.CE)("li",{key:e.id,class:(0,b.C4)([{disabled:!t.visible},"list-group-item d-flex align-items-center p-0 m-0"])},[(0,s.Lk)("div",B,[(0,s.bo)((0,s.Lk)("input",{id:"todo-"+e.id,type:"checkbox",class:"form-check-input my-0 me-3 fs-4","onUpdate:modelValue":t=>e.done=t,onChange:o},null,40,M),[[l.lH,e.done]]),(0,s.Lk)("label",{for:"todo-"+e.id,class:(0,b.C4)(["form-check-label stretched-link fs-6",{completed:e.done}])},(0,b.v_)(e.name),11,K)]),(0,s.Lk)("div",q,[(0,s.Lk)("button",{"data-bs-toggle":"modal","data-bs-target":"#editTodoModal",class:"btn",onClick:()=>t.setCurrentTodo(e)},n[0]||(n[0]=[(0,s.Lk)("i",{class:"bi bi-pencil"},null,-1)]),8,A)])],2)))),128))])),_:1}))}};const U=(0,k.A)(Q,[["__scopeId","data-v-5293ef82"]]);var $=U;const j={key:0,class:"modal-title"},D={key:1,class:"modal-title"},G={class:"d-flex align-items-center"};function J(e,t,o,n,a,i){const d=(0,s.g2)("BaseModal");return(0,s.uX)(),(0,s.Wv)(d,{"modal-id":o.modalId},{header:(0,s.k6)((()=>[o.isNew?((0,s.uX)(),(0,s.CE)("h5",j,"Add a new item...")):((0,s.uX)(),(0,s.CE)("h5",D,"Edit item")),t[8]||(t[8]=(0,s.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal"},null,-1))])),body:(0,s.k6)((()=>[(0,s.Lk)("div",G,[(0,s.bo)((0,s.Lk)("input",{type:"checkbox",class:"form-check-input my-0 me-2 fs-5","onUpdate:modelValue":t[0]||(t[0]=e=>a.todoCopy.done=e),onChange:t[1]||(t[1]=(...e)=>o.saveTodos&&o.saveTodos(...e))},null,544),[[l.aG,!o.isNew],[l.lH,a.todoCopy.done]]),o.isNew?(0,s.bo)(((0,s.uX)(),(0,s.CE)("input",{key:1,type:"text",class:"form-control","onUpdate:modelValue":t[4]||(t[4]=e=>a.todoCopy.name=e),onKeyup:t[5]||(t[5]=(0,l.jR)((e=>o.addNewTodo(a.todoCopy)),["enter"]))},null,544)),[[l.Jo,a.todoCopy.name,void 0,{trim:!0}]]):(0,s.bo)(((0,s.uX)(),(0,s.CE)("input",{key:0,type:"text",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=e=>a.todoCopy.name=e),onChange:t[3]||(t[3]=(...e)=>o.saveTodos&&o.saveTodos(...e))},null,544)),[[l.Jo,a.todoCopy.name,void 0,{trim:!0}]])])])),footer:(0,s.k6)((()=>[o.isNew?((0,s.uX)(),(0,s.CE)("button",{key:0,onClick:t[6]||(t[6]=e=>o.addNewTodo(a.todoCopy)),type:"button",class:"btn btn-primary","data-bs-dismiss":"modal"},t[9]||(t[9]=[(0,s.Lk)("i",{class:"bi bi-file-arrow-up-fill"},null,-1),(0,s.eW)(" Save ")]))):((0,s.uX)(),(0,s.CE)("button",{key:1,onClick:t[7]||(t[7]=e=>o.deleteTodo(o.todo.id)),type:"button",class:"btn btn-danger","data-bs-dismiss":"modal"},t[10]||(t[10]=[(0,s.Lk)("i",{class:"bi bi-trash3"},null,-1),(0,s.eW)(" Delete ")])))])),_:1},8,["modal-id"])}const H=["id"],P={class:"modal-dialog modal-dialog-centered"},z={class:"modal-content"},Y={key:0,class:"modal-header"},Z={key:1,class:"modal-header"},ee={class:"modal-title"},te={key:2,class:"modal-body"},oe={key:3,class:"modal-footer"};var le={__name:"BaseModal",props:{modalId:{type:String,required:!0},title:{type:String}},setup(e){const t=e;return(e,o)=>((0,s.uX)(),(0,s.CE)("div",{id:t.modalId,class:"modal fade",tabIndex:"-1"},[(0,s.Lk)("div",P,[(0,s.Lk)("div",z,[e.$slots.header?((0,s.uX)(),(0,s.CE)("div",Y,[(0,s.RG)(e.$slots,"header")])):((0,s.uX)(),(0,s.CE)("div",Z,[(0,s.Lk)("h5",ee,(0,b.v_)(t.title||""),1)])),e.$slots.body?((0,s.uX)(),(0,s.CE)("div",te,[(0,s.RG)(e.$slots,"body")])):(0,s.Q3)("",!0),e.$slots.footer?((0,s.uX)(),(0,s.CE)("div",oe,[(0,s.RG)(e.$slots,"footer")])):(0,s.Q3)("",!0)])])],8,H))}};const se=le;var ne=se,ae={components:{BaseModal:ne},props:{modalId:{type:String,required:!0},isNew:{type:Boolean,required:!0},todo:{type:Object,required:!0},deleteTodo:{type:Function,required:!1},addNewTodo:{type:Function,required:!1},saveTodos:{type:Function,required:!1}},data(){return{todoCopy:this.isNew?{name:"",done:!1,id:Date.now()}:this.todo}},watch:{todo(e){this.todoCopy=this.isNew?{name:"",done:!1,id:Date.now()}:e}}};const ie=(0,k.A)(ae,[["render",J]]);var de=ie;const re={class:"fixed-bottom",style:{height:"70px"}},ue={class:"container",style:{height:"50px"}};var ce={__name:"FixedBottom",setup(e){const t=(0,s.OA)();return(e,o)=>((0,s.uX)(),(0,s.CE)("div",re,[(0,s.Lk)("div",ue,[(0,s.Lk)("div",{class:(0,b.C4)((0,a.R1)(t).class||"d-flex justify-content-end")},[(0,s.RG)(e.$slots,"default")],2)])]))}};const be=(0,k.A)(ce,[["__scopeId","data-v-283b122b"]]);var ve=be;const pe={blue:"#0d6efd",indigo:"#6610f2",purple:"#6f42c1",pink:"#d63384",red:"#dc3545",orange:"#fd7e14",yellow:"#ffc107",green:"#198754",teal:"#20c997",cyan:"#0dcaf0",charcoal:"#343a40"};function me(){return navigator.language||navigator.languages[0]}function ke(e){e=e.replace(/^#/,"");const t=parseInt(e.substr(0,2),16),o=parseInt(e.substr(2,2),16),l=parseInt(e.substr(4,2),16),s=(299*t+587*o+114*l)/1e3;return{r:t,g:o,b:l,isLight:s>=128}}function fe(e,t,o,l=1){const s=ke(e),n=ke(t),a=Math.round(s.r*(1-o)+n.r*o),i=Math.round(s.b*(1-o)+n.b*o),d=Math.round(s.g*(1-o)+n.g*o),r=`#${((1<<24)+(a<<16)+(d<<8)+i).toString(16).slice(1).toUpperCase()}${Math.round(255*l).toString(16).padStart(2,"0").toUpperCase()}`;return r}function ge(e){return e.charAt(0).toUpperCase()+e.slice(1)}const ye={class:"container"},he={key:0,class:"m-0 mb-2 p-0 text-black"},Ce={class:"input-group"},Le={id:"itemOptions"},we=["value"];var Ee={__name:"TodoList",setup(e){const t=(0,a.KR)([]),o=(0,a.KR)(!1),n=(0,a.KR)(!1),i=(0,a.KR)({name:"",done:!1,id:0}),d=(0,a.KR)(""),r=(0,s.rk)("todoInput"),u=(0,s.rk)("showIncompleteButton"),c=()=>{t.value=JSON.parse(localStorage.getItem("todoItems"))||[]},v=e=>{setTimeout((()=>{e.target.style.outline="none",e.target.style.boxShadow="none",u.value.blur()}),250)},p=e=>{o.value=!o.value,v(e)},m=()=>{d.value&&(t.value.push({id:Date.now(),name:ge(d.value),done:!1}),d.value="",g())},k=e=>{i.value=e},f=e=>{t.value=t.value.filter((t=>t.id!==e)),g()},g=()=>{localStorage.setItem("todoItems",JSON.stringify(t.value))},y=(0,s.EW)((()=>[...t.value].sort(((e,t)=>t.id-e.id)))),h=(0,s.EW)((()=>y.value.filter((e=>e.done)))),C=(0,s.EW)((()=>y.value.filter((e=>!e.done)))),L=(0,s.EW)((()=>h.value.length)),w=(0,s.EW)((()=>[...new Set(t.value.map((e=>e.name)))].sort())),E=(0,s.EW)((()=>o.value?"bi bi-chevron-down":"bi bi-chevron-right"));return(0,s.wB)((()=>n.value),(e=>{e&&(0,s.dY)((()=>{r.value.focus()}))})),(0,s.sV)(c),(e,t)=>((0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",ye,[(0,s.bF)($,{todos:C.value,"set-current-todo":k,"save-todos":g,visible:!0},null,8,["todos"]),(0,s.Lk)("button",{id:"showIncompleteButton",ref_key:"showIncompleteButton",ref:u,class:(0,b.C4)(["btn w-100 text-start text-muted",{"mt-2":C.value.length>0}]),onClick:t[0]||(t[0]=e=>p(e))},[(0,s.Lk)("i",{class:(0,b.C4)(E.value)},null,2),(0,s.eW)(" Completed "+(0,b.v_)(L.value),1)],2),o.value?((0,s.uX)(),(0,s.CE)("hr",he)):(0,s.Q3)("",!0),(0,s.bF)(l.eB,null,{default:(0,s.k6)((()=>[(0,s.bo)((0,s.bF)($,{visible:o.value,todos:h.value,"set-current-todo":k,"save-todos":g},null,8,["visible","todos"]),[[l.aG,o.value]])])),_:1})]),null!==i.value?((0,s.uX)(),(0,s.Wv)(de,{key:0,modalId:"editTodoModal","is-new":!1,todo:i.value,"delete-todo":f,"save-todos":g},null,8,["todo"])):(0,s.Q3)("",!0),(0,s.bF)(ve,null,{default:(0,s.k6)((()=>[(0,s.bF)(l.eB,null,{default:(0,s.k6)((()=>[(0,s.bo)((0,s.Lk)("div",Ce,[(0,s.bo)((0,s.Lk)("input",{ref_key:"todoInput",ref:r,list:"itemOptions",style:{height:"3.5rem"},type:"text",class:"form-control",placeholder:"Add a new item...","onUpdate:modelValue":t[1]||(t[1]=e=>d.value=e),onKeyup:(0,l.jR)(m,["enter"]),onFocusout:t[2]||(t[2]=e=>n.value=!1)},null,544),[[l.Jo,d.value,void 0,{trim:!0}]]),t[4]||(t[4]=(0,s.Lk)("button",{class:"btn btn-danger"},[(0,s.Lk)("i",{class:"bi bi-x-lg"})],-1))],512),[[l.aG,n.value]])])),_:1}),(0,s.Lk)("datalist",Le,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(w.value,((e,t)=>((0,s.uX)(),(0,s.CE)("option",{key:t,value:e},null,8,we)))),128))]),(0,s.bo)((0,s.Lk)("button",{onClick:t[3]||(t[3]=e=>n.value=!n.value),style:{height:"50px",width:"50px"},class:"btn btn-primary rounded-circle fs-5 shadow",type:"button"},t[5]||(t[5]=[(0,s.Lk)("i",{class:"bi bi-plus-lg"},null,-1)]),512),[[l.aG,!n.value]])])),_:1})],64))}};const xe=(0,k.A)(Ee,[["__scopeId","data-v-94981170"]]);var _e=xe,Re={components:{TopNav:O,TodoList:_e}};const Fe=(0,k.A)(Re,[["render",c]]);var Xe=Fe,Ie=(o(3949),o(1017)),Ne=o.n(Ie);o(9106);const Ve=["disabled"],Te={ref:"outputElement",class:"form-control p-0 m-0",id:"highlighting"};var Se={__name:"MarkdownEditor",props:(0,s.zz)({editorVisible:{type:Boolean},disabled:{type:Boolean}},{modelValue:{},modelModifiers:{}}),emits:(0,s.zz)(["input","keydown.enter"],["update:modelValue"]),setup(e,{emit:t}){let n=o(6709);n.use({breaks:!0,silent:!0});const i=(0,s.fn)(e,"modelValue"),r=t,u=e,c=(0,a.KR)(i.value),v=(0,s.rk)("inputElement"),p=(0,s.rk)("editorBg"),m=()=>{let e=document.getElementById("highlighting-content"),t=v.value.value;"\n"==t[t.length-1]&&(t+=" "),e.innerHTML=Ne().highlight(t,Ne().languages.markdown,"md")},k=()=>{v.value.style.height="5px",v.value.style.height=v.value.scrollHeight+"px",p.value.style.height=v.value.scrollHeight+"px"},f=()=>{const e=v.value.selectionStart,t=v.value.value,o=t.lastIndexOf("\n",e-1),l=t.substring(o+1,e);return l},g=()=>{let e=v.value.value,t=e.slice(0,v.value.selectionStart),o=e.slice(v.value.selectionEnd,v.value.value.length),l=e.slice(v.value.selectionStart,v.value.selectionEnd),s={start:v.value.selectionStart,end:v.value.selectionEnd};const n=e.lastIndexOf("\n",s.start-1),a=-1===n?0:n+1,i=e.indexOf("\n",s.start),d=-1===i?e.length:i,r=e.slice(a,d);return{selected:l,before:t,after:o,cursor:s,line:r,isCollapsed:s.start===s.end}},y=e=>{let t=g();v.value.value=t.before+e+t.after,v.value.selectionStart=t.cursor.start+e.length,v.value.selectionEnd=t.cursor.start+e.length,m(),k()},h=()=>{const e=/^(\t*)(\d+)\..+$/,t=v.value.value,o=t.split("\n"),l=v.value.selectionStart;let s=0;o.forEach((function(t,l){const n=e.exec(t);n?(s++,o[l]=o[l].replace(e,((e,t,o)=>t+`${s}`+e.slice(o.length+t.length)))):s=0})),v.value.value=o.join("\n"),v.value.selectionStart=l,v.value.selectionEnd=l,m()},C=e=>{e.preventDefault(),y("\t")},L=()=>{m(),k(),i.value=v.value.value,r("input")},w=e=>{e.preventDefault();const t=/^\t*(\d+)\..+$/,o=/^\t*(-|\*) .+$/;let l=f(),s="\n";if(l.length>0){const e=t.exec(l),n=o.exec(l),a=/(\t+).+/.exec(l);if(a){const e=a.at(0).split("\t").length;s+="\t".repeat(e-1)}if(e){let t=parseInt(e.at(1))+1;s+=`${t}. `}else n&&(s+=n.at(1)+" ")}y(s),h()};return(0,s.wB)((()=>u.editorVisible),(e=>{e&&v.value&&p.value&&(0,s.dY)((()=>{k(),m(),d.settings.notes.autoFocusOnEdit&&v.value.focus()}))})),(0,s.$u)(k),(e,t)=>((0,s.uX)(),(0,s.CE)("div",{class:(0,b.C4)(["root-container",{disabled:u.disabled}])},[(0,s.bo)((0,s.Lk)("textarea",{placeholder:"Note",id:"editing",ref_key:"inputElement",ref:v,spellcheck:"false",rows:"1",class:"form-control p-0 m-0","onUpdate:modelValue":t[0]||(t[0]=e=>c.value=e),disabled:u.disabled,onInput:L,onKeydown:[(0,l.jR)(w,["enter"]),(0,l.jR)(C,["tab"])]},"        ",40,Ve),[[l.Jo,c.value]]),(0,s.Lk)("div",{ref_key:"editorBg",ref:p,id:"editor-bg",class:"form-control p-0 m-0"},null,512),(0,s.Lk)("pre",Te,t[1]||(t[1]=[(0,s.Lk)("code",{id:"highlighting-content"},null,-1),(0,s.Lk)("div",{id:"content-bottom"},null,-1)]),512)],2))}};const We=(0,k.A)(Se,[["__scopeId","data-v-19197fd2"]]);var Oe=We;const Be={class:"container note-editor"},Me={class:"container note-viewer"},Ke={class:"d-flex align-items-center p-0 m-0 mb-2 flex-wrap"},qe=["textContent"],Ae=["innerHTML"],Qe={class:"d-flex flex-wrap"},Ue=["onClick"],$e=["disabled"],je={key:0,class:"bi bi-eye-fill"},De={key:1,class:"bi bi-pencil-fill"};let Ge=o(6709);Ge.use({breaks:!0,silent:!0});const Je="btn rounded-circle fs-5 shadow",He={height:"50px",width:"50px"};var Pe={__name:"NoteEditor",props:(0,s.zz)({isNew:{type:Boolean,required:!0}},{modelValue:{},modelModifiers:{}}),emits:(0,s.zz)(["hide-editor","update","delete"],["update:modelValue"]),setup(e,{emit:t}){const o=(0,s.fn)(e,"modelValue"),n=e,i=t,r=(0,a.KR)(n.isNew),u=(0,a.KR)({...o.value}),c=(0,a.KR)(null),v=(0,s.rk)("titleInput"),p=(0,s.EW)((()=>new Date(u.value.id).toLocaleString(me(),{dateStyle:"medium",timeStyle:"short"}))),m=(0,s.EW)((()=>{let e=u.value.color||pe.cyan;return h(e)})),k=(0,s.EW)((()=>Ge.parse(u.value.text))),f=(0,s.EW)((()=>g.value||!n.isNew)),g=(0,s.EW)((()=>u.value.title.trim().length>=3)),y=e=>{u.value.color=e,E()},h=e=>{let t=ke(e),o=t.isLight?"#000000":"#FFFFFF";return{bg:e,txt:fe(e,o,.7)}},C=()=>{g.value||(u.value.title=c.value||"")},L=()=>{r.value=!r.value,r.value?R():_()},w=()=>{i("hide-editor")},E=()=>{g.value&&i("update",u.value)},x=()=>{i("delete",u.value.id),i("hide-editor")},_=()=>{const e=document.getElementsByTagName("blockquote");for(const t of e)t.classList.add("blockquote","border-start","border-dark-subtle","border-3","ps-2","py-1","fs-6")};async function R(){await(0,s.dY)(),""===u.value.title&&v.value.focus()}return(0,s.wB)((()=>u.value.title),(e=>{g.value&&(c.value=e),R()}),{immediate:!0}),(0,s.sV)((()=>{"Edit"===d.settings.notes.defaultEditorMode&&(r.value=!0)})),(0,s.sV)(_),(e,t)=>((0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bo)((0,s.Lk)("div",Be,[(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>u.value.title=e),ref_key:"titleInput",ref:v,class:"fs-3 form-control mb-2",placeholder:"Title",type:"text",onInput:E,onFocusout:C},null,544),[[l.Jo,u.value.title]]),(0,s.bF)(Oe,{modelValue:u.value.text,"onUpdate:modelValue":t[1]||(t[1]=e=>u.value.text=e),onInput:E,disabled:!g.value,"editor-visible":r.value},null,8,["modelValue","disabled","editor-visible"])],512),[[l.aG,r.value]]),(0,s.bo)((0,s.Lk)("div",Me,[(0,s.Lk)("div",Ke,[(0,s.Lk)("div",{class:"fs-3 text-muted m-0 p-0 flex-fill",textContent:(0,b.v_)(u.value.title)},null,8,qe),(0,s.Lk)("div",{class:"badge my-1",style:(0,b.Tr)({backgroundColor:m.value.bg,color:m.value.txt})},[t[3]||(t[3]=(0,s.Lk)("i",{class:"bi bi-calendar"},null,-1)),(0,s.eW)(" "+(0,b.v_)(p.value),1)],4)]),t[4]||(t[4]=(0,s.Lk)("hr",{class:"p-0 m-0 mb-2"},null,-1)),(0,s.Lk)("div",{innerHTML:k.value},null,8,Ae)],512),[[l.aG,!r.value]]),(0,s.bF)(ne,{modalId:"confirmDeleteModal",title:"Are you sure you want to delete this note?"},{footer:(0,s.k6)((()=>[t[6]||(t[6]=(0,s.Lk)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},[(0,s.Lk)("i",{class:"bi bi-x-lg"}),(0,s.eW)(" Cancel ")],-1)),(0,s.Lk)("button",{onClick:x,type:"button",class:"btn btn-danger","data-bs-dismiss":"modal"},t[5]||(t[5]=[(0,s.Lk)("i",{class:"bi bi-trash3"},null,-1),(0,s.eW)(" Delete ")]))])),_:1}),(0,s.bF)(ne,{modalId:"selectColorModal",title:"Select a color..."},{body:(0,s.k6)((()=>[(0,s.Lk)("div",Qe,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)((0,a.R1)(pe),((e,t)=>((0,s.uX)(),(0,s.CE)("button",{key:e,onClick:t=>y(e),"data-bs-dismiss":"modal",class:"btn rounded-pill m-1 color-option",style:(0,b.Tr)({backgroundColor:e,color:h(e).txt})},(0,b.v_)(t),13,Ue)))),128))])])),footer:(0,s.k6)((()=>[(0,s.Lk)("button",{type:"button",onClick:t[2]||(t[2]=e=>y(null)),class:"btn btn-secondary btn-warning","data-bs-dismiss":"modal"},t[7]||(t[7]=[(0,s.Lk)("i",{class:"bi bi-eraser-fill"},null,-1),(0,s.eW)(" Clear ")])),t[8]||(t[8]=(0,s.Lk)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},[(0,s.Lk)("i",{class:"bi bi-x-lg"}),(0,s.eW)(" Cancel ")],-1))])),_:1}),(0,s.bF)(ve,null,{default:(0,s.k6)((()=>[(0,s.Lk)("button",{disabled:!f.value,onClick:L,style:He,class:(0,b.C4)([Je,"btn-primary"]),type:"button"},[r.value?((0,s.uX)(),(0,s.CE)("i",je)):((0,s.uX)(),(0,s.CE)("i",De))],8,$e),(0,s.Lk)("button",{onClick:w,style:He,class:(0,b.C4)([Je,"ms-2 btn-secondary"]),type:"button"},t[9]||(t[9]=[(0,s.Lk)("i",{class:"bi bi-x-lg"},null,-1)]))])),_:1})],64))}};const ze=(0,k.A)(Pe,[["__scopeId","data-v-7e65d1e9"]]);var Ye=ze;const Ze={key:0,class:"bi bi-pin-fill fs-4 text-warning"},et={key:1,class:"bi bi-pin fs-4"},tt={key:1,"data-bs-toggle":"modal","data-bs-target":"#selectColorModal",class:"btn py-0 my-0 px-1 mx-1",type:"button"},ot={key:2,"data-bs-toggle":"modal","data-bs-target":"#confirmDeleteModal",class:"btn py-0 my-0 px-1 mx-1",type:"button"},lt={key:1,class:"container note-list"},st={key:0,class:"fs-5 text-muted"},nt={class:"row g-2"},at=["onClick"],it={class:"d-flex align-items-center flex-wrap mb-1"},dt={class:"fs-6 fw-medium flex-fill"};var rt={__name:"NotesList",setup(e){const t=(0,a.KR)([]),o=(0,a.KR)(!1);function l(){d.settings.notes.showEditor=!1,d.settings.notes.currentNote={}}const n=()=>{t.value=JSON.parse(localStorage.getItem("notes"))||[]},i=e=>{let t=e.text.replace(/#{1,6}\s+/g,"");return t=t.replace(/(\*\*|__)(.*?)\1/g,"$2"),t=t.replace(/(\*|_)(.*?)\1/g,"$2"),t=t.replace(/-{3,}/g,""),t},r=e=>{const t=i(e);let o=t.slice(0,100);return o+=o.length<t.length?"...":"",o},u=e=>{let t=void 0!==e.color&&e.color,o=e.color||pe.cyan,l=ke(o),s=l.isLight?"#000000":"#FFFFFF";return{bg:t?o:"inherit",txt:t?fe(o,s,.7):"inherit",badge:t?fe(o,s,.7):o,badgeTxt:t?o:fe(o,s,.9)}},c=e=>{d.settings.notes.currentNote=e,o.value=!1,setTimeout((()=>{d.settings.notes.showEditor=!0}),100)},v=()=>{localStorage.setItem("notes",JSON.stringify(t.value))},p=e=>{const l=t.value.findIndex((t=>t.id===e.id));e.modifiedOn=Date.now(),-1!==l?t.value[l]=e:o.value&&t.value.push(e),d.settings.notes.currentNote=e},m=e=>{t.value=t.value.filter((t=>t.id!==e))},k=()=>{d.settings.notes.currentNote={id:Date.now(),title:"",text:""},o.value=!0,d.settings.notes.showEditor=!0},f=()=>{void 0===d.settings.notes.currentNote.pinned?d.settings.notes.currentNote.pinned=!0:d.settings.notes.currentNote.pinned=!d.settings.notes.currentNote.pinned},g=(0,s.EW)((()=>[...t.value].sort(((e,t)=>e.pinned===t.pinned?t.id-e.id:!0===e.pinned?-1:1))));return(0,s.wB)((()=>t.value),(()=>{v()}),{deep:!0}),(0,s.sV)(n),(0,s.hi)(l),(e,n)=>((0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(O,{title:"Notes",iconClass:"bi bi-journals"},{"nav-buttons":(0,s.k6)((()=>[(0,a.R1)(d).settings.notes.showEditor?((0,s.uX)(),(0,s.CE)("button",{key:0,onClick:f,class:"btn py-0 my-0 px-1 mx-1",type:"button"},[(0,a.R1)(d).settings.notes.currentNote.pinned?((0,s.uX)(),(0,s.CE)("i",Ze)):((0,s.uX)(),(0,s.CE)("i",et))])):(0,s.Q3)("",!0),(0,a.R1)(d).settings.notes.showEditor?((0,s.uX)(),(0,s.CE)("button",tt,n[1]||(n[1]=[(0,s.Lk)("i",{class:"bi bi-palette-fill fs-4 text-primary"},null,-1)]))):(0,s.Q3)("",!0),(0,a.R1)(d).settings.notes.showEditor?((0,s.uX)(),(0,s.CE)("button",ot,n[2]||(n[2]=[(0,s.Lk)("i",{class:"bi bi-trash3 fs-4 text-danger"},null,-1)]))):(0,s.Q3)("",!0)])),_:1}),(0,a.R1)(d).settings.notes.showEditor?((0,s.uX)(),(0,s.Wv)(Ye,{key:0,modelValue:(0,a.R1)(d).settings.notes.currentNote,"onUpdate:modelValue":n[0]||(n[0]=e=>(0,a.R1)(d).settings.notes.currentNote=e),"is-new":o.value,onHideEditor:l,onUpdate:p,onDelete:m},null,8,["modelValue","is-new"])):(0,s.Q3)("",!0),(0,a.R1)(d).settings.notes.showEditor?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("div",lt,[0===t.value.length?((0,s.uX)(),(0,s.CE)("p",st,"I know I'm empty right now but I'm full of potential...")):(0,s.Q3)("",!0),(0,s.Lk)("div",nt,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(g.value,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.id,class:"col-6 list-group-hover no-select d-flex",onClick:t=>c(e)},[(0,s.Lk)("div",{class:(0,b.C4)(["item list-group-item flex-fill",{"li-active":(0,a.R1)(d).settings.notes.currentNote.id===e.id}]),style:(0,b.Tr)({backgroundColor:e.color,color:u(e).txt})},[(0,s.Lk)("div",it,[(0,s.Lk)("div",dt,(0,b.v_)(e.title),1),(0,s.Lk)("div",null,[e.pinned?((0,s.uX)(),(0,s.CE)("i",{key:0,class:"me-2 bi bi-pin-fill",style:(0,b.Tr)({color:u(e).badge})},null,4)):(0,s.Q3)("",!0),(0,s.Lk)("div",{class:"badge",style:(0,b.Tr)({backgroundColor:u(e).badge,color:u(e).badgeTxt})},(0,b.v_)(new Date(e.id).toLocaleDateString((0,a.R1)(me)())),5)])]),(0,a.R1)(d).settings.notes.showPreview?((0,s.uX)(),(0,s.CE)("div",{key:0,class:"note-preview",style:(0,b.Tr)({color:u(e).txt})},(0,b.v_)(r(e)),5)):(0,s.Q3)("",!0)],6)],8,at)))),128))])])),(0,a.R1)(d).settings.notes.showEditor?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.Wv)(ve,{key:2},{default:(0,s.k6)((()=>[(0,s.Lk)("button",{onClick:k,style:{height:"50px",width:"50px"},class:"btn btn-primary rounded-circle fs-5 shadow",type:"button"},n[3]||(n[3]=[(0,s.Lk)("i",{class:"bi bi-plus-lg"},null,-1)]))])),_:1}))],64))}};const ut=(0,k.A)(rt,[["__scopeId","data-v-9bae9aaa"]]);var ct=ut,bt={__name:"NotesView",setup(e){return(e,t)=>((0,s.uX)(),(0,s.Wv)(ct))}};const vt=bt;var pt=vt;const mt=[{path:"/",name:"Home",component:Xe},{path:"/todolist",name:"Tasks",component:Xe},{path:"/notes",name:"Notes",component:pt}],kt=(0,n.aE)({history:(0,n.Bt)(),routes:mt});var ft=kt,gt={__name:"App",setup(e){const t=(0,n.lq)();return(0,s.wB)((()=>d),(()=>{u(),document.querySelector("body").setAttribute("data-bs-theme",d.settings.darkmode?"dark":"light")}),{immediate:!0,deep:!0}),(0,s.wB)((()=>t.path),(e=>{d.settings.startScreen=e})),(0,s.sV)((()=>{d.settings.startScreen&&ft.push(d.settings.startScreen)})),(e,t)=>{const o=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.Wv)(o)}}};const yt=gt;var ht=yt,Ct=(o(9953),o(4458));(0,Ct.k)("/turbo-todo/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),(0,Ct.k)("/turbo-todo/custom-service-worker.js");const Lt=(0,l.Ef)(ht);Lt.use(ft),Lt.mount("#app")}},t={};function o(l){var s=t[l];if(void 0!==s)return s.exports;var n=t[l]={exports:{}};return e[l].call(n.exports,n,n.exports,o),n.exports}o.m=e,function(){var e=[];o.O=function(t,l,s,n){if(!l){var a=1/0;for(u=0;u<e.length;u++){l=e[u][0],s=e[u][1],n=e[u][2];for(var i=!0,d=0;d<l.length;d++)(!1&n||a>=n)&&Object.keys(o.O).every((function(e){return o.O[e](l[d])}))?l.splice(d--,1):(i=!1,n<a&&(a=n));if(i){e.splice(u--,1);var r=s();void 0!==r&&(t=r)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[l,s,n]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var l in t)o.o(t,l)&&!o.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,l){var s,n,a=l[0],i=l[1],d=l[2],r=0;if(a.some((function(t){return 0!==e[t]}))){for(s in i)o.o(i,s)&&(o.m[s]=i[s]);if(d)var u=d(o)}for(t&&t(l);r<a.length;r++)n=a[r],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(u)},l=self["webpackChunkturbo_todo"]=self["webpackChunkturbo_todo"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=o.O(void 0,[504],(function(){return o(2923)}));l=o.O(l)})();
//# sourceMappingURL=app.445a6cdd.js.map