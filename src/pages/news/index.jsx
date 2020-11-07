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
        <Text>动态</Text>
      </View>
    )
  }
}

export default connect((state) => ({...state.home}))(Index)
