import React, { Component } from 'react'
import './index.css'
import { nanoid } from 'nanoid'

export default class Header extends Component {
  handleKeyUp = (event)=>{
    if(event.keyCode===13){
      if(event.target.value.trim() === ''){
        alert("输入不能为空")
        return
      }
      this.props.addTodo({id:nanoid(),name:event.target.value,done:false})
    }
  }
  render() {
    return (
      <div className='todo-header'>
      <input onKeyUp={this.handleKeyUp} type='text' placeholder='请输入你的任务名称按回车确认'></input>
    </div>
    )
  }
}
