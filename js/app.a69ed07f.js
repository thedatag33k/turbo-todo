(function(){"use strict";var e={6858:function(e,t,o){var l=o(5130),n=o(6768),s=o(144);const a={darkmode:!0,notes:{showEditor:!1,currentNote:{}}},i=(0,s.Kh)({settings:a,updateAvailable:!1}),r=()=>{try{const e=JSON.parse(localStorage.getItem("settings"))||{};i.settings={...a,...e}}catch(e){i.settings=a}},d=()=>{localStorage.setItem("settings",JSON.stringify(i.settings))};r();var u={__name:"App",setup(e){return(0,n.wB)((()=>i),(()=>{d(),document.querySelector("body").setAttribute("data-bs-theme",i.settings.darkmode?"dark":"light")}),{immediate:!0,deep:!0}),(0,n.sV)((()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register("/service-worker.js").then((e=>{e.onupdatefound=()=>{const t=e.installing;t.onstatechange=()=>{"installed"===t.state&&navigator.serviceWorker.controller&&(i.updateAvailable=!0)}},setInterval((()=>{e.update()}),6e4)}))})),(e,t)=>{const o=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.Wv)(o)}}};const c=u;var v=c,b=o(1387);function p(e,t,o,l,s,a){const i=(0,n.g2)("TopNav"),r=(0,n.g2)("TodoList");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(i,{title:"Todo List",iconClass:"bi bi-check2-square"}),(0,n.bF)(r)],64)}var m=o(4232);const f={class:"switch"},g=["checked"];var k={__name:"ToggleSwitch",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(e){const t=(0,n.fn)(e,"modelValue");return(e,o)=>((0,n.uX)(),(0,n.CE)("label",f,[(0,n.bo)((0,n.Lk)("input",{type:"checkbox",checked:t.value,"onUpdate:modelValue":o[0]||(o[0]=e=>t.value=e)},null,8,g),[[l.lH,t.value]]),o[1]||(o[1]=(0,n.Lk)("span",{class:"slider round"},null,-1))]))}},y=o(1241);const h=(0,y.A)(k,[["__scopeId","data-v-bc4089a2"]]);var L=h;const w={class:"navbar fixed-top shadow"},C={class:"container py-1 d-flex"},x={class:"fs-4 ms-1 m-0 me-auto no-select"},E={class:"offcanvas offcanvas-end",tabIndex:"-1",id:"offcanvasRight"},_={class:"offcanvas-body"},I={class:"row row-cols-1 g-3"},F={class:"col"},N={"data-bs-dismiss":"offcanvas"},X={class:"col"},T={"data-bs-dismiss":"offcanvas"},S={key:0,class:"col"},R={class:"col"},W={class:"d-flex align-items-center fs-5"};var V={__name:"TopNav",props:{title:{type:String,required:!0},iconClass:{type:String,required:!0}},setup(e){const t=e,o=()=>{confirm("A new version is available. Would you like to refresh?")&&window.location.reload()};return(e,l)=>{const a=(0,n.g2)("RouterLink");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("div",w,[(0,n.Lk)("div",C,[(0,n.Lk)("p",x,[(0,n.Lk)("i",{class:(0,m.C4)(t.iconClass)},null,2),(0,n.eW)(" "+(0,m.v_)(t.title),1)]),(0,n.RG)(e.$slots,"nav-buttons"),l[1]||(l[1]=(0,n.Lk)("button",{class:"btn py-0 my-0 px-1 mx-1",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasRight"},[(0,n.Lk)("i",{class:"bi bi-list fs-4"})],-1))])]),(0,n.Lk)("div",E,[l[7]||(l[7]=(0,n.Lk)("div",{class:"offcanvas-header"},[(0,n.Lk)("h5",{class:"offcanvas-title",id:"offcanvasRightLabel"},"Options"),(0,n.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1)),(0,n.Lk)("div",_,[(0,n.Lk)("div",I,[l[6]||(l[6]=(0,n.Lk)("div",{class:"col"},[(0,n.Lk)("button",{class:"btn btn-lg btn-primary"},[(0,n.Lk)("i",{class:"bi bi-plus-lg"}),(0,n.eW)(" Create New List")])],-1)),(0,n.Lk)("div",F,[(0,n.Lk)("span",N,[(0,n.bF)(a,{class:"btn btn-lg btn-primary",to:"/"},{default:(0,n.k6)((()=>l[2]||(l[2]=[(0,n.Lk)("i",{class:"bi bi-check2-square"},null,-1),(0,n.eW)(" Todo List")]))),_:1})])]),(0,n.Lk)("div",X,[(0,n.Lk)("span",T,[(0,n.bF)(a,{class:"btn btn-lg btn-primary",to:"/notes"},{default:(0,n.k6)((()=>l[3]||(l[3]=[(0,n.Lk)("i",{class:"bi bi-journals"},null,-1),(0,n.eW)(" Notes")]))),_:1})])]),(0,s.R1)(i).updateAvailable?((0,n.uX)(),(0,n.CE)("div",S,[(0,n.Lk)("button",{onClick:o,class:"btn btn-lg btn-primary"},l[4]||(l[4]=[(0,n.Lk)("i",{class:"bi bi-arrow-clockwise"},null,-1),(0,n.eW)(" Update Available")]))])):(0,n.Q3)("",!0),(0,n.Lk)("div",R,[(0,n.Lk)("div",W,[l[5]||(l[5]=(0,n.Lk)("label",{class:"me-auto"},"Dark mode",-1)),(0,n.bF)(L,{modelValue:(0,s.R1)(i).settings.darkmode,"onUpdate:modelValue":l[0]||(l[0]=e=>(0,s.R1)(i).settings.darkmode=e)},null,8,["modelValue"])])])])])])],64)}}};const O=V;var A=O;o(4114),o(7642),o(8004),o(3853),o(5876),o(2475),o(5024),o(1698),o(8992),o(4520),o(1454);const K={class:"ps-3 flex-fill align-items-center"},B=["id","onUpdate:modelValue"],M=["for"],j={class:"btn-div align-items-center pe-1"},q=["onClick"];var D={__name:"TodoItem",props:{todos:{type:Array,required:!0},setCurrentTodo:{type:Function,required:!0},saveTodos:{type:Function,required:!0},visible:{type:Boolean,default:!0}},setup(e){const t=e,o=()=>{setTimeout((()=>{t.saveTodos()}),500)};return(e,s)=>((0,n.uX)(),(0,n.Wv)(l.F,{name:"list",tag:"ul",class:"list-group list-group-hover"},{default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(t.todos,(e=>((0,n.uX)(),(0,n.CE)("li",{key:e.id,class:(0,m.C4)([{disabled:!t.visible},"list-group-item d-flex align-items-center p-0 m-0"])},[(0,n.Lk)("div",K,[(0,n.bo)((0,n.Lk)("input",{id:"todo-"+e.id,type:"checkbox",class:"form-check-input me-2 rounded-circle","onUpdate:modelValue":t=>e.done=t,onChange:o},null,40,B),[[l.lH,e.done]]),(0,n.Lk)("label",{for:"todo-"+e.id,class:(0,m.C4)(["form-check-label stretched-link fs-6",{completed:e.done}])},(0,m.v_)(e.name),11,M)]),(0,n.Lk)("div",j,[(0,n.Lk)("button",{"data-bs-toggle":"modal","data-bs-target":"#editTodoModal",class:"btn",onClick:()=>t.setCurrentTodo(e)},s[0]||(s[0]=[(0,n.Lk)("i",{class:"bi bi-pencil"},null,-1)]),8,q)])],2)))),128))])),_:1}))}};const U=(0,y.A)(D,[["__scopeId","data-v-3d6de54e"]]);var $=U;const Q={key:0,class:"modal-title"},G={key:1,class:"modal-title"},J={class:"d-flex align-items-center"};function z(e,t,o,s,a,i){const r=(0,n.g2)("BaseModal");return(0,n.uX)(),(0,n.Wv)(r,{"modal-id":o.modalId},{header:(0,n.k6)((()=>[o.isNew?((0,n.uX)(),(0,n.CE)("h5",Q,"Add a new item...")):((0,n.uX)(),(0,n.CE)("h5",G,"Edit item")),t[8]||(t[8]=(0,n.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal"},null,-1))])),body:(0,n.k6)((()=>[(0,n.Lk)("div",J,[(0,n.bo)((0,n.Lk)("input",{type:"checkbox",class:"form-check-input me-2 rounded-circle","onUpdate:modelValue":t[0]||(t[0]=e=>a.todoCopy.done=e),onChange:t[1]||(t[1]=(...e)=>o.saveTodos&&o.saveTodos(...e))},null,544),[[l.aG,!o.isNew],[l.lH,a.todoCopy.done]]),o.isNew?(0,n.bo)(((0,n.uX)(),(0,n.CE)("input",{key:1,type:"text",class:"form-control","onUpdate:modelValue":t[4]||(t[4]=e=>a.todoCopy.name=e),onKeyup:t[5]||(t[5]=(0,l.jR)((e=>o.addNewTodo(a.todoCopy)),["enter"]))},null,544)),[[l.Jo,a.todoCopy.name,void 0,{trim:!0}]]):(0,n.bo)(((0,n.uX)(),(0,n.CE)("input",{key:0,type:"text",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=e=>a.todoCopy.name=e),onChange:t[3]||(t[3]=(...e)=>o.saveTodos&&o.saveTodos(...e))},null,544)),[[l.Jo,a.todoCopy.name,void 0,{trim:!0}]])])])),footer:(0,n.k6)((()=>[o.isNew?((0,n.uX)(),(0,n.CE)("button",{key:0,onClick:t[6]||(t[6]=e=>o.addNewTodo(a.todoCopy)),type:"button",class:"btn btn-primary","data-bs-dismiss":"modal"},t[9]||(t[9]=[(0,n.Lk)("i",{class:"bi bi-file-arrow-up-fill"},null,-1),(0,n.eW)(" Save ")]))):((0,n.uX)(),(0,n.CE)("button",{key:1,onClick:t[7]||(t[7]=e=>o.deleteTodo(o.todo.id)),type:"button",class:"btn btn-danger","data-bs-dismiss":"modal"},t[10]||(t[10]=[(0,n.Lk)("i",{class:"bi bi-trash3"},null,-1),(0,n.eW)(" Delete ")])))])),_:1},8,["modal-id"])}const H=["id"],P={class:"modal-dialog modal-dialog-centered"},Y={class:"modal-content"},Z={key:0,class:"modal-header"},ee={key:1,class:"modal-header"},te={class:"modal-title"},oe={key:2,class:"modal-body"},le={key:3,class:"modal-footer"};var ne={__name:"BaseModal",props:{modalId:{type:String,required:!0},title:{type:String}},setup(e){const t=e;return(e,o)=>((0,n.uX)(),(0,n.CE)("div",{id:t.modalId,class:"modal fade",tabIndex:"-1"},[(0,n.Lk)("div",P,[(0,n.Lk)("div",Y,[e.$slots.header?((0,n.uX)(),(0,n.CE)("div",Z,[(0,n.RG)(e.$slots,"header")])):((0,n.uX)(),(0,n.CE)("div",ee,[(0,n.Lk)("h5",te,(0,m.v_)(t.title||""),1)])),e.$slots.body?((0,n.uX)(),(0,n.CE)("div",oe,[(0,n.RG)(e.$slots,"body")])):(0,n.Q3)("",!0),e.$slots.footer?((0,n.uX)(),(0,n.CE)("div",le,[(0,n.RG)(e.$slots,"footer")])):(0,n.Q3)("",!0)])])],8,H))}};const se=ne;var ae=se,ie={components:{BaseModal:ae},props:{modalId:{type:String,required:!0},isNew:{type:Boolean,required:!0},todo:{type:Object,required:!0},deleteTodo:{type:Function,required:!1},addNewTodo:{type:Function,required:!1},saveTodos:{type:Function,required:!1}},data(){return{todoCopy:this.isNew?{name:"",done:!1,id:Date.now()}:this.todo}},watch:{todo(e){this.todoCopy=this.isNew?{name:"",done:!1,id:Date.now()}:e}}};const re=(0,y.A)(ie,[["render",z]]);var de=re;const ue={class:"fixed-bottom",style:{height:"70px"}},ce={class:"container",style:{height:"50px"}};var ve={__name:"FixedBottom",setup(e){const t=(0,n.OA)();return(e,o)=>((0,n.uX)(),(0,n.CE)("div",ue,[(0,n.Lk)("div",ce,[(0,n.Lk)("div",{class:(0,m.C4)((0,s.R1)(t).class||"d-flex justify-content-end")},[(0,n.RG)(e.$slots,"default")],2)])]))}};const be=(0,y.A)(ve,[["__scopeId","data-v-283b122b"]]);var pe=be;const me={blue:"#0d6efd",indigo:"#6610f2",purple:"#6f42c1",pink:"#d63384",red:"#dc3545",orange:"#fd7e14",yellow:"#ffc107",green:"#198754",teal:"#20c997",cyan:"#0dcaf0"};function fe(){return navigator.language||navigator.languages[0]}function ge(e){e=e.replace(/^#/,"");const t=parseInt(e.substr(0,2),16),o=parseInt(e.substr(2,2),16),l=parseInt(e.substr(4,2),16),n=(299*t+587*o+114*l)/1e3;return{r:t,g:o,b:l,isLight:n>=128}}function ke(e,t,o){const l=ge(e),n=ge(t),s=Math.round(l.r*(1-o)+n.r*o),a=Math.round(l.b*(1-o)+n.b*o),i=Math.round(l.g*(1-o)+n.g*o),r=`#${((1<<24)+(s<<16)+(i<<8)+a).toString(16).slice(1).toUpperCase()}`;return r}function ye(e){return e.charAt(0).toUpperCase()+e.slice(1)}const he={class:"container"},Le={key:0,class:"m-0 mb-2 p-0 text-black"},we={class:"input-group"},Ce={id:"itemOptions"},xe=["value"];var Ee={__name:"TodoList",setup(e){const t=(0,s.KR)([]),o=(0,s.KR)(!1),a=(0,s.KR)(!1),i=(0,s.KR)({name:"",done:!1,id:0}),r=(0,s.KR)(""),d=(0,n.rk)("todoInput"),u=(0,n.rk)("showIncompleteButton"),c=()=>{t.value=JSON.parse(localStorage.getItem("todoItems"))||[]},v=e=>{setTimeout((()=>{e.target.style.outline="none",e.target.style.boxShadow="none",u.value.blur()}),250)},b=e=>{o.value=!o.value,v(e)},p=()=>{r.value&&(t.value.push({id:Date.now(),name:ye(r.value),done:!1}),r.value="",k())},f=e=>{i.value=e},g=e=>{t.value=t.value.filter((t=>t.id!==e)),k()},k=()=>{localStorage.setItem("todoItems",JSON.stringify(t.value))},y=(0,n.EW)((()=>[...t.value].sort(((e,t)=>t.id-e.id)))),h=(0,n.EW)((()=>y.value.filter((e=>e.done)))),L=(0,n.EW)((()=>y.value.filter((e=>!e.done)))),w=(0,n.EW)((()=>h.value.length)),C=(0,n.EW)((()=>[...new Set(t.value.map((e=>e.name)))].sort())),x=(0,n.EW)((()=>o.value?"bi bi-chevron-down":"bi bi-chevron-right"));return(0,n.wB)((()=>a.value),(e=>{e&&(0,n.dY)((()=>{d.value.focus()}))})),(0,n.sV)(c),(e,t)=>((0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("div",he,[(0,n.bF)($,{todos:L.value,"set-current-todo":f,"save-todos":k,visible:!0},null,8,["todos"]),(0,n.Lk)("button",{id:"showIncompleteButton",ref_key:"showIncompleteButton",ref:u,class:(0,m.C4)(["btn w-100 text-start text-muted",{"mt-2":L.value.length>0}]),onClick:t[0]||(t[0]=e=>b(e))},[(0,n.Lk)("i",{class:(0,m.C4)(x.value)},null,2),(0,n.eW)(" Completed "+(0,m.v_)(w.value),1)],2),o.value?((0,n.uX)(),(0,n.CE)("hr",Le)):(0,n.Q3)("",!0),(0,n.bF)(l.eB,null,{default:(0,n.k6)((()=>[(0,n.bo)((0,n.bF)($,{visible:o.value,todos:h.value,"set-current-todo":f,"save-todos":k},null,8,["visible","todos"]),[[l.aG,o.value]])])),_:1})]),null!==i.value?((0,n.uX)(),(0,n.Wv)(de,{key:0,modalId:"editTodoModal","is-new":!1,todo:i.value,"delete-todo":g,"save-todos":k},null,8,["todo"])):(0,n.Q3)("",!0),(0,n.bF)(pe,null,{default:(0,n.k6)((()=>[(0,n.bF)(l.eB,null,{default:(0,n.k6)((()=>[(0,n.bo)((0,n.Lk)("div",we,[(0,n.bo)((0,n.Lk)("input",{ref_key:"todoInput",ref:d,list:"itemOptions",style:{height:"3.5rem"},type:"text",class:"form-control",placeholder:"Add a new item...","onUpdate:modelValue":t[1]||(t[1]=e=>r.value=e),onKeyup:(0,l.jR)(p,["enter"]),onFocusout:t[2]||(t[2]=e=>a.value=!1)},null,544),[[l.Jo,r.value,void 0,{trim:!0}]]),t[4]||(t[4]=(0,n.Lk)("button",{class:"btn btn-outline-danger"},[(0,n.Lk)("i",{class:"bi bi-x-lg"})],-1))],512),[[l.aG,a.value]])])),_:1}),(0,n.Lk)("datalist",Ce,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(C.value,((e,t)=>((0,n.uX)(),(0,n.CE)("option",{key:t,value:e},null,8,xe)))),128))]),(0,n.bo)((0,n.Lk)("button",{onClick:t[3]||(t[3]=e=>a.value=!a.value),style:{height:"50px",width:"50px"},class:"btn btn-primary rounded-circle fs-5 shadow",type:"button"},t[5]||(t[5]=[(0,n.Lk)("i",{class:"bi bi-plus-lg"},null,-1)]),512),[[l.aG,!a.value]])])),_:1})],64))}};const _e=(0,y.A)(Ee,[["__scopeId","data-v-1883e328"]]);var Ie=_e,Fe={components:{TopNav:A,TodoList:Ie}};const Ne=(0,y.A)(Fe,[["render",p]]);var Xe=Ne,Te=(o(3949),o(1017)),Se=o.n(Te);o(9106);const Re={class:"root-container"},We={ref:"outputElement",class:"form-control p-0 m-0",id:"highlighting"};var Ve={__name:"MarkdownEditor",props:(0,n.zz)({editorVisible:{type:Boolean}},{modelValue:{},modelModifiers:{}}),emits:(0,n.zz)(["input","keydown.enter"],["update:modelValue"]),setup(e,{emit:t}){let a=o(6709);a.use({breaks:!0,silent:!0});const i=(0,n.fn)(e,"modelValue"),r=t,d=e,u=(0,s.KR)(i.value),c=(0,n.rk)("inputElement"),v=()=>{let e=document.getElementById("highlighting-content"),t=c.value.value;"\n"==t[t.length-1]&&(t+=" "),e.innerHTML=Se().highlight(t,Se().languages.markdown,"md")},b=()=>{c.value.style.height="5px",c.value.style.height=c.value.scrollHeight+"px"},p=()=>{const e=c.value.selectionStart,t=c.value.value,o=t.lastIndexOf("\n",e-1),l=t.substring(o+1,e);return l},m=()=>{let e=c.value.value,t=e.slice(0,c.value.selectionStart),o=e.slice(c.value.selectionEnd,c.value.value.length),l=e.slice(c.value.selectionStart,c.value.selectionEnd),n={start:c.value.selectionStart,end:c.value.selectionEnd};return{selected:l,before:t,after:o,cursor:n}},f=e=>{let t=m();c.value.value=t.before+e+t.after,c.value.selectionStart=t.cursor.start+e.length,c.value.selectionEnd=t.cursor.start+e.length,v(),b()},g=()=>{const e=/^(\t*)(\d+)\..+$/,t=c.value.value,o=t.split("\n"),l=c.value.selectionStart;let n=0;o.forEach((function(t,l){const s=e.exec(t);s?(n++,o[l]=o[l].replace(e,((e,t,o)=>t+`${n}`+e.slice(o.length+t.length)))):n=0})),c.value.value=o.join("\n"),c.value.selectionStart=l,c.value.selectionEnd=l,v()},k=e=>{e.preventDefault(),f("\t")},y=()=>{v(),b(),i.value=c.value.value,r("input")},h=e=>{e.preventDefault();const t=/^\t*(\d+)\..+$/,o=/^\t*(-|\*) .+$/;let l=p(),n="\n";if(l.length>0){const e=t.exec(l),s=o.exec(l),a=/(\t+).+/.exec(l);if(a){const e=a.at(0).split("\t").length;n+="\t".repeat(e-1)}if(e){let t=parseInt(e.at(1))+1;n+=`${t}. `}else s&&(n+=s.at(1)+" ")}f(n),g()};return(0,n.wB)((()=>d.editorVisible),(e=>{e&&c.value&&(0,n.dY)((()=>{b(),v(),c.value.focus()}))})),(0,n.$u)(b),(e,t)=>((0,n.uX)(),(0,n.CE)("div",Re,[(0,n.bo)((0,n.Lk)("textarea",{placeholder:"Note",id:"editing",ref_key:"inputElement",ref:c,spellcheck:"false","onUpdate:modelValue":t[0]||(t[0]=e=>u.value=e),class:"form-control p-0 m-0",onInput:y,onKeydown:[(0,l.jR)(h,["enter"]),t[1]||(t[1]=(0,l.jR)((e=>{k(e)}),["tab"]))]},"        ",544),[[l.Jo,u.value]]),(0,n.Lk)("pre",We,t[2]||(t[2]=[(0,n.Lk)("code",{id:"highlighting-content"},null,-1),(0,n.eW)("\n            "),(0,n.Lk)("div",{id:"content-bottom"},null,-1),(0,n.eW)("\n        ")]),512)]))}};const Oe=(0,y.A)(Ve,[["__scopeId","data-v-2c42efc3"]]);var Ae=Oe;const Ke={class:"container note-editor"},Be={class:"container note-viewer"},Me={class:"d-flex align-items-center p-0 m-0 mb-2 flex-wrap"},je=["textContent"],qe=["innerHTML"],De={class:"d-flex flex-wrap"},Ue=["onClick"],$e=["disabled"],Qe={key:0,class:"bi bi-eye-fill"},Ge={key:1,class:"bi bi-pencil-fill"};let Je=o(6709);Je.use({breaks:!0,silent:!0});const ze="btn rounded-circle fs-5 shadow",He={height:"50px",width:"50px"};var Pe={__name:"NoteEditor",props:(0,n.zz)({isNew:{type:Boolean,required:!0}},{modelValue:{},modelModifiers:{}}),emits:(0,n.zz)(["hide-editor","update","delete"],["update:modelValue"]),setup(e,{emit:t}){const o=(0,n.fn)(e,"modelValue"),a=e,i=t,r=(0,s.KR)(a.isNew),d=(0,s.KR)({...o.value}),u=(0,s.KR)(null),c=(0,n.rk)("titleInput"),v=(0,n.EW)((()=>new Date(d.value.id).toLocaleString(fe(),{dateStyle:"medium",timeStyle:"short"}))),b=(0,n.EW)((()=>{let e=d.value.color||me.cyan;return y(e)})),p=(0,n.EW)((()=>Je.parse(d.value.text))),f=(0,n.EW)((()=>g.value||!a.isNew)),g=(0,n.EW)((()=>d.value.title.trim().length>=3)),k=e=>{d.value.color=e,C()},y=e=>{let t=ge(e),o=t.isLight?"#000000":"#FFFFFF";return{bg:e,txt:ke(e,o,.7)}},h=()=>{g.value||(d.value.title=u.value||"")},L=()=>{r.value=!r.value,r.value?_():E()},w=()=>{i("hide-editor")},C=()=>{g.value&&i("update",d.value)},x=()=>{i("delete",d.value.id),i("hide-editor")},E=()=>{const e=document.getElementsByTagName("blockquote");for(const t of e)t.classList.add("blockquote","border-start","border-dark-subtle","border-3","ps-2","py-1","fs-6")};async function _(){await(0,n.dY)(),""===d.value.title&&c.value.focus()}return(0,n.wB)((()=>d.value.title),(e=>{g.value&&(u.value=e),_()}),{immediate:!0}),(0,n.sV)(E),(e,t)=>((0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bo)((0,n.Lk)("div",Ke,[(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>d.value.title=e),ref_key:"titleInput",ref:c,class:"fs-3 form-control mb-2",placeholder:"Title",type:"text",onInput:C,onFocusout:h},null,544),[[l.Jo,d.value.title]]),(0,n.bF)(Ae,{modelValue:d.value.text,"onUpdate:modelValue":t[1]||(t[1]=e=>d.value.text=e),onInput:C,"editor-visible":r.value},null,8,["modelValue","editor-visible"])],512),[[l.aG,r.value]]),(0,n.bo)((0,n.Lk)("div",Be,[(0,n.Lk)("div",Me,[(0,n.Lk)("div",{class:"fs-3 text-muted m-0 p-0 flex-fill",textContent:(0,m.v_)(d.value.title)},null,8,je),(0,n.Lk)("div",{class:"badge my-1",style:(0,m.Tr)({backgroundColor:b.value.bg,color:b.value.txt})},[t[3]||(t[3]=(0,n.Lk)("i",{class:"bi bi-calendar"},null,-1)),(0,n.eW)(" "+(0,m.v_)(v.value),1)],4)]),t[4]||(t[4]=(0,n.Lk)("hr",{class:"p-0 m-0 mb-2"},null,-1)),(0,n.Lk)("div",{innerHTML:p.value},null,8,qe)],512),[[l.aG,!r.value]]),(0,n.bF)(ae,{modalId:"confirmDeleteModal",title:"Are you sure you want to delete this note?"},{footer:(0,n.k6)((()=>[t[6]||(t[6]=(0,n.Lk)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},[(0,n.Lk)("i",{class:"bi bi-x-lg"}),(0,n.eW)(" Cancel ")],-1)),(0,n.Lk)("button",{onClick:x,type:"button",class:"btn btn-danger","data-bs-dismiss":"modal"},t[5]||(t[5]=[(0,n.Lk)("i",{class:"bi bi-trash3"},null,-1),(0,n.eW)(" Delete ")]))])),_:1}),(0,n.bF)(ae,{modalId:"selectColorModal",title:"Select a color..."},{body:(0,n.k6)((()=>[(0,n.Lk)("div",De,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)((0,s.R1)(me),((e,t)=>((0,n.uX)(),(0,n.CE)("button",{key:e,onClick:t=>k(e),"data-bs-dismiss":"modal",class:"btn rounded-pill m-1 color-option",style:(0,m.Tr)({backgroundColor:e,color:y(e).txt})},(0,m.v_)(t),13,Ue)))),128))])])),footer:(0,n.k6)((()=>[(0,n.Lk)("button",{type:"button",onClick:t[2]||(t[2]=e=>k(null)),class:"btn btn-secondary btn-warning","data-bs-dismiss":"modal"},t[7]||(t[7]=[(0,n.Lk)("i",{class:"bi bi-eraser-fill"},null,-1),(0,n.eW)(" Clear ")])),t[8]||(t[8]=(0,n.Lk)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},[(0,n.Lk)("i",{class:"bi bi-x-lg"}),(0,n.eW)(" Cancel ")],-1))])),_:1}),(0,n.bF)(pe,null,{default:(0,n.k6)((()=>[(0,n.Lk)("button",{disabled:!f.value,onClick:L,style:He,class:(0,m.C4)([ze,"btn-primary"]),type:"button"},[r.value?((0,n.uX)(),(0,n.CE)("i",Qe)):((0,n.uX)(),(0,n.CE)("i",Ge))],8,$e),(0,n.Lk)("button",{onClick:w,style:He,class:(0,m.C4)([ze,"ms-2 btn-secondary"]),type:"button"},t[9]||(t[9]=[(0,n.Lk)("i",{class:"bi bi-x-lg"},null,-1)]))])),_:1})],64))}};const Ye=(0,y.A)(Pe,[["__scopeId","data-v-1f46af92"]]);var Ze=Ye;const et={key:0,class:"bi bi-pin-fill fs-4 text-warning"},tt={key:1,class:"bi bi-pin fs-4"},ot={key:1,"data-bs-toggle":"modal","data-bs-target":"#selectColorModal",class:"btn py-0 my-0 px-1 mx-1",type:"button"},lt={key:2,"data-bs-toggle":"modal","data-bs-target":"#confirmDeleteModal",class:"btn py-0 my-0 px-1 mx-1",type:"button"},nt={key:1,class:"container note-list"},st={key:0,class:"fs-5 text-muted"},at={class:"row g-2"},it=["onClick"],rt={class:"d-flex align-items-center flex-wrap mb-1"},dt={class:"fs-6 fw-medium flex-fill"},ut={key:0,class:"me-2 bi bi-pin-fill text-warning"},ct={class:"text-muted note-preview"};var vt={__name:"NotesList",setup(e){const t=(0,s.KR)([]),o=(0,s.KR)(!1);function l(){i.settings.notes.showEditor=!1,i.settings.notes.currentNote={}}const a=()=>{t.value=JSON.parse(localStorage.getItem("notes"))||[]},r=e=>{let t=e.text.slice(0,100);return t+=t.length<e.text.length?"...":"",t},d=e=>{let t=e.color||me.cyan,o=ge(t),l=o.isLight?"#000000":"#FFFFFF";return{bg:t,txt:ke(t,l,.7)}},u=e=>{i.settings.notes.currentNote=e,o.value=!1,setTimeout((()=>{i.settings.notes.showEditor=!0}),100)},c=()=>{localStorage.setItem("notes",JSON.stringify(t.value))},v=e=>{const l=t.value.findIndex((t=>t.id===e.id));e.modifiedOn=Date.now(),-1!==l?t.value[l]=e:o.value&&t.value.push(e),i.settings.notes.currentNote=e},b=e=>{t.value=t.value.filter((t=>t.id!==e))},p=()=>{i.settings.notes.currentNote={id:Date.now(),title:"",text:""},o.value=!0,i.settings.notes.showEditor=!0},f=()=>{void 0===i.settings.notes.currentNote.pinned?i.settings.notes.currentNote.pinned=!0:i.settings.notes.currentNote.pinned=!i.settings.notes.currentNote.pinned},g=(0,n.EW)((()=>[...t.value].sort(((e,t)=>e.pinned===t.pinned?t.id-e.id:!0===e.pinned?-1:1))));return(0,n.wB)((()=>t.value),(()=>{c()}),{deep:!0}),(0,n.sV)(a),(0,n.hi)(l),(e,a)=>((0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(A,{title:"Notes",iconClass:"bi bi-journals"},{"nav-buttons":(0,n.k6)((()=>[(0,s.R1)(i).settings.notes.showEditor?((0,n.uX)(),(0,n.CE)("button",{key:0,onClick:f,class:"btn py-0 my-0 px-1 mx-1",type:"button"},[(0,s.R1)(i).settings.notes.currentNote.pinned?((0,n.uX)(),(0,n.CE)("i",et)):((0,n.uX)(),(0,n.CE)("i",tt))])):(0,n.Q3)("",!0),(0,s.R1)(i).settings.notes.showEditor?((0,n.uX)(),(0,n.CE)("button",ot,a[1]||(a[1]=[(0,n.Lk)("i",{class:"bi bi-palette-fill fs-4 text-primary"},null,-1)]))):(0,n.Q3)("",!0),(0,s.R1)(i).settings.notes.showEditor?((0,n.uX)(),(0,n.CE)("button",lt,a[2]||(a[2]=[(0,n.Lk)("i",{class:"bi bi-trash3 fs-4 text-danger"},null,-1)]))):(0,n.Q3)("",!0)])),_:1}),(0,s.R1)(i).settings.notes.showEditor?((0,n.uX)(),(0,n.Wv)(Ze,{key:0,modelValue:(0,s.R1)(i).settings.notes.currentNote,"onUpdate:modelValue":a[0]||(a[0]=e=>(0,s.R1)(i).settings.notes.currentNote=e),"is-new":o.value,onHideEditor:l,onUpdate:v,onDelete:b},null,8,["modelValue","is-new"])):(0,n.Q3)("",!0),(0,s.R1)(i).settings.notes.showEditor?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.CE)("div",nt,[0===t.value.length?((0,n.uX)(),(0,n.CE)("p",st,"I know I'm empty right now but I'm full of potential...")):(0,n.Q3)("",!0),(0,n.Lk)("div",at,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(g.value,(e=>((0,n.uX)(),(0,n.CE)("div",{key:e.id,class:"col-6 list-group-hover no-select d-flex",onClick:t=>u(e)},[(0,n.Lk)("div",{class:(0,m.C4)(["item list-group-item flex-fill",{"li-active":(0,s.R1)(i).settings.notes.currentNote.id===e.id}]),style:(0,m.Tr)({borderColor:e.color})},[(0,n.Lk)("div",rt,[(0,n.Lk)("div",dt,(0,m.v_)(e.title),1),(0,n.Lk)("div",null,[e.pinned?((0,n.uX)(),(0,n.CE)("i",ut)):(0,n.Q3)("",!0),(0,n.Lk)("div",{class:"badge",style:(0,m.Tr)({backgroundColor:d(e).bg,color:d(e).txt})},(0,m.v_)(new Date(e.id).toLocaleDateString((0,s.R1)(fe)())),5)])]),(0,n.Lk)("div",ct,(0,m.v_)(r(e)),1)],6)],8,it)))),128))])])),(0,s.R1)(i).settings.notes.showEditor?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.Wv)(pe,{key:2},{default:(0,n.k6)((()=>[(0,n.Lk)("button",{onClick:p,style:{height:"50px",width:"50px"},class:"btn btn-primary rounded-circle fs-5 shadow",type:"button"},a[3]||(a[3]=[(0,n.Lk)("i",{class:"bi bi-plus-lg"},null,-1)]))])),_:1}))],64))}};const bt=(0,y.A)(vt,[["__scopeId","data-v-7f1d3794"]]);var pt=bt,mt={__name:"NotesView",setup(e){return(e,t)=>((0,n.uX)(),(0,n.Wv)(pt))}};const ft=mt;var gt=ft;const kt=[{path:"/",name:"todolist",component:Xe},{path:"/notes",name:"notes",component:gt}],yt=(0,b.aE)({history:(0,b.Bt)(),routes:kt});var ht=yt,Lt=(o(8077),o(4458));(0,Lt.k)("/turbo-todo/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});const wt=(0,l.Ef)(v);wt.use(ht),wt.mount("#app")}},t={};function o(l){var n=t[l];if(void 0!==n)return n.exports;var s=t[l]={exports:{}};return e[l].call(s.exports,s,s.exports,o),s.exports}o.m=e,function(){var e=[];o.O=function(t,l,n,s){if(!l){var a=1/0;for(u=0;u<e.length;u++){l=e[u][0],n=e[u][1],s=e[u][2];for(var i=!0,r=0;r<l.length;r++)(!1&s||a>=s)&&Object.keys(o.O).every((function(e){return o.O[e](l[r])}))?l.splice(r--,1):(i=!1,s<a&&(a=s));if(i){e.splice(u--,1);var d=n();void 0!==d&&(t=d)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[l,n,s]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var l in t)o.o(t,l)&&!o.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,l){var n,s,a=l[0],i=l[1],r=l[2],d=0;if(a.some((function(t){return 0!==e[t]}))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(r)var u=r(o)}for(t&&t(l);d<a.length;d++)s=a[d],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(u)},l=self["webpackChunkturbo_todo"]=self["webpackChunkturbo_todo"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=o.O(void 0,[504],(function(){return o(6858)}));l=o.O(l)})();
//# sourceMappingURL=app.a69ed07f.js.map