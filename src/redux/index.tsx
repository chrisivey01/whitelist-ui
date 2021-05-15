import { combineReducers } from "redux";
import { announcementReducer } from "./announcements/announcements.reducer";

export default combineReducers({
    announcements: announcementReducer,
});
