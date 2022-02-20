import { createStore } from "redux";
import { notificationReducer } from "./reducers/notification.reducer";

export const store = createStore(notificationReducer);