(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(1),a=n(10),r=n.n(a),c=n(8),l=n(6),i=n(7),s=n(2),u=n(3),d=n(5),b=n(4),f=(n(16),n(0)),h=function(t){var e=t.toDo,n=t.done;return Object(f.jsxs)("div",{className:"app-header d-flex",children:[Object(f.jsx)("h1",{children:"Todo List"}),Object(f.jsxs)("h2",{children:[e," more to do, ",n," done"]})]})},j=(n(18),function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={term:""},t.onSearchChenge=function(e){var n=e.target.value;t.setState({term:n}),t.props.onSearchChenge(n)},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsx)("input",{value:this.state.term,onChange:this.onSearchChenge,type:"text",className:"form-control search-input",placeholder:"type to search"})}}]),n}(o.Component)),m=n(11),p=(n(19),function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.label,n=t.onDeleted,o=t.onToggleImportant,a=t.onToggleDone,r="todo-list-item";return t.done&&(r+=" done"),t.important&&(r+=" important"),Object(f.jsxs)("span",{className:r,children:[Object(f.jsx)("span",{className:"todo-list-item-label",onClick:a,children:e}),Object(f.jsx)("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:o,children:Object(f.jsx)("i",{className:"fa fa-exclamation"})}),Object(f.jsx)("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:n,children:Object(f.jsx)("i",{className:"fa fa-trash-o"})})]})}}]),n}(o.Component)),g=(n(20),["id"]),O=function(t){var e=t.todos,n=t.onDeleted,o=t.onToggleImportant,a=t.onToggleDone,r=e.map((function(t){var e=t.id,r=Object(m.a)(t,g);return Object(f.jsx)("li",{className:"list-group-item",children:Object(f.jsx)(p,Object(l.a)(Object(l.a)({},r),{},{onDeleted:function(){return n(e)},onToggleImportant:function(){return o(e)},onToggleDone:function(){return a(e)}}))},e)}));return Object(f.jsx)("ul",{className:"list-group todo-list",children:r})},v=(n(21),function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).buttons=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.filter,n=t.onFilterChenge,o=this.buttons.map((function(t){var o=t.name,a=t.label,r=e===o?"btn-info":"btn-outline-secondary";return Object(f.jsx)("button",{type:"button",className:"btn ".concat(r),onClick:function(){n(o)},children:a},o)}));return Object(f.jsx)("div",{className:"btn-group",children:o})}}]),n}(o.Component)),x=(n(22),function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={label:""},t.onLabelChenge=function(e){t.setState({label:e.target.value.toUpperCase()})},t.onSubmit=function(e){e.preventDefault(),t.props.onAdd(t.state.label),t.setState({label:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:"item-add-form d-flex",onSubmit:this.onSubmit,children:[Object(f.jsx)("input",{type:"text",className:"form-control",onChange:this.onLabelChenge,placeholder:"What needs to be done",value:this.state.label}),Object(f.jsx)("button",{className:"btn btn-outline-secondary",children:"Add Item"})]})}}]),n}(o.Component)),y=(n(23),function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).maxId=100,t.state={todoData:[t.createTodoItem("Drink Coffee"),t.createTodoItem("Make Awesome App"),t.createTodoItem("Have a lunch")],term:"",filter:"all"},t.deleteItem=function(e){t.setState((function(t){var n=t.todoData,o=n.findIndex((function(t){return t.id===e}));return{todoData:[].concat(Object(i.a)(n.slice(0,o)),Object(i.a)(n.slice(o+1)))}}))},t.addItem=function(e){t.setState((function(n){var o=n.todoData;return{todoData:[].concat(Object(i.a)(o),[t.createTodoItem(e)])}}))},t.onToggleImportant=function(e){t.setState((function(n){var o=n.todoData;return{todoData:t.toggleProperty(o,e,"important")}}))},t.onToggleDone=function(e){t.setState((function(n){var o=n.todoData;return{todoData:t.toggleProperty(o,e,"done")}}))},t.onSearchChenge=function(e){t.setState({term:e})},t.onFilterChenge=function(e){t.setState({filter:e})},t}return Object(u.a)(n,[{key:"createTodoItem",value:function(t){return{label:t,important:!1,done:!1,id:this.maxId++}}},{key:"toggleProperty",value:function(t,e,n){var o=t.findIndex((function(t){return t.id===e})),a=t[o],r=Object(l.a)(Object(l.a)({},a),{},Object(c.a)({},n,!a[n]));return[].concat(Object(i.a)(t.slice(0,o)),[r],Object(i.a)(t.slice(o+1)))}},{key:"search",value:function(t,e){return 0===e.length?t:t.filter((function(t){return t.label.toLowerCase().indexOf(e.toLowerCase())>-1}))}},{key:"filter",value:function(t,e){switch(e){case"all":return t;case"active":return t.filter((function(t){return!t.done}));case"done":return t.filter((function(t){return t.done}));default:return t}}},{key:"render",value:function(){var t=this.state,e=t.todoData,n=t.term,o=t.filter,a=this.filter(this.search(e,n),o),r=e.filter((function(t){return t.done})).length,c=e.length-r;return Object(f.jsxs)("div",{className:"todo-app",children:[Object(f.jsx)(h,{toDo:c,done:r}),Object(f.jsxs)("div",{className:"top-panel d-flex",children:[Object(f.jsx)(j,{onSearchChenge:this.onSearchChenge}),Object(f.jsx)(v,{filter:o,onFilterChenge:this.onFilterChenge})]}),Object(f.jsx)(O,{todos:a,onDeleted:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleDone:this.onToggleDone}),Object(f.jsx)(x,{onAdd:this.addItem})]})}}]),n}(o.Component));r.a.render(Object(f.jsx)(y,{}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.fae53bb4.chunk.js.map