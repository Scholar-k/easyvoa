import { CHANGE_LIST } from './actionTypes'

export const getChangeListAction = (list) => ({
	type: CHANGE_LIST,
	value: list
})