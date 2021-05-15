import { Dispatch } from "react";
import { Announcement } from "./../../models/Announcement";
export const LOAD_ANNOUNCEMENTS = "LOAD_ANNOUNCEMENTS";
export const POST_ANNOUNCEMENT = "POST_ANNOUNCEMENT";
export const SHOW_MORE_BUTTON = "SHOW_MORE_BUTTON";
export const EDIT_ANNOUNCEMENT = "EDIT_ANNOUNCEMENT";
export const DELETE_ANNOUNCEMENT = "DELETE_ANNOUNCEMENT";
export const UPDATE_ANNOUNCEMENT = "UPDATE_ANNOUNCEMENT";
export const CANCEL_ANNOUNCEMENT = "CANCEL_ANNOUNCEMENT";

export const loadAnnouncements = (data: Announcement[]) => {
    return (dispatch: Dispatch<any>) => {
        dispatch({ type: LOAD_ANNOUNCEMENTS, payload: data });
    };
};

export const showHideButton = (announcementsArray: Announcement[]) => {
    return (dispatch: Dispatch<any>) => {
        dispatch({ type: SHOW_MORE_BUTTON, payload: announcementsArray });
    };
};

export const postAnnouncement = (
    data: Announcement,
    announcements: Announcement[]
) => {
    return (dispatch: Dispatch<any>) => {
        const announcementList = [...announcements, data];
        dispatch({ type: POST_ANNOUNCEMENT, payload: announcementList });
    };
};

export const editAnnouncement = (
    announcements: Announcement[],
    index: number
) => {
    return (dispatch: Dispatch<any>) => {
        const announcementList = [...announcements];
        announcementList[index].edit = true;
        dispatch({ type: EDIT_ANNOUNCEMENT, payload: announcementList });
    };
};

export const deleteAnnouncement = (
    announcements: Announcement[],
    index: number
) => {
    return (dispatch: Dispatch<any>) => {
        const announcementList = announcements.filter((item, i) => i !== index)
        dispatch({ type: DELETE_ANNOUNCEMENT, payload: announcementList });
    };
};

export const updateAnnouncement = (
    data: string,
    index: number,
    announcements: Announcement[]
) => {
    return (dispatch: Dispatch<any>) => {
        announcements[index].announce = data;
        dispatch({ type: UPDATE_ANNOUNCEMENT, payload: announcements });
    };
};

export const cancelEditAnnouncement = (
    index: number,
    announcements: Announcement[]
) => {
    return (dispatch: Dispatch<any>) => {
        announcements[index].edit = false;
        announcements[index].show = false;
        dispatch({ type: CANCEL_ANNOUNCEMENT, payload: announcements });
    };
};
