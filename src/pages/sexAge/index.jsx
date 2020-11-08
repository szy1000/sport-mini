import React, { Component } from 'react'
import { View, Text ,Image} from '@tarojs/components'
import {connect} from "react-redux";
import {AtDivider,AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/divider.scss" // 按需引入
import './index.less'
import {Jump} from "@/utils";

class SexAge extends Component {

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
    Jump({
      url:'/pages/heightWeight/index'
    })
  }

  render () {
    console.log(this.props)
    return (
      <View className='index'>
        <View className='container'>
          <Text>选择您的性别</Text>
          <View className='sex-container'>
            <View className='sex-item'>
              <View className='sex-img-container'>
                <Image className='sex-img' src={require('../../assets/images/female.png')} />
              </View>
              <Text>女性</Text>
            </View>
            or
            <View  className='sex-item'>
              <View className='sex-img-container'>
              <Image className='sex-img' src={require('../../assets/images/male.png')} />
              </View>
              <Text>男性</Text>
            </View>
          </View>
          <Text>选择您的年龄</Text>
          <View className='next' onClick={()=>{this.next()}}>下一步(1/3)</View>
        </View>
      </View>
    )
  }
}

export default connect((state) => ({...state.home}))(SexAge)
