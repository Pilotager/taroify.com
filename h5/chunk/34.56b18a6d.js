(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"163":function(e,t,n){"use strict";n.d(t,"a",(function(){return addUnitPx})),n.d(t,"b",(function(){return getSizeStyle})),n.d(t,"c",(function(){return unitToPx}));var r,o=n(180),c=n.n(o),i=n(167),a=n.n(i);function addUnitPx(e){return void 0===e?"":"".concat(unitToPx(e),"px")}function getSizeStyle(e){if(a()(e)||c()(e)){var t=addUnitPx(e);return{"width":t,"height":t}}return{}}function convertRem(e){return+(e=e.replace(/rem/g,""))*function getRootFontSize(){if(!r){var e=document.documentElement,t=e.style.fontSize||window.getComputedStyle(e).fontSize;r=parseFloat(t)}return r}()}function unitToPx(e){return"number"==typeof e?e:e.includes("px")?function convertPx(e){return+(e=e.replace(/px/g,""))}(e):e.includes("rem")?convertRem(e):e.includes("vw")?function convertVw(e){return+(e=e.replace(/vw/g,""))*window.innerWidth/100}(e):e.includes("vh")?function convertVh(e){return+(e=e.replace(/vh/g,""))*window.innerHeight/100}(e):parseFloat(e)}},"164":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var r="undefined"!=typeof document&&!!document.scripts,o=!1},"165":function(e,t,n){"use strict";n.d(t,"a",(function(){return useMounted}));var r=n(166);function useMounted(e){Object(r.a)(e,[])}},"166":function(e,t,n){"use strict";var r=n(201),o=n.n(r),c=n(31),i=n(23);t.a=function useRenderedEffect(e,t){var n=Object(i.useRef)();Object(i.useEffect)((function(){return c.default.nextTick((function(){var t=null==e?void 0:e();o()(t)&&(n.current=t)})),n.current}),t)}},"167":function(e,t,n){var r=n(173),o=n(169);e.exports=function isNumber(e){return"number"==typeof e||o(e)&&"[object Number]"==r(e)}},"172":function(e,t,n){"use strict";n.d(t,"a",(function(){return i.a})),n.d(t,"b",(function(){return usePlaceholder})),n.d(t,"c",(function(){return s.a})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return p})),n.d(t,"f",(function(){return b}));var r=n(9),o=n(23),c=n(176),i=n(165);var a=n(158),u=n(163);function usePlaceholder(e,t){var n=t.className,s=function useHeight(e){var t=Object(o.useState)(0),n=Object(r.a)(t,2),a=n[0],u=n[1];return Object(i.a)((function(){return Object(c.a)(e).then((function(e){return e.height})).then(u)})),a}(e);return function(e){var t=e.children;return o.createElement(a.h,{"className":n,"style":{"height":s?"".concat(Object(u.a)(s)):""},"children":t})}}var s=n(166);var l=function useTimeout(){var e=Object(o.useRef)(),t=Object(o.useRef)(),n=Object(o.useRef)(),r=Object(o.useRef)(),c=Object(o.useCallback)((function(){e.current&&(clearTimeout(e.current),e.current=void 0)}),[]),i=Object(o.useCallback)((function(o,c){if(!e.current){t.current=o,n.current=c;for(var i=arguments.length,a=new Array(i>2?i-2:0),u=2;u<i;u++)a[u-2]=arguments[u];r.current=a,e.current=setTimeout(o,c,a)}}),[]),a=Object(o.useCallback)((function(e,o){if(c(),e){for(var a=arguments.length,u=new Array(a>2?a-2:0),s=2;s<a;s++)u[s-2]=arguments[s];i(e,o,u)}else t.current&&i(t.current,n.current,r.current)}),[]);return Object(o.useMemo)((function(){return{"restart":a,"start":i,"stop":c}}),[a,i,c])};n(230);var f=function updateReducer(e){return(e+1)%1e6};var p=function useUpdate(){var e=Object(o.useReducer)(f,0);return Object(r.a)(e,2)[1]},h=n(31);var b=function useWindowResize(e){Object(o.useEffect)((function(){return null===h.onWindowResize||void 0===h.onWindowResize||Object(h.onWindowResize)(e),function(){return null===h.offWindowResize||void 0===h.offWindowResize?void 0:Object(h.offWindowResize)(e)}}),[e])}},"174":function(e,t,n){var r=n(181);e.exports=function toKey(e){if("string"==typeof e||r(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}},"176":function(e,t,n){"use strict";n.d(t,"c",(function(){return makeRect})),n.d(t,"a",(function(){return getRect})),n.d(t,"b",(function(){return getRects}));var r=n(9),o=n(31),c=n(164),i=n(182);function makeRect(e,t){return{"top":0,"left":0,"right":e,"bottom":t,"width":e,"height":t}}function getRect(e){var t=Object(i.b)(e);if(t){if(c.a){if(Object(i.d)(t)){var n=t.innerWidth,o=t.innerHeight;return Promise.resolve(makeRect(n,o))}return Promise.resolve(t.getBoundingClientRect())}return new Promise((function(e){Object(i.a)(t).boundingClientRect().exec((function(n){var o=Object(r.a)(n,1)[0];if(Object(i.c)(t)){var c=o.width,a=o.height;e(makeRect(c,a))}else e(o)}))}))}return Promise.resolve(makeRect(0,0))}function getRects(e,t){var n=Object(i.b)(e);if(n){if(c.a){var a=[];return n.querySelectorAll(t).forEach((function(e){return a.push(e.getBoundingClientRect())})),Promise.resolve(a)}return new Promise((function(e){Object(o.createSelectorQuery)().selectAll("#"+n.uid+t).boundingClientRect().exec((function(t){var n=Object(r.a)(t,1)[0];return e(n)}))}))}return Promise.resolve([])}},"179":function(e,t,n){var r=n(264);e.exports=function toString(e){return null==e?"":r(e)}},"180":function(e,t,n){var r=n(173),o=n(162),c=n(169);e.exports=function isString(e){return"string"==typeof e||!o(e)&&c(e)&&"[object String]"==r(e)}},"182":function(e,t,n){"use strict";n.d(t,"d",(function(){return isWindow})),n.d(t,"b",(function(){return elementUnref})),n.d(t,"c",(function(){return isRootElement})),n.d(t,"e",(function(){return matchSelector})),n.d(t,"a",(function(){return createNodesRef}));var r=n(229),o=n.n(r),c=n(31),i=n(164);function isWindow(e){return e===window}function elementUnref(e){return null==e?e:"current"in e?e.current:e}function isRootElement(e){return 1===(null==e?void 0:e.nodeType)&&"ROOT"===(null==e?void 0:e.tagName)}function matchSelector(e,t){return o()(e,"#","")===t}function createNodesRef(e){if(isRootElement(e))return Object(c.createSelectorQuery)().selectViewport();if(i.b){for(var t=e;t.parentNode&&!isRootElement(t.parentNode);)t=t.parentNode;if(t&&t!==e)return Object(c.createSelectorQuery)().select("#".concat(t.uid,">>>#").concat(e.uid))}return Object(c.createSelectorQuery)().select("#"+e.uid)}},"183":function(e,t,n){var r=n(162),o=n(187),c=n(196),i=n(179);e.exports=function castPath(e,t){return r(e)?e:o(e,t)?[e]:c(i(e))}},"184":function(e,t,n){"use strict";n.d(t,"a",(function(){return Block}));var r=n(8),o=n(158),c=n(157),i=n.n(c),a=(n(23),n(171)),u=(n(185),n(160));function Block(e){var t,n=e.className,c=e.variant,s=e.title,l=e.children;return Object(u.jsxs)(o.h,{"className":i()(Object(a.a)("block"),n),"children":[s&&Object(u.jsx)(o.h,{"className":Object(a.a)("block__title"),"children":s}),Object(u.jsx)(o.h,{"className":i()((t={},Object(r.a)(t,Object(a.a)("block__content"),"card"!==c),Object(r.a)(t,Object(a.a)("block__card"),"card"===c),t)),"children":l})]})}},"185":function(e,t,n){},"186":function(e,t,n){"use strict";n.d(t,"b",(function(){return isIconElement})),n.d(t,"a",(function(){return cloneIconElement}));var r=n(191),o=n.n(r),c=n(157),i=n.n(c),a=n(23),u=n(177),s=["className"];function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){_defineProperty(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}function _objectWithoutProperties(e,t){if(null==e)return{};var n,r,o=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function isIconElement(e){if(!Object(a.isValidElement)(e))return!1;var t=e;return o()(t.type,u.c)}function cloneIconElement(e,t){if(!isIconElement(e))return Object(a.isValidElement)(e)?Object(a.cloneElement)(e,t):e;var n=t.className,r=_objectWithoutProperties(t,s),o=e,c=o.props,u=_objectSpread(_objectSpread({},c),{},{"className":i()(c.className,n)},r);return Object(a.cloneElement)(o,u)}},"187":function(e,t,n){var r=n(16),o=n(162),c=n(181),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;e.exports=function isKey(e,t){if(o(e))return!1;var n=r(e);return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!c(e))||(a.test(e)||!i.test(e)||null!=t&&e in Object(t))}},"191":function(e,t,n){var r=n(199),o=n(200);e.exports=function hasIn(e,t){return null!=e&&o(e,t,r)}},"194":function(e,t,n){var r=n(398),o=n(169),c=Object.prototype,i=c.hasOwnProperty,a=c.propertyIsEnumerable,u=r(function(){return arguments}())?r:function(e){return o(e)&&i.call(e,"callee")&&!a.call(e,"callee")};e.exports=u},"196":function(e,t,n){var r=n(197),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,c=/\\(\\)?/g,i=r((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(o,(function(e,n,r,o){t.push(r?o.replace(c,"$1"):n||e)})),t}));e.exports=i},"197":function(e,t,n){var r=n(198);e.exports=function memoizeCapped(e){var t=r(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}},"198":function(e,t,n){var r=n(210);function memoize(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function memoized(){var n=arguments,r=t?t.apply(this,n):n[0],o=memoized.cache;if(o.has(r))return o.get(r);var c=e.apply(this,n);return memoized.cache=o.set(r,c)||o,c};return n.cache=new(memoize.Cache||r),n}memoize.Cache=r,e.exports=memoize},"199":function(e,t){e.exports=function baseHasIn(e,t){return null!=e&&t in Object(e)}},"200":function(e,t,n){var r=n(183),o=n(194),c=n(162),i=n(192),a=n(243),u=n(174);e.exports=function hasPath(e,t,n){for(var s=-1,l=(t=r(t,e)).length,f=!1;++s<l;){var p=u(t[s]);if(!(f=null!=e&&n(e,p)))break;e=e[p]}return f||++s!=l?f:!!(l=null==e?0:e.length)&&a(l)&&i(p,l)&&(c(e)||o(e))}},"210":function(e,t,n){var r=n(386),o=n(393),c=n(395),i=n(396),a=n(397);function MapCache(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}MapCache.prototype.clear=r,MapCache.prototype.delete=o,MapCache.prototype.get=c,MapCache.prototype.has=i,MapCache.prototype.set=a,e.exports=MapCache},"227":function(e,t,n){var r=n(381),o=n(382),c=n(383),i=n(384),a=n(385);function ListCache(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ListCache.prototype.clear=r,ListCache.prototype.delete=o,ListCache.prototype.get=c,ListCache.prototype.has=i,ListCache.prototype.set=a,e.exports=ListCache},"229":function(e,t,n){var r=n(179);e.exports=function replace(){var e=arguments,t=r(e[0]);return e.length<3?t:t.replace(e[1],e[2])}},"230":function(e,t,n){var r=n(179),o=0;e.exports=function uniqueId(e){var t=++o;return r(e)+t}},"246":function(e,t,n){var r=n(352),o=n(355);e.exports=function getNative(e,t){var n=o(e,t);return r(n)?n:void 0}},"247":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return u})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return l}));var r=n(170),o=Object(r.a)("hairline"),c="".concat(o,"--top"),i="".concat(o,"--left"),a="".concat(o,"--bottom"),u="".concat(o,"--surround"),s="".concat(o,"--top-bottom"),l="".concat(o,"-unset--top-bottom")},"264":function(e,t,n){var r=n(267),o=n(287),c=n(162),i=n(181),a=r?r.prototype:void 0,u=a?a.toString:void 0;e.exports=function baseToString(e){if("string"==typeof e)return e;if(c(e))return o(e,baseToString)+"";if(i(e))return u?u.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}},"266":function(e,t,n){var r=n(215);e.exports=function assocIndexOf(e,t){for(var n=e.length;n--;)if(r(e[n][0],t))return n;return-1}},"268":function(e,t,n){var r=n(246)(Object,"create");e.exports=r},"269":function(e,t,n){var r=n(394);e.exports=function getMapData(e,t){var n=e.__data__;return r(t)?n["string"==typeof t?"string":"hash"]:n.map}},"279":function(e,t,n){var r=n(246)(n(234),"Map");e.exports=r},"287":function(e,t){e.exports=function arrayMap(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}},"344":function(e,t){var n=Function.prototype.toString;e.exports=function toSource(e){if(null!=e){try{return n.call(e)}catch(e){}try{return e+""}catch(e){}}return""}},"352":function(e,t,n){var r=n(201),o=n(353),c=n(203),i=n(344),a=/^\[object .+?Constructor\]$/,u=Function.prototype,s=Object.prototype,l=u.toString,f=s.hasOwnProperty,p=RegExp("^"+l.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function baseIsNative(e){return!(!c(e)||o(e))&&(r(e)?p:a).test(i(e))}},"353":function(e,t,n){var r,o=n(354),c=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";e.exports=function isMasked(e){return!!c&&c in e}},"354":function(e,t,n){var r=n(234)["__core-js_shared__"];e.exports=r},"355":function(e,t){e.exports=function getValue(e,t){return null==e?void 0:e[t]}},"381":function(e,t){e.exports=function listCacheClear(){this.__data__=[],this.size=0}},"382":function(e,t,n){var r=n(266),o=Array.prototype.splice;e.exports=function listCacheDelete(e){var t=this.__data__,n=r(t,e);return!(n<0)&&(n==t.length-1?t.pop():o.call(t,n,1),--this.size,!0)}},"383":function(e,t,n){var r=n(266);e.exports=function listCacheGet(e){var t=this.__data__,n=r(t,e);return n<0?void 0:t[n][1]}},"384":function(e,t,n){var r=n(266);e.exports=function listCacheHas(e){return r(this.__data__,e)>-1}},"385":function(e,t,n){var r=n(266);e.exports=function listCacheSet(e,t){var n=this.__data__,o=r(n,e);return o<0?(++this.size,n.push([e,t])):n[o][1]=t,this}},"386":function(e,t,n){var r=n(387),o=n(227),c=n(279);e.exports=function mapCacheClear(){this.size=0,this.__data__={"hash":new r,"map":new(c||o),"string":new r}}},"387":function(e,t,n){var r=n(388),o=n(389),c=n(390),i=n(391),a=n(392);function Hash(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Hash.prototype.clear=r,Hash.prototype.delete=o,Hash.prototype.get=c,Hash.prototype.has=i,Hash.prototype.set=a,e.exports=Hash},"388":function(e,t,n){var r=n(268);e.exports=function hashClear(){this.__data__=r?r(null):{},this.size=0}},"389":function(e,t){e.exports=function hashDelete(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},"390":function(e,t,n){var r=n(268),o=Object.prototype.hasOwnProperty;e.exports=function hashGet(e){var t=this.__data__;if(r){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return o.call(t,e)?t[e]:void 0}},"391":function(e,t,n){var r=n(268),o=Object.prototype.hasOwnProperty;e.exports=function hashHas(e){var t=this.__data__;return r?void 0!==t[e]:o.call(t,e)}},"392":function(e,t,n){var r=n(268);e.exports=function hashSet(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=r&&void 0===t?"__lodash_hash_undefined__":t,this}},"393":function(e,t,n){var r=n(269);e.exports=function mapCacheDelete(e){var t=r(this,e).delete(e);return this.size-=t?1:0,t}},"394":function(e,t,n){var r=n(16);e.exports=function isKeyable(e){var t=r(e);return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},"395":function(e,t,n){var r=n(269);e.exports=function mapCacheGet(e){return r(this,e).get(e)}},"396":function(e,t,n){var r=n(269);e.exports=function mapCacheHas(e){return r(this,e).has(e)}},"397":function(e,t,n){var r=n(269);e.exports=function mapCacheSet(e,t){var n=r(this,e),o=n.size;return n.set(e,t),this.size+=n.size==o?0:1,this}},"398":function(e,t,n){var r=n(173),o=n(169);e.exports=function baseIsArguments(e){return o(e)&&"[object Arguments]"==r(e)}},"604":function(e,t,n){},"605":function(e,t,n){},"650":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return NavbarDemo}));n(161),n(604);var r=n(8),o=n(158),c=n(157),i=n.n(c),a=n(23),u=n(172),s=n(159),l=n(247),f=n(188),p=n(186),h=["className","icon","children"];function _objectWithoutProperties(e,t){if(null==e)return{};var n,r,o=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=function NavBarLeft(e){var t=e.className,n=e.icon,r=void 0===n?a.createElement(f.ArrowLeft,null):n,c=e.children,u=_objectWithoutProperties(e,h);return a.createElement(o.h,Object.assign({"className":i()(Object(s.a)("navbar__left"),t)},u),r&&Object(p.a)(r,{"className":Object(s.a)("navbar__icon")}),Object(a.isValidElement)(c)?c:a.createElement(o.h,{"className":Object(s.a)("navbar__text"),"children":c}))},v=["className","icon","children"];function navbar_right_objectWithoutProperties(e,t){if(null==e)return{};var n,r,o=function navbar_right_objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=function NavBarRight(e){var t=e.className,n=e.icon,r=e.children,c=navbar_right_objectWithoutProperties(e,v);return a.createElement(o.h,Object.assign({"className":i()(Object(s.a)("navbar__right"),t)},c),n&&Object(p.a)(n,{"className":Object(s.a)("navbar__icon")}),Object(a.isValidElement)(r)?r:a.createElement(o.h,{"className":Object(s.a)("navbar__text"),"children":r}))},j=["className"];function navbar_title_objectWithoutProperties(e,t){if(null==e)return{};var n,r,o=function navbar_title_objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var O=function NavBarTitle(e){var t=e.className,n=navbar_title_objectWithoutProperties(e,j);return a.createElement(o.h,Object.assign({"className":i()(Object(s.a)("navbar__title"),t)},n))},m=["className","bordered","fixed","placeholder","title","children"];function navbar_objectWithoutProperties(e,t){if(null==e)return{};var n,r,o=function navbar_objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var _=function Navbar(e){var t=e.className,n=e.bordered,c=e.fixed,f=e.placeholder,p=e.title,h=e.children,v=navbar_objectWithoutProperties(e,m),j=function useNavbarChildren(e){return Object(a.useMemo)((function(){var t={"left":void 0,"right":void 0,"title":void 0};return a.Children.forEach(e,(function(e){if(Object(a.isValidElement)(e)){var n=e,r=n.type;r===b?t.left=n:r===d?t.right=n:r===O&&(t.title=n)}})),t}),[e])}(h),_=j.left,y=j.title,g=j.right,x=Object(a.useRef)(),w=Object(u.b)(x,{"className":"navbar__placeholder"}),P=Object(a.useMemo)((function(){var e;return a.createElement(o.h,Object.assign({"ref":x,"className":i()(Object(s.a)("navbar"),(e={},Object(r.a)(e,l.b,n),Object(r.a)(e,Object(s.a)("navbar--fixed"),c),e),t)},v),a.createElement(o.h,{"className":i()(Object(s.a)("navbar__content"))},_,null!=y?y:a.createElement(o.h,{"className":i()(Object(s.a)("navbar__title")),"children":p}),g))}),[n,t,c,_,v,g,y,p]);return c&&f?a.createElement(w,{"children":P}):P};_.NavLeft=b,_.NavRight=d,_.Title=O;var y=_,g=n(184),x=n(189),w=(n(605),n(160));function NavbarDemo(){return Object(w.jsxs)(x.a,{"title":"Navbar 导航栏","className":"navbar-demo","children":[Object(w.jsx)(g.a,{"title":"基础用法","children":Object(w.jsxs)(y,{"title":"标题","children":[Object(w.jsx)(y.NavLeft,{"children":"返回"}),Object(w.jsx)(y.NavRight,{"children":"按钮"})]})}),Object(w.jsx)(g.a,{"title":"使用 NavLeft 和 NavRight","children":Object(w.jsxs)(y,{"children":[Object(w.jsx)(y.NavLeft,{"children":"返回"}),Object(w.jsx)(y.Title,{"children":"标题"}),Object(w.jsx)(y.NavRight,{"icon":Object(w.jsx)(f.Search,{})})]})})]})}}}]);
//# sourceMappingURL=34.56b18a6d.js.map