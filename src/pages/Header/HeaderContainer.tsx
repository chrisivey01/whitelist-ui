import { AppBar, Grid } from "@material-ui/core";
import styled from "styled-components/macro";
import Employee from "./components/Employee";
import Logo from "./components/Logo";
import Search from "./components/Search";

const HeaderBar = styled(AppBar)`
    position: static;
    padding: 3;
    &.MuiAppBar-positionFixed {
        position: inherit;
    }
`;

const HeaderWrapper = styled(Grid)`
    height: 50px;
    background-color: #005cb9;
    justify-content: space-between;
`;

const Header = () => {
    return (
        <HeaderBar>
            <HeaderWrapper container>
                <Logo />
                <Search />
                <Employee />
            </HeaderWrapper>
        </HeaderBar>
    );
};

export default Header;
