import React, { Component } from 'react'
import './index.css'
import Item from '../Item'

export default class List extends Component {
  render() {
  const {todos,updateTodo,deleteTodo} = this.props

    return (
      <ul className='todo-main'>
        {
          todos.map(item => {
            return <Item key={item.id} {...item} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
          })
        }
        </ul>
    )
  }
}
