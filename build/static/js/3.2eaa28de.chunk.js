(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{46:function(t,e,r){t.exports={TagIndexPage:"TagIndexPage_TagIndexPage__1KLH1"}},47:function(t,e,r){t.exports={TagPage:"TagPage_TagPage__2Zrai"}},55:function(t,e,r){"use strict";function n(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r.r(e);var a=r(4),o=r.n(a),c=r(11),u=r(7),s=r(0),i=r.n(s),f=r(2),p=r(5),l=r(9),g=r(3),b=r(46),m=r.n(b);var h=function(t){return i.a.createElement("div",{className:m.a.TagIndexPage},i.a.createElement("h1",null,"Tags"),i.a.createElement("ul",null,t.tags.map(function(t){return i.a.createElement("li",{key:t.href},i.a.createElement(g.Link,{href:t.href},t.name," (",t.count,")"))})))},w=r(23),O=r(47),j=r.n(O);var y=function(t){var e=t.blogRoot,r=t.name,n=t.routes;return i.a.createElement("div",{className:j.a.TagPage},i.a.createElement("h1",null,r," posts"),i.a.createElement("ul",null,n.map(function(t){return i.a.createElement("li",{key:t.url.href},i.a.createElement(w.a,{blogRoot:e,route:t}))})))},v=r(14);function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function E(t){return x.apply(this,arguments)}function x(){return(x=Object(u.a)(o.a.mark(function t(e){var r,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(E.cache[e]){t.next=8;break}return t.next=3,Object(f.c)({context:{crawlingRoutes:!0},root:e,routes:v.a});case 3:return r=t.sent,n=r.paths,t.next=7,Object(f.l)({method:"HEAD",routes:v.a,urls:n});case 7:E.cache[e]=t.sent;case 8:return t.abrupt("return",E.cache[e]);case 9:case"end":return t.stop()}},t)}))).apply(this,arguments)}E.cache={};var P=Object(f.b)(Object(f.n)(function(t,e){return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(r,!0).forEach(function(e){Object(c.a)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({},e,{tagsRoot:t.mountpath})}),Object(f.o)({"/:tag":function(){var t=Object(u.a)(o.a.mark(function t(e,r){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r.crawlingRoutes){t.next=7;break}return t.t0=k,t.next=4,E(r.blogRoot);case 4:return t.t1=t.sent,t.t2=function(t){return"/"+t},t.abrupt("return",(0,t.t0)(t.t1).map(t.t2));case 7:return t.abrupt("return",[]);case 8:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}()}),Object(f.j)({"/":Object(f.m)({title:"Tags",getView:function(){var t=Object(u.a)(o.a.mark(function t(e,r){var n,a,c;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(r.blogRoot);case 2:return n=t.sent,a=k(n),c=Object(l.fromPairs)(a.map(function(t){return[t.toLowerCase(),[]]})),n.forEach(function(t){var e=t.data;e&&e.tags&&e.tags.forEach(function(e){e=e.toLowerCase(),c[e]&&c[e].push(t)})}),t.abrupt("return",i.a.createElement(h,{blogRoot:r.blogRoot,tags:a.map(function(t){return{name:t,href:Object(p.join)(e.mountpath,t.toLowerCase()),count:(c[t]||[]).length}})}));case 7:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}()}),"/:tag":Object(f.m)({getTitle:function(t){return t.params.tag},getView:function(){var t=Object(u.a)(o.a.mark(function t(e,r){var n,a,c;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.params.tag.toLowerCase(),t.next=3,E(r.blogRoot);case 3:return a=t.sent,c=[],a.forEach(function(t){(t.data&&t.data.tags||[]).find(function(t){return t.toLowerCase()===n})&&c.push(t)}),t.abrupt("return",i.a.createElement(y,{blogRoot:r.blogRoot,name:e.params.tag,routes:c}));case 7:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}()})}));function k(t){var e;return Array.from(new Set((e=[]).concat.apply(e,n(t.map(function(t){return t.data&&t.data.tags||[]})))))}e.default=P}}]);
//# sourceMappingURL=3.2eaa28de.chunk.js.map