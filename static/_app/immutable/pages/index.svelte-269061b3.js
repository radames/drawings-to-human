import{S as Oe,i as Pe,s as Ce,e as x,k as D,c as S,a as I,m as R,d as _,b as n,K as mt,g as J,J as a,t as C,h as M,L as G,E as Q,M as $e,N as $,O as X,P as Yt,Q as Jt,j as St,R as Ue,T as bt,U as Tt,V as fa,W as _t,v as ga,l as Qt,w as Ae,x as Ne,y as De,q as Re,o as Be,B as je}from"../chunks/index-bcf2726a.js";import{w as ge,b as ua}from"../chunks/paths-d3bcbd10.js";const Ve=[{color:[0,0,0],label:"background"},{color:[255,140,0],label:"bag"},{color:[255,255,0],label:"belt"},{color:[255,250,205],label:"dress"},{color:[130,165,180],label:"earrings"},{color:[0,100,0],label:"eyeglass"},{color:[16,78,139],label:"face"},{color:[245,222,179],label:"footwear"},{color:[213,140,88],label:"gloves"},{color:[255,0,0],label:"hair"},{color:[127,255,212],label:"headwear"},{color:[70,130,180],label:"leggings"},{color:[90,140,90],label:"necklace"},{color:[50,205,50],label:"neckwear"},{color:[220,220,220],label:"outer"},{color:[211,211,211],label:"pants"},{color:[50,205,174],label:"ring"},{color:[185,210,205],label:"rompers"},{color:[144,238,144],label:"skin"},{color:[250,235,215],label:"skirt"},{color:[160,140,88],label:"socks"},{color:[225,141,151],label:"tie"},{color:[255,250,250],label:"top"},{color:[50,155,250],label:"wrist wearing"}],Xt="https://hf.space/embed/CVPR/Text2Human",yt=["/samples/MEN-Pants-id_00002565-02_1_front_segm.png","/samples/MEN-Pants-id_00005213-02_4_full_segm.png","/samples/WOMEN-Blouses_Shirts-id_00002356-02_4_full_segm.png","/samples/WOMEN-Blouses_Shirts-id_00004090-03_7_additional_segm.png","/samples/WOMEN-Cardigans-id_00000853-01_2_side_segm.png","/samples/WOMEN-Cardigans-id_00000899-02_1_front_segm.png","/samples/WOMEN-Cardigans-id_00006462-02_7_additional_segm.png","/samples/WOMEN-Dresses-id_00000021-05_1_front_segm.png","/samples/WOMEN-Dresses-id_00002430-04_1_front_segm.png","/samples/WOMEN-Dresses-id_00002966-01_7_additional_segm.png","/samples/WOMEN-Dresses-id_00007332-01_3_back_segm.png","/samples/WOMEN-Graphic_Tees-id_00007242-01_4_full_segm.png","/samples/WOMEN-Jackets_Coats-id_00005263-06_1_front_segm.png","/samples/WOMEN-Jackets_Coats-id_00006296-05_7_additional_segm.png","/samples/WOMEN-Rompers_Jumpsuits-id_00004575-02_1_front_segm.png","/samples/WOMEN-Skirts-id_00006761-01_1_front_segm.png","/samples/WOMEN-Sweaters-id_00004667-01_4_full_segm.png","/samples/WOMEN-Tees_Tanks-id_00001620-02_4_full_segm.png","/samples/WOMEN-Tees_Tanks-id_00005288-01_2_side_segm.png","/samples/WOMEN-Tees_Tanks-id_00006566-04_4_full_segm.png"],Zt=["lower clothing texture","upper clothing texture","outer clothing texture"],Kt=["pure color","stripe/spline","plaid/lattice","floral","denim"];function pa(){return BigInt(0xb7dd73e137d20800&((1<<63)-1)*Math.random())}const wt=ge(),Et=ge(),kt=ge(),Le=ge(),xt=ge({texture:"",seed:pa(),steps:10}),Ie=ge(!1),Ge=ge(!1);function ea(r,t,e){const l=r.slice();return l[3]=t[e],l[5]=e,l}function ta(r){let t,e,l,h,i,u,p,m,y,d,w,b;return{c(){t=x("div"),e=x("input"),u=D(),p=x("label"),m=x("img"),b=D(),this.h()},l(s){t=S(s,"DIV",{class:!0});var T=I(t);e=S(T,"INPUT",{type:!0,name:!0,id:!0,class:!0}),u=R(T),p=S(T,"LABEL",{for:!0,class:!0});var O=I(p);m=S(O,"IMG",{src:!0,alt:!0,class:!0}),O.forEach(_),b=R(T),T.forEach(_),this.h()},h(){n(e,"type","radio"),n(e,"name","samples"),n(e,"id",l="sample-"+r[5]),e.value=h=r[5],e.disabled=i=r[0]===!0,n(e,"class","svelte-1gwcbp"),mt(m.src,y=ua+r[3])||n(m,"src",y),n(m,"alt",d=r[3]),n(m,"class","svelte-1gwcbp"),n(p,"for",w="sample-"+r[5]),n(p,"class","svelte-1gwcbp"),n(t,"class","snap-always snap-start")},m(s,T){J(s,t,T),a(t,e),a(t,u),a(t,p),a(p,m),a(t,b)},p(s,T){T&1&&i!==(i=s[0]===!0)&&(e.disabled=i)},d(s){s&&_(t)}}}function va(r){let t,e,l,h,i,u,p,m,y=yt,d=[];for(let w=0;w<y.length;w+=1)d[w]=ta(ea(r,y,w));return{c(){t=x("div"),e=x("h4"),l=C("Select a Template"),h=D(),i=x("form"),u=x("div");for(let w=0;w<d.length;w+=1)d[w].c();this.h()},l(w){t=S(w,"DIV",{});var b=I(t);e=S(b,"H4",{class:!0});var s=I(e);l=M(s,"Select a Template"),s.forEach(_),h=R(b),i=S(b,"FORM",{class:!0});var T=I(i);u=S(T,"DIV",{class:!0});var O=I(u);for(let c=0;c<d.length;c+=1)d[c].l(O);O.forEach(_),T.forEach(_),b.forEach(_),this.h()},h(){n(e,"class","font-bold mt-6 mb-2 my-6 leading-6"),n(u,"class","samples  svelte-1gwcbp"),n(i,"class","svelte-1gwcbp")},m(w,b){J(w,t,b),a(t,e),a(e,l),a(t,h),a(t,i),a(i,u);for(let s=0;s<d.length;s+=1)d[s].m(u,null);p||(m=G(i,"input",r[1]),p=!0)},p(w,[b]){if(b&1){y=yt;let s;for(s=0;s<y.length;s+=1){const T=ea(w,y,s);d[s]?d[s].p(T,b):(d[s]=ta(T),d[s].c(),d[s].m(u,null))}for(;s<d.length;s+=1)d[s].d(1);d.length=y.length}},i:Q,o:Q,d(w){w&&_(t),$e(d,w),p=!1,m()}}}function ma(r,t,e){let l,h;return $(r,kt,u=>e(2,l=u)),$(r,Ie,u=>e(0,h=u)),[h,async u=>{u.preventDefault();const p=yt[parseInt(u.target.value)];if(p){const m=await fetch(ua+p).then(y=>y.blob());X(kt,l=m,l)}}]}class ba extends Oe{constructor(t){super(),Pe(this,t,ma,va,Ce,{})}}function aa(r,t,e){const l=r.slice();return l[2]=t[e],l[7]=e,l}function ra(r){let t,e,l,h,i,u,p,m,y,d,w,b,s=r[2].label+"",T,O,c;return{c(){t=x("div"),e=x("input"),u=D(),p=x("label"),m=Yt("svg"),y=Yt("rect"),w=D(),b=x("span"),T=C(s),c=D(),this.h()},l(v){t=S(v,"DIV",{class:!0});var E=I(t);e=S(E,"INPUT",{name:!0,type:!0,id:!0,class:!0}),u=R(E),p=S(E,"LABEL",{for:!0,class:!0});var g=I(p);m=Jt(g,"svg",{width:!0,height:!0,viewBox:!0,class:!0});var o=I(m);y=Jt(o,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0}),I(y).forEach(_),o.forEach(_),w=R(g),b=S(g,"SPAN",{class:!0});var f=I(b);T=M(f,s),f.forEach(_),g.forEach(_),c=R(E),E.forEach(_),this.h()},h(){n(e,"name","color"),e.checked=l=r[7]==da,n(e,"type","radio"),n(e,"id",h="color-"+r[7]),e.value=i=r[7],n(e,"class","svelte-1oy4poo"),n(y,"x","0"),n(y,"y","0"),n(y,"width","20"),n(y,"height","20"),n(y,"fill",d="rgb("+r[2].color.join(",")+")"),n(m,"width","20"),n(m,"height","20"),n(m,"viewBox","0 0 20 20"),n(m,"class","svelte-1oy4poo"),n(b,"class","svelte-1oy4poo"),n(p,"for",O="color-"+r[7]),n(p,"class","svelte-1oy4poo"),n(t,"class","snap-always snap-start")},m(v,E){J(v,t,E),a(t,e),a(t,u),a(t,p),a(p,m),a(m,y),a(p,w),a(p,b),a(b,T),a(t,c)},p:Q,d(v){v&&_(t)}}}function _a(r){let t,e,l,h,i,u,p,m,y,d,w,b,s,T=r[0].size+"",O,c,v,E=Ve,g=[];for(let o=0;o<E.length;o+=1)g[o]=ra(aa(r,E,o));return{c(){t=x("form"),e=x("h4"),l=C("Set the Brush Type"),h=D(),i=x("div");for(let o=0;o<g.length;o+=1)g[o].c();u=D(),p=x("h4"),m=C("Set the Brush Size"),y=D(),d=x("div"),w=x("input"),b=D(),s=x("label"),O=C(T),this.h()},l(o){t=S(o,"FORM",{});var f=I(t);e=S(f,"H4",{class:!0});var k=I(e);l=M(k,"Set the Brush Type"),k.forEach(_),h=R(f),i=S(f,"DIV",{class:!0,name:!0});var P=I(i);for(let U=0;U<g.length;U+=1)g[U].l(P);P.forEach(_),u=R(f),p=S(f,"H4",{class:!0});var z=I(p);m=M(z,"Set the Brush Size"),z.forEach(_),y=R(f),d=S(f,"DIV",{class:!0});var A=I(d);w=S(A,"INPUT",{min:!0,max:!0,step:!0,name:!0,type:!0}),b=R(A),s=S(A,"LABEL",{class:!0,for:!0});var L=I(s);O=M(L,T),L.forEach(_),A.forEach(_),f.forEach(_),this.h()},h(){n(e,"class","font-bold mt-6 mb-2 leading-6 my-3"),n(i,"class","colors svelte-1oy4poo"),n(i,"name","colors"),n(p,"class","font-bold mt-6 mb-2 my-6 leading-6"),w.value="10",n(w,"min","1"),n(w,"max","50"),n(w,"step","1"),n(w,"name","brush"),n(w,"type","range"),n(s,"class","pl-2 svelte-1oy4poo"),n(s,"for","brush"),n(d,"class","brush svelte-1oy4poo")},m(o,f){J(o,t,f),a(t,e),a(e,l),a(t,h),a(t,i);for(let k=0;k<g.length;k+=1)g[k].m(i,null);a(t,u),a(t,p),a(p,m),a(t,y),a(t,d),a(d,w),a(d,b),a(d,s),a(s,O),c||(v=G(t,"input",r[1]),c=!0)},p(o,[f]){if(f&0){E=Ve;let k;for(k=0;k<E.length;k+=1){const P=aa(o,E,k);g[k]?g[k].p(P,f):(g[k]=ra(P),g[k].c(),g[k].m(i,null))}for(;k<g.length;k+=1)g[k].d(1);g.length=E.length}f&1&&T!==(T=o[0].size+"")&&St(O,T)},i:Q,o:Q,d(o){o&&_(t),$e(g,o),c=!1,v()}}}const da=6;function ya(r,t,e){let l;$(r,Le,y=>e(0,l=y));const{color:h,label:i}=Ve[da];let u=`rgb(${h.join(",")})`,p=40;return X(Le,l={color:u,size:p,label:i},l),[l,async y=>{const d=y.target;if(d.name==="color"){const w=parseInt(d.value),{color:b,label:s}=Ve[w];u=`rgb(${b.join(",")})`,X(Le,l={color:u,size:p,label:s},l)}else d.name==="brush"&&(p=parseInt(d.value),X(Le,l={color:u,size:p,label:i},l))},h]}class wa extends Oe{constructor(t){super(),Pe(this,t,ya,_a,Ce,{})}}function la(r,t,e){const l=r.slice();return l[10]=t[e],l[12]=e,l}function oa(r,t,e){const l=r.slice();return l[13]=t[e],l}function sa(r){let t,e=r[13]+"",l,h,i;return{c(){t=x("option"),l=C(e),i=C("`"),this.h()},l(u){t=S(u,"OPTION",{});var p=I(t);l=M(p,e),p.forEach(_),i=M(u,"`"),this.h()},h(){t.__value=h=r[13],t.value=t.__value},m(u,p){J(u,t,p),a(t,l),J(u,i,p)},p:Q,d(u){u&&_(t),u&&_(i)}}}function na(r){let t,e,l=r[10]+"",h,i,u,p,m=Kt,y=[];for(let d=0;d<m.length;d+=1)y[d]=sa(oa(r,m,d));return{c(){t=x("select"),e=x("option"),h=C(l);for(let d=0;d<y.length;d+=1)y[d].c();this.h()},l(d){t=S(d,"SELECT",{name:!0,class:!0});var w=I(t);e=S(w,"OPTION",{});var b=I(e);h=M(b,l),b.forEach(_);for(let s=0;s<y.length;s+=1)y[s].l(w);w.forEach(_),this.h()},h(){e.disabled=!0,e.selected=!0,e.__value=i=r[10],e.value=e.__value,n(t,"name",u="texture"+r[12]),t.disabled=p=r[3]===!0,n(t,"class","svelte-uoay71")},m(d,w){J(d,t,w),a(t,e),a(e,h);for(let b=0;b<y.length;b+=1)y[b].m(t,null)},p(d,w){if(w&0){m=Kt;let b;for(b=0;b<m.length;b+=1){const s=oa(d,m,b);y[b]?y[b].p(s,w):(y[b]=sa(s),y[b].c(),y[b].m(t,null))}for(;b<y.length;b+=1)y[b].d(1);y.length=m.length}w&8&&p!==(p=d[3]===!0)&&(t.disabled=p)},d(d){d&&_(t),$e(y,d)}}}function Ea(r){let t,e,l,h,i,u,p,m,y,d,w,b,s,T,O,c,v,E,g,o,f,k,P,z,A,L,U,q=Zt,H=[];for(let B=0;B<q.length;B+=1)H[B]=na(la(r,q,B));return{c(){t=x("form"),e=x("h4"),l=C("Texture Description"),h=D(),i=x("div");for(let B=0;B<H.length;B+=1)H[B].c();u=D(),p=x("h4"),m=C("Random Seed"),y=D(),d=x("input"),b=D(),s=x("button"),T=C("Random"),c=D(),v=x("h4"),E=C("Sample Steps"),g=D(),o=x("div"),f=x("input"),P=D(),z=x("label"),A=C(r[2]),this.h()},l(B){t=S(B,"FORM",{});var N=I(t);e=S(N,"H4",{class:!0});var j=I(e);l=M(j,"Texture Description"),j.forEach(_),h=R(N),i=S(N,"DIV",{class:!0});var ee=I(i);for(let se=0;se<H.length;se+=1)H[se].l(ee);ee.forEach(_),u=R(N),p=S(N,"H4",{class:!0});var Z=I(p);m=M(Z,"Random Seed"),Z.forEach(_),y=R(N),d=S(N,"INPUT",{type:!0,name:!0,placeholder:!0,class:!0}),b=R(N),s=S(N,"BUTTON",{class:!0});var ve=I(s);T=M(ve,"Random"),ve.forEach(_),c=R(N),v=S(N,"H4",{class:!0});var me=I(v);E=M(me,"Sample Steps"),me.forEach(_),g=R(N),o=S(N,"DIV",{class:!0});var Y=I(o);f=S(Y,"INPUT",{type:!0,name:!0,min:!0,max:!0,step:!0,class:!0}),P=R(Y),z=S(Y,"LABEL",{class:!0,for:!0});var be=I(z);A=M(be,r[2]),be.forEach(_),Y.forEach(_),N.forEach(_),this.h()},h(){n(e,"class","font-bold mt-6 mb-2 my-6 leading-6"),n(i,"class","sections svelte-uoay71"),n(p,"class","font-bold mt-6 mb-2 my-6 leading-6"),n(d,"type","Number"),n(d,"name","seed"),n(d,"placeholder","Integer Seed"),d.disabled=w=r[3]===!0,n(d,"class","svelte-uoay71"),s.disabled=O=r[3]===!0,n(s,"class","svelte-uoay71"),n(v,"class","font-bold mt-6 mb-2 my-6 leading-6"),n(f,"type","range"),n(f,"name","steps"),n(f,"min","10"),n(f,"max","300"),n(f,"step","1"),f.disabled=k=r[3]===!0,n(f,"class","svelte-uoay71"),n(z,"class","pl-2 svelte-uoay71"),n(z,"for","steps"),n(o,"class","flex")},m(B,N){J(B,t,N),a(t,e),a(e,l),a(t,h),a(t,i);for(let j=0;j<H.length;j+=1)H[j].m(i,null);a(t,u),a(t,p),a(p,m),a(t,y),a(t,d),Ue(d,r[1]),a(t,b),a(t,s),a(s,T),a(t,c),a(t,v),a(v,E),a(t,g),a(t,o),a(o,f),Ue(f,r[2]),a(o,P),a(o,z),a(z,A),r[8](t),L||(U=[G(d,"input",r[5]),G(s,"click",bt(r[6])),G(f,"change",r[7]),G(f,"input",r[7]),G(t,"input",r[4])],L=!0)},p(B,[N]){if(N&8){q=Zt;let j;for(j=0;j<q.length;j+=1){const ee=la(B,q,j);H[j]?H[j].p(ee,N):(H[j]=na(ee),H[j].c(),H[j].m(i,null))}for(;j<H.length;j+=1)H[j].d(1);H.length=q.length}N&8&&w!==(w=B[3]===!0)&&(d.disabled=w),N&2&&Ue(d,B[1]),N&8&&O!==(O=B[3]===!0)&&(s.disabled=O),N&8&&k!==(k=B[3]===!0)&&(f.disabled=k),N&4&&Ue(f,B[2]),N&4&&St(A,B[2])},i:Q,o:Q,d(B){B&&_(t),$e(H,B),r[8](null),L=!1,Tt(U)}}}function ka(r,t,e){let l,h;$(r,xt,s=>e(9,l=s)),$(r,Ie,s=>e(3,h=s));const i=()=>{const s=u.elements;X(xt,l={texture:`${s.texture0.value},${s.texture1.value},${s.texture2.value}`,seed:BigInt(s.seed.value),steps:parseInt(s.steps.value)},l)};let u,p=l.seed,m=l.steps;function y(){p=this.value,e(1,p)}const d=()=>e(1,p=pa());function w(){m=fa(this.value),e(2,m)}function b(s){_t[s?"unshift":"push"](()=>{u=s,e(0,u)})}return[u,p,m,h,i,y,d,w,b]}class xa extends Oe{constructor(t){super(),Pe(this,t,ka,Ea,Ce,{})}}var Sa=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Ta(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ha={exports:{}};(function(r,t){(function(e,l){r.exports=l()})(typeof self!="undefined"?self:Sa,function(){return function(e){var l={};function h(i){if(l[i])return l[i].exports;var u=l[i]={i,l:!1,exports:{}};return e[i].call(u.exports,u,u.exports,h),u.l=!0,u.exports}return h.m=e,h.c=l,h.d=function(i,u,p){h.o(i,u)||Object.defineProperty(i,u,{enumerable:!0,get:p})},h.r=function(i){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},h.t=function(i,u){if(1&u&&(i=h(i)),8&u||4&u&&typeof i=="object"&&i&&i.__esModule)return i;var p=Object.create(null);if(h.r(p),Object.defineProperty(p,"default",{enumerable:!0,value:i}),2&u&&typeof i!="string")for(var m in i)h.d(p,m,function(y){return i[y]}.bind(null,m));return p},h.n=function(i){var u=i&&i.__esModule?function(){return i.default}:function(){return i};return h.d(u,"a",u),u},h.o=function(i,u){return Object.prototype.hasOwnProperty.call(i,u)},h.p="",h(h.s=0)}([function(e,l,h){function i(s,T){return function(O){if(Array.isArray(O))return O}(s)||function(O,c){if(Symbol.iterator in Object(O)||Object.prototype.toString.call(O)==="[object Arguments]"){var v=[],E=!0,g=!1,o=void 0;try{for(var f,k=O[Symbol.iterator]();!(E=(f=k.next()).done)&&(v.push(f.value),!c||v.length!==c);E=!0);}catch(P){g=!0,o=P}finally{try{E||k.return==null||k.return()}finally{if(g)throw o}}return v}}(s,T)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function u(s){return function(T){if(Array.isArray(T)){for(var O=0,c=new Array(T.length);O<T.length;O++)c[O]=T[O];return c}}(s)||function(T){if(Symbol.iterator in Object(T)||Object.prototype.toString.call(T)==="[object Arguments]")return Array.from(T)}(s)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function p(s,T){for(var O=0;O<T.length;O++){var c=T[O];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(s,c.key,c)}}h.r(l);var m=/^#?[0-9A-Fa-f]{1,2}[0-9A-Fa-f]{1,2}[0-9A-Fa-f]{1,2}$/,y=/^rgb\((\s+)?[0-9]{1,3},(\s+)?[0-9]{1,3},(\s+)?[0-9]{1,3}(\s+)?\)$/,d=function(){function s(){(function(c,v){if(!(c instanceof v))throw new TypeError("Cannot call a class as a function")})(this,s),this.canvases={}}var T,O;return T=s,(O=[{key:"parseColor",value:function(c){var v=m.test(c),E=y.test(c);if(!v&&!E)throw new Error("Color is not correct format. #123123 or rgb(123, 123, 123) format required.");if(v){var g=c[0]==="#"?c.slice(1):c;return g=g.length===3?g.split("").reduce(function(z,A){return[].concat(u(z),[A,A])},[]).join(""):g,{r:parseInt(g.slice(0,2),16),g:parseInt(g.slice(2,4),16),b:parseInt(g.slice(4,6),16)}}if(E){var o=i(c.replace(/rgb|\s+|\(|\)/g,"").split(",").map(function(z){return parseInt(z)}),3),f=o[0],k=o[1],P=o[2];return{r:f=f>255?255:f,g:k=k>255?255:k,b:P=P>255?255:P}}}},{key:"make",value:function(c){var v=c.size,E=c.color;try{v*=window.devicePixelRatio;var g=this.parseColor(E),o=JSON.stringify(g);if(this.canvases[o]=this.canvases[o]||{},this.canvases[o][v]!=null)return this.canvases[o][v];var f=document.createElement("canvas");v+=v%2,f.width=v,f.height=v;for(var k=f.getContext("2d"),P=k.createImageData(v,v),z=0;z<P.data.length;z+=4)P.data[z]=255,P.data[z+1]=255,P.data[z+2]=255,P.data[z+3]=0;return this.plotCircle(2*v,4*v*(v/2),v/2,P,v,g),this.fillCircle(P,g),k.putImageData(P,0,0),this.canvases[o][v]=f,f}catch(A){console.error(A)}}},{key:"plotCircle",value:function(c,v,E,g,o,f){var k=-E,P=0,z=2-2*E;do{var A=c-4*(k+1)+(v+4*o*(P-1));g.data[A+0]=f.r,g.data[A+1]=f.g,g.data[A+2]=f.b,g.data[A+3]=255;var L=c-P*(4*o)+(v-4*(k+1));g.data[L+0]=f.r,g.data[L+1]=f.g,g.data[L+2]=f.b,g.data[L+3]=255;var U=c+4*k+(v-P*(4*o));g.data[U+0]=f.r,g.data[U+1]=f.g,g.data[U+2]=f.b,g.data[U+3]=255;var q=c+4*o*(P-1)+(v+4*k);g.data[q+0]=f.r,g.data[q+1]=f.g,g.data[q+2]=f.b,g.data[q+3]=255,(E=z)<=P&&(z+=2*++P+1),(E>k||z>P)&&(z+=2*++k+1)}while(k<0)}},{key:"fillCircle",value:function(c,v){for(var E=4*c.width,g=1;g<c.height-1;g+=1)for(var o=!1,f=!1,k=!1,P=0;P<E;P+=4){var z=E*g+P,A=c.data[z+3],L=A===255;L&&!o?o=!0:A===0&&o?f=!0:L&&o&&f&&(k=!0),o&&f&&!k&&(c.data[z]=v.r,c.data[z+1]=v.g,c.data[z+2]=v.b,c.data[z+3]=255)}}}])&&p(T.prototype,O),s}();function w(s,T){for(var O=0;O<T.length;O++){var c=T[O];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(s,c.key,c)}}var b=function(){function s(c){(function(v,E){if(!(v instanceof E))throw new TypeError("Cannot call a class as a function")})(this,s),this.canvas=c,this.context=c.getContext("2d"),this.stampMaker=new d,this.configPixelRatio()}var T,O;return T=s,(O=[{key:"configPixelRatio",value:function(){var c=this.canvas,v=c.width,E=c.height;this.canvas.width=v*this.dpr,this.canvas.height=E*this.dpr,this.canvas.style.width="".concat(v,"px"),this.canvas.style.height="".concat(E,"px"),this.context.scale(this.dpr,this.dpr),this.context.imageSmoothingEnabled=!1}},{key:"exportAsPNG",value:function(c){var v=this;return new Promise(function(E){var g=document.createElement("canvas"),o=g.getContext("2d"),f=v.canvas,k=f.width,P=f.height,z=k/v.dpr,A=P/v.dpr;g.width=z,g.height=A,o.imageSmoothingEnabled=!1,o.drawImage(v.canvas,0,0,k,P,0,0,z,A),g.toBlob(function(L){L.lastModifedDate=new Date,L.name=c,E(L)})})}},{key:"distanceBetween",value:function(c,v){return Math.sqrt(Math.pow(v.x-c.x,2)+Math.pow(v.y-c.y,2))}},{key:"angleBetween",value:function(c,v){return Math.atan2(v.x-c.x,v.y-c.y)}},{key:"draw",value:function(c){var v=c.from,E=c.to,g=c.size,o=c.color;this.context.globalCompositeOperation="source-over",this.brush({from:v,to:E,size:g,color:o})}},{key:"erase",value:function(c){var v=c.from,E=c.to,g=c.size;this.context.globalCompositeOperation="destination-out",this.brush({from:v,to:E,size:g,color:"#000000"})}},{key:"brush",value:function(c){var v=this,E=c.from,g=c.to,o=c.size,f=c.color,k=(o-o%2)/2,P=this.stampMaker.make({size:o,color:f});if(E.x!==g.x||E.y!==g.y)for(var z=this.distanceBetween(E,g),A=this.angleBetween(E,g),L=function(B){var N=E.x+Math.sin(A)*B-k,j=E.y+Math.cos(A)*B-k;window.requestAnimationFrame(function(){v.context.drawImage(P,Math.round(N),Math.round(j),o,o)})},U=0;U<z;U+=1)L(U);else{var q=E.x-k,H=E.y-k;this.context.drawImage(P,Math.round(q),Math.round(H),o,o)}}},{key:"dpr",get:function(){return window.devicePixelRatio||1}}])&&w(T.prototype,O),s}();l.default=b}])})})(ha);var Ia=Ta(ha.exports);function Oa(r){var w;let t,e,l,h,i,u,p=((w=r[0])==null?void 0:w.label)+"",m,y,d;return{c(){t=x("div"),e=x("canvas"),l=D(),h=x("canvas"),i=D(),u=x("span"),m=C(p),this.h()},l(b){t=S(b,"DIV",{class:!0});var s=I(t);e=S(s,"CANVAS",{class:!0,width:!0,height:!0}),I(e).forEach(_),l=R(s),h=S(s,"CANVAS",{class:!0,width:!0,height:!0}),I(h).forEach(_),i=R(s),u=S(s,"SPAN",{class:!0});var T=I(u);m=M(T,p),T.forEach(_),s.forEach(_),this.h()},h(){n(e,"class","canvas svelte-1ku7duq"),n(e,"width","256"),n(e,"height","512"),n(h,"class","brush svelte-1ku7duq"),n(h,"width","10"),n(h,"height","10"),n(u,"class","label svelte-1ku7duq"),n(t,"class","inline-block relative overflow-clip")},m(b,s){J(b,t,s),a(t,e),r[9](e),a(t,l),a(t,h),r[10](h),a(t,i),a(t,u),a(u,m),y||(d=[G(e,"touchmove",Ma),G(e,"pointerenter",Pa),G(e,"pointerup",r[3]),G(e,"pointerleave",r[3]),G(e,"pointercancel",r[3]),G(e,"pointerout",r[3]),G(e,"pointermove",r[5]),G(e,"pointerdown",r[4])],y=!0)},p(b,[s]){var T;s&1&&p!==(p=((T=b[0])==null?void 0:T.label)+"")&&St(m,p)},i:Q,o:Q,d(b){b&&_(t),r[9](null),r[10](null),y=!1,Tt(d)}}}function Pa(){}function ia(r,t){const e=r.getBoundingClientRect();return{x:t.clientX-e.left,y:t.clientY-e.top}}function Ca(r){r.fillStyle="000",r.rect(0,0,r.canvas.width,r.canvas.height),r.fill()}const Ma=r=>r.preventDefault();function za(r,t,e){let l,h,i;$(r,Le,o=>e(0,l=o)),$(r,Et,o=>e(14,h=o)),$(r,kt,o=>e(8,i=o));let u,p,m,y,d,w={x:0,y:0};ga(()=>{e(7,y=u.getContext("2d")),e(6,m=p.getContext("2d")),window.devicePixelRatio=1,d=new Ia(u),X(Et,h=u,h),Ca(y)});const b=(o,f)=>{const k=new Image;k.onload=function(){o.drawImage(k,0,0,o.canvas.width,o.canvas.height)},k.src=URL.createObjectURL(f)};let s=!1;function T(){e(2,p.style.top=`${10+l.size/2}px`,p),e(2,p.style.left=`${10+l.size/2}px`,p),s=!1}function O(o){s=!0,w=ia(u,o),d.draw({from:w,to:w,size:l.size,color:l.color})}function c(o){const f=ia(u,o);e(2,p.style.top=`${f.y}px`,p),e(2,p.style.left=`${f.x}px`,p),s&&(d.draw({from:w,to:f,size:l.size,color:l.color}),w=f)}function v(o){const{size:f,color:k}=o;e(2,p.width=f,p),e(2,p.height=f,p),e(6,m.fillStyle=k,m),m.arc(f/2,f/2,f/2,0,2*Math.PI),m.fill()}function E(o){_t[o?"unshift":"push"](()=>{u=o,e(1,u)})}function g(o){_t[o?"unshift":"push"](()=>{p=o,e(2,p),e(6,m),e(0,l)})}return r.$$.update=()=>{r.$$.dirty&65&&m&&l&&(v(l),e(2,p.style.top=`${10+l.size/2}px`,p),e(2,p.style.left=`${10+l.size/2}px`,p)),r.$$.dirty&384&&i&&b(y,i)},[l,u,p,T,O,c,m,y,i,E,g]}class Aa extends Oe{constructor(t){super(),Pe(this,t,za,Oa,Ce,{})}}let Na=(r=21)=>crypto.getRandomValues(new Uint8Array(r)).reduce((t,e)=>(e&=63,e<36?t+=e.toString(36):e<62?t+=(e-26).toString(36).toUpperCase():e>62?t+="-":t+="_",t),"");function ca(r){let t,e,l;return{c(){t=x("div"),e=x("img"),this.h()},l(h){t=S(h,"DIV",{class:!0});var i=I(t);e=S(i,"IMG",{class:!0,alt:!0,src:!0,width:!0,height:!0}),i.forEach(_),this.h()},h(){n(e,"class","image svelte-1aqliqh"),n(e,"alt","Generative Human Result"),mt(e.src,l=r[0])||n(e,"src",l),n(e,"width","256"),n(e,"height","512"),n(t,"class","inline-block relative overflow-clip")},m(h,i){J(h,t,i),a(t,e)},p(h,i){i&1&&!mt(e.src,l=h[0])&&n(e,"src",l)},d(h){h&&_(t)}}}function Da(r){let t,e=r[0]&&ca(r);return{c(){e&&e.c(),t=Qt()},l(l){e&&e.l(l),t=Qt()},m(l,h){e&&e.m(l,h),J(l,t,h)},p(l,[h]){l[0]?e?e.p(l,h):(e=ca(l),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:Q,o:Q,d(l){e&&e.d(l),l&&_(t)}}}async function Ra(r){return new Promise((t,e)=>{try{const l=document.createElement("a");l.download=`sucess-${Date.now()}.png`,l.target="_self",l.onclick=async h=>{l.href&&URL.revokeObjectURL(l.href),l.href=r},l.click(),t(null),console.log("Downloading image.")}catch{e()}})}function Ba(r,t,e){let l,h,i,u,p;$(r,Ge,d=>e(1,l=d)),$(r,wt,d=>e(0,h=d)),$(r,Ie,d=>e(2,i=d)),$(r,xt,d=>e(3,u=d)),$(r,Et,d=>e(4,p=d));let m="";async function y(d,{texture:w,steps:b,seed:s}){const T=Na(11);let O,c;m="Generating";const v=new AbortController;await fetch(Xt+"/api/queue/push/",{signal:v.signal,headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({fn_index:2,data:[d,w,b,Number(s)],action:"predict",session_hash:T})}).then(async o=>{({hash:O,queue_position:c}=await o.json())}).catch(o=>{console.log(o)});let E,g;for(;E!=="QUEUED"||E!=="PENDING";)try{const o=await fetch(Xt+"/api/queue/status/",{signal:v.signal,headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({hash:O})});if(o.status!=200)break;if({status:E,data:g}=await o.json(),E==="QUEUED")m=`Queue ${g}/${c}`;else if(E==="PENDING")m="Pending";else if(E==="FAILED"){m="Failed";break}else if(E==="COMPLETE"){m="Complete";break}await new Promise(f=>setTimeout(f,1e3))}catch(o){console.log(o);break}return g}return r.$$.update=()=>{r.$$.dirty&28&&(async()=>{if(i){const d=await y(p.toDataURL(),u);d&&X(wt,h=d.data[0],h),X(Ie,i=!1,i)}})(),r.$$.dirty&3&&(async()=>l&&(await Ra(h),X(Ge,l=!1,l)))()},[h,l,i,u,p]}class ja extends Oe{constructor(t){super(),Pe(this,t,Ba,Da,Ce,{})}}function La(r){let t,e,l,h,i,u,p,m,y,d,w,b,s,T,O,c,v,E,g,o,f,k,P,z,A,L,U,q,H,B,N,j,ee,Z,ve,me,Y,be,se,Fe,_e,ne,Ye,Je,Qe,K,ye,Me,Xe,Ze,te,Ke,ie,et,tt,ce,at,rt,lt,ze,we,ot,st,ue,nt,pe,it,le,de,ct,he,ut,ae,pt,He,dt,re,ht,qe,ft,fe,Ee,gt,It;return ue=new wa({}),pe=new ba({}),de=new Aa({}),he=new ja({}),fe=new xa({}),{c(){t=x("div"),e=x("article"),l=x("h1"),h=C("Drawings to Human"),i=D(),u=x("p"),p=C("This is an unofficial drawing tool to explore the generative human generator "),m=x("a"),y=x("span"),d=C("Text2Human"),w=C(`. Please check all the model features on this
			`),b=x("a"),s=C("Space"),T=C("."),O=D(),c=x("small"),v=x("h4"),E=C("Thanks to"),g=D(),o=x("p"),f=C("Authors: "),k=x("a"),P=C("Yuming Jiang"),z=C(`,
				`),A=x("a"),L=C("Shuai Yang"),U=C(`,
				`),q=x("a"),H=C("Haonan Qiu"),B=C(`,
				`),N=x("a"),j=C("Wayne Wu"),ee=C(`,
				`),Z=x("a"),ve=C("Chen Change Loy"),me=C(`
				and `),Y=x("a"),be=C("Ziwei Liu"),se=x("br"),Fe=D(),_e=x("p"),ne=x("a"),Ye=C("@hysts"),Je=C(" for the original Space implementation"),Qe=D(),K=x("details"),ye=x("summary"),Me=x("small"),Xe=C("More"),Ze=D(),te=x("p"),Ke=C("The backend is powered by a "),ie=x("a"),et=C("Gradio"),tt=C(`
				application running on
				`),ce=x("a"),at=C("Spaces"),rt=C(`. You can
				also check the source code and clone it locally if you want:`),lt=D(),ze=x("p"),we=x("code"),ot=C("git clone https://huggingface.co/spaces/CVPR/Text2Human"),st=D(),Ae(ue.$$.fragment),nt=D(),Ae(pe.$$.fragment),it=D(),le=x("div"),Ae(de.$$.fragment),ct=D(),Ae(he.$$.fragment),ut=D(),ae=x("button"),pt=C("Generate Human"),dt=D(),re=x("button"),ht=C("Save Result"),ft=D(),Ae(fe.$$.fragment),this.h()},l(W){t=S(W,"DIV",{class:!0});var V=I(t);e=S(V,"ARTICLE",{class:!0});var oe=I(e);l=S(oe,"H1",{});var Ot=I(l);h=M(Ot,"Drawings to Human"),Ot.forEach(_),i=R(oe),u=S(oe,"P",{});var ke=I(u);p=M(ke,"This is an unofficial drawing tool to explore the generative human generator "),m=S(ke,"A",{href:!0,target:!0});var Pt=I(m);y=S(Pt,"SPAN",{});var Ct=I(y);d=M(Ct,"Text2Human"),Ct.forEach(_),Pt.forEach(_),w=M(ke,`. Please check all the model features on this
			`),b=S(ke,"A",{href:!0,target:!0});var Mt=I(b);s=M(Mt,"Space"),Mt.forEach(_),T=M(ke,"."),ke.forEach(_),O=R(oe),c=S(oe,"SMALL",{});var xe=I(c);v=S(xe,"H4",{id:!0});var zt=I(v);E=M(zt,"Thanks to"),zt.forEach(_),g=R(xe),o=S(xe,"P",{});var F=I(o);f=M(F,"Authors: "),k=S(F,"A",{href:!0,target:!0});var At=I(k);P=M(At,"Yuming Jiang"),At.forEach(_),z=M(F,`,
				`),A=S(F,"A",{href:!0,target:!0});var Nt=I(A);L=M(Nt,"Shuai Yang"),Nt.forEach(_),U=M(F,`,
				`),q=S(F,"A",{href:!0,target:!0});var Dt=I(q);H=M(Dt,"Haonan Qiu"),Dt.forEach(_),B=M(F,`,
				`),N=S(F,"A",{href:!0,target:!0});var Rt=I(N);j=M(Rt,"Wayne Wu"),Rt.forEach(_),ee=M(F,`,
				`),Z=S(F,"A",{href:!0,target:!0});var Bt=I(Z);ve=M(Bt,"Chen Change Loy"),Bt.forEach(_),me=M(F,`
				and `),Y=S(F,"A",{href:!0,target:!0});var jt=I(Y);be=M(jt,"Ziwei Liu"),jt.forEach(_),se=S(F,"BR",{}),F.forEach(_),Fe=R(xe),_e=S(xe,"P",{});var vt=I(_e);ne=S(vt,"A",{href:!0,target:!0});var Lt=I(ne);Ye=M(Lt,"@hysts"),Lt.forEach(_),Je=M(vt," for the original Space implementation"),vt.forEach(_),xe.forEach(_),Qe=R(oe),K=S(oe,"DETAILS",{});var Se=I(K);ye=S(Se,"SUMMARY",{class:!0});var Ht=I(ye);Me=S(Ht,"SMALL",{});var qt=I(Me);Xe=M(qt,"More"),qt.forEach(_),Ht.forEach(_),Ze=R(Se),te=S(Se,"P",{});var Te=I(te);Ke=M(Te,"The backend is powered by a "),ie=S(Te,"A",{href:!0,target:!0});var Wt=I(ie);et=M(Wt,"Gradio"),Wt.forEach(_),tt=M(Te,`
				application running on
				`),ce=S(Te,"A",{href:!0,target:!0});var Ut=I(ce);at=M(Ut,"Spaces"),Ut.forEach(_),rt=M(Te,`. You can
				also check the source code and clone it locally if you want:`),Te.forEach(_),lt=R(Se),ze=S(Se,"P",{});var Vt=I(ze);we=S(Vt,"CODE",{class:!0});var Gt=I(we);ot=M(Gt,"git clone https://huggingface.co/spaces/CVPR/Text2Human"),Gt.forEach(_),Vt.forEach(_),Se.forEach(_),oe.forEach(_),st=R(V),Ne(ue.$$.fragment,V),nt=R(V),Ne(pe.$$.fragment,V),it=R(V),le=S(V,"DIV",{class:!0});var We=I(le);Ne(de.$$.fragment,We),ct=R(We),Ne(he.$$.fragment,We),We.forEach(_),ut=R(V),ae=S(V,"BUTTON",{class:!0});var $t=I(ae);pt=M($t,"Generate Human"),$t.forEach(_),dt=R(V),re=S(V,"BUTTON",{class:!0});var Ft=I(re);ht=M(Ft,"Save Result"),Ft.forEach(_),ft=R(V),Ne(fe.$$.fragment,V),V.forEach(_),this.h()},h(){n(m,"href","https://github.com/yumingj/Text2Human"),n(m,"target","_blank"),n(b,"href","https://huggingface.co/spaces/CVPR/Text2Human"),n(b,"target","_blank"),n(v,"id","thanks-to"),n(k,"href","https://yumingj.github.io/"),n(k,"target","_blank"),n(A,"href","https://williamyang1991.github.io/"),n(A,"target","_blank"),n(q,"href","http://haonanqiu.com/"),n(q,"target","_blank"),n(N,"href","https://wywu.github.io/"),n(N,"target","_blank"),n(Z,"href","https://www.mmlab-ntu.com/person/ccloy/"),n(Z,"target","_blank"),n(Y,"href","https://liuziwei7.github.io/"),n(Y,"target","_blank"),n(ne,"href","https://huggingface.co/hysts"),n(ne,"target","_blank"),n(ye,"class","cursor-pointer"),n(ie,"href","https://gradio.app/"),n(ie,"target","_blank"),n(ce,"href","https://huggingface.co/spaces/CVPR/Text2Human"),n(ce,"target","_blank"),n(we,"class","block whitespace-pre overflow-x-scroll"),K.open=!0,n(e,"class","prose dark:prose-invert"),n(le,"class","drawings py-3 svelte-wdpfzc"),ae.disabled=He=r[0]===!0,n(ae,"class","svelte-wdpfzc"),re.disabled=qe=r[1]===!0||!r[2],n(re,"class","svelte-wdpfzc"),n(t,"class","max-w-screen-md mx-auto px-3 py-5 relative z-0")},m(W,V){J(W,t,V),a(t,e),a(e,l),a(l,h),a(e,i),a(e,u),a(u,p),a(u,m),a(m,y),a(y,d),a(u,w),a(u,b),a(b,s),a(u,T),a(e,O),a(e,c),a(c,v),a(v,E),a(c,g),a(c,o),a(o,f),a(o,k),a(k,P),a(o,z),a(o,A),a(A,L),a(o,U),a(o,q),a(q,H),a(o,B),a(o,N),a(N,j),a(o,ee),a(o,Z),a(Z,ve),a(o,me),a(o,Y),a(Y,be),a(o,se),a(c,Fe),a(c,_e),a(_e,ne),a(ne,Ye),a(_e,Je),a(e,Qe),a(e,K),a(K,ye),a(ye,Me),a(Me,Xe),a(K,Ze),a(K,te),a(te,Ke),a(te,ie),a(ie,et),a(te,tt),a(te,ce),a(ce,at),a(te,rt),a(K,lt),a(K,ze),a(ze,we),a(we,ot),a(t,st),De(ue,t,null),a(t,nt),De(pe,t,null),a(t,it),a(t,le),De(de,le,null),a(le,ct),De(he,le,null),a(t,ut),a(t,ae),a(ae,pt),a(t,dt),a(t,re),a(re,ht),a(t,ft),De(fe,t,null),Ee=!0,gt||(It=[G(ae,"click",bt(r[3])),G(re,"click",bt(r[4]))],gt=!0)},p(W,[V]){(!Ee||V&1&&He!==(He=W[0]===!0))&&(ae.disabled=He),(!Ee||V&6&&qe!==(qe=W[1]===!0||!W[2]))&&(re.disabled=qe)},i(W){Ee||(Re(ue.$$.fragment,W),Re(pe.$$.fragment,W),Re(de.$$.fragment,W),Re(he.$$.fragment,W),Re(fe.$$.fragment,W),Ee=!0)},o(W){Be(ue.$$.fragment,W),Be(pe.$$.fragment,W),Be(de.$$.fragment,W),Be(he.$$.fragment,W),Be(fe.$$.fragment,W),Ee=!1},d(W){W&&_(t),je(ue),je(pe),je(de),je(he),je(fe),gt=!1,Tt(It)}}}function Ha(r,t,e){let l,h,i;return $(r,Ie,m=>e(0,l=m)),$(r,Ge,m=>e(1,h=m)),$(r,wt,m=>e(2,i=m)),[l,h,i,()=>X(Ie,l=!0,l),()=>X(Ge,h=!0,h)]}class Ua extends Oe{constructor(t){super(),Pe(this,t,Ha,La,Ce,{})}}export{Ua as default};
