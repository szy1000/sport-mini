import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import cls from 'classnames'
import './style.less'

export default class FixBottom extends Component {
  overIphoneX = false

  judgeModel = () => {
    Taro.getSystemInfo({
      success: (res) => {
        const { model } = res
        if (model.match('iPhone X')) {
          this.overIphoneX = true
        }
      },
    })
  }

  render() {
    this.judgeModel()
    return (
      <View className={cls({
        'fix-bottom': true,
        iphoneX: this.overIphoneX,
      })}
      >{this.props.children}
      </View>
    )
  }
}
