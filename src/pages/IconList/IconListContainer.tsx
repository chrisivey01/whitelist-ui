import { Box, CardContent, Grid } from "@material-ui/core";
import styled from "styled-components";
import { applicationList } from "../../utils/applicationList";
import Icon from "./components/Icon";

const Container = styled(CardContent)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    color: #fff;
    max-width: 500px;
`;


const IconListContainer = () => {
    return (
        <Container>
            {applicationList.map((image: any) => {
                return <Icon image={image} />;
            })}
        </Container>
    );
};

export default IconListContainer;
