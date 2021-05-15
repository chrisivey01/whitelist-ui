import { Grid, TextField, Typography } from "@material-ui/core";
import moment from "moment";
import {
    FocusEvent,
    Fragment,
    MouseEvent,
    MouseEventHandler,
    RefObject,
    useEffect,
    useRef,
} from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Announcement } from "../../models/Announcement";
import {
    cancelEditAnnouncement,
    updateAnnouncement,
} from "../../redux/announcements/announcements.actions";
import Menu from "./Menu";

const AnnounceContainer = styled(Grid)`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    max-height: 600px;
    overflow: auto;
    background-color: #233044;
    padding: 10px;
`;

const AnnouncementMessage = styled.div`
    position: relative;
    padding: 15px 0px 0px 10px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    &:focus {
        background: rgba(255, 255, 255, 0.2);
    }
`;

const AnnouncementWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px red;
        background: rgba(255, 255, 255, 0.2);
    }
`;

const widthAuto = "auto";
const width75 = "75%";
const AnnouncementBubble = styled.div<{ edit: boolean }>`
    display: inline-block;
    background: rgba(255, 255, 255, 0.08);
    color: rgba(238, 238, 238, 0.9);
    padding: 10px 10px 0px 10px;
    box-shadow: rgb(0 0 0 / 5%) 0px 1px 2px 0px;
    width: ${(props) => (props.edit ? width75 : widthAuto)};
    border-radius: 3px;

    &:hover {
        background: rgba(255, 255, 255, 0.2);
    }
`;

const AnnounceTextField = styled(TextField)`
    width: 100%;

    .MuiFormLabel-root {
        color: rgba(238, 238, 238, 0.9) !important;
    }
    input {
        width: 100%;
        color: rgba(238, 238, 238, 0.9);
        font-size: 12px;
    }
`;

const TimeSaveContainer = styled(Grid)``;
const TextTime = styled(Typography)`
    text-align: right;
    opacity: 0.8;
    padding: 5px 0px 0px 0px;
    color: rgba(238, 238, 238, 0.9);
    font-size: 10px !important;
`;

const TextSave = styled(Typography)`
    text-align: left;
    opacity: 0.8;
    padding: 10px 0px 0px 0px;
    font-size: 10px !important;
`;

const AnnouncementText = styled(Typography)`
    padding: 10px;
    font-size: 12px !important;
`;

type AnnounceTextProps = {
    item: Announcement;
    i: number;
    textRef: any;
};

const AnnounceText = ({ item, i, textRef }: AnnounceTextProps) => {
    const dispatch = useDispatch();
    const announcements = useSelector(
        (state: RootStateOrAny) => state.announcements.announcements
    );

    const handleChange = (
        event: FocusEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
    ) => {
        dispatch(cancelEditAnnouncement(i, announcements));
    };

    if (item.edit) {
        return (
            <AnnounceTextField
                label="Announcement"
                defaultValue={item.announce}
                margin="dense"
                fullWidth={true}
                onBlur={handleChange}
                onChange={(e) =>
                    dispatch(
                        updateAnnouncement(
                            e.currentTarget.value,
                            i,
                            announcements
                        )
                    )
                }
            />
        );
    } else {
        return (
            <AnnouncementText ref={textRef}>{item.announce}</AnnouncementText>
        );
    }
};

type AnnounceHistoryPropsType = {
    data: Announcement[];

    textRef:
        | ((instance: HTMLDivElement | null) => void)
        | RefObject<HTMLDivElement>;
    anchorEl: HTMLAnchorElement;
    showButton: (e: MouseEvent<HTMLElement>, i: number) => void;
    hideButton: (e: MouseEvent<HTMLElement>, i: number) => void;
    menuOpen: MouseEventHandler<HTMLButtonElement>;
    menuClose: (
        event: MouseEvent<Document, MouseEvent<Element, MouseEvent>>
    ) => void;
    handleEdit: (e: MouseEvent<HTMLElement>, i: number) => void;
    handleDelete: (e: MouseEvent<HTMLElement>, i: number) => void;
    open: boolean;
};

const AnnounceHistory = ({
    data,
    textRef,
    anchorEl,
    showButton,
    hideButton,
    menuOpen,
    menuClose,
    handleEdit,
    handleDelete,
    open,
}: AnnounceHistoryPropsType) => {
    const chatRef: any = useRef();

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollIntoView();
        }
    }, [data.length]);

    return (
        <AnnounceContainer>
            {data.map((item: Announcement, i: number) => {
                return (
                    <AnnouncementMessage
                        ref={chatRef}
                        key={i}
                        onMouseEnter={(e: MouseEvent<HTMLElement>) =>
                            showButton(e, i)
                        }
                        onMouseLeave={(e: MouseEvent<HTMLElement>) =>
                            hideButton(e, i)
                        }
                    >
                        <AnnouncementWrapper>
                            <AnnouncementBubble edit={item.edit}>
                                <Menu
                                    menuOpen={menuOpen}
                                    i={i}
                                    item={item}
                                    anchorEl={anchorEl}
                                    open={open}
                                    menuClose={menuClose}
                                    handleEdit={handleEdit}
                                    handleDelete={handleDelete}
                                />

                                <AnnounceText
                                    item={item}
                                    i={i}
                                    textRef={textRef}
                                />
                                <TimeSaveContainer>
                                    {item.edit ? (
                                        <TextSave>unfocus to save</TextSave>
                                    ) : (
                                        <Fragment />
                                    )}
                                </TimeSaveContainer>
                            </AnnouncementBubble>
                        </AnnouncementWrapper>
                        <TextTime>{moment().fromNow()}</TextTime>
                    </AnnouncementMessage>
                );
            })}
        </AnnounceContainer>
    );
};

export default AnnounceHistory;
