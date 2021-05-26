import { combineReducers } from "redux";
import { announcementReducer } from "./announcements/announcements.reducer";
import { userReducer } from "./user/user.reducers";

export default combineReducers({
    announcements: announcementReducer,
    user: userReducer,
});
