import axios from 'axios';

export function getRequest() {
  const url = location.search; //获取url中"?"符后的字串
  const theRequest = {};
  if (url.indexOf('?') !== -1) {
    const str = url.substr(1);
    const strs = str.split('&');
    for (let i = 0; i < strs.length; i ++) {
      theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1]);
    }
  }
  return theRequest;
}

export function getBindList(id, name, status) {
  return function (dispatch) {
    dispatch({
      type: 'GET_BIND_LIST_PENDING',
    });

    axios.post('/voteOptions/get', {
      lb_conf_id: id,
      site_name: name,
      server_status: status,
    })
      .then((res) => {
        dispatch({
          type: 'GET_BIND_LIST_FULFILLED',
          payload: res.data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: 'GET_BIND_LIST_REJECTED',
          payload: err,
        });
      });
  };
}
// 未绑定数据
export function getUnbindList(id, name, status) {
  return function (dispatch) {
    dispatch({
      type: 'GET_UNBIND_LIST',
      payload: axios.post('/voteOptions/get', {
        lb_conf_id: id,
        site_name: name,
        server_status: status,
      }),
    });
  }
}

