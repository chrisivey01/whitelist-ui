import { Badge, Grid } from "@material-ui/core";
import styled from "styled-components";
import ThumbsDown from "../../../assets/images/thumbs_down.svg";
import ThumbsUp from "../../../assets/images/thumbs_up.svg";

const Container = styled(Grid)`
    display: flex;
`;

const Wrapper = styled(Badge)`
    width: 20px;
    height: 20px;
    .MuiBadge-badge {
        justify-content: unset;
        font-size: 11px;
        min-width: unset;
        height: 15px;
    }
    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }
`;

const defaultThumbsUp = {
    color: "secondary" as "secondary",
    children: <img src={ThumbsUp} alt={"thumbs up"} />,
};

const defaultThumbsDown = {
    color: "secondary" as "secondary",
    children: <img src={ThumbsDown} alt={"thumbs down"} />,
};

type UpvoteDownvotePropsType = {
    thumbsUp: number;
    thumbsDown: number;
    upvoteHandler: () => void;
    downvoteHandler: () => void;
};

const UpvoteDownvote = ({ thumbsUp, thumbsDown, upvoteHandler, downvoteHandler }: UpvoteDownvotePropsType) => {
    return (
        <Container>
            <Wrapper badgeContent={thumbsUp} {...defaultThumbsUp} onClick={upvoteHandler} />
            <Wrapper badgeContent={thumbsDown} {...defaultThumbsDown} onClick={downvoteHandler} />
        </Container>
    );
};

export default UpvoteDownvote;
