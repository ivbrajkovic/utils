"use strict";var __awaiter=this&&this.__awaiter||function(t,e,n,r){function o(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,i){function s(t){try{c(r.next(t))}catch(e){i(e)}}function u(t){try{c(r["throw"](t))}catch(e){i(e)}}function c(t){t.done?n(t.value):o(t.value).then(s,u)}c((r=r.apply(t,e||[])).next())}))},__generator=this&&this.__generator||function(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(t){return function(e){return c([t,e])}}function c(i){if(n)throw new TypeError("Generator is already executing.");while(s)try{if(n=1,r&&(o=2&i[0]?r["return"]:i[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(o=s.trys,!(o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(u){i=[6,u],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}};function randomIntFast(t,e,n){return~~(Math.random()*(e-t+(n?1:0)))+t}function radToDeg(t){return 180*t/Math.PI}function degToRad(t){return t*Math.PI/180}function isPowerOf2(t){return 0!==t&&0==(t&t-1)}function fixToOne(t){return Math.round(10*t)/10}function fixToTwo(t){return Math.round(100*t)/100}function logJson(t,e){void 0===e&&(e=2),console.log(JSON.stringify(t,null,e))}function trimLeadingZeros(t){return t.replace(/^0+/,"")}function logObject(t){console.log(JSON.stringify(t,null,2))}function truncStr(t,e,n){return void 0===t&&(t=""),void 0===e&&(e=0),void 0===n&&(n="..."),"string"!==typeof t||"number"!==typeof e||"string"!==typeof n?"":t.length>e?t.substr(0,e)+n:t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.truncStr=exports.logObject=exports.trimLeadingZeros=exports.logJson=exports.fixToTwo=exports.fixToOne=exports.isPowerOf2=exports.degToRad=exports.radToDeg=exports.randomIntFast=exports.fetchSimpleJsonAsync=exports.fetchSimpleTextAsync=exports.deleteAllChild=exports.isObjectEmpty=void 0,exports.isObjectEmpty=function(t){return void 0===t&&(t={}),!t||0===Object.keys(t).length},exports.deleteAllChild=function(t){while(t.firstChild)t.removeChild(t.firstChild)},exports.fetchSimpleTextAsync=function(t,e){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(n){switch(n.label){case 0:return[4,fetch(t,e)];case 1:return[4,n.sent().text()];case 2:return[2,n.sent()]}}))}))},exports.fetchSimpleJsonAsync=function(t,e){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(n){switch(n.label){case 0:return[4,fetch(t,e)];case 1:return[4,n.sent().json()];case 2:return[2,n.sent()]}}))}))},exports.randomIntFast=randomIntFast,exports.radToDeg=radToDeg,exports.degToRad=degToRad,exports.isPowerOf2=isPowerOf2,exports.fixToOne=fixToOne,exports.fixToTwo=fixToTwo,exports.logJson=logJson,exports.trimLeadingZeros=trimLeadingZeros,exports.logObject=logObject,exports.truncStr=truncStr;