import { CHANGE_DETAIL } from './actionTypes'

const defaultState = {
	title: '',
	pubdate: '',
	source: '',
	count: '',
	mp3: '',
	content: ''
}

export default (state = defaultState, action) => {
	switch(action.type) {
		case CHANGE_DETAIL:
			return {
				...action.value
			}
		default:
			return state
	}
}