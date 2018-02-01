import { CHANGE_LIST, CHANGE_NAVLIST } from './actionTypes'

export const getChangeListAction = (list) => ({
  type: CHANGE_LIST,
  value: list
})

export const getChangeNavListAction = (navlist) => ({
  type: CHANGE_NAVLIST,
  value: navlist
})

export const getActionList = () => {
  return (dispatch) => {
    fetch('/api/list.json')
      .then((res) => res.json())
      .then((res) => {
        dispatch(getChangeListAction(res.data.list))
        dispatch(getChangeNavListAction(res.data.navlist))
      })
  }
}