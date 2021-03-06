import React from 'react';
import { TabBar } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
@withRouter
@connect(state => state.chat)
export default class TabBarComponent extends React.Component {
  render() {
    const TabBarList = this.props.TabBarList.filter(v => v.hide !== true); 
    const path = this.props.location.pathname;
    return (
      <TabBar>
        {TabBarList.map(v => (
          <TabBar.Item
            title={v.text}
            key={v.text}
            badge={v.path === '/msg' ? this.props.unRead : 0}
            icon={{ uri: require(`./img/${v.icon}.png`) }}
            selectedIcon={{ uri: require(`./img/${v.icon}-active.png`) }}
            selected={v.path === path}
            onPress={() => {
              this.props.history.push(v.path);
            }}
          >
          </TabBar.Item>
        ))}
      </TabBar>
    )
  }
};