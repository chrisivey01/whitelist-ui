import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Grid,
    Typography,
} from "@material-ui/core";
import styled from "styled-components";
import { Announcement } from "../../../models/Announcement";
import LatestAnnounceImage from "./LatestAnnounceImage";
import UpvoteDownvote from "./UpvoteDownvote";

const Container = styled(Card)`
    color: #fff !important;
    flex-wrap: unset !important;
    background: rgb(27, 38, 53) !important;
    overflow: unset !important;
`;

const ContentContainer = styled(CardContent)`
    display: flex;
    color: #fff !important;
    height: 100%;
    max-height: 300px;
    overflow: auto;
    flex-wrap: unset !important;
    background: rgb(27, 38, 53) !important;
`;
const Wrapper = styled(Grid)``;

const AnnouncementWrapper = styled(Grid)`
    margin-left: 10px;
`;

const UpvoteDownvoteContainer = styled(Grid)`
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
`;

const Header = styled(CardHeader)``;

type AnnouncementTypeProps = {
    announcement: Announcement;
    upvoteHandler: () => void;
    downvoteHandler: () => void;
};

const Announce = ({ announcement, upvoteHandler, downvoteHandler }: AnnouncementTypeProps) => {
    return (
        <Container>
            <Header title={"Latest"} />
            <ContentContainer>
                <Box>
                    <LatestAnnounceImage />
                </Box>
                <AnnouncementWrapper>
                    <Typography>{announcement.text}</Typography>
                </AnnouncementWrapper>
            </ContentContainer>
            <UpvoteDownvoteContainer>
                <UpvoteDownvote
                    thumbsUp={announcement.thumbsUp.count}
                    thumbsDown={announcement.thumbsDown.count}
                    upvoteHandler={upvoteHandler}
                    downvoteHandler={downvoteHandler}
                />
            </UpvoteDownvoteContainer>
        </Container>
    );
};

export default Announce;
