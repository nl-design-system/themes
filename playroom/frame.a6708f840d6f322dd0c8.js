(self.webpackChunk_nl_design_system_unstable_playroom=self.webpackChunk_nl_design_system_unstable_playroom||[]).push([[520],{4568:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(2983),o=r(4469),i=r(8929),c=(r(5372),r(7458));function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,b(n.key),n)}}function a(e,t){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},a(e,t)}function s(e){var t=p();return function(){var r,n=y(e);if(t){var o=y(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return f(e)}(this,r)}}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function b(e){var t=function(e,t){if("object"!=u(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==u(t)?t:String(t)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(u,e);var t,r,n=s(u);function u(){var e,t,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u);for(var i=arguments.length,c=new Array(i),l=0;l<i;l++)c[l]=arguments[l];return t=f(e=n.call.apply(n,[this].concat(c))),o={error:null,invalidCode:null,errorInfo:null},(r=b(r="state"))in t?Object.defineProperty(t,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[r]=o,e}return t=u,(r=[{key:"componentDidCatch",value:function(e,t){var r=this.props.code,n=void 0===r?null:r;this.setState({invalidCode:n,error:e,errorInfo:t})}},{key:"render",value:function(){var e=this.state,t=e.invalidCode,r=e.error,n=e.errorInfo,u=this.props,l=u.code,a=u.children;if(l!==t||!r)return a;var s=n?n.componentStack.split("\n").filter((function(e){return/RenderCode/.test(e)})).map((function(e){return e.replace(/ \(created by .*/g,"")})):[],f=s.slice(0,s.length-1);return(0,c.jsx)("div",{className:"a61l0u1i a61l0u1j a61l0u1k a61l0u1l a61l0u2a a61l0u2i a61l0u2q a61l0u2y a61l0u1h a61l0u3x",children:(0,c.jsxs)(o.x,{size:"large",tone:"critical",children:[(0,c.jsx)(i.c,{children:r.message}),f.map((function(e,t){return(0,c.jsx)("span",{children:e},t)}))]})})}}])&&l(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(n.Component)},477:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(2983),o=r(5701),i=r.n(o);const c=function(){};var u=r(8316);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){var n;return n=function(e,t){if("object"!=l(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t),(t="symbol"==l(n)?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){var t,r,o=e.code,l=e.scope,a=s(s({},null!==(t=c())&&void 0!==t?t:{}),l);if(u.NQ in a)throw new Error("'".concat(u.NQ,"' is used internally by Playroom and is not allowed in scope"));if(u.Ul in a)throw new Error("'".concat(u.Ul,"' is used internally by Playroom and is not allowed in scope"));return i()(o,s(s({},a),{},(f(r={React:n},u.NQ,n.createElement),f(r,u.Ul,n.Fragment),r)))}},7485:(e,t,r)=>{"use strict";var n=r(1742),o=r(1470),i=r(4568),c=r(477),u=r(7458);function l(e){var t=e.themes,r=e.components,n=e.FrameComponent,l=(0,o.UO)((function(e){return{themeName:"string"==typeof e.themeName?e.themeName:"",code:"string"==typeof e.code?e.code:""}})),a=l.themeName,s=l.code,f="__PLAYROOM__NO_THEME__"===a?null:a,p=f?t[f]:null;return(0,u.jsx)(i.Z,{code:s,children:(0,u.jsx)(n,{themeName:f,theme:p,children:(0,u.jsx)(c.Z,{code:s,scope:r})})})}var a=document.createElement("div");document.body.appendChild(a),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.themes,o=void 0===t?r(4393):t,i=e.components,c=void 0===i?r(8321):i,s=e.FrameComponent,f=void 0===s?r(4599):s;(0,n.l)((0,u.jsx)(l,{components:c,themes:o,FrameComponent:f}),a)}()},4599:(e,t,r)=>{var n=r(883);e.exports=n.default||n},5701:function(e){(function(){var t={}.hasOwnProperty,r=[].slice;e.exports=function(e,n){var o,i,c,u;for(o in i=[],u=[],n)t.call(n,o)&&(c=n[o],"this"!==o&&(i.push(o),u.push(c)));return Function.apply(null,r.call(i).concat(["return eval("+JSON.stringify(e)+")"])).apply(n.this,u)}}).call(this)}},e=>{e.O(0,[258,874],(()=>(7485,e(e.s=7485)))),e.O()}]);