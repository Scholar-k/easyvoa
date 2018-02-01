import { CHANGE_LIST, CHANGE_NAVLIST } from './actionTypes'

const defaultState = {
  list: [],
  navlist: []
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case CHANGE_LIST:
      return {
        list: action.value,
        navlist: state.navlist
      }
    case CHANGE_NAVLIST:
      return {
        navlist: action.value,
        list: state.list
      }
    default:
      return state
  }
}