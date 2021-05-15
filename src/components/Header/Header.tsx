import { AppBar, Grid } from "@material-ui/core";
import styled from "styled-components/macro";
import Employee from "./Employee";
import Logo from "./Logo";
import Search from "./Search";

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
                <Search />
                <Logo />
                <Employee />
            </HeaderWrapper>
        </HeaderBar>
    );
};

export default Header;
