"use strict";function e(e){if(e&&e.__esModule)return e;var t={};return e&&Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t.default=e,t}var t,r=require("prop-types"),n=require("react"),o=require("@web3-react/core"),c=(t=require("jsbi"))&&"object"==typeof t&&"default"in t?t.default:t;function u(e,t,r,n,o,c,u){try{var a=e[c](u),i=a.value}catch(e){return void r(e)}a.done?t(i):Promise.resolve(i).then(n,o)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var c=e.apply(t,r);function a(e){u(c,n,o,a,i,"next",e)}function i(e){u(c,n,o,a,i,"throw",e)}a(void 0)}))}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function h(e,t,r){return(h=p()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&f(o,r.prototype),o}).apply(null,arguments)}function d(e){var t="function"==typeof Map?new Map:void 0;return(d=function(e){if(null===e||-1===Function.toString.call(e).indexOf("[native code]"))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return h(e,arguments,l(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,e)})(e)}var v,y=(function(e){var t=function(e){var t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",c=n.asyncIterator||"@@asyncIterator",u=n.toStringTag||"@@toStringTag";function a(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{a({},"")}catch(e){a=function(e,t,r){return e[t]=r}}function i(e,t,r,n){var o=Object.create((t&&t.prototype instanceof f?t:f).prototype),c=new E(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(o,c){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw c;return{value:void 0,done:!0}}for(r.method=o,r.arg=c;;){var u=r.delegate;if(u){var a=g(u,r);if(a){if(a===l)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var i=s(e,t,r);if("normal"===i.type){if(n=r.done?"completed":"suspendedYield",i.arg===l)continue;return{value:i.arg,done:r.done}}"throw"===i.type&&(n="completed",r.method="throw",r.arg=i.arg)}}}(e,r,c),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=i;var l={};function f(){}function p(){}function h(){}var d={};d[o]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(L([])));y&&y!==t&&r.call(y,o)&&(d=y);var w=h.prototype=f.prototype=Object.create(d);function m(e){["next","throw","return"].forEach((function(t){a(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var n;this._invoke=function(o,c){function u(){return new t((function(n,u){!function n(o,c,u,a){var i=s(e[o],e,c);if("throw"!==i.type){var l=i.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,u,a)}),(function(e){n("throw",e,u,a)})):t.resolve(f).then((function(e){l.value=e,u(l)}),(function(e){return n("throw",e,u,a)}))}a(i.arg)}(o,c,n,u)}))}return n=n?n.then(u,u):u()}}function g(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,g(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,l;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function L(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,c=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return c.next=c}}return{next:C}}function C(){return{value:void 0,done:!0}}return p.prototype=w.constructor=h,h.constructor=p,p.displayName=a(h,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,a(e,u,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},m(b.prototype),b.prototype[c]=function(){return this},e.AsyncIterator=b,e.async=function(t,r,n,o,c){void 0===c&&(c=Promise);var u=new b(i(t,r,n,o),c);return e.isGeneratorFunction(r)?u:u.next().then((function(e){return e.done?e.value:u.next()}))},m(w),a(w,u,"Generator"),w[o]=function(){return this},w.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=L,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return u.type="throw",u.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],u=c.completion;if("root"===c.tryLoc)return n("end");if(c.tryLoc<=this.prev){var a=r.call(c,"catchLoc"),i=r.call(c,"finallyLoc");if(a&&i){if(this.prev<c.catchLoc)return n(c.catchLoc,!0);if(this.prev<c.finallyLoc)return n(c.finallyLoc)}else if(a){if(this.prev<c.catchLoc)return n(c.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return n(c.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var c=o;break}}c&&("break"===e||"continue"===e)&&c.tryLoc<=t&&t<=c.finallyLoc&&(c=null);var u=c?c.completion:{};return u.type=e,u.arg=t,c?(this.method="next",this.next=c.finallyLoc,l):this.complete(u)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},e}(e.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}}(v={exports:{}}),v.exports),w=new Map([[1,"Mainnet"],[2,"Expanse"],[3,"Ropsten"],[4,"Rinkeby"],[5,"Goerli"],[8,"Ubiq"],[42,"Kovan"],[100,"xDai"],[1337,"Local"],[5777,"Ganache"]]);function m(e){return w.get(e)||"Unknown"}function b(e){if(function(e){return"object"==typeof e&&null!==e&&"jsonrpc"in e}(e)){if(e.error)throw new Error(e.error);return e.result||null}return e||null}function g(e,t,r){return x.apply(this,arguments)}function x(){return(x=a(y.mark((function e(t,r,n){return y.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.request){e.next=2;break}return e.abrupt("return",t.request({method:r,params:n}).then(b));case 2:if(!t.sendAsync||!t.selectedAddress){e.next=4;break}return e.abrupt("return",new Promise((function(e,o){t.sendAsync({method:r,params:n,from:t.selectedAddress,jsonrpc:"2.0",id:0},(function(t,r){t?o(t):e(r)}))})).then(b));case 4:if(!t.send){e.next=6;break}return e.abrupt("return",t.send(r,n).then(b));case 6:throw new Error("The Ethereum provider doesn’t seem to provide a request method.");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=a(y.mark((function e(t,r){return y.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g(t,"eth_getCode",[r]);case 3:return e.abrupt("return","0x"!==e.sent);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function E(e,t){return L.apply(this,arguments)}function L(){return(L=a(y.mark((function e(t,r){return y.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g(t,"eth_getBalance",[r,"latest"]));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=a(y.mark((function e(t){return y.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g(t,"eth_blockNumber",[]));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e,t){var r,n=!1,o=function(){var e=a(y.mark((function e(c,u){var a;return y.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c();case 2:a=e.sent,n||(u(a),r=setTimeout(o.bind(null,c,u),t));case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();return function(){var t=e.apply(void 0,arguments),c=t.request,u=t.onResult;return n=!1,o(c,u),function(){n=!0,clearTimeout(r)}}}var j=function(e){function t(t,r){for(var n,o=arguments.length,c=new Array(o>2?o-2:0),u=2;u<o;u++)c[u-2]=arguments[u];return(n=e.call.apply(e,[this].concat(c))||this).name="ChainUnsupportedError",n.message="Unsupported chain: "+m(t)+(-1===t?"":" (Chain ID: "+t+")")+". Required chain: "+m(r)+" (Chain ID: "+r+").",n}return s(t,e),t}(d(Error)),R=function(e){function t(t){for(var r,n=arguments.length,o=new Array(n>1?n-1:0),c=1;c<n;c++)o[c-1]=arguments[c];return(r=e.call.apply(e,[this].concat(o))||this).name="ConnectorUnsupportedError",r.message="Unsupported connector: "+t+".",r}return s(t,e),t}(d(Error)),P=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).name="ConnectionRejectedError",t.message="The activation has been rejected by the provider.",t}return s(t,e),t}(d(Error)),O=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).name="ConnectorConfigError",t}return s(t,e),t}(d(Error));function _(){return q.apply(this,arguments)}function q(){return(q=a(y.mark((function t(){var r;return y.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){t(e(require("@web3-react/fortmatic-connector")))}));case 2:return r=t.sent.FortmaticConnector,t.abrupt("return",{web3ReactConnector:function(e){var t=e.chainId,n=e.apiKey;if(!n)throw new O("The Fortmatic connector requires apiKey to be set.");return new r({apiKey:n,chainId:t})}});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function N(){return B.apply(this,arguments)}function B(){return(B=a(y.mark((function t(){var r,n,o;return y.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){t(e(require("@web3-react/frame-connector")))}));case 2:return n=(r=t.sent).FrameConnector,o=r.UserRejectedRequestError,t.abrupt("return",{web3ReactConnector:function(e){return new n({supportedChainIds:[e.chainId]})},handleActivationError:function(e){return e instanceof o?new P:e.message.startsWith("JSON.parse")?new Error("There seems to be an issue when trying to connect to Frame."):null}});case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function T(){return U.apply(this,arguments)}function U(){return(U=a(y.mark((function t(){var r,n,o;return y.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){t(e(require("@web3-react/injected-connector")))}));case 2:return n=(r=t.sent).InjectedConnector,o=r.UserRejectedRequestError,t.abrupt("return",{web3ReactConnector:function(e){return new n({supportedChainIds:[e.chainId]})},handleActivationError:function(e){return e instanceof o?new P:null}});case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(){return A.apply(this,arguments)}function A(){return(A=a(y.mark((function t(){var r;return y.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){t(e(require("@web3-react/portis-connector")))}));case 2:return r=t.sent.PortisConnector,t.abrupt("return",{web3ReactConnector:function(e){var t=e.chainId,n=e.dAppId;if(!n)throw new O("The Portis connector requires dAppId to be set.");return new r({dAppId:n,networks:[t]})}});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function W(){return F.apply(this,arguments)}function F(){return(F=a(y.mark((function t(){var r,n,o;return y.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){t(e(require("@aragon/provided-connector")))}));case 2:return n=(r=t.sent).ProvidedConnector,o=r.UserRejectedRequestError,t.abrupt("return",{web3ReactConnector:function(e){return new n({provider:e.provider,supportedChainIds:[e.chainId]})},handleActivationError:function(e){return e instanceof o?new P:null}});case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function G(){return M.apply(this,arguments)}function M(){return(M=a(y.mark((function t(){var r,n,o;return y.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){t(e(require("@web3-react/walletconnect-connector")))}));case 2:return n=(r=t.sent).UserRejectedRequestError,o=r.WalletConnectConnector,t.abrupt("return",{web3ReactConnector:function(e){var t,r=e.chainId,n=e.rpcUrl,c=e.bridge,u=e.pollingInterval;if(!n)throw new O("The WalletConnect connector requires rpcUrl to be set.");if(!/^https?:\/\//.test(n))throw new O("The WalletConnect connector requires rpcUrl to be an HTTP URL.");return new o({bridge:c,pollingInterval:u,qrcode:!0,rpc:(t={},t[r]=n,t)})},handleActivationError:function(e){return e instanceof n?new P:null}});case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function D(){return K.apply(this,arguments)}function K(){return(K=a(y.mark((function t(){var r;return y.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){t(e(require("@web3-react/walletlink-connector")))}));case 2:return r=t.sent.WalletLinkConnector,t.abrupt("return",{web3ReactConnector:function(e){var t=e.url,n=e.appName,o=e.appLogoUrl;if(1!==e.chainId)throw new O("The WalletLink connector requires chainId to be 1.");if(!/^https?:\/\//.test(t))throw new O("The WalletLink connector requires url to be an HTTP URL.");return new r({url:t,appName:n,appLogoUrl:o})}});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var H=n.createContext(null);function Y(){var e=n.useContext(H);if(null===e)throw new Error("useWallet() can only be used inside of <UseWalletProvider />, please declare it at a higher level.");var t=function(){var e=n.useContext(H),t=n.useState(null),r=t[0],o=t[1],c=n.useRef(!1),u=n.useCallback((function(){return null===e?null:(c.current=!0,e.addBlockNumberListener(o),r)}),[e,r]);return n.useEffect((function(){if(c.current&&null!==e)return e.addBlockNumberListener(o),function(){e.removeBlockNumberListener(o)}}),[c,e]),u}(),r=e.wallet;return n.useMemo((function(){return i({},r,{getBlockNumber:t})}),[t,r])}function J(e){var t=e.chainId,r=e.children,u=e.connectors,s=e.pollBalanceInterval,l=e.pollBlockNumberInterval;if(null!==n.useContext(H))throw new Error("<UseWalletProvider /> has already been declared.");var f=n.useState(null),p=f[0],h=f[1],d=n.useState(null),v=d[0],w=d[1],b=n.useState(null),g=b[0],x=b[1],L=n.useState("disconnected"),P=L[0],O=L[1],q=o.useWeb3React(),B=n.useRef(0),U=q.account,A=q.library,F=function(e){var t=e.account,r=e.ethereum,o=e.pollBalanceInterval,u=n.useState("-1"),i=u[0],s=u[1];return n.useEffect((function(){if(t&&r){var e=!1,n=I((function(t,r,n){var o="-1";return{request:function(){return a(y.mark((function e(){return y.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",E(r,t).then((function(e){return e?c.BigInt(e).toString():"-1"})).catch((function(){return"-1"})));case 1:case"end":return e.stop()}}),e)})))()},onResult:function(t){e||t===o||(o=t,n(t))}}}),o)(t,r,s);return function(){e=!0,n(),s("-1")}}}),[t,r,o]),i}({account:U,ethereum:A,pollBalanceInterval:s}),M=function(e){var t=e.ethereum,r=e.pollBlockNumberInterval,o=n.useRef(null),u=n.useRef(new Set),a=n.useCallback((function(e){u.current.has(e)||(e(o.current),u.current.add(e))}),[]),i=n.useCallback((function(e){u.current.delete(e)}),[]),s=n.useCallback((function(e){o.current!==e&&(o.current=e,u.current.forEach((function(t){return t(e)})))}),[]);return n.useEffect((function(){if(t){var e=!1,n=I((function(){return{request:function(){return function(e){return C.apply(this,arguments)}(t)},onResult:function(t){e||s(null===t?null:c.BigInt(t).toString())}}}),r)();return function(){e=!0,n()}}s(null)}),[t,r,s]),{addBlockNumberListener:a,removeBlockNumberListener:i}}({ethereum:A,pollBlockNumberInterval:l}),K=M.addBlockNumberListener,Y=M.removeBlockNumberListener,J=n.useMemo((function(){return function(e){void 0===e&&(e={});for(var t={fortmatic:[_,null],frame:[N,null],injected:[T,null],portis:[S,null],provided:[W,null],walletconnect:[G,null],walletlink:[D,null]},r=0,n=Object.entries(e);r<n.length;r++){var o=n[r],c=o[0],u=o[1];"function"!=typeof u?t[c]&&(t[c][1]=u):t[c]=[u,null]}return t}(u)}),[u]),z=n.useCallback((function(){q.active&&q.deactivate(),h(null),w(null),O("disconnected")}),[q]),Q=n.useCallback(function(){var e=a(y.mark((function e(r){var n,c,u,a,s,l,f;return y.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===r&&(r="injected"),n=++B.current,z(),n===B.current){e.next=5;break}return e.abrupt("return");case 5:if(J[r]){e.next=9;break}return O("error"),w(new R(r)),e.abrupt("return");case 9:return O("connecting"),u=(c=J[r]||[])[0],a=c[1],e.next=13,null==u?void 0:u();case 13:if(l=null==(s=e.sent)||null==s.web3ReactConnector?void 0:s.web3ReactConnector(i({chainId:t},a||{}))){e.next=19;break}return O("error"),w(new R(r)),e.abrupt("return");case 19:return e.prev=19,h(r),e.next=23,q.activate(l,void 0,!0);case 23:O("connected"),e.next=41;break;case 26:if(e.prev=26,e.t0=e.catch(19),n===B.current){e.next=30;break}return e.abrupt("return");case 30:if(h(null),O("error"),!(e.t0 instanceof o.UnsupportedChainIdError)){e.next=35;break}return w(new j(-1,t)),e.abrupt("return");case 35:if(!s.handleActivationError){e.next=40;break}if(!(f=s.handleActivationError(e.t0))){e.next=40;break}return w(f),e.abrupt("return");case 40:w(e.t0);case 41:case"end":return e.stop()}}),e,null,[[19,26]])})));return function(t){return e.apply(this,arguments)}}(),[t,J,z,q]);n.useEffect((function(){if(U&&A){var e=!1;return x(null),function(e,t){return k.apply(this,arguments)}(A,U).then((function(t){e||(O("connected"),x(t?"contract":"normal"))})),function(){e=!0,O("disconnected"),x(null)}}}),[U,A]);var V=n.useMemo((function(){return{_web3ReactContext:q,account:U||null,balance:F,chainId:t,connect:Q,connector:p,connectors:J,error:v,ethereum:A,networkName:m(t),reset:z,status:P,type:g}}),[U,F,t,Q,p,J,v,A,g,z,P,q]);return n.createElement(H.Provider,{value:{addBlockNumberListener:K,pollBalanceInterval:s,pollBlockNumberInterval:l,removeBlockNumberListener:Y,wallet:V}},r)}function z(e){return n.createElement(o.Web3ReactProvider,{getLibrary:function(e){return e}},n.createElement(J,Object.assign({},e)))}J.propTypes={chainId:r.number,children:r.node,connectors:r.objectOf(r.object),pollBalanceInterval:r.number,pollBlockNumberInterval:r.number},J.defaultProps={chainId:1,connectors:{},pollBalanceInterval:2e3,pollBlockNumberInterval:5e3},z.propTypes=J.propTypes,z.defaultProps=J.defaultProps,exports.ChainUnsupportedError=j,exports.ConnectionRejectedError=P,exports.ConnectorUnsupportedError=R,exports.UseWalletProvider=z,exports.default=Y,exports.useWallet=Y;
//# sourceMappingURL=index.js.map
