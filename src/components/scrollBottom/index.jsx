import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import cls from 'classnames'
import './style.less'

export default class ScrollBottom extends Component {
  render() {
    const { className = '', hasMore } = this.props
    return (
      <View
        className={cls({
          'scroll-bottom': true,
          [className]: true,
        })}
      >
        {
          hasMore ? (
            <View className="loading">
              <Image className="icon" src={require('./loading.gif')} />
              <View className="txt">加载中</View>
            </View>
          ) : <View>已加载全部</View>
        }
      </View>
    )
  }
}
