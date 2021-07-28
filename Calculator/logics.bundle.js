(()=>{"use strict";class e{constructor(e,n,t){this.execute=e,this.undo=n,this.value=t}}const n=(e,n)=>e+n,t=(e,n)=>e-n,u=(e,n)=>e*n,r=(e,n)=>e/n,o=e=>e/100,c=e=>100*e,a=e=>e**2,l=e=>e**.5,i=e=>e**3,s=e=>Math.cbrt(e),d=(e,n)=>e**n,w=(e,n)=>e<0&&n%2==1?-1*(-1*e)**(1/n):e**(1/n),f=e=>Math.E**e,v=e=>Math.log(e)/Math.log(Math.E),m=e=>Math.log10(e),h=e=>10**e,x=e=>1/e,g=e=>Math.log(e),p=function(u){return new e(n,t,u)},N=function(u){return new e(t,n,u)},E=function(n){return new e(u,r,n)},b=function(n){return new e(r,u,n)},y=function(n){return new e(o,c,n)},q=function(n){return new e(a,l,n)},M=function(n){return new e(l,a,n)},S=function(n){return new e(i,s,n)},$=function(n){return new e(s,i,n)},L=function(n){return new e(d,w,n)},V=function(n){return new e(w,d,n)},A=function(n){return new e(f,v,n)},C=function(n){return new e(m,h,n)},O=function(n){return new e(h,m,n)},T=function(n){return new e(x,x,n)},_=function(n){return new e(g,f,n)},F="undo",I="AC",j=[],k=[];class z{constructor(){this.current=0}execute(e){this.current=e.execute(this.current,e.value),Number.isNaN(this.current)||this.current===1/0||(j.push(e),k.push(this.current))}undo(){if(j.length>0){const e=j.pop(),n=k.pop();this.current=e.undo(n,e.value)}}setValue(e,n){this.current=e,n===I&&(j.length=0,k.length=0)}getCurrentValue(){return this.current}}let B=0;const D=["%","2x","x2","3x","x3","exp","log","10x","1/x","ln"],G=document.querySelectorAll(".operation"),H=document.querySelectorAll(".num"),J=document.querySelector(".calc__result"),K=document.querySelector(".equels"),P=document.querySelector(".clear"),Q=document.querySelector(".undo"),R=document.querySelectorAll(".memory-operation"),U=document.querySelector(".negative-operation"),W=["%","2x","x2","3x","x3","exp","log","10x","1/x","ln"],X="Error. Try again";let Y="",Z="",ee="";function ne(){[Z,J.value]=function(e,n,t){const u=Number(e),r=Number(n),o=new Map([["+",new p(r)],["-",new N(r)],["*",new E(r)],["/",new b(r)],["%",new y(r)],["x2",new q(r)],["2x",new M(r)],["x3",new S(r)],["3x",new $(r)],["^",new L(r)],["^(1/",new V(r)],["exp",new A(r)],["log",new C(r)],["10x",new O(r)],["1/x",new T(r)],["ln",new _(r)]]),c=new z;t!==F&&c.setValue(u,t),o.has(t)?c.execute(o.get(t)):t===I?c.setValue(0,t):t===F&&c.undo();const a=Number(c.getCurrentValue().toFixed(10));return Number.isNaN(a)||a===1/0?["0","Error. Try again"]:[`${a}`,a]}(Z,ee,Y),ee=""}function te(e){J.value===X&&(J.value=Z,Y=""),[J.value,Z,ee]=function(e,n,t,u,r){const o=e.target.dataset.value,c="number"==typeof Number(o),a=Number.isNaN(parseInt(o,10));let l=n,i=t,s=u;return[s,l,i]=function(e,n,t,u,r){let o=e,c=n,a=u;const l="."===t,i=""===r,s=-1===e.indexOf("."),d=-1===n.indexOf(".");if(l&&i&&s)o+=".",a+=".";else if(l&&!i&&d){const e=""===n?"0.":".";c+=e,a+=e}return[a,o,c]}(l,i,o,s,r),c&&!a&&""===r?("0"===s&&(s=""),l+=o,s+=o):c&&!a&&""!==r&&(i+=o,s+=o),[s,l,i]}(e,Z,ee,J.value,Y)}function ue(e){if(J.value===X)return void(J.value=Z);const n=e.target.dataset.value;""!==Y&&""!==ee&&ne(),""!==Y&&""===ee&&(J.value=J.value.replace(Y,"")),Y=n,J.value+=n,W.includes(Y)&&ne()}function re(e){if(J.value===X)return void(J.value=Z);""!==ee&&ne();const n=e.target.dataset.value,[t,u]=function(e,n){const t=Number(n),u=new Map([["m+",B+t],["m-",B-t],["mc",0]]);return u.has(e)&&(B=u.get(e)),"mr"===e?[B,!0]:[B,!1]}(n,Z);!0===u&&(J.value=t,Z=`${t}`)}J.value="0",G.forEach((e=>{e.addEventListener("mousedown",ue)})),H.forEach((e=>{e.addEventListener("mousedown",te)})),R.forEach((e=>{e.addEventListener("mousedown",re)})),U.addEventListener("mousedown",(function(){J.value!==X?[J.value,Z,ee]=function(e,n,t,u){let r,o,c;const a=""===n,l=D.includes(n),i=""===u;return a||l?(o=""+-1*Number(t),r=o,[r,o,u]):a||l||i?[e,t,u]:(c=""+-1*Number(u),Number(c)<=0?(r=`${t}${n}(${c})`,[r,t,c]):(r=`${t}${n}${c}`,[r,t,c]))}(J.value,Y,Z,ee):J.value=Z})),K.addEventListener("mousedown",(function(){J.value!==X?""!==ee&&(ne(),Y=""):J.value=Z})),P.addEventListener("mousedown",(function(){Y=I,ne(),Y=""})),Q.addEventListener("mousedown",(function(){Y=F,ne(),Y=""}))})();