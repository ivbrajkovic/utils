"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(n){for(var t,s=1,e=arguments.length;s<e;s++)for(var r in t=arguments[s],t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var fetchJsonAsync_1=require("./fetchJsonAsync");function fetchJsonAbortCb(n,t,s){var e=new AbortController,r=e.signal;return"function"===typeof arguments[1]&&(s=arguments[1]),fetchJsonAsync_1.default(n,__assign(__assign({},t),{signal:r})).then((function(n){s&&s(null,n)})).catch((function(n){s&&s(n)})),function(){return e.abort()}}exports.default=fetchJsonAbortCb;