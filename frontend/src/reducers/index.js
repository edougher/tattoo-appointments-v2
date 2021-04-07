import { combineReducers } from 'redux';
import currentUserReducer from './currentUserReducer';
import calendarReducer from './calendarReducer'

const mainReducer = combineReducers({
        currentUser: currentUserReducer,
        calendar: calendarReducer
})

export default mainReducer;