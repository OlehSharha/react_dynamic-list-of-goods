(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(6),a=n.n(r),c=n(3),o=n(5),s=n(2),u=n.n(s),i=n(1),l=n.n(i),d=(n(12),n(0)),b=l.a.memo((function(e){var t=e.goods;return Object(d.jsx)("ul",{children:t.map((function(e){return Object(d.jsx)("li",{"data-cy":"good",style:{color:e.color},children:e.name},e.id)}))})}));n(14);function p(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(e){return e.json()}))}var j=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(i.useState)(!1),s=Object(o.a)(a,2),l=s[0],j=s[1],h=Object(i.useCallback)(Object(c.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!1),e.next=4,p();case 4:t=e.sent,r(t),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(0),j(!0),new Error("Server has no response");case 12:case"end":return e.stop()}}),e,null,[[0,8]])}))),[]),f=Object(i.useCallback)(Object(c.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!1),e.next=4,p().then((function(e){return e.sort((function(e,t){return e.name.localeCompare(t.name)})).slice(0,5)}));case 4:t=e.sent,r(t),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(0),j(!0),new Error("Server has no response");case 12:case"end":return e.stop()}}),e,null,[[0,8]])}))),[]),m=Object(i.useCallback)(Object(c.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!1),e.next=4,p().then((function(e){return e.filter((function(e){return"red"===e.color}))}));case 4:t=e.sent,r(t),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(0),j(!0),new Error("Server has no response");case 12:case"end":return e.stop()}}),e,null,[[0,8]])}))),[]);return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Dynamic list of Goods"}),Object(d.jsx)("button",{type:"button","data-cy":"all-button",onClick:h,className:"button is-primary is-outlined",children:"Load all goods"}),Object(d.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:f,className:"button is-info is-outlined",children:"Load 5 first goods"}),Object(d.jsx)("button",{type:"button","data-cy":"red-button",onClick:m,className:"button is-danger is-outlined",children:"Load red goods"}),l?Object(d.jsx)("p",{children:"Server can`t handle your request, try later"}):Object(d.jsx)(b,{goods:n})]})};a.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.170332ac.chunk.js.map