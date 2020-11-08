import React, { Component } from 'react'
import { View, Text ,Image} from '@tarojs/components'
import {connect} from "react-redux";
import {AtDivider,AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/divider.scss" // 按需引入
import './index.less'

class Destination extends Component {


  componentWillMount () { }

  componentDidMount () {
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleWXGetUserInfo = (event) => {
    console.log(event.detail)

  }

  render () {
    console.log(this.props)
    return (
      <View className='index'>
        <View className='container'>
          <Text>选择您的目标</Text>
          <View className='next'>提交(3/3)</View>
        </View>
      </View>
    )
  }
}

export default connect((state) => ({...state.home}))(Destination)
