import { Map } from 'immutable';

const initialState = Map({
  isfetching: false,
  data: null,
});
// console.log(initialState)
export default function reducer(state = initialState, action) {
  switch (action.type) {
    // case 'GET_DATA_PENDING':
    //   {
    //     return {
    //       ...state,
    //       // isfetching: true,
    //     }
    //   }
    case 'GET_DATA_FULFILLED':
      {
        // console.log(state, action.payload);
        // const data = action.payload.data.data;
        console.log('22', state);
        let state1 = state.set('isfetching', true);
        console.log(state1.get('isfetching'));
        return state;
      }
    // case 'GET_DATA_REJECTED':
    //   {
    //     return {
    //       ...state,
    //     }
    //   }
    default:
      return {
        ...state,
      }
  }
}
