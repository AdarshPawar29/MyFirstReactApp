import React from 'react';
import Header from './components/layout/Header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo'
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
        completed: false
      },
      {
        id: 3,
        title: 'Import the Todos.js in App.js',
        completed: false
      },
      {
        id: 4,
        title: 'Make a State and write the task',
        completed: false
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

  //delete todo item 
  delTodo = (id) => {
    //to copy all the variables which already there we can ues sprade oprator which is '...'
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }
  //add todo
  addTodo = (title) => {
    
  }

  render(){
    console.log(this.state.todos);
    return (
      <div className="App">
        <div className="container">
        <Header/>
        <AddTodo addTodo = {this.addTodo}/>
        <Todos todos = {this.state.todos} markComplete = {this.markComplete} delTodo = {this.delTodo}/>
        </div>
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
