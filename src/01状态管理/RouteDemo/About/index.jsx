import React, { Component } from 'react'
//使用的是按需引入
import {Button} from 'antd'

export default class About extends Component {
  render() {
    return (
        <div>
            <span>这是About按键</span>
            <Button type='primary'>primary Button</Button>
            <Button>Default Button</Button>
        </div>
    )
  }
}
