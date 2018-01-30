import { combineReducers } from 'redux'
import { reducer as commonReducer } from '../components/CommonWrapper/'
import { reducer as HomeReducer } from '../pages/Home/'
import { reducer as DetailReducer } from '../pages/Detail/'

export default combineReducers({
	common: commonReducer,
	home: HomeReducer,
	detail: DetailReducer
})