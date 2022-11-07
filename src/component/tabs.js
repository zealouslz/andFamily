import React, { Component } from 'react'
import "./css/tabs.css"
import { Badge, TabBar } from 'antd-mobile'
import FirstPage from './firstPage'
import Warning from './warning'
import MyHome from './myHome'
import {
    AppOutline,
    UserOutline,
  } from 'antd-mobile-icons'
export default class Tabs extends Component {
    state={
        list:[
            {
                key: 'home',
                title: '首页',
                icon: <AppOutline />,
                // badge: Badge.dot,
              },
              {
                key: 'todo',
                title: '报警',
                // icon: <UnorderedListOutline />,
                // badge: '5',
              },
              {
                key: '3',
                title: '我的',
                icon: <UserOutline />,
              },
        ],
        current:0
    }
  render() {
    return (
      <div>
        {
          this.which()
        }
       
        <ul>
            {
               this.state.list.map((item,index)=>
               <li key={item.tabsId} onClick={()=>this.setState({current:index})} 
               className={this.state.current===index?"active":''}>{item.text}</li>)
            }
        </ul>
      </div>
    )
  }
  which(){
    switch (this.state.current) {
        case 0:
            return <FirstPage></FirstPage>
        case 1:
            return <Warning></Warning>
        case 2:
            return <MyHome></MyHome>
        default:
            break;
    }
  }
}
