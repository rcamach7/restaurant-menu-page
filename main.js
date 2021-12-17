(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>w});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(211),t.b),l=new URL(t(740),t.b),p=new URL(t(945),t.b),u=new URL(t(749),t.b),h=new URL(t(144),t.b),f=i()(o()),g=s()(d),m=s()(l),v=s()(p),b=s()(u),x=s()(h);f.push([n.id,'html {\n    margin: 0 auto;\n    font-family: "Lucida Grande", serif;\n}\n\nbody {\n    margin: 0;\n    background-image: url('+g+");\n    background-attachment: fixed;\n    background-size: cover;\n\n}\n\n.root {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n/*Styling For All Title Elements*/\n.titleContainer {\n    width: 100%;\n\n    background-color: rgba(0, 0, 0, 0.8);\n    color: white;\n\n    text-align: center;\n}\n\n.logo {\n    margin: 0;\n    font-size: 75px;\n}\n\n.navContainer {\n    height: 50px;\n\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n}\n\n.navLink {\n    padding: 10px;\n    color: white;\n\n    font-size: 25px;\n    list-style: none;\n\n    cursor: pointer;\n}\n\n.navLink:hover {\n    transform: scale(1.25);\n    border-top: white solid 1px;\n}\n\n/*Home Styling*/\n.homePage {\n    width: 700px;\n    height: 600px;\n    margin-top: 50px;\n    border-radius: 1%;\n    padding: 20px;\n\n    background-color: rgba(0, 0, 0, 0.8);\n    text-align: center;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.customerHook, .closer {\n    font-size: 25px;\n    color: white;\n}\n\n.chefContainer {\n    width: 250px;\n    height: 300px;\n\n    border-radius: 50%;\n    background-image: url("+m+");\n    background-size: cover;\n}\n\n/*MenuPage Styling*/\n.menuPage {\n    width: 700px;\n    margin-top: 50px;\n    border-radius: 1%;\n    padding: 20px;\n\n    background-color: rgba(0, 0, 0, 0.8);\n    text-align: center;\n}\n\n.dishOne, .dishTwo {\n    width: 100%;\n    display: flex;\n    border-bottom: white dashed 1px;\n}\n\n.dishThree {\n    width: 100%;\n    display: flex;\n}\n\n.dishOneImage {\n    width: 200px;\n    height: 200px;\n\n    background-image: url("+v+");\n    background-size: cover;\n}\n\n.dishTwoImage {\n    width: 200px;\n    height: 200px;\n\n    background-image: url("+b+");\n    background-size: cover;\n}\n\n.dishThreeImage {\n    width: 200px;\n    height: 200px;\n\n    background-image: url("+x+");\n    background-size: cover;\n}\n\n\n\n.ingredients {\n    color: white;\n    text-align: left;\n    padding-left: 200px;\n    padding-top: 10px;\n}\n\n/*Footer*/\n/*.footer {*/\n/*    font-weight: bolder;*/\n/*    padding: 10px;*/\n/*    color: white;*/\n/*    background-color: black;*/\n/*}*/\n\n\n\n\n\n",""]);const w=f},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var f=o(h,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},740:(n,e,t)=>{n.exports=t.p+"20ea78c98f7ffe5283ed.jpeg"},749:(n,e,t)=>{n.exports=t.p+"c271fb0d12ba6ab6827b.png"},945:(n,e,t)=>{n.exports=t.p+"e24c2e32381bd1826411.png"},144:(n,e,t)=>{n.exports=t.p+"4170938905a40a136d29.png"},211:(n,e,t)=>{n.exports=t.p+"b53048b9c5b1f24ceff8.png"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),u=t.n(p),h=t(28),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),e()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const g=document.createElement("div");g.classList.add("homePage"),g.appendChild(function(){const n=document.createElement("p");return n.classList.add("customerHook"),n.textContent="All you can eat, dog dinner establishment! Here at Lazy Dog, we are paw-sionate about the food we serve! Human pets must be leashed!",n}()),g.appendChild(function(){const n=document.createElement("div");return n.classList.add("chefContainer"),n}()),g.appendChild(function(){const n=document.createElement("p");return n.classList.add("closer"),n.textContent="Come dine with the worlds greatest chef! Chef Doritos",n}());const m=g,v=document.createElement("div");function b(n,e){const t=document.createElement("div");t.classList.add("dish"+n);const r=document.createElement("div");r.classList.add(`dish${n}Image`);const o=document.createElement("div");o.classList.add("ingredients");for(let n=0;n<e.length;n++){const t=document.createElement("p");t.textContent=e[n],o.appendChild(t)}return t.appendChild(r),t.appendChild(o),t}v.classList.add("menuPage"),v.appendChild(b("One",["The Classic!","- freshly sourced","- gluten free","- never frozen"])),v.appendChild(b("Two",["Chicken Soup","- fresh chickens","- low sodium broth","- protein packed"])),v.appendChild(b("Three",["The Mixed Bowl!","- best of all worlds","- served with a side of jerky","- protein packed"]));const x=v,w=document.getElementById("content");w.classList.add("root"),w.appendChild(function(){const n=document.createElement("div");n.classList.add("titleContainer");const e=document.createElement("h1");return e.textContent="🅻🅰🆉🆈 🅱🅾🆈",e.classList.add("logo"),n.appendChild(e),n.appendChild(function(){const n=document.createElement("nav");n.classList.add("navContainer");const e=["🅷🅾🅼🅴","🅼🅴🅽🆄"];for(let t=0;t<e.length;t++){const r=document.createElement("li");r.classList.add("navLink"),r.textContent=e[t],r.addEventListener("click",(n=>{w.removeChild(w.childNodes[2]),"🅷🅾🅼🅴"===n.target.textContent?w.appendChild(m):w.appendChild(x)})),n.appendChild(r)}return n}()),n}()),w.appendChild(m)})()})();