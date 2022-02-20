import { NOTIFICATION_TOGGLE } from "../constants";

interface state {
    open: boolean
}

const initialState: state = {
    open: false
}

export const notificationReducer = (state = initialState, action: any) => {
    console.log(action)
    switch (action.type) {
        case NOTIFICATION_TOGGLE:
            return {
                ...state,
                open: action.payload
            } 
        default:
            return state
    }
}