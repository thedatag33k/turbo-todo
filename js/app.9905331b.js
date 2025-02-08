(function(){"use strict";var e={4725:function(e,t,o){var l=o(5130),s=(o(4114),o(6768)),n=o(1387),a=o(144);const i={updateAvailable:!1,darkmode:!0,startScreen:"/",notes:{showEditor:!1,currentNote:{},showPreview:!0,defaultEditorMode:"View",autoFocusOnEdit:!0}},r=(0,a.Kh)({settings:i}),d=()=>{try{const e=JSON.parse(localStorage.getItem("settings"))||{};r.settings={...i,...e}}catch(e){r.settings=i}},u=()=>{localStorage.setItem("settings",JSON.stringify(r.settings))};function c(e,t,o,l,n,a){const i=(0,s.g2)("TopNav"),r=(0,s.g2)("TodoList");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(i,{title:"Todo List",iconClass:"bi bi-check2-square"}),(0,s.bF)(r)],64)}d();var v=o(4232);const b={class:"switch"},p=["checked"];var m={__name:"ToggleSwitch",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(e){const t=(0,s.fn)(e,"modelValue");return(e,o)=>((0,s.uX)(),(0,s.CE)("label",b,[(0,s.bo)((0,s.Lk)("input",{type:"checkbox",checked:t.value,"onUpdate:modelValue":o[0]||(o[0]=e=>t.value=e)},null,8,p),[[l.lH,t.value]]),o[1]||(o[1]=(0,s.Lk)("span",{class:"slider round"},null,-1))]))}},g=o(1241);const k=(0,g.A)(m,[["__scopeId","data-v-24b67bf2"]]);var f=k;const y={class:"navbar fixed-top shadow"},h={class:"container py-1 d-flex"},C={class:"fs-4 ms-1 m-0 me-auto no-select"},L={class:"offcanvas offcanvas-end",tabIndex:"-1",id:"offcanvasRight"},w={class:"offcanvas-body"},E={class:"row row-cols-1 g-3"},x={"data-bs-dismiss":"offcanvas"},_={"data-bs-dismiss":"offcanvas"},R={class:"dropdown"},X={class:"btn btn-outline-primary dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},F={key:0},I={key:1},N={class:"dropdown-menu"},W="col p-2 rounded",V="d-flex align-items-center fs-6";var T={__name:"TopNav",props:{title:{type:String,required:!0},iconClass:{type:String,required:!0}},setup(e){const t=(0,n.lq)(),o=e,l=()=>{confirm("A new version is available. Would you like to refresh?")&&window.location.reload()},i=(e,t={})=>{navigator.serviceWorker.getRegistration().then((o=>{o.showNotification(e,t)}))},d=()=>"granted"===Notification.permission,u=()=>{d?i("Permission already granted!"):Notification.requestPermission((e=>{"granted"===e&&i("Permission granted!")}))},c=e=>{r.settings.notes.defaultEditorMode=e};return(e,n)=>{const i=(0,s.g2)("RouterLink");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",y,[(0,s.Lk)("div",h,[(0,s.Lk)("p",C,[(0,s.Lk)("i",{class:(0,v.C4)(o.iconClass)},null,2),(0,s.eW)(" "+(0,v.v_)(o.title),1)]),(0,s.RG)(e.$slots,"nav-buttons"),n[5]||(n[5]=(0,s.Lk)("button",{class:"btn py-0 my-0 px-1 mx-1",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasRight"},[(0,s.Lk)("i",{class:"bi bi-list fs-4"})],-1))])]),(0,s.Lk)("div",L,[n[19]||(n[19]=(0,s.Lk)("div",{class:"offcanvas-header"},[(0,s.Lk)("h5",{class:"offcanvas-title",id:"offcanvasRightLabel"},"Settings"),(0,s.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1)),(0,s.Lk)("div",w,[(0,s.Lk)("div",E,[["/","/todolist"].includes((0,a.R1)(t).path)?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("div",{key:0,class:(0,v.C4)(W)},[(0,s.Lk)("span",x,[(0,s.bF)(i,{class:"btn btn-lg btn-primary",to:"/todolist"},{default:(0,s.k6)((()=>n[6]||(n[6]=[(0,s.Lk)("i",{class:"bi bi-check2-square me-2"},null,-1),(0,s.eW)("Todo List")]))),_:1})])])),"/notes"!==(0,a.R1)(t).path?((0,s.uX)(),(0,s.CE)("div",{key:1,class:(0,v.C4)(W)},[(0,s.Lk)("span",_,[(0,s.bF)(i,{class:"btn btn-lg btn-primary",to:"/notes"},{default:(0,s.k6)((()=>n[7]||(n[7]=[(0,s.Lk)("i",{class:"bi bi-journals me-2"},null,-1),(0,s.eW)("Notes")]))),_:1})])])):(0,s.Q3)("",!0),(0,a.R1)(r).settings.updateAvailable?((0,s.uX)(),(0,s.CE)("div",{key:2,class:(0,v.C4)(W)},[(0,s.Lk)("button",{onClick:l,class:"btn btn-lg btn-primary"},n[8]||(n[8]=[(0,s.Lk)("i",{class:"bi bi-arrow-clockwise me-2"},null,-1),(0,s.eW)("Update Available")]))])):(0,s.Q3)("",!0),(0,s.Lk)("div",{class:(0,v.C4)(W)},[(0,s.Lk)("div",{class:(0,v.C4)(V)},[n[9]||(n[9]=(0,s.Lk)("label",{class:"me-auto"},[(0,s.Lk)("i",{class:"bi bi-magic me-2"}),(0,s.eW)("Dark mode")],-1)),(0,s.bF)(f,{modelValue:(0,a.R1)(r).settings.darkmode,"onUpdate:modelValue":n[0]||(n[0]=e=>(0,a.R1)(r).settings.darkmode=e)},null,8,["modelValue"])])]),(0,s.Lk)("div",{class:(0,v.C4)(W)},[(0,s.Lk)("div",{class:(0,v.C4)(V)},[n[10]||(n[10]=(0,s.Lk)("label",{class:"me-auto"},[(0,s.Lk)("i",{class:"bi bi-bell-fill me-2"}),(0,s.eW)("Enable notifications")],-1)),(0,s.Lk)("button",{onClick:u,class:(0,v.C4)(["btn btn-outline-primary",{"disabled btn-outline-secondary":d}])},(0,v.v_)(d?"Enabled":"Request"),3)])]),"/todolist"===(0,a.R1)(t).path||"/"===(0,a.R1)(t).path?((0,s.uX)(),(0,s.CE)("div",{key:3,class:(0,v.C4)([W,"col-btn"])},[(0,s.Lk)("div",{class:(0,v.C4)(V)},n[11]||(n[11]=[(0,s.Lk)("label",{class:"me-auto"},[(0,s.Lk)("i",{class:"bi bi-plus-lg me-2"}),(0,s.eW)("Create new list")],-1)]))])):(0,s.Q3)("",!0),"/notes"===(0,a.R1)(t).path?((0,s.uX)(),(0,s.CE)("div",{key:4,class:(0,v.C4)(W)},[(0,s.Lk)("div",{class:(0,v.C4)(V)},[n[12]||(n[12]=(0,s.Lk)("label",{class:"me-auto"},[(0,s.Lk)("i",{class:"bi bi-binoculars-fill me-2"}),(0,s.eW)("Show note preview")],-1)),(0,s.bF)(f,{modelValue:(0,a.R1)(r).settings.notes.showPreview,"onUpdate:modelValue":n[1]||(n[1]=e=>(0,a.R1)(r).settings.notes.showPreview=e)},null,8,["modelValue"])])])):(0,s.Q3)("",!0),"/notes"===(0,a.R1)(t).path?((0,s.uX)(),(0,s.CE)("div",{key:5,class:(0,v.C4)(W)},[(0,s.Lk)("div",{class:(0,v.C4)(V)},[n[13]||(n[13]=(0,s.Lk)("label",{class:"me-auto"},[(0,s.Lk)("i",{class:"bi bi-keyboard me-2"}),(0,s.eW)("Autofocus on edit")],-1)),(0,s.bF)(f,{modelValue:(0,a.R1)(r).settings.notes.autoFocusOnEdit,"onUpdate:modelValue":n[2]||(n[2]=e=>(0,a.R1)(r).settings.notes.autoFocusOnEdit=e)},null,8,["modelValue"])])])):(0,s.Q3)("",!0),"/notes"===(0,a.R1)(t).path?((0,s.uX)(),(0,s.CE)("div",{key:6,class:(0,v.C4)(W)},[(0,s.Lk)("div",{class:(0,v.C4)(V)},[n[18]||(n[18]=(0,s.Lk)("label",{class:"me-auto"},[(0,s.Lk)("i",{class:"bi bi-card-text me-2"}),(0,s.eW)("Default editor mode")],-1)),(0,s.Lk)("div",R,[(0,s.Lk)("button",X,["View"===(0,a.R1)(r).settings.notes.defaultEditorMode?((0,s.uX)(),(0,s.CE)("span",F,n[14]||(n[14]=[(0,s.Lk)("i",{class:"bi bi-eye-fill me-2"},null,-1),(0,s.eW)("View")]))):(0,s.Q3)("",!0),"Edit"===(0,a.R1)(r).settings.notes.defaultEditorMode?((0,s.uX)(),(0,s.CE)("span",I,n[15]||(n[15]=[(0,s.Lk)("i",{class:"bi bi-pencil-fill me-2"},null,-1),(0,s.eW)("Edit")]))):(0,s.Q3)("",!0)]),(0,s.Lk)("ul",N,[(0,s.Lk)("li",null,[(0,s.Lk)("a",{onClick:n[3]||(n[3]=e=>c("View")),class:"dropdown-item"},n[16]||(n[16]=[(0,s.Lk)("i",{class:"bi bi-eye-fill me-2"},null,-1),(0,s.eW)("View")]))]),(0,s.Lk)("li",null,[(0,s.Lk)("a",{onClick:n[4]||(n[4]=e=>c("Edit")),class:"dropdown-item"},n[17]||(n[17]=[(0,s.Lk)("i",{class:"bi bi-pencil-fill me-2"},null,-1),(0,s.eW)("Edit")]))])])])])])):(0,s.Q3)("",!0)])])])],64)}}};const S=(0,g.A)(T,[["__scopeId","data-v-1676c950"]]);var A=S;o(7642),o(8004),o(3853),o(5876),o(2475),o(5024),o(1698),o(8992),o(4520),o(1454);const O={class:"ms-3 flex-fill d-flex align-items-center"},M=["id","onUpdate:modelValue"],B=["for"],K={class:"btn-div align-items-center pe-1"},q=["onClick"];var Q={__name:"TodoItem",props:{todos:{type:Array,required:!0},setCurrentTodo:{type:Function,required:!0},saveTodos:{type:Function,required:!0},visible:{type:Boolean,default:!0}},setup(e){const t=e,o=()=>{setTimeout((()=>{t.saveTodos()}),500)};return(e,n)=>((0,s.uX)(),(0,s.Wv)(l.F,{name:"list",tag:"ul",class:"list-group list-group-hover"},{default:(0,s.k6)((()=>[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(t.todos,(e=>((0,s.uX)(),(0,s.CE)("li",{key:e.id,class:(0,v.C4)([{disabled:!t.visible},"list-group-item d-flex align-items-center p-0 m-0"])},[(0,s.Lk)("div",O,[(0,s.bo)((0,s.Lk)("input",{id:"todo-"+e.id,type:"checkbox",class:"form-check-input my-0 me-3 fs-4","onUpdate:modelValue":t=>e.done=t,onChange:o},null,40,M),[[l.lH,e.done]]),(0,s.Lk)("label",{for:"todo-"+e.id,class:(0,v.C4)(["form-check-label stretched-link fs-6",{completed:e.done}])},(0,v.v_)(e.name),11,B)]),(0,s.Lk)("div",K,[(0,s.Lk)("button",{"data-bs-toggle":"modal","data-bs-target":"#editTodoModal",class:"btn",onClick:()=>t.setCurrentTodo(e)},n[0]||(n[0]=[(0,s.Lk)("i",{class:"bi bi-pencil"},null,-1)]),8,q)])],2)))),128))])),_:1}))}};const U=(0,g.A)(Q,[["__scopeId","data-v-5293ef82"]]);var $=U;const D={key:0,class:"modal-title"},j={key:1,class:"modal-title"},G={class:"d-flex align-items-center"};function J(e,t,o,n,a,i){const r=(0,s.g2)("BaseModal");return(0,s.uX)(),(0,s.Wv)(r,{"modal-id":o.modalId},{header:(0,s.k6)((()=>[o.isNew?((0,s.uX)(),(0,s.CE)("h5",D,"Add a new item...")):((0,s.uX)(),(0,s.CE)("h5",j,"Edit item")),t[8]||(t[8]=(0,s.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal"},null,-1))])),body:(0,s.k6)((()=>[(0,s.Lk)("div",G,[(0,s.bo)((0,s.Lk)("input",{type:"checkbox",class:"form-check-input my-0 me-2 fs-5","onUpdate:modelValue":t[0]||(t[0]=e=>a.todoCopy.done=e),onChange:t[1]||(t[1]=(...e)=>o.saveTodos&&o.saveTodos(...e))},null,544),[[l.aG,!o.isNew],[l.lH,a.todoCopy.done]]),o.isNew?(0,s.bo)(((0,s.uX)(),(0,s.CE)("input",{key:1,type:"text",class:"form-control","onUpdate:modelValue":t[4]||(t[4]=e=>a.todoCopy.name=e),onKeyup:t[5]||(t[5]=(0,l.jR)((e=>o.addNewTodo(a.todoCopy)),["enter"]))},null,544)),[[l.Jo,a.todoCopy.name,void 0,{trim:!0}]]):(0,s.bo)(((0,s.uX)(),(0,s.CE)("input",{key:0,type:"text",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=e=>a.todoCopy.name=e),onChange:t[3]||(t[3]=(...e)=>o.saveTodos&&o.saveTodos(...e))},null,544)),[[l.Jo,a.todoCopy.name,void 0,{trim:!0}]])])])),footer:(0,s.k6)((()=>[o.isNew?((0,s.uX)(),(0,s.CE)("button",{key:0,onClick:t[6]||(t[6]=e=>o.addNewTodo(a.todoCopy)),type:"button",class:"btn btn-primary","data-bs-dismiss":"modal"},t[9]||(t[9]=[(0,s.Lk)("i",{class:"bi bi-file-arrow-up-fill"},null,-1),(0,s.eW)(" Save ")]))):((0,s.uX)(),(0,s.CE)("button",{key:1,onClick:t[7]||(t[7]=e=>o.deleteTodo(o.todo.id)),type:"button",class:"btn btn-danger","data-bs-dismiss":"modal"},t[10]||(t[10]=[(0,s.Lk)("i",{class:"bi bi-trash3"},null,-1),(0,s.eW)(" Delete ")])))])),_:1},8,["modal-id"])}const H=["id"],P={class:"modal-dialog modal-dialog-centered"},z={class:"modal-content"},Y={key:0,class:"modal-header"},Z={key:1,class:"modal-header"},ee={class:"modal-title"},te={key:2,class:"modal-body"},oe={key:3,class:"modal-footer"};var le={__name:"BaseModal",props:{modalId:{type:String,required:!0},title:{type:String}},setup(e){const t=e;return(e,o)=>((0,s.uX)(),(0,s.CE)("div",{id:t.modalId,class:"modal fade",tabIndex:"-1"},[(0,s.Lk)("div",P,[(0,s.Lk)("div",z,[e.$slots.header?((0,s.uX)(),(0,s.CE)("div",Y,[(0,s.RG)(e.$slots,"header")])):((0,s.uX)(),(0,s.CE)("div",Z,[(0,s.Lk)("h5",ee,(0,v.v_)(t.title||""),1)])),e.$slots.body?((0,s.uX)(),(0,s.CE)("div",te,[(0,s.RG)(e.$slots,"body")])):(0,s.Q3)("",!0),e.$slots.footer?((0,s.uX)(),(0,s.CE)("div",oe,[(0,s.RG)(e.$slots,"footer")])):(0,s.Q3)("",!0)])])],8,H))}};const se=le;var ne=se,ae={components:{BaseModal:ne},props:{modalId:{type:String,required:!0},isNew:{type:Boolean,required:!0},todo:{type:Object,required:!0},deleteTodo:{type:Function,required:!1},addNewTodo:{type:Function,required:!1},saveTodos:{type:Function,required:!1}},data(){return{todoCopy:this.isNew?{name:"",done:!1,id:Date.now()}:this.todo}},watch:{todo(e){this.todoCopy=this.isNew?{name:"",done:!1,id:Date.now()}:e}}};const ie=(0,g.A)(ae,[["render",J]]);var re=ie;const de={class:"fixed-bottom",style:{height:"70px"}},ue={class:"container",style:{height:"50px"}};var ce={__name:"FixedBottom",setup(e){const t=(0,s.OA)();return(e,o)=>((0,s.uX)(),(0,s.CE)("div",de,[(0,s.Lk)("div",ue,[(0,s.Lk)("div",{class:(0,v.C4)((0,a.R1)(t).class||"d-flex justify-content-end")},[(0,s.RG)(e.$slots,"default")],2)])]))}};const ve=(0,g.A)(ce,[["__scopeId","data-v-283b122b"]]);var be=ve;const pe={blue:"#0d6efd",indigo:"#6610f2",purple:"#6f42c1",pink:"#d63384",red:"#dc3545",orange:"#fd7e14",yellow:"#ffc107",green:"#198754",teal:"#20c997",cyan:"#0dcaf0",charcoal:"#343a40"};function me(){return navigator.language||navigator.languages[0]}function ge(e){e=e.replace(/^#/,"");const t=parseInt(e.substr(0,2),16),o=parseInt(e.substr(2,2),16),l=parseInt(e.substr(4,2),16),s=(299*t+587*o+114*l)/1e3;return{r:t,g:o,b:l,isLight:s>=128}}function ke(e,t,o,l=1){const s=ge(e),n=ge(t),a=Math.round(s.r*(1-o)+n.r*o),i=Math.round(s.b*(1-o)+n.b*o),r=Math.round(s.g*(1-o)+n.g*o),d=`#${((1<<24)+(a<<16)+(r<<8)+i).toString(16).slice(1).toUpperCase()}${Math.round(255*l).toString(16).padStart(2,"0").toUpperCase()}`;return d}function fe(e){return e.charAt(0).toUpperCase()+e.slice(1)}const ye={class:"container"},he={key:0,class:"m-0 mb-2 p-0 text-black"},Ce={class:"input-group"},Le={id:"itemOptions"},we=["value"];var Ee={__name:"TodoList",setup(e){const t=(0,a.KR)([]),o=(0,a.KR)(!1),n=(0,a.KR)(!1),i=(0,a.KR)({name:"",done:!1,id:0}),r=(0,a.KR)(""),d=(0,s.rk)("todoInput"),u=(0,s.rk)("showIncompleteButton"),c=()=>{t.value=JSON.parse(localStorage.getItem("todoItems"))||[]},b=e=>{setTimeout((()=>{e.target.style.outline="none",e.target.style.boxShadow="none",u.value.blur()}),250)},p=e=>{o.value=!o.value,b(e)},m=()=>{r.value&&(t.value.push({id:Date.now(),name:fe(r.value),done:!1}),r.value="",f())},g=e=>{i.value=e},k=e=>{t.value=t.value.filter((t=>t.id!==e)),f()},f=()=>{localStorage.setItem("todoItems",JSON.stringify(t.value))},y=(0,s.EW)((()=>[...t.value].sort(((e,t)=>t.id-e.id)))),h=(0,s.EW)((()=>y.value.filter((e=>e.done)))),C=(0,s.EW)((()=>y.value.filter((e=>!e.done)))),L=(0,s.EW)((()=>h.value.length)),w=(0,s.EW)((()=>[...new Set(t.value.map((e=>e.name)))].sort())),E=(0,s.EW)((()=>o.value?"bi bi-chevron-down":"bi bi-chevron-right"));return(0,s.wB)((()=>n.value),(e=>{e&&(0,s.dY)((()=>{d.value.focus()}))})),(0,s.sV)(c),(e,t)=>((0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",ye,[(0,s.bF)($,{todos:C.value,"set-current-todo":g,"save-todos":f,visible:!0},null,8,["todos"]),(0,s.Lk)("button",{id:"showIncompleteButton",ref_key:"showIncompleteButton",ref:u,class:(0,v.C4)(["btn w-100 text-start text-muted",{"mt-2":C.value.length>0}]),onClick:t[0]||(t[0]=e=>p(e))},[(0,s.Lk)("i",{class:(0,v.C4)(E.value)},null,2),(0,s.eW)(" Completed "+(0,v.v_)(L.value),1)],2),o.value?((0,s.uX)(),(0,s.CE)("hr",he)):(0,s.Q3)("",!0),(0,s.bF)(l.eB,null,{default:(0,s.k6)((()=>[(0,s.bo)((0,s.bF)($,{visible:o.value,todos:h.value,"set-current-todo":g,"save-todos":f},null,8,["visible","todos"]),[[l.aG,o.value]])])),_:1})]),null!==i.value?((0,s.uX)(),(0,s.Wv)(re,{key:0,modalId:"editTodoModal","is-new":!1,todo:i.value,"delete-todo":k,"save-todos":f},null,8,["todo"])):(0,s.Q3)("",!0),(0,s.bF)(be,null,{default:(0,s.k6)((()=>[(0,s.bF)(l.eB,null,{default:(0,s.k6)((()=>[(0,s.bo)((0,s.Lk)("div",Ce,[(0,s.bo)((0,s.Lk)("input",{ref_key:"todoInput",ref:d,list:"itemOptions",style:{height:"3.5rem"},type:"text",class:"form-control",placeholder:"Add a new item...","onUpdate:modelValue":t[1]||(t[1]=e=>r.value=e),onKeyup:(0,l.jR)(m,["enter"]),onFocusout:t[2]||(t[2]=e=>n.value=!1)},null,544),[[l.Jo,r.value,void 0,{trim:!0}]]),t[4]||(t[4]=(0,s.Lk)("button",{class:"btn btn-danger"},[(0,s.Lk)("i",{class:"bi bi-x-lg"})],-1))],512),[[l.aG,n.value]])])),_:1}),(0,s.Lk)("datalist",Le,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(w.value,((e,t)=>((0,s.uX)(),(0,s.CE)("option",{key:t,value:e},null,8,we)))),128))]),(0,s.bo)((0,s.Lk)("button",{onClick:t[3]||(t[3]=e=>n.value=!n.value),style:{height:"50px",width:"50px"},class:"btn btn-primary rounded-circle fs-5 shadow",type:"button"},t[5]||(t[5]=[(0,s.Lk)("i",{class:"bi bi-plus-lg"},null,-1)]),512),[[l.aG,!n.value]])])),_:1})],64))}};const xe=(0,g.A)(Ee,[["__scopeId","data-v-94981170"]]);var _e=xe,Re={components:{TopNav:A,TodoList:_e}};const Xe=(0,g.A)(Re,[["render",c]]);var Fe=Xe,Ie=(o(3949),o(1017)),Ne=o.n(Ie);o(9106);const We={class:"root-container"},Ve={ref:"outputElement",class:"form-control p-0 m-0",id:"highlighting"};var Te={__name:"MarkdownEditor",props:(0,s.zz)({editorVisible:{type:Boolean}},{modelValue:{},modelModifiers:{}}),emits:(0,s.zz)(["input","keydown.enter"],["update:modelValue"]),setup(e,{emit:t}){let n=o(6709);n.use({breaks:!0,silent:!0});const i=(0,s.fn)(e,"modelValue"),d=t,u=e,c=(0,a.KR)(i.value),v=(0,s.rk)("inputElement"),b=(0,s.rk)("editorBg"),p=()=>{let e=document.getElementById("highlighting-content"),t=v.value.value;"\n"==t[t.length-1]&&(t+=" "),e.innerHTML=Ne().highlight(t,Ne().languages.markdown,"md")},m=()=>{v.value.style.height="5px",v.value.style.height=v.value.scrollHeight+"px",b.value.style.height=v.value.scrollHeight+"px"},g=()=>{const e=v.value.selectionStart,t=v.value.value,o=t.lastIndexOf("\n",e-1),l=t.substring(o+1,e);return l},k=()=>{let e=v.value.value,t=e.slice(0,v.value.selectionStart),o=e.slice(v.value.selectionEnd,v.value.value.length),l=e.slice(v.value.selectionStart,v.value.selectionEnd),s={start:v.value.selectionStart,end:v.value.selectionEnd};return{selected:l,before:t,after:o,cursor:s}},f=e=>{let t=k();v.value.value=t.before+e+t.after,v.value.selectionStart=t.cursor.start+e.length,v.value.selectionEnd=t.cursor.start+e.length,p(),m()},y=()=>{const e=/^(\t*)(\d+)\..+$/,t=v.value.value,o=t.split("\n"),l=v.value.selectionStart;let s=0;o.forEach((function(t,l){const n=e.exec(t);n?(s++,o[l]=o[l].replace(e,((e,t,o)=>t+`${s}`+e.slice(o.length+t.length)))):s=0})),v.value.value=o.join("\n"),v.value.selectionStart=l,v.value.selectionEnd=l,p()},h=e=>{e.preventDefault(),f("\t")},C=()=>{p(),m(),i.value=v.value.value,d("input")},L=e=>{e.preventDefault();const t=/^\t*(\d+)\..+$/,o=/^\t*(-|\*) .+$/;let l=g(),s="\n";if(l.length>0){const e=t.exec(l),n=o.exec(l),a=/(\t+).+/.exec(l);if(a){const e=a.at(0).split("\t").length;s+="\t".repeat(e-1)}if(e){let t=parseInt(e.at(1))+1;s+=`${t}. `}else n&&(s+=n.at(1)+" ")}f(s),y()};return(0,s.wB)((()=>u.editorVisible),(e=>{e&&v.value&&b.value&&(0,s.dY)((()=>{m(),p(),r.settings.notes.autoFocusOnEdit&&v.value.focus()}))})),(0,s.$u)(m),(e,t)=>((0,s.uX)(),(0,s.CE)("div",We,[(0,s.bo)((0,s.Lk)("textarea",{placeholder:"Note",id:"editing",ref_key:"inputElement",ref:v,spellcheck:"false","onUpdate:modelValue":t[0]||(t[0]=e=>c.value=e),class:"form-control p-0 m-0",onInput:C,onKeydown:[(0,l.jR)(L,["enter"]),(0,l.jR)(h,["tab"])]},"        ",544),[[l.Jo,c.value]]),(0,s.Lk)("div",{ref_key:"editorBg",ref:b,id:"editor-bg",class:"form-control p-0 m-0"},null,512),(0,s.Lk)("pre",Ve,t[1]||(t[1]=[(0,s.Lk)("code",{id:"highlighting-content"},null,-1),(0,s.eW)("\n            "),(0,s.Lk)("div",{id:"content-bottom"},null,-1),(0,s.eW)("\n        ")]),512)]))}};const Se=(0,g.A)(Te,[["__scopeId","data-v-29294be2"]]);var Ae=Se;const Oe={class:"container note-editor"},Me={class:"container note-viewer"},Be={class:"d-flex align-items-center p-0 m-0 mb-2 flex-wrap"},Ke=["textContent"],qe=["innerHTML"],Qe={class:"d-flex flex-wrap"},Ue=["onClick"],$e=["disabled"],De={key:0,class:"bi bi-eye-fill"},je={key:1,class:"bi bi-pencil-fill"};let Ge=o(6709);Ge.use({breaks:!0,silent:!0});const Je="btn rounded-circle fs-5 shadow",He={height:"50px",width:"50px"};var Pe={__name:"NoteEditor",props:(0,s.zz)({isNew:{type:Boolean,required:!0}},{modelValue:{},modelModifiers:{}}),emits:(0,s.zz)(["hide-editor","update","delete"],["update:modelValue"]),setup(e,{emit:t}){const o=(0,s.fn)(e,"modelValue"),n=e,i=t,d=(0,a.KR)(n.isNew),u=(0,a.KR)({...o.value}),c=(0,a.KR)(null),b=(0,s.rk)("titleInput"),p=(0,s.EW)((()=>new Date(u.value.id).toLocaleString(me(),{dateStyle:"medium",timeStyle:"short"}))),m=(0,s.EW)((()=>{let e=u.value.color||pe.cyan;return h(e)})),g=(0,s.EW)((()=>Ge.parse(u.value.text))),k=(0,s.EW)((()=>f.value||!n.isNew)),f=(0,s.EW)((()=>u.value.title.trim().length>=3)),y=e=>{u.value.color=e,E()},h=e=>{let t=ge(e),o=t.isLight?"#000000":"#FFFFFF";return{bg:e,txt:ke(e,o,.7)}},C=()=>{f.value||(u.value.title=c.value||"")},L=()=>{d.value=!d.value,d.value?R():_()},w=()=>{i("hide-editor")},E=()=>{f.value&&i("update",u.value)},x=()=>{i("delete",u.value.id),i("hide-editor")},_=()=>{const e=document.getElementsByTagName("blockquote");for(const t of e)t.classList.add("blockquote","border-start","border-dark-subtle","border-3","ps-2","py-1","fs-6")};async function R(){await(0,s.dY)(),""===u.value.title&&b.value.focus()}return(0,s.wB)((()=>u.value.title),(e=>{f.value&&(c.value=e),R()}),{immediate:!0}),(0,s.sV)((()=>{"Edit"===r.settings.notes.defaultEditorMode&&(d.value=!0)})),(0,s.sV)(_),(e,t)=>((0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bo)((0,s.Lk)("div",Oe,[(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>u.value.title=e),ref_key:"titleInput",ref:b,class:"fs-3 form-control mb-2",placeholder:"Title",type:"text",onInput:E,onFocusout:C},null,544),[[l.Jo,u.value.title]]),(0,s.bF)(Ae,{modelValue:u.value.text,"onUpdate:modelValue":t[1]||(t[1]=e=>u.value.text=e),onInput:E,"editor-visible":d.value},null,8,["modelValue","editor-visible"])],512),[[l.aG,d.value]]),(0,s.bo)((0,s.Lk)("div",Me,[(0,s.Lk)("div",Be,[(0,s.Lk)("div",{class:"fs-3 text-muted m-0 p-0 flex-fill",textContent:(0,v.v_)(u.value.title)},null,8,Ke),(0,s.Lk)("div",{class:"badge my-1",style:(0,v.Tr)({backgroundColor:m.value.bg,color:m.value.txt})},[t[3]||(t[3]=(0,s.Lk)("i",{class:"bi bi-calendar"},null,-1)),(0,s.eW)(" "+(0,v.v_)(p.value),1)],4)]),t[4]||(t[4]=(0,s.Lk)("hr",{class:"p-0 m-0 mb-2"},null,-1)),(0,s.Lk)("div",{innerHTML:g.value},null,8,qe)],512),[[l.aG,!d.value]]),(0,s.bF)(ne,{modalId:"confirmDeleteModal",title:"Are you sure you want to delete this note?"},{footer:(0,s.k6)((()=>[t[6]||(t[6]=(0,s.Lk)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},[(0,s.Lk)("i",{class:"bi bi-x-lg"}),(0,s.eW)(" Cancel ")],-1)),(0,s.Lk)("button",{onClick:x,type:"button",class:"btn btn-danger","data-bs-dismiss":"modal"},t[5]||(t[5]=[(0,s.Lk)("i",{class:"bi bi-trash3"},null,-1),(0,s.eW)(" Delete ")]))])),_:1}),(0,s.bF)(ne,{modalId:"selectColorModal",title:"Select a color..."},{body:(0,s.k6)((()=>[(0,s.Lk)("div",Qe,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)((0,a.R1)(pe),((e,t)=>((0,s.uX)(),(0,s.CE)("button",{key:e,onClick:t=>y(e),"data-bs-dismiss":"modal",class:"btn rounded-pill m-1 color-option",style:(0,v.Tr)({backgroundColor:e,color:h(e).txt})},(0,v.v_)(t),13,Ue)))),128))])])),footer:(0,s.k6)((()=>[(0,s.Lk)("button",{type:"button",onClick:t[2]||(t[2]=e=>y(null)),class:"btn btn-secondary btn-warning","data-bs-dismiss":"modal"},t[7]||(t[7]=[(0,s.Lk)("i",{class:"bi bi-eraser-fill"},null,-1),(0,s.eW)(" Clear ")])),t[8]||(t[8]=(0,s.Lk)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},[(0,s.Lk)("i",{class:"bi bi-x-lg"}),(0,s.eW)(" Cancel ")],-1))])),_:1}),(0,s.bF)(be,null,{default:(0,s.k6)((()=>[(0,s.Lk)("button",{disabled:!k.value,onClick:L,style:He,class:(0,v.C4)([Je,"btn-primary"]),type:"button"},[d.value?((0,s.uX)(),(0,s.CE)("i",De)):((0,s.uX)(),(0,s.CE)("i",je))],8,$e),(0,s.Lk)("button",{onClick:w,style:He,class:(0,v.C4)([Je,"ms-2 btn-secondary"]),type:"button"},t[9]||(t[9]=[(0,s.Lk)("i",{class:"bi bi-x-lg"},null,-1)]))])),_:1})],64))}};const ze=(0,g.A)(Pe,[["__scopeId","data-v-c3d865de"]]);var Ye=ze;const Ze={key:0,class:"bi bi-pin-fill fs-4 text-warning"},et={key:1,class:"bi bi-pin fs-4"},tt={key:1,"data-bs-toggle":"modal","data-bs-target":"#selectColorModal",class:"btn py-0 my-0 px-1 mx-1",type:"button"},ot={key:2,"data-bs-toggle":"modal","data-bs-target":"#confirmDeleteModal",class:"btn py-0 my-0 px-1 mx-1",type:"button"},lt={key:1,class:"container note-list"},st={key:0,class:"fs-5 text-muted"},nt={class:"row g-2"},at=["onClick"],it={class:"d-flex align-items-center flex-wrap mb-1"},rt={class:"fs-6 fw-medium flex-fill"};var dt={__name:"NotesList",setup(e){const t=(0,a.KR)([]),o=(0,a.KR)(!1);function l(){r.settings.notes.showEditor=!1,r.settings.notes.currentNote={}}const n=()=>{t.value=JSON.parse(localStorage.getItem("notes"))||[]},i=e=>{let t=e.text.replace(/#{1,6}\s+/g,"");return t=t.replace(/(\*\*|__)(.*?)\1/g,"$2"),t=t.replace(/(\*|_)(.*?)\1/g,"$2"),t=t.replace(/-{3,}/g,""),t},d=e=>{const t=i(e);let o=t.slice(0,100);return o+=o.length<t.length?"...":"",o},u=e=>{let t=void 0!==e.color&&e.color,o=e.color||pe.cyan,l=ge(o),s=l.isLight?"#000000":"#FFFFFF";return{bg:t?o:"inherit",txt:t?ke(o,s,.7):"inherit",badge:t?ke(o,s,.7):o,badgeTxt:t?o:ke(o,s,.9)}},c=e=>{r.settings.notes.currentNote=e,o.value=!1,setTimeout((()=>{r.settings.notes.showEditor=!0}),100)},b=()=>{localStorage.setItem("notes",JSON.stringify(t.value))},p=e=>{const l=t.value.findIndex((t=>t.id===e.id));e.modifiedOn=Date.now(),-1!==l?t.value[l]=e:o.value&&t.value.push(e),r.settings.notes.currentNote=e},m=e=>{t.value=t.value.filter((t=>t.id!==e))},g=()=>{r.settings.notes.currentNote={id:Date.now(),title:"",text:""},o.value=!0,r.settings.notes.showEditor=!0},k=()=>{void 0===r.settings.notes.currentNote.pinned?r.settings.notes.currentNote.pinned=!0:r.settings.notes.currentNote.pinned=!r.settings.notes.currentNote.pinned},f=(0,s.EW)((()=>[...t.value].sort(((e,t)=>e.pinned===t.pinned?t.id-e.id:!0===e.pinned?-1:1))));return(0,s.wB)((()=>t.value),(()=>{b()}),{deep:!0}),(0,s.sV)(n),(0,s.hi)(l),(e,n)=>((0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(A,{title:"Notes",iconClass:"bi bi-journals"},{"nav-buttons":(0,s.k6)((()=>[(0,a.R1)(r).settings.notes.showEditor?((0,s.uX)(),(0,s.CE)("button",{key:0,onClick:k,class:"btn py-0 my-0 px-1 mx-1",type:"button"},[(0,a.R1)(r).settings.notes.currentNote.pinned?((0,s.uX)(),(0,s.CE)("i",Ze)):((0,s.uX)(),(0,s.CE)("i",et))])):(0,s.Q3)("",!0),(0,a.R1)(r).settings.notes.showEditor?((0,s.uX)(),(0,s.CE)("button",tt,n[1]||(n[1]=[(0,s.Lk)("i",{class:"bi bi-palette-fill fs-4 text-primary"},null,-1)]))):(0,s.Q3)("",!0),(0,a.R1)(r).settings.notes.showEditor?((0,s.uX)(),(0,s.CE)("button",ot,n[2]||(n[2]=[(0,s.Lk)("i",{class:"bi bi-trash3 fs-4 text-danger"},null,-1)]))):(0,s.Q3)("",!0)])),_:1}),(0,a.R1)(r).settings.notes.showEditor?((0,s.uX)(),(0,s.Wv)(Ye,{key:0,modelValue:(0,a.R1)(r).settings.notes.currentNote,"onUpdate:modelValue":n[0]||(n[0]=e=>(0,a.R1)(r).settings.notes.currentNote=e),"is-new":o.value,onHideEditor:l,onUpdate:p,onDelete:m},null,8,["modelValue","is-new"])):(0,s.Q3)("",!0),(0,a.R1)(r).settings.notes.showEditor?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("div",lt,[0===t.value.length?((0,s.uX)(),(0,s.CE)("p",st,"I know I'm empty right now but I'm full of potential...")):(0,s.Q3)("",!0),(0,s.Lk)("div",nt,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(f.value,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.id,class:"col-6 list-group-hover no-select d-flex",onClick:t=>c(e)},[(0,s.Lk)("div",{class:(0,v.C4)(["item list-group-item flex-fill",{"li-active":(0,a.R1)(r).settings.notes.currentNote.id===e.id}]),style:(0,v.Tr)({backgroundColor:e.color,color:u(e).txt})},[(0,s.Lk)("div",it,[(0,s.Lk)("div",rt,(0,v.v_)(e.title),1),(0,s.Lk)("div",null,[e.pinned?((0,s.uX)(),(0,s.CE)("i",{key:0,class:"me-2 bi bi-pin-fill",style:(0,v.Tr)({color:u(e).badge})},null,4)):(0,s.Q3)("",!0),(0,s.Lk)("div",{class:"badge",style:(0,v.Tr)({backgroundColor:u(e).badge,color:u(e).badgeTxt})},(0,v.v_)(new Date(e.id).toLocaleDateString((0,a.R1)(me)())),5)])]),(0,a.R1)(r).settings.notes.showPreview?((0,s.uX)(),(0,s.CE)("div",{key:0,class:"note-preview",style:(0,v.Tr)({color:u(e).txt})},(0,v.v_)(d(e)),5)):(0,s.Q3)("",!0)],6)],8,at)))),128))])])),(0,a.R1)(r).settings.notes.showEditor?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.Wv)(be,{key:2},{default:(0,s.k6)((()=>[(0,s.Lk)("button",{onClick:g,style:{height:"50px",width:"50px"},class:"btn btn-primary rounded-circle fs-5 shadow",type:"button"},n[3]||(n[3]=[(0,s.Lk)("i",{class:"bi bi-plus-lg"},null,-1)]))])),_:1}))],64))}};const ut=(0,g.A)(dt,[["__scopeId","data-v-9bae9aaa"]]);var ct=ut,vt={__name:"NotesView",setup(e){return(e,t)=>((0,s.uX)(),(0,s.Wv)(ct))}};const bt=vt;var pt=bt;const mt=[{path:"/",name:"Home",component:Fe},{path:"/todolist",name:"Tasks",component:Fe},{path:"/notes",name:"Notes",component:pt}],gt=(0,n.aE)({history:(0,n.Bt)(),routes:mt});var kt=gt,ft={__name:"App",setup(e){const t=(0,n.lq)();return(0,s.wB)((()=>r),(()=>{u(),document.querySelector("body").setAttribute("data-bs-theme",r.settings.darkmode?"dark":"light")}),{immediate:!0,deep:!0}),(0,s.wB)((()=>t.path),(e=>{r.settings.startScreen=e})),(0,s.sV)((()=>{r.settings.startScreen&&kt.push(r.settings.startScreen)})),(0,s.sV)((()=>{"serviceWorker"in navigator&&navigator.serviceWorker.getRegistration().then((e=>{e.onupdatefound=()=>{const t=e.installing;t.onstatechange=()=>{"installed"===t.state&&navigator.serviceWorker.controller&&(r.settings.updateAvailable=!0)}},setInterval((()=>{e.update()}),6e4)}))})),(e,t)=>{const o=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.Wv)(o)}}};const yt=ft;var ht=yt,Ct=(o(9953),o(4458));(0,Ct.k)("/turbo-todo/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});const Lt=(0,l.Ef)(ht);Lt.use(kt),Lt.mount("#app")}},t={};function o(l){var s=t[l];if(void 0!==s)return s.exports;var n=t[l]={exports:{}};return e[l].call(n.exports,n,n.exports,o),n.exports}o.m=e,function(){var e=[];o.O=function(t,l,s,n){if(!l){var a=1/0;for(u=0;u<e.length;u++){l=e[u][0],s=e[u][1],n=e[u][2];for(var i=!0,r=0;r<l.length;r++)(!1&n||a>=n)&&Object.keys(o.O).every((function(e){return o.O[e](l[r])}))?l.splice(r--,1):(i=!1,n<a&&(a=n));if(i){e.splice(u--,1);var d=s();void 0!==d&&(t=d)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[l,s,n]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var l in t)o.o(t,l)&&!o.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,l){var s,n,a=l[0],i=l[1],r=l[2],d=0;if(a.some((function(t){return 0!==e[t]}))){for(s in i)o.o(i,s)&&(o.m[s]=i[s]);if(r)var u=r(o)}for(t&&t(l);d<a.length;d++)n=a[d],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(u)},l=self["webpackChunkturbo_todo"]=self["webpackChunkturbo_todo"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=o.O(void 0,[504],(function(){return o(4725)}));l=o.O(l)})();
//# sourceMappingURL=app.9905331b.js.map