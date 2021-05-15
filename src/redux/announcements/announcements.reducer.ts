import { AnyAction } from "redux";
import {
    CANCEL_ANNOUNCEMENT,
    DELETE_ANNOUNCEMENT,
    LOAD_ANNOUNCEMENTS,
    POST_ANNOUNCEMENT,
    SHOW_MORE_BUTTON,
    UPDATE_ANNOUNCEMENT,
} from "./announcements.actions";
const initialState = {
    announcements: [],
};

export const announcementReducer = (
    state = initialState,
    action: AnyAction
) => {
    switch (action.type) {
        case LOAD_ANNOUNCEMENTS:
            return {
                ...state,
                announcements: action.payload,
            };
        case POST_ANNOUNCEMENT:
            return {
                ...state,
                announcements: action.payload,
            };
        case SHOW_MORE_BUTTON:
            return {
                ...state,
                announcements: action.payload,
            };
        case UPDATE_ANNOUNCEMENT:
            return {
                ...state,
                announcements: action.payload,
            };
        case DELETE_ANNOUNCEMENT:
            return {
                ...state,
                announcements: action.payload,
            };
        case CANCEL_ANNOUNCEMENT:
            return {
                ...state,
                announcements: action.payload,
            };
        default:
            return state;
    }
};
