import React from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Delete index.html',
        completed: false
      },
      {
        id: 2,
        title: 'Make a new component',
        completed: true
      },
      {
        id: 3,
        title: 'Import the Todos.js in App.js',
        completed: false
      },
      {
        id: 4,
        title: 'Make a State and write the task',
        completed: true
      }
    ]
  }

  //toggle complete 
  markComplete = (id) => {
     //console.log(id) // we getting the id from Todos.js fun then TodoItem.js fun and with the help of .bind
     this.setState({todos: this.state.todos.map(todo => {
       if(todo.id === id){
          todo.completed = !todo.completed;
       }
       return todo;
     })})
  }
  delTodo = (id) => {
    console.log(id)
  }

  render(){
    console.log(this.state.todos);
    return (
      <div className="App">
       <Todos todos = {this.state.todos} markComplete = {this.markComplete} delTodo = {this.delTodo}/>
      </div>
    );
  }
}

export default App;




















// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//export default App;
