(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,n){(t=e.exports=n(54)(!1)).push([e.i,".index-3Pl9H .index-3EFNp {\n  text-align: center;\n  font-size: 46px;\n  font-weight: bold;\n  margin-top: 200px;\n}\n.index-3Pl9H .index-2Vuur {\n  display: flex;\n  margin-top: 50px;\n  justify-content: center;\n  align-items: center;\n}\n.index-3Pl9H .index-eJfHD {\n  min-width: 140px;\n  text-align: center;\n  font-size: 24px;\n  cursor: pointer;\n  border-radius: 30px;\n  background-color: #009688;\n  color: #fff;\n  width: fit-content;\n  padding: 10px;\n  margin-top: 0px;\n}\n.index-3Pl9H .index-2bys6 {\n  margin-left: 20px;\n  color: #808080;\n  background-color: transparent;\n  border: solid 1px #009688;\n}\n",""]),t.locals={login:"index-3Pl9H",title:"index-3EFNp",nav:"index-2Vuur",btn:"index-eJfHD",manager:"index-2bys6"}},247:function(e,t,n){(t=e.exports=n(54)(!1)).push([e.i,".index-2__-d {\n  background-color: #009688;\n  height: 50px;\n  width: 100%;\n}\n.index-2__-d .index-1H0No {\n  color: #fff;\n  font-size: 24px;\n  height: 100%;\n  margin-left: 40px;\n  line-height: 46px;\n}\n.index-qLMX8 {\n  display: flex;\n  width: 100%;\n  top: 50px;\n  bottom: 0px;\n  background: #fff;\n  position: absolute;\n}\n.index-1sxVZ {\n  overflow-y: auto;\n  height: 100%;\n  width: 250px;\n  border-right: solid 1px #000;\n  background-color: #00746a;\n}\n.index-1sxVZ .index-37dNw {\n  padding: 20px;\n}\n.index-1sxVZ .index-37dNw .index-8I6-h {\n  padding: 5px;\n  color: #e4e4e4;\n  padding-left: 20px;\n  font-size: 20px;\n  border-radius: 5px;\n}\n.index-1sxVZ .index-37dNw .index-yMg94 {\n  margin-top: 5px;\n  padding-left: 20px;\n}\n.index-1sxVZ .index-37dNw .index-yMg94 .index-rkXQh {\n  cursor: pointer;\n  margin-top: 10px;\n  width: fit-content;\n  color: #fff;\n}\n.index-3HUmx {\n  overflow-y: auto;\n  flex: 1;\n  height: 100%;\n  background-color: #fff;\n  padding-top: 30px;\n  padding-left: 50px;\n  padding-right: 150px;\n}\n.index-1ltal {\n  text-decoration: none;\n  color: #fff;\n}\n",""]),t.locals={header:"index-2__-d","header-title":"index-1H0No",content:"index-qLMX8",tab:"index-1sxVZ",tabitem:"index-37dNw","tabitem-title":"index-8I6-h","tabitem-mune":"index-yMg94","tabitem-li":"index-rkXQh",view:"index-3HUmx",rlink:"index-1ltal"}},249:function(e,t,n){},251:function(e,t,n){},253:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"addTodo",function(){return ae}),n.d(a,"deleteTodo",function(){return re}),n.d(a,"editTodo",function(){return ce}),n.d(a,"completeTodo",function(){return ie}),n.d(a,"completeAllTodos",function(){return oe}),n.d(a,"clearCompleted",function(){return le}),n.d(a,"setVisibilityFilter",function(){return ue});var r,c=n(0),i=n.n(c),o=n(86),l=n(11),u=n(2),d=n(3),s=n(6),p=n(4),m=n(5),f=n(255),h=n(256),b=n(254),O=n(88),v=n.n(O),E=n(37),x=n.n(E),y=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(p.a)(t).call(this,e))).visitor=function(){n.props.history.push({pathname:"/Home/Welcome"})},n.manager=function(){n.props.history.push({pathname:"/Home/Welcome"})},n.state={},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"login",styleName:"login"},i.a.createElement("div",{styleName:"title"},"\u6b22\u8fce\u4f7f\u7528 react-redux-axios \u524d\u7aef\u6846\u67b6"),i.a.createElement("div",{styleName:"nav"},i.a.createElement("div",{styleName:"btn",onClick:this.visitor},"\u6e38\u5ba2"),i.a.createElement("div",{styleName:"btn manager",onClick:this.manager},"\u7ba1\u7406\u5458")))}}]),t}(i.a.Component),j=x()(y,v.a,{allowMultiple:!0}),g=n(257),C=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(p.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,"Welcome")}}]),t}(i.a.Component),T=(n(89),n(8)),k=n(17),N=n.n(k),_=function(){return function(e){var t=e.url,n=e.query;return N()({method:"get",url:t,params:Object(T.a)({},n)}).then(function(e){return e.status>=200&&e.status<300?e.data:Promise.reject(e)},function(e){return Promise.reject(e.message||e.data)})}({url:"/data/products.json",query:{}}).then(function(e){return Promise.resolve(e)}).catch(function(e){return Promise.reject(e)})},S=function(e,t,n){return setTimeout(function(){return t()},n||100)},I=n(10),w=n(15),D=n(40),L={addedIds:[],quantityById:{}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L.addedIds,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":return-1!==e.indexOf(t.productId)?e:Object(D.a)(e).concat([t.productId]);default:return e}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L.quantityById,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":var n=t.productId;return Object(T.a)({},e,Object(w.a)({},n,(e[n]||0)+1));default:return e}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECKOUT_SUCCESS":return L;case"CHECKOUT_FAILURE":return t.cart;default:return{addedIds:H(e.addedIds,t),quantityById:A(e.quantityById,t)}}},R=Object(I.c)({byId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_PRODUCTS":return Object(T.a)({},e,t.products.reduce(function(e,t){return e[t.id]=t,e},{}));case"ADD_TO_CART":var n=t.productId;if(n){var a=e[n],r=Object(T.a)({},a,{inventory:a.inventory-1});return Object(T.a)({},e,Object(w.a)({},n,r))}return e;default:return e}},visibleIds:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_PRODUCTS":return t.products.map(function(e){return e.id});default:return e}}}),M=Object(I.c)({cart:P,products:R}),U=function(e){return e.shoppingcart.cart.addedIds},V=function(e,t){return e.shoppingcart.cart.quantityById[t]||0},q=function(e,t){return e.shoppingcart.products.byId[t]},B=function(e){return U(e).reduce(function(t,n){return t+q(e,n).price*V(e,n)},0).toFixed(2)},F=function(e){return U(e).map(function(t){return Object(T.a)({},q(e,t),{quantity:V(e,t)})})},W=function(e){return console.log(e.shoppingcart),function(e){return e.shoppingcart.products.visibleIds}(e).map(function(t){return q(e,t)})},K=function(e){var t=e.price,n=e.quantity,a=e.title;return i.a.createElement("div",null,a," \u4ef7\u683c:$",t," \u6570\u91cf:",n)},Z=function(e){var t=e.product,n=e.onAddToCartClicked;return i.a.createElement("div",{style:{marginBottom:20}},i.a.createElement(K,{title:t.title,price:t.price,quantity:t.inventory}),i.a.createElement("button",{onClick:n,disabled:t.inventory>0?"":"disabled"},t.inventory>0?"\u52a0\u5165\u8d2d\u7269\u8f66":"\u5546\u54c1\u5356\u5149\u4e86"))},z=function(e){var t=e.title,n=e.children;return i.a.createElement("div",null,i.a.createElement("h3",null,t),i.a.createElement("div",null,n))},J=Object(l.b)(function(e){return{products:W(e)}},{addToCart:function(e){return function(t,n){n().shoppingcart.products.byId[e].inventory>0&&t(function(e){return{type:"ADD_TO_CART",productId:e}}(e))}}})(function(e){var t=e.products,n=e.addToCart;return i.a.createElement(z,{title:"\u5546\u54c1"},t.map(function(e){return i.a.createElement(Z,{key:e.id,product:e,onAddToCartClicked:function(){return n(e.id)}})}))}),X=function(e){var t=e.price,n=e.quantity,a=e.title;return i.a.createElement("div",null,a," \u4ef7\u683c:$",t," \u6570\u91cf:",n)},$=function(e){var t=e.products,n=e.total,a=e.onCheckoutClicked,r=t.length>0,c=r?t.map(function(e){return i.a.createElement(X,{title:e.title,price:e.price,quantity:e.quantity,key:e.id})}):i.a.createElement("em",null,"(\u8d2d\u7269\u8f66\u6ca1\u6709\u4efb\u4f55\u5546\u54c1)");return i.a.createElement("div",null,i.a.createElement("h3",null,"\u6211\u7684\u8d2d\u7269\u8f66"),i.a.createElement("div",null,c),i.a.createElement("p",null,"\u603b\u91d1\u989d: $",n),i.a.createElement("button",{onClick:a,disabled:r?"":"disabled"},"\u4ed8\u6b3e"))},G=Object(l.b)(function(e){return{products:F(e),total:B(e)}},{checkout:function(e){return function(t,n){var a=n().cart;S(e,function(){t({type:"CHECKOUT_SUCCESS",cart:a})})}}})(function(e){var t=e.products,n=e.total,a=e.checkout;return i.a.createElement($,{products:t,total:n,onCheckoutClicked:function(){return a(t)}})}),Q=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(p.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h2",null,"\u7f51\u4e0a\u5546\u57ce Demo"),i.a.createElement("hr",null),i.a.createElement(J,null),i.a.createElement("hr",null),i.a.createElement(G,null))}}]),t}(i.a.Component),Y=n(16),ee=n.n(Y),te=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(p.a)(t).call(this,e))).handleSubmit=function(e){var t=e.target.value.trim();13===e.which&&n.props.onSave(t)},n.handleChange=function(e){n.setState({text:e.target.value})},n.handleBlur=function(e){n.props.blurSaveBo&&n.props.onSave(e.target.value)},n.state={text:n.props.text||""},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement("input",{className:ee()({"new-todo":!0}),type:"text",placeholder:this.props.placeholder,autoFocus:!0,value:this.state.text,onBlur:this.handleBlur,onChange:this.handleChange,onKeyDown:this.handleSubmit})}}]),t}(i.a.Component),ne=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(p.a)(t).call(this,e))).onSaveHandle=function(e){0!==e.length&&n.props.addTodo(e)},n.state={},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement("header",{className:"header"},i.a.createElement("h1",null,"TODOS"),i.a.createElement(te,{onSave:this.onSaveHandle,placeholder:"\u5728\u6b64\u5904\u6dfb\u52a0\u60a8\u7684\u4efb\u52a1"}))}}]),t}(i.a.Component),ae=function(e){return{type:"ADD_TODO",text:e}},re=function(e){return{type:"DELETE_TODO",id:e}},ce=function(e,t){return{type:"EDIT_TODO",id:e,text:t}},ie=function(e){return{type:"COMPLETE_TODO",id:e}},oe=function(){return{type:"COMPLETE_ALL_TODOS"}},le=function(){return{type:"CLEAR_COMPLETED"}},ue=function(e){return{type:"SET_VISIBILITY_FILTER",filter:e}},de=Object(l.b)(null,{addTodo:ae})(ne),se=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(p.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.active,n=e.children,a=e.setFilter;return i.a.createElement("a",{className:ee()({selected:t}),style:{cursor:"pointer"},onClick:a},n)}}]),t}(i.a.Component),pe=Object(l.b)(function(e,t){return{active:t.filter===e.visibilityFilter}},function(e,t){return{setFilter:function(){e(ue(t.filter))}}})(se),me=(r={},Object(w.a)(r,"SHOW_ALL","\u5168\u90e8"),Object(w.a)(r,"SHOW_ACTIVE","\u672a\u5b8c\u6210"),Object(w.a)(r,"SHOW_COMPLETED","\u5df2\u5b8c\u6210"),r),fe=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(p.a)(t).call(this,e))).static={},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.activeCount,n=e.completedCount,a=e.onClearCompleted;return i.a.createElement("footer",{className:"footer"},i.a.createElement("span",{className:"todo-count"},"\u5269\u4f59 ",i.a.createElement("strong",null,t||"0")," \u4e2a"),i.a.createElement("ul",{className:"filters"},Object.keys(me).map(function(e){return i.a.createElement("li",{key:e},i.a.createElement(pe,{filter:e},me[e]))})),!!n&&i.a.createElement("button",{className:"clear-completed",onClick:a},"\u6e05\u9664\u5df2\u5b8c\u6210\u4efb\u52a1"))}}]),t}(i.a.Component),he=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(p.a)(t).call(this,e))).handleDoubleClick=function(){n.setState({editing:!0})},n.handleSave=function(e,t){0===t.length?n.props.deleteTodo(e):n.props.editTodo(e,t),n.setState({editing:!1})},n.state={editing:!1},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e,t=this,n=this.props,a=n.todo,r=n.completeTodo,c=n.deleteTodo;return e=this.state.editing?i.a.createElement(te,{text:a.text,editing:this.state.editing,onSave:function(e){return t.handleSave(a.id,e)}}):i.a.createElement("div",{className:"view"},i.a.createElement("input",{className:"toggle",type:"checkbox",checked:a.completed,onChange:function(){return r(a.id)}}),i.a.createElement("label",{onDoubleClick:this.handleDoubleClick},a.text),i.a.createElement("button",{className:"destroy",onClick:function(){return c(a.id)}})),i.a.createElement("li",{className:ee()({completed:a.completed,editing:this.state.editing})},e)}}]),t}(i.a.Component),be=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(p.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.filteredTodos,n=e.actions;return i.a.createElement("ul",{className:"todo-list"},t.map(function(e){return i.a.createElement(he,Object.assign({key:e.id,todo:e},n))}))}}]),t}(i.a.Component),Oe=[{text:"\u4efb\u52a1-1",completed:!1,id:0},{text:"\u4efb\u52a1-2",completed:!0,id:1}],ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return Object(D.a)(e).concat([{id:e.reduce(function(e,t){return Math.max(t.id,e)},-1)+1,completed:!1,text:t.text}]);case"DELETE_TODO":return e.filter(function(e){return e.id!==t.id});case"EDIT_TODO":return e.map(function(e){return e.id===t.id?Object(T.a)({},e,{text:t.text}):e});case"COMPLETE_TODO":return e.map(function(e){return e.id===t.id?Object(T.a)({},e,{completed:!e.completed}):e});case"COMPLETE_ALL_TODOS":var n=e.every(function(e){return e.completed});return e.map(function(e){return Object(T.a)({},e,{completed:!n})});case"CLEAR_COMPLETED":return e.filter(function(e){return!1===e.completed});default:return e}},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SHOW_ALL",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VISIBILITY_FILTER":return t.filter;default:return e}},xe=n(26),ye=n.n(xe),je=n(41),ge=Object(I.c)({todos:ye()(ve),visibilityFilter:Ee}),Ce=function(e){return e.todo.todos.present},Te=Object(je.a)([Ce],function(e){return e.length}),ke=Object(je.a)([function(e){return e.todo.visibilityFilter},Ce],function(e,t){switch(e){case"SHOW_ALL":return t;case"SHOW_COMPLETED":return t.filter(function(e){return e.completed});case"SHOW_ACTIVE":return t.filter(function(e){return!e.completed});default:throw new Error("Unknown filter: "+e)}}),Ne=Object(je.a)([Ce],function(e){return e.reduce(function(e,t){return t.completed?e+1:e},0)}),_e=Object(l.b)(function(e,t){return{filteredTodos:ke(e)}},function(e,t){return{actions:Object(I.b)(a,e)}})(be),Se=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(p.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e,t,n=this.props,a=n.todosCount,r=n.completedCount,c=n.actions;return e=a>0?i.a.createElement("span",null,i.a.createElement("input",{className:"toggle-all",type:"checkbox",checked:r===a,readOnly:!0}),i.a.createElement("label",{onClick:c.completeAllTodos})):null,t=a>0?i.a.createElement(fe,{completedCount:r,activeCount:a-r,onClearCompleted:c.clearCompleted}):null,i.a.createElement("section",{className:"main"},e,i.a.createElement(_e,null),t)}}]),t}(i.a.Component),Ie=Object(l.b)(function(e,t){return{todosCount:Te(e),completedCount:Ne(e)}},function(e,t){return{actions:Object(I.b)(a,e)}})(Se),we=function(e){var t=e.onUndo,n=e.onRedo;return i.a.createElement("div",{className:ee()({undoredu:!0})},i.a.createElement("div",{onClick:t,className:ee()({"undoredu-btn":!0})},"\u64a4\u9500"),i.a.createElement("div",{onClick:n,className:ee()({"undoredu-btn":!0})},"\u91cd\u505a"))},De={onUndo:xe.ActionCreators.undo,onRedo:xe.ActionCreators.redo},Le=we=Object(l.b)(null,De)(we),He=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(p.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"todo"},i.a.createElement(de,null),i.a.createElement(Ie,null),i.a.createElement(Le,null))}}]),t}(i.a.Component),Ae=n(90),Pe=n.n(Ae),Re=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(p.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement(f.a,{basename:"/"},i.a.createElement("div",{id:"core"},i.a.createElement("div",{styleName:"header"},i.a.createElement("div",{styleName:"header-title"},"react-redux-axios \u524d\u7aef\u6846\u67b6")),i.a.createElement("div",{styleName:"content"},i.a.createElement("div",{styleName:"tab"},i.a.createElement("div",{styleName:"tabitem"},i.a.createElement("div",{styleName:"tabitem-title"},"\u8def\u7531\u5217\u8868"),i.a.createElement("div",{styleName:"tabitem-mune"},i.a.createElement("ul",null,i.a.createElement("li",{styleName:"tabitem-li"},i.a.createElement(g.a,{exact:!0,to:"".concat(this.props.match.path,"/Welcome"),styleName:"rlink"},"Welcome(\u6e38\u5ba2)")),i.a.createElement("li",{styleName:"tabitem-li"},i.a.createElement(g.a,{exact:!0,to:"".concat(this.props.match.path,"/ShoppingCart"),styleName:"rlink"},"ShoppingCart(\u7ba1\u7406\u5458)")),i.a.createElement("li",{styleName:"tabitem-li"},i.a.createElement(g.a,{exact:!0,to:"".concat(this.props.match.path,"/Todo"),styleName:"rlink"},"Todo(\u7ba1\u7406\u5458)")))))),i.a.createElement("div",{styleName:"view"},i.a.createElement(h.a,null,i.a.createElement(b.a,{exact:!0,path:"".concat(this.props.match.path,"/Welcome"),component:C}),i.a.createElement(b.a,{exact:!0,path:"".concat(this.props.match.path,"/ShoppingCart"),component:Q}),i.a.createElement(b.a,{exact:!0,path:"".concat(this.props.match.path,"/Todo"),component:He}))))))}}]),t}(i.a.Component),Me=x()(Re,Pe.a,{allowMultiple:!0}),Ue=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(p.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(f.a,{basename:"/"},i.a.createElement("div",null,i.a.createElement(h.a,null,i.a.createElement(b.a,{exact:!0,path:"/",component:j}),i.a.createElement(b.a,{path:"/Home",component:Me})))))}}]),t}(i.a.Component),Ve=n(92),qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TOKEN":return t.token;case"GET_TOKEN":default:return e}},Be=Object(I.c)({shoppingcart:M,todo:ge,token:qe}),Fe=[Ve.a],We=Object(I.d)(Be,I.a.apply(void 0,Fe));We.dispatch(function(e){_().then(function(t){e({type:"RECEIVE_PRODUCTS",products:t})}).catch(function(e){console.log("\u8bf7\u6c42\u6570\u636e\u53d1\u751f\u9519\u8bef")})}),console.log(We.getState());var Ke=We,Ze=(n(249),n(251),function(e){if(e)try{var t=window.localStorage.getItem(e);return t||""}catch(n){return""}});!function(e){var t="";t="".concat(Object({NODE_ENV:"production",PUBLIC_URL:"."}).HOST,"/api"),N.a.defaults.baseURL=t,N.a.interceptors.request.use(function(t){var n="",a=e.dispatch({type:"GET_TOKEN"});return a?n=a:Ze("token")&&(n=Ze("token"),e.dispatch(function(e){return{type:"SET_TOKEN",token:e}}(n))),n&&(t.headers.TOKEN="".concat(n)),t},function(e){return Promise.reject(e)}),N.a.interceptors.response.use(function(e){return e},function(e){if(e.response)switch(e.response.state){case 411:case 412:break;default:return Promise.reject(e.response.data)}})}(Ke),Object(o.render)(i.a.createElement(l.a,{store:Ke},i.a.createElement(Ue,null)),document.getElementById("root"))},88:function(e,t,n){var a=n(103);"string"===typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(55)(a,r);a.locals&&(e.exports=a.locals)},89:function(e){e.exports=[{id:1,title:"iPad 4 Mini",price:500.01,inventory:2},{id:2,title:"T-Shirt",price:10.99,inventory:10},{id:3,title:"Sucker CD",price:19.99,inventory:5}]},90:function(e,t,n){var a=n(247);"string"===typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(55)(a,r);a.locals&&(e.exports=a.locals)},94:function(e,t,n){e.exports=n(253)}},[[94,2,1]]]);
//# sourceMappingURL=main.bf660bea.chunk.js.map