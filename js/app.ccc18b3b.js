(function(){"use strict";var o={8195:function(o,t,e){var n=e(5130),d=e(6768);const s={id:"app"};function l(o,t,e,n,l,i){const a=(0,d.g2)("TopNav"),r=(0,d.g2)("TodoList");return(0,d.uX)(),(0,d.CE)("div",s,[(0,d.bF)(a),(0,d.bF)(r)])}var i=e(4232);const a={class:"container"},r={class:"list-group list-group-hover"},c={class:"list-group list-group-hover"},u={class:"fixed-bottom bg-dark",style:{height:"55px"}},p={class:"container input-group",style:{height:"45px"}},m={id:"itemOptions"},f=["value"];function b(o,t,e,s,l,b){const g=(0,d.g2)("TodoItem"),h=(0,d.g2)("TodoModal");return(0,d.uX)(),(0,d.CE)(d.FK,null,[(0,d.Lk)("div",a,[(0,d.Lk)("ul",r,[(0,d.bF)(g,{todos:b.incompleteTodos,setCurrentTodo:b.setCurrentTodo,toggleTodoCompletion:b.toggleTodoCompletion},null,8,["todos","setCurrentTodo","toggleTodoCompletion"])]),(0,d.Lk)("button",{class:"btn btn-outline-secondary my-3",onClick:t[0]||(t[0]=(...o)=>b.toggleShowCompleted&&b.toggleShowCompleted(...o))},[(0,d.Lk)("i",{class:(0,i.C4)({"bi bi-chevron-down":l.showCompleted,"bi bi-chevron-right":!l.showCompleted})},null,2),(0,d.eW)(" Completed "+(0,i.v_)(b.completedCount),1)]),(0,d.bo)((0,d.Lk)("ul",c,[(0,d.bF)(g,{todos:b.completedTodos,setCurrentTodo:b.setCurrentTodo,toggleTodoCompletion:b.toggleTodoCompletion},null,8,["todos","setCurrentTodo","toggleTodoCompletion"])],512),[[n.aG,l.showCompleted]])]),null!==l.currentTodo?((0,d.uX)(),(0,d.Wv)(h,{key:0,todo:l.currentTodo,deleteTodo:b.deleteTodo,toggleTodoCompletion:b.toggleTodoCompletion},null,8,["todo","deleteTodo","toggleTodoCompletion"])):(0,d.Q3)("",!0),(0,d.Lk)("div",u,[(0,d.Lk)("div",p,[(0,d.bo)((0,d.Lk)("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>l.newTodo=o),onKeyup:t[2]||(t[2]=(0,n.jR)(((...o)=>b.addTodo&&b.addTodo(...o)),["enter"])),type:"text",list:"itemOptions",class:"form-control",placeholder:"Add a new item..."},null,544),[[n.Jo,l.newTodo]]),(0,d.Lk)("datalist",m,[((0,d.uX)(!0),(0,d.CE)(d.FK,null,(0,d.pI)(b.uniqueItems,((o,t)=>((0,d.uX)(),(0,d.CE)("option",{key:t,value:o},null,8,f)))),128))]),(0,d.Lk)("button",{onClick:t[3]||(t[3]=(...o)=>b.addTodo&&b.addTodo(...o)),class:"btn btn-secondary",type:"button"},t[4]||(t[4]=[(0,d.Lk)("i",{class:"bi bi-file-arrow-up-fill"},null,-1)]))])])],64)}e(4114),e(7642),e(8004),e(3853),e(5876),e(2475),e(5024),e(1698),e(8992),e(4520),e(1454);const g={class:"d-flex align-items-center"},h=["id","onUpdate:modelValue","onChange"],v=["for"],T=["onClick"];function C(o,t,e,s,l,a){return(0,d.uX)(!0),(0,d.CE)(d.FK,null,(0,d.pI)(e.todos,(o=>((0,d.uX)(),(0,d.CE)("li",{key:o.id,class:"list-group-item d-flex justify-content-between"},[(0,d.Lk)("div",g,[(0,d.bo)((0,d.Lk)("input",{id:"todo-"+o.id,type:"checkbox",class:"form-check-input me-2 rounded-circle","onUpdate:modelValue":t=>o.done=t,onChange:()=>e.toggleTodoCompletion(o)},null,40,h),[[n.lH,o.done]]),(0,d.Lk)("label",{for:"todo-"+o.id,class:(0,i.C4)(["form-check-label stretched-link",{completed:o.done}])},(0,i.v_)(o.name),11,v)]),(0,d.Lk)("button",{"data-bs-toggle":"modal","data-bs-target":"#editTodoModal",class:"btn",onClick:()=>e.setCurrentTodo(o)},t[0]||(t[0]=[(0,d.Lk)("i",{class:"bi bi-pencil"},null,-1)]),8,T)])))),128)}var k={props:{todos:{type:Array,required:!0},setCurrentTodo:{type:Function,required:!0},toggleTodoCompletion:{type:Function,required:!0}}},y=e(1241);const L=(0,y.A)(k,[["render",C]]);var w=L;const x={id:"editTodoModal",class:"modal fade",tabIndex:"-1"},N={class:"modal-dialog modal-dialog-centered"},O={class:"modal-content"},F={class:"modal-body"},I={class:"d-flex align-items-center"},E={class:"modal-footer"};function j(o,t,e,s,l,i){return(0,d.uX)(),(0,d.CE)("div",x,[(0,d.Lk)("div",N,[(0,d.Lk)("div",O,[t[5]||(t[5]=(0,d.Lk)("div",{class:"modal-header"},[(0,d.Lk)("h5",{class:"modal-title"},"Edit item"),(0,d.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),(0,d.Lk)("div",F,[(0,d.Lk)("div",I,[(0,d.bo)((0,d.Lk)("input",{type:"checkbox",class:"form-check-input me-2 rounded-circle","onUpdate:modelValue":t[0]||(t[0]=o=>l.todoCopy.done=o),onChange:t[1]||(t[1]=()=>e.toggleTodoCompletion(l.todoCopy))},null,544),[[n.lH,l.todoCopy.done]]),(0,d.bo)((0,d.Lk)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=o=>l.todoCopy.name=o)},null,512),[[n.Jo,l.todoCopy.name]])])]),(0,d.Lk)("div",E,[(0,d.Lk)("button",{onClick:t[3]||(t[3]=o=>e.deleteTodo(e.todo.id)),type:"button",class:"btn btn-danger","data-bs-dismiss":"modal"},t[4]||(t[4]=[(0,d.Lk)("i",{class:"bi bi-trash3"},null,-1),(0,d.eW)(" Delete ")]))])])])])}var q={props:{todo:{type:Object,required:!0},deleteTodo:{type:Function,required:!0},toggleTodoCompletion:{type:Function,required:!0}},data(){return{todoCopy:this.todo}},watch:{todo(o){this.todoCopy=o}}};const X=(0,y.A)(q,[["render",j]]);var A=X,S={data(){return{newTodo:"",todos:JSON.parse(localStorage.getItem("todoItems"))||[],showCompleted:!1,currentTodo:{name:"",done:!1,id:""}}},components:{TodoItem:w,TodoModal:A},computed:{completedTodos(){return this.todos.filter((o=>o.done))},incompleteTodos(){return this.todos.filter((o=>!o.done))},completedCount(){return this.completedTodos.length},uniqueItems(){return[...new Set(this.todos.map((o=>o.name)))].sort()}},methods:{capitalizeFirstLetter(o){return o=o.trim(),o.charAt(0).toUpperCase()+o.slice(1)},toggleShowCompleted(){this.showCompleted=!this.showCompleted},addTodo(){this.newTodo.trim()&&(this.todos.push({id:Date.now(),name:this.capitalizeFirstLetter(this.newTodo),done:!1}),this.newTodo="",this.saveTodos())},toggleTodoCompletion(o){const t=o.done;o.done=!t,setTimeout((()=>{o.done=t,this.saveTodos()}),200)},setCurrentTodo(o){this.currentTodo=o},deleteTodo(o){this.todos=this.todos.filter((t=>t.id!==o)),this.saveTodos()},saveTodos(){localStorage.setItem("todoItems",JSON.stringify(this.todos))}}};const R=(0,y.A)(S,[["render",b]]);var U=R;function _(o,t){return(0,d.uX)(),(0,d.CE)(d.FK,null,[t[0]||(t[0]=(0,d.Lk)("div",{className:"navbar fixed-top shadow bg-dark"},[(0,d.Lk)("div",{className:"container py-1"},[(0,d.Lk)("h4",{className:"m-0"},[(0,d.Lk)("i",{className:"bi bi-check2-square"}),(0,d.eW)(" Todo List")]),(0,d.Lk)("button",{className:"btn btn-outline-secondary",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasRight","aria-controls":"offcanvasRight"},[(0,d.Lk)("i",{className:"bi bi-list"})])])],-1)),t[1]||(t[1]=(0,d.Lk)("div",{className:"offcanvas offcanvas-end",tabIndex:"-1",id:"offcanvasRight","aria-labelledby":"offcanvasRightLabel"},[(0,d.Lk)("div",{className:"offcanvas-header"},[(0,d.Lk)("h5",{className:"offcanvas-title",id:"offcanvasRightLabel"},"Options"),(0,d.Lk)("button",{type:"button",className:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close"})]),(0,d.Lk)("div",{className:"offcanvas-body"},[(0,d.Lk)("button",{className:"btn btn-primary"},"Create New List")])],-1))],64)}const K={},M=(0,y.A)(K,[["render",_]]);var V=M,J={components:{TodoList:U,TopNav:V}};const W=(0,y.A)(J,[["render",l]]);var z=W;(0,n.Ef)(z).mount("#app")}},t={};function e(n){var d=t[n];if(void 0!==d)return d.exports;var s=t[n]={exports:{}};return o[n].call(s.exports,s,s.exports,e),s.exports}e.m=o,function(){var o=[];e.O=function(t,n,d,s){if(!n){var l=1/0;for(c=0;c<o.length;c++){n=o[c][0],d=o[c][1],s=o[c][2];for(var i=!0,a=0;a<n.length;a++)(!1&s||l>=s)&&Object.keys(e.O).every((function(o){return e.O[o](n[a])}))?n.splice(a--,1):(i=!1,s<l&&(l=s));if(i){o.splice(c--,1);var r=d();void 0!==r&&(t=r)}}return t}s=s||0;for(var c=o.length;c>0&&o[c-1][2]>s;c--)o[c]=o[c-1];o[c]=[n,d,s]}}(),function(){e.n=function(o){var t=o&&o.__esModule?function(){return o["default"]}:function(){return o};return e.d(t,{a:t}),t}}(),function(){e.d=function(o,t){for(var n in t)e.o(t,n)&&!e.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:t[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){e.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)}}(),function(){var o={524:0};e.O.j=function(t){return 0===o[t]};var t=function(t,n){var d,s,l=n[0],i=n[1],a=n[2],r=0;if(l.some((function(t){return 0!==o[t]}))){for(d in i)e.o(i,d)&&(e.m[d]=i[d]);if(a)var c=a(e)}for(t&&t(n);r<l.length;r++)s=l[r],e.o(o,s)&&o[s]&&o[s][0](),o[s]=0;return e.O(c)},n=self["webpackChunkturbo_todo"]=self["webpackChunkturbo_todo"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=e.O(void 0,[504],(function(){return e(8195)}));n=e.O(n)})();
//# sourceMappingURL=app.ccc18b3b.js.map