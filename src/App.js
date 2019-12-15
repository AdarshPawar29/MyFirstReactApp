import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo'
import About from './components/Pages/About'
import uuid from 'uuid' //to crate random id
import axios from 'axios'
import './App.css';

class App extends React.Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Delete index.html',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Make a new component',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Import the Todos.js in App.js',
        completed: false
      },
      {
        id: uuid.v4(),
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
    const newTodo = {
      id : uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
   }

  render(){
    console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <div className="container">
          <Header/>
          <Route exact path="/" render = {props => (
            <React.Fragment>
              <AddTodo addTodo = {this.addTodo}/>
              <Todos todos = {this.state.todos} markComplete = {this.markComplete} delTodo = {this.delTodo}/>
            </React.Fragment>
          )}/>
          <Route path="/about" component={About} />
          </div>
        </div>
      </Router>      
    );
  }
}

export default App;
