
const appts = {
    appointments: [],
    imgs: []
}


const apptReducer = (state=appts, action) => {
    switch(action.type){
        case 'NEW_APPT_CREATED':
            //user.appointments.push(action.data)
            //return user
            return {
                ...state,
                appointments: state.appointments.concat(action.data)
            }
            case 'CURRENT_APPTS':
                debugger
            return {
                ...state,
                appointments: action.data
            }
            case 'CURRENT_APPTS_IMGS':
                return {
                    ...state,
                    imgs: action.data
                }
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
