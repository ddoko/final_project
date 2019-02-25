const INITIAL_STATE = {
    mutasi: [],
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
      case 'UPDATE_MUTASI':
        return {
          ...state,
          mutasi: action.payload.mutasi,
        }
      default:
        return state
    }
  }