if(!self.define){let e,o={};const r=(r,s)=>(r=new URL(r+".js",s).href,o[r]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=o,document.head.appendChild(e)}else e=r,importScripts(r),o()})).then((()=>{let e=o[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(o[i])return;let n={};const u=e=>r(e,i),c={module:{uri:i},exports:n,require:u};o[i]=Promise.all(s.map((e=>c[e]||u(e)))).then((e=>(t(...e),n)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"turbo-todo"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/turbo-todo/css/app.977cc8ce.css",revision:null},{url:"/turbo-todo/css/chunk-vendors.8a42e1de.css",revision:null},{url:"/turbo-todo/dummy.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/turbo-todo/favicon.svg",revision:"cbf7afe70ba5c4063f5089544494dd3b"},{url:"/turbo-todo/index.html",revision:"15e134103d25fa44b44ef586e508eecb"},{url:"/turbo-todo/js/app.37e59f25.js",revision:null},{url:"/turbo-todo/js/chunk-vendors.8cfe6a1d.js",revision:null},{url:"/turbo-todo/manifest.json",revision:"e05297a27a6d8a3e8cf0a6d2f63a03f9"},{url:"/turbo-todo/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
