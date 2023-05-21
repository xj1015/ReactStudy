import React, { Component } from 'react'

//类式的Demo
class Demo extends Component {
    state = {count:0}
    add=()=>{
        this.setState(state=>({count:state.count+1}))
    }
  render() {
    return (
      <div>
        <h2>当前求和为{this.state.count}</h2>
        <button onClick={this.add}>+1</button>
      </div>
    )
  }
}

//函数式DemoTest
function DemoTest(){
    const [count,setCount] = React.useState(0)
    function add(){setCount(count=>count+1)}
    return (
        <div>
          <h2>当前求和为{count}</h2>
          <button onClick={add}>+1</button>
        </div>
      )
    }



export { Demo , DemoTest};
