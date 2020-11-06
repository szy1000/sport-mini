import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtButton } from 'taro-ui'
import './style.less'


export default class STabs extends Component {
  static defaultProps = {
    newsTabs: {
      tabList: [1, 2, 3],
    },
  }

  state = {
    current: 0,
  }

  handleClick = (e) => {
    this.setState({
      current: e,
    })
  }


  render() {
    return (
      <View className="STabs">
        <View className="header">hh</View>
        <View className="content">content</View>
      </View>

    )
  }
}
