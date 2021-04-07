

const calendarReducer = (state=[], action) => {
    switch(action.type){
        case "GET_CALENDAR_INFO":
            return [...state, action.data]
        case "TIMESLOT_ADDED":
            return state
            default:
                return state;
    }

}

export default calendarReducer;