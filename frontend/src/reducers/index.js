import { combineReducers } from 'redux';
import currentUserReducer from './currentUserReducer';
import calendarReducer from './calendarReducer'
import apptReducer from './apptReducer'

const mainReducer = combineReducers({
        currentUser: currentUserReducer,
        calendar: calendarReducer,
        appts: apptReducer
})

export default mainReducer;