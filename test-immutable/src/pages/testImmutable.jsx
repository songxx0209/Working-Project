import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/getData';

@connect((store) => {
  console.log('store--', store);
  return {

  };
})
export default class Test extends Component {
  componentWillMount() {
    this.props.dispatch(getData());
  }
  render() {
    return (
      <div>
        测试使用
      </div>
    );
  }
}
