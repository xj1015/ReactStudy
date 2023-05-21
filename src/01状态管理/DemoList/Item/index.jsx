import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  state = {mouse:false}

  //鼠标移入移除事件
  handleMouse=(flag)=>{
    return()=>{
      this.setState({mouse:flag})
    } }
  //点击取消和不取消
  handleCheck = (id)=>{
    return(event)=>{
      this.props.updateTodo(id,event.target.checked)
    }
  }
  //删除元素
  handleDelete =(id)=>{
    return (event =>{
      if(window.confirm('确定删除吗?')){
        this.props.deleteTodo(id)
      }
    })
  }


  render() {
  const {id,name,done} = this.props
  const {mouse} = this.state
  return (
      <li style={{backgroundColor:mouse ? '#ddd' : 'white'}} 
      onMouseMove={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
      <label>
        <input type='checkbox' checked={done} onChange={this.handleCheck(id)}></input>
        <span>{name}</span>
      </label>
      <button onClick={this.handleDelete(id)} className='btn btn-danger' style={{ display:mouse?'block':'none' }}>删除</button>
    </li>
    )
  }
}
