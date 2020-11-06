import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './style.less'

export default class Empty extends Component {
  render() {
    return (
      <View
        className="empty"
      >
        <View className="img-wrapper">
          <Image
            mode="widthFix"
            className="image"
            src={require('./empty.png')}
          />
          <View className="tips">暂无数据</View>
        </View>
      </View>
    )
  }
}
