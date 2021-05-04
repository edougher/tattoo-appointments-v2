



const apptReducer = (state=[], action) => {
    switch(action.type){
        case 'NEW_APPT_CREATED':
            //user.appointments.push(action.data)
            //return user
            debugger
            return state
            case 'CURRENT_APPTS':
            return state
        //case 'EDIT_APPT_SUCCESS':
        //    const objIndex = user.appointments.findIndex(obj => obj.id === action.data.id)
        //    user.appointments[objIndex] = action.data
        //    return user
        //case 'DELETE_APPT_SUCCESS':
        //    var id = parseInt(action.data, 10)
        //    user.appointments = user.appointments.filter(appt => appt.id !== id)
        //    user.imgs = user.imgs.filter(img => img.appointment_id !== id)
        //    return user
        default:
            return state
    }



}



export default apptReducer;
