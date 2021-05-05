export const addUserSuccess = (data) => {
    return {
        type: 'SIGN_UP',
        data: data
    }
}

export const createNewAppointment = (data) => {
    return {
        type: 'NEW_APPT_CREATED',
        data: data
    }
}

export const getMyAppts = (data) => {
    return {
        type: 'CURRENT_APPTS',
        data: data
    }
}

export const newApptAdded = (data) => {
    return {
        type: 'EDIT_APPT_SUCCESS',
        data: data
    }
}

export const deleteAppt = (data) => {
    return {
        type: 'DELETE_APPT_SUCCESS',
        data: data
    }
}

export const isSignedInToFirebase = (data) => {
    return {
        type: 'FIREBASE_IS_SIGNED_IN',
        data: data
    }
}

export const imageAttachmentSuccess = (data) => {
    return {
        type: 'IMAGE_UPLOADED_SUCCESS',
        imageData: data
    }
}

export const timeslotAdded = (data) => {
    return
}

export const getCalendarInfo = (data) => {
    return {
        type: "GET_CALENDAR_INFO",
        data: data
    }
}