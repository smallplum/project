import React from 'react';
import Child from './commons/src/Child';
import PubSub from 'pubsub-js';
import './App.css';

export default class App extends React.Component  {
  componentDidMount() {
  // publish 发布消息 消息名为：publish_one 内容为：This is publish
      PubSub.publish("publish_one","父组件发布信息“hello")
      PubSub.subscribe("childPublish",(msg,data)=>{
        console.log('父组件接受消息',msg,data);
    })      
  }
  render() {
    return (
      <div className = 'ArticleContainer'>
        这是一个git submodule顶级项目
        <Child/>
       
      </div>
    )
  }
}
