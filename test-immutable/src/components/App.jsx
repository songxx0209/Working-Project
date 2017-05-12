import React from 'react';
import { connect } from 'react-redux';
import { getBindList, getUnbindList, getRequest } from '../actions/lbAction';

import DataTable from './DataTable';
import { Button, Tabs } from 'antd';
const TabPane = Tabs.TabPane;

import style from '../style/style.css';

@connect((store) => {
  return {
    Data: store.confData,
  };
})

export default class App extends React.Component {
  componentWillMount() {
    const args = getRequest();
    this.props.dispatch(getBindList(args.id, args.siteName, 'used'));
    this.props.dispatch(getUnbindList(args.id, args.siteName, 'unuse'));
  }
  unbundle() {
    // this.props.dispatch();
    // console.log('解绑');
  }
  render() {
    const { confData, unBindData } = this.props.Data;
    const search = window.location.search;
    const refresh = `/web/lb/conf/det${search}`;
    const title = {
      display: 'inline-block',
      marginRight: '10px',
    }
    return (
      <div className={style.container}>
        <div>
          <p style={title}>VIP实例 : 10.112.5.21</p>
          <Button type="primary"><a href="/web/lb/conf">返回</a></Button>
          <br /><br /><br /><hr />
        </div>
        <div className={style.gbody}>
          <Tabs type="card">
            <TabPane tab="已绑定" key="1">
              <Button type="primary" className={style.btn} onClick={this.unbundle.bind(this)}>解绑</Button>
              <Button type="danger" className={style.btn}><a href={refresh}>刷新</a></Button>
              <DataTable data={confData.server_all ? confData.server_all : null} />
            </TabPane>
            <TabPane tab="未绑定" key="2">
              <Button type="primary" className={style.btn} onClick={this.unbundle.bind(this)}>绑定</Button>
              <Button type="danger" className={style.btn}><a href={refresh}>刷新</a></Button>
              <DataTable data={unBindData.server_all ? unBindData.server_all : null} />
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}


