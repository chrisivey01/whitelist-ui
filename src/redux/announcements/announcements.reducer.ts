import { AnyAction } from "redux";
import {
    CANCEL_ANNOUNCEMENT,
    DELETE_ANNOUNCEMENT,
    DOWNVOTE_ANNOUNCEMENT,
    LOAD_ANNOUNCEMENTS,
    POST_ANNOUNCEMENT,
    SHOW_MORE_BUTTON,
    UPDATE_ANNOUNCEMENT,
    UPVOTE_ANNOUNCEMENT,
} from "./announcements.actions";
const initialState = {
    announcementList: [],
};

export const announcementReducer = (
    state = initialState,
    action: AnyAction
) => {
    switch (action.type) {
        case LOAD_ANNOUNCEMENTS:
            return {
                ...state,
                announcementList: action.payload,
            };
        case POST_ANNOUNCEMENT:
            return {
                ...state,
                announcementList: action.payload,
            };
        case SHOW_MORE_BUTTON:
            return {
                ...state,
                announcementList: action.payload,
            };
        case UPDATE_ANNOUNCEMENT:
            return {
                ...state,
                announcementList: action.payload,
            };
        case DELETE_ANNOUNCEMENT:
            return {
                ...state,
                announcementList: action.payload,
            };
        case CANCEL_ANNOUNCEMENT:
            return {
                ...state,
                announcementList: action.payload,
            };
        case UPVOTE_ANNOUNCEMENT:
            return {
                ...state,
                announcementList: action.payload,
            };
        case DOWNVOTE_ANNOUNCEMENT:
            return {
                ...state,
                announcementList: action.payload,
            };
        default:
            return state;
    }
};
