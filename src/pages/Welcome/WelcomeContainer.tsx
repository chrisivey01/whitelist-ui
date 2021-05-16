import { Box, Card, CardHeader, Grid, Paper } from "@material-ui/core";
import { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getUserInfo } from "../../redux/welcome/welcome.actions";
import Message from "./components/Message";
import boss from "../../assets/json/user-boss.json";

const Container = styled(Grid)`
    position: relative;
    justify-content: center;
`;

const Wrapper = styled(Grid)`
    display: flex;
    justify-content: center;
    width: 75%;
    height: fit-content;
`;

const ContentContainer = styled(Grid)`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    padding: 30px;
`;

const Content = styled(Card)`
    width: 500px;
    height: 500px;
    padding: 30px;
    background-color: rgb(35, 48, 68) !important;
`;

const Header = styled(CardHeader)`
    color: #fff;
`;

const WelcomeContainer = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: RootStateOrAny) => state.welcome.user);

    useEffect(() => {
        dispatch(getUserInfo(boss));
    }, [dispatch]);

    return (
        <Container container>
            <Wrapper item>
                <Message user={user} />
            </Wrapper>
            <ContentContainer>
                <Content elevation={3}>
                    <Header title={"Announcements"} />
                </Content>
                <Content elevation={3}>
                    <Header title={"Applications"} />
                </Content>
            </ContentContainer>
        </Container>
    );
};

export default WelcomeContainer;
