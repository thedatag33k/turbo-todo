if(!self.define){let o,e={};const r=(r,s)=>(r=new URL(r+".js",s).href,e[r]||new Promise((e=>{if("document"in self){const o=document.createElement("script");o.src=r,o.onload=e,document.head.appendChild(o)}else o=r,importScripts(r),e()})).then((()=>{let o=e[r];if(!o)throw new Error(`Module ${r} didn’t register its module`);return o})));self.define=(s,t)=>{const i=o||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let n={};const u=o=>r(o,i),d={module:{uri:i},exports:n,require:u};e[i]=Promise.all(s.map((o=>d[o]||u(o)))).then((o=>(t(...o),n)))}}define(["./workbox-6567b62a"],(function(o){"use strict";o.setCacheNameDetails({prefix:"turbo-todo"}),self.addEventListener("message",(o=>{o.data&&"SKIP_WAITING"===o.data.type&&self.skipWaiting()})),o.precacheAndRoute([{url:"/turbo-todo/css/app.b50acc7a.css",revision:null},{url:"/turbo-todo/css/chunk-vendors.8a42e1de.css",revision:null},{url:"/turbo-todo/custom-service-worker.js",revision:"347dd19f2b6239d5881e6ae6c103867f"},{url:"/turbo-todo/dummy.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/turbo-todo/favicon.svg",revision:"cbf7afe70ba5c4063f5089544494dd3b"},{url:"/turbo-todo/index.html",revision:"93595de299847147f319137745b55bf1"},{url:"/turbo-todo/js/app.12c315ec.js",revision:null},{url:"/turbo-todo/js/chunk-vendors.83541bef.js",revision:null},{url:"/turbo-todo/manifest.json",revision:"e05297a27a6d8a3e8cf0a6d2f63a03f9"},{url:"/turbo-todo/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
