(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{"172":function(e,t,n){"use strict";n.d(t,"a",(function(){return createVanIconComponent}));var r,c=n(15),a=n(173),i=n(174),o=n.n(i),s=n(24),u=n(196);function addUnitPx(e){return void 0===e?"":"".concat(function unitToPx(e){if("number"==typeof e)return e;if(e.includes("px"))return function convertPx(e){return+(e=e.replace(/px/g,""))}(e);if(e.includes("rem"))return function convertRem(e){return+(e=e.replace(/rem/g,""))*function getRootFontSize(){if(!r){var e=document.documentElement,t=e.style.fontSize||window.getComputedStyle(e).fontSize;r=parseFloat(t)}return r}()}(e);if(e.includes("vw"))return function convertVw(e){return+(e=e.replace(/vw/g,""))*window.innerWidth/100}(e);if(e.includes("vh"))return function convertVh(e){return+(e=e.replace(/vh/g,""))*window.innerHeight/100}(e);return parseFloat(e)}(e),"px")}var l=["className","style","name","size","color"];function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){_defineProperty(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}function _objectWithoutProperties(e,t){if(null==e)return{};var n,r,c=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function VanIcon(e){var t,n=e.className,r=e.style,i=e.name,j=e.size,f=void 0===j?"inherit":j,b=e.color,p=void 0===b?"inherit":b,O=_objectWithoutProperties(e,l),d=u.a.includes(p),m=u.b.includes(f);return s.createElement(a.j,Object.assign({"className":o()("van-icon","van-icon-".concat(i),"taroify-icon",(t={},Object(c.a)(t,"taroify-icon--".concat(p),d),Object(c.a)(t,"taroify-icon--".concat(f),m),t),n),"style":_objectSpread({"color":d?"":p,"fontSize":m?"":addUnitPx(f)},r)},O))}function createVanIconComponent(e){function VanIconWrapper(t){return s.createElement(VanIcon,Object.assign({"name":e},t))}return VanIconWrapper[u.c]=u.c,VanIconWrapper}},"175":function(e,t,n){"use strict";var r=n(190);n.d(t,"a",(function(){return r.a}))},"177":function(e,t,n){"use strict";n(212),n(213),n(211)},"179":function(e,t,n){"use strict";n.d(t,"a",(function(){return addUnitPx})),n.d(t,"b",(function(){return getSizeStyle})),n.d(t,"c",(function(){return unitToPx}));var r,c=n(186),a=n.n(c),i=n(182),o=n.n(i);function addUnitPx(e){return void 0===e?"":"".concat(unitToPx(e),"px")}function getSizeStyle(e){if(o()(e)||a()(e)){var t=addUnitPx(e);return{"width":t,"height":t}}return{}}function convertRem(e){return+(e=e.replace(/rem/g,""))*function getRootFontSize(){if(!r){var e=document.documentElement,t=e.style.fontSize||window.getComputedStyle(e).fontSize;r=parseFloat(t)}return r}()}function unitToPx(e){return"number"==typeof e?e:e.includes("px")?function convertPx(e){return+(e=e.replace(/px/g,""))}(e):e.includes("rem")?convertRem(e):e.includes("vw")?function convertVw(e){return+(e=e.replace(/vw/g,""))*window.innerWidth/100}(e):e.includes("vh")?function convertVh(e){return+(e=e.replace(/vh/g,""))*window.innerHeight/100}(e):parseFloat(e)}},"190":function(e,t,n){"use strict";n.d(t,"a",(function(){return prefixClassname}));function prefixClassname(e){return"".concat("taroify-").concat(e)}},"191":function(e,t,n){"use strict";n.d(t,"a",(function(){return demoPrefixClassname}));function demoPrefixClassname(e){return"".concat("taroify-demo-").concat(e)}},"194":function(e,t,n){"use strict";var r=n(172),c=Object(r.a)("arrow-left");t.a=c},"196":function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return a}));var r=Symbol("__iconType__"),c=["inherit","mini","small","medium","large"],a=["inherit","default","primary","info","success","warning","danger"]},"200":function(e,t,n){"use strict";n.d(t,"a",(function(){return Block}));var r=n(15),c=n(173),a=n(174),i=n.n(a),o=(n(24),n(191)),s=(n(201),n(176));function Block(e){var t,n=e.className,a=e.variant,u=e.title,l=e.children;return Object(s.jsxs)(c.j,{"className":i()(Object(o.a)("block"),n),"children":[u&&Object(s.jsx)(c.j,{"className":Object(o.a)("block__title"),"children":u}),Object(s.jsx)(c.j,{"className":i()((t={},Object(r.a)(t,Object(o.a)("block__content"),"card"!==a),Object(r.a)(t,Object(o.a)("block__card"),"card"===a),t)),"children":l})]})}},"201":function(e,t,n){},"204":function(e,t,n){"use strict";n.d(t,"a",(function(){return Page}));var r,c=n(194),a=n(173),i=n(20),o=n(174),s=n.n(o),u=(n(24),n(191)),l=(n(214),n(176));function Target(e){var t=e.type,n=e.children;return Object(l.jsx)(l.Fragment,{"children":"h5"===t&&n})}function Page(e){var t=e.className,n=e.title,r=e.children;return Object(l.jsxs)(a.j,{"className":s()(Object(u.a)("page"),t),"children":[Object(l.jsx)(Target,{"type":"h5","children":Object(l.jsxs)(a.j,{"className":Object(u.a)("page__nav"),"children":[Object(l.jsx)(c.a,{"className":Object(u.a)("page__nav__back"),"onClick":function onClick(){return Object(i.d)()}}),Object(l.jsxs)(a.j,{"className":Object(u.a)("page__nav__title"),"children":[n," "]})]})}),Object(l.jsx)(a.j,{"className":Object(u.a)("page__content"),"children":r})]})}!function(e){e.H5="h5"}(r||(r={}))},"211":function(e,t,n){},"212":function(e,t,n){},"213":function(e,t,n){},"214":function(e,t,n){},"382":function(e,t,n){"use strict";n(177),n(383)},"383":function(e,t,n){},"392":function(e,t,n){"use strict";var r=n(15),c=n(19),a=n(178),i=n.n(a),o=n(210),s=n.n(o),u=n(186),l=n.n(u),j=n(182),f=n.n(j),b=n(173),p=n(174),O=n.n(p),d=n(24),m=n(175),y=n(179),x=Object(d.createContext)({"gutter":[void 0,void 0]}),v=["className","style","gutter","direction","wrap","justify","align","children"];function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){_defineProperty(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}function _objectWithoutProperties(e,t){if(null==e)return{};var n,r,c=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var h=["className","style","span","offset"];function flex_item_ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function flex_item_objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?flex_item_ownKeys(Object(n),!0).forEach((function(t){flex_item_defineProperty(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):flex_item_ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function flex_item_defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}function flex_item_objectWithoutProperties(e,t){if(null==e)return{};var n,r,c=function flex_item_objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var g=function Flex(e){var t,n=e.className,a=e.style,o=e.gutter,u=e.direction,j=void 0===u?"row":u,p=e.wrap,h=void 0===p?"nowrap":p,g=e.justify,w=void 0===g?"start":g,P=e.align,_=void 0===P?"start":P,S=e.children,I=_objectWithoutProperties(e,v),N=function useFlexGutter(e){return Object(d.useMemo)((function(){if(void 0===e)return[void 0,void 0];if(f()(e))return[e,e];if(l()(e)){var t=s()(e);return[t,t]}if(i()(e)){var n=Object(c.a)(e,2),r=n[0],a=n[1];return[s()(r),s()(a)]}return[0,0]}),[e])}(o),k=Object(c.a)(N,1)[0],E=Object(d.useMemo)((function(){var e={};if(k){var t=s()(k)/2;e.marginLeft=Object(y.a)(-t),e.marginRight=Object(y.a)(-t)}return{}}),[k]);return d.createElement(b.j,Object.assign({"className":O()(Object(m.a)("flex"),(t={},Object(r.a)(t,Object(m.a)("flex--row"),"row"===j),Object(r.a)(t,Object(m.a)("flex--row-reverse"),"row-reverse"===j),Object(r.a)(t,Object(m.a)("flex--column"),"column"===j),Object(r.a)(t,Object(m.a)("flex--column-reverse"),"column-reverse"===j),Object(r.a)(t,Object(m.a)("flex--nowrap"),"nowrap"===h),Object(r.a)(t,Object(m.a)("flex--wrap"),"wrap"===h),Object(r.a)(t,Object(m.a)("flex--wrap-reverse"),"wrap-reverse"===h),Object(r.a)(t,Object(m.a)("flex--justify-start"),"start"===w),Object(r.a)(t,Object(m.a)("flex--justify-center"),"center"===w),Object(r.a)(t,Object(m.a)("flex--justify-end"),"end"===w),Object(r.a)(t,Object(m.a)("flex--justify-space-around"),"space-around"===w),Object(r.a)(t,Object(m.a)("flex--justify-space-between"),"space-between"===w),Object(r.a)(t,Object(m.a)("flex--align-start"),"start"===_),Object(r.a)(t,Object(m.a)("flex--align-center"),"center"===_),Object(r.a)(t,Object(m.a)("flex--align-end"),"end"===_),Object(r.a)(t,Object(m.a)("flex--align-baseline"),"baseline"===_),Object(r.a)(t,Object(m.a)("flex--align-stretch"),"stretch"===_),t),n),"style":_objectSpread(_objectSpread({},a),E)},I),d.createElement(x.Provider,{"value":{"gutter":N},"children":S}))};g.Item=function FlexItem(e){var t,n=e.className,a=e.style,i=e.span,o=e.offset,s=flex_item_objectWithoutProperties(e,h),u=Object(d.useContext)(x).gutter,l=Object(c.a)(u,1)[0],j={};if(l){var f=l/2;j.paddingLeft=Object(y.a)(f),j.paddingRight=Object(y.a)(f)}return d.createElement(b.j,Object.assign({"className":O()(Object(m.a)("flex-item"),(t={},Object(r.a)(t,Object(m.a)("flex-item-".concat(i)),void 0!==i),Object(r.a)(t,Object(m.a)("flex-item-offset-".concat(o)),void 0!==o),t),n),"style":flex_item_objectSpread(flex_item_objectSpread({},a),j)},s))};t.a=g},"615":function(e,t,n){},"718":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return FlexDemo}));n(382);var r=n(392),c=(n(24),n(200)),a=n(204),i=(n(615),n(176));function FlexDemo(){return Object(i.jsxs)(a.a,{"title":"Flex 布局","className":"flex-demo","children":[Object(i.jsx)(c.a,{"title":"基础用法","children":Object(i.jsxs)(r.a,{"children":[Object(i.jsx)(r.a.Item,{"span":8,"children":"span: 8"}),Object(i.jsx)(r.a.Item,{"span":8,"children":"span: 8"}),Object(i.jsx)(r.a.Item,{"span":8,"children":"span: 8"})]})}),Object(i.jsx)(c.a,{"title":"在列元素之间增加间距","children":Object(i.jsxs)(r.a,{"gutter":12,"children":[Object(i.jsx)(r.a.Item,{"span":8,"children":"span: 8"}),Object(i.jsx)(r.a.Item,{"span":8,"children":"span: 8"}),Object(i.jsx)(r.a.Item,{"span":8,"children":"span: 8"})]})}),Object(i.jsxs)(c.a,{"title":"Flex 布局","children":[Object(i.jsxs)(r.a,{"children":[Object(i.jsx)(r.a.Item,{"span":6,"children":"span: 6"}),Object(i.jsx)(r.a.Item,{"span":6,"children":"span: 6"}),Object(i.jsx)(r.a.Item,{"span":6,"children":"span: 6"})]}),Object(i.jsxs)(r.a,{"children":[Object(i.jsx)(r.a.Item,{"offset":3,"span":6,"children":"span: 6"}),Object(i.jsx)(r.a.Item,{"span":6,"children":"span: 6"}),Object(i.jsx)(r.a.Item,{"span":6,"children":"span: 6"})]}),Object(i.jsxs)(r.a,{"justify":"space-between","children":[Object(i.jsx)(r.a.Item,{"span":6,"children":"span: 6"}),Object(i.jsx)(r.a.Item,{"span":6,"children":"span: 6"}),Object(i.jsx)(r.a.Item,{"span":6,"children":"span: 6"})]}),Object(i.jsxs)(r.a,{"justify":"space-around","children":[Object(i.jsx)(r.a.Item,{"span":6,"children":"span: 6"}),Object(i.jsx)(r.a.Item,{"span":6,"children":"span: 6"}),Object(i.jsx)(r.a.Item,{"span":6,"children":"span: 6"})]})]})]})}}}]);
//# sourceMappingURL=81.6b063f69.js.map