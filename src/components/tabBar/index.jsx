import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import cls from 'classnames'
import { Jump, Tools } from '@/utils'
import './style.less'

export default class TabBar extends Component {
  render() {
    const tabBar = {
      color: '#666',
      selectedColor: '#b4282d',
      backgroundColor: '#fafafa',
      list: [
        {
          pagePath: '/pages/home/index',
          text: '首页',
          iconPath: require('./images/home.png'),
          selectedIconPath: require('./images/home-active.png'),
          className: 'tab-bar-item',
        },
        {
          pagePath: '/pages/order-submit/index',
          iconPath: require('./images/add.png'),
          selectedIconPath: require('./images/add.png'),
          className: 'add',
        },
        {
          pagePath: '/pages/my/index',
          text: '我的',
          iconPath: require('./images/user.png'),
          selectedIconPath: require('./images/user-active.png'),
          className: 'tab-bar-item',
        }],
    }

    const currentPage = Tools.getCurrentPage()
    return (
      <View className="project-tabBar">
        <View className="tab-item-wrapper">
          {
            tabBar.list.map((v, i) => (
              <View
                key={i}
                className={cls(i === 1 ? 'add' : 'tab-item', {
                  // 'tab-item': true,
                  active: `/${currentPage}` === v.pagePath,
                })}
                onClick={() => Jump({
                  url: v.pagePath,
                  method: i !== 1 ? 'redirectTo' : 'navigateTo',
                })}
              >
                <View>
                  <Image
                    className="icon"
                    src={`/${currentPage}` === v.pagePath ? v.selectedIconPath : v.iconPath}
                  />
                  {v.text && <View className="txt">{v.text}</View>}
                </View>
              </View>
            ))
          }
        </View>
      </View>
    )
  }
}
