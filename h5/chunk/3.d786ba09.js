(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"219":function(t,e,n){t.exports=n(52)},"235":function(t,e,n){var i=n(218),r=n(434),o=n(284),s=n(230),c=n(571),a=n(366),u=n(176);t.exports=function split(t,e,n){return n&&"number"!=typeof n&&s(t,e,n)&&(e=n=void 0),(n=void 0===n?4294967295:n>>>0)?(t=u(t))&&("string"==typeof e||null!=e&&!c(e))&&!(e=i(e))&&o(t)?r(a(t),0,n):t.split(e,n):[]}},"399":function(t,e,n){"use strict";function asyncGeneratorStep(t,e,n,i,r,o,s){try{var c=t[o](s),a=c.value}catch(t){return void n(t)}c.done?e(a):Promise.resolve(a).then(i,r)}function _asyncToGenerator(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var o=t.apply(e,n);function _next(t){asyncGeneratorStep(o,i,r,_next,_throw,"next",t)}function _throw(t){asyncGeneratorStep(o,i,r,_next,_throw,"throw",t)}_next(void 0)}))}}n.d(e,"a",(function(){return _asyncToGenerator}))},"571":function(t,e,n){var i=n(572),r=n(252),o=n(253),s=o&&o.isRegExp,c=s?r(s):i;t.exports=c},"572":function(t,e,n){var i=n(156),r=n(150);t.exports=function baseIsRegExp(t){return r(t)&&"[object RegExp]"==i(t)}},"748":function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var i=n(6),r=n(3),o=n(4),s=n(192),c=n(399),a=n(219),u=n.n(a),l={"top":"top","bottom":"bottom","middle":"middle","normal":"alphabetic"},h=function(){function CanvasContext(t,e){Object(r.a)(this,CanvasContext),this.actions=[],this.canvas=t,this.ctx=e}var t;return Object(o.a)(CanvasContext,[{"key":"ctx","get":function get(){return this.__raw__||{}},"set":function set(t){this.__raw__=t}},{"key":"emptyActions","value":function emptyActions(){this.actions.length=0}},{"key":"enqueueActions","value":function enqueueActions(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];this.actions.push({"func":t,"args":n})}},{"key":"fillStyle","get":function get(){return this.ctx.fillStyle},"set":function set(t){var e=this;this.enqueueActions((function(){e.ctx.fillStyle=t}))}},{"key":"font","get":function get(){return this.ctx.font},"set":function set(t){this.ctx.font=t}},{"key":"globalAlpha","get":function get(){return this.ctx.globalAlpha},"set":function set(t){var e=this;this.enqueueActions((function(){e.ctx.globalAlpha=t}))}},{"key":"globalCompositeOperation","get":function get(){return this.ctx.globalCompositeOperation},"set":function set(t){var e=this;this.enqueueActions((function(){e.ctx.globalCompositeOperation=t}))}},{"key":"lineCap","get":function get(){return this.ctx.lineCap},"set":function set(t){var e=this;this.enqueueActions((function(){e.ctx.lineCap=t}))}},{"key":"lineDashOffset","get":function get(){return this.ctx.lineDashOffset},"set":function set(t){var e=this;this.enqueueActions((function(){e.ctx.lineDashOffset=t}))}},{"key":"lineJoin","get":function get(){return this.ctx.lineJoin},"set":function set(t){var e=this;this.enqueueActions((function(){e.ctx.lineJoin=t}))}},{"key":"lineWidth","get":function get(){return this.ctx.lineWidth},"set":function set(t){var e=this;this.enqueueActions((function(){e.ctx.lineWidth=t}))}},{"key":"miterLimit","get":function get(){return this.ctx.miterLimit},"set":function set(t){var e=this;this.enqueueActions((function(){e.ctx.miterLimit=t}))}},{"key":"shadowBlur","get":function get(){return this.ctx.shadowBlur},"set":function set(t){var e=this;this.enqueueActions((function(){e.ctx.shadowBlur=t}))}},{"key":"shadowColor","get":function get(){return this.ctx.shadowColor},"set":function set(t){var e=this;this.enqueueActions((function(){e.ctx.shadowColor=t}))}},{"key":"shadowOffsetX","get":function get(){return this.ctx.shadowOffsetX},"set":function set(t){var e=this;this.enqueueActions((function(){e.ctx.shadowOffsetX=t}))}},{"key":"shadowOffsetY","get":function get(){return this.ctx.shadowOffsetY},"set":function set(t){var e=this;this.enqueueActions((function(){e.ctx.shadowOffsetY=t}))}},{"key":"strokeStyle","get":function get(){return this.ctx.strokeStyle},"set":function set(t){var e=this;this.enqueueActions((function(){e.ctx.strokeStyle=t}))}},{"key":"textAlign","get":function get(){return this.ctx.textAlign},"set":function set(t){this.ctx.textAlign=t}},{"key":"textBaseline","get":function get(){return this.ctx.textBaseline},"set":function set(t){this.ctx.textBaseline=t}},{"key":"direction","get":function get(){return this.ctx.direction},"set":function set(t){this.ctx.direction=t}},{"key":"imageSmoothingEnabled","get":function get(){return this.ctx.imageSmoothingEnabled},"set":function set(t){var e=this;this.enqueueActions((function(){e.ctx.imageSmoothingEnabled=t}))}},{"key":"imageSmoothingQuality","get":function get(){return this.ctx.imageSmoothingQuality},"set":function set(t){var e=this;this.enqueueActions((function(){e.ctx.imageSmoothingQuality=t}))}},{"key":"filter","get":function get(){return this.ctx.filter},"set":function set(t){var e=this;this.enqueueActions((function(){e.ctx.filter=t}))}},{"key":"arc","value":function arc(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.enqueueActions.apply(this,[this.ctx.arc].concat(e))}},{"key":"arcTo","value":function arcTo(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.enqueueActions.apply(this,[this.ctx.arcTo].concat(e))}},{"key":"beginPath","value":function beginPath(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.enqueueActions.apply(this,[this.ctx.beginPath].concat(e))}},{"key":"bezierCurveTo","value":function bezierCurveTo(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.enqueueActions.apply(this,[this.ctx.bezierCurveTo].concat(e))}},{"key":"clearRect","value":function clearRect(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.enqueueActions.apply(this,[this.ctx.clearRect].concat(e))}},{"key":"clip","value":function clip(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.enqueueActions.apply(this,[this.ctx.clip].concat(e))}},{"key":"closePath","value":function closePath(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.enqueueActions.apply(this,[this.ctx.closePath].concat(e))}},{"key":"createPattern","value":function createPattern(t,e){return this.createPattern(t,e)}},{"key":"draw","value":(t=Object(c.a)(u.a.mark((function _callee(t,e){var n,i,r,o,c;return u.a.wrap((function _callee$(a){for(;;)switch(a.prev=a.next){case 0:a.prev=0,t||this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),n=Object(s.a)(this.actions),a.prev=3,n.s();case 5:if((i=n.n()).done){a.next=11;break}return r=i.value,o=r.func,c=r.args,a.next=9,o.apply(this.ctx,c);case 9:a.next=5;break;case 11:a.next=16;break;case 13:a.prev=13,a.t0=a.catch(3),n.e(a.t0);case 16:return a.prev=16,n.f(),a.finish(16);case 19:this.emptyActions(),e&&e(),a.next=26;break;case 23:throw a.prev=23,a.t1=a.catch(0),{"errMsg":a.t1.message};case 26:case"end":return a.stop()}}),_callee,this,[[0,23],[3,13,16,19]])}))),function draw(e,n){return t.apply(this,arguments)})},{"key":"drawImage","value":function drawImage(t){for(var e=this,n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];this.enqueueActions((function(){var n;if("string"==typeof t){var r=new Image;return r.src=t,new Promise((function(t,n){r.onload=function(){var n;(n=e.ctx).drawImage.apply(n,[r].concat(i)),t()},r.onerror=n}))}(n=e.ctx).drawImage.apply(n,[t].concat(i))}))}},{"key":"fill","value":function fill(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.enqueueActions.apply(this,[this.ctx.fill].concat(e))}},{"key":"fillRect","value":function fillRect(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.enqueueActions.apply(this,[this.ctx.fillRect].concat(e))}},{"key":"fillText","value":function fillText(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.enqueueActions.apply(this,[this.ctx.fillText].concat(e))}},{"key":"lineTo","value":function lineTo(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.enqueueActions.apply(this,[this.ctx.lineTo].concat(e))}},{"key":"moveTo","value":function moveTo(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.enqueueActions.apply(this,[this.ctx.moveTo].concat(e))}},{"key":"quadraticCurveTo","value":function quadraticCurveTo(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.enqueueActions.apply(this,[this.ctx.quadraticCurveTo].concat(e))}},{"key":"rect","value":function rect(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.enqueueActions.apply(this,[this.ctx.rect].concat(e))}},{"key":"restore","value":function restore(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.enqueueActions.apply(this,[this.ctx.restore].concat(e))}},{"key":"rotate","value":function rotate(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.enqueueActions.apply(this,[this.ctx.rotate].concat(e))}},{"key":"save","value":function save(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.enqueueActions.apply(this,[this.ctx.save].concat(e))}},{"key":"scale","value":function scale(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.enqueueActions.apply(this,[this.ctx.scale].concat(e))}},{"key":"setFillStyle","value":function setFillStyle(t){var e=this;this.enqueueActions((function(){e.ctx.fillStyle=t}))}},{"key":"setFontSize","value":function setFontSize(t){this.font="".concat(t,"px")}},{"key":"setGlobalAlpha","value":function setGlobalAlpha(t){this.globalAlpha=t}},{"key":"setLineCap","value":function setLineCap(t){this.lineCap=t}},{"key":"setLineDash","value":function setLineDash(t,e){var n=this;this.enqueueActions((function(){n.ctx.setLineDash(t),n.ctx.lineDashOffset=e}))}},{"key":"setLineJoin","value":function setLineJoin(t){this.lineJoin=t}},{"key":"setLineWidth","value":function setLineWidth(t){this.lineWidth=t}},{"key":"setMiterLimit","value":function setMiterLimit(t){this.miterLimit=t}},{"key":"setShadow","value":function setShadow(t,e,n,i){var r=this;this.enqueueActions((function(){r.ctx.shadowOffsetX=t,r.ctx.shadowOffsetY=e,r.ctx.shadowColor=i,r.ctx.shadowBlur=n}))}},{"key":"setStrokeStyle","value":function setStrokeStyle(t){var e=this;this.enqueueActions((function(){e.ctx.strokeStyle=t}))}},{"key":"setTextAlign","value":function setTextAlign(t){this.textAlign=t}},{"key":"setTextBaseline","value":function setTextBaseline(t){this.textBaseline=l[t]||"alphabetic"}},{"key":"setTransform","value":function setTransform(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.enqueueActions.apply(this,[this.ctx.setTransform].concat(e))}},{"key":"stroke","value":function stroke(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.enqueueActions.apply(this,[this.ctx.stroke].concat(e))}},{"key":"strokeRect","value":function strokeRect(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.enqueueActions.apply(this,[this.ctx.strokeRect].concat(e))}},{"key":"strokeText","value":function strokeText(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.enqueueActions.apply(this,[this.ctx.strokeText].concat(e))}},{"key":"transform","value":function transform(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.enqueueActions.apply(this,[this.ctx.transform].concat(e))}},{"key":"translate","value":function translate(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.enqueueActions.apply(this,[this.ctx.translate].concat(e))}},{"key":"measureText","value":function measureText(t){return this.measureText(t)}},{"key":"createCircularGradient","value":function createCircularGradient(t,e,n){return this.ctx.createRadialGradient(t,e,0,t,e,n)}},{"key":"createLinearGradient","value":function createLinearGradient(t,e,n,i){return this.createLinearGradient(t,e,n,i)}}]),CanvasContext}(),f=function(){function NodesRef(t,e,n){Object(r.a)(this,NodesRef),this._component=e._component,this._selector=t,this._selectorQuery=e,this._single=n}return Object(o.a)(NodesRef,[{"key":"context","value":function context(t){var e=this._selector,n=this._component,i=this._single,r=this._selectorQuery;return r._push(e,n,i,{"context":!0},t),r}},{"key":"node","value":function node(t){var e=this._selector,n=this._component,i=this._single,r=this._selectorQuery;return r._push(e,n,i,{"nodeCanvasType":!0,"node":!0},t),r}},{"key":"boundingClientRect","value":function boundingClientRect(t){var e=this._selector,n=this._component,i=this._single,r=this._selectorQuery;return r._push(e,n,i,{"id":!0,"dataset":!0,"rect":!0,"size":!0},t),r}},{"key":"scrollOffset","value":function scrollOffset(t){var e=this._selector,n=this._component,i=this._single,r=this._selectorQuery;return r._push(e,n,i,{"id":!0,"dataset":!0,"scrollOffset":!0},t),r}},{"key":"fields","value":function fields(t,e){var n=this._selector,i=this._component,r=this._single,o=this._selectorQuery,s=t.id,c=t.dataset,a=t.rect,u=t.size,l=t.scrollOffset,h=t.properties,f=void 0===h?[]:h,v=t.computedStyle,y=void 0===v?[]:v;return o._push(n,i,r,{"id":s,"dataset":c,"rect":a,"size":u,"scrollOffset":l,"properties":f,"computedStyle":y},e),o}}]),NodesRef}();function filter(t,e,n){if(!e)return null;var i=".taro_page"===n,r=t.id,o=t.dataset,s=t.rect,c=t.size,a=t.scrollOffset,u=t.properties,l=void 0===u?[]:u,f=t.computedStyle,v=void 0===f?[]:f,y=t.nodeCanvasType,p=t.node,g=t.context,x={};if(y&&p){var d=e.tagName;if(x.node={"id":e.id,"$taroElement":e},/^taro-canvas-core/i.test(d)){var k=e.type||"";x.nodeCanvasType=k;var A=e.getElementsByTagName("canvas")[0];/^(2d|webgl)/i.test(k)&&A?x.node=A:x.node=null}else x.nodeCanvasType="",x.node=e;return x}if(!g){if(r&&(x.id=e.id),o&&(x.dataset=Object.assign({},e.dataset)),s||c){var w=e.getBoundingClientRect(),m=w.left,_=w.right,q=w.top,b=w.bottom,C=w.width,S=w.height;s&&(i?(x.left=0,x.right=0,x.top=0,x.bottom=0):(x.left=m,x.right=_,x.top=q,x.bottom=b)),c&&(i?(x.width=e.clientWidth,x.height=e.clientHeight):(x.width=C,x.height=S))}if(a&&(x.scrollLeft=e.scrollLeft,x.scrollTop=e.scrollTop),l.length&&l.forEach((function(t){var n=e.getAttribute(t);n&&(x[t]=n)})),v.length){var T=window.getComputedStyle(e);v.forEach((function(t){var e=T.getPropertyValue(t)||T[t];e&&(x[t]=e)}))}return x}var O=e.tagName;if(/^taro-video-core/i.test(O))return{"context":e};if(/^taro-canvas-core/i.test(O)){var R=e.type||"2d",L=null==e?void 0:e.querySelector("canvas"),P=null==L?void 0:L.getContext(R);return{"context":new h(L,P)}}/^taro-live-player-core/i.test(O)?console.error("暂时不支持通过 NodesRef.context 获取 LivePlayerContext"):/^taro-editor-core/i.test(O)?console.error("暂时不支持通过 NodesRef.context 获取 EditorContext"):/^taro-map-core/i.test(O)&&console.error("暂时不支持通过 NodesRef.context 获取 MapContext")}var v=function(){function SelectorQuery(){Object(r.a)(this,SelectorQuery),this._defaultWebviewId=null,this._webviewId=null,this._queue=[],this._queueCb=[],this._component}return Object(o.a)(SelectorQuery,[{"key":"in","value":function _in(t){return this._component=t,this}},{"key":"select","value":function select(t){return"string"==typeof t&&(t=t.replace(">>>",">")),new f(t,this,!0)}},{"key":"selectAll","value":function selectAll(t){return"string"==typeof t&&(t=t.replace(">>>",">")),new f(t,this,!1)}},{"key":"selectViewport","value":function selectViewport(){return new f(".taro_page",this,!0)}},{"key":"exec","value":function exec(t){var e=this;return function queryBat(t,e){var n=[];t.forEach((function(t){var e,r=t.selector,o=t.single,s=t.fields,c=t.component,a=null!==c&&Object(i.b)(c)||document,u=!1;if(a!==document){var l=null===(e=a.parentNode)||void 0===e?void 0:e.querySelectorAll(r);if(l)for(var h=0,f=l.length;h<f;++h)if(a===l[h]){u=!0;break}}if(o){var v=!0===u?a:a.querySelector(r);n.push(filter(s,v,r))}else{var y=a.querySelectorAll(r),p=[];!0===u&&p.push(a);for(var g=0,x=y.length;g<x;++g)p.push(y[g]);n.push(p.map((function(t){return filter(s,t)})))}})),e(n)}(this._queue,(function(n){var i=e._queueCb;n.forEach((function(t,n){var r=i[n];"function"==typeof r&&r.call(e,t)})),"function"==typeof t&&t.call(e,n)})),this}},{"key":"_push","value":function _push(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;this._queue.push({"component":e,"selector":t,"single":n,"fields":i}),this._queueCb.push(r)}}]),SelectorQuery}(),y=function createSelectorQuery(){return new v};Object(i.h)("createIntersectionObserver")}}]);
//# sourceMappingURL=3.d786ba09.js.map