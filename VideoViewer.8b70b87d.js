parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"qqZf":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.VideoViewer=void 0;var e=r(require("react"));function t(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,n=new WeakMap;return(t=function(e){return e?n:r})(e)}function r(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=t(r);if(n&&n.has(e))return n.get(e);var o={__proto__:null},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&{}.hasOwnProperty.call(e,c)){var i=u?Object.getOwnPropertyDescriptor(e,c):null;i&&(i.get||i.set)?Object.defineProperty(o,c,i):o[c]=e[c]}return o.default=e,n&&n.set(e,o),o}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=s();return function(){var r,n=p(e);if(t){var o=p(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return f(this,r)}}function f(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return l(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=exports.VideoViewer=function(t){c(o,e.Component);var r=a(o);function o(){return n(this,o),r.apply(this,arguments)}return u(o,[{key:"render",value:function(){var t=this.props,r=t.captions,n=t.classes,o=t.videoOptions,u=t.videoResources;return e.default.createElement("div",{className:n.container},e.default.createElement("video",Object.assign({className:n.video},o),u.map(function(t){return e.default.createElement(e.Fragment,{key:t.id},e.default.createElement("source",{src:t.id,type:t.getFormat()}))}),r.map(function(t){return e.default.createElement(e.Fragment,{key:t.id},e.default.createElement("track",{src:t.id,label:t.getDefaultLabel(),srcLang:t.getProperty("language")}))})))}}]),o}();d.defaultProps={captions:[],videoOptions:{},videoResources:[]};
},{"react":"n8MK"}],"ZDKi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("react-redux"),i=require("redux"),t=require("react-i18next"),r=require("@material-ui/core"),o=require("../extend/withPlugins"),n=require("../components/VideoViewer"),s=require("../state/selectors"),d=function(e,i){var t=i.windowId;return{captions:(0,s.getVisibleCanvasCaptions)(e,{windowId:t})||[],videoOptions:(0,s.getConfig)(e).videoOptions,videoResources:(0,s.getVisibleCanvasVideoResources)(e,{windowId:t})||[]}},u=function(){return{container:{alignItems:"center",display:"flex",width:"100%"},video:{maxHeight:"100%",width:"100%"}}},a=(0,i.compose)((0,t.withTranslation)(),(0,r.withStyles)(u),(0,e.connect)(d,null),(0,o.withPlugins)("VideoViewer")),c=exports.default=a(n.VideoViewer);
},{"react-redux":"jYIL","redux":"aVFJ","react-i18next":"LuhD","@material-ui/core":"dT3j","../extend/withPlugins":"EG7P","../components/VideoViewer":"qqZf","../state/selectors":"tp2l"}]},{},[], null)