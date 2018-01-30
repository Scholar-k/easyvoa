import { CHANGE_LIST } from './actionTypes'

const defaultState = {
	list: []
}

export default (state = defaultState, action) => {
	switch(action.type) {
		case CHANGE_LIST: 
			return {
				list: action.value
			}
		default: 
			return state
	}
}