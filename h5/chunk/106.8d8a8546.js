(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{"133":function(t,n,o){"use strict";o.r(n),o.d(n,"taro_input_core",(function(){return u}));var i=o(32);function getTrueType(t,n,o){if("search"===n&&(t="search"),o&&(t="password"),void 0===t)return"text";if(!t)throw new Error("unexpected type");return"digit"===t&&(t="number"),t}function fixControlledValue(t){return null!=t?t:""}var u=function(){function e(t){var n=this;Object(i.g)(this,t),this.onInput=Object(i.c)(this,"input",7),this.onFocus=Object(i.c)(this,"focus",7),this.onBlur=Object(i.c)(this,"blur",7),this.onConfirm=Object(i.c)(this,"confirm",7),this.onChange=Object(i.c)(this,"change",7),this.onKeyDown=Object(i.c)(this,"keydown",7),this.isOnComposition=!1,this.onInputExcuted=!1,this.password=!1,this.disabled=!1,this.maxlength=140,this.autoFocus=!1,this.confirmType="done",this.nativeProps={},this.handleInput=function(t){t.stopPropagation();var o=n,i=o.type,u=o.maxlength,s=o.confirmType,a=o.password;if(!n.isOnComposition&&!n.onInputExcuted){var r=t.target.value,l=getTrueType(i,s,a);n.onInputExcuted=!0,"number"===l&&r&&u<=r.length&&(r=r.substring(0,u),t.target.value=r),n._value=r,n.onInput.emit({"value":r,"cursor":r.length})}},this.handleFocus=function(t){n.onInputExcuted=!1,n.onFocus.emit({"value":t.target.value})},this.handleBlur=function(t){n.onBlur.emit({"value":t.target.value})},this.handleChange=function(t){t.stopPropagation(),n.onChange.emit({"value":t.target.value})},this.handleKeyDown=function(t){var o=t.target.value,i=t.keyCode||t.code;n.onInputExcuted=!1,t.stopPropagation(),n.onKeyDown.emit({"value":o,"cursor":o.length,"keyCode":i}),13===i&&n.onConfirm.emit({"value":o})},this.handleComposition=function(t){t.target instanceof HTMLInputElement&&("compositionend"===t.type?(n.isOnComposition=!1,n.onInput.emit({"value":t.target.value})):n.isOnComposition=!0)}}return e.prototype.watchHandler=function(t,n){t!==n&&(this._value=t)},e.prototype.watchFocus=function(t,n){var o;!n&&t&&(null===(o=this.inputRef)||void 0===o||o.focus())},e.prototype.componentWillLoad=function(){this._value=this.value},e.prototype.componentDidLoad=function(){var t,n,o,i=this;"file"===this.type?(this.fileListener=function(){i.onInput.emit()},null===(t=this.inputRef)||void 0===t||t.addEventListener("change",this.fileListener)):(null===(n=this.inputRef)||void 0===n||n.addEventListener("compositionstart",this.handleComposition),null===(o=this.inputRef)||void 0===o||o.addEventListener("compositionend",this.handleComposition)),Object.defineProperty(this.el,"value",{"get":function get(){var t;return null===(t=i.inputRef)||void 0===t?void 0:t.value},"set":function set(t){i._value=t},"configurable":!0})},e.prototype.disconnectedCallback=function(){var t;"file"===this.type&&(null===(t=this.inputRef)||void 0===t||t.removeEventListener("change",this.fileListener))},e.prototype.render=function(){var t=this,n=this,o=n._value,u=n.type,s=n.password,a=n.placeholder,r=n.disabled,l=n.maxlength,c=n.autoFocus,h=n.confirmType,p=n.name,d=n.nativeProps;return Object(i.e)("input",Object.assign({"ref":function ref(n){t.inputRef=n,c&&(null==n||n.focus())},"class":"weui-input","value":fixControlledValue(o),"type":getTrueType(u,h,s),"placeholder":a,"disabled":r,"maxlength":l,"autofocus":c,"name":p,"onInput":this.handleInput,"onFocus":this.handleFocus,"onBlur":this.handleBlur,"onChange":this.handleChange,"onKeyDown":this.handleKeyDown},d))},Object.defineProperty(e.prototype,"el",{"get":function get(){return Object(i.d)(this)},"enumerable":!1,"configurable":!0}),Object.defineProperty(e,"watchers",{"get":function get(){return{"value":["watchHandler"],"autoFocus":["watchFocus"]}},"enumerable":!1,"configurable":!0}),e}();u.style="taro-input-core{display:block}input{display:block;height:1.4rem;text-align:inherit;text-overflow:clip;overflow:hidden;white-space:nowrap}"}}]);
//# sourceMappingURL=106.8d8a8546.js.map