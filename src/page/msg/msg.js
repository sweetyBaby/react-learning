import React from 'react';
import { connect } from 'react-redux';
import { List, WhiteSpace, WingBlank } from 'antd-mobile';

@connect(state => state)
export default class Msg extends React.Component {
  getLast(arr) {
    return arr[arr.length - 1];
  }
  render() {
    console.log(this.props);
    const Item = List.Item;
    const Brief = Item.Brief;
    const userId = this.props.user._id;
    let group = {};
    this.props.chat.msgList.forEach(v => {
      if (!group[v.chatid]) {
        group[v.chatid] = [];
      } else {
        group[v.chatid].push(v);
      }
    });
    console.log(group);
    const msgList = Object.values(group);
    console.log(msgList);
    return (
      <WingBlank>
        {msgList.map(v => {
          const target = userId === v[0].from ? v[0].to : v[0].from;
          const name = this.props.chat.users[target].username ? this.props.chat.users[target].username : '';
          const avatar = this.props.chat.users[target].avatar ? this.props.chat.users[target].avatar : '';
          return (
            <div key={v[0]._id}>
              <WhiteSpace />
              <List>
                <Item
                  thumb={require(`../../img/${avatar}`)}
                >
                  {this.getLast(v).content}
                  <Brief>
                    {name}
                  </Brief>
                </Item>
              </List>
            </div>
          )
        })}
      </WingBlank>
    )
  }
};