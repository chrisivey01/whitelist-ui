import { Card, Paper, Typography } from "@material-ui/core";
import styled from "styled-components";

const Wrapper = styled(Paper)`
    &.MuiPaper-root {
        background: rgb(35, 48, 68);
        color: #fff;
        padding: 10px;
        width: 75%;
        margin: 10px;
        height: 22px;
    }
`;

type MessagePropType = {
    user: any;
};

const Message = ({ user }: MessagePropType) => {
    return (
        <Wrapper>
            <Typography>Welcome, {user.name}</Typography>
        </Wrapper>
    );
};

export default Message;
