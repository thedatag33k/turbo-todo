if(!self.define){let o,e={};const r=(r,s)=>(r=new URL(r+".js",s).href,e[r]||new Promise((e=>{if("document"in self){const o=document.createElement("script");o.src=r,o.onload=e,document.head.appendChild(o)}else o=r,importScripts(r),e()})).then((()=>{let o=e[r];if(!o)throw new Error(`Module ${r} didn’t register its module`);return o})));self.define=(s,t)=>{const n=o||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let i={};const u=o=>r(o,n),d={module:{uri:n},exports:i,require:u};e[n]=Promise.all(s.map((o=>d[o]||u(o)))).then((o=>(t(...o),i)))}}define(["./workbox-6567b62a"],(function(o){"use strict";o.setCacheNameDetails({prefix:"turbo-todo"}),self.addEventListener("message",(o=>{o.data&&"SKIP_WAITING"===o.data.type&&self.skipWaiting()})),o.precacheAndRoute([{url:"/turbo-todo/css/app.92dce6fd.css",revision:null},{url:"/turbo-todo/css/chunk-vendors.8a42e1de.css",revision:null},{url:"/turbo-todo/favicon.svg",revision:"cbf7afe70ba5c4063f5089544494dd3b"},{url:"/turbo-todo/index.html",revision:"4d69f7b8ba8fe80280c269136da380a5"},{url:"/turbo-todo/js/app.ef73f879.js",revision:null},{url:"/turbo-todo/js/chunk-vendors.eede56b6.js",revision:null},{url:"/turbo-todo/manifest.json",revision:"e05297a27a6d8a3e8cf0a6d2f63a03f9"},{url:"/turbo-todo/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
