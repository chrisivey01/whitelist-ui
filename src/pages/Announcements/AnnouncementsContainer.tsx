import { Divider, Grid } from "@material-ui/core";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import announcementsJson from "../../assets/json/announcements.json";
import ChatHistory from "./components/AnnounceHistory";
import TextInput from "./components/TextInput";
import {
    deleteAnnouncement,
    editAnnouncement,
    loadAnnouncements,
    postAnnouncement,
    showHideButton,
} from "../../redux/announcements/announcements.actions";

const Announcements = () => {
    const dispatch = useDispatch();
    const announcements = useSelector(
        (state: RootStateOrAny) => state.announcements.announcements
    );
    const [text, setText] = useState("");
    const textRef: any = useRef(null);
    const [anchorEl, setAnchorEl] = useState<any>(null);
    const open = Boolean(anchorEl);

    useEffect(() => {
        if (process.env.NODE_ENV === "development") {
            dispatch(loadAnnouncements(announcementsJson));
        } else {
            dispatch(loadAnnouncements(announcements));
        }
    }, []);

    const textboxHandler = () => {
        const submittedData = {
            announce: text,
            show: false,
            edit: false,
        };
        dispatch(postAnnouncement(submittedData, announcements));
        setText("");
    };

    const showButton = (e: MouseEvent<HTMLElement>, i: number) => {
        let announcementsArray = [...announcements];
        announcementsArray[i].show = true;
        dispatch(showHideButton(announcementsArray));
    };

    const hideButton = (e: MouseEvent<HTMLElement>, i: number) => {
        let announcementsArray = [...announcements];
        announcementsArray[i].show = false;
        dispatch(showHideButton(announcementsArray));
        if (anchorEl) {
            setAnchorEl(null);
        }
    };

    const menuOpen = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const menuClose = () => {
        setAnchorEl(null);
    };

    const handleEdit = (e: MouseEvent<HTMLElement>, i: number) => {
        dispatch(editAnnouncement(announcements, i));
        menuClose();
    };

    const handleDelete = (e: MouseEvent<HTMLElement>, i: number) => {
        dispatch(deleteAnnouncement(announcements, i));
        menuClose();
    };

    return (
        <Grid>
            <ChatHistory
                data={announcements}
                textRef={textRef}
                anchorEl={anchorEl}
                showButton={showButton}
                hideButton={hideButton}
                menuOpen={menuOpen}
                menuClose={menuClose}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                open={open}
            />
            <Divider />
            <TextInput
                text={text}
                setText={setText}
                clickHandler={textboxHandler}
            />
        </Grid>
    );
};

export default Announcements;
