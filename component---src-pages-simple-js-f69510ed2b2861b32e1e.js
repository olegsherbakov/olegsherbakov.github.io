(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{206:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(202),i=(n(14),n(15),n(20),n(17),n(44),n(4),n(38),n(213)),l=n.n(i),s=n(214),u=n.n(s);var c=function(t){var e,n;function o(){return t.apply(this,arguments)||this}return n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.prototype.render=function(){var t=this.props,e={left:t.x,top:t.y};return r.a.createElement("div",{className:u.a.Item,style:e})},o}(r.a.Component),p=n(215),g=n.n(p);function f(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var h=function(t){var e,n;function o(e){var n;(n=t.call(this,e)||this)._container=null,n._pulling={on:!1,x:0,y:0},n._setContainerRef=function(t){n._container=t},n._onMouseDown=function(t){var e=t.pageX,o=t.pageY;n._pulling.x=e,n._pulling.y=o},n._onMouseMove=function(t){var e=t.pageX,o=t.pageY,r=t.target;if(n._sizes){var a=n._getOffset({pageX:e,pageY:o,target:r}),i=a.x,l=a.y,s=n._sizes,u=s.width/2,c=s.height/2,p=(i>u?i-u:-(u-i))/u,g=(l>c?l-c:-(c-l))/c,f=n._pulling.x?Math.abs(e-n._pulling.x):0,h=n._pulling.y?Math.abs(o-n._pulling.y):0,_=f?(f+64)/100:0,y=h?(h+64)/100:0;(_>1||y>1)&&(n._pulling.on=!0);var d=_>1||y>1?["scale("+(_>1?n._ff(_):1)+", "+(y>1?n._ff(y):1)+")"].join(""):"";n.setState({textStyle:{left:120*p,top:60*g,transform:d}})}},n._ff=function(t){return t.toString().split(".").map(function(t,e){return e?t.substring(0,2):t}).join(".")},n._onMouseUp=function(){n._pulling.x=0,n._pulling.y=0,n.setState({textStyle:Object.assign({},n.state.textStyle,{transform:""})})},n._onClick=function(t){var e=t.pageX,o=t.pageY,r=t.target;if(n._pulling.on)return n._pulling.x=0,n._pulling.y=0,n._pulling.on=!1,void n.setState({pulled:!0});var a=n._getOffset({pageX:e,pageY:o,target:r}),i=n.state,l=i.pulses,s=i.counter;n._setRandColor(),n._createPulse(Object.assign({},a,{pulses:l,counter:s}))},n._onMouseLeave=function(t){var e=n._getOffset(t),o=e.x,r=e.y,a=n._container.getBoundingClientRect(),i=a.width,l=a.height;n._pulling.x=0,n._pulling.y=0,n._pulling.on=!1,(o<0||o>i||r<0||r>l)&&n.setState({textStyle:{transform:"",left:0,top:0}})};var o=n._generateRandColor(),r=o.backgroundColor,a=o.highlightText;return n.state={containerStyle:{backgroundColor:r},textStyle:{transform:"",left:0,top:0},highlightText:a,pulses:{},counter:0,clicked:!1,pulled:!1},n}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var a,i,s,u=o.prototype;return u.render=function(){var t,e=this.state,n=e.containerStyle,o=e.textStyle,a=e.highlightText,i=e.pulses,s=e.clicked,u=e.pulled,p=l()(((t={})[g.a.Container]=!0,t[g.a.HighlightText]=a,t)),f=u&&s?"what's next?":s?"pull me":"click me";return r.a.createElement("div",{className:p,ref:this._setContainerRef,style:n,onMouseLeave:this._onMouseLeave,onMouseDown:this._onMouseDown,onMouseMove:this._onMouseMove,onMouseUp:this._onMouseUp,onClick:this._onClick},r.a.createElement("span",{className:g.a.Text,style:o},f),Object.keys(i).map(function(t){var e=i[t],n=e.x,o=e.y;return r.a.createElement(c,{key:t,x:n,y:o})}))},u.componentWillUnmount=function(){var t=this.state.pulses;Object.keys(t).forEach(function(e){clearTimeout(t[e].disconnect)})},u._createPulse=function(t){var e=this,n=t.x,o=t.y,r=t.pulses,a=t.counter+1;r[a]={disconnect:setTimeout(function(){delete r[a],e.setState({pulses:r})},5e3),x:n,y:o},this.setState({clicked:!0,counter:a,pulses:r})},u._setRandColor=function(){var t=this._generateRandColor(),e=t.backgroundColor,n=t.highlightText;this.setState({containerStyle:{backgroundColor:e},highlightText:n})},u._generateRandColor=function(){var t=this._getRandRGBA(),e=t.r,n=t.g,o=t.b,r=t.a,a=Math.sqrt(r);return{backgroundColor:"rgba("+e+","+n+","+o+","+a+")",highlightText:this._pow(e)+this._pow(n)+this._pow(o)>123456&&a>.78}},u._getRandRGBA=function(){return{r:this._getRandInt(0,256),g:this._getRandInt(0,256),b:this._getRandInt(0,256),a:this._getRandArbitrary(0,1)}},u._getRandArbitrary=function(t,e){return Math.random()*(e-t)+t},u._getRandInt=function(t,e){return Math.floor(Math.random()*(e-t))+t},u._pow=function(t){return Math.pow(256-t,2)},u._getOffset=function(t){var e=t.pageX,n=t.pageY,o=t.target;return{x:e-o.offsetLeft,y:n-o.offsetTop}},a=o,(i=[{key:"_sizes",get:function(){if(!this._container)return null;var t=this._container.getBoundingClientRect();return{width:t.width,height:t.height}}}])&&f(a.prototype,i),s&&f(a,s),o}(r.a.Component),_=n(201);e.default=function(){return r.a.createElement(_.a,null,r.a.createElement(a.a,null),r.a.createElement(h,null))}},213:function(t,e,n){var o;n(45),function(){"use strict";var n={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var o=arguments[e];if(o){var a=typeof o;if("string"===a||"number"===a)t.push(o);else if(Array.isArray(o)&&o.length){var i=r.apply(null,o);i&&t.push(i)}else if("object"===a)for(var l in o)n.call(o,l)&&o[l]&&t.push(l)}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(o=function(){return r}.apply(e,[]))||(t.exports=o)}()}}]);
//# sourceMappingURL=component---src-pages-simple-js-f69510ed2b2861b32e1e.js.map