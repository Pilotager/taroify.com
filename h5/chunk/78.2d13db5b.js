(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{"179":function(e,t,r){"use strict";r.d(t,"a",(function(){return addUnitPx})),r.d(t,"b",(function(){return getSizeStyle})),r.d(t,"c",(function(){return unitToPx}));var n,c=r(186),o=r.n(c),i=r(182),u=r.n(i);function addUnitPx(e){return void 0===e?"":"".concat(unitToPx(e),"px")}function getSizeStyle(e){if(u()(e)||o()(e)){var t=addUnitPx(e);return{"width":t,"height":t}}return{}}function convertRem(e){return+(e=e.replace(/rem/g,""))*function getRootFontSize(){if(!n){var e=document.documentElement,t=e.style.fontSize||window.getComputedStyle(e).fontSize;n=parseFloat(t)}return n}()}function unitToPx(e){return"number"==typeof e?e:e.includes("px")?function convertPx(e){return+(e=e.replace(/px/g,""))}(e):e.includes("rem")?convertRem(e):e.includes("vw")?function convertVw(e){return+(e=e.replace(/vw/g,""))*window.innerWidth/100}(e):e.includes("vh")?function convertVh(e){return+(e=e.replace(/vh/g,""))*window.innerHeight/100}(e):parseFloat(e)}},"180":function(e,t,r){"use strict";r.d(t,"c",(function(){return usePreviousRef})),r.d(t,"b",(function(){return usePrevious})),r.d(t,"e",(function(){return useRendered})),r.d(t,"f",(function(){return useRenderedRef})),r.d(t,"g",(function(){return useToRef})),r.d(t,"d",(function(){return useRefs})),r.d(t,"a",(function(){return useObject})),r.d(t,"h",(function(){return useValue}));var n=r(197),c=r.n(n),o=r(237),i=r.n(o),u=r(24),a=r(187);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}function usePreviousRef(e){var t=Object(u.useRef)(e);return Object(u.useEffect)((function(){t.current=e})),t}function usePrevious(e){return usePreviousRef(e).current}function useRendered(e){return null==e?void 0:e()}function useRenderedRef(e){var t=Object(u.useRef)();return e&&(t.current=e()),t}function useToRef(e){var t=Object(u.useRef)();return t.current=e,t}function useRefs(){var e=Object(u.useRef)([]),t=Object(u.useCallback)((function(t){return function(r){e.current[t]||(e.current[t]=Object(u.createRef)()),e.current[t].current=r}}),[]);return[e.current,t]}function useObject(e){var t=Object(a.f)(),r=Object(u.useRef)(e),n=Object(u.useRef)(),c=Object(u.useRef)();i()(n.current,e)||(c.current=n.current,n.current=e,r.current=e);var o=Object(u.useCallback)((function(e){r.current=_objectSpread(_objectSpread({},r.current),e),t()}),[]),s=Object(u.useCallback)((function(){return r.current}),[]);return Object(u.useMemo)((function(){return{"object":r.current,"getObject":s,"setObject":o}}),[r.current,s,o])}function useValue(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.defaultValue,n=t.value,o=t.initialValue,i=t.onChange,s=Object(a.f)(),l=useToRef(n),f=Object(u.useRef)(null!==(e=null!=r?r:l.current)&&void 0!==e?e:o);void 0!==l.current&&(f.current=l.current);var b=Object(u.useCallback)((function(e,t){var r;c()(l.current)&&(f.current=e,s()),null===(r=null!=t?t:i)||void 0===r||r(e)}),[i]),j=Object(u.useCallback)((function(){return f.current}),[]);return Object(u.useMemo)((function(){return{"value":f.current,"getValue":j,"setValue":b}}),[f.current,j,b])}},"183":function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return c}));var n="undefined"!=typeof document&&!!document.scripts,c=!1},"184":function(e,t,r){"use strict";r.d(t,"a",(function(){return useMounted}));var n=r(185);function useMounted(e){Object(n.a)(e,[])}},"185":function(e,t,r){"use strict";var n=r(202),c=r.n(n),o=r(171),i=r(24);t.a=function useRenderedEffect(e,t){var r=Object(i.useRef)();Object(i.useEffect)((function(){return Object(o.a)((function(){var t=null==e?void 0:e();c()(t)&&(r.current=t)})),r.current}),t)}},"187":function(e,t,r){"use strict";r.d(t,"a",(function(){return i.a})),r.d(t,"b",(function(){return usePlaceholder})),r.d(t,"c",(function(){return s.a})),r.d(t,"d",(function(){return l})),r.d(t,"e",(function(){return j})),r.d(t,"f",(function(){return d})),r.d(t,"g",(function(){return v}));var n=r(19),c=r(24),o=r(192),i=r(184);var u=r(173),a=r(179);function usePlaceholder(e,t){var r=t.className,s=function useHeight(e){var t=Object(c.useState)(0),r=Object(n.a)(t,2),u=r[0],a=r[1];return Object(i.a)((function(){return Object(o.a)(e).then((function(e){return e.height})).then(a)})),u}(e);return function(e){var t=e.children;return c.createElement(u.j,{"className":r,"style":{"height":s?"".concat(Object(a.a)(s)):""},"children":t})}}var s=r(185);var l=function useTimeout(){var e=Object(c.useRef)(),t=Object(c.useRef)(),r=Object(c.useRef)(),n=Object(c.useRef)(),o=Object(c.useCallback)((function(){e.current&&(clearTimeout(e.current),e.current=void 0)}),[]),i=Object(c.useCallback)((function(c,o){if(!e.current){t.current=c,r.current=o;for(var i=arguments.length,u=new Array(i>2?i-2:0),a=2;a<i;a++)u[a-2]=arguments[a];n.current=u,e.current=setTimeout(c,o,u)}}),[]),u=Object(c.useCallback)((function(e,c){if(o(),e){for(var u=arguments.length,a=new Array(u>2?u-2:0),s=2;s<u;s++)a[s-2]=arguments[s];i(e,c,a)}else t.current&&i(t.current,r.current,n.current)}),[]);return Object(c.useMemo)((function(){return{"restart":u,"start":i,"stop":o}}),[u,i,o])},f=r(230),b=r.n(f);var j=function useUniqueId(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"t_",t=Object(c.useRef)(b()(e));return t.current},O=function updateReducer(e){return(e+1)%1e6};var d=function useUpdate(){var e=Object(c.useReducer)(O,0);return Object(n.a)(e,2)[1]},p=r(342);var v=function useWindowResize(e){Object(c.useEffect)((function(){return null===p.b||void 0===p.b||Object(p.b)(e),function(){return null===p.a||void 0===p.a?void 0:Object(p.a)(e)}}),[e])}},"192":function(e,t,r){"use strict";r.d(t,"c",(function(){return makeRect})),r.d(t,"a",(function(){return getRect})),r.d(t,"b",(function(){return getRects}));var n=r(19),c=r(183),o=r(198);function makeRect(e,t){return{"top":0,"left":0,"right":e,"bottom":t,"width":e,"height":t}}function getRect(e){var t=Object(o.a)(e);if(t){if(c.a){if(Object(o.c)(t)){var r=t.innerWidth,i=t.innerHeight;return Promise.resolve(makeRect(r,i))}return Promise.resolve(t.getBoundingClientRect())}return new Promise((function(e){Object(o.f)(t).boundingClientRect().exec((function(r){var c=Object(n.a)(r,1)[0];if(Object(o.b)(t)){var i=c.width,u=c.height;e(makeRect(i,u))}else e(c)}))}))}return Promise.resolve(makeRect(0,0))}function getRects(e,t){var r=Object(o.a)(e);if(r){if(c.a){var i=[];return r.querySelectorAll(t).forEach((function(e){return i.push(e.getBoundingClientRect())})),Promise.resolve(i)}return new Promise((function(e){Object(o.e)(r,t).boundingClientRect().exec((function(t){var r=Object(n.a)(t,1)[0];return e(r)}))}))}return Promise.resolve([])}},"193":function(e,t,r){"use strict";r.d(t,"b",(function(){return isIconElement})),r.d(t,"a",(function(){return cloneIconElement}));var n=r(218),c=r.n(n),o=r(174),i=r.n(o),u=r(24),a=r(196),s=["className"];function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}function _objectWithoutProperties(e,t){if(null==e)return{};var r,n,c=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}function isIconElement(e){if(!Object(u.isValidElement)(e))return!1;var t=e;return c()(t.type,a.c)}function cloneIconElement(e,t){if(!isIconElement(e))return Object(u.isValidElement)(e)?Object(u.cloneElement)(e,t):e;var r=t.className,n=_objectWithoutProperties(t,s),c=e,o=c.props,a=_objectSpread(_objectSpread({},o),{},{"className":i()(o.className,r)},n);return Object(u.cloneElement)(c,a)}},"198":function(e,t,r){"use strict";r.d(t,"c",(function(){return isWindow})),r.d(t,"a",(function(){return elementUnref})),r.d(t,"b",(function(){return isRootElement})),r.d(t,"d",(function(){return matchSelector})),r.d(t,"f",(function(){return queryNodesRef})),r.d(t,"e",(function(){return queryAllNodesRef}));var n=r(227),c=r.n(n),o=r(345),i=r(183);function isWindow(e){return e===window}function elementUnref(e){return null==e?e:"current"in e?e.current:e}function isRootElement(e){return 1===(null==e?void 0:e.nodeType)&&"ROOT"===(null==e?void 0:e.tagName)}function matchSelector(e,t){return c()(e,"#","")===t}function ancestorCustomWrapper(e){if(i.b){for(var t=e;t.parentNode&&!isRootElement(t.parentNode);)t=t.parentNode;if(t&&t!==e)return t}}function queryNodesRef(e){if(isRootElement(e))return Object(o.a)().selectViewport();var t=ancestorCustomWrapper(e);return t?Object(o.a)().select("#".concat(t.uid,">>>#").concat(e.uid)):Object(o.a)().select("#"+e.uid)}function queryAllNodesRef(e,t){if(isRootElement(e))return Object(o.a)().selectViewport();var r=ancestorCustomWrapper(e);return r?Object(o.a)().selectAll("#".concat(r.uid,">>>#").concat(e.uid).concat(t)):Object(o.a)().selectAll("#"+e.uid+t)}},"199":function(e,t,r){"use strict";r.d(t,"c",(function(){return stopPropagation})),r.d(t,"b",(function(){return preventDefault})),r.d(t,"a",(function(){return getClientCoordinates}));var n=r(183);function stopPropagation(e){e.stopPropagation()}function preventDefault(e,t){n.a?("boolean"!=typeof e.cancelable||e.cancelable)&&e.preventDefault():e.preventDefault(),t&&stopPropagation(e)}function getClientCoordinates(e){var t=e.clientX,r=e.clientY,n=e.touches;return t&&r?{"clientX":t,"clientY":r}:n[0]}},"200":function(e,t,r){"use strict";r.d(t,"a",(function(){return Block}));var n=r(15),c=r(173),o=r(174),i=r.n(o),u=(r(24),r(191)),a=(r(201),r(176));function Block(e){var t,r=e.className,o=e.variant,s=e.title,l=e.children;return Object(a.jsxs)(c.j,{"className":i()(Object(u.a)("block"),r),"children":[s&&Object(a.jsx)(c.j,{"className":Object(u.a)("block__title"),"children":s}),Object(a.jsx)(c.j,{"className":i()((t={},Object(n.a)(t,Object(u.a)("block__content"),"card"!==o),Object(n.a)(t,Object(u.a)("block__card"),"card"===o),t)),"children":l})]})}},"201":function(e,t,r){},"249":function(e,t,r){"use strict";r.d(t,"a",(function(){return useTouch}));var n,c=r(24);function emptyFunction(){}function useTouch(){var e=Object(c.useRef)({"startX":0,"startY":0,"deltaX":0,"deltaY":0,"offsetX":0,"offsetY":0,"isVertical":function isVertical(){return!1},"isHorizontal":function isHorizontal(){return!1},"start":emptyFunction,"move":emptyFunction,"reset":emptyFunction}),t=Object(c.useCallback)((function(){return e.current.direction===n.Vertical}),[]),r=Object(c.useCallback)((function(){return e.current.direction===n.Horizontal}),[]),o=Object(c.useCallback)((function(){e.current.deltaX=0,e.current.deltaY=0,e.current.offsetX=0,e.current.offsetY=0,e.current.direction=void 0}),[]),i=Object(c.useCallback)((function(t){o(),e.current.startX=t.touches[0].clientX,e.current.startY=t.touches[0].clientY}),[o]),u=Object(c.useCallback)((function(t){var r=t.touches[0];e.current.deltaX=r.clientX<0?0:r.clientX-e.current.startX,e.current.deltaY=r.clientY-e.current.startY,e.current.offsetX=Math.abs(e.current.deltaX),e.current.offsetY=Math.abs(e.current.deltaY),e.current.direction||(e.current.direction=function getDirection(e,t){return e>t&&e>10?n.Horizontal:t>e&&t>10?n.Vertical:void 0}(e.current.offsetX,e.current.offsetY))}),[]);return Object(c.useEffect)((function(){e.current.isHorizontal!==r&&(e.current.isHorizontal=r)}),[e,r]),Object(c.useEffect)((function(){e.current.isVertical!==t&&(e.current.isVertical=t)}),[e,t]),Object(c.useEffect)((function(){e.current.reset!==o&&(e.current.reset=o)}),[e,o]),Object(c.useEffect)((function(){e.current.start!==i&&(e.current.start=i)}),[e,i]),Object(c.useEffect)((function(){e.current.move!==u&&(e.current.move=u)}),[e,u]),e.current}!function(e){e.Horizontal="horizontal",e.Vertical="vertical"}(n||(n={}))},"288":function(e,t,r){"use strict";r.d(t,"a",(function(){return cancelRaf})),r.d(t,"d",(function(){return raf})),r.d(t,"c",(function(){return doubleRaf}));var n=r(267),c=r.n(n),o=r(178),i=r.n(o),u=r(182),a=r.n(u),s=r(301),l=r.n(s);function cancelRaf(e){a()(e)?s.cancel(e):i()(e)&&c()(e,cancelRaf)}function raf(e){return l.a(e)}function doubleRaf(e){var t=[0,0];return t[1]=raf((function(){t[0]=raf(e)})),t}t.b=raf},"315":function(e,t,r){"use strict";r.d(t,"a",(function(){return getComputedStyle}));var n=r(183),c=r(198);function getComputedStyle(e,t){var r=Object(c.a)(e);return r?n.a?Promise.resolve(window.getComputedStyle(r)):new Promise((function(e){Object(c.f)(r).fields({"computedStyle":t},(function(t){return e(t)})).exec()})):Promise.resolve({})}},"337":function(e,t,r){"use strict";var n=r(15),c=r(17),o=r.n(c),i=r(19),u=r(270),a=r.n(u),s=r(173),l=r(171),f=r(174),b=r.n(f),j=r(24),O=r(187),d=r(175),p=r(315),v=r(199),h=r(192),m=r(179),y=r(288),w=r(180),g=r(249),P=r(222),_=r.n(P),x=Object(j.createContext)({"itemInstances":[]}),S=["className","children"];function _objectWithoutProperties(e,t){if(null==e)return{};var r,n,c=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}function SwiperIndicator(e){var t,r=e.className,c=e.children,o=_objectWithoutProperties(e,S),i=Object(j.useContext)(x),u=i.indicator,a=void 0===u?0:u,l=i.direction,f=i.count,O=Object(j.useCallback)((function(e){return j.createElement(s.j,{"key":e,"className":b()(Object(d.a)("swiper__indicator"),Object(n.a)({},Object(d.a)("swiper__indicator--active"),e===a))})}),[a]),p=Object(j.useMemo)((function(){return!c&&_()(0,f).map(O)}),[c,f,O]);return j.createElement(s.j,Object.assign({"className":b()((t={},Object(n.a)(t,Object(d.a)("swiper__indicators"),!c),Object(n.a)(t,Object(d.a)("swiper__indicators--vertical"),!c&&"vertical"===l),t),r),"children":null!=c?c:p},o))}var R=["__dataIndex__","className","style","children"];function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}function swiper_item_objectWithoutProperties(e,t){if(null==e)return{};var r,n,c=function swiper_item_objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}function SwiperItem(e){var t=e.__dataIndex__,r=void 0===t?0:t,n=e.className,c=e.style,o=e.children,u=swiper_item_objectWithoutProperties(e,R),a=Object(j.useContext)(x),l=a.lazyRender,f=a.size,p=a.direction,v=a.loop,h=a.indicator,y=void 0===h?0:h,g=a.count,P=void 0===g?0:g,_=a.itemInstances,S="vertical"===p,E=Object(j.useRef)(!1),k=Object(j.useRef)(!1),N=Object(j.useState)(0),C=Object(i.a)(N,2),I=C[0],W=C[1],D=Object(j.useMemo)((function(){if(!l||E.current)return!0;if(!k.current&&0!==y)return!1;var e=y,t=P-1,n=0===e&&v?t:e-1,c=e===t&&v?0:e+1;return E.current=r===e||r===n||r===c,E.current}),[r,P,y,l,v]);Object(O.a)((function(){k.current=!0})),Object(j.useEffect)((function(){_[r]||(_[r]={"setOffset":W})}),[_,r]);var V=Object(w.e)((function(){var e={};f&&(e[S?"height":"width"]=Object(m.a)(f));return e.transform=I?"translate".concat(S?"Y":"X","(").concat(Object(m.a)(I),")"):"",e}));return j.createElement(s.j,Object.assign({"className":b()(Object(d.a)("swiper-item"),n),"style":_objectSpread(_objectSpread({},c),V),"children":D?o:void 0},u))}var E=["className","defaultValue","value","lazyRender","loop","touchable","autoplay","duration","width","height","direction","stopPropagation","children","onChange"];function asyncGeneratorStep(e,t,r,n,c,o,i){try{var u=e[o](i),a=u.value}catch(e){return void r(e)}u.done?t(a):Promise.resolve(a).then(n,c)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(n,c){var o=e.apply(t,r);function _next(e){asyncGeneratorStep(o,n,c,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(o,n,c,_next,_throw,"throw",e)}_next(void 0)}))}}function swiper_objectWithoutProperties(e,t){if(null==e)return{};var r,n,c=function swiper_objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}function swiper_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function swiper_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?swiper_ownKeys(Object(r),!0).forEach((function(t){swiper_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):swiper_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function swiper_defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}function getIndicatorValue(e,t){return(e+t)%t}var k=function Swiper(e){var t=e.className,r=e.defaultValue,c=e.value,u=e.lazyRender,f=e.loop,P=void 0===f||f,_=e.touchable,S=void 0===_||_,R=e.autoplay,k=void 0===R?0:R,N=e.duration,C=void 0===N?500:N,I=e.width,W=e.height,D=e.direction,V=void 0===D?"horizontal":D,B=e.stopPropagation,T=void 0===B||B,z=e.children,M=e.onChange,X=swiper_objectWithoutProperties(e,E),Y=Object(w.h)({"value":c,"defaultValue":r,"onChange":M}),K=Y.value,A=void 0===K?0:K,G=Y.setValue,H=Object(w.g)(A),F=function useSwiperChildren(e){var t={"items":[],"indicator":void 0,"count":0},r=0;return j.Children.forEach(e,(function(e,n){if(Object(j.isValidElement)(e)){var c=e,o=c.type;if(o===SwiperIndicator)t.indicator=c;else if(o===SwiperItem){var i=c.key;t.items.push(Object(j.cloneElement)(c,swiper_objectSpread(swiper_objectSpread({},c.props),{},{"key":null!=i?i:n,"__dataIndex__":r++})))}else t.items.push(c)}})),t.count=t.items.length,t}(z),L=F.count,U=F.indicator,q=F.items,J=Object(j.useMemo)((function(){return[]}),[]),$=Object(g.a)(),Q=Object(O.f)(),Z="vertical"===V,ee=Object(j.useRef)(),te=Object(j.useRef)(),re=Object(j.useState)(0),ne=Object(i.a)(re,2),ce=ne[0],oe=ne[1],ie=Object(j.useRef)(!1),ue=Object(j.useRef)(0),ae=Object(j.useRef)(0),se=Object(j.useRef)(),le=Object(w.f)((function(){return getIndicatorValue(A,L)})),fe=Object(w.f)((function(){return getIndicatorValue(ue.current,L)})),be=Object(j.useCallback)((function(){return Z?$.deltaY:$.deltaX}),[]),je=Object(j.useCallback)((function(){return $.direction===V}),[]),Oe=Object(w.f)((function(){var e,t;return{"width":null!=I?I:null===(e=te.current)||void 0===e?void 0:e.width,"height":null!=W?W:null===(t=te.current)||void 0===t?void 0:t.height}})),de=Object(w.f)((function(){return{"width":I,"height":W}})),pe=Object(w.f)((function(){var e,t,r;return null!==(e=Z?null===(t=Oe.current)||void 0===t?void 0:t.height:null===(r=Oe.current)||void 0===r?void 0:r.width)&&void 0!==e?e:0})),ve=Object(w.f)((function(){return L*pe.current})),he=Object(w.f)((function(){var e,t,r;return te.current?(null!==(e=Z?null===(t=te.current)||void 0===t?void 0:t.height:null===(r=te.current)||void 0===r?void 0:r.width)&&void 0!==e?e:0)-pe.current*L:0})),me=Object(w.f)((function(){return Math.ceil(Math.abs(he.current)/pe.current)})),ye=Object(j.useCallback)((function(e){return e?P?a()(ue.current+e,-1,L):a()(ue.current+e,0,me.current):ue.current}),[P,me,L]),we=Object(j.useCallback)((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=e*pe.current;P||(r=Math.min(r,-he.current));var n=t-r;return P||(n=a()(n,he.current,0)),n}),[pe,P,he]),ge=Object(j.useCallback)((function(e){var t=e.pace,r=void 0===t?0:t,n=e.offset,c=void 0===n?0:n,o=e.emitChange,i=void 0!==o&&o;if(!(L<=1)){var u=ye(r),a=we(u,c);if(P){if(J[0]&&a!==he.current){var s=a<he.current;J[0].setOffset(s?ve.current:0)}if(J[L-1]&&0!==a){var l=a>0;J[L-1].setOffset(l?-ve.current:0)}}var f=ue.current;ue.current=u,oe(a),i&&f!==u&&G(getIndicatorValue(u,L))}}),[L,ye,we,P,J,he,ve,G]),Pe=Object(j.useCallback)((function(){ie.current=!0,ue.current<=-1?ge({"pace":L}):ue.current>=L&&ge({"pace":-L})}),[L,ge]),_e=Object(j.useCallback)((function(e){Pe(),$.reset(),Object(y.c)((function(){var t;t=P&&e===L?0===ue.current?0:e:e%L,ie.current=!1,ge({"pace":t-ue.current,"emitChange":!0})}))}),[Pe,L,P,ge,$]),xe=Object(j.useCallback)((function(){Pe(),Object(y.c)((function(){ie.current=!1,ge({"pace":1,"emitChange":!0})}))}),[Pe,ge]),Se=Object(j.useCallback)((function(){se.current&&clearTimeout(se.current)}),[]),Re=Object(j.useCallback)((function(){Se(),k>0&&L>1&&(se.current=setTimeout((function(){xe(),Re()}),+k))}),[k,L,xe,Se]),Ee=Object(j.useCallback)((function(e){S&&($.start(e),ae.current=Date.now(),Se(),Pe())}),[Pe,Se,$,S]),ke=Object(j.useCallback)((function(e){if(S&&ie.current){$.move(e);var t=je();(t||$.offsetY>$.offsetX===Z)&&Object(v.b)(e,T),t&&ge({"offset":be()})}}),[je,be,ge,T,$,S,Z]),Ne=Object(j.useCallback)((function(){if(S&&ie.current){var e=Date.now()-ae.current,t=be(),r=t/e,n=Math.abs(r)>.25||Math.abs(t)>pe.current/2;ie.current=!1;var c=je();if(n&&c){var o,i=Z?$.offsetY:$.offsetX;o=P?i>0?t>0?-1:1:0:-Math[t>0?"ceil":"floor"](t/pe.current),ge({"pace":o,"emitChange":!0})}else t&&ge({"pace":0});Re()}}),[S,be,pe,je,Re,Z,$.offsetY,$.offsetX,P,ge]),Ce=Object(j.useCallback)((function(){return Promise.all([Object(h.a)(ee),Object(p.a)(ee,["width","height"])]).then((function(e){var t=Object(i.a)(e,2),r=t[0],n=t[1];return Object(h.c)("auto"===n.width?r.width:Object(m.c)(n.width),"auto"===n.height?r.height:Object(m.c)(n.height))}))}),[]),Ie=Object(j.useCallback)(_asyncToGenerator(o.a.mark((function _callee(){var e,t,r=arguments;return o.a.wrap((function _callee$(n){for(;;)switch(n.prev=n.next){case 0:if(e=r.length>0&&void 0!==r[0]?r[0]:H.current,ee.current){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,Ce();case 5:te.current=n.sent,L&&(e=Math.min(L-1,e)),ue.current=e,ie.current=!0,t=we(e),oe(t),t===ce&&Q(),J.forEach((function(e){return e.setOffset(0)}));case 13:case"end":return n.stop()}}),_callee)}))),[H,Ce,L,we,ce,J,Q]),We=Object(j.useCallback)((function(){return Object(l.a)((function(){return Ie(ue.current)}))}),[Ie]);Object(O.a)(Ie),Object(O.g)(We),Object(O.a)((function(){return Re(),Se})),Object(j.useEffect)((function(){var e=le.current;if(e!==fe.current)try{Se(),_e(e)}finally{Re()}}),[le.current]);var De=Object(w.e)((function(){var e={"transitionDuration":"".concat(ie.current?0:C,"ms"),"transform":"translate".concat(Z?"Y":"X","(").concat(Object(m.a)(ce),")")};if(pe.current){e[Z?"height":"width"]="".concat(Object(m.a)(ve.current));var t=Z?"width":"height",r=de.current[t];e[t]=r?Object(m.a)(r):""}return e}));return j.createElement(s.j,Object.assign({"ref":ee,"className":b()(Object(d.a)("swiper"),t)},X),j.createElement(x.Provider,{"value":{"lazyRender":u,"loop":P,"direction":V,"indicator":fe.current,"size":pe.current,"count":L,"itemInstances":J}},j.createElement(s.j,{"className":b()(Object(d.a)("swiper__track"),Object(n.a)({},Object(d.a)("swiper__track--vertical"),Z)),"catchMove":!0,"onTouchStart":Ee,"onTouchMove":ke,"onTouchEnd":Ne,"onTouchCancel":Ne,"style":De,"children":q}),U))};k.Item=SwiperItem,k.Indicator=SwiperIndicator;t.a=k},"374":function(e,t,r){"use strict";r(177),r(375)},"375":function(e,t,r){},"477":function(e,t,r){"use strict";r(177),r(478)},"478":function(e,t,r){},"518":function(e,t,r){"use strict";var n,c=r(15),o=r(173),i=r(174),u=r.n(i),a=r(24),s=r(175);!function(e){e.Mini="mini",e.Small="small",e.Medium="medium",e.Large="large"}(n||(n={}));var l=[n.Mini,n.Small,n.Medium,n.Large];function isPresetSize(e){return l.includes(e)}t.a=function WhiteSpace(e){var t=e.size,r=void 0===t?n.Medium:t,i=Object(a.useMemo)((function(){return{"height":isPresetSize(r)?"":r}}),[r]);return a.createElement(o.j,{"className":u()(Object(s.a)("white-space"),Object(c.a)({},Object(s.a)("white-space-size-".concat(r)),isPresetSize(r))),"style":i})}},"684":function(e,t,r){},"685":function(e,t,r){},"761":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return NoticeBarDemo}));r(374);var n=r(337),c=(r(477),r(518)),o=(r(177),r(684),r(15)),i=r(17),u=r.n(i),a=r(19),s=r(173),l=r(171),f=r(174),b=r.n(f),j=r(24),O=r(175),d=r(192),p=r(179),v=r(288),h=r(193),m=["className","children"];function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}function _objectWithoutProperties(e,t){if(null==e)return{};var r,n,c=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}function NoticeBarAction(e){var t=e.className,r=e.children,n=_objectWithoutProperties(e,m);return Object(h.a)(r,function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"className":b()(Object(O.a)("notice-bar__action"),t)},n))}var y=["className","children"];function notice_bar_icon_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function notice_bar_icon_defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}function notice_bar_icon_objectWithoutProperties(e,t){if(null==e)return{};var r,n,c=function notice_bar_icon_objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}function NoticeBarIcon(e){var t=e.className,r=e.children,n=notice_bar_icon_objectWithoutProperties(e,y);return Object(h.a)(r,function notice_bar_icon_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?notice_bar_icon_ownKeys(Object(r),!0).forEach((function(t){notice_bar_icon_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):notice_bar_icon_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"className":b()(Object(O.a)("notice-bar__icon"),t)},n))}var w=["className","delay","speed","wordwrap","scrollable","children"];function asyncGeneratorStep(e,t,r,n,c,o,i){try{var u=e[o](i),a=u.value}catch(e){return void r(e)}u.done?t(a):Promise.resolve(a).then(n,c)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(n,c){var o=e.apply(t,r);function _next(e){asyncGeneratorStep(o,n,c,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(o,n,c,_next,_throw,"throw",e)}_next(void 0)}))}}function notice_bar_objectWithoutProperties(e,t){if(null==e)return{};var r,n,c=function notice_bar_objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var g=function NoticeBar(e){var t=e.className,r=e.delay,n=void 0===r?1e3:r,c=e.speed,i=void 0===c?60:c,f=e.wordwrap,h=e.scrollable,m=void 0!==h&&h,y=e.children,g=notice_bar_objectWithoutProperties(e,w),P=function useChildren(e){var t={"icon":void 0,"text":[],"action":void 0};return j.Children.forEach(e,(function(e){if(Object(j.isValidElement)(e)){var r=e,n=r.type;n===NoticeBarIcon?t.icon=r:n===NoticeBarAction?t.action=r:t.text.push(e)}else t.text.push(e)})),t}(y),_=P.icon,x=P.text,S=P.action,R=!m&&!f,E=Object(j.useRef)(),k=Object(j.useRef)(),N=Object(j.useRef)(),C=Object(j.useState)(0),I=Object(a.a)(C,2),W=I[0],D=I[1],V=Object(j.useState)(0),B=Object(a.a)(V,2),T=B[0],z=B[1],M=Object(j.useRef)(0),X=Object(j.useRef)(0),Y=Object(j.useMemo)((function(){return{"transform":W?"translateX(".concat(Object(p.a)(W),")"):"","transitionDuration":"".concat(T,"s")}}),[W,T]);return Object(j.useEffect)((function start(){!function reset(){M.current=0,X.current=0,D(0),z(0)}(),E.current&&clearTimeout(E.current),E.current=setTimeout(_asyncToGenerator(u.a.mark((function _callee(){var e,t,r,n;return u.a.wrap((function _callee$(c){for(;;)switch(c.prev=c.next){case 0:if(k.current&&N.current&&m){c.next=2;break}return c.abrupt("return");case 2:return c.next=4,Object(d.a)(k);case 4:return e=c.sent,t=e.width,c.next=8,Object(d.a)(N);case 8:r=c.sent,n=r.width,(m||n>t)&&Object(v.c)((function(){M.current=t,X.current=n,D(-n),z(n/+i)}));case 11:case"end":return c.stop()}}),_callee)}))),+n)}),[]),j.createElement(s.j,Object.assign({"className":b()(Object(O.a)("notice-bar"),Object(o.a)({},Object(O.a)("notice-bar--wordwrap"),f),t)},g),_,j.createElement(s.j,{"ref":k,"className":Object(O.a)("notice-bar__wrap")},j.createElement(s.j,{"ref":N,"style":Y,"className":b()(Object(O.a)("notice-bar__content"),Object(o.a)({},Object(O.a)("ellipsis"),R)),"children":x,"onTransitionEnd":function onTransitionEnd(){D(M.current),z(0),Object(l.a)((function(){Object(v.c)((function(){D(-X.current),z((X.current+M.current)/+i)}))}))}})),S)};g.Icon=NoticeBarIcon,g.Action=NoticeBarAction;var P=g,_=r(188),x=r(200),S=r(204),R=(r(685),r(176));function BasicNoticeBar(){return Object(R.jsxs)(P,{"scrollable":!0,"children":[Object(R.jsx)(P.Icon,{"children":Object(R.jsx)(_.VolumeOutlined,{})}),"在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"]})}function ScrollableNoticeBar(){return Object(R.jsxs)(R.Fragment,{"children":[Object(R.jsx)(P,{"scrollable":!0,"children":"技术是开发它的人的共同灵魂。"}),Object(R.jsx)(c.a,{}),Object(R.jsx)(P,{"scrollable":!1,"children":"在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"})]})}function WordwrapNoticeBar(){return Object(R.jsx)(P,{"wordwrap":!0,"scrollable":!1,"children":"在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"})}function ActionNoticeBar(){return Object(R.jsxs)(R.Fragment,{"children":[Object(R.jsxs)(P,{"scrollable":!1,"children":["技术是开发它的人的共同灵魂。",Object(R.jsx)(P.Action,{"children":Object(R.jsx)(_.Cross,{})})]}),Object(R.jsx)(c.a,{}),Object(R.jsxs)(P,{"scrollable":!1,"children":["技术是开发它的人的共同灵魂。",Object(R.jsx)(P.Action,{"children":Object(R.jsx)(_.ArrowRight,{})})]})]})}function NoticeBarWithCustomStyle(){return Object(R.jsxs)(P,{"style":{"color":"#1989fa","background":"#ecf9ff"},"children":[Object(R.jsx)(P.Icon,{"children":Object(R.jsx)(_.InfoOutlined,{})}),"技术是开发它的人的共同灵魂。"]})}function NoticeBarWithVerticalScrolling(){return Object(R.jsxs)(P,{"children":[Object(R.jsx)(P.Icon,{"children":Object(R.jsx)(_.VolumeOutlined,{})}),Object(R.jsxs)(n.a,{"className":"notice-swiper","direction":"vertical","autoplay":3e3,"children":[Object(R.jsx)(n.a.Item,{"children":"内容 1"}),Object(R.jsx)(n.a.Item,{"children":"内容 2"}),Object(R.jsx)(n.a.Item,{"children":"内容 3"})]})]})}function NoticeBarDemo(){return Object(R.jsxs)(S.a,{"title":"NoticeBar 通知栏","className":"notice-bar-demo","children":[Object(R.jsx)(x.a,{"title":"基础用法","children":Object(R.jsx)(BasicNoticeBar,{})}),Object(R.jsx)(x.a,{"title":"滚动播放","children":Object(R.jsx)(ScrollableNoticeBar,{})}),Object(R.jsx)(x.a,{"title":"多行展示","children":Object(R.jsx)(WordwrapNoticeBar,{})}),Object(R.jsx)(x.a,{"title":"通知栏模式","children":Object(R.jsx)(ActionNoticeBar,{})}),Object(R.jsx)(x.a,{"title":"自定义样式","children":Object(R.jsx)(NoticeBarWithCustomStyle,{})}),Object(R.jsx)(x.a,{"title":"自定义样式","children":Object(R.jsx)(NoticeBarWithVerticalScrolling,{})})]})}}}]);
//# sourceMappingURL=78.2d13db5b.js.map