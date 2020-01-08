import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class TodoItem extends Component {
    getStyle = () => {
        
        return{
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderButtom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
           // backgroundColor: this.props.todo.completed ? '#f4f4f4' : '#ff0000'
        }
        
        //if(this.props.todo.completed){
        //     return {
        //         textDecoration: 'line-through'
        //     }
        // }
        // else{
        //     return {
        //         textDecoration: 'none'
        //     }
        // }
    }


    render() {
        //pulling out the variables ID and TITLE from the prop so that we dont need to use this function many times 
        const {_id, title} = this.props.todo;
        console.log(_id);
        return (
            <div style = {this.getStyle()}> 
                <p>
                    <input type = "checkbox"  onChange = {this.props.markComplete.bind(this, _id) } />{''}
                    { title }
                    <button style = {btnStyle} onClick = {this.props.delTodo.bind(this, _id)} >X</button>
                </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
// const itemStyle = {
//     backgroundColor: '#f4f4f4' //we can use variable in the place of inline function with single {} <div style = {itemStyle}> else we use {{backgroundColor = '#somecolor'}}
// }

const btnStyle = {
    backgroundColor: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}


export default TodoItem
