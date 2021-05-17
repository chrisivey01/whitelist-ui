import { Card, CardContent, CardHeader, Grid } from "@material-ui/core";
import { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import boss from "../../assets/json/user-boss.json";
import { getUserInfo } from "../../redux/welcome/welcome.actions";
import IconListContainer from "../IconList/IconListContainer";
import Message from "./components/Message";

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
    min-width: 500px;
    min-height: 500px;
    padding: 30px;
    background-color: rgb(35, 48, 68) !important;
`;

const Header = styled(CardHeader)`
    color: #fff;
`;

const Body = styled(CardContent)``;

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
                    {/* <Body>{}</Body> */}
                </Content>
                <Content elevation={3}>
                    <Header title={"Applications"} />
                    <IconListContainer />
                </Content>
            </ContentContainer>
        </Container>
    );
};

export default WelcomeContainer;
