import React, { Component } from 'react';
import TodoItem from './TodoItem.js';
import PropTypes from 'prop-types';

class Todos extends Component {

  

  render(){
      //console.log(this.props.todos); 
      //its coming from the state in App.js and we can accesing them with 'this.props' 
    return this.props.todos.map(todo => 
    // <h3>{todo.title}</h3>
    <TodoItem key = {todo._id} todo = {todo} markComplete = {this.props.markComplete } delTodo = {this.props.delTodo} />
    );
  }
}

//PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;