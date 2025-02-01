(function(){"use strict";var e={4641:function(e,t,o){var n=o(5130),l=o(6768);function s(e,t){const o=(0,l.g2)("router-view");return(0,l.uX)(),(0,l.Wv)(o)}var a=o(1241);const i={},d=(0,a.A)(i,[["render",s]]);var u=d,r=o(1387);function c(e,t,o,n,s,a){const i=(0,l.g2)("TopNav"),d=(0,l.g2)("TodoList");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.bF)(i,{title:"Todo List",iconClass:"bi bi-check2-square"}),(0,l.bF)(d)],64)}var p=o(4232);const b={class:"navbar fixed-top shadow bg-secondary-subtle"},v={class:"container py-1"},m={class:"fs-4 m-0"},f={class:"offcanvas offcanvas-end",tabIndex:"-1",id:"offcanvasRight"},h={class:"offcanvas-body"},k={class:"row row-cols-1 g-3"},y={class:"col"},g={"data-bs-dismiss":"offcanvas"},w={class:"col"},x={"data-bs-dismiss":"offcanvas"};function C(e,t,o,n,s,a){const i=(0,l.g2)("RouterLink");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.Lk)("div",b,[(0,l.Lk)("div",v,[(0,l.Lk)("p",m,[(0,l.Lk)("i",{class:(0,p.C4)(o.iconClass)},null,2),(0,l.eW)(" "+(0,p.v_)(o.title),1)]),t[0]||(t[0]=(0,l.Lk)("button",{class:"btn py-0 my-0 px-1 mx-1",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasRight"},[(0,l.Lk)("i",{class:"bi bi-list fs-4"})],-1))])]),(0,l.Lk)("div",f,[t[4]||(t[4]=(0,l.Lk)("div",{class:"offcanvas-header"},[(0,l.Lk)("h5",{class:"offcanvas-title",id:"offcanvasRightLabel"},"Options"),(0,l.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1)),(0,l.Lk)("div",h,[(0,l.Lk)("div",k,[t[3]||(t[3]=(0,l.Lk)("div",{class:"col"},[(0,l.Lk)("button",{class:"btn btn-lg btn-primary"},[(0,l.Lk)("i",{class:"bi bi-plus-lg"}),(0,l.eW)(" Create New List")])],-1)),(0,l.Lk)("div",y,[(0,l.Lk)("span",g,[(0,l.bF)(i,{class:"btn btn-lg btn-primary",to:"/"},{default:(0,l.k6)((()=>t[1]||(t[1]=[(0,l.Lk)("i",{class:"bi bi-check2-square"},null,-1),(0,l.eW)(" Todo List")]))),_:1})])]),(0,l.Lk)("div",w,[(0,l.Lk)("span",x,[(0,l.bF)(i,{class:"btn btn-lg btn-primary",to:"/notes"},{default:(0,l.k6)((()=>t[2]||(t[2]=[(0,l.Lk)("i",{class:"bi bi-journals"},null,-1),(0,l.eW)(" Notes")]))),_:1})])])])])])],64)}var L={props:{title:{type:String,required:!0},iconClass:{type:String,required:!0}}};const T=(0,a.A)(L,[["render",C]]);var _=T;o(4114),o(7642),o(8004),o(3853),o(5876),o(2475),o(5024),o(1698),o(8992),o(4520),o(1454);const I={class:"ps-3 flex-fill align-items-center"},E=["id","onUpdate:modelValue"],R=["for"],F={class:"btn-div align-items-center pe-1"},X=["onClick"];var S={__name:"TodoItem",props:{todos:{type:Array,required:!0},setCurrentTodo:{type:Function,required:!0},saveTodos:{type:Function,required:!0}},setup(e){const t=e;return(o,s)=>((0,l.uX)(),(0,l.Wv)(n.F,{name:"list",tag:"ul",class:"list-group list-group-hover"},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(t.todos,(o=>((0,l.uX)(),(0,l.CE)("li",{key:o.id,class:"list-group-item d-flex align-items-center p-0 m-0"},[(0,l.Lk)("div",I,[(0,l.bo)((0,l.Lk)("input",{id:"todo-"+o.id,type:"checkbox",class:"form-check-input me-2 rounded-circle","onUpdate:modelValue":e=>o.done=e,onChange:s[0]||(s[0]=(...t)=>e.saveTodos&&e.saveTodos(...t))},null,40,E),[[n.lH,o.done]]),(0,l.Lk)("label",{for:"todo-"+o.id,class:(0,p.C4)(["form-check-label stretched-link",{completed:o.done}])},(0,p.v_)(o.name),11,R)]),(0,l.Lk)("div",F,[(0,l.Lk)("button",{"data-bs-toggle":"modal","data-bs-target":"#editTodoModal",class:"btn",onClick:()=>t.setCurrentTodo(o)},s[1]||(s[1]=[(0,l.Lk)("i",{class:"bi bi-pencil"},null,-1)]),8,X)])])))),128))])),_:1}))}};const N=(0,a.A)(S,[["__scopeId","data-v-2fb082c0"]]);var K=N;const O={key:0,class:"modal-title"},V={key:1,class:"modal-title"},W={class:"d-flex align-items-center"};function q(e,t,o,s,a,i){const d=(0,l.g2)("BaseModal");return(0,l.uX)(),(0,l.Wv)(d,{"modal-id":o.modalId},{header:(0,l.k6)((()=>[o.isNew?((0,l.uX)(),(0,l.CE)("h5",O,"Add a new item...")):((0,l.uX)(),(0,l.CE)("h5",V,"Edit item")),t[8]||(t[8]=(0,l.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal"},null,-1))])),body:(0,l.k6)((()=>[(0,l.Lk)("div",W,[(0,l.bo)((0,l.Lk)("input",{type:"checkbox",class:"form-check-input me-2 rounded-circle","onUpdate:modelValue":t[0]||(t[0]=e=>a.todoCopy.done=e),onChange:t[1]||(t[1]=(...e)=>o.saveTodos&&o.saveTodos(...e))},null,544),[[n.aG,!o.isNew],[n.lH,a.todoCopy.done]]),o.isNew?(0,l.bo)(((0,l.uX)(),(0,l.CE)("input",{key:1,type:"text",class:"form-control","onUpdate:modelValue":t[4]||(t[4]=e=>a.todoCopy.name=e),onKeyup:t[5]||(t[5]=(0,n.jR)((e=>o.addNewTodo(a.todoCopy)),["enter"]))},null,544)),[[n.Jo,a.todoCopy.name,void 0,{trim:!0}]]):(0,l.bo)(((0,l.uX)(),(0,l.CE)("input",{key:0,type:"text",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=e=>a.todoCopy.name=e),onChange:t[3]||(t[3]=(...e)=>o.saveTodos&&o.saveTodos(...e))},null,544)),[[n.Jo,a.todoCopy.name,void 0,{trim:!0}]])])])),footer:(0,l.k6)((()=>[o.isNew?((0,l.uX)(),(0,l.CE)("button",{key:0,onClick:t[6]||(t[6]=e=>o.addNewTodo(a.todoCopy)),type:"button",class:"btn btn-primary","data-bs-dismiss":"modal"},t[9]||(t[9]=[(0,l.Lk)("i",{class:"bi bi-file-arrow-up-fill"},null,-1),(0,l.eW)(" Save ")]))):((0,l.uX)(),(0,l.CE)("button",{key:1,onClick:t[7]||(t[7]=e=>o.deleteTodo(o.todo.id)),type:"button",class:"btn btn-danger","data-bs-dismiss":"modal"},t[10]||(t[10]=[(0,l.Lk)("i",{class:"bi bi-trash3"},null,-1),(0,l.eW)(" Delete ")])))])),_:1},8,["modal-id"])}const A=["id"],B={class:"modal-dialog modal-dialog-centered"},j={class:"modal-content"},M={key:0,class:"modal-header"},D={key:1,class:"modal-header"},U={class:"modal-title"},$={key:2,class:"modal-body"},z={key:3,class:"modal-footer"};var G={__name:"BaseModal",props:{modalId:{type:String,required:!0},title:{type:String}},setup(e){const t=e;return(e,o)=>((0,l.uX)(),(0,l.CE)("div",{id:t.modalId,class:"modal fade",tabIndex:"-1"},[(0,l.Lk)("div",B,[(0,l.Lk)("div",j,[e.$slots.header?((0,l.uX)(),(0,l.CE)("div",M,[(0,l.RG)(e.$slots,"header")])):((0,l.uX)(),(0,l.CE)("div",D,[(0,l.Lk)("h5",U,(0,p.v_)(t.title||""),1)])),e.$slots.body?((0,l.uX)(),(0,l.CE)("div",$,[(0,l.RG)(e.$slots,"body")])):(0,l.Q3)("",!0),e.$slots.footer?((0,l.uX)(),(0,l.CE)("div",z,[(0,l.RG)(e.$slots,"footer")])):(0,l.Q3)("",!0)])])],8,A))}};const J=G;var Q=J,H={components:{BaseModal:Q},props:{modalId:{type:String,required:!0},isNew:{type:Boolean,required:!0},todo:{type:Object,required:!0},deleteTodo:{type:Function,required:!1},addNewTodo:{type:Function,required:!1},saveTodos:{type:Function,required:!1}},data(){return{todoCopy:this.isNew?{name:"",done:!1,id:Date.now()}:this.todo}},watch:{todo(e){this.todoCopy=this.isNew?{name:"",done:!1,id:Date.now()}:e}}};const P=(0,a.A)(H,[["render",q]]);var Y=P,Z=o(144);const ee={class:"fixed-bottom",style:{height:"70px"}},te={class:"container",style:{height:"50px"}};var oe={__name:"FixedBottom",setup(e){const t=(0,l.OA)();return(e,o)=>((0,l.uX)(),(0,l.CE)("div",ee,[(0,l.Lk)("div",te,[(0,l.Lk)("div",{class:(0,p.C4)((0,Z.R1)(t).class||"d-flex justify-content-end")},[(0,l.RG)(e.$slots,"default")],2)])]))}};const ne=(0,a.A)(oe,[["__scopeId","data-v-283b122b"]]);var le=ne;const se={class:"container"},ae={id:"itemOptions"},ie=["value"],de={data(){return{newTodo:"",todos:JSON.parse(localStorage.getItem("todoItems"))||[],showCompleted:!1,currentTodo:{name:"",done:!1,id:0},showInput:!1}},computed:{sortedTodos(){return[...this.todos].sort(((e,t)=>t.id-e.id))},completedTodos(){return this.sortedTodos.filter((e=>e.done))},incompleteTodos(){return this.sortedTodos.filter((e=>!e.done))},completedCount(){return this.completedTodos.length},uniqueItems(){return[...new Set(this.todos.map((e=>e.name)))].sort()},chevronClass(){return this.showCompleted?"bi bi-chevron-down":"bi bi-chevron-right"}},methods:{capitalize(e){return e.charAt(0).toUpperCase()+e.slice(1)},removeFocus(e){setTimeout((()=>{e.target.style.outline="none",e.target.style.boxShadow="none",this.$refs.showIncompleteButton.blur()}),250)},toggleShowCompleted(e){this.showCompleted=!this.showCompleted,this.removeFocus(e)},addTodo(){this.newTodo&&(this.todos.push({id:Date.now(),name:this.capitalize(this.newTodo),done:!1}),this.newTodo="",this.saveTodos())},setCurrentTodo(e){this.currentTodo=e},deleteTodo(e){this.todos=this.todos.filter((t=>t.id!==e)),this.saveTodos()},saveTodos(){localStorage.setItem("todoItems",JSON.stringify(this.todos))}},watch:{showInput(e){e&&this.$nextTick((()=>{this.$refs.todoInput.focus()}))}}};var ue=Object.assign(de,{__name:"TodoList",setup(e){return(e,t)=>((0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.Lk)("div",se,[(0,l.bF)(K,{todos:e.incompleteTodos,setCurrentTodo:e.setCurrentTodo,"save-todos":e.saveTodos},null,8,["todos","setCurrentTodo","save-todos"]),(0,l.Lk)("button",{id:"showIncompleteButton",ref:"showIncompleteButton",class:(0,p.C4)(["btn btn-outline-secondary mb-3 w-100 text-start",{"mt-3":e.incompleteTodos.length>0}]),onClick:t[0]||(t[0]=t=>e.toggleShowCompleted(t))},[(0,l.Lk)("i",{class:(0,p.C4)(e.chevronClass)},null,2),(0,l.eW)(" Completed "+(0,p.v_)(e.completedCount),1)],2),(0,l.bF)(n.eB,null,{default:(0,l.k6)((()=>[(0,l.bo)((0,l.bF)(K,{todos:e.completedTodos,"set-current-todo":e.setCurrentTodo,"save-todos":e.saveTodos},null,8,["todos","set-current-todo","save-todos"]),[[n.aG,e.showCompleted]])])),_:1})]),null!==e.currentTodo?((0,l.uX)(),(0,l.Wv)(Y,{key:0,modalId:"editTodoModal","is-new":!1,todo:e.currentTodo,"delete-todo":e.deleteTodo,"save-todos":e.saveTodos},null,8,["todo","delete-todo","save-todos"])):(0,l.Q3)("",!0),(0,l.bF)(le,null,{default:(0,l.k6)((()=>[(0,l.bF)(n.eB,null,{default:(0,l.k6)((()=>[(0,l.bo)((0,l.Lk)("input",{ref:"todoInput",list:"itemOptions",style:{height:"45px"},type:"text",class:"form-control bg-secondary-subtle",placeholder:"Add a new item...","onUpdate:modelValue":t[1]||(t[1]=t=>e.newTodo=t),onKeyup:t[2]||(t[2]=(0,n.jR)(((...t)=>e.addTodo&&e.addTodo(...t)),["enter"])),onFocusout:t[3]||(t[3]=t=>e.showInput=!1)},null,544),[[n.aG,e.showInput],[n.Jo,e.newTodo,void 0,{trim:!0}]])])),_:1}),(0,l.Lk)("datalist",ae,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e.uniqueItems,((e,t)=>((0,l.uX)(),(0,l.CE)("option",{key:t,value:e},null,8,ie)))),128))]),(0,l.bo)((0,l.Lk)("button",{onClick:t[4]||(t[4]=t=>e.showInput=!e.showInput),style:{height:"50px",width:"50px"},class:"btn btn-primary rounded-circle fs-5 shadow",type:"button"},t[5]||(t[5]=[(0,l.Lk)("i",{class:"bi bi-plus-lg"},null,-1)]),512),[[n.aG,!e.showInput]])])),_:1})],64))}});const re=(0,a.A)(ue,[["__scopeId","data-v-43e68eaa"]]);var ce=re,pe={components:{TopNav:_,TodoList:ce}};const be=(0,a.A)(pe,[["render",c]]);var ve=be;const me=["contenteditable","innerText"];var fe={__name:"TextEditor",props:(0,l.zz)({disabled:{type:Boolean},placeholder:{type:String},editorVisible:{type:Boolean}},{modelValue:{},modelModifiers:{}}),emits:(0,l.zz)(["input","keydown.enter"],["update:modelValue"]),setup(e,{emit:t}){const o=(0,l.fn)(e,"modelValue"),s=(0,Z.KR)(o.value),a=(0,Z.KR)(!1),i=(0,l.rk)("textInput"),d=(0,Z.KR)(!1),u=(0,Z.KR)(500),r=t;let c;const b=e,v=(0,l.EW)((()=>m.value===b.placeholder&&!a.value)),m=(0,l.EW)((()=>""!==o.value.trim()||a.value?s.value:b.placeholder)),f=e=>{e.preventDefault(),d.value=!0},h=e=>{const t=e.anchorNode,o=t.textContent,n=e.toString().split(" ");if(t.nodeValue){const l=document.createRange();l.setStart(t,0),l.setEnd(t,o.length),1===n.length&&(e.modify("move","left","word"),e.modify("extend","right","word"));const s=e.getRangeAt(0),a=e.toString();return e.removeAllRanges(),{lineText:o,lineRange:l,wordText:a,wordRange:s}}return null},k=()=>{d.value=!0;const e=document.getElementById("toolbar"),t=window.getSelection(),o=t.getRangeAt(0),n=o.getBoundingClientRect(),l=document.getElementById("toolbar").offsetWidth,s=window.innerWidth,a=s-l;e.style.top=n.top+window.scrollY-e.offsetHeight+"px",e.style.left=`${Math.min(n.left,a)+window.scrollX}px`},y=[{key:"bold",context:"word",prefix:"**",suffix:"**"},{key:"italic",context:"word",prefix:"*",suffix:"*"},{key:"quote",context:"line",prefix:"> ",suffix:""},{key:"h1",context:"line",prefix:"# ",suffix:""},{key:"h2",context:"line",prefix:"## ",suffix:""},{key:"h3",context:"line",prefix:"### ",suffix:""}],g=e=>{const t=window.getSelection(),o=h(t);if(o){document.execCommand("cut");const n=e=>{t.removeAllRanges(),t.addRange(e)},l=e=>{document.execCommand("insertText",!1,e)},s=y.find((t=>t.key===e));if("word"===s.context){o.wordText=o.wordText.replace(/\*/g,"").trim();let e=o.lineText.slice(0,o.wordRange.startOffset),t=o.lineText.slice(o.wordRange.endOffset);while("*"===e.slice(-1))e=e.slice(0,e.length-1);n(o.lineRange),l(e+s.prefix+o.wordText+s.suffix+t)}else o.lineText=o.lineText.replace(/>|#/g,"").trim(),n(o.lineRange),l(s.prefix+o.lineText+s.suffix)}},w=()=>{c=setTimeout((()=>{const e=window.getSelection(),t=h(e);e.removeAllRanges(),e.addRange(t.wordRange),navigator.vibrate(50)}),u)},x=()=>{clearTimeout(c)},C=/^(\d+)\..+$/,L=/^- .+$/,T=e=>{e.preventDefault();const t=window.getSelection().anchorNode;if(document.execCommand("insertText",!1,"\n"),t.textContent){const e=C.exec(t.textContent),o=L.exec(t.textContent);if(e){let t=parseInt(e.at(0))+1;document.execCommand("insertText",!1,`${t}. `)}else o&&document.execCommand("insertText",!1,"- ")}r("keydown.enter")},_=e=>{o.value=e.target.innerText,r("input")};return(0,l.wB)((()=>b.editorVisible),(e=>{e&&i&&setTimeout((()=>{const e=document.createRange(),t=window.getSelection();e.selectNodeContents(i.value),e.collapse(!1),t?.removeAllRanges(),t?.addRange(e),i.value.focus()}),0)}),{immediate:!0}),(e,t)=>((0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.Lk)("div",{id:"textInput",ref_key:"textInput",ref:i,contenteditable:!b.disabled,class:(0,p.C4)(["form-control p-2",{"temp text-muted":v.value}]),innerText:m.value,spellcheck:"false",onInput:_,onFocus:t[0]||(t[0]=e=>a.value=!0),onFocusout:t[1]||(t[1]=e=>a.value=!1),onKeydown:(0,n.jR)(T,["enter"]),onMouseup:k,onContextmenu:f,onKeyup:k,onTouchstart:w,onTouchend:x,onTouchcancel:x},null,42,me),(0,l.Lk)("div",{id:"toolbar",class:(0,p.C4)(["d-flex flex-nowrap",{hidden:!d.value}])},[(0,l.Lk)("button",{onClick:t[2]||(t[2]=e=>g("h1")),class:"btn btn-secondary shadow",type:"button"},t[8]||(t[8]=[(0,l.Lk)("i",{class:"bi bi-type-h1"},null,-1)])),(0,l.Lk)("button",{onClick:t[3]||(t[3]=e=>g("h2")),class:"ms-1 btn btn-secondary shadow",type:"button"},t[9]||(t[9]=[(0,l.Lk)("i",{class:"bi bi-type-h2"},null,-1)])),(0,l.Lk)("button",{onClick:t[4]||(t[4]=e=>g("h3")),class:"ms-1 btn btn-secondary shadow",type:"button"},t[10]||(t[10]=[(0,l.Lk)("i",{class:"bi bi-type-h3"},null,-1)])),(0,l.Lk)("button",{onClick:t[5]||(t[5]=e=>g("bold")),class:"ms-1 btn btn-secondary shadow",type:"button"},t[11]||(t[11]=[(0,l.Lk)("i",{class:"bi bi-type-bold"},null,-1)])),(0,l.Lk)("button",{onClick:t[6]||(t[6]=e=>g("italic")),class:"ms-1 btn btn-secondary shadow",type:"button"},t[12]||(t[12]=[(0,l.Lk)("i",{class:"bi bi-type-italic"},null,-1)])),(0,l.Lk)("button",{onClick:t[7]||(t[7]=e=>g("quote")),class:"ms-1 btn btn-secondary shadow",type:"button"},t[13]||(t[13]=[(0,l.Lk)("i",{class:"bi bi-quote"},null,-1)]))],2)],64))}};const he=(0,a.A)(fe,[["__scopeId","data-v-6a3317f9"]]);var ke=he;const ye={class:"container note-editor"},ge={class:"container note-viewer"},we={class:"d-flex align-items-center p-0 m-0 mb-2 flex-wrap"},xe=["textContent"],Ce={class:"badge text-bg-info my-1"},Le=["innerHTML"],Te=["disabled"],_e={key:0,class:"bi bi-eye-fill"},Ie={key:1,class:"bi bi-pencil-fill"},Ee=["disabled"];let Re=o(6709);Re.use({breaks:!0,silent:!0});const Fe="btn rounded-circle fs-5 shadow",Xe={height:"50px",width:"50px"};var Se={__name:"NoteEditor",props:(0,l.zz)({isNew:{type:Boolean,required:!0}},{modelValue:{},modelModifiers:{}}),emits:(0,l.zz)(["hide-editor","update","delete"],["update:modelValue"]),setup(e,{emit:t}){const o=(0,l.fn)(e,"modelValue"),s=e,a=t,i=(0,Z.KR)(s.isNew),d=(0,l.rk)("titleInput"),u=(0,Z.KR)({...o.value}),r=(0,Z.KR)(null),c=(0,l.EW)((()=>Re.parse(u.value.text))),b=(0,l.EW)((()=>v.value||!s.isNew)),v=(0,l.EW)((()=>u.value.title.trim().length>=3)),m=()=>{v.value||(u.value.title=r.value||"")},f=()=>{i.value=!i.value,i.value?w():g()},h=()=>{a("hide-editor")},k=()=>{v.value&&a("update",u.value)},y=()=>{a("delete",u.value.id),a("hide-editor")},g=()=>{const e=document.getElementsByTagName("blockquote");for(const t of e)t.classList.add("blockquote","border-start","border-dark-subtle","border-3","ps-2","py-1","fs-6")};async function w(){await(0,l.dY)(),""===u.value.title&&d.value.focus()}return(0,l.wB)((()=>u.value.title),(e=>{v.value&&(r.value=e),w()}),{immediate:!0}),(0,l.sV)(g),(e,t)=>((0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.bo)((0,l.Lk)("div",ye,[(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>u.value.title=e),ref_key:"titleInput",ref:d,class:"fs-3 form-control mb-2",placeholder:"Title",type:"text",onInput:k,onFocusout:m},null,544),[[n.Jo,u.value.title]]),(0,l.bF)(ke,{modelValue:u.value.text,"onUpdate:modelValue":t[1]||(t[1]=e=>u.value.text=e),onInput:k,disabled:!v.value,"editor-visible":i.value,placeholder:"Note"},null,8,["modelValue","disabled","editor-visible"])],512),[[n.aG,i.value]]),(0,l.bo)((0,l.Lk)("div",ge,[(0,l.Lk)("div",we,[(0,l.Lk)("div",{class:"fs-3 text-muted m-0 p-0 flex-fill",textContent:(0,p.v_)(u.value.title)},null,8,xe),(0,l.Lk)("div",Ce,"Created: "+(0,p.v_)(new Date(u.value.id).toLocaleString(e.getUserLocale())),1)]),t[2]||(t[2]=(0,l.Lk)("hr",{class:"p-0 m-0 mb-2"},null,-1)),(0,l.Lk)("div",{innerHTML:c.value},null,8,Le)],512),[[n.aG,!i.value]]),(0,l.bF)(Q,{modalId:"confirmDeleteModal",title:"Are you sure you want to delete this note?"},{footer:(0,l.k6)((()=>[t[4]||(t[4]=(0,l.Lk)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},[(0,l.Lk)("i",{class:"bi bi-x-lg"}),(0,l.eW)(" Cancel ")],-1)),(0,l.Lk)("button",{onClick:y,type:"button",class:"btn btn-danger","data-bs-dismiss":"modal"},t[3]||(t[3]=[(0,l.Lk)("i",{class:"bi bi-trash3"},null,-1),(0,l.eW)(" Delete ")]))])),_:1}),(0,l.bF)(le,null,{default:(0,l.k6)((()=>[(0,l.Lk)("button",{disabled:!b.value,onClick:f,style:Xe,class:(0,p.C4)([Fe,"btn-primary"]),type:"button"},[i.value?((0,l.uX)(),(0,l.CE)("i",_e)):((0,l.uX)(),(0,l.CE)("i",Ie))],8,Te),(0,l.Lk)("button",{onClick:h,style:Xe,class:(0,p.C4)([Fe,"ms-2 btn-secondary"]),type:"button"},t[5]||(t[5]=[(0,l.Lk)("i",{class:"bi bi-x-lg"},null,-1)])),(0,l.Lk)("button",{disabled:!b.value,"data-bs-toggle":"modal","data-bs-target":"#confirmDeleteModal",style:Xe,class:(0,p.C4)([Fe,"ms-2 btn-danger"]),type:"button"},t[6]||(t[6]=[(0,l.Lk)("i",{class:"bi bi-trash3"},null,-1)]),8,Ee)])),_:1})],64))}};const Ne=(0,a.A)(Se,[["__scopeId","data-v-6c6dc435"]]);var Ke=Ne;const Oe={key:1,class:"container note-list"},Ve={key:0,class:"fs-5 text-muted"},We={class:"list-group list-group-hover"},qe=["onClick"],Ae={class:"d-flex align-items-center"},Be={class:"fs-5 flex-fill"},je={class:"ms-2 badge text-bg-info"},Me={class:"d-flex align-items-center"},De={class:"text-truncate text-muted fs-6 flex-fill"};var Ue={__name:"NotesList",setup(e){const t=(0,Z.KR)([]),o=(0,Z.KR)(!1),n=(0,Z.KR)(!1),s=(0,Z.KR)();function a(){o.value=!1}const i=()=>{t.value=JSON.parse(localStorage.getItem("notes"))||[],s.value={}},d=(0,l.EW)((()=>[...t.value].sort(((e,t)=>t.id-e.id)))),u=e=>{s.value=e,n.value=!1,o.value=!0},r=()=>{localStorage.setItem("notes",JSON.stringify(t.value))},c=e=>{const o=t.value.findIndex((t=>t.id===e.id));-1!==o?t.value[o]=e:n.value&&t.value.push(e),r()},b=e=>{t.value=t.value.filter((t=>t.id!==e)),r()};function v(){s.value={id:Date.now(),title:"",text:""},o.value=!0,n.value=!0}return(0,l.wB)((()=>o.value),(e=>{e||(s.value={})})),(0,l.sV)(i),(e,i)=>((0,l.uX)(),(0,l.CE)(l.FK,null,[o.value?((0,l.uX)(),(0,l.Wv)(Ke,{key:0,modelValue:s.value,"onUpdate:modelValue":i[0]||(i[0]=e=>s.value=e),"is-new":n.value,onHideEditor:a,onUpdate:c,onDelete:b},null,8,["modelValue","is-new"])):(0,l.Q3)("",!0),o.value?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.CE)("div",Oe,[0===t.value.length?((0,l.uX)(),(0,l.CE)("p",Ve,"I know I'm empty right now but I'm full of potential...")):(0,l.Q3)("",!0),(0,l.Lk)("ul",We,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(d.value,(t=>((0,l.uX)(),(0,l.CE)("li",{key:t.id,onClick:e=>u(t),class:(0,p.C4)(["list-group-item",{"li-active":s.value.id===t.id}])},[(0,l.Lk)("div",Ae,[(0,l.Lk)("div",Be,(0,p.v_)(t.title),1),(0,l.Lk)("div",je,(0,p.v_)(new Date(t.id).toLocaleDateString(e.getUserLocale())),1)]),(0,l.Lk)("div",Me,[(0,l.Lk)("div",De,(0,p.v_)(t.text),1)])],10,qe)))),128))])])),o.value?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.Wv)(le,{key:2},{default:(0,l.k6)((()=>[(0,l.Lk)("button",{onClick:v,style:{height:"50px",width:"50px"},class:"btn btn-primary rounded-circle fs-5 shadow",type:"button"},i[1]||(i[1]=[(0,l.Lk)("i",{class:"bi bi-plus-lg"},null,-1)]))])),_:1}))],64))}};const $e=(0,a.A)(Ue,[["__scopeId","data-v-1ec65b38"]]);var ze=$e,Ge={__name:"NotesView",setup(e){return(e,t)=>((0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.bF)(_,{title:"Notes",iconClass:"bi bi-journals"}),(0,l.bF)(ze)],64))}};const Je=Ge;var Qe=Je;const He=[{path:"/",name:"todolist",component:ve},{path:"/notes",name:"notes",component:Qe}],Pe=(0,r.aE)({history:(0,r.Bt)(),routes:He});var Ye=Pe;o(8077);const Ze=(0,n.Ef)(u);Ze.use(Ye),Ze.mixin({methods:{getUserLocale(){return navigator.language||navigator.languages[0]}}}),Ze.mount("#app")}},t={};function o(n){var l=t[n];if(void 0!==l)return l.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,o),s.exports}o.m=e,function(){var e=[];o.O=function(t,n,l,s){if(!n){var a=1/0;for(r=0;r<e.length;r++){n=e[r][0],l=e[r][1],s=e[r][2];for(var i=!0,d=0;d<n.length;d++)(!1&s||a>=s)&&Object.keys(o.O).every((function(e){return o.O[e](n[d])}))?n.splice(d--,1):(i=!1,s<a&&(a=s));if(i){e.splice(r--,1);var u=l();void 0!==u&&(t=u)}}return t}s=s||0;for(var r=e.length;r>0&&e[r-1][2]>s;r--)e[r]=e[r-1];e[r]=[n,l,s]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,s,a=n[0],i=n[1],d=n[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(l in i)o.o(i,l)&&(o.m[l]=i[l]);if(d)var r=d(o)}for(t&&t(n);u<a.length;u++)s=a[u],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(r)},n=self["webpackChunkturbo_todo"]=self["webpackChunkturbo_todo"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(4641)}));n=o.O(n)})();
//# sourceMappingURL=app.48b257a5.js.map