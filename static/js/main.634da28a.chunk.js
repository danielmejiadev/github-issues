(this["webpackJsonpgithub-issues"]=this["webpackJsonpgithub-issues"]||[]).push([[0],{17:function(e,t,n){e.exports=n(44)},22:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(14),c=n.n(s),o=(n(22),n(2)),i=n(3),l=n(4),u=n(15),h=n.n(u),m=function(){function e(t){Object(i.a)(this,e),this.axiosInstance=void 0,this.axiosInstance=t}return Object(l.a)(e,[{key:"getRepoIssues",value:function(e,t,n){return this.axiosInstance.get("/repos/".concat(e,"/").concat(t,"/issues"),n)}}]),e}(),d=new(function(){function e(){return Object(i.a)(this,e),this.axiosInstance=void 0,this.issues=void 0,this.basicResponse=function(e){return e.data},this.axiosInstance=h.a.create({baseURL:"https://api.github.com"}),this.addResponseInterceptor(this.basicResponse),this.issues=new m(this.axiosInstance),this}return Object(l.a)(e,[{key:"addResponseInterceptor",value:function(e){return this.axiosInstance.interceptors.response.use(e),this}}]),e}());function g(e){return e.trim().toLowerCase()}var f=n(16),v=n.n(f);function b(){var e=r.a.useState(""),t=Object(o.a)(e,2),n=t[0],a=t[1],s=r.a.useState(!1),c=Object(o.a)(s,2),i=c[0],l=c[1],u=r.a.useState(),h=Object(o.a)(u,2),m=h[0],f=h[1],b=r.a.useState([]),p=Object(o.a)(b,2),E=p[0],w=p[1],x=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:400;return r.a.useCallback(v.a.debounce(e,n),t)}((function(e){return(null===e||void 0===e?void 0:e.length)>3?(l(!0),d.issues.getRepoIssues("reactjs","reactjs.org",{params:{per_page:100}}).then((function(t){return function(e,t){var n=g(t);return e.filter((function(e){var t=e.title,a=e.labels,r=g(t).includes(n),s=a.find((function(e){return g(e.name).includes(n)}));return r||s}))}(t,e)})).then((function(e){return w(e)})).catch(f).finally((function(){return l(!1)}))):w([])}),[]);return{search:n,onSearch:r.a.useCallback((function(e){var t=e.target.value;a(t),x(t)}),[x]),suggestions:E,loading:i,error:m}}var p=r.a.createContext({});var E=function(e){var t=e.children,n=b(),a=n.search,s=n.onSearch,c=n.suggestions,o=n.loading,i=n.error;return r.a.createElement(p.Provider,{value:{search:a,onSearch:s,suggestions:c,loading:o,error:i}},t)};function w(){return r.a.useContext(p)}n(42);var x=function(){var e=w(),t=e.search,n=e.onSearch,a=e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"search-form"},r.a.createElement("button",{type:"submit",className:"search-button",tabIndex:-1},r.a.createElement("svg",{className:"submit-button"},r.a.createElement("use",{xmlnsXlink:"http://www.w3.org/1999/xlink",xlinkHref:"#search"}))),a&&r.a.createElement("div",{className:"icon-container"},r.a.createElement("i",{className:"loader"})),r.a.createElement("input",{value:t,onChange:n,placeholder:"Search","aria-label":"Search",type:"text",className:"search-input",autoFocus:!0,tabIndex:0})),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:0,height:0,display:"none"},r.a.createElement("symbol",{id:"search",viewBox:"0 0 32 32"},r.a.createElement("path",{d:"M 19.5 3 C 14.26514 3 10 7.2651394 10 12.5 C 10 14.749977 10.810825 16.807458 12.125 18.4375 L 3.28125 27.28125 L 4.71875 28.71875 L 13.5625 19.875 C 15.192542 21.189175 17.250023 22 19.5 22 C 24.73486 22 29 17.73486 29 12.5 C 29 7.2651394 24.73486 3 19.5 3 z M 19.5 5 C 23.65398 5 27 8.3460198 27 12.5 C 27 16.65398 23.65398 20 19.5 20 C 15.34602 20 12 16.65398 12 12.5 C 12 8.3460198 15.34602 5 19.5 5 z"}))))};n(43);var I=function(){var e=w(),t=e.suggestions;return e.error?r.a.createElement("p",null,"There was an error, please try again"):0===t.length?null:r.a.createElement("div",{className:"suggestions"},r.a.createElement("ul",{role:"tablist"},t.map((function(e){return r.a.createElement("li",{role:"tab",key:e.id,tabIndex:0},r.a.createElement("a",{tabIndex:-1,className:"issue-container",href:e.html_url,rel:"noopener noreferrer",target:"_blank"},r.a.createElement("h4",null,e.title),r.a.createElement("div",{className:"labels-container"},e.labels.map((function(e){return r.a.createElement("p",{className:"issue-label",key:e.id},e.name)}))),r.a.createElement("p",null,"#".concat(e.number))))}))))};var C=function(){return r.a.createElement(E,null,r.a.createElement("div",{className:"container"},r.a.createElement(x,null),r.a.createElement(I,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.634da28a.chunk.js.map