(this["webpackJsonpbudget-app"]=this["webpackJsonpbudget-app"]||[]).push([[1],{38:function(e,n,t){"use strict";var r=t(15),a=t(34),o=t(0),c=t.n(o),i={},l=Object(o.createContext)(i),u=l.Provider;function s(e,n){switch(n.type){case"selectedParentCategoryId":return Object(a.a)({},e,{selectedParentCategoryId:n.payload});default:return e}}var d={store:l,BudgetProvider:function(e){var n=e.children,t=Object(o.useReducer)(s,i),l=Object(r.a)(t,2),d=l[0],f=l[1];return c.a.createElement(u,{value:Object(a.a)({},d,{dispatch:f})},n)}};n.a=d},53:function(e,n,t){e.exports=t(72)},72:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(11),c=t.n(o),i=t(2),l=t(1),u=t(40);function s(){var e=Object(i.a)(["\n","\nul{\n  list-style:none;\n  margin:0;\n  padding:0;\n  li+li{\n    margin-left:","px;\n  }\n}\n"]);return s=function(){return e},e}var d=Object(l.createGlobalStyle)(s(),u.Normalize,(function(e){return e.theme.spacing.xs})),f=t(33),m=t(17),p=t(23),g=t(24),h=t(27),v=t(26),b=function(e){Object(h.a)(t,e);var n=Object(v.a)(t);function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(p.a)(this,t),n.call(this,e,r)}return Object(g.a)(t,[{key:"read",value:function(e,n,t){var r=this.options.loadPath,a=this.options.parseLoadPayload({lng:e,ns:n});"function"===typeof this.options.loadPath&&(r=this.options.loadPath([e],[n]));var o=this.services.interpolator.interpolate(r,{lng:e,ns:n});this.loadUrl(o,t,a)}},{key:"loadUrl",value:function(e,n,t){var r=this;this.options.ajax(e,this.options,(function(t,a){if(a.status>=500&&a.status<600)return n("failed loading "+e,!0);if(a.status>=400&&a.status<500)return n("failed loading "+e,!1);var o,c;try{o=r.options.parse(t,e)}catch(i){c="failed parsing "+e+" to json"}if(c)return n(c,!1);n(null,o)}),t)}}]),t}(t(44).a),E=t(45);t(59).config();var k="d4491d8e9d3b633313437406381b5968";f.a.use(b).use(E.a).use(m.f).init({defaultLanguage:"en",otherLanguages:["pl"],fallbackLng:"en",debug:!0,saveMissing:!0,backend:{loadPath:"https://cors-anywhere.herokuapp.com/https://api.poeditor.com/v2/terms/list",addPath:"https://cors-anywhere.herokuapp.com/https://api.poeditor.com/v2/terms/add",crossDomain:!0,parse:function(e){return JSON.parse(e).result.terms.reduce((function(e,n){return e[n.term]=n.translation.content||n.term,e}),{})},parsePayload:function(e,n){if("_t"!==n){var t=[{term:n}];return{api_token:k,data:JSON.stringify(t),id:"338235"}}},parseLoadPayload:function(e){var n=e.lng;return{api_token:k,language:n,id:"338235"}}},interpolation:{escapeValue:!1}});f.a;var x=t(16),j=t(13),y={spacing:{xs:5,sm:10,xl:20},colors:{gray:{normal:"#EEEEEE",dark:"rgb(212,212,212)"},black:{normal:"#1A1A1D"},green:{normal:"rgb(10,120,0)"},red:{normal:"#F13C20"},pink:{normal:"#E7717D"}}},O=t(75),w=t(21),P=t(8),C=t(15);function S(){var e=Object(i.a)(["\n  display: flex;\n\n  section:nth-child(1) {\n    flex: 4;\n  }\n  section:nth-child(2) {\n    flex: 8;\n  }\n"]);return S=function(){return e},e}var B=l.default.div(S()),A=t(38),L=a.a.lazy((function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,81))})),z=a.a.lazy((function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,83))})),F=a.a.lazy((function(){return Promise.all([t.e(0),t.e(7),t.e(6)]).then(t.bind(null,82))}));var D=function(e){e.fetchBudget,e.fetchBudgetedCategories,e.fetchAllCategories,e.addTransaction;var n=Object(r.useState)(),t=Object(C.a)(n,2),o=t[0],c=t[1];return a.a.createElement(A.a.BudgetProvider,null,a.a.createElement(B,null,a.a.createElement("section",null,a.a.createElement(P.e,null,a.a.createElement(L,null))),a.a.createElement("section",null,a.a.createElement(P.e,null,a.a.createElement(P.a,{to:"/budget/transactions/new"},"Add new transactions"),a.a.createElement(P.a,{onClick:function(){return c(!o)}},o?"Hide transactions":"Show transactions"),o&&a.a.createElement(z,null)))),a.a.createElement(j.c,null,a.a.createElement(j.a,{path:"/budget/transactions/new"},a.a.createElement(P.c,null,a.a.createElement(F,null)))))},H=t(50);t(71);function J(e){e.budget,e.fetchBudget,e.fetchBudgetedCategories;var n=Object(O.a)().i18n;return a.a.createElement(r.Fragment,null,a.a.createElement(d,null),a.a.createElement(x.a,null,a.a.createElement(P.d,{items:[{content:"Homepage",to:"/"},{content:"Budget",to:"/budget"}],RightElement:a.a.createElement("div",null,a.a.createElement(P.a,{variant:"regular",onClick:function(){return n.changeLanguage("pl")}},"PL"),a.a.createElement(P.a,{variant:"regular",onClick:function(){return n.changeLanguage("en")}},"EN"))}),a.a.createElement(P.g,null,a.a.createElement(j.c,null,a.a.createElement(j.a,{exact:!0,path:"/"},"Homepage"),a.a.createElement(j.a,{path:"/budget"},a.a.createElement(D,null))))))}H.a.configure();var N={suspense:!0,refetchAllOnWindowFocus:!1};var R=function(){return a.a.createElement(w.a,{config:N},a.a.createElement(l.ThemeProvider,{theme:y},a.a.createElement(a.a.Suspense,{fallback:a.a.createElement(P.b,null)},a.a.createElement(J,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,n,t){"use strict";t.d(n,"d",(function(){return h})),t.d(n,"g",(function(){return u})),t.d(n,"b",(function(){return x})),t.d(n,"a",(function(){return A})),t.d(n,"f",(function(){return F})),t.d(n,"c",(function(){return W})),t.d(n,"e",(function(){return X}));var r=t(0),a=t.n(r),o=t(75),c=t(2),i=t(1);function l(){var e=Object(c.a)(["\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 960px;\n  padding-right: 10px;\n  padding-left: 10px;\n"]);return l=function(){return e},e}var u=i.default.div(l());function s(){var e=Object(c.a)(["\n  display: flex;\n"]);return s=function(){return e},e}function d(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return d=function(){return e},e}function f(){var e=Object(c.a)(["\n  background-color: ",";\n  display: flex;\n  padding: ","px 0;\n  justify-content: space-between;\n"]);return f=function(){return e},e}var m=i.default.div(f(),(function(e){return e.theme.colors.black.normal}),(function(e){return e.theme.spacing.sm})),p=Object(i.default)(u)(d()),g=i.default.ul(s());var h=function(e){var n=e.items,t=void 0===n?[]:n,r=e.RightElement,c=Object(o.a)().t;return a.a.createElement(m,null,a.a.createElement(p,null,a.a.createElement(g,null,t.map((function(e){return a.a.createElement("li",{key:e.to},a.a.createElement(A,{variant:"inline",to:e.to},c(e.content)))}))),r))};function v(){var e=Object(c.a)(['\n  display: inline-block;\n  width: 80px;\n  height: 80px;\n  &:after {\n    content: " ";\n    display: block;\n    width: 64px;\n    height: 64px;\n    margin: 8px;\n    border-radius: 50%;\n    border: 6px solid ',";\n    border-color: "," transparent\n      "," transparent;\n    animation: "," 1.2s linear infinite;\n  }\n"]);return v=function(){return e},e}function b(){var e=Object(c.a)(["  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }"]);return b=function(){return e},e}var E=Object(i.keyframes)(b()),k=i.default.div(v(),(function(e){return e.theme.colors.gray.dark}),(function(e){return e.theme.colors.gray.dark}),(function(e){return e.theme.colors.gray.dark}),E);var x=function(){return a.a.createElement(k,null)},j=t(51),y=t(16);function O(){var e=Object(c.a)(["\n  background: ",";\n  margin: ",";\n  padding: ",";\n  border: ",";\n  border-radius: 3px;\n"]);return O=function(){return e},e}function w(){var e=Object(c.a)(['\n  &::after {\n    content: "";\n    position: absolute;\n    bottom: 0;\n    left: -100%;\n    width: 100%;\n    height: 3px;\n    background-color: ',";\n    transition: 0.35s;\n  }\n  &:hover::after {\n    left: 0;\n  }\n"]);return w=function(){return e},e}function P(){var e=Object(c.a)(["\n  position: relative;\n  color: ",";\n  font-size: 20px;\n  cursor: inherit;\n  border: none;\n  background-color: transparent;\n  cursor: ",";\n  overflow: hidden;\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return P=function(){return e},e}var C=i.default.button(P(),(function(e){var n=e.theme.colors;return e.primary?n.gray.light:n.pink.normal}),(function(e){return e.to||e.onClick||"submit"===e.type?"pointer":"default"})),S=Object(i.default)(C)(w(),(function(e){var n=e.theme;return"".concat(n.colors.pink.normal)})),B=Object(i.default)(C)(O(),(function(e){var n=e.theme;return e.primary?n.colors.pink.normal:n.colors.black.normal}),(function(e){var n=e.theme;return"".concat(n.spacing.xs/2,"px")}),(function(e){var n=e.theme;return"".concat(n.spacing.xs/2,"px} ").concat(n.spacing.xs,"px")}),(function(e){var n=e.theme;return"2px solid ".concat(n.colors.pink.normal)}));var A=function(e){var n=e.variant,t=e.children,o=Object(j.a)(e,["variant","children"]),c=o.to,i=Object(r.useMemo)((function(){switch(n){case"inline":return S;case"regular":default:return B}}),[n]),l=Object(r.useMemo)((function(){return a.a.createElement(i,o,t)}),[o,t]);return c?a.a.createElement(y.b,o,l):a.a.createElement(r.Fragment,null,l)},L=t(15),z=a.a.memo((function(e){var n=e.item,t=e.onClickHandler,r=e.isActive;return a.a.createElement("div",null,a.a.createElement(n.Trigger,{onClick:t}),r&&n.children)}));var F=a.a.memo((function(e){var n=e.items,t=e.clickRef,o=Object(r.useState)(),c=Object(L.a)(o,2),i=c[0],l=c[1];return Object(r.useEffect)((function(){t.current=l}),[t,l]),a.a.createElement(r.Fragment,null,n.map((function(e){return a.a.createElement(z,{key:e.id,item:e,onClickHandler:l,isActive:i===e.id})})))})),D=t(11),H=t(13);function J(){var e=Object(c.a)(["\n  position: absolute;\n  right: 7px;\n  top: 5px;\n  cursor: pointer;\n  font-size: 20px;\n"]);return J=function(){return e},e}function N(){var e=Object(c.a)(["\n  background: #fff;\n  position: absolute;\n  margin: auto;\n  width: 300px;\n  height: 300px;\n  box-shadow: ",";\n  padding: 20px;\n  text-align: center;\n"]);return N=function(){return e},e}function R(){var e=Object(c.a)(["\n  background-color: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 100;\n"]);return R=function(){return e},e}var T=i.default.aside(R()),I=i.default.div(N(),(function(e){var n=e.theme;return"5px 5px 5px 5px ".concat(n.colors.black.normal)})),M=i.default.div(J());var W=function(e){var n=e.children,t=Object(H.f)(),r=function(e){e.stopPropagation(),t.goBack()};return Object(D.createPortal)(a.a.createElement(T,{onClick:r},a.a.createElement(I,{onClick:function(e){return e.stopPropagation()}},a.a.createElement(M,{onClick:r},"\xd7"),n)),document.querySelector("#modal"))},_=t(28),U=t.n(_),q=t(36),G=t(23),Q=t(24),V=t(27),$=t(26),K=t(21),X=function(e){Object(V.a)(t,e);var n=Object($.a)(t);function t(e){var r;return Object(G.a)(this,t),(r=n.call(this,e)).tryAgain=Object(q.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.b.refetchQueries({force:!0});case 2:r.setState({hasError:!1});case 3:case"end":return e.stop()}}),e)}))),r.state={hasError:!1},r}return Object(Q.a)(t,[{key:"componentDidCatch",value:function(e,n){console.log(e,n)}},{key:"render",value:function(){return a.a.createElement(a.a.Suspense,{fallback:a.a.createElement(x,null)},this.state.hasError?a.a.createElement("div",null,"Something went wrong!",a.a.createElement(A,{onClick:this.tryAgain},"Try again!")):a.a.createElement(a.a.Fragment,null,this.props.children))}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(a.a.Component)}},[[53,2,3]]]);
//# sourceMappingURL=main.b56fd217.chunk.js.map