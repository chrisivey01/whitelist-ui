import { Dispatch } from "react";
import { User } from "../../models/User";
import { Announcement } from "./../../models/Announcement";
export const LOAD_ANNOUNCEMENTS = "LOAD_ANNOUNCEMENTS";
export const POST_ANNOUNCEMENT = "POST_ANNOUNCEMENT";
export const SHOW_MORE_BUTTON = "SHOW_MORE_BUTTON";
export const EDIT_ANNOUNCEMENT = "EDIT_ANNOUNCEMENT";
export const DELETE_ANNOUNCEMENT = "DELETE_ANNOUNCEMENT";
export const UPDATE_ANNOUNCEMENT = "UPDATE_ANNOUNCEMENT";
export const CANCEL_ANNOUNCEMENT = "CANCEL_ANNOUNCEMENT";
export const UPVOTE_ANNOUNCEMENT = "UPVOTE_ANNOUNCEMENT";
export const DOWNVOTE_ANNOUNCEMENT = "DOWNVOTE_ANNOUNCEMENT";

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
        const announcementList = announcements.filter((item, i) => i !== index);
        dispatch({ type: DELETE_ANNOUNCEMENT, payload: announcementList });
    };
};

export const updateAnnouncement = (
    data: string,
    index: number,
    announcements: Announcement[]
) => {
    return (dispatch: Dispatch<any>) => {
        announcements[index].text = data;
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

export const upvoteAnnouncement = (
    announcements: Announcement[],
    user: User
) => {
    return (dispatch: Dispatch<any>) => {
        const data = [...announcements];
        const announcementList = data[announcements.length - 1];

        if (announcementList.thumbsUp.people.indexOf(user.name) > -1) {
            announcementList.thumbsUp.people =
                announcementList.thumbsUp.people.filter(
                    (name) => name !== user.name
                );
            announcementList.thumbsUp.count =
                announcementList.thumbsUp.count - 1;
        } else {
            if (announcementList.thumbsDown.people.indexOf(user.name) > -1) {
                announcementList.thumbsDown.people =
                    announcementList.thumbsDown.people.filter(
                        (name) => name !== user.name
                    );
                announcementList.thumbsDown.count =
                    announcementList.thumbsDown.count - 1;
            }

            announcementList.thumbsUp.people.push(user.name);
            announcementList.thumbsUp.count =
                announcements[announcements.length - 1].thumbsUp.count + 1;
        }
        dispatch({ type: DOWNVOTE_ANNOUNCEMENT, payload: announcementList });
    };
};

export const downvoteAnnouncement = (
    announcements: Announcement[],
    user: User
) => {
    return (dispatch: Dispatch<any>) => {
        const data = [...announcements];
        const announcementList = data[announcements.length - 1];

        if (announcementList.thumbsDown.people.indexOf(user.name) > -1) {
            announcementList.thumbsDown.people =
                announcementList.thumbsDown.people.filter(
                    (name) => name !== user.name
                );
            announcementList.thumbsDown.count =
                announcementList.thumbsDown.count - 1;
        } else {
            if (announcementList.thumbsUp.people.indexOf(user.name) > -1) {
                announcementList.thumbsUp.people =
                    announcementList.thumbsUp.people.filter(
                        (name) => name !== user.name
                    );
                announcementList.thumbsUp.count =
                    announcementList.thumbsUp.count - 1;
            }
            announcementList.thumbsDown.people.push(user.name);
            announcementList.thumbsDown.count =
                announcements[announcements.length - 1].thumbsDown.count + 1;
        }
        dispatch({ type: DOWNVOTE_ANNOUNCEMENT, payload: announcementList });
    };
};
