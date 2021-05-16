import { Grid, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";

const Wrapper = styled(Grid)`
    position: relative;
    display: flex;
    height: 100%;
    justify-content: flex-start;
`;

const SearchWrapper = styled.div`
    position: relative;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.15);
    &:hover {
        background-color: rgba(0, 0, 0, 0.25);
    }
    margin: 8px;
`;

const SearchTextbox = styled.div`
    padding-left: 2px;
    padding-top: 7px;
    height: 100%;
    position: absolute;
    pointer-events: none;
    display: flex;
    align-items: left;
    justify-content: left;
`;

const SearchInput = styled(InputBase)`
    padding: 5px 0px 0px 30px;
    width: 100%;

    input {
        color: #fff;
    }
`;

const Search = () => {
    return (
        <Wrapper item xs={7}>
            <SearchWrapper>
                <SearchTextbox>
                    <SearchIcon />
                </SearchTextbox>
                <SearchInput placeholder="Search…" />
            </SearchWrapper>
        </Wrapper>
    );
};

export default Search;
