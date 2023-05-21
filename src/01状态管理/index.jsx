import React, { Component } from 'react'
import Header from './components/DemoList/Header'
import Footer from './components/DemoList/Footer'
import List from './components/DemoList/List'
import RouteDemo from './components/RouteDemo';
import './index.css'

export default class COM extends Component{
    state = {todos: [
      { id: '001', name: '吃饭',done:true },
      { id: '002', name: '睡觉',done:true },
      { id: '003', name: '打豆豆',done:false },
      { id: '004', name: '逛街',done:true }
    ]}
    //用于添加todo，接收参数是todo对象
    addTodo = (todoObj)=>{
      const {todos} = this.state
      const newTodos = [todoObj,...todos]
      this.setState({todos:newTodos})
    }
    //用于切换按钮
    updateTodo = (id,done)=>{
      const {todos} = this.state
      const newTodos = todos.map((item) => {
        if(item.id === id) return {...item,done}
        else return item
      })
      this.setState({todos:newTodos})
    }
    //清除一个
    deleteTodo=(id)=>{
      const {todos} = this.state
      const newTodos = todos.filter(item =>{return item.id!==id})
      this.setState({todos:newTodos})
    }
    //全选所有已经完成的
    checkOutTodo=(flag)=>{
      const {todos} = this.state
      const newTodos = todos.map(item =>{return {...item,done:flag}})
      this.setState({todos:newTodos})
    }
    //删除所有已经完成的
    handleClearAllDone=()=>{
      const {todos} = this.state
      const newTodos = todos.filter(item =>{return !item.done})
      this.setState({todos:newTodos})
    }

  render(){
    const {todos} = this.state
    return(
      <div className='todo-container' >
            <div className='todo-wrap'>
              <Header addTodo={this.addTodo} />
              <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
              <Footer todos={todos} checkOutTodo={this.checkOutTodo} handleClearAllDone={this.handleClearAllDone} />
            </div>
            <div>
              <RouteDemo/>
            </div>
      </div>
    )
  }
}
