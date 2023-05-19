import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

//全选
  handleDelAll=(event)=>{ this.props.checkOutTodo(event.target.checked)}
  handleClearAllDone=()=>{this.props.handleClearAllDone()}

  render() {
    const {todos} = this.props
    const doneCount = todos.reduce((pre,cur)=>pre+(cur.done? 1:0),0)
    const total = todos.length

    return (
      <div className='todo-footer'>
      <label>
        <input type='checkbox' checked={doneCount=== total && total!==0 ? true : false} onChange={this.handleDelAll} />
      </label>
      <span><span>已完成{doneCount}</span>/{total}</span>
      <button className='btn btn-danger' onClick={this.handleClearAllDone}>清除已完成任务</button>
    </div>
    )
  }
}
