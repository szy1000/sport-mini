import React, { Component } from 'react'
import { View, Text ,Image} from '@tarojs/components'
import {connect} from "react-redux";
import {AtDivider,AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/divider.scss" // 按需引入
import './index.less'
import {Jump} from "@/utils";

class HeightWeight extends Component {


  componentWillMount () { }

  componentDidMount () {
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleWXGetUserInfo = (event) => {
    console.log(event.detail)

  }

  next=()=>{
    console.log('/pages/destination/index')
    Jump({
      url:'/pages/destination/index'
    })
  }

  render () {
    console.log(this.props)
    return (
      <View className='index'>
        <View className='container'>
          <Text>选择您的身高</Text>
          <Text>选择您的体重</Text>
          <View className='next' onClick={()=>{this.next()}}>下一步(2/3)</View>
        </View>
      </View>
    )
  }
}

export default connect((state) => ({...state.home}))(HeightWeight)
