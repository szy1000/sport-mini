import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import {connect} from "react-redux";
import { AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.less'

class Index extends Component {

  componentWillMount () { }

  componentDidMount () {
    this.props.dispatch({
      type: 'home/queryPageInit',
      params: {}
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    console.log(this.props)
    const {init,list} = this.props
    if(!init) {
      return <View>loading</View>
    }
    return (
      <View className='index'>
        {
          list.map(({summary,createTime}) => <View><Text>{createTime}</Text></View>)
        }
        <Text>Hello world!</Text>
        <AtButton type='primary'>I need Taro UI</AtButton>
        <Text>Taro UI 支持 Vue 了吗？</Text>
        <AtButton type='primary' circle>支持</AtButton>
        <Text>共建？</Text>
        <AtButton type='secondary' circle>来</AtButton>
      </View>
    )
  }
}

export default connect((state) => ({...state.home}))(Index)
