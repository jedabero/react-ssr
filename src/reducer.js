function reducer(state = { items: [], loading: false }, action) {
  switch (action.type) {
    case 'LOADING_ITEMS':
      return {
        ...state,
        loading: true
      };
    case 'LOADED_ITEMS':
      return {
        items: action.data,
        loading: false
      };
    default:
      return state;
  }
}

export default reducer;