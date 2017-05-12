import React from 'react';
import { Button, Table } from 'antd';
import style from '../style/style.css';

const columns = [{
  title: '名称',
  dataIndex: 'name',
}, {
  title: '机房地址',
  dataIndex: 'roomAddress',
}, {
  title: 'IP地址',
  dataIndex: 'ipAddress',
}, {
  title: '环境',
  dataIndex: 'env',
}];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    // console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    // console.log(selected, selectedRows, changeRows);
  },
  getCheckboxProps: record => ({
    // disabled: record.name === 'Disabled User',    // Column configuration not to be checked
  }),
};

export default class DataTable extends React.Component {

  render() {
    const { data } = this.props;
    let datas = [];
    if (data) {
      const newdatas = data.map((newdata, i) => {
        const item = {
          key: i + 1,
          name: newdata.hostname,
          roomAddress: newdata.site_name,
          ipAddress: newdata.ip,
          env: newdata.env,
        }
        datas.push(item);
        return datas
      });
    }
    return (
      <div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={datas} />
      </div>
    );
  }
}
