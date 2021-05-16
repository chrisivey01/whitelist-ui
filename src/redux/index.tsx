import { combineReducers } from "redux";
import { announcementReducer } from "./announcements/announcements.reducer";
import { welcomeReducer } from "./welcome/welcome.reducers";

export default combineReducers({
    announcements: announcementReducer,
    welcome: welcomeReducer,
});
