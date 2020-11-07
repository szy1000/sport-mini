import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
// import { Provider } from '@tarojs/redux'
import './app.less'


import dva from './utils/dva'
import models from './models'
// import * as Index from "./pages/index/index";
const dvaApp = dva.createApp({
  initialState: {},
  models,
})
const store = dvaApp.getStore()

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    // return this.props.children
    return <Provider store={store}>{this.props.children}</Provider>
  }
}

export default App
