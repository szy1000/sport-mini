import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import './style.less'

export default class Share extends Component {
  onShareAppMessage =(res) => {
    const { title = '首页', path = '/pages/home/index', imageUrl } = this.props
    if (res.from === 'button') {
      console.log('btn')
    }
    return {
      title,
      path,
      imageUrl,
    }
  }

  render() {
    return (
      <Button openType="share" onClick={this.onShareAppMessage}>
        <View className="share" />
      </Button>
    )
  }
}
