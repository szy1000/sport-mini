import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ScrollBottom, Empty } from '@/components/'
// import Item from '../item'
import './style.less'

export default class TabPanel extends Component {
  static defaultProps = {
    data: {
      list: [],
      total: 0,
    },
  }

  render() {
    const { list = [], total } = this.props.data
    return (
      <View className="tabPanel">
        {this.props.children}
        {/* { */}
        {/*  list.length > 0 ? list.map((v, i) => <Item key={i} {...v} />) : <Empty /> */}
        {/* } */}
        {list.length > 0 && <ScrollBottom hasMore={total > list.length} />}
      </View>
    )
  }
}
