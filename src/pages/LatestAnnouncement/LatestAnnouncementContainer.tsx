import { Fragment, useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import announcementJson from "../../assets/json/announcements.json";
import {
    downvoteAnnouncement,
    loadAnnouncements,
    upvoteAnnouncement,
} from "../../redux/announcements/announcements.actions";
import Announce from "./components/Announce";
const LatestAnnouncementContainer = () => {
    const dispatch = useDispatch();
    const announcements = useSelector(
        (state: RootStateOrAny) => state.announcements.announcementList
    );
    const user = useSelector((state: RootStateOrAny) => state.user.employee);

    useEffect(() => {
        if (process.env.NODE_ENV === "development") {
            dispatch(loadAnnouncements(announcementJson));
        } else {
            console.log("this part is not done yet, need from service");
        }
    }, [announcements, dispatch]);

    const upvoteAnnouncementHandler = () => {
        dispatch(upvoteAnnouncement(announcements, user));
    };

    const downvoteAnnouncementHandler = () => {
        dispatch(downvoteAnnouncement(announcements, user));
    };

    if (announcements.length > 0) {
        return (
            <Announce
                announcement={announcements[announcements.length - 1]}
                upvoteHandler={upvoteAnnouncementHandler}
                downvoteHandler={downvoteAnnouncementHandler}
            />
        );
    } else {
        return <Fragment />;
    }
};

export default LatestAnnouncementContainer;
