(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Ocmf:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),r=t.n(a),i=t("Rsfn");function c(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}var o,u,l=function(e){return Math.cos(e*Math.PI/180)},s=function(e){return Math.sin(e*Math.PI/180)},f=(o=17.5,Math.tan(o*Math.PI/180)/17.5),m='$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,"^. ',v=function(e,n,t){return Math.max(Math.abs(e)-.3,Math.abs(n)-.3,Math.abs(t)-.3,.42-function(e){return.14+1.78*e}(e*e+n*n+t*t))},h=function(e,n,t){var a=e.x0+(t-e.cols/2)*e.ux*e.scaleX+(n-e.rows/2)*e.vx*e.scaleY,r=e.y0+(n-e.rows/2)*e.vy*e.scaleY,i=e.z0+(t-e.cols/2)*e.uz*e.scaleX+(n-e.rows/2)*e.vz*e.scaleY,c=function(e){return(1+e)/2}(a*a+r*r+i*i),o=function(e,n){for(var t=n[0],a=n[1],r=n[2],i=[],c=0,o=0;o<=15;o++)c+=v(e.camX+t*c,e.camY+a*c,e.camZ+r*c),i[o]=c;return i}(e,[a/c,r/c,i/c]),u=(o[15]-o[14])/(o[14]-o[13]),l=Math.pow(Math.min(1,Math.max(0,u+0)),1);return(""+m[Math.round(l*(m.length-1))])[0]},d=function(e,n){for(var t=[],a=e.minCol;a<e.maxCol;a++)t.push(h(e,n,a));return t},b=function(e){for(var n,t,a,r,i=(t=(n=e).distance,a=n.alpha,r=n.beta,{minRow:3,maxRow:40,minCol:0,maxCol:89,rows:43,cols:90,scaleX:.6,scaleY:1.5,camX:+(t*l(a)*l(r)).toFixed(2),camY:+(t*s(r)).toFixed(2),camZ:+(t*s(a)*l(r)).toFixed(2),ux:-f*s(a),uz:+f*l(a),vx:+f*l(a)*s(r),vy:-f*l(r),vz:+f*s(a)*s(r),x0:-l(a)*l(r),y0:-s(r),z0:-s(a)*l(r)}),c=[],o=i.minRow;o<i.maxRow;o++)c.push(d(i,o).join(""));return c},p=function(e){var n={mousewheel:function(n){var t=n.deltaY;e((function(e){return function(e,n){var t=e.distance,a=c(e,["distance"]);return Object.assign({},a,{distance:Math.max(Math.min(t+(n>0?.1:-.1),2.5),.5)})}(e,t)}))},mousemove:function(n){var t=n.clientX,a=n.clientY;e((function(e){return e.isProgress?function(e,n,t){var a=e.alphaPrev,r=e.betaPrev,i=e.clientX,o=e.clientY,u=c(e,["alphaPrev","betaPrev","clientX","clientY"]);return Object.assign({},u,{alphaPrev:a,betaPrev:r,clientX:i,clientY:o,alpha:a+Math.floor((i-n)/5),beta:r-Math.floor((o-t)/5)})}(e,t,a):e}))},mousedown:function(n){var t=n.clientX,a=n.clientY;e((function(e){return Object.assign({},e,{isProgress:!0,alphaPrev:e.alpha,betaPrev:e.beta,clientX:t,clientY:a})}))},mouseup:function(){e((function(e){return Object.assign({},e,{isProgress:!1})}))}},t=function(){e((function(e){return Object.assign({},e,{isProgress:!1})}))};return Object.keys(n).map((function(e){return document.addEventListener(e,n[e])})),window.addEventListener("blur",t),function(){Object.keys(n).map((function(e){return document.removeEventListener(e,n[e])})),window.removeEventListener("blur",t)}},x=t("iQSY"),w=t.n(x),M=Math.round(12),g={distance:1.3,alpha:15,beta:30,alphaPrev:15,betaPrev:30,clientX:void 0,clientY:void 0,isProgress:!1};var P=function(){var e=Object(a.useState)(g),n=e[0],t=e[1],i=Object(a.useRef)();return Object(a.useEffect)((function(){var e=i.current;return u=e.getContext("2d"),e.width=600,e.height=600,u.font=M+"px monospace",u.fillStyle="black",p(t)}),[]),Object(a.useEffect)((function(){u.clearRect(0,0,u.canvas.width,u.canvas.height),b(n).map((function(e,n){return u.fillText(e,5,5+n*M*1.4)}))}),[n]),r.a.createElement("canvas",{ref:i,className:w.a.Canvas})},Y=t("Bl7J");n.default=function(){return r.a.createElement(Y.a,null,r.a.createElement("div",null,r.a.createElement(i.a,null),r.a.createElement(P,null)))}},Rsfn:function(e,n,t){"use strict";var a=t("q1tI"),r=t.n(a),i=t("Wbzz");n.a=function(){return r.a.createElement("p",null,"← ",r.a.createElement(i.a,{to:"/"},"Back"))}},iQSY:function(e,n,t){e.exports={Canvas:"main-module--Canvas--QFFKF",Container:"main-module--Container--1X5Tn",HighlightText:"main-module--HighlightText--10yBA",Text:"main-module--Text--1kpdq",Item:"main-module--Item--1A3Ew",explode:"main-module--explode--Pb1JE",fadeout:"main-module--fadeout--1v6yT"}}}]);
//# sourceMappingURL=component---src-pages-medium-js-4baf8644db9a2d258f2f.js.map