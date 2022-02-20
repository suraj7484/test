import { NOTIFICATION_TOGGLE } from "../constants"

export const toggle = (payload: boolean) => {
    console.log(payload)
    return {
        type: NOTIFICATION_TOGGLE,
        payload: payload
    };
}