(this["webpackJsonpbudget-app"]=this["webpackJsonpbudget-app"]||[]).push([[4],{76:function(t,e,n){"use strict";var r={};n.r(r),n.d(r,"fetchBudget",(function(){return i})),n.d(r,"fetchBudgetedCategories",(function(){return s})),n.d(r,"addTransaction",(function(){return f}));var a={};n.r(a),n.d(a,"fetchAllCategories",(function(){return l}));var c=n(28),u=n.n(c),o=n(36),i=function(){var t=Object(o.a)(u.a.mark((function t(e,n){var r,a,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.id,console.log({id:r}),t.next=4,fetch("".concat("http://localhost:3001","/budgets/").concat(r,"/?_embed=transactions"));case 4:return a=t.sent,t.next=7,a.json();case 7:return c=t.sent,t.abrupt("return",c);case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),s=function(){var t=Object(o.a)(u.a.mark((function t(e,n){var r,a,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.id,t.next=3,fetch("".concat("http://localhost:3001","/budgets/").concat(r,"/budgetCategories"));case 3:return a=t.sent,t.next=6,a.json();case 6:return c=t.sent,t.abrupt("return",c);case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),f=function(){var t=Object(o.a)(u.a.mark((function t(e){var n,r,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.budgetId,r=e.data,t.next=3,fetch("".concat("http://localhost:3001","/budgets/").concat(n,"/transactions/"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 3:return a=t.sent,t.next=6,a.json();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(o.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("http://localhost:3001","/categories/?_expand=parentCategory"));case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e.a={budget:r,common:a}},77:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(t){var e=Number(t);return new Intl.NumberFormat("pl",{style:"currency",currency:"PLN"}).format(e)},a=function(t){var e=new Date(t);return new Intl.DateTimeFormat("pl").format(e)}},81:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return I}));var r=n(15),a=n(1),c=n(0),u=n.n(c),o=n(78),i=n(75),s=n(21),f=n(76),l=n(8),d=n(2);function m(){var t=Object(d.a)(["\n  font-weight: 700;\n  color: ",";\n"]);return m=function(){return t},t}function b(){var t=Object(d.a)(["\n  background-color: ",";\n  color: #ffffff;\n"]);return b=function(){return t},t}function p(){var t=Object(d.a)(["\n  background-color: ",";\n"]);return p=function(){return t},t}function g(){var t=Object(d.a)(["\n  border: 1px solid ",";\n  padding: ","px;\n  display: flex;\n  justify-content: space-between;\n"]);return g=function(){return t},t}var h=a.default.div(g(),(function(t){return t.theme.colors.black.normal}),(function(t){return t.theme.spacing.xs})),v=Object(a.default)(h)(p(),(function(t){return t.theme.colors.gray.normal})),j=Object(a.default)(h)(b(),(function(t){return t.theme.colors.black.normal})),O=a.default.span(m(),(function(t){var e=t.theme;return t.negative?e.colors.red.normal:e.colors.green.normal})),y=n(77);var C=function(t){var e=t.name,n=t.onClick,r=t.categories,a=t.transactions,o=t.amount,i=Object(c.useMemo)((function(){if(o)return null;var t=function(){try{return r.reduce((function(t,e){return t+e.budget}),0)}catch(t){return null}}(),e=a.filter((function(t){return r.find((function(e){return e.categoryId===t.categoryId}))})).reduce((function(t,e){return t+e.amount}),0);return t?t-e:null}),[r,a,o]),s=Object(c.useMemo)((function(){return o||i}),[o,i]);return u.a.createElement(v,{onClick:n},u.a.createElement("span",null,e),u.a.createElement(O,{negative:s<0},Object(y.a)(s)))};var x=function(t){var e=t.name,n=t.item,r=t.transactions.filter((function(t){return t.categoryId===n.id})).reduce((function(t,e){return t+e.amount}),0),a=n.budget-r;return u.a.createElement(j,null,u.a.createElement("span",null,e),u.a.createElement(O,{negative:a<0},Object(y.a)(a.toFixed(2))))},k=n(38),w=Object(a.default)("div").withConfig({displayName:"BudgetCategoryList___StyledDiv",componentId:"sc-1pu2qc7-0"})(["border-bottom:5px solid ",";"],(function(t){return t.theme.colors.gray.light})),E=Object(a.default)("div").withConfig({displayName:"BudgetCategoryList___StyledDiv2",componentId:"sc-1pu2qc7-1"})(["border-top:5px solid ",";"],(function(t){return t.theme.colors.gray.light}));var I=function(){var t=Object(s.d)(["budget",{id:1}],f.a.budget.fetchBudget).data,e=Object(s.d)("allCategories",f.a.common.fetchAllCategories).data,n=Object(s.d)(["budgetedCategories",{id:1}],f.a.budget.fetchBudgetedCategories).data,a=Object(c.useContext)(k.a.store).dispatch,d=Object(c.useCallback)((function(t){return a({type:"selectedParentCategoryId",payload:t})}),[a]),m=Object(i.a)().t,b=Object(c.useRef)(null),p=Object(c.useMemo)((function(){return Object(o.groupBy)(n,(function(t){return e.find((function(e){return e.id===t.categoryId})).parentCategory.name}))}),[n,e]),g=Object(c.useCallback)((function(){d(),b.current()}),[d,b]),h=Object(c.useCallback)((function(){d(null),b.current()}),[d,b]),v=Object(c.useMemo)((function(){return Object.entries(p).map((function(n){var a=Object(r.a)(n,2),c=a[0],o=a[1];return{id:c,Trigger:function(e){var n=e.onClick;return u.a.createElement(C,{name:c,onClick:function(){n(c),d(c)},categories:o,transactions:t.transactions})},children:o.map((function(n){var r=e.find((function(t){return t.id===n.categoryId})).name;return u.a.createElement(x,{key:n.id,name:r,item:n,transactions:t.transactions})}))}}))}),[e,t.transactions,p,d]),j=Object(c.useMemo)((function(){return t.transactions.reduce((function(t,e){return t+e.amount}),0)}),[t.transactions]),O=Object(c.useMemo)((function(){return t.totalAmount-j}),[t.totalAmount,j]),y=Object(c.useMemo)((function(){return n.reduce((function(e,n){var r=t.transactions.filter((function(t){return t.categoryId===n.id})).reduce((function(t,e){return t+e.amount}),0);return e+Math.max(r,n.budget)}),0)}),[t.transactions,n]),I=Object(c.useMemo)((function(){return t.transactions.filter((function(t){return!n.find((function(e){return e.id===t.categoryId}))}))}),[t.transactions,n]),M=Object(c.useMemo)((function(){return I.reduce((function(t,e){return t+e.amount}),0)}),[I]),_=Object(c.useMemo)((function(){return t.totalAmount-y-M}),[y,t.totalAmount,M]);return u.a.createElement("div",null,u.a.createElement(w,null,u.a.createElement(C,{name:t.name,amount:O,onClick:g})),u.a.createElement(l.f,{items:v,clickRef:b}),u.a.createElement(E,null,u.a.createElement(C,{name:m("Other Categories"),amount:_,onClick:h})))}}}]);
//# sourceMappingURL=4.2eaaf6a7.chunk.js.map