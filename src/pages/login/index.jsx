import React, { Component } from 'react'
import { View, Text ,Button} from '@tarojs/components'
import {connect} from "react-redux";
import {AtDivider,AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/divider.scss" // 按需引入
import './index.less'
import {Jump} from "@/utils";

class Login extends Component {

  componentWillMount () { }

  componentDidMount () {
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleWXGetUserInfo = (event) => {
    console.log(event.detail)
    Jump({
      url:'/pages/sexAge/index'
    })
  }

  render () {
    console.log(this.props)
    return (
      <View className='index'>
          <View className='login-content'>
            <AtButton type='primary'>手机号登录</AtButton>
            <AtDivider content='微信登录' />
            <Button openType='getUserInfo' onGetUserInfo={this.handleWXGetUserInfo.bind(this)} >微信授权登录</Button>
          </View>
      </View>
    )
  }
}

export default connect((state) => ({...state.home}))(Login)
