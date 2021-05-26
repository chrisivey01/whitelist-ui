import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { applicationList } from "../../utils/applicationList";
import Icon from "./components/Icon";

const Container = styled(Grid)`
    justify-content: space-between;
    color: #fff;
`;

const IconListContainer = () => {
    return (
        <Container wrap={"wrap"} container spacing={2}>
            {applicationList.map((image: any, i:number) => {
                return <Icon image={image} key={i}/>;
            })}
        </Container>
    );
};

export default IconListContainer;
