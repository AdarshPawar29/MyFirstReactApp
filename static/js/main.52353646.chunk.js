(this.webpackJsonpmy_todo_list=this.webpackJsonpmy_todo_list||[]).push([[0],{37:function(t,e,o){t.exports=o(68)},67:function(t,e,o){},68:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),r=o(32),c=o.n(r),l=o(19),i=o(5),s=o(6),d=o(8),u=o(7),p=o(9),m=o(14),h=o(11);var f={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},b={color:"#fff",textDecoration:"none"},g=function(){return a.a.createElement("header",{style:f},a.a.createElement("h1",null,"Todo List"),a.a.createElement(m.b,{style:b,to:"/"}," Home "),"|",a.a.createElement(m.b,{style:b,to:"/about"}," About "))},v=function(t){function e(){var t,o;Object(i.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).getStyle=function(){return{backgroundColor:"#f4f4f4",padding:"10px",borderButtom:"1px #ccc dotted",textDecoration:o.props.todo.completed?"line-through":"none"}},o}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t._id,o=t.title;return console.log(e),a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)}),"",o,a.a.createElement("button",{style:y,onClick:this.props.delTodo.bind(this,e)},"X")))}}]),e}(n.Component),y={backgroundColor:"#ff0000",color:"#fff",border:"none",padding:"5px 9px",borderRadius:"50%",cursor:"pointer",float:"right"},j=v,O=function(t){function e(){return Object(i.a)(this,e),Object(d.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return a.a.createElement(j,{key:e._id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})}))}}]),e}(n.Component),E=o(35),k=function(t){function e(){var t,o;Object(i.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={title:""},o.onSubmit=function(t){t.preventDefault(),o.props.addTodo(o.state.title),o.setState({title:""})},o.onChange=function(t){return o.setState(Object(E.a)({},t.target.name,t.target.value))},o}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add Todo ...",value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),e}(n.Component),C=function(t){function e(){return Object(i.a)(this,e),Object(d.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"This is todo app v1.9"))}}]),e}(n.Component),x=o(36),T=o.n(x),S=o(15),w=o.n(S),_=(o(67),function(t){function e(){var t,o;Object(i.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[]},o.markComplete=function(t){o.setState({todos:o.state.todos.map((function(e){if(e._id===t){e.completed=!e.completed;var o={_id:t,id:e.id,title:e.title,completed:e.completed};console.log(o),w.a.post("http://localhost:5000/todoList/update/"+t,o).then((function(t){200===t.status&&console.log((function(t){return t.data}))}))}return e}))})},o.delTodo=function(t){w.a.delete("http://localhost:5000/todoList/"+t).then((function(e){200===e.status&&o.setState({todos:Object(l.a)(o.state.todos.filter((function(e){return e._id!==t})))})}))},o.addTodo=function(t){var e={id:T.a.v4(),title:t,completed:!1};w.a.post("http://localhost:5000/todoList/add",e).then((function(t){200===t.status&&(e._id=t.data,o.setState({todos:[].concat(Object(l.a)(o.state.todos),[e])}))}))},o}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;w.a.get("http://localhost:5000/todoList/").then((function(e){t.setState({todos:e.data.data})})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){var t=this;return console.log(this.state.todos),a.a.createElement(m.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(g,null),a.a.createElement(h.a,{exact:!0,path:"/",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(k,{addTodo:t.addTodo}),a.a.createElement(O,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo}))}}),a.a.createElement(h.a,{path:"/about",component:C}))))}}]),e}(a.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.52353646.chunk.js.map