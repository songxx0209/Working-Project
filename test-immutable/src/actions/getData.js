import axios from 'axios';

export function getData() {
  return function (dispatch) {
    dispatch({
      type: 'GET_DATA',
      payload: axios.post('/voteOptions/get'),
    });
  }
}
