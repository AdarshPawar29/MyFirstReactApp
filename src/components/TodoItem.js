import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        
        return{
           // backgroundColor: '#f4f4f4',
            padding: '10px',
            borderButtom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            backgroundColor: this.props.todo.completed ? '#f4f4f4' : '#ff0000'
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
        return (
            <div style = {this.getStyle()}> 
                <p>
                    <input type = "checkbox"  onChange = {this.props.markComplete}/>{''}
                    { this.props.todo.title }
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

export default TodoItem
