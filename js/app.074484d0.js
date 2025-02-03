(function(){"use strict";var e={2434:function(e,t,l){var o=l(5130),n=l(6768);function a(e,t){const l=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.Wv)(l)}var s=l(1241);const i={},u=(0,s.A)(i,[["render",a]]);var d=u,r=l(1387);function c(e,t,l,o,a,s){const i=(0,n.g2)("TopNav"),u=(0,n.g2)("TodoList");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(i,{title:"Todo List",iconClass:"bi bi-check2-square"}),(0,n.bF)(u)],64)}var v=l(4232);const b={id:"navbar",class:"navbar fixed-top shadow bg-secondary-subtle m-2 rounded-pill"},p={class:"container py-1 d-flex"},f={class:"fs-4 ms-1 m-0 me-auto no-select"},m={class:"offcanvas offcanvas-end",tabIndex:"-1",id:"offcanvasRight"},k={class:"offcanvas-body"},g={class:"row row-cols-1 g-3"},y={class:"col"},h={"data-bs-dismiss":"offcanvas"},L={class:"col"},C={"data-bs-dismiss":"offcanvas"};var x={__name:"TopNav",props:{title:{type:String,required:!0},iconClass:{type:String,required:!0}},setup(e){const t=e;return(e,l)=>{const o=(0,n.g2)("RouterLink");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("div",b,[(0,n.Lk)("div",p,[(0,n.Lk)("p",f,[(0,n.Lk)("i",{class:(0,v.C4)(t.iconClass)},null,2),(0,n.eW)(" "+(0,v.v_)(t.title),1)]),(0,n.RG)(e.$slots,"nav-buttons"),l[0]||(l[0]=(0,n.Lk)("button",{class:"btn py-0 my-0 px-1 mx-1",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasRight"},[(0,n.Lk)("i",{class:"bi bi-list fs-4"})],-1))])]),(0,n.Lk)("div",m,[l[4]||(l[4]=(0,n.Lk)("div",{class:"offcanvas-header"},[(0,n.Lk)("h5",{class:"offcanvas-title",id:"offcanvasRightLabel"},"Options"),(0,n.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1)),(0,n.Lk)("div",k,[(0,n.Lk)("div",g,[l[3]||(l[3]=(0,n.Lk)("div",{class:"col"},[(0,n.Lk)("button",{class:"btn btn-lg btn-primary"},[(0,n.Lk)("i",{class:"bi bi-plus-lg"}),(0,n.eW)(" Create New List")])],-1)),(0,n.Lk)("div",y,[(0,n.Lk)("span",h,[(0,n.bF)(o,{class:"btn btn-lg btn-primary",to:"/"},{default:(0,n.k6)((()=>l[1]||(l[1]=[(0,n.Lk)("i",{class:"bi bi-check2-square"},null,-1),(0,n.eW)(" Todo List")]))),_:1})])]),(0,n.Lk)("div",L,[(0,n.Lk)("span",C,[(0,n.bF)(o,{class:"btn btn-lg btn-primary",to:"/notes"},{default:(0,n.k6)((()=>l[2]||(l[2]=[(0,n.Lk)("i",{class:"bi bi-journals"},null,-1),(0,n.eW)(" Notes")]))),_:1})])])])])])],64)}}};const w=x;var E=w,_=(l(4114),l(7642),l(8004),l(3853),l(5876),l(2475),l(5024),l(1698),l(8992),l(4520),l(1454),l(144));const F={class:"ps-3 flex-fill align-items-center"},I=["id","onUpdate:modelValue"],X=["for"],T={class:"btn-div align-items-center pe-1"},S=["onClick"];var W={__name:"TodoItem",props:{todos:{type:Array,required:!0},setCurrentTodo:{type:Function,required:!0},saveTodos:{type:Function,required:!0},visible:{type:Boolean,default:!0}},setup(e){const t=e;return(l,a)=>((0,n.uX)(),(0,n.Wv)(o.F,{name:"list",tag:"ul",class:"list-group list-group-hover"},{default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(t.todos,(l=>((0,n.uX)(),(0,n.CE)("li",{key:l.id,class:(0,v.C4)([{disabled:!t.visible},"list-group-item d-flex align-items-center p-0 m-0"])},[(0,n.Lk)("div",F,[(0,n.bo)((0,n.Lk)("input",{id:"todo-"+l.id,type:"checkbox",class:"form-check-input me-2 rounded-circle","onUpdate:modelValue":e=>l.done=e,onChange:a[0]||(a[0]=(...t)=>e.saveTodos&&e.saveTodos(...t))},null,40,I),[[o.lH,l.done]]),(0,n.Lk)("label",{for:"todo-"+l.id,class:(0,v.C4)(["form-check-label stretched-link",{completed:l.done}])},(0,v.v_)(l.name),11,X)]),(0,n.Lk)("div",T,[(0,n.Lk)("button",{"data-bs-toggle":"modal","data-bs-target":"#editTodoModal",class:"btn",onClick:()=>t.setCurrentTodo(l)},a[1]||(a[1]=[(0,n.Lk)("i",{class:"bi bi-pencil"},null,-1)]),8,S)])],2)))),128))])),_:1}))}};const N=(0,s.A)(W,[["__scopeId","data-v-565b98f9"]]);var R=N;const V={key:0,class:"modal-title"},K={key:1,class:"modal-title"},O={class:"d-flex align-items-center"};function B(e,t,l,a,s,i){const u=(0,n.g2)("BaseModal");return(0,n.uX)(),(0,n.Wv)(u,{"modal-id":l.modalId},{header:(0,n.k6)((()=>[l.isNew?((0,n.uX)(),(0,n.CE)("h5",V,"Add a new item...")):((0,n.uX)(),(0,n.CE)("h5",K,"Edit item")),t[8]||(t[8]=(0,n.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal"},null,-1))])),body:(0,n.k6)((()=>[(0,n.Lk)("div",O,[(0,n.bo)((0,n.Lk)("input",{type:"checkbox",class:"form-check-input me-2 rounded-circle","onUpdate:modelValue":t[0]||(t[0]=e=>s.todoCopy.done=e),onChange:t[1]||(t[1]=(...e)=>l.saveTodos&&l.saveTodos(...e))},null,544),[[o.aG,!l.isNew],[o.lH,s.todoCopy.done]]),l.isNew?(0,n.bo)(((0,n.uX)(),(0,n.CE)("input",{key:1,type:"text",class:"form-control","onUpdate:modelValue":t[4]||(t[4]=e=>s.todoCopy.name=e),onKeyup:t[5]||(t[5]=(0,o.jR)((e=>l.addNewTodo(s.todoCopy)),["enter"]))},null,544)),[[o.Jo,s.todoCopy.name,void 0,{trim:!0}]]):(0,n.bo)(((0,n.uX)(),(0,n.CE)("input",{key:0,type:"text",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=e=>s.todoCopy.name=e),onChange:t[3]||(t[3]=(...e)=>l.saveTodos&&l.saveTodos(...e))},null,544)),[[o.Jo,s.todoCopy.name,void 0,{trim:!0}]])])])),footer:(0,n.k6)((()=>[l.isNew?((0,n.uX)(),(0,n.CE)("button",{key:0,onClick:t[6]||(t[6]=e=>l.addNewTodo(s.todoCopy)),type:"button",class:"btn btn-primary","data-bs-dismiss":"modal"},t[9]||(t[9]=[(0,n.Lk)("i",{class:"bi bi-file-arrow-up-fill"},null,-1),(0,n.eW)(" Save ")]))):((0,n.uX)(),(0,n.CE)("button",{key:1,onClick:t[7]||(t[7]=e=>l.deleteTodo(l.todo.id)),type:"button",class:"btn btn-danger","data-bs-dismiss":"modal"},t[10]||(t[10]=[(0,n.Lk)("i",{class:"bi bi-trash3"},null,-1),(0,n.eW)(" Delete ")])))])),_:1},8,["modal-id"])}const M=["id"],j={class:"modal-dialog modal-dialog-centered"},q={class:"modal-content"},A={key:0,class:"modal-header"},D={key:1,class:"modal-header"},$={class:"modal-title"},U={key:2,class:"modal-body"},G={key:3,class:"modal-footer"};var Q={__name:"BaseModal",props:{modalId:{type:String,required:!0},title:{type:String}},setup(e){const t=e;return(e,l)=>((0,n.uX)(),(0,n.CE)("div",{id:t.modalId,class:"modal fade",tabIndex:"-1"},[(0,n.Lk)("div",j,[(0,n.Lk)("div",q,[e.$slots.header?((0,n.uX)(),(0,n.CE)("div",A,[(0,n.RG)(e.$slots,"header")])):((0,n.uX)(),(0,n.CE)("div",D,[(0,n.Lk)("h5",$,(0,v.v_)(t.title||""),1)])),e.$slots.body?((0,n.uX)(),(0,n.CE)("div",U,[(0,n.RG)(e.$slots,"body")])):(0,n.Q3)("",!0),e.$slots.footer?((0,n.uX)(),(0,n.CE)("div",G,[(0,n.RG)(e.$slots,"footer")])):(0,n.Q3)("",!0)])])],8,M))}};const J=Q;var z=J,H={components:{BaseModal:z},props:{modalId:{type:String,required:!0},isNew:{type:Boolean,required:!0},todo:{type:Object,required:!0},deleteTodo:{type:Function,required:!1},addNewTodo:{type:Function,required:!1},saveTodos:{type:Function,required:!1}},data(){return{todoCopy:this.isNew?{name:"",done:!1,id:Date.now()}:this.todo}},watch:{todo(e){this.todoCopy=this.isNew?{name:"",done:!1,id:Date.now()}:e}}};const P=(0,s.A)(H,[["render",B]]);var Y=P;const Z={class:"fixed-bottom",style:{height:"70px"}},ee={class:"container",style:{height:"50px"}};var te={__name:"FixedBottom",setup(e){const t=(0,n.OA)();return(e,l)=>((0,n.uX)(),(0,n.CE)("div",Z,[(0,n.Lk)("div",ee,[(0,n.Lk)("div",{class:(0,v.C4)((0,_.R1)(t).class||"d-flex justify-content-end")},[(0,n.RG)(e.$slots,"default")],2)])]))}};const le=(0,s.A)(te,[["__scopeId","data-v-283b122b"]]);var oe=le;const ne={blue:"#0d6efd",indigo:"#6610f2",purple:"#6f42c1",pink:"#d63384",red:"#dc3545",orange:"#fd7e14",yellow:"#ffc107",green:"#198754",teal:"#20c997",cyan:"#0dcaf0"};function ae(){return navigator.language||navigator.languages[0]}function se(e){e=e.replace(/^#/,"");const t=parseInt(e.substr(0,2),16),l=parseInt(e.substr(2,2),16),o=parseInt(e.substr(4,2),16),n=(299*t+587*l+114*o)/1e3;return{r:t,g:l,b:o,isLight:n>=128}}function ie(e,t,l){const o=se(e),n=se(t),a=Math.round(o.r*(1-l)+n.r*l),s=Math.round(o.b*(1-l)+n.b*l),i=Math.round(o.g*(1-l)+n.g*l),u=`#${((1<<24)+(a<<16)+(i<<8)+s).toString(16).slice(1).toUpperCase()}`;return u}function ue(e){return e.charAt(0).toUpperCase()+e.slice(1)}const de={class:"container"},re={id:"itemOptions"},ce=["value"];var ve={__name:"TodoList",setup(e){const t=(0,_.KR)([]),l=(0,_.KR)(!1),a=(0,_.KR)(!1),s=(0,_.KR)({name:"",done:!1,id:0}),i=(0,_.KR)(""),u=(0,n.rk)("todoInput"),d=(0,n.rk)("showIncompleteButton"),r=()=>{t.value=JSON.parse(localStorage.getItem("todoItems"))||[]},c=e=>{setTimeout((()=>{e.target.style.outline="none",e.target.style.boxShadow="none",d.value.blur()}),250)},b=e=>{l.value=!l.value,c(e)},p=()=>{this.newTodo&&(t.value.push({id:Date.now(),name:ue(i.value),done:!1}),i.value="",k())},f=e=>{s.value=e},m=e=>{t.value=t.value.filter((t=>t.id!==e)),k()},k=()=>{localStorage.setItem("todoItems",JSON.stringify(t.value))},g=(0,n.EW)((()=>[...t.value].sort(((e,t)=>t.id-e.id)))),y=(0,n.EW)((()=>g.value.filter((e=>e.done)))),h=(0,n.EW)((()=>g.value.filter((e=>!e.done)))),L=(0,n.EW)((()=>y.value.length)),C=(0,n.EW)((()=>[...new Set(t.value.map((e=>e.name)))].sort())),x=(0,n.EW)((()=>l.value?"bi bi-chevron-down":"bi bi-chevron-right"));return(0,n.wB)((()=>a.value),(e=>{e&&(0,n.dY)((()=>{u.value.focus()}))})),(0,n.sV)(r),(e,t)=>((0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("div",de,[(0,n.bF)(R,{todos:h.value,"set-current-todo":f,"save-todos":k},null,8,["todos"]),(0,n.Lk)("button",{id:"showIncompleteButton",ref_key:"showIncompleteButton",ref:d,class:(0,v.C4)(["btn btn-outline-secondary mb-3 w-100 text-start",{"mt-3":h.value.length>0}]),onClick:t[0]||(t[0]=e=>b(e))},[(0,n.Lk)("i",{class:(0,v.C4)(x.value)},null,2),(0,n.eW)(" Completed "+(0,v.v_)(L.value),1)],2),(0,n.bF)(o.eB,null,{default:(0,n.k6)((()=>[(0,n.bo)((0,n.bF)(R,{visible:l.value,todos:y.value,"set-current-todo":f,"save-todos":k},null,8,["visible","todos"]),[[o.aG,l.value]])])),_:1})]),null!==s.value?((0,n.uX)(),(0,n.Wv)(Y,{key:0,modalId:"editTodoModal","is-new":!1,todo:s.value,"delete-todo":m,"save-todos":k},null,8,["todo"])):(0,n.Q3)("",!0),(0,n.bF)(oe,null,{default:(0,n.k6)((()=>[(0,n.bF)(o.eB,null,{default:(0,n.k6)((()=>[(0,n.bo)((0,n.Lk)("input",{ref_key:"todoInput",ref:u,list:"itemOptions",style:{height:"45px"},type:"text",class:"form-control bg-secondary-subtle",placeholder:"Add a new item...","onUpdate:modelValue":t[1]||(t[1]=e=>i.value=e),onKeyup:(0,o.jR)(p,["enter"]),onFocusout:t[2]||(t[2]=e=>a.value=!1)},null,544),[[o.aG,a.value],[o.Jo,i.value,void 0,{trim:!0}]])])),_:1}),(0,n.Lk)("datalist",re,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(C.value,((e,t)=>((0,n.uX)(),(0,n.CE)("option",{key:t,value:e},null,8,ce)))),128))]),(0,n.bo)((0,n.Lk)("span",{onClick:t[3]||(t[3]=e=>a.value=!a.value)},t[5]||(t[5]=[(0,n.Lk)("i",{class:"bi bi-x-lg text-danger"},null,-1)]),512),[[o.aG,a.value]]),(0,n.bo)((0,n.Lk)("button",{onClick:t[4]||(t[4]=e=>a.value=!a.value),style:{height:"50px",width:"50px"},class:"btn btn-primary rounded-circle fs-5 shadow",type:"button"},t[6]||(t[6]=[(0,n.Lk)("i",{class:"bi bi-plus-lg"},null,-1)]),512),[[o.aG,!a.value]])])),_:1})],64))}};const be=(0,s.A)(ve,[["__scopeId","data-v-69d7125b"]]);var pe=be,fe={components:{TopNav:E,TodoList:pe}};const me=(0,s.A)(fe,[["render",c]]);var ke=me,ge=(l(3949),l(1017)),ye=l.n(ge);l(9106);const he={class:"root-container"};var Le={__name:"MarkdownEditor",props:(0,n.zz)({editorVisible:{type:Boolean}},{modelValue:{},modelModifiers:{}}),emits:(0,n.zz)(["input","keydown.enter"],["update:modelValue"]),setup(e,{emit:t}){let a=l(6709);a.use({breaks:!0,silent:!0});const s=(0,n.fn)(e,"modelValue"),i=t,u=e,d=(0,_.KR)(s.value),r=(0,n.EW)((()=>document.getElementById("editing"))),c=()=>{let e=document.getElementById("highlighting-content"),t=r.value.value;"\n"==t[t.length-1]&&(t+=" "),e.innerHTML=ye().highlight(t,ye().languages.markdown,"md")},v=()=>{r.value.style.height="5px",r.value.style.height=r.value.scrollHeight+"px"},b=()=>{const e=r.value.selectionStart,t=r.value.value,l=t.lastIndexOf("\n",e-1),o=t.substring(l+1,e);return o},p=()=>{let e=r.value.value,t=e.slice(0,r.value.selectionStart),l=e.slice(r.value.selectionEnd,r.value.value.length),o=e.slice(r.value.selectionStart,r.value.selectionEnd),n={start:r.value.selectionStart,end:r.value.selectionEnd};return{selected:o,before:t,after:l,cursor:n}},f=e=>{let t=p();r.value.value=t.before+e+t.after,r.value.selectionStart=t.cursor.start+e.length,r.value.selectionEnd=t.cursor.start+e.length,c(),v()},m=()=>{const e=/^(\t*)(\d+)\..+$/,t=r.value.value,l=t.split("\n"),o=r.value.selectionStart;let n=0;l.forEach((function(t,o){const a=e.exec(t);a?(n++,l[o]=l[o].replace(e,((e,t,l)=>t+`${n}`+e.slice(l.length+t.length)))):n=0})),r.value.value=l.join("\n"),r.value.selectionStart=o,r.value.selectionEnd=o,c()},k=e=>{e.preventDefault(),f("\t")},g=()=>{c(),v(),s.value=r.value.value,i("input")},y=e=>{e.preventDefault();const t=/^\t*(\d+)\..+$/,l=/^\t*(-|\*) .+$/;let o=b(),n="\n";if(o.length>0){const e=t.exec(o),a=l.exec(o),s=/(\t+).+/.exec(o);if(s){const e=s.at(0).split("\t").length;n+="\t".repeat(e-1)}if(e){let t=parseInt(e.at(1))+1;n+=`${t}. `}else a&&(n+=a.at(1)+" ")}f(n),m()};return(0,n.wB)((()=>u.editorVisible),(e=>{e&&r.value&&(0,n.dY)((()=>{v(),c(),r.value.focus()}))})),(0,n.$u)(v),(e,t)=>((0,n.uX)(),(0,n.CE)("div",he,[(0,n.bo)((0,n.Lk)("textarea",{placeholder:"Note",id:"editing",spellcheck:"false","onUpdate:modelValue":t[0]||(t[0]=e=>d.value=e),class:"form-control p-0 m-0",onInput:g,onKeydown:[(0,o.jR)(y,["enter"]),t[1]||(t[1]=(0,o.jR)((e=>{k(e)}),["tab"]))]},"        ",544),[[o.Jo,d.value]]),t[2]||(t[2]=(0,n.Lk)("pre",{class:"form-control p-0 m-0",id:"highlighting"},[(0,n.Lk)("code",{id:"highlighting-content"}),(0,n.Lk)("div",{id:"content-bottom"})],-1))]))}};const Ce=(0,s.A)(Le,[["__scopeId","data-v-c9ec3fa8"]]);var xe=Ce;const we={class:"container note-editor"},Ee={class:"container note-viewer"},_e={class:"d-flex align-items-center p-0 m-0 mb-2 flex-wrap"},Fe=["textContent"],Ie=["innerHTML"],Xe={class:"d-flex flex-wrap"},Te=["onClick"],Se=["disabled"],We={key:0,class:"bi bi-eye-fill"},Ne={key:1,class:"bi bi-pencil-fill"};let Re=l(6709);Re.use({breaks:!0,silent:!0});const Ve="btn rounded-circle fs-5 shadow",Ke={height:"50px",width:"50px"};var Oe={__name:"NoteEditor",props:(0,n.zz)({isNew:{type:Boolean,required:!0}},{modelValue:{},modelModifiers:{}}),emits:(0,n.zz)(["hide-editor","update","delete"],["update:modelValue"]),setup(e,{emit:t}){const l=(0,n.fn)(e,"modelValue"),a=e,s=t,i=(0,_.KR)(a.isNew),u=(0,_.KR)({...l.value}),d=(0,_.KR)(null),r=(0,n.rk)("titleInput"),c=(0,n.EW)((()=>new Date(u.value.id).toLocaleString(ae(),{dateStyle:"medium",timeStyle:"short"}))),b=(0,n.EW)((()=>{let e=u.value.color||ne.cyan;return g(e)})),p=(0,n.EW)((()=>Re.parse(u.value.text))),f=(0,n.EW)((()=>m.value||!a.isNew)),m=(0,n.EW)((()=>u.value.title.trim().length>=3)),k=e=>{u.value.color=e,C()},g=e=>{let t=se(e),l=t.isLight?"#000000":"#FFFFFF";return{bg:e,txt:ie(e,l,.7)}},y=()=>{m.value||(u.value.title=d.value||"")},h=()=>{i.value=!i.value,i.value?E():w()},L=()=>{s("hide-editor")},C=()=>{m.value&&s("update",u.value)},x=()=>{s("delete",u.value.id),s("hide-editor")},w=()=>{const e=document.getElementsByTagName("blockquote");for(const t of e)t.classList.add("blockquote","border-start","border-dark-subtle","border-3","ps-2","py-1","fs-6")};async function E(){await(0,n.dY)(),""===u.value.title&&r.value.focus()}return(0,n.wB)((()=>u.value.title),(e=>{m.value&&(d.value=e),E()}),{immediate:!0}),(0,n.sV)(w),(e,t)=>((0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bo)((0,n.Lk)("div",we,[(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>u.value.title=e),ref_key:"titleInput",ref:r,class:"fs-3 form-control mb-2",placeholder:"Title",type:"text",onInput:C,onFocusout:y},null,544),[[o.Jo,u.value.title]]),(0,n.bF)(xe,{modelValue:u.value.text,"onUpdate:modelValue":t[1]||(t[1]=e=>u.value.text=e),onInput:C,"editor-visible":i.value},null,8,["modelValue","editor-visible"])],512),[[o.aG,i.value]]),(0,n.bo)((0,n.Lk)("div",Ee,[(0,n.Lk)("div",_e,[(0,n.Lk)("div",{class:"fs-3 text-muted m-0 p-0 flex-fill",textContent:(0,v.v_)(u.value.title)},null,8,Fe),(0,n.Lk)("div",{class:"badge my-1",style:(0,v.Tr)({backgroundColor:b.value.bg,color:b.value.txt})},[t[3]||(t[3]=(0,n.Lk)("i",{class:"bi bi-calendar"},null,-1)),(0,n.eW)(" "+(0,v.v_)(c.value),1)],4)]),t[4]||(t[4]=(0,n.Lk)("hr",{class:"p-0 m-0 mb-2"},null,-1)),(0,n.Lk)("div",{innerHTML:p.value},null,8,Ie)],512),[[o.aG,!i.value]]),(0,n.bF)(z,{modalId:"confirmDeleteModal",title:"Are you sure you want to delete this note?"},{footer:(0,n.k6)((()=>[t[6]||(t[6]=(0,n.Lk)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},[(0,n.Lk)("i",{class:"bi bi-x-lg"}),(0,n.eW)(" Cancel ")],-1)),(0,n.Lk)("button",{onClick:x,type:"button",class:"btn btn-danger","data-bs-dismiss":"modal"},t[5]||(t[5]=[(0,n.Lk)("i",{class:"bi bi-trash3"},null,-1),(0,n.eW)(" Delete ")]))])),_:1}),(0,n.bF)(z,{modalId:"selectColorModal",title:"Select a color..."},{body:(0,n.k6)((()=>[(0,n.Lk)("div",Xe,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)((0,_.R1)(ne),((e,t)=>((0,n.uX)(),(0,n.CE)("button",{key:e,onClick:t=>k(e),"data-bs-dismiss":"modal",class:"btn rounded-pill m-1 color-option",style:(0,v.Tr)({backgroundColor:e,color:g(e).txt})},(0,v.v_)(t),13,Te)))),128))])])),footer:(0,n.k6)((()=>[(0,n.Lk)("button",{type:"button",onClick:t[2]||(t[2]=e=>k(null)),class:"btn btn-secondary btn-warning","data-bs-dismiss":"modal"},t[7]||(t[7]=[(0,n.Lk)("i",{class:"bi bi-eraser-fill"},null,-1),(0,n.eW)(" Clear ")])),t[8]||(t[8]=(0,n.Lk)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},[(0,n.Lk)("i",{class:"bi bi-x-lg"}),(0,n.eW)(" Cancel ")],-1))])),_:1}),(0,n.bF)(oe,null,{default:(0,n.k6)((()=>[(0,n.Lk)("button",{disabled:!f.value,onClick:h,style:Ke,class:(0,v.C4)([Ve,"btn-primary"]),type:"button"},[i.value?((0,n.uX)(),(0,n.CE)("i",We)):((0,n.uX)(),(0,n.CE)("i",Ne))],8,Se),(0,n.Lk)("button",{onClick:L,style:Ke,class:(0,v.C4)([Ve,"ms-2 btn-secondary"]),type:"button"},t[9]||(t[9]=[(0,n.Lk)("i",{class:"bi bi-x-lg"},null,-1)]))])),_:1})],64))}};const Be=(0,s.A)(Oe,[["__scopeId","data-v-55bf76f2"]]);var Me=Be;const je={key:0,class:"bi bi-pin-fill fs-4 text-warning"},qe={key:1,class:"bi bi-pin fs-4"},Ae={key:1,"data-bs-toggle":"modal","data-bs-target":"#selectColorModal",class:"btn py-0 my-0 px-1 mx-1",type:"button"},De={key:2,"data-bs-toggle":"modal","data-bs-target":"#confirmDeleteModal",class:"btn py-0 my-0 px-1 mx-1",type:"button"},$e={key:1,class:"container note-list"},Ue={key:0,class:"fs-5 text-muted"},Ge={class:"row g-2"},Qe=["onClick"],Je={class:"d-flex align-items-center flex-wrap mb-1"},ze={class:"fs-6 fw-medium flex-fill"},He={key:0,class:"me-2 bi bi-pin-fill text-warning"},Pe={class:"d-flex align-items-center"},Ye={class:"text-muted flex-fill note-preview"};var Ze={__name:"NotesList",setup(e){const t=(0,_.KR)([]),l=(0,_.KR)(!1),o=(0,_.KR)(!1),a=(0,_.KR)();function s(){l.value=!1}const i=()=>{t.value=JSON.parse(localStorage.getItem("notes"))||[],a.value={}},u=(0,n.EW)((()=>[...t.value].sort(((e,t)=>e.pinned===t.pinned?t.id-e.id:!0===e.pinned?-1:1)))),d=e=>{let t=e.text.slice(0,100);return t+=t.length<e.text.length?"...":"",t},r=e=>{let t=e.color||ne.cyan,l=se(t),o=l.isLight?"#000000":"#FFFFFF";return{bg:t,txt:ie(t,o,.7)}},c=e=>{a.value=e,o.value=!1,setTimeout((()=>{l.value=!0}),100)},b=()=>{localStorage.setItem("notes",JSON.stringify(t.value))},p=e=>{const l=t.value.findIndex((t=>t.id===e.id));e.modifiedOn=Date.now(),-1!==l?t.value[l]=e:o.value&&t.value.push(e),b()},f=e=>{t.value=t.value.filter((t=>t.id!==e)),b()},m=()=>{a.value={id:Date.now(),title:"",text:""},l.value=!0,o.value=!0},k=()=>{void 0===a.value.pinned?a.value.pinned=!0:a.value.pinned=!a.value.pinned,b()};return(0,n.wB)((()=>l.value),(e=>{e||(a.value={})})),(0,n.sV)(i),(e,i)=>((0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(E,{title:"Notes",iconClass:"bi bi-journals"},{"nav-buttons":(0,n.k6)((()=>[l.value?((0,n.uX)(),(0,n.CE)("button",{key:0,onClick:k,class:"btn py-0 my-0 px-1 mx-1",type:"button"},[a.value.pinned?((0,n.uX)(),(0,n.CE)("i",je)):((0,n.uX)(),(0,n.CE)("i",qe))])):(0,n.Q3)("",!0),l.value?((0,n.uX)(),(0,n.CE)("button",Ae,i[1]||(i[1]=[(0,n.Lk)("i",{class:"bi bi-palette-fill fs-4 text-primary"},null,-1)]))):(0,n.Q3)("",!0),l.value?((0,n.uX)(),(0,n.CE)("button",De,i[2]||(i[2]=[(0,n.Lk)("i",{class:"bi bi-trash3 fs-4 text-danger"},null,-1)]))):(0,n.Q3)("",!0)])),_:1}),l.value?((0,n.uX)(),(0,n.Wv)(Me,{key:0,modelValue:a.value,"onUpdate:modelValue":i[0]||(i[0]=e=>a.value=e),"is-new":o.value,onHideEditor:s,onUpdate:p,onDelete:f},null,8,["modelValue","is-new"])):(0,n.Q3)("",!0),l.value?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.CE)("div",$e,[0===t.value.length?((0,n.uX)(),(0,n.CE)("p",Ue,"I know I'm empty right now but I'm full of potential...")):(0,n.Q3)("",!0),(0,n.Lk)("div",Ge,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(u.value,(e=>((0,n.uX)(),(0,n.CE)("div",{key:e.id,class:"col-6 list-group list-group-hover no-select d-flex",onClick:t=>c(e)},[(0,n.Lk)("div",{class:(0,v.C4)(["item list-group-item flex-fill",{"li-active":a.value.id===e.id}]),style:(0,v.Tr)({borderColor:e.color})},[(0,n.Lk)("div",Je,[(0,n.Lk)("div",ze,(0,v.v_)(e.title),1),(0,n.Lk)("div",null,[e.pinned?((0,n.uX)(),(0,n.CE)("i",He)):(0,n.Q3)("",!0),(0,n.Lk)("div",{class:"badge",style:(0,v.Tr)({backgroundColor:r(e).bg,color:r(e).txt})},(0,v.v_)(new Date(e.id).toLocaleDateString((0,_.R1)(ae)())),5)])]),(0,n.Lk)("div",Pe,[(0,n.Lk)("div",Ye,(0,v.v_)(d(e)),1)])],6)],8,Qe)))),128))])])),l.value?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.Wv)(oe,{key:2},{default:(0,n.k6)((()=>[(0,n.Lk)("button",{onClick:m,style:{height:"50px",width:"50px"},class:"btn btn-primary rounded-circle fs-5 shadow",type:"button"},i[3]||(i[3]=[(0,n.Lk)("i",{class:"bi bi-plus-lg"},null,-1)]))])),_:1}))],64))}};const et=(0,s.A)(Ze,[["__scopeId","data-v-3dbb958e"]]);var tt=et,lt={__name:"NotesView",setup(e){return(e,t)=>((0,n.uX)(),(0,n.Wv)(tt))}};const ot=lt;var nt=ot;const at=[{path:"/",name:"todolist",component:ke},{path:"/notes",name:"notes",component:nt}],st=(0,r.aE)({history:(0,r.Bt)(),routes:at});var it=st,ut=(l(8077),l(4458));(0,ut.k)("/turbo-todo/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});const dt=(0,o.Ef)(d);dt.use(it),dt.mount("#app")}},t={};function l(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,l),a.exports}l.m=e,function(){var e=[];l.O=function(t,o,n,a){if(!o){var s=1/0;for(r=0;r<e.length;r++){o=e[r][0],n=e[r][1],a=e[r][2];for(var i=!0,u=0;u<o.length;u++)(!1&a||s>=a)&&Object.keys(l.O).every((function(e){return l.O[e](o[u])}))?o.splice(u--,1):(i=!1,a<s&&(s=a));if(i){e.splice(r--,1);var d=n();void 0!==d&&(t=d)}}return t}a=a||0;for(var r=e.length;r>0&&e[r-1][2]>a;r--)e[r]=e[r-1];e[r]=[o,n,a]}}(),function(){l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,{a:t}),t}}(),function(){l.d=function(e,t){for(var o in t)l.o(t,o)&&!l.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};l.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,a,s=o[0],i=o[1],u=o[2],d=0;if(s.some((function(t){return 0!==e[t]}))){for(n in i)l.o(i,n)&&(l.m[n]=i[n]);if(u)var r=u(l)}for(t&&t(o);d<s.length;d++)a=s[d],l.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return l.O(r)},o=self["webpackChunkturbo_todo"]=self["webpackChunkturbo_todo"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=l.O(void 0,[504],(function(){return l(2434)}));o=l.O(o)})();
//# sourceMappingURL=app.074484d0.js.map