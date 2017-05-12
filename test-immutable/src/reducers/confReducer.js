export default function reducer(state = {
  confData: {},
  unBindData: {},
  isfetching: false,
}, action) {
  switch (action.type) {
    case 'GET_BIND_LIST_PENDING':
      {
        return {
          ...state,
          isfetching: true,
        }
      }
    case 'GET_BIND_LIST_FULFILLED':
      {
        return {
          ...state,
          confData: action.payload,
          isfetching: false,
        }
      }
    case 'GET_BIND_LIST_REJECTED':
      {
        return {
          ...state,
        }
      }
    // 未绑定
    case 'GET_UNBIND_LIST_PENDING':
      {
        return {
          ...state,
          isfetching: true,
        }
      }
    case 'GET_UNBIND_LIST_FULFILLED':
      {
        return {
          ...state,
          unBindData: action.payload.data.data,
          isfetching: false,
        }
      }
    case 'GET_UNBIND_LIST_REJECTED':
      {
        return {
          ...state,
        }
      }
    default:
      return {
        ...state,
      }
  }
}
