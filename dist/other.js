"use strict";function debounce(e,r){var o,t=function(){var t=this,n=arguments;clearTimeout(o),o=setTimeout((function(){return e.apply(t,n)}),r)};return t.clear=function(){clearTimeout(o),o=0},t}function random(e,r,o,t){t<0&&(t=0);var n=o?1:0;if(!t)return Math.floor(Math.random()*(r-e+n))+e;var u=Math.random()*(r-e)+e;return+u.toFixed(t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.random=exports.debounce=void 0,exports.debounce=debounce,exports.random=random;