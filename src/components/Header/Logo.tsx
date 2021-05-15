import { Grid } from "@material-ui/core";
import styled from "styled-components";
import WeerkDay from "../../assets/images/weerkday.png";

const LogoContainer = styled(Grid)`
    position: relative;
    display: flex;
    height: 100%;
    justify-content: center;
`;

const Logo = () => {
    return (
        <LogoContainer item xs={3}>
            <img
                style={{ height: "100%", objectFit: "contain" }}
                src={WeerkDay}
                alt="Weerk Day"
            ></img>
        </LogoContainer>
    );
};

export default Logo;
