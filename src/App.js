import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo'
import About from './components/Pages/About'
import uuid from 'uuid' //to crate random id
import axios from 'axios'
// import toastr from 'reactjs-toastr';
// import 'reactjs-toastr/lib/toast.css';


import './App.css';

class App extends React.Component {
  state = {
    todos: []
  }

  componentDidMount(){
    axios.get('http://localhost:5000/todoList/')
    .then(res => {
      this.setState({todos: res.data.data})
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  //update completed

  //toggle complete 
  markComplete = id => {
    console.log(id) // we getting the id from Todos.js fun then TodoItem.js fun and with the help of .bind
    
    this.setState({todos: this.state.todos.map(todo => {
       if(todo._id === id){
        todo.completed = !todo.completed;
        let updateTodo = {
          _id: id,
          id : todo.id,
          title: todo.title,
          completed : todo.completed,
        }
        console.log(updateTodo);
        axios.post('http://localhost:5000/todoList/update/'+id,{updateTodo})
          .then(res => {
        if(res.status === 200){
          console.log(res => res.data);
        }
         console.log("im in");
        });
       }
       return todo;
     })})
  }

  //delete todo item 

  delTodo = id => {
    //to copy all the variables which already there we can ues sprade oprator which is '...'
    console.log(id);
    console.log("***");
    axios.delete('http://localhost:5000/todoList/'+id)
      .then(res => {
        console.log(res, "SSSSSSSSS")
        if(res.status === 200){
          this.setState({ todos: [...this.state.todos.filter(todo => todo._id !== id)]});
        }
      });

  }
  // delTodo = (id) => {
  //   //to copy all the variables which already there we can ues sprade oprator which is '...'
    
  //   axios.delete('http://localhost:5000/todoList/'+id)
  //     .then(res => {
  //       this.setState({ todos: [...this.state.todos.filter(todo => todo._id !== id)]});
  //     });
  // }

  //add todo
  addTodo = title => {
    let newTodo = {
      id : uuid.v4(),
      title,
      completed: false
    }
    
    axios.post('http://localhost:5000/todoList/add', newTodo)
    .then(res => {
      if(res.status === 200){
        newTodo._id = res.data;
        this.setState({ todos: [...this.state.todos, newTodo]})
        
      }
      console.log(res.data)
    })
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
              <Todos todos={this.state.todos} markComplete = {this.markComplete} delTodo = {this.delTodo}/>
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
