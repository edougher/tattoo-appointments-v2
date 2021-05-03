const user = {
    currentUser: {},
    appointments: [],
    imgs: []
}

const currentUserReducer = (state=user, action) => {
    let user = state;
    switch(action.type){
        case 'SIGN_UP':
            //user.currentUser.id = action.data.user.id
            //user.currentUser.username = action.data.user.username
            //action.data.appts ? user.appointments = action.data.appts : user.appointments = {...state.appointments}
            //action.data.imgs === undefined || action.data.imgs.length === 0 ? user.imgs = [] : user.imgs = action.data.imgs[0]
            //return user
            debugger
            return {
                ...state,
                currentUser: action.data.user

            }
        //case 'NEW_APPT_CREATED':
        //    user.appointments.push(action.data)
        //    return user
        //case 'EDIT_APPT_SUCCESS':
        //    const objIndex = user.appointments.findIndex(obj => obj.id === action.data.id)
        //    user.appointments[objIndex] = action.data
        //    return user
        //case 'DELETE_APPT_SUCCESS':
        //    var id = parseInt(action.data, 10)
        //    user.appointments = user.appointments.filter(appt => appt.id !== id)
        //    user.imgs = user.imgs.filter(img => img.appointment_id !== id)
        //    return user
        case 'IMAGE_UPLOADED_SUCCESS':
            if (Object.keys(user.imgs).length === 0) {
                user.imgs = [action.imageData]
            } else {
                user.imgs.push(action.imageData)
            }
            return user
        default:
            return state
    }
}

export default currentUserReducer;