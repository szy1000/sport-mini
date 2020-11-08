import React, { Component } from 'react'
import { View, Text,Image } from '@tarojs/components'
import {connect} from "react-redux";
import { AtButton } from 'taro-ui'
import Jump from "../../utils/jump";

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.less'

class My extends Component {
  state={
    userInfo:{
      headerImg:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2618448714,3653715314&fm=26&gp=0.jpg',
      articles:12,
      likes:25,
      curWeight:78.9,
      desWeight:60,
      leftDays:10,
      weightList:[
        {
          date:'2020/12/02 18:00',
          weight:'78.9kg'
        },{
          date:'2020/12/02 18:00',
          weight:'78.9kg'
        },
        {
          date:'2020/12/02 18:00',
          weight:'78.9kg'
        },
        {
          date:'2020/12/02 18:00',
          weight:'78.9kg'
        }
      ]
    }
  }

  componentWillMount () { }

  componentDidMount () {
    this.props.dispatch({
      type: 'my/queryPageInit',
      params: {}
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  doLogin=()=>{
    console.log('login')
    Jump({
      url:'/pages/login/index'
    })
  }

  render () {
    console.log(this.props)
    const {init,list} = this.props
    if(!init) {
      return <View>loading</View>
    }
    let {headerImg,articles,likes,weightList,curWeight,desWeight,leftDays} = this.state.userInfo
    return (
      <View className='index'>
        <View className='header' onClick={()=>{this.doLogin()}}>
          <Image mode='heightFix' lazyLoad src={headerImg}></Image>
          <View className='header-content'>
            <View className='content-top'>
              <View className='top-item'>
                <Text  className='top-item-value'>{articles}</Text>
                <Text  className='top-item-label'>动态</Text>
              </View>
              <View  className='top-item'>
                <Text  className='top-item-value'>{likes}</Text>
                <Text  className='top-item-label'>获赞</Text>
              </View>
            </View>
            <View className='content-card'>
              <Text  className='card-label'>运动目标</Text>
              <View className='card-des'>
                <View className='des-item'>
                  <View className='des-item-top'>
                    <Text className='des-item-value'>{curWeight}</Text>
                    <Text className='des-item-unit'>kg</Text>
                  </View>
                  <Text  className='des-item-label'>当前体重</Text>
                </View>
                <View className='des-item'>
                  <View className='des-item-top'>
                    <Text  className='des-item-value'>{desWeight}</Text>
                    <Text className='des-item-unit'>kg</Text>
                  </View>
                  <Text  className='des-item-label'>目标体重</Text>
                </View>
                <View className='des-item'>
                  <View className='des-item-top'>
                    <Text className='des-item-value'>{leftDays}</Text>
                    <Text className='des-item-unit'>天</Text>
                  </View>
                  <Text  className='des-item-label'>课程剩余</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View className='weight-list'>
          <Text className='weight-list-label'>体重记录</Text>
          {
            weightList.map(w=><View className='weight-list-item'>
              <Text className='list-item-date'>{w.date}</Text>
              <Text  className='list-item-weight'>{w.weight}</Text>
            </View>)
          }
        </View>
      </View>
    )
  }
}

export default connect((state) => ({...state.my}))(My)
