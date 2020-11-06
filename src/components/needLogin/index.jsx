import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import Jump from '@/utils/jump'
import './style.less'

export default class NeedLogin extends Component {
  render() {
    return (
      <View className="needLogin">
        <Image className="img" src={require('./login.png')} />
        <View className="tips">您好，您尚未登录。</View>
        <View>请登录后查看订阅信息。</View>
        <View
          className="btn"
          onClick={() => Jump({
            url: '/pagesA/login/index',
            method: 'redirectTo',
          })}
        >去登录
        </View>
      </View>
    )
  }
}
