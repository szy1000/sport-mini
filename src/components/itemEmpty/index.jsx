import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './style.less'

class ItemEmpty extends Component {
  componentDidMount() {
  }


  render() {
    return (
      <View
        className="item-empty"
      >
        <View className="img-wrapper">
          <Image
            mode="widthFix"
            className="image"
            src={require('./empty.png')}
          />
        </View>
      </View>
    )
  }
}

export default ItemEmpty
